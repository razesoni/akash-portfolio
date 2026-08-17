/**
 * ============================================================
 *  MAIN.JS
 *  Renders portfolioData (js/data.js) into the page and wires
 *  up all interactive behavior. No personal content lives here.
 * ============================================================
 */

/* ---------- Minimal inline icon set (no external icon request) ---------- */
const ICONS = {
  "github": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  "linkedin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5 5 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  "mail": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2.5"/><path d="m22 6-10 7L2 6"/></svg>',
  "kaggle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v18M6 13l8-6M6 13l9 8"/></svg>',
  "leetcode": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m14 3-6 8 4 3-3 7"/><path d="M8 11h11"/></svg>',
  "hackerrank": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 8v8M16 8v8M8 12h8"/></svg>',
  "codechef": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 10c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5-1.3 2-3 2.5c-1.7.5-3 1-3 2.5s1.3 2.5 3 2.5 3-1 3-2.5"/></svg>',
  "external-link": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
  "download": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  "arrow-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  "arrow-up": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m0 0-6 6m6-6 6 6"/></svg>',
  "chevron-down": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  "sun": '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/></svg>',
  "moon": '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></svg>',
  "menu": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  "x": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  "code-2": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/></svg>',
  "bar-chart-3": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M8 17V10M13 17V6M18 17v-4"/></svg>',
  "brain-circuit": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4a2.5 2.5 0 0 1 5 0v1.5M9 4a2.5 2.5 0 0 0-2.5 2.5V8M14 5.5V8m0 0a2.5 2.5 0 0 1 2.5 2.5v1M14 8a2.5 2.5 0 0 0-2.5 2.5v1M6.5 8A2.5 2.5 0 0 0 4 10.5v1M6.5 8v3M4 14v2.5A2.5 2.5 0 0 0 6.5 19M16.5 11.5v1a2.5 2.5 0 0 0 2.5 2.5v0"/><circle cx="9" cy="19" r="1.6"/><circle cx="16" cy="19" r="1.6"/></svg>',
  "sparkles": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M4.5 12h3M16.5 12h3M6.3 6.3l2 2M15.7 15.7l2 2M6.3 17.7l2-2M15.7 8.3l2-2"/><circle cx="12" cy="12" r="2.3"/></svg>',
  "layout-grid": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
  "wrench": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z"/></svg>',
  "star": '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6.1 6.6.7-5 4.6 1.4 6.6L12 17l-5.9 3.5 1.4-6.6-5-4.6 6.6-.7z"/></svg>',
  "check-circle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3 4.7-5.1"/></svg>',
  "award": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5.5"/><path d="m8.2 12.9-1.7 7.6L12 18l5.5 2.5-1.7-7.6"/></svg>',
  "trophy": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4M10 15v2M14 15v2M8 21h8M9 17h6v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2z"/></svg>',
  "graduation-cap": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m2 9 10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>',
  "briefcase": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="7" width="19" height="13" rx="2"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M2.5 12.5h19"/></svg>',
  "map-pin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>',
  "calendar": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9.5h18"/></svg>',
  "flower": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.2"/><path d="M12 9.8a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zM12 19.4a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zM14.2 12a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0zM4.6 12a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0z"/></svg>',
  "send": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-8-8 18-2.5-7.5L3 11z"/></svg>'
};
function icon(name, extra) { return ICONS[name] ? ICONS[name].replace("<svg ", `<svg ${extra || ""} `) : ""; }
function iconSpan(name) { return icon(name); }

function initPortfolio() {
  initTheme();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderAchievements();
  renderProfiles();
  renderContact();
  renderFooter();
  initNav();
  initMobileMenu();
  initScrollEffects();
  buildPetals();
  window.addEventListener("load", buildPetals, { once: true });
  window.addEventListener("resize", buildPetals);
  initReveal();
  initContactForm();
  initModal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolio, { once: true });
} else {
  initPortfolio();
}

/* ---------- THEME ---------- */
function initTheme() {
  const stored = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  const toggle = document.getElementById("themeToggle");
  toggle.innerHTML = icon("sun") + icon("moon");
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  });
}

