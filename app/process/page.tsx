

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Strategy, Design & Development",
  description:
    "Learn how Refinix Solutions approaches digital projects through strategy, design, development, launch and continuous improvement.",
};

const steps = [
  {
    number: "01",
    phase: "Discover",
    title: "Understand the business before touching the pixels.",
    description:
      "We learn about the business, customers, offer, competition, current digital presence and the result you actually want.",
    outputs: [
      "Goals & priorities",
      "Audience understanding",
      "Project scope",
      "Success criteria",
    ],
  },
  {
    number: "02",
    phase: "Strategy",
    title: "Turn the problem into a clear digital direction.",
    description:
      "We decide what the product needs to communicate, how users should move through it and which features or pages matter most.",
    outputs: [
      "Information architecture",
      "Conversion journey",
      "Content direction",
      "Technical approach",
    ],
  },
  {
    number: "03",
    phase: "Design",
    title: "Make the experience clear before we build it.",
    description:
      "We translate the strategy into an interface that balances usability, brand, hierarchy and conversion.",
    outputs: [
      "Wireframes",
      "UI direction",
      "Responsive layouts",
      "Interaction patterns",
    ],
  },
  {
    number: "04",
    phase: "Develop",
    title: "Build a fast, reliable digital foundation.",
    description:
      "We develop the approved experience with clean, maintainable code and the technology appropriate for the project.",
    outputs: [
      "Frontend development",
      "Integrations",
      "Responsive implementation",
      "CMS / backend where required",
    ],
  },
  {
    number: "05",
    phase: "Test",
    title: "Find problems before your customers do.",
    description:
      "We review the experience across devices and key journeys, checking usability, forms, performance, accessibility and technical quality.",
    outputs: [
      "Cross-device QA",
      "Performance checks",
      "Conversion-path review",
      "Technical fixes",
    ],
  },
  {
    number: "06",
    phase: "Launch & improve",
    title: "Launch with a foundation that can keep growing.",
    description:
      "We make the product live, connect measurement and identify opportunities for the next iteration.",
    outputs: [
      "Deployment",
      "Analytics",
      "SEO foundation",
      "Growth recommendations",
    ],
  },
];

const rules = [
  [
    "Strategy before screens",
    "We do not make design decisions in a vacuum.",
  ],
  [
    "Purpose before features",
    "Every feature needs a reason to exist.",
  ],
  [
    "Customer before assumptions",
    "The user's experience is part of the business outcome.",
  ],
  [
    "Quality before shortcuts",
    "Fast delivery should not create long-term technical debt.",
  ],
];

