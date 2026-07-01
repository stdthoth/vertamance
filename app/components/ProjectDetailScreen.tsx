import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BusinessFlyout } from "./BusinessFlyout";
import type { Project } from "./portfolioData";

function DetailNavLink({
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
      className={`flex items-center gap-2 text-sm tracking-wide transition-colors ${
        active ? "font-bold text-[#121212]" : "font-medium text-[#6d6760] hover:text-[#121212]"
      }`}
    >
      <span
        className={`inline-flex h-4 w-4 items-center justify-center ${
          active ? "text-[#111111]" : "text-[#9a948d]"
        }`}
      >
        {label === "Home" ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M3 11.5L12 4l9 7.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
            <path
              d="M6.5 10.75V20h11V10.75"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        ) : label === "About Us" ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <circle
              cx="12"
              cy="8"
              r="3"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        ) : label === "Business" ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M4 19V7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
            <path
              d="M3 19h18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.6"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M4.5 7.5h15v11h-15z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
            <path
              d="M8 7.5V5.75h8V7.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        )}
      </span>
      <span>{label}</span>
    </Link>
  );
}

export default function ProjectDetailScreen({ project }: { project: Project }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);

  const toggleBusinessMenu = () => {
    setMobileMenuOpen(false);
    setBusinessMenuOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-[#ededed] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <header className="bg-[#dfdfdf]">
        <nav className="sticky top-0 z-40 bg-[#dfdfdf]/90 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
            <Link to="/" className="flex items-center">
              <img
                src="/Vertmance logo.png"
                alt="Vertmance Logo"
                className="h-14 w-14 object-contain"
              />
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <DetailNavLink to="/" label="Home" />
              <DetailNavLink to="/about-us" label="About Us" />
              <button
                type="button"
                onClick={toggleBusinessMenu}
                className={`flex items-center gap-2 text-sm tracking-wide transition-colors ${
                  businessMenuOpen
                    ? "font-bold text-[#121212]"
                    : "font-medium text-[#6d6760] hover:text-[#121212]"
                }`}
              >
                <span
                  className={`inline-flex h-4 w-4 items-center justify-center ${
                    businessMenuOpen ? "text-[#111111]" : "text-[#9a948d]"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M4 19V7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V19"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M3 19h18"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <span>Business</span>
              </button>
              <DetailNavLink to="/portfolio" label="Portfolio" active />
            </div>

            <Link
              to="/contact-us"
              className="rounded-[4px] bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
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
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-black/5 px-5 py-4 md:hidden">
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#6d6760]"
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#6d6760]"
                >
                  About Us
                </Link>
                <button
                  type="button"
                  onClick={toggleBusinessMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#6d6760]"
                >
                  Business
                </button>
                <Link
                  to="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg bg-white/70 px-3 py-2 text-sm font-semibold text-[#171412]"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          ) : null}
          <BusinessFlyout
            open={businessMenuOpen}
            onClose={() => setBusinessMenuOpen(false)}
          />
        </nav>

        <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-12 sm:px-8 lg:px-10 lg:pb-24 lg:pt-16">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2px] bg-[#dcdcdc] px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[640px] lg:px-12 lg:py-12">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.04),transparent_26%)]" />
            <div className="relative mt-[12rem] max-w-[42rem] sm:mt-[13rem] lg:mt-[20rem]">
              <p className="text-sm font-medium text-[#7d7871]">
                {project.title}
              </p>
              <h1 className="mt-2 text-[2rem] font-black leading-[1.04] tracking-[-0.06em] text-[#19233d] sm:text-[2.5rem] lg:text-[3rem]">
                {project.title.toUpperCase()}
              </h1>
              <p className="mt-3 max-w-[28rem] text-[0.86rem] leading-6 text-[#72839b] sm:text-sm">
                {project.shortSummary}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-white">
        <section className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-7 w-[3px] bg-[#171b2d]" />
                <h2 className="text-[1.25rem] font-black uppercase tracking-[0.12em] text-[#171b2d]">
                  About The Project
                </h2>
              </div>

              <div className="mt-5 space-y-5 text-[0.92rem] leading-7 text-[#575555]">
                {project.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="rounded-[8px] border border-black/5 bg-[#f5f5f5] p-6 shadow-[0_8px_22px_rgba(0,0,0,0.04)]">
              <h3 className="text-[1.1rem] font-black text-[#171412]">
                Project Info
              </h3>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#a1abc0]">
                    Name
                  </dt>
                  <dd className="mt-1 text-[0.95rem] font-semibold text-[#171412]">
                    {project.title}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#a1abc0]">
                    Category
                  </dt>
                  <dd className="mt-1 text-[0.95rem] font-semibold text-[#171412]">
                    {project.detailLabel}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#a1abc0]">
                    Year
                  </dt>
                  <dd className="mt-1 text-[0.95rem] font-semibold text-[#171412]">
                    {project.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#a1abc0]">
                    Location
                  </dt>
                  <dd className="mt-1 text-[0.95rem] font-semibold text-[#171412]">
                    {project.location}
                  </dd>
                </div>
              </dl>

              <a
                href="mailto:comms@vertmance.com?subject=Case%20Study%20PDF%20Request"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#e67a11] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <span aria-hidden="true">↓</span>
                Case Study PDF
              </a>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <h2 className="text-center text-[1.45rem] font-black uppercase tracking-[0.14em] text-[#19233d] sm:text-[1.8rem]">
            Project Gallery
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {project.galleryColumns.map((span, index) => (
              <div
                key={`${project.slug}-${index}`}
                className={`h-56 rounded-[2px] bg-[#dcdcdc] md:h-48 ${
                  span === 2 ? "lg:row-span-3 lg:h-auto" : ""
                }`}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#2d2112] text-[#d8cdbd]">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 border-t border-white/15 pt-4 text-xs text-[#b6a894] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 All Rights Reserved</p>
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
