export type ProjectCategory =
  | "All"
  | "Engineering"
  | "Investment"
  | "Agriculture"
  | "Transport"
  | "Entertainment"
  | "Education";

export type Project = {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  year: string;
  location: string;
  shortSummary: string;
  about: string[];
  galleryColumns: number[];
  detailLabel: string;
};

export const categories: ProjectCategory[] = [
  "All",
  "Engineering",
  "Investment",
  "Agriculture",
  "Transport",
  "Entertainment",
  "Education",
];

export const projects: Project[] = [
  {
    slug: "owonikoko-ranch-farm-initiatives",
    title: "Owonikoko Ranch & Farm Initiatives",
    category: "Agriculture",
    description:
      "Large-scale sustainable agricultural development focusing on organic livestock and automated crop systems.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Large-scale sustainable agricultural development focusing on organic livestock and automated crop systems.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Agriculture",
  },
  {
    slug: "vertmance-construction-engineering",
    title: "Vertmance Construction & Engineering",
    category: "Engineering",
    description:
      "Structured delivery for civil, structural, and site development work with disciplined execution.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Structured delivery for civil, structural, and site development work with disciplined execution.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Engineering",
  },
  {
    slug: "xsky-bar-lounge",
    title: "XSKY Bar & Lounge",
    category: "Entertainment",
    description:
      "Hospitality concept blending premium service, social experience, and high-touch brand design.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Hospitality concept blending premium service, social experience, and high-touch brand design.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Entertainment",
  },
  {
    slug: "oke-keke",
    title: "Oke Keke",
    category: "Engineering",
    description:
      "Operational logistics and mobility support systems developed for business-to-business delivery.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Operational logistics and mobility support systems developed for business-to-business delivery.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Engineering",
  },
  {
    slug: "owonikoko-ranch-management-institute",
    title: "Owonikoko Ranch Management Institute",
    category: "Agriculture",
    description:
      "Training and process development for efficient ranch operations, feed management, and scaling.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Training and process development for efficient ranch operations, feed management, and scaling.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Agriculture",
  },
  {
    slug: "pro-explorers-peak",
    title: "Pro Explorers Peak",
    category: "Agriculture",
    description:
      "Agricultural operations and field support aligned with measurable production and stewardship goals.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Agricultural operations and field support aligned with measurable production and stewardship goals.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Agriculture",
  },
  {
    slug: "etip",
    title: "ETIP",
    category: "Investment",
    description:
      "A strategic investment platform designed to support long-term portfolio growth and operating value.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "A strategic investment platform designed to support long-term portfolio growth and operating value.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Investment",
  },
  {
    slug: "vertmance-logistics-link",
    title: "Vertmance Logistics Link",
    category: "Transport",
    description:
      "Movement coordination and route planning for business operations across multiple locations.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Movement coordination and route planning for business operations across multiple locations.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Transport",
  },
  {
    slug: "founders-school-support-program",
    title: "Founders School Support Program",
    category: "Education",
    description:
      "A community-oriented learning program focused on practical skills, mentoring, and access.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "A community-oriented learning program focused on practical skills, mentoring, and access.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Education",
  },
  {
    slug: "capital-bridge-holdings",
    title: "Capital Bridge Holdings",
    category: "Investment",
    description:
      "Portfolio support for new and existing ventures with a focus on durable returns and control.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Portfolio support for new and existing ventures with a focus on durable returns and control.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Investment",
  },
  {
    slug: "freight-corridor-systems",
    title: "Freight Corridor Systems",
    category: "Transport",
    description:
      "Freight and distribution support designed to improve throughput and operational reliability.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Freight and distribution support designed to improve throughput and operational reliability.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Transport",
  },
  {
    slug: "innovation-lab",
    title: "Innovation Lab",
    category: "Education",
    description:
      "A knowledge-sharing hub for internal teams, leadership development, and operational training.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "A knowledge-sharing hub for internal teams, leadership development, and operational training.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Education",
  },
  {
    slug: "agribusiness-training-sessions",
    title: "Agribusiness Training Sessions",
    category: "Education",
    description:
      "Hands-on training that supports modern farming practices and applied business discipline.",
    year: "2023 - 2024",
    location: "Nigeria",
    shortSummary:
      "Hands-on training that supports modern farming practices and applied business discipline.",
    about: [
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
      "Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus.",
    ],
    galleryColumns: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    detailLabel: "Education",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