function Arrow() {
  return (
    <ArrowRight
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    />
  );
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500", className)}>
      <span className="h-px w-7 bg-[#e34a27]" />
      {children}
    </div>
  );
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5] text-[#202221] selection:bg-[#e34a27] selection:text-white">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl pb-16 pt-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">

          <div>
            <Reveal direction="up" distance={18}>
              <Label>Our Process</Label>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.08}
              distance={38}
              duration={0.8}
            >
              <h1 className="max-w-5xl text-5xl font-medium leading-[.94] tracking-[-.065em] sm:text-6xl lg:text-[78px]">
                Think Clearly.
                <br />
                <span className="text-[#e34a27]">
                  Build Deliberately.
                </span>
              </h1>
            </Reveal>
          </div>

          <Reveal
            direction="right"
            delay={0.15}
            distance={30}
          >
            <p className="max-w-xl text-base leading-7 text-neutral-500">
              A practical process that keeps business goals, customer needs
              and technical quality connected from the first conversation to
              the final launch.
            </p>
          </Reveal>
        </div>

        <Reveal
          direction="up"
          delay={0.25}
          distance={18}
        >
          <div className="mt-16 grid border-y border-black/10 py-4 text-center text-[9px] uppercase tracking-[.18em] text-neutral-500 sm:grid-cols-4">
            {[
              "Understand",
              "Strategize",
              "Build",
              "Improve",
            ].map((item) => (
              <span
                key={item}
                className="py-2 transition-colors duration-300 hover:text-[#e34a27]"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          PROCESS STEPS
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">

        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">

          <Reveal direction="left" distance={30}>
            <div>
              <Label>01 · The journey</Label>

              <h2 className="max-w-2xl text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl lg:text-5xl">
                Six Steps From Problem to Product.
              </h2>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={0.1}
            distance={30}
          >
            <p className="max-w-xl text-sm leading-6 text-neutral-500 md:justify-self-end">
              Not every project needs the same amount of work in every phase.
              The framework gives us a clear path while keeping the actual
              scope flexible around your needs.
            </p>
          </Reveal>

        </div>

        <div className="space-y-3">

          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.07}
              distance={30}
              amount={0.12}
            >
              <article className="group grid gap-6 border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)] sm:p-9 lg:grid-cols-[.18fr_.55fr_1fr] lg:items-start">

                {/* NUMBER + PHASE */}

                <div className="flex items-center justify-between lg:block ">
                  <span className="text-3xl font-medium tracking-[-.05em] text-neutral-300 transition-colors duration-300 group-hover:text-[#e34a27]">
                    {step.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[.18em] text-[#e34a27] ml-4">
                    {step.phase}
                  </span>
                </div>

                {/* MAIN CONTENT */}

                <Reveal
                  direction="up"
                  distance={18}
                  delay={0.1}
                >
                  <div>
                    <h3 className="text-xl font-medium leading-tight tracking-[-.025em] sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      {step.description}
                    </p>
                  </div>
                </Reveal>

                {/* OUTPUTS */}

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:pt-1">
                  {step.outputs.map((output, outputIndex) => (
                    <Reveal
                      key={output}
                      direction="none"
                      delay={0.12 + outputIndex * 0.04}
                      distance={0}
                      amount={0.3}
                    >
                      <div className="h-full border border-black/10 bg-[#f7f7f5] p-3 transition-all duration-300 hover:border-[#e34a27]/40 hover:bg-white">
                        <span className="text-[9px] leading-4 text-neutral-500">
                          {output}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>

              </article>
            </Reveal>
          ))}

        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">

        <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">

          <Reveal direction="left" distance={35}>
            <div className="h-full bg-[#292c2b] p-8 text-white sm:p-10">

              <Label>
                02 · What keeps us honest
              </Label>

              <h2 className="max-w-lg text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">
                The process is flexible. The principles are not.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
                We can move quickly when the problem is clear. We can slow
                down when a decision deserves more thought. What stays
                constant is the standard.
              </p>

            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">

            {rules.map(([title, text], index) => (
              <Reveal
                key={title}
                direction="up"
                delay={index * 0.08}
                distance={25}
              >
                <article className="group h-full border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">

                  <span className="text-[9px] text-[#e34a27]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 text-lg font-medium">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    {text}
                  </p>

                </article>
              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          WHAT TO EXPECT
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">

        <Reveal direction="up" distance={18}>
          <Label>03 · What you can expect</Label>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-3">

          {[
            [
              "Clear communication",
              "You know what is happening, why it matters and what comes next.",
            ],
            [
              "Visible progress",
              "Work is broken into useful milestones instead of disappearing into a black box.",
            ],
            [
              "Practical decisions",
              "We recommend what makes sense for the project—not technology for technology's sake.",
            ],
          ].map(([title, text], index) => (
            <Reveal
              key={title}
              direction="up"
              delay={index * 0.08}
              distance={25}
            >
              <article className="group h-full border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">

                <h3 className="text-xl font-medium tracking-[-.025em]">
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

      {/* =========================================================
          OUTCOME
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">

        <Reveal direction="up" distance={30}>

          <div className="border-y border-black/10 py-12 text-center">

            <Reveal direction="up" distance={20}>
              <Label>
                04 · The outcome
              </Label>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.1}
              distance={30}
              duration={0.8}
            >
              <h2 className="mx-auto max-w-5xl text-4xl font-medium leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">
                A better process should produce a better digital product—and
                a clearer path forward for your business.
              </h2>
            </Reveal>

          </div>

        </Reveal>

      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl pb-8 pt-16 lg:pt-24">

        <Reveal
          direction="up"
          distance={35}
          duration={0.8}
        >
          <div className="relative overflow-hidden bg-[#e34a27] p-8 text-white sm:p-12 lg:p-14">

            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />

            <Reveal direction="up" distance={15}>
              <Label className="text-white">
                05 · Ready to start?
              </Label>
            </Reveal>

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

              <Reveal direction="left" distance={25}>
                <div>

                  <h2 className="max-w-3xl text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl lg:text-6xl">
                    Bring us the problem. We'll work out the path.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/75">
                    You do not need a finished brief. Start with the business
                    challenge, opportunity or idea.
                  </p>

                </div>
              </Reveal>

              <Reveal
                direction="right"
                delay={0.15}
                distance={25}
              >
                <Link
                  href="/contact"
                  className="group flex w-fit items-center gap-2 bg-black px-5 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Start a conversation

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>

            </div>

          </div>
        </Reveal>

   

      </section>
    </main>
  );
}