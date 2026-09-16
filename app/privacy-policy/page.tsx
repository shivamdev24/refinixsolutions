import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy ",
  description:
    "Read the Privacy Policy for Refinix Solutions and learn how information submitted through our website is collected, used and protected.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you interact with Refinix Solutions, we may collect information
          that you voluntarily provide to us, such as your name, email address,
          phone number, company name, project details and other information
          submitted through our website or contact forms.
        </p>
        <p>
          We may also automatically collect limited technical information,
          including browser type, device information, IP address, pages visited
          and general website usage data.
        </p>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We may use collected information to:</p>

        <ul>
          <li>Respond to your enquiries and project requests.</li>
          <li>Provide and manage our services.</li>
          <li>Prepare proposals, estimates and project communications.</li>
          <li>Improve our website, services and user experience.</li>
          <li>Communicate important updates regarding an ongoing project.</li>
          <li>Prevent fraud, abuse or unauthorized activity.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Information Sharing",
    content: (
      <p>
        Refinix Solutions does not sell or rent your personal information. We
        may share information with trusted service providers when necessary to
        operate our business, deliver services or maintain our website. Such
        parties are expected to handle information appropriately and only for
        the purposes for which it was provided.
      </p>
    ),
  },
  {
    title: "4. Cookies and Analytics",
    content: (
      <p>
        Our website may use cookies, analytics tools or similar technologies to
        understand website traffic, improve functionality and measure
        performance. You can control or disable cookies through your browser
        settings, although some website features may not function properly as
        a result.
      </p>
    ),
  },
  {
    title: "5. Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect
        information from unauthorized access, misuse, alteration or disclosure.
        However, no method of transmitting or storing information online can be
        guaranteed to be completely secure.
      </p>
    ),
  },
  {
    title: "6. Data Retention",
    content: (
      <p>
        We retain information only for as long as reasonably necessary for the
        purpose for which it was collected, to provide our services, maintain
        business records, resolve disputes or comply with applicable legal
        obligations.
      </p>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites or services.
        Refinix Solutions is not responsible for the privacy practices,
        security or content of external websites. We recommend reviewing their
        respective privacy policies before providing personal information.
      </p>
    ),
  },
  {
    title: "8. Your Rights",
    content: (
      <p>
        Depending on applicable law, you may have rights relating to your
        personal information, including requesting access, correction or
        deletion of certain information. To make a privacy-related request,
        contact us using the details provided below.
      </p>
    ),
  },
  {
    title: "9. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, services or legal requirements. Any updated version
        will be published on this page with a revised effective date.
      </p>
    ),
  },
  {
    title: "10. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, you can contact Refinix Solutions at:
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

export default function PrivacyPolicyPage() {
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
            Privacy
            <br />
            <span className="text-[#e34a27]">Policy.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500">
            This Privacy Policy explains how Refinix Solutions collects, uses
            and protects information when you use our website or interact with
            our services.
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