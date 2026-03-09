# The Cognitive Bias Playground

20 cognitive shortcuts that systematically warp your reality. Understand the mechanism. Acquire the fix.

## Live

https://logic.shellnode.lol

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS + framer-motion
- node:20-alpine container
- Ghost VPS / Docker
- SSL via SWAG + Cloudflare DNS

## Run Locally

    npm install
    npm run dev

Or via Docker:

    docker build -t logic .
    docker run -p 3000:3000 logic

## Deploy

    docker context use ghost
    docker build -t logic .
    docker run -d --name logic \
      --network=swag_default \
      -p 3001:3000 \
      --restart unless-stopped \
      logic
