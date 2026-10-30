"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowRight,
  LuChevronRight,
  LuChevronDown,
  LuSearch,
  LuSlidersHorizontal,
  LuMessagesSquare,
  LuSprout,
  LuSettings,
  LuHandshake,
  LuHouse,
  LuTruck,
  LuWrench,
  LuCircleHelp,
  LuPlus,
  LuMinus,
  LuMapPin,
  LuPhone,
  LuMail,
  LuGlobe,
  LuLeaf,
  LuFileText,
  LuClipboardList,
  LuUsers,
  LuShieldCheck,
  LuMessageCircle,
  LuX,
  LuBookOpen,
  LuHeadphones,
  LuBuilding2,
  LuArrowUpRight,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";
import { FiCheckCircle } from "react-icons/fi";

const images = {
  hero: "/Images/FAQpage-right.webp",
  seedling: "",
  hands: "/Images/Nurturing Seedlings in Golden Light.webp",
};

const topics = [
  { name: "General", icon: LuMessagesSquare },
  { name: "Products", icon: LuSprout },
  { name: "Services", icon: LuSettings },
  { name: "Projects", icon: LuSprout },
  { name: "Orders & Delivery", icon: LuTruck },
  { name: "Technical Support", icon: LuWrench },
  { name: "Partnership & Business", icon: LuHandshake },
];

