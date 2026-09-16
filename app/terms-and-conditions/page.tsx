import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions ",
  description:
    "Read the Terms and Conditions governing the use of the Refinix Solutions website and our digital services.",
};
const sections = [
  {
    title: "1. Introduction",
    content: (
      <p>
        These Terms and Conditions govern your use of the Refinix Solutions
        website and the services provided by Refinix Solutions. By accessing
        our website or engaging our services, you agree to be bound by these
        terms.
      </p>
    ),
  },
  {
    title: "2. Our Services",
    content: (
      <>
        <p>
          Refinix Solutions provides digital services including, but not
          limited to:
        </p>

        <ul>
          <li>Website design and development.</li>
          <li>Web and mobile application development.</li>
          <li>Custom software development.</li>
          <li>Digital marketing.</li>
          <li>Search engine optimization (SEO).</li>
          <li>Social media management.</li>
        </ul>

        <p>
          The exact scope, deliverables, timeline and pricing of a project will
          be agreed upon between Refinix Solutions and the client before work
          begins.
        </p>
      </>
    ),
  },
  {
    title: "3. Project Scope",
    content: (
      <p>
        Project requirements should be clearly communicated and agreed upon
        before development or other work begins. Requests that fall outside
        the agreed scope may require additional time, resources and fees.
        Changes to project scope may affect the original delivery timeline.
      </p>
    ),
  },
  {
    title: "4. Payments",
    content: (
      <p>
        Payment terms, project fees and applicable milestones will be agreed
        upon before or during project commencement. Unless otherwise agreed in
        writing, work may be paused if required payments are overdue. Any
        applicable taxes, third-party charges, hosting costs, domain fees,
        software licenses or external service costs may be charged separately.
      </p>
    ),
  },
  {
    title: "5. Client Responsibilities",
    content: (
      <>
        <p>The client is responsible for providing:</p>

        <ul>
          <li>Accurate project requirements and information.</li>
          <li>Required content, images, logos and other materials.</li>
          <li>Timely feedback and approvals.</li>
          <li>Access to required third-party accounts or services.</li>
        </ul>

        <p>
          Delays in receiving required information, feedback or approvals may
          result in changes to the project timeline.
        </p>
      </>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: (
      <p>
        Ownership of final project deliverables will depend on the agreement
        between Refinix Solutions and the client. Unless explicitly transferred
        or otherwise agreed in writing, Refinix Solutions retains ownership of
        its pre-existing tools, frameworks, reusable components, processes,
        code libraries and other intellectual property used to create a
        project.
      </p>
    ),
  },
  {
    title: "7. Third-Party Services",
    content: (
      <p>
        Projects may depend on third-party services such as hosting providers,
        domain registrars, payment gateways, APIs, plugins, analytics
        platforms or other software. Refinix Solutions is not responsible for
        outages, pricing changes, policy changes, security incidents or other
        issues caused by third-party providers.
      </p>
    ),
  },
  {
    title: "8. Website Content",
    content: (
      <p>
        Information provided on the Refinix Solutions website is intended for
        general informational purposes. While we aim to keep information
        accurate and current, we do not guarantee that every piece of website
        content will always be complete, accurate or up to date.
      </p>
    ),
  },
  {
    title: "9. Warranties and Limitations",
    content: (
      <p>
        We aim to deliver services professionally and according to the agreed
        project requirements. However, digital products and online services
        may be affected by factors outside our control, including third-party
        infrastructure, browser changes, hosting issues, security threats and
        changes to external platforms.
      </p>
    ),
  },
  {
    title: "10. Cancellation and Termination",
    content: (
      <p>
        Either party may request termination of a project subject to the
        applicable project agreement. Fees for work already completed,
        approved expenses and non-refundable third-party costs may remain
        payable. Specific cancellation terms may vary by project and will be
        communicated in the relevant proposal or agreement.
      </p>
    ),
  },
  {
    title: "11. Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, Refinix Solutions will not
        be liable for indirect, incidental, special or consequential losses
        arising from the use of our website or services, including loss of
        profits, revenue, data or business opportunities.
      </p>
    ),
  },
  {
    title: "12. Changes to These Terms",
    content: (
      <p>
        Refinix Solutions may update these Terms and Conditions when necessary
        to reflect changes to our services, business practices or applicable
        requirements. Updated terms will be published on this page.
      </p>
    ),
  },
  {
    title: "13. Governing Law",
    content: (
      <p>
        These Terms and Conditions shall be governed by and interpreted in
        accordance with the applicable laws of India. Any disputes will be
        subject to the jurisdiction of the appropriate courts having
        jurisdiction over the matter.
      </p>
    ),
  },
  {
    title: "14. Contact",
    content: (
      <>
        <p>
          If you have questions regarding these Terms and Conditions, contact
          Refinix Solutions:
        </p>

        <div className="mt-5 border border-black/10 bg-white p-5">
          <p className="font-medium text-[#202221]">Refinix Solutions</p>
          <p className="mt-2">Email: contact@refinix.in</p>
          <p>Website: refinix.in</p>
        </div>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#202221]">


      {/* HERO */}
      <section className="mx-auto w-[92%] max-w-7xl pb-16 pt-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
            <span className="h-px w-7 bg-[#e34a27]" />
            Legal
          </div>

          <h1 className="text-5xl font-medium leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-[78px]">
            Terms &
            <br />
            <span className="text-[#e34a27]">Conditions.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500">
            These terms explain the rules and conditions that apply when using
            the Refinix Solutions website or engaging our digital services.
          </p>

          <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-neutral-400">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-[92%] max-w-5xl pb-20 lg:pb-28">
        <div className="border-t border-black/10">
          {sections.map((section) => (
            <article
              key={section.title}
              className="grid gap-6 border-b border-black/10 py-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16"
            >
              <h2 className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                {section.title}
              </h2>

              <div className="space-y-5 text-sm leading-7 text-neutral-500">
                {section.content}
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] transition hover:text-[#e34a27]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>
      </section>

    </main>
  );
}