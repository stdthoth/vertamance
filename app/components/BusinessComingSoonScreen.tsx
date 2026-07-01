import { useEffect } from "react";
import { Link, useParams } from "react-router";

const titles: Record<string, string> = {
  "owonikoko-ranch-management-institute": "Owonikoko Ranch Management Institute",
};

export default function BusinessComingSoonScreen() {
  const { slug } = useParams();
  const title = (slug && titles[slug]) || "Business Venture";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <header className="border-b border-black/5 bg-[#f6f4ef]">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center">
            <img
              src="/Vertmance logo.png"
              alt="Vertmance Logo"
              className="h-14 w-14 object-contain"
            />
          </Link>
          <Link
            to="/contact-us"
            className="rounded-[4px] bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[980px] px-5 py-20 sm:px-8 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d97706]">
          Coming Soon
        </p>
        <h1 className="mt-3 text-[2.4rem] font-black leading-[0.96] tracking-[-0.06em] text-[#171412] sm:text-[3.2rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6d6760]">
          This business page is planned but not fully built yet. The navigation
          is already wired so the route can be expanded without changing the
          menu.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-sm bg-[#d97706] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Back Home
          </Link>
          <Link
            to="/portfolio"
            className="rounded-sm bg-[#f1dcc3] px-6 py-3 text-sm font-semibold text-[#cf7c18] transition-transform hover:-translate-y-0.5"
          >
            View Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
