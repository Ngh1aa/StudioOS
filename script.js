/* StudioOS / Quiet Precision: vanilla state, predictable feedback, no framework runtime. */

const icons = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-left": '<path d="m15 6-6 6 6 6"/>',
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
  grip: '<path d="M8 5h.01M8 12h.01M8 19h.01M16 5h.01M16 12h.01M16 19h.01"/>',
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
  { id:"lumen-house", name:"Lumen House", type:"Brand system", view:"Brand", status:"In review", tone:"review", progress:78, due:"Today", dueTone:"urgent", owner:"Maya Chen", members:["MC","JT","AN"], cover:"./assets/studioos-project-architecture-refresh.webp" },
  { id:"common-ground", name:"Common Ground", type:"Digital experience", view:"Digital", status:"On track", tone:"progress", progress:46, due:"18 Aug", dueTone:"normal", owner:"Noah Williams", members:["NW","LC","OR"], cover:"./assets/studioos-project-material-refresh.webp" },
  { id:"northstar", name:"Northstar / Q3", type:"Campaign launch", view:"Campaign", status:"On track", tone:"progress", progress:24, due:"02 Sep", dueTone:"normal", owner:"Jules Tran", members:["JT","MC"], cover:"./assets/studioos-project-motion-refresh.webp" },
  { id:"field-notes", name:"Field Notes", type:"Research sprint", view:"Research", status:"Not started", tone:"quiet", progress:0, due:"09 Sep", dueTone:"quiet", owner:"Anika Rao", members:["AR","NW"], cover:"./assets/studioos-project-field-notes-refresh.webp" },
];

let tasks = [
  { id:1, label:"Review Lumen House feedback", project:"Lumen House", due:"Due today", priority:"High", done:false },
  { id:2, label:"Share final type specimens", project:"Common Ground", due:"Due today", priority:"Medium", done:false },
  { id:3, label:"Move launch checklist to review", project:"Northstar / Q3", due:"Due tomorrow", priority:"Medium", done:false },
  { id:4, label:"Add notes from client sync", project:"Field Notes", due:"Due 21 Aug", priority:"Low", done:true },
];

const TASK_ORDER_STORAGE_KEY = "studioos-task-order";

function restoreTaskOrder() {
  try {
    const storedOrder = JSON.parse(localStorage.getItem(TASK_ORDER_STORAGE_KEY) || "[]");
    if (!Array.isArray(storedOrder) || !storedOrder.length) return;
    const orderedIds = new Set(storedOrder.map(Number));
    const taskMap = new Map(tasks.map((task) => [task.id, task]));
    const restored = storedOrder.map(Number).map((id) => taskMap.get(id)).filter(Boolean);
    tasks = [...restored, ...tasks.filter((task) => !orderedIds.has(task.id))];
  } catch (error) {
    localStorage.removeItem(TASK_ORDER_STORAGE_KEY);
  }
}

function persistTaskOrder() {
  try {
    localStorage.setItem(TASK_ORDER_STORAGE_KEY, JSON.stringify(tasks.map((task) => task.id)));
  } catch (error) {
    // Reordering still works for the current session when storage is unavailable.
  }
}

restoreTaskOrder();

let showAllProjects = false;
let activeReviewProject = null;
let currentProjectFilter = "All";
let currentProjectView = "All";
let currentTaskFilter = "All";
let activeDraggedTaskId = null;
let lastTaskAction = null;
let lastTaskActionTimer = null;
let pageTransitionTimer = null;
let lastSidebarFocus = null;

function pageHeader(kicker, title, description, action = "") {
  return `<section class="view-heading"><div><div class="section-kicker">${kicker}</div><h1>${title}<span>.</span></h1><p class="view-description">${description}</p></div>${action}</section>`;
}

function renderProjectsPage(query = "", filter = currentProjectFilter, view = currentProjectView) {
  const normalized = query.trim().toLowerCase();
  const filtered = projects.filter((project) => {
    const matchesQuery = !normalized || `${project.name} ${project.type} ${project.owner}`.toLowerCase().includes(normalized);
    const matchesFilter = filter === "All" || (filter === "In review" ? project.status === "In review" : filter === "On track" ? project.status === "On track" : project.status === "Not started");
    const matchesView = view === "All" || project.view === view;
    return matchesQuery && matchesFilter && matchesView;
  });
  document.querySelector("#projectsPageGrid").innerHTML = filtered.length ? filtered.map(projectCard).join("") : `<div class="empty-search page-empty">${icon("search")}<strong>No projects in this view</strong><span>Try another filter or search term.</span></div>`;
  const count = document.querySelector("#projectsPageCount");
  if (count) count.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
}

