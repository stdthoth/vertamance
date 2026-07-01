import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BusinessFlyout } from "./BusinessFlyout";

const flagships = [
  {
    title: "Katampe Extension",
    tag: "1-hectare mountain-top site overlooking Abuja",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Katampe Valley",
    tag: "Premium residential cluster",
    span: "",
  },
  {
    title: "Ironwood Plaza",
    tag: "Commercial and mixed-use scheme",
    span: "",
  },
  {
    title: "The Linear Gardens",
    tag: "Landscape-led urban living",
    span: "lg:col-span-2",
  },
];

const disciplines = [
  {
    number: "01.",
    title: "URBAN PLANNING",
    text: "Systemic master-planning for high-density metropolitan environments.",
  },
  {
    number: "02.",
    title: "ENGINEERING",
    text: "Engineering and construction expertise.",
  },
  {
    number: "03.",
    title: "INTERIOR ARCHITECTURE",
    text: "Ergonomic and aesthetic spatial design for high-end environments.",
  },
];

function ProExplorerLogo() {
  return (
    <img
      src="/designs/headers/Header(1).png"
      alt="Pro Explorers Peak Ltd"
      className="h-12 w-auto object-contain"
    />
  );
}

export default function ProExplorerPeakScreen() {
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
    <div className="min-h-screen bg-[#f6f5f3] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <header className="border-b border-black/5 bg-[#f6f5f3]/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center">
            <ProExplorerLogo />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link className="text-sm font-medium text-[#7d7871] hover:text-[#171412]" to="/">
              Home
            </Link>
            <Link className="text-sm font-medium text-[#7d7871] hover:text-[#171412]" to="/about-us">
              About Us
            </Link>
            <button
              type="button"
              onClick={toggleBusinessMenu}
              className="text-sm font-bold text-[#171412]"
            >
              Business
            </button>
            <Link className="text-sm font-medium text-[#7d7871] hover:text-[#171412]" to="/portfolio">
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#7d7871]"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#7d7871]"
              >
                About Us
              </Link>
              <button
                type="button"
                onClick={toggleBusinessMenu}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-[#171412]"
              >
                Business
              </button>
              <Link
                to="/portfolio"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#7d7871]"
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
        <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="pt-3 lg:pt-8">
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-[#cf7c18]">
                Est. 1998 - Premier Infrastructure
              </p>
              <h1 className="mt-4 max-w-3xl text-[2.35rem] font-black leading-[0.95] tracking-[-0.06em] text-[#101010] sm:text-[3.25rem] lg:text-[4rem]">
                Redefining the Horizon.
                <span className="block text-[#d97706]">From Blueprint to Reality.</span>
              </h1>
              <p className="mt-5 max-w-[34rem] text-[0.82rem] leading-6 text-[#7d7871] sm:text-sm">
                Architectural excellence meets industrial precision. We don&apos;t just build structures, we engineer the future landscapes of modern living.
              </p>
              <div className="mt-8">
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-3 bg-[#d97706] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_22px_rgba(217,119,6,0.16)] transition-transform hover:-translate-y-0.5"
                >
                  View Portfolio
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[410px] lg:h-[500px]">
              <div className="absolute right-[3%] top-0 h-[92%] w-[67%] rounded-[1px] bg-[#dedede]" />
              <div className="absolute bottom-[4%] left-[12%] h-[27%] w-[35%] rounded-[1px] bg-[#8e8b8b] px-6 py-6 text-white shadow-[0_20px_42px_rgba(0,0,0,0.12)]">
                <div className="text-[2rem] font-black leading-none">5+</div>
                <div className="mt-2 text-[0.64rem] font-bold uppercase tracking-[0.24em] text-white/70">
                  Years of Precision
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 rounded-[2px] bg-white/55 px-6 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.04)] lg:grid-cols-[0.85fr_1fr_0.7fr] lg:gap-10 lg:px-10 lg:py-12">
              <div>
                <h2 className="text-[1.9rem] font-black leading-[0.98] tracking-[-0.05em] text-[#171412] sm:text-[2.35rem]">
                  Constructing Legacy with
                  <span className="block text-[#d97706]">Structural Integrity</span>
                </h2>
              </div>
              <div className="space-y-4 text-[0.82rem] leading-7 text-[#77726a]">
                <p>
                  ProExplorers Peak Limited is an avant-garde real estate development and construction company headquartered in Abuja, Nigeria.
                  Co-founded by Vertmance Resources Group and SilverEdge Project Limited, we are redefining luxury housing in one of Africa&apos;s fastest-growing capital cities.
                </p>
                <p>
                  Our focus is to deliver modern, sustainable, and world-class estates that blend architectural excellence with the evolving lifestyle of elites.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[2px] bg-[#eceae8] p-5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#cf7c18]">
                    Philosophy
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#171412]">
                    Redefining Luxury Real Estate in Abuja.
                  </p>
                </div>
                <div className="rounded-[2px] bg-[#eceae8] p-5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#cf7c18]">
                    Our Reach
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-6 text-[#77726a]">
                    Global operations with active major developments in several metropolitan centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-[#f6f5f3] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#cf7c18]">
                  Selected Works
                </p>
                <h2 className="mt-2 text-[2rem] font-black tracking-[-0.05em] text-[#171412] sm:text-[2.5rem]">
                  Flagship Developments
                </h2>
              </div>
              <Link
                to="/portfolio"
                className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#cf7c18]"
              >
                All Projects →
              </Link>
            </div>

            <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
              {flagships.map((item) => (
                <article
                  key={item.title}
                  className={`relative overflow-hidden bg-[#191717] text-white ${item.span} min-h-[220px] lg:min-h-[260px]`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.55))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[0.63rem] uppercase tracking-[0.18em] text-white/55">
                      {item.tag}
                    </p>
                    <h3 className="mt-2 text-[1.1rem] font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f5f3] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 rounded-[2px] bg-white/55 px-6 py-8 shadow-[0_12px_28px_rgba(0,0,0,0.04)] lg:grid-cols-[0.7fr_1fr_1fr] lg:gap-10 lg:px-10 lg:py-12">
              <div>
                <h2 className="text-[1.9rem] font-black leading-[0.98] tracking-[-0.05em] text-[#171412] sm:text-[2.35rem]">
                  The Core
                  <span className="block text-[#d97706]">Disciplines</span>
                </h2>
                <div className="mt-8 space-y-6">
                  {disciplines.map((item) => (
                    <div key={item.number} className="border-l-2 border-[#d97706] pl-4">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#171412]">
                        {item.number} {item.title}
                      </p>
                      <p className="mt-2 text-[0.74rem] leading-6 text-[#7d7871]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="h-[240px] rounded-[1px] bg-[#dedede]" />
                <div>
                  <h3 className="text-[1.05rem] font-semibold text-[#171412]">
                    Precision Budgeting
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-7 text-[#7d7871]">
                    We utilize advanced BIM (Building Information Modeling) to ensure cost predictability and accuracy from the first shovelful of earth.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="h-[240px] rounded-[1px] bg-[#dedede] lg:mt-10" />
                <div className="lg:pt-10">
                  <h3 className="text-[1.05rem] font-semibold text-[#171412]">
                    Sustainable Execution
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-7 text-[#7d7871]">
                    Implementing eco-efficient logistics and low-carbon materials across our entire construction supply chain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#191717] py-16 text-white lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 text-center sm:px-8 lg:px-10">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-[#cf7c18]">
              Invitation to Collaboration
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-[2.45rem] font-black leading-[0.95] tracking-[-0.06em] sm:text-[3.25rem]">
              Lock down
              <span className="block">your Money</span>
              <span className="block font-normal">in Real Estate</span>
            </h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:comms@vertmance.com?subject=Pro%20Explorer%20Project"
                className="inline-flex min-w-[170px] justify-center bg-[#d97706] px-8 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Start Your Project
              </a>
              <a
                href="mailto:comms@vertmance.com?subject=Request%20Credentials"
                className="inline-flex min-w-[170px] justify-center border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Request Credentials
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2d2112] text-[#d8cdbd]">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.85fr_0.95fr_1fr]">
            <div>
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white">
                Company
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link className="transition-colors hover:text-white" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="transition-colors hover:text-white"
                  >
                    Business
                  </button>
                </li>
                <li>
                  <Link className="transition-colors hover:text-white" to="/portfolio">
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
                    <button type="button" className="transition-colors hover:text-white">
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/#business"
                    className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#ef7b11]"
                  >
                    View all Businesses
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
              <button type="button" className="transition-colors hover:text-white">
                Legal
              </button>
              <button type="button" className="transition-colors hover:text-white">
                Privacy
              </button>
              <button type="button" className="transition-colors hover:text-white">
                Site Map
              </button>
              <button type="button" className="transition-colors hover:text-white">
                Terms &amp; Condition
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
