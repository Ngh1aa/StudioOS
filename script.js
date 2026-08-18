/* StudioOS / Quiet Precision: vanilla state, predictable feedback, no framework runtime. */
function shortToday(){const d=new Date();return d.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()];}

const icons = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  dashboard: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
  sparkles: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  grip: '<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  command: '<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3Z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  sliders: '<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  "circle-plus": '<circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>',
  "file-check": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="m9 15 2 2 4-4"/><polyline points="14 2 14 8 20 8"/>',
  paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
};

const projects = [
  { id:"lumen-house", name:"Lumen House", type:"Brand system", view:"Brand", status:"In review", tone:"review", progress:78, due:"Today", dueTone:"urgent", owner:"Maya Chen", members:["MC","JT","AN"], cover:"./assets/studioos-project-lumen-editorial.webp" },
  { id:"common-ground", name:"Common Ground", type:"Digital experience", view:"Digital", status:"On track", tone:"progress", progress:46, due:"18 Aug", dueTone:"normal", owner:"Noah Williams", members:["NW","LC","OR"], cover:"./assets/studioos-project-common-editorial.webp" },
  { id:"northstar", name:"Northstar / Q3", type:"Campaign launch", view:"Campaign", status:"On track", tone:"progress", progress:24, due:"02 Sep", dueTone:"normal", owner:"Jules Tran", members:["JT","MC"], cover:"./assets/studioos-project-northstar-editorial.webp" },
  { id:"field-notes", name:"Field Notes", type:"Research sprint", view:"Research", status:"Not started", tone:"quiet", progress:0, due:"09 Sep", dueTone:"quiet", owner:"Anika Rao", members:["AR","NW"], cover:"./assets/studioos-project-field-editorial.webp" },
];

let tasks = [
  { id:1, label:"Review Lumen House feedback", project:"Lumen House", due:"Due today", priority:"High", done:false },
  { id:2, label:"Share final type specimens", project:"Common Ground", due:"Due today", priority:"Medium", done:false },
  { id:3, label:"Move launch checklist to review", project:"Northstar / Q3", due:"Due tomorrow", priority:"Medium", done:false },
  { id:4, label:"Add notes from client sync", project:"Field Notes", due:"Due 21 Aug", priority:"Low", done:true },
];

const calendarItems = [
  { id: "review-lumen", time: "09:30", title: "Review Lumen House feedback", project: "Brand system", owner: "Maya Chen", kind: "review", position: "event-one" },
  { id: "type-specimens", time: "13:00", title: "Share final type specimens", project: "Common Ground", owner: "Noah Williams", kind: "handoff", position: "event-two" },
  { id: "launch-sync", time: "15:30", title: "Launch sync", project: "Northstar / Q3", owner: "Jules Tran", kind: "meeting", position: "event-three" },
  { id: "feedback-window", time: "11:00", title: "Client feedback window", project: "Lumen House", owner: "Maya Chen", kind: "review", position: "event-four" },
];
const TASK_ORDER_STORAGE_KEY = "studioos-task-order";
const NOTE_TAG_META = {
  Review: { className: "review", dot: "copper" },
  Campaign: { className: "campaign", dot: "sage" },
  Research: { className: "research", dot: "blue" },
  Internal: { className: "internal", dot: "neutral" },
};

function restoreTaskOrder() {
  try {
    const storedOrder = JSON.parse(localStorage.getItem(TASK_ORDER_STORAGE_KEY) || "[]");
    if (!Array.isArray(storedOrder) || !storedOrder.length) return;
    const orderedIds = new Set(storedOrder.map(Number));
    const taskMap = new Map(tasks.map((task) => [task.id, task]));
    const restored = storedOrder.map(Number).map((id) => taskMap.get(id)).filter(Boolean);
    tasks = [...restored, ...tasks.filter((task) => !orderedIds.has(task.id))];
  } catch {
    localStorage.removeItem(TASK_ORDER_STORAGE_KEY);
  }
}

function persistTaskOrder() {
  try {
    localStorage.setItem(TASK_ORDER_STORAGE_KEY, JSON.stringify(tasks.map((task) => task.id)));
  } catch {
    // Reordering still works for the current session when storage is unavailable.
  }
}

restoreTaskOrder();

let showAllProjects = false;
let activeReviewProject = null;
let currentProjectFilter = "All";
let currentProjectView = "All";
let currentProjectSort = "priority";
let currentTaskFilter = "Open";
let activeDraggedTaskId = null;
let pageTransitionTimer = null;
let lastSidebarFocus = null;
const WORKSPACE_STATE_KEY = "studioos-workspace-state-v1";
let activeDialogId = null;
let dialogReturnFocus = null;
let searchResultItems = [];
let readNotifications = new Set();
let workspaceSettings = { workspaceName: "StudioOS", workspaceSlug: "studioos", workspaceDescription: "A small creative studio making clear, considered work.", showHealth: true, mondayStart: true, dailyFocus: false };
const WORKSPACE_SELECTION_KEY = "studioos-active-workspace";
const workspaceOptions = [
  { id: "portfolio", name: "Portfolio workspace", mark: "P", detail: "4 projects · 3 active" },
  { id: "atelier", name: "Atelier clients", mark: "A", detail: "Client briefs and reviews" },
  { id: "luxroom", name: "LuxRoom planning", mark: "L", detail: "Launch planning and delivery" },
];
let activeWorkspaceId = "portfolio";
const searchNotes = [
  { id: "note-lumen-feedback", title: "Lumen House / feedback", excerpt: "The type rhythm feels right. One last pass on the mobile lockup.", tag: "Review" },
  { id: "note-northstar-launch", title: "Northstar / launch notes", excerpt: "Keep the launch story focused on the first moment of recognition.", tag: "Campaign" },
  { id: "note-common-ground-research", title: "Common Ground / research", excerpt: "People understand the purpose quickly when the first action is visible.", tag: "Research" },
  { id: "note-studio-rhythm", title: "Studio / weekly rhythm", excerpt: "Protect Tuesday mornings for deep work and thoughtful review.", tag: "Internal" },
];

function loadWorkspaceState() {
  try {
    const saved = JSON.parse(localStorage.getItem(WORKSPACE_STATE_KEY) || "null");
    if (!saved || typeof saved !== "object") return;
    if (Array.isArray(saved.projects) && saved.projects.length) projects.splice(0, projects.length, ...saved.projects);
    if (Array.isArray(saved.tasks) && saved.tasks.length) tasks = saved.tasks;
    if (saved.settings && typeof saved.settings === "object") workspaceSettings = { ...workspaceSettings, ...saved.settings };
    if (Array.isArray(saved.readNotifications)) readNotifications = new Set(saved.readNotifications);
    if (workspaceOptions.some((item) => item.id === saved.activeWorkspaceId)) activeWorkspaceId = saved.activeWorkspaceId;
  } catch {
    localStorage.removeItem(WORKSPACE_STATE_KEY);
  }
}

function persistWorkspaceState() {
  try {
    localStorage.setItem(WORKSPACE_STATE_KEY, JSON.stringify({ projects, tasks, settings: workspaceSettings, readNotifications: [...readNotifications], activeWorkspaceId }));
  } catch {
    // The current session remains usable when storage is unavailable.
  }
}

function restoreSettingsView() {
  const name = document.querySelector("#workspaceNameInput");
  const slug = document.querySelector("#workspaceSlugInput");
  const description = document.querySelector("#workspaceDescriptionInput");
  if (name) name.value = workspaceSettings.workspaceName;
  if (slug) slug.value = workspaceSettings.workspaceSlug;
  if (description) description.value = workspaceSettings.workspaceDescription;
  document.querySelectorAll("[data-setting-key]").forEach((input) => {
    const key = input.dataset.settingKey;
    if (key in workspaceSettings) input.checked = Boolean(workspaceSettings[key]);
  });
}

function loadActiveWorkspace() {
  try {
    const stored = localStorage.getItem(WORKSPACE_SELECTION_KEY);
    if (workspaceOptions.some((item) => item.id === stored)) activeWorkspaceId = stored;
  } catch {
    // The default workspace remains available when storage is unavailable.
  }
}

function getActiveWorkspace() { return workspaceOptions.find((item) => item.id === activeWorkspaceId) || workspaceOptions[0]; }

function applyWorkspaceIdentity() {
  const workspace = getActiveWorkspace();
  document.querySelector("#workspaceContextLabel")?.replaceChildren(document.createTextNode(workspace.name));
  document.querySelector(".mobile-header-context small")?.replaceChildren(document.createTextNode(workspace.name));
  const accountWorkspace = document.querySelector(".account-workspace strong");
  if (accountWorkspace) accountWorkspace.textContent = workspace.name;
  document.querySelectorAll("[data-workspace-id]").forEach((option) => {
    const isActive = option.dataset.workspaceId === workspace.id;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-checked", String(isActive));
  });
}

function selectWorkspace(id) {
  if (!workspaceOptions.some((item) => item.id === id)) return;
  activeWorkspaceId = id;
  try { localStorage.setItem(WORKSPACE_SELECTION_KEY, id); } catch { /* session state still updates */ }
  persistWorkspaceState();
  applyWorkspaceIdentity();
}

loadActiveWorkspace();
loadWorkspaceState();
persistWorkspaceState();
applyWorkspaceIdentity();

function pageHeader(kicker, title, description, action = "") {
  const headingDot = title === "Projects" ? "" : "<span>.</span>";
  return `<section class="view-heading"><div><div class="section-kicker">${kicker}</div><h1>${title}${headingDot}</h1><p class="view-description">${description}</p></div>${action}</section>`;
}

function capacityTone(load) { return load >= 80 ? "high" : load >= 65 ? "watch" : "healthy"; }
function capacityLabel(load) { return load >= 80 ? "near capacity" : load >= 65 ? "watch capacity" : "healthy capacity"; }
function calendarTone(kind) { return kind === "review" ? "copper" : kind === "handoff" ? "sage" : "ink"; }

