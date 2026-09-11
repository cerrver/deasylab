# Deasy Lab website — maintainer handoff

**Site:** Deasy Laboratory for Cancer Modeling · https://cerrver.github.io/deasylab/
**Repo:** https://github.com/cerrver/deasylab (branch `main`, GitHub Pages "deploy from branch", root folder)
**Local working copy:** `…\Documents\Claude\Projects\Web site design and deployment\deasylab\` on Joseph's Windows PC
**Owner / final say on content:** Joseph O. Deasy (deasyj@mskcc.org)
**Handoff document last updated:** 2026-09-11 (at commit `1de86f8`)

This document is the single place a new maintainer (a person or another Claude Project) needs to
read to take over the site. It is kept current by a weekly scheduled task (see §9) and should be
revised by hand whenever a session changes the home page or site structure. `README.md` is the
short public-facing version; this file is the operational one.

---

## 1. What the site is

A static, multi-page HTML/CSS/JS site with **no framework and no build step**. Every page is a
complete HTML file that loads one shared stylesheet (`assets/css/styles.css`) and one shared script
(`assets/js/main.js`). Two pages (Publications, Mentee News) are data-driven: they render lists from
JSON files in `data/`, each of which has a `.js` mirror so the page also works when opened from disk
(`file://`), where browsers block `fetch()` of local JSON.

Fonts: Inter (UI) and Newsreader (display/serif) from Google Fonts. Palette tokens are in `:root` at
the top of `styles.css` — indigo `#3730a3` family (`--blue-*`), cyan `#06b6d4` accent (`--accent*`),
tints, radii, shadows. Brand assets: `assets/img/logo.png` (full logo, explorer with binoculars),
`logo-mark.png` (nav mark), `favicon.png`, `lab-team.jpg`.

## 2. Page map

| File | Purpose | Notable section ids |
|---|---|---|
| `index.html` | Home | `#home` hero (p53 video, stats, "Mentee news →" button), `#mission`, `#mentee-news` (banner + 3 newest items via `#menteeNewsLatest`), `#research` (four programs), `#tools` **Tools for Cancer Research** (six `.toolcard`s), `#featured` (npj Breast Cancer discovery), `#recent` highlights, `#team` teaser, recruitment CTA |
| `research.html` | Research programs | `#echo`, `#digital-twins`, `#math-oncology`, `#proton`, `#tools` (short lead → `index.html#tools`), `#robin` (NIH ROBIN consortium + didactic talk lists), `#milestones`, `#funding` (teaser → `team.html#funding`) |
| `team.html` | People + funding | `#pi` (PI card with six titles, email, MSK Medical Physics link, ORCID), `#faculty` **Key Faculty Collaborators**, `#fellows` Postdoctoral Fellows, `#funding` (Active / Completed grants), `#disclosure` |
| `publications.html` | Searchable publications library | rendered by `assets/js/publications.js` from `data/papers.js`/`.json` |
| `mentee-news.html` | Mentee News feed + roster | `#feed`, `#mentees`; rendered by `assets/js/mentee-news.js` |
| `disclosures.html` | Financial disclosure statement | carries a "Last updated: <date>" line — change it when the statement changes |
| `join.html` | Recruiting, collaboration, teaching, contact | `#join`, `#collaborate`, `#teaching`, `#contact` |

Every page has the same header nav (Home · Research · Team · Publications · Mentee News · Join /
Contact, plus a mobile menu `#mobileMenu`) and the same footer (email, ORCID, GitHub (CERR),
Disclosures, MSK Department of Medical Physics link, "Back to top"). **When you add a page or nav
link, edit the header and footer in all seven HTML files** — there is no include mechanism.

## 3. Directory layout

```
deasylab/
├── index.html research.html team.html publications.html mentee-news.html disclosures.html join.html
├── README.md            short public readme (deploy + weekly push)
├── HANDOFF.md           this file
├── gen-papers-js.py     data/papers.json  -> data/papers.js
├── gen-mentee-js.py     data/mentees.json -> data/mentees.js ; data/mentee-news.json -> data/mentee-news.js
├── assets/
│   ├── css/styles.css   single stylesheet (sections marked with /* ---------- name ---------- */ comments)
│   ├── js/main.js       mobile nav, active-link highlight, stat counters, avatar images, footer year, reduced-motion video
│   ├── js/publications.js
│   ├── js/mentee-news.js
│   └── img/             logo.png, logo-mark.png, favicon.png, lab-team.jpg, tools/*.svg (six tool illustrations)
└── data/
    ├── papers.json / papers.js
    ├── mentees.json / mentees.js
    ├── mentee-news.json / mentee-news.js
    └── mentee-news-seen.json
```

