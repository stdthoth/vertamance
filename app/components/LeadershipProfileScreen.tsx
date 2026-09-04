import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { BusinessFlyout } from "./BusinessFlyout";

type LeaderProfile = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  bio: string[];
  highlights: { title: string; text: string }[];
  imageSrc?: string;
};

const leaderProfiles: LeaderProfile[] = [
  {
    slug: "damilola-agboola",
    name: "Damilola Agboola",
    role: "Co-Founder and Managing Director(VAP)",
    summary:
      "Finance leader focused on disciplined treasury operations, reporting clarity, and portfolio control.",
    bio: [
      "Damilola Agboola supports Vertmance with a finance-first operating style built around transparency, discipline, and reliable control.",
      "His role centers on treasury management, financial discipline, and keeping the group's operating rhythm aligned with long-term strategy.",
      "Across the portfolio, the priority is simple: make capital allocation clear, keep the books clean, and support growth with structure.",
    ],
    highlights: [
      { title: "Treasury Control", text: "Maintains liquidity discipline and capital visibility." },
      { title: "Reporting Rhythm", text: "Supports accurate, decision-ready financial reporting." },
      { title: "Group Oversight", text: "Helps align operating units with financial guardrails." },
      { title: "Risk Discipline", text: "Keeps performance and exposure under close review." },
    ],
    imageSrc: "/Website jpeg/Untitled (Instagram Post (45)) (13).png",
  },
  {
    slug: "suleiman-olawale",
    name: "Suleiman Olawale",
    role: "Chief of Staff",
    summary:
      "Chief of staff supporting executive coordination, internal alignment, and operational follow-through.",
    bio: [
    ],
    highlights: [
      { title: "Executive Coordination", text: "Keeps leadership priorities synchronized." },
      { title: "Operational Follow-Through", text: "Tracks execution from briefing to completion." },
      { title: "Communication", text: "Supports internal clarity across teams." },
      { title: "Planning Support", text: "Helps organize the next action across functions." },
    ],
    imageSrc: "/Website jpeg/olawale.png",
  },
  {
    slug: "aramide-olugbenga-wyse",
    name: "Aramide Olugbenga Wyse",
    role: "Group Human Resource",
    summary:
      "HR leader focused on people systems, organizational structure, and workforce development.",
    bio: [
      "Aramide Muinat Olugbenga-Wyse is an experienced Human Resources and Corporate Services professional with over 22 years of work experience, including more than 15 years in Human Resources. She is currently the Group Head, Human Resources & Corporate Services at Vertmance Resources Limited, where she oversees the Group's HR and administrative functions.Before joining Vertmance Resources Limited, Aramide worked in the fertility and reproductive healthcare industry for almost five years, where she played a key role in recruitment and operational coordination while maintaining high professional and ethical standards.",

      "She began her career in the media industry, spending over 10 years at Top Radio 90.9 FM in administrative and editorial roles. That experience helped shape her strong communication, leadership, and organizational skills, which have been valuable throughout her HR career.",
      "Aramide holds a Bachelor's degree in Mass Communication from the University of Lagos and is an Associate Member of the Chartered Institute of Personnel Management (CIPM) of Nigeria. Over the years, she has developed practical HR systems, supported organizational growth, and helped build strong, people-focused workplaces. She is passionate about developing talent, improving workplace culture, and creating HR practices that support both employees and business success.",
    ],
    highlights: [
      { title: "People Systems", text: "Supports recruitment, structure, and workforce planning." },
      { title: "Culture", text: "Helps sustain a disciplined but practical workplace environment." },
      { title: "Organization Design", text: "Keeps roles and responsibilities clear." },
      { title: "Development", text: "Supports growth through training and internal alignment." },
    ],
    imageSrc: "/Website jpeg/Aramide.PNG",
  },
  {
    slug: "bankole-olabisi",
    name: "Olabisi Bankole",
    role: "Managing Partner (VEC)",
    summary:
      "Executive leader with focus on strategy, delivery, and enterprise oversight.",
    bio: [
      "Olabisi Robert Bankole is a construction and project management professional with experience in quantity surveying, infrastructure development, and project delivery. As Managing Partner of Vertmance Engineering & Construction Limited, he provides strategic leadership, overseeing projects with a focus on quality, efficiency, cost management, and timely delivery.",
      "He has also held leadership and project management roles across the public and private sectors, including Jomofiro Nigeria Limited and Citec International Estates Limited. His experience covers project planning, contract administration, budgeting, procurement, and construction management.",
      "Bankole holds a B.Tech in Quantity Surveying from the Federal University of Technology, Akure, and is affiliated with professional bodies including the National Institute of Quantity Surveyors (NIQS) and the Nigerian Institute of Builders (NIOB). He also holds additional training in project management and health, safety, and environmental management."
    ],
    highlights: [
      { title: "Strategic Direction", text: "Supports planning at the enterprise level." },
      { title: "Delivery Focus", text: "Keeps execution aligned with expectations." },
      { title: "Operational Review", text: "Monitors performance and implementation." },
      { title: "Group Oversight", text: "Helps maintain coherence across business lines." },
    ],
    imageSrc: "/Website jpeg/bankole.png",
  },
  {
    slug: "olowookere-timilehin",
    name: "Timilehin Olowookere",
    role: "Managing Director (Pro-Explorer)",
    summary:
      "HR leader focused on people systems, organizational structure, and workforce development.",
    bio: [
      "Michael O. Oluwagbemi's is the founder and president/chief executive officer of Vertmance Group.  Michael O. Oluwagbemi (PE, PMP, MBA, FNSE) is a Nigerian engineer, entrepreneur, and energy executive currently serving as the Program Director and Chief Executive of the Presidential Compressed Natural Gas (CNG) Initiative.",
    ],
    highlights: [
      { title: "People Systems", text: "Supports recruitment, structure, and workforce planning." },
      { title: "Culture", text: "Helps sustain a disciplined but practical workplace environment." },
      { title: "Organization Design", text: "Keeps roles and responsibilities clear." },
      { title: "Development", text: "Supports growth through training and internal alignment." },
    ],
    imageSrc: "/Website jpeg/olowookere.png",
  },
];

