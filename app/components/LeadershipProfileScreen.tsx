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
};

const leaderProfiles: LeaderProfile[] = [
  {
    slug: "damilola-agboola",
    name: "Damilola Agboola",
    role: "CFO / Treasurer",
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
  },
  {
    slug: "suleiman-olawale",
    name: "Suleiman Olawale",
    role: "Chief of Staff",
    summary:
      "Chief of staff supporting executive coordination, internal alignment, and operational follow-through.",
    bio: [
      "Suleiman Olawale helps coordinate executive priorities across the group and keeps internal execution moving on schedule.",
      "The role is anchored in communication, task ownership, and follow-through across business units.",
      "His focus is to make sure strategy is translated into action and that leadership stays aligned on timing, priorities, and delivery.",
    ],
    highlights: [
      { title: "Executive Coordination", text: "Keeps leadership priorities synchronized." },
      { title: "Operational Follow-Through", text: "Tracks execution from briefing to completion." },
      { title: "Communication", text: "Supports internal clarity across teams." },
      { title: "Planning Support", text: "Helps organize the next action across functions." },
    ],
  },
  {
    slug: "peace-james",
    name: "Peace James",
    role: "Group General Manager",
    summary:
      "General manager supporting day-to-day standards, team coordination, and service consistency.",
    bio: [
      "Peace James plays a central role in maintaining service quality and consistent operations across the Vertmance portfolio.",
      "The position focuses on team coordination, standards enforcement, and keeping each operating business aligned with the group ethos.",
      "Operational consistency matters here: the goal is to preserve quality while keeping delivery practical and responsive.",
    ],
    highlights: [
      { title: "Service Standards", text: "Maintains consistency across customer-facing operations." },
      { title: "Team Coordination", text: "Aligns day-to-day delivery across departments." },
      { title: "Quality Control", text: "Tracks operational detail with a practical lens." },
      { title: "Execution Support", text: "Keeps activity moving with discipline and pace." },
    ],
  },
  {
    slug: "aramide-olugbenga-wyse",
    name: "Aramide Olugbenga Wyse",
    role: "Group Human Resource",
    summary:
      "HR leader focused on people systems, organizational structure, and workforce development.",
    bio: [
      "Aramide Olugbenga Wyse supports the people side of the business, helping shape a structure that can scale without losing clarity.",
      "The function covers workforce management, internal coordination, and policies that support the wider group.",
      "The emphasis is on building teams with the right structure, the right expectations, and a healthy operating culture.",
    ],
    highlights: [
      { title: "People Systems", text: "Supports recruitment, structure, and workforce planning." },
      { title: "Culture", text: "Helps sustain a disciplined but practical workplace environment." },
      { title: "Organization Design", text: "Keeps roles and responsibilities clear." },
      { title: "Development", text: "Supports growth through training and internal alignment." },
    ],
  },
  {
    slug: "engr-wale",
    name: "Engr Wale",
    role: "President & Chief Executive",
    summary:
      "Executive leader with focus on strategy, delivery, and enterprise oversight.",
    bio: [
      "Engr Wale contributes to group leadership with emphasis on strategic direction and execution discipline.",
      "His role is tied to keeping ambition practical, ensuring the company moves forward with structure and accountability.",
      "The leadership approach is centered on clear priorities, operational control, and long-term value creation.",
    ],
    highlights: [
      { title: "Strategic Direction", text: "Supports planning at the enterprise level." },
      { title: "Delivery Focus", text: "Keeps execution aligned with expectations." },
      { title: "Operational Review", text: "Monitors performance and implementation." },
      { title: "Group Oversight", text: "Helps maintain coherence across business lines." },
    ],
  },
];

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
            <div className="relative h-[360px] rounded-[20px] bg-[#d9d9d9] shadow-[0_14px_28px_rgba(0,0,0,0.04)] sm:h-[520px] lg:h-[560px]">
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
