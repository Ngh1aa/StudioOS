/* StudioOS / Quiet Precision: vanilla state, predictable feedback, no framework runtime. */

const icons = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 6 6 6-6 6"/>',
  dashboard: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  folder: '<path d="M3.5 6.5h6l2 2h9v9.5a2 2 0 0 1-2 2h-15z"/><path d="M3.5 6.5v-1a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v1"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9h18"/>',
  users: '<path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"/><circle cx="9.5" cy="7" r="3.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 6.8M21 20v-1.5a4 4 0 0 0-3-3.87"/>',
  inbox: '<path d="M4 4.5h16v15H4z"/><path d="M4 14h4l1.5 2h5L16 14h4"/>',
  chart: '<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',
  settings: '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="m19.4 15 .1.1a2 2 0 0 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4v.2a2 2 0 0 1-4 0v-.2a2 2 0 0 0-3.4-1.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A2 2 0 0 0 1.6 11h-.2a2 2 0 0 1 0-4h.2A2 2 0 0 0 3 3.6l-.1-.1A2 2 0 1 1 5.7.7l.1.1A2 2 0 0 0 9.2 0h.2a2 2 0 0 1 4 0h.2a2 2 0 0 0 3.4.8l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a2 2 0 0 0 1.4 3.4h.2a2 2 0 0 1 0 4h-.2a2 2 0 0 0-1.4 3.4Z" transform="scale(.8) translate(3 3)"/>',
  sparkles: '<path d="m12 3 1.2 4.3L17 9l-3.8 1.7L12 15l-1.2-4.3L7 9l3.8-1.7zM19 14l.6 2.1L22 17l-2.4.9L19 20l-.6-2.1L16 17l2.4-.9zM5 15l.5 1.7L7 17.3l-1.5.6L5 19.5l-.5-1.6-1.5-.6 1.5-.6z"/>',
  more: '<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>',
  command: '<path d="M18 7.5V6a2 2 0 0 0-2-2h-1.5M6 7.5V6a2 2 0 0 1 2-2h1.5M18 16.5V18a2 2 0 0 1-2 2h-1.5M6 16.5V18a2 2 0 0 0 2 2h1.5"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.7 1.8c-1 .8-1.5 1-1.5 2.2M12 16.5h.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  "arrow-up-right": '<path d="M7 17 17 7M8 7h9v9"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  message: '<path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-6a3 3 0 0 1-1-2V7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3z"/>',
  sliders: '<path d="M4 6h16M4 12h16M4 18h16M8 4v4M15 10v4M11 16v4"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  "circle-plus": '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  "file-check": '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 15l2 2 4-4"/>',
  paperclip: '<path d="m8 12 5.5-5.5a3.5 3.5 0 0 1 5 5L11 19a5 5 0 0 1-7-7l7-7"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
};

const projects = [
  { id:"lumen-house", name:"Lumen House", type:"Brand system", status:"In review", tone:"review", progress:78, due:"Today", dueTone:"urgent", owner:"Maya Chen", members:["MC","JT","AN"], cover:"./assets/studioos-project-architecture.png" },
  { id:"common-ground", name:"Common Ground", type:"Digital experience", status:"On track", tone:"progress", progress:46, due:"18 Aug", dueTone:"normal", owner:"Noah Williams", members:["NW","LC","OR"], cover:"./assets/studioos-project-material.png" },
  { id:"northstar", name:"Northstar / Q3", type:"Campaign launch", status:"On track", tone:"progress", progress:24, due:"02 Sep", dueTone:"normal", owner:"Jules Tran", members:["JT","MC"], cover:"./assets/studioos-project-motion.png" },
  { id:"field-notes", name:"Field Notes", type:"Research sprint", status:"Not started", tone:"quiet", progress:0, due:"09 Sep", dueTone:"quiet", owner:"Anika Rao", members:["AR","NW"], cover:"./assets/studioos-project-architecture.png" },
];

let tasks = [
  { id:1, label:"Review Lumen House feedback", project:"Lumen House", due:"Due today", done:false },
  { id:2, label:"Share final type specimens", project:"Common Ground", due:"Due today", done:false },
  { id:3, label:"Move launch checklist to review", project:"Northstar / Q3", due:"Due tomorrow", done:false },
  { id:4, label:"Add notes from client sync", project:"Field Notes", due:"Due 21 Aug", done:true },
];

let showAllProjects = false;
let activeReviewProject = null;

function icon(name) { return `<svg aria-hidden="true" viewBox="0 0 24 24">${icons[name] || ""}</svg>`; }
function renderIcons() { document.querySelectorAll("[data-icon]").forEach((node) => { const name = node.dataset.icon; node.innerHTML = icon(name); }); }

