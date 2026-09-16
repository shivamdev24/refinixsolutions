

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Websites, Software & Digital Projects",
  description:
    "Explore selected websites, digital experiences and software projects created by Refinix Solutions for businesses and organizations.",
};

const projects = [
  {
    number: "01",
    category: "Business Website",
    title: "A digital presence built to turn attention into enquiries.",
    description:
      "Strategy, UX, design and development focused on making the business easier to understand, trust and contact.",
    result: "Clearer positioning + stronger conversion path",
    tags: ["Strategy", "UX/UI", "Development"],
  },
  {
    number: "02",
    category: "Custom Software",
    title: "Replacing repetitive work with a system built around the business.",
    description:
      "A tailored digital workflow that brings business operations into one easier, more reliable experience.",
    result: "Less manual work + better operational visibility",
    tags: ["Product", "Engineering", "Automation"],
  },
  {
    number: "03",
    category: "Lead Generation",
    title: "A focused landing experience designed around one action.",
    description:
      "A campaign-ready page with sharper messaging, stronger proof and a frictionless route from intent to enquiry.",
    result: "Focused user journey + campaign-ready foundation",
    tags: ["Landing Page", "Conversion", "SEO"],
  },
  {
    number: "04",
    category: "E-commerce",
    title: "Making product discovery feel simple and buying feel natural.",
    description:
      "A cleaner shopping experience structured around product confidence, discovery and the path to checkout.",
    result: "Better product communication + simpler journey",
    tags: ["E-commerce", "UX/UI", "Development"],
  },
];

