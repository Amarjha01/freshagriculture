"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowRight,
  LuPlay,
  LuChevronRight,
  LuLeaf,
  LuSprout,
  LuHouse,
  LuDroplets,
  LuFish,
  LuRabbit,
  LuFlower2,
  LuWheat,
  LuTrees,
  LuTractor,
  LuMapPin,
  LuCalendarDays,
  LuClock,
  LuTrendingUp,
  LuDroplet,
  LuIndianRupee,
  LuCircleCheck,
  LuUsers,
  LuChartNoAxesCombined,
  LuX,
  LuQuote,
  LuShare2,
  LuHandHeart,
  LuGrid2X2,
  LuShovel,
  LuSun,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";

const images = {
  hero: "/Images/storypage-right.webp",
  heroLeft: "/Images/home-hero-left.png",
  polyhouse: "/services/polyhouse Farming/Polyhouse Farm.png",
  hydroponics: "/services/Hydroponics/Hydroponics Farm.png",
  mushroom: "/services/Mushroom Farming/Mushrooms Farm.png",
  aquaculture: "/services/Aquaculture/Aquaculture Farm.png",
  floriculture: "/services/Floriculture/Floriculture.png",
  nursery: "/services/Nursery/nursery.png",
  livestock: "/services/open cultivation/Goat Farming/Goat Farm.png",
  irrigation: "services/Smart Irrigation/Smart Irrigation.png",
  cropAdvisory: "services/Advisory/Advisory.png",
  project: "services/Project & AMC/Project & AMC.png",
  farmer: "",
  tomatoes: "/services/polyhouse Farming/Polyhouse Farm.png",
  capsicum: "/services/polyhouse Farming/Capsicum.png",
};

const storyFilters = [
  { name: "All Stories", icon: LuGrid2X2 },
  { name: "Polyhouse", icon: LuHouse },
  { name: "Hydroponics", icon: LuSprout },
  { name: "Drip Irrigation", icon: LuDroplets },
  { name: "Crop Cultivation", icon: LuWheat },
  { name: "Soil Health", icon: LuLeaf },
  { name: "Nursery", icon: LuFlower2 },
  { name: "Mushroom", icon: LuTrees },
  { name: "Aquaculture", icon: LuFish },
  { name: "Livestock", icon: LuRabbit },
];

