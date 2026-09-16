import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  { label: "Web Development", href: "/services/web-development-service" },
  { label: "Custom Software", href: "/#services" },
  { label: "App Development", href: "/#services" },
  { label: "Digital Marketing", href: "/#services" },
  { label: "SEO", href: "/#services" },
  { label: "Social Media", href: "/#services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#292c2b] text-white">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* CTA */}
        <div className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
              <span className="h-px w-7 bg-[#e34a27]" />
              Start a project
            </div>

            <h2 className="max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Have a digital project in mind?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">
              Tell us what you are building, what is not working or what you want your
              digital presence to achieve.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-[#e34a27] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
            >
              Start the conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <a
            href="mailto:contact@refinix.in"
            className="text-sm text-white/60 transition hover:text-white"
          >
            contact@refinix.in
          </a>
        </div>

        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold tracking-[-0.06em]"
            >
                 <Image src="/Light-Logo.png" alt="Refinix Solutions" width={100} height={100} />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
              Digital development and growth solutions for businesses that want to
              build better, move faster and grow online.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Web", "Software", "Apps", "SEO", "Growth"].map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-white/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-[9px] uppercase tracking-[0.18em] text-white/30">
              Services
            </div>

            <nav className="flex flex-col gap-3">
              {services.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-5 text-[9px] uppercase tracking-[0.18em] text-white/30">
              Company
            </div>

            <nav className="flex flex-col gap-3">
              {company.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-white/55 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 text-[9px] uppercase tracking-[0.15em] text-white/30">
              India · Serving globally
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-4 py-6 text-[9px] uppercase tracking-[0.14em] text-white/30 sm:flex-row">
          <span>© {new Date().getFullYear()} Refinix Solutions. All rights reserved.</span>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}