const projectPrinciples = [
  [
    "01",
    "Start with the problem",
    "We first identify what the business actually needs to improve—not what technology happens to be available.",
  ],
  [
    "02",
    "Design the experience",
    "We map what users need to understand, feel and do before turning the idea into screens.",
  ],
  [
    "03",
    "Build the foundation",
    "The final product is developed for speed, reliability, maintainability and future growth.",
  ],
  [
    "04",
    "Connect it to growth",
    "A digital product should support marketing, SEO, sales or operations—not sit separately from them.",
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

function Label({
  children,
  dark = false,
}: {
  children: React.ReactNode;
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

/* =========================================================
   PROJECT IMAGE
========================================================= */

function ProjectVisual({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  return (
    <div className="group relative min-h-[260px] overflow-hidden border-b border-black/10 bg-[#f2f2ef] lg:border-b-0 lg:border-r">
      <Image
        src={`/work/${index + 1}.png`}
        alt={`${title} project preview`}
        width={1600}
        height={1100}
        priority={index === 0}
        className="h-full min-h-[260px] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.035]"
      />

      {/* Image overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/[0.02] transition duration-500 group-hover:bg-transparent" />

      {/* Project number */}
      <div className="absolute left-5 top-5 flex items-center gap-2 bg-white/90 px-3 py-2 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[#e34a27]" />
        <span className="text-[9px] uppercase tracking-[0.16em] text-neutral-500">
          Project {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5] text-[#202221] selection:bg-[#e34a27] selection:text-white">

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl pb-16 pt-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">

          <div>
            <Reveal direction="up" distance={18}>
              <Label>Selected Work</Label>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.08}
              distance={38}
              duration={0.8}
            >
              <h1 className="max-w-5xl text-5xl font-medium leading-[.94] tracking-[-.065em] sm:text-6xl lg:text-[78px]">
                We Build Digital
                <br />
                <span className="text-[#e34a27]">
                  Products With Purpose.
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
              Websites, software and digital experiences built around real
              business problems. Every project starts with what needs to
              change—not simply what needs to be built.
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
              "Business websites",
              "Custom software",
              "Digital products",
              "Growth experiences",
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
          SELECTED PROJECTS
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">

        <Reveal direction="up" distance={18}>
          <Label>01 · Selected projects</Label>
        </Reveal>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <Reveal
              key={project.number}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.08}
              distance={35}
              amount={0.12}
            >
              <article className="group overflow-hidden border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">

                <div className="grid lg:grid-cols-[.9fr_1.1fr]">

                  {/* IMAGE */}
                  <ProjectVisual
                    index={i}
                    title={project.title}
                  />

                  {/* CONTENT */}
                  <div className="flex flex-col justify-between p-7 sm:p-10">

                    <div>

                      <Reveal
                        direction="up"
                        distance={15}
                        delay={0.08}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] uppercase tracking-[.18em] text-[#e34a27]">
                            {project.number} · {project.category}
                          </span>

                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            <Arrow />
                          </span>
                        </div>
                      </Reveal>

                      <Reveal
                        direction="up"
                        distance={20}
                        delay={0.14}
                      >
                        <h2 className="mt-12 max-w-2xl text-2xl font-medium leading-[1.04] tracking-[-.035em] sm:text-3xl">
                          {project.title}
                        </h2>
                      </Reveal>

                      <Reveal
                        direction="up"
                        distance={18}
                        delay={0.2}
                      >
                        <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
                          {project.description}
                        </p>
                      </Reveal>

                    </div>

                    {/* RESULT */}
                    <Reveal
                      direction="up"
                      distance={15}
                      delay={0.26}
                    >
                      <div className="mt-10 border-t border-black/10 pt-5">

                        <div className="text-[9px] uppercase tracking-[.16em] text-neutral-400">
                          What changed
                        </div>

                        <div className="mt-2 text-sm font-medium">
                          {project.result}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-black/10 px-3 py-1.5 text-[9px] uppercase tracking-[.12em] text-neutral-500 transition-colors duration-300 group-hover:border-[#e34a27]/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </Reveal>

                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================
          OUR STANDARD
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-4 lg:grid-cols-[.78fr_1.22fr]">

          <Reveal direction="left" distance={35}>
            <div className="h-full bg-[#292c2b] p-8 text-white sm:p-10">

              <Label dark>
                02 · Our standard
              </Label>

              <h2 className="max-w-lg text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">
                The output is not the website. The output is the result.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
                A new website is useful when it improves the experience around
                the business. A custom system is useful when it removes
                friction. A campaign page is useful when it creates action.
              </p>

            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {projectPrinciples.map(([num, title, text], index) => (
              <Reveal
                key={num}
                direction="up"
                delay={index * 0.07}
                distance={25}
              >
                <article className="h-full border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">

                  <div className="text-[9px] text-[#e34a27]">
                    {num}
                  </div>

                  <h3 className="mt-9 text-lg font-medium">
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
          COMMON THREAD
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal distance={25}>
          <div className="border-y border-black/10 py-12">

            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">

              <Reveal direction="left" distance={30}>
                <div>
                  <Label>03 · The common thread</Label>

                  <h2 className="text-3xl font-medium tracking-[-.045em] sm:text-4xl">
                    Different projects.
                    <br />
                    Same focus.
                  </h2>
                </div>
              </Reveal>

              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  ["Clarity", "Make the value obvious."],
                  ["Confidence", "Make the choice easier."],
                  ["Action", "Make the next step clear."],
                ].map(([title, text], index) => (
                  <Reveal
                    key={title}
                    direction="up"
                    delay={index * 0.08}
                    distance={20}
                  >
                    <div className="h-full border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40">

                      <h3 className="text-sm font-medium">
                        {title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-neutral-500">
                        {text}
                      </p>

                    </div>
                  </Reveal>
                ))}
              </div>

            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">

        <Reveal direction="up" distance={35} duration={0.8}>
          <div className="relative overflow-hidden bg-[#e34a27] p-8 text-white sm:p-12 lg:p-14">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />

            <Reveal direction="up" distance={15}>
              <Label dark>
                04 · Your project
              </Label>
            </Reveal>

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

              <Reveal direction="left" distance={25}>
                <div>

                  <h2 className="max-w-3xl text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl lg:text-6xl">
                    Your project could be next.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/75">
                    If you have a business problem, product idea or digital
                    opportunity, let's work backwards from the result you want.
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
                  Start a project
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