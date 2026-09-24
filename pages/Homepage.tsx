"use client";

import { Reveal } from "@/components/reveal";
import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";

const services = [
  [
    "01",
    "Website Development",
    "Fast, responsive websites built around your business goals.",
    "Strategy → UX → Build → Launch",
  ],
  [
    "02",
    "Web Applications",
    "Powerful web apps that simplify operations and improve customer experiences.",
    "React · Next.js · APIs",
  ],
  [
    "03",
    "Mobile App Development",
    "Practical mobile experiences for customers, teams, and modern businesses.",
    "iOS · Android · Cross-platform",
  ],
  [
    "04",
    "Custom Software",
    "Purpose-built software for workflows that off-the-shelf tools cannot handle.",
    "Plan · Build · Integrate",
  ],
  [
    "05",
    "Digital Marketing",
    "Campaigns and digital systems designed to turn attention into qualified opportunities.",
    "Content · Ads · Funnels",
  ],
  [
    "06",
    "SEO",
    "Technical and content SEO that helps the right people discover your business.",
    "Technical · Local · Content",
  ],
];

const reasons = [
  [
    "01",
    "Business-first thinking",
    "We start with the problem, opportunity and outcome—not a template.",
  ],
  [
    "02",
    "Built for growth",
    "Your digital product is structured so it can evolve as your business grows.",
  ],
  [
    "03",
    "Clear communication",
    "Simple processes, realistic timelines and direct communication throughout.",
  ],
  [
    "04",
    "Practical technology",
    "We choose technology for reliability, speed and maintainability—not hype.",
  ],
  [
    "05",
    "Conversion focused",
    "Every page has a job: explain, build trust, generate leads or move users forward.",
  ],
  [
    "06",
    "Long-term support",
    "Launch is the beginning. We can continue improving, maintaining and growing your product.",
  ],
];

const process = [
  [
    "01",
    "Discover",
    "Understand your business, audience, goals and the problem we need to solve.",
  ],
  [
    "02",
    "Plan",
    "Turn the requirements into a clear structure, user journey and technical direction.",
  ],
  [
    "03",
    "Design",
    "Create a clean interface and experience that communicates value quickly.",
  ],
  [
    "04",
    "Build",
    "Develop the product with performance, accessibility and maintainability in mind.",
  ],
  [
    "05",
    "Deploy",
    "Test, optimize and launch the product with the right production setup.",
  ],
  [
    "06",
    "Improve",
    "Measure what matters and continuously improve the product after launch.",
  ],
];

const projects = [
  {
    tag: "WEB DESIGN · DEVELOPMENT",
    title: "Prestige Hotel — Modern Hospitality Experience",
    text: "A modern, conversion-focused website for a luxury hotel brand.",
    kind: "work/h2",
  },
  {
    tag: "WEB DESIGN · DEVELOPMENT",
    title: "Elixir Salon — Clean, Structured Web Experience",
    text: "A clean, structured website that communicates the salon's value and services.",
    kind: "work/h1",
  },
  {
    tag: "BUSINESS",
    title: "ASR Infra — Corporate Web Experience",
    text: "A Real Estate company website designed to establish credibility and communicate value.",
    kind: "work/h3",
  },
  {
    tag: "Event Planner · WEBSITE",
    title: "Event Planner — Premium Event Planning Website",
    text: "A premium website for an event planning business that communicates value and builds trust.",
    kind: "work/h5",
  },
];

const testimonials = [
  [
    "“Refinix understood what our business needed instead of simply giving us another website.”",
    "Business Owner",
    "01",
  ],
  [
    "“The process was clear, the communication was direct and the final product felt genuinely custom.”",
    "Founder",
    "02",
  ],
  [
    "“A practical team that thinks about business results as much as design and technology.”",
    "Operations Lead",
    "03",
  ],
];

