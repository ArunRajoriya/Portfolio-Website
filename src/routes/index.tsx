import { createFileRoute } from "@tanstack/react-router";
import { RepoGrid } from "@/components/RepoGrid";

// Asset paths - files should be placed in the public folder
const PORTRAIT_URL = "/arun-rajoriya-portrait.png";
const BANNER_URL = "/linkedin-banner.png";
const RESUME_URL = "/Arun_Rajoriya_Resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arun Rajoriya — Backend & AI Engineer" },
      {
        name: "description",
        content:
          "Arun Rajoriya builds FastAPI backends, RAG chatbots and AI systems with measurable impact and sub-200ms APIs.",
      },
      { property: "og:title", content: "Arun Rajoriya — Backend & AI Engineer" },
      {
        property: "og:description",
        content: "Backend engineering, RAG and LLM systems built for speed, scale and real-world use.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/ArunRajoriya";
const LINKEDIN = "https://www.linkedin.com/in/arun-rajoriya-587a6a252";
const EMAIL = "arunrajoriya2004@gmail.com";
const PHONE = "+919691310108";

const projects = [
  {
    index: "01",
    type: "CLIENT PROJECT",
    title: "Bandhan Elevators Website",
    summary:
      "Production website for a 15+ year elevator company in Bhopal. Modern, responsive design with service showcase, contact forms and business information.",
    metric: "Live client site",
    stack: ["React", "TanStack", "Tailwind", "Supabase"],
    tone: "project-mint",
    link: "https://www.bandhanelevators.in/",
  },
  {
    index: "02",
    type: "VOICE INTELLIGENCE",
    title: "Meeting Intelligence Platform",
    summary:
      "A production pipeline that turns raw meeting audio into decisions, summaries and accountable next steps.",
    metric: "Audio → action",
    stack: ["Python", "FastAPI", "Groq", "Whisper", "Render"],
    tone: "project-cyan",
  },
  {
    index: "03",
    type: "SECURITY SYSTEM",
    title: "PhishGuard AI",
    summary:
      "Real-time phishing detection combining asynchronous ML scoring with live threat intelligence and a React dashboard.",
    metric: "Async by design",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "React"],
    tone: "project-lime",
    link: "https://phish-guard-ai-git-main-arun-rajoriya-s-projects.vercel.app/",
  },
  {
    index: "04",
    type: "PUBLIC DATA / RAG",
    title: "Crime Analytics Dashboard",
    summary:
      "Built at MPSEDC to turn thousands of government records into fast dashboards and natural-language answers.",
    metric: "10k+ records",
    stack: ["FastAPI", "SQLite", "RAG", "REST"],
    tone: "project-mint",
  },
];

const capabilities = [
  { no: "01", title: "Backend systems", body: "FastAPI services, REST contracts, auth, queues and database layers engineered for dependable response times." },
  { no: "02", title: "Applied AI", body: "RAG pipelines, LLM reasoning and speech transcription integrated into useful product workflows." },
  { no: "03", title: "Data products", body: "Messy records transformed into query-ready insight, dashboards and decisions that teams can act on." },
  { no: "04", title: "Production delivery", body: "Dockerized services, Redis and Celery workers, cloud deployment and practical reliability." },
];

const experience = [
  {
    period: "2026",
    role: "Software Engineering Intern",
    org: "MPSEDC, Bhopal",
    body: "Built a crime analytics platform over 10,000+ government records: FastAPI services, a RAG question-answering layer and dashboards that cut reporting time by roughly 40%.",
    tags: ["FastAPI", "RAG", "SQLite", "REST"],
  },
  {
    period: "2024 — Present",
    role: "Independent Backend & AI Projects",
    org: "Open source · 11 public repositories",
    body: "Design and ship end-to-end systems — meeting intelligence from raw audio, asynchronous phishing detection, and AI tooling — with an emphasis on clean APIs and measurable latency.",
    tags: ["Python", "Celery", "Redis", "Docker"],
  },
  {
    period: "2022 — 2026",
    role: "B.Tech, Computer Science (AI & ML)",
    org: "Technocrats Institute of Technology Excellence",
    body: "Coursework across data structures, databases, distributed systems and machine learning, applied continuously to production-style side projects. CGPA 7.77/10.",
    tags: ["Algorithms", "Databases", "ML"],
  },
];

