import React, { useState, useEffect, useRef } from "react";

// Types for components
interface Slide {
  title1: string;
  title2: string;
  description: string;
}

export default function HomeScreen() {
  // Navigation active state
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    {
      title1: "From Concept to Delivery.",
      title2: "We Build With Purpose.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title1: "Sustainable Infrastructure.",
      title2: "Engineering the Future.",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium.",
    },
    {
      title1: "Global Strategic Investments.",
      title2: "Delivering Proven Impact.",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean.",
    },
  ];

  // Auto-play interval for hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Contact Us modal state
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
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

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track scrolling to active navigation link
  useEffect(() => {
    const sections = ["home", "about", "business", "why-choose-us", "news"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans selection:bg-orange-500 selection:text-white dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
      {/* 1. HEADER / NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
              <img
                src="/Vertmance logo.png"
                alt="Vertmance Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "business", label: "Business" },
              { id: "news", label: "Portfolio" }, // Portfolio acts as a bridge to bottom segments
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm tracking-wide transition-all duration-200 relative py-2 ${
                  activeSection === link.id
                    ? "font-bold text-gray-900 dark:text-white"
                    : "font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e55a00] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Contact Us button */}
          <div className="hidden md:block">
            <button
              onClick={() => setContactModalOpen(true)}
              className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors focus:outline-none"
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
          <div className="md:hidden border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 px-6 py-4 space-y-3 transition-colors duration-300 animate-fadeIn">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "business", label: "Business" },
              { id: "news", label: "Portfolio" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm transition-all ${
                  activeSection === link.id
                    ? "font-bold bg-orange-50 dark:bg-orange-950/20 text-[#e55a00]"
                    : "font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setContactModalOpen(true);
              }}
              className="w-full mt-4 bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black py-3 rounded-md text-sm font-semibold tracking-wide transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* 2. HERO SLIDER SECTION */}
      <section
        id="home"
        className="relative overflow-hidden min-h-[500px] lg:min-h-[550px] flex items-center py-16"
      >
        {/* Carousel Content Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center relative z-10">
          {/* Slider Left Arrow */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-2 lg:left-6 p-3 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Previous Slide"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Active Slide Text Content */}
          <div className="max-w-4xl mx-auto px-10 lg:px-20 w-full transition-all duration-500 ease-in-out transform">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-gray-950 dark:text-white leading-[1.1] animate-slideUp">
                {slides[currentSlide].title1}
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#e55a00] leading-[1.1] animate-slideUp">
                {slides[currentSlide].title2}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl pt-4 font-normal animate-fadeIn">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-2 mt-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 bg-[#e55a00]"
                      : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slider Right Arrow */}
          <button
            onClick={handleNextSlide}
            className="absolute right-2 lg:right-6 p-3 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Next Slide"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* 3. ABOUT US & CORE PRINCIPLE SECTION */}
      <section
        id="about"
        className="bg-[#f6f5f2] dark:bg-gray-900/50 py-24 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: About Us Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-950 dark:text-white uppercase">
                <span className="text-[#e55a00] font-mono tracking-widest mr-1">
                  •••➔
                </span>{" "}
                About Us
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base lg:text-[17px] leading-relaxed font-normal">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
                sapien vitae pellentesque sem placerat in id. Placerat in id
                cursus mi pretium tellus duis. Pretium tellus duis convallis
                tempus leo eu aenean.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection("business")}
                  className="inline-flex items-center gap-2 bg-[#e55a00] hover:bg-[#cc5000] text-white px-6 py-3 font-semibold rounded-md shadow-md shadow-orange-500/10 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Learn more
                  <svg
                    className="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column: Image Placeholder & Core Principle */}
            <div className="space-y-12">
              {/* Image Placeholder */}
              <div className="w-full h-80 sm:h-96 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden group shadow-md shadow-gray-200/5 dark:shadow-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-300/40 to-transparent dark:from-gray-950/20" />
                <span className="text-gray-400 dark:text-gray-600 font-semibold tracking-wider uppercase text-sm z-10 select-none group-hover:scale-105 transition-transform duration-300">
                  Corporate Overview Image
                </span>
                {/* Visual decoration corners to make placeholder look premium */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-gray-300 dark:border-gray-700" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-gray-300 dark:border-gray-700" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-gray-300 dark:border-gray-700" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gray-300 dark:border-gray-700" />
              </div>

              {/* Core Principle under the image */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-950 dark:text-white uppercase">
                  <span className="text-[#e55a00] font-mono tracking-widest mr-1">
                    •••➔
                  </span>{" "}
                  Core Principle
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base lg:text-[17px] leading-relaxed font-normal">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Consectetur adipiscing elit quisque faucibus ex sapien vitae.
                  Ex sapien vitae pellentesque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR BUSINESS SECTION */}
      <section
        id="business"
        className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Header */}
          <div className="space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 dark:text-white tracking-tight">
              Our Business
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              We operate across multiple industries, creating sustainable value
              through disciplined management and long-term partnerships.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Food & Hospitality",
                description:
                  "Our core focus is on livestock and grain/pasture (feedstock) farming, as-well-as developing a workable model built resolve the longstanding security, nutritional, access and safety issues associated with the industry.",
              },
              {
                title: "Engineering & Construction",
                description:
                  "Our core focus is on livestock and grain/pasture (feedstock) farming, as-well-as developing a workable model built resolve the longstanding security, nutritional, access and safety issues associated with the industry.",
              },
              {
                title: "Group Investment",
                description:
                  "Our core focus is on livestock and grain/pasture (feedstock) farming, as-well-as developing a workable model built resolve the longstanding security, nutritional, access and safety issues associated with the industry.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Card Image Placeholder */}
                  <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/50 to-transparent dark:from-gray-950/20" />
                    <span className="text-gray-400 dark:text-gray-500 font-semibold tracking-wider uppercase text-xs select-none">
                      {card.title} Asset
                    </span>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    {card.description}
                  </p>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-[#e55a00] hover:bg-[#cc5000] text-white px-8 py-2.5 rounded-md font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95 w-fit mx-auto shadow-md shadow-orange-500/5"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section
        id="why-choose-us"
        className="bg-[#f6f5f2] dark:bg-gray-900/50 py-24 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Header */}
          <div className="space-y-3 mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#e55a00] uppercase">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight max-w-3xl mx-auto">
              ONE GROUP. MULTIPLE SOLUTIONS. PROVEN IMPACT.
            </h2>
          </div>

          {/* Features Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Resources Investment & Management",
                description:
                  "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
                icon: (
                  <svg
                    className="w-12 h-12 text-gray-950 dark:text-white mx-auto stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    {/* Handdrawn stack of gold coins */}
                    <ellipse cx="12" cy="7" rx="6" ry="3" />
                    <path d="M6 7v3.5c0 1.66 2.69 3 6 3s6-1.34 6-3V7" />
                    <path d="M6 10.5v3.5c0 1.66 2.69 3 6 3s6-1.34 6-3v-3.5" />
                    <path d="M6 14v3.5c0 1.66 2.69 3 6 3s6-1.34 6-3V14" />
                  </svg>
                ),
              },
              {
                title: "Project & Business Consultancy",
                description:
                  "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
                icon: (
                  <svg
                    className="w-12 h-12 text-gray-950 dark:text-white mx-auto stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    {/* Corporate delivery truck outline */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125a1.125 1.125 0 0 0 1.125-1.125V9.75M3.75 12h12.5M2.25 9.75h16.5a1.5 1.5 0 0 1 1.5 1.5v5.625M2 5.25h16.5c.414 0 .75.336.75.75v3"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9.75V5.25"
                    />
                  </svg>
                ),
              },
              {
                title: "Integrated Livestock & Crops",
                description:
                  "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
                icon: (
                  <svg
                    className="w-12 h-12 text-gray-950 dark:text-white mx-auto stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    {/* Sprout with cupping leaf details */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21V9m0 0a3 3 0 0 1 3-3h1m-4 3a3 3 0 0 0-3-3H9m3 3V5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5a3 3 0 0 1 3-3h1m-4 3a3 3 0 0 0-3-3H9"
                    />
                  </svg>
                ),
              },
              {
                title: "Engineering & Construction",
                description:
                  "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
                icon: (
                  <svg
                    className="w-12 h-12 text-gray-950 dark:text-white mx-auto stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    {/* Safety hard hat outline */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A1.5 1.5 0 0 0 19.5 21l2-2a1.5 1.5 0 0 0 0-2.25l-5.83-5.83m-4.25 4.25L4.5 13.5A1.5 1.5 0 0 1 4.5 11l2-2a1.5 1.5 0 0 1 2.25 0l3.83 3.83m-1.16 1.16a1.5 1.5 0 1 1-2.12-2.12"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v4m0 0H8m4 0h4"
                    />
                  </svg>
                ),
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="space-y-4 px-2 hover:scale-[1.03] transition-transform duration-200 select-none"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
                  {feature.icon}
                </div>

                {/* Feature Title */}
                <h3 className="text-[17px] font-extrabold text-gray-950 dark:text-white leading-snug">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VIDEO / PARALLAX PLACEHOLDER SECTION */}
      <section className="relative w-full h-[320px] sm:h-[420px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />

        {/* Animated Ripple Circles */}
        <div className="absolute w-44 h-44 bg-[#e55a00]/10 rounded-full animate-ping pointer-events-none" />

        {/* Play Button */}
        <button
          onClick={() => setVideoModalOpen(true)}
          className="relative z-20 w-20 h-20 sm:w-24 sm:h-24 bg-white hover:bg-orange-50 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none"
          aria-label="Play Overview Video"
        >
          {/* Inner play triangle */}
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-gray-950 group-hover:text-[#e55a00] fill-current translate-x-1 transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Floating Tag */}
        <span className="absolute bottom-6 left-6 z-20 text-xs font-semibold tracking-wider text-gray-400 select-none uppercase">
          Corporate Reel • Play Overview
        </span>
      </section>

      {/* 7. LATEST NEWS / COMPANY NEWS SECTION */}
      <section
        id="news"
        className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#e55a00] uppercase">
              Latest News
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 dark:text-white tracking-tight">
              Company News
            </h2>
          </div>

          {/* Cards 4-column row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-gray-200/50 dark:hover:border-gray-700 transition-all duration-200 group"
              >
                <div>
                  {/* News Image placeholder */}
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/30 to-transparent dark:from-gray-950/10" />
                    <span className="text-gray-400 dark:text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                      News Image Thumbnail
                    </span>
                  </div>

                  {/* News Content Paragraph */}
                  <p className="text-gray-600 dark:text-gray-400 text-[13px] leading-relaxed mb-6 font-medium group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus ex sapien sem placerat in id cursus
                    mi.Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>

                {/* News Date in Bottom Right */}
                <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 self-end">
                  11 Feb, 2026
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#14110f] text-gray-400 dark:bg-black py-20 px-6 lg:px-12 border-t border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
            {/* Column 1: Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("business")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Business
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("news")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Portfolio
                  </button>
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
                  "Owonikoko Ranch & Farms",
                  "Xsky Bar & Lounge",
                  "Nassarawa Commodity",
                ].map((bus) => (
                  <li key={bus}>
                    <button
                      onClick={() => setContactModalOpen(true)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {bus}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => scrollToSection("business")}
                    className="hover:text-white font-bold transition-colors text-left text-xs text-[#e55a00] uppercase tracking-wider"
                  >
                    View all Businesses
                  </button>
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
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#e55a00] hover:text-white hover:border-transparent transition-all hover:scale-105 active:scale-95"
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
                  className="absolute right-1 top-1 bottom-1 w-10 bg-white/10 hover:bg-[#e55a00] text-white hover:text-white flex items-center justify-center rounded-sm transition-all focus:outline-none"
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
                (item) => (
                  <button
                    key={item}
                    onClick={() => setContactModalOpen(true)}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>

      {/* 9. VIDEO PLAYBACK LIGHTBOX MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-4xl overflow-hidden relative shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close Video"
            >
              <svg
                className="w-6 h-6"
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

            {/* Simulated high-end HTML5 player or loop overlay */}
            <div className="aspect-video w-full bg-black relative flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#e55a00] rounded-full flex items-center justify-center animate-pulse">
                  <svg
                    className="w-8 h-8 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Vertamance Corporate Reel 2026
                </h3>
                <p className="text-sm text-gray-400 max-w-md">
                  A visual summary showcasing our concepts, purpose-built
                  models, sustainable crop operations, and high-quality
                  construction.
                </p>
                <div className="pt-4 flex items-center gap-4 text-xs font-semibold text-gray-500">
                  <span>Progress: 0:42 / 3:15</span>
                  <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-[20%] h-full bg-[#e55a00]" />
                  </div>
                  <span>HD 1080p</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10. CONTACT US OVERLAY MODAL */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl w-full max-w-lg overflow-hidden relative shadow-2xl p-8 space-y-6">
            {/* Close button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full flex items-center justify-center transition-colors focus:outline-none"
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
              <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">
                Get In Touch
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
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
                <h4 className="text-lg font-bold text-gray-950 dark:text-white">
                  Message Transmitted!
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  We have received your request. An engineering/consultancy
                  expert will respond shortly.
                </p>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
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
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] dark:text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
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
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
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
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
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
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] dark:text-white resize-none"
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
