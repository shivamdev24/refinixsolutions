import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "Services", href: "services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f5]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-[92%] max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Refinix Solutions home"
          className="text-lg font-semibold tracking-[-0.05em]"
        >
       

          <Image src="/Dark-Logo.png" alt="Refinix Solutions" width={100} height={100} />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[10px] uppercase tracking-[0.16em] text-neutral-500 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/services/web-development-service"
            className="transition-colors hover:text-black"
          >
            Web Development
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 bg-[#e34a27] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#e34a27] md:flex"
        >
          Start a project
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            aria-label="Open navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white md:hidden"
          >
            <Menu className="h-4 w-4" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[88%] max-w-sm border-l border-black/10 bg-[#f7f7f5] p-0"
          >
            <SheetHeader className="border-b border-black/10 px-6 py-5 text-left">
              <SheetTitle className="text-left text-lg font-semibold tracking-[-0.05em]">
                refinix<span className="text-[#e34a27]">.</span>
              </SheetTitle>
            </SheetHeader>

            <div className="flex h-[calc(100%-81px)] flex-col justify-between px-6 py-7">
              <nav className="flex flex-col">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between border-b border-black/10 py-5 text-2xl font-medium tracking-[-0.04em]"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-5 w-5 text-[#e34a27]" />
                  </Link>
                ))}

                <Link
                  href="/services/web-development-service"
                  className="flex items-center justify-between border-b border-black/10 py-5 text-2xl font-medium tracking-[-0.04em]"
                >
                  <span>Web Development</span>
                  <ArrowRight className="h-5 w-5 text-[#e34a27]" />
                </Link>
              </nav>

              <div>
                <div className="mb-4 text-[9px] uppercase tracking-[0.18em] text-neutral-400">
                  Have a digital project?
                </div>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 bg-[#e34a27] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-black"
                >
                  Start a project
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href="mailto:contact@refinix.in"
                  className="mt-4 block text-center text-[10px] uppercase tracking-[0.14em] text-neutral-500"
                >
                  contact@refinix.in
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}