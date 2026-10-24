# Deasy Lab website — maintainer handoff

**Site:** Deasy Laboratory for Computational Medical Physics and Mathematical Oncology (renamed 2026-10-11; formerly "Deasy Laboratory for Cancer Modeling") · https://deasylab.info/ (GitHub Pages custom domain, set 2026-10-24; DNS at GoDaddy points straight at GitHub Pages, no forwarding)
**Repo:** https://github.com/cerrver/deasylab (branch `main`, GitHub Pages "deploy from branch", root folder)
**Local working copy:** `…\Documents\Claude\Projects\Web site design and deployment\deasylab\` on Joseph's Windows PC
**Owner / final say on content:** Joseph O. Deasy (deasyj@mskcc.org)
**Handoff document last updated:** 2026-10-21 (at commit `7150408`; VALIDATE consortium additions pending commit)

This document is the single place a new maintainer (a person or another Claude Project) needs to
read to take over the site. It is kept current by a weekly scheduled task (see §9) and should be
revised by hand whenever a session changes the home page or site structure. `README.md` is the
short public-facing version; this file is the operational one.

---

## 1. What the site is

A static, multi-page HTML/CSS/JS site with **no framework and no build step**. Every page is a
complete HTML file that loads one shared stylesheet (`assets/css/styles.css`) and one shared script
(`assets/js/main.js`). Three pages (Publications, Lab News, Mentee News) are data-driven: they render lists from
JSON files in `data/`, each of which has a `.js` mirror so the page also works when opened from disk
(`file://`), where browsers block `fetch()` of local JSON.

Fonts: Inter (UI) and Newsreader (display/serif) from Google Fonts. Palette tokens are in `:root` at
the top of `styles.css` — indigo `#3730a3` family (`--blue-*`), cyan `#06b6d4` accent (`--accent*`),
tints, radii, shadows. Brand assets: `assets/img/logo.png` (footer logo: the explorer-with-binoculars illustration only — until 2026-10-11 it also carried "DEASY LAB FOR CANCER MODELING" as baked-in text, which was cropped away when the lab was renamed; the lab name is HTML text beside the image),
`logo-mark.png` (nav mark), `favicon.png`, `lab-team.jpg`, `validate-logo.png` (VALIDATE consortium wordmark, navy on transparent; the same file as in the validate4rt repo).

## 2. Page map

| File | Purpose | Notable section ids |
|---|---|---|
| `index.html` | Home | `#home` hero (p53 video, stats, "Lab & mentee news →" button → `#news`), `#mission`, `#validate` (VALIDATE consortium feature band: logo + description + button to the consortium site), `#news` **news hub** — two side-by-side columns: `#lab-news` (banner + 3 newest items via `#labNewsLatest`) and `#mentee-news` (banner + 3 newest via `#menteeNewsLatest`); stacks to one column below 940 px, `#research` (four programs), `#tools` **Tools for Cancer Research** (six `.toolcard`s), `#featured` (npj Breast Cancer discovery), `#recent` highlights, `#team` teaser, recruitment CTA |
| `research.html` | Research programs | `#echo`, `#digital-twins`, `#math-oncology`, `#proton`, `#tools` (short lead → `index.html#tools`), `#robin` (NIH ROBIN consortium + didactic talk lists), `#validate` (VALIDATE consortium: lead + four cards (2×2) linking to the consortium site, its projects page, the Cochrane review and the ESTRO Newsletter interview), `#milestones`, `#funding` (teaser → `team.html#funding`) |
| `team.html` | People + funding | `#pi` (PI card with six titles, email, MSK Medical Physics link, ORCID), `#faculty` **Key Faculty Collaborators**, `#fellows` Postdoctoral Fellows, `#funding` (Active / Completed grants), `#disclosure` |
| `publications.html` | Searchable publications library | rendered by `assets/js/publications.js` from `data/papers.js`/`.json` |
| `lab-news.html` | Lab News feed + covered people | `#feed`, `#members`; rendered by `assets/js/lab-news.js` from `data/lab-news.js`/`.json` + `data/lab-members.js`/`.json`; deep link `?person=<memberId>` |
| `mentee-news.html` | Mentee News feed + roster | `#feed`, `#mentees`; rendered by `assets/js/mentee-news.js` |
| `disclosures.html` | Financial disclosure statement | carries a "Last updated: <date>" line — change it when the statement changes |
| `join.html` | Recruiting, collaboration, teaching, contact | `#join`, `#collaborate`, `#teaching`, `#contact` |
| `news/<slug>.html` | Stand-alone news write-ups (first: `news/flare-2026.html`, the MICCAI FLARE 2026 award) — a feed item's `url` points here when the story is told on this site; paths inside use `../` | `.story` article: dateline, stat tiles, `.prose` sections, `.news__figs` figures, links |