/* ---------- HERO ---------- */
function renderHero() {
  const { personal, social } = portfolioData;

  document.title = `${personal.name} | Data Scientist & Machine Learning Enthusiast`;

  document.getElementById("heroName").textContent = personal.name;
  document.getElementById("heroRole").textContent = personal.role;
  document.getElementById("heroDesc").textContent = personal.tagline;
  document.getElementById("navLogoText").textContent = personal.name;
  document.getElementById("footerName").textContent = personal.name;

  const resumeLinks = document.querySelectorAll(".js-resume-link");
  resumeLinks.forEach(a => { a.href = personal.resume; });

  const socialWrap = document.getElementById("heroSocials");
  socialWrap.innerHTML = buildSocialButtons(social);

  const footerSocials = document.getElementById("footerSocials");
  footerSocials.innerHTML = buildSocialButtons(social);
}

function buildSocialButtons(social) {
  const map = [
    { key: "github", label: "GitHub", icon: "github" },
    { key: "linkedin", label: "LinkedIn", icon: "linkedin" },
    { key: "email", label: "Email", icon: "mail", isEmail: true },
    { key: "kaggle", label: "Kaggle", icon: "kaggle" },
    { key: "leetcode", label: "LeetCode", icon: "leetcode" },
    { key: "hackerrank", label: "HackerRank", icon: "hackerrank" },
    { key: "codechef", label: "CodeChef", icon: "codechef" }
  ];
  return map
    .filter(item => social[item.key])
    .map(item => {
      const href = item.isEmail ? `mailto:${social[item.key]}` : social[item.key];
      return `<a class="social-btn" href="${escapeAttr(href)}" target="${item.isEmail ? "_self" : "_blank"}" rel="noopener" aria-label="${item.label}">${icon(item.icon)}</a>`;
    })
    .join("");
}

/* ---------- ABOUT ---------- */
function renderAbout() {
  const { personal } = portfolioData;
  const textWrap = document.getElementById("aboutText");
  textWrap.innerHTML = personal.aboutParagraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("");

  const factsWrap = document.getElementById("quickFacts");
  factsWrap.innerHTML = personal.quickFacts
    .map(f => `<dt>${escapeHtml(f.label)}</dt><dd>${escapeHtml(f.value)}</dd>`)
    .join("");
}

/* ---------- SKILLS ---------- */
function renderSkills() {
  const { skills, skillCategoryMeta } = portfolioData;
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = Object.keys(skills)
    .filter(key => skills[key] && skills[key].length)
    .map(key => {
      const meta = skillCategoryMeta[key] || { title: key, icon: "code-2" };
      return `
        <div class="skill-card" data-reveal>
          <div class="skill-card-head">
            <span class="skill-card-icon">${icon(meta.icon)}</span>
            <h3>${escapeHtml(meta.title)}</h3>
          </div>
          <div class="skill-tags">
            ${skills[key].map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join("")}
          </div>
        </div>`;
    })
    .join("");
}

/* ---------- PROJECTS ---------- */
let activeFilter = "All";
const VISIBLE_LIMIT = 4;
let showAllProjects = false;