function projectsPage() {
  return `<div class="page-shell-page"><div class="page-intro-row"><div class="page-intro-row">${pageHeader("04 / Portfolio", "Projects", "A clear view of every brief, milestone and next decision.", `<button class="primary-button" id="pageNewProjectButton" type="button"><span data-icon="plus"></span> New project</button>`)}</div><section class="page-toolbar"><label class="toolbar-search"><span data-icon="search"></span><span class="sr-only">Search projects</span><input id="projectFilterInput" type="search" placeholder="Search projects" /></label><div class="filter-chips" role="group" aria-label="Project status filters"><button class="filter-chip active" type="button" data-project-filter="All">All <em>04</em></button><button class="filter-chip" type="button" data-project-filter="In review">In review <em>01</em></button><button class="filter-chip" type="button" data-project-filter="On track">On track <em>02</em></button><button class="filter-chip" type="button" data-project-filter="Not started">Not started <em>01</em></button></div><button class="ghost-button" type="button" data-action="sort-projects">Sort <span data-icon="sliders"></span></button></section><div class="project-taxonomy" role="group" aria-label="View projects by type"><span class="taxonomy-label">View by</span><button class="taxonomy-chip active" type="button" data-project-view="All">All work <em>04</em></button><button class="taxonomy-chip" type="button" data-project-view="Brand">Brand <em>01</em></button><button class="taxonomy-chip" type="button" data-project-view="Digital">Digital <em>01</em></button><button class="taxonomy-chip" type="button" data-project-view="Campaign">Campaign <em>01</em></button><button class="taxonomy-chip" type="button" data-project-view="Research">Research <em>01</em></button></div><section class="metric-strip"><div><small>Total value</small><strong>04</strong><span>active projects</span></div><div><small>Moving well</small><strong>03</strong><span>on schedule</span></div><div><small>Needs attention</small><strong>01</strong><span>awaiting your eye</span></div><div class="metric-strip-note"><span data-icon="sparkles"></span><p><strong>Good work gets room to breathe.</strong><small>One calm view for the whole studio.</small></p></div></section><section class="page-section-heading"><div><div class="section-kicker">${currentProjectView === "All" ? "All work" : currentProjectView} / ${currentProjectFilter}</div><h2>Project index</h2></div><span class="page-count" id="projectsPageCount">${projects.length} results</span></section><div class="project-grid projects-page-grid" id="projectsPageGrid"></div></div>`;
}

function tasksPage() {
  const completed = tasks.filter((task) => task.done).length;
  const open = tasks.length - completed;
  const dueToday = tasks.filter((task) => !task.done && task.due.toLowerCase().includes("today")).length;
  return `<div class="page-shell-page tasks-page"><div class="page-intro-row">${pageHeader("05 / Focus", "Tasks", "A calm queue for the work that needs your next decision.", `<button class="primary-button" id="tasksAddButton" type="button"><span data-icon="plus"></span> Add task</button>`)}</div><section class="metric-strip tasks-metric-strip"><div><small>Open tasks</small><strong>${open.toString().padStart(2, "0")}</strong><span>ready for attention</span></div><div><small>Completed</small><strong>${completed.toString().padStart(2, "0")}</strong><span>in this workspace</span></div><div><small>Due today</small><strong>${dueToday.toString().padStart(2, "0")}</strong><span>needs a decision</span></div><div class="metric-strip-note"><span data-icon="sparkles"></span><p><strong>One thing at a time.</strong><small>Small progress is still progress.</small></p></div></section><section class="tasks-layout"><article class="panel-surface tasks-panel"><div class="page-section-heading tasks-heading"><div><div class="section-kicker">Queue / Current view</div><h2>Work in focus</h2><p class="tasks-heading-note">A focused list for the next right decision.</p></div><div class="tasks-heading-meta"><span class="tasks-live-dot" aria-hidden="true"></span><span class="page-count" id="tasksResultCount">${tasks.length} tasks</span></div></div><div class="tasks-toolbar"><label class="toolbar-search"><span data-icon="search"></span><span class="sr-only">Search tasks</span><input id="tasksSearchInput" type="search" placeholder="Search tasks" /></label><div class="filter-chips" role="group" aria-label="Task filters"><button class="filter-chip active" type="button" data-task-filter="All">All <em>${tasks.length.toString().padStart(2, "0")}</em></button><button class="filter-chip" type="button" data-task-filter="Open">Open <em>${open.toString().padStart(2, "0")}</em></button><button class="filter-chip" type="button" data-task-filter="Complete">Complete <em>${completed.toString().padStart(2, "0")}</em></button></div></div><div class="task-list-heading" aria-hidden="true"><span></span><span># / Task</span><span>Priority</span><span>Due</span><span></span></div><div class="tasks-page-list" id="tasksPageList"></div></article><aside class="tasks-side-column"><article class="panel-surface task-focus-card"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Today / Suggested</div><h2>Protect the next hour</h2></div><span class="focus-mark">01</span></div><p>Start with the review that unblocks the most people.</p><div class="focus-callout"><span class="signal-icon signal-icon-copper" data-icon="message"></span><span><strong>Review Lumen House feedback</strong><small>High priority · Due today</small></span></div><button class="link-button" type="button" data-action="focus-timer">Start a focused session ${icon("arrow-up-right")}</button></article><article class="panel-surface task-principles"><div class="section-kicker">Motion / Feedback</div><h2>Quietly informative.</h2><p>Every completion keeps the queue, progress and your next decision in sync.</p><div class="principle-line"><i></i><span>Complete a task, then keep moving.</span></div><div class="principle-line"><i></i><span>Undo is always close when you need it.</span></div></article></aside></section></div>`;
}