const faqs = [
  {
    id: 1,
    topic: "General",
    question: "What is Fresh Agriculture by Green Bio-Tech LLP?",
    answer:
      "Fresh Agriculture by Green Bio-Tech LLP focuses on agricultural products and farming solutions. Our aim is to help farmers and agricultural businesses explore suitable products, cultivation approaches, and practical guidance.",
  },
  {
    id: 2,
    topic: "General",
    question: "Where is your company based?",
    answer:
      "Our listed address is in Kukunoopally, District Siddipet (Hyderabad region), Telangana, India. Please contact our team to confirm the appropriate contact or service location for your requirement.",
  },
  {
    id: 3,
    topic: "General",
    question: "What types of products do you offer?",
    answer:
      "Our agricultural product range includes biofertilizers, fertilizers, crop-protection products, and plant-growth solutions. Product availability, application guidance, and suitability should be confirmed from the relevant product label and our team.",
  },
  {
    id: 4,
    topic: "General",
    question: "Do you provide end-to-end farming solutions?",
    answer:
      "We can discuss your farming requirements and identify which products, project-planning services, or technical guidance may be relevant. The exact scope, deliverables, and availability of each service should be confirmed during consultation.",
  },
  {
    id: 5,
    topic: "General",
    question: "Who can use your products and services?",
    answer:
      "Our agricultural offerings may be relevant to farmers, growers, nurseries, agricultural entrepreneurs, and farming businesses. Suitability depends on the particular product or service and your requirements.",
  },
  {
    id: 6,
    topic: "General",
    question: "Do you work with individual farmers or large projects as well?",
    answer:
      "Contact us with your project scope, location, and requirements. Our team can discuss whether the requested products or services are suitable and available for your scale of operation.",
  },
  {
    id: 7,
    topic: "General",
    question: "How can I contact your team for support?",
    answer:
      "You can contact us through the phone number, email address, or enquiry form provided on our website. Include your location, crop or project type, and a short description of your question so the team can direct your enquiry appropriately.",
  },
  {
    id: 8,
    topic: "General",
    question: "Do you provide on-site consultation?",
    answer:
      "On-site visits depend on the service requested, location, scheduling, and availability. Contact our team with your location and requirements to confirm whether a visit can be arranged.",
  },
  {
    id: 9,
    topic: "General",
    question: "What makes your products different from others?",
    answer:
      "Product features vary by formulation and intended use. Review the product label, composition, recommended application, and applicable documentation before making a selection. Our team can help you identify the information relevant to your crop.",
  },
  {
    id: 10,
    topic: "General",
    question: "Is your company registered?",
    answer:
      "Please refer to the company's official business documentation for its current legal registration details. If you need registration or business information for a commercial transaction, request the relevant documents directly from the company.",
  },
  {
    id: 11,
    topic: "Products",
    question: "How do I choose the right agricultural product?",
    answer:
      "Start with your crop, growth stage, soil or growing conditions, and the issue you want to address. Check the product label and recommended use, and seek qualified agricultural guidance if the correct treatment is uncertain.",
  },
  {
    id: 12,
    topic: "Products",
    question: "Where can I find product application instructions?",
    answer:
      "Use the instructions on the specific product label or approved technical documentation. Application rates and methods differ by formulation, crop, and intended use; do not assume that one product's instructions apply to another.",
  },
  {
    id: 13,
    topic: "Products",
    question: "Are your products suitable for every crop?",
    answer:
      "Not necessarily. Suitability depends on the formulation, crop, growth stage, and label directions. Confirm that the intended crop and use are permitted before applying a product.",
  },
  {
    id: 14,
    topic: "Products",
    question: "How can I request a product catalogue?",
    answer:
      "Contact our team through the website's enquiry form or published email address and request the latest catalogue. Ask for current pricing, pack sizes, availability, and product documentation when needed.",
  },
  {
    id: 15,
    topic: "Services",
    question: "What agricultural services can I enquire about?",
    answer:
      "You can enquire about areas such as protected cultivation, hydroponics, mushroom farming, aquaculture, floriculture, nurseries, livestock farming, irrigation, and crop advisory. Confirm the currently available services and scope with our team.",
  },
  {
    id: 16,
    topic: "Services",
    question: "Can I request a customized solution?",
    answer:
      "Yes, you can submit your requirements for assessment. Share your location, land or facility details, crop or farming objective, resources, and estimated budget so the team can discuss suitable options.",
  },
  {
    id: 17,
    topic: "Projects",
    question: "How do I discuss a farming project?",
    answer:
      "Use the project enquiry or contact form to describe your project, location, approximate scale, and goals. The next steps, scope, estimated costs, and feasibility need to be confirmed individually.",
  },
  {
    id: 18,
    topic: "Projects",
    question: "What information should I prepare before a consultation?",
    answer:
      "Prepare your location, land or facility size, intended crop or farming activity, water and power availability, budget range, and timeline. Photos, site measurements, and existing infrastructure details can also help.",
  },
  {
    id: 19,
    topic: "Orders & Delivery",
    question: "How can I enquire about product availability and delivery?",
    answer:
      "Contact the sales team with the product name, quantity, delivery location, and required date. Confirm stock availability, shipping arrangements, charges, and the expected delivery timeline before placing an order.",
  },
  {
    id: 20,
    topic: "Orders & Delivery",
    question: "How can I check an existing order?",
    answer:
      "Contact the team using your order reference and registered contact details. They can advise on the status and any next steps according to the company's order process.",
  },
  {
    id: 21,
    topic: "Technical Support",
    question: "How can I get technical support for a product?",
    answer:
      "Provide the product name, batch or label details where applicable, crop, growth stage, and a clear description of the issue. Include photographs if relevant, and follow the product label while waiting for qualified advice.",
  },
  {
    id: 22,
    topic: "Technical Support",
    question: "Can I get help with an agricultural project setup?",
    answer:
      "Share your project type, site location, intended use, and current stage. The team can discuss available support and whether the requirement falls within its service scope.",
  },
  {
    id: 23,
    topic: "Partnership & Business",
    question: "How can I discuss a business partnership?",
    answer:
      "Send a brief introduction, your organisation or business details, geographic coverage, and the type of collaboration you have in mind. The team can review the proposal and confirm whether there is a suitable opportunity.",
  },
  {
    id: 24,
    topic: "Partnership & Business",
    question: "Do you offer dealership or distribution opportunities?",
    answer:
      "Enquire directly about current dealership or distribution opportunities, eligibility, territory availability, commercial terms, and documentation. These details must be confirmed by the company.",
  },
];

const topicIcons = {
  General: LuMessagesSquare,
  Products: LuSprout,
  Services: LuSettings,
  Projects: LuHouse,
  "Orders & Delivery": LuTruck,
  "Technical Support": LuWrench,
  "Partnership & Business": LuHandshake,
};

