
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Development Company",
  description:
    "Learn about Refinix Solutions, our approach to web development, software, apps, SEO and digital growth, and the principles behind how we build digital products.",
};

const principles = [
  [
    "01",
    "Business before technology",
    "We start with the business problem, customer and desired outcome. Technology comes after the direction is clear.",
  ],
  [
    "02",
    "Clarity over complexity",
    "A digital product should make things easier to understand and easier to use. We remove unnecessary complexity wherever possible.",
  ],
  [
    "03",
    "Built for the long term",
    "We prefer clean, maintainable foundations that can grow with a business instead of quick solutions that become expensive later.",
  ],
  [
    "04",
    "Design with a purpose",
    "Every visual decision should help communicate value, build confidence or move a user toward the next useful action.",
  ],
  [
    "05",
    "Measure what matters",
    "Traffic, clicks and impressions are useful only when connected to meaningful business outcomes.",
  ],
  [
    "06",
    "Keep improving",
    "Launch is not the finish line. Strong digital products evolve through feedback, data and new business needs.",
  ],
];

const capabilities = [
  ["Web Development", "Conversion-focused websites and digital experiences."],
  ["Custom Software", "Business systems built around unique workflows."],
  ["App Development", "Mobile and web applications for customers and teams."],
  ["Digital Marketing", "Growth systems designed to create qualified demand."],
  ["SEO", "Technical and content foundations for sustainable discovery."],
  ["Social Media", "Consistent content and social presence built around business goals."],
];

const process = [
  ["01", "Listen", "Understand the business, audience and opportunity."],
  ["02", "Think", "Find the simplest strategy that can create the desired result."],
  ["03", "Build", "Turn the strategy into a useful, polished digital product."],
  ["04", "Improve", "Launch, learn and keep making the product better."],
];