function calendarPage() {
  return `<div class="page-shell-page">${pageHeader("05 / Rhythm", "Calendar", "A gentle pulse for the work that needs to happen next.", `<div class="calendar-actions"><button class="ghost-button" type="button" data-action="calendar-prev"><span data-icon="chevron-left"></span></button><button class="ghost-button" type="button" data-action="calendar-next"><span data-icon="chevron-right"></span></button><button class="primary-button" type="button" data-action="calendar-add"><span data-icon="plus"></span> Add milestone</button></div>`)}<section class="calendar-layout"><div class="calendar-main panel-surface"><div class="calendar-toolbar"><div><strong>August 2026</strong><span>Week 33 · 10–16 August</span></div><div class="calendar-view-switch"><button class="view-switch active" type="button">Week</button><button class="view-switch" type="button" data-action="calendar-month">Month</button></div></div><div class="week-grid"><div class="week-label"></div><div><small>MON</small><strong>10</strong></div><div><small>TUE</small><strong>11</strong></div><div><small>WED</small><strong>12</strong></div><div><small>THU</small><strong>13</strong></div><div><small>FRI</small><strong class="today-date">14</strong></div><div><small>SAT</small><strong>15</strong></div><div><small>SUN</small><strong>16</strong></div><span class="week-line line-1"></span><span class="week-line line-2"></span><span class="week-line line-3"></span><span class="week-line line-4"></span><span class="calendar-event event-copper event-one"><b>09:30</b> Review Lumen House</span><span class="calendar-event event-sage event-two"><b>13:00</b> Type specimens handoff</span><span class="calendar-event event-ink event-three"><b>15:30</b> Northstar launch sync</span><span class="calendar-event event-copper event-four"><b>11:00</b> Client feedback window</span></div></div><aside class="calendar-agenda panel-surface"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Next up</div><h2>Today</h2></div><span class="agenda-date">14 Aug</span></div><div class="agenda-list"><button class="agenda-item" type="button" data-action="calendar-event"><span class="agenda-time">09:30</span><span><strong>Review Lumen House</strong><small>Brand system · Maya Chen</small></span><i class="agenda-dot copper"></i></button><button class="agenda-item" type="button" data-action="calendar-event"><span class="agenda-time">13:00</span><span><strong>Share type specimens</strong><small>Common Ground · Noah Williams</small></span><i class="agenda-dot sage"></i></button><button class="agenda-item" type="button" data-action="calendar-event"><span class="agenda-time">15:30</span><span><strong>Launch sync</strong><small>Northstar / Q3 · Jules Tran</small></span><i class="agenda-dot ink"></i></button></div><button class="link-button activity-link" type="button" data-action="calendar-full">Open full calendar <span data-icon="arrow-up-right"></span></button></aside></section></div>`;
}

function teamPage() {
  const members = [{ initials: "AT", name: "Alex Tran", role: "Product designer", color: "copper", load: 72, focus: "Lumen House", projects: 3 }, { initials: "MC", name: "Maya Chen", role: "Creative director", color: "sage", load: 54, focus: "Lumen House", projects: 2 }, { initials: "NW", name: "Noah Williams", role: "Design engineer", color: "blue", load: 81, focus: "Common Ground", projects: 4 }, { initials: "JT", name: "Jules Tran", role: "Brand designer", color: "ink", load: 36, focus: "Northstar / Q3", projects: 2 }];
  return `<div class="page-shell-page">${pageHeader("06 / People", "Team", "See who is shaping the work, and where their attention is going.", `<button class="primary-button" type="button" data-action="invite"><span data-icon="users"></span> Invite collaborator</button>`)}<section class="metric-strip team-metric-strip"><div><small>Studio members</small><strong>04</strong><span>across 04 projects</span></div><div><small>Average capacity</small><strong>61%</strong><span>healthy this week</span></div><div><small>Open invites</small><strong>02</strong><span>awaiting response</span></div><div class="metric-strip-note"><span data-icon="users"></span><p><strong>Small teams, clear work.</strong><small>Keep the right people close to the brief.</small></p></div></section><section class="page-section-heading"><div><div class="section-kicker">People / Current load</div><h2>Studio directory</h2></div><button class="ghost-button" type="button" data-action="team-filter">Filter <span data-icon="sliders"></span></button></section><div class="team-grid">${members.map((member) => `<article class="member-card"><div class="member-card-top"><span class="member-avatar avatar-${member.color}">${member.initials}</span><button class="icon-button subtle-icon" type="button" data-action="member-options" aria-label="More options for ${member.name}"><span data-icon="more"></span></button></div><h3>${member.name}</h3><p>${member.role}</p><div class="member-focus"><small>Primary focus</small><strong>${member.focus}</strong></div><div class="member-load"><div><span>Capacity</span><b>${member.load}%</b></div><div class="capacity-track"><i style="width:${member.load}%"></i></div></div><footer><span>${member.projects} projects</span><button class="text-button" type="button" data-action="member-profile">View profile ${icon("chevron-right")}</button></footer></article>`).join("")}<button class="member-card member-card-add" type="button" data-action="invite"><span data-icon="plus"></span><strong>Add someone to the studio</strong><small>Invite a collaborator with a clear role.</small></button></div></div>`;
}