const stories = [
  {
    id: 1,
    title: "From Open Field to Profitable Tomato Cultivation",
    category: "Polyhouse",
    location: "Siddipet, Telangana",
    image: images.tomatoes,
    date: "Jan 2024",
    readTime: 4,
    farmer: "Ramesh Kumar",
    crop: "Tomato",
    challenge:
      "The farmer faced inconsistent crop quality and production challenges in open-field cultivation, making income less predictable.",
    approach:
      "The proposed approach focused on protected cultivation, suitable irrigation planning, crop management, and practical technical guidance.",
    implementation:
      "A polyhouse-based growing approach was planned around crop needs, irrigation, growing conditions, and ongoing support.",
    outcome:
      "The story illustrates how a more controlled growing environment can support consistent crop management and improved produce quality.",
    excerpt:
      "How we helped a farmer in Siddipet, Telangana set up a polyhouse and achieve better yield, quality, and income with technical guidance and ongoing support.",
    tags: ["Polyhouse", "Crop Cultivation", "Drip Irrigation"],
    results: [
      {
        value: "2.5×",
        label: "Illustrative increase in yield",
        icon: LuTrendingUp,
        tone: "green",
      },
      {
        value: "40%",
        label: "Illustrative reduction in water use",
        icon: LuDroplet,
        tone: "blue",
      },
      {
        value: "Better",
        label: "Produce quality and market value",
        icon: LuChartNoAxesCombined,
        tone: "green",
      },
      {
        value: "Higher",
        label: "Potential for more stable production",
        icon: LuIndianRupee,
        tone: "lime",
      },
    ],
    testimonial:
      "With better crop planning and more controlled growing conditions, I can focus on quality and manage the farm more systematically. Regular guidance helps me make better decisions.",
  },
  {
    id: 2,
    title: "Leafy Greens with 3x Higher Yield",
    category: "Hydroponics",
    location: "Hyderabad, Telangana",
    image: images.hydroponics,
    date: "Mar 2024",
    readTime: 5,
    farmer: "Anil Reddy",
    crop: "Leafy Greens",
    challenge:
      "Limited growing space and inconsistent growing conditions made production planning difficult.",
    approach:
      "The project explored a hydroponic growing system with managed nutrient delivery and a production schedule suited to leafy greens.",
    implementation:
      "System planning focused on water quality, nutrient management, growing conditions, and day-to-day monitoring.",
    outcome:
      "The approach offered a more structured way to manage production in a space-conscious growing environment.",
    excerpt:
      "A planned hydroponic growing system helped structure leafy-green production and day-to-day crop management.",
    tags: ["Hydroponics", "Modern Farming", "Sustainability"],
    results: [
      {
        value: "3×",
        label: "Illustrative production improvement",
        icon: LuTrendingUp,
        tone: "green",
      },
      {
        value: "Less",
        label: "Dependence on field soil",
        icon: LuDroplet,
        tone: "blue",
      },
      {
        value: "Planned",
        label: "Nutrient delivery and monitoring",
        icon: LuChartNoAxesCombined,
        tone: "green",
      },
      {
        value: "Flexible",
        label: "Space-conscious growing",
        icon: LuSprout,
        tone: "lime",
      },
    ],
    testimonial:
      "Planning the system carefully helped us understand the importance of monitoring water, nutrients, and crop conditions throughout the growing cycle.",
  },
  {
    id: 3,
    title: "Water Savings and Better Crop Growth",
    category: "Drip Irrigation",
    location: "Karimnagar, Telangana",
    image: images.seedlings,
    date: "Apr 2024",
    readTime: 4,
    farmer: "Suresh Naik",
    crop: "Vegetables",
    challenge:
      "Irrigation scheduling and uneven water delivery created challenges for crop management.",
    approach:
      "The approach focused on reviewing the water supply, crop spacing, field conditions, and the suitability of drip irrigation.",
    implementation:
      "Planning covered system layout, filtration, emitter placement, and routine maintenance.",
    outcome:
      "A well-designed irrigation system can support more targeted water application and easier irrigation scheduling.",
    excerpt:
      "A crop-focused irrigation plan helped improve the way water delivery and field operations were managed.",
    tags: ["Drip Irrigation", "Crop Cultivation", "Sustainability"],
    results: [
      {
        value: "Targeted",
        label: "Water delivery near roots",
        icon: LuDroplet,
        tone: "blue",
      },
      {
        value: "Planned",
        label: "Irrigation scheduling",
        icon: LuCalendarDays,
        tone: "green",
      },
      {
        value: "Managed",
        label: "Water distribution",
        icon: LuChartNoAxesCombined,
        tone: "green",
      },
      {
        value: "Ongoing",
        label: "System maintenance",
        icon: LuCircleCheck,
        tone: "lime",
      },
    ],
    testimonial:
      "Understanding how to plan irrigation around crop requirements made water management a more deliberate part of our farming routine.",
  },
  {
    id: 4,
    title: "Modern Fish Farming for Higher Income",
    category: "Aquaculture",
    location: "Andhra Pradesh",
    image: images.aquaculture,
    date: "May 2024",
    readTime: 6,
    farmer: "Ravi Prasad",
    crop: "Fish Farming",
    challenge:
      "Starting or improving an aquaculture operation requires careful attention to water quality, stocking, feed, and operating costs.",
    approach:
      "The project concept focused on planning a suitable production system and understanding routine water-quality monitoring.",
    implementation:
      "Planning included site suitability, production requirements, feed management, and practical operating considerations.",
    outcome:
      "A structured operating plan can help farmers manage aquaculture requirements more consistently.",
    excerpt:
      "A planned approach to aquaculture highlights the importance of water management, production planning, and ongoing monitoring.",
    tags: ["Aquaculture", "Sustainability"],
    results: [
      {
        value: "Planned",
        label: "Production management",
        icon: LuFish,
        tone: "green",
      },
      {
        value: "Regular",
        label: "Water-quality monitoring",
        icon: LuDroplet,
        tone: "blue",
      },
      {
        value: "Tracked",
        label: "Feed and operating costs",
        icon: LuChartNoAxesCombined,
        tone: "green",
      },
      {
        value: "Supported",
        label: "Better operating decisions",
        icon: LuUsers,
        tone: "lime",
      },
    ],
    testimonial:
      "Understanding the production process and the need for regular monitoring helped us plan our next steps more carefully.",
  },
  {
    id: 5,
    title: "Mushroom Cultivation Created a New Income Source",
    category: "Mushroom",
    location: "Medak, Telangana",
    image: images.mushroom,
    date: "Jun 2024",
    readTime: 5,
    farmer: "Lakshmi Devi",
    crop: "Mushroom",
    challenge:
      "The farmer wanted to explore a growing activity that could fit available space and local market demand.",
    approach:
      "The planning focused on production conditions, hygiene, growing materials, and potential sales channels.",
    implementation:
      "The proposed workflow included preparing the growing area, maintaining appropriate conditions, and planning harvest handling.",
    outcome:
      "Mushroom cultivation may offer an additional enterprise when production and market requirements are assessed carefully.",
    excerpt:
      "A new farming enterprise was explored through production planning, hygiene, and market-focused decisions.",
    tags: ["Mushroom", "Sustainability"],
    results: [
      {
        value: "New",
        label: "Potential income stream",
        icon: LuIndianRupee,
        tone: "green",
      },
      {
        value: "Planned",
        label: "Growing environment",
        icon: LuHouse,
        tone: "lime",
      },
      {
        value: "Focused",
        label: "Hygiene and crop care",
        icon: LuCircleCheck,
        tone: "green",
      },
      {
        value: "Local",
        label: "Market assessment",
        icon: LuUsers,
        tone: "blue",
      },
    ],
    testimonial:
      "The planning process helped us look at growing conditions and market demand before deciding how to develop the activity.",
  },
  {
    id: 6,
    title: "Premium Capsicum with Better Market Demand",
    category: "Crop Cultivation",
    location: "Karnataka",
    image: images.capsicum,
    date: "Jul 2024",
    readTime: 5,
    farmer: "Mahesh Gowda",
    crop: "Capsicum",
    challenge:
      "Crop quality, environmental conditions, and market requirements all influence capsicum production.",
    approach:
      "The project concept considered variety selection, crop care, irrigation, and production requirements.",
    implementation:
      "The proposed approach included monitoring crop development and planning harvesting around quality requirements.",
    outcome:
      "A crop plan aligned with local growing conditions and market demand can help farmers make more informed production decisions.",
    excerpt:
      "A crop-focused approach explored the relationship between growing conditions, quality, and market planning.",
    tags: ["Crop Cultivation", "Polyhouse", "Drip Irrigation"],
    results: [
      {
        value: "Planned",
        label: "Crop and variety selection",
        icon: LuSprout,
        tone: "green",
      },
      {
        value: "Managed",
        label: "Irrigation and crop care",
        icon: LuDroplet,
        tone: "blue",
      },
      {
        value: "Focused",
        label: "Harvest quality",
        icon: LuCircleCheck,
        tone: "green",
      },
      {
        value: "Reviewed",
        label: "Market requirements",
        icon: LuChartNoAxesCombined,
        tone: "lime",
      },
    ],
    testimonial:
      "Planning production around crop quality and market needs gave us a clearer framework for managing the growing season.",
  },
  {
    id: 7,
    title: "Quality Seedlings for a Stronger Start",
    category: "Nursery",
    location: "Hyderabad, Telangana",
    image: images.nursery,
    date: "Aug 2024",
    readTime: 4,
    farmer: "Kiran Kumar",
    crop: "Nursery Plants",
    challenge:
      "Producing healthy seedlings requires suitable growing media, water management, hygiene, and timely scheduling.",
    approach:
      "The planning focused on nursery layout, planting schedules, seedling care, and handling practices.",
    implementation:
      "A nursery workflow was designed around crop needs and the expected timing of customer demand.",
    outcome:
      "Organized nursery practices can support more consistent planting-material production.",
    excerpt:
      "Nursery planning highlighted the role of healthy planting material and consistent growing practices.",
    tags: ["Nursery", "Crop Cultivation", "Sustainability"],
    results: [
      {
        value: "Planned",
        label: "Sowing schedules",
        icon: LuCalendarDays,
        tone: "green",
      },
      {
        value: "Healthy",
        label: "Seedling-care practices",
        icon: LuSprout,
        tone: "lime",
      },
      {
        value: "Clean",
        label: "Nursery workflow",
        icon: LuCircleCheck,
        tone: "green",
      },
      {
        value: "Organized",
        label: "Production planning",
        icon: LuChartNoAxesCombined,
        tone: "blue",
      },
    ],
    testimonial:
      "A structured nursery routine helped us plan sowing, plant care, and dispatches more effectively.",
  },
  {
    id: 8,
    title: "Integrated Goat Farming for Additional Income",
    category: "Livestock",
    location: "Siddipet, Telangana",
    image: images.livestock,
    date: "Sep 2024",
    readTime: 6,
    farmer: "Prakash Rao",
    crop: "Goat Farming",
    challenge:
      "A livestock enterprise requires planning for housing, feed, animal health, labor, and market access.",
    approach:
      "The project concept considered animal care, operating costs, suitable facilities, and practical management.",
    implementation:
      "The planned workflow emphasized routine animal-health checks, hygiene, feed planning, and record keeping.",
    outcome:
      "A well-planned livestock enterprise can help farmers evaluate additional income opportunities while managing operating risks.",
    excerpt:
      "Livestock planning explored the importance of animal care, housing, feed management, and business costs.",
    tags: ["Livestock", "Sustainability"],
    results: [
      {
        value: "Planned",
        label: "Housing and feeding",
        icon: LuHouse,
        tone: "green",
      },
      {
        value: "Routine",
        label: "Animal-health checks",
        icon: LuCircleCheck,
        tone: "lime",
      },
      {
        value: "Tracked",
        label: "Farm operating costs",
        icon: LuChartNoAxesCombined,
        tone: "blue",
      },
      {
        value: "Reviewed",
        label: "Market opportunities",
        icon: LuIndianRupee,
        tone: "green",
      },
    ],
    testimonial:
      "Planning the daily care routine and costs gave us a better understanding of the work involved in livestock farming.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "The Challenge",
    icon: LuShovel,
    tone: "rose",
    text: "Inconsistent growing conditions, crop quality concerns, and operational challenges.",
  },
  {
    number: "02",
    title: "Our Approach",
    icon: LuUsers,
    tone: "blue",
    text: "Site analysis, crop planning, and a solution matched to the farmer's requirements.",
  },
  {
    number: "03",
    title: "Implementation",
    icon: LuSprout,
    tone: "green",
    text: "Practical setup, irrigation planning, growing guidance, and ongoing support.",
  },
  {
    number: "04",
    title: "The Outcome",
    icon: LuChartNoAxesCombined,
    tone: "lime",
    text: "A more structured approach to production, quality, and farm management.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-2 text-[9px] font-bold uppercase tracking-[0.25em] ${
        light ? "text-[#c9dfad]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}

function StoryMeta({ story, compact = false }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[9px] text-[#6c7683]">
      <span className="inline-flex items-center gap-1">
        <LuMapPin size={12} className="shrink-0 text-[#17623b]" />
        {story.location}
      </span>

      {!compact && (
        <>
          <span className="inline-flex items-center gap-1">
            <LuCalendarDays size={12} />
            {story.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <LuClock size={12} />
            {story.readTime} min read
          </span>
        </>
      )}
    </div>
  );
}

function StoryCard({ story, onOpen, featured = false }) {
  return (
    <motion.article
      layout
      variants={fadeUp}
      className={`group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#edf0e8] bg-white/95 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured ? "ring-1 ring-[#d8ead5]" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => onOpen(story)}
        className="relative block h-[112px] overflow-hidden text-left sm:h-[105px] lg:h-[106px]"
      >
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute bottom-0 left-3 translate-y-1/2 rounded-full bg-[#eff9e9] px-2.5 py-1 text-[9px] font-semibold text-[#20563a] shadow-sm">
          {story.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-3 pt-4">
        <button
          type="button"
          onClick={() => onOpen(story)}
          className="text-left font-display text-base leading-[1.18] text-[#172b43] transition hover:text-[#17623b]"
        >
          {story.title}
        </button>

        <div className="mt-2 flex-1">
          <StoryMeta story={story} compact />
        </div>

        <button
          type="button"
          onClick={() => onOpen(story)}
          aria-label={`Read ${story.title}`}
          className="mt-3 inline-flex h-7 w-7 items-center justify-center self-end rounded-full border border-[#83ae95] text-[#17623b] transition hover:bg-[#075332] hover:text-white"
        >
          <LuArrowRight size={13} />
        </button>
      </div>
    </motion.article>
  );
}

function ResultCard({ result }) {
  const Icon = result.icon;

  const iconColors = {
    green: "bg-[#e7f7ed] text-[#24734a]",
    blue: "bg-[#e4f2ff] text-[#2187e8]",
    lime: "bg-[#e8f8de] text-[#37783c]",
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#edf0e8] bg-white p-3">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          iconColors[result.tone] || iconColors.green
        }`}
      >
        <Icon size={20} />
      </span>

      <div className="min-w-0">
        <p className="font-display text-xl leading-tight text-[#172b43]">
          {result.value}
        </p>
        <p className="mt-1 text-[9px] leading-4 text-[#737d89]">
          {result.label}
        </p>
      </div>
    </div>
  );
}

export default function StoriesPage() {
  const [activeFilter, setActiveFilter] = useState("All Stories");
  const [selectedStory, setSelectedStory] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [storyFormOpen, setStoryFormOpen] = useState(false);
  const [storyName, setStoryName] = useState("");
  const [storyLocation, setStoryLocation] = useState("");
  const [storyMessage, setStoryMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const filteredStories = useMemo(() => {
    if (activeFilter === "All Stories") return stories;

    return stories.filter(
      (story) =>
        story.category === activeFilter || story.tags.includes(activeFilter),
    );
  }, [activeFilter]);

  const featuredStory = filteredStories[0] || stories[0];

  const secondaryStories = filteredStories.filter(
    (story) => story.id !== featuredStory.id,
  );

  const featuredCards = secondaryStories.slice(0, 4);

  const moreStories = showAll
    ? secondaryStories.slice(4)
    : secondaryStories.slice(4, 8);

  function chooseFilter(filter) {
    setActiveFilter(filter);
    setShowAll(false);
  }

  function handleStorySubmit(event) {
    event.preventDefault();

    if (!storyName.trim() || !storyLocation.trim() || !storyMessage.trim()) {
      setFormMessage("Please complete all fields.");
      return;
    }

    // Connect this form to your backend or enquiry service.
    // No submission is sent until an API is integrated.
    setFormMessage(
      "Your form is ready. Connect your enquiry API to submit this story.",
    );
  }

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
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

          <div className="mx-auto grid min-h-78.75 max-w-7xl items-center gap-6 px-5 py-9 sm:px-8 lg:min-h-81.25 lg:grid-cols-[1fr_0.95fr] lg:px-12">
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
                <span>Stories</span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <SectionLabel>Farmer Success Stories</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl leading-[1.04] tracking-tight text-[#152a43] sm:text-5xl lg:text-6xl"
              >
                Real Farmers.
                <br />
                Real Challenges.
                <br />
                <span className="text-[#075332]">Real Progress.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-xs leading-6 text-[#657064] sm:text-sm"
              >
                Discover how agricultural solutions, modern technology, and
                practical support can help farmers work toward better yields and
                sustainable growth.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-5">
                <button
                  type="button"
                  onClick={() => setStoryFormOpen(true)}
                  className="inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3 text-xs font-semibold text-white shadow-lg transition hover:bg-[#0b6941]"
                >
                  Share Your Story
                  <LuArrowRight size={15} />
                </button>
              </motion.div>
            </motion.div>
            {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
            className="pointer-events-none absolute  right-0 top-0 z-0 w-[62%]  md:w-[65%] lg:w-[70%] hidden lg:block"
          >
            <img
              src={images.hero}
              alt=""
              priority
              className="h-auto w-full object-contain object-bottom "
            />
          </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="relative hidden min-h-61.25 lg:block"
            >

              <div className="absolute bottom-0 right-0 z-10 w-48 rounded-2xl border p-4 backdrop-blur-md">
                {[
                  {
                    icon: LuUsers,
                    title: "Farmer Stories",
                    detail: "Real experiences",
                  },
                  {
                    icon: LuHouse,
                    title: "Farming Solutions",
                    detail: "Practical approaches",
                  },
                  {
                    icon: LuMapPin,
                    title: "Regional Insights",
                    detail: "Local perspectives",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-2.5 py-2"
                    >
                      <Icon size={19} className="shrink-0 text-[#17623b]" />
                      <div>
                        <p className="text-[10px] font-semibold text-[#172b43]">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-[9px] text-[#192a54]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="px-4 pb-4 pt-2 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Browse Stories by Solution</SectionLabel>

            <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
              {storyFilters.map((filter) => {
                const Icon = filter.icon;
                const active = activeFilter === filter.name;

                return (
                  <button
                    key={filter.name}
                    type="button"
                    onClick={() => chooseFilter(filter.name)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-3 py-3 text-[10px] font-medium transition sm:px-4 ${
                      active
                        ? "border-[#075332] bg-[#075332] text-white shadow-md"
                        : "border-[#edf0e8] bg-white/90 text-[#243b30] hover:border-[#8db69a] hover:bg-[#f0f6e8]"
                    }`}
                  >
                    <Icon size={16} />
                    {filter.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED STORY CARDS */}
        <section className="px-4 pb-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl text-[#172b43] sm:text-3xl">
                Featured Stories
              </h2>

              <button
                type="button"
                onClick={() => {
                  setActiveFilter("All Stories");
                  setShowAll(true);
                  document
                    .getElementById("more-stories")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2 text-[10px] font-semibold text-[#315943] transition hover:text-[#075332]"
              >
                View All Stories
                <LuArrowRight size={13} />
              </button>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {featuredCards.length > 0 ? (
                featuredCards.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    onOpen={setSelectedStory}
                  />
                ))
              ) : (
                <div className="rounded-xl border border-[#edf0e8] bg-white p-5 text-xs text-[#697286] sm:col-span-2 lg:col-span-4">
                  This category currently has one sample story. Choose another
                  solution to explore more stories.
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* FEATURED CASE STUDY */}
        <section className="px-4 pb-4 sm:px-8 lg:px-12">
          <motion.div
            key={featuredStory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-[#edf0e8] bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <span className="mb-3 w-fit rounded-full bg-[#d9f3df] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#20563a]">
                  Featured Story
                </span>

                <h2 className="font-display text-3xl leading-[1.1] text-[#172b43] sm:text-4xl">
                  {featuredStory.title}
                </h2>

                <p className="mt-3 text-xs leading-5 text-[#697286]">
                  {featuredStory.excerpt}
                </p>

                <div className="mt-4">
                  <StoryMeta story={featuredStory} />
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedStory(featuredStory)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#075332] px-5 py-3 text-[10px] font-semibold text-white transition hover:bg-[#0b6941]"
                  >
                    <LuPlay size={13} />
                    Read Farmer's Story
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStory(featuredStory)}
                className="relative min-h-[235px] overflow-hidden text-left sm:min-h-[290px] lg:min-h-[330px]"
              >
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />

                <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold text-[#175d38] shadow-lg">
                  Read the full story
                  <LuArrowRight size={13} />
                </span>
              </button>
            </div>
          </motion.div>
        </section>

        {/* CHALLENGE -> OUTCOME */}
        <section className="px-4 py-4 sm:px-8 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              const tone = {
                rose: "bg-rose-100 text-rose-600",
                blue: "bg-blue-100 text-blue-600",
                green: "bg-[#e5f5e7] text-[#286b42]",
                lime: "bg-lime-100 text-lime-700",
              };

              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="relative flex gap-3 rounded-xl border border-[#edf0e8] bg-white/80 p-3"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tone[step.tone]}`}
                  >
                    <Icon size={21} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold text-[#477c53]">
                      {step.number}. {step.title}
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-[#697286]">
                      {step.text}
                    </p>
                  </div>

                  {index < journeySteps.length - 1 && (
                    <LuArrowRight
                      size={15}
                      className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-[#7ba48a] lg:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* BEFORE AND AFTER + RESULTS */}
        <section className="px-4 py-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-2xl text-[#172b43]">
                Before vs After
              </h2>
              <p className="mt-1 text-[10px] text-[#697286]">
                A visual illustration of how growing systems can differ.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={images.seedlings}
                    alt="Example of open-field crop growing"
                    loading="lazy"
                    className="h-[155px] w-full object-cover sm:h-[190px]"
                  />
                  <span className="absolute left-2 top-2 rounded-lg bg-white/95 px-3 py-2 text-[9px] font-semibold text-[#36533e] shadow-sm">
                    Before
                    <span className="block font-normal">Open Field</span>
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={images.tomatoes}
                    alt="Example of crops growing in a protected environment"
                    loading="lazy"
                    className="h-[155px] w-full object-cover sm:h-[190px]"
                  />
                  <span className="absolute left-2 top-2 rounded-lg bg-white/95 px-3 py-2 text-[9px] font-semibold text-[#36533e] shadow-sm">
                    After
                    <span className="block font-normal">Protected Growing</span>
                  </span>
                </div>
              </div>

              <p className="mt-2 text-[9px] leading-4 text-[#7b8491]">
                Illustrative imagery, not verified before-and-after photographs
                from this farmer's project.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#172b43]">
                Key Results
              </h2>
              <p className="mt-1 text-[10px] text-[#697286]">
                Example outcome indicators to validate with project records.
              </p>

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {featuredStory.results.map((result, index) => (
                  <ResultCard key={index} result={result} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="px-4 py-4 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-xl border border-[#edf0e8] bg-[#f0f6e9] p-5 sm:flex-row sm:items-center sm:p-6">
            <img
              src={images.farmer}
              alt="Representative farmer portrait"
              loading="lazy"
              className="h-20 w-20 shrink-0 rounded-full border-4 border-white object-cover shadow-sm"
            />

            <div className="min-w-0 flex-1">
              <LuQuote size={25} className="mb-2 text-[#4fcf99]" />

              <blockquote className="text-xs leading-6 text-[#4d5f55]">
                “{featuredStory.testimonial}”
              </blockquote>

              <p className="mt-3 text-[10px] font-bold text-[#245c3b]">
                — {featuredStory.farmer}
              </p>
              <p className="mt-1 text-[9px] text-[#758073]">
                {featuredStory.crop} · {featuredStory.location}
              </p>
            </div>
          </div>
        </section>

        {/* MORE STORIES */}
        <section
          id="more-stories"
          className="scroll-mt-24 px-4 pb-8 pt-2 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl text-[#172b43] sm:text-3xl">
                More Farmer Stories
              </h2>

              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                className="inline-flex items-center gap-2 text-[10px] font-semibold text-[#315943] transition hover:text-[#075332]"
              >
                {showAll ? "Show Less" : "View All Stories"}
                <LuArrowRight size={13} />
              </button>
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {moreStories.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    onOpen={setSelectedStory}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {moreStories.length === 0 && (
              <p className="rounded-xl border border-[#edf0e8] bg-white p-5 text-xs text-[#697286]">
                There are no additional stories in this selection yet. Choose
                “All Stories” or another solution category.
              </p>
            )}
          </div>
        </section>

        {/* SHARE YOUR STORY CTA */}
        <section className="relative isolate overflow-hidden">
          <img
            src={images.hands}
            alt="Hands caring for a young plant"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062c1c]/90 via-[#062c1c]/75 to-[#062c1c]/45" />

          <div className="mx-auto grid max-w-7xl items-center gap-5 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_auto] lg:px-12">
            <div>
              <SectionLabel light>Let's Grow Together</SectionLabel>

              <h2 className="font-display text-3xl text-white sm:text-4xl">
                Share Your Farming Story
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-5 text-white/85 sm:text-sm">
                Have you worked with us? Share your experience and inspire other
                farmers. Together, we can help grow a stronger farming
                community.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setStoryFormOpen(true)}
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
            >
              Share Your Story
              <LuArrowRight size={15} />
            </button>
          </div>
        </section>

        {/* STORY SUBMISSION MODAL */}
        <AnimatePresence>
          {storyFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStoryFormOpen(false)}
              className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#061a11]/80 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={(event) => event.stopPropagation()}
                className="relative my-auto w-full max-w-lg rounded-2xl border border-[#e8eee2] bg-[#fffef8] p-5 shadow-2xl sm:p-7"
              >
                <button
                  type="button"
                  onClick={() => setStoryFormOpen(false)}
                  aria-label="Close story form"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4e8] text-[#245c3b] transition hover:bg-[#dcebd7]"
                >
                  <LuX size={18} />
                </button>

                <SectionLabel>Farmer Success Stories</SectionLabel>

                <h2 className="pr-10 font-display text-3xl text-[#172b43]">
                  Share Your Story
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#697286]">
                  Tell us about your farming journey, challenges, and
                  experience. Our team can follow up to learn more.
                </p>

                <form onSubmit={handleStorySubmit} className="mt-5 space-y-4">
                  <div>
                    <label
                      htmlFor="story-name"
                      className="mb-1.5 block text-[11px] font-semibold text-[#2d4637]"
                    >
                      Your Name *
                    </label>
                    <input
                      id="story-name"
                      required
                      value={storyName}
                      onChange={(event) => setStoryName(event.target.value)}
                      placeholder="Enter your name"
                      className="h-11 w-full rounded-lg border border-[#dfe7dc] bg-white px-3 text-xs outline-none transition focus:border-[#47845a]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="story-location"
                      className="mb-1.5 block text-[11px] font-semibold text-[#2d4637]"
                    >
                      Location *
                    </label>
                    <input
                      id="story-location"
                      required
                      value={storyLocation}
                      onChange={(event) => setStoryLocation(event.target.value)}
                      placeholder="Village, district, state"
                      className="h-11 w-full rounded-lg border border-[#dfe7dc] bg-white px-3 text-xs outline-none transition focus:border-[#47845a]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="story-message"
                      className="mb-1.5 block text-[11px] font-semibold text-[#2d4637]"
                    >
                      Your Farming Experience *
                    </label>
                    <textarea
                      id="story-message"
                      required
                      rows={4}
                      value={storyMessage}
                      onChange={(event) => setStoryMessage(event.target.value)}
                      placeholder="Tell us about your crop, farm, challenge, or experience..."
                      className="w-full resize-y rounded-lg border border-[#dfe7dc] bg-white px-3 py-3 text-xs leading-5 outline-none transition focus:border-[#47845a]"
                    />
                  </div>

                  {formMessage && (
                    <p
                      role="status"
                      className="text-xs leading-5 text-[#386345]"
                    >
                      {formMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
                  >
                    Submit Your Story
                    <LuArrowRight size={15} />
                  </button>

                  <p className="text-[9px] leading-4 text-[#7b8491]">
                    Submission is not sent until a backend or enquiry API is
                    connected.
                  </p>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </SiteShell>
  );
}
