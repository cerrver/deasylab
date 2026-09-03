/* =============================================================
   Deasy Lab — site interactions: mobile nav, active-page nav,
   stat counters, avatar images, footer year, hero video fallback.
   Multi-page site: nav highlights the current page by filename.
   ============================================================= */
(function () {
  "use strict";

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      menu.hidden = open;
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { toggle.setAttribute("aria-expanded", "false"); menu.hidden = true; }
    });
  }

  /* ---- active nav link by current page ---- */
  var path = location.pathname.split("/").pop() || "index.html";
  Array.prototype.forEach.call(document.querySelectorAll(".nav__links a, .nav__mobile a"), function (a) {
    var href = (a.getAttribute("href") || "").split("#")[0];
    if (href === path || (path === "" && href === "index.html")) a.classList.add("is-active");
  });

  /* ---- animated stat counters ---- */
  var counters = Array.prototype.slice.call(document.querySelectorAll(".stat__num[data-count]"));
  if ("IntersectionObserver" in window && counters.length) {
    var seen = new WeakSet();
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !seen.has(en.target)) {
          seen.add(en.target);
          countUp(en.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cObs.observe(c); });
  }
  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1100, start = null;
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { el.textContent = target + suffix; return; }
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---- avatar images: set data-img="assets/img/name.jpg" to use a photo ---- */
  Array.prototype.forEach.call(document.querySelectorAll(".person__avatar[data-img]"), function (el) {
    var src = el.getAttribute("data-img");
    if (src) { el.style.backgroundImage = "url('" + src + "')"; el.style.setProperty("--img", "1"); }
  });

  /* ---- hero video: respect reduced motion (show poster, no autoplay) ---- */
  var v = document.querySelector("video[data-hero]");
  if (v && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    try { v.removeAttribute("autoplay"); v.pause(); } catch (e) {}
  }

  /* ---- footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
