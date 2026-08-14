/* StudioOS / Quiet Precision: editorial utility, calm hierarchy, warm ivory surfaces, copper action points. */

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDashed,
  CircleHelp,
  CirclePlus,
  Clock3,
  Command,
  ExternalLink,
  FileCheck2,
  FolderKanban,
  Grid2X2,
  Inbox,
  LayoutDashboard,
  ListTodo,
  LockKeyhole,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  Send,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const assetPath = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

const generatedAssets = {
  mark: assetPath("studioos-mark.png"),
  architecture: assetPath("studioos-project-architecture.png"),
  material: assetPath("studioos-project-material.png"),
  motion: assetPath("studioos-project-motion.png"),
};

type Project = {
  id: string;
  name: string;
  type: string;
  status: string;
  tone: "review" | "progress" | "complete" | "quiet";
  progress: number;
  due: string;
  dueTone: "urgent" | "normal" | "quiet";
  owner: string;
  members: string[];
  cover: string;
};

type FocusTask = {
  id: number;
  label: string;
  project: string;
  due: string;
  done: boolean;
};

const initialProjects: Project[] = [
  {
    id: "lumen-house",
    name: "Lumen House",
    type: "Brand system",
    status: "In review",
    tone: "review",
    progress: 78,
    due: "Today",
    dueTone: "urgent",
    owner: "Maya Chen",
    members: ["MC", "JT", "AN"],
    cover: generatedAssets.architecture,
  },
  {
    id: "common-ground",
    name: "Common Ground",
    type: "Digital experience",
    status: "On track",
    tone: "progress",
    progress: 46,
    due: "18 Aug",
    dueTone: "normal",
    owner: "Noah Williams",
    members: ["NW", "LC", "OR"],
    cover: generatedAssets.material,
  },
  {
    id: "northstar",
    name: "Northstar / Q3",
    type: "Campaign launch",
    status: "On track",
    tone: "progress",
    progress: 24,
    due: "02 Sep",
    dueTone: "normal",
    owner: "Jules Tran",
    members: ["JT", "MC"],
    cover: generatedAssets.motion,
  },
  {
    id: "field-notes",
    name: "Field Notes",
    type: "Research sprint",
    status: "Not started",
    tone: "quiet",
    progress: 0,
    due: "09 Sep",
    dueTone: "quiet",
    owner: "Anika Rao",
    members: ["AR", "NW"],
    cover: generatedAssets.architecture,
  },
];

const initialTasks: FocusTask[] = [
  { id: 1, label: "Review Lumen House feedback", project: "Lumen House", due: "Due today", done: false },
  { id: 2, label: "Share final type specimens", project: "Common Ground", due: "Due today", done: false },
  { id: 3, label: "Move launch checklist to review", project: "Northstar / Q3", due: "Due tomorrow", done: false },
  { id: 4, label: "Add notes from client sync", project: "Field Notes", due: "Due 21 Aug", done: true },
];

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: FolderKanban, count: "04" },
  { label: "Calendar", icon: CalendarDays },
  { label: "Team", icon: Users },
  { label: "Notes", icon: Inbox, count: "06" },
];

const utilityItems = [
  { label: "Insights", icon: BarChart3 },
  { label: "Settings", icon: Settings2 },
];

