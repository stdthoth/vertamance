import { Link } from "react-router";
import { useEffect, useState } from "react";

const leadership = [
  {
    name: "Oluwagbemi Michael, FMVR",
    role: "President & Chief Executive Officer",
    href: "/group-president-biography",
  },
  {
    name: "Damilola Agboola",
    role: "CFO / Treasurer",
    href: "/leadership/damilola-agboola",
  },
  {
    name: "Suleiman Olawale",
    role: "Chief of Staff",
    href: "/leadership/suleiman-olawale",
  },
  {
    name: "Peace James",
    role: "Group General Manager",
    href: "/leadership/peace-james",
  },
  {
    name: "Aramide Olugbenga Wyse",
    role: "Group Human Resource",
    href: "/leadership/aramide-olugbenga-wyse",
  },
  {
    name: "Engr Wale",
    role: "President & Chief Executive",
    href: "/leadership/engr-wale",
  },
];

const historyPanels = [
  {
    title: "Foundation and Focus",
    text: "Vertmance was built on a simple idea: create durable value through practical execution, patient capital, and disciplined partnerships. The company began by aligning operating businesses with long-term stewardship instead of short-term wins.",
    align: "text-left",
  },
  {
    title: "Group Expansion",
    text: "As the group grew, each business unit was shaped around clear accountability, sharper delivery standards, and a common operating rhythm. That structure keeps the wider portfolio aligned while still letting each unit move with precision.",
    align: "text-right",
  },
  {
    title: "Strategy for the Future",
    text: "Our strategy is centered on controlled expansion, resilient operations, and leadership depth. The aim is not just to participate in markets, but to build a group that can outperform with consistency across cycles.",
    align: "text-left",
  },
];

function NavLink({
  to,
  label,
  active,
}: {
  to: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`text-sm tracking-wide transition-all duration-200 py-2 relative ${
        active
          ? "font-bold text-[#121212]"
          : "font-medium text-[#6c6861] hover:text-[#121212]"
      }`}
    >
      {label}
      {active ? (
        <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#e57a00]" />
      ) : null}
    </Link>
  );
}

function DecorativeDot() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#b8b2ab] text-[#b8b2ab]">
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
    </span>
  );
}