function renderProjectsPage(query = "", filter = currentProjectFilter, view = currentProjectView) {
  const normalized = query.trim().toLowerCase();
  const filtered = projects.filter((project) => {
    const matchesQuery = !normalized || `${project.name} ${project.type} ${project.owner}`.toLowerCase().includes(normalized);
    const matchesFilter = filter === "All" || (filter === "In review" ? project.status === "In review" : filter === "On track" ? project.status === "On track" : project.status === "Not started");
    const matchesView = view === "All" || project.view === view;
    return matchesQuery && matchesFilter && matchesView;
  }).sort((a, b) => {
    if (currentProjectSort === "progress") return b.progress - a.progress;
    if (currentProjectSort === "name") return a.name.localeCompare(b.name);
    return projects.indexOf(a) - projects.indexOf(b);
  });
  const grid = document.querySelector("#projectsPageGrid");
  if (!grid) return;
  grid.innerHTML = filtered.length ? filtered.map(projectCard).join("") : `<div class="empty-search page-empty">${icon("search")}<strong>No projects in this view</strong><span>Try another filter or search term.</span></div>`;
  const count = document.querySelector("#projectsPageCount");
  if (count) count.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
}

function projectsPage() {
  return `<div class="page-shell-page"><div class="page-intro-row">${pageHeader("02 / Portfolio", "Projects", "A clear view of every brief, milestone and next decision.", `<button class="primary-button" id="pageNewProjectButton" type="button"><span data-icon="plus"></span> New project</button>`)}</div><section class="page-toolbar project-controls" aria-label="Project controls"><label class="toolbar-search"><span data-icon="search"></span><span class="sr-only">Search projects</span><input id="projectFilterInput" type="search" placeholder="Search projects" /></label><div class="filter-group" role="group" aria-labelledby="projectStatusLabel"><span class="filter-group-label" id="projectStatusLabel">Status</span><div class="filter-chips"><button class="filter-chip active" type="button" aria-pressed="true" data-project-filter="All">All <em>04</em></button><button class="filter-chip" type="button" aria-pressed="false" data-project-filter="In review">In review <em>01</em></button><button class="filter-chip" type="button" aria-pressed="false" data-project-filter="On track">On track <em>02</em></button><button class="filter-chip" type="button" aria-pressed="false" data-project-filter="Not started">Not started <em>01</em></button></div></div><button class="ghost-button" type="button" data-action="sort-projects" aria-label="Sort projects"><span class="sort-label">Sort</span> <span data-icon="sliders"></span></button></section><div class="project-taxonomy"><div class="taxonomy-heading"><span class="taxonomy-label">Type</span><span class="taxonomy-hint">Filter by project type</span></div><div class="taxonomy-scroller" role="group" aria-label="Filter projects by type"><button class="taxonomy-chip active" type="button" aria-pressed="true" data-project-view="All">All work <em>04</em></button><button class="taxonomy-chip" type="button" aria-pressed="false" data-project-view="Brand">Brand <em>01</em></button><button class="taxonomy-chip" type="button" aria-pressed="false" data-project-view="Digital">Digital <em>01</em></button><button class="taxonomy-chip" type="button" aria-pressed="false" data-project-view="Campaign">Campaign <em>01</em></button><button class="taxonomy-chip" type="button" aria-pressed="false" data-project-view="Research">Research <em>01</em></button></div></div><section class="metric-strip projects-metric-strip"><div><small>Total value</small><strong>04</strong><span>active projects</span></div><div><small>Moving well</small><strong>03</strong><span>on schedule</span></div><div><small>Needs attention</small><strong>01</strong><span>awaiting your eye</span></div></section><section class="page-section-heading"><div><div class="section-kicker">${currentProjectView === "All" ? "All work" : currentProjectView} / ${currentProjectFilter}</div><h2>Project index</h2></div><span class="page-count" id="projectsPageCount" aria-live="polite">${projects.length} results</span></section><div class="project-grid projects-page-grid" id="projectsPageGrid"></div></div>`;
}

function tasksPage() {
  const completed = tasks.filter((task) => task.done).length;
  const open = tasks.length - completed;
  const dueToday = tasks.filter((task) => !task.done && task.due.toLowerCase().includes("today")).length;
  const openView = currentTaskFilter === "Open";
  return `<div class="page-shell-page tasks-page"><div class="page-intro-row">${pageHeader("04 / Tasks", "Tasks", "A calm queue for the work that needs your next decision.", `<button class="primary-button" id="tasksAddButton" type="button"><span data-icon="plus"></span> Add task</button>`)}</div><section class="metric-strip tasks-metric-strip"><div><small>Open tasks</small><strong>${open.toString().padStart(2, "0")}</strong><span>ready for attention</span></div><div><small>Completed</small><strong>${completed.toString().padStart(2, "0")}</strong><span>in this workspace</span></div><div><small>Due today</small><strong>${dueToday.toString().padStart(2, "0")}</strong><span>needs a decision</span></div></section><section class="tasks-layout"><article class="panel-surface tasks-panel"><div class="page-section-heading tasks-heading"><div><div class="section-kicker">Queue / Open work</div><h2>Work in focus</h2><p class="tasks-heading-note">Open tasks ready for the next right decision.</p></div><div class="tasks-heading-meta"><span class="tasks-live-status"><span class="tasks-live-dot" aria-hidden="true"></span><span>Live queue</span></span><span class="page-count" id="tasksResultCount" aria-live="polite">${openView ? open : tasks.length} task${(openView ? open : tasks.length) === 1 ? "" : "s"}</span></div></div><div class="tasks-toolbar"><label class="toolbar-search"><span data-icon="search"></span><span class="sr-only">Search tasks</span><input id="tasksSearchInput" type="search" placeholder="Search tasks" /></label><div class="filter-chips" role="group" aria-label="Task filters"><button class="filter-chip ${!openView ? "active" : ""}" type="button" aria-pressed="${String(!openView)}" data-task-filter="All">All <em>${tasks.length.toString().padStart(2, "0")}</em></button><button class="filter-chip ${openView ? "active" : ""}" type="button" aria-pressed="${String(openView)}" data-task-filter="Open">Open <em>${open.toString().padStart(2, "0")}</em></button><button class="filter-chip" type="button" aria-pressed="false" data-task-filter="Complete">Complete <em>${completed.toString().padStart(2, "0")}</em></button></div></div><div class="task-list-heading" aria-hidden="true"><span></span><span># / Task</span><span>Priority</span><span>Due</span><span></span></div><div class="tasks-page-list" id="tasksPageList"></div></article><aside class="tasks-side-column"><article class="panel-surface task-focus-card"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Today / Suggested</div><h2>Protect the next hour</h2></div><span class="focus-mark" aria-label="Suggested focus 01"><small>Focus</small><strong>01</strong></span></div><p>Start with the review that unblocks the most people.</p><div class="focus-callout"><span class="signal-icon signal-icon-copper" data-icon="message"></span><span><strong>Review Lumen House feedback</strong><small>High priority · Due today</small></span></div><button class="link-button" type="button" data-action="focus-timer">Start a focused session ${icon("arrow-up-right")}</button></article><article class="panel-surface task-principles"><div class="section-kicker">Queue / Guidance</div><h2>Keep momentum visible.</h2><p>Clear next steps help the studio move from review to done.</p><div class="principle-line"><i></i><span>Complete one task to update the shared queue.</span></div><div class="principle-line"><i></i><span>Review the next decision when you are ready.</span></div></article></aside></section></div>`;
}

function calendarPage() {
  return `<div class="page-shell-page">${pageHeader("03 / Calendar", "Calendar", "A gentle pulse for the work that needs to happen next.", `<div class="calendar-actions"><button class="ghost-button" type="button" data-action="calendar-prev"><span data-icon="chevron-left"></span></button><button class="ghost-button" type="button" data-action="calendar-next"><span data-icon="chevron-right"></span></button><button class="primary-button" type="button" data-action="calendar-add"><span data-icon="plus"></span> Add milestone</button></div>`)}<section class="calendar-layout"><div class="calendar-main panel-surface"><div class="calendar-toolbar"><div><strong>August 2026</strong><span>Week 33 · 13–19 August</span></div><div class="calendar-view-switch"><button class="view-switch active" type="button">Week</button><button class="view-switch" type="button" data-action="calendar-month">Month</button></div></div><div class="week-grid"><div class="week-label"></div><div><small>MON</small><strong>13</strong></div><div><small>TUE</small><strong>14</strong></div><div><small>WED</small><strong>15</strong></div><div><small>THU</small><strong>16</strong></div><div><small>FRI</small><strong>17</strong></div><div><small>SAT</small><strong class="today-date">18</strong></div><div><small>SUN</small><strong>19</strong></div><span class="week-line line-1"></span><span class="week-line line-2"></span><span class="week-line line-3"></span><span class="week-line line-4"></span>${calendarItems.map((event) => `<span class="calendar-event event-${calendarTone(event.kind)} ${event.position}" title="${event.title}" aria-label="${event.time} ${event.title}"><b>${event.time}</b> ${event.title}</span>`).join("")}</div></div><aside class="calendar-agenda panel-surface"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Next up</div><h2>Today</h2></div><span class="agenda-date">${shortToday()}</span></div><div class="agenda-list">${calendarItems.slice(0, 3).map((event) => `<button class="agenda-item" type="button" data-action="calendar-event" data-calendar-event="${event.id}"><span class="agenda-time">${event.time}</span><span class="agenda-copy"><span class="agenda-title-row"><i class="agenda-dot ${calendarTone(event.kind)}" aria-hidden="true"></i><strong>${event.title}</strong></span><small>${event.project} · ${event.owner}</small></span></button>`).join("")}</div><div class="agenda-legend" id="calendarStatusLegend" aria-label="Calendar status legend"><span><i class="agenda-dot copper" aria-hidden="true"></i> Review</span><span><i class="agenda-dot sage" aria-hidden="true"></i> Handoff</span><span><i class="agenda-dot ink" aria-hidden="true"></i> Meeting</span></div><button class="link-button activity-link" type="button" data-action="calendar-full">Open full calendar <span data-icon="arrow-up-right"></span></button></aside></section></div>`;
}