const faqs = [
  [
    "What kind of businesses do you work with?",
    "We work with startups, local businesses, growing companies and established teams that need a stronger digital presence or custom software.",
  ],
  [
    "Do you only build websites?",
    "No. Websites are one part of what we do. We also build web applications, mobile apps, custom software and digital growth systems.",
  ],
  [
    "How much does a website cost?",
    "The cost depends on scope, content, integrations and functionality. After understanding your requirements, we can provide a clear project estimate.",
  ],
  [
    "How long does a project take?",
    "A focused business website can often be completed in a few weeks. Larger websites, applications and custom software take longer depending on complexity.",
  ],
  [
    "Can you improve an existing website?",
    "Yes. We can redesign, rebuild, optimize or extend an existing website when that is more practical than starting from zero.",
  ],
  [
    "Do you provide ongoing support?",
    "Yes. We can continue with maintenance, improvements, SEO, content, analytics and additional development after launch.",
  ],
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10h11M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
      <span className="h-px w-7 bg-[#e34a27]" />
      {children}
    </div>
  );
}
function Highlight({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex justify-center items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-600 bg-[#e34a27]/10 py-2 px-3 rounded-full w-fit mx-auto">
      <span className="h-px w-7 bg-[#e34a27]" />
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[1fr_1.15fr] md:items-end">
      <div>
        <Label>{eyebrow}</Label>
        <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.04em] text-[#202221] sm:text-4xl lg:text-[46px] lg:leading-[1.02]">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-sm leading-6 text-neutral-500 md:justify-self-end">
        {text}
      </p>
    </div>
  );
}

function ProjectVisual({ kind }: { kind: string }) {
  return (
    <div
      className={`relative h-full rounded-3xl overflow-hidden border border-black/5 bg-neutral-100 ${kind}`}
    >
      {/* <div className="absolute inset-5 rounded-[2px] border border-black/10 bg-white/80 shadow-sm">
        <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
          <span className="h-1.5 w-16 bg-neutral-300" />
          <span className="h-1.5 w-10 bg-[#e34a27]/70" />
        </div>
        <div className="grid h-[calc(100%-37px)] grid-cols-3 gap-3 p-4">
          <div className="col-span-2 space-y-3">
            <div className="h-3 w-3/4 bg-neutral-200" />
            <div className="h-12 bg-neutral-100" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 bg-neutral-200" />
              <div className="h-8 bg-neutral-100" />
              <div className="h-8 bg-neutral-200" />
            </div>
          </div>
          <div className="space-y-2 border-l border-black/5 pl-3">
            <div className="h-2 w-full bg-neutral-200" />
            <div className="h-2 w-2/3 bg-neutral-100" />
            <div className="mt-5 h-16 bg-[#e34a27]/10" />
          </div>
        </div>
      </div> */}

      <Image
        src={`/${kind}.png`}
        alt=""
        className="object-cover object-top w-full h-90"
        width={400}
        height={600}
      />
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#202221] selection:bg-[#e34a27] selection:text-white">
      {/* Navigation */}
      {/* <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-[92%] max-w-7xl items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-[-0.05em]">
            refinix<span className="text-[#e34a27]">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.16em] text-neutral-600 md:flex">
            <a href="#services" className="transition hover:text-black">Services</a>
            <a href="#work" className="transition hover:text-black">Work</a>
            <a href="#process" className="transition hover:text-black">Process</a>
            <a href="#faq" className="transition hover:text-black">FAQ</a>
          </nav>
          <a href="#contact" className="flex items-center gap-2 border border-black bg-black px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#e34a27] hover:border-[#e34a27]">
            Start a project <Arrow />
          </a>
        </div>
      </header> */}

      {/* Hero */}
      <section className="mx-auto w-[92%] max-w-7xl pb-12 pt-20 sm:pt-28 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal direction="up" delay={0.1}>
            <Highlight>
              Digital products · Websites · Software · Growth
            </Highlight>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h1 className="mx-auto max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-[82px]">
              Digital Products
              <br />
              Built to Move Your
              <br />
              <span className="text-[#e34a27]">Business Forward.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-neutral-500 sm:text-[15px]">
              We design and build digital experiences that make businesses
              easier to discover, understand, trust and choose.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-[#e34a27] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white hover:bg-black"
              >
                Discuss your project <Arrow />
              </a>
              <a
                href="#work"
                className="flex items-center gap-2 border border-black/15 bg-white px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] hover:border-black"
              >
                See our work <Arrow />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal direction="up" delay={0.5}>
          <div className="mt-16 grid border-y border-black/10 py-4 text-center text-[9px] uppercase tracking-[0.18em] text-neutral-500 sm:grid-cols-4">
            <span>Web development</span>
            <span>Custom software</span>
            <span>Digital growth</span>
            <span>Built for results</span>
          </div>
        </Reveal>
      </section>

      {/* Intro */}
      <section
        id="services"
        className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24"
      >
        <Reveal direction="up" delay={0.1}>
          <SectionTitle
            eyebrow="01 · Your digital foundation"
            title="Your Business Deserves More Than a Template."
            text="Your website and digital products are often the first interaction someone has with your business. We build them to communicate your value clearly and turn attention into action."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="border border-black/10 bg-white p-6 sm:p-8">
            <Reveal direction="up" delay={0.2}>
              <div className="mb-7 text-xs uppercase tracking-[0.16em] text-neutral-400">
                Where businesses get stuck
              </div>
            </Reveal>
            <div className="space-y-4 text-sm text-neutral-600">
              {[
                "People cannot understand what you offer quickly.",
                "Your website looks different from the quality of your actual business.",
                "Visitors arrive but there is no clear path to becoming a customer.",
                "Your tools do not talk to each other.",
                "Your online presence does not reflect where you want the business to go.",
              ].map((x, i) => (
                <Reveal direction="up" delay={i * 0.3} key={x}>
                  <div
                    key={x}
                    className="flex gap-3 border-b border-black/5 pb-4"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[#e34a27]" />
                    <span>{x}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="min-h-[300px] border border-black/10 bg-neutral-100 p-5">
            <div className="h-full border border-black/10 bg-white">
              <div className="border-b border-black/10 p-4 text-[9px] uppercase tracking-[.16em] text-neutral-400">
                Refinix digital system
              </div>

              <Reveal direction="up" delay={0.1}>
                <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
                  {[
                    "Strategy",
                    "Design",
                    "Technology",
                    "Content",
                    "Growth",
                    "Analytics",
                  ].map((x, i) => (
                    <Reveal direction="up" delay={i * 0.5} key={x}>
                      <div
                        key={x}
                        className={`group relative flex min-h-[130px] flex-col justify-between border p-4 transition-all duration-300 ${
                          i === 1
                            ? "border-[#e34a27]/30 bg-[#e34a27] text-white"
                            : "border-black/10 bg-white hover:border-black/20 hover:bg-[#292c2b] hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[9px] font-medium tracking-[0.12em] ${
                              i === 1
                                ? "text-white/60"
                                : "text-neutral-400 group-hover:text-white/40"
                            }`}
                          >
                            0{i + 1}
                          </span>

                          <span
                            className={`text-xs transition-transform duration-300 group-hover:translate-x-1 ${
                              i === 1 ? "text-white" : "text-[#e34a27]"
                            }`}
                          >
                            ↗
                          </span>
                        </div>

                        <div>
                          <div className="text-base font-medium tracking-[-0.03em] sm:text-lg">
                            {x}
                          </div>

                          <div
                            className={`mt-1 h-px w-0 transition-all duration-300 group-hover:w-8 ${
                              i === 1 ? "bg-white/50" : "bg-[#e34a27]"
                            }`}
                          />
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" delay={0.1}>
          <SectionTitle
            eyebrow="02 · What we build"
            title="What We Build. What We Grow."
            text="From your first website to custom business software, we create digital systems around how your business actually works."
          />
        </Reveal>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([num, title, text, tech], i) => (
            <Reveal direction="up" delay={i * 0.2} key={num}>
              <article
                key={num}
                className="group border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#e34a27]/50"
              >
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[.18em] text-neutral-400">
                  <span>{num}</span>
                  <span className="text-[#e34a27]">Service</span>
                </div>
                <h3 className="mt-12 text-xl font-medium tracking-[-.03em]">
                  {title}
                </h3>
                <p className="mt-3 min-h-12 text-sm leading-5 text-neutral-500">
                  {text}
                </p>
                <div className="mt-7 border-t border-black/5 pt-4 text-[9px] uppercase tracking-[.13em] text-neutral-400">
                  {tech}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Two feature panels */}
      <section className="mx-auto grid w-[92%] max-w-7xl gap-3 py-16 lg:grid-cols-2 lg:py-24">
        <Reveal direction="up" delay={0.1}>
          <div className="min-h-[350px] bg-[#292c2b] p-7 text-white sm:p-9">
            <Reveal direction="up" delay={0.1}>
              <Label>01 · The foundation</Label>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h3 className="max-w-md text-3xl font-medium tracking-[-.04em]">
                Resilient Digital Foundations.
              </h3>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
                We build digital products that are fast, responsive, accessible
                and maintainable. A strong foundation gives your business room
                to grow.
              </p>
            </Reveal>

            <div className="mt-10 grid max-w-md grid-cols-2 gap-2">
              {["Fast loading", "Responsive", "Accessible", "Maintainable"].map(
                (x, i) => (
                  <Reveal direction="up" delay={0.1 + i * 0.1} key={x}>
                    <div className="border border-white/10 px-3 py-4 text-[10px] uppercase tracking-[.12em] text-white/70">
                      {x}
                    </div>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <div className="min-h-[350px] border border-black/10 bg-white p-7 sm:p-9">
            <Reveal direction="up" delay={0.4}>
              <Label>02 · The growth engine</Label>
            </Reveal>
            <Reveal direction="up" delay={0.5}>
              <h3 className="max-w-md text-3xl font-medium tracking-[-.04em]">
                Compounding Commercial Velocity.
              </h3>
            </Reveal>
            <Reveal direction="up" delay={0.6}>
              <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">
                Your website should not be a brochure that sits still. We
                connect design, content, SEO and technology to create momentum.
              </p>
            </Reveal>
            <div className="mt-10 grid max-w-md grid-cols-2 gap-2">
              {["Content", "SEO", "Analytics", "Growth"].map((x, i) => (
                <Reveal direction="up" delay={0.1 + i * 0.7} key={x}>
                  <div className="border border-black/10 px-3 py-4 text-[10px] uppercase tracking-[.12em] text-neutral-500">
                    {x}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Why */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" delay={0.1}>
          <SectionTitle
            eyebrow="03 · Why businesses choose Refinix"
            title="Why Businesses Choose Refinix."
            text="Good digital work sits between business strategy, design and engineering. We bring those disciplines together without unnecessary complexity."
          />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([num, title, text], i) => (
            <Reveal direction="up" delay={0.1 + i * 0.1} key={num}>
              <article
                key={num}
                className="border border-black/10 bg-white p-6"
              >
                <div className="text-[9px] uppercase tracking-[.18em] text-[#e34a27]">
                  {num}
                </div>
                <h3 className="mt-9 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-5 text-neutral-500">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24"
      >
        <Reveal direction="up" delay={0.1}>
          <SectionTitle
            eyebrow="04 · Our process"
            title="How We Turn Ideas Into Digital Products."
            text="A simple, structured process keeps projects moving while leaving enough room for thoughtful decisions."
          />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {process.map(([num, title, text], i) => (
            <Reveal direction="up" delay={0.1 + i * 0.1} key={num}>
              <article
                key={num}
                className="min-h-48 border border-black/10 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-medium tracking-[-.05em] text-neutral-300">
                    {num}
                  </span>
                  <span className="text-[9px] uppercase tracking-[.15em] text-[#e34a27]">
                    Step
                  </span>
                </div>
                <h3 className="mt-7 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-5 text-neutral-500">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" delay={0.1}>
          <SectionTitle
            eyebrow="05 · Selected work"
            title="Selected Work Built for Real Businesses."
            text="A few examples of how strategy, design and technology come together in practical digital products."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal direction="up" delay={0.3 + i * 0.2} key={project.title}>
              <article key={project.title} className="group">
                <ProjectVisual kind={project.kind} />
                <div className="pt-5">
                  <div className="text-[9px] uppercase tracking-[.16em] text-[#e34a27]">
                    {project.tag}
                  </div>
                  <h3 className="mt-2 text-xl font-medium tracking-[-.03em]">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-5 text-neutral-500">
                    {project.text}
                  </p>
                  {/* <button className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[.16em]">
                    View case study <Arrow />
                  </button> */}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="border-y border-black/10 py-8">
          <Reveal direction="up" delay={0.1}>
            <div className="mb-8">
              <Label>06 · Modern technology · Practical results</Label>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "100%",
                "Responsive-first",
                "Every experience is designed for real devices.",
              ],
              [
                "24/7",
                "Always accessible",
                "Your digital presence keeps working after hours.",
              ],
              [
                "SEO",
                "Search ready",
                "Technical foundations built for discoverability.",
              ],
              [
                "∞",
                "Room to grow",
                "Architecture that can evolve with your business.",
              ],
            ].map(([big, title, text], i) => (
              <Reveal direction="up" delay={0.1 + i * 0.2} key={title}>
                <div className="border-l border-black/10 pl-5">
                  <div className="text-3xl font-medium tracking-[-.05em]">
                    {big}
                  </div>
                  <div className="mt-3 text-xs font-medium uppercase tracking-[.1em]">
                    {title}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-neutral-500">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Being online */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" delay={0.1}>
          <SectionTitle
            eyebrow="07 · The bigger picture"
            title="Being Online Isn't Enough."
            text="A digital presence should make your business easier to find, easier to understand and easier to choose."
          />
        </Reveal>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Get discovered",
            "Build trust",
            "Explain value",
            "Generate action",
          ].map((title, i) => (
            <Reveal direction="up" delay={0.1 + i * 0.2} key={title}>
              <div key={title} className="border border-black/10 bg-white p-6">
                <span className="text-[9px] text-[#e34a27]">0{i + 1}</span>
                <h3 className="mt-10 text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-5 text-neutral-500">
                  {
                    [
                      "Be visible where your customers are already looking.",
                      "Show the quality and credibility behind your business.",
                      "Make your offer understandable within seconds.",
                      "Give visitors a clear reason and path to contact you.",
                    ][i]
                  }
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal direction="up" delay={0.9}>
          <div className="mt-3 flex flex-col justify-between gap-5 border border-black/10 bg-white p-6 sm:flex-row sm:items-center">
            <p className="text-sm font-medium">
              Your website is part of your sales process—not separate from it.
            </p>
            <a
              href="#contact"
              className="flex w-fit items-center gap-2 bg-black px-4 py-2.5 text-[10px] uppercase tracking-[.15em] text-white"
            >
              Build it right <Arrow />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Technology */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal direction="up" delay={0.1}>
              <Label>08 · Technology should make business simpler</Label>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="max-w-xl text-3xl font-medium tracking-[-.04em] sm:text-4xl">
                Technology Should Make Business Simpler, Not More Complicated.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-500">
                We use modern tools where they create a practical advantage,
                while keeping the final product understandable, maintainable and
                aligned with your goals.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "PostgreSQL",
              "APIs",
              "Cloud",
              "Analytics",
            ].map((x, i) => (
              <Reveal direction="up" delay={0.1 + i * 0.1} key={x}>
                <div
                  key={x}
                  className="border-b border-r border-black/10 bg-white p-5 text-xs uppercase tracking-[.08em]"
                >
                  {x}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" delay={0.1}>
          <Label>09 · Client perspectives</Label>
        </Reveal>
        <div className="grid gap-3 lg:grid-cols-3">
          {testimonials.map(([quote, role, num], i) => (
            <Reveal direction="up" delay={0.1 + i * 0.2} key={num}>
              <blockquote
                key={num}
                className="border border-black/10 bg-white p-7"
              >
                <div className="text-2xl text-[#e34a27]">“</div>
                <p className="mt-5 text-base leading-7">
                  {quote.replace(/^“|”$/g, "")}
                </p>
                <footer className="mt-10 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[.14em]">
                      {role}
                    </div>
                    <div className="mt-1 text-[9px] text-neutral-400">
                      Refinix client
                    </div>
                  </div>
                  <span className="text-[9px] text-neutral-400">{num}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Reveal direction="up" delay={0.1}>
              <Label>10 · Frequently asked questions</Label>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="max-w-md text-3xl font-medium tracking-[-.04em] sm:text-4xl">
                Frequently Asked Questions.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">
                A few answers to the questions businesses usually ask before
                starting a digital project.
              </p>
            </Reveal>
          </div>
          <div className="border-t border-black/10">
            {faqs.map(([question, answer], i) => (
              <Reveal direction="up" delay={0.1 + i * 0.1} key={question}>
                <div key={question} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-medium"
                  >
                    <span>{question}</span>
                    <span
                      className={`text-xl font-light transition-transform ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-neutral-500">
                      {answer}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mx-auto w-[92%] max-w-7xl pb-8 pt-16 lg:pt-24"
      >
        <div className="grid gap-10 bg-[#292c2b] p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:p-14">
          <div>
            <Reveal direction="up" delay={0.1}>
              <Label>11 · Start a project</Label>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="max-w-2xl text-4xl font-medium tracking-[-.05em] sm:text-5xl">
                Have a Digital Project in Mind?
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                Tell us what you are building, what is not working or where you
                want to go next. We will help you find the right digital
                approach.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <a
                href="mailto:contact@refinix.in"
                className="mt-7 inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-[10px] uppercase tracking-[.16em] hover:bg-white hover:text-black"
              >
                contact@refinix.in <Arrow />
              </a>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end gap-2 text-[10px] uppercase tracking-[.15em] text-white/50">
            <Reveal direction="up" delay={0.1}>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <a href="#work" className="hover:text-white">
                Selected work
              </a>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <a href="#process" className="hover:text-white">
                Process
              </a>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </Reveal>
          </div>
        </div>
        {/* <footer className="flex flex-col justify-between gap-3 py-6 text-[9px] uppercase tracking-[.14em] text-neutral-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Refinix Solutions. All rights reserved.</span>
          <span>Digital products · Web · Software · Growth</span>
        </footer> */}
      </section>
    </main>
  );
}