function ImageSlot({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  return src ? (
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  ) : (
    <div
      aria-hidden="true"
      className="h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]"
    />
  );
}

function getProfile(slug: string) {
  return leaderProfiles.find((profile) => profile.slug === slug);
}

export default function LeadershipProfileScreen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const params = useParams();
  const profile = getProfile(params.slug ?? "");

  const toggleBusinessMenu = () => {
    setMobileMenuOpen(false);
    setBusinessMenuOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!profile) {
    throw new Response("Leadership profile not found", { status: 404 });
  }

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#171412] selection:bg-[#d97706] selection:text-white">
      <header className="sticky top-0 z-40 bg-[#f4f4f4]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/about-us" className="flex items-center">
            <img
              src="/Vertmance logo.png"
              alt="Vertmance Logo"
              className="h-14 w-14 object-contain"
            />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link className="text-sm font-medium text-[#6c6861] hover:text-[#121212]" to="/">
              Home
            </Link>
            <Link className="text-sm font-bold text-[#121212]" to="/about-us">
              About Us
            </Link>
            <button
              type="button"
              onClick={toggleBusinessMenu}
              className="text-sm font-medium text-[#6c6861] hover:text-[#121212]"
            >
              Business
            </button>
            <Link className="text-sm font-medium text-[#6c6861] hover:text-[#121212]" to="/portfolio">
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
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="rounded-lg bg-white/70 px-3 py-2 text-sm font-semibold text-[#171412]"
              >
                About Us
              </Link>
              <button
                type="button"
                onClick={toggleBusinessMenu}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
              >
                Business
              </button>
              <Link
                to="/portfolio"
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#6c6861]"
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
        <section className="mx-auto max-w-[1280px] px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-16">
          <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            <div className="relative h-[360px] overflow-hidden rounded-[20px] bg-[#d9d9d9] shadow-[0_14px_28px_rgba(0,0,0,0.04)] sm:h-[520px] lg:h-[560px]">
              <ImageSlot
                src={profile.imageSrc}
                alt={`${profile.name} portrait`}
              />
              <div className="absolute inset-0 rounded-[20px] border border-[#efdcc0]" />
            </div>

            <div className="pt-2 lg:pt-10">
              <h1 className="text-[1.95rem] font-black leading-[1.04] tracking-[-0.05em] text-[#161412] sm:text-[2.45rem] lg:text-[2.8rem]">
                {profile.name}
              </h1>
              <p className="mt-3 text-sm text-[#9a948d]">{profile.role}</p>
              <div className="mt-4 h-px w-full bg-[#ddd4ca]" />

              <div className="mt-6 space-y-5 text-[0.9rem] leading-7 text-[#8f8a84]">
                {profile.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef] py-16 sm:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-[1.9rem] font-black tracking-[-0.05em] text-[#171412] sm:text-[2.4rem]">
                Leadership Focus
              </h2>
              <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-[#de7a11]" />
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {profile.highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[14px] border border-black/5 bg-[#ededed] px-5 py-6 shadow-[0_10px_22px_rgba(0,0,0,0.04)]"
                  style={{ borderLeft: "4px solid #de7a11" }}
                >
                  <h3 className="text-[1rem] font-extrabold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.82rem] leading-6 text-[#96908a]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f4f4] py-20 sm:py-24">
          <div className="mx-auto max-w-[980px] px-5 text-center sm:px-8 lg:px-10">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#de7a11]">
              Leadership Summary
            </p>
            <h2 className="mt-4 text-[2rem] font-black tracking-[-0.05em] text-[#171412] sm:text-[2.6rem]">
              {profile.summary}
            </h2>
            <div className="mt-10">
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center rounded-sm bg-[#ef7b11] px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Back to About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