function teamPage() {
  const members = [
    { initials: "AT", name: "Alex Tran", role: "Product designer", color: "copper", load: 72, focus: "Lumen House", projects: 3 },
    { initials: "MC", name: "Maya Chen", role: "Creative director", color: "sage", load: 54, focus: "Lumen House", projects: 2 },
    { initials: "NW", name: "Noah Williams", role: "Design engineer", color: "blue", load: 81, focus: "Common Ground", projects: 4 },
    { initials: "JT", name: "Jules Tran", role: "Brand designer", color: "ink", load: 36, focus: "Northstar / Q3", projects: 2 },
  ];
  return `<div class="page-shell-page">${pageHeader("05 / People", "Team", "See who is shaping the work, and where their attention is going.", `<button class="primary-button" type="button" data-action="invite"><span data-icon="users"></span> Invite collaborator</button>`)}<section class="metric-strip team-metric-strip"><div><small>Studio members</small><strong>04</strong><span>across 04 projects</span></div><div><small>Average capacity</small><strong>61%</strong><span>healthy this week</span></div><div><small>Open invites</small><strong>02</strong><span>awaiting response</span></div></section><section class="page-section-heading"><div><h2>Studio directory</h2></div><button class="ghost-button" type="button" data-action="team-filter">Filter <span data-icon="sliders"></span></button></section><div class="team-grid">${members.map((member) => `<article class="member-card"><div class="member-card-top"><span class="member-avatar avatar-${member.color}" aria-label="${member.name} avatar">${member.initials}</span><button class="icon-button subtle-icon" type="button" data-action="member-options" data-member-name="${member.name}" aria-haspopup="menu" aria-label="More actions for ${member.name}" title="Open member actions"><span data-icon="more"></span></button></div><h3>${member.name}</h3><p>${member.role}</p><div class="member-focus"><small>Primary focus</small><strong>${member.focus}</strong></div><div class="member-load"><div><span>Capacity</span><b class="capacity-value capacity-value-${capacityTone(member.load)}"><span>${member.load}%</span><em class="capacity-badge capacity-badge-${capacityTone(member.load)}">${capacityLabel(member.load)}</em></b></div><div class="capacity-track capacity-${capacityTone(member.load)}" role="progressbar" aria-label="${member.name} capacity" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${member.load}"><i style="width:${member.load}%"></i></div></div><footer><span>${member.projects} projects</span><button class="text-button" type="button" data-action="member-profile" data-member-name="${member.name}">View profile ${icon("chevron-right")}</button></footer></article>`).join("")}</div></div>`;
}
function notesPage() {
  const notes = [
    { title: "Lumen House / feedback", tag: "Review", scope: "project", dateLabel: "18 Aug", datetime: "2026-08-18", excerpt: "The type rhythm feels right. One last pass on the mobile lockup.", featured: true },
    { title: "Northstar / launch notes", tag: "Campaign", scope: "project", dateLabel: "17 Aug", datetime: "2026-08-17", excerpt: "Keep the launch story focused on the first moment of recognition." },
    { title: "Common Ground / research", tag: "Research", scope: "project", dateLabel: "12 Aug", datetime: "2026-08-12", excerpt: "People understand the purpose quickly when the first action is visible." },
    { title: "Studio / weekly rhythm", tag: "Internal", scope: "team", dateLabel: "08 Aug", datetime: "2026-08-08", excerpt: "Protect Tuesday mornings for deep work and thoughtful review." },
  ];
  const scopeCounts = { all: notes.length, project: notes.filter((note) => note.scope === "project").length, team: notes.filter((note) => note.scope === "team").length };
  const tagCounts = Object.fromEntries(Object.keys(NOTE_TAG_META).map((tag) => [tag, notes.filter((note) => note.tag === tag).length]));
  const tagButtons = Object.entries(NOTE_TAG_META).map(([tag, meta]) => `<button type="button" data-note-tag="${meta.className}" aria-pressed="false"><i class="tag-dot ${meta.dot}"></i><span>${tag}</span><em>${tagCounts[tag].toString().padStart(2, "0")}</em></button>`).join("");
  const noteCards = notes.map((note) => { const tagClass = NOTE_TAG_META[note.tag].className; return `<article class="note-card ${note.featured ? "note-card-featured" : ""}" data-note-scope="${note.scope}" data-note-tag="${tagClass}"><div class="note-card-top"><div class="note-card-labels"><span class="note-tag tag-${tagClass}">${note.tag}</span>${note.featured ? `<span class="note-state">Pinned</span>` : ""}</div><button class="icon-button subtle-icon" type="button" data-action="note-options" data-note-title="${note.title}" aria-haspopup="menu" aria-label="More actions for ${note.title}" title="Open note actions"><span data-icon="more"></span></button></div><h3>${note.title}</h3><p>${note.excerpt}</p><footer><time datetime="${note.datetime}">${note.dateLabel}</time><button class="text-button" type="button" data-action="open-note" data-note-title="${note.title}">Open note ${icon("arrow-up-right")}</button></footer></article>`; }).join("");
  return `<div class="page-shell-page">${pageHeader("06 / Capture", "Notes", "Keep the thinking close to the work, without adding another place to search.", `<button class="primary-button" type="button" data-action="new-note"><span data-icon="plus"></span> New note</button>`)}<section class="notes-layout"><aside class="notes-sidebar panel-surface"><label class="toolbar-search notes-search"><span data-icon="search"></span><span class="sr-only">Search notes</span><input id="notesSearchInput" type="search" placeholder="Search notes" /></label><div class="notes-nav" role="group" aria-label="Note scope"><button class="notes-nav-item active" type="button" data-note-scope="all" aria-pressed="true"><span data-icon="inbox"></span> All notes <em>${scopeCounts.all.toString().padStart(2, "0")}</em></button><button class="notes-nav-item" type="button" data-note-scope="project" aria-pressed="false"><span data-icon="file-check"></span> Project notes <em>${scopeCounts.project.toString().padStart(2, "0")}</em></button><button class="notes-nav-item" type="button" data-note-scope="team" aria-pressed="false"><span data-icon="users"></span> Team notes <em>${scopeCounts.team.toString().padStart(2, "0")}</em></button></div><div class="notes-tags" role="group" aria-label="Note tags"><small>Tags</small>${tagButtons}</div></aside><div class="notes-content"><div class="page-section-heading notes-heading"><div><div class="section-kicker">All notes / Recent</div><h2>Thoughts in motion</h2></div><span class="page-count" id="notesPageCount" aria-live="polite">Showing ${notes.length} of ${notes.length} notes</span></div><div class="notes-grid">${noteCards}</div></div></section></div>`;
}
function insightsPage() {
  return `<div class="page-shell-page">${pageHeader("07 / Insights", "Insights", "A quiet read on the health of your projects, capacity and attention.", `<button class="ghost-button" type="button" data-action="export-insights"><span data-icon="arrow-up-right"></span> Export summary</button>`)}<section class="insights-layout"><article class="insight-hero insight-data-panel panel-surface" aria-labelledby="studioHealthTitle" aria-describedby="studioHealthDescription"><div class="insight-data-label"><span data-icon="chart"></span><span>Key studio signal</span></div><div class="section-heading-row compact-heading"><div><div class="section-kicker">Studio health / This month</div><h2 id="studioHealthTitle">Work is moving<br><em>with intention.</em></h2></div><span class="health-badge health-badge-healthy"><i></i><span>Healthy</span><small>80–100</small></span></div><div class="health-score"><strong>82</strong><span>/ 100</span><p>Up 8 points from last month</p></div><div class="health-bar" role="progressbar" aria-label="Studio health score" aria-valuemin="0" aria-valuemax="100" aria-valuenow="82"><i style="width:82%"></i></div><div class="insight-footnote"><span id="studioHealthDescription">Based on progress, deadlines and review rhythm.</span><button class="text-button" type="button" data-action="insights-method">How this works ${icon("chevron-right")}</button></div></article><div class="insight-stat-grid"><article class="insight-stat"><small>Average progress</small><strong>47%</strong><span class="stat-trend positive">↑ 12% vs. July <em>better</em></span><div class="mini-bars metric-chart" role="img" aria-label="Average progress trend across six periods"><i style="height:34%"></i><i style="height:52%"></i><i style="height:43%"></i><i style="height:72%"></i><i style="height:61%"></i><i style="height:86%"></i></div></article><article class="insight-stat"><small>Review turnaround</small><strong>1.8d</strong><span class="stat-trend positive">↓ 0.4 days <em>faster</em></span><div class="mini-bars metric-chart metric-chart--sage" role="img" aria-label="Review turnaround is improving"><i style="height:30%"></i><i style="height:42%"></i><i style="height:50%"></i><i style="height:62%"></i><i style="height:72%"></i><i style="height:84%"></i></div></article><article class="insight-stat"><small>Focus time</small><strong>26h</strong><span class="stat-trend neutral">On track this week <em>72% of goal</em></span><div class="metric-progress" role="progressbar" aria-label="Focus time goal completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="72"><i style="width:72%"></i></div></article><article class="insight-stat"><small>Tasks completed</small><strong>18</strong><span class="stat-trend positive">↑ 4 this week <em>better</em></span><div class="mini-bars metric-chart metric-chart--ink" role="img" aria-label="Tasks completed across six periods"><i style="height:42%"></i><i style="height:50%"></i><i style="height:50%"></i><i style="height:68%"></i><i style="height:68%"></i><i style="height:82%"></i></div></article></div></section><section class="insights-lower"><article class="panel-surface workload-panel"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Capacity / Current week</div><h2>Where time is going</h2></div><button class="ghost-button" type="button" data-action="workload-options">This week <span data-icon="chevron-down"></span></button></div><div class="workload-chart" role="img" aria-label="Weekly workload by category: deep work, reviews and meetings"><div class="chart-y-axis"><span>32h</span><span>24h</span><span>16h</span><span>8h</span><span>0h</span></div><div class="chart-bars"><div><i class="bar-deep" style="height:63%"></i><span>Mon</span></div><div><i class="bar-review" style="height:42%"></i><span>Tue</span></div><div><i class="bar-deep" style="height:77%"></i><span>Wed</span></div><div><i class="bar-meeting" style="height:55%"></i><span>Thu</span></div><div><i class="bar-deep" style="height:82%"></i><span>Fri</span></div><div><i class="bar-meeting" style="height:18%"></i><span>Sat</span></div><div><i class="bar-review" style="height:8%"></i><span>Sun</span></div></div></div><div class="chart-legend" aria-label="Workload legend"><span><i class="legend-deepwork"></i> Deep work</span><span><i class="legend-review"></i> Reviews</span><span><i class="legend-meeting"></i> Meetings</span></div></article><article class="panel-surface attention-panel"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Signal / Right now</div><h2>Worth your attention</h2></div></div><div class="attention-list"><button type="button" data-action="insight-attention"><span class="attention-icon copper" data-icon="message"></span><span><strong>Lumen House needs a review</strong><small>Due today · 12 min since last comment</small></span><span data-icon="chevron-right"></span></button><button type="button" data-action="insight-attention"><span class="attention-icon sage" data-icon="clock"></span><span><strong>Protect Friday capacity</strong><small>Northstar has 4 tasks moving to review</small></span><span data-icon="chevron-right"></span></button><button type="button" data-action="insight-attention"><span class="attention-icon blue" data-icon="users"></span><span><strong>Noah is nearing capacity</strong><small>81% scheduled · 4 active projects</small></span><span data-icon="chevron-right"></span></button></div></article></section></div>`;
}
function settingsPage() {
  return `<div class="page-shell-page">${pageHeader("08 / Settings", "Settings", "Shape the workspace around the way your studio actually works.", `<span class="settings-saved"><i></i> All changes saved</span>`)}<section class="settings-layout"><aside class="settings-nav panel-surface"><button class="settings-nav-item active" type="button" data-settings-tab="Workspace"><span data-icon="dashboard"></span> Workspace</button><button class="settings-nav-item" type="button" data-settings-tab="Notifications"><span data-icon="bell"></span> Notifications</button><button class="settings-nav-item" type="button" data-settings-tab="Appearance"><span data-icon="sparkles"></span> Appearance</button><button class="settings-nav-item" type="button" data-settings-tab="Members"><span data-icon="users"></span> Members & access</button></aside><div class="settings-content"><article class="settings-card panel-surface"><div class="settings-card-heading"><div><div class="section-kicker">Workspace / Identity</div><h2>Workspace profile</h2><p>Give your team a clear, human place to return to.</p></div><span class="settings-mark settings-avatar" aria-label="StudioOS workspace avatar">S</span></div><div class="settings-form-grid"><label>Workspace name<input id="workspaceNameInput" value="StudioOS" /></label><label>Workspace URL<div class="settings-url-field"><span>studioos.app/</span><input id="workspaceSlugInput" value="studioos" aria-label="Workspace URL path" /></div><small class="settings-field-hint">Your workspace will be available at studioos.app/studioos.</small></label><label class="full-span">Workspace description<textarea id="workspaceDescriptionInput" rows="3">A small creative studio making clear, considered work.</textarea></label></div><button class="primary-button settings-save" type="button" data-action="save-settings">Save changes</button></article><article class="settings-card panel-surface"><div class="section-kicker">Workspace / Preferences</div><h2>Working rhythm</h2><p class="settings-lead">Small defaults that make the system feel like yours.</p><div class="settings-toggle-list"><label class="settings-toggle"><span><strong>Show project health on overview</strong><small>Keep progress and review signals visible at a glance.</small></span><input type="checkbox" checked data-setting-toggle data-setting-key="showHealth" aria-label="Show project health on overview" /><i aria-hidden="true"></i><b class="toggle-state" data-toggle-state>On</b></label><label class="settings-toggle"><span><strong>Week starts on Monday</strong><small>Use a Monday-first calendar for the whole workspace.</small></span><input type="checkbox" checked data-setting-toggle data-setting-key="mondayStart" aria-label="Week starts on Monday" /><i aria-hidden="true"></i><b class="toggle-state" data-toggle-state>On</b></label><label class="settings-toggle"><span><strong>Send a daily focus note</strong><small>Receive a short summary of tasks that need your attention.</small></span><input type="checkbox" data-setting-toggle data-setting-key="dailyFocus" aria-label="Send a daily focus note" /><i aria-hidden="true"></i><b class="toggle-state" data-toggle-state>Off</b></label></div></article></div></section></div>`;
}
function renderPage(name) {
  const render = () => {
    const view = document.querySelector("#pageView");
    const templates = { Projects: projectsPage, Calendar: calendarPage, Tasks: tasksPage, Team: teamPage, Notes: notesPage, Insights: insightsPage, Settings: settingsPage };
    view.innerHTML = templates[name] ? templates[name]() : "";
    renderIcons();
    if (name === "Projects") { currentProjectFilter = "All"; currentProjectView = "All"; currentProjectSort = "priority"; renderProjectsPage(); bindProjectsPage(); }
    if (name === "Tasks") { currentTaskFilter = "Open"; renderTasksPage(); bindTasksPage(); }
    if (name === "Notes") bindNotesPage();
    if (name === "Settings") restoreSettingsView();
    bindPageActions();
    document.querySelector(".studio-main")?.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    view.classList.remove("is-leaving");
    void view.offsetWidth;
    view.classList.add("is-entering");
    triggerStudioMotion(view);
  };
  const view = document.querySelector("#pageView");
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  clearTimeout(pageTransitionTimer);
  if (reduced) { render(); return; }
  view.classList.remove("is-entering");
  view.classList.add("is-leaving");
  pageTransitionTimer = window.setTimeout(render, 140);
}

