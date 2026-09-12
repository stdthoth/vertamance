import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { BusinessFlyout } from "./BusinessFlyout";

interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  coverImage: string;
  dropcap: string;
  firstParagraph: string;
  heading1: string;
  paragraph2: string;
  quote: string;
  paragraph3: string;
  images: string[];
  heading2: string;
  paragraph4: string;
  sidebarTitle: string;
  sidebarHighlights: {
    number: string;
    title: string;
    description: string;
  }[];
}

const ALL_ARTICLES: Article[] = [
  {
    slug: "clean-mobility-expansion",
    category: "Agribusiness",
    title: "Vertmance Agric Partners receives license",
    excerpt:
      "Vertmance Agric Partners has received its NBTE license to operate its training institution, strengthening our commitment to equipping Nigerians with practical skills, creating opportunities, and driving sustainable impact.",
    date: "11 Feb, 2026",
    readTime: "12 min read",
    author: "Uwa Damisah",
    coverImage: "/Website jpeg/1st card company news (Home screen).jpeg",
    dropcap: "A",
    firstParagraph:
      "s Nigeria continues to prioritise technical and vocational education as a pathway to employment, entrepreneurship and economic development, Vertmance Resource Limited has reached a significant milestone with the issuance of its National Board for Technical Education (NBTE) accreditation licence. The accreditation marks an important step in Vertmance's commitment to creating practical opportunities for Nigerians to acquire relevant skills, gain industry experience and build sustainable livelihoods.",
    heading1: "Building Skills. Creating Opportunities. Empowering People.",
    paragraph2:
      "The institution provides practical, industry-relevant training designed to bridge the gap between education and real-world opportunities. Through structured technical and vocational programmes, we equip participants with the knowledge, practical skills and confidence needed to pursue meaningful careers, entrepreneurship and sustainable livelihoods.",
    quote:
      "Empowerment goes beyond giving people opportunities; it is about equipping them with the skills to create opportunities for themselves and others.",
    paragraph3:
      "This milestone further strengthens Vertmance's vision of building businesses and institutions that deliver meaningful and measurable impact across communities.",
    images: ["/Website jpeg/Rice fields.jpg", "/Website jpeg/Rice_processing.jpg"],
    heading2: "From Accreditation to Impact",
    paragraph4:
      "The accreditation is only the beginning. Vertmance is committed to using the institution as a platform for practical learning, capacity development and economic empowerment. With a focus on skills, opportunity and impact, the institution will continue to develop programmes that respond to real industry needs while contributing to the development of a more skilled and productive Nigerian workforce.",
    sidebarTitle: "Key Highlights",
    sidebarHighlights: [
      {
        number: "01",
        title: "NBTE ACCREDITATION",
        description:
          "Officially licensed to deliver approved technical and vocational skills training.",
      },
      {
        number: "02",
        title: "SKILLS DEVELOPMENT",
        description:
          "Equipping Nigerians with practical, industry-relevant knowledge and competencies.",
      },
      {
        number: "03",
        title: "ECONOMIC EMPOWERMENT",
        description:
          "Creating pathways to employment, entrepreneurship and sustainable livelihoods.",
      },
    ],
  },
  {
    slug: "engineering-milestone",
    category: "Engineering",
    title: "Engineering & Construction project milestone",
    excerpt:
      "A look at our latest engineering delivery — precision execution, strategic partnerships, and world-class infrastructure.",
    date: "28 Jan, 2026",
    readTime: "8 min read",
    author: "Damilola Agboola",
    coverImage: "/Website jpeg/Engineering and construction(Home screen).jpg",
    dropcap: "A",
    firstParagraph:
      "s urban centers across Nigeria continue to grow rapidly, the demand for resilient and sustainable infrastructure has never been more urgent. Vertmance Engineering and Construction has successfully reached a major milestone on its latest urban infrastructure project. This delivery represents our ongoing commitment to precision engineering, practical execution, and world-class safety standards.",
    heading1: "Precision Engineering. Quality Materials. Proven Impact.",
    paragraph2:
      "Our dedicated teams of engineers, designers, and construction professionals worked in synergy to ensure every beam, column, and foundation meets international standards. Through advanced project management tools and on-site oversight, the project was delivered on schedule and within budget, establishing a model for future infrastructure projects.",
    quote:
      "Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution.",
    paragraph3:
      "This milestone demonstrates Vertmance's capability to deliver heavy-duty commercial and civil works that stand the test of time, creating opportunities and connecting communities.",
    images: [
      "/Website jpeg/magnific_two-nigerian-technicians-_SyOklLzUb8.jpg",
      "/Website jpeg/magnific_realistic-photograph-of-n_P3igRdO42C.jpg",
    ],
    heading2: "Building the Foundation of Growth",
    paragraph4:
      "The successful completion of this phase is a stepping stone to broader regional initiatives. Vertmance continues to foster partnerships with public and private stakeholders to develop sustainable civic works, transportation networks, and industrial plants that drive commerce and enhance livelihoods across the continent.",
    sidebarTitle: "Key Highlights",
    sidebarHighlights: [
      {
        number: "01",
        title: "PRECISION DESIGN",
        description:
          "Built to rigorous technical specifications and safety codes.",
      },
      {
        number: "02",
        title: "LOCAL EMPOWERMENT",
        description:
          "Over 80% of the site labor and materials sourced from local communities.",
      },
      {
        number: "03",
        title: "SUSTAINABILITY",
        description:
          "Integrating low-carbon concrete and energy-efficient building systems.",
      },
    ],
  },
  {
    slug: "agribusiness-value-chain",
    category: "Agribusiness",
    title: "Building integrated livestock & crop value chains",
    excerpt:
      "Inside our integrated agriculture model spanning livestock production, crop farming, and capacity development.",
    date: "15 Jan, 2026",
    readTime: "10 min read",
    author: "Oluwagbemi Michael",
    coverImage: "/Website jpeg/wxx.jpeg",
    dropcap: "O",
    firstParagraph:
      "ur agricultural operations at Owonikoko Ranch & Farms are entering a new phase of integration, linking crop cultivation directly to livestock husbandry. By recycling organic waste, cultivating custom forage crops, and implementing modern irrigation, we are building a closed-loop farming model that optimizes resources and minimizes ecological impact.",
    heading1: "Circular Agriculture. Total Traceability. Premium Quality.",
    paragraph2:
      "Sustainable agriculture requires a shift away from linear consumption. By utilizing crop residues as high-nutrient animal feed and processing manure into organic fertilizer, we maintain high-yielding, chemical-free fields while ensuring our livestock receives premium, grass-fed nutrition. This integration ensures absolute traceability from seed to table.",
    quote:
      "Sustainable farming is not just about growing food; it is about cultivating an ecosystem where nothing goes to waste.",
    paragraph3:
      "Through capacity building programs, we also train local farmers in circular agribusiness practices, helping them increase yields and improve profitability while preserving the soil.",
    images: ["/Website jpeg/o.jpeg", "/Website jpeg/Rice fields.jpg"],
    heading2: "Scale and Community Empowerment",
    paragraph4:
      "Our integrated livestock and crop model is designed to scale across multiple regions. By collaborating with agricultural cooperatives and investing in modern processing centers, Vertmance is helping secure food supply chains, reduce dependence on food imports, and create hundreds of skilled green jobs for Nigerian youth.",
    sidebarTitle: "Key Highlights",
    sidebarHighlights: [
      {
        number: "01",
        title: "CLOSED-LOOP MODEL",
        description:
          "Nutrient recycling reduces external fertilizer needs by 60%.",
      },
      {
        number: "02",
        title: "PREMIUM NUTRITION",
        description:
          "Custom grass-and-grain blends enhance livestock health.",
      },
      {
        number: "03",
        title: "AGRI-TRAINING",
        description:
          "Empowering local outgrowers through practical modern training.",
      },
    ],
  },
  {
    slug: "group-investment-update",
    category: "Investments",
    title: "Group Investment portfolio update",
    excerpt:
      "Where Vertmance is deploying capital next — strategic investments that unlock opportunities across key industries.",
    date: "02 Jan, 2026",
    readTime: "6 min read",
    author: "Oluwagbemi Michael",
    coverImage: "/Website jpeg/Group Investment(Home screen).jpg",
    dropcap: "A",
    firstParagraph:
      "s Vertmance continues to execute its long-term strategic vision, our investment division is actively deploying capital into high-growth sectors that unlock real economic value. From agriculture and infrastructure to renewable energy and hospitality, our portfolio is structured to drive sustainable, compound growth while delivering robust social impact.",
    heading1: "Strategic Capital. Resource Optimization. Long-term Value.",
    paragraph2:
      "We believe in disciplined asset management and hands-on operational support. Rather than acting as a passive investor, Vertmance partners deeply with portfolio companies, providing advisory services, leadership guidance, and industrial synergies. This approach allows us to de-risk operations and accelerate market entry.",
    quote:
      "Capital without capability is a wasted opportunity. We invest our experience, our network, and our discipline alongside every dollar.",
    paragraph3:
      "By focusing on critical sectors, we position our portfolio to benefit from Africa's rapid urbanization and demographic shifts.",
    images: [
      "/Website jpeg/Core principle (Home Screen).jpg",
      "/Website jpeg/silvex_int.jpg",
    ],
    heading2: "Next Horizons of Deployment",
    paragraph4:
      "In the coming quarters, Vertmance is targeting expanded investments in decentralized clean energy and tech-enabled agribusiness platforms. By staying agile and leveraging our cross-sector insights, we are well-positioned to create the next generation of market-leading African enterprises.",
    sidebarTitle: "Key Highlights",
    sidebarHighlights: [
      {
        number: "01",
        title: "DISCIPLINED DEPLOYMENT",
        description:
          "Strict risk assessment and capital allocation parameters.",
      },
      {
        number: "02",
        title: "PASSIONATE PARTNERSHIP",
        description: "Hands-on management to drive operational excellence.",
      },
      {
        number: "03",
        title: "VALUE ALIGNMENT",
        description: "Every portfolio asset must contribute to job creation.",
      },
    ],
  },
];

