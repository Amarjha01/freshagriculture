
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuChevronRight,
  LuChevronLeft,
  LuHouse,
  LuSprout,
  LuFlower2,
  LuWaves,
  LuUsers,
  LuDroplets,
  LuLeaf,
  LuShieldCheck,
  LuSettings,
  LuClipboardList,
  LuCircleCheck,
  LuMessagesSquare,
  LuFileCheck,
  LuTractor,
  LuHandshake,
  LuWheat,
  LuTreePine,
  LuMicroscope,
  LuBuilding2,
  LuChartNoAxesCombined,
  LuMenu,
  LuX,
  LuHeart,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";

const images = {
  hero: "/Images/services-right1.webp",
  heroLeft:"/Images/home-hero-left.png",
  polyhouse:
    "/services/polyhouse Farming/Polyhouse Farm.png",
  hydroponics:
     "/services/Hydroponics/Hydroponics Farm.png",
  mushroom:
  "/services/Mushroom Farming/Mushrooms Farm.png",
  aquaculture:
    "/services/Aquaculture/Aquaculture Farm.png",
  floriculture:
    "/services/Floriculture/Floriculture.png",
  nursery:
  "/services/Nursery/nursery.png",
  goat:
 "/services/open cultivation/Goat Farming/Goat Farm.png",
   irrigation:
    "services/Smart Irrigation/Smart Irrigation.png",
  cropAdvisory:
 "services/Advisory/Advisory.png",
   project:
     "services/Project & AMC/Project & AMC.png",
  hands:
    "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1800&q=90",
  consultation:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85",
};