function bindProjectsPage() {
  const input = document.querySelector("#projectFilterInput");
  const rerender = () => renderProjectsPage(input?.value || "", currentProjectFilter, currentProjectView);
  if (input) input.addEventListener("input", rerender);
  document.querySelectorAll("[data-project-filter]").forEach((button) => button.addEventListener("click", () => { currentProjectFilter = button.dataset.projectFilter; document.querySelectorAll("[data-project-filter]").forEach((item) => { const active = item === button; item.classList.toggle("active", active); item.setAttribute("aria-pressed", String(active)); }); rerender(); button.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "center" }); }));
  document.querySelectorAll("[data-project-view]").forEach((button) => button.addEventListener("click", () => { currentProjectView = button.dataset.projectView; document.querySelectorAll("[data-project-view]").forEach((item) => { const active = item === button; item.classList.toggle("active", active); item.setAttribute("aria-pressed", String(active)); }); rerender(); const label = document.querySelector(".page-section-heading .section-kicker"); if (label) label.textContent = `${currentProjectView === "All" ? "All work" : currentProjectView} / ${currentProjectFilter}`; button.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "center" }); }));
  document.querySelector("[data-action='sort-projects']")?.addEventListener("click", (event) => { const modes = [{ key: "priority", label: "Sort" }, { key: "progress", label: "Progress" }, { key: "name", label: "A–Z" }]; const currentIndex = modes.findIndex((mode) => mode.key === currentProjectSort); const next = modes[(currentIndex + 1) % modes.length]; currentProjectSort = next.key; event.currentTarget.querySelector(".sort-label").textContent = next.label; event.currentTarget.setAttribute("aria-label", `Sort projects: ${next.label}`); rerender(); });
  document.querySelector("#pageNewProjectButton")?.addEventListener("click", () => openDialog("createDialog"));
  document.querySelector("#projectsPageGrid")?.addEventListener("click", (event) => { const review = event.target.closest(".js-review"); const more = event.target.closest(".js-more"); const card = event.target.closest(".project-card"); const project = projects.find((item) => card?.querySelector("h3")?.textContent === item.name); if (review && project) openReview(project); if (more && project) toast(`More actions for ${project.name} are coming soon.`); });
}

function taskPageRow(task, index) {
  const priority = (task.priority || "Medium").toLowerCase();
  return `<article class="task-page-row ${task.done ? "task-done" : ""}" data-task-id="${task.id}" draggable="true" aria-grabbed="false"><button class="task-drag-handle" type="button" data-task-drag-handle aria-label="Reorder ${task.label}. Use Arrow Up or Arrow Down." aria-keyshortcuts="ArrowUp ArrowDown" title="Drag to reorder or use Arrow Up / Arrow Down">${icon("grip")}</button><button class="task-check ${task.done ? "checked" : ""}" type="button" data-task-complete aria-label="${task.done ? "Mark" : "Complete"} ${task.label}">${task.done ? icon("check") : ""}</button><span class="task-row-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><span class="task-page-copy"><strong>${task.label}</strong><small><i class="task-project-marker" aria-hidden="true"></i>${task.project}</small></span><span class="task-priority priority-${priority}"><i aria-hidden="true"></i>${task.priority || "Medium"}</span><span class="task-page-due ${task.due.includes("today") ? "task-due-urgent" : ""}">${task.due}</span><button class="icon-button task-more" type="button" data-action="task-options" aria-label="More options for ${task.label}">${icon("more")}</button></article>`;
}

function renderTasksPage(query = "", filter = currentTaskFilter) {
  const list = document.querySelector("#tasksPageList");
  if (!list) return;
  const normalized = query.trim().toLowerCase();
  const visible = tasks.filter((task) => {
    const matchesQuery = !normalized || `${task.label} ${task.project}`.toLowerCase().includes(normalized);
    const matchesFilter = filter === "All" || (filter === "Open" ? !task.done : task.done);
    return matchesQuery && matchesFilter;
  });
  list.innerHTML = visible.length ? visible.map(taskPageRow).join("") : `<div class="empty-search page-empty">${icon("search")}<strong>No tasks in this view</strong><span>Try another filter or search term.</span></div>`;
  const resultCount = document.querySelector("#tasksResultCount");
  if (resultCount) resultCount.textContent = `${visible.length} task${visible.length === 1 ? "" : "s"}`;
  renderIcons();
}