const quickHelp = [
  {
    icon: LuFileText,
    title: "Product Catalogue",
    description: "Explore our agricultural product range",
    href: "/products",
  },
  {
    icon: LuSettings,
    title: "Technical Support",
    description: "Discuss your technical requirements",
    href: "/contact?topic=technical-support",
  },
  {
    icon: LuHouse,
    title: "Project Enquiries",
    description: "Discuss your project requirements",
    href: "/projects",
  },
  {
    icon: LuHandshake,
    title: "Partnership Opportunities",
    description: "Explore possible collaborations",
    href: "/contact?topic=partnership",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-[10px] font-bold uppercase tracking-[0.25em] ${
        light ? "text-[#c9dfad]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}

function TopicCard({ topic, count, active, onClick }) {
  const Icon = topicIcons[topic];

  return (
    <motion.button
      variants={fadeUp}
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex min-h-[82px] min-w-0 flex-col items-center justify-center rounded-xl border px-2 py-3 text-center transition duration-200 sm:min-h-[90px] ${
        active
          ? "border-[#075332] bg-[#075332] text-white shadow-lg shadow-[#075332]/10"
          : "border-[#eef0e8] bg-white/85 text-[#213b2d] hover:border-[#cbdcc8] hover:bg-[#f0f5e9]"
      }`}
    >
      <Icon size={23} strokeWidth={1.8} />

      <span className="mt-2 text-[10px] font-bold leading-4 sm:text-xs">
        {topic}
      </span>

      <span
        className={`mt-0.5 text-[9px] ${
          active ? "text-white/75" : "text-[#778074]"
        }`}
      >
        {count} {count === 1 ? "Question" : "Questions"}
      </span>
    </motion.button>
  );
}

function FAQItem({ faq, open, onClick }) {
  return (
    <article className="border-b border-[#e9ece5] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        aria-controls={`faq-answer-${faq.id}`}
        className="flex w-full items-center gap-3 py-3 text-left sm:gap-4 sm:py-3.5"
      >
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition ${
            open ? "bg-[#65a783] text-white" : "bg-[#e4ece5] text-[#234c35]"
          }`}
        >
          {open ? <LuMinus size={14} /> : <LuPlus size={14} />}
        </span>

        <span className="min-w-0 flex-1 text-xs font-semibold leading-5 text-[#1d2c43] sm:text-sm">
          {faq.question}
        </span>

        <LuChevronDown
          size={16}
          className={`shrink-0 text-[#162d42] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-4 pl-9 pr-3 text-xs leading-6 text-[#737d8d] sm:pl-10 sm:pr-6 sm:text-[13px]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function FAQPage() {
  const [activeTopic, setActiveTopic] = useState("General");
  const [search, setSearch] = useState("");
  const [openFAQ, setOpenFAQ] = useState(1);
  const [showAllTopics, setShowAllTopics] = useState(false);

  const topicCounts = useMemo(() => {
    return topics.reduce((result, topic) => {
      result[topic.name] = faqs.filter(
        (faq) => faq.topic === topic.name,
      ).length;
      return result;
    }, {});
  }, []);

  const filteredFAQs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesTopic =
        activeTopic === "All Topics" || faq.topic === activeTopic;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.topic.toLowerCase().includes(query);

      return matchesTopic && matchesSearch;
    });
  }, [activeTopic, search]);

  function chooseTopic(topic) {
    setActiveTopic(topic);
    setOpenFAQ(null);
  }

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-[#f7f7ef]" />

          <img
            src={images.hero}
            alt="Agricultural fields in natural sunlight"
            className="absolute lg:hidden inset-0 -z-20 h-full w-full object-cover"
          />

          {/* LEFT DECORATIVE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 lg:-left-15 h-full object-cover lg:object-none "
          >
            <img
              src={images.heroLeft}
              alt=""
              priority
              className="h-full w-full"
              sizes=""
            />
          </motion.div>

          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#fbfaf4] via-[#fbfaf4]/95 to-[#fbfaf4]/20" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#fbfaf4]/65 to-transparent" />

          <div className="mx-auto grid min-h-78.75 max-w-7xl items-center gap-7 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[330px] lg:grid-cols-[1fr_0.9fr] lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-xl"
            >
              <motion.div
                variants={fadeUp}
                className="mb-5 flex items-center gap-2 text-xs text-[#477c53]"
              >
                <a href="/" className="hover:underline">
                  Home
                </a>
                <LuChevronRight size={13} />
                <span>FAQ</span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <SectionLabel>Frequently Asked Questions</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl leading-[1.04] tracking-tight text-[#152a43] sm:text-5xl lg:text-6xl"
              >
                Your Questions,
                <span className="block text-[#075332]">Our Answers</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-xs leading-6 text-[#657064] sm:text-sm sm:leading-7"
              >
                Find clear and helpful answers about our products, services,
                farming solutions, and working process. If you still have a
                question, feel free to contact our team.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-5 flex flex-wrap gap-3"
              >
                <a
                  href="#questions"
                  className="inline-flex items-center gap-3 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-[#075332]/10 transition hover:bg-[#0b6941]"
                >
                  Ask a Question
                  <LuArrowRight size={15} />
                </a>

                <a
                  href="https://wa.me/916297003664"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#8db69a] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#edf4e8]"
                >
                  <LuMessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>
            {/* right side*/}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              aria-hidden="true"
              className="pointer-events-none absolute  right-0 -top-20 z-0 w-[50%] hidden lg:block"
            >
              <img
                src={images.hero}
                alt=""
                priority
                className="h-auto w-full object-contain"
              />
            </motion.div>
            {/* Hero support cards */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="relative hidden min-h-67.5 lg:block"
            >
              <div className="absolute right-0 -bottom-20 flex gap-2">
                {[
                  { icon: LuUsers, title: "Expert", subtitle: "Guidance" },
                  {
                    icon: LuShieldCheck,
                    title: "Reliable",
                    subtitle: "Support",
                  },
                  {
                    icon: LuSettings,
                    title: "Practical",
                    subtitle: "Solutions",
                  },
                  {
                    icon: LuSprout,
                    title: "Farmer First",
                    subtitle: "Approach",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/55 px-3 py-3 shadow-md backdrop-blur-sm"
                    >
                      <Icon size={21} className="shrink-0 text-[#286b42]" />
                      <p className="text-[10px] font-medium leading-4 text-[#35473a]">
                        {item.title}
                        <br />
                        {item.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* TOPIC FILTERS */}
        <section className="px-4 pb-5 pt-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Browse by Topic</SectionLabel>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-7">
              {topics
                .slice(0, showAllTopics ? topics.length : 7)
                .map((topic) => (
                  <TopicCard
                    key={topic.name}
                    topic={topic.name}
                    count={topicCounts[topic.name]}
                    active={activeTopic === topic.name}
                    onClick={() => chooseTopic(topic.name)}
                  />
                ))}
            </div>

            <div className="mt-3 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setShowAllTopics((value) => !value);
                  if (!showAllTopics) setActiveTopic("All Topics");
                  else setActiveTopic("General");
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#286b42] hover:underline"
              >
                {showAllTopics ? "Show topic selection" : "View all topics"}
                <LuChevronRight
                  size={14}
                  className={showAllTopics ? "rotate-180" : ""}
                />
              </button>
            </div>
          </div>
        </section>

        {/* QUESTIONS + SIDEBAR */}
        <section
          id="questions"
          className="relative isolate px-4 pb-12 pt-3 sm:px-8 lg:px-12"
        >
          <div className="relative mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px]">
            {/* FAQ column */}
            <div className="min-w-0">
              <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <SectionLabel>
                    {activeTopic === "All Topics"
                      ? "All Questions"
                      : `${activeTopic} Questions`}
                  </SectionLabel>

                  <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                    {search.trim()
                      ? "Search Results"
                      : activeTopic === "General"
                        ? "Common Questions"
                        : activeTopic}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[#d5dfd5] bg-white/85 px-3 py-2.5 sm:w-48 sm:flex-none">
                    <LuSearch size={16} className="shrink-0 text-[#286b42]" />
                    <input
                      type="search"
                      value={search}
                      onChange={(event) => {
                        setSearch(event.target.value);
                        setOpenFAQ(null);
                      }}
                      placeholder="Search questions..."
                      aria-label="Search frequently asked questions"
                      className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-[#9aa397]"
                    />
                    {search && (
                      <button
                        type="button"
                        aria-label="Clear search"
                        onClick={() => setSearch("")}
                      >
                        <LuX size={14} />
                      </button>
                    )}
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-[#eceee6] bg-white/90 px-4 shadow-sm sm:px-5">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq) => (
                    <FAQItem
                      key={faq.id}
                      faq={faq}
                      open={openFAQ === faq.id}
                      onClick={() =>
                        setOpenFAQ((current) =>
                          current === faq.id ? null : faq.id,
                        )
                      }
                    />
                  ))
                ) : (
                  <div className="px-4 py-14 text-center">
                    <LuCircleHelp
                      size={30}
                      className="mx-auto text-[#477c53]"
                    />
                    <h3 className="mt-4 font-display text-2xl text-[#193c27]">
                      No matching questions
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-[#778074]">
                      Try a different keyword or browse another topic.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearch("");
                        setActiveTopic("General");
                        setOpenFAQ(1);
                      }}
                      className="mt-5 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white"
                    >
                      Reset Questions
                    </button>
                  </div>
                )}
              </div>

              <p className="mt-3 text-[10px] text-[#8b9387]">
                Showing {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1 ? "question" : "questions"}. Answers
                may vary by product, service, location, and availability.
              </p>
            </div>

            {/* Right sidebar */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-[#eceee6] bg-white/85 p-4 shadow-sm sm:p-5">
                <div className="relative h-28 overflow-hidden rounded-xl sm:h-32">
                  <img
                    src={images.seedling}
                    alt="Healthy green plants"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-4 font-display text-2xl leading-tight text-[#162d42]">
                  Still Have a Question?
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#778074]">
                  Our team can help you with product details, technical
                  guidance, and questions about your farming needs.
                </p>

                <a
                  href="/contact"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#075332] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
                >
                  Get a Call Back
                  <LuArrowRight size={15} />
                </a>

                <a
                  href="https://wa.me/916297003664"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#eff5e9]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#159c57] text-white">
                    <LuMessageCircle size={18} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-[#243c30]">
                      Chat on WhatsApp
                    </span>
                    <span className="mt-0.5 block text-[10px] text-[#778074]">
                      Message our team
                    </span>
                  </span>
                  <LuArrowUpRight
                    size={15}
                    className="ml-auto text-[#286b42]"
                  />
                </a>

                <a
                  href="mailto:freshagriculturebygreenbiotech@gmail.com"
                  className="mt-1 flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#eff5e9]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#159c57] text-white">
                    <LuMail size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-[#243c30]">
                      Email Us
                    </span>
                    <span className="mt-0.5 block break-all text-[9px] text-[#778074]">
                      freshagriculturebygreenbiotech@gmail.com
                    </span>
                  </span>
                </a>
              </div>

              <div className="rounded-2xl border border-[#eceee6] bg-white/85 p-4 shadow-sm sm:p-5">
                <h3 className="font-display text-2xl text-[#162d42]">
                  Quick Help
                </h3>

                <div className="mt-3">
                  {quickHelp.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        className="group flex items-center gap-3 border-b border-[#edf0e9] py-3 last:border-b-0"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eff5e9] text-[#286b42] transition group-hover:bg-[#dfeeda]">
                          <Icon size={19} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] font-bold text-[#243c30]">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-[10px] leading-4 text-[#778074]">
                            {item.description}
                          </span>
                        </span>

                        <LuChevronRight
                          size={16}
                          className="shrink-0 text-[#286b42] transition group-hover:translate-x-1"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* CONSULTATION CTA */}
        <section className="relative isolate overflow-hidden">
          <img
            src={images.hands}
            alt="Hands supporting a young plant"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fbf6e8]/10 via-[#fbf6e8]/85 to-[#fbf6e8]/75" />

          <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_0.8fr] lg:px-12">
            <div className="relative z-10 lg:pl-8">
              <SectionLabel>Need Personal Assistance?</SectionLabel>

              <h2 className="max-w-xl font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                Let's Find the Best Solution for Your Farming Needs
              </h2>

              <p className="mt-3 max-w-lg text-xs leading-6 text-[#5f6b62] sm:text-sm">
                Talk to our team and discuss options based on your crops, land,
                and goals.
              </p>

              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#075332] px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
              >
                Get Free Consultation
                <LuArrowRight size={15} />
              </a>
            </div>

            <div className="relative z-10 rounded-2xl border border-white/70 bg-[#fffef5]/95 p-5 shadow-lg backdrop-blur-md sm:p-6">
              {[
                "Expert Guidance",
                "Customized Solutions",
                "On-Site Support",
                "Product Recommendations",
                "Project Planning",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2">
                  <FiCheckCircle
                    size={16}
                    className="shrink-0 fill-[#075332] text-[#075332]"
                  />
                  <span className="text-xs text-[#35473a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
