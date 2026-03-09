---
project: logic
url: https://logic.shellnode.lol
vps: ghost
port: 3000
stack: Next.js, node:20-alpine, SWAG
standards_version: "2.0"
security: done
ux_ui: not_started
repo_cleanup: done
readme: not_started
last_session: "2026-03-09"
has_blockers: false
---

# Project Status — logic

## Last Session
Date: 2026-03-09
Agent: Claude Code

### Completed
- Created .dockerignore
- Created docker-compose.yml with SWAG labels

### Incomplete
- No README.md — skipped (not blocking)
- UX/UI audit not started

### Blocked — Needs Matt
- None

## Backlog
- [P2] Add README.md
- [P2] UX/UI audit

## Done
- [x] .dockerignore created — 2026-03-09
- [x] docker-compose.yml added with SWAG labels — 2026-03-09

## Decisions Log
- "node:20-alpine is correct base — Next.js app." (2026-03-09)
- "Dockerfile is already solid: multi-stage, non-root user, standalone output." (2026-03-09)
- ".gitignore covers .env and .env*.local — minor gap: .env.* pattern. Not blocking." (2026-03-09)

## Project Notes
- Next.js Cognitive Bias Playground — remote repo is cognitive-bias-playground
- Local dir is 'logic' (different from remote repo name)
- scripts/ dir contains dev utilities — excluded from docker image
