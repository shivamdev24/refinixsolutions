
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

const problems = [
  [
    "01",
    "Your website looks good—but doesn't generate enough enquiries.",
    "Design without a conversion strategy turns attention into very little business.",
  ],
  [
    "02",
    "Visitors don't understand your offer quickly.",
    "If people have to figure out what you do, why you're different, or what to do next, they leave.",
  ],
  [
    "03",
    "Your business looks smaller online than it really is.",
    "An outdated or generic website can quietly reduce trust before a prospect ever contacts you.",
  ],
  [
    "04",
    "You're getting traffic, but not enough action.",
    "The problem may be positioning, messaging, UX, speed, trust signals or the journey—not traffic alone.",
  ],
];

const outcomes = [
  [
    "01",
    "Clear positioning",
    "Visitors understand what you do, who it is for and why they should care within seconds.",
  ],
  [
    "02",
    "Conversion-focused UX",
    "Every section is designed around a specific user question, objection or action.",
  ],
  [
    "03",
    "High-performance build",
    "Fast, responsive and technically clean across phones, tablets and desktops.",
  ],
  [
    "04",
    "Search-ready foundation",
    "Semantic structure, metadata, performance and technical foundations built for SEO.",
  ],
  [
    "05",
    "Trust that feels real",
    "Proof, case studies, process, guarantees and credibility are placed where they reduce hesitation.",
  ],
  [
    "06",
    "Built to grow",
    "Your website becomes a foundation for content, campaigns, SEO and future product features.",
  ],
];

const process = [
  [
    "01",
    "Business & audience",
    "We understand your offer, customers, competitors, goals and what currently prevents conversion.",
  ],
  [
    "02",
    "Conversion strategy",
    "We define the page structure, messaging hierarchy, calls-to-action and trust-building journey.",
  ],
  [
    "03",
    "UX & visual direction",
    "We turn the strategy into a clean interface designed to make the next step obvious.",
  ],
  [
    "04",
    "Development",
    "We build the experience with modern, maintainable technology and responsive behavior.",
  ],
  [
    "05",
    "QA & optimization",
    "We test layouts, interactions, forms, performance, accessibility and key conversion paths.",
  ],
  [
    "06",
    "Launch & growth",
    "We launch, measure and give you a foundation that can keep improving over time.",
  ],
];

const websiteTypes = [
  [
    "Business Websites",
    "For companies that need a professional digital presence that generates enquiries.",
    "Most businesses",
  ],
  [
    "Service Websites",
    "For agencies, consultants, professionals and local service businesses.",
    "Lead generation",
  ],
  [
    "Landing Pages",
    "Focused pages for campaigns, offers, products or specific audiences.",
    "High-intent traffic",
  ],
  [
    "Corporate Websites",
    "Structured digital experiences for established businesses and teams.",
    "Brand + trust",
  ],
  [
    "E-commerce",
    "Product experiences designed around discovery, confidence and checkout.",
    "Online sales",
  ],
  [
    "Web Platforms",
    "Custom frontends and web applications when your business needs more than pages.",
    "Custom workflows",
  ],
];