function AvatarStack({ members }: { members: string[] }) {
  return (
    <div className="avatar-stack" aria-label={`${members.length} project members`}>
      {members.map((member, index) => (
        <Avatar className={`avatar avatar-${index}`} key={member}>
          <AvatarFallback>{member}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

function StatusPill({ project }: { project: Project }) {
  return (
    <span className={`status-pill status-${project.tone}`}>
      <span className="status-dot" />
      {project.status}
    </span>
  );
}

function ProjectCard({ project, onReview }: { project: Project; onReview: (project: Project) => void }) {
  return (
    <article className="project-card">
      <div className="project-cover">
        <img src={project.cover} alt="" />
        <div className="cover-shade" />
        <div className="project-cover-top">
          <span className="cover-index">{project.id === "lumen-house" ? "01" : project.id === "common-ground" ? "02" : project.id === "northstar" ? "03" : "04"}</span>
          <button className="icon-button icon-button-light" aria-label={`More options for ${project.name}`} onClick={() => toast("More project actions are coming soon.")}>
            <MoreHorizontal size={17} />
          </button>
        </div>
        <div className="cover-caption">
          <span>{project.type}</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
      <div className="project-card-body">
        <div className="project-title-row">
          <div>
            <h3>{project.name}</h3>
            <p>{project.owner}</p>
          </div>
          <StatusPill project={project} />
        </div>
        <div className="progress-meta">
          <span>Project progress</span>
          <strong>{project.progress}%</strong>
        </div>
        <div className="progress-track" aria-label={`${project.progress}% complete`}>
          <span style={{ width: `${project.progress}%` }} />
        </div>
        <div className="project-card-footer">
          <div className={`due-date due-${project.dueTone}`}>
            <Clock3 size={14} />
            <span>{project.due}</span>
          </div>
          <div className="card-actions">
            <AvatarStack members={project.members} />
            <Button className="text-button" onClick={() => onReview(project)}>
              Review <ChevronRight size={15} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [tasks, setTasks] = useState<FocusTask[]>(initialTasks);
  const [activeNav, setActiveNav] = useState("Overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [reviewProject, setReviewProject] = useState<Project | null>(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("Brand system");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const results = query
      ? projects.filter((project) => `${project.name} ${project.type} ${project.owner}`.toLowerCase().includes(query))
      : projects;
    return showAllProjects ? results : results.slice(0, 3);
  }, [projects, searchQuery, showAllProjects]);

  const filteredTasks = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return query ? tasks.filter((task) => `${task.label} ${task.project}`.toLowerCase().includes(query)) : tasks;
  }, [tasks, searchQuery]);

  const completedTasks = tasks.filter((task) => task.done).length;

  const handleNav = (label: string) => {
    setActiveNav(label);
    setMobileNavOpen(false);
    if (label !== "Overview") toast(`${label} workspace is queued for the next slice.`);
  };

  const handleCreateProject = () => {
    const cleanName = projectName.trim();
    if (!cleanName) {
      toast.error("Give the project a name before creating it.");
      return;
    }
    const nextProject: Project = {
      id: cleanName.toLowerCase().replace(/[^a-z0-9]+/g, "-") || `project-${Date.now()}`,
      name: cleanName,
      type: projectType,
      status: "Not started",
      tone: "quiet",
      progress: 0,
      due: "No date",
      dueTone: "quiet",
      owner: "You",
      members: ["YO"],
      cover: generatedAssets.motion,
    };
    setProjects((current) => [nextProject, ...current]);
    setProjectName("");
    setProjectType("Brand system");
    setCreateOpen(false);
    toast.success(`${cleanName} is ready for its first task.`);
  };

  const addTask = () => {
    const nextId = Math.max(...tasks.map((task) => task.id), 0) + 1;
    setTasks((current) => [
      ...current,
      { id: nextId, label: "Define final QA checklist", project: "Workspace", due: "Due this week", done: false },
    ]);
    toast.success("Task added to your focus list.");
  };

  return (
    <div className="studio-shell">
      <aside className={`studio-sidebar ${mobileNavOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-mark-wrap">
            <img src={generatedAssets.mark} alt="StudioOS mark" />
          </div>
          <div className="brand-lockup">
            <span className="brand-name">StudioOS</span>
            <span className="brand-caption">Creative workspace</span>
          </div>
          <button className="sidebar-close mobile-only" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation">
            <X size={18} />
          </button>
        </div>

        <div className="workspace-switcher">
          <div className="workspace-avatar">S</div>
          <div className="workspace-copy">
            <span>Studio North</span>
            <small>Personal workspace</small>
          </div>
          <ChevronDown size={15} />
        </div>

        <nav className="side-nav" aria-label="Primary navigation">
          <span className="nav-section-label">Workspace</span>
          {navItems.map(({ label, icon: Icon, count }) => (
            <button className={`side-nav-item ${activeNav === label ? "active" : ""}`} key={label} onClick={() => handleNav(label)}>
              <Icon size={17} strokeWidth={activeNav === label ? 2.2 : 1.7} />
              <span>{label}</span>
              {count && <em>{count}</em>}
            </button>
          ))}
          <span className="nav-section-label nav-section-spaced">Manage</span>
          {utilityItems.map(({ label, icon: Icon }) => (
            <button className={`side-nav-item ${activeNav === label ? "active" : ""}`} key={label} onClick={() => handleNav(label)}>
              <Icon size={17} strokeWidth={activeNav === label ? 2.2 : 1.7} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-note">
            <div className="note-icon"><Sparkles size={15} /></div>
            <div>
              <strong>Small teams, clear work.</strong>
              <span>Good work gets room to breathe.</span>
            </div>
          </div>
          <div className="sidebar-profile">
            <Avatar className="profile-avatar"><AvatarFallback>AT</AvatarFallback></Avatar>
            <div><strong>Alex Tran</strong><span>Product designer</span></div>
            <MoreHorizontal size={17} />
          </div>
        </div>
      </aside>

      {mobileNavOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileNavOpen(false)} />}

      <main className="studio-main">
        <header className="topbar">
          <button className="mobile-menu-button mobile-only" onClick={() => setMobileNavOpen(true)} aria-label="Open navigation">
            <Menu size={20} />
          </button>
          <div className="breadcrumbs">
            <span>Studio North</span><ChevronRight size={14} /><strong>{activeNav}</strong>
          </div>
          <div className="topbar-actions">
            <label className="top-search">
              <Search size={16} />
              <span className="sr-only">Search workspace</span>
              <input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search workspace" />
              <kbd><Command size={11} /> K</kbd>
            </label>
            <button className="icon-button notification-button" onClick={() => setNotificationsOpen((open) => !open)} aria-label="Open notifications" aria-expanded={notificationsOpen}>
              <Bell size={18} />
              <span className="notification-dot" />
            </button>
            <button className="help-button" onClick={() => toast("Need a hand? Help center is coming soon.")} aria-label="Open help center"><CircleHelp size={18} /></button>
            {notificationsOpen && (
              <div className="notification-popover">
                <div className="popover-heading"><strong>Notifications</strong><span>02 unread</span></div>
                <button onClick={() => { setNotificationsOpen(false); setReviewProject(projects[0]); }}><span className="notification-icon copper"><MessageCircle size={15} /></span><span><strong>Maya left feedback</strong><small>Lumen House · 12 min ago</small></span></button>
                <button onClick={() => { setNotificationsOpen(false); toast("Calendar view is coming next."); }}><span className="notification-icon sage"><CalendarDays size={15} /></span><span><strong>Two deadlines this week</strong><small>Northstar / Q3 · 1 hr ago</small></span></button>
              </div>
            )}
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-rule" /> Tuesday, 14 August 2026</div>
              <h1>Good morning, Alex<span>.</span></h1>
              <p className="welcome-copy">Three projects are moving. One needs your eye.</p>
            </div>
            <Button className="primary-button" onClick={() => setCreateOpen(true)}><Plus size={17} /> New project</Button>
          </section>

          <section className="signal-row" aria-label="Workspace signals">
            <div className="signal-card signal-featured">
              <div className="signal-icon signal-icon-copper"><FolderKanban size={18} /></div>
              <div><span>Active projects</span><strong>{projects.length.toString().padStart(2, "0")}</strong></div>
              <span className="signal-change">+1 this month</span>
            </div>
            <div className="signal-card">
              <div className="signal-icon signal-icon-sage"><Clock3 size={18} /></div>
              <div><span>Due this week</span><strong>04</strong></div>
              <span className="signal-change signal-muted">All on track</span>
            </div>
            <div className="signal-card">
              <div className="signal-icon signal-icon-ink"><MessageCircle size={18} /></div>
              <div><span>Awaiting review</span><strong>02</strong></div>
              <span className="signal-change signal-muted">1 needs you</span>
            </div>
            <div className="signal-card signal-card-add" onClick={() => toast("Invite flow is coming soon.")} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && toast("Invite flow is coming soon.")}>
              <div className="add-person-icon"><Users size={18} /></div>
              <div><span>Grow the team</span><strong>Invite a collaborator</strong></div>
              <ArrowUpRight size={17} />
            </div>
          </section>

          <section className="section-block">
            <div className="section-heading-row">
              <div><div className="section-kicker">01 / In motion</div><h2>Your projects</h2></div>
              <Button variant="ghost" className="link-button" onClick={() => setShowAllProjects((show) => !show)}>{showAllProjects ? "Show less" : "View all projects"} <ArrowUpRight size={15} /></Button>
            </div>
            <div className="project-grid">
              {filteredProjects.length > 0 ? filteredProjects.map((project) => <ProjectCard key={project.id} project={project} onReview={setReviewProject} />) : <div className="empty-search"><Search size={18} /><strong>No projects found</strong><span>Try another name, type or owner.</span></div>}
            </div>
          </section>

          <section className="lower-grid">
            <div className="focus-panel panel-surface">
              <div className="section-heading-row compact-heading">
                <div><div className="section-kicker">02 / Focus</div><h2>Today’s attention</h2></div>
                <button className="icon-button subtle-icon" onClick={() => toast("Focus list options are coming soon.")} aria-label="Focus list options"><SlidersHorizontal size={17} /></button>
              </div>
              <div className="focus-summary"><div><strong>{completedTasks}/{tasks.length}</strong><span>tasks complete</span></div><div className="mini-progress"><span style={{ width: `${tasks.length ? (completedTasks / tasks.length) * 100 : 0}%` }} /></div><span className="focus-percent">{Math.round((completedTasks / tasks.length) * 100)}%</span></div>
              <div className="task-list">
                {filteredTasks.map((task) => (
                  <button className={`task-row ${task.done ? "task-done" : ""}`} key={task.id} onClick={() => setTasks((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))}>
                    <span className={`task-check ${task.done ? "checked" : ""}`}>{task.done && <Check size={13} />}</span>
                    <span className="task-copy"><strong>{task.label}</strong><span>{task.project}</span></span>
                    <span className={`task-due ${task.due.includes("today") ? "task-due-urgent" : ""}`}>{task.due}</span>
                  </button>
                ))}
              </div>
              <Button variant="ghost" className="add-task-button" onClick={addTask}><CirclePlus size={16} /> Add a task</Button>
            </div>

            <div className="activity-panel panel-surface">
              <div className="section-heading-row compact-heading"><div><div className="section-kicker">03 / Pulse</div><h2>Recent activity</h2></div><button className="icon-button subtle-icon" onClick={() => toast("Activity filters are coming soon.")} aria-label="Activity options"><MoreHorizontal size={17} /></button></div>
              <div className="activity-list">
                <div className="activity-item"><Avatar className="activity-avatar avatar-copper"><AvatarFallback>MC</AvatarFallback></Avatar><div><p><strong>Maya Chen</strong> commented on <strong>Lumen House</strong></p><span>“The type rhythm feels right. One last pass on the mobile lockup.”</span><small>12 min ago <i>·</i> Review</small></div></div>
                <div className="activity-item"><Avatar className="activity-avatar avatar-sage"><AvatarFallback>NW</AvatarFallback></Avatar><div><p><strong>Noah Williams</strong> moved <strong>Share final type specimens</strong></p><span>Common Ground · Ready for review</span><small>1 hr ago <i>·</i> Update</small></div></div>
                <div className="activity-item"><Avatar className="activity-avatar avatar-ink"><AvatarFallback>AT</AvatarFallback></Avatar><div><p>You created <strong>Northstar / Q3</strong></p><span>Campaign launch · 8 tasks added</span><small>Yesterday <i>·</i> Project</small></div></div>
              </div>
              <Button variant="ghost" className="link-button activity-link" onClick={() => toast("Full activity history is coming soon.")}>See full activity <ArrowUpRight size={15} /></Button>
            </div>
          </section>

          <footer className="workspace-footer"><span><span className="footer-mark">◒</span> StudioOS / A considered workspace for small teams.</span><span>Last synced just now <span className="sync-dot" /></span></footer>
        </div>
      </main>

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="studio-dialog">
          <DialogHeader><div className="dialog-eyebrow"><CirclePlus size={15} /> New project</div><DialogTitle>Give the work a place to begin.</DialogTitle><DialogDescription>Set up a clear starting point. You can add milestones, tasks and collaborators next.</DialogDescription></DialogHeader>
          <div className="dialog-form"><label>Project name<input autoFocus value={projectName} onChange={(event) => setProjectName(event.target.value)} placeholder="e.g. Lumen House" /></label><label>Project type<select value={projectType} onChange={(event) => setProjectType(event.target.value)}><option>Brand system</option><option>Digital experience</option><option>Campaign launch</option><option>Research sprint</option></select></label></div>
          <DialogFooter><Button variant="ghost" className="cancel-button" onClick={() => setCreateOpen(false)}>Cancel</Button><Button className="primary-button" onClick={handleCreateProject}>Create project <ArrowUpRight size={16} /></Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(reviewProject)} onOpenChange={(open) => !open && setReviewProject(null)}>
        <DialogContent className="studio-dialog review-dialog">
          {reviewProject && <><DialogHeader><div className="dialog-eyebrow"><FileCheck2 size={15} /> Review queue</div><DialogTitle>{reviewProject.name}</DialogTitle><DialogDescription>{reviewProject.type} · {reviewProject.progress}% of the current scope is complete.</DialogDescription></DialogHeader><div className="review-preview"><img src={reviewProject.cover} alt="" /><div><span className="review-label">Latest note</span><p>“The direction is landing well. Please check the final spacing on the mobile handoff before approval.”</p><span className="review-author"><Avatar className="tiny-avatar"><AvatarFallback>MC</AvatarFallback></Avatar> Maya Chen · 12 min ago</span></div></div><div className="review-actions"><Button variant="ghost" className="review-secondary" onClick={() => toast("Comment composer is coming soon.")}><MessageCircle size={16} /> Add comment</Button><Button className="primary-button" onClick={() => { setReviewProject(null); toast.success(`${reviewProject.name} marked as ready for the next review.`); }}><CheckCircle2 size={16} /> Mark reviewed</Button></div><div className="review-meta"><span><Paperclip size={14} /> 04 files</span><span><Users size={14} /> {reviewProject.members.length} collaborators</span><span><LockKeyhole size={14} /> Client-safe link</span></div></>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
