# ajeperez.github.io — Alexandre Perez

Personal showcase website (static HTML/CSS/JS, no build step, no dependencies).

## Pages
- `index.html` — Home / profile (with video, key figures)
- `experience.html` — CV: professional experience, education, capabilities
- `portfolio.html` — Pneumoscope (concept→production timeline + video) and 3Dfunlab
- `press.html` — Patent, scientific publications and press coverage
- `assets/` — `css/`, `js/`, `img/`, `docs/` (PDFs: CV, patent, publications, press, retrospective)

## Publish on GitHub Pages
1. Make sure your repository is named exactly **`ajeperez.github.io`**.
2. Upload **the contents of this folder** to the repository **root** (so `index.html` is at the top level, not inside a sub-folder).
   - Web: GitHub repo → *Add file* → *Upload files* → drag everything in → *Commit*.
   - Git: `git add . && git commit -m "Launch site" && git push`.
3. In the repo: **Settings → Pages** → Source = *Deploy from a branch*, Branch = `main` (root). Save.
4. Your site goes live at **https://ajeperez.github.io** within ~1 minute.

`.nojekyll` is included so GitHub serves the files as-is.

## Before you go live — quick edits (1 minute)
In all four `.html` files, replace the two contact placeholders in the footer (look for `TODO`):
- `your.email@example.com` → your real email
- `https://www.linkedin.com/` → your LinkedIn profile URL

To swap the CV, replace `assets/docs/AlexandrePerez_CV.pdf` (keep the same filename).

## Notes
- The video is embedded from YouTube (loads only on click, for speed/privacy).
- Fonts load from Google Fonts (Fraunces, Hanken Grotesk, JetBrains Mono).
- Everything is responsive and works without JavaScript (JS only adds reveal animations, the mobile menu and the click-to-play video).
