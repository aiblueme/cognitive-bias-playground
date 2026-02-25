#!/usr/bin/env python3
"""
Asset scraper for The Cognitive Bias Playground.
Fetches 3 abstract/artistic images per bias using icrawler (Bing + Baidu).
Converts to .webp (<1MB), creates 400x400 thumbnails via Pillow.

Usage:
    pip install icrawler Pillow
    python scripts/scrape_assets.py
"""

import os
import time
import random
import logging
from pathlib import Path

from icrawler.builtin import BaiduImageCrawler, BingImageCrawler
from PIL import Image

# Suppress icrawler's verbose logging
logging.getLogger("icrawler").setLevel(logging.WARNING)

# ─── Constants ────────────────────────────────────────────────────────────────

BIASES = [
    "confirmation-bias",
    "sunk-cost-fallacy",
    "dunning-kruger",
    "anchoring-bias",
    "availability-heuristic",
    "framing-effect",
    "ingroup-bias",
    "fundamental-attribution-error",
    "halo-effect",
    "self-serving-bias",
    "hindsight-bias",
    "optimism-bias",
    "pessimism-bias",
    "just-world-hypothesis",
    "backfire-effect",
    "barnum-effect",
    "continuity-bias",
    "declensionism",
    "ikea-effect",
    "zeigarnik-effect",
]

# Rotate keywords across biases to get visual variety
KEYWORDS = [
    "abstract geometric glitch art",
    "optical illusion pattern geometric",
    "distorted perspective art digital",
    "abstract expressionism bold shapes",
    "constructivist graphic design art",
]

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
]

BASE_DIR = Path(__file__).parent.parent / "public" / "assets"
THUMB_DIR = BASE_DIR / "thumbs"
MAX_SIZE_MB = 0.95  # Target just under 1MB
THUMB_SIZE = 400

# ─── Helpers ──────────────────────────────────────────────────────────────────

def ensure_dirs():
    BASE_DIR.mkdir(parents=True, exist_ok=True)
    THUMB_DIR.mkdir(parents=True, exist_ok=True)


def compress_to_webp(src_path: Path, dest_path: Path):
    """Convert any image to .webp, compressing until under MAX_SIZE_MB."""
    try:
        with Image.open(src_path) as img:
            # Normalise color mode
            if img.mode == "P":
                img = img.convert("RGBA")
            if img.mode == "RGBA":
                bg = Image.new("RGB", img.size, (26, 26, 26))  # Deep Carbon bg
                bg.paste(img, mask=img.split()[3])
                img = bg
            elif img.mode != "RGB":
                img = img.convert("RGB")

            # Progressively lower quality until within size budget
            for quality in [88, 75, 62, 50, 38]:
                img.save(dest_path, "webp", quality=quality, method=4)
                if dest_path.stat().st_size < MAX_SIZE_MB * 1024 * 1024:
                    return True
            return True  # Accept whatever we got at lowest quality
    except Exception as exc:
        print(f"    ✗ compress_to_webp failed for {src_path.name}: {exc}")
        return False


def create_thumbnail(src_path: Path, thumb_path: Path):
    """Create a square 400×400 thumbnail, center-cropped."""
    try:
        with Image.open(src_path) as img:
            if img.mode == "P":
                img = img.convert("RGBA")
            if img.mode == "RGBA":
                bg = Image.new("RGB", img.size, (26, 26, 26))
                bg.paste(img, mask=img.split()[3])
                img = bg
            elif img.mode != "RGB":
                img = img.convert("RGB")

            # Resize so smallest dimension == THUMB_SIZE, then center-crop
            w, h = img.size
            scale = THUMB_SIZE / min(w, h)
            new_w, new_h = int(w * scale), int(h * scale)
            img = img.resize((new_w, new_h), Image.LANCZOS)

            left = (new_w - THUMB_SIZE) // 2
            top = (new_h - THUMB_SIZE) // 2
            img = img.crop((left, top, left + THUMB_SIZE, top + THUMB_SIZE))
            img.save(thumb_path, "webp", quality=80)
            return True
    except Exception as exc:
        print(f"    ✗ create_thumbnail failed for {src_path.name}: {exc}")
        return False


