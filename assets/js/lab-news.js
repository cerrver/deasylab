/* =============================================================
   Deasy Lab — Lab News feed.
   Renders data/lab-news.json (items) joined with data/lab-members.json
   (roster: the PI and current lab trainees). Every item lists the lab
   members on it and their role (first author, senior author, …).
   Works over HTTP (fetch) or from disk via the data/*.js mirrors
   (window.LAB_MEMBERS_DATA, window.LAB_NEWS_DATA).
   Two modes:
     • full page  — #labNewsList present: search / filter / sort + member strip
     • teaser     — #labNewsLatest present: the N most recent items
   Mirrors assets/js/mentee-news.js; no build step, no dependencies.
   ============================================================= */
(function () {
  "use strict";

  var NEWS_URL = "data/lab-news.json";
  var ROSTER_URL = "data/lab-members.json";
  var WINDOW_MONTHS = 24;

  function cutoffISO(months) {
    var d = new Date(); d.setMonth(d.getMonth() - months);
    return d.toISOString().slice(0, 10);
  }
  function inWindow(it, cutoff) { return String(it.date || "") >= cutoff.slice(0, String(it.date || "").length || 10); }

  var TYPE_LABEL = { paper: "Paper", media: "In the media", award: "Award / grant" };
  var ROLE_LABEL = {
    "first author": "first author", "last/senior author": "senior author",
    "corresponding author": "corresponding author", "co-author": "co-author",
    "subject": "featured", "quoted": "quoted", "recipient": "recipient"
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
  function host(url) { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return ""; } }
  function isPreprint(it) { return /preprint/i.test(it.venue || ""); }

  /* ---------- load both files (embedded first, then fetch) ---------- */
  function load(cb) {
    if (window.LAB_NEWS_DATA && window.LAB_MEMBERS_DATA) {
      cb(window.LAB_NEWS_DATA, window.LAB_MEMBERS_DATA); return;
    }
    Promise.all([
      fetch(NEWS_URL, { cache: "no-store" }).then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); }),
      fetch(ROSTER_URL, { cache: "no-store" }).then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
    ]).then(function (res) { cb(res[0], res[1]); })
      .catch(function (err) {
        console.error("[lab-news]", err);
        var el = document.getElementById("labNewsCount") || document.getElementById("labNewsLatest");
        if (el) el.innerHTML = '<p class="pub-empty">The Lab News data could not be loaded. Serve the site over HTTP or open it from the site folder (see README).</p>';
      });
  }

  load(function (news, roster) {
    var byId = {};
    (roster.members || []).forEach(function (m) { byId[m.id] = m; });
    // keep an item only if at least one listed person is still included in the roster
    var items = (news.items || []).filter(function (it) {
      var ps = it.people || [];
      if (!ps.length) return true;
      return ps.some(function (p) { var m = byId[p.id]; return !m || m.include !== false; });
    });
    items.sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });

    var teaser = document.getElementById("labNewsLatest");
    if (teaser) renderTeaser(teaser, items, byId);
    if (document.getElementById("labNewsList")) initPage(items, byId, roster, news);
  });

  /* ---------- shared card ---------- */
  function peopleLine(it, byId) {
    var ps = (it.people || []).filter(function (p) { var m = byId[p.id]; return !m || m.include !== false; });
    if (!ps.length) return "";
    var parts = ps.map(function (p) {
      var m = byId[p.id] || {};
      var name = m.name || p.id;
      var role = ROLE_LABEL[p.role] || p.role;
      return '<span class="news__person' + (m.isPI ? " news__person--pi" : "") + '"><strong>' + esc(name) + "</strong>" +
        (role ? '<span class="news__role">' + esc(role) + "</span>" : "") +
        (m.verify ? '<span class="badge badge--sample news__verify" title="' + esc(m.notes || "Roster entry still to be confirmed") + '">to confirm</span>' : "") +
        "</span>";
    });
    return '<span class="news__who news__who--lab"><span class="news__wholabel">From the lab:</span>' + parts.join('<span class="news__sep" aria-hidden="true">·</span>') + "</span>";
  }

  function card(it, byId, compact) {
    var type = TYPE_LABEL[it.type] || it.type;
    if (it.type === "paper" && isPreprint(it)) type = "Preprint";
    var title = '<a href="' + esc(it.url) + '" target="_blank" rel="noopener">' + esc(it.title) + "</a>";
    var meta = [];
    if (it.venue) meta.push("<em>" + esc(it.venue) + "</em>");
    if (it.authorsShort) meta.push(esc(it.authorsShort));
    var html = '' +
      '<article class="news news--' + esc(it.type) + (compact ? " news--compact" : "") + '" data-people="' + esc((it.people || []).map(function (p) { return p.id; }).join(" ")) + '">' +
        '<div class="news__head">' +
          '<span class="news__type">' + esc(type) + "</span>" +
          '<time class="news__date" datetime="' + esc(it.date) + '">' + esc(fmtDate(it.date)) + "</time>" +
        "</div>" +
        peopleLine(it, byId) +
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
    el.innerHTML = top.map(function (it) { return card(it, byId, true); }).join("");
  }

  /* ---------- full page ---------- */
  var els, state, allItems, cutoff, windowMonths;
  function initPage(items, byId, roster, news) {
    allItems = items;
    els = {
      search: document.getElementById("labNewsSearch"), clear: document.getElementById("labNewsClear"),
      person: document.getElementById("filterPerson"), type: document.getElementById("filterType"),
      sort: document.getElementById("sortBy"), count: document.getElementById("labNewsCount"),
      list: document.getElementById("labNewsList"), empty: document.getElementById("labNewsEmpty"),
      reset: document.getElementById("resetFilters"), emptyReset: document.getElementById("emptyReset"),
      updated: document.getElementById("labNewsUpdated"), strip: document.getElementById("labMembers"),
      older: document.getElementById("showOlder")
    };
    state = { q: "", person: "", type: "", sort: "date-desc", older: false };
    windowMonths = parseInt(news.windowMonths, 10) || WINDOW_MONTHS;
    cutoff = cutoffISO(windowMonths);
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

    // person dropdown: roster order (PI first), only people who have items
    var counts = {};
    items.forEach(function (it) { (it.people || []).forEach(function (p) { counts[p.id] = (counts[p.id] || 0) + 1; }); });
    (roster.members || []).filter(function (m) { return m.include !== false && counts[m.id]; })
      .forEach(function (m) { els.person.appendChild(option(m.id, m.name)); });
    var types = {};
    items.forEach(function (it) { types[it.type] = 1; });
    Object.keys(TYPE_LABEL).forEach(function (t) { if (types[t]) els.type.appendChild(option(t, TYPE_LABEL[t])); });

    if (els.updated && news.updated) els.updated.textContent = "· Feed last updated " + fmtDate(news.updated) + ".";

    // deep link ?person=id
    var qs = new URLSearchParams(location.search);
    if (qs.get("person") && counts[qs.get("person")]) { state.person = qs.get("person"); els.person.value = state.person; }

    bind(byId); render(byId);
    if (els.strip) renderStrip(els.strip, roster, counts);
  }
  function option(v, l) { var o = document.createElement("option"); o.value = v; o.textContent = l; return o; }

  function bind(byId) {
    els.search.addEventListener("input", function () { state.q = els.search.value.trim().toLowerCase(); els.clear.hidden = !state.q; render(byId); });
    els.clear.addEventListener("click", function () { els.search.value = ""; state.q = ""; els.clear.hidden = true; els.search.focus(); render(byId); });
    els.person.addEventListener("change", function () { state.person = els.person.value; render(byId); syncStrip(); });
    els.type.addEventListener("change", function () { state.type = els.type.value; render(byId); });
    els.sort.addEventListener("change", function () { state.sort = els.sort.value; render(byId); });
    var resetAll = function () {
      state = { q: "", person: "", type: "", sort: "date-desc", older: state.older };
      els.search.value = ""; els.clear.hidden = true; els.person.value = ""; els.type.value = ""; els.sort.value = "date-desc";
      render(byId); syncStrip();
    };
    els.reset.addEventListener("click", resetAll);
    if (els.emptyReset) els.emptyReset.addEventListener("click", resetAll);
    // clicking a member chip filters the feed (click again to clear)
    if (els.strip) els.strip.addEventListener("click", function (e) {
      var b = e.target.closest("[data-filter-person]");
      if (!b) return;
      var id = b.getAttribute("data-filter-person");
      state.person = state.person === id ? "" : id; els.person.value = state.person; render(byId); syncStrip();
      document.getElementById("feed").scrollIntoView({ behavior: "smooth" });
    });
  }
  function syncStrip() {
    if (!els.strip) return;
    Array.prototype.forEach.call(els.strip.querySelectorAll("[data-filter-person]"), function (b) {
      var on = b.getAttribute("data-filter-person") === state.person;
      b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function matches(it, byId) {
    if (!state.older && !state.q && !state.person && !inWindow(it, cutoff)) return false;
    if (state.person && !(it.people || []).some(function (p) { return p.id === state.person; })) return false;
    if (state.type && it.type !== state.type) return false;
    if (state.q) {
      var names = (it.people || []).map(function (p) { return (byId[p.id] || {}).name || p.id; }).join(" ");
      var hay = [it.title, names, it.venue, it.summary, it.authorsShort, TYPE_LABEL[it.type], isPreprint(it) ? "preprint" : ""].join(" ").toLowerCase();
      var terms = state.q.split(/\s+/);
      for (var i = 0; i < terms.length; i++) if (hay.indexOf(terms[i]) === -1) return false;
    }
    return true;
  }

  function render(byId) {
    var list = allItems.filter(function (it) { return matches(it, byId); });
    list.sort(function (a, b) {
      if (state.sort === "date-asc") return String(a.date).localeCompare(String(b.date));
      if (state.sort === "venue") return String(a.venue || "").localeCompare(String(b.venue || "")) || String(b.date).localeCompare(String(a.date));
      return String(b.date).localeCompare(String(a.date));
    });
    var has = state.q || state.person || state.type;
    els.reset.hidden = !has;
    els.count.textContent = list.length + (list.length === 1 ? " item" : " items") +
      (has ? " match your filters" : (state.older ? " in the feed" : " from the last " + windowMonths + " months"));
    if (!list.length) { els.list.innerHTML = ""; els.empty.hidden = false; return; }
    els.empty.hidden = true;
    els.list.innerHTML = list.map(function (it) { return card(it, byId, false); }).join("");
  }

  /* ---------- strip of lab members with item counts ---------- */
  function renderStrip(el, roster, counts) {
    var people = (roster.members || []).filter(function (m) { return m.include !== false; });
    el.innerHTML = people.map(function (m) {
      var n = counts[m.id] || 0;
      var label = esc(m.name) + (m.degree ? ", " + esc(m.degree) : "");
      var sub = esc(m.isPI ? "Principal investigator" : (m.role || ""));
      if (n) {
        return '<button type="button" class="member' + (m.isPI ? " member--pi" : "") + '" data-filter-person="' + esc(m.id) + '" aria-pressed="false" title="Show this person\'s items">' +
          '<span class="member__name">' + label + "</span><span class=\"member__role\">" + sub + "</span>" +
          '<span class="member__count">' + n + (n === 1 ? " item" : " items") + "</span>" +
          (m.verify ? '<span class="badge badge--sample" title="' + esc(m.notes || "") + '">to confirm</span>' : "") +
          "</button>";
      }
      return '<div class="member member--none' + (m.isPI ? " member--pi" : "") + '">' +
        '<span class="member__name">' + label + "</span><span class=\"member__role\">" + sub + "</span>" +
        '<span class="member__count">no items yet</span>' +
        (m.verify ? '<span class="badge badge--sample" title="' + esc(m.notes || "") + '">to confirm</span>' : "") +
        "</div>";
    }).join("");
  }

  function icon(name) {
    var paths = {
      external: '<path d="M14 5h5v5m0-5L10 14M19 13v6H5V5h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (paths[name] || "") + "</svg>";
  }
})();