## 4. Data files and schemas

### 4.1 `data/papers.json` — publications
Top level: `_comment`, `generated` (YYYY-MM-DD), `source` (`google-drive:<folderId>`), `papers[]`.
Each paper: `id` (kebab slug), `title`, `authors` (first 6 then "et al."), `venue`, `year` (int),
`type` (journal-article | review | commentary | preprint | patent | proceedings | other), `doi` or
null, `driveId`, `url` (`https://drive.google.com/file/d/<driveId>/view`), optional `flag`.
Source of truth is the Google Drive folder **"Deasy publications"**, id
`1DhHKMaoxOYPA0zeTVsLZF6NENsqO9Pju` (owner j.o.deasy@gmail.com). The folder must be shared
"Anyone with the link → Viewer" for public links to work, and shared to the connector account
used by the weekly task (jod.todo@gmail.com). The page sorts newest-first and offers search/filter.

### 4.2 `data/mentees.json` — roster
Top level: `_note`, `updated`, `mentees[]`. Each record: `id`, `name`, `degree`, `status`
(current | past), `role`, `period`, `project`, `cvPosition` (what the CV said), `institution`,
`position` (current, shown on site), `institutionSource` (URL evidence), `institutionVerified`
(YYYY-MM-DD), `verify` (true → "to confirm" badge), `include` (false → hidden), `nameNote`,
`researchNotes`. Roster was built from Joseph's CV (`DeasyJO_CV_Updated_6Nov2025.docx`, 48 people:
3 current, 45 former). Only `include:false` at handoff: Vanessa Clark (institution not established).
Never change `name`, `status`, `role`, `period`, `project`, `cvPosition` from an automated run.

### 4.3 `data/mentee-news.json` — feed
Top level: `updated`, `windowMonths` (24), `items[]`. Each item: `id`
(`<menteeId>-<slug>`), `menteeId`, `mentee`, `type` (paper | media | award), `title`, `date`
(YYYY-MM-DD or YYYY-MM), `venue`, `url` (required, must be a real resolved URL), `doi`,
`authorsShort`, `menteeRole`, `summary` (2–3 plain-language sentences), `added`, `flag`
(null or a short note → "verify" badge). Items are never deleted by automation; to remove one,
delete the record by hand. The page shows the last `windowMonths` newest-first, with a "Show
older items" button for the rest. The home page shows the three newest.

### 4.4 `data/mentee-news-seen.json` — memory of evaluated URLs
`{"seen":[{url, menteeId, status: added|excluded, reason, date}]}`. The weekly task never re-adds
a URL listed here, so deleting an item from the feed is permanent unless you also remove it here.

### 4.5 Regenerating the `.js` mirrors
After any manual edit of a JSON file run, from the repo root:
`python3 gen-mentee-js.py` (mentees + news) and/or `python3 gen-papers-js.py` (papers).
The mirrors are `window.MENTEES_DATA = …;`, `window.MENTEE_NEWS_DATA = …;`,
`window.PAPERS_DATA = …;`. Pages load the `.js` mirror first and use JSON over HTTP as the
canonical source, so a stale mirror shows stale data when opened from disk but not on GitHub Pages.

## 5. Content conventions and fixed wording

