import { useEffect } from "react";
import { Link } from "react-router";
import {
  BusinessFooter,
  BusinessMicrositeNav,
  FormInput,
  FormTextarea,
  Placeholder,
  SectionLabel,
} from "./BusinessPageShared";

const journeys = [
  {
    title: "Guided Farm Tours",
    text: "Walk through our regenerative fields and state-of-the-art livestock facilities. Learn about the science of soil health.",
  },
  {
    title: "Guided Farm Tours",
    text: "Walk through our regenerative fields and state-of-the-art livestock facilities. Learn about the science of soil health.",
  },
  {
    title: "Ranch Lodging",
    text: "Experience the serenity of the ranch after dusk. Our eco-lodges offer a perfect blend of modern comfort and natural immersion.",
  },
  {
    title: "Artisanal Workshop",
    text: "Walk through our regenerative fields and state-of-the-art livestock facilities. Learn about the science of soil health.",
  },
];

export default function OwonikokoVisitScreen() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f2f2f1] text-[#171412] selection:bg-[#df6f00] selection:text-white">
      <BusinessMicrositeNav
        items={[
          { label: "Our Ranch", href: "#ranch", active: true },
          { label: "Operations", href: "#operations" },
          { label: "Sustainability", href: "#sustainability" },
          { label: "Institute", href: "#institute" },
          { label: "Partnership", href: "#partnership" },
        ]}
        primaryAction={{ label: "Visit Us", href: "#booking" }}
        secondaryAction={{ label: "Inquiry", href: "#booking" }}
      />

      <main id="ranch">
        <section className="bg-[#d8d8d8]">
          <div className="mx-auto flex min-h-[520px] max-w-[1280px] items-center px-5 sm:px-8 lg:px-10">
            <div className="max-w-[600px]">
              <SectionLabel>Escape to the Source</SectionLabel>
              <h1 className="mt-3 text-[2.75rem] font-black leading-[0.98] tracking-[-0.06em] sm:text-[4rem]">
                Experience the Rhythm of the Land
              </h1>
              <p className="mt-5 max-w-lg text-sm font-semibold leading-7 text-[#77716a]">
                Journey into the heart of Owonikoko Ranch. Discover where
                heritage meets innovation through curated tours, artisanal
                dining, and immersive stays.
              </p>
              <Link
                to="/contact-us"
                className="mt-8 inline-flex rounded-[5px] bg-[#df6f00] px-8 py-3 text-sm font-black text-white"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        </section>

        <section id="operations" className="py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="text-center">
              <SectionLabel>Escape to the Source</SectionLabel>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
                Choose Your Journey
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {journeys.map((journey, index) => (
                <Placeholder
                  key={`${journey.title}-${index}`}
                  className="flex min-h-[320px] items-end rounded-[6px] p-8"
                >
                  <div>
                    <h3 className="text-2xl font-black">{journey.title}</h3>
                    <p className="mt-4 max-w-lg text-sm font-semibold leading-7 text-[#3f3b36]">
                      {journey.text}
                    </p>
                  </div>
                </Placeholder>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="pb-20 lg:pb-24">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.06em]">
                Plan Your Experience
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#77716a]">
                Whether it is a corporate retreat, a school excursion, or a
                private getaway, we tailor each visit to your specific
                interests. Fill out the forms below, and our concierge will
                contact you to finalize the details.
              </p>
            </div>

            <form className="rounded-[14px] bg-white p-8 shadow-[0_16px_42px_rgba(0,0,0,0.06)] lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormInput label="Full Name" placeholder="Jane Doe" />
                <FormInput label="Email Address" placeholder="jane@example.com" />
                <FormInput label="Visit Date" placeholder="mm/dd/yyyy" />
                <FormInput label="Guest Count" placeholder="1-2 Persons" />
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[#77716a]">
                  Experience Interest
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {["Farm Tour", "Culinary", "Overnight Stay", "Workshop"].map(
                    (item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 rounded-[6px] bg-[#f8efe6] px-4 py-3 text-sm font-semibold text-[#6f6a64]"
                      >
                        <input type="checkbox" className="h-5 w-5" />
                        {item}
                      </label>
                    ),
                  )}
                </div>
              </div>
              <div className="mt-6">
                <FormTextarea
                  label="Special Requests"
                  placeholder="Tell us about your dietary requirements or special interests..."
                />
              </div>
              <button
                type="submit"
                className="mt-7 w-full rounded-[6px] bg-[#df6f00] px-8 py-4 text-sm font-black text-white"
              >
                Send Booking Inquiry
              </button>
            </form>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[10px]">
            <div className="relative min-h-[470px] bg-[#25472c]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,72,35,0.92),rgba(18,48,31,0.82)),radial-gradient(circle_at_25%_30%,rgba(255,185,78,0.65)_0_2px,transparent_3px),radial-gradient(circle_at_72%_42%,rgba(255,185,78,0.75)_0_2px,transparent_3px)]" />
              <div className="absolute left-[18%] top-0 h-full w-5 rotate-[31deg] bg-[#345f78]/75" />
              <div className="absolute right-[6%] top-[18%] h-1 w-[58%] rotate-[-18deg] bg-[#c3923a]/80" />
              <div className="absolute right-[16%] top-[42%] h-1 w-[42%] rotate-[22deg] bg-[#c3923a]/80" />
              <div className="relative z-10 flex min-h-[470px] items-center p-8 sm:p-10">
                <div className="max-w-[300px] rounded-[8px] bg-white/95 p-8 shadow-xl">
                  <h2 className="text-2xl font-black">Find Us</h2>
                  <p className="mt-4 text-sm leading-7 text-[#77716a]">
                    Conveniently located 2 hours from the capital, our ranch is
                    easily accessible via the North-South Express.
                  </p>
                  <a
                    href="#directions"
                    className="mt-5 inline-flex text-sm font-black text-[#df6f00]"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BusinessFooter />
    </div>
  );
}
