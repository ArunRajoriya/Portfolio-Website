import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { RepoGrid } from "@/components/RepoGrid";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero3D } from "@/components/Hero3D";
import { TechStackGrid } from "@/components/TechStackGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Asset paths - files should be placed in the public folder
const PORTRAIT_URL = "/arun-rajoriya-portrait.png";
const RESUME_URL = "/Arun_Rajoriya_Resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arun Rajoriya — Full-Stack Engineer & Frontend Specialist" },
      {
        name: "description",
        content:
          "Full-stack software engineer specializing in modern frontend architecture, backend systems, and AI integration. React, TypeScript, Python, FastAPI.",
      },
      {
        property: "og:title",
        content: "Arun Rajoriya — Full-Stack Engineer & Frontend Specialist",
      },
      {
        property: "og:description",
        content:
          "Building premium web experiences with React, TypeScript, Python, and modern frontend technologies.",
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
      "Production website for a 15+ year elevator company in Bhopal. Modern, responsive design with service showcase, contact forms and business information. Implemented semantic HTML5, responsive layouts, and optimized asset delivery.",
    metric: "Live Production Site",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    tone: "project-mint",
    link: "https://www.bandhanelevators.in/",
  },
  {
    index: "02",
    type: "VOICE INTELLIGENCE",
    title: "Meeting Intelligence Platform",
    summary:
      "Full-stack application processing raw meeting audio into structured insights. React frontend with TypeScript, FastAPI backend, Whisper AI integration, and async task processing with Celery. Real-time transcription and decision extraction.",
    metric: "End-to-end Pipeline",
    stack: ["React", "TypeScript", "Python", "FastAPI", "Groq API", "Whisper AI"],
    tone: "project-cyan",
    link: "https://meeting-intelligence-system-weld.vercel.app/",
  },
  {
    index: "03",
    type: "SECURITY SYSTEM",
    title: "PhishGuard AI",
    summary:
      "Real-time phishing detection system with React dashboard, FastAPI microservices, PostgreSQL data layer, Redis caching, and Celery workers. Asynchronous ML scoring pipeline with live threat intelligence integration and 99.82% accuracy.",
    metric: "99.82% Accuracy",
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "Celery", "Machine Learning"],
    tone: "project-lime",
    link: "https://phish-guard-ai-git-main-arun-rajoriya-s-projects.vercel.app/",
  },
  {
    index: "04",
    type: "DATA PLATFORM",
    title: "Crime Analytics Dashboard",
    summary:
      "Government data platform built at MPSEDC processing 10,000+ records. FastAPI REST services, SQLite optimization, RAG-powered natural language queries, and interactive React dashboards. Reduced reporting time by 40% with intelligent data aggregation.",
    metric: "10K+ Records Processed",
    stack: ["React", "FastAPI", "SQLite", "RAG", "REST APIs", "Data Visualization"],
    tone: "project-mint",
    link: "https://metropolitan-cities-crime-statistic.vercel.app/",
  },
];

const capabilities = [
  {
    no: "01",
    title: "Modern Frontend Architecture",
    body: "React 19, TypeScript, Next.js, and component-driven development. Design systems, state management, and performance optimization for production-grade web applications.",
  },
  {
    no: "02",
    title: "Motion & Interaction Design",
    body: "GSAP animations, scroll-driven effects, and micro-interactions. Building immersive, responsive experiences with smooth transitions and visual feedback that delight users.",
  },
  {
    no: "03",
    title: "Backend Systems & APIs",
    body: "FastAPI services, REST architecture, database design, and async processing. Building scalable backend systems with Redis caching, Celery workers, and production reliability.",
  },
  {
    no: "04",
    title: "Full-Stack Integration",
    body: "End-to-end product development from UI/UX to data layer. Docker containerization, CI/CD pipelines, and cloud deployment with monitoring and observability.",
  },
];

const experience = [
  {
    period: "2026",
    role: "Full-Stack Development Intern",
    org: "MPSEDC, Bhopal",
    body: "Built crime analytics platform processing 10,000+ government records. Architected FastAPI microservices with SQLite optimization, implemented RAG-powered natural language query system, and developed React dashboards with real-time data visualization. Reduced reporting time by 40% through intelligent aggregation and caching strategies.",
    tags: ["System Design", "FastAPI", "React", "RAG", "Performance Optimization"],
  },
  {
    period: "2024 — Present",
    role: "Full-Stack Development & Open Source",
    org: "Independent Projects · 11 public repositories",
    body: "Design and ship production-grade full-stack applications from concept to deployment. Focus on modern frontend architecture (React, TypeScript, Next.js), backend systems (FastAPI, Node.js), and seamless integration. Emphasis on clean code, component architecture, API design, and measurable performance improvements.",
    tags: ["React", "TypeScript", "System Architecture", "CI/CD", "Docker"],
  },
  {
    period: "2022 — 2026",
    role: "B.Tech, Computer Science (AI & ML)",
    org: "Technocrats Institute of Technology Excellence · CGPA 7.77/10",
    body: "Comprehensive coursework in data structures & algorithms, database systems, distributed computing, machine learning, and software engineering. Applied learning through production-style projects emphasizing scalable architecture, clean code practices, and modern development workflows.",
    tags: ["DSA", "OOPS", "Databases", "Distributed Systems", "Software Engineering"],
  },
];