function Arrow() {
  return (
    <ArrowRight
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
      <span className="h-px w-7 bg-[#e34a27]" />
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5] text-[#202221] selection:bg-[#e34a27] selection:text-white">

      {/* HERO */}
      <section className="mx-auto w-[92%] max-w-7xl pb-16 pt-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <Reveal direction="up" distance={18}>
              <Label>About Refinix Solutions</Label>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.08}
              distance={40}
              duration={0.8}
            >
              <h1 className="max-w-5xl text-5xl font-medium leading-[.94] tracking-[-.065em] sm:text-6xl lg:text-[78px]">
                We Build Digital
                <br />
                <span className="text-[#e34a27]">
                  Things That Matter.
                </span>
              </h1>
            </Reveal>
          </div>

          <Reveal
            direction="right"
            delay={0.15}
            distance={30}
          >
            <div>
              <p className="max-w-xl text-base leading-7 text-neutral-500">
                Refinix Solutions is a digital development and growth company
                helping businesses turn ideas, problems and opportunities into
                useful digital products.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 border border-black bg-black px-5 py-3 text-white text-[10px] font-medium uppercase tracking-[.16em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/75 hover:text-white"
              >
                Work with Refinix
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          direction="up"
          delay={0.25}
          distance={18}
        >
          <div className="mt-16 grid border-y border-black/10 py-4 text-center text-[9px] uppercase tracking-[.18em] text-neutral-500 sm:grid-cols-4">
            {["Strategy", "Design", "Technology", "Growth"].map(
              (item, index) => (
                <span
                  key={item}
                  className="py-2 transition-colors duration-300 hover:text-[#e34a27]"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </Reveal>
      </section>

      {/* WHY WE EXIST */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal
            direction="left"
            distance={30}
          >
            <div>
              <Label>01 · Why we exist</Label>

              <h2 className="max-w-md text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">
                Most businesses don't need more technology. They need the
                right technology.
              </h2>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={0.1}
            distance={30}
          >
            <div className="max-w-3xl space-y-6 text-base leading-7 text-neutral-500">
              <p>
                The internet has made it easier than ever to build a website,
                launch an app or publish content. It has also made it easier
                to build things that do not solve the real problem.
              </p>

              <p>
                Refinix exists to take a more practical approach. We connect
                business thinking, user experience and engineering so the
                final product has a reason to exist and a job to do.
              </p>

              <p>
                Whether we are building a company website, custom software or
                a digital growth system, our goal is the same: create
                something useful, credible, measurable and ready for what
                comes next.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" distance={18}>
          <Label>02 · Our point of view</Label>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(([num, title, text], index) => (
            <Reveal
              key={num}
              direction="up"
              delay={index * 0.07}
              distance={25}
              amount={0.15}
            >
              <article className="group min-h-56 border border-black/10 bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-[#e34a27]/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
                <div className="flex justify-between">
                  <span className="text-[9px] uppercase tracking-[.18em] text-[#e34a27]">
                    {num}
                  </span>

                  <span className="h-1.5 w-1.5 bg-black/15 transition-colors duration-300 group-hover:bg-[#e34a27]" />
                </div>

                <h3 className="mt-10 text-xl font-medium tracking-[-.025em]">
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

      {/* MINDSET */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-4 lg:grid-cols-[.9fr_1.1fr]">

          {/* DARK PANEL */}
          <Reveal
            direction="left"
            distance={35}
          >
            <div className="h-full bg-[#292c2b] p-8 text-white transition-transform duration-500 hover:-translate-y-1 sm:p-10">
              <Reveal direction="up" distance={15}>
                <Label>03 · The Refinix mindset</Label>
              </Reveal>

              <Reveal
                direction="up"
                delay={0.08}
                distance={25}
              >
                <h2 className="max-w-lg text-4xl font-medium leading-[1] tracking-[-.05em]">
                  Build less noise. Create more value.
                </h2>
              </Reveal>

              <Reveal
                direction="up"
                delay={0.15}
                distance={20}
              >
                <p className="mt-6 max-w-lg text-sm leading-6 text-white/55">
                  We are interested in the things that make a measurable
                  difference: clearer positioning, better experiences, faster
                  systems, stronger visibility and more qualified
                  opportunities.
                </p>
              </Reveal>

              <Reveal
                direction="up"
                delay={0.22}
                distance={15}
              >
                <div className="mt-10 border-t border-white/10 pt-6">
                  <div className="text-[9px] uppercase tracking-[.17em] text-white/40">
                    Simple principle
                  </div>

                  <div className="mt-3 text-xl tracking-[-.02em]">
                    Useful &gt; impressive
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* PROJECT THINKING */}
          <Reveal
            direction="right"
            delay={0.1}
            distance={35}
          >
            <div className="h-full border border-black/10 bg-white p-8 sm:p-10">
              <div className="text-[9px] uppercase tracking-[.18em] text-[#e34a27]">
                How we think about a project
              </div>

              <div className="mt-8 space-y-2">
                {[
                  ["Business", "What result are we actually trying to create?"],
                  ["Customer", "What does the person using this actually need?"],
                  ["Experience", "How can we make the next decision easier?"],
                  ["Technology", "What is the simplest reliable way to build it?"],
                  ["Growth", "How will we know whether it is working?"],
                ].map(([label, text], i) => (
                  <Reveal
                    key={label}
                    direction="right"
                    delay={0.12 + i * 0.06}
                    distance={18}
                    amount={0.2}
                  >
                    <div className="grid grid-cols-[.7fr_1.3fr] gap-5 border-b border-black/10 py-5 transition-colors duration-300 hover:border-[#e34a27]/40">
                      <span className="text-[9px] uppercase tracking-[.15em] text-[#e34a27]">
                        0{i + 1} · {label}
                      </span>

                      <span className="text-sm leading-5">
                        {text}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

          <Reveal
            direction="left"
            distance={30}
          >
            <div>
              <Label>04 · What we do</Label>

              <h2 className="max-w-xl text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">
                One Partner Across Your Digital Journey.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-500">
                Instead of treating your website, software, marketing and SEO
                as disconnected activities, we can build them into one
                digital system around your business.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3">
            {capabilities.map(([title, text], index) => (
              <Reveal
                key={title}
                direction="up"
                delay={index * 0.07}
                distance={20}
                amount={0.2}
              >
                <div className="group h-full border-b border-r border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#292c2b] hover:text-white">
                  <h3 className="text-sm font-medium transition-colors duration-300">
                    {title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-neutral-500 transition-colors duration-300 group-hover:text-white/55">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" distance={18}>
          <Label>05 · How we work</Label>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-4">
          {process.map(([num, title, text], index) => (
            <Reveal
              key={num}
              direction="up"
              delay={index * 0.08}
              distance={25}
              amount={0.2}
            >
              <article className="group h-full border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
                <div className="text-2xl font-medium tracking-[-.05em] text-neutral-300 transition-colors duration-300 group-hover:text-[#e34a27]">
                  {num}
                </div>

                <h3 className="mt-10 text-lg font-medium">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GOAL */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" distance={30}>
          <div className="border-y border-black/10 py-12 text-center">

            <Reveal direction="up" distance={18}>
              <Label>06 · The goal</Label>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.1}
              distance={30}
              duration={0.8}
            >
              <h2 className="mx-auto max-w-5xl text-4xl font-medium leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">
                Your business should be able to do more because its digital
                foundation is better.
              </h2>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.18}
              distance={20}
            >
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 bg-[#e34a27] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
              >
                Start a conversation
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto w-[92%] max-w-7xl pb-8 pt-16 lg:pt-24">
        <Reveal
          direction="up"
          distance={35}
          duration={0.8}
        >
          <div className="bg-[#292c2b] p-8 text-white sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>
                <Reveal direction="up" distance={15}>
                  <Label>07 · Work with us</Label>
                </Reveal>

                <Reveal
                  direction="left"
                  delay={0.08}
                  distance={25}
                >
                  <h2 className="max-w-3xl text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl">
                    Have a problem worth solving?
                  </h2>
                </Reveal>

                <Reveal
                  direction="left"
                  delay={0.15}
                  distance={20}
                >
                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
                    Tell us where your business is going and what you need to
                    make that next step possible.
                  </p>
                </Reveal>

                <Reveal
                  direction="up"
                  delay={0.22}
                  distance={18}
                >
                  <Link
                    href="/contact"
                    className="group mt-7 inline-flex items-center gap-2 bg-[#e34a27] px-5 py-3.5 text-[10px] uppercase tracking-[.16em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                  >
                    Start your project
                    <Arrow />
                  </Link>
                </Reveal>
              </div>

              <Reveal
                direction="right"
                delay={0.2}
                distance={25}
              >
                <div className="text-[9px] uppercase tracking-[.15em] text-white/40">
                  <div>Web</div>
                  <div className="mt-3">Software</div>
                  <div className="mt-3">Apps</div>
                  <div className="mt-3">Growth</div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

      </section>
    </main>
  );
}