function notesPage() {
  const notes = [{ title: "Lumen House / feedback", tag: "Review", time: "12 min ago", excerpt: "The type rhythm feels right. One last pass on the mobile lockup." }, { title: "Northstar / launch notes", tag: "Campaign", time: "Yesterday", excerpt: "Keep the launch story focused on the first moment of recognition." }, { title: "Common Ground / research", tag: "Research", time: "12 Aug", excerpt: "People understand the purpose quickly when the first action is visible." }, { title: "Studio / weekly rhythm", tag: "Internal", time: "08 Aug", excerpt: "Protect Tuesday mornings for deep work and thoughtful review." }];
  return `<div class="page-shell-page">${pageHeader("07 / Capture", "Notes", "Keep the thinking close to the work, without adding another place to search.", `<button class="primary-button" type="button" data-action="new-note"><span data-icon="plus"></span> New note</button>`)}<section class="notes-layout"><aside class="notes-sidebar panel-surface"><label class="toolbar-search notes-search"><span data-icon="search"></span><span class="sr-only">Search notes</span><input id="notesSearchInput" type="search" placeholder="Search notes" /></label><div class="notes-nav"><button class="notes-nav-item active" type="button" data-action="notes-filter"><span data-icon="inbox"></span> All notes <em>08</em></button><button class="notes-nav-item" type="button" data-action="notes-filter"><span data-icon="file-check"></span> Project notes <em>05</em></button><button class="notes-nav-item" type="button" data-action="notes-filter"><span data-icon="users"></span> Team notes <em>03</em></button></div><div class="notes-tags"><small>Tags</small><button type="button" data-action="notes-tag"><i class="tag-dot copper"></i> Review</button><button type="button" data-action="notes-tag"><i class="tag-dot sage"></i> Research</button><button type="button" data-action="notes-tag"><i class="tag-dot blue"></i> Internal</button></div></aside><div class="notes-content"><div class="page-section-heading notes-heading"><div><div class="section-kicker">All notes / Recent</div><h2>Thoughts in motion</h2></div><span class="page-count">08 notes</span></div><div class="notes-grid">${notes.map((note, index) => `<article class="note-card ${index === 0 ? "note-card-featured" : ""}"><div class="note-card-top"><span class="note-tag tag-${note.tag.toLowerCase()}">${note.tag}</span><button class="icon-button subtle-icon" type="button" data-action="note-options" aria-label="More options"><span data-icon="more"></span></button></div><h3>${note.title}</h3><p>${note.excerpt}</p><footer><span>${note.time}</span><button class="text-button" type="button" data-action="open-note">Open note ${icon("arrow-up-right")}</button></footer></article>`).join("")}</div></div></section></div>`;
}

