/* Mohammed Isa Dikko: portfolio behaviour (no dependencies) */
(function () {
  "use strict";

  var SITE = window.SITE, PROJECTS = window.PROJECTS;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  var LABELS = { design: "Design", data: "Data", software: "Software", marketing: "Marketing" };

  /* ---------- Safe storage ---------- */
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }
  function session(key, val) {
    try { if (val === undefined) return sessionStorage.getItem(key); sessionStorage.setItem(key, val); } catch (e) { return null; }
  }

  /* ---------- Splash ---------- */
  var splash = $("#splash");
  function endSplash() {
    if (!splash || splash.classList.contains("is-done")) return;
    splash.classList.add("is-done");
    document.body.classList.remove("is-locked");
    session("splashSeen", "1");
    document.removeEventListener("keydown", endSplash);
  }
  if (splash) {
    if (session("splashSeen")) {
      splash.classList.add("is-done");
    } else {
      document.body.classList.add("is-locked");
      var nameEl = $("#splashName"), txt = SITE.name;
      nameEl.textContent = "";
      txt.split("").forEach(function (ch, i) {
        var s = el("span", "", ch === " " ? "\u00A0" : ch);
        s.setAttribute("aria-hidden", "true");
        s.style.animationDelay = (i * 45) + "ms";
        nameEl.appendChild(s);
      });
      splash.addEventListener("click", endSplash);
      document.addEventListener("keydown", endSplash);
      setTimeout(endSplash, 2600);
    }
  }

  /* ---------- Theme ---------- */
  var root = document.documentElement;
  var savedTheme = store("theme");
  if (savedTheme === "light" || savedTheme === "dark") root.setAttribute("data-theme", savedTheme);
  $("#themeBtn").addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store("theme", next);
  });

  /* ---------- Mobile menu ---------- */
  var menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  function setMenu(open) {
    navLinks.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", function () { setMenu(!navLinks.classList.contains("is-open")); });
  navLinks.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });

  /* ---------- Hero ---------- */
  $("#heroMeta").textContent = "Portfolio " + new Date().getFullYear() + " / " + SITE.location;

  /* ---------- Work grid ---------- */
  var grid = $("#grid"), emptyMsg = $("#empty"), currentFilter = "all";

  function cover(p, cls) {
    var c = el("div", cls);
    c.style.setProperty("--tone", p.tone || "#2f4bff");
    if (p.cover) {
      var img = el("img");
      img.src = p.cover; img.alt = p.title; img.loading = "lazy";
      img.onerror = function () { img.remove(); };
      c.appendChild(img);
    }
    c.appendChild(el("span", "cover-mark", p.title.split(" ").slice(0, 2).join(" ")));
    return c;
  }

  function renderGrid() {
    grid.textContent = "";
    var list = PROJECTS.filter(function (p) {
      return currentFilter === "all" || p.categories.indexOf(currentFilter) > -1;
    });
    emptyMsg.hidden = list.length > 0;
    list.forEach(function (p) {
      var card = el("button", "card");
      card.type = "button";
      card.setAttribute("aria-label", "Open case study: " + p.title);
      card.appendChild(cover(p, "cover"));
      var info = el("div", "card-info");
      info.appendChild(el("h3", "", p.title));
      info.appendChild(el("p", "", p.summary));
      var tags = el("div", "tags");
      p.categories.forEach(function (c) { tags.appendChild(el("span", "tag", LABELS[c] || c)); });
      tags.appendChild(el("span", "tag", p.year));
      info.appendChild(tags);
      card.appendChild(info);
      card.addEventListener("click", function () { openCase(p.slug); });
      grid.appendChild(card);
    });
  }

  function setFilter(f) {
    currentFilter = f;
    document.querySelectorAll(".chip").forEach(function (c) {
      var on = c.getAttribute("data-filter") === f;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", String(on));
    });
    renderGrid();
  }
  $("#filters").addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (b) setFilter(b.getAttribute("data-filter"));
  });
  document.querySelectorAll("[data-jump]").forEach(function (b) {
    b.addEventListener("click", function () {
      setFilter(b.getAttribute("data-jump"));
      $("#work").scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- Services, toolbox, about, stats ---------- */
  SITE.services.forEach(function (s) {
    var d = el("div", "service");
    d.appendChild(el("h3", "", s.title));
    d.appendChild(el("p", "", s.text));
    $("#services-list").appendChild(d);
  });
  SITE.toolbox.forEach(function (g) {
    var d = el("div", "tool-group");
    d.appendChild(el("h3", "", g.group));
    var ul = el("ul", "tool-list");
    g.items.forEach(function (i) { ul.appendChild(el("li", "", i)); });
    d.appendChild(ul);
    $("#toolbox-list").appendChild(d);
  });
  SITE.about.forEach(function (t) { $("#aboutText").appendChild(el("p", "", t)); });
  SITE.stats.forEach(function (s) {
    var li = el("li");
    li.appendChild(el("strong", "", s.value));
    li.appendChild(el("span", "", s.label));
    $("#stats").appendChild(li);
  });

  /* ---------- Contact ---------- */
  var emailLink = $("#emailLink");
  emailLink.href = "mailto:" + SITE.email;
  emailLink.textContent = SITE.email;
  $("#copyEmail").addEventListener("click", function () {
    var done = function (msg) {
      var c = $("#copied"); c.textContent = msg;
      setTimeout(function () { c.textContent = ""; }, 2500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(SITE.email).then(function () { done("Email copied."); }, function () { done("Copy failed. Select the email and copy it."); });
    } else { done("Copy failed. Select the email and copy it."); }
  });
  SITE.socials.forEach(function (s) {
    var li = el("li"), a = el("a", "", s.label);
    a.href = s.url; a.target = "_blank"; a.rel = "noopener noreferrer";
    li.appendChild(a);
    $("#socials").appendChild(li);
  });

  /* ---------- Marquee ---------- */
  var track = $("#marquee");
  for (var m = 0; m < 24; m++) track.appendChild(el("span", "", SITE.marquee + " /"));
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Case study dialog ---------- */
  var dlg = $("#case"), body = $("#caseBody"), activeIndex = -1, lastFocus = null;

  function block(title, text) {
    var d = el("section", "case-block");
    d.appendChild(el("h3", "", title));
    d.appendChild(el("p", "", text));
    return d;
  }

  function renderCase(p) {
    body.textContent = "";

    var hero = el("header", "case-hero");
    hero.appendChild(el("p", "meta", p.categories.map(function (c) { return LABELS[c] || c; }).join(", ") + " / " + p.year));
    var h = el("h2", "", p.title); h.id = "caseTitle";
    hero.appendChild(h);
    hero.appendChild(el("p", "lede", p.summary));
    body.appendChild(hero);

    var facts = el("dl", "facts");
    [["Client", p.client], ["Role", p.role], ["Duration", p.duration], ["Tools", (p.tools || []).join(", ")]].forEach(function (f) {
      if (!f[1]) return;
      var d = el("div"); d.appendChild(el("dt", "", f[0])); d.appendChild(el("dd", "", f[1])); facts.appendChild(d);
    });
    body.appendChild(facts);

    body.appendChild(cover(p, "case-cover"));
    if (p.overview) body.appendChild(block("Overview", p.overview));
    if (p.challenge) body.appendChild(block("The challenge", p.challenge));

    if (p.process && p.process.length) {
      var wrap = el("section", "case-block");
      wrap.appendChild(el("h3", "", "What I did"));
      var steps = el("div", "steps");
      p.process.forEach(function (s) {
        var d = el("div", "step");
        d.appendChild(el("h3", "", s.title));
        d.appendChild(el("p", "", s.text));
        steps.appendChild(d);
      });
      wrap.appendChild(steps);
      body.appendChild(wrap);
    }

    if (p.results && p.results.length) {
      var rw = el("section", "case-block");
      rw.style.maxWidth = "none";
      rw.appendChild(el("h3", "", "The result"));
      var rs = el("div", "results");
      p.results.forEach(function (r) {
        var d = el("div", "result");
        d.appendChild(el("strong", "", r.value));
        d.appendChild(el("span", "", r.label));
        rs.appendChild(d);
      });
      rw.appendChild(rs);
      body.appendChild(rw);
    }

    if (p.gallery && p.gallery.length) {
      var g = el("div", "gallery");
      p.gallery.forEach(function (src) {
        var i = el("img"); i.src = src; i.alt = p.title + " image"; i.loading = "lazy";
        i.onerror = function () { i.remove(); };
        g.appendChild(i);
      });
      body.appendChild(g);
    }

    if (p.link) {
      var a = el("a", "btn", "Visit project");
      a.href = p.link; a.target = "_blank"; a.rel = "noopener noreferrer";
      a.style.justifySelf = "start";
      body.appendChild(a);
    }
    dlg.scrollTop = 0;
  }

  function indexOfSlug(slug) {
    for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].slug === slug) return i;
    return -1;
  }

  function openCase(slug, fromHash) {
    var i = indexOfSlug(slug);
    if (i < 0) return;
    activeIndex = i;
    renderCase(PROJECTS[i]);
    if (!dlg.open) {
      lastFocus = document.activeElement;
      if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
      document.body.classList.add("is-locked");
    }
    if (!fromHash) history.replaceState(null, "", "#case/" + slug);
  }

  function closeCase() {
    if (dlg.open) dlg.close();
  }
  dlg.addEventListener("close", function () {
    document.body.classList.remove("is-locked");
    if (location.hash.indexOf("#case/") === 0) history.replaceState(null, "", "#work");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) closeCase(); });
  $("#caseClose").addEventListener("click", closeCase);
  $("#casePrev").addEventListener("click", function () {
    openCase(PROJECTS[(activeIndex - 1 + PROJECTS.length) % PROJECTS.length].slug);
  });
  $("#caseNext").addEventListener("click", function () {
    openCase(PROJECTS[(activeIndex + 1) % PROJECTS.length].slug);
  });
  document.addEventListener("keydown", function (e) {
    if (!dlg.open) return;
    if (e.key === "ArrowRight") $("#caseNext").click();
    if (e.key === "ArrowLeft") $("#casePrev").click();
  });

  /* Open a case study straight from a link like  yoursite.com/#case/sales-dashboard */
  function fromHash() {
    var m = location.hash.match(/^#case\/([a-z0-9-]+)$/);
    if (m) openCase(m[1], true);
  }
  window.addEventListener("hashchange", fromHash);

  /* ---------- Init ---------- */
  renderGrid();
  fromHash();
})();