function bindTasksPage() {
  const input = document.querySelector("#tasksSearchInput");
  const list = document.querySelector("#tasksPageList");
  const rerender = () => renderTasksPage(input?.value || "", currentTaskFilter);
  const clearDragState = () => {
    list?.querySelectorAll(".task-page-row").forEach((row) => {
      row.classList.remove("is-dragging", "drop-before", "drop-after");
      row.setAttribute("aria-grabbed", "false");
    });
    if (list) list.removeAttribute("data-dragging");
    activeDraggedTaskId = null;
  };
  const moveTask = (taskId, targetId, after = false) => {
    if (String(taskId) === String(targetId)) return false;
    const sourceIndex = tasks.findIndex((task) => String(task.id) === String(taskId));
    if (sourceIndex < 0) return false;
    const [movedTask] = tasks.splice(sourceIndex, 1);
    const targetIndex = tasks.findIndex((task) => String(task.id) === String(targetId));
    if (targetIndex < 0) {
      tasks.splice(sourceIndex, 0, movedTask);
      return false;
    }
    tasks.splice(targetIndex + (after ? 1 : 0), 0, movedTask);
    persistTaskOrder();
    persistWorkspaceState();
    return true;
  };
  const focusTaskHandle = (taskId) => document.querySelector(`[data-task-id="${taskId}"] [data-task-drag-handle]`)?.focus();
  input?.addEventListener("input", rerender);
  document.querySelectorAll("[data-task-filter]").forEach((button) => button.addEventListener("click", () => {
    currentTaskFilter = button.dataset.taskFilter;
    document.querySelectorAll("[data-task-filter]").forEach((item) => { const active = item === button; item.classList.toggle("active", active); item.setAttribute("aria-pressed", String(active)); });
    rerender();
    button.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "center" });
  }));
  document.querySelector("#tasksAddButton")?.addEventListener("click", () => addTaskToWorkspace());
  list?.addEventListener("click", (event) => {
    const completeButton = event.target.closest("[data-task-complete]");
    const moreButton = event.target.closest("[data-action='task-options']");
    const row = event.target.closest("[data-task-id]");
    if (!row) return;
    const task = tasks.find((item) => String(item.id) === row.dataset.taskId);
    if (!task) return;
    if (completeButton) toggleTask(task);
    if (moreButton) toast(`More actions for ${task.label} are coming soon.`);
  });
  list?.addEventListener("dragstart", (event) => {
    const handle = event.target.closest("[data-task-drag-handle]");
    const row = event.target.closest("[data-task-id]");
    if (!handle || !row) {
      event.preventDefault();
      return;
    }
    activeDraggedTaskId = row.dataset.taskId;
    row.classList.add("is-dragging");
    row.setAttribute("aria-grabbed", "true");
    list.dataset.dragging = "true";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", activeDraggedTaskId);
  });
  list?.addEventListener("dragover", (event) => {
    if (!activeDraggedTaskId) return;
    const row = event.target.closest("[data-task-id]");
    if (!row || row.dataset.taskId === activeDraggedTaskId) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    list.querySelectorAll(".task-page-row").forEach((item) => item.classList.remove("drop-before", "drop-after"));
    const after = event.clientY > row.getBoundingClientRect().top + row.getBoundingClientRect().height / 2;
    row.classList.add(after ? "drop-after" : "drop-before");
  });
  list?.addEventListener("drop", (event) => {
    if (!activeDraggedTaskId) return;
    const row = event.target.closest("[data-task-id]");
    if (!row || row.dataset.taskId === activeDraggedTaskId) return;
    event.preventDefault();
    const after = row.classList.contains("drop-after");
    const moved = moveTask(activeDraggedTaskId, row.dataset.taskId, after);
    clearDragState();
    if (moved) {
      rerender();
      toast("Task order updated.");
    }
  });
  list?.addEventListener("dragend", clearDragState);
  list?.addEventListener("keydown", (event) => {
    const handle = event.target.closest("[data-task-drag-handle]");
    if (!handle || !["ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault();
    const row = handle.closest("[data-task-id]");
    const rows = [...list.querySelectorAll("[data-task-id]")];
    const currentIndex = rows.indexOf(row);
    const targetRow = rows[currentIndex + (event.key === "ArrowUp" ? -1 : 1)];
    if (!row || !targetRow) return toast(event.key === "ArrowUp" ? "This task is already first." : "This task is already last.");
    const moved = moveTask(row.dataset.taskId, targetRow.dataset.taskId, event.key === "ArrowDown");
    if (!moved) return;
    rerender();
    focusTaskHandle(row.dataset.taskId);
    toast(event.key === "ArrowUp" ? "Task moved up." : "Task moved down.");
  });
}

function bindNotesPage() {
  const input = document.querySelector("#notesSearchInput");
  const grid = document.querySelector(".notes-grid");
  const count = document.querySelector("#notesPageCount");
  if (!input || !grid) return;
  const cards = [...grid.querySelectorAll(".note-card")];
  const scopeButtons = [...document.querySelectorAll("button[data-note-scope]")];
  const tagButtons = [...document.querySelectorAll("button[data-note-tag]")];
  const state = { query: "", scope: "all", tag: "all" };
  let empty = document.querySelector("#notesSearchEmpty");
  if (!empty) {
    empty = document.createElement("div");
    empty.id = "notesSearchEmpty";
    empty.className = "empty-search page-empty";
    empty.innerHTML = `${icon("search")}<strong>No notes found</strong><span>Try another keyword or clear the filters.</span>`;
    grid.parentElement.append(empty);
    renderIcons();
  }
  const applyFilters = () => {
    const query = state.query;
    let visible = 0;
    cards.forEach((card) => {
      const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
      const matchesScope = state.scope === "all" || card.dataset.noteScope === state.scope;
      const matchesTag = state.tag === "all" || card.dataset.noteTag === state.tag;
      const visibleCard = matchesQuery && matchesScope && matchesTag;
      card.hidden = !visibleCard;
      if (visibleCard) visible += 1;
    });
    empty.hidden = visible > 0;
    if (count) count.textContent = `Showing ${visible} of ${cards.length} notes`;
  };
  input.addEventListener("input", (event) => { state.query = event.target.value.trim().toLowerCase(); applyFilters(); });
  scopeButtons.forEach((button) => button.addEventListener("click", () => {
    state.scope = button.dataset.noteScope;
    state.tag = "all";
    scopeButtons.forEach((item) => { const active = item === button; item.classList.toggle("active", active); item.setAttribute("aria-pressed", String(active)); });
    tagButtons.forEach((item) => { item.classList.remove("active"); item.setAttribute("aria-pressed", "false"); });
    applyFilters();
  }));
  tagButtons.forEach((button) => button.addEventListener("click", () => {
    const active = state.tag === button.dataset.noteTag ? "all" : button.dataset.noteTag;
    state.tag = active;
    state.scope = "all";
    scopeButtons.forEach((item) => { const isAll = item.dataset.noteScope === "all"; item.classList.toggle("active", isAll); item.setAttribute("aria-pressed", String(isAll)); });
    tagButtons.forEach((item) => { const isActive = item.dataset.noteTag === active; item.classList.toggle("active", isActive); item.setAttribute("aria-pressed", String(isActive)); });
    applyFilters();
  }));
  applyFilters();
}
function bindPageActions() {
  document.querySelectorAll("#pageView [data-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "save-settings") return saveSettings();
    if (action === "note-options") return showContextMenu(button, ["Pin note", "Archive note", "Delete note"]);
    if (action === "member-options") return showContextMenu(button, ["View profile", "Copy contact", "Remove from studio"]);
    const messages = { "sort-projects": "Projects are sorted by the latest activity.", "calendar-prev": "Previous week is coming next.", "calendar-next": "Next week is coming next.", "calendar-add": "Milestone composer is coming soon.", "calendar-month": "Month view is coming next.", "calendar-event": "Event detail is coming soon.", "calendar-full": "Full calendar view is coming next.", "team-filter": "Team filters are coming soon.", "member-options": "Member actions are coming soon.", "member-profile": "Member profiles are coming soon.", "new-note": "Note composer is coming soon.", "notes-filter": "Note filters are ready for the next slice.", "notes-tag": "Tag filtering is coming soon.", "note-options": "Note actions are coming soon.", "open-note": "Note detail is coming soon.", "export-insights": "Your insights summary is being prepared.", "insights-method": "Insights are based on progress, deadlines and review rhythm.", "workload-options": "Time range options are coming soon.", "insight-attention": "Attention detail is coming soon.", "invite": "Invite flow is coming soon." };
    toast(messages[action] || "This workspace action is coming soon.");
  }));
  document.querySelectorAll("[data-settings-tab]").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll("[data-settings-tab]").forEach((item) => item.classList.toggle("active", item === button)); toast(`${button.dataset.settingsTab} settings selected.`); }));
  document.querySelectorAll("[data-setting-toggle]").forEach((input) => { const sync = () => { const state = input.closest(".settings-toggle")?.querySelector("[data-toggle-state]"); if (!state) return; state.textContent = input.checked ? "On" : "Off"; state.classList.toggle("is-on", input.checked); state.classList.toggle("is-off", !input.checked); }; sync(); input.addEventListener("change", () => { sync(); document.querySelector(".settings-saved")?.classList.add("is-dirty"); toast(`${input.getAttribute("aria-label")} turned ${input.checked ? "on" : "off"}.`); }); });
  document.querySelectorAll("#workspaceNameInput, #workspaceSlugInput, #workspaceDescriptionInput").forEach((field) => field.addEventListener("input", () => document.querySelector(".settings-saved")?.classList.add("is-dirty")));
}

function icon(name) { return `<svg class="studio-icon" aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 24 24">${icons[name] || ""}</svg>`; }
function renderIcons() { document.querySelectorAll("[data-icon]").forEach((node) => { const name = node.dataset.icon; node.innerHTML = icon(name); }); }

