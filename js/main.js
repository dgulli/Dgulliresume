/* ============================================================
   Renders every section from window.RESUME (js/data.js) and
   wires up the menu, theme toggle and scroll animations.
   ============================================================ */
(function () {
  "use strict";
  var R = window.RESUME;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var MAX_BULLETS = 4; // bullets shown per role before "Show all"

  var ICON = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5v6M8 7.5v.01M12 16.5v-6M12 13a2.5 2.5 0 0 1 4.5-1.200V16.5"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.800 2.800L16 9.5"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  };

  function head(kicker, title, lede) {
    return '<div class="section__head" data-reveal><span class="kicker">' + kicker + "</span><h2>" + title + "</h2>" +
      (lede ? '<p class="section__lede">' + lede + "</p>" : "") + "</div>";
  }
  function count(m) {
    return '<span data-count="' + m.value + '" data-decimals="' + (m.decimals || 0) + '">' + fmt(m.value, m.decimals || 0) + "</span>";
  }
  function fmt(n, decimals) {
    return n.toLocaleString("en-AU", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  }
  function chips(items, cls) {
    return '<div class="chips">' + items.map(function (t) { return '<span class="chip ' + (cls || "") + '">' + t + "</span>"; }).join("") + "</div>";
  }

  /* ---------------- HeroSection ---------------- */
  $("#home").innerHTML =
    '<div class="hero__glow" aria-hidden="true"></div>' +
    '<div class="wrap hero__grid"><div>' +
      '<span class="eyebrow"><i></i>' + R.location + " · " + R.employer + "</span>" +
      '<p class="hero__hi">' + R.hero.greeting + "</p>" +
      "<h1>" + R.hero.headline.map(function (l, i) {
        return '<span class="line"><span style="--i:' + i + '"' + (i === R.hero.accentLine ? ' class="accent"' : "") + ">" + l + "</span></span>";
      }).join(" ") + "</h1>" +
      '<p class="hero__intro" data-reveal style="--i:5">' + R.hero.intro + "</p>" +
      '<div class="hero__cta" data-reveal style="--i:7">' +
        '<a class="btn btn--primary" href="#work">View my work ' + ICON.arrow + "</a>" +
        '<a class="btn btn--ghost" href="' + R.resumePdf + '" download>' + ICON.download + " Download resume</a>" +
        '<a class="btn btn--ghost" href="#contact">Contact me</a>' +
      "</div>" +
      '<ul class="hero__facts" data-reveal style="--i:9">' + R.hero.facts.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>" +
    "</div>" +
    '<div class="profile" data-reveal style="--i:4">' +
      '<div class="profile__card">' +
        '<div class="avatar" role="img" aria-label="' + (R.photo ? "Portrait of " + R.name : R.name + " initials") + '"><span class="avatar__ring"></span>' + (R.photo ? '<img class="avatar__photo" src="' + R.photo + '" alt="" width="640" height="640">' : '<span class="avatar__initials">' + R.initials + "</span>") + "</div>" +
        '<p class="profile__name">' + R.name + "</p>" +
        '<p class="profile__role">' + R.shortTitle + "<br>" + R.employer + "</p>" +
      "</div>" +
      '<div class="profile__chip profile__chip--a"><b>7×</b> Google Cloud certified</div>' +
      '<div class="profile__chip profile__chip--b"><b>NV1</b> security cleared</div>' +
    "</div></div>";

  /* ---------------- Marquee ---------------- */
  var names = R.engagements.map(function (n) { return "<span>" + n + "</span>"; }).join("");
  $("#marquee").innerHTML = '<div class="marquee__track">' + names + names.replace(/<span>/g, '<span aria-hidden="true">') + "</div>";

  /* ---------------- AboutSection ---------------- */
  $("#about").innerHTML = '<div class="wrap">' + head("About", "Adviser first, then builder.") +
    '<div class="about"><div class="about__text" data-reveal>' + R.about.map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>" +
    '<div class="about__cards">' + R.highlights.map(function (h, i) {
      return '<div class="card card--lift stat" data-reveal style="--i:' + (i + 1) + '"><div class="stat__num">' + count(h) + h.suffix + '</div><div class="stat__label">' + h.label + "</div></div>";
    }).join("") + "</div></div></div>";

  /* ---------------- Impact ---------------- */
  $("#impact").innerHTML = '<div class="wrap">' + head("Impact", "Numbers from recent work.", "Measured results from AI systems I've designed and built for regulated customers.") +
    '<div class="metrics" data-reveal>' + R.metrics.map(function (m) {
      return '<div class="metric"><div class="metric__num">' + count(m) + (m.suffix ? "<small>" + m.suffix + "</small>" : "") + '</div><p class="metric__label">' + m.label + "</p></div>";
    }).join("") + "</div></div>";

  /* ---------------- SkillsSection ---------------- */
  $("#skills").innerHTML = '<div class="wrap">' + head("Skills", "What I work with.", "From model behaviour and evaluation through to the platforms, controls and conversations around them.") +
    '<div class="skills">' + R.skills.map(function (s, i) {
      return '<div class="card card--lift skill" data-reveal style="--i:' + (i % 3) + '"><h3>' + s.group + "</h3>" + chips(s.items) + "</div>";
    }).join("") + "</div></div>";

  /* ---------------- ProjectsSection ---------------- */
  $("#work").innerHTML = '<div class="wrap">' + head("Selected work", "Things I've designed and built.", "A few engagements that show how I work. The full detail is in the experience section below.") +
    '<div class="work">' + R.projects.map(function (p, i) {
      return '<article class="card card--lift project" data-reveal style="--i:' + (i % 3) + '">' +
        '<span class="project__client">' + p.client + "</span><h3>" + p.name + '</h3><p class="project__summary">' + p.summary + "</p>" +
        "<ul>" + p.points.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" + chips(p.tags, "chip--tag") + "</article>";
    }).join("") + "</div></div>";

  /* ---------------- ExperienceSection ---------------- */
  $("#experience").innerHTML = '<div class="wrap">' + head("Experience", "Twenty years, one thread.", "Sitting between customers and engineering teams, and building the thing we agreed on.") +
    '<div class="timeline"><div class="timeline__rail"></div><div class="timeline__fill"></div>' + R.experience.map(function (c) {
      return '<div class="company"><h3 class="company__name" data-reveal>' + c.company + "</h3>" + c.roles.map(function (r) {
        var titles = [{ title: r.title, period: r.period }].concat(r.extraTitles || []);
        var extra = r.bullets.length > MAX_BULLETS + 1;
        return '<article class="card role" data-reveal>' + titles.map(function (t) {
          return '<div class="role__head"><h4>' + t.title + '</h4><span class="role__period">' + t.period + "</span></div>";
        }).join("") + "<ul>" + r.bullets.map(function (b, n) {
          var hide = extra && n >= MAX_BULLETS;
          return "<li" + (hide ? ' class="is-extra" style="--n:' + (n - MAX_BULLETS) + '"' : "") + ">" + (b.lead ? "<b>" + b.lead + ":</b> " : "") + b.text + "</li>";
        }).join("") + "</ul>" +
        (extra ? '<button class="role__more" type="button" aria-expanded="false"><span>Show all ' + r.bullets.length + " highlights</span>" + ICON.chevron + "</button>" : "") +
        "</article>";
      }).join("") + "</div>";
    }).join("") + "</div></div>";

  /* ---------------- Education + Certifications ---------------- */
  $("#credentials").innerHTML = '<div class="wrap">' + head("Credentials", "Certifications, education and clearance.") +
    '<div class="creds"><div class="creds__col">' + R.certifications.map(function (g, i) {
      return '<div class="card cred" data-reveal style="--i:' + i + '"><h3>' + g.issuer + '</h3><p class="cred__sub">' + g.items.length + ' certifications</p><div class="cert-list">' +
        g.items.map(function (c) { return '<div class="cert">' + ICON.check + "<span>" + c + "</span></div>"; }).join("") + "</div></div>";
    }).join("") + '</div><div class="creds__col">' +
      '<div class="card cred cred--clearance" data-reveal style="--i:1"><span class="cred__badge">' + R.clearance.level + "</span><div><h3>Security clearance</h3><p class=\"cred__sub\" style=\"margin:0\">" + R.clearance.label + "</p></div></div>" +
      R.education.map(function (e) {
        return '<div class="card cred" data-reveal style="--i:2"><span class="kicker">Education</span><h3>' + e.degree + '</h3><p class="cred__sub" style="margin:6px 0 0">' + e.school + " · " + e.period + "</p></div>";
      }).join("") +
      '<div class="card cred" data-reveal style="--i:3"><span class="kicker">Community</span><ul class="plain">' + R.community.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul></div>" +
    "</div></div></div>";

  /* ---------------- Resume download ---------------- */
  $("#resume").innerHTML = '<div class="wrap"><div class="cta" data-reveal><div><h2>Want the full resume?</h2>' +
    "<p>Download my resume to see my complete skills, experience and credentials in one place.</p></div>" +
    '<div class="cta__actions"><a class="btn btn--primary" href="' + R.resumePdf + '" download>' + ICON.download + " Download resume</a>" +
    '<a class="btn btn--ghost" href="resume.html">View print version</a></div></div></div>';

  /* ---------------- ContactSection ---------------- */
  $("#contact").innerHTML = '<div class="wrap">' + head("Contact", "Let's talk.", "Have an opportunity, project or collaboration in mind? Feel free to reach out.") +
    '<div class="contact"><div class="contact__list" data-reveal>' +
      '<div class="contact__item"><span class="contact__icon">' + ICON.mail + '</span><div class="contact__meta"><small>Email</small><a href="mailto:' + R.email + '" style="text-decoration:none"><span>' + R.email + '</span></a></div><button class="copy" type="button" id="copyEmail">Copy</button></div>' +
      '<a class="contact__item" href="' + R.linkedin + '" target="_blank" rel="noopener"><span class="contact__icon">' + ICON.linkedin + '</span><div class="contact__meta"><small>LinkedIn</small><span>' + R.linkedinLabel + "</span></div></a>" +
      '<div class="contact__item"><span class="contact__icon">' + ICON.pin + '</span><div class="contact__meta"><small>Location</small><span>' + R.location + "</span></div></div>" +
    "</div>" +
    '<form class="card form" id="contactForm" data-reveal style="--i:1">' +
      '<div class="field"><label for="f-name">Name</label><input id="f-name" name="name" autocomplete="name" required></div>' +
      '<div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>' +
      '<div class="field"><label for="f-msg">Message</label><textarea id="f-msg" name="message" required></textarea></div>' +
      '<button class="btn btn--primary" type="submit">Send message ' + ICON.arrow + "</button>" +
      '<p class="form__note">This opens your email app with the message ready to send.</p>' +
    "</form></div></div>";

  /* ---------------- Footer ---------------- */
  $("#footer").innerHTML = '<div class="wrap footer__inner"><div><strong>' + R.name + "</strong><br>" + R.shortTitle + ". Built with care in Melbourne.</div>" +
    '<div class="footer__links"><a href="mailto:' + R.email + '">Email</a><a href="' + R.linkedin + '" target="_blank" rel="noopener">LinkedIn</a><a href="' + R.resumePdf + '" download>Resume</a><a href="#home">Back to top ↑</a></div>' +
    "<div>© " + new Date().getFullYear() + " " + R.name + "</div></div>";

  /* ============================================================
     Behaviour
     ============================================================ */

  // Theme toggle
  $("#themeToggle").addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Mobile menu
  var nav = $("#nav"), burger = $("#burger");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  burger.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  $$("#navLinks a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // Scroll: progress bar, navbar background, timeline fill
  var progress = $(".progress"), timeline = $(".timeline"), fill = $(".timeline__fill"), ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    nav.classList.toggle("is-scrolled", y > 12);
    var r = timeline.getBoundingClientRect();
    var done = Math.min(Math.max(innerHeight * 0.6 - r.top, 0), r.height - 8);
    fill.style.height = done + "px";
  }
  addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  // Hero glow follows the pointer
  var hero = $("#home");
  if (!reduceMotion && matchMedia("(hover: hover)").matches) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", e.clientX - r.left + "px");
      hero.style.setProperty("--my", e.clientY - r.top + "px");
    });
  }

  // Reveal on scroll + number counters
  function runCount(el) {
    var end = parseFloat(el.dataset.count), d = parseInt(el.dataset.decimals, 10) || 0, t0 = null, dur = 1400;
    if (reduceMotion) return;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(end * eased, d);
      if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(end, d);
    }
    el.textContent = fmt(0, d);
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        $$("[data-count]", en.target).forEach(runCount);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$("[data-reveal]").forEach(function (el) { io.observe(el); });

    // Active nav link
    var links = {};
    $$("#navLinks a[href^='#']").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.remove("is-active"); });
        if (links[en.target.id]) links[en.target.id].classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { spy.observe(s); });
  } else {
    $$("[data-reveal]").forEach(function (el) { el.classList.add("is-in"); });
  }

  // Experience "show all"
  $$(".role__more").forEach(function (btn) {
    var total = btn.parentNode.querySelectorAll("li").length;
    btn.addEventListener("click", function () {
      var open = btn.parentNode.classList.toggle("is-expanded");
      btn.setAttribute("aria-expanded", String(open));
      btn.firstChild.textContent = open ? "Show fewer" : "Show all " + total + " highlights";
      onScroll();
    });
  });

  // Copy email
  $("#copyEmail").addEventListener("click", function () {
    var b = this;
    var done = function () { b.textContent = "Copied"; b.classList.add("is-done"); setTimeout(function () { b.textContent = "Copy"; b.classList.remove("is-done"); }, 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(R.email).then(done, function () {});
  });

  // Contact form: no backend, so hand over to the visitor's email app
  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var subject = "Website enquiry from " + f.name.value;
    var body = f.message.value + "\n\n" + f.name.value + "\n" + f.email.value;
    location.href = "mailto:" + R.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
