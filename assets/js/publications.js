/* =============================================================
   Deasy Lab — publications library.
   Reverse-chronological, clickable list with client-side
   search / filter / sort. Reads window.PAPERS_DATA (data/papers.js,
   for file:// use) or fetches data/papers.json (over HTTP).
   Source of truth: the "Deasy publications" Google Drive folder;
   regenerated weekly. No build step, no dependencies.
   ============================================================= */
(function () {
  "use strict";

  var DATA_URL = "data/papers.json";
  var els = {
    search: document.getElementById("pubSearch"),
    clear:  document.getElementById("pubClear"),
    type:   document.getElementById("filterType"),
    year:   document.getElementById("filterYear"),
    sort:   document.getElementById("sortBy"),
    chips:  document.getElementById("topicChips"),
    count:  document.getElementById("pubCount"),
    list:   document.getElementById("pubList"),
    empty:  document.getElementById("pubEmpty"),
    reset:  document.getElementById("resetFilters"),
    emptyReset: document.getElementById("emptyReset")
  };

  var papers = [];
  var state = { q: "", type: "", year: "", sort: "year-desc" };

  var TYPE_LABEL = {
    "journal-article": "Journal article",
    "review": "Review",
    "commentary": "Commentary",
    "preprint": "Preprint",
    "patent": "Patent",
    "proceedings": "Proceedings",
    "conference": "Proceedings",
    "other": "Other"
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function uniqueSorted(arr) { return Array.from(new Set(arr)).sort(); }

  /* ---------- load (embedded first, then fetch) ---------- */
  if (window.PAPERS_DATA && window.PAPERS_DATA.papers) {
    papers = window.PAPERS_DATA.papers.slice();
    init();
  } else {
    fetch(DATA_URL, { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (data) { papers = (data && data.papers ? data.papers : []).slice(); init(); })
      .catch(function (err) {
        els.count.textContent = "Could not load publications.";
        els.list.innerHTML =
          '<div class="pub-empty"><p>The publications file could not be loaded.</p>' +
          '<p style="font-size:14px">Open <code>index.html</code> from the site folder, or run a local server (see README).</p></div>';
        console.error("[publications]", err);
      });
  }

  /* ---------- init ---------- */
  function init() {
    if (els.chips) els.chips.hidden = true; // no topic chips in the list view

    uniqueSorted(papers.map(function (p) { return TYPE_LABEL[p.type] || p.type; }).filter(Boolean))
      .forEach(function (t) { els.type.appendChild(option(t, t)); });

    uniqueSorted(papers.map(function (p) { return p.year; }).filter(Boolean))
      .reverse()
      .forEach(function (y) { els.year.appendChild(option(y, y)); });

    bindEvents();
    render();
  }
  function option(value, label) {
    var o = document.createElement("option");
    o.value = value; o.textContent = label; return o;
  }

  function bindEvents() {
    els.search.addEventListener("input", function () {
      state.q = els.search.value.trim().toLowerCase();
      els.clear.hidden = state.q === "";
      render();
    });
    els.clear.addEventListener("click", function () {
      els.search.value = ""; state.q = ""; els.clear.hidden = true; els.search.focus(); render();
    });
    els.type.addEventListener("change", function () { state.type = els.type.value; render(); });
    els.year.addEventListener("change", function () { state.year = els.year.value; render(); });
    els.sort.addEventListener("change", function () { state.sort = els.sort.value; render(); });
    els.reset.addEventListener("click", resetAll);
    if (els.emptyReset) els.emptyReset.addEventListener("click", resetAll);

    els.list.addEventListener("click", function (e) {
      var cite = e.target.closest("[data-cite]");
      if (cite) copyCitation(cite);
    });
  }

  function resetAll() {
    state = { q: "", type: "", year: "", sort: "year-desc" };
    els.search.value = ""; els.clear.hidden = true;
    els.type.value = ""; els.year.value = ""; els.sort.value = "year-desc";
    render();
  }

  function matches(p) {
    if (state.type && (TYPE_LABEL[p.type] || p.type) !== state.type) return false;
    if (state.year && String(p.year) !== String(state.year)) return false;
    if (state.q) {
      var hay = [p.title, p.authors, p.venue, p.year, TYPE_LABEL[p.type] || p.type].join(" ").toLowerCase();
      var terms = state.q.split(/\s+/);
      for (var i = 0; i < terms.length; i++) if (hay.indexOf(terms[i]) === -1) return false;
    }
    return true;
  }

  function sortList(arr) {
    var s = state.sort;
    return arr.sort(function (a, b) {
      if (s === "year-asc") return (a.year || 0) - (b.year || 0);
      if (s === "title-asc") return String(a.title).localeCompare(String(b.title));
      return (b.year || 0) - (a.year || 0);
    });
  }

  function render() {
    var filtered = sortList(papers.filter(matches));
    var hasFilters = state.q || state.type || state.year;
    els.reset.hidden = !hasFilters;
    els.count.textContent =
      filtered.length + (filtered.length === 1 ? " publication" : " publications") +
      (hasFilters ? " match your filters" : " in the library");
    if (!filtered.length) { els.list.innerHTML = ""; els.empty.hidden = false; return; }
    els.empty.hidden = true;
    els.list.innerHTML = filtered.map(card).join("");
  }

  function card(p) {
    var titleHtml = p.url
      ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>"
      : esc(p.title);

    var badges = '<span class="badge badge--type">' + esc(TYPE_LABEL[p.type] || p.type || "Publication") + "</span>";
    if (p.flag) badges += '<span class="badge badge--sample" title="' + esc(p.flag) + '">verify</span>';

    var actions = [];
    if (p.url) actions.push('<a class="pill pill--download" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + icon("pdf") + "PDF</a>");
    if (p.doi) actions.push('<a class="pill" href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">' + icon("external") + "DOI</a>");
    actions.push('<button class="pill" type="button" data-cite data-citation="' + esc(citation(p)) + '">' + icon("copy") + "Cite</button>");

    return '' +
      '<article class="paper">' +
        '<div class="paper__top">' +
          '<div>' +
            '<h3 class="paper__title">' + titleHtml + "</h3>" +
            '<p class="paper__authors">' + esc(p.authors || "") + "</p>" +
            '<p class="paper__venue">' + esc(p.venue || "") + "</p>" +
          "</div>" +
          '<div class="paper__year">' + esc(p.year || "") + "</div>" +
        "</div>" +
        '<div class="paper__badges">' + badges + "</div>" +
        '<div class="paper__actions">' + actions.join("") + "</div>" +
      "</article>";
  }

  function citation(p) {
    var bits = [];
    if (p.authors) bits.push(p.authors + ".");
    if (p.title) bits.push("“" + p.title + ".”");
    if (p.venue) bits.push(p.venue);
    if (p.year) bits.push("(" + p.year + ")");
    var s = bits.join(" ");
    if (p.doi) s += " doi:" + p.doi;
    return s;
  }

  function copyCitation(btn) {
    var text = btn.getAttribute("data-citation") || "";
    var done = function () {
      var prev = btn.innerHTML;
      btn.innerHTML = icon("check") + "Copied";
      setTimeout(function () { btn.innerHTML = prev; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else { fallbackCopy(text, done); }
  }
  function fallbackCopy(text, cb) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta); cb && cb();
  }

  function icon(name) {
    var paths = {
      pdf: '<path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      external: '<path d="M14 5h5v5m0-5L10 14M19 13v6H5V5h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      copy: '<path d="M9 9V5h11v11h-4M4 8h11v12H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
      check: '<path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (paths[name] || "") + "</svg>";
  }
})();