function renderProjects() {
  const { projectFilters, projects } = portfolioData;

  const filterWrap = document.getElementById("projectFilters");
  filterWrap.innerHTML = projectFilters
    .map(f => `<button type="button" class="filter-btn${f === activeFilter ? " is-active" : ""}" data-filter="${escapeAttr(f)}">${escapeHtml(f)}</button>`)
    .join("");
  filterWrap.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      showAllProjects = false;
      renderProjects();
    });
  });

  const filtered = projects.filter(p => activeFilter === "All" || (p.filterTags || []).includes(activeFilter));
  const featured = filtered.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);
  const visibleRest = showAllProjects ? rest : rest.slice(0, Math.max(0, VISIBLE_LIMIT - featured.length));

  const container = document.getElementById("projectsContainer");
  container.innerHTML = "";

  if (!filtered.length) {
    container.innerHTML = `<div class="empty-state">${icon("sparkles")}<span>No projects in this category yet — check back soon.</span></div>`;
    document.getElementById("viewAllWrap").style.display = "none";
    return;
  }

  if (featured.length) {
    const label = document.createElement("p");
    label.className = "project-group-label";
    label.textContent = "Featured";
    container.appendChild(label);
    const grid = document.createElement("div");
    grid.className = "projects-grid projects-grid--featured";
    grid.innerHTML = featured.map((p, i) => projectCardHTML(p, projects.indexOf(p))).join("");
    container.appendChild(grid);
  }

  if (visibleRest.length) {
    const label = document.createElement("p");
    label.className = "project-group-label";
    label.textContent = featured.length ? "More Projects" : "Projects";
    container.appendChild(label);
    const grid = document.createElement("div");
    grid.className = "projects-grid";
    grid.innerHTML = visibleRest.map(p => projectCardHTML(p, projects.indexOf(p))).join("");
    container.appendChild(grid);
  }

  const viewAllWrap = document.getElementById("viewAllWrap");
  const remaining = rest.length - visibleRest.length;
  if (!showAllProjects && remaining > 0) {
    viewAllWrap.style.display = "block";
    viewAllWrap.innerHTML = `<button type="button" class="btn btn-outline" id="viewAllBtn">View All Projects (${filtered.length}) ${icon("arrow-right")}</button>`;
    document.getElementById("viewAllBtn").addEventListener("click", () => {
      showAllProjects = true;
      renderProjects();
    });
  } else {
    viewAllWrap.style.display = "none";
    viewAllWrap.innerHTML = "";
  }

  container.querySelectorAll("[data-project-index]").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      openProjectModal(Number(card.dataset.projectIndex));
    });
    card.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !e.target.closest("a")) {
        e.preventDefault();
        openProjectModal(Number(card.dataset.projectIndex));
      }
    });
  });

  initReveal();
}

