import { type FormEvent, type ReactNode, useEffect, useState } from "react";
import { Link } from "react-router";
import { BusinessFlyout } from "./BusinessFlyout";

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
        active ? "text-[#111111]" : "text-[#a7a7a7]"
      }`}
    >
      {children}
    </span>
  );
}

function SocialIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#333333] text-[#333333] transition-colors hover:border-[#e56f00] hover:text-[#e56f00]"
    >
      {children}
    </a>
  );
}

export default function ContactUsScreen() {
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] text-[#151515] selection:bg-[#e56f00] selection:text-white">
      <nav className="sticky top-0 z-40 bg-[#f1f1f1]/95 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-[1280px] items-center justify-between px-6 lg:px-7">
          <Link to="/" className="flex items-center">
            <img
              src="/Vertmance logo.png"
              alt="Vertmance Logo"
              className="h-20 w-20 object-contain"
            />
          </Link>

          <div className="hidden items-center gap-12 md:flex">
            <Link
              to="/"
              className="flex items-center gap-2 text-base font-semibold text-[#7b7b7b] transition-colors hover:text-[#111111]"
            >
              <NavIcon>
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M3 11.5L12 4l9 7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M6.5 10.75V20h11V10.75"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </NavIcon>
              Home
            </Link>
            <Link
              to="/about-us"
              className="flex items-center gap-2 text-base font-semibold text-[#7b7b7b] transition-colors hover:text-[#111111]"
            >
              <NavIcon>
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
                  <path
                    d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </NavIcon>
              About Us
            </Link>
            <button
              type="button"
              onClick={() => setBusinessMenuOpen(true)}
              className="flex items-center gap-2 text-base font-semibold text-[#7b7b7b] transition-colors hover:text-[#111111]"
            >
              <NavIcon active={businessMenuOpen}>
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M4 19V7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V19"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M3 19h18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </NavIcon>
              Business
            </button>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 text-base font-bold text-[#111111]"
            >
              <NavIcon active>
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M4.5 7.5h15v11h-15z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M8 7.5V5.75h8V7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </NavIcon>
              Portfolio
            </Link>
          </div>

          <Link
            to="/contact-us"
            className="rounded-[4px] bg-black px-8 py-4 text-base font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
        <BusinessFlyout open={businessMenuOpen} onClose={() => setBusinessMenuOpen(false)} />
      </nav>

      <main>
        <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-6 lg:px-7">
          <div className="text-center">
            <h1 className="text-[3rem] font-bold leading-tight tracking-[0] text-black sm:text-[3.45rem]">
              Contact Us
            </h1>
            <p className="mt-4 text-xl font-semibold text-[#9b9b9b]">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          <div className="mt-16 grid gap-12 bg-white px-5 py-10 md:grid-cols-[0.9fr_1.5fr] md:px-4 lg:gap-24 lg:px-4 lg:py-10">
            <aside className="relative min-h-[520px] overflow-hidden rounded-[8px] border border-[#e3e3e3] px-4 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:px-5">
              <h2 className="text-2xl font-bold tracking-[0]">Contact Information</h2>
              <p className="mt-3 text-sm font-semibold text-[#a8a8a8]">
                Say something to start a live chat
              </p>

              <div className="mt-9 space-y-9 text-base font-medium text-[#333333]">
                <div className="flex items-center gap-5">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02l-2.21 2.2z" />
                  </svg>
                  <span>0814 XXX XXX</span>
                </div>
                <div className="flex items-center gap-5">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.4 4.25-7.07 5.3a.88.88 0 0 1-1.06 0L4.4 8.25V6.5l7.6 5.7 7.6-5.7v1.75z" />
                  </svg>
                  <span>comms@vertmance.com</span>
                </div>
                <div className="flex items-start gap-5">
                  <svg className="mt-1 h-6 w-6 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                  </svg>
                  <span className="max-w-[18rem] leading-5">
                    3rd Floor, The Epicenter, No. 1 (Plot 480) Zilley Aggrey
                    Drive, Karmo, Abuja, Nigeria.
                  </span>
                </div>
              </div>

              <div className="absolute bottom-28 left-5 z-10 flex items-center gap-3">
                <SocialIcon label="Facebook">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v2H6v4h3v7h4v-7h3.3l.7-4h-4V9c0-.7.3-1 1-1z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Twitter">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.8c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3.9 5.5a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8.1 8.1 0 0 1 2.5 19 11.3 11.3 0 0 0 8.7 21c7.4 0 11.5-6.2 11.5-11.5v-.5A8 8 0 0 0 22 5.8z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Instagram">
                  <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="5" />
                    <circle cx="12" cy="12" r="3.2" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </SocialIcon>
              </div>
              <div className="absolute bottom-5 right-8 h-44 w-44 rounded-full bg-[#f6bd87]/45" />
              <div className="absolute bottom-32 right-32 h-24 w-24 rounded-full bg-[#f6bd87]/45" />
            </aside>

            <form onSubmit={handleSubmit} className="px-0 md:pr-20 lg:pr-24">
              <h2 className="text-center text-[2rem] font-bold tracking-[0] text-black">
                Contact Form
              </h2>

              <div className="mt-8 space-y-9">
                <label className="block text-lg font-semibold text-[#333333]">
                  Name <span className="text-[#d90000]">*</span>
                  <input
                    name="name"
                    required
                    className="mt-2 h-16 w-full border border-[#e1e1e1] bg-white px-4 text-base outline-none transition-colors focus:border-[#e56f00]"
                  />
                </label>
                <label className="block text-lg font-semibold text-[#333333]">
                  Email <span className="text-[#d90000]">*</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 h-16 w-full border border-[#e1e1e1] bg-white px-4 text-base outline-none transition-colors focus:border-[#e56f00]"
                  />
                </label>
                <label className="block text-lg font-semibold text-[#333333]">
                  Message
                  <textarea
                    name="message"
                    className="mt-2 h-64 w-full resize-none border border-[#e1e1e1] bg-white p-4 text-base outline-none transition-colors focus:border-[#e56f00]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-3 rounded-[6px] bg-[#e56f00] px-16 py-4 text-lg font-bold text-white transition-colors hover:bg-[#ca6200]"
              >
                Submit
              </button>
              {submitted ? (
                <p className="mt-4 text-sm font-semibold text-[#e56f00]">
                  Message received. We will get back to you shortly.
                </p>
              ) : null}
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-6 pb-24 pt-4 lg:px-7">
          <h2 className="text-2xl font-bold tracking-[0] text-black">VRL Group HQ</h2>
          <div className="mt-4 h-[610px] overflow-hidden bg-[#dedede]">
            <iframe
              title="VRL Group HQ map"
              src="https://www.google.com/maps?q=3rd%20Floor%2C%20The%20Epicenter%2C%20Zilley%20Aggrey%20Drive%2C%20Karmo%2C%20Abuja%2C%20Nigeria&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#21170d] px-6 py-12 text-[#c7c1bb] lg:px-7">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-base font-bold uppercase text-white">Company</h3>
              <ul className="mt-7 space-y-6 text-sm font-semibold">
                <li>
                  <Link to="/about-us" className="transition-colors hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/#business" className="transition-colors hover:text-white">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="transition-colors hover:text-white">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold uppercase text-white">Businesses</h3>
              <ul className="mt-7 space-y-6 text-sm font-semibold">
                {[
                  "Oke-Keke",
                  "Pro-Explorer",
                  "Owonikoko Ranch & Farms",
                  "Xsky Bar & Lounge",
                  "Nassarawa Commodity",
                  "View all Businesses",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold uppercase text-white">General Inquiries</h3>
              <div className="mt-7 space-y-6 text-sm font-semibold">
                <p>Call: 0814 XXX XXXX, 0913 XXX XXXX</p>
                <p>Email: comms@vertmance.com</p>
                <div className="flex items-center gap-4 text-white">
                  <SocialIcon label="Footer Facebook">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v2H6v4h3v7h4v-7h3.3l.7-4h-4V9c0-.7.3-1 1-1z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="Footer Twitter">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.8c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3.9 5.5a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8.1 8.1 0 0 1 2.5 19 11.3 11.3 0 0 0 8.7 21c7.4 0 11.5-6.2 11.5-11.5v-.5A8 8 0 0 0 22 5.8z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="Footer Instagram">
                    <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="5" />
                      <circle cx="12" cy="12" r="3.2" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold uppercase text-white">Newsletter</h3>
              <p className="mt-7 text-sm font-semibold">Join our weekly mailing lists</p>
              <form className="mt-5 flex max-w-[250px]">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="h-12 min-w-0 flex-1 bg-white px-4 text-xs text-[#333333] outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-12 w-12 items-center justify-center bg-[#8d8d8d] text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-white/80 pt-6 text-sm font-semibold">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p>© 2026 All Rights Reserved</p>
              <div className="flex flex-wrap gap-10">
                <span>Legal</span>
                <span>Privacy</span>
                <span>Site Map</span>
                <span>Terms &amp; Condition</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
