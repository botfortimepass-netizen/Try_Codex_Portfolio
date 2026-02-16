"use client";

import { motion } from "framer-motion";
import { Section } from "./components/Section";
import { TypingText } from "./components/TypingText";
import { Particles } from "./components/Particles";

const navItems = ["about", "skills", "experience", "projects", "contact"];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion"
];

const experiences = [
  {
    period: "2023 - Present",
    title: "Full-Stack Engineer",
    company: "AI Product Studio",
    detail: "Built intelligent SaaS products with scalable APIs, streaming UIs, and cloud-native deployment pipelines."
  },
  {
    period: "2021 - 2023",
    title: "Frontend Engineer",
    company: "Future Interfaces Lab",
    detail: "Delivered rich motion-heavy user interfaces with accessible design systems and reusable component libraries."
  },
  {
    period: "2019 - 2021",
    title: "Software Developer",
    company: "Digital Systems Co.",
    detail: "Developed internal platforms and data-driven dashboards used by product and operations teams."
  }
];

const projects = [
  {
    title: "Neural Commerce",
    desc: "AI-powered e-commerce recommendation platform with realtime personalization and analytics.",
    tech: "Next.js · Node.js · Redis · OpenAI"
  },
  {
    title: "SignalOps Dashboard",
    desc: "Operational command center for monitoring microservices, incidents, and ML model quality.",
    tech: "React · TypeScript · GraphQL · Postgres"
  },
  {
    title: "VoiceFlow Assistant",
    desc: "Conversational assistant that automates workflows using natural language and custom integrations.",
    tech: "Next.js · WebSockets · Python APIs"
  }
];

export default function HomePage() {
  return (
    <motion.main
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Particles />
      <div className="absolute inset-0 grid-glow" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060710]/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-[0.3em] text-white/80">GK // PORTFOLIO</p>
          <ul className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="text-sm uppercase tracking-wider text-white/70 transition hover:text-neon-blue">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="mx-auto flex min-h-[90vh] w-full max-w-6xl items-center px-6 py-24" id="hero">
        <div className="section-card relative w-full overflow-hidden p-10 md:p-14">
          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-neon-purple/25 blur-3xl" />
          <div className="absolute -bottom-16 right-4 h-52 w-52 rounded-full bg-neon-blue/20 blur-3xl" />
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/70">Welcome to my digital space</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Gaurav Kaklotar
              <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Full-Stack Software Engineer
              </span>
            </h1>
            <div className="mt-6">
              <TypingText text="Designing AI-native products with clean code, fluid UX, and scalable architecture." />
            </div>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(93, 231, 255, 0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex rounded-full border border-neon-blue/40 bg-neon-blue/10 px-6 py-3 text-sm font-medium text-neon-blue"
            >
              Explore Projects
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About" subtitle="A quick snapshot of who I am and what I build.">
        <div className="grid gap-6 md:grid-cols-3">
          {["Vision", "Process", "Impact"].map((item, idx) => (
            <motion.article
              key={item}
              className="section-card p-6"
              initial={{ x: idx % 2 === 0 ? -30 : 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.12, duration: 0.55 }}
            >
              <h3 className="text-xl font-semibold text-neon-blue">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">
                I merge engineering and design thinking to craft resilient digital products that feel intelligent, fast, and delightful.
              </p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="A focused toolkit for modern product engineering.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -6, boxShadow: "0 0 24px rgba(159, 124, 255, 0.35)" }}
              className="section-card float px-4 py-5 text-center text-sm font-medium text-white/90"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="A timeline of growth through product challenges.">
        <div className="relative border-l border-white/20 pl-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              className="mb-10 last:mb-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-neon-pink shadow-[0_0_12px_rgba(255,101,212,0.85)]" />
              <p className="text-xs uppercase tracking-wider text-white/60">{exp.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{exp.title}</h3>
              <p className="text-neon-blue">{exp.company}</p>
              <p className="mt-2 text-sm leading-7 text-white/75">{exp.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected builds combining AI, design, and engineering.">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="section-card group p-6"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">{project.desc}</p>
              <p className="mt-5 text-xs uppercase tracking-wider text-neon-purple group-hover:text-neon-blue">{project.tech}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let’s build the next intelligent experience together.">
        <motion.form
          className="section-card grid gap-4 p-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none ring-neon-blue/40 transition focus:ring" placeholder="Your Name" />
          <input className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none ring-neon-blue/40 transition focus:ring" placeholder="Your Email" type="email" />
          <textarea className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 outline-none ring-neon-blue/40 transition focus:ring md:col-span-2" placeholder="Your Message" rows={5} />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="rounded-xl border border-neon-purple/50 bg-neon-purple/20 px-5 py-3 text-sm font-medium text-white md:col-span-2"
          >
            Send Message
          </motion.button>
        </motion.form>
      </Section>
    </motion.main>
  );
}
