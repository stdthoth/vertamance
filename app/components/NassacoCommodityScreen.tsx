import { useEffect } from "react";
import {
  BusinessFooter,
  BusinessMicrositeNav,
  FormInput,
  FormTextarea,
  OrangeIcon,
  Placeholder,
} from "./BusinessPageShared";

const missionCards = [
  {
    title: "Policy Framework",
    text: "Structured alignment with solid industrialization goals to secure long-term trading and food security.",
  },
  {
    title: "Infrastructure Hub",
    text: "Utilizing value unlocked zones for centralized processing and logistics coordination.",
  },
  {
    title: "Outgrower Support",
    text: "Empowering local smallholders through technical assistance and guaranteed off-take agreements.",
  },
];

const standards = [
  ["Milling Capacity", "Full Metric Tons / Day"],
  ["Storage Silos", "10,000 MT Temperature Controlled"],
  ["Genetic Seed Variety", "NERICA 4 & 12 Specialized Hybrids"],
  ["Energy Supply", "Biomass-to-Power Plant Hub Utilization"],
  ["Certification", "Lagos State Rice Belt"],
];

export default function NassacoCommodityScreen() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f3f1] text-[#171412] selection:bg-[#df6f00] selection:text-white">
      <BusinessMicrositeNav
        items={[
          { label: "Home", href: "#home", active: true },
          { label: "Partnership", href: "#partnership" },
          { label: "Silvex", href: "#silvex" },
          { label: "VAP", href: "#vap" },
        ]}
      />

      <main id="home">
        <section className="bg-[#d8d8d8]">
          <div className="mx-auto flex min-h-[460px] max-w-[1280px] items-center px-5 sm:px-8 lg:px-10">
            <div className="max-w-[520px]">
              <h1 className="text-[2.35rem] font-black italic leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.25rem]">
                Revolutionizing
                <span className="block text-[#df6f00]">Rice Processing</span>
              </h1>
              <p className="mt-5 text-sm font-semibold leading-6 text-[#77716a]">
                Where tradition meets technology. We are redefining the
                agricultural landscape through regenerative practices, artisanal
                care, and a commitment to absolute farm soul.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#mission"
                  className="rounded-[4px] bg-[#df6f00] px-6 py-3 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Explore Our Mission
                </a>
                <a
                  href="#partnership"
                  className="rounded-[4px] border border-black/10 bg-white/20 px-6 py-3 text-sm font-bold text-[#171412] transition-colors hover:bg-white/40"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="bg-[#f6f6f5] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 text-center sm:px-8 lg:px-10">
            <h2 className="text-2xl font-black tracking-[-0.04em]">
              Our Mission
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#8a857e]">
              To transform Nasarawa State into a premier hub for industrial
              rice processing through sustainable agriculture, innovative
              technology, and strategic partnerships.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {missionCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[4px] bg-white p-7 text-left shadow-[0_10px_26px_rgba(0,0,0,0.03)]"
                >
                  <OrangeIcon>⚙</OrangeIcon>
                  <h3 className="mt-5 text-base font-black">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#8a857e]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="silvex" className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <Placeholder className="h-[330px] rounded-[6px]" />
            <div>
              <h2 className="text-2xl font-black italic tracking-[-0.04em]">
                Silvex International
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#77716a]">
                As the technical and commercial anchor, Silvex International
                brings decades in commodity trading and industrial milling. Its
                focus is maximizing the value chain from paddy sourcing to
                premium market distribution.
              </p>
              <ul className="mt-6 space-y-4 text-sm font-bold text-[#df8b24]">
                <li>⊙ Milling Efficiency Optimization</li>
                <li>⊙ Global Commodity Standards</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="vap" className="bg-white py-10 lg:py-16">
          <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <div>
              <h2 className="text-2xl font-black italic tracking-[-0.04em]">
                Vertmance Agric Partner (VAP)
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#77716a]">
                As the technical and commercial anchor, VAP brings decades in
                commodity trading and industrial milling. Their focus is
                maximizing the value chain from paddy sourcing to premium
                market distribution.
              </p>
              <ul className="mt-6 space-y-4 text-sm font-bold text-[#df8b24]">
                <li>⊙ Milling Efficiency Optimization</li>
                <li>⊙ Sustainable Soil Management</li>
              </ul>
            </div>
            <Placeholder className="h-[330px] rounded-[6px]" />
          </div>
        </section>

        <section className="bg-[#f2f2f1] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <h2 className="text-center text-2xl font-black tracking-[-0.04em]">
              Core Pillars of Excellence
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <Placeholder className="flex min-h-[560px] items-end rounded-[4px] p-8">
                <div>
                  <h3 className="text-lg font-black">
                    Sustainable Crop Production
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#77716a]">
                    Precision-managed cultivation of high-yield rice varieties
                    using eco-friendly input systems.
                  </p>
                </div>
              </Placeholder>
              <div className="grid gap-5">
                {["Aggregation", "Industrial Processing"].map((title) => (
                  <Placeholder
                    key={title}
                    className="flex min-h-[268px] items-end rounded-[4px] p-8"
                  >
                    <div>
                      <h3 className="text-lg font-black">{title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-[#77716a]">
                        Digitized off-take and milling technology achieving
                        efficiency, purity, and expanded supply.
                      </p>
                    </div>
                  </Placeholder>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f2f2f1] pb-16 lg:pb-20">
          <div className="mx-auto max-w-[760px] px-5 text-center sm:px-8 lg:px-10">
            <h2 className="text-2xl font-black tracking-[-0.04em]">
              Operational Standards
            </h2>
            <div className="mt-8 overflow-hidden rounded-[8px] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
              {standards.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[0.75fr_1fr] border-b border-[#f1efed] px-5 py-4 text-left text-sm last:border-b-0"
                >
                  <span className="font-black">{label}</span>
                  <span className="text-right font-semibold text-[#9b958f]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partnership" className="bg-[#f4f1ee] py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <div>
              <h2 className="text-2xl font-black tracking-[-0.04em]">
                Forge a Future in Agriculture
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#77716a]">
                Whether you are a government stakeholder, industrial partner, or
                investor, Nassaco provides the stable, scalable platform for
                agriculture success in West Africa.
              </p>
              <div className="mt-8 space-y-3 text-sm font-bold text-[#6f6a64]">
                <p>✉ contact@vertmance.com</p>
                <p>☎ 0814 XXX XXXX</p>
              </div>
            </div>
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput label="Full Name" placeholder="John Doe" />
                <FormInput label="Email Address" placeholder="john@domain.com" />
              </div>
              <FormInput label="Interest Area" placeholder="Supply Partnership" />
              <FormTextarea label="Message" placeholder="Tell us about your project..." />
              <button
                type="submit"
                className="rounded-[4px] bg-[#df6f00] px-6 py-3 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <BusinessFooter />
    </div>
  );
}