function memberAvatarTone(member) { return ({ MC: "sage", JT: "ink", AN: "amber", NW: "blue", LC: "copper", OR: "sage", AR: "blue" })[member] || "neutral"; }
function avatarStack(members) { return `<span class="avatar-stack" aria-label="${members.length} project members">${members.map((member, index) => `<span class="avatar avatar-${index} avatar-member-${member.toLowerCase()} avatar-tone-${memberAvatarTone(member)}">${member}</span>`).join("")}</span>`; }
function projectIndex(id) { return ({"lumen-house":"01","common-ground":"02",northstar:"03","field-notes":"04"})[id] || "04"; }
function projectProgressTone(progress) { return progress < 30 ? "low" : progress < 70 ? "mid" : "high"; }
function projectCard(project) {
  const imagePriority = project.id === "lumen-house" ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"';
  const progressTone = projectProgressTone(project.progress);
  return `<article class="project-card project-card-${project.id} project-progress-${progressTone}"><div class="project-cover"><img src="${project.cover}" width="1600" height="1067" ${imagePriority} decoding="async" alt="${project.name} cover artwork; ${project.type}, ${project.progress}% complete, ${project.due}" /><div class="cover-shade"></div><div class="project-cover-top"><span class="cover-index">${projectIndex(project.id)}</span><button class="icon-button icon-button-light js-more" type="button" aria-label="More options for ${project.name}">${icon("more")}</button></div><div class="cover-caption"><span><b>${project.type}</b><small class="cover-caption-note">Preview artwork</small></span><button class="cover-open-button js-review" type="button" aria-label="Open ${project.name} preview">${icon("arrow-up-right")}</button></div></div><div class="project-card-body"><div class="project-title-row"><div><h3>${project.name}</h3><p>${project.owner}</p></div><span class="status-pill status-${project.tone}"><i class="status-dot"></i>${project.status}</span></div><div class="progress-meta"><span>Project progress</span><strong>${project.progress}%</strong></div><div class="progress-track progress-track-${progressTone}" aria-label="${project.progress}% complete"><span style="width:${project.progress}%"></span></div><div class="project-card-footer"><span class="due-date due-${project.dueTone}">${icon("clock")} ${project.due}</span><span class="card-actions">${avatarStack(project.members)}<button class="text-button js-review" type="button">Review ${icon("chevron-right")}</button></span></div></div></article>`;
}

function renderProjects(query = "") {
  const normalized = query.trim().toLowerCase();
  const results = normalized ? projects.filter((project) => `${project.name} ${project.type} ${project.owner}`.toLowerCase().includes(normalized)) : projects;
  const visible = showAllProjects ? results : results.slice(0, 3);
  const grid = document.querySelector("#projectGrid");
  grid.innerHTML = visible.length ? visible.map(projectCard).join("") : `<div class="empty-search">${icon("search")}<strong>No projects found</strong><span>Try another name, type or owner.</span></div>`;
  const button = document.querySelector("#showAllButton");
  button.innerHTML = `${icon("arrow-up-right")}<span class="sr-only">${showAllProjects ? "Show less" : "View all projects"}</span>`;
  document.querySelector("#activeProjectCount").textContent = String(projects.length).padStart(2, "0");
  const inReview = projects.filter((p) => p.status && p.status.toLowerCase().includes("review")).length;
  const dueSoon = projects.filter((p) => {
    if (!p.due) return false;
    if (p.due === "Today") return true;
    const m = p.due.match(/^(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/);
    if (!m) return false;
    const day = parseInt(m[1], 10);
    const months = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
    const target = new Date(2026, months[m[2]], day);
    const now = new Date(2026, 7, 17);
    const diff = Math.round((target - now) / 86400000);
    return diff >= 0 && diff <= 14;
  }).length;
  const strip = document.querySelector(".portfolio-stats");
  if (strip) { const spans = strip.querySelectorAll("div strong + span"); spans.forEach((el) => { const t = el.textContent.trim().toLowerCase(); if (t === "in review") el.previousElementSibling.textContent = String(inReview).padStart(2, "0"); if (t === "due soon") el.previousElementSibling.textContent = String(dueSoon).padStart(2, "0"); }); }
}

function renderTasks(query = "") {
  const normalized = query.trim().toLowerCase();
  const visible = normalized ? tasks.filter((task) => `${task.label} ${task.project}`.toLowerCase().includes(normalized)) : tasks;
  document.querySelector("#taskList").innerHTML = visible.map((task) => `<button class="task-row ${task.done ? "task-done" : ""}" type="button" data-task-id="${task.id}"><span class="task-check ${task.done ? "checked" : ""}">${task.done ? icon("check") : ""}</span><span class="task-copy"><strong>${task.label}</strong><small>${task.project}</small></span><span class="task-due ${task.due.includes("today") ? "task-due-urgent" : ""}">${task.due}</span></button>`).join("");
  const completed = tasks.filter((task) => task.done).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  document.querySelector("#taskProgressText").textContent = `${completed}/${tasks.length}`;
  document.querySelector("#taskProgressPercent").textContent = `${progress}%`;
  const progressBar = document.querySelector("#taskProgressBar");
  const progressTrack = progressBar?.parentElement;
  if (progressBar) {
    progressBar.style.setProperty("--progress-value", `${progress}%`);
    progressBar.setAttribute("aria-valuenow", String(progress));
  }
  if (progressTrack) progressTrack.setAttribute("aria-valuenow", String(progress));
}

function refreshTaskViews() {
  const activePage = document.querySelector("#activeBreadcrumb")?.textContent;
  if (activePage === "Tasks") renderTasksPage(document.querySelector("#tasksSearchInput")?.value || "", currentTaskFilter);
  else if (activePage === "Overview") renderTasks(document.querySelector("#searchInput")?.value || "");
}

function toggleTask(task) {
  const wasDone = task.done;
  task.done = !wasDone;
  persistWorkspaceState();
  refreshTaskViews();
  toast(wasDone ? "Task moved back to your open queue." : "Task marked complete.", "", !wasDone ? { label: "Undo", action: () => { task.done = false; persistWorkspaceState(); refreshTaskViews(); toast("Task restored to your open queue."); } } : null);
}

function addTaskToWorkspace(taskData = null) {
  if (!taskData) {
    openDialog("taskDialog");
    return;
  }
  const task = { id: Date.now(), label: taskData.label, project: taskData.project || "Workspace", due: taskData.due || "Due this week", priority: taskData.priority || "Medium", done: false };
  tasks.unshift(task);
  persistTaskOrder();
  persistWorkspaceState();
  refreshTaskViews();
  toast(`${task.label} added to your focus list.`, "", { label: "Undo", action: () => { tasks = tasks.filter((item) => item.id !== task.id); persistTaskOrder(); persistWorkspaceState(); refreshTaskViews(); toast("Task removed from your focus list."); } });
}

function toast(message, type = "", actionConfig = null) {
  const node = document.createElement("div");
  node.className = `toast ${type}`;
  node.innerHTML = `<span class="toast-copy">${message}</span>${actionConfig ? `<button class="toast-action" type="button">${actionConfig.label}</button>` : ""}`;
  document.querySelector("#toastRegion").append(node);
  if (actionConfig) {
    const actionNode = node.querySelector(".toast-action");
    actionNode?.addEventListener("click", () => { actionConfig.action(); dismissToast(node); });
  }
  window.setTimeout(() => dismissToast(node), actionConfig ? 5200 : 3000);
}

function dismissToast(node) {
  if (!node || node.dataset.dismissed === "true") return;
  node.dataset.dismissed = "true";
  node.style.opacity = "0";
  node.style.transform = "translateY(8px)";
  window.setTimeout(() => node.remove(), 180);
}

function triggerStudioMotion(scope = document.querySelector("#pageView")) {
  if (!scope) return;
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  scope.classList.remove("studio-motion-cycle", "studio-motion-reduced");
  if (reduced) {
    scope.classList.add("studio-motion-reduced");
    return;
  }
  window.requestAnimationFrame(() => {
    scope.classList.remove("studio-motion-cycle");
    void scope.offsetWidth;
    scope.classList.add("studio-motion-cycle");
  });
}

function getFocusable(container) {
  return [...container.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])")].filter((node) => !node.hidden);
}

function openDialog(id) {
  const layer = document.querySelector(`#${id}`);
  if (!layer) return;
  dialogReturnFocus = document.activeElement;
  activeDialogId = id;
  layer.hidden = false;
  document.body.style.overflow = "hidden";
  const dialog = layer.querySelector("[role='dialog']");
  const focusables = getFocusable(dialog || layer);
  window.setTimeout(() => (focusables[0] || dialog)?.focus(), 20);
}

function closeDialog(id) {
  const layer = document.querySelector(`#${id}`);
  if (!layer) return;
  layer.hidden = true;
  if (activeDialogId === id) activeDialogId = null;
  document.body.style.overflow = document.querySelector(".dialog-layer:not([hidden])") ? "hidden" : "";
  if (dialogReturnFocus && typeof dialogReturnFocus.focus === "function") window.setTimeout(() => dialogReturnFocus.focus(), 20);
  dialogReturnFocus = null;
}

function updateNotificationBadge() {
  const unread = document.querySelectorAll("#notificationPopover [data-notification-id]");
  const count = [...unread].filter((button) => !readNotifications.has(button.dataset.notificationId)).length;
  const badge = document.querySelector(".notification-badge");
  const button = document.querySelector("#notificationButton");
  const label = `Open notifications, ${count} unread`;
  if (badge) { badge.textContent = String(count); badge.hidden = count === 0; }
  button?.setAttribute("aria-label", label);
  const countLabel = document.querySelector("#notificationPopover .popover-heading span");
  if (countLabel) countLabel.textContent = `${String(count).padStart(2, "0")} unread`;
  unread.forEach((item) => item.classList.toggle("is-read", readNotifications.has(item.dataset.notificationId)));
}

function markNotificationRead(id) {
  if (!id || readNotifications.has(id)) return;
  readNotifications.add(id);
  persistWorkspaceState();
  updateNotificationBadge();
  toast("Notification marked as read.", "", { label: "Undo", action: () => { readNotifications.delete(id); persistWorkspaceState(); updateNotificationBadge(); toast("Notification restored to unread."); } });
}

function closeNotifications() { const popover = document.querySelector("#notificationPopover"); if (popover) popover.hidden = true; document.querySelector("#notificationButton")?.setAttribute("aria-expanded", "false"); }

function hideGlobalSearch() {
  const panel = document.querySelector("#globalSearchPanel");
  const input = document.querySelector("#searchInput");
  if (panel) panel.hidden = true;
  input?.setAttribute("aria-expanded", "false");
}

