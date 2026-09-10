# Deasy Laboratory for Cancer Modeling — website

A static, multi-page site (no framework, no build step) for the Deasy Lab,
designed to be served from **GitHub Pages** at **https://cerrver.github.io/deasylab**.

## Pages

- `index.html` — home: mission, p53 hero video, research programs, featured work, recent highlights, team teaser, recruitment CTA
- `research.html` — the four research programs, methods & tools, milestones, funding
- `team.html` — principal investigator, faculty & scientists, trainees, collaborators
- `publications.html` — publications library (reverse-chronological, clickable, searchable)
- `mentee-news.html` — Mentee News feed (high-profile papers / media / awards from current and former trainees, with each person's current institution) + the mentee roster
- `join.html` — recruitment, collaboration, teaching, contact

## Publications: how the list is built

The list on `publications.html` is generated from the lab's **Google Drive publications
folder** (`Deasy publications`, id `1DhHKMaoxOYPA0zeTVsLZF6NENsqO9Pju`). Each PDF in that
folder becomes one entry (title, authors, venue, year, type, DOI when present) and its
title links to the PDF in Drive.

- Canonical data: `data/papers.json`
- Local-view mirror: `data/papers.js` (lets the page work when opened from disk); regenerate
  it after any manual edit with `python3 gen-papers-js.py`.
- **For the Drive links to open for the public, the folder must be shared "Anyone with the
  link → Viewer."**

### Weekly auto-update
A scheduled task re-indexes the Drive folder every **Monday** and rewrites `data/papers.json`
and `data/papers.js`, then notifies you. Your job each Monday is only to **review and push**
(see below). New PDFs added to the Drive folder appear on the site after the next update.

## Mentee News: how the feed is built

- Roster: `data/mentees.json` — one record per current/former mentee (from J. Deasy's CV, Nov 2025).
  `institution` / `position` are the **current, verified** values shown on the site; `cvPosition` is
  what the CV said; `institutionSource` links the evidence; `verify: true` shows a "to confirm" badge;
  `include: false` hides a person from the site (used for people whose current institution could not be established).
- Feed: `data/mentee-news.json` — one record per item (`type` = paper | media | award; `url` required;
  `summary` = 2–3 plain-language sentences; `flag` shows a "verify" badge).
- Local-view mirrors `data/mentees.js` and `data/mentee-news.js`: regenerate after any edit with
  `python3 gen-mentee-js.py`.
- The home page shows the three newest items (`#menteeNewsLatest`) and a banner linking to the feed.

### Weekly auto-update
A second scheduled task runs every **Monday** (after the publications task): for each mentee in the
roster it searches for new items in the last 8 days — papers in top journals (Nature / Science / Cell /
Lancet / NEJM / JAMA families and leading field journals), press coverage, awards, grants,
appointments — and re-checks each person's current institution. Verified additions are appended to
`data/mentee-news.json`, roster changes are written to `data/mentees.json`, the `.js` mirrors are
regenerated, and you get a notification listing what changed. As with publications: **review, then push**.
To remove an item, delete its record from `data/mentee-news.json` (the task will not re-add a URL it
has already seen — seen URLs are listed in `data/mentee-news-seen.json`).

## Deploy to GitHub Pages (one time)

This folder is already a git repository with an initial commit.

1. On github.com, sign in as **cerrver** and create a new **empty** repository named
   **`deasylab`** (Public; do not add a README/.gitignore/license).
2. In this folder on your computer, run:

   ```bash
   git remote add origin https://github.com/cerrver/deasylab.git
   git branch -M main
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`, **Save**.
4. After ~1 minute the site is live at **https://cerrver.github.io/deasylab/**.

(If your GitHub username is not literally `cerrver`, substitute it in the remote URL.)

## The weekly push (each Monday, after the auto-update)

```bash
cd <this folder>
git add -A
git commit -m "Weekly publications + mentee news update"
git push
```

GitHub Pages redeploys automatically within a minute.

## Editing content

- **Team photos:** drop images in `assets/img/` and add `data-img="assets/img/name.jpg"` to the
  matching `.person__avatar` in `team.html`.
- **Re-brand colors:** edit the tokens in `:root` at the top of `assets/css/styles.css`.
- **Placeholders to finish:** search for `REPLACE-`, `to confirm`, and the dashed "note" boxes
  (lab email/address/links, team roster, tool definitions, proton-program specifics).

## The p53 hero video

Adapted from Tran AP, Tralie CJ, Reyes J, et al. "Long-term p21 and p53 dynamics regulate the
frequency of mitosis events and cell cycle arrest following radiation damage." *Cell Death &
Differentiation* 30, 660–672 (2023). https://doi.org/10.1038/s41418-022-01069-x — confirm reuse
permission before publishing.
