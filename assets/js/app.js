/* Zamm Studio — rendering, filtering and the detail dialog */
(function () {
  "use strict";

  const SITES = window.ZAMM_SITES || [];
  const GH_USER = "zamrizahir88";
  const CATS = ["Teaching", "Events", "Systems", "Tools", "Profile"];
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const state = { cat: "All", q: "", sort: "featured", visible: [] };
  const grid = $("#grid"), dlg = $("#detail");

  /* ---------- helpers ---------- */
  const host = (u) => { try { const x = new URL(u); return x.host + x.pathname.replace(/\/$/, ""); } catch (e) { return u; } };
  const time = (s) => { const t = Date.parse(s); return isNaN(t) ? 0 : t; };
  function fmtDate(s) {
    if (!s) return "—";
    if (/^\d{4}$/.test(s)) return s;
    const d = new Date(s);
    return isNaN(d) ? s : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function ago(s) {
    const t = time(s);
    if (!t || /^\d{4}$/.test(s)) return fmtDate(s);
    const days = Math.floor((Date.now() - t) / 864e5);
    if (days < 1) return "today";
    if (days < 2) return "yesterday";
    if (days < 30) return days + " days ago";
    if (days < 365) return Math.floor(days / 30) + " mo ago";
    return fmtDate(s);
  }
  function matches(s, q) {
    if (!q) return true;
    const hay = [s.name, s.short, s.tagline, s.description, s.category, s.audience, ...(s.tech || []), ...(s.features || [])].join(" ").toLowerCase();
    return q.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
  }

  /* ---------- filters ---------- */
  function renderFilters() {
    const count = (c) => SITES.filter((s) => c === "All" || s.category === c).length;
    $("#filters").innerHTML = ["All", ...CATS].filter((c) => count(c)).map((c) =>
      `<button class="chip" type="button" data-cat-btn="${c}" aria-pressed="${c === state.cat}">${c}<span class="n">${count(c)}</span></button>`
    ).join("");
  }

  /* ---------- cards ---------- */
  function cardHTML(s, i) {
    return `<li>
      <article class="card" data-cat="${esc(s.category)}" data-id="${esc(s.id)}" style="animation-delay:${Math.min(i, 8) * 45}ms">
        <div class="shot">
          <div class="browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>${esc(host(s.url))}</span></div>
          <div class="shot-img"><img src="${esc(s.shot)}" alt="" loading="lazy" width="960" height="600"></div>
          <div class="peek" aria-hidden="true"><span>View details</span></div>
        </div>
        <div class="card-body">
          <div class="card-top">
            <span class="emoji" aria-hidden="true">${s.icon}</span>
            <span class="cat">${esc(s.category)}</span>
            ${s.external ? '<span class="ext-badge">Google Sites</span>' : ""}
          </div>
          <h3><button class="card-btn" type="button" data-open="${esc(s.id)}">${esc(s.name)}</button></h3>
          <p>${esc(s.tagline)}</p>
          <ul class="tags" aria-label="Built with">${(s.tech || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          <div class="card-foot">
            <span class="updated" data-upd="${esc(s.id)}">Updated ${esc(ago(s.updated))}</span>
            <a class="open-link" href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="Open ${esc(s.name)} in a new tab">Open <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </article>
    </li>`;
  }

  function render() {
    let list = SITES.filter((s) => (state.cat === "All" || s.category === state.cat) && matches(s, state.q));
    if (state.sort === "recent") list = list.slice().sort((a, b) => time(b.updated) - time(a.updated));
    if (state.sort === "az") list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
    state.visible = list;
    grid.innerHTML = list.map(cardHTML).join("");
    $("#empty").hidden = list.length > 0;
    $("#resultLine").textContent = `Showing ${list.length} of ${SITES.length} websites` +
      (state.cat !== "All" ? ` in ${state.cat}` : "") + (state.q ? ` matching “${state.q}”` : "");
  }

  function renderStats() {
    const cats = new Set(SITES.map((s) => s.category));
    const latest = SITES.reduce((m, s) => (time(s.updated) > time(m) ? s.updated : m), "");
    $("#statSites").textContent = SITES.length;
    $("#heroCount").textContent = SITES.length;
    $("#statCats").textContent = cats.size;
    $("#statLatest").textContent = latest ? ago(latest) : "—";
  }

  /* ---------- detail dialog ---------- */
  let current = null;
  function openDetail(id) {
    const s = SITES.find((x) => x.id === id);
    if (!s) return;
    current = s;
    dlg.dataset.cat = s.category;
    $("#dImg").src = s.shot;
    $("#dImg").alt = "Screenshot of " + s.name;
    $("#dHost").textContent = host(s.url);
    $("#dCat").textContent = s.category;
    $("#dTitle").textContent = s.icon + " " + s.name;
    $("#dTag").textContent = s.tagline;
    $("#dDesc").textContent = s.description;
    $("#dFeat").innerHTML = (s.features || []).map((f) => `<li>${esc(f)}</li>`).join("");
    $("#dAud").textContent = s.audience || "—";
    $("#dUpd").textContent = fmtDate(s.updated);
    $("#dTech").innerHTML = `<ul class="tags">${(s.tech || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
    $("#dOpen").href = s.url;
    const src = $("#dSrc");
    src.hidden = !s.repo;
    if (s.repo) src.href = `https://github.com/${GH_USER}/${s.repo}`;
    $("#dCopy").textContent = "Copy link";
    const nav = navList();
    $("#dPrev").disabled = $("#dNext").disabled = nav.length < 2;
    if (!dlg.open) {
      dlg.showModal();
      $("#dClose").focus({ preventScroll: true });
    }
    dlg.scrollTop = 0;
    try { history.replaceState(null, "", "#" + s.id); } catch (e) {}
  }
  const navList = () => (state.visible.length ? state.visible : SITES);
  function step(d) {
    const list = navList();
    const i = list.findIndex((s) => s.id === current.id);
    openDetail(list[(i + d + list.length) % list.length].id);
  }
  function closeDetail() {
    dlg.close();
  }
  dlg.addEventListener("close", () => {
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    const btn = current && grid.querySelector(`[data-open="${current.id}"]`);
    if (btn) btn.focus();
  });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeDetail(); });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });
  $("#dClose").addEventListener("click", closeDetail);
  $("#dPrev").addEventListener("click", () => step(-1));
  $("#dNext").addEventListener("click", () => step(1));
  $("#dCopy").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(current.url); $("#dCopy").textContent = "Copied ✓"; }
    catch (e) { $("#dCopy").textContent = "Copy failed"; }
  });

  /* ---------- events ---------- */
  grid.addEventListener("click", (e) => {
    if (e.target.closest(".open-link")) return; // opens in new tab
    const card = e.target.closest(".card");
    if (card) openDetail(card.dataset.id);
  });
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat-btn]");
    if (!b) return;
    state.cat = b.dataset.catBtn;
    renderFilters(); render();
  });
  let t;
  $("#q").addEventListener("input", (e) => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value.trim(); render(); }, 120); });
  $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
  $("#clearBtn").addEventListener("click", () => {
    state.cat = "All"; state.q = ""; $("#q").value = "";
    renderFilters(); render();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !dlg.open && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
      e.preventDefault(); $("#q").focus();
    }
  });

  /* ---------- theme ---------- */
  $("#themeBtn").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("zs-theme", root.dataset.theme); } catch (e) {}
  });

  /* ---------- live "last updated" from GitHub ---------- */
  function refreshDates() {
    fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((repos) => {
        const byName = Object.fromEntries(repos.map((r) => [r.name.toLowerCase(), r.pushed_at]));
        SITES.forEach((s) => {
          const d = s.repo && byName[s.repo.toLowerCase()];
          if (!d) return;
          s.updated = d;
          const el = grid.querySelector(`[data-upd="${s.id}"]`);
          if (el) el.textContent = "Updated " + ago(d);
        });
        renderStats();
        if (state.sort === "recent") render();
      })
      .catch(() => {}); // keep fallback dates if offline or rate-limited
  }

  /* ---------- init ---------- */
  renderFilters();
  render();
  renderStats();
  refreshDates();
  const hash = location.hash.slice(1);
  // Deep link (e.g. #fuzzy): open after load so the browser's own hash scroll doesn't fight the dialog.
  if (hash && SITES.some((s) => s.id === hash)) window.addEventListener("load", () => openDetail(hash), { once: true });
})();
