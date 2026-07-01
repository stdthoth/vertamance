import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { BusinessFlyout } from "./BusinessFlyout";

export default function FoodHospitalityScreen() {
  // Navigation active state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Contact Us modal state
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [nassacoCardOpen, setNassacoCardOpen] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactData.name && contactData.email && contactData.message) {
      setContactSubmitted(true);
      setTimeout(() => {
        setContactModalOpen(false);
        setContactSubmitted(false);
        setContactData({ name: "", email: "", subject: "", message: "" });
      }, 2500);
    }
  };

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setNewsletterStatus("success");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterStatus("idle"), 4000);
    } else {
      setNewsletterStatus("error");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleBusinessMenu = () => {
    setMobileMenuOpen(false);
    setBusinessMenuOpen((open) => !open);
  };

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans selection:bg-orange-500 selection:text-white transition-colors duration-300">
      {/* 1. HEADER / NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
              <img
                src="/Vertmance logo.png"
                alt="Vertmance Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className="text-sm tracking-wide font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 py-2"
            >
              Home
            </Link>
            <a
              href="/about-us"
              className="text-sm tracking-wide font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 py-2"
            >
              About Us
            </a>
            <button
              type="button"
              onClick={toggleBusinessMenu}
              className="text-sm tracking-wide font-bold text-gray-900 transition-all duration-200 py-2 relative"
            >
              Business
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e55a00] rounded-full" />
            </button>
            <a
              href="/portfolio"
              className="text-sm tracking-wide font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 py-2"
            >
              Portfolio
            </a>
          </div>

          {/* Contact Us button */}
          <div className="hidden md:block">
            <Link
              to="/contact-us"
              className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 transition-colors duration-300 animate-fadeIn">
            <Link
              to="/"
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Home
            </Link>
            <a
              href="/about-us"
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              About Us
            </a>
            <button
              type="button"
              onClick={toggleBusinessMenu}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-bold bg-orange-50 text-[#e55a00]"
            >
              Business
            </button>
            <a
              href="/portfolio"
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Portfolio
            </a>
            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-3 rounded-md text-sm font-semibold tracking-wide transition-colors"
            >
              Contact Us
            </Link>
          </div>
        )}
        <BusinessFlyout
          open={businessMenuOpen}
          onClose={() => setBusinessMenuOpen(false)}
        />
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-orange-50 text-[#e55a00] border border-orange-100 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  New Launch
                </span>
                <span className="bg-orange-50 text-[#e55a00] border border-orange-100 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Sustainable Farming Initiative 2026
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-gray-950 leading-[1.15] animate-slideUp">
                Delivering Experience in{" "}
                <span className="text-[#e55a00]">Food, Hospitality</span> &amp;
                Agriculture
              </h1>

              {/* Description */}
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl pt-2 font-normal animate-fadeIn">
                From premium dining experiences to sustainable farming and
                training. We bridge the gap between rural production and urban
                luxury.
              </p>
            </div>

            {/* Right Asymmetrical Grid Placeholder */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-[380px] sm:h-[440px]">
              {/* Tall Left Box */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/50 flex flex-col justify-end p-6 group hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-widest text-gray-400">
                  Premium Dining
                </span>
                {/* Subtle graphic lines */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                  <svg
                    className="w-full h-full text-[#e55a00]"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="relative z-20 text-white">
                  <h4 className="font-extrabold text-sm tracking-wide uppercase">
                    Hospitality Excellence
                  </h4>
                  <p className="text-[11px] text-gray-200/90 mt-1 font-medium">
                    Elevating dining with organic inputs.
                  </p>
                </div>
              </div>

              {/* Stacked Right Boxes */}
              <div className="grid grid-rows-2 gap-4 h-full">
                {/* Top Box */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/50 flex flex-col justify-end p-4 group hover:shadow-md transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-[radial-gradient(#e55a0015_1px,transparent_1px)] [background-size:16px_16px]" />
                  <span className="absolute top-3 left-3 text-[9px] uppercase font-bold tracking-widest text-gray-400">
                    Owonikoko Ranch
                  </span>
                  <div className="relative z-20 text-white">
                    <h4 className="font-extrabold text-xs tracking-wide uppercase">
                      Sustainable Farms
                    </h4>
                  </div>
                </div>

                {/* Bottom Box */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/50 flex flex-col justify-end p-4 group hover:shadow-md transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <span className="absolute top-3 left-3 text-[9px] uppercase font-bold tracking-widest text-gray-400">
                    Xsky Lounge
                  </span>
                  <div className="relative z-20 text-white">
                    <h4 className="font-extrabold text-xs tracking-wide uppercase">
                      Urban Luxury
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT OUR GROUP SECTION */}
      <section className="bg-[#f6f5f2] py-20 lg:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Image Placeholder */}
            <div className="w-full h-[360px] sm:h-[440px] bg-gray-200 rounded-3xl flex items-center justify-center relative overflow-hidden group shadow-md shadow-gray-200/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-300/40 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e55a0008_1px,transparent_1px),linear-gradient(to_bottom,#e55a0008_1px,transparent_1px)] bg-[size:32px_32px]" />
              <span className="text-gray-400 font-extrabold tracking-wider uppercase text-xs z-10 select-none group-hover:scale-105 transition-transform duration-300">
                Integrated Farm-To-Table Blueprint
              </span>
              {/* Visual decoration corners */}
              <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[#e55a00]/30" />
              <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[#e55a00]/30" />
              <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[#e55a00]/30" />
              <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[#e55a00]/30" />
            </div>

            {/* Right Column: About Our Group Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#e55a00] uppercase">
                <span className="font-mono tracking-widest mr-1">•••➔</span>{" "}
                About Our Group
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Integrated Farm-to-Table Hospitality
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Xsky &amp; Owonikoko represent a unique synergy between
                  high-end urban lifestyle and essential rural productivity. We
                  believe that true quality in hospitality starts in the soil.
                </p>
                <p>
                  Our integrated approach ensures that every ingredient served
                  at Xsky is sourced with care from Owonikoko Ranch, and every
                  farmer we train is equipped with modern, market-driven
                  techniques.
                </p>
              </div>

              {/* Badges at bottom */}
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="bg-[#e6ebdf] text-green-800 text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-green-200/30">
                  Sustainable Practices
                </span>
                <span className="bg-[#e2f0fc] text-blue-800 text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-blue-200/30">
                  Premium Quality
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SUBSIDIARIES SECTION */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#e55a00] uppercase">
              Our Subsidiaries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Diversified Excellence
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Explore the two pillars of our organization, each leading in their
              respective fields.
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <button
              type="button"
              onClick={() => setNassacoCardOpen((open) => !open)}
              aria-expanded={nassacoCardOpen}
              aria-controls="nassaco-subsidiary-card"
              aria-label={
                nassacoCardOpen
                  ? "Hide Nassaco subsidiary card"
                  : "Show Nassaco subsidiary card"
              }
              className="h-11 w-16 rounded-full border border-gray-200 bg-white text-stone-900 shadow-sm hover:border-[#e55a00]/50 hover:text-[#e55a00] hover:shadow-md active:scale-95 transition-all duration-200 flex items-center justify-center"
            >
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  nassacoCardOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 12h16m-6-6 6 6-6 6"
                />
              </svg>
            </button>
          </div>

          {/* Subsidiary Grid */}
          <div className="overflow-hidden">
            <div
              className={`grid grid-cols-1 gap-12 transition-all duration-500 ease-out ${
                nassacoCardOpen ? "lg:grid-cols-3" : "lg:grid-cols-2"
              }`}
            >
              {/* Card 1: XSKY Restaurant & Lounge */}
              <div className="bg-white border border-gray-150/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div>
                  {/* Asset Placeholder */}
                  <div className="w-full h-64 bg-gray-100 rounded-xl mb-8 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/55 to-transparent z-10" />
                    {/* Subtle graphical layout */}
                    <div className="absolute inset-y-0 right-10 w-24 bg-[#e55a00]/5 -skew-x-12" />
                    <span className="text-gray-400 font-extrabold tracking-widest uppercase text-xs select-none relative z-20">
                      Xsky Restaurant &amp; Lounge Asset
                    </span>
                  </div>

                {/* Typography Block */}
                <div className="space-y-1 mb-4">
                  <div className="font-serif italic font-bold text-gray-400 text-[17px] uppercase tracking-widest">
                    Xsky
                  </div>
                  <div className="text-[#e55a00] text-xs font-bold tracking-widest uppercase">
                    Restaurant &amp; Lounge
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                  Experience urban sophistication. Xsky offers premium dining, a
                  world-class lounge, and vibrant nightlife events curated for
                  the discerning palate.
                </p>

                {/* List Items */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-sm">
                      🍴
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      Fine Dining &amp; Global Cuisine
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-sm">
                      🍸
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      Exclusive Lounge &amp; Cocktail Bar
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-sm">
                      👑
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      Private Event &amp; VVIP Hosting
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <Link
                to="/xsky-cafe-lounge"
                className="bg-[#e55a00] hover:bg-[#cc5000] text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition-all hover:scale-[1.01] active:scale-95 w-full shadow-md shadow-orange-500/5 cursor-pointer text-center block"
              >
                Visit Xsky Website
              </Link>
            </div>

            {/* Card 2: OWONIKOKO Ranch & Farms */}
            <div className="bg-white border border-gray-150/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div>
                {/* Asset Placeholder */}
                <div className="w-full h-64 bg-gray-100 rounded-xl mb-8 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/55 to-transparent z-10" />
                  <div className="absolute inset-y-0 left-12 w-20 bg-emerald-700/5 skew-x-6" />
                  <span className="text-gray-400 font-extrabold tracking-widest uppercase text-xs select-none relative z-20">
                    Owonikoko Ranch &amp; Farms Asset
                  </span>
                </div>

                {/* Typography Block */}
                <div className="space-y-1 mb-4">
                  <div className="font-serif italic font-bold text-gray-400 text-[17px] uppercase tracking-widest">
                    Owonikoko
                  </div>
                  <div className="text-stone-800 text-xs font-bold tracking-widest uppercase">
                    Ranch &amp; Farms
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                  The foundation of our quality. Owonikoko is a center of
                  excellence for sustainable crop production, modern livestock
                  and agricultural education.
                </p>

                {/* List Items */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-sm">
                      🌾
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      Sustainable Crop Production
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-sm">
                      🐂
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      Premium Livestock Farming
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-sm">
                      🎓
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      Modern Agricultural Training Institute
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setContactModalOpen(true)}
                className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition-all hover:scale-[1.01] active:scale-95 w-full shadow-md shadow-stone-500/5 cursor-pointer"
              >
                Explore the Farm
              </button>
            </div>

              {/* Card 3: Nassaco Farm */}
              {nassacoCardOpen && (
                <div
                  id="nassaco-subsidiary-card"
                  className="min-w-0 animate-subsidiarySlideOut"
                >
                  <div className="h-full bg-white rounded-2xl p-2 shadow-md shadow-gray-200/70 border border-gray-100 flex flex-col">
                    <div className="relative h-64 bg-[#d9d9d9] rounded-t-2xl overflow-hidden flex items-end p-5">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      <h3 className="relative z-10 text-white text-sm font-extrabold">
                        Nassaco
                      </h3>
                    </div>

                    <div className="flex-1 px-5 pt-4 pb-2">
                      <p className="text-gray-600 text-sm leading-relaxed mb-7">
                        The foundation of our quality. Owonikoko is a center of
                        excellence for sustainable crop production, modern
                        livestock and agricultural education.
                      </p>

                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <span className="w-5 h-5 flex items-center justify-center text-base">
                            🌾
                          </span>
                          <span className="text-xs font-medium text-gray-500">
                            Sustainable Crop Production
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-5 h-5 flex items-center justify-center text-base">
                            🐂
                          </span>
                          <span className="text-xs font-medium text-gray-500">
                            Premium Livestock Farming
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-5 pt-8">
                      <button
                        type="button"
                        onClick={() => setContactModalOpen(true)}
                        className="w-full bg-[#24190e] hover:bg-[#332315] text-white py-3.5 rounded-md text-xs font-extrabold transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                      >
                        Visit Nassaco Farm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE SERVICES SECTION */}
      <section className="bg-[#fcfbf9] py-20 lg:py-24 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#e55a00] uppercase block mb-2">
                Core Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Comprehensive Expertise
              </h2>
            </div>
            <div>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed lg:pt-6">
                Our cross-industry presence allows us to offer specialized
                services that drive value for our clients and the community.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-gray-150/70 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-100/70 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#e55a00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-gray-950 mb-3">
                Catering &amp; Hospitality
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Bespoke catering for corporate events, weddings, and private
                gatherings, featuring our signature farm-to-table menus.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-150/70 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-100/70 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#e55a00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-gray-950 mb-3">
                Agric-Production
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Supply of organic produce, high-grade grains, and premium
                livestock to wholesalers, retailers, and high-end restaurants.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-150/70 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-100/70 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#e55a00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v6m0 0H8m4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-gray-950 mb-3">
                Training &amp; Capacity Building
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Empowering youths and aspiring agric-preneurs through hands-on
                technical training and agribusiness mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY PARTNER WITH US SECTION (OUR COMPETITIVE EDGE) */}
      <section className="bg-[#1a1f18] py-20 lg:py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Column */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-[#e55a00] uppercase block">
                  Our Competitive Edge
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Why Partner With Us?
                </h2>
              </div>

              {/* Icon List */}
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e55a00]">
                    🏢
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[15px] text-gray-100">
                      Farm-to-Table Integrity
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Total control over our supply chain ensures the freshest
                      ingredients and highest quality standards in every bite.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e55a00]">
                    🎗️
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[15px] text-gray-100">
                      Quality &amp; Freshness
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      We prioritize nutrient-dense, locally sourced produce that
                      is harvested at peak flavour for our restaurants and
                      partners.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e55a00]">
                    👥
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[15px] text-gray-100">
                      Experienced Team
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Led by industry veterans in hospitality management and
                      agricultural science.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e55a00]">
                    🌱
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[15px] text-gray-100">
                      Sustainable Practices
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      Committed to eco-friendly farming techniques that protect
                      the soil and support long-term food security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic Card Column */}
            <div className="h-[400px] sm:h-[480px] bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial-gradient(circle_at_top_right,rgba(229,90,0,0.15),transparent)" />
              <div className="space-y-2">
                <span className="text-[#e55a00] text-[10px] font-extrabold tracking-widest uppercase block">
                  Vertmance Group
                </span>
                <h3 className="text-2xl font-extrabold text-white leading-tight">
                  Premium Standards, <br />
                  Every Day
                </h3>
              </div>
              <div className="w-full h-40 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
                  Corporate Edge Visualization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Header */}
          <div className="space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#e55a00] uppercase block">
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Our World in Pictures
            </h2>
          </div>

          {/* Grid Layout of placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[720px] sm:h-[640px] md:h-[500px]">
            {/* Tall Left Box (spans 2 rows on desktop) */}
            <div className="md:row-span-2 relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-150 flex items-center justify-center group hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/40 to-transparent z-10" />
              <span className="text-gray-400 font-bold uppercase text-xs z-20">
                Crop Operations
              </span>
            </div>

            {/* Top Middle Box */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-150 flex items-center justify-center group hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/40 to-transparent z-10" />
              <span className="text-gray-400 font-bold uppercase text-xs z-20">
                Livestock Health
              </span>
            </div>

            {/* Top Right Box */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-150 flex items-center justify-center group hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/40 to-transparent z-10" />
              <span className="text-gray-400 font-bold uppercase text-xs z-20">
                Xsky Kitchens
              </span>
            </div>

            {/* Bottom Right Wide Box (spans 2 columns on desktop) */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-150 flex items-center justify-center group hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/40 to-transparent z-10" />
              <span className="text-gray-400 font-bold uppercase text-xs z-20">
                Agribusiness Training Sessions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#14110f] text-gray-400 py-20 px-6 lg:px-12 border-t border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
            {/* Column 1: Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors text-left block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="hover:text-white transition-colors text-left block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#business"
                    className="hover:text-white transition-colors text-left block"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="hover:text-white transition-colors text-left block"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Businesses */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                Businesses
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Oke-Keke",
                  "Pro-Explorer",
                  "Owonikoko Ranch &amp; Farms",
                  "Xsky Bar &amp; Lounge",
                  "Nassarawa Commodity",
                ].map((bus, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setContactModalOpen(true)}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                      dangerouslySetInnerHTML={{ __html: bus }}
                    />
                  </li>
                ))}
                <li>
                  <a
                    href="/#business"
                    className="hover:text-white font-bold transition-colors text-left text-xs text-[#e55a00] uppercase tracking-wider block"
                  >
                    View all Businesses
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: General Inquiries */}
            <div className="space-y-5">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                General Inquiries
              </h4>
              <div className="space-y-2 text-sm leading-relaxed">
                <p>Call: 0814 XXX XXXX, 0913 XXX XXXX</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:comms@vertmance.com"
                    className="hover:text-white transition-colors"
                  >
                    comms@vertmance.com
                  </a>
                </p>
              </div>

              {/* Social Icons inside circular buttons */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  {
                    name: "Facebook",
                    icon: (
                      <svg
                        className="w-4.5 h-4.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Twitter",
                    icon: (
                      <svg
                        className="w-4.5 h-4.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    icon: (
                      <svg
                        className="w-4.5 h-4.5 fill-none stroke-current"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <button
                    key={social.name}
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#e55a00] hover:text-white hover:border-transparent transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                Newsletter
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                Join our weekly mailing lists
              </p>

              {/* Form Input with inside action button */}
              <form onSubmit={handleNewsletterSubmit} className="relative mt-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter Your Email..."
                  required
                  className="w-full bg-[#1e1a17]/80 text-white placeholder-gray-500 rounded-sm border border-white/10 px-4 py-3 pr-12 text-sm focus:outline-none focus:border-[#e55a00] focus:ring-1 focus:ring-[#e55a00] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 w-10 bg-white/10 hover:bg-[#e55a00] text-white hover:text-white flex items-center justify-center rounded-sm transition-all focus:outline-none cursor-pointer"
                  aria-label="Subscribe"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </form>

              {/* Newsletter feedback messages */}
              {newsletterStatus === "success" && (
                <p className="text-xs text-green-500 font-semibold animate-fadeIn">
                  ✓ Awesome, you&apos;ve subscribed successfully!
                </p>
              )}
              {newsletterStatus === "error" && (
                <p className="text-xs text-red-500 font-semibold animate-fadeIn">
                  ✗ Please enter a valid email address.
                </p>
              )}
            </div>
          </div>

          {/* Divider line */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-xs font-semibold text-gray-500">
              © 2026 All Rights Reserved
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-gray-500">
              {["Legal", "Privacy", "Site Map", "Terms & Condition"].map(
                (item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setContactModalOpen(true)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* 9. CONTACT US OVERLAY MODAL */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white border border-gray-100 rounded-2xl w-full max-w-lg overflow-hidden relative shadow-2xl p-8 space-y-6">
            {/* Close button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-gray-950">
                Get In Touch
              </h3>
              <p className="text-sm text-gray-500">
                Let us know what you have in mind. We are here to support your
                journey.
              </p>
            </div>

            {/* Submitted Success UI */}
            {contactSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-4 animate-scaleUp">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-950">
                  Message Transmitted!
                </h4>
                <p className="text-sm text-gray-500 text-center">
                  We have received your request. An engineering/consultancy
                  expert will respond shortly.
                </p>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={(e) =>
                        setContactData({ ...contactData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] text-gray-950"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={contactData.email}
                      onChange={(e) =>
                        setContactData({
                          ...contactData,
                          email: e.target.value,
                        })
                      }
                      placeholder="jane@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] text-gray-950"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={contactData.subject}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        subject: e.target.value,
                      })
                    }
                    placeholder="E.g., Business Collaboration"
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] text-gray-950"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 uppercase">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactData.message}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell us about your project scope or general inquiries..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] text-gray-950 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-[#e55a00] hover:bg-[#cc5000] text-white font-bold py-3 rounded-md text-sm transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
