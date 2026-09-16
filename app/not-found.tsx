import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#f7f7f5] text-[#202221]">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] w-[92%] max-w-7xl items-center py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div>
            <div className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              <span className="h-px w-7 bg-[#e34a27]" />
              Page not found
            </div>

            <div className="overflow-hidden">
              <h1 className="text-[clamp(5rem,14vw,12rem)] font-semibold leading-[0.78] tracking-[-0.08em]">
                404
              </h1>
            </div>

            <h2 className="mt-10 max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Looks like this page went somewhere else.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              The page you are looking for doesn't exist, may have been moved,
              or the URL may be incorrect.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 bg-[#202221] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#e34a27]"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to home
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 border border-[#202221]/15 bg-white px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-[#e34a27] hover:text-[#e34a27]"
              >
                Explore services
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-[460px] ml-auto border border-[#202221]/10 bg-white p-5">
              <div className="flex h-full flex-col justify-between border border-[#202221]/10 p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                    Refinix
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#e34a27]" />
                </div>

                <div>
                  <div className="mb-5 h-px w-12 bg-[#e34a27]" />

                  <p className="max-w-xs text-2xl font-medium leading-tight tracking-[-0.04em]">
                    We build digital experiences that lead somewhere.
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <span className="text-xs text-neutral-400">
                    404 / ROUTE NOT FOUND
                  </span>

                  <ArrowRight
                    size={28}
                    strokeWidth={1.5}
                    className="-rotate-45 text-[#e34a27]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