function avatarStack(members) { return `<span class="avatar-stack" aria-label="${members.length} project members">${members.map((member, index) => `<span class="avatar avatar-${index}">${member}</span>`).join("")}</span>`; }
function projectIndex(id) { return ({"lumen-house":"01","common-ground":"02",northstar:"03","field-notes":"04"})[id] || "04"; }
function projectCard(project) {
  return `<article class="project-card"><div class="project-cover"><img src="${project.cover}" alt="" /><div class="cover-shade"></div><div class="project-cover-top"><span class="cover-index">${projectIndex(project.id)}</span><button class="icon-button icon-button-light js-more" type="button" aria-label="More options for ${project.name}">${icon("more")}</button></div><div class="cover-caption"><span>${project.type}</span>${icon("arrow-up-right")}</div></div><div class="project-card-body"><div class="project-title-row"><div><h3>${project.name}</h3><p>${project.owner}</p></div><span class="status-pill status-${project.tone}"><i class="status-dot"></i>${project.status}</span></div><div class="progress-meta"><span>Project progress</span><strong>${project.progress}%</strong></div><div class="progress-track" aria-label="${project.progress}% complete"><span style="width:${project.progress}%"></span></div><div class="project-card-footer"><span class="due-date due-${project.dueTone}">${icon("clock")} ${project.due}</span><span class="card-actions">${avatarStack(project.members)}<button class="text-button js-review" type="button">Review ${icon("chevron-right")}</button></span></div></div></article>`;
}

function renderProjects(query = "") {
  const normalized = query.trim().toLowerCase();
  const results = normalized ? projects.filter((project) => `${project.name} ${project.type} ${project.owner}`.toLowerCase().includes(normalized)) : projects;
  const visible = showAllProjects ? results : results.slice(0, 3);
  const grid = document.querySelector("#projectGrid");
  grid.innerHTML = visible.length ? visible.map(projectCard).join("") : `<div class="empty-search">${icon("search")}<strong>No projects found</strong><span>Try another name, type or owner.</span></div>`;
  const button = document.querySelector("#showAllButton");
  button.innerHTML = `${showAllProjects ? "Show less" : "View all projects"} ${icon("arrow-up-right")}`;
  document.querySelector("#activeProjectCount").textContent = String(projects.length).padStart(2, "0");
}

function renderTasks(query = "") {
  const normalized = query.trim().toLowerCase();
  const visible = normalized ? tasks.filter((task) => `${task.label} ${task.project}`.toLowerCase().includes(normalized)) : tasks;
  document.querySelector("#taskList").innerHTML = visible.map((task) => `<button class="task-row ${task.done ? "task-done" : ""}" type="button" data-task-id="${task.id}"><span class="task-check ${task.done ? "checked" : ""}">${task.done ? icon("check") : ""}</span><span class="task-copy"><strong>${task.label}</strong><small>${task.project}</small></span><span class="task-due ${task.due.includes("today") ? "task-due-urgent" : ""}">${task.due}</span></button>`).join("");
  const completed = tasks.filter((task) => task.done).length;
  document.querySelector("#taskProgressText").textContent = `${completed}/${tasks.length}`;
  document.querySelector("#taskProgressPercent").textContent = `${Math.round((completed / tasks.length) * 100)}%`;
  document.querySelector("#taskProgressBar").style.width = `${(completed / tasks.length) * 100}%`;
}

function toast(message, type = "") {
  const node = document.createElement("div");
  node.className = `toast ${type}`;
  node.textContent = message;
  document.querySelector("#toastRegion").append(node);
  window.setTimeout(() => { node.style.opacity = "0"; node.style.transform = "translateY(8px)"; window.setTimeout(() => node.remove(), 180); }, 3000);
}

function openDialog(id) { document.querySelector(`#${id}`).hidden = false; document.body.style.overflow = "hidden"; const first = document.querySelector(`#${id} input`); if (first) window.setTimeout(() => first.focus(), 20); }
function closeDialog(id) { document.querySelector(`#${id}`).hidden = true; document.body.style.overflow = ""; }
function closeNotifications() { document.querySelector("#notificationPopover").hidden = true; document.querySelector("#notificationButton").setAttribute("aria-expanded", "false"); }

function openReview(project) {
  activeReviewProject = project;
  document.querySelector("#reviewDialogTitle").textContent = project.name;
  document.querySelector("#reviewDialogDescription").textContent = `${project.type} · ${project.progress}% of the current scope is complete.`;
  document.querySelector("#reviewImage").src = project.cover;
  openDialog("reviewDialog");
}