const gallery = {
  polyhouse:[
     "/services/polyhouse Farming/Polyhouse Farm.png",
     "/services/polyhouse Farming/blueberries.jpeg",
     "/services/polyhouse Farming/broccoli .jpeg",
     "/services/polyhouse Farming/Capsicum.png",
     "/services/polyhouse Farming/cherry tomato.jpeg",
     "/services/polyhouse Farming/cucumber.jpeg",
     "/services/polyhouse Farming/GINGER.png",
     "/services/polyhouse Farming/Strawberries.jpeg",
  ],
  hydroponics:[
     "/services/Hydroponics/Hydroponics Farm.png",
  ],
  mushroom:[
     "/services/Mushroom Farming/Mushrooms Farm.png",
     "/services/Mushroom Farming/button mushroom.jpeg",
     "/services/Mushroom Farming/oyster mushroom.jpeg",
     "/services/Mushroom Farming/mushroom1.jpeg",
     "/services/Mushroom Farming/mushroom2.jpeg",
     "/services/Mushroom Farming/mushroom3.jpeg",
  ],
  aquaculture:[
     "/services/Aquaculture/Aquaculture Farm.png",
     "/services/Aquaculture/Aquaculture1.jpeg",
     "/services/Aquaculture/RAS Aquaculture.jpeg",
     "/services/Aquaculture/fish.jpeg",
     "/services/Aquaculture/fish2.jpeg",
     "/services/Aquaculture/Aquaculture2.jpeg",
  ],
  floriculture:[
     "/services/Floriculture/Floriculture.png",
     "/services/Floriculture/Floriculture1.jpeg",
     "/services/Floriculture/Floriculture2.jpeg",
     "/services/Floriculture/Floriculture3.jpeg",
  ],
  nursery:[
     "/services/Nursery/nursery.png",
  ],
  goat:[
     "/services/open cultivation/Goat Farming/Goat Farm.png",
     "/services/open cultivation/Goat Farming/goat1.jpeg",
     "/services/open cultivation/Goat Farming/goat2.jpeg",
     "/services/open cultivation/Goat Farming/goat3.jpeg",
  ],
  smartIrrigation:[
     "services/Smart Irrigation/Smart Irrigation.png",
  ],
  advisory:[
     "services/Advisory/Advisory.png",
  ],
  project_AMC:[
     "services/Project & AMC/Project & AMC.png",
  ],
}
const services = [
  {
    id: "polyhouse",
    number: "01",
    title: "Polyhouse Farming",
    shortTitle: "Polyhouse Farming",
    category: "Protected Cultivation",
    description:
      "Plan protected cultivation environments around crop requirements, growing conditions, infrastructure, and operational needs.",
    longDescription:
      "We help you explore polyhouse farming requirements, from planning a suitable growing environment to understanding structure options, irrigation, and crop-specific considerations. The final design depends on your site, crop, climate, and budget.",
    image: images.polyhouse,
    icon: LuHouse,
    benefits: [
      "Planning around land and crop requirements",
      "Structure and equipment considerations",
      "Irrigation and growing-environment planning",
      "Implementation and operational guidance",
    ],
    highlights: [
      { icon: LuSprout, title: "Controlled", subtitle: "Growing environment" },
      { icon: LuChartNoAxesCombined, title: "Crop-focused", subtitle: "Production planning" },
    ],
    gallery: gallery.polyhouse
  },
  {
    id: "hydroponics",
    number: "02",
    title: "Hydroponics",
    shortTitle: "Hydroponics",
    category: "Soilless Cultivation",
    description:
      "Explore soilless cultivation systems for leafy greens, herbs, and other suitable crops.",
    longDescription:
      "Hydroponic cultivation uses a managed growing environment and nutrient solution rather than conventional soil cultivation. System selection should consider the crop, water quality, nutrient management, space, and operating requirements.",
    image: images.hydroponics,
    icon: LuSprout,
    benefits: [
      "System selection based on crop requirements",
      "Growing-space and layout planning",
      "Water and nutrient-management considerations",
      "Guidance on day-to-day operations",
    ],
    highlights: [
      { icon: LuDroplets, title: "Managed", subtitle: "Water and nutrients" },
      { icon: LuLeaf, title: "Soilless", subtitle: "Growing systems" },
    ],
    gallery: gallery.hydroponics
  },
  {
    id: "mushroom",
    number: "03",
    title: "Mushroom Farming",
    shortTitle: "Mushroom Farming",
    category: "Indoor Cultivation",
    description:
      "Plan a mushroom cultivation setup around suitable growing conditions, production workflows, and space.",
    longDescription:
      "Mushroom cultivation requires attention to the species, growing substrate, hygiene, temperature, humidity, and production workflow. Planning these requirements together helps you assess the suitability of a proposed growing unit.",
    image: images.mushroom,
    icon: LuFlower2,
    benefits: [
      "Cultivation-space planning",
      "Species and substrate considerations",
      "Environmental management requirements",
      "Production workflow guidance",
    ],
    highlights: [
      { icon: LuSprout, title: "Purpose-built", subtitle: "Growing setup" },
      { icon: LuShieldCheck, title: "Hygiene", subtitle: "Planning" },
    ],
    gallery: gallery.mushroom

  },
  {
    id: "aquaculture",
    number: "04",
    title: "Aquaculture",
    shortTitle: "Aquaculture",
    category: "Aquatic Farming",
    description:
      "Explore fish-farming layouts and operating considerations for suitable aquaculture systems.",
    longDescription:
      "Aquaculture planning involves the intended species, water quality, pond or tank design, aeration, stocking practices, and farm-management requirements. Each project needs to be evaluated for its location and operating conditions.",
    image: images.aquaculture,
    icon: LuWaves,
    benefits: [
      "Pond or tank layout considerations",
      "Water quality and aeration planning",
      "Species-specific operating requirements",
      "Farm workflow and maintenance planning",
    ],
    highlights: [
      { icon: LuDroplets, title: "Water", subtitle: "Management planning" },
      { icon: LuWaves, title: "Aquatic", subtitle: "Growing systems" },
    ],
    gallery: gallery.aquaculture
  },
  {
    id: "floriculture",
    number: "05",
    title: "Floriculture",
    shortTitle: "Floriculture",
    category: "Flower Cultivation",
    description:
      "Plan flower cultivation around variety selection, growing conditions, and production objectives.",
    longDescription:
      "Floriculture requires crop-specific decisions about varieties, growing media, irrigation, climate, harvesting, and post-harvest handling. A practical plan should reflect the local growing environment and intended market.",
    image: images.floriculture,
    icon: LuFlower2,
    benefits: [
      "Flower variety and crop planning",
      "Growing environment assessment",
      "Irrigation and plant-care considerations",
      "Harvesting and post-harvest planning",
    ],
    highlights: [
      { icon: LuFlower2, title: "Crop-specific", subtitle: "Growing plans" },
      { icon: LuLeaf, title: "Plant care", subtitle: "Considerations" },
    ],
    gallery: gallery.floriculture
  },
  {
    id: "nursery",
    number: "06",
    title: "Nursery",
    shortTitle: "Nursery",
    category: "Plant Propagation",
    description:
      "Explore nursery layouts, propagation areas, growing media, and plant-care workflows.",
    longDescription:
      "A nursery project should account for the plant varieties being propagated, growing media, irrigation, shade, drainage, space, and handling. The right arrangement depends on production needs and local conditions.",
    image: images.nursery,
    icon: LuTreePine,
    benefits: [
      "Nursery layout and space planning",
      "Propagation and growing-media considerations",
      "Irrigation and drainage planning",
      "Plant handling and care workflows",
    ],
    highlights: [
      { icon: LuSprout, title: "Plant", subtitle: "Propagation" },
      { icon: LuDroplets, title: "Watering", subtitle: "Planning" },
    ],
    gallery: gallery.nursery
  },
  {
    id: "goat",
    number: "07",
    title: "Goat Farming",
    shortTitle: "Goat Farming",
    category: "Livestock Farming",
    description:
      "Assess livestock housing, feeding arrangements, farm layout, and day-to-day management needs.",
    longDescription:
      "Goat farming plans should consider breed suitability, housing, ventilation, feed and water access, hygiene, animal welfare, and veterinary support. The setup should be matched to the intended herd size and local conditions.",
    image: images.goat,
    icon: LuUsers,
    benefits: [
      "Housing and farm-layout considerations",
      "Feed and water-access planning",
      "Animal welfare and hygiene requirements",
      "Operational and veterinary considerations",
    ],
    highlights: [
      { icon: LuHouse, title: "Housing", subtitle: "Considerations" },
      { icon: LuHeart, title: "Animal", subtitle: "Welfare planning" },
    ],
    gallery: gallery.goat
  },
  {
    id: "irrigation",
    number: "08",
    title: "Smart Irrigation",
    shortTitle: "Smart Irrigation",
    category: "Water Management",
    description:
      "Explore irrigation approaches based on crop-water needs, field layout, and water availability.",
    longDescription:
      "Irrigation planning can include drip systems, sprinklers, scheduling, and suitable automation options. The appropriate setup depends on the crop, soil, water source, field layout, and local operating conditions.",
    image: images.irrigation,
    icon: LuDroplets,
    benefits: [
      "Crop-water requirement assessment",
      "Irrigation layout considerations",
      "Scheduling and automation options",
      "Water-use management planning",
    ],
    highlights: [
      { icon: LuDroplets, title: "Water", subtitle: "Use planning" },
      { icon: LuSettings, title: "Automation", subtitle: "Options" },
    ],
    gallery: gallery.smartIrrigation
  },
  {
    id: "advisory",
    number: "09",
    title: "Crop Advisory",
    shortTitle: "Crop Advisory",
    category: "Agricultural Guidance",
    description:
      "Discuss crop planning, plant nutrition, growing conditions, and suitable agricultural practices.",
    longDescription:
      "Crop advisory begins with understanding the crop, growth stage, field conditions, and observed problem. Recommendations should be based on relevant evidence, product labels where applicable, and local agricultural expertise.",
    image: images.cropAdvisory,
    icon: LuMicroscope,
    benefits: [
      "Crop and field requirement discussions",
      "Plant nutrition considerations",
      "Crop-care and monitoring guidance",
      "Evidence-informed recommendations",
    ],
    highlights: [
      { icon: LuMicroscope, title: "Crop", subtitle: "Assessment" },
      { icon: LuLeaf, title: "Practical", subtitle: "Guidance" },
    ],
    gallery: gallery.advisory
  },
  {
    id: "project-amc",
    number: "10",
    title: "Project & AMC",
    shortTitle: "Project & AMC",
    category: "Project Support",
    description:
      "Discuss project coordination, maintenance requirements, and ongoing operational support.",
    longDescription:
      "Project and maintenance requirements vary by infrastructure, equipment, and operating conditions. Scope, response times, deliverables, and any annual maintenance agreement should be confirmed individually before work begins.",
    image: images.project,
    icon: LuBuilding2,
    benefits: [
      "Project-scope discussions",
      "Equipment and infrastructure review",
      "Maintenance planning options",
      "Support requirements and coordination",
    ],
    highlights: [
      { icon: LuClipboardList, title: "Project", subtitle: "Coordination" },
      { icon: LuSettings, title: "Maintenance", subtitle: "Planning" },
    ],
    gallery: gallery.project_AMC
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand your goals, land, crop, and requirements.",
    icon: LuMessagesSquare,
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Explore suitable options, project scope, and cost estimates.",
    icon: LuFileCheck,
  },
  {
    number: "03",
    title: "Implementation",
    description: "Plan setup, installation, and any required training.",
    icon: LuSettings,
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Discuss maintenance, operational needs, and future guidance.",
    icon: LuSprout,
  },
];

