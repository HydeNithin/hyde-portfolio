import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HydePortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [openProjectId, setOpenProjectId] = useState(null);
  const [copied, setCopied] = useState(false);

  const profile = useMemo(
    () => ({
      name: "Hyde Nithin Sumithra Owk",
      title: "Software Engineer • Backend / Data / ML",
      location: "USA",
      email: "hydenithinsumithraowk@gmail.com",
      linkedin: "https://linkedin.com/in/hydenithinsumithraowk/",
      github: "https://github.com/HydeNithin",
      resumeUrl: "/resume.pdf",
      photoUrl: "/profile.jpg",
      tagline:
        "Production-minded engineer with experience in mission-critical financial platforms and full-stack systems, plus applied ML work. I build secure, scalable, and reliable software with strong SQL and cloud fundamentals.",
      highlights: [
        "Python • Java • SQL",
        "Production Reliability • RCA • Observability",
        "REST APIs • RBAC • Secure Backend Design",
        "AWS/GCP • Linux/Unix • Automation",
        "TensorFlow/Keras • CNN • Model Evaluation",
      ],
    }),
    []
  );

  const skills = useMemo(
    () => [
      {
        group: "Languages",
        icon: "💻",
        items: ["Python", "Java", "JavaScript", "C", "C++", "C#", "Bash", "SQL", "OOP"],
      },
      {
        group: "Web Technologies",
        icon: "🌐",
        items: [
          "HTML5",
          "CSS3",
          "Bootstrap",
          "RESTful APIs",
          "Session Management",
          "Authentication & Authorization",
        ],
      },
      {
        group: "Frameworks & Libraries",
        icon: "🧩",
        items: ["Flask", "SQLAlchemy", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "OpenCV"],
      },
      {
        group: "Databases & Storage",
        icon: "🗄️",
        items: [
          "MySQL",
          "Oracle SQL",
          "SQLite",
          "Relational Schema Design",
          "Database Normalization",
          "Stored Procedures",
          "Query Optimization",
          "Data Validation",
        ],
      },
      {
        group: "AI & Machine Learning",
        icon: "🤖",
        items: ["AI", "Machine Learning", "Deep Learning", "CNNs", "Data Preprocessing", "Data Augmentation", "Model Evaluation"],
      },
      {
        group: "Cloud & DevOps",
        icon: "☁️",
        items: ["AWS", "GCP", "Linux/Unix", "Shell Scripting", "CI/CD Pipelines", "Cron Jobs", "Control-M"],
      },
      {
        group: "Monitoring & Tools",
        icon: "🔎",
        items: ["Git", "JIRA", "Splunk", "AppDynamics", "Log Analysis", "Production Monitoring", "Root Cause Analysis (RCA)"],
      },
      {
        group: "Methodologies & Practices",
        icon: "🧠",
        items: ["Agile/Scrum", "SDLC", "SRE Practices", "DevOps Practices", "Production Support", "Release Management"],
      },
      {
        group: "Business Process Automation",
        icon: "⚙️",
        items: ["PEGA (CSA)", "Case Management", "Decision Tables", "Rulesets", "Workflow Automation"],
      },
    ],
    []
  );

  const experience = useMemo(
    () => [
      {
        org: "The Financial Group",
        role: "Information Technology Intern",
        dates: "Sep 2025 – Dec 2025",
        bullets: [
          "Engineered secure internal web applications using Python/Flask and RESTful APIs to streamline business workflows and reduce manual data handling.",
          "Architected modular backend services with structured request validation and centralized error handling to improve maintainability and reduce integration failures.",
          "Implemented authentication, RBAC, authorization, and input validation to strengthen application security and mitigate access/data exposure risks.",
          "Optimized relational database performance via efficient SQL queries and transactional validation to maintain data integrity across connected datasets.",
          "Diagnosed and resolved hardware/software/network issues across Linux and Windows environments to improve end-user stability and reduce downtime.",
        ],
        tags: ["Python", "Flask", "REST", "RBAC", "SQL"],
      },
      {
        org: "HSBC",
        role: "Software Development Engineer",
        dates: "Jan 2023 – Dec 2023",
        bullets: [
          "Developed and supported enterprise payment processing and transaction workflows using Python, Java, and UNIX systems within Global Payments Technology Solutions.",
          "Automated batch/transaction operations using Shell scripting, Control-M, and cron to reduce manual toil and improve production stability.",
          "Implemented backend validation and transactional logic in Oracle SQL (joins, stored procedures, performance-optimized queries) to safeguard data correctness.",
          "Monitored and debugged production incidents using AppDynamics, Splunk, and log/SQL analysis; contributed to RCA and post-incident prevention.",
          "Collaborated across SDLC with QA, infrastructure, and platform teams; worked in Agile/Scrum with sprint planning, reviews, and release support.",
        ],
        tags: ["Python", "Java", "UNIX", "Control-M", "Splunk", "RCA", "Agile"],
      },
      {
        org: "Wiley Edge",
        role: "Intern",
        dates: "Mar 2022 – Jun 2022",
        bullets: [
          "Built an Expense Tracker web app using Python/Flask/MySQL with MVC structure and analytics dashboards (Matplotlib).",
          "Implemented authentication, sessions, CRUD flows, normalized schemas, and optimized queries for reliable transactions.",
        ],
        tags: ["Python", "Flask", "MySQL", "MVC", "Matplotlib"],
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        id: "hms",
        name: "Hospital Management System (HMS)",
        dates: "Aug 2025 – Dec 2025",
        stack: ["Python", "Flask", "MySQL", "SQLAlchemy", "HTML", "CSS", "REST APIs", "Bootstrap"],
        tagline:
          "Full-stack platform to centralize patient records, appointments, and emergency workflows with secure role-based access.",
        problem:
          "Manual and fragmented hospital workflows make it difficult to coordinate appointments, records, and urgent cases consistently.",
        decisions: [
          "Modular backend using Flask Blueprints for separation of concerns and scalable routing.",
          "SQLAlchemy ORM for maintainable data access patterns and relational integrity.",
          "RBAC with least-privilege design for Admin/Doctor/Patient/Staff.",
        ],
        outcome:
          "Unified core hospital workflows into a single web platform with secure access control and reliable data persistence.",
        bullets: [
          "Designed modular REST APIs and service boundaries to keep features maintainable and extensible.",
          "Normalized MySQL schemas for users, appointments, records; optimized transactional flows for integrity.",
          "Integrated Fast2SMS for automated reminders and emergency notifications to reduce manual outreach.",
        ],
      },
      {
        id: "cnn",
        name: "Human Emotion Recognition (CNN)",
        dates: "Jan 2025 – Mar 2025",
        stack: ["Python", "TensorFlow/Keras", "OpenCV", "NumPy"],
        tagline:
          "End-to-end deep learning pipeline for facial emotion recognition with preprocessing, tuning, and metric-based evaluation.",
        problem:
          "Emotion recognition from images is challenging due to low resolution, lighting variance, and subtle expression differences.",
        decisions: [
          "Custom CNN trained on 48×48 grayscale faces with loss optimization and backprop in Keras.",
          "Structured preprocessing + augmentation to improve generalization and reduce overfitting.",
          "Metric-driven evaluation (precision/recall/F1 + confusion matrix) to analyze failure modes.",
        ],
        outcome:
          "Delivered a repeatable training/evaluation workflow and used misclassification analysis to guide iterative improvements.",
        bullets: [
          "Implemented normalization, contrast enhancement, resizing, and controlled augmentation (rotate/flip/brightness).",
          "Performed systematic hyperparameter tuning and architectural refinements to improve stability and performance.",
        ],
      },
      {
        id: "expense",
        name: "Expense Tracker (AWS)",
        dates: "Mar 2022 – Jun 2022",
        stack: ["Python", "Flask", "MySQL", "Matplotlib", "AWS EC2", "AWS RDS"],
        tagline:
          "Personal finance tracker with MVC backend, secure sessions, optimized SQL, and analytics dashboards; deployed on AWS.",
        problem:
          "Manual expense tracking makes it hard to understand trends and control spending consistently over time.",
        decisions: [
          "Model–View–Controller (MVC) backend separation for maintainability.",
          "Normalized MySQL schemas and optimized queries for consistent CRUD performance.",
          "AWS EC2 + RDS deployment for persistent, cloud-hosted access.",
        ],
        outcome:
          "Enabled structured tracking and visualization of spending trends and category breakdowns through a web app + dashboards.",
        bullets: [
          "Implemented authentication, sessions, and role-based controls for protected handling of financial data.",
          "Built Matplotlib reports for monthly trends, category-level spending, and savings patterns.",
        ],
      },
    ],
    []
  );

  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  const glass =
    "bg-white/6 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]";

  const iconLink =
    "inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 hover:bg-white/10 transition";

  const iconPill =
    "h-10 w-10 rounded-2xl border border-white/10 bg-white/6 grid place-items-center";

  // ✅ small “Apple-style” intro motion for the whole page content
  const pageIntro = {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: "easeOut" } },
  };

  // ✅ subtle glow on project cards
  const projectGlow =
    "relative overflow-hidden before:absolute before:inset-0 before:opacity-0 before:transition before:duration-300 " +
    "before:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_45%)] " +
    "hover:before:opacity-100";

  return (
    <div className="min-h-[100svh] bg-neutral-950 text-neutral-100 selection:bg-white/20">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.07),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      {/* Top nav */}
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className={`mt-4 rounded-2xl ${glass}`}>
            <div className="flex items-center justify-between px-4 py-3">
              <button onClick={() => scrollTo("home")} className="group flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center border border-white/10">
                  <span className="text-sm font-semibold">HO</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-semibold leading-tight">{profile.name}</div>
                  <div className="text-xs text-neutral-300">{profile.title}</div>
                </div>
              </button>

              {/* ✅ mobile-friendly nav (scroll instead of squeezing) */}
              <nav className="flex items-center gap-1 overflow-x-auto whitespace-nowrap [-webkit-overflow-scrolling:touch] scrollbar-none">
                {nav.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={[
                        "shrink-0 rounded-xl px-3 py-2 text-sm transition",
                        active ? "bg-white/12 border border-white/10" : "hover:bg-white/8",
                      ].join(" ")}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="hidden md:flex items-center gap-2">
                <a
                  className="rounded-xl border border-white/10 bg-white/8 px-3 py-2 text-sm hover:bg-white/12 transition"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-xl border border-white/10 bg-white/8 px-3 py-2 text-sm hover:bg-white/12 transition"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-xl border border-white/10 bg-white/8 px-3 py-2 text-sm hover:bg-white/12 transition"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ safe-area top padding to avoid mobile notch/address-bar overlap */}
      <main className="relative mx-auto max-w-6xl px-4 pb-20 pt-[calc(env(safe-area-inset-top)+8px)]">
        {/* Hero */}
        <section id="home" className="scroll-mt-28 pt-10 sm:pt-14">
          <motion.div variants={pageIntro} initial="hidden" animate="show" className="grid gap-6">
            <div className={`rounded-3xl p-6 sm:p-10 ${glass}`}>
              <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 items-start">
                {/* Left hero */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-neutral-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Open to SWE / SDE • Data Engineer • AI/ML
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
                      Hello, <span className="text-white/90">Hyde Here</span>
                    </h1>

                    <p className="max-w-3xl text-neutral-200/90 text-base sm:text-lg leading-relaxed">
                      {profile.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {profile.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sm text-neutral-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* ✅ mobile buttons look better as full-width */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollTo("projects")}
                      className="w-full sm:w-auto rounded-2xl bg-white text-neutral-950 px-5 py-3 font-semibold shadow hover:shadow-lg transition"
                    >
                      View Projects
                    </motion.button>

                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto rounded-2xl border border-white/10 bg-white/8 px-5 py-3 font-semibold hover:bg-white/12 transition"
                    >
                      LinkedIn
                    </motion.a>

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={copyEmail}
                      className="w-full sm:w-auto rounded-2xl border border-white/10 bg-white/8 px-5 py-3 font-semibold hover:bg-white/12 transition"
                    >
                      {copied ? "Email Copied" : "Copy Email"}
                    </motion.button>
                  </div>
                </div>

                {/* Right profile card (keep your sizing exactly; no changes) */}
                <div className={`rounded-3xl p-7 sm:p-8 ${glass}`}>
                  <div className="flex flex-col items-start">
                    <img
                      src={profile.photoUrl}
                      alt="Hyde profile"
                      className="w-full max-w-[320px] aspect-square rounded-3xl object-cover border border-white/10 bg-white/10"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="mt-5 w-full">
                      <div className="text-xl sm:text-2xl font-semibold leading-tight">{profile.name}</div>
                      <div className="mt-1 text-sm sm:text-base text-neutral-300">{profile.title}</div>
                      <div className="mt-2 text-sm text-neutral-400">{profile.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-28 pt-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">Featured Projects</h2>
              <p className="text-neutral-300 mt-2 max-w-2xl">
                A focused set of projects showing backend design, security, data integrity, cloud deployment, and ML experimentation.
              </p>
            </div>
            <div className="hidden sm:block text-xs text-neutral-400">Click a card for details</div>
          </motion.div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <motion.button
                key={p.id}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setOpenProjectId(p.id)}
                className={`text-left rounded-3xl p-5 ${glass} ${projectGlow} hover:bg-white/8 transition`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-lg sm:text-xl font-semibold leading-snug">{p.name}</div>
                    <div className="text-xs text-neutral-400 mt-1">{p.dates}</div>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/6 px-2 py-1 text-xs text-neutral-200">
                    View
                  </span>
                </div>

                <p className="text-sm text-neutral-200/90 mt-3 leading-relaxed">{p.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-xs text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Project modal */}
          <AnimatePresence>
            {openProjectId && (
              <motion.div
                className="fixed inset-0 z-[100] grid place-items-center bg-black/65 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenProjectId(null)}
              >
                <motion.div
                  className={`w-full max-w-3xl rounded-3xl p-6 sm:p-8 ${glass}`}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.98 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const p = projects.find((x) => x.id === openProjectId);
                    if (!p) return null;
                    return (
                      <div className="grid gap-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-xl font-semibold">{p.name}</div>
                            <div className="text-sm text-neutral-300 mt-1">{p.dates}</div>
                          </div>
                          <button
                            className="rounded-2xl border border-white/10 bg-white/6 px-3 py-2 text-sm hover:bg-white/10 transition"
                            onClick={() => setOpenProjectId(null)}
                          >
                            Close
                          </button>
                        </div>

                        <div className="grid gap-2">
                          <div className="text-sm font-semibold">Problem</div>
                          <div className="text-sm text-neutral-200/90 leading-relaxed">{p.problem}</div>
                        </div>

                        <div className="grid gap-2">
                          <div className="text-sm font-semibold">Key Engineering Decisions</div>
                          <ul className="list-disc pl-5 text-sm text-neutral-200/90 space-y-1">
                            {p.decisions.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid gap-2">
                          <div className="text-sm font-semibold">What I Built</div>
                          <ul className="list-disc pl-5 text-sm text-neutral-200/90 space-y-1">
                            {p.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid gap-2">
                          <div className="text-sm font-semibold">Outcome</div>
                          <div className="text-sm text-neutral-200/90 leading-relaxed">{p.outcome}</div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {p.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-xs text-neutral-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* ✅ removed GitHub + Live Demo buttons from modal */}

                        <div className="text-xs text-neutral-400">@Hyde Nithin Sumithra Owk.</div>
                      </div>
                    );
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-28 pt-14">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
            <p className="text-neutral-300 mt-2 max-w-2xl">
              Production engineering exposure, backend development, reliability, automation, and cross-functional delivery.
            </p>
          </motion.div>

          <div className="mt-6 grid gap-4">
            {experience.map((e) => (
              <motion.div
                key={e.org + e.role}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={`rounded-3xl p-6 ${glass}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <div className="text-xl font-semibold">{e.role}</div>
                    <div className="text-sm text-neutral-300">{e.org}</div>
                  </div>
                  <div className="text-sm text-neutral-400">{e.dates}</div>
                </div>

                <ul className="mt-4 list-disc pl-5 text-sm text-neutral-200/90 space-y-1.5">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-xs text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-28 pt-14">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
            <p className="text-neutral-300 mt-2 max-w-2xl">
              Clear, categorized skills — optimized for fast scanning by recruiters.
            </p>
          </motion.div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((s) => (
              <motion.div
                key={s.group}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={`rounded-3xl p-5 ${glass}`}
              >
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-2xl border border-white/10 bg-white/6 grid place-items-center">
                    <span className="text-base">{s.icon}</span>
                  </div>
                  <div className="text-base font-semibold">{s.group}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sm text-neutral-200"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 pt-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className={`rounded-3xl p-6 sm:p-10 ${glass}`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold">Contact</h2>
            <p className="text-neutral-300 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed">
              Let’s connect — feel free to reach out for opportunities, collaborations, or a quick chat about engineering and projects.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <button onClick={copyEmail} className={iconLink} title="Copy email" aria-label="Copy email">
                <span className={iconPill}>✉️</span>
                <div className="text-left">
                  <div className="text-sm font-semibold">Email</div>
                  <div className="text-sm text-neutral-300">
                    {copied ? <span className="text-emerald-300 font-semibold">Copied!</span> : profile.email}
                  </div>
                </div>
              </button>

              <a className={iconLink} href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                <span className={iconPill}>in</span>
                <div className="text-left">
                  <div className="text-sm font-semibold">LinkedIn</div>
                  <div className="text-sm text-neutral-300">Open profile</div>
                </div>
              </a>

              <a className={iconLink} href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
                <span className={iconPill}>GH</span>
                <div className="text-left">
                  <div className="text-sm font-semibold">GitHub</div>
                  <div className="text-sm text-neutral-300">Open repositories</div>
                </div>
              </a>

              <a className={iconLink} href={profile.resumeUrl} target="_blank" rel="noreferrer" title="Resume">
                <span className={iconPill}>📄</span>
                <div className="text-left">
                  <div className="text-sm font-semibold">Resume</div>
                  <div className="text-sm text-neutral-300">Open PDF</div>
                </div>
              </a>
            </div>

            <div className="pt-10 text-center text-xs text-neutral-500">
              © {new Date().getFullYear()} {profile.name}. Built with React + Framer Motion.
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default HydePortfolio;