- **PI block (team.html#pi):** "Joseph O. Deasy, PhD, FAAPM" and the six titles exactly as
  supplied: Attending Physicist; Chair, Department of Medical Physics; Chief, Service for
  Predictive Informatics; Enid A. Haupt Endowed Chair for Medical Physics; Member, Memorial Sloan
  Kettering Cancer Center; Professor in Medical Physics, Weill Cornell Medicine. Email
  deasyj@mskcc.org.
- **Key Faculty Collaborators** (not "Faculty"): Jung Hun Oh, Corey Weistuch, Larry Norton,
  Rena Elkin, Harini Veeraraghavan, Jue Jiang, Jeho Jeong. Postdocs include Hadi Askarifirouzjaei
  (askarih@mskcc.org). Corey Weistuch, Kaiming Xu and Wei Zhao are **former** mentees in the roster.
- **Mentee News preamble** (hero, verbatim): "I have been privileged to work with many brilliant
  and hard-working mentees. Here we highlight papers and media notices from the last two years."
  signed "— Joseph O. Deasy".
- **Funding intro** (verbatim): "The Deasy Laboratory for Cancer Modeling has been supported by
  Varian/Siemens, The Breast Cancer Research Foundation, Cycle for Survival, Enid A. Haupt,
  Richard and Clara Weyergraf-Serra, and multiple NIH grants, including:" followed by Active and
  Completed lists. Active list came from the NIH Other Support pages certified 2026-04-30; completed
  list from the CV. Pending awards are deliberately not listed.
- **Disclosure statement** (verbatim, on disclosures.html and team.html#disclosure): "Joseph O.
  Deasy has intellectual property interests in technology licensed to RaySearch, Lumonus, and TCG
  Digital. Last updated: September 11, 2026."
- **Tools for Cancer Research** cards and their verified links: FocusNexus (featured, "Highlighted
  · Getting things done") https://cerrver.github.io/focusnexus/ ; CERR https://github.com/cerr/CERR
  and pyCERR https://github.com/cerr/pyCERR ; AI auto-segmentation models
  https://github.com/cerr/model_installer ; ORCO https://github.com/aksimhal/ORC-Omics
  (doi 10.1093/bioinformatics/btaf093) ; NetFlow https://areelkin.github.io/netflow and
  https://github.com/areElkin/netflow (bioRxiv 10.1101/2025.10.24.683878) ; ViSpace (placeholder).
  Card art in `assets/img/tools/` is original SVG in the brand palette; replace with screenshots
  only if licensing is confirmed.
- **ROBIN section** (research.html#robin): ImmunoRad ROBIN center (WCM / UChicago / MSK),
  U54CA274291, mPIs Formenti, Weichselbaum, Deasy; links to https://www.immunorobin.org, the NCI
  ROBIN page, and the overview paper doi 10.1158/1078-0432.CCR-25-1216. Didactic talks
  ("Fundamentals of Radiation and Immunity") are listed per year inside `<details class="talks">`
  and link to `https://www.immunorobin.org/curriculum/fundamentals-of-radiation-and-immunity/{year}`;
  the source site does not expose stable per-talk URLs. Add a new year by copying a `<details>` block.
- **p53 hero video** is adapted from Tran AP et al., Cell Death & Differentiation 30:660–672
  (2023), doi 10.1038/s41418-022-01069-x; reuse permission has not been confirmed.
- Editorial placeholders are marked `REPLACE-…` in the HTML or by dashed "note" boxes; search for
  `REPLACE-` before publishing anything new.

## 6. Publishing workflow (the one rule that matters)

**The maintainer prepares files; Joseph reviews and pushes.** No automation and no assistant
session ever runs `git commit` or `git push`, and no one but Joseph handles GitHub credentials.

From the `deasylab` folder in PowerShell, one line at a time (PowerShell 5.1 rejects `&&`):

```
git add -A
git commit -m "<what changed>"
git push
```

GitHub Pages redeploys within about a minute. Verify at https://cerrver.github.io/deasylab/.

## 7. How the site is edited from a Claude session (the current practice)

1. The cloud workspace is ephemeral; the **authoritative copy is on Joseph's PC**. Start by
   staging the current files from the connected folder (`device_stage_files`) into the workspace,
   or read/edit directly on the PC with `device_bash` for small changes.
2. Make the edits, then **render-check**: serve the folder locally (`python3 -m http.server 8765`
   started from the repo root with `nohup`) and load each changed page in headless Chromium
   (Playwright, `/opt/pw-browsers/chromium`), checking the console for errors. `file://` blocks
   images in some render paths — always test over HTTP.
3. Deliver back to the PC with `device_commit_files` (`force:true`). **Use a fresh staged path for
   every re-delivery** (e.g. `deasylab-v6`, `-v7`, …) — re-sending under a previously used path
   delivered old content once. Confirm with `md5sum` on both sides via `device_bash`.
4. SVG files gain an injected C2PA `<metadata>` block on delivery (size grows, md5 differs); this
   is expected and the SVG stays well-formed.
5. Give Joseph the three git lines above and a plain-language summary of what changed.
6. Update this HANDOFF.md (§10 change log at minimum) in the same delivery whenever the home page,
   navigation, data schema, scheduled tasks, or publishing workflow changed.

Device-side rules learned the hard way:
- Always run git on the PC as `git --no-optional-locks …`; a plain `git status` left a stale
  `.git/index.lock` that blocked Joseph's commit.
- `device_bash` cannot delete files without `device_request_delete_permission`; otherwise move
  unwanted files into `_to_delete/`.
- CSS specificity: `.pagehero p` beats a bare `.pagehero__preamble`; prefix new hero selectors
  with `.pagehero`.

## 8. Research and verification rules (content integrity)

- Nothing is added to the feed, roster, funding, or team sections without a source URL that was
  actually opened or seen in a search result. Never guess article slugs or DOIs.
- Common surnames among mentees (Zhao W, Chen X/Y, Xu K, Zhu J, Lee SK, Oh JH, Jeong J, Huang E,
  Mu Y, Xie Y, Tran AP, Tiwari P, Schiller T, Zuñiga A) produce false matches; require an
  affiliation or topical link before accepting a hit.
- Tools that have worked: Europe PMC REST API with exact journal abbreviations (wildcards return
  nothing); Google search via the browser extension plus `find` for exact hrefs; Crossref as a
  fallback. Cloud WebSearch is capped (~200 calls/session) and WebFetch is blocked for Google,
  PubMed, Scholar, ORCID and LinkedIn.
- Items whose summary was written from a title alone carry `flag` text saying so.

## 9. Scheduled tasks (all device-bound, fresh session each run, review-then-push)

| Task | Schedule (UTC) | What it does | Output |
|---|---|---|---|
| Deasy Lab — weekly publications re-index | Mon 13:00 (`0 13 * * 1`) | Lists the Drive folder, adds/removes `papers.json` entries, regenerates `papers.js` | Notification + working-tree changes |
| Deasy Lab — weekly Mentee News update | Mon 13:30 (`30 13 * * 1`) | Searches the last 8 days (60-day catch-up) per mentee, appends feed items, updates roster affiliations, regenerates mirrors, logs every URL in `mentee-news-seen.json` | Notification + working-tree changes |
| Deasy Lab — weekly handoff document refresh | Mon 14:15 (`15 14 * * 1`) | Reads `git log`/`diff` since the commit named at the top of this file and revises HANDOFF.md (page map, schemas, conventions, task table, change log) | Notification only if something changed; updated HANDOFF.md left in working tree |

Each task's full prompt is stored with the task itself (Claude app → scheduled tasks). If a task
must be recreated, its prompt should carry: repo path on the PC, the schemas above, the
`--no-optional-locks` rule, the three-line push commands, and "never commit or push".

## 10. Open items (as of 2026-09-11)

- ViSpace: no public page or repository found; card shows a dashed "REPLACE-VISPACE" note. Needs a
  description and link from Joseph.
- Jeho Jeong: no MSK profile page located; card shows department only.
- Hero statistics on the home page (papers, trainees, ECHO patients, CERR citations, "7 major NIH
  awards led") have not been independently confirmed by Joseph.
- Mentee roster: seven people still `verify:true` (W. Zhao, K. Xu, Zakarian, Y. Mu, Zuñiga,
  A.P. Tran, Salanon); Vanessa Clark hidden; seven feed items carry "verify" flags.
- Co-investigator wording on the three non-PI active R01s (R01CA292043, R01CA285801, R01CA258821)
  to be confirmed.
- p53 video reuse permission; lab public mailing address; one-line descriptions for CALM and the
  pathology tool; proton-program specifics.
- Team photos: add `data-img="assets/img/<name>.jpg"` to `.person__avatar` elements once photos
  are supplied.

## 11. Change log

Newest first. One line per delivered change set; the weekly refresh task appends from `git log`.

- 2026-09-11 · `1de86f8` · Home: "Tools for Cancer Research" section (six cards, SVG art);
  Research: NIH ROBIN section with 2023–2025 didactic talk lists; Team: PI titles card, three new
  key faculty collaborators, MSK Medical Physics links in all footers.
- 2026-09-11 · `e01b2c8` · Team: "Key Faculty Collaborators" heading, Hadi Askarifirouzjaei added;
  Funding section (active/completed NIH grants); disclosures.html + footer links.
- 2026-09-11 · `4e7ba58` · Mentee News: hero preamble; Weistuch, Xu, Zhao moved to former mentees.
- 2026-09-10 · `25ddff5` · Mentee News: 24-month default window, backfill to 41 items.
- 2026-09-10 · `8598e2d` · Mentee News feed, roster, home-page banner, weekly update task.
- 2026-09-03 · `857baca` · Team roster update, editor notes removed, lab email set, landing page trimmed.
- 2026-09-03 · `873a088` · Lab group photo added.
- 2026-09-03 · `9b8e308` · Initial commit.
