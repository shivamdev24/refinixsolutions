

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Services | Web, App, Software & Marketing",
  description:
    "Explore Refinix Solutions' web development, custom software, app development, SEO, digital marketing and social media services for growing businesses.",
};

const services = [
  {
    number: "01",
    title: "Web Development",
    short: "Websites that turn your digital presence into a business asset.",
    description:
      "Fast, responsive and conversion-focused websites designed around your business goals—not just your brand.",
    href: "/services/web-development-service",
    features: [
      "Business websites",
      "Landing pages",
      "Corporate websites",
      "Website redesigns",
      "Next.js development",
      "CMS integration",
    ],
  },
  {
    number: "02",
    title: "Custom Software",
    short: "Software built around the way your business actually works.",
    description:
      "Replace repetitive processes, disconnected tools and manual workflows with software designed specifically for your operations.",
    href: "/contact",
    features: [
      "Business management systems",
      "Internal dashboards",
      "Automation",
      "API integrations",
      "Admin panels",
      "Custom platforms",
    ],
  },
  {
    number: "03",
    title: "App Development",
    short: "Digital products your customers can use anywhere.",
    description:
      "From customer-facing applications to internal tools, we build practical mobile and web apps around real user needs.",
    href: "/contact",
    features: [
      "Web applications",
      "Mobile applications",
      "MVP development",
      "Customer portals",
      "Admin dashboards",
      "Third-party integrations",
    ],
  },
  {
    number: "04",
    title: "Digital Marketing",
    short: "Turn your digital presence into a consistent source of demand.",
    description:
      "A practical growth approach combining content, campaigns and digital strategy around measurable business objectives.",
    href: "/contact",
    features: [
      "Digital strategy",
      "Campaign planning",
      "Content strategy",
      "Lead generation",
      "Conversion optimization",
      "Performance tracking",
    ],
  },
  {
    number: "05",
    title: "SEO",
    short: "Get discovered by people already searching for what you offer.",
    description:
      "Technical and content-focused SEO designed to build sustainable visibility and bring qualified organic traffic.",
    href: "/contact",
    features: [
      "Technical SEO",
      "On-page SEO",
      "Keyword strategy",
      "Local SEO",
      "Content optimization",
      "SEO audits",
    ],
  },
  {
    number: "06",
    title: "Social Media",
    short: "Build a social presence that supports the business.",
    description:
      "Consistent social media strategy and management designed to build visibility, trust and meaningful audience action.",
    href: "/contact",
    features: [
      "Content strategy",
      "Social media management",
      "Content planning",
      "Creative direction",
      "Platform optimization",
      "Performance reporting",
    ],
  },
];

const reasons = [
  {
    number: "01",
    title: "One digital partner",
    description:
      "Website, software, apps, SEO and marketing can work together instead of becoming disconnected projects.",
  },
  {
    number: "02",
    title: "Built around your business",
    description:
      "We start with your customers, workflow and objectives before deciding what needs to be built.",
  },
  {
    number: "03",
    title: "Focused on outcomes",
    description:
      "The goal isn't simply to launch something that looks good. It should create a useful business result.",
  },
];