const stack = [
  // Backend
  "Python",
  "FastAPI",
  "Node.js",
  "REST APIs",
  // Frontend Core
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "HTML5 & CSS3",
  "Tailwind CSS",
  // Motion & Interaction
  "GSAP",
  "Framer Motion",
  "Three.js",

  // Database & Caching
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Redis",
  // Tools & Infrastructure
  "Git",
  "Docker",
  "Celery",
  "Figma",
  // AI/ML
  "LLMs",
  "RAG",
  "Whisper AI",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </p>
  );
}

function Index() {
  useEffect(() => {
    // Initialize scroll-triggered animations
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        scrollTrigger: {
          trigger: ".reveal",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".reveal-delay-2", {
        scrollTrigger: {
          trigger: ".reveal-delay-2",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen overflow-hidden bg-background text-foreground">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
            <a href="#top" className="font-mono text-sm font-bold text-foreground">
              AR<span className="text-primary">/</span>26
            </a>
            <div className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground md:flex">
              <a href="#work" className="transition-colors hover:text-primary">
                Work
              </a>
              <a href="#experience" className="transition-colors hover:text-primary">
                Experience
              </a>
              <a href="#capabilities" className="transition-colors hover:text-primary">
                Capabilities
              </a>
              <a href="#repos" className="transition-colors hover:text-primary">
                Repositories
              </a>
            </div>

            <a
              href={`https://wa.me/${PHONE.replace(/[^0-9]/g, "")}?text=Hi%20Arun%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-primary/10 px-3 py-2 font-mono text-[11px] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Let&apos;s talk <Arrow />
            </a>
          </nav>
        </header>

        <main id="top">
          {/* Hero Section with 3D Background */}
          <section className="relative min-h-[90vh] overflow-hidden border-b border-border">
            {/* 3D Background Element */}
            <Hero3D />

            <img
              src={PORTRAIT_URL}
              alt="Arun Rajoriya"
              className="absolute inset-0 h-full w-full object-cover object-top"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

            <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-36">
              <div className="reveal max-w-3xl">
                <motion.div
                  className="mb-8 flex items-center gap-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase text-primary backdrop-blur-sm">
                    <motion.span
                      className="status-dot size-1.5 rounded-full bg-primary"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Open to 2026 roles
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">BHOPAL · IND</span>
                </motion.div>

                <Label>
                  Full-Stack Engineer | React | TypeScript | Python | FastAPI | System Design
                </Label>
                <motion.h1
                  className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Arun <span className="text-muted-foreground">Rajoriya</span>
                </motion.h1>
                <motion.p
                  className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Full-stack software engineer with expertise in modern frontend architecture and
                  scalable backend systems. I build production-ready applications with React,
                  TypeScript, Python, and FastAPI — combining clean code, smooth interactions, and
                  measurable performance.
                </motion.p>

                <motion.div
                  className="mt-10 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href="#work"
                    className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Explore selected work
                  </a>
                  <a
                    href={RESUME_URL}
                    download="Arun_Rajoriya_Resume.pdf"
                    className="rounded-md border border-border bg-secondary/80 px-5 py-3 text-sm font-semibold backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary"
                  >
                    Download résumé
                  </a>
                </motion.div>
              </div>

              <div className="reveal-delay-2 mt-12 grid max-w-xl grid-cols-3 divide-x divide-border/50 rounded-lg border border-primary/25 bg-primary/10 p-1 backdrop-blur-md sm:mt-auto">
                <div className="flex flex-col justify-center p-4">
                  <strong className="font-mono text-2xl text-primary">99.82%</strong>
                  <p className="mt-1 text-[10px] text-muted-foreground">ML accuracy</p>
                </div>
                <div className="flex flex-col justify-center p-4">
                  <strong className="font-mono text-2xl text-foreground">10K+</strong>
                  <p className="mt-1 text-[10px] text-muted-foreground">records processed</p>
                </div>
                <div className="flex flex-col justify-center p-4">
                  <strong className="font-mono text-2xl text-foreground">40%</strong>
                  <p className="mt-1 text-[10px] text-muted-foreground">faster queries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Pills - Enhanced with motion */}
          <motion.div
            className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 md:px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stack.map((item, idx) => (
              <motion.div
                key={item}
                className="rounded-md border border-border bg-card px-4 py-3 text-center font-mono text-xs text-muted-foreground transition-all hover:border-primary/40 hover:scale-105 hover:text-primary hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Section - Using new ProjectCard component */}
          <section id="work" className="border-b border-border px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div
                className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <Label>Selected work / 04</Label>
                  <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
                    Proof, not promises.
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  Four production projects showcasing full-stack development: from client websites
                  to AI-powered platforms with real-world impact and measurable results.
                </p>
              </motion.div>

              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <ProjectCard {...projects[0]} delay={0} />
                </div>
                <div className="lg:col-span-5">
                  <ProjectCard {...projects[1]} delay={0.1} />
                </div>
                <div className="lg:col-span-5">
                  <ProjectCard {...projects[2]} delay={0.2} />
                </div>
                <div className="lg:col-span-7">
                  <ProjectCard {...projects[3]} delay={0.3} />
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section - Using new TechStackGrid component */}
          <section
            id="tech-stack"
            className="border-b border-border bg-secondary/30 px-5 py-24 md:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <Label>Premium Tech & Design Stack</Label>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
                  Modern tools for <span className="text-primary">premium experiences</span>.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  A comprehensive toolkit spanning frontend development, motion design, backend
                  systems, and AI integration. Each technology chosen for production reliability and
                  developer experience.
                </p>
              </motion.div>
              <TechStackGrid />
            </div>
          </section>

          {/* Capabilities Section */}
          <section id="capabilities" className="border-b border-border px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <Label>How I build</Label>
              <motion.div
                className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h2 className="text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
                    From design to deployment.
                  </h2>
                  <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                    A full-stack engineer with frontend expertise and backend depth. Building
                    products that are beautiful, fast, and reliable from concept to production.
                  </p>
                </div>
                <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                  {capabilities.map((item, idx) => (
                    <motion.article
                      key={item.no}
                      className="bg-background p-6 transition-colors hover:bg-card md:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <span className="font-mono text-xs text-primary">{item.no}</span>
                      <h3 className="mt-8 text-lg font-semibold tracking-[-0.01em]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Performance Metrics Section */}
          <section className="border-b border-border bg-secondary/20 px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <PerformanceMetrics />
            </div>
          </section>
          {/* Experience Section - Enhanced with motion */}
          <section id="experience" className="border-b border-border px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div
                className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <Label>Track record</Label>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.025em] md:text-5xl">
                    Experience &amp; education.
                  </h2>
                </div>
                <a
                  href={RESUME_URL}
                  download="Arun_Rajoriya_Resume.pdf"
                  className="w-fit rounded-md border border-border bg-secondary px-4 py-2 font-mono text-xs transition-all hover:border-primary/40 hover:text-primary hover:shadow-lg"
                >
                  Download résumé ↗
                </a>
              </motion.div>
              <ol className="border-l border-border pl-6 md:pl-10">
                {experience.map((item, idx) => (
                  <motion.li
                    key={item.role}
                    className="relative pb-12 last:pb-0"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                  >
                    <motion.span
                      className="absolute -left-[27px] top-2 size-2 rounded-full bg-primary md:-left-[43px]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.2, type: "spring" }}
                    />
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] md:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIdx) => (
                        <motion.span
                          key={tag}
                          className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] uppercase text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.15 + 0.3 + tagIdx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </section>

          {/* Repositories Section */}
          <section className="border-b border-border px-5 py-24 md:px-8">
            <div className="mx-auto max-w-7xl">
              <RepoGrid />
            </div>
          </section>

          {/* Contact and Availability Section */}
          <section className="px-5 py-24 md:px-8">
            <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-12">
              <motion.div
                className="rounded-lg border border-border bg-card p-7 lg:col-span-7 md:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Label>Availability</Label>
                <h2 className="mt-8 max-w-2xl text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                  Open to SDE roles, frontend engineering, Backend engineering, and full-stack
                  opportunities from 2026.
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                  Graduating mid-2026 and available for full-time or internship work — remote or
                  based in India. Experienced in modern frontend architecture, scalable backend
                  systems, and end-to-end product development. Comfortable owning features from
                  design to deployment.
                </p>
                <p className="mt-8 font-mono text-xs text-primary">
                  Bhopal, India · On-site · Hybrid ·Remote · Replies within a day
                </p>
              </motion.div>
              <motion.div
                className="rounded-lg border border-border bg-card p-7 lg:col-span-5 md:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold tracking-[-0.02em]">
                  Let&apos;s build something useful.
                </h2>
                <motion.a
                  href={`mailto:${EMAIL}`}
                  className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/20"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Email Arun <Arrow />
                </motion.a>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border px-5 py-8 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 font-mono text-[11px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Arun Rajoriya</p>
            <div className="flex flex-wrap gap-6">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                GitHub ↗
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                LinkedIn ↗
              </a>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-primary">
                Email ↗
              </a>
              <a href={`tel:${PHONE}`} className="transition-colors hover:text-primary">
                Call ↗
              </a>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