const benefits = [
  { icon: LuChartNoAxesCombined, title: "Higher Productivity" },
  { icon: LuWheat, title: "Better Crop Quality" },
  { icon: LuUsers, title: "Operational Planning" },
  { icon: LuMessagesSquare, title: "Expert Guidance" },
  { icon: LuLeaf, title: "Sustainable Farming" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
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
        light ? "text-[#c8dda9]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}


function ServiceCard({ service, active, onClick }) {
  const Icon = service.icon;

  return (
    <motion.button
      variants={fadeUp}
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group min-w-0 overflow-hidden rounded-2xl text-left transition duration-300 ${
        active
          ? "bg-[#06452d] p-2 text-white shadow-xl shadow-[#06452d]/10"
          : "border border-[#e8eade] bg-white/90 p-2 text-[#243c30] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#193c27]/5"
      }`}
    >
      <div className="relative aspect-[1.65/1] overflow-hidden rounded-xl">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#082d1e]/25 to-transparent" />

        <span
          className={`absolute bottom-[-1px] left-[-1px] flex h-10 w-10 items-center justify-center rounded-tr-2xl ${
            active ? "bg-[#06452d] text-[#d9e9c4]" : "bg-white text-[#286b42]"
          }`}
        >
          <Icon size={20} />
        </span>
      </div>

      <div className="flex min-h-[48px] items-center justify-between gap-2 px-1 pb-1 pt-3">
        <span className="text-[10px] font-semibold leading-4 sm:text-xs">
          {service.shortTitle}
        </span>

        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
            active
              ? "border-white/60 text-white"
              : "border-[#95b8a0] text-[#286b42]"
          }`}
        >
          <LuArrowRight size={13} />
        </span>
      </div>
    </motion.button>
  );
}

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState("polyhouse");
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);

  const activeService =
    services.find((service) => service.id === activeServiceId) || services[0];

  const ActiveIcon = activeService.icon;

  function selectService(service) {
    setActiveServiceId(service.id);
    setActiveThumbnail(0);
  }

  function moveThumbnail(direction) {
    setActiveThumbnail((current) => {
      const total = activeService.gallery.length;
      return (current + direction + total) % total;
    });
  }

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">
 
