import React, { useEffect, useState } from "react";
import { Link } from "react-router";

type FeaturedProject = {
  title: string;
  label: string;
};

const featuredProjects: FeaturedProject[] = [
  { title: "Urban Infrastructure", label: "Transit corridors and civic works" },
  { title: "Industrial Plants", label: "Heavy-duty delivery environments" },
  {
    title: "Residential Development",
    label: "High-quality living communities",
  },
  { title: "Commercial Towers", label: "Mixed-use vertical construction" },
  { title: "Water Systems", label: "Utility upgrades and resilience" },
];

const standardFeatures = [
  {
    title: "Engineering Precision",
    text: "Every bolt, beam, and blueprint is reviewed through a disciplined technical process.",
  },
  {
    title: "Practical Execution",
    text: "Site management, machinery, and crews are coordinated for fast, controlled delivery.",
  },
  {
    title: "Safety Protocols",
    text: "Field operations run on a zero-incident mindset backed by active supervision.",
  },
  {
    title: "Material Integrity",
    text: "We source durable materials that stand up to real-world use and weather.",
  },
];

const trustPoints = [
  {
    title: "Deep Experience",
    text: "30+ years of field knowledge across complex civil and structural projects.",
  },
  {
    title: "Safety First",
    text: "Rigorous safety protocols that meet demanding industry expectations.",
  },
  {
    title: "Sustainability",
    text: "Lower-impact materials and efficient delivery practices where possible.",
  },
  {
    title: "Expert Team",
    text: "A focused group of engineers, planners, and project specialists.",
  },
];