def collect_raws(bias_dir: Path):
    exts = ("*.jpg", "*.jpeg", "*.png", "*.bmp", "*.gif")
    return [f for ext in exts for f in bias_dir.glob(ext)]


def process_images(bias_dir: Path, bias_slug: str):
    """Convert downloaded raws to .webp and generate thumbnails."""
    raws = collect_raws(bias_dir)
    processed = 0
    for i, raw in enumerate(raws):
        webp_out = bias_dir / f"{bias_slug}_{i+1:02d}.webp"
        thumb_out = THUMB_DIR / f"{bias_slug}_{i+1:02d}.webp"
        if compress_to_webp(raw, webp_out):
            if create_thumbnail(webp_out, thumb_out):
                raw.unlink(missing_ok=True)
                size_kb = webp_out.stat().st_size // 1024
                print(f"    ✓ {webp_out.name} ({size_kb}KB) → thumb/{thumb_out.name}")
                processed += 1
            else:
                raw.unlink(missing_ok=True)
    return processed


# ─── Crawlers ─────────────────────────────────────────────────────────────────

def crawl_bing(keyword: str, bias_dir: Path, count: int) -> int:
    try:
        crawler = BingImageCrawler(
            storage={"root_dir": str(bias_dir)},
            feeder_threads=1,
            parser_threads=1,
            downloader_threads=2,
        )
        crawler.crawl(
            keyword=keyword,
            max_num=count,
            file_idx_offset="auto",
            filters={"size": "medium", "type": "photo"},
        )
        return len(collect_raws(bias_dir))
    except Exception as exc:
        print(f"    [Bing] Error: {exc}")
        return 0


def crawl_baidu(keyword: str, bias_dir: Path, count: int) -> int:
    try:
        crawler = BaiduImageCrawler(
            storage={"root_dir": str(bias_dir)},
            feeder_threads=1,
            parser_threads=1,
            downloader_threads=2,
        )
        crawler.crawl(
            keyword=keyword,
            max_num=count,
            file_idx_offset="auto",
        )
        return len(collect_raws(bias_dir))
    except Exception as exc:
        print(f"    [Baidu] Error: {exc}")
        return 0


# ─── Main per-bias pipeline ───────────────────────────────────────────────────

def fetch_bias(bias_slug: str, index: int):
    bias_dir = BASE_DIR / bias_slug
    bias_dir.mkdir(parents=True, exist_ok=True)

    keyword = KEYWORDS[index % len(KEYWORDS)]
    print(f"  Keyword: '{keyword}'")

    # Phase 1: Bing
    print(f"  [Bing] Fetching...")
    delay = random.uniform(1.0, 2.5)
    fetched = crawl_bing(keyword, bias_dir, 3)
    time.sleep(delay)

    # Phase 2: Baidu fallback if Bing didn't get enough
    if fetched < 2:
        print(f"  [Baidu] Fallback (have {fetched}/3)...")
        delay = random.uniform(1.5, 3.0)
        fetched = crawl_baidu(keyword, bias_dir, 3 - fetched)
        time.sleep(delay)

    if fetched == 0:
        print(f"  ⚠ No images fetched for {bias_slug}, skipping processing.")
        return

    print(f"  Processing {fetched} raw image(s)...")
    done = process_images(bias_dir, bias_slug)
    print(f"  → {done} image(s) ready.\n")


def main():
    print("╔══════════════════════════════════════════════════════════════╗")
    print("║   Cognitive Bias Playground — Asset Scraper                 ║")
    print("╚══════════════════════════════════════════════════════════════╝\n")

    ensure_dirs()

    total = len(BIASES)
    for i, bias in enumerate(BIASES):
        print(f"[{i+1:02d}/{total}] {bias}")
        fetch_bias(bias, i)
        # Inter-bias cooldown
        cooldown = random.uniform(2.0, 4.5)
        print(f"  Cooling down {cooldown:.1f}s...\n")
        time.sleep(cooldown)

    print("╔══════════════════════════════════════════════════════════════╗")
    print("║   Done! Assets in public/assets/, thumbs in public/assets/thumbs/ ║")
    print("╚══════════════════════════════════════════════════════════════╝")


if __name__ == "__main__":
    main()