Every page has the same header nav (Home · Research · Team · Publications · Lab News · Mentee News ·
Join / Contact, plus a mobile menu `#mobileMenu`) and the same footer (email, ORCID, GitHub (CERR),
Disclosures, VALIDATE consortium link, MSK Department of Medical Physics link, "Back to top"). **When you add a page or nav
link, edit the header and footer in all eight HTML files** — there is no include mechanism.

## 3. Directory layout

```
deasylab/
├── index.html research.html team.html publications.html lab-news.html mentee-news.html disclosures.html join.html
├── README.md            short public readme (deploy + weekly push)
├── PDF-WANTED.md        papers with no open-access PDF (manual-upload list), failed downloads, Drive housekeeping — regenerated by each Update DeasyLab run
├── HANDOFF.md           this file
├── news/                stand-alone news write-ups (flare-2026.html …); same header/footer as the other pages with ../ paths
├── gen-papers-js.py     data/papers.json  -> data/papers.js
├── gen-mentee-js.py     data/mentees.json -> data/mentees.js ; data/mentee-news.json -> data/mentee-news.js
├── gen-lab-js.py        data/lab-members.json -> data/lab-members.js ; data/lab-news.json -> data/lab-news.js
├── assets/
│   ├── css/styles.css   single stylesheet (sections marked with /* ---------- name ---------- */ comments)
│   ├── js/main.js       mobile nav, active-link highlight, stat counters, avatar images, footer year, reduced-motion video
│   ├── js/publications.js
│   ├── js/lab-news.js
│   ├── js/mentee-news.js
│   └── img/             logo.png, logo-mark.png, favicon.png, lab-team.jpg, tools/*.svg (six tool illustrations), news/ (images attached to feed items)
└── data/
    ├── papers.json / papers.js
    ├── pdf-manifest.json    status of every Europe PMC record vs. the Drive folder (in-drive | inbox | uploaded | no-oa | failed | skipped | candidate)
    ├── mentees.json / mentees.js
    ├── mentee-news.json / mentee-news.js
    ├── mentee-news-seen.json
    ├── lab-members.json / lab-members.js
    ├── lab-news.json / lab-news.js
    └── lab-news-seen.json
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

### 4.1a `data/pdf-manifest.json` — open-access PDF hunt state (added 2026-10-12)
Top level: `_note`, `updated`, `source` (the Europe PMC query), `policy`, `counts`, `works[]`. Each work: `key` (doi, else
`pmid:<n>`), `doi`, `pmid`, `pmcid`, `title`, `year`, `date`, `venue`, `firstAuthor`, `isOpenAccess`, `inEuropePMC`, `status`
(in-drive | inbox | uploaded | no-oa | failed | skipped | candidate), `oaUrl`, `version` (publishedVersion-OA |
acceptedVersion-author-manuscript | preprint), `file` (name in `..\pdf-inbox\`), `driveId`, `checked`, `note`. The Update
DeasyLab command reconciles `inbox` rows against the Drive listing (same file name → `uploaded`) and takes the next batch of
`candidate` rows, newest first. Downloads go through the Claude desktop app's browser pane (Europe PMC render endpoint
`https://europepmc.org/articles/<PMCID>?pdf=render`) into `C:\Users\deasyj\Downloads`, are verified on the PC (`%PDF`
header, ≥ 30 KB, ≥ 2 pages, "Deasy" on the first pages) and copied into `..\pdf-inbox\` (outside the repo).

### 4.2 `data/mentees.json` — roster
Top level: `_note`, `updated`, `mentees[]`. Each record: `id`, `name`, `degree`, `status`
(current | past), `role`, `period`, `project`, `cvPosition` (what the CV said), `institution`,
`position` (current, shown on site), `institutionSource` (URL evidence), `institutionVerified`
(YYYY-MM-DD), `verify` (true → "to confirm" badge), `include` (false → hidden), `nameNote`,
`researchNotes`. Roster was built from Joseph's CV (`DeasyJO_CV_Updated_6Nov2025.docx`, 48 people:
3 current, 45 former). Only `include:false` at handoff: Vanessa Clark (institution not established).
Never change `name`, `status`, `role`, `period`, `project`, `cvPosition` from an automated run.

### 4.3 `data/mentee-news.json` — feed
**Scope rule (Joseph, 2026-10-12): Mentee News is for mentees who are NOT currently part of the lab.** Items involving current lab
members (the `lab-members.json` roster — e.g. Nayak, Ebrahimpour, Simhal, Chen) go to Lab News only, even though the three
current trainees also appear in the mentee roster; log such candidates in `mentee-news-seen.json` as excluded.
Top level: `updated`, `windowMonths` (24), `items[]`. Each item: `id`
(`<menteeId>-<slug>`), `menteeId`, `mentee`, `type` (paper | media | award), `title`, `date`
(YYYY-MM-DD or YYYY-MM), `venue`, `url` (required, must be a real resolved URL), `doi`,
`authorsShort`, `menteeRole`, `summary` (2–3 plain-language sentences), `added`, `flag`
(null or a short note → "verify" badge). Optional `images[]` = `[{src (site-relative, e.g.
`assets/img/news/x.jpg`), alt, caption, href?}]` — rendered under the summary (first image only on the home page). Items are never deleted by automation; to remove one,
delete the record by hand. The page shows the last `windowMonths` newest-first, with a "Show
older items" button for the rest. The home page shows the three newest.

### 4.4 `data/mentee-news-seen.json` — memory of evaluated URLs
`{"seen":[{url, menteeId, status: added|excluded, reason, date}]}`. The weekly task never re-adds
a URL listed here, so deleting an item from the feed is permanent unless you also remove it here.

### 4.5 `data/lab-members.json` — Lab News roster
Top level: `_note`, `updated`, `members[]`. Each: `id`, `name`, `degree`, `role`, `isPI` (bool),
`status` (current), `period`, `institution`, `position`, `searchNames[]` (author-name forms to query,
e.g. "Deasy JO"), `include` (false → hidden and not searched), `verify` (true → "to confirm" badge),
`notes` (name-disambiguation rules — read them before searching a common surname). The roster is the
PI plus **current lab trainees only** (postdocs, the lab's resident/fellow, students); faculty
collaborators are deliberately excluded. Membership changes are made by hand, never by the task.

### 4.6 `data/lab-news.json` — Lab News feed
Top level: `_note`, `updated`, `window`, `windowMonths` (24), `items[]`. Each item: `id`
(`paper-<doi slug>` or `media-…`/`award-…`), `type` (paper | media | award), `title`, `date`
(YYYY-MM-DD or YYYY-MM), `venue` (journal abbreviation; preprints carry "(preprint)" and render as
"Preprint"), `url` (required; DOI URL for papers), `doi`, `authorsShort` (first 3 … last), `people[]`
= `[{id: <memberId>, role}]` with role ∈ first author | last/senior author | corresponding author |
co-author | subject | quoted | recipient, `summary` (2–3 plain-language sentences from the abstract),
`added`, `flag` (null or note → "verify" badge), `source` (e.g. `europepmc:<id>`). Optional `images[]` as in §4.3. Inclusion rule:
**every** publication or preprint in any venue, and any press/award item, that names the PI or an
included trainee. Items from a trainee's earlier position are included but flagged. Never delete
items by automation. Backfilled 2026-09-13 with 45 items (43 papers/preprints, 2 media).

### 4.7 `data/lab-news-seen.json` — memory of evaluated URLs
`{"seen":[{url, people[], status: added|excluded, reason, date}]}`. Same rule as the mentee file:
the weekly task never re-adds a listed URL, so a deleted item stays deleted unless its row is removed here.

### 4.8 Regenerating the `.js` mirrors
After any manual edit of a JSON file run, from the repo root:
`python3 gen-mentee-js.py` (mentees + news), `python3 gen-lab-js.py` (lab members + lab news) and/or
`python3 gen-papers-js.py` (papers). The mirrors are `window.MENTEES_DATA = …;`,
`window.MENTEE_NEWS_DATA = …;`, `window.LAB_MEMBERS_DATA = …;`, `window.LAB_NEWS_DATA = …;`,
`window.PAPERS_DATA = …;`. Pages load the `.js` mirror first and use JSON over HTTP as the
canonical source, so a stale mirror shows stale data when opened from disk but not on GitHub Pages.

## 5. Content conventions and fixed wording

- **Lab name and description (verbatim, supplied by Joseph 2026-10-11):** the lab is the
  "Deasy Laboratory for Computational Medical Physics and Mathematical Oncology" everywhere — `<title>`s,
  `og:title`, header `aria-label`, footer block, copyright line, body copy and alt text of all eight
  pages. Its one-paragraph description is "Physics and information based modeling, outcome prediction, and optimization of cancer treatment. Integrating dose, imaging, and molecular data to understand cancer and optimize treatments."
  — used verbatim as the home-page hero lead, the home `<meta name="description">` and
  `og:description` (spelling and hyphenation as supplied; do not "correct" it without asking).
  Fixed renderings of the long name: header lockup = `Deasy Lab` over a two-line small caps
  subtitle `Computational Medical Physics` / `and Mathematical Oncology` (the subtitle is hidden
  between 841 and 1045 px, where it would collide with the nav links; the hamburger menu now starts
  at 840 px instead of 760 px); home hero = a lighter lead-in line "Deasy Laboratory for" over a
  three-line gradient stack `Computational` / `Medical Physics and` / `Mathematical Oncology`
  (`.hero__title--long`, `clamp(28px, 4.25vw, 48px)`, sized so the longest line never wraps).
  The former name "Deasy Laboratory for Cancer Modeling" must not reappear; `grep -rni "cancer
  modeling"` over the repo should only hit this document's history notes.