function projectCardHTML(p, index) {
  const techChips = p.technologies.map(t => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("");
  const features = (p.keyFeatures || []).slice(0, 3).map(f => `<li>${icon("check-circle")}<span>${escapeHtml(f)}</span></li>`).join("");
  return `
    <article class="project-card" data-reveal data-project-index="${index}" tabindex="0" role="button" aria-label="View details for ${escapeAttr(p.title)}">
      <div class="project-media">
        ${p.featured ? `<span class="featured-flag">${icon("star")} Featured</span>` : ""}
        ${icon("bar-chart-3")}
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <p class="project-desc">${escapeHtml(p.description)}</p>
        <div class="project-tech">${techChips}</div>
        ${features ? `<ul class="project-features">${features}</ul>` : ""}
        <div class="project-actions">
          ${p.github ? `<a class="btn btn-outline btn-sm" href="${escapeAttr(p.github)}" target="_blank" rel="noopener">${icon("github")} Code</a>` : ""}
          ${p.liveDemo ? `<a class="btn btn-primary btn-sm" href="${escapeAttr(p.liveDemo)}" target="_blank" rel="noopener">${icon("external-link")} Live Demo</a>` : ""}
        </div>
      </div>
    </article>`;
}

/* ---------- PROJECT MODAL ---------- */
function initModal() {
  const overlay = document.getElementById("projectModalOverlay");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeProjectModal();
  });
  document.getElementById("modalCloseBtn").addEventListener("click", closeProjectModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

function openProjectModal(index) {
  const p = portfolioData.projects[index];
  if (!p) return;
  const d = p.details || {};
  const rows = [
    ["Problem Statement", d.problem],
    ["Approach", d.approach],
    ["Dataset", d.dataset],
    ["Data Preprocessing", d.preprocessing],
    ["Exploratory Data Analysis", d.eda],
    ["Model / Architecture", d.model],
    ["Results", d.results],
    ["Key Insights", d.insights]
  ].filter(([, v]) => v);

  const modal = document.getElementById("projectModal");
  modal.innerHTML = `
    <button type="button" class="modal-close" id="modalCloseBtn" aria-label="Close project details">${icon("x")}</button>
    <h3 class="modal-title">${escapeHtml(p.title)}</h3>
    <p class="modal-section-intro" style="color:var(--color-text-muted);margin-bottom:1.25rem;">${escapeHtml(p.description)}</p>
    <div class="modal-tech">${p.technologies.map(t => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("")}</div>
    ${rows.map(([label, val]) => `<div class="modal-section"><h4>${escapeHtml(label)}</h4><p>${escapeHtml(val)}</p></div>`).join("")}
    <div class="modal-links">
      ${p.github ? `<a class="btn btn-outline btn-sm" href="${escapeAttr(p.github)}" target="_blank" rel="noopener">${icon("github")} View Repository</a>` : ""}
      ${p.liveDemo ? `<a class="btn btn-primary btn-sm" href="${escapeAttr(p.liveDemo)}" target="_blank" rel="noopener">${icon("external-link")} Live Demo</a>` : ""}
    </div>
  `;
  document.getElementById("modalCloseBtn").addEventListener("click", closeProjectModal);

  const overlay = document.getElementById("projectModalOverlay");
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  modal.focus();
}

function closeProjectModal() {
  const overlay = document.getElementById("projectModalOverlay");
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

/* ---------- EXPERIENCE ---------- */
function renderExperience() {
  const { experience } = portfolioData;
  const wrap = document.getElementById("experienceContent");

  if (!experience || !experience.length) {
    wrap.innerHTML = `<div class="empty-state" data-reveal>${icon("briefcase")}<span>Currently building practical projects and seeking opportunities to gain professional industry experience.</span></div>`;
    return;
  }

  wrap.innerHTML = `<div class="timeline">${experience.map(exp => `
    <div class="timeline-item" data-reveal>
      <span class="timeline-dot">${icon("briefcase")}</span>
      <div class="timeline-card">
        <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
        <div class="timeline-meta">
          <span>${icon("briefcase")} ${escapeHtml(exp.company)}</span>
          <span>${icon("calendar")} ${escapeHtml(exp.duration)}</span>
          ${exp.location ? `<span>${icon("map-pin")} ${escapeHtml(exp.location)}</span>` : ""}
        </div>
        ${exp.description ? `<p class="timeline-desc">${escapeHtml(exp.description)}</p>` : ""}
        ${exp.achievements && exp.achievements.length ? `<ul class="timeline-achievements">${exp.achievements.map(a => `<li>${icon("check-circle")}<span>${escapeHtml(a)}</span></li>`).join("")}</ul>` : ""}
        ${exp.technologies && exp.technologies.length ? `<div class="project-tech">${exp.technologies.map(t => `<span class="tech-chip">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
      </div>
    </div>`).join("")}</div>`;
}

/* ---------- EDUCATION ---------- */
function renderEducation() {
  const { education } = portfolioData;
  const grid = document.getElementById("educationGrid");
  grid.innerHTML = education.map(ed => `
    <div class="education-card" data-reveal>
      <div class="education-card-head">
        <span class="education-icon">${icon("graduation-cap")}</span>
        <div>
          <h3 class="education-degree">${escapeHtml(ed.degree)}</h3>
          <p class="education-inst">${escapeHtml(ed.institution)}</p>
          <span class="education-duration">${escapeHtml(ed.duration)}</span>
        </div>
      </div>
      ${ed.score ? `<span class="education-score">${escapeHtml(ed.score)}</span>` : ""}
      ${ed.coursework && ed.coursework.length ? `
        <p class="coursework-label">Relevant Coursework</p>
        <div class="coursework-list">${ed.coursework.map(c => `<span class="skill-tag">${escapeHtml(c)}</span>`).join("")}</div>
      ` : ""}
    </div>`).join("");
}

/* ---------- CERTIFICATIONS ---------- */
function renderCertifications() {
  const { certifications } = portfolioData;
  const section = document.getElementById("certificationsSection");
  if (!certifications || !certifications.length) {
    section.style.display = "none";
    return;
  }
  section.style.display = "";
  const grid = document.getElementById("certGrid");
  grid.innerHTML = certifications.map(c => `
    <div class="cert-card" data-reveal>
      <span class="cert-icon">${icon("award")}</span>
      <div>
        <h3 class="cert-name">${escapeHtml(c.name)}</h3>
        <p class="cert-org">${escapeHtml(c.organization)}</p>
        <span class="cert-date">${escapeHtml(c.date)}${c.credentialId ? ` · ID: ${escapeHtml(c.credentialId)}` : ""}</span>
        ${c.url ? `<a class="cert-link" href="${escapeAttr(c.url)}" target="_blank" rel="noopener">${icon("external-link")} View Credential</a>` : ""}
      </div>
    </div>`).join("");
}

/* ---------- ACHIEVEMENTS ---------- */
function renderAchievements() {
  const { achievements } = portfolioData;
  const section = document.getElementById("achievementsSection");
  if (!achievements || !achievements.length) {
    section.style.display = "none";
    return;
  }
  section.style.display = "";
  const grid = document.getElementById("achievementsGrid");
  grid.innerHTML = achievements.map(a => `
    <div class="achievement-card" data-reveal>
      ${icon("trophy")}
      <div>
        <p class="achievement-title">${escapeHtml(a.title)}</p>
        <p class="achievement-meta">${escapeHtml(a.context || "")}${a.date ? ` · ${escapeHtml(a.date)}` : ""}</p>
      </div>
    </div>`).join("");
}

/* ---------- PROFILES (resume section) ---------- */
function renderProfiles() {
  const { social } = portfolioData;
  const map = [
    { key: "github", label: "GitHub", icon: "github" },
    { key: "linkedin", label: "LinkedIn", icon: "linkedin" },
    { key: "kaggle", label: "Kaggle", icon: "kaggle" },
    { key: "leetcode", label: "LeetCode", icon: "leetcode" },
    { key: "hackerrank", label: "HackerRank", icon: "hackerrank" },
    { key: "codechef", label: "CodeChef", icon: "codechef" }
  ];
  const chips = map
    .filter(item => social[item.key])
    .map(item => `<a class="profile-chip" href="${escapeAttr(social[item.key])}" target="_blank" rel="noopener">${icon(item.icon)} ${item.label}</a>`)
    .join("");
  const wrap = document.getElementById("profilesRow");
  wrap.innerHTML = chips;
  wrap.style.display = chips ? "flex" : "none";
}

/* ---------- CONTACT ---------- */
function renderContact() {
  const { personal, social } = portfolioData;
  const list = document.getElementById("contactList");
  const items = [
    { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: "mail" },
    { label: "LinkedIn", value: "Connect on LinkedIn", href: social.linkedin, icon: "linkedin" },
    { label: "GitHub", value: "View my repositories", href: social.github, icon: "github" },
    { label: "Location", value: personal.location, href: "", icon: "map-pin" }
  ];
  list.innerHTML = items.map(it => `
    <li>
      <span class="contact-icon">${icon(it.icon)}</span>
      <span>
        <span class="contact-label">${escapeHtml(it.label)}</span>
        ${it.href ? `<a href="${escapeAttr(it.href)}" target="${it.href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener">${escapeHtml(it.value)}</a>` : `<span class="value">${escapeHtml(it.value)}</span>`}
      </span>
    </li>`).join("");
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  document.getElementById("footerNameBottom").textContent = portfolioData.personal.name;
}

/* ---------- NAV ---------- */
function initNav() {
  const links = document.querySelectorAll(".nav-links a, .mobile-menu a");
  const sections = Array.from(links)
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach(s => observer.observe(s));
}

function initMobileMenu() {
  const hamburger = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");
  const open = () => {
    menu.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    menu.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  hamburger.addEventListener("click", () => {
    menu.classList.contains("is-open") ? close() : open();
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
}

/* ---------- SCROLL: navbar state, progress bar, back-to-top, petals ---------- */
function initScrollEffects() {
  const navbar = document.getElementById("navbar");
  const progress = document.getElementById("scrollProgress");

  const onScroll = () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle("is-scrolled", scrollY > 12);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progress.style.width = `${pct}%`;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  buildPetals();
}

function buildPetals() {
  const wrap = document.getElementById("sitePetals");
  if (!wrap) return;
  const count = window.innerWidth < 640 ? 14 : 24;
  let html = "";
  for (let i = 0; i < count; i++) {
    const left = Math.random() * 100;
    const size = 22 + Math.random() * 24;
    const duration = 7 + Math.random() * 7;
    const delay = Math.random() * -20;
    const drift = (Math.random() * 170 - 85).toFixed(0);
    const rotate = (Math.random() * 180 - 90).toFixed(0);
    const useSecondary = i % 2 === 0;
    html += `<span class="petal" style="left:${left}%;width:${size}px;height:${size}px;animation-duration:${duration}s;animation-delay:${delay}s;--drift:${drift}px;--rotate:${rotate}deg;">${petalSVG(useSecondary)}</span>`;
  }
  wrap.innerHTML = html;
}

function petalSVG(useSecondary) {
  const pastelA = "#f9d7e8";
  const pastelB = "#f8d2d2";
  const pastelC = "#d7e9f7";
  const pastelD = "#dfeccf";
  const palette = [pastelA, pastelB, pastelC, pastelD];
  const color = useSecondary ? palette[Math.floor(Math.random() * palette.length)] : palette[(Math.floor(Math.random() * palette.length) + 1) % palette.length];
  const gradientId = `petalGradient-${Math.random().toString(36).slice(2, 9)}`;

  return `
    <svg viewBox="0 0 40 40" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.96"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0.72"/>
        </linearGradient>
      </defs>
      <path d="M20 3.5C26 8 31.5 13.5 31.5 21.5C31.5 29 27.5 34.5 20 36.5C12.5 34.5 8.5 29 8.5 21.5C8.5 13.5 14 8 20 3.5Z" fill="url(#${gradientId})" opacity="0.95"/>
      <path d="M20 8.5C24 12.5 26.5 17 26.5 22.2C26.5 27.4 23.5 31 20 33.5C16.5 31 13.5 27.4 13.5 22.2C13.5 17 16 12.5 20 8.5Z" fill="rgba(255,255,255,0.28)"/>
      <path d="M20 12C18 16 17.5 19 20 23.5C22.5 19 22 16 20 12Z" fill="rgba(255,255,255,0.34)"/>
    </svg>
  `;
}

buildPetals();
window.addEventListener("resize", buildPetals);

/* ---------- SCROLL REVEAL ---------- */
function initReveal() {
  const targets = document.querySelectorAll("[data-reveal]:not(.is-visible)");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  targets.forEach(t => observer.observe(t));
}

/* ---------- CONTACT FORM ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: "name", validate: v => v.trim().length > 1, msg: "Please enter your name." },
      { id: "email", validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: "Please enter a valid email." },
      { id: "subject", validate: v => v.trim().length > 2, msg: "Please enter a subject." },
      { id: "message", validate: v => v.trim().length > 9, msg: "Message should be at least 10 characters." }
    ];

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const group = input.closest(".form-group");
      const errorEl = document.getElementById(`${f.id}Error`);
      const ok = f.validate(input.value);
      group.classList.toggle("has-error", !ok);
      errorEl.textContent = ok ? "" : f.msg;
      if (!ok) valid = false;
    });

    if (!valid) {
      status.className = "form-status is-visible is-info";
      status.textContent = "Please fix the highlighted fields.";
      return;
    }

    /* No backend is configured yet. Wire this up to your email
       service (e.g. Formspree, EmailJS, or a small API route)
       — see README.md for suggestions. */
    status.className = "form-status is-visible is-success";
    status.textContent = "Thanks! This form isn't connected to a backend yet — see README.md to wire it up. Your message wasn't actually sent.";
    form.reset();
  });
}

/* ---------- UTIL ---------- */
function escapeHtml(str) {
  if (str === undefined || str === null) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function escapeAttr(str) {
  return escapeHtml(str).replaceAll('"', "&quot;");
}
