import { useEffect, useState } from "react";
import { Link } from "react-router";

const businesses = [
  {
    name: "Pro Explorer Peak",
    category: "Real Estate & Development",
    description:
      "A future-facing real estate business shaping exceptional places to live, work, and invest.",
    href: "/pro-explorer-peak",
    imageSrc: "/designs/Pro Explorer.jpg",
  },
  {
    name: "Vertmance Engineering & Construction",
    category: "Infrastructure & Delivery",
    description:
      "Technical expertise and disciplined project delivery for complex built-environment work.",
    href: "/engineering-construction",
    imageSrc: "/designs/Engineering & Construction.jpg",
  },
  {
    name: "Owonikoko Ranch & Farms",
    category: "Agriculture",
    description:
      "Integrated agricultural operations that connect cultivation, livestock, and sustainable value creation.",
    href: "/owonikoko-ranch-farms",
    imageSrc: "/Website jpeg/OWONIKOKO CLICK PAGE.png",
  },
  {
    name: "Oke-Keke",
    category: "Mobility",
    description:
      "Practical, people-first mobility services designed for reliable movement and local economic activity.",
    href: "/oke-keke",
    imageSrc: "/designs/undone/OKE KEKE.png",
  },
  {
    name: "Xsky Cafe & Lounge",
    category: "Hospitality & Entertainment",
    description:
      "A refined social destination where memorable dining, atmosphere, and culture come together.",
    href: "/xsky-cafe-lounge",
    imageSrc: "/designs/Xsky Cafe & Lounge.jpg",
  },
  {
    name: "Nassaco Commodity",
    category: "Commodity & Food Systems",
    description:
      "Industrial rice processing and commodity infrastructure built around resilient supply chains.",
    href: "/nassaco-commodity",
    imageSrc: "/Website jpeg/Rice_processing.jpg",
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
      className={`relative py-2 text-sm tracking-wide transition-colors ${
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

export default function BusinessesScreen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-[#ededed] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <header className="relative overflow-hidden bg-[#dcdcdc]">
        <nav className="sticky top-0 z-40 border-b border-black/5 bg-[#dcdcdc]/90 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
            <Link to="/" className="flex items-center" aria-label="Vertmance home">
              <img
                src="/Vertmance logo.png"
                alt="Vertmance Logo"
                className="h-14 w-14 object-contain"
              />
            </Link>

            <div className="hidden items-center gap-10 md:flex">
              <NavLink to="/" label="Home" />
              <NavLink to="/about-us" label="About Us" />
              <NavLink to="/business" label="Business" active />
              <NavLink to="/portfolio" label="Portfolio" />
            </div>

            <div className="flex items-center gap-3">
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
                    <path d="M6 18 18 6M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-black/5 px-5 py-4 md:hidden">
              <div className="flex flex-col gap-2">
                <NavLink to="/" label="Home" />
                <NavLink to="/about-us" label="About Us" />
                <NavLink to="/business" label="Business" active />
                <NavLink to="/portfolio" label="Portfolio" />
                <Link to="/contact-us" className="mt-2 rounded-[4px] bg-black px-4 py-3 text-sm font-semibold text-white">
                  Contact Us
                </Link>
              </div>
            </div>
          ) : null}
        </nav>

        <div className="relative isolate mx-auto flex min-h-[420px] max-w-[1280px] items-center overflow-hidden px-5 py-20 sm:px-8 lg:min-h-[500px] lg:px-10">
          <img
            src="/designs/Businesses.png"
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(19,17,14,0.78),rgba(19,17,14,0.44))]" />
          <div className="max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f0a34d]">
              The Vertmance Group
            </p>
            <h1 className="mt-4 text-[2.7rem] font-black leading-[0.95] tracking-[-0.06em] sm:text-[4rem]">
              Businesses built to move ideas into impact.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Across infrastructure, agriculture, mobility, real estate, hospitality, and commodity systems, we build operating businesses that create durable value.
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[#f7f6f4] py-16 sm:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8f897f]">Our Businesses</p>
              <h2 className="mt-3 text-[2rem] font-black tracking-[-0.05em] text-[#151312] sm:text-[2.8rem]">
                Explore our Businesses.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#7d7871]">
                Hover over a business to reveal its focus, then use the arrow to visit its dedicated page.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {businesses.map((business) => (
                <article key={business.name} className="group relative min-h-[360px] overflow-hidden rounded-[6px] bg-[#26221d]">
                  <img src={business.imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,18,0.1)_24%,rgba(23,20,18,0.76))] transition-colors duration-300 group-hover:bg-[linear-gradient(180deg,rgba(23,20,18,0.3),rgba(23,20,18,0.9))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f0a34d]">{business.category}</p>
                    <h3 className="mt-2 text-xl font-black tracking-[-0.035em]">{business.name}</h3>
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
                      <div className="overflow-hidden">
                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">{business.description}</p>
                        <Link
                          to={business.href}
                          aria-label={`Visit ${business.name}`}
                          className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ef7b11] text-lg text-white transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
