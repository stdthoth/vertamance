import { useEffect } from "react";
import { Link } from "react-router";
import {
  BusinessFooter,
  BusinessMicrositeNav,
  FormInput,
  FormTextarea,
  OrangeIcon,
  Placeholder,
  SectionLabel,
} from "./BusinessPageShared";

const navItems = [
  { label: "Our Ranch", href: "#ranch", active: true },
  { label: "Operations", href: "#operations" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Institute", href: "#institute" },
  { label: "Partnership", href: "#partnership" },
];

export default function OwonikokoRanchScreen() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4f3] text-[#171412] selection:bg-[#df6f00] selection:text-white">
      <BusinessMicrositeNav
        items={navItems}
        primaryAction={{ label: "Visit Us", href: "/owonikoko-ranch-farms/visit" }}
        secondaryAction={{ label: "Inquiry", href: "#partnership" }}
      />

      <main id="ranch">
        <section className="bg-[#d8d8d8]">
          <div className="mx-auto flex min-h-[520px] max-w-[1280px] items-center px-5 sm:px-8 lg:px-10">
            <div className="max-w-[560px]">
              <h1 className="text-[2.75rem] font-black leading-[0.95] tracking-[-0.06em] sm:text-[4rem]">
                Cultivating the Future
                <span className="block text-[#df6f00]">of Agriculture</span>
              </h1>
              <p className="mt-5 max-w-md text-sm font-semibold leading-6 text-[#77716a]">
                Where tradition meets technology. We are redefining the
                agricultural landscape through regenerative practices, artisanal
                care, and a commitment to absolute farm soul.
              </p>
            </div>
          </div>
        </section>

        <section id="operations" className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <span className="inline-flex h-6 w-6 rounded-full bg-[#171412]" />
                <SectionLabel>Our Operations</SectionLabel>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                  Modern Production Model
                </h2>
              </div>
              <p className="max-w-md justify-self-end text-sm leading-6 text-[#77716a]">
                We operate a multi-functional approach, ensuring every sector of
                the ranch works in synthetic cycle to maximize yield and
                minimize environmental footprint.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1.36fr_0.94fr]">
              <article className="overflow-hidden rounded-[12px] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.03)]">
                <Placeholder className="h-[290px] bg-white" />
                <div className="grid gap-8 bg-[#e6e6e5] p-8 md:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-lg font-black">Crop Production</h3>
                    <p className="mt-2 text-sm text-[#77716a]">
                      Intelligent cultivation using precision agriculture tech.
                    </p>
                  </div>
                  <OrangeIcon>♨</OrangeIcon>
                  <ul className="grid gap-4 text-sm font-bold text-[#6f6a64] md:col-span-2 md:grid-cols-2">
                    <li>• Total Traceability</li>
                    <li>• Organic Standards</li>
                    <li>• Smart Irrigation</li>
                    <li>• Seasonal Rotation</li>
                  </ul>
                </div>
              </article>

              <article className="overflow-hidden rounded-[12px] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.03)]">
                <Placeholder className="h-[290px] bg-white" />
                <div className="grid gap-8 bg-[#e6e6e5] p-8 md:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-lg font-black">Livestock Farming</h3>
                    <p className="mt-2 text-sm text-[#77716a]">
                      Ethical treatment and premium welfare.
                    </p>
                  </div>
                  <OrangeIcon>●</OrangeIcon>
                  <ul className="space-y-4 text-sm font-bold text-[#6f6a64] md:col-span-2">
                    <li>• 100% Grass-Fed Quality</li>
                    <li>• Antibiotic Free</li>
                    <li>• Rotational Grazing</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="sustainability" className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <div className="relative mx-auto h-[420px] w-full max-w-[420px]">
              <div className="absolute inset-8 rotate-[-14deg] rounded-[10px] bg-[#241a10]" />
              <Placeholder className="absolute inset-0 rounded-[10px]" />
              <div className="absolute bottom-6 right-[-12px] rounded-[8px] bg-[#df6f00] px-8 py-6 text-white shadow-xl">
                <p className="text-2xl font-black">-30%</p>
                <p className="mt-1 text-xs font-black uppercase tracking-wide">
                  Carbon Footprint Reduction
                </p>
              </div>
            </div>

            <div>
              <SectionLabel>Sustainability</SectionLabel>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                Harmony with Nature
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#77716a]">
                Our ranch does not just produce food; it restores the land. We
                employ regenerative techniques that heal the soil and protect
                the local ecosystem for generations to come.
              </p>
              <div className="mt-8 space-y-6">
                {[
                  "Regenerative Agriculture",
                  "Smart Resource Management",
                  "Eco-system Protection",
                ].map((item) => (
                  <div key={item} className="flex gap-4">
                    <OrangeIcon>✓</OrangeIcon>
                    <div>
                      <h3 className="font-black">{item}</h3>
                      <p className="mt-1 text-sm text-[#77716a]">
                        Restoring biodiversity while improving long-term yield.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="institute" className="bg-[#e6e6e5] py-20 lg:py-24">
          <div className="mx-auto max-w-[740px] px-5 sm:px-8 lg:px-10">
            <SectionLabel>Empowerment</SectionLabel>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
              Owonikoko Ranch Management Institute
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#77716a]">
              We believe knowledge is the most fertile seed. Our institute
              offers hands-on certification in modern ranching, sustainability,
              and agri-business management.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/owonikoko-ranch-farms/enroll"
                className="rounded-full bg-[#df6f00] px-8 py-3 text-sm font-black text-white"
              >
                Enroll Today
              </Link>
              <a
                href="#brochure"
                className="rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-black text-[#171412]"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 text-center lg:py-20">
          <SectionLabel>Sustainability</SectionLabel>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
            The Journey to Xsky
          </h2>
          <div className="mx-auto mt-10 grid max-w-[1280px] gap-5 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
            {[
              "Sustainable Cultivation",
              "Artisanal Processing",
              "Xsky Culinary Experience",
            ].map((item, index) => (
              <article key={item} className="rounded-[10px] bg-white p-9">
                <OrangeIcon>{index + 1}</OrangeIcon>
                <h3 className="mt-6 font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-[#8a857e]">
                  Served fresh at our partners flagship restaurant, completing
                  the circle of flavor.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="partnership" className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1280px] gap-12 rounded-[12px] bg-white p-8 shadow-[0_12px_34px_rgba(0,0,0,0.04)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.05em]">
                Grow With Us
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#77716a]">
                Interested in bulk supply, collaborative research, or investment
                opportunities? Our partnership desk is open to visionaries who
                share our commitment to a better food system.
              </p>
              <div className="mt-8 space-y-3 text-sm font-bold text-[#6f6a64]">
                <p>✉ contactus@vertmance.com</p>
                <p>☎ 0814 XXX XXXX</p>
              </div>
            </div>
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput label="Full Name" placeholder="John Doe" />
                <FormInput label="Email Address" placeholder="john@vertmance.com" />
              </div>
              <FormInput label="Interest Area" placeholder="Supply Partnership" />
              <FormTextarea label="Message" placeholder="Tell us about your project..." />
            </form>
          </div>
        </section>
      </main>

      <BusinessFooter />
    </div>
  );
}
