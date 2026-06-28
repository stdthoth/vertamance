import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import type { ReactNode } from "react";
import { categories, projects, type ProjectCategory } from "./portfolioData";

function NavIcon({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center ${
        active ? "text-[#111111]" : "text-[#9a948d]"
      }`}
    >
      {children}
    </span>
  );
}

function NavLink({
  to,
  label,
  active,
  icon,
}: {
  to: string;
  label: string;
  active?: boolean;
  icon: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 text-sm tracking-wide transition-colors ${
        active ? "font-bold text-[#121212]" : "font-medium text-[#6d6760] hover:text-[#121212]"
      }`}
    >
      <NavIcon active={active}>{icon}</NavIcon>
      <span>{label}</span>
    </Link>
  );
}

export default function PortfolioScreen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const filteredProjects = useMemo(() => {
    return selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const pageSize = 7;
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const visibleProjects = filteredProjects.slice((page - 1) * pageSize, page * pageSize);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="min-h-screen bg-[#ededed] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <header className="bg-[#dfdfdf]">
        <nav className="sticky top-0 z-40 bg-[#dfdfdf]/90 backdrop-blur-md">
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

            <div className="hidden items-center gap-8 md:flex">
              <NavLink
                to="/"
                label="Home"
                icon={
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
                }
              />
              <NavLink
                to="/about-us"
                label="About Us"
                icon={
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
                }
              />
              <NavLink
                to="/#business"
                label="Business"
                icon={
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
                }
              />
              <NavLink
                to="/portfolio"
                label="Portfolio"
                active
                icon={
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
                }
              />
            </div>

            <a
              href="mailto:comms@vertmance.com?subject=Vertmance%20Contact"
              className="rounded-[4px] bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
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
                <Link
                  to="/#business"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-[#6d6760]"
                >
                  Business
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg bg-white/70 px-3 py-2 text-sm font-semibold text-[#171412]"
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

        <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-12 sm:px-8 lg:px-10 lg:pb-24 lg:pt-16">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2px] bg-[#dcdcdc] px-6 py-8 sm:px-10 sm:py-10 lg:min-h-[640px] lg:px-12 lg:py-12">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.04),transparent_26%)]" />
            <div className="relative mt-[12rem] max-w-[42rem] sm:mt-[13rem] lg:mt-[20rem]">
              <p className="text-sm font-medium text-[#7d7871]">
                Our Portfolio
              </p>
              <h1 className="mt-2 text-[2rem] font-black leading-[1.04] tracking-[-0.06em] text-[#171412] sm:text-[2.5rem] lg:text-[3rem]">
                Vertmance Resources Limited
              </h1>
              <p className="mt-3 max-w-[28rem] text-[0.86rem] leading-6 text-[#8a847d] sm:text-sm">
                Showing a range of completed and ongoing projects across
                multiple industries, with a focus on disciplined execution and
                multi-sector impact.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-[#f4f4f4]">
        <section className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <h2 className="text-[1.7rem] font-black tracking-[-0.05em] text-[#171412] sm:text-[2.2rem]">
            Our Comprehensive Project Portfolio
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8a847d]">
            Showcasing a diverse range of completed projects across multiple
            industries, demonstrating our commitment to excellence and
            large-scale multi-industry impact.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = category === selectedCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-sm border px-4 py-2 text-xs font-medium transition-colors ${
                    active
                      ? "border-[#171412] bg-[#171412] text-white"
                      : "border-black/5 bg-white text-[#90897f] hover:border-black/10 hover:text-[#171412]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[12px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)] ring-1 ring-black/5"
              >
                <div className="relative h-64 bg-[#d9d9d9]">
                  <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#808080]">
                    {project.category}
                  </div>
                </div>
                <div className="px-4 py-5">
                  <h3 className="text-[1rem] font-extrabold leading-6 text-[#171412]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-6 text-[#9a948d]">
                    {project.description}
                  </p>
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#171412] transition-colors hover:text-[#e67a11]"
                  >
                    View Project Details
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                className="grid h-8 w-8 place-items-center rounded-sm border border-black/5 bg-white text-[#171412]"
                aria-label="Previous page"
              >
                ‹
              </button>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() => setPage(number)}
                  className={`h-8 min-w-8 rounded-sm border px-2 text-sm transition-colors ${
                    page === number
                      ? "border-[#171412] bg-[#171412] text-white"
                      : "border-black/5 bg-white text-[#8f897f]"
                  }`}
                >
                  {number}
                </button>
              ))}
              <button
                type="button"
                onClick={() =>
                  setPage((current) => Math.min(totalPages, current + 1))
                }
                className="grid h-8 w-8 place-items-center rounded-sm border border-black/5 bg-white text-[#171412]"
                aria-label="Next page"
              >
                ›
              </button>
            </div>

            {page < totalPages ? (
              <button
                type="button"
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                className="rounded-sm border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#4b463f] transition-transform hover:-translate-y-0.5"
              >
                Load More Projects
              </button>
            ) : null}
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#2d2112] text-[#d8cdbd]">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.95fr_0.95fr_1fr]">
            <div>
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white">
                Company
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <Link className="transition-colors hover:text-white" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-white" to="/#business">
                    Business
                  </Link>
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
              <ul className="mt-5 space-y-4 text-sm">
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
                    className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#e67a11]"
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
                Join our weekly mailing lists
              </p>
              <form className="mt-4 flex max-w-sm overflow-hidden rounded-md border border-white/10 bg-white/5">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#a69483] focus:outline-none"
                />
                <button
                  type="submit"
                  className="grid w-12 place-items-center bg-white/10 text-white"
                  aria-label="Subscribe"
                >
                  →
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-4 text-xs text-[#b6a894] sm:flex-row sm:items-center sm:justify-between">
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