function renderGlobalSearchResults(query = "") {
  const panel = document.querySelector("#globalSearchPanel");
  const input = document.querySelector("#searchInput");
  if (!panel || !input) return;
  const normalized = query.trim().toLowerCase();
  if (!normalized) { hideGlobalSearch(); return; }
  const projectResults = projects.filter((item) => `${item.name} ${item.type} ${item.owner} ${item.status}`.toLowerCase().includes(normalized)).map((item) => ({ type: "Project", id: item.id, title: item.name, meta: `${item.status} · ${item.progress}% complete`, icon: "folder" }));
  const taskResults = tasks.filter((item) => `${item.label} ${item.project} ${item.priority}`.toLowerCase().includes(normalized)).map((item) => ({ type: "Task", id: item.id, title: item.label, meta: `${item.project} · ${item.due}`, icon: "check-circle" }));
  const noteResults = searchNotes.filter((item) => `${item.title} ${item.excerpt} ${item.tag}`.toLowerCase().includes(normalized)).map((item) => ({ type: "Note", id: item.id, title: item.title, meta: `${item.tag} · Note`, icon: "inbox" }));
  searchResultItems = [...projectResults, ...taskResults, ...noteResults].slice(0, 8);
  panel.innerHTML = searchResultItems.length ? searchResultItems.map((item, index) => `<button type="button" role="option" class="global-search-result" data-search-index="${index}" data-search-type="${item.type}" data-search-id="${item.id}"><span class="search-result-icon" data-icon="${item.icon}"></span><span><strong>${item.title}</strong><small>${item.type} · ${item.meta}</small></span><span class="search-result-arrow">↵</span></button>`).join("") : `<div class="global-search-empty"><strong>No workspace results</strong><span>Try a project, task or note name.</span></div>`;
  panel.hidden = false;
  input.setAttribute("aria-expanded", "true");
  renderIcons();
}

function openSearchResult(item) {
  if (!item) return;
  hideGlobalSearch();
  const nav = document.querySelector(`[data-nav='${item.type === "Project" ? "Projects" : item.type === "Task" ? "Tasks" : "Notes"}']`);
  nav?.click();
  window.setTimeout(() => {
    const selector = item.type === "Project" ? "#projectFilterInput" : item.type === "Task" ? "#tasksSearchInput" : "#notesSearchInput";
    const field = document.querySelector(selector);
    if (!field) return;
    const source = item.type === "Project" ? projects.find((project) => project.id === item.id)?.name : item.type === "Task" ? tasks.find((task) => String(task.id) === String(item.id))?.label : searchNotes.find((note) => note.id === item.id)?.title;
    field.value = source || "";
    field.dispatchEvent(new Event("input", { bubbles: true }));
    field.focus();
  }, 180);
}

function openReview(project) {
  activeReviewProject = project;
  document.querySelector("#reviewDialogTitle").textContent = project.name;
  document.querySelector("#reviewDialogDescription").textContent = `${project.type} · ${project.progress}% of the current scope is complete.`;
  document.querySelector("#reviewImage").src = project.cover;
  document.querySelector("#reviewImage").alt = `${project.name} project cover`;
  openDialog("reviewDialog");
}

function syncSidebarState(isOpen, returnFocus = true) {
  const sidebar = document.querySelector("#sidebar");
  const scrim = document.querySelector("#mobileScrim");
  const opener = document.querySelector("#openSidebar");
  if (!sidebar || !scrim) return;
  if (isOpen) {
    lastSidebarFocus = document.activeElement;
    sidebar.classList.add("sidebar-open");
    scrim.classList.add("scrim-visible");
    document.body.classList.add("mobile-nav-open");
    opener?.setAttribute("aria-expanded", "true");
    opener?.setAttribute("aria-label", "Close navigation");
    window.setTimeout(() => document.querySelector("#closeSidebar")?.focus(), 40);
    return;
  }
  sidebar.classList.remove("sidebar-open");
  scrim.classList.remove("scrim-visible");
  document.body.classList.remove("mobile-nav-open");
  opener?.setAttribute("aria-expanded", "false");
  opener?.setAttribute("aria-label", "Open navigation");
  const focusTarget = lastSidebarFocus;
  lastSidebarFocus = null;
  if (returnFocus && focusTarget && typeof focusTarget.focus === "function" && window.matchMedia("(max-width: 900px)").matches) {
    window.setTimeout(() => focusTarget.focus(), 40);
  }
}
function closeSidebar(options = {}) { syncSidebarState(false, options.returnFocus !== false); }
function openSidebar() { syncSidebarState(true); }

function bindTaskComposer() {
  const form = document.querySelector("#taskForm");
  if (!form || form.dataset.bound === "true") return;
  form.dataset.bound = "true";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#taskTitleInput")?.value.trim();
    if (!title) return toast("Give the task a clear title before adding it.", "error");
    addTaskToWorkspace({ label: title, project: document.querySelector("#taskProjectInput")?.value, priority: document.querySelector("#taskPriorityInput")?.value, due: document.querySelector("#taskDueInput")?.value.trim() });
    form.reset();
    const due = document.querySelector("#taskDueInput");
    if (due) due.value = "Due this week";
    closeDialog("taskDialog");
  });
}

function saveSettings() {
  const name = document.querySelector("#workspaceNameInput")?.value.trim();
  const slug = document.querySelector("#workspaceSlugInput")?.value.trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  const description = document.querySelector("#workspaceDescriptionInput")?.value.trim();
  if (!name || !slug) return toast("Workspace name and URL are required.", "error");
  workspaceSettings = { ...workspaceSettings, workspaceName: name, workspaceSlug: slug, workspaceDescription: description || workspaceSettings.workspaceDescription };
  document.querySelectorAll("[data-setting-key]").forEach((input) => { workspaceSettings[input.dataset.settingKey] = input.checked; });
  persistWorkspaceState();
  const saved = document.querySelector(".settings-saved");
  saved?.classList.remove("is-dirty");
  if (saved) saved.innerHTML = `<i></i> Saved just now`;
  toast("Workspace settings saved.");
}

function bindGlobalSearch() {
  const input = document.querySelector("#searchInput");
  const panel = document.querySelector("#globalSearchPanel");
  if (!input || !panel || input.dataset.bound === "true") return;
  input.dataset.bound = "true";
  input.addEventListener("input", (event) => {
    const query = event.target.value;
    renderGlobalSearchResults(query);
    if (document.querySelector("#activeBreadcrumb").textContent === "Overview") { renderProjects(query); renderTasks(query); }
    else if (document.querySelector("#activeBreadcrumb").textContent === "Projects") { const pageInput = document.querySelector("#projectFilterInput"); if (pageInput) { pageInput.value = query; renderProjectsPage(query, currentProjectFilter); } }
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { hideGlobalSearch(); input.blur(); return; }
    if (event.key === "ArrowDown" && searchResultItems.length) { event.preventDefault(); panel.querySelector("[data-search-index='0']")?.focus(); }
  });
  panel.addEventListener("click", (event) => { const result = event.target.closest("[data-search-index]"); if (result) openSearchResult(searchResultItems[Number(result.dataset.searchIndex)]); });
}