const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Business", href: "/#business" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function EngineeringConstructionScreen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const visibleProjects = Array.from({ length: 3 }, (_, offset) => {
    const index = (projectIndex + offset) % featuredProjects.length;
    return featuredProjects[index];
  });

  const handlePrevProjects = () => {
    setProjectIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1,
    );
  };

  const handleNextProjects = () => {
    setProjectIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes("@")) {
      setNewsletterStatus("success");
      setNewsletterEmail("");
      return;
    }
    setNewsletterStatus("error");
  };

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <nav className="sticky top-0 z-40 border-b border-black/5 bg-[#f6f4ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d97706] text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
              <img
                src="/Vertmance logo.png"
                alt="Vertmance Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link className="text-sm font-semibold text-[#171412]" to="/">
              Home
            </Link>
            <a
              className="text-sm font-medium text-[#6c6760] transition-colors hover:text-[#171412]"
              href="/about-us">
              About Us
            </a>
            <a
              className="text-sm font-medium text-[#6c6760] transition-colors hover:text-[#171412]"
              href="/#business"
            >
              Business
            </a>
            <a
              className="text-sm font-medium text-[#6c6760] transition-colors hover:text-[#171412]"
              href="/portfolio"
            >
              Portfolio
            </a>
          </div>

          <button
            onClick={() => setContactModalOpen(true)}
            className="hidden rounded-[4px] bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 md:block"
          >
            Contact Us
          </button>

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

        {mobileMenuOpen ? (
          <div className="border-t border-black/5 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="rounded-lg px-3 py-2 text-sm font-semibold text-[#171412]"
              >
                Home
              </Link>
              <a
                href="/about-us"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6760]"
              >
                About Us
              </a>
              <a
                href="/#business"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6760]"
              >
                Business
              </a>
              <a
                href="/portfolio"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6760]"
              >
                Portfolio
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="mt-2 rounded-[4px] bg-black px-4 py-3 text-sm font-semibold text-white"
              >
                Contact Us
              </button>
            </div>
          </div>
        ) : null}
      </nav>

      <main>
        <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-20 lg:pt-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
            <div className="pt-4 lg:pt-12">
              <h1 className="max-w-3xl text-[2.45rem] font-black leading-[0.96] tracking-[-0.06em] text-[#121110] sm:text-[3.4rem] lg:text-[4.1rem]">
                Vertmance Engineering &amp; Construction:{" "}
                <span className="text-[#d97706]">
                  Delivering Real-World Impact
                </span>
              </h1>
              <p className="mt-5 max-w-[36rem] text-[0.78rem] leading-6 text-[#7b756d] sm:text-sm">
                From planning and technical coordination to site delivery and
                handover, we build with a disciplined process that turns design
                intent into durable results.
              </p>
            </div>

            <div className="h-[280px] overflow-hidden rounded-[28px] bg-[#dedede] shadow-[0_12px_30px_rgba(0,0,0,0.05)] sm:h-[360px] lg:mt-8 lg:h-[330px]">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.08))]" />
            </div>
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="relative h-[300px] overflow-hidden rounded-[18px] border border-black/10 bg-[#dddddd] shadow-[0_12px_28px_rgba(0,0,0,0.04)] sm:h-[380px] lg:h-[360px]">
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.34),transparent_40%),linear-gradient(0deg,rgba(0,0,0,0.02),rgba(0,0,0,0.02))]" />
              <div className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-white/70" />
              <div className="absolute bottom-4 left-4 text-white/70">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3l2.6 5.2L20 10l-5 3.8L16 19l-4-2.4L8 19l1-5.2L4 10l5.4-.8L12 3z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <div className="max-w-xl">
              <h2 className="text-[1.95rem] font-black leading-[0.98] tracking-[-0.05em] text-[#121110] sm:text-[2.4rem]">
                Direct Execution. No Intermediaries.
              </h2>
              <p className="mt-5 text-[0.82rem] leading-7 text-[#7b756d] sm:text-sm">
                Vertmance delivers engineering and construction work through a
                tightly coordinated team. That means fewer delays, clearer
                accountability, and better control from blueprint to completion.
              </p>
              <p className="mt-5 text-[0.82rem] leading-7 text-[#7b756d] sm:text-sm">
                We mobilize equipment, manage the site, and keep the technical
                details moving so projects stay aligned with the original
                intent.
              </p>
              <ul className="mt-7 space-y-3 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#171412]">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black" />
                  In-House Heavy Equipment Fleet
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black" />
                  Certified Structural Engineers On-Site
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-black" />
                  Real-Time Technical Auditing
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#d97706]">
                Portfolio
              </p>
              <h2 className="mt-1 text-[1.9rem] font-black uppercase tracking-[-0.05em] text-[#171412] sm:text-[2.15rem]">
                Featured Projects
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrevProjects}
                className="grid h-9 w-9 place-items-center rounded-md border border-black/10 bg-[#f6f4ef] text-[#171412] transition-transform hover:-translate-y-0.5"
                aria-label="Previous projects"
              >
                ←
              </button>
              <button
                onClick={handleNextProjects}
                className="grid h-9 w-9 place-items-center rounded-md border border-black/10 bg-[#f6f4ef] text-[#171412] transition-transform hover:-translate-y-0.5"
                aria-label="Next projects"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article key={`${project.title}-${index}`}>
                <div className="h-[220px] rounded-[6px] bg-[#dddddd] shadow-[0_10px_26px_rgba(0,0,0,0.04)]" />
                <h3 className="mt-4 text-center text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-[#171412]">
                  {project.title}
                </h3>
                <p className="mt-2 text-center text-[0.72rem] text-[#8b847c]">
                  {project.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#24180f] py-14 text-[#f4efe8] lg:py-16">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <h2 className="max-w-xs text-[2rem] font-black leading-[0.95] tracking-[-0.05em] sm:text-[2.3rem]">
                  The Vertmance Standard
                </h2>
                <div className="mt-4 h-[2px] w-10 bg-[#f1e6d5]" />
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {standardFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="border-l border-white/20 pl-4"
                  >
                    <h3 className="text-[1rem] font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[0.8rem] leading-7 text-[#d2c6b8]">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 rounded-[18px] bg-[#ece9e3] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] lg:grid-cols-[0.94fr_1.06fr] lg:p-8">
            <div className="relative min-h-[320px]">
              <div className="absolute left-0 top-0 h-[86%] w-[86%] bg-white shadow-[0_18px_30px_rgba(0,0,0,0.06)]" />
              <div className="absolute left-6 top-6 h-[78%] w-[78%] border-[12px] border-[#f3f0ea] bg-[#fbfaf8]" />
              <div className="absolute bottom-8 left-10 h-24 w-24 bg-[#172031]" />
              <div className="absolute right-10 top-10 h-28 w-28 bg-[#d97706]" />
              <div className="absolute right-0 bottom-0 h-28 w-28 translate-x-4 translate-y-4 border-2 border-[#e8d6bf]" />
            </div>

            <div className="max-w-2xl">
              <h2 className="text-[2rem] font-black leading-[0.98] tracking-[-0.05em] text-[#171412] sm:text-[2.45rem]">
                Why Leading Partners Choose Vertmance
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#7b756d]">
                We combine technical discipline, practical delivery, and
                transparent communication to reduce risk and keep each project
                moving with confidence.
              </p>

              <div className="mt-8 space-y-5">
                {trustPoints.map((point, index) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d97706]/12 text-[0.9rem] text-[#d97706]">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#171412]">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-[0.78rem] leading-6 text-[#7b756d]">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#22170f] text-[#d4c8b8]">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.85fr_0.95fr_1fr]">
            <div>
              <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white">
                Company
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {footerLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      className="transition-colors hover:text-white"
                      href={item.href}
                    >
                      {item.label}
                    </a>
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
                      onClick={() => setContactModalOpen(true)}
                      className="text-left transition-colors hover:text-white"
                    >
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="/#business"
                    className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#d97706]"
                  >
                    View All Businesses
                  </a>
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
              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-4 flex max-w-sm overflow-hidden rounded-md border border-white/10 bg-white/5"
              >
                <input
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-[#a69483] focus:outline-none"
                />
                <button
                  type="submit"
                  className="grid w-12 place-items-center bg-[#d97706] text-white"
                >
                  →
                </button>
              </form>
              {newsletterStatus === "success" ? (
                <p className="mt-3 text-xs text-[#f0c37a]">
                  Subscription received.
                </p>
              ) : null}
              {newsletterStatus === "error" ? (
                <p className="mt-3 text-xs text-[#f0c37a]">
                  Enter a valid email address.
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-4 text-xs text-[#b6a894] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 All Rights Reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a className="transition-colors hover:text-white" href="/#">
                Legal
              </a>
              <a className="transition-colors hover:text-white" href="/#">
                Privacy
              </a>
              <a className="transition-colors hover:text-white" href="/#">
                Site Map
              </a>
              <a className="transition-colors hover:text-white" href="/#">
                Terms &amp; Condition
              </a>
            </div>
          </div>
        </div>
      </footer>

      {contactModalOpen ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-5">
          <div className="w-full max-w-md rounded-[18px] bg-[#f6f4ef] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#d97706]">
                  Contact Us
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#171412]">
                  Start a project conversation
                </h3>
              </div>
              <button
                onClick={() => setContactModalOpen(false)}
                className="text-xl leading-none text-[#8b847c]"
                aria-label="Close contact modal"
              >
                ×
              </button>
            </div>

            <div className="mt-5 space-y-3 text-sm text-[#6c6760]">
              <p>Call: 0814 XXX XXXX, 0913 XXX XXXX</p>
              <p>Email: comms@vertmance.com</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
