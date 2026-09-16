const { personal, projects, capabilities, training, education, certifications } = portfolioData;
document.getElementById("tagline").textContent = personal.tagline;
document.getElementById("aboutCopy").textContent = personal.about;
document.getElementById("year").textContent = new Date().getFullYear();

const esc = value => String(value).replace(/[&<>"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]));
document.getElementById("projectGrid").innerHTML = projects.map((project, index) => `
  <article class="project-card ${project.featured ? "featured" : ""}">
    <div class="project-top"><span class="project-number">${String(index + 1).padStart(2,"0")}</span><span class="project-type">${esc(project.type)}</span></div>
    <h3>${esc(project.title)}</h3><p>${esc(project.description)}</p>
    <div class="impact"><span>What I delivered</span><p>${esc(project.impact)}</p></div>
    <ul>${project.technologies.map(tech => `<li>${esc(tech)}</li>`).join("")}</ul>
    <div class="project-links"><a href="${esc(project.github)}" target="_blank" rel="noopener">GitHub ↗</a>${project.live ? `<a href="${esc(project.live)}" target="_blank" rel="noopener">Live demo ↗</a>` : ""}</div>
  </article>`).join("");

document.getElementById("skillsGrid").innerHTML = capabilities.map((group, index) => `
  <article class="skill-card"><span>0${index + 1}</span><h3>${esc(group.title)}</h3><p>${group.skills.map(esc).join(" · ")}</p></article>`).join("");

document.getElementById("trainingList").innerHTML = training.map(item => `
  <article class="timeline-item"><div class="timeline-marker" aria-hidden="true"></div><div class="timeline-meta"><span>${esc(item.period)}</span><span>${esc(item.location)}</span></div><div class="timeline-copy"><p class="timeline-org">${esc(item.organization)}</p><h3>${esc(item.role)}</h3><p>${esc(item.summary)}</p><p class="timeline-highlight">${esc(item.highlight)}</p></div></article>`).join("");

document.getElementById("educationGrid").innerHTML = education.map(item => `
  <article class="education-card"><div><p class="education-period">${esc(item.period)}</p><h3>${esc(item.qualification)}</h3><p>${esc(item.institution)} · ${esc(item.location)}</p></div><strong>${esc(item.result)}</strong></article>`).join("");

document.getElementById("certificationGrid").innerHTML = certifications.map((item, index) => `
  <article class="certification-card"><span>0${index + 1}</span><div><p>${esc(item.issuer)}</p><h3>${esc(item.name)}</h3></div></article>`).join("");

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll(".project-card,.skill-card,.split>*,.timeline-item,.education-card,.certification-card,.contact>*").forEach(el => observer.observe(el));