function closeSidebar() { document.querySelector("#sidebar").classList.remove("sidebar-open"); document.querySelector("#mobileScrim").style.display = "none"; }
function openSidebar() { document.querySelector("#sidebar").classList.add("sidebar-open"); document.querySelector("#mobileScrim").style.display = "block"; }

document.addEventListener("DOMContentLoaded", () => {
  renderIcons();
  renderProjects();
  renderTasks();

  document.querySelectorAll("[data-nav]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-nav]").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelector("#activeBreadcrumb").textContent = button.dataset.nav;
    closeSidebar();
    if (button.dataset.nav !== "Overview") toast(`${button.dataset.nav} workspace is queued for the next slice.`);
  }));

  document.querySelector("#searchInput").addEventListener("input", (event) => { renderProjects(event.target.value); renderTasks(event.target.value); });
  document.querySelector("#showAllButton").addEventListener("click", () => { showAllProjects = !showAllProjects; renderProjects(document.querySelector("#searchInput").value); });
  document.querySelector("#newProjectButton").addEventListener("click", () => openDialog("createDialog"));
  document.querySelector("#addTaskButton").addEventListener("click", () => { tasks.push({ id:Date.now(), label:"Define final QA checklist", project:"Workspace", due:"Due this week", done:false }); renderTasks(document.querySelector("#searchInput").value); toast("Task added to your focus list."); });

  document.querySelector("#projectGrid").addEventListener("click", (event) => {
    const review = event.target.closest(".js-review");
    const more = event.target.closest(".js-more");
    const card = event.target.closest(".project-card");
    if (!card) return;
    const project = projects.find((item) => card.querySelector("h3")?.textContent === item.name);
    if (review && project) openReview(project);
    if (more && project) toast(`More actions for ${project.name} are coming soon.`);
  });
  document.querySelector("#taskList").addEventListener("click", (event) => { const row = event.target.closest("[data-task-id]"); if (!row) return; const task = tasks.find((item) => String(item.id) === row.dataset.taskId); if (task) task.done = !task.done; renderTasks(document.querySelector("#searchInput").value); });

  document.querySelector("#createProjectForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#projectNameInput").value.trim();
    if (!name) return toast("Give the project a name before creating it.", "error");
    projects.unshift({ id:name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name, type:document.querySelector("#projectTypeInput").value, status:"Not started", tone:"quiet", progress:0, due:"No date", dueTone:"quiet", owner:"You", members:["YO"], cover:"./assets/studioos-project-motion.png" });
    document.querySelector("#createProjectForm").reset();
    closeDialog("createDialog"); renderProjects(document.querySelector("#searchInput").value); toast(`${name} is ready for its first task.`);
  });

  document.querySelector("#markReviewedButton").addEventListener("click", () => { const name = activeReviewProject?.name || "Project"; closeDialog("reviewDialog"); toast(`${name} marked as ready for the next review.`); });
  document.querySelector("#notificationButton").addEventListener("click", () => { const popover = document.querySelector("#notificationPopover"); popover.hidden = !popover.hidden; document.querySelector("#notificationButton").setAttribute("aria-expanded", String(!popover.hidden)); });
  document.querySelector("[data-action='review-notification']").addEventListener("click", () => { closeNotifications(); openReview(projects[0]); });
  document.querySelector("[data-action='calendar-notification']").addEventListener("click", () => { closeNotifications(); toast("Calendar view is coming next."); });
  document.querySelectorAll("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => closeDialog(button.dataset.closeDialog)));
  document.querySelectorAll(".dialog-layer").forEach((layer) => layer.addEventListener("click", (event) => { if (event.target === layer) closeDialog(layer.id); }));
  document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => { const action = button.dataset.action; if (["workspace","help","invite","focus-options","activity-options","activity","comment"].includes(action)) toast(action === "invite" ? "Invite flow is coming soon." : action === "help" ? "Need a hand? Help center is coming soon." : action === "comment" ? "Comment composer is coming soon." : "This workspace action is coming soon."); }));
  document.querySelector("#openSidebar").addEventListener("click", openSidebar);
  document.querySelector("#closeSidebar").addEventListener("click", closeSidebar);
  document.querySelector("#mobileScrim").addEventListener("click", closeSidebar);
  document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#searchInput").focus(); } if (event.key === "Escape") { closeNotifications(); document.querySelectorAll(".dialog-layer:not([hidden])").forEach((layer) => closeDialog(layer.id)); closeSidebar(); } });
});

