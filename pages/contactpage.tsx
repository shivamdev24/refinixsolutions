"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const projectTypes = [
  "New business website",
  "Website redesign",
  "Landing page",
  "Web application",
  "Custom software",
  "Mobile app",
  "SEO / digital growth",
  "Something else",
];

const reasons = [
  [
    "01",
    "Tell us the outcome",
    "What would you like this project to help your business achieve?",
  ],
  [
    "02",
    "Give us the context",
    "Share what you have today, what is not working and anything already planned.",
  ],
  [
    "03",
    "We'll map the next step",
    "We will review the requirements and recommend the most practical way forward.",
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

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(formData.get("project_type") || "").trim();
    const message = String(formData.get("message") || "").trim();

    /*
     * Google Forms fields
     *
     * Name    -> entry.709070632
     * business-> entry.771189898
     * Phone   -> entry.997815316
     * Email   -> entry.745057681
     * Service -> entry.621678844
     * Message -> entry.293471818
     */

    const googleFormData = new URLSearchParams();

    googleFormData.append("entry.709070632", name);
    googleFormData.append("entry.709070632", business);
    googleFormData.append("entry.997815316", phone);
    googleFormData.append("entry.745057681", email);
    googleFormData.append("entry.621678844", projectType);

    // Business name is included in the message
    // because the current Google Form has no separate
    // business-name field.
    const fullMessage = [
      business ? `Business: ${business}` : "",
      message ? `Project details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    googleFormData.append("entry.293471818", fullMessage);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfnWbwhjCFf4ERUNONkoEFCjHP9KD_QilCCRQ-p045H62cdKw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: googleFormData.toString(),
        },
      );

      /*
       * Google Forms does not expose its response when
       * using no-cors, so we cannot inspect the response.
       *
       * If the request reaches this point, we show the
       * success state just like the FloatingMessage form.
       */

      setSubmitted(true);
      form.reset();

      // Open WhatsApp after successful submission
      setTimeout(() => {
        const whatsappMessage = [
          "Hi Refinix Solutions, I just submitted a project enquiry.",
          "",
          `Name: ${name}`,
          business ? `Business: ${business}` : "",
          `Project: ${projectType}`,
        ]
          .filter(Boolean)
          .join("\n");

        window.open(
          `https://wa.me/919412190210?text=${encodeURIComponent(
            whatsappMessage,
          )}`,
          "_blank",
          "noopener,noreferrer",
        );
      }, 700);
    } catch (err) {
      console.error("Google Form submission error:", err);

      setError(
        "Something went wrong while sending your enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  /*
   * SUCCESS STATE
   */
  if (submitted) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center border border-black/10 bg-white p-8 text-center sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e34a27] text-white">
          <Check className="h-6 w-6" />
        </div>

        <h2 className="mt-7 text-3xl font-medium tracking-[-.045em]">
          Enquiry received.
        </h2>

        <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">
          Thanks for reaching out. We have received your project details and
          will get back to you shortly.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setError("");
          }}
          className="group mt-8 flex items-center gap-2 border border-black px-5 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
        >
          Send another enquiry
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    );
  }

  /*
   * FORM
   */
  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black/10 bg-white p-7 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:p-10"
    >
      {/* FORM HEADER */}
      <Reveal direction="up" distance={18}>
        <div className="mb-9 flex items-center justify-between border-b border-black/10 pb-5">
          <div>
            <div className="text-[9px] uppercase tracking-[.18em] text-[#e34a27]">
              Project enquiry
            </div>

            <h2 className="mt-2 text-2xl font-medium tracking-[-.035em]">
              Let&apos;s talk.
            </h2>
          </div>

          <span className="text-[9px] uppercase tracking-[.15em] text-neutral-400">
            01 / 01
          </span>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* NAME */}
        <Reveal direction="up" delay={0.05} distance={18}>
          <label className="block">
            <span className="text-[9px] uppercase tracking-[.16em] text-neutral-500">
              Your name *
            </span>

            <input
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-neutral-300 focus:border-[#e34a27]"
            />
          </label>
        </Reveal>

        {/* BUSINESS */}
        <Reveal direction="up" delay={0.09} distance={18}>
          <label className="block">
            <span className="text-[9px] uppercase tracking-[.16em] text-neutral-500">
              Business name
            </span>

            <input
              name="business"
              autoComplete="organization"
              placeholder="Company / brand"
              className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-neutral-300 focus:border-[#e34a27]"
            />
          </label>
        </Reveal>

        {/* EMAIL */}
        <Reveal direction="up" delay={0.13} distance={18}>
          <label className="block">
            <span className="text-[9px] uppercase tracking-[.16em] text-neutral-500">
              Email *
            </span>

            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-neutral-300 focus:border-[#e34a27]"
            />
          </label>
        </Reveal>

        {/* PHONE */}
        <Reveal direction="up" delay={0.17} distance={18}>
          <label className="block">
            <span className="text-[9px] uppercase tracking-[.16em] text-neutral-500">
              Phone
            </span>

            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="+91 ..."
              className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-300 placeholder:text-neutral-300 focus:border-[#e34a27]"
            />
          </label>
        </Reveal>

        {/* PROJECT TYPE */}
        <Reveal
          direction="up"
          delay={0.21}
          distance={18}
          className="sm:col-span-2"
        >
          <label className="block">
            <span className="text-[9px] uppercase tracking-[.16em] text-neutral-500">
              What do you need? *
            </span>

            <select
              name="project_type"
              required
              defaultValue=""
              className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none transition-colors duration-300 focus:border-[#e34a27]"
            >
              <option value="" disabled>
                Select a project type
              </option>

              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </Reveal>

        {/* MESSAGE */}
        <Reveal
          direction="up"
          delay={0.25}
          distance={18}
          className="sm:col-span-2"
        >
          <label className="block">
            <span className="text-[9px] uppercase tracking-[.16em] text-neutral-500">
              Tell us about the project *
            </span>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="What are you trying to achieve? What do you have today? What would success look like?"
              className="mt-2 w-full resize-none border-b border-black/15 bg-transparent px-0 py-3 text-sm leading-6 outline-none transition-colors duration-300 placeholder:text-neutral-300 focus:border-[#e34a27]"
            />
          </label>
        </Reveal>
      </div>

      {/* ERROR */}
      {error && (
        <Reveal direction="up" distance={10}>
          <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-600">
            {error}
          </div>
        </Reveal>
      )}

      {/* SUBMIT */}
      <Reveal direction="up" delay={0.3} distance={20}>
        <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-[10px] leading-5 text-neutral-400">
            By submitting this form, you are asking Refinix Solutions to contact
            you about your project.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-fit items-center gap-2 bg-[#e34a27] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[#e34a27]"
          >
            {isSubmitting ? (
              <>
                Sending
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                Send enquiry
                <Arrow />
              </>
            )}
          </button>
        </div>
      </Reveal>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5] text-[#202221] selection:bg-[#e34a27] selection:text-white">
      {/* HERO */}
      <section className="mx-auto w-[92%] max-w-7xl pb-14 pt-20 sm:pt-28 lg:pb-20 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <Reveal direction="up" distance={18}>
              <Label>Contact Refinix Solutions</Label>
            </Reveal>

            <Reveal direction="up" delay={0.08} distance={40} duration={0.8}>
              <h1 className="max-w-4xl text-5xl font-medium leading-[.94] tracking-[-.065em] sm:text-6xl lg:text-[76px]">
                Have a Digital
                <br />
                <span className="text-[#e34a27]">Project in Mind?</span>
              </h1>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.15} distance={30}>
            <div>
              <p className="max-w-xl text-base leading-7 text-neutral-500">
                Tell us what you are building, what is not working or where you
                want to go next. You do not need a perfect brief—we can figure
                out the right questions together.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[.15em] text-neutral-400">
                <a
                  href="mailto:contact@refinix.in"
                  className="transition-colors duration-300 hover:text-[#e34a27]"
                >
                  contact@refinix.in
                </a>

                <span>Web · Software · Growth</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.25} distance={18}>
          <div className="mt-14 grid border-y border-black/10 py-4 text-center text-[9px] uppercase tracking-[.18em] text-neutral-500 sm:grid-cols-4">
            {[
              "Tell us the problem",
              "Share the goal",
              "Get a practical plan",
              "Build what matters",
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

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24"
      >
        <div className="grid gap-4 lg:grid-cols-[.72fr_1.28fr]">
          {/* LEFT PANEL */}
          <Reveal direction="left" distance={35}>
            <div className="h-full bg-[#292c2b] p-8 text-white sm:p-10">
              <Reveal direction="up" distance={15}>
                <Label dark>01 · Start here</Label>
              </Reveal>

              <Reveal direction="up" delay={0.08} distance={25}>
                <h2 className="max-w-md text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">
                  Good projects start with a good conversation.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.15} distance={20}>
                <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
                  The more context you share, the better we can understand the
                  opportunity. But keep it simple—there is no need to write a
                  formal proposal.
                </p>
              </Reveal>

              <div className="mt-10 space-y-5">
                {reasons.map(([num, title, text], index) => (
                  <Reveal
                    key={num}
                    direction="left"
                    delay={0.2 + index * 0.08}
                    distance={20}
                    amount={0.2}
                  >
                    <div className="border-t border-white/10 pt-5 transition-colors duration-300 hover:border-[#e34a27]/50">
                      <div className="flex gap-4">
                        <span className="text-[9px] text-[#e34a27]">{num}</span>

                        <div>
                          <h3 className="text-sm font-medium">{title}</h3>

                          <p className="mt-1 text-xs leading-5 text-white/40">
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

          {/* FORM */}
          <Reveal direction="right" delay={0.1} distance={35}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <div className="grid gap-3 md:grid-cols-3">
          <Reveal direction="up" distance={25}>
            <a
              href="mailto:contact@refinix.in"
              className="group block h-full border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/50 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)]"
            >
              <Label>Email</Label>

              <h3 className="text-xl font-medium transition-colors duration-300 group-hover:text-[#e34a27]">
                contact@refinix.in
              </h3>

              <p className="mt-2 text-sm text-neutral-500">
                Send us your project details directly.
              </p>
            </a>
          </Reveal>

          <Reveal direction="up" delay={0.08} distance={25}>
            <div className="h-full border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40">
              <Label>Services</Label>

              <h3 className="text-xl font-medium">Web · Software · Growth</h3>

              <p className="mt-2 text-sm text-neutral-500">
                From websites to custom digital systems.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.16} distance={25}>
            <div className="h-full border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e34a27]/40">
              <Label>Projects</Label>

              <h3 className="text-xl font-medium">New or existing</h3>

              <p className="mt-2 text-sm text-neutral-500">
                We can build from scratch or improve what you already have.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL QUESTION */}
      <section className="mx-auto w-[92%] max-w-7xl py-16 lg:py-24">
        <Reveal direction="up" distance={30}>
          <div className="border-y border-black/10 py-12 text-center">
            <Reveal direction="up" distance={18}>
              <Label>02 · One final question</Label>
            </Reveal>

            <Reveal direction="up" delay={0.1} distance={30} duration={0.8}>
              <h2 className="mx-auto max-w-4xl text-4xl font-medium leading-[.98] tracking-[-.055em] sm:text-5xl lg:text-6xl">
                What would change for your business if your digital presence
                actually worked?
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.18} distance={20}>
              <a
                href="#contact-form"
                className="group mt-8 inline-flex items-center gap-2 border border-black bg-white px-5 py-3.5 text-[10px] font-medium uppercase tracking-[.16em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
              >
                Tell us
                <Arrow />
              </a>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto w-[92%] max-w-7xl pb-8 pt-16 lg:pt-24">
        <Reveal direction="up" distance={35} duration={0.8}>
          <div className="bg-[#292c2b] p-8 text-white sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Reveal direction="up" distance={15}>
                  <Label dark>03 · Refinix Solutions</Label>
                </Reveal>

                <Reveal direction="left" delay={0.08} distance={25}>
                  <h2 className="max-w-3xl text-4xl font-medium leading-[.98] tracking-[-.05em] sm:text-5xl">
                    Let&apos;s build something useful.
                  </h2>
                </Reveal>

                <Reveal direction="up" delay={0.15} distance={20}>
                  <a
                    href="mailto:contact@refinix.in"
                    className="group mt-7 inline-flex items-center gap-2 bg-[#e34a27] px-5 py-3.5 text-[10px] uppercase tracking-[.16em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                  >
                    contact@refinix.in
                    <Arrow />
                  </a>
                </Reveal>
              </div>

              <Reveal direction="right" delay={0.2} distance={25}>
                <div className="text-[9px] uppercase tracking-[.15em] text-white/40">
                  <div>Web development</div>
                  <div className="mt-3">Custom software</div>
                  <div className="mt-3">Apps</div>
                  <div className="mt-3">Digital growth</div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
