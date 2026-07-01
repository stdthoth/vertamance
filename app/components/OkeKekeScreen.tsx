import { useEffect } from "react";
import {
  BusinessFooter,
  BusinessMicrositeNav,
  OrangeIcon,
  Placeholder,
} from "./BusinessPageShared";

const principles = [
  ["01", "Safety", "Compromise-free structural integrity in every vehicle and refueling station."],
  ["02", "Sustainability", "Leveraging CNG and renewable tech to reduce the national carbon footprint."],
  ["03", "Affordability", "Ensuring modern transit is accessible to all Nigerian citizens and drivers."],
  ["04", "Collaboration", "Partnering with government and private sectors for synchronized growth."],
  ["05", "Innovation", "Constant iteration on fleet technology and infrastructure delivery."],
];

const services = [
  ["Tricycle Leasing", "Flexible acquisition models for CNG-powered units with low entry barriers for individual operators."],
  ["Maintenance & Support", "Specialized CNG technical centers providing predictive maintenance and 24/7 roadside assistance."],
  ["Insurance Protection", "Comprehensive coverage tailored for urban transit, ensuring continuity for all partners."],
];

export default function OkeKekeScreen() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#efefee] text-[#171412] selection:bg-[#df6f00] selection:text-white">
      <BusinessMicrositeNav
        items={[
          { label: "Home", href: "/", active: false },
          { label: "About Us", href: "/about-us" },
          { label: "Business", href: "/#business", active: true },
          { label: "Portfolio", href: "/portfolio" },
        ]}
      />

      <main>
        <section className="bg-[#d8d8d8]">
          <div className="mx-auto flex min-h-[520px] max-w-[1280px] items-center px-5 sm:px-8 lg:px-10">
            <div className="max-w-[440px]">
              <h1 className="text-[2.65rem] font-black leading-[0.95] tracking-[-0.06em] sm:text-[3.65rem]">
                Redefining
                <span className="block text-[#df6f00]">Urban Mobility</span>
              </h1>
              <p className="mt-5 text-sm font-semibold leading-6 text-[#77716a]">
                Engineering a cleaner future through high-efficiency CNG-powered
                tricycle fleets, integrated maintenance infrastructure, and
                comprehensive asset security.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
            <div className="grid gap-8 sm:grid-cols-[0.42fr_0.58fr]">
              <div>
                <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
                  Company
                  <span className="block">Overview</span>
                </h2>
                <div className="mt-5 h-[3px] w-20 bg-[#df6f00]" />
              </div>
              <div className="relative h-[360px]">
                <Placeholder className="absolute left-0 top-0 h-[320px] w-[46%] rounded-[14px]" />
                <Placeholder className="absolute bottom-0 right-0 h-[320px] w-[46%] rounded-[14px]" />
              </div>
            </div>

            <div className="pt-2 lg:pt-3">
              <h3 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#3b3733]">
                OKE KEKE is a forward-thinking infrastructure company dedicated
                to transforming Nigeria's transportation landscape.
              </h3>
              <p className="mt-8 max-w-2xl text-sm font-semibold leading-7 text-[#77716a]">
                We are bridging the gap between traditional transit and modern
                sustainability. Our approach combines robust engineering with
                accessible technology, focusing on three core pillars:{" "}
                <strong className="text-[#171412]">Safety</strong>,{" "}
                <strong className="text-[#171412]">Sustainability</strong>, and{" "}
                <strong className="text-[#171412]">Affordability</strong>.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="bg-white px-8 py-7">
                  <p className="text-3xl font-black text-[#e99a43]">36</p>
                  <p className="mt-2 text-xs font-black uppercase tracking-widest">
                    States Coverage Target
                  </p>
                </div>
                <div className="bg-white px-8 py-7">
                  <p className="text-3xl font-black text-[#e99a43]">0.0%</p>
                  <p className="mt-2 text-xs font-black uppercase tracking-widest">
                    Emission Goal Pathway
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] bg-[#fbfafa] px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr]">
            <h2 className="text-3xl font-black uppercase leading-[0.96] tracking-[-0.05em]">
              Our Core
              <span className="block">Principles</span>
            </h2>
            <p className="max-w-2xl text-xs font-black uppercase leading-6 tracking-[0.18em] text-[#8a857e]">
              Guided by engineering precision and social responsibility, our
              values define every infrastructure project we undertake.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {principles.map(([number, title, text]) => (
              <article key={title} className="bg-white p-7">
                <p className="text-xs font-black text-[#8bb737]">{number}</p>
                <h3 className="mt-10 text-base font-black uppercase">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#77716a]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <h2 className="text-3xl font-black uppercase tracking-[-0.05em]">
              Market Analysis & Trends
            </h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-[0.74fr_0.76fr_0.7fr]">
              <div className="space-y-6">
                {[
                  "Sustainability Mandate",
                  "Government Synergy",
                ].map((title, index) => (
                  <article
                    key={title}
                    className={`bg-white p-7 ${
                      index === 0 ? "border-l-4 border-[#8bb737]" : ""
                    }`}
                  >
                    <h3 className="font-black">{title}</h3>
                    <p className="mt-4 text-sm leading-6 text-[#77716a]">
                      Our operations align with national clean energy goals,
                      leveraging government-backed infrastructure development.
                    </p>
                  </article>
                ))}
              </div>
              <div className="flex flex-col justify-center gap-8">
                {["Market Adoption Rate", "CNG Infrastructure Growth", "Carbon Reduction Target"].map((item, index) => (
                  <div key={item}>
                    <div className="flex justify-between text-xs font-black uppercase tracking-widest text-[#8a857e]">
                      <span>{item}</span>
                      <span>{index === 2 ? "Zero '40" : "0% YoY"}</span>
                    </div>
                    <div className="mt-3 h-2 bg-[#dcdad7]">
                      <div
                        className="h-full bg-[#171412]"
                        style={{ width: index === 0 ? "70%" : index === 1 ? "64%" : "88%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <Placeholder className="h-[440px]" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] bg-[#fbfafa] px-5 py-16 text-center sm:px-8 lg:px-10">
          <h2 className="text-3xl font-black tracking-[-0.05em]">
            Our Core Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#8a857e]">
            A comprehensive ecosystem designed to support modern transit
            requirements from acquisition to maintenance.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map(([title, text], index) => (
              <article key={title} className="bg-white p-10 text-left">
                <OrangeIcon>{index === 0 ? "▣" : index === 1 ? "↺" : "✓"}</OrangeIcon>
                <h3 className="mt-8 text-xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#77716a]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-24 text-center lg:py-32">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-[#df6f00]">
            Take The Lead
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-[2.5rem] font-black leading-[0.98] tracking-[-0.06em] sm:text-[4rem]">
            Ready to Partner With Us?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#partner"
              className="rounded-[2px] bg-[#df6f00] px-10 py-4 text-sm font-black text-white"
            >
              Partner With Us
            </a>
            <a
              href="/contact-us"
              className="rounded-[2px] bg-white px-10 py-4 text-sm font-black text-[#47413b]"
            >
              Contact Sales
            </a>
          </div>
        </section>
      </main>

      <BusinessFooter />
    </div>
  );
}