const stack = [
  "Python", "FastAPI", "LLMs", "RAG", "PostgreSQL", "Redis", "Celery", "Docker",
  "React", "Node.js", "Whisper", "MongoDB", "SQL", "C++",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{children}</p>;
}


function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="font-mono text-sm font-bold text-foreground">
            AR<span className="text-primary">/</span>26
          </a>
          <div className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-primary">Work</a>
            <a href="#experience" className="transition-colors hover:text-primary">Experience</a>
            <a href="#capabilities" className="transition-colors hover:text-primary">Capabilities</a>
            <a href="#repos" className="transition-colors hover:text-primary">Repositories</a>
          </div>

          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-primary/10 px-3 py-2 font-mono text-[11px] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            Let&apos;s talk <Arrow />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative min-h-[90vh] overflow-hidden border-b border-border">
          <img
            src={PORTRAIT_URL}
            alt="Arun Rajoriya"
            className="absolute inset-0 h-full w-full object-cover object-top"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

          <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-36">
            <div className="reveal max-w-3xl">
              <div className="mb-8 flex items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase text-primary backdrop-blur-sm">
                  <span className="status-dot size-1.5 rounded-full bg-primary" /> Open to 2026 roles
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">BHOPAL · IND</span>
              </div>

              <Label>Software Developer | Python | Full Stack Development | REST APIs | React.js | Node.js | SQL | Git</Label>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Arun <span className="text-muted-foreground">Rajoriya</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Software developer with a backend-first mindset. I design REST APIs, data pipelines and full-stack products with Python, React.js, Node.js and SQL that stay fast, observable and maintainable in production.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#work" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Explore selected work</a>
                <a href={RESUME_URL} download="Arun_Rajoriya_Resume.pdf" className="rounded-md border border-border bg-secondary/80 px-5 py-3 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary">Download résumé</a>
              </div>
            </div>

            <div className="reveal-delay-2 mt-12 grid max-w-xl grid-cols-3 divide-x divide-border/50 rounded-lg border border-primary/25 bg-primary/10 p-1 backdrop-blur-md sm:mt-auto">
              <div className="flex flex-col justify-center p-4"><strong className="font-mono text-2xl text-primary">&lt;200</strong><p className="mt-1 text-[10px] text-muted-foreground">ms / p95</p></div>
              <div className="flex flex-col justify-center p-4"><strong className="font-mono text-2xl text-foreground">10k+</strong><p className="mt-1 text-[10px] text-muted-foreground">records</p></div>
              <div className="flex flex-col justify-center p-4"><strong className="font-mono text-2xl text-foreground">40%</strong><p className="mt-1 text-[10px] text-muted-foreground">faster</p></div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-4 sm:grid-cols-3 lg:grid-cols-7 md:px-8">
          {stack.slice(0, 7).map((item) => (
            <div key={item} className="rounded-md border border-border bg-card px-4 py-4 text-center font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">{item}</div>
          ))}
        </div>

        <figure className="reveal-delay-2 relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-border bg-card px-5 md:px-8">
          <img
            src={BANNER_URL}
            alt="Arun Rajoriya — AIML Engineer, Full Stack Developer, Problem Solver"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </figure>

        <section id="work" className="border-b border-border px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><Label>Selected work / 04</Label><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.025em] md:text-5xl">Proof, not promises.</h2></div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Four real-world projects: client work, AI systems and backend platforms with measurable impact.</p>
            </div>
            <div className="grid gap-4 lg:grid-cols-12">
              {projects.map((project, index) => (
                <article key={project.title} className={`${project.tone} project-card group rounded-lg border border-border bg-card p-6 md:p-8 ${index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : index === 2 ? "lg:col-span-5" : "lg:col-span-7"}`}>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground"><span>{project.index} / {project.type}</span><span className="project-signal size-2 rounded-full" /></div>
                  <div className={`${index === 3 ? "lg:grid lg:grid-cols-2 lg:items-end lg:gap-16" : ""}`}>
                    <div><p className="mt-12 font-mono text-xs text-primary">{project.metric}</p><h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{project.title}</h3></div>
                    <div><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{project.summary}</p><div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{tech}</span>)}</div><a href={project.link || GITHUB} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase text-foreground transition-colors hover:text-primary">{project.link ? "View live site" : "View source"} <Arrow /></a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="border-b border-border bg-secondary/30 px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <Label>How I build</Label>
            <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div><h2 className="text-4xl font-semibold tracking-[-0.025em] md:text-5xl">From model to production.</h2><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">A backend-first engineer with the AI depth to make intelligent features reliable, observable and useful.</p></div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                {capabilities.map((item) => <article key={item.no} className="bg-background p-6 transition-colors hover:bg-card md:p-8"><span className="font-mono text-xs text-primary">{item.no}</span><h3 className="mt-8 text-lg font-semibold tracking-[-0.01em]">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p></article>)}

              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-md border border-border bg-background px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">{item}</span>)}</div>
          </div>
        </section>

        <section id="experience" className="border-b border-border px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><Label>Track record</Label><h2 className="mt-4 text-4xl font-semibold tracking-[-0.025em] md:text-5xl">Experience &amp; education.</h2></div>
              <a href={RESUME_URL} download="Arun_Rajoriya_Resume.pdf" className="w-fit rounded-md border border-border bg-secondary px-4 py-2 font-mono text-xs transition-colors hover:border-primary/40 hover:text-primary">Download résumé ↗</a>
            </div>
            <ol className="border-l border-border pl-6 md:pl-10">
              {experience.map((item) => (
                <li key={item.role} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[27px] top-2 size-2 rounded-full bg-primary md:-left-[43px]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{item.period}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] md:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{item.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] uppercase text-muted-foreground">{tag}</span>)}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-border px-5 py-24 md:px-8">
          <div className="mx-auto max-w-7xl"><RepoGrid /></div>
        </section>


        <section className="px-5 py-24 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-12">
            <div className="rounded-lg border border-border bg-card p-7 lg:col-span-7 md:p-10"><Label>Availability</Label><h2 className="mt-8 max-w-2xl text-2xl font-semibold tracking-[-0.02em] md:text-3xl">Open to SDE-1, backend, and full-stack opportunities from 2026.</h2><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Graduating mid-2026 and available for full-time or internship work — remote or based in India. Comfortable owning services end to end: API design, data layer, background jobs, deployment and monitoring.</p><p className="mt-8 font-mono text-xs text-primary">Bhopal, India · Remote friendly · Replies within a day</p></div>
            <div className="rounded-lg border border-primary/25 bg-primary p-7 text-primary-foreground lg:col-span-5 md:p-10"><h2 className="text-3xl font-semibold tracking-[-0.02em]">Let&apos;s build something useful.</h2><a href={`mailto:${EMAIL}`} className="mt-10 inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5">Email Arun <Arrow /></a></div>

          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 font-mono text-[11px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Arun Rajoriya</p>
          <div className="flex flex-wrap gap-6"><a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-primary">GitHub ↗</a><a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn ↗</a><a href={`mailto:${EMAIL}`} className="hover:text-primary">Email ↗</a><a href={`tel:${PHONE}`} className="hover:text-primary">Call ↗</a></div>
        </div>
      </footer>
    </div>
  );
}