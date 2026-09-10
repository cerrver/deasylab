/* =============================================================
   Deasy Lab — Mentee News feed.
   Renders data/mentee-news.json (items) joined with data/mentees.json
   (roster: current institution shown next to every mentee).
   Works over HTTP (fetch) or from disk via the data/*.js mirrors
   (window.MENTEES_DATA, window.MENTEE_NEWS_DATA).
   Two modes:
     • full page  — #newsList present: search / filter / sort + directory
     • teaser     — #menteeNewsLatest present: the N most recent items
   No build step, no dependencies.
   ============================================================= */
(function () {
  "use strict";

  var NEWS_URL = "data/mentee-news.json";
  var ROSTER_URL = "data/mentees.json";
  var WINDOW_MONTHS = 24;           // default view: items dated within the last 24 months (overridable by news.windowMonths)

  function cutoffISO(months) {
    var d = new Date(); d.setMonth(d.getMonth() - months);
    return d.toISOString().slice(0, 10);
  }
  function inWindow(it, cutoff) { return String(it.date || "") >= cutoff.slice(0, String(it.date || "").length || 10); }

  var TYPE_LABEL = { paper: "Paper", media: "In the media", award: "Award / grant" };
  var ROLE_LABEL = {
    "first author": "First author", "last/senior author": "Senior author",
    "corresponding author": "Corresponding author", "co-author": "Co-author",
    "subject": "Featured", "recipient": "Recipient"
  };
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function fmtDate(d) {
    if (!d) return "";
    var p = String(d).split("-");
    if (p.length >= 2) {
      var m = MONTHS[parseInt(p[1], 10) - 1] || "";
      return (p.length >= 3 ? parseInt(p[2], 10) + " " : "") + m + " " + p[0];
    }
    return String(d);
  }
  function surname(n) { var p = String(n).replace(/,.*$/, "").trim().split(/\s+/); return p[p.length - 1]; }
  function host(url) { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return ""; } }

  /* ---------- load both files (embedded first, then fetch) ---------- */
  function load(cb) {
    if (window.MENTEE_NEWS_DATA && window.MENTEES_DATA) {
      cb(window.MENTEE_NEWS_DATA, window.MENTEES_DATA); return;
    }
    Promise.all([
      fetch(NEWS_URL, { cache: "no-store" }).then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); }),
      fetch(ROSTER_URL, { cache: "no-store" }).then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
    ]).then(function (res) { cb(res[0], res[1]); })
      .catch(function (err) {
        console.error("[mentee-news]", err);
        var el = document.getElementById("newsCount") || document.getElementById("menteeNewsLatest");
        if (el) el.innerHTML = '<p class="pub-empty">The Mentee News data could not be loaded. Serve the site over HTTP or open it from the site folder (see README).</p>';
      });
  }

  load(function (news, roster) {
    var byId = {};
    (roster.mentees || []).forEach(function (m) { byId[m.id] = m; });
    var items = (news.items || []).filter(function (it) {
      var m = byId[it.menteeId]; return !m || m.include !== false;
    });
    items.sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });

    var teaser = document.getElementById("menteeNewsLatest");
    if (teaser) renderTeaser(teaser, items, byId);
    if (document.getElementById("newsList")) initPage(items, byId, roster, news);
  });

  /* ---------- shared card ---------- */
  function menteeLine(it, m) {
    var inst = m && m.institution ? m.institution : null;
    var pos = m && m.position ? m.position : null;
    var s = '<span class="news__who"><strong>' + esc(it.mentee) + "</strong>";
    if (pos || inst) s += '<span class="news__inst">' + esc([pos, inst].filter(Boolean).join(" · ")) + "</span>";
    if (m && m.verify) s += '<span class="badge badge--sample news__verify" title="Affiliation from the CV or a secondary source; not yet confirmed on an official page">affiliation to confirm</span>';
    s += "</span>";
    return s;
  }

  function card(it, m, compact) {
    var type = TYPE_LABEL[it.type] || it.type;
    var title = '<a href="' + esc(it.url) + '" target="_blank" rel="noopener">' + esc(it.title) + "</a>";
    var meta = [];
    if (it.venue) meta.push("<em>" + esc(it.venue) + "</em>");
    if (it.menteeRole && ROLE_LABEL[it.menteeRole]) meta.push(esc(ROLE_LABEL[it.menteeRole]));
    if (it.authorsShort) meta.push(esc(it.authorsShort));
    var html = '' +
      '<article class="news news--' + esc(it.type) + (compact ? " news--compact" : "") + '" data-mentee="' + esc(it.menteeId) + '">' +
        '<div class="news__head">' +
          '<span class="news__type">' + esc(type) + "</span>" +
          '<time class="news__date" datetime="' + esc(it.date) + '">' + esc(fmtDate(it.date)) + "</time>" +
        "</div>" +
        menteeLine(it, m) +
        '<h3 class="news__title">' + title + "</h3>" +
        (meta.length ? '<p class="news__meta">' + meta.join(" · ") + "</p>" : "") +
        '<p class="news__summary">' + esc(it.summary) + "</p>" +
        '<div class="news__actions">' +
          '<a class="pill" href="' + esc(it.url) + '" target="_blank" rel="noopener">' + icon("external") + (it.type === "paper" ? "Read the paper" : "Read the story") + "</a>" +
          (it.doi ? '<a class="pill" href="https://doi.org/' + esc(it.doi) + '" target="_blank" rel="noopener">DOI</a>' : "") +
          '<span class="news__source">' + esc(host(it.url)) + "</span>" +
          (it.flag ? '<span class="badge badge--sample" title="' + esc(it.flag) + '">verify</span>' : "") +
        "</div>" +
      "</article>";
    return html;
  }

  function renderTeaser(el, items, byId) {
    var n = parseInt(el.getAttribute("data-count"), 10) || 3;
    var top = items.slice(0, n);
    if (!top.length) { el.innerHTML = '<p class="pub-empty">No items yet — check back after the next weekly update.</p>'; return; }
    el.innerHTML = top.map(function (it) { return card(it, byId[it.menteeId], true); }).join("");
  }

  /* ---------- full page ---------- */
  var els, state, allItems, roster, cutoff, windowMonths;
  function initPage(items, byId, rosterData, news) {
    allItems = items; roster = rosterData;
    els = {
      search: document.getElementById("newsSearch"), clear: document.getElementById("newsClear"),
      mentee: document.getElementById("filterMentee"), type: document.getElementById("filterType"),
      sort: document.getElementById("sortBy"), count: document.getElementById("newsCount"),
      list: document.getElementById("newsList"), empty: document.getElementById("newsEmpty"),
      reset: document.getElementById("resetFilters"), emptyReset: document.getElementById("emptyReset"),
      updated: document.getElementById("newsUpdated"), dir: document.getElementById("menteeDirectory")
    };
    state = { q: "", mentee: "", type: "", sort: "date-desc", older: false };
    windowMonths = parseInt(news.windowMonths, 10) || WINDOW_MONTHS;
    cutoff = cutoffISO(windowMonths);
    els.older = document.getElementById("showOlder");
    if (els.older) {
      var nOld = items.filter(function (it) { return !inWindow(it, cutoff); }).length;
      els.older.hidden = nOld === 0;
      els.older.textContent = "Show " + nOld + " older item" + (nOld === 1 ? "" : "s");
      els.older.addEventListener("click", function () {
        state.older = !state.older;
        els.older.textContent = state.older ? "Hide older items" : "Show " + nOld + " older item" + (nOld === 1 ? "" : "s");
        render(byId);
      });
    }

    // mentee dropdown: only people who have items
    var withItems = {};
    items.forEach(function (it) { withItems[it.menteeId] = it.mentee; });
    Object.keys(withItems).sort(function (a, b) { return withItems[a].localeCompare(withItems[b]); })
      .forEach(function (id) { els.mentee.appendChild(option(id, withItems[id])); });
    Object.keys(TYPE_LABEL).forEach(function (t) { els.type.appendChild(option(t, TYPE_LABEL[t])); });

    if (els.updated && news.updated) els.updated.textContent = "· Feed last updated " + fmtDate(news.updated) + ".";

    // deep link ?mentee=id
    var qs = new URLSearchParams(location.search);
    if (qs.get("mentee") && withItems[qs.get("mentee")]) { state.mentee = qs.get("mentee"); els.mentee.value = state.mentee; }

    bind(byId); render(byId);
    if (els.dir) renderDirectory(els.dir, roster, withItems);
  }
  function option(v, l) { var o = document.createElement("option"); o.value = v; o.textContent = l; return o; }

  function bind(byId) {
    els.search.addEventListener("input", function () { state.q = els.search.value.trim().toLowerCase(); els.clear.hidden = !state.q; render(byId); });
    els.clear.addEventListener("click", function () { els.search.value = ""; state.q = ""; els.clear.hidden = true; els.search.focus(); render(byId); });
    els.mentee.addEventListener("change", function () { state.mentee = els.mentee.value; render(byId); });
    els.type.addEventListener("change", function () { state.type = els.type.value; render(byId); });
    els.sort.addEventListener("change", function () { state.sort = els.sort.value; render(byId); });
    var resetAll = function () {
      state = { q: "", mentee: "", type: "", sort: "date-desc", older: state.older };
      els.search.value = ""; els.clear.hidden = true; els.mentee.value = ""; els.type.value = ""; els.sort.value = "date-desc";
      render(byId);
    };
    els.reset.addEventListener("click", resetAll);
    if (els.emptyReset) els.emptyReset.addEventListener("click", resetAll);
    // clicking a name in the directory filters the feed
    if (els.dir) els.dir.addEventListener("click", function (e) {
      var b = e.target.closest("[data-filter-mentee]");
      if (!b) return;
      state.mentee = b.getAttribute("data-filter-mentee"); els.mentee.value = state.mentee; render(byId);
      document.getElementById("feed").scrollIntoView({ behavior: "smooth" });
    });
  }

  function matches(it, byId) {
    if (!state.older && !state.q && !state.mentee && !inWindow(it, cutoff)) return false;
    if (state.mentee && it.menteeId !== state.mentee) return false;
    if (state.type && it.type !== state.type) return false;
    if (state.q) {
      var m = byId[it.menteeId] || {};
      var hay = [it.title, it.mentee, it.venue, it.summary, it.authorsShort, m.institution, m.position, TYPE_LABEL[it.type]].join(" ").toLowerCase();
      var terms = state.q.split(/\s+/);
      for (var i = 0; i < terms.length; i++) if (hay.indexOf(terms[i]) === -1) return false;
    }
    return true;
  }

  function render(byId) {
    var list = allItems.filter(function (it) { return matches(it, byId); });
    list.sort(function (a, b) {
      if (state.sort === "date-asc") return String(a.date).localeCompare(String(b.date));
      if (state.sort === "mentee") return a.mentee.localeCompare(b.mentee) || String(b.date).localeCompare(String(a.date));
      return String(b.date).localeCompare(String(a.date));
    });
    var has = state.q || state.mentee || state.type;
    els.reset.hidden = !has;
    els.count.textContent = list.length + (list.length === 1 ? " item" : " items") +
      (has ? " match your filters" : (state.older ? " in the feed" : " from the last " + windowMonths + " months"));
    if (!list.length) { els.list.innerHTML = ""; els.empty.hidden = false; return; }
    els.empty.hidden = true;
    els.list.innerHTML = list.map(function (it) { return card(it, byId[it.menteeId], false); }).join("");
  }

  /* ---------- directory of mentees (current institution for everyone) ---------- */
  function renderDirectory(el, roster, withItems) {
    var people = (roster.mentees || []).filter(function (m) { return m.include !== false; });
    var groups = [
      { key: "current", label: "Current mentees" },
      { key: "past", label: "Former mentees" }
    ];
    el.innerHTML = groups.map(function (g) {
      var rows = people.filter(function (m) { return m.status === g.key; })
        .sort(function (a, b) { return surname(a.name).localeCompare(surname(b.name)) || a.name.localeCompare(b.name); })
        .map(function (m) {
          var where = [m.position, m.institution].filter(Boolean).join(", ");
          var name = withItems[m.id]
            ? '<button type="button" class="dir__name dir__name--link" data-filter-mentee="' + esc(m.id) + '" title="Show this person\'s news">' + esc(m.name) + (m.degree ? ", " + esc(m.degree) : "") + "</button>"
            : '<span class="dir__name">' + esc(m.name) + (m.degree ? ", " + esc(m.degree) : "") + "</span>";
          return '<li class="dir__row">' +
            '<div>' + name +
              '<span class="dir__then">' + esc(m.role) + (m.period ? " · " + esc(m.period) : "") + (m.project ? " · " + esc(m.project) : "") + "</span>" +
            "</div>" +
            '<div class="dir__now">' + (where ? esc(where) : '<span class="dir__unknown">Current institution not on record</span>') +
              (m.verify ? ' <span class="badge badge--sample" title="Affiliation from the CV or a secondary source; not yet confirmed on an official page">to confirm</span>' : "") +
              (m.institutionSource ? ' <a class="dir__src" href="' + esc(m.institutionSource) + '" target="_blank" rel="noopener" aria-label="Source for current affiliation">source</a>' : "") +
            "</div>" +
          "</li>";
        }).join("");
      return rows ? '<h3 class="dir__group">' + g.label + '</h3><ol class="dir">' + rows + "</ol>" : "";
    }).join("");
  }

  function icon(name) {
    var paths = {
      external: '<path d="M14 5h5v5m0-5L10 14M19 13v6H5V5h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (paths[name] || "") + "</svg>";
  }
})();
