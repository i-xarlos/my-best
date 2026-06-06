import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Download,
  Sparkles,
  Layers,
  Cpu,
  Gauge,
  Boxes,
  Globe,
  Wrench,
} from "lucide-react";
import heroPortrait from "@/assets/carlos-protrait.png";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.24 9.27 7.74 10.78.57.1.78-.25.78-.55v-1.93c-3.15.69-3.82-1.52-3.82-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.25.73-1.54-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.45-2.25 1.18-3.05-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.16.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.2-1.47 3.16-1.16 3.16-1.16.62 1.58.23 2.75.11 3.04.74.8 1.18 1.81 1.18 3.05 0 4.37-2.66 5.32-5.19 5.61.41.35.78 1.05.78 2.12v3.14c0 .31.21.66.79.55 4.5-1.51 7.73-5.76 7.73-10.78C23.33 5.56 18.27.5 12 .5z" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlos — Senior Platform & Framework Engineer" },
      {
        name: "description",
        content:
          "Senior software engineer specialized in hybrid Windows platforms (React Native + WebView2 + .NET), modular architecture and performance optimization.",
      },
    ],
  }),
  component: Portfolio,
});

const specialties = [
  {
    icon: Layers,
    title: "Modular Architecture",
    desc: "Independently installable, versioned modules with well-defined contracts — microfrontends, plugins and modular monoliths.",
  },
  {
    icon: Wrench,
    title: "Framework Engineering",
    desc: "Internal SDKs, reusable libraries, JSON-driven execution engines and NuGet packages that other teams build on top of.",
  },
  {
    icon: Cpu,
    title: "React Native Windows",
    desc: "Native modules, TurboModules, C# interop, lifecycle internals and rendering pipeline deep-dives.",
  },
  {
    icon: Globe,
    title: "WebView2 & Hybrid",
    desc: "Prewarm strategies, CoreWebView2 reuse, hybrid React + WebView2 inside MAUI and UWP shells.",
  },
  {
    icon: Gauge,
    title: "Performance & Startup",
    desc: "Bundling, runtime initialization, render scheduling — shaving seconds off cold-start and native component creation.",
  },
  {
    icon: Boxes,
    title: "Windows App Lifecycle",
    desc: "UWP, WinUI, Windows App SDK, startup tasks, suspension/resume and local persistence with SQLite.",
  },
];

const experience = [
  {
    period: "Present",
    role: "Senior Software Engineer — Platform",
    company: "Hybrid Windows Platforms",
    detail:
      "Designing modular platforms where multiple teams ship independently versioned modules. Deep work in React Native Windows, WebView2 and .NET interop.",
  },
  {
    period: "Recent",
    role: "Framework Engineer",
    company: "Internal SDKs & Tooling",
    detail:
      "Built internal NuGet packages, JSON-configurable execution engines and reusable infrastructure for microfrontends and native module hosting.",
  },
  {
    period: "Earlier",
    role: "Senior Front-end Engineer",
    company: "React / TypeScript",
    detail:
      "TypeScript, React, Redux + Redux Saga, Webpack, Jest. Bundling, rendering and runtime performance analysis across large product surfaces.",
  },
  {
    period: "Foundations",
    role: "Web Developer & UI Engineer",
    company: "Agency & product work",
    detail:
      "10+ years shipping web experiences — from interactive sites and CMS work to modern front-end architecture and design systems.",
  },
];

const microsoftStack = [
  "C#",
  ".NET",
  ".NET MAUI",
  "UWP",
  "WinUI",
  "Windows App SDK",
  "WebView2",
  "SQLite (Microsoft.Data.Sqlite)",
  "Visual Studio Enterprise",
];

const jsStack = [
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "React Native Windows",
  "Redux",
  "Redux Saga",
  "Webpack",
  "Jest",
];

const practiceStack = [
  "Modular Architecture",
  "Microfrontends",
  "Native Modules",
  "TurboModules",
  "Performance Profiling",
  "Startup Optimization",
  "Feature Flags (LaunchDarkly)",
  "Observability",
  "Event Buses",
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Specialties />
      <Stack />
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
          <span className="text-primary">/</span>ixarlos
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">
            About
          </a>
          <a href="#specialties" className="hover:text-foreground transition">
            Specialties
          </a>
          <a href="#stack" className="hover:text-foreground transition">
            Stack
          </a>
          <a href="#experience" className="hover:text-foreground transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-foreground transition">
            Contact
          </a>
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
            Platform · Framework · Performance
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
            Hi, I'm <span className="text-glow text-primary">Carlos</span>.
            <br />I build platforms.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Senior software engineer specialized in{" "}
            <strong className="text-foreground">hybrid Windows platforms</strong> — React Native
            Windows, WebView2 and .NET. I design modular architectures and squeeze performance out
            of the runtime.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#specialties"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all"
            >
              What I do
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition"
            >
              <Mail className="size-4" />
              Get in touch
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
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            01 · About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Platform engineer at heart.</h2>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I work at the intersection of{" "}
            <strong className="text-foreground">cross-platform front-end</strong>, native Windows
            applications, hybrid frameworks and execution infrastructure.
          </p>
          <p>
            The questions I usually bring to the table aren't <em>"how do I build this screen?"</em>{" "}
            — they're
            <em>
              {" "}
              "how do I design a platform so multiple teams can ship independent, versioned,
              decoupled modules?"
            </em>{" "}
            or{" "}
            <em>
              "why is React Native Windows queuing this render, and how do I save two seconds of
              startup latency?"
            </em>
          </p>
          <p>
            That puts me closer to{" "}
            <strong className="text-foreground">Platform Engineer / Framework Engineer</strong> than
            to a traditional application developer — although I still ship product work and care
            about craft end-to-end.
          </p>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section id="specialties" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              02 · Specialties
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">What I focus on.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Six areas where I go deep — from architecture down to milliseconds of cold-start.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <div className="size-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6">
                <s.icon className="size-5" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const groups = [
    { label: "Microsoft Ecosystem", items: microsoftStack },
    { label: "JavaScript / TypeScript", items: jsStack },
    { label: "Engineering Practice", items: practiceStack },
  ];
  return (
    <section id="stack" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            03 · Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Tools of the trade.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-foreground font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
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
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            04 · Experience
          </p>
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
    { icon: LinkedinIcon, label: "linkedin/ixarlos", href: "https://www.linkedin.com/in/ixarlos/" },
    { icon: GithubIcon, label: "github/i-xarlos", href: "https://github.com/i-xarlos" },
    { icon: TwitterIcon, label: "@Xarlos_", href: "https://twitter.com/Xarlos_" },
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
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
          05 · Contact
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Let's build a <span className="text-glow text-primary">platform</span>.
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hybrid Windows app, modular framework, or a stubborn performance bug? My inbox is open.
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
        <span>© {new Date().getFullYear()} Carlos · Senior Platform Engineer.</span>
        <span className="font-mono">Lima, Perú</span>
      </div>
    </footer>
  );
}
