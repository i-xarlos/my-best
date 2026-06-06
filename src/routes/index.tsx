import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Download,
  Code2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.24 9.27 7.74 10.78.57.1.78-.25.78-.55v-1.93c-3.15.69-3.82-1.52-3.82-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.25.73-1.54-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.45-2.25 1.18-3.05-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.16.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.2-1.47 3.16-1.16 3.16-1.16.62 1.58.23 2.75.11 3.04.74.8 1.18 1.81 1.18 3.05 0 4.37-2.66 5.32-5.19 5.61.41.35.78 1.05.78 2.12v3.14c0 .31.21.66.79.55 4.5-1.51 7.73-5.76 7.73-10.78C23.33 5.56 18.27.5 12 .5z"/></svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlos — Software Developer & Web Designer" },
      {
        name: "description",
        content:
          "10+ years building modern web experiences. React, front-end architecture, and design-driven development.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "Color Centro",
    role: "UI Review & React Development",
    year: "2022",
    url: "https://www.colorcentro.com.pe/",
    tags: ["React", "UI"],
  },
  {
    title: "Ncomunicaciones",
    role: "Front-end Lead · 5+ years",
    year: "2017–2022",
    url: "http://www.ncom.pe/",
    tags: ["Front-end", "HTML/CSS"],
  },
  {
    title: "Effectus Fischman",
    role: "PHP Developer · CMS",
    year: "2019",
    url: "https://www.effectusfischman.com/",
    tags: ["PHP", "CMS"],
  },
  {
    title: "Teatro La Plaza Isil",
    role: "UI / CSS & HTML",
    year: "2016",
    url: null,
    tags: ["UI", "HTML"],
  },
  {
    title: "Catdmc",
    role: "UI / AS3 Developer",
    year: "2014",
    url: "http://www.catdmc.com/",
    tags: ["UI", "Interactive"],
  },
  {
    title: "El Comercio Móvil",
    role: "UI / Mobile Version",
    year: "2013",
    url: "http://m.elcomercio.pe/iphone",
    tags: ["Mobile", "UI"],
  },
];

const experience = [
  {
    period: "2022 — Present",
    role: "Senior Front-end Developer",
    company: "Freelance & Contract",
    detail: "Building React applications and design systems for international clients.",
  },
  {
    period: "2017 — 2022",
    role: "Front-end Developer",
    company: "Ncomunicaciones",
    detail: "Led the front-end team across multiple campaigns and product launches.",
  },
  {
    period: "2013 — 2017",
    role: "UI Developer",
    company: "Various Agencies",
    detail: "Designed and developed interactive sites with AS3, HTML5 and modern JS.",
  },
  {
    period: "2008 — 2013",
    role: "Designer & Front-end",
    company: "Early career",
    detail: "First steps as a designer and developer — learning craft, shipping daily.",
  },
];

const stack = [
  "React", "TypeScript", "Next.js", "Node.js",
  "Tailwind", "GSAP", "Framer Motion", "Vite",
  "PHP", "CMS", "UI Design", "Design Systems",
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold tracking-tight text-lg">
          <span className="text-primary">/</span>carlos
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#experience" className="hover:text-foreground transition">Experience</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="mailto:ixarlos@gmail.com"
          className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition font-medium"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs font-mono text-muted-foreground mb-6 border border-border">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
            Hi, I'm <span className="text-glow text-primary">Carlos</span>.
            <br />
            I build the web.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
            Software developer & web designer with <strong className="text-foreground">10+ years</strong> shaping
            interfaces, design systems and front-end architecture for ambitious teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all"
            >
              See my work
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </a>
            <a
              href="https://i-xarlos.github.io/ixarlos/downloads/cv2020.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
          <img
            src={heroPortrait}
            alt="Abstract developer portrait"
            width={1024}
            height={1024}
            className="relative rounded-2xl border border-border shadow-[var(--shadow-card)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">01 · About</p>
          <h2 className="text-4xl md:text-5xl font-bold">Who I am.</h2>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a developer who welcomes challenging projects and enjoys working with people of all
            disciplines. Self-motivated, hands-on, and obsessed with shipping work that meets deadlines
            without compromising craft.
          </p>
          <p>
            I look for roles with teams that promote best practices and care about a steady stream of
            real customer work — not theater. Liberté, égalité, fraternité.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground font-mono"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">02 · Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">Recent projects.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A handful of projects across product, agency and freelance work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url ?? "#"}
              target={p.url ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <Code2 className="size-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">{p.title}</h3>
              <p className="text-muted-foreground mb-6">{p.role}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                {p.url && (
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">03 · Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">A decade of building.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-border" />
          {experience.map((e, i) => (
            <motion.div
              key={e.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 md:pl-[240px] pb-12 last:pb-0"
            >
              <div className="absolute left-0 md:left-[196px] top-2 size-2 rounded-full bg-primary ring-4 ring-background" />
              <div className="md:absolute md:left-0 md:top-0 md:w-[180px] font-mono text-sm text-muted-foreground mb-2 md:mb-0">
                {e.period}
              </div>
              <h3 className="text-xl font-bold mb-1">{e.role}</h3>
              <p className="text-primary text-sm mb-3 font-medium">{e.company}</p>
              <p className="text-muted-foreground leading-relaxed">{e.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    { icon: Mail, label: "ixarlos@gmail.com", href: "mailto:ixarlos@gmail.com" },
    { icon: Linkedin, label: "linkedin/ixarlos", href: "https://www.linkedin.com/in/ixarlos/" },
    { icon: Github, label: "github/i-xarlos", href: "https://github.com/i-xarlos" },
    { icon: Twitter, label: "@Xarlos_", href: "https://twitter.com/Xarlos_" },
    { icon: Phone, label: "+51 962 373 235", href: "tel:+51962373235" },
  ];

  return (
    <section id="contact" className="py-32 px-6 border-t border-border relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="max-w-4xl mx-auto text-center relative">
        <Sparkles className="size-10 text-primary mx-auto mb-6" />
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">04 · Contact</p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Let's build <span className="text-glow text-primary">something</span>.
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind, or just want to say hi? My inbox is open.
        </p>

        <a
          href="mailto:ixarlos@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:shadow-[var(--shadow-glow)] transition mb-16"
        >
          ixarlos@gmail.com
          <ArrowUpRight className="size-5" />
        </a>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-secondary hover:border-primary/60 transition text-sm"
            >
              <l.icon className="size-4 text-primary" />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Carlos · Built with care.</span>
        <span className="font-mono">Lima, Perú</span>
      </div>
    </footer>
  );
}
