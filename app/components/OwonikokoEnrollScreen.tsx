import { useEffect } from "react";
import {
  BusinessFooter,
  BusinessMicrositeNav,
  FormInput,
  FormTextarea,
  OrangeIcon,
  Placeholder,
} from "./BusinessPageShared";

const tracks = [
  {
    title: "Modern Ranching",
    text: "Advanced livestock management using GPS tracking, biometric data, and automated precision feeding systems.",
    active: false,
  },
  {
    title: "Sustainable Agriculture",
    text: "Pioneering regenerative techniques that restore soil health and maximize biodiversity across vast acreage.",
    active: true,
  },
  {
    title: "Agri-Business Management",
    text: "The economic backbone of the ranch. Master supply chains, agricultural finance, and global trade ethics.",
    active: false,
  },
];

const benefits = [
  ["Hands-on Certification", "Earn industry-recognized credentials through direct field work and rigorous laboratory sessions."],
  ["Industry Mentorship", "Direct access to ranching veterans and agri-tech innovators through our exclusive mentorship network."],
  ["Regenerative Practices", "Learn to manage land as a living system, focusing on long-term ecological and financial sustainability."],
];

export default function OwonikokoEnrollScreen() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf4ed] text-[#171412] selection:bg-[#df6f00] selection:text-white">
      <BusinessMicrositeNav
        items={[
          { label: "Our Ranch", href: "#ranch", active: true },
          { label: "Operations", href: "#operations" },
          { label: "Sustainability", href: "#sustainability" },
          { label: "Institute", href: "#institute" },
          { label: "Partnership", href: "#partnership" },
        ]}
        primaryAction={{ label: "Visit Us", href: "#visit" }}
        secondaryAction={{ label: "Inquiry", href: "#registration" }}
      />

      <main id="ranch">
        <section className="bg-[#d8d8d8]">
          <div className="mx-auto flex min-h-[620px] max-w-[1280px] items-center px-5 sm:px-8 lg:px-10">
            <div className="max-w-[560px]">
              <span className="rounded-full bg-[#f1dfcc] px-4 py-1.5 text-xs font-black uppercase tracking-wide text-[#8b6745]">
                Enrollment Open For 2026
              </span>
              <h1 className="mt-6 text-[2.8rem] font-black leading-[1.02] tracking-[-0.06em] sm:text-[4.25rem]">
                Shape the Future of Agri-Business
              </h1>
              <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-[#88827b]">
                Empowering the next generation of ranch leaders with
                science-based precision, regenerative practices, and
                institutional excellence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#registration"
                  className="rounded-[6px] bg-[#df6f00] px-8 py-4 text-sm font-black text-white shadow-lg shadow-orange-900/10"
                >
                  Enroll Now
                </a>
                <a
                  href="#tracks"
                  className="rounded-[6px] border border-black/10 px-8 py-4 text-sm font-black text-[#6f6a64]"
                >
                  Explore Tracks
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="tracks" className="py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-4xl font-black tracking-[-0.06em]">
                Our Specialized Tracks
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8a857e]">
                Master the complexities of modern agriculture through our
                meticulously curated educational paths.
              </p>
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {tracks.map((track) => (
                <article
                  key={track.title}
                  className={`rounded-[10px] border p-9 shadow-sm ${
                    track.active
                      ? "border-[#df6f00] bg-[#df6f00] text-white shadow-xl shadow-orange-900/10"
                      : "border-black/8 bg-[#fffaf6]"
                  }`}
                >
                  <OrangeIcon>{track.active ? "○" : "▣"}</OrangeIcon>
                  <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em]">
                    {track.title}
                  </h3>
                  <p
                    className={`mt-5 text-sm leading-7 ${
                      track.active ? "text-white/85" : "text-[#77716a]"
                    }`}
                  >
                    {track.text}
                  </p>
                  <div className="mt-8 space-y-3 text-xs font-black">
                    <p>⊙ Herd Health Analytics</p>
                    <p>⊙ Supply Chain Strategy</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="text-4xl font-black tracking-[-0.06em]">
                  The Owonikoko Advantage
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#77716a]">
                  We bridge the gap between traditional wisdom and modern
                  innovation, providing an ecosystem where students thrive
                  through experience.
                </p>
              </div>
              <p className="text-4xl font-black text-[#df6f00]">
                100%
                <span className="ml-2 align-middle text-sm font-black uppercase tracking-widest text-[#9a938c]">
                  Placement Rate
                </span>
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {benefits.map(([title, text], index) => (
                <article key={title} className="rounded-[10px] bg-[#f8ecdf] p-8">
                  <OrangeIcon>{index === 0 ? "✶" : index === 1 ? "●" : "◌"}</OrangeIcon>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#77716a]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="registration" className="px-5 pb-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[18px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)] lg:grid-cols-[0.78fr_1.32fr]">
            <Placeholder className="min-h-[420px] bg-[#d9b179]">
              <div className="flex h-full min-h-[420px] items-end bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.48))] p-10 text-white">
                <blockquote className="max-w-md text-3xl font-black leading-tight">
                  "The soil is the foundation of our future."
                  <footer className="mt-5 text-sm font-bold">
                    Director of Institute
                  </footer>
                </blockquote>
              </div>
            </Placeholder>

            <div className="p-8 lg:p-14">
              <h2 className="text-4xl font-black tracking-[-0.06em]">
                Registration Inquiry
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#77716a]">
                Take the first step toward your leadership career. Complete the
                form below and our admissions team will contact you within 48
                hours.
              </p>
              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormInput label="Full Name" placeholder="John Doe" />
                  <FormInput label="Email Address" placeholder="john@vertmance.com" />
                </div>
                <FormInput label="Interest Area" placeholder="Modern Ranching" />
                <FormTextarea
                  label="Message (Optional)"
                  placeholder="Tell us about your background and goals..."
                />
                <button
                  type="submit"
                  className="w-fit rounded-[6px] bg-[#df6f00] px-10 py-4 text-sm font-black text-white shadow-lg shadow-orange-900/10"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <BusinessFooter />
    </div>
  );
}