function insightsPage() {
  return `<div class="page-shell-page">${pageHeader("08 / Perspective", "Insights", "A quiet read on the health of your projects, capacity and attention.", `<button class="ghost-button" type="button" data-action="export-insights"><span data-icon="arrow-up-right"></span> Export summary</button>`)}<section class="insights-layout"><article class="insight-hero panel-surface"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Studio health / This month</div><h2>Work is moving<br><em>with intention.</em></h2></div><span class="health-badge"><i></i> Healthy</span></div><div class="health-score"><strong>82</strong><span>/ 100</span><p>up 8 points from last month</p></div><div class="health-bar"><i style="width:82%"></i></div><div class="insight-footnote"><span>Based on progress, deadlines and review rhythm.</span><button class="text-button" type="button" data-action="insights-method">How this works ${icon("chevron-right")}</button></div></article><div class="insight-stat-grid"><article class="insight-stat"><small>Average progress</small><strong>47%</strong><span class="stat-trend up">↑ 12% vs. July</span><div class="mini-bars"><i style="height:34%"></i><i style="height:52%"></i><i style="height:43%"></i><i style="height:72%"></i><i style="height:61%"></i><i style="height:86%"></i></div></article><article class="insight-stat"><small>Review turnaround</small><strong>1.8d</strong><span class="stat-trend up">↓ 0.4 days</span><div class="spark-line"><i></i><i></i><i></i><i></i><i></i><i></i></div></article><article class="insight-stat"><small>Focus time</small><strong>26h</strong><span class="stat-trend neutral">on track this week</span><div class="focus-ring"><i>72%</i></div></article><article class="insight-stat"><small>Tasks completed</small><strong>18</strong><span class="stat-trend up">↑ 4 this week</span><div class="completion-dots"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></article></div></section><section class="insights-lower"><article class="panel-surface workload-panel"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Capacity / Current week</div><h2>Where time is going</h2></div><button class="ghost-button" type="button" data-action="workload-options">This week <span data-icon="chevron-down"></span></button></div><div class="workload-chart"><div class="chart-y-axis"><span>32h</span><span>24h</span><span>16h</span><span>8h</span><span>0h</span></div><div class="chart-bars"><div><i style="height:63%"></i><span>Mon</span></div><div><i style="height:42%"></i><span>Tue</span></div><div><i style="height:77%"></i><span>Wed</span></div><div><i style="height:55%"></i><span>Thu</span></div><div><i style="height:82%"></i><span>Fri</span></div><div><i class="weekend" style="height:18%"></i><span>Sat</span></div><div><i class="weekend" style="height:8%"></i><span>Sun</span></div></div></div><div class="chart-legend"><span><i class="legend-copper"></i> Deep work</span><span><i class="legend-sage"></i> Reviews</span><span><i class="legend-ink"></i> Meetings</span></div></article><article class="panel-surface attention-panel"><div class="section-heading-row compact-heading"><div><div class="section-kicker">Signal / Right now</div><h2>Worth your attention</h2></div></div><div class="attention-list"><button type="button" data-action="insight-attention"><span class="attention-icon copper" data-icon="message"></span><span><strong>Lumen House needs a review</strong><small>Due today · 12 min since last comment</small></span><span data-icon="chevron-right"></span></button><button type="button" data-action="insight-attention"><span class="attention-icon sage" data-icon="clock"></span><span><strong>Protect Friday capacity</strong><small>Northstar has 4 tasks moving to review</small></span><span data-icon="chevron-right"></span></button><button type="button" data-action="insight-attention"><span class="attention-icon blue" data-icon="users"></span><span><strong>Noah is nearing capacity</strong><small>81% scheduled · 4 active projects</small></span><span data-icon="chevron-right"></span></button></div></article></section></div>`;
}

function settingsPage() {
  return `<div class="page-shell-page">${pageHeader("09 / Control", "Settings", "Shape the workspace around the way your studio actually works.", `<span class="settings-saved"><i></i> All changes saved</span>`)}<section class="settings-layout"><aside class="settings-nav panel-surface"><button class="settings-nav-item active" type="button" data-settings-tab="Workspace"><span data-icon="dashboard"></span> Workspace</button><button class="settings-nav-item" type="button" data-settings-tab="Notifications"><span data-icon="bell"></span> Notifications</button><button class="settings-nav-item" type="button" data-settings-tab="Appearance"><span data-icon="sparkles"></span> Appearance</button><button class="settings-nav-item" type="button" data-settings-tab="Members"><span data-icon="users"></span> Members & access</button></aside><div class="settings-content"><article class="settings-card panel-surface"><div class="settings-card-heading"><div><div class="section-kicker">Workspace / Identity</div><h2>Workspace profile</h2><p>Give your team a clear, human place to return to.</p></div><span class="settings-mark">S</span></div><div class="settings-form-grid"><label>Workspace name<input value="Studio North" /></label><label>Workspace URL<input value="studionorth" /></label><label class="full-span">Workspace description<textarea rows="3">A small creative studio making clear, considered work.</textarea></label></div><button class="primary-button settings-save" type="button" data-action="save-settings">Save changes</button></article><article class="settings-card panel-surface"><div class="section-kicker">Workspace / Preferences</div><h2>Working rhythm</h2><p class="settings-lead">Small defaults that make the system feel like yours.</p><div class="settings-toggle-list"><label class="settings-toggle"><span><strong>Show project health on overview</strong><small>Keep progress and review signals visible at a glance.</small></span><input type="checkbox" checked data-setting-toggle /><i></i></label><label class="settings-toggle"><span><strong>Week starts on Monday</strong><small>Use a Monday-first calendar for the whole workspace.</small></span><input type="checkbox" checked data-setting-toggle /><i></i></label><label class="settings-toggle"><span><strong>Send a daily focus note</strong><small>Receive a short summary of tasks that need your attention.</small></span><input type="checkbox" data-setting-toggle /><i></i></label></div></article></div></section></div>`;
}