document.addEventListener("DOMContentLoaded", () => {
  const overviewMarkup = document.querySelector("#pageView").innerHTML;
  const showOverview = () => { const view = document.querySelector("#pageView"); const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches; view.innerHTML = overviewMarkup; renderIcons(); renderProjects(); renderTasks(); bindOverviewActions(); triggerStudioMotion(view); document.querySelector(".studio-main")?.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); };
  const bindOverviewActions = () => {
    document.querySelector("#searchInput").value = "";
    document.querySelector("#searchInput").oninput = (event) => { renderProjects(event.target.value); renderTasks(event.target.value); };
    document.querySelector("#showAllButton")?.addEventListener("click", () => { showAllProjects = !showAllProjects; renderProjects(document.querySelector("#searchInput").value); });
    document.querySelector("#newProjectButton")?.addEventListener("click", () => openDialog("createDialog"));
    document.querySelector("#addTaskButton")?.addEventListener("click", () => addTaskToWorkspace());
  const fk = document.querySelector("#focusKicker");
  if (fk) fk.textContent = "Today \u00b7 " + shortToday();
    document.querySelector("#projectGrid")?.addEventListener("click", (event) => { const review = event.target.closest(".js-review"); const more = event.target.closest(".js-more"); const card = event.target.closest(".project-card"); if (!card) return; const project = projects.find((item) => card.querySelector("h3")?.textContent === item.name); if (review && project) openReview(project); if (more && project) toast(`More actions for ${project.name} are coming soon.`); });
    document.querySelector("#taskList")?.addEventListener("click", (event) => { const row = event.target.closest("[data-task-id]"); if (!row) return; const task = tasks.find((item) => String(item.id) === row.dataset.taskId); if (task) toggleTask(task); });
  };
  const updateHeaderContext = (page) => { document.querySelector("#activeBreadcrumb").textContent = page; const visibleContext = document.querySelector("#pageContext"); const mobileContext = document.querySelector(".mobile-context-page"); if (visibleContext) visibleContext.textContent = page; if (mobileContext) mobileContext.textContent = page; };
  const closeHelp = () => { const popover = document.querySelector("#helpPopover"); const button = document.querySelector("#helpButton"); if (popover) popover.hidden = true; button?.setAttribute("aria-expanded", "false"); };
  const closeAccountMenu = () => { const popover = document.querySelector("#accountPopover"); const button = document.querySelector("#accountMenuButton"); if (popover) popover.hidden = true; button?.setAttribute("aria-expanded", "false"); };
  const closeWorkspaceMenu = () => { const popover = document.querySelector("#workspacePopover"); const button = document.querySelector("#workspaceContextButton"); if (popover) popover.hidden = true; button?.setAttribute("aria-expanded", "false"); };
  renderIcons(); renderProjects(); renderTasks(); bindOverviewActions(); bindTaskComposer(); bindGlobalSearch(); updateNotificationBadge(); triggerStudioMotion(document.querySelector("#pageView"));
  document.querySelectorAll("[data-nav]").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll("[data-nav]").forEach((item) => { const isActive = item === button; item.classList.toggle("active", isActive); if (isActive) item.setAttribute("aria-current", "page"); else item.removeAttribute("aria-current"); }); updateHeaderContext(button.dataset.nav); closeSidebar(); if (button.dataset.nav === "Overview") showOverview(); else renderPage(button.dataset.nav); }));
  // Global search binding is centralized in bindGlobalSearch() so the palette and route filters stay in sync.

  document.querySelector("#createProjectForm").addEventListener("submit", (event) => { event.preventDefault(); const name = document.querySelector("#projectNameInput").value.trim(); if (!name) return toast("Give the project a name before creating it.", "error");       const project = { id:name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name, type:document.querySelector("#projectTypeInput").value, status:"Not started", tone:"quiet", progress:0, due:"No date", dueTone:"quiet", owner:"You", members:["YO"], cover:"./assets/studioos-project-common-editorial.webp" }; projects.unshift(project); persistWorkspaceState(); document.querySelector("#createProjectForm").reset(); closeDialog("createDialog"); if (document.querySelector("#activeBreadcrumb").textContent === "Projects") { renderProjectsPage(); bindProjectsPage(); } else { renderProjects(document.querySelector("#searchInput").value); } toast(`${name} is ready for its first task.`, "", { label: "Undo", action: () => { const index = projects.findIndex((item) => item.id === project.id); if (index >= 0) projects.splice(index, 1); persistWorkspaceState(); if (document.querySelector("#activeBreadcrumb").textContent === "Projects") { renderProjectsPage(); bindProjectsPage(); } else { renderProjects(document.querySelector("#searchInput").value); } toast(`${name} removed from the workspace.`); } }); });
  document.querySelector("#markReviewedButton").addEventListener("click", () => { const name = activeReviewProject?.name || "Project"; closeDialog("reviewDialog"); toast(`${name} marked as ready for the next review.`); });
  document.querySelector("#searchInput")?.addEventListener("keydown", (event) => { if (event.key === "Escape") event.currentTarget.blur(); });
  document.querySelector("#notificationButton").addEventListener("click", () => { closeHelp(); closeAccountMenu(); const popover = document.querySelector("#notificationPopover"); popover.hidden = !popover.hidden; document.querySelector("#notificationButton").setAttribute("aria-expanded", String(!popover.hidden)); });
  document.querySelector("#helpButton")?.addEventListener("click", () => { closeNotifications(); closeAccountMenu(); const popover = document.querySelector("#helpPopover"); const button = document.querySelector("#helpButton"); popover.hidden = !popover.hidden; button.setAttribute("aria-expanded", String(!popover.hidden)); });
  document.querySelector("#helpDocsButton")?.addEventListener("click", () => { closeHelp(); toast("Help center is coming soon."); });
  document.querySelector("#accountMenuButton")?.addEventListener("click", () => { closeNotifications(); closeHelp(); closeWorkspaceMenu(); const popover = document.querySelector("#accountPopover"); const button = document.querySelector("#accountMenuButton"); if (!popover) return; popover.hidden = !popover.hidden; button.setAttribute("aria-expanded", String(!popover.hidden)); if (!popover.hidden) window.setTimeout(() => popover.querySelector("[role='menuitem']")?.focus(), 20); });
  document.querySelector("#workspaceContextButton")?.addEventListener("click", () => { closeNotifications(); closeHelp(); closeAccountMenu(); const popover = document.querySelector("#workspacePopover"); const button = document.querySelector("#workspaceContextButton"); if (!popover || !button) return; popover.hidden = !popover.hidden; button.setAttribute("aria-expanded", String(!popover.hidden)); if (!popover.hidden) window.setTimeout(() => popover.querySelector("[role='menuitemradio'].active")?.focus(), 20); });
  document.querySelector("#workspacePopover")?.addEventListener("click", (event) => { const option = event.target.closest("[data-workspace-id]"); const action = event.target.closest("[data-workspace-action]"); if (option) { const workspace = workspaceOptions.find((item) => item.id === option.dataset.workspaceId); selectWorkspace(option.dataset.workspaceId); closeWorkspaceMenu(); if (workspace) toast(`${workspace.name} is now active.`); return; } if (action?.dataset.workspaceAction === "manage") { closeWorkspaceMenu(); document.querySelector("[data-nav='Settings']")?.click(); return; } if (action?.dataset.workspaceAction === "create") { closeWorkspaceMenu(); toast("Create a new workspace from Settings.", "", { label: "Open settings", action: () => document.querySelector("[data-nav='Settings']")?.click() }); } });
  document.querySelector("#workspacePopover")?.addEventListener("keydown", (event) => { const items = [...event.currentTarget.querySelectorAll("[role='menuitemradio'], [data-workspace-action]")]; const index = items.indexOf(document.activeElement); if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); items[(index + (event.key === "ArrowDown" ? 1 : items.length - 1)) % items.length]?.focus(); } if (event.key === "Home") { event.preventDefault(); items[0]?.focus(); } if (event.key === "End") { event.preventDefault(); items.at(-1)?.focus(); } if (event.key === "Escape") { event.preventDefault(); closeWorkspaceMenu(); document.querySelector("#workspaceContextButton")?.focus(); } });
  document.querySelectorAll("[data-account-action]").forEach((button) => button.addEventListener("click", () => { const messages = { profile:"Profile settings are coming soon.", preferences:"Workspace preferences are coming soon.", "sign-out":"Sign out is available in the full workspace." }; closeAccountMenu(); toast(messages[button.dataset.accountAction] || "Account action is coming soon."); }));
  document.querySelector("#accountPopover")?.addEventListener("keydown", (event) => { const items = [...event.currentTarget.querySelectorAll("[role='menuitem']")]; const index = items.indexOf(document.activeElement); if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); items[(index + (event.key === "ArrowDown" ? 1 : items.length - 1)) % items.length]?.focus(); } if (event.key === "Home") { event.preventDefault(); items[0]?.focus(); } if (event.key === "End") { event.preventDefault(); items.at(-1)?.focus(); } });
  document.addEventListener("click", (event) => { if (!event.target.closest(".topbar-actions")) { closeNotifications(); closeHelp(); hideGlobalSearch(); } if (!event.target.closest("#accountMenuButton, #accountPopover")) closeAccountMenu(); if (!event.target.closest(".workspace-switcher")) closeWorkspaceMenu(); });
  document.querySelectorAll("[data-action='review-notification']").forEach((button) => button.addEventListener("click", () => { markNotificationRead(button.dataset.notificationId); closeNotifications(); openReview(projects[0]); }));
  document.querySelectorAll("[data-action='calendar-notification']").forEach((button) => button.addEventListener("click", () => { markNotificationRead(button.dataset.notificationId); closeNotifications(); document.querySelector("[data-nav='Calendar']").click(); }));
  document.querySelectorAll("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => closeDialog(button.dataset.closeDialog)));
  document.querySelectorAll(".dialog-layer").forEach((layer) => layer.addEventListener("click", (event) => { if (event.target === layer) closeDialog(layer.id); }));
  document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => { const action = button.dataset.action; if (["focus-options","activity-options","activity","comment"].includes(action)) toast(action === "comment" ? "Comment composer is coming soon." : "This workspace action is coming soon."); }));
  document.querySelector("#openSidebar").addEventListener("click", () => { if (document.querySelector("#sidebar").classList.contains("sidebar-open")) { closeSidebar(); } else { openSidebar(); } });
  document.querySelector("#closeSidebar").addEventListener("click", () => closeSidebar());
  document.querySelector("#mobileScrim").addEventListener("click", () => closeSidebar());
  window.addEventListener("resize", () => { if (window.matchMedia("(min-width: 901px)").matches) closeSidebar({ returnFocus: false }); });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#searchInput")?.focus(); return; }
    if ((event.metaKey || event.ctrlKey) && event.key === "/") { event.preventDefault(); if (window.matchMedia("(max-width: 900px)").matches) openSidebar(); else document.querySelector("#sidebarToggle")?.focus(); return; }
    if (activeDialogId) {
      const layer = document.querySelector(`#${activeDialogId}`);
      const dialog = layer?.querySelector("[role='dialog']");
      if (event.key === "Tab" && dialog) { const focusables = getFocusable(dialog); if (focusables.length) { const first = focusables[0]; const last = focusables.at(-1); if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } } }
      if (event.key === "Escape") { event.preventDefault(); closeDialog(activeDialogId); return; }
    }
    if (!activeDialogId && event.key === "Escape") { closeNotifications(); closeHelp(); closeAccountMenu(); hideGlobalSearch(); closeSidebar(); document.querySelector("#workspaceContextButton")?.focus(); }
  });

  /* Sidebar collapse / expand toggle — desktop only, persisted to localStorage. */
  const SIDEBAR_COLLAPSED_KEY = "studioos-sidebar-collapsed";
  const sidebarEl = document.querySelector("#sidebar");
  const sidebarToggleBtn = document.querySelector("#sidebarToggle");
  const toggleLabel = sidebarToggleBtn?.querySelector(".toggle-label");

  function applySidebarState(collapsed) {
    if (!sidebarEl) return;
    sidebarEl.classList.toggle("collapsed", collapsed);
    if (toggleLabel) toggleLabel.textContent = collapsed ? "Expand" : "Collapse";
    if (sidebarToggleBtn) {
      const label = collapsed ? "Expand sidebar" : "Collapse sidebar";
      sidebarToggleBtn.setAttribute("aria-label", label);
      sidebarToggleBtn.setAttribute("title", label);
      sidebarToggleBtn.setAttribute("aria-expanded", String(!collapsed));
    }
  }

  function isDesktop() { return window.innerWidth > 900; }

  // Restore persisted state on desktop
  if (isDesktop()) {
    try {
      const stored = localStorage.getItem(SIDEBAR_COLLAPSED_KEY);
      if (stored === "true") applySidebarState(true);
    } catch { /* storage unavailable */ }
  }

  sidebarToggleBtn?.addEventListener("click", () => {
    if (!isDesktop()) return;
    const willCollapse = !sidebarEl.classList.contains("collapsed");
    applySidebarState(willCollapse);
    try { localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(willCollapse)); } catch { /* ok */ }
  });

  // Reset collapsed state when resizing below desktop
  window.addEventListener("resize", () => {
    if (!isDesktop() && sidebarEl?.classList.contains("collapsed")) {
      // Don't remove the class, just let CSS media queries override the collapsed styles
    }
  });
});