function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500 ${className}`}
    >
      <span className="h-px w-7 bg-[#e34a27]" />
      {children}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5] text-[#202221] selection:bg-[#e34a27] selection:text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="mx-auto w-[92%] max-w-7xl pb-16 pt-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <Reveal direction="up" distance={18}>
              <Label>What We Do</Label>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.08}
              distance={35}
              duration={0.8}
            >
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-[78px]">
                Digital Services
                <br />
                <span className="text-[#e34a27]">Built For Growth.</span>
              </h1>
            </Reveal>
          </div>

          <div>
            <Reveal
              direction="up"
              delay={0.16}
              distance={25}
            >
              <p className="max-w-xl text-base leading-7 text-neutral-500">
                We design, develop and grow digital products that help
                businesses attract customers, operate better and move forward.
              </p>
            </Reveal>

            <Reveal
              direction="up"
              delay={0.24}
              distance={20}
            >
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 bg-black px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#e34a27]"
              >
                Discuss your project
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal
          direction="up"
          delay={0.32}
          distance={18}
        >
          <div className="mt-16 grid border-y border-black/10 py-4 text-center text-[9px] uppercase tracking-[0.18em] text-neutral-500 sm:grid-cols-3 lg:grid-cols-6">
            {["Web", "Software", "Apps", "Marketing", "SEO", "Social"].map(
              (item) => (
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

      {/* =========================================================
          SERVICE INTRO
      ========================================================== */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <Reveal direction="left" distance={30}>
            <div>
              <Label>01 · Our Services</Label>

              <h2 className="max-w-md text-3xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-4xl">
                Everything you need to build a stronger digital business.
              </h2>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} distance={30}>
            <div className="max-w-3xl space-y-5 text-base leading-7 text-neutral-500">
              <p>
                Your website should not exist separately from your marketing.
                Your software should not fight your operations. Your SEO should
                not be disconnected from your content.
              </p>

              <p>
                We approach digital as one connected system—bringing strategy,
                design, technology and growth together around the result your
                business needs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="mx-auto w-[92%] max-w-7xl py-10 lg:py-16">
        <div className="space-y-3">
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.06}
              distance={30}
              amount={0.12}
            >
              <article className="group border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.05)]">
                <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[0.12fr_0.7fr_1fr_0.15fr] lg:items-start">
                  {/* Number */}
                  <div>
                    <span className="text-3xl font-medium tracking-[-0.05em] text-neutral-300 transition-colors duration-300 group-hover:text-[#e34a27]">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.18em] text-[#e34a27]">
                      Service
                    </div>

                    <h2 className="mt-3 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                      {service.title}
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500">
                      {service.short}
                    </p>
                  </div>

                  {/* Details */}
                  <div>
                    <p className="text-sm leading-6 text-neutral-500">
                      {service.description}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <Reveal
                          key={feature}
                          direction="none"
                          delay={0.1 + featureIndex * 0.03}
                          distance={0}
                          amount={0.3}
                        >
                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.08em] text-neutral-500">
                            <Check className="h-3 w-3 shrink-0 text-[#e34a27]" />
                            {feature}
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className="flex h-10 w-10 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-[#e34a27] group-hover:bg-[#e34a27] group-hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================
          POSITIONING
      ========================================================== */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal direction="left" distance={35}>
            <div className="h-full bg-[#292c2b] p-8 text-white sm:p-10 lg:p-12">
              <Label className="text-white/50">
                02 · Why Refinix
              </Label>

              <h2 className="max-w-lg text-3xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-4xl">
                We don't just deliver services. We solve digital problems.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-6 text-white/50">
                The best digital work starts with understanding why something
                needs to exist and what it needs to accomplish.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal
                key={reason.number}
                direction="up"
                delay={index * 0.08}
                distance={25}
              >
                <article className="h-full border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
                  <span className="text-[9px] text-[#e34a27]">
                    {reason.number}
                  </span>

                  <h3 className="mt-9 text-lg font-medium">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE COMBINATION
      ========================================================== */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal distance={25}>
          <div className="border-y border-black/10 py-12">
            <Reveal direction="up" distance={15}>
              <Label>03 · Not sure what you need?</Label>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <Reveal direction="left" distance={30}>
                <h2 className="max-w-2xl text-3xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                  You don't need to figure out the solution before contacting
                  us.
                </h2>
              </Reveal>

              <Reveal direction="right" delay={0.1} distance={30}>
                <div>
                  <p className="text-sm leading-6 text-neutral-500">
                    Tell us what you are trying to achieve, what is currently
                    getting in the way and what you already have. We'll help
                    identify the right combination of services.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-7 inline-flex items-center gap-2 border border-black bg-white px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Tell us about your project
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CONVERSION CTA
      ========================================================== */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" distance={35} duration={0.8}>
          <div className="relative overflow-hidden bg-[#e34a27] p-8 text-white sm:p-12 lg:p-14">
            {/* Decorative element */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />

            <Label className="text-white/70">
              04 · Start a project
            </Label>

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <Reveal direction="left" distance={25}>
                <div>
                  <h2 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    Have a business problem worth solving?
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/75">
                    Start with the problem. We can work out the technology,
                    design and growth strategy together.
                  </p>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.15} distance={25}>
                <Link
                  href="/contact"
                  className="group flex w-fit items-center gap-2 bg-black px-6 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Start the conversation
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