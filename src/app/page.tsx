// src/app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5minus5 — Design & Development",
  description: "Understated digital design & development.",
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-700/40 bg-zinc-800/40 px-3 py-1 text-sm text-zinc-200">
    {children}
  </span>
);

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100">
      {/* subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,120,0.15),transparent_35%),radial-gradient(circle_at_70%_10%,rgba(120,120,120,0.08),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(120,120,120,0.12),transparent_35%)]"
      />

      {/* top bar */}
      <header className="sticky top-0 z-20 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a className="font-semibold tracking-wide text-zinc-200">5minus5</a>
          <nav className="hidden gap-6 md:flex">
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Work</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Studio</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100">Contact</a>
          </nav>
          <a className="rounded-full border border-zinc-700/50 px-3 py-1 text-sm text-zinc-200 hover:bg-zinc-800/60">
            Start a project
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-20 md:pb-24 md:pt-28">
        <div className="mb-6 flex flex-wrap gap-2">
          <Pill>Brand</Pill>
          <Pill>Web</Pill>
          <Pill>Product</Pill>
        </div>

        <h1 className="text-center text-[clamp(3rem,12vw,7rem)] font-extrabold tracking-tight text-white">
            5minus5
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          We craft minimal, durable interfaces and sites—focused on clarity,
          performance, and a sense of calm.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-full bg-zinc-100 px-5 py-2 font-medium text-zinc-900 hover:bg-white">
            View work
          </a>
          <a className="rounded-full border border-zinc-700/60 px-5 py-2 text-zinc-200 hover:bg-zinc-800/50">
            Get in touch
          </a>
        </div>
      </section>

      {/* marquee keywords */}
      <section className="border-y border-zinc-800/60">
        <div className="relative overflow-hidden">
          <div className="animate-[marquee_26s_linear_infinite] whitespace-nowrap py-5 text-zinc-400">
            <span className="mx-6">Strategy</span>
            <span className="mx-6">Brand Systems</span>
            <span className="mx-6">Design</span>
            <span className="mx-6">Development</span>
            <span className="mx-6">Accessibility</span>
            <span className="mx-6">Performance</span>
            {/* repeat for seamless loop */}
            <span className="mx-6">Strategy</span>
            <span className="mx-6">Brand Systems</span>
            <span className="mx-6">Design</span>
            <span className="mx-6">Development</span>
            <span className="mx-6">Accessibility</span>
            <span className="mx-6">Performance</span>
          </div>
        </div>
      </section>

      {/* work grid */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl text-zinc-100 md:text-3xl">Selected Work</h2>
          <a className="text-sm text-zinc-400 hover:text-zinc-100">All projects</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Atlas", tag: "SaaS", color: "from-zinc-700 to-zinc-900" },
            { title: "Orchard", tag: "E-commerce", color: "from-zinc-600 to-zinc-900" },
            { title: "Northline", tag: "Brand", color: "from-zinc-700 to-zinc-900" },
            { title: "Halo", tag: "Product", color: "from-zinc-600 to-zinc-900" },
          ].map((card, i) => (
            <a
              key={i}
              className="group overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30"
            >
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${card.color} transition-transform duration-500 group-hover:scale-[1.02]`}
                aria-hidden
              />
              <div className="flex items-center justify-between p-4">
                <div>
                  <div className="text-lg text-zinc-100">{card.title}</div>
                  <div className="text-sm text-zinc-400">{card.tag}</div>
                </div>
                <div className="rounded-full border border-zinc-700/60 px-3 py-1 text-xs text-zinc-300">
                  Case study
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* statement */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-7 md:p-10">
          <p className="text-balance text-xl leading-relaxed text-zinc-300 md:text-2xl">
            We believe the best work is quiet—clear structure, careful type,
            and confident negative space. No gloss, just the essentials done well.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-800/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} 5minus5</p>
          <div className="flex gap-4 text-sm text-zinc-400">
            <a className="hover:text-zinc-100">Instagram</a>
            <a className="hover:text-zinc-100">Dribbble</a>
            <a className="hover:text-zinc-100">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