const faqs = [
  [
    "What makes your websites conversion-focused?",
    "We do not start with visual decoration. We structure the page around customer intent: what they need to know, what objections they have, what proof they need and what action should happen next.",
  ],
  [
    "Will you redesign my existing website or build from scratch?",
    "Both. If the existing website has useful foundations, we can redesign and rebuild it. If the structure itself is holding you back, starting fresh can be the better option.",
  ],
  [
    "Do you provide the copy/content too?",
    "We can help with messaging and content structure, and we can work with your existing copy or content team. The goal is to make the website communicate your value clearly.",
  ],
  [
    "Will the website be SEO-friendly?",
    "Yes. We build with semantic HTML, clean page structure, metadata, crawlable content, performance and other technical SEO fundamentals in mind.",
  ],
  [
    "Can you connect forms and lead systems?",
    "Yes. Depending on your setup, we can connect contact forms with email, CRM tools, analytics, calendars and other business systems.",
  ],
  [
    "How much does a conversion-focused website cost?",
    "Pricing depends on scope, number of pages, content, integrations and functionality. After understanding your requirements, we can give you a clear project estimate.",
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

function Label({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] ${
        dark ? "text-white/50" : "text-neutral-500"
      }`}
    >
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
    <div className="mb-10 grid gap-5 md:grid-cols-[1fr_1.05fr] md:items-end">
      <div>
        <Reveal direction="up">
          <Label>{eyebrow}</Label>
        </Reveal>

        <Reveal direction="up" delay={0.08}>
          <h2 className="max-w-2xl text-3xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-[48px]">
            {title}
          </h2>
        </Reveal>
      </div>

      <Reveal direction="up" delay={0.16}>
        <p className="max-w-xl text-sm leading-6 text-neutral-500 md:justify-self-end">
          {text}
        </p>
      </Reveal>
    </div>
  );
}

function BrowserMockup() {
  return (
    <div className="relative overflow-hidden border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,.12)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-black/10 px-4">
        <span className="h-2 w-2 rounded-full bg-neutral-200" />
        <span className="h-2 w-2 rounded-full bg-neutral-200" />
        <span className="h-2 w-2 rounded-full bg-neutral-200" />
        <div className="ml-4 h-4 flex-1 bg-neutral-50" />
      </div>

      <div className="grid min-h-[390px] grid-cols-[1.3fr_.7fr]">
        <div className="border-r border-black/10 p-6 sm:p-8">
          <div className="text-[8px] uppercase tracking-[.2em] text-[#e34a27]">
            Your ideal customer
          </div>

          <div className="mt-5 h-7 w-4/5 bg-[#202221]" />
          <div className="mt-2 h-7 w-3/5 bg-[#202221]" />

          <div className="mt-5 h-2 w-full bg-neutral-100" />
          <div className="mt-2 h-2 w-4/5 bg-neutral-100" />

          <div className="mt-7 flex gap-2">
            <div className="h-9 w-28 bg-[#e34a27]" />
            <div className="h-9 w-24 border border-black/10" />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2">
            <div className="h-20 border border-black/10 bg-neutral-50" />
            <div className="h-20 border border-black/10 bg-neutral-50" />
            <div className="h-20 border border-black/10 bg-neutral-50" />
          </div>
        </div>

        <div className="p-5">
          <div className="text-[8px] uppercase tracking-[.18em] text-neutral-400">
            Conversion path
          </div>

          <div className="mt-5 space-y-2">
            {["Attention", "Understanding", "Trust", "Action"].map((x, i) => (
              <div
                key={x}
                className={`border p-3 ${
                  i === 3
                    ? "border-[#e34a27]/40 bg-[#e34a27]/5"
                    : "border-black/10"
                }`}
              >
                <div className="text-[8px] text-neutral-400">0{i + 1}</div>
                <div className="mt-2 text-[10px]">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebDevelopmentServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#202221] selection:bg-[#e34a27] selection:text-white">
      {/* HERO */}
      <section className="mx-auto w-[92%] max-w-7xl pb-16 pt-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-20">
          <div>
            <Reveal direction="up">
              <Label>Web Development · Conversion-Focused</Label>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <h1 className="max-w-3xl text-5xl font-medium leading-[.94] tracking-[-.065em] sm:text-6xl lg:text-[72px]">
                Your Website Should
                <br />
                <span className="text-[#e34a27]">Bring You Business.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-7 text-neutral-500">
                We design and develop high-performance websites that make your
                business easier to understand, trust and choose—and turn more of
                the right visitors into enquiries.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-[#e34a27] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] text-white transition hover:bg-black"
                >
                  Get your website built
                  <Arrow />
                </a>

                <a
                  href="#work"
                  className="flex items-center gap-2 border border-black/15 bg-white px-5 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] transition hover:border-black"
                >
                  See our approach
                  <Arrow />
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.32}>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[9px] uppercase tracking-[.16em] text-neutral-400">
                <span>Strategy-first</span>
                <span>SEO-ready</span>
                <span>Mobile-first</span>
                <span>Fast by default</span>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15}>
            <BrowserMockup />
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.2}>
          <div className="mt-16 grid border-y border-black/10 py-4 text-center text-[9px] uppercase tracking-[.18em] text-neutral-500 sm:grid-cols-4">
            <span>Websites that convert</span>
            <span>Modern technology</span>
            <span>Built for SEO</span>
            <span>Designed around your customer</span>
          </div>
        </Reveal>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <SectionTitle
          eyebrow="01 · The real problem"
          title="A Website Isn't Successful Because It Looks Good."
          text="A beautiful website that does not communicate value or move visitors toward action is still an expensive brochure. We build around the commercial job your website needs to do."
        />

        <div className="grid gap-3 md:grid-cols-2">
          {problems.map(([num, title, text], index) => (
            <Reveal key={num} direction="up" delay={index * 0.08}>
              <article className="group h-full border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,.05)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[.18em] text-neutral-400">
                    {num}
                  </span>
                  <span className="h-1.5 w-1.5 bg-[#e34a27]" />
                </div>

                <h3 className="mt-12 max-w-xl text-xl font-medium leading-tight tracking-[-.025em]">
                  {title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <SectionTitle
          eyebrow="02 · What you get"
          title="A Website Built Around Conversion."
          text="We combine strategy, UX, design, development and technical SEO so your website does more than exist online."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map(([num, title, text], index) => (
            <Reveal key={num} direction="up" delay={index * 0.07}>
              <article className="h-full border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,.05)]">
                <div className="text-[9px] uppercase tracking-[.18em] text-[#e34a27]">
                  {num} · Outcome
                </div>

                <h3 className="mt-10 text-lg font-medium tracking-[-.02em]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONVERSION SYSTEM */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-4 lg:grid-cols-[.78fr_1.22fr]">
          <Reveal direction="right">
            <div className="h-full bg-[#292c2b] p-8 text-white sm:p-10">
              <Label dark>03 · The conversion system</Label>

              <h2 className="max-w-lg text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">
                Every Section Has a Job.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/55">
                Instead of filling a page with generic sections, we create a
                deliberate journey from first impression to enquiry.
              </p>

              <div className="mt-10 space-y-3">
                {[
                  [
                    "01",
                    "Capture attention",
                    "Strong positioning and a clear value proposition.",
                  ],
                  [
                    "02",
                    "Create understanding",
                    "Simple messaging that answers the important questions.",
                  ],
                  [
                    "03",
                    "Build confidence",
                    "Proof and trust signals where hesitation happens.",
                  ],
                  [
                    "04",
                    "Drive action",
                    "A clear next step without forcing the visitor.",
                  ],
                ].map(([num, title, text], index) => (
                  <Reveal
                    key={num}
                    direction="up"
                    delay={index * 0.07}
                    distance={20}
                  >
                    <div className="border border-white/10 p-4 transition hover:border-white/20 hover:bg-white/[.03]">
                      <div className="flex gap-4">
                        <span className="text-[9px] text-[#e34a27]">{num}</span>

                        <div>
                          <h3 className="text-sm font-medium">{title}</h3>
                          <p className="mt-1 text-xs leading-5 text-white/45">
                            {text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.12}>
            <div className="h-full border border-black/10 bg-white p-7 sm:p-10">
              <div className="flex items-end justify-between border-b border-black/10 pb-5">
                <div>
                  <div className="text-[9px] uppercase tracking-[.18em] text-[#e34a27]">
                    Typical journey
                  </div>

                  <h3 className="mt-2 text-2xl font-medium tracking-[-.035em]">
                    Visitor → Customer
                  </h3>
                </div>

                <span className="text-[9px] uppercase tracking-[.14em] text-neutral-400">
                  Built intentionally
                </span>
              </div>

              <div className="mt-8 space-y-2">
                {[
                  [
                    "Attention",
                    "What is this?",
                    "Clear headline + positioning",
                  ],
                  ["Relevance", "Is this for me?", "Audience + pain point"],
                  ["Value", "Can you solve it?", "Offer + outcomes"],
                  [
                    "Trust",
                    "Can I believe you?",
                    "Proof + process + credibility",
                  ],
                  [
                    "Action",
                    "What do I do now?",
                    "CTA + low-friction next step",
                  ],
                ].map(([stage, question, mechanism], index) => (
                  <Reveal
                    key={stage}
                    direction="left"
                    delay={0.1 + index * 0.06}
                    distance={20}
                  >
                    <div className="grid grid-cols-[.65fr_1fr_1.2fr] items-center gap-3 border border-black/10 p-4 transition hover:border-[#e34a27]/30 hover:bg-[#e34a27]/[.02]">
                      <span className="text-[9px] uppercase tracking-[.14em] text-[#e34a27]">
                        0{index + 1} · {stage}
                      </span>

                      <span className="text-xs font-medium">{question}</span>

                      <span className="text-[11px] leading-4 text-neutral-500">
                        {mechanism}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TYPES */}
      <section id="work" className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <SectionTitle
          eyebrow="04 · What we build"
          title="The Right Website for the Job."
          text="Different businesses need different digital experiences. We choose the structure and technology around the outcome—not the other way around."
        />

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {websiteTypes.map(([title, text, tag], index) => (
            <Reveal key={title} direction="up" delay={index * 0.07}>
              <article className="group min-h-56 h-full border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e34a27]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,.05)]">
                <div className="flex justify-between">
                  <span className="text-[9px] uppercase tracking-[.16em] text-[#e34a27]">
                    {tag}
                  </span>

                  <Arrow className="text-neutral-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#e34a27]" />
                </div>

                <h3 className="mt-12 text-xl font-medium tracking-[-.025em]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="border-y border-black/10 py-10">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <Reveal direction="right">
              <div>
                <Label>05 · Technology</Label>

                <h2 className="max-w-lg text-3xl font-medium tracking-[-.04em] sm:text-4xl">
                  Modern Under the Hood. Simple on the Surface.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-500">
                  We use modern technologies where they provide a real
                  advantage—speed, maintainability, flexibility and a better
                  experience for your customers.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.12}>
              <div className="grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3">
                {[
                  ["Next.js", "Performance"],
                  ["React", "Interfaces"],
                  ["TypeScript", "Reliability"],
                  ["Tailwind CSS", "Design systems"],
                  ["Node.js", "Integrations"],
                  ["Analytics", "Measurement"],
                ].map(([tech, benefit], index) => (
                  <Reveal
                    key={tech}
                    direction="up"
                    delay={0.15 + index * 0.05}
                    distance={15}
                  >
                    <div className="h-full border-b border-r border-black/10 bg-white p-5 transition hover:bg-neutral-50">
                      <div className="text-sm font-medium">{tech}</div>

                      <div className="mt-2 text-[9px] uppercase tracking-[.14em] text-neutral-400">
                        {benefit}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24"
      >
        <SectionTitle
          eyebrow="06 · Our process"
          title="Strategy Before Screens. Purpose Before Pixels."
          text="The fastest way to build the wrong website is to start designing before understanding the business. Our process keeps the commercial goal visible at every stage."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {process.map(([num, title, text], index) => (
            <Reveal key={num} direction="up" delay={index * 0.07}>
              <article className="min-h-52 h-full border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,.05)]">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-medium tracking-[-.05em] text-neutral-300">
                    {num}
                  </span>

                  <span className="text-[9px] uppercase tracking-[.16em] text-[#e34a27]">
                    Step
                  </span>
                </div>

                <h3 className="mt-8 text-lg font-medium">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-3 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="h-full border border-black/10 bg-white p-7 sm:p-9">
              <Label>07 · Without a strategy</Label>

              <h3 className="text-2xl font-medium tracking-[-.035em]">
                A website people visit.
              </h3>

              <div className="mt-8 space-y-3">
                {[
                  "Generic headline",
                  "Too much information at once",
                  "Weak differentiation",
                  "Buried proof",
                  "Multiple competing CTAs",
                  "Looks fine—but doesn't move people",
                ].map((x, index) => (
                  <Reveal
                    key={x}
                    direction="left"
                    delay={index * 0.05}
                    distance={15}
                  >
                    <div className="flex gap-3 border-b border-black/5 pb-3 text-sm text-neutral-500">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-neutral-300" />
                      {x}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.12}>
            <div className="h-full bg-[#e34a27] p-7 text-white sm:p-9">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.22em] text-white/70">
                <span className="h-px w-7 bg-white/70" />
                08 · With Refinix
              </div>

              <h3 className="text-2xl font-medium tracking-[-.035em]">
                A website built to create action.
              </h3>

              <div className="mt-8 space-y-3">
                {[
                  "Clear value proposition",
                  "Logical customer journey",
                  "Strong differentiation",
                  "Proof at the right moments",
                  "One primary action",
                  "Built to measure and improve",
                ].map((x, index) => (
                  <Reveal
                    key={x}
                    direction="left"
                    delay={index * 0.05}
                    distance={15}
                  >
                    <div className="flex gap-3 border-b border-white/20 pb-3 text-sm text-white/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-white" />
                      {x}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal direction="right">
            <div>
              <Label>09 · Built for discovery</Label>

              <h2 className="max-w-xl text-3xl font-medium tracking-[-.04em] sm:text-4xl">
                Your Website Should Be Easy to Find, Too.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-500">
                Conversion and SEO are not opposing goals. A clear website is
                easier for people to understand and easier for search engines to
                crawl.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.12}>
            <div className="grid grid-cols-2 border-l border-t border-black/10">
              {[
                [
                  "01",
                  "Semantic HTML",
                  "Meaningful structure for people and search engines.",
                ],
                [
                  "02",
                  "Metadata",
                  "Page titles, descriptions and social sharing controls.",
                ],
                [
                  "03",
                  "Performance",
                  "Lean implementation and optimized assets.",
                ],
                [
                  "04",
                  "Content structure",
                  "Pages organized around real search intent.",
                ],
                [
                  "05",
                  "Internal linking",
                  "Logical paths between related content and services.",
                ],
                [
                  "06",
                  "Technical foundation",
                  "Clean URLs, crawlability and indexation basics.",
                ],
              ].map(([num, title, text], index) => (
                <Reveal
                  key={num}
                  direction="up"
                  delay={0.12 + index * 0.05}
                  distance={15}
                >
                  <div className="h-full border-b border-r border-black/10 bg-white p-5 transition hover:bg-neutral-50">
                    <div className="text-[9px] text-[#e34a27]">{num}</div>

                    <h3 className="mt-7 text-sm font-medium">{title}</h3>

                    <p className="mt-2 text-xs leading-5 text-neutral-500">
                      {text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL / TRUST */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up">
          <div className="border border-black/10 bg-white p-8 transition hover:border-black/20 sm:p-12">
            <Label>10 · What clients should feel</Label>

            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <blockquote className="max-w-4xl text-2xl font-medium leading-tight tracking-[-.035em] sm:text-4xl">
                “We don't want you to simply have a better-looking website. We
                want your customers to understand your value faster—and have
                fewer reasons not to contact you.”
              </blockquote>

              <div className="text-[9px] uppercase tracking-[.15em] text-neutral-400">
                Refinix approach
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal direction="right">
            <div>
              <Label>11 · Frequently asked questions</Label>

              <h2 className="max-w-md text-3xl font-medium tracking-[-.04em] sm:text-4xl">
                Before We Build.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">
                A few questions businesses commonly ask before investing in a
                new website.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-black/10">
            {faqs.map(([question, answer], i) => {
              const isOpen = openFaq === i;

              return (
                <Reveal
                  key={question}
                  direction="up"
                  delay={i * 0.05}
                  distance={15}
                >
                  <div className="border-b border-black/10">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-medium"
                      aria-expanded={isOpen}
                    >
                      <span>{question}</span>

                      <span
                        className={`text-xl font-light transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-neutral-500">
                          {answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mx-auto w-[92%] max-w-7xl pb-8 pt-16 lg:pt-24"
      >
        <Reveal direction="up">
          <div className="relative overflow-hidden bg-[#292c2b] p-8 text-white sm:p-12 lg:p-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/5" />
            <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/5" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Reveal direction="up" delay={0.08}>
                  <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.22em] text-white/50">
                    <span className="h-px w-7 bg-[#e34a27]" />
                    12 · Your next website
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.14}>
                  <h2 className="max-w-3xl text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl lg:text-6xl">
                    Ready for a Website That Works as Hard as Your Business?
                  </h2>
                </Reveal>

                <Reveal direction="up" delay={0.2}>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
                    Tell us what you are building, what is not working or what
                    you want your website to achieve. We will help you determine
                    the right approach.
                  </p>
                </Reveal>

                <Reveal direction="up" delay={0.26}>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="mailto:contact@refinix.in?subject=Website%20Development%20Project"
                      className="flex items-center gap-2 bg-[#e34a27] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] text-white transition hover:bg-white hover:text-black"
                    >
                      Start the conversation
                      <Arrow />
                    </a>

                    <a
                      href="tel:+919760000000"
                      className="flex items-center gap-2 border border-white/15 px-5 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] text-white/80 transition hover:bg-white hover:text-black"
                    >
                      Talk to Refinix
                      <Arrow />
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal direction="left" delay={0.2}>
                <div className="min-w-44 border-l border-white/10 pl-6 text-[9px] uppercase tracking-[.15em] text-white/40">
                  <div>Web development</div>
                  <div className="mt-3">UX / UI</div>
                  <div className="mt-3">SEO foundation</div>
                  <div className="mt-3">Performance</div>
                  <div className="mt-3">Conversion strategy</div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <footer className="flex flex-col justify-between gap-3 py-6 text-[9px] uppercase tracking-[.14em] text-neutral-400 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Refinix Solutions. All rights
              reserved.
            </span>

            <span>Web development · Design · SEO · Growth</span>
          </footer>
        </Reveal>
      </section>
    </main>
  );
}