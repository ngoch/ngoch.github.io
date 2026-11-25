(() => {
  const cv = window.CV;
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  document.querySelectorAll("[data-bind]").forEach((el) => (el.textContent = cv[el.dataset.bind] ?? ""));
  $("#year").textContent = new Date().getFullYear();
  if (cv.currently) $("#currently").innerHTML = `💼 currently @ <span class="accent">${esc(cv.currently)}</span>`;
  $("#avatar").src = cv.avatar;

  $("#about-text").innerHTML = cv.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#stats").innerHTML = cv.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");

  $("#experience-list").innerHTML = cv.experience.map((e) => `
    <li class="reveal">
      <span class="period mono">${esc(e.period)}</span>
      <div class="card">
        <h4>${esc(e.role)} <span class="accent">@ ${e.url ? `<a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.company)}</a>` : esc(e.company)}</span></h4>
        ${e.location ? `<p class="dim mono small">${esc(e.location)}</p>` : ""}
        <ul>${(e.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        ${(e.achievements || []).length ? `<p class="label mono">// key achievements</p><ul class="wins">${e.achievements.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
        ${(e.tech || []).length ? `<div class="tags">${e.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
      </div>
    </li>`).join("");

  $("#education-list").innerHTML = cv.education.map((e) => `
    <li class="reveal">
      <span class="period mono">${esc(e.period)}</span>
      <div class="card">
        <h4>${esc(e.degree)}</h4>
        <p>${esc(e.school)}</p>
        <p class="dim small">${esc(e.detail)}</p>
      </div>
    </li>`).join("");

  $("#skills-list").innerHTML = cv.skills.map((g) => `
    <div class="skill reveal">
      <h4 class="mono"><span class="accent">#</span> ${esc(g.group)}</h4>
      <div class="tags">${g.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div>
    </div>`).join("");

  const links = [...cv.social];
  if (cv.email) links.unshift({ label: cv.email, url: `mailto:${cv.email}` });
  $("#social").innerHTML = links.map((s) => `<a class="btn" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");

  // Terminal JSON card
  const summary = {
    name: cv.name,
    role: cv.title,
    location: cv.location,
    ...(cv.currently ? { currently: cv.currently } : {}),
    stack: ["Java / Spring", "Python", "Node.js", "AWS", "PostgreSQL"],
    interests: ["AI", "deep learning", "NLP"],
  };
  const json = JSON.stringify(summary, null, 2)
    .replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]))
    .replace(/"([^"]*)"(\s*:)?/g, (_, v, colon) => colon ? `<span class="k">"${v}"</span>:` : `<span class="s">"${v}"</span>`);
  $("#term").innerHTML = json;

  // Typing tagline
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const el = $("#typed");
  if (reduce) el.textContent = cv.tagline.join(" · ");
  else {
    let i = 0, j = 0, del = false;
    const tick = () => {
      const word = cv.tagline[i];
      el.textContent = word.slice(0, j);
      if (!del && j++ === word.length) { del = true; return setTimeout(tick, 1600); }
      if (del && j-- === 0) { del = false; i = (i + 1) % cv.tagline.length; j = 0; }
      setTimeout(tick, del ? 40 : 80);
    };
    tick();
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((n) => (reduce ? n.classList.add("in") : io.observe(n)));
})();