- **VALIDATE consortium (Joseph, 2026-10-21):** the consortium Dr. Deasy chairs (co-chair Laura Cella, CNR
  Naples) has a prominent place on the site: the `#validate` band on the home page (second section, right after
  `#mission`), the `#validate` section on research.html (after ROBIN) and a footer link on every page. Its site is a
  separate repo, `cerrver/validate4rt`, served at https://validate4rt.org/ (custom domain since 2026-10-24) — all three links point
  there (`grep -rn validate4rt *.html news/*.html`).
  Facts in the copy (27 investigators, ten countries, the Cochrane numbers) come from the consortium site; update
  both sites together when the roster changes.
- **Weill Cornell Medicine (Joseph, 2026-10-11):** acknowledged only as the PI's own appointment
  (team.html#pi title list and bio), never as a lab affiliation. The hero eyebrow is
  "Memorial Sloan Kettering Cancer Center"; the footer address of every page ends at "New York,
  NY"; the Join contact card has no affiliation line. Factual mentions of WCM elsewhere (the WCM/MSK
  M.S. in Biomedical Imaging teaching paragraph, the ROBIN consortium, "collaborators across MSK and
  Weill Cornell Medicine" on Join) were left as they are.
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
- **Lab News preamble** (hero, lab-news.html): "Every paper, preprint, and news story from the last two
  years that carries the name of a current lab member — from a first-author paper by a postdoc to an
  interview with the PI." Home-page banner: "Lab News — updated weekly · Every paper, preprint, and
  news story from the last two years involving the PI or a current lab trainee." (wording drafted by
  the maintainer 2026-09-13, not dictated by Joseph — may be edited freely).