function renderPage(name) {
  const render = () => {
    const view = document.querySelector("#pageView");
    const templates = { Projects: projectsPage, Calendar: calendarPage, Tasks: tasksPage, Team: teamPage, Notes: notesPage, Insights: insightsPage, Settings: settingsPage };
    view.innerHTML = templates[name] ? templates[name]() : "";
    renderIcons();
    if (name === "Projects") { currentProjectFilter = "All"; currentProjectView = "All"; renderProjectsPage(); bindProjectsPage(); }
    if (name === "Tasks") { currentTaskFilter = "All"; renderTasksPage(); bindTasksPage(); }
    if (name === "Notes") bindNotesPage();
    bindPageActions(name);
    document.querySelector(".studio-main")?.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    view.classList.remove("is-leaving");
    void view.offsetWidth;
    view.classList.add("is-entering");
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
  document.querySelectorAll("[data-project-filter]").forEach((button) => button.addEventListener("click", () => { currentProjectFilter = button.dataset.projectFilter; document.querySelectorAll("[data-project-filter]").forEach((item) => item.classList.toggle("active", item === button)); rerender(); }));
  document.querySelectorAll("[data-project-view]").forEach((button) => button.addEventListener("click", () => { currentProjectView = button.dataset.projectView; document.querySelectorAll("[data-project-view]").forEach((item) => item.classList.toggle("active", item === button)); rerender(); const label = document.querySelector(".page-section-heading .section-kicker"); if (label) label.textContent = `${currentProjectView === "All" ? "All work" : currentProjectView} / ${currentProjectFilter}`; }));
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
    return true;
  };
  const focusTaskHandle = (taskId) => document.querySelector(`[data-task-id="${taskId}"] [data-task-drag-handle]`)?.focus();
  input?.addEventListener("input", rerender);
  document.querySelectorAll("[data-task-filter]").forEach((button) => button.addEventListener("click", () => {
    currentTaskFilter = button.dataset.taskFilter;
    document.querySelectorAll("[data-task-filter]").forEach((item) => item.classList.toggle("active", item === button));
    rerender();
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
  if (!input || !grid) return;
  input.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const cards = [...grid.querySelectorAll(".note-card")];
    let visible = 0;
    cards.forEach((card) => {
      const matches = !query || card.textContent.toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    let empty = document.querySelector("#notesSearchEmpty");
    if (!empty) {
      empty = document.createElement("div");
      empty.id = "notesSearchEmpty";
      empty.className = "empty-search page-empty";
      empty.innerHTML = `${icon("search")}<strong>No notes found</strong><span>Try another keyword or clear the search.</span>`;
      grid.parentElement.append(empty);
      renderIcons();
    }
    empty.hidden = visible > 0 || !query;
  });
}

function bindPageActions(name) {
  document.querySelectorAll("#pageView [data-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.action;
    const messages = { "sort-projects": "Projects are sorted by the latest activity.", "calendar-prev": "Previous week is coming next.", "calendar-next": "Next week is coming next.", "calendar-add": "Milestone composer is coming soon.", "calendar-month": "Month view is coming next.", "calendar-event": "Event detail is coming soon.", "calendar-full": "Full calendar view is coming next.", "team-filter": "Team filters are coming soon.", "member-options": "Member actions are coming soon.", "member-profile": "Member profiles are coming soon.", "new-note": "Note composer is coming soon.", "notes-filter": "Note filters are ready for the next slice.", "notes-tag": "Tag filtering is coming soon.", "note-options": "Note actions are coming soon.", "open-note": "Note detail is coming soon.", "export-insights": "Your insights summary is being prepared.", "insights-method": "Insights are based on progress, deadlines and review rhythm.", "workload-options": "Time range options are coming soon.", "insight-attention": "Attention detail is coming soon.", "save-settings": "Workspace settings saved.", "invite": "Invite flow is coming soon." };
    toast(messages[action] || "This workspace action is coming soon.");
  }));
  document.querySelectorAll("[data-settings-tab]").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll("[data-settings-tab]").forEach((item) => item.classList.toggle("active", item === button)); toast(`${button.dataset.settingsTab} settings selected.`); }));
}

function icon(name) { return `<svg class="studio-icon" aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 24 24">${icons[name] || ""}</svg>`; }
function renderIcons() { document.querySelectorAll("[data-icon]").forEach((node) => { const name = node.dataset.icon; node.innerHTML = icon(name); }); }

