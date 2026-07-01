import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BusinessFlyout } from "./BusinessFlyout";

const pillarCards = [
  {
    title: "Fine Dining",
    text: "Experience gourmet cuisine prepared by world-class chefs using seasonal, organic ingredients.",
  },
  {
    title: "Fine Dining",
    text: "Premium hospitality service, intimate dining, and late-night energy shaped for discerning guests.",
  },
  {
    title: "Training & Capacity Building",
    text: "Empowering youths and aspiring agric-preneurs through hands-on technical training and agribusiness mentorship.",
  },
];

export default function XskyCafeLoungeScreen() {
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
    <div className="min-h-screen bg-[#f5f4f2] text-[#141414] selection:bg-[#d97706] selection:text-white">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f5f4f2]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center">
            <img
              src="/designs/headers/Header.png"
              alt="Xsky Bar & Lounge"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link
              className="text-sm font-medium text-[#6a655f] hover:text-[#171412]"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium text-[#6a655f] hover:text-[#171412]"
              to="/about-us"
            >
              About Us
            </Link>
            <button
              type="button"
              onClick={toggleBusinessMenu}
              className="text-sm font-bold text-[#171412]"
            >
              Business
            </button>
            <Link
              className="text-sm font-medium text-[#6a655f] hover:text-[#171412]"
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6a655f]"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6a655f]"
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6a655f]"
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
        <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pb-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
            <div className="pt-2 lg:pt-10">
              <h1 className="max-w-3xl text-[2.4rem] font-black leading-[0.95] tracking-[-0.06em] text-[#111111] sm:text-[3.35rem] lg:text-[4.15rem]">
                Elevated Dining,
                <span className="block text-[#d97706]">
                  Unforgettable Nights
                </span>
              </h1>
              <p className="mt-5 max-w-[34rem] text-[0.8rem] leading-6 text-[#7a746d] sm:text-sm">
                Leading-edge hospitality and construction solutions for
                large-scale infrastructure and multi-sector projects. Vertmance
                defines the modern architectural landscape.
              </p>
              <div className="mt-8">
                <a
                  href="#xsky-experience"
                  className="inline-flex rounded-[4px] bg-[#d97706] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(217,119,6,0.18)] transition-transform hover:-translate-y-0.5"
                >
                  Book Now
                </a>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] lg:h-[470px]">
              <div className="absolute right-[7%] top-0 h-[88%] w-[62%] rotate-[4deg] rounded-[24px] bg-[#e4e3e1] shadow-[0_18px_42px_rgba(0,0,0,0.05)]" />
              <div className="absolute bottom-[6%] left-[12%] h-[32%] w-[36%] rounded-[18px] border-4 border-white bg-[#dddddb] shadow-[0_18px_42px_rgba(0,0,0,0.05)]" />
            </div>
          </div>
        </section>

        <section id="xsky-experience" className="bg-[#efeeeb] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
              <div className="relative h-[310px] overflow-hidden rounded-[2px] bg-[#d8d8d8] shadow-[0_12px_28px_rgba(0,0,0,0.04)] sm:h-[410px] lg:h-[420px]">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.28),transparent_42%),linear-gradient(0deg,rgba(0,0,0,0.02),rgba(0,0,0,0.02))]" />
              </div>

              <div className="max-w-[34rem]">
                <p className="text-[0.67rem] font-bold uppercase tracking-[0.22em] text-[#cf7c18]">
                  The Xsky Experience
                </p>
                <h2 className="mt-3 text-[1.95rem] font-black leading-[0.98] tracking-[-0.05em] text-[#111111] sm:text-[2.5rem]">
                  A Sanctuary of
                  <span className="block">Sophisticated Leisure</span>
                </h2>
                <p className="mt-4 text-[0.82rem] leading-7 text-[#7a746d] sm:text-sm">
                  Xsky transcends the traditional boundaries of dining. We are a
                  premier destination where culinary artistry meets vibrant
                  nightlife. From our sun-drenched afternoon brunches to the
                  high-energy pulse of our midnight lounges, every moment is
                  curated for the discerning guest.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4f2] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-[1.8rem] font-black tracking-[-0.05em] text-[#111111] sm:text-[2.15rem]">
                The Three Pillars
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {pillarCards.map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className="rounded-[6px] border border-black/5 bg-white/55 px-5 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.03)]"
                >
                  <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#d97706] text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm-1 15.5-4-4 1.4-1.4 2.6 2.6 5.6-5.6L18 10z" />
                    </svg>
                  </div>
                  <h3 className="text-[1rem] font-extrabold text-[#171412]">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[0.74rem] leading-5 text-[#7f7a73]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f4f2] py-24">
          <div className="mx-auto max-w-[1280px] px-5 text-center sm:px-8 lg:px-10">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#cf7c18]">
              Take the Lead
            </p>
            <h2 className="mt-4 text-[2.3rem] font-black leading-[0.95] tracking-[-0.06em] text-[#111111] sm:text-[3.1rem]">
              Ready to Partner With Us?
            </h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:comms@vertmance.com?subject=Xsky%20Partnership"
                className="inline-flex min-w-[170px] justify-center bg-[#d97706] px-8 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Partner With Us
              </a>
              <a
                href="mailto:comms@vertmance.com?subject=Xsky%20Sales"
                className="inline-flex min-w-[170px] justify-center bg-[#f1dcc3] px-8 py-4 text-sm font-semibold text-[#cf7c18] transition-transform hover:-translate-y-0.5"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#23180f] px-5 py-16 text-[#c7b8a7] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                Company
              </h3>
              <ul className="space-y-4 text-sm">
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

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                Businesses
              </h3>
              <ul className="space-y-4 text-sm">
                {[
                  "Oke-Keke",
                  "Pro-Explorer",
                  "Owonikoko Ranch & Farms",
                  "Xsky Bar & Lounge",
                  "Nassarawa Commodity",
                ].map((item) => (
                  <li key={item}>
                    <button className="text-left transition-colors hover:text-white">
                      {item}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/#business"
                    className="text-xs font-bold uppercase tracking-[0.18em] text-[#d97706]"
                  >
                    View all Businesses
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                General Inquiries
              </h3>
              <div className="space-y-3 text-sm leading-6">
                <p>Call: 0814 XXX XXXX, 0913 XXX XXXX</p>
                <p>
                  Email:{" "}
                  <a
                    className="transition-colors hover:text-white"
                    href="mailto:comms@vertmance.com"
                  >
                    comms@vertmance.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {["f", "t", "ig"].map((label) => (
                  <span
                    key={label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/60 text-sm text-white"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                Newsletter
              </h3>
              <p className="text-sm">Join our weekly mailing lists</p>
              <div className="flex overflow-hidden rounded-md bg-white">
                <input
                  className="min-w-0 flex-1 px-4 py-3 text-sm text-[#171412] outline-none"
                  placeholder="Enter Your Email..."
                  type="email"
                />
                <button className="bg-[#8d8a86] px-4 text-white">→</button>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/25 pt-5 text-xs text-[#b7a998] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 All Rights Reserved</p>
            <div className="flex flex-wrap gap-6">
              <span>Legal</span>
              <span>Privacy</span>
              <span>Site Map</span>
              <span>Terms &amp; Condition</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