- **Funding intro** (verbatim; lab name updated 2026-10-11): "The Deasy Laboratory for Computational Medical Physics and Mathematical Oncology has been supported by
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
  https://github.com/areElkin/netflow (bioRxiv 10.1101/2025.10.24.683878) ; ViSPACE https://github.com/himangi2003/ViSPACE (computational pathology pipeline by Himangi Srivastava; spelling "ViSPACE" per Joseph).
  Card art in `assets/img/tools/` is original SVG in the brand palette; replace with screenshots
  only if licensing is confirmed.
- **ROBIN section** (research.html#robin): ImmunoRad ROBIN center (WCM / UChicago / MSK),
  U54CA274291, mPIs Formenti, Weichselbaum, Deasy; links to https://www.immunorobin.org, the NCI
  ROBIN page, and the overview paper doi 10.1158/1078-0432.CCR-25-1216. Didactic talks
  ("Fundamentals of Radiation and Immunity") are listed per year inside `<details class="talks">`
  and link to `https://www.immunorobin.org/curriculum/fundamentals-of-radiation-and-immunity/{year}`;
  the source site does not expose stable per-talk URLs. Add a new year by copying a `<details>` block.
- **Team photo labels** (index.html and team.html): the photo is wrapped in `.teamphoto__frame`
  with a `<ul class="teamphoto__labels">` of white name boxes positioned by CSS variables
  (`--x`, `--y` = percent of the image width/height, chest height). Left to right: Joseph Deasy
  (PI), Daniel Grange, Francisco Calderon (undergraduate), Anish Simhal, Himangi Srivastava,
  Lopamudra Nayak, Leyla Ebrahimpour (postdocs), Aditya Apte, Jung Hun Oh (faculty). To move a
  label, change its `--x`/`--y`; edit the list identically in both pages. Below 640 px the boxes
  are hidden and a "Left to right: …" caption is shown instead; the alt text carries the same list.
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

GitHub Pages redeploys within about a minute. Verify at https://deasylab.info/.

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
| Deasy Lab — weekly Lab News update | Mon 13:45 (`45 13 * * 1`) | For the PI and each included member of `lab-members.json`: Europe PMC (Crossref fallback) for any paper/preprint in the last 8 days (60-day catch-up), web search for media/awards, plain-language summaries from abstracts; appends to `lab-news.json`, logs every URL in `lab-news-seen.json`, regenerates mirrors with `gen-lab-js.py` | Notification + working-tree changes |
| Deasy Lab — weekly handoff document refresh | Mon 14:15 (`15 14 * * 1`) | Reads `git log`/`diff` since the commit named at the top of this file and revises HANDOFF.md (page map, schemas, conventions, task table, change log) | Notification only if something changed; updated HANDOFF.md left in working tree |

**Status 2026-10-11 (read from the account's scheduled-task list; details to confirm with Joseph):**
all four tasks above are **paused** (`enabled: false` since 2026-10-08; their schedules now read
Wed/Thu 10:15–11:59 America/New_York rather than the Monday UTC times in the table). A new task
**"Deasy Lab site: approval reminder"** (Mon 08:46 America/New_York) is active; it expects a cloud
routine "Deasy Lab — weekly site update" to update data on branch `claude/weekly-update` and open a
pull request named "Weekly site update", and it checks `main` for `automation/site_tools.py` and
`automation/prepare_branch.sh`. **That `automation/` folder is not in this repository as of
2026-10-11**, so the reminder will report "not installed" until it is added and pushed; the
routine itself was not visible from the session that wrote this note. None of the task prompts
mention the old lab name, so the automation will not reintroduce it.

Each task's full prompt is stored with the task itself (Claude app → scheduled tasks). If a task
must be recreated, its prompt should carry: repo path on the PC, the schemas above, the
`--no-optional-locks` rule, the three-line push commands, and "never commit or push".

**On-demand refresh (from 2026-10-12):** the maintenance is run by hand with the Claude command **"Update DeasyLab"**
(skill `update-deasylab` in Joseph's Claude account; invoked from a session linked to this PC). One run does, in
order: (1) publications — re-index the Drive folder into `data/papers.json`, then hunt open-access PDFs (Europe PMC
full text, publisher CC-licensed PDFs, preprints; never paywalled publisher PDFs) for up to 25 publications per run,
newest first, downloading through the Claude desktop app's built-in browser into `C:\Users\deasyj\Downloads` and
staging verified files in `..\pdf-inbox\` for Joseph to upload to Drive; (2) Mentee News; (3) Lab News — each with the
same rules as the paused weekly tasks above; then mirrors, validation, this document's change log, and the three push
lines. State files: `data/pdf-manifest.json` (per-publication status: in-drive, inbox, uploaded, no-oa, failed,
skipped, partial-in-drive) and `PDF-WANTED.md` (papers with no open-access copy, for manual upload). The four weekly
tasks and the approval reminder stay paused (`enabled: false`); the cloud routine they anticipated was never installed.

## 10. Open items (as of 2026-09-13)

- Lab News roster (`data/lab-members.json`): confirm Leyla Seyed Ebrahimpour's Université Laval papers
  are hers (6 items flagged), whether Xinan Chen (now a therapeutic medical physics resident) should stay
  in the roster, Francisco Calderon's name spelling, and whether Anish Simhal's non-lab items (Stanford
  synapse preprint, Hemasphere) belong in the feed. No indexed items were found for Himangi Srivastava,
  Lopamudra Nayak, or Francisco Calderon.
- Lab News: the ESTRO newsletter interview carries a month-only date (issue date not shown on the
  page); 13 items carry "verify" flags in total. The weekly Lab News task must be approved for device
  binding in the app's scheduled-task list (same as the handoff task).

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

- 2026-10-21 · (pending commit) · **VALIDATE consortium added.** Home page `#validate` feature band (logo on white, description, button to the consortium site), research.html `#validate` section (lead + three cards), footer link on all nine pages, `assets/img/validate-logo.png`, `.feature__media--validate` style; §1/§2/§5 updated. Links point to https://cerrver.github.io/validate4rt/ until validate4rt.org is live.
- 2026-10-13 · (pending commit) · Tools: ViSPACE card completed — corrected name (ViSPACE), description from the repository README (Virchow2-based whole-slide pathology segmentation and spatial TME biomarkers), GitHub link https://github.com/himangi2003/ViSPACE, REPLACE-VISPACE note removed; Research page and README spelling updated.
- 2026-10-12 · (pending commit) · Award wording corrected per Joseph: the team was the overall competition winner, not a Task 1 winner (feed item, write-up page, captions).
- 2026-10-12 · (pending commit) · **News write-up pages.** New `news/flare-2026.html` tells the FLARE 2026 award story on the site
  (challenge, approach, validation numbers from the team's slides, certificate and Codabench screenshot, team links); the Lab News
  award item's `url` now points to it, so "Read the story" opens the write-up rather than the competition site. The award was
  removed from Mentee News — Joseph's rule: Mentee News is for mentees not currently in the lab (recorded in §4.3; the seen log
  marks the candidate excluded). §2/§3 updated for the `news/` folder.
- 2026-10-12 · (pending commit) · **News cards can carry images.** Optional `images[]` on a feed item (see §4.3/§4.6) is rendered by
  `assets/js/lab-news.js` and `assets/js/mentee-news.js` (`figures()`) as a `.news__figs` strip after the summary — all images with
  captions on the feed pages, the first image only (no caption) in the compact home-page cards; styles `.news__figs`/`.news__fig` in
  `styles.css`. First use: the FLARE 2026 award item shows the certificate and a screenshot of the Codabench competition page
  (`assets/img/news/flare2026-certificate.jpg`, `flare2026-codabench.jpg`, supplied by Joseph). Render-checked at 1280 px and 390 px.
- 2026-10-12 · (pending commit) · Lab News + Mentee News: MICCAI FLARE 2026 Outstanding Winner Award (Team PANSEG_MSK —
  Lopamudra Nayak, Leyla Ebrahimpour, Jue Jiang — overall winner of the pan-cancer CT segmentation challenge, first of 190 teams) added as an award item
  in `lab-news.json` (recipients: nayak, ebrahimpour) and in `mentee-news.json` for lopamudra-nayak; source: certificate
  FLARE2026-T1-006 and slides supplied by Joseph; date month-only (2026-10) pending confirmation.
- 2026-10-12 · (pending commit) · **First "Update DeasyLab" run.** Publications: the Drive folder held 62 files but only 31
  were indexed — 23 entries added (`papers.json` now 54; 4 flagged: ASCO 2026 abstract, a book chapter, two 1990s–2000 items
  without DOI); 7 Drive files identified as duplicates of indexed papers (listed in `PDF-WANTED.md` §5). Open-access PDF hunt:
  Europe PMC bibliography (341 records) classified in the new `data/pdf-manifest.json`; 20 verified full-text PDFs staged in
  `..\pdf-inbox\` for upload to Drive, 6 downloads failed, 66 papers have no open-access copy — all listed in the new
  `PDF-WANTED.md`. Mentee News: 12 items added (feed 53), roster +1 (Tafadzwa L. Chaunzwa, MD — added at Joseph's request;
  mentored since 2024), 10 affiliations re-verified, Sang Kyu Lee flagged for a possible move to NYU. Lab News: 3 papers added
  (feed 48; Grange+Deasy review in Oxford Open Neuroscience, Simhal co-author in Hemasphere, Deasy senior author in Biomed
  Signal Process Control, title-only summary); 20 candidates excluded and logged (name collisions, ASTRO/IMS meeting
  abstracts). No HTML changed.
- 2026-10-12 · (pending commit) · **Workflow:** the site is now refreshed on demand with the Claude command
  "Update DeasyLab" (skill `update-deasylab`, saved in Joseph's Claude account) instead of the paused weekly
  tasks — see §9. It also starts the open-access PDF hunt for the publication archive: PDFs it fetches wait in
  `..\pdf-inbox\` (outside the repo) for Joseph to drag into the Drive folder; provenance will be kept in
  `data/pdf-manifest.json` and the list of papers without an open-access copy in `PDF-WANTED.md` (both created
  by the first run). HANDOFF header/§11 reconciled to `b0fe01f`. No site content changed.
- 2026-10-11 · `b0fe01f` · Home hero `<h1>`: a space added between the lead-in span and the gradient
  span, and before each `<br />`, so the heading's plain text reads "Deasy Laboratory for Computational
  Medical Physics and Mathematical Oncology" in reader mode, copy-and-paste, screen readers and search
  snippets (no visual change).
- 2026-10-11 · `7f090c2` · **Lab renamed** to "Deasy Laboratory for Computational Medical Physics and Mathematical Oncology"
  with the new one-paragraph description (see §5): `<title>`, `og:title`/`og:description`, meta
  descriptions, header brand lockup (two-line subtitle), footer block, copyright line, body copy and
  alt text on all eight pages; home hero retitled (lead-in line + three-line gradient stack) and its
  lead replaced by the description; `styles.css` (brand subtitle size, `.hero__title--long` rules,
  footer brand width 540 px, header breakpoints 1045/840/400 px); `assets/img/logo.png` cropped to
  the illustration (old wordmark removed); README title, stylesheet header and `data/papers.json`/`.js`
  `_comment` updated; HANDOFF §1, §5, §9 (task status note), §11. Same change set: Weill Cornell
  Medicine removed from the hero eyebrow, from the footer address line of all eight pages and from
  the Join contact card — it is now acknowledged only as the PI's appointment on the Team page.

- 2026-09-13 · `5fb41ef` · **Lab News**: new `lab-news.html` feed page (search / filter by lab
  member / type / sort, "Show older items", covered-people strip), `assets/js/lab-news.js`,
  `data/lab-members.json`, `data/lab-news.json` (45 backfilled items, Sept 2024 – Sept 2026),
  `data/lab-news-seen.json`, `gen-lab-js.py`; home page `#mentee-news` section replaced by a
  two-column `#news` hub (Lab News card beside Mentee News card); "Lab News" added to the header and
  mobile nav of all eight pages; hero button now "Lab & mentee news →" (→ `#news`); new weekly task
  "Deasy Lab — weekly Lab News update" (Mon 13:45 UTC); README + HANDOFF updated.

- 2026-09-11 · `b29b454` · Team photo on Home and Team: white name/role labels at chest height for all nine people, caption fallback on phones.
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
