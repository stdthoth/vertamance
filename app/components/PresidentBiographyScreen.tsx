import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BusinessFlyout } from "./BusinessFlyout";

const milestones = [
  {
    title: "LoftyInc & Wennovation Hub",
    text: "Co-founded influential platforms that pioneered African innovation and venture capital, fostering the next generation of tech entrepreneurs.",
    label: "Co-Founder (2010s)",
    dark: false,
  },
  {
    title: "REA Governing Board",
    text: "Contributed to Nigeria's national energy development and rural electrification strategy.",
    label: "Member (2010s)",
    dark: true,
  },
  {
    title: "Presidential CNG Initiative",
    text: "Leading Nigeria's transition to clean, cost-effective energy in the transport sector as Program Director & Chief Executive.",
    label: "Program Director (2025)",
    dark: false,
  },
  {
    title: "Energy & Sustainable Award",
    text: "Recognized for significant contributions to the energy transition and leadership in sustainable infrastructure.",
    label: "Leadership Award (2025)",
    dark: false,
    wide: true,
  },
];

const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Business", href: "/#business" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function PresidentBiographyScreen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);

  const toggleBusinessMenu = () => {
    setMobileMenuOpen(false);
    setBusinessMenuOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <header className="sticky top-0 z-40 bg-[#f4f4f4]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center">
            <img
              src="/Vertmance logo.png"
              alt="Vertmance Logo"
              className="h-14 w-14 object-contain"
            />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link
              className="text-sm font-medium text-[#6c6861] hover:text-[#121212]"
              to="/"
            >
              Home
            </Link>
            <Link className="text-sm font-bold text-[#121212]" to="/about-us">
              About Us
            </Link>
            <button
              type="button"
              onClick={toggleBusinessMenu}
              className="text-sm font-medium text-[#6c6861] hover:text-[#121212]"
            >
              Business
            </button>
            <Link
              className="text-sm font-medium text-[#6c6861] hover:text-[#121212]"
              to="/portfolio"
            >
              Portfolio
            </Link>
          </div>

          <Link
            to="/contact-us"
            className="hidden rounded-[4px] bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 md:block"
          >
            Contact Us
          </Link>

          <button
            type="button"
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
        </nav>

        {mobileMenuOpen ? (
          <div className="border-t border-black/5 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="rounded-lg bg-white/70 px-3 py-2 text-sm font-semibold text-[#171412]"
              >
                About Us
              </Link>
              <button
                type="button"
                onClick={toggleBusinessMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
              >
                Business
              </button>
              <Link
                to="/portfolio"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
              >
                Portfolio
              </Link>
              <Link
                to="/contact-us"
                className="mt-2 rounded-[4px] bg-black px-4 py-3 text-sm font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : null}
        <BusinessFlyout
          open={businessMenuOpen}
          onClose={() => setBusinessMenuOpen(false)}
        />
      </header>

      <main>
        <section className="mx-auto max-w-[1280px] px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-16">
          <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            <div className="relative h-[360px] rounded-[20px] bg-[#d9d9d9] shadow-[0_14px_28px_rgba(0,0,0,0.04)] sm:h-[520px] lg:h-[560px]">
              <div className="absolute inset-0 rounded-[20px] border border-[#efdcc0]" />
            </div>

            <div className="pt-2 lg:pt-10">
              <h1 className="text-[1.95rem] font-black leading-[1.04] tracking-[-0.05em] text-[#161412] sm:text-[2.45rem] lg:text-[2.8rem]">
                Michael Olubusayo Oluwagbemi, FMVR
              </h1>
              <p className="mt-3 text-sm text-[#9a948d]">
                President &amp; Chief Executive Officer
              </p>
              <div className="mt-4 h-px w-full bg-[#ddd4ca]" />

              <div className="mt-6 space-y-5 text-[0.9rem] leading-7 text-[#8f8a84]">
                <p>
                  Michael O. Oluwagbemi is the founder and president/chief
                  executive officer of Vertmance Group. Michael O. Oluwagbemi
                  (PE, PMP, MBA, FNSE) is a Nigerian engineer, entrepreneur, and
                  energy executive currently serving as the Program Director and
                  Chief Executive of the Presidential Compressed Natural Gas
                  (CNG) Initiative.
                </p>
                <p>
                  Born on September 21, 1984, in Ekiti State, he holds a
                  Bachelor&apos;s degree in Electrical Engineering from Prairie
                  View A&amp;M University, a Master&apos;s degree from the
                  University of Houston, and an MBA in International Management
                  from the University of London.
                </p>
                <p>
                  He began his career at ExxonMobil as a Project Engineer and
                  later worked with WorleyParsons as a Project Manager. He went
                  on to serve as Vice President of Business Development at
                  Amazon Energy Group before co-founding LoftyInc Capital
                  Partners, LoftyInc Capital Management, and Wennovation Hub.
                </p>
                <p>
                  In 2022, he served on the Governing Board of Nigeria&apos;s
                  Rural Electrification Agency, contributing to national energy
                  development. He was subsequently appointed to lead the
                  Presidential CNG Initiative, where he drives the expansion of
                  clean, cost-effective energy solutions for Nigeria&apos;s
                  transport sector, including large-scale vehicle conversion
                  programs and infrastructure rollout.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] py-16 sm:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-[1.9rem] font-black tracking-[-0.05em] text-[#171412] sm:text-[2.4rem]">
                Milestones of Excellence.
              </h2>
              <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-[#de7a11]" />
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {milestones.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-[14px] px-5 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)] ${
                    item.dark
                      ? "bg-[#2b2114] text-white"
                      : item.wide
                        ? "bg-[#f0e2cf]"
                        : "bg-[#ededed]"
                  } ${item.wide ? "md:col-span-2" : ""}`}
                  style={
                    !item.dark ? { borderLeft: "4px solid #de7a11" } : undefined
                  }
                >
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full text-[#de7a11]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M13 2 4 14h6l-1 8 11-14h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-[1rem] font-extrabold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 max-w-2xl text-[0.82rem] leading-6 ${item.dark ? "text-white/78" : "text-[#96908a]"}`}
                  >
                    {item.text}
                  </p>
                  <p
                    className={`mt-5 text-[0.7rem] font-bold uppercase tracking-[0.16em] ${item.dark ? "text-[#de7a11]" : "text-[#de7a11]"}`}
                  >
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f4f4f4] py-20 sm:py-24">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-white/70 blur-3xl" />
            <div className="absolute right-10 top-16 h-56 w-56 rounded-full bg-white/70 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-white/70 blur-3xl" />
          </div>
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-start">
              <div className="max-w-[560px]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#de7a11]">
                  A Personal Note
                </p>
                <p className="mt-4 text-[1rem] leading-8 text-[#26231f]">
                  <em className="font-semibold">
                    At the heart of every enterprise we build at Vertmance Group
                    from large-scale engineering and construction projects to
                    our ventures in entertainment and sustainable agriculture is
                    a simple promise: Project Excellence driven by Respect.
                  </em>{" "}
                  Respect for the land, the artisans who build our vision, and
                  the patrons who trust our management.
                </p>
                <p className="mt-6 text-[1rem] leading-8 text-[#26231f]">
                  We are not just managing projects; we are cultivating a legacy
                  of precise warmth and structural integrity that will endure
                  for generations. I invite you to join us on this journey of
                  multi-sector refinement and purpose.
                </p>

                <div className="mt-10">
                  <p className="text-[0.92rem] font-bold text-[#171412]">
                    Michael O. Oluwagbemi
                  </p>
                  <p className="mt-1 text-sm italic text-[#8f8a84]">
                    President, Vertmance Group
                  </p>
                </div>
              </div>

              <div className="relative min-h-[280px]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(255,255,255,0.35)_58%,transparent_60%)]" />
                <div className="absolute right-8 top-10 h-24 w-24 rounded-full border border-[#8f867d] bg-transparent" />
                <div className="absolute right-24 top-20 h-2.5 w-2.5 rounded-full border-2 border-[#2b2a28]" />
                <div className="absolute right-16 top-8 h-24 w-px rotate-[38deg] bg-[#8f867d]" />
                <div className="absolute bottom-6 left-0 h-20 w-20 rounded-full border border-[#2b2a28] bg-transparent" />
                <div className="absolute bottom-10 left-14 h-1 w-10 rotate-[-38deg] bg-[#2b2a28]" />
              </div>
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
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="transition-colors hover:text-white"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
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
