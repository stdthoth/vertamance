import { type FormEvent, useEffect, useState } from "react";
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
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newsletterEmail.includes("@")) {
      setNewsletterStatus("success");
      setNewsletterEmail("");
      return;
    }
    setNewsletterStatus("error");
  };

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
            src="/Website jpeg/new_business.png"
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

      <footer className="border-t border-gray-900 bg-[#14110f] px-6 py-20 text-gray-400 transition-colors duration-300 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about-us" className="transition-colors hover:text-white">About Us</Link></li>
                <li><Link to="/business" className="transition-colors hover:text-white">Business</Link></li>
                <li><Link to="/portfolio" className="transition-colors hover:text-white">Portfolio</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Businesses</h4>
              <ul className="space-y-3 text-sm">
                {businesses.slice(0, 5).map((business) => (
                  <li key={business.name}>
                    <Link to={business.href} className="transition-colors hover:text-white">{business.name}</Link>
                  </li>
                ))}
                <li><Link to="/business" className="text-xs font-bold uppercase tracking-wider text-[#e55a00] transition-colors hover:text-white">View all Businesses</Link></li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">General Inquiries</h4>
              <div className="space-y-2 text-sm leading-relaxed">
                <p>Call: 0814 XXX XXXX, 0913 XXX XXXX</p>
                <p>Email: <a href="mailto:comms@vertmance.com" className="transition-colors hover:text-white">comms@vertmance.com</a></p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {[
                  { name: "Facebook", label: "f" },
                  { name: "Twitter", label: "x" },
                  { name: "Instagram", label: "ig" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-400 transition-all hover:scale-105 hover:border-transparent hover:bg-[#e55a00] hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Newsletter</h4>
              <p className="text-sm leading-relaxed text-gray-400">Join our weekly mailing lists</p>
              <form onSubmit={handleNewsletterSubmit} className="relative mt-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                  placeholder="Enter Your Email..."
                  required
                  className="w-full rounded-sm border border-white/10 bg-[#1e1a17]/80 px-4 py-3 pr-12 text-sm text-white placeholder:text-gray-500 transition-colors focus:border-[#e55a00] focus:outline-none focus:ring-1 focus:ring-[#e55a00]"
                />
                <button type="submit" aria-label="Subscribe" className="absolute bottom-1 right-1 top-1 flex w-10 items-center justify-center rounded-sm bg-white/10 text-white transition-colors hover:bg-[#e55a00]">
                  →
                </button>
              </form>
              {newsletterStatus === "success" ? <p className="text-xs font-semibold text-green-500">You&apos;ve subscribed successfully.</p> : null}
              {newsletterStatus === "error" ? <p className="text-xs font-semibold text-red-500">Please enter a valid email address.</p> : null}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
            <p className="text-xs font-semibold text-gray-500">© 2026 All Rights Reserved</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-gray-500">
              {['Legal', 'Privacy', 'Site Map', 'Terms & Condition'].map((item) => (
                <a key={item} href="#" className="transition-colors hover:text-white">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
