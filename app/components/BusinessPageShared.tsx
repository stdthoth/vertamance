import { Link } from "react-router";
import type { ReactNode } from "react";
import { useState } from "react";
import { BusinessFlyout } from "./BusinessFlyout";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export function BusinessMicrositeNav({
  items,
  primaryAction,
  secondaryAction,
}: {
  items: NavItem[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}) {
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f7f6f4]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center">
          <img
            src="/Vertmance logo.png"
            alt="Vertmance"
            className="h-14 w-14 object-contain"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {items.map((item) =>
            item.label.toLowerCase() === "business" ? (
              <button
                key={item.label}
                type="button"
                onClick={() => setBusinessMenuOpen(true)}
                className={`relative py-2 text-sm transition-colors ${
                  item.active
                    ? "font-bold text-[#171412]"
                    : "font-semibold text-[#8c8882] hover:text-[#171412]"
                }`}
              >
                {item.label}
                {item.active ? (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#df6f00]" />
                ) : null}
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-2 text-sm transition-colors ${
                  item.active
                    ? "font-bold text-[#171412]"
                    : "font-semibold text-[#8c8882] hover:text-[#171412]"
                }`}
              >
                {item.label}
                {item.active ? (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#df6f00]" />
                ) : null}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-3">
          {secondaryAction ? (
            <a
              href={secondaryAction.href}
              className="hidden rounded-[4px] border border-[#df6f00] px-5 py-2.5 text-sm font-bold text-[#df6f00] transition-colors hover:bg-[#fff2e4] sm:inline-flex"
            >
              {secondaryAction.label}
            </a>
          ) : null}
          <a
            href={primaryAction?.href || "/contact-us"}
            className="rounded-[4px] bg-black px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            {primaryAction?.label || "Contact Us"}
          </a>
        </div>
      </nav>
      <BusinessFlyout
        open={businessMenuOpen}
        onClose={() => setBusinessMenuOpen(false)}
      />
    </header>
  );
}

export function BusinessFooter() {
  const businesses = [
    "Oke-Keke",
    "Pro-Explorer",
    "Owonikoko Ranch & Farms",
    "Xsky Bar & Lounge",
    "Nassarawa Commodity",
    "View all Businesses",
  ];

  return (
    <footer className="bg-[#21170d] px-5 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">
              Company
            </h3>
            <div className="mt-6 space-y-4 text-sm font-semibold text-white/70">
              <Link to="/about-us" className="block hover:text-white">
                About Us
              </Link>
              <a href="/#business" className="block hover:text-white">
                Business
              </a>
              <Link to="/portfolio" className="block hover:text-white">
                Portfolio
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">
              Businesses
            </h3>
            <div className="mt-6 space-y-4 text-sm font-semibold text-white/70">
              {businesses.map((business) => (
                <a key={business} href="/#business" className="block hover:text-white">
                  {business}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">
              General Inquiries
            </h3>
            <div className="mt-6 space-y-4 text-sm font-semibold text-white/70">
              <p>Call: 0814 XXX XXXX, 0913 XXX XXXX</p>
              <p>Email: comms@vertmance.com</p>
            </div>
            <div className="mt-6 flex gap-3">
              {["f", "x", "ig"].map((social) => (
                <button
                  key={social}
                  type="button"
                  aria-label={social}
                  className="h-9 w-9 rounded-full border border-white/50 text-xs font-black text-white transition-colors hover:bg-white hover:text-[#21170d]"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">
              Newsletter
            </h3>
            <p className="mt-6 text-sm font-semibold text-white/70">
              Join our weekly mailing lists
            </p>
            <form className="mt-5 flex overflow-hidden rounded-[4px] bg-white">
              <input
                type="email"
                placeholder="Enter Your Email..."
                className="min-w-0 flex-1 px-4 py-3 text-sm text-[#171412] outline-none"
              />
              <button
                type="submit"
                className="flex w-12 items-center justify-center bg-[#8a867e] text-white"
                aria-label="Subscribe"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14m-5-5 5 5-5 5"
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

        <div className="flex flex-col gap-5 border-t border-white/55 pt-6 text-xs font-semibold text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 All Rights Reserved</p>
          <div className="flex flex-wrap gap-8">
            <a href="/legal" className="hover:text-white">
              Legal
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/sitemap" className="hover:text-white">
              Site Map
            </a>
            <a href="/terms" className="hover:text-white">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Placeholder({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#d8d8d8] ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.26),transparent_45%)]" />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#df6f00]">
      {children}
    </p>
  );
}

export function OrangeIcon({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0df] text-sm font-black text-[#df6f00]">
      {children}
    </span>
  );
}

export function FormInput({
  label,
  placeholder,
  className = "",
}: {
  label: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-bold uppercase tracking-wide text-[#77716a]">
        {label}
      </span>
      <input
        placeholder={placeholder}
        className="mt-2 w-full rounded-[6px] border border-black/5 bg-[#f8efe6] px-4 py-3 text-sm text-[#171412] outline-none focus:border-[#df6f00]"
      />
    </label>
  );
}

export function FormTextarea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wide text-[#77716a]">
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        rows={5}
        className="mt-2 w-full resize-none rounded-[6px] border border-black/5 bg-[#f8efe6] px-4 py-3 text-sm text-[#171412] outline-none focus:border-[#df6f00]"
      />
    </label>
  );
}
