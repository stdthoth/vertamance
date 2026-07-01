import type { Route } from "./+types/contact-us";
import ContactUsScreen from "../components/ContactUsScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Vertmance" },
    {
      name: "description",
      content:
        "Contact Vertmance for general inquiries, business information, and group office details.",
    },
  ];
}

export default function ContactUs() {
  return <ContactUsScreen />;
}
