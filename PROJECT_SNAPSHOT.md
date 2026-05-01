# Project Snapshot - helloiamam

Date: 2026-05-01

## Vision
Single-page placeholder site for `helloiam.am` with animated emoji branding.

## Current Live Endpoints
- GitHub repo: `https://github.com/rybushkin/helloiamam`
- GitHub Pages URL: `https://rybushkin.github.io/helloiamam/`
- Custom domain setup: CNAME flow started (remote contains `Create CNAME` commit).

## Tech Stack
- Static frontend: `index.html`, `styles.css`, `script.js`
- Assets: `emoji/`, `images/`
- Hosting: GitHub Pages (branch `main`, root `/`)

## What Was Implemented
1. Repository bootstrap and publishing
   - Initialized git repository
   - Created GitHub repository and pushed `main`
   - Renamed repository from `gen-pencil` to `helloiamam`
2. Performance and interaction updates
   - Added emoji preload/cache logic in `script.js`
   - Kept pointer-driven emoji switching behavior
3. Mobile layout fixes
   - Adjusted centering rules in `styles.css`
   - Reduced mobile lockup size and emoji block size
4. Media generation (local only, not committed by request)
   - `images/emoji-loop-square.gif` (512x512, looped)
   - `images/emoji-loop-square.mp4` (512x512, H.264)

## Important File Map
- Entry page: `index.html`
- Styles: `styles.css`
- Client logic: `script.js`
- Emoji source PNGs: `emoji/`
- Local generated media: `images/emoji-loop-square.gif`, `images/emoji-loop-square.mp4`

## Git Status Notes
- Media files are intentionally left untracked per request:
  - `images/emoji-loop-square.gif`
  - `images/emoji-loop-square.mp4`

## Constraints and Decisions
- Keep project lightweight (static hosting, no framework)
- Do not commit generated media unless explicitly requested
- Mobile-first adjustments prioritized for on-device verification

## Next Actions
- Verify final custom domain + HTTPS certificate status
- If needed, add a short `README.md` with run/deploy notes
- Decide whether generated media should be:
  - ignored via `.gitignore`, or
  - versioned in a separate assets branch/release
