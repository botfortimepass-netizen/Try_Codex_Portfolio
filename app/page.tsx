"use client";

import { motion } from "framer-motion";
import { Particles } from "./components/Particles";
import { Section } from "./components/Section";
import { TypingText } from "./components/TypingText";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const aboutCards = [
  {
    title: "Who I Am",
    text: "Full-Stack Software Engineer focused on building reliable products with strong UI craft, robust APIs, and practical AI integrations."
  },
  {
    title: "What I Build",
    text: "Production-ready web platforms using Next.js, Django/Flask/FastAPI, PostgreSQL/MySQL, and automation-first engineering workflows."
  },
  {
    title: "How I Work",
    text: "I value performance, maintainability, and user experience equally—shipping features quickly without compromising code quality."
  }
];

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Django",
  "Flask",
  "FastAPI",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Angular",
  ".NET Web API",
  "OpenAI API",
  "Ansible",
  "WIX"
];

const experience = [
  {
    period: "Feb 2025 – Present",
    role: "System Engineer",
    org: "Tata Consultancy Services · Mumbai",
    bullets: [
      "Developed a Bank Management System using HTML, CSS, JSP, and Servlet.",
      "Implemented secure transaction processing and efficient account management for reliable operations."
    ]
  },
  {
    period: "Aug 2024 – Jan 2025",
    role: "Software Developer",
    org: "SSV Infotech · Surat",
    bullets: [
      "Built scalable backend services with Django and Flask, reducing processing time by 50%.",
      "Delivered dynamic interfaces with React and Next.js and integrated OpenAI APIs for AI-powered automation.",
      "Optimized PostgreSQL/MySQL interactions, improving query performance by 30%."
    ]
  },
  {
    period: "Dec 2023 – Jun 2024",
    role: "Software Developer Intern",
    org: "Confidosoft Solutions Pvt. Ltd. · Vadodara",
    bullets: [
      "Created dynamic frontend interfaces in Angular for improved responsiveness.",
      "Built .NET Web APIs and reduced bug occurrence by 40% through quality-focused engineering.",
      "Automated deployments using Ansible and developed MSI/Bundle installers via WIX."
    ]
  }
];

const projects = [
  {
    name: "Uncia",
    stack: "FastAPI · Django · React · Next.js · OpenAI API · Web Scraping",
    outcomes: [
      "Reduced research time by 60% through real-time product lifecycle insights.",
      "Collected EOL/EOS data with web scraping pipelines and transformed it into actionable intelligence.",
      "Improved backend database query performance by 30% with scalable Django architecture."
    ]
  },
  {
    name: "LeaveManager",
    stack: "MERN Stack · JWT Authentication",
    outcomes: [
      "Reduced leave processing time by 40% with secure role-based workflow automation.",
      "Built dashboards for HR, managers, and employees with real-time status visibility.",
      "Improved operational efficiency by 30% via permission-aware tracking and approval flows."
    ]
  }
];

const floatingVariants = {
  initial: { opacity: 0, y: 20 },
  inView: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 }
  })
};

export default function HomePage() {
  return (
    <motion.main
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <Particles />
      <div className="absolute inset-0 grid-glow" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04050d]/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-xs font-semibold tracking-[0.4em] text-white/80">
            GK · AI PORTFOLIO
          </a>
          <ul className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm uppercase tracking-wider text-white/70 transition hover:text-neon-blue">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="hero" className="mx-auto flex min-h-[92vh] w-full max-w-6xl items-center px-6 py-20">
        <div className="section-card relative w-full overflow-hidden p-8 md:p-14">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-neon-purple/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-neon-blue/25 blur-3xl" />

          <motion.div className="relative" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/70">Hello, I am</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Gaurav Kaklotar
              <span className="mt-2 block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Full-Stack Software Engineer
              </span>
            </h1>

            <div className="mt-6 max-w-3xl">
              <TypingText
                texts={[
                  "Building scalable software with beautiful user experiences.",
                  "Designing AI-powered workflows for real business impact.",
                  "Engineering performant full-stack products end-to-end."
                ]}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="rounded-full border border-neon-blue/40 bg-neon-blue/10 px-6 py-3 text-sm font-medium text-neon-blue"
                whileHover={{ y: -2, boxShadow: "0 0 35px rgba(93,231,255,0.35)" }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="rounded-full border border-neon-purple/40 bg-neon-purple/10 px-6 py-3 text-sm font-medium text-neon-purple"
                whileHover={{ y: -2, boxShadow: "0 0 35px rgba(159,124,255,0.35)" }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Connect
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About" subtitle="Building practical, high-impact systems with modern web and AI tooling.">
        <div className="grid gap-6 md:grid-cols-3">
          {aboutCards.map((card, idx) => (
            <motion.article
              key={card.title}
              className="section-card p-6"
              custom={idx}
              variants={floatingVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-neon-blue">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical Skills" subtitle="Technologies I use to design, build, and ship production systems.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              custom={idx}
              variants={floatingVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, boxShadow: "0 0 20px rgba(255,101,212,0.25)" }}
              className="section-card float px-4 py-4 text-center text-sm font-medium text-white/90"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Recent roles and measurable engineering outcomes.">
        <div className="relative border-l border-white/20 pl-7">
          {experience.map((item, idx) => (
            <motion.article
              key={item.role + item.period}
              className="mb-10 last:mb-0"
              custom={idx}
              variants={floatingVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="absolute -left-[6px] mt-2 h-3 w-3 rounded-full bg-neon-pink shadow-[0_0_14px_rgba(255,101,212,0.9)]" />
              <p className="text-xs uppercase tracking-widest text-white/60">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
              <p className="text-neon-blue">{item.org}</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-white/75">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected work combining engineering depth and AI capabilities.">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              className="section-card group p-6"
              custom={idx}
              variants={floatingVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-wider text-neon-purple group-hover:text-neon-blue">{project.stack}</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-white/75">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Open to impactful software roles, collaboration, and product opportunities.">
        <motion.div
          className="section-card grid gap-4 p-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <a className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90 transition hover:border-neon-blue/50" href="mailto:gaurav.kaklotar03@gmail.com">
            📧 gaurav.kaklotar03@gmail.com
          </a>
          <a className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90 transition hover:border-neon-blue/50" href="tel:+919313646782">
            📱 +91 9313646782
          </a>
          <a className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90 transition hover:border-neon-purple/50" href="https://www.linkedin.com/in/gaurav-kaklotar-060b41209" target="_blank" rel="noreferrer">
            🔗 LinkedIn /gaurav-kaklotar-060b41209
          </a>
          <a className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90 transition hover:border-neon-purple/50" href="https://github.com/GauravKaklotar" target="_blank" rel="noreferrer">
            💻 GitHub /GauravKaklotar
          </a>
        </motion.div>
      </Section>
    </motion.main>
  );
}