{/* HERO */}
<section className="relative isolate ">

  {/* MOBILE BACKGROUND */}
  <img
    src={images.hero}
    alt="Agricultural fields in morning sunlight"
    className="absolute inset-0 -top-20 -z-20 h-full w-full object-cover lg:hidden"
  />

  {/* LEFT DECORATIVE IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    aria-hidden="true"
    className="pointer-events-none absolute -left-20 -top-50 z-0 hidden h-auto w-112.5 lg:block n"
  > 
  
  {/* BACKGROUND OVERLAYS */}
  <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#fbfaf4] via-[#fbfaf4]/95 to-[#fbfaf4]/10" />
  <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#fbfaf4]/40 to-transparent" />
  
    <img
      src={images.heroLeft}
      alt=""
      className="h-auto w-full object-contain"
    />
  </motion.div>

 

  {/* MAIN CONTENT */}
  <div className="mx-auto grid min-h-140 max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:min-h-150 lg:grid-cols-2 lg:px-12">

    {/* LEFT CONTENT */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="relative z-10 max-w-xl"
    >
      <motion.div
        variants={fadeUp}
        className="mb-6 flex items-center gap-2 text-xs text-[#477c53]"
      >
        <a href="/" className="hover:underline">Home</a>
        <LuChevronRight size={13} />
        <span>Services</span>
      </motion.div>

      <motion.div variants={fadeUp}>
        <SectionLabel>Complete Agricultural Solutions</SectionLabel>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="font-display text-5xl leading-[1.04] tracking-tight text-[#152a43] sm:text-6xl"
      >
        Our Services for
        <span className="block text-[#075332]">
          Modern & Sustainable Farming
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-lg text-sm leading-7 text-[#5f6b62] sm:text-base"
      >
        From farm infrastructure to crop advisory, explore
        agricultural services designed around your land, crop,
        resources, and business goals.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-6 flex flex-wrap gap-3"
      >
        <a
          href="/contact"
          className="inline-flex items-center gap-3 rounded-full bg-[#075332] px-5 py-3.5 text-xs font-semibold text-white shadow-lg shadow-[#075332]/10 transition hover:bg-[#0b6941]"
        >
          Get a Free Consultation
          <LuArrowRight size={15} />
        </a>

        <a
          href="#all-services"
          className="inline-flex items-center gap-3 rounded-full border border-[#82ad8f] px-5 py-3.5 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eef5e9]"
        >
          Explore All Services
        </a>
      </motion.div>
    </motion.div>

        {/* RIGHT HERO IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className=" relative hidden  min-h-full lg:block"
    >
      <img
        src={images.hero}
        alt=""
        aria-hidden="true"
        className="absolute min-h-auto min-w-190 -right-20 -top-30 object-center"
      />
    </motion.div>
  </div>

                  <div className="absolute -bottom-5 md:-bottom-15 w-fit right-0 flex gap-5 rounded-2xl border border-white/70 bg-[#fffef6]/35 p-4 shadow-xl backdrop-blur-md">
                {[
                  { icon: LuSprout, text: "Modern Technology" },
                  { icon: LuWheat, text: "Productivity Planning" },
                  { icon: LuUsers, text: "Sustainable Solutions" },
                  { icon: LuShieldCheck, text: "Project Support" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-2.5"
                    >
                      <Icon size={22} className="shrink-0 text-[#286b42]" />
                      <span className="text-[10px] font-semibold leading-4 text-[#35473a]">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
</section>


        {/* SERVICES INTRODUCTION */}
        <section
          id="all-services"
          className="relative isolate px-5 pb-8 pt-8 sm:px-8 sm:pt-10 lg:px-12"
        >

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
            >
              <div className="max-w-2xl">
                <SectionLabel>Our Services</SectionLabel>
                <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                  Complete Solutions for Every Step of Your Farming Journey
                </h2>
              </div>

              <div className="flex items-center justify-between gap-4 lg:max-w-[420px]">
                <p className="text-xs leading-6 text-[#778074]">
                  Explore service areas and select a card to see more
                  information about the chosen service.
                </p>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    aria-label="Previous service"
                    onClick={() => {
                      const current = services.findIndex(
                        (service) => service.id === activeServiceId
                      );
                      selectService(
                        services[(current - 1 + services.length) % services.length]
                      );
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e1e7dc] bg-white text-[#286b42] shadow-sm transition hover:bg-[#075332] hover:text-white"
                  >
                    <LuChevronLeft size={17} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next service"
                    onClick={() => {
                      const current = services.findIndex(
                        (service) => service.id === activeServiceId
                      );
                      selectService(services[(current + 1) % services.length]);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e1e7dc] bg-white text-[#286b42] shadow-sm transition hover:bg-[#075332] hover:text-white"
                  >
                    <LuChevronRight size={17} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Service cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
            >
              {(showAllServices ? services : services.slice(0, 10)).map(
                (service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    active={activeServiceId === service.id}
                    onClick={() => selectService(service)}
                  />
                )
              )}
            </motion.div>

            <div className="mt-5 text-center lg:hidden">
              <button
                type="button"
                onClick={() => setShowAllServices((value) => !value)}
                className="inline-flex items-center gap-2 rounded-full border border-[#cdddc9] px-5 py-3 text-xs font-semibold text-[#286b42]"
              >
                {showAllServices ? "Show Less" : "Explore Services"}
                <LuChevronRight
                  size={15}
                  className={showAllServices ? "rotate-[-90deg]" : "rotate-90"}
                />
              </button>
            </div>
          </div>
        </section>

        {/* FEATURED SERVICE */}
        <section className="px-4 pb-12 pt-3 sm:px-8 lg:px-12">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto grid max-w-7xl gap-6 rounded-[1.5rem] border border-[#e7eade] bg-white/85 p-4 sm:p-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8"
          >
            {/* Image gallery */}
            <div className="grid grid-cols-[44px_1fr] gap-3">
              <div className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => moveThumbnail(-1)}
                  aria-label="Previous service image"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cbdac7] text-[#286b42] hover:bg-[#edf4e8]"
                >
                  <LuChevronLeft size={16} className="rotate-90" />
                </button>

                {activeService.gallery.map((image, index) => (
                  <button
                    key={`${activeService.id}-${image}-${index}`}
                    type="button"
                    onClick={() => setActiveThumbnail(index)}
                    aria-label={`View service image ${index + 1}`}
                    aria-pressed={activeThumbnail === index}
                    className={`h-12 w-full overflow-hidden rounded-lg border-2 transition sm:h-14 ${
                      activeThumbnail === index
                        ? "border-[#43865a] p-0.5"
                        : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full rounded-md object-cover"
                    />
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => moveThumbnail(1)}
                  aria-label="Next service image"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cbdac7] text-[#286b42] hover:bg-[#edf4e8]"
                >
                  <LuChevronRight size={16} className="rotate-90" />
                </button>
              </div>

              <div className="relative min-h-[310px] overflow-hidden rounded-xl sm:min-h-[390px]">
                <img
                  key={`${activeService.id}-${activeThumbnail}`}
                  src={activeService.gallery[activeThumbnail]}
                  alt={activeService.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500"
                />

                <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2 sm:inset-x-4 sm:bottom-4">
                  {activeService.highlights.map((highlight) => {
                    const Icon = highlight.icon;
                    return (
                      <div
                        key={highlight.title}
                        className="flex items-center gap-2 rounded-xl border border-white/60 bg-[#fffef5]/95 px-3 py-2 shadow-md backdrop-blur-sm"
                      >
                        <Icon size={20} className="shrink-0 text-[#286b42]" />
                        <div>
                          <p className="text-[10px] font-bold text-[#245c3b]">
                            {highlight.title}
                          </p>
                          <p className="text-[9px] text-[#687468]">
                            {highlight.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Service detail */}
            <div className="flex flex-col justify-center py-2">
              <span className="mb-3 flex w-fit items-center gap-2 rounded-full bg-[#e3f0dc] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#286b42]">
                {activeService.number}. {activeService.category}
              </span>

              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                    {activeService.title}
                  </h2>
                </div>
                <ActiveIcon
                  size={28}
                  className="mt-1 shrink-0 text-[#36764a]"
                />
              </div>

              <p className="mt-4 text-xs leading-6 text-[#687168] sm:text-sm">
                {activeService.longDescription}
              </p>

              <ul className="mt-5 space-y-3">
                {activeService.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-xs leading-5 text-[#5f6d60]"
                  >
                    <LuCircleCheck
                      size={16}
                      className="mt-0.5 shrink-0 text-[#17613c]"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={`/contact?service=${encodeURIComponent(activeService.title)}`}
                className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#075332] px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
              >
                Get a Quote for {activeService.shortTitle}
                <LuArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* PROCESS */}
        <section className="relative isolate overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-12">

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mx-auto max-w-3xl text-center"
            >
              <SectionLabel>Our Approach</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                From Planning to Profitable Harvest
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#778074]">
                A structured process helps keep project planning aligned
                with your requirements, resources, and intended outcomes.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    variants={fadeUp}
                    className="relative"
                  >
                    {index < processSteps.length - 1 && (
                      <div className="absolute right-[-26px] top-7 hidden items-center text-[#9fbea2] lg:flex">
                        <span className="h-px w-8 bg-[#bfd5c0]" />
                        <LuArrowRight size={14} />
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d6e8d0] bg-[#e2f1dc] text-[#286b42]">
                        <Icon size={25} />
                      </span>
                      <span className="text-[10px] font-bold text-[#245c3b]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-[#243c30]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-xs leading-6 text-[#778074]">
                      {step.description}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* BENEFITS STRIP */}
        <section className="px-5 pb-10 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-2xl border border-[#e7eadf] bg-[#f1f5e8] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.5fr] lg:items-center">
            <div>
              <SectionLabel>Why Choose Our Services</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42]">
                Benefits for Farmers and Businesses
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex flex-col items-center text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white bg-white text-[#286b42] shadow-sm">
                      <Icon size={24} />
                    </span>

                    <p className="mt-3 max-w-[110px] text-[10px] font-semibold leading-4 text-[#245c3b] sm:text-xs">
                      {benefit.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TWO-PART CTA */}
        <section className="grid overflow-hidden lg:grid-cols-2">
          <div className="relative isolate flex min-h-[300px] items-center overflow-hidden px-6 py-12 sm:px-10 lg:px-12">
            <img
              src={images.hands}
              alt="Agricultural landscape"
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082f20]/85 to-[#082f20]/35" />

            <div className="relative mx-auto w-full max-w-xl">
              <SectionLabel light>Let's Build Together</SectionLabel>

              <h2 className="max-w-lg font-display text-3xl leading-tight text-white sm:text-4xl">
                Let's Build a Better Farming Future
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                Tell us about your land, crops, infrastructure, or farming
                goals so we can discuss an appropriate next step.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
              >
                Get a Free Consultation
                <LuArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="grid items-center gap-6 bg-[#fbfaf4] p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12">
            <div>
              <h3 className="font-display text-2xl leading-tight text-[#162d42]">
                Need Help Choosing the Right Service?
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#778074]">
                Share your requirements and discuss the services that may
                suit your land, budget, and farming goals.
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Initial consultation",
                  "Requirements discussion",
                  "Project planning",
                  "Technical guidance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-[#526353]"
                  >
                    <LuCircleCheck
                      size={16}
                      className="shrink-0 text-[#17613c]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[190px] overflow-hidden rounded-2xl sm:min-h-[230px]">
              <img
                src={images.consultation}
                alt="Technology and agricultural consultation"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082f20]/30 to-transparent" />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