function avatarStack(members) { return `<span class="avatar-stack" aria-label="${members.length} project members">${members.map((member, index) => `<span class="avatar avatar-${index}">${member}</span>`).join("")}</span>`; }
function projectIndex(id) { return ({"lumen-house":"01","common-ground":"02",northstar:"03","field-notes":"04"})[id] || "04"; }
function projectCard(project) {
  const imagePriority = project.id === "lumen-house" ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"';
  return `<article class="project-card"><div class="project-cover"><img src="${project.cover}" width="1600" height="1067" ${imagePriority} decoding="async" alt="${project.name} project cover" /><div class="cover-shade"></div><div class="project-cover-top"><span class="cover-index">${projectIndex(project.id)}</span><button class="icon-button icon-button-light js-more" type="button" aria-label="More options for ${project.name}">${icon("more")}</button></div><div class="cover-caption"><span>${project.type}</span>${icon("arrow-up-right")}</div></div><div class="project-card-body"><div class="project-title-row"><div><h3>${project.name}</h3><p>${project.owner}</p></div><span class="status-pill status-${project.tone}"><i class="status-dot"></i>${project.status}</span></div><div class="progress-meta"><span>Project progress</span><strong>${project.progress}%</strong></div><div class="progress-track" aria-label="${project.progress}% complete"><span style="width:${project.progress}%"></span></div><div class="project-card-footer"><span class="due-date due-${project.dueTone}">${icon("clock")} ${project.due}</span><span class="card-actions">${avatarStack(project.members)}<button class="text-button js-review" type="button">Review ${icon("chevron-right")}</button></span></div></div></article>`;
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

function refreshTaskViews() {
  const activePage = document.querySelector("#activeBreadcrumb")?.textContent;
  if (activePage === "Tasks") renderTasksPage(document.querySelector("#tasksSearchInput")?.value || "", currentTaskFilter);
  else if (activePage === "Overview") renderTasks(document.querySelector("#searchInput")?.value || "");
}

function toggleTask(task) {
  if (task.done) {
    task.done = false;
    refreshTaskViews();
    toast("Task moved back to your open queue.");
    return;
  }
  task.done = true;
  refreshTaskViews();
  toast("Task marked complete.", "", { label: "Undo", action: () => { task.done = false; refreshTaskViews(); toast("Task restored to your open queue."); } });
}

function addTaskToWorkspace() {
  tasks.push({ id: Date.now(), label: "Define final QA checklist", project: "Workspace", due: "Due this week", priority: "Medium", done: false });
  persistTaskOrder();
  refreshTaskViews();
  toast("Task added to your focus list.");
}

function toast(message, type = "", actionConfig = null) {
  const node = document.createElement("div");
  node.className = `toast ${type}`;
  node.innerHTML = `<span class="toast-copy">${message}</span>${actionConfig ? `<button class="toast-action" type="button">${actionConfig.label}</button>` : ""}`;
  document.querySelector("#toastRegion").append(node);
  actionConfig && node.querySelector(".toast-action")?.addEventListener("click", () => { actionConfig.action(); dismissToast(node); });
  window.setTimeout(() => dismissToast(node), actionConfig ? 5200 : 3000);
}

function dismissToast(node) {
  if (!node || node.dataset.dismissed === "true") return;
  node.dataset.dismissed = "true";
  node.style.opacity = "0";
  node.style.transform = "translateY(8px)";
  window.setTimeout(() => node.remove(), 180);
}

function openDialog(id) { document.querySelector(`#${id}`).hidden = false; document.body.style.overflow = "hidden"; const first = document.querySelector(`#${id} input`); if (first) window.setTimeout(() => first.focus(), 20); }
function closeDialog(id) { document.querySelector(`#${id}`).hidden = true; document.body.style.overflow = ""; }
function closeNotifications() { document.querySelector("#notificationPopover").hidden = true; document.querySelector("#notificationButton").setAttribute("aria-expanded", "false"); }

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

document.addEventListener("DOMContentLoaded", () => {
  const overviewMarkup = document.querySelector("#pageView").innerHTML;
  const showOverview = () => { const view = document.querySelector("#pageView"); const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches; view.innerHTML = overviewMarkup; renderIcons(); renderProjects(); renderTasks(); bindOverviewActions(); document.querySelector(".studio-main")?.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); };
  const bindOverviewActions = () => {
    document.querySelector("#searchInput").value = "";
    document.querySelector("#searchInput").oninput = (event) => { renderProjects(event.target.value); renderTasks(event.target.value); };
    document.querySelector("#showAllButton")?.addEventListener("click", () => { showAllProjects = !showAllProjects; renderProjects(document.querySelector("#searchInput").value); });
    document.querySelector("#newProjectButton")?.addEventListener("click", () => openDialog("createDialog"));
    document.querySelector("#addTaskButton")?.addEventListener("click", () => addTaskToWorkspace());
    document.querySelector("#projectGrid")?.addEventListener("click", (event) => { const review = event.target.closest(".js-review"); const more = event.target.closest(".js-more"); const card = event.target.closest(".project-card"); if (!card) return; const project = projects.find((item) => card.querySelector("h3")?.textContent === item.name); if (review && project) openReview(project); if (more && project) toast(`More actions for ${project.name} are coming soon.`); });
    document.querySelector("#taskList")?.addEventListener("click", (event) => { const row = event.target.closest("[data-task-id]"); if (!row) return; const task = tasks.find((item) => String(item.id) === row.dataset.taskId); if (task) toggleTask(task); });
  };
  renderIcons(); renderProjects(); renderTasks(); bindOverviewActions();
  document.querySelectorAll("[data-nav]").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll("[data-nav]").forEach((item) => { const isActive = item === button; item.classList.toggle("active", isActive); if (isActive) item.setAttribute("aria-current", "page"); else item.removeAttribute("aria-current"); }); document.querySelector("#activeBreadcrumb").textContent = button.dataset.nav; closeSidebar(); if (button.dataset.nav === "Overview") showOverview(); else renderPage(button.dataset.nav); }));
  document.querySelector("#searchInput").addEventListener("input", (event) => { if (document.querySelector("#activeBreadcrumb").textContent === "Overview") { renderProjects(event.target.value); renderTasks(event.target.value); } else if (document.querySelector("#activeBreadcrumb").textContent === "Projects") { const input = document.querySelector("#projectFilterInput"); if (input) { input.value = event.target.value; renderProjectsPage(event.target.value, currentProjectFilter); } } });
  document.querySelector("#createProjectForm").addEventListener("submit", (event) => { event.preventDefault(); const name = document.querySelector("#projectNameInput").value.trim(); if (!name) return toast("Give the project a name before creating it.", "error"); projects.unshift({ id:name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name, type:document.querySelector("#projectTypeInput").value, status:"Not started", tone:"quiet", progress:0, due:"No date", dueTone:"quiet", owner:"You", members:["YO"], cover:"./assets/studioos-project-motion-refresh.webp" }); document.querySelector("#createProjectForm").reset(); closeDialog("createDialog"); if (document.querySelector("#activeBreadcrumb").textContent === "Projects") { renderProjectsPage(); bindProjectsPage(); } else { renderProjects(document.querySelector("#searchInput").value); } toast(`${name} is ready for its first task.`); });
  document.querySelector("#markReviewedButton").addEventListener("click", () => { const name = activeReviewProject?.name || "Project"; closeDialog("reviewDialog"); toast(`${name} marked as ready for the next review.`); });
  document.querySelector(".top-search")?.addEventListener("click", () => { if (!window.matchMedia("(max-width: 680px)").matches) return; const search = document.querySelector(".top-search"); const input = document.querySelector("#searchInput"); search?.classList.add("search-expanded"); window.requestAnimationFrame(() => input?.focus()); });
  document.querySelector("#searchInput")?.addEventListener("blur", () => { window.setTimeout(() => { const search = document.querySelector(".top-search"); if (search && !search.contains(document.activeElement)) search.classList.remove("search-expanded"); }, 80); });
  document.querySelector("#searchInput")?.addEventListener("keydown", (event) => { if (event.key === "Escape") { event.currentTarget.blur(); document.querySelector(".top-search")?.classList.remove("search-expanded"); } });
  document.querySelector("#notificationButton").addEventListener("click", () => { const popover = document.querySelector("#notificationPopover"); popover.hidden = !popover.hidden; document.querySelector("#notificationButton").setAttribute("aria-expanded", String(!popover.hidden)); });
  document.querySelector("[data-action='review-notification']").addEventListener("click", () => { closeNotifications(); openReview(projects[0]); });
  document.querySelector("[data-action='calendar-notification']").addEventListener("click", () => { closeNotifications(); document.querySelector("[data-nav='Calendar']").click(); });
  document.querySelectorAll("[data-close-dialog]").forEach((button) => button.addEventListener("click", () => closeDialog(button.dataset.closeDialog)));
  document.querySelectorAll(".dialog-layer").forEach((layer) => layer.addEventListener("click", (event) => { if (event.target === layer) closeDialog(layer.id); }));
  document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => { const action = button.dataset.action; if (["workspace","help","focus-options","activity-options","activity","comment"].includes(action)) toast(action === "help" ? "Need a hand? Help center is coming soon." : action === "comment" ? "Comment composer is coming soon." : "This workspace action is coming soon."); }));
  document.querySelector("#openSidebar").addEventListener("click", () => { document.querySelector("#sidebar").classList.contains("sidebar-open") ? closeSidebar() : openSidebar(); }); document.querySelector("#closeSidebar").addEventListener("click", () => closeSidebar()); document.querySelector("#mobileScrim").addEventListener("click", () => closeSidebar());
  window.addEventListener("resize", () => { if (window.matchMedia("(min-width: 901px)").matches) closeSidebar({ returnFocus: false }); });
  document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#searchInput").focus(); } if (event.key === "Escape") { closeNotifications(); document.querySelectorAll(".dialog-layer:not([hidden])").forEach((layer) => closeDialog(layer.id)); closeSidebar(); } });
});