export default function AboutUsScreen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-[#ededed] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <header className="relative overflow-hidden bg-[#dcdcdc]">
        <nav className="sticky top-0 z-40 border-b border-black/5 bg-[#dcdcdc]/90 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e67a11] shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
                <img
                  src="/Vertmance logo.png"
                  alt="Vertmance Logo"
                  className="h-12 w-12 object-contain"
                />
              </div>
            </Link>

            <div className="hidden items-center gap-10 md:flex">
              <NavLink to="/" label="Home" />
              <NavLink to="/about-us" label="About Us" active />
              <NavLink to="/#business" label="Business" />
              <NavLink to="/portfolio" label="Portfolio" />
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:comms@vertmance.com?subject=Vertmance%20Contact"
                className="rounded-[4px] bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 md:block"
              >
                Contact Us
              </a>

              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="rounded-md p-2 text-[#171412] md:hidden"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  ) : (
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-black/5 px-5 py-4 md:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className="rounded-lg bg-white/60 px-3 py-2 text-sm font-semibold text-[#171412]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/#business"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Business
                </Link>
                <Link
                  to="/portfolio"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <a
                  href="mailto:comms@vertmance.com?subject=Vertmance%20Contact"
                  className="mt-2 rounded-[4px] bg-black px-4 py-3 text-sm font-semibold text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ) : null}
        </nav>

        <div className="mx-auto flex min-h-[56vh] max-w-[1280px] items-start px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:min-h-[64vh] lg:pt-24">
          <div className="w-full rounded-[6px] bg-[#dcdcdc]">
            <div className="min-h-[52vh] rounded-[6px] border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
          </div>
        </div>
      </header>

      <main>
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[980px] px-5 text-center sm:px-8 lg:px-10">
            <div className="flex justify-center">
              <DecorativeDot />
            </div>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-[#2b2a28]">
              Our Mission &amp; Vision
            </p>
            <h1 className="mt-2 text-[2rem] font-black tracking-[-0.06em] text-[#ef7b11] sm:text-[2.7rem] lg:text-[3.2rem]">
              Nurturing a Vision
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-[0.86rem] leading-7 text-[#7d7871] sm:text-sm">
              Vertmance is built to create steady, long-term value across its
              operating businesses. We focus on disciplined leadership, durable
              systems, and practical execution so that each segment of the group
              can grow with clarity and consistency.
            </p>
          </div>
        </section>

        <section className="bg-[#dedede] py-14 sm:py-16">
          <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14 lg:px-10">
            <div className="h-[340px] rounded-[2px] border border-white/60 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)] sm:h-[390px]" />

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f897f]">
                Leadership
              </p>
              <h2 className="mt-4 text-[1.8rem] font-black leading-[1.02] tracking-[-0.05em] text-[#191715] sm:text-[2.35rem]">
                Michael Olubusayo Oluwagbemi, FMVR
              </h2>
              <Link
                to="/group-president-biography"
                className="mt-2 inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#7d7871] transition-colors hover:text-[#ef7b11]"
              >
                President &amp; Chief Executive Officer
              </Link>
              <div className="mt-4 h-px w-full bg-[#51493f]" />
              <p className="mt-5 max-w-xl text-[0.84rem] leading-7 text-[#7d7871] sm:text-sm">
                Vertmance is led with a hands-on approach that values structure,
                accountability, and measurable progress. The group is designed
                to build strong operating businesses while keeping a sharp eye
                on sustainable growth and execution quality.
              </p>
              <Link
                to="/#business"
                className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#ef7b11] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(239,123,17,0.18)] transition-transform hover:-translate-y-0.5"
              >
                Read more
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8f897f]">
                Executive Team
              </p>
              <h2 className="mt-2 text-[2rem] font-black tracking-[-0.05em] text-[#151312] sm:text-[2.6rem]">
                Executive Leadership
              </h2>
              <div className="mx-auto mt-3 h-[2px] w-24 bg-[#ef7b11]" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#7d7871]">
                A leadership group organized to keep strategy, operations,
                finance, and people aligned across the wider Vertmance
                portfolio.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((person) => (
                <article key={person.name} className="group">
                  <div className="h-[220px] rounded-[2px] bg-[#dedede] transition-transform duration-300 group-hover:-translate-y-1" />
                  <div className="px-2 pb-2 pt-4 text-center">
                    <Link
                      to={person.href}
                      className="text-[0.82rem] font-bold leading-5 text-[#151312] transition-colors hover:text-[#ef7b11]"
                    >
                      {person.name}
                    </Link>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-[#8b857d]">
                      {person.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f1f1f1] py-16 sm:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="flex items-center justify-center gap-3">
              <DecorativeDot />
            </div>
            <h2 className="mt-4 text-center text-[2rem] font-black tracking-[-0.05em] text-[#151312] sm:text-[2.6rem]">
              History &amp; Strategy
            </h2>

            <div className="mt-12 space-y-12">
              {historyPanels.map((panel, index) => {
                const reverse = index % 2 === 1;
                return (
                  <div
                    key={panel.title}
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div
                      className={
                        panel.align === "text-right"
                          ? "order-1 lg:text-right"
                          : "order-1"
                      }
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f897f]">
                        {index === 0
                          ? "Origins"
                          : index === 1
                            ? "Structure"
                            : "Direction"}
                      </p>
                      <h3 className="mt-2 text-[1.6rem] font-black tracking-[-0.05em] text-[#171412] sm:text-[2rem]">
                        {panel.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-[0.84rem] leading-7 text-[#7d7871] sm:text-sm">
                        {panel.text}
                      </p>
                    </div>
                    <div className="h-[240px] rounded-[2px] bg-[#d8d8d8] shadow-[0_10px_28px_rgba(0,0,0,0.04)] sm:h-[300px]" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#23180f] text-[#d4c8b8]">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.85fr_0.95fr_1fr]">
            <div>
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white">
                Company
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link
                    className="transition-colors hover:text-white"
                    to="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors hover:text-white"
                    to="/#business"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors hover:text-white"
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white">
                Businesses
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Oke-Keke",
                  "Pro-Explorer",
                  "Owonikoko Ranch & Farms",
                  "Xsky Bar & Lounge",
                  "Nassarawa Commodity",
                ].map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {}}
                      className="text-left transition-colors hover:text-white"
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/#business"
                    className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#ef7b11]"
                  >
                    View All Businesses
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white">
                General Inquiries
              </h3>
              <div className="mt-5 space-y-3 text-sm leading-7">
                <p>Call: 0814 XXX XXXX, 0913 XXX XXXX</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:comms@vertmance.com"
                    className="transition-colors hover:text-white"
                  >
                    comms@vertmance.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white">
                Newsletter
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-7">
                Join our weekly mailing list for updates and project highlights.
              </p>
              <form className="mt-4 flex max-w-sm overflow-hidden rounded-md border border-white/10 bg-white/5">
                <input
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#a69483] focus:outline-none"
                />
                <button
                  type="submit"
                  className="grid w-12 place-items-center bg-[#ef7b11] text-white"
                >
                  →
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-4 text-xs text-[#b6a894] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 All Rights Reserved.</p>
            <div className="flex flex-wrap gap-6">
              <button
                type="button"
                className="transition-colors hover:text-white"
              >
                Legal
              </button>
              <button
                type="button"
                className="transition-colors hover:text-white"
              >
                Privacy
              </button>
              <button
                type="button"
                className="transition-colors hover:text-white"
              >
                Site Map
              </button>
              <button
                type="button"
                className="transition-colors hover:text-white"
              >
                Terms &amp; Condition
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