export default function CompanyNewsScreen() {
  const { slug } = useParams<{ slug: string }>();

  // Find the matching article or default to the first one
  const article =
    ALL_ARTICLES.find((a) => a.slug === slug) || ALL_ARTICLES[0];

  // Get other articles for "Related News"
  const relatedArticles = ALL_ARTICLES.filter((a) => a.slug !== article.slug);

  // Layout states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessMenuOpen, setBusinessMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans selection:bg-orange-500 selection:text-white transition-colors duration-300">
      {/* HEADER / NAVBAR */}
      <nav className="business-menu-host sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <img
                src="/Vertmance logo.png"
                alt="Vertmance Logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className="text-sm tracking-wide font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 py-2"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-sm tracking-wide font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 py-2"
            >
              About Us
            </Link>
            <Link
              to="/business"
              className="business-trigger text-sm tracking-wide font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 py-2 relative"
            >
              Business
            </Link>
            <Link
              to="/portfolio"
              className="text-sm tracking-wide font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 py-2"
            >
              Portfolio
            </Link>
          </div>

          {/* Contact Us button */}
          <div className="hidden md:block">
            <Link
              to="/contact-us"
              className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none"
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
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 transition-colors duration-300 animate-fadeIn">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              to="/business"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Business
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Portfolio
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 bg-black hover:bg-gray-800 text-white py-3 rounded-md text-sm font-semibold tracking-wide transition-colors text-center block"
            >
              Contact Us
            </Link>
          </div>
        )}

        <BusinessFlyout
          open={businessMenuOpen}
          onClose={() => setBusinessMenuOpen(false)}
        />
      </nav>

      {/* ARTICLE HEADER HERO IMAGE */}
      <div className="w-full h-[320px] sm:h-[450px] lg:h-[550px] relative">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* ARTICLE BODY */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16">
        {/* UPPER META INFO */}
        <div className="text-xs sm:text-sm font-bold tracking-widest text-[#e55a00] uppercase mb-8 flex items-center gap-1 sm:gap-2">
          <span>BY {article.author}</span>
          <span className="text-gray-300">•</span>
          <span>{article.date}</span>
          <span className="text-gray-300">•</span>
          <span>{article.readTime}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* LEFT 2 COLUMNS: ARTICLE TEXT */}
          <div className="lg:col-span-2 space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
            {/* Drop Cap First Paragraph */}
            <p className="first-letter:text-6xl first-letter:font-extrabold first-letter:mr-3 first-letter:float-left first-letter:text-gray-950 first-letter:leading-none">
              {article.firstParagraph}
            </p>

            <div className="clear-both"></div>

            {/* Heading 1 */}
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-gray-950 tracking-tight leading-tight pt-4">
              {article.heading1}
            </h2>

            {/* Paragraph 2 */}
            <p className="text-gray-700 font-normal">{article.paragraph2}</p>

            {/* Callout Quote */}
            <blockquote className="border-l-4 border-[#e55a00] pl-6 py-2 my-6 font-serif text-lg sm:text-xl md:text-2xl text-gray-950 font-medium italic">
              &ldquo;{article.quote}&rdquo;
            </blockquote>

            {/* Paragraph 3 */}
            <p className="text-gray-700 font-normal">{article.paragraph3}</p>

            {/* Side-by-side Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              {article.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative shadow-sm border border-gray-100"
                >
                  <img
                    src={imgSrc}
                    alt={`${article.title} Detail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Heading 2 */}
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-gray-950 tracking-tight leading-tight pt-4">
              {article.heading2}
            </h3>

            {/* Paragraph 4 */}
            <p className="text-gray-700 font-normal">{article.paragraph4}</p>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="bg-[#f6f5f2] border border-gray-200/50 rounded-2xl p-8 space-y-8 relative overflow-hidden">
              {/* Sidebar Header */}
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-gray-950">
                {article.sidebarTitle}
              </h3>

              {/* Highlights list */}
              <div className="space-y-8 relative z-10">
                {article.sidebarHighlights.map((highlight, idx) => (
                  <div key={idx} className="space-y-2 border-b border-gray-200/50 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-serif font-black text-gray-300">
                        {highlight.number}
                      </span>
                      <h4 className="text-sm font-extrabold tracking-wider text-gray-950 uppercase">
                        {highlight.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative circles pattern */}
            <div className="hidden lg:flex justify-end pr-8 select-none pointer-events-none opacity-20">
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="80" cy="80" r="70" stroke="#e55a00" strokeWidth="1.5" />
                <circle cx="80" cy="80" r="50" stroke="#e55a00" strokeWidth="1.5" />
                <circle cx="80" cy="80" r="30" stroke="#e55a00" strokeWidth="1.5" />
                <circle cx="80" cy="80" r="10" stroke="#e55a00" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* RELATED NEWS / CONTINUE READING SECTION */}
      <section className="bg-[#f6f5f2] py-16 sm:py-24 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-12">
            <div className="space-y-1">
              <span className="text-[11px] font-black tracking-widest text-[#e55a00] uppercase block">
                CONTINUE READING
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-gray-950 tracking-tight">
                Related News
              </h2>
            </div>
            <Link
              to="/#news"
              className="text-xs font-black tracking-widest text-gray-950 hover:text-[#e55a00] uppercase transition-colors"
            >
              VIEW ALL NEWS
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                to={`/news/${item.slug}`}
                className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-gray-200/50 transition-all duration-200 group"
              >
                <div>
                  {/* Card Image */}
                  <div className="w-full aspect-[16/10] bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative border border-gray-100">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-gray-800 shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  {/* News Title */}
                  <h3 className="text-gray-950 text-base font-extrabold leading-snug mb-2 group-hover:text-[#e55a00] transition-colors">
                    {item.title}
                  </h3>
                  {/* News Excerpt */}
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-6 font-medium group-hover:text-gray-950 transition-colors">
                    {item.excerpt}
                  </p>
                </div>

                {/* News Date */}
                <span className="text-[11px] font-semibold text-gray-400 self-end">
                  {item.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#14110f] text-gray-400 py-20 px-6 lg:px-12 border-t border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
            {/* Column 1: Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-white transition-colors text-left"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business"
                    className="hover:text-white transition-colors text-left"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:text-white transition-colors text-left"
                  >
                    Portfolio
                  </Link>
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
                  <Link
                    to="/business"
                    className="hover:text-white font-bold transition-colors text-left text-xs text-[#e55a00] uppercase tracking-wider"
                  >
                    View all Businesses
                  </Link>
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

      {/* CONTACT US OVERLAY MODAL */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white border border-gray-100 rounded-2xl w-full max-w-lg overflow-hidden relative shadow-2xl p-8 space-y-6">
            {/* Close button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full flex items-center justify-center transition-colors focus:outline-none"
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
              <h3 className="text-2xl font-extrabold text-gray-950">
                Get In Touch
              </h3>
              <p className="text-sm text-gray-500">
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
                <h4 className="text-lg font-bold text-gray-950">
                  Message Transmitted!
                </h4>
                <p className="text-sm text-gray-500 text-center">
                  We have received your request. An engineering/consultancy
                  expert will respond shortly.
                </p>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase">
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] text-gray-950"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 uppercase">
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] text-gray-950"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 uppercase">
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
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] text-gray-950"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 uppercase">
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
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#e55a00] text-gray-950 resize-none"
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
