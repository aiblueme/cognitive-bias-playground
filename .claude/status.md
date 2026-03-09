---
project: logic
url: https://logic.shellnode.lol
vps: ghost
port: 3000
stack: Next.js, node:20-alpine, SWAG
standards_version: "2.0"
security: done
ux_ui: done
repo_cleanup: done
readme: done
last_session: "2026-03-10"
has_blockers: false
---

# Project Status — logic

## Last Session
Date: 2026-03-10
Agent: Claude Code

### Completed
- UX/UI audit completed
- [P2] Added MotionProvider component wrapping framer-motion MotionConfig with reducedMotion="user" — all animations now respect OS prefers-reduced-motion setting (WCAG 2.3.3)
- [P3] Added og:url to OpenGraph metadata in layout.tsx
- [P2] Added README.md
- Pushed all changes to GitHub

### Incomplete
- None

### Blocked — Needs Matt
- None

## Backlog
- (none)

## Done
- [x] .dockerignore created — 2026-03-09
- [x] docker-compose.yml added with SWAG labels — 2026-03-09
- [x] MotionProvider (prefers-reduced-motion) — 2026-03-10 — commit 5353b3c
- [x] og:url added — 2026-03-10 — commit 5353b3c
- [x] README.md added — 2026-03-10 — commit 5353b3c

## Decisions Log
- "node:20-alpine is correct base — Next.js app." (2026-03-09)
- "Dockerfile is already solid: multi-stage, non-root user, standalone output." (2026-03-09)
- ".gitignore covers .env and .env*.local — minor gap: .env.* pattern. Not blocking." (2026-03-09)
- "framer-motion v11 does not automatically disable animations for prefers-reduced-motion. Fixed via MotionProvider with reducedMotion='user' at the root layout level." (2026-03-10)
- "README.md deployment section uses port 3001 as a placeholder — actual port needs to be confirmed from running container config." (2026-03-10)

## Project Notes
- Next.js Cognitive Bias Playground — remote repo is cognitive-bias-playground
- Local dir is 'logic' (different from remote repo name)
- scripts/ dir contains dev utilities — excluded from docker image
- Uses framer-motion v11 for animations — MotionProvider now wraps all animations
