"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowRight,
  LuChevronRight,
  LuChevronDown,
  LuLeaf,
  LuSprout,
  LuGrid2X2,
  LuHouse,
  LuDroplets,
  LuFish,
  LuRabbit,
  LuFlaskConical,
  LuCalendarDays,
  LuClock,
  LuUserRound,
  LuSearch,
  LuMail,
  LuBookOpen,
  LuChartNoAxesCombined,
  LuTractor,
  LuWheat,
  LuTrees,
  LuX,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";
import { GoCheckCircle } from "react-icons/go";

const images = {
  hero: "/Images/blogpage-right.webp",
  heroLeft: "/Images/home-hero-left.png",
  polyhouse: "/services/polyhouse Farming/Polyhouse Farm.png",
  hydroponics: "/services/Hydroponics/Hydroponics Farm.png",
  mushroom: "/services/Mushroom Farming/Mushrooms Farm.png",
  aquaculture: "/services/Aquaculture/Aquaculture Farm.png",
  floriculture: "/services/Floriculture/Floriculture.png",
  nursery: "/services/Nursery/nursery.png",
  goat: "/services/open cultivation/Goat Farming/Goat Farm.png",
  irrigation: "services/Smart Irrigation/Smart Irrigation.png",
  tomato: "",
  soil: "",
  dairy: "",
};

const topics = [
  { name: "All Articles", icon: LuGrid2X2 },
  { name: "Crop Cultivation", icon: LuSprout },
  { name: "Soil Health", icon: LuLeaf },
  { name: "Modern Farming", icon: LuChartNoAxesCombined },
  { name: "Greenhouse & Polyhouse", icon: LuHouse },
  { name: "Hydroponics", icon: LuDroplets },
  { name: "Aquaculture", icon: LuFish },
  { name: "Livestock", icon: LuRabbit },
  { name: "Sustainability", icon: LuTrees },
];

const articles = [
  {
    id: 1,
    title: "Tomato Cultivation Guide for Higher Yields",
    category: "Crop Cultivation",
    image: images.tomato,
    date: "Oct 15, 2024",
    readTime: 6,
    excerpt:
      "A practical guide to tomato farming, including variety selection, nursery preparation, care, and harvesting.",
    content: [
      "Successful tomato cultivation begins with selecting a variety suited to the local climate, growing conditions, and market requirements.",
      "Healthy seedlings, well-prepared soil, balanced nutrition, and consistent irrigation help establish a strong crop. Protected cultivation may also help manage environmental conditions when designed appropriately.",
      "Monitor plants regularly for pest and disease symptoms, follow locally appropriate crop-protection guidance, and harvest at the maturity stage suited to your intended market.",
    ],
    tags: ["Tomato", "Soil Testing", "Organic Farming"],
  },
  {
    id: 2,
    title: "How to Improve Soil Health Naturally",
    category: "Soil Health",
    image: images.soil,
    date: "Oct 10, 2024",
    readTime: 7,
    excerpt:
      "Healthy soil supports productive farming. Learn practical ways to improve soil structure and fertility.",
    content: [
      "Soil health depends on its physical structure, nutrient availability, biological activity, and ability to retain water. These characteristics influence how well crops establish and grow.",
      "Consider soil testing before choosing amendments. Depending on the results, organic matter management, suitable crop rotations, cover crops, and balanced nutrient application can support soil quality.",
      "Monitor changes over time rather than relying on a single input. Match any fertilizer or soil amendment to the crop, soil test, and local recommendations.",
    ],
    tags: ["Soil Testing", "Organic Farming", "Sustainable Agriculture"],
  },
  {
    id: 3,
    title: "Hydroponic Farming: A Modern Solution",
    category: "Hydroponics",
    image: images.hydroponics,
    date: "Oct 05, 2024",
    readTime: 6,
    excerpt:
      "Discover how hydroponic systems work, their considerations, and crops commonly grown in them.",
    content: [
      "Hydroponics is a growing method in which plants receive water and essential nutrients through a managed solution rather than relying on field soil.",
      "System selection depends on crop type, water quality, climate, available space, energy needs, and operating skills. Leafy greens and herbs are commonly considered for controlled hydroponic systems.",
      "Before investing, evaluate setup costs, nutrient management, water monitoring, market demand, and the time required to maintain the system.",
    ],
    tags: ["Hydroponics", "Greenhouse", "Modern Farming"],
  },
  {
    id: 4,
    title: "Commercial Floriculture Opportunities in India",
    category: "Crop Cultivation",
    image: images.floriculture,
    date: "Sep 28, 2024",
    readTime: 5,
    excerpt:
      "Explore flower selection, production planning, and considerations for selling commercial flowers.",
    content: [
      "Commercial floriculture involves selecting flower varieties that suit the climate, growing system, intended customers, and available distribution channels.",
      "Production planning should account for planting material, growing conditions, labor, post-harvest handling, and the timing of market demand.",
      "Assess local buyers and transport requirements before scaling up. Production costs and selling prices can vary significantly by region and season.",
    ],
    tags: ["Sustainability", "Greenhouse", "Modern Farming"],
  },
  {
    id: 5,
    title: "Fish Farming for Sustainable Income",
    category: "Aquaculture",
    image: images.aquaculture,
    date: "Sep 20, 2024",
    readTime: 8,
    excerpt:
      "Understand the basic planning considerations behind pond and tank-based fish farming.",
    content: [
      "Fish farming requires planning around species selection, water availability, water quality, stocking density, feed, and access to a suitable market.",
      "Before starting, assess site conditions, operating costs, local permissions, water-management requirements, and disease-prevention practices.",
      "Regular monitoring and reliable technical guidance can help identify problems early. Select a production model appropriate to your experience and available resources.",
    ],
    tags: ["Fish Farming", "Sustainability", "Modern Farming"],
  },
  {
    id: 6,
    title: "Benefits of Drip Irrigation in Agriculture",
    category: "Modern Farming",
    image: images.irrigation,
    date: "Sep 15, 2024",
    readTime: 8,
    excerpt:
      "Learn how drip irrigation delivers water near plant roots and what to consider before installation.",
    content: [
      "Drip irrigation delivers water through a network of pipes and emitters near the plant root zone. Its performance depends on good design, water quality, and correct operation.",
      "A suitable system should be designed around crop spacing, soil conditions, water supply, pressure, filtration, and irrigation scheduling.",
      "Regular inspection and maintenance help reduce clogging and uneven delivery. Potential water savings depend on the previous irrigation method and the way the system is managed.",
    ],
    tags: ["Drip Irrigation", "Sustainable Agriculture", "Modern Farming"],
  },
  {
    id: 7,
    title: "How to Plan a Productive Polyhouse",
    category: "Greenhouse & Polyhouse",
    image: images.polyhouse,
    date: "Sep 12, 2024",
    readTime: 7,
    excerpt:
      "Understand site selection, structure planning, ventilation, and crop suitability before investing.",
    content: [
      "A polyhouse project begins with site assessment, crop selection, local weather conditions, water availability, and budget planning.",
      "The structure, ventilation, irrigation, and environmental controls should suit the intended crop and growing season.",
      "Review construction and operating costs, maintenance needs, market access, and available technical support before making an investment decision.",
    ],
    tags: ["Tomato", "Capsicum", "Greenhouse"],
  },
  {
    id: 8,
    title: "Capsicum Cultivation Tips for Better Yield",
    category: "Crop Cultivation",
    image: images.tomato,
    date: "Sep 25, 2024",
    readTime: 6,
    excerpt:
      "Review crop planning, plant care, irrigation, and environmental considerations for capsicum.",
    content: [
      "Capsicum production benefits from suitable variety selection, healthy planting material, and growing conditions matched to the crop.",
      "Plan irrigation and nutrition according to crop stage, soil or growing medium, and local recommendations. Protected cultivation may offer additional environmental control.",
      "Monitor pests, disease symptoms, fruit quality, and market requirements throughout the production cycle.",
    ],
    tags: ["Capsicum", "Greenhouse", "Drip Irrigation"],
  },
  {
    id: 9,
    title: "A Beginner's Guide to Organic Farming",
    category: "Sustainability",
    image: images.soil,
    date: "Sep 08, 2024",
    readTime: 6,
    excerpt:
      "Learn about soil management, crop diversity, and planning an organic production approach.",
    content: [
      "Organic farming focuses on a production system built around soil management, ecological processes, and permitted inputs under the applicable standard.",
      "Farmers should understand certification requirements, record-keeping, crop rotation, and pest-management practices before marketing produce as certified organic.",
      "A transition plan should account for local conditions, costs, customer demand, and the requirements of the intended market.",
    ],
    tags: ["Organic Farming", "Sustainable Agriculture", "Soil Testing"],
  },
  {
    id: 10,
    title: "Starting a Small Dairy Farming Unit",
    category: "Livestock",
    image: images.dairy,
    date: "Sep 18, 2024",
    readTime: 7,
    excerpt:
      "Explore planning considerations for animal care, feed, hygiene, and daily farm operations.",
    content: [
      "A small dairy unit needs a realistic plan for animal selection, housing, feed, water, veterinary care, labor, and milk marketing.",
      "Estimate both initial investment and recurring expenses. Local climate, feed availability, and reliable veterinary support should influence the scale of the operation.",
      "Maintain good hygiene, animal-welfare practices, and accurate production and expense records.",
    ],
    tags: ["Dairy Farming", "Sustainability", "Modern Farming"],
  },
  {
    id: 11,
    title: "Understanding Soil Testing Before Planting",
    category: "Soil Health",
    image: images.irrigation,
    date: "Aug 30, 2024",
    readTime: 5,
    excerpt:
      "Find out why soil analysis is a useful starting point for crop and nutrient planning.",
    content: [
      "Soil testing provides information that can help guide nutrient and soil-management decisions.",
      "Collect samples using the recommended method for your field and submit them to a suitable testing laboratory.",
      "Use the results alongside crop requirements and local agronomic advice to develop a practical management plan.",
    ],
    tags: ["Soil Testing", "Organic Farming"],
  },
  {
    id: 12,
    title: "Getting Started with Nursery Management",
    category: "Modern Farming",
    image: images.greenhouse,
    date: "Aug 22, 2024",
    readTime: 6,
    excerpt:
      "Learn the essentials of nursery planning, seedling care, hygiene, and inventory management.",
    content: [
      "A well-managed nursery needs suitable growing media, clean trays and tools, reliable water, and conditions matched to the crop.",
      "Plan sowing schedules and production volumes around seasonal demand and the time required to produce healthy planting material.",
      "Keep records of seed lots, germination, crop health, and dispatches to support consistent quality.",
    ],
    tags: ["Greenhouse", "Sustainability", "Modern Farming"],
  },
];

const popularTopics = [
  "Tomato",
  "Capsicum",
  "Cucumber",
  "Hydroponics",
  "Soil Testing",
  "Organic Farming",
  "Drip Irrigation",
  "Strawberry",
  "Fish Farming",
  "Dairy Farming",
  "Pest Management",
  "Sustainable Agriculture",
];

const trendingArticles = [
  {
    number: 1,
    title: "Top 5 High-Value Crops for Polyhouse Farming",
    image: images.floriculture,
    date: "Oct 12, 2024",
    articleId: 7,
  },
  {
    number: 2,
    title: "Organic vs Chemical Fertilizers: What to Choose?",
    image: images.soil,
    date: "Oct 08, 2024",
    articleId: 2,
  },
  {
    number: 3,
    title: "Step-by-Step Guide to Hydroponic Setup",
    image: images.hydroponics,
    date: "Oct 01, 2024",
    articleId: 3,
  },
  {
    number: 4,
    title: "Capsicum Cultivation Tips for Better Yield",
    image: images.tomato,
    date: "Sep 25, 2024",
    articleId: 8,
  },
  {
    number: 5,
    title: "How to Start a Small Dairy Farming Unit",
    image: images.dairy,
    date: "Sep 18, 2024",
    articleId: 10,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
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

function ArticleMeta({ date, readTime }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[9px] text-[#6f7887]">
      <span className="inline-flex items-center gap-1.5">
        <LuCalendarDays size={12} />
        {date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <LuClock size={12} />
        {readTime} min read
      </span>
    </div>
  );
}

function ArticleCard({ article, onOpen }) {
  return (
    <motion.article
      layout
      variants={fadeUp}
      className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#edf0e8] bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <button
        type="button"
        onClick={() => onOpen(article)}
        className="relative block h-[125px] w-full overflow-hidden text-left sm:h-[105px] lg:h-[105px] xl:h-[120px]"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-3 translate-y-1/2 rounded-full bg-[#eff9e9] px-3 py-1.5 text-[9px] font-semibold text-[#20563a] shadow-sm">
          {article.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-3 pt-4">
        <button
          type="button"
          onClick={() => onOpen(article)}
          className="text-left font-display text-lg leading-[1.15] text-[#172b43] transition hover:text-[#17623b]"
        >
          {article.title}
        </button>

        <p className="mt-2 flex-1 text-[10px] leading-4 text-[#697286]">
          {article.excerpt}
        </p>

        <div className="mt-3">
          <ArticleMeta date={article.date} readTime={article.readTime} />
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [activeTopic, setActiveTopic] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featuredArticle = articles[6];

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = articles.filter((article) => {
      const matchesTopic =
        activeTopic === "All Articles" ||
        article.category === activeTopic ||
        article.tags.some(
          (tag) => tag.toLowerCase() === activeTopic.toLowerCase(),
        );

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesTopic && matchesSearch && article.id !== featuredArticle.id;
    });

    if (sortBy === "Oldest") {
      return [...result].reverse();
    }

    if (sortBy === "Read Time") {
      return [...result].sort((a, b) => a.readTime - b.readTime);
    }

    return result;
  }, [activeTopic, search, sortBy, featuredArticle.id]);

  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));

  const currentPage = Math.min(page, totalPages);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function chooseTopic(topic) {
    setActiveTopic(topic);
    setPage(1);
  }

  function choosePopularTopic(topic) {
    setSearch("");
    setActiveTopic(
      topics.some((item) => item.name === topic) ? topic : "All Articles",
    );
    setPage(1);

    if (!topics.some((item) => item.name === topic)) {
      setSearch(topic);
    }

    document
      .getElementById("latest-articles")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) return;

    // UI demonstration only. Connect to your newsletter provider/API
    // before presenting this as a completed subscription.
    setSubscribeMessage(
      "Thanks! Connect the newsletter API to complete your subscription.",
    );
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

          <div className="mx-auto grid min-h-77.5 max-w-7xl items-center gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-81.25 lg:grid-cols-[1fr_0.9fr] lg:px-12">
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
                <span>Blog</span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <SectionLabel>Knowledge for a Greener Tomorrow</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl leading-[1.02] tracking-tight text-[#152a43] sm:text-6xl lg:text-7xl"
              >
                Our <span className="text-[#075332]">Blog</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-xs leading-6 text-[#657064] sm:text-sm sm:leading-7"
              >
                Insights, tips and updates from the world of modern agriculture.
                Learn from practical guides and explore technologies, farming
                practices, and industry topics.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-5">
                <a
                  href="#latest-articles"
                  className="inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-[#075332]/10 transition hover:bg-[#0b6941]"
                >
                  Explore Articles
                  <LuArrowRight size={15} />
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
          </div>
        </section>

        {/* TOPIC FILTERS */}
        <section className="px-4 pb-4 pt-2 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
            {topics.map((topic) => {
              const Icon = topic.icon;
              const active = activeTopic === topic.name;

              return (
                <button
                  key={topic.name}
                  type="button"
                  onClick={() => chooseTopic(topic.name)}
                  aria-pressed={active}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-3 py-3 text-[10px] font-medium transition sm:px-4 ${
                    active
                      ? "border-[#075332] bg-[#075332] text-white shadow-md"
                      : "border-[#edf0e8] bg-white/90 text-[#243b30] hover:border-[#8db69a] hover:bg-[#f0f6e8]"
                  }`}
                >
                  <Icon size={17} />
                  {topic.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* FEATURED ARTICLE + SIDEBAR */}
        <section className="px-4 pb-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-start gap-4 lg:grid-cols-[minmax(0,1fr)_270px] xl:grid-cols-[minmax(0,1fr)_300px]">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="grid min-w-0 overflow-hidden rounded-xl border border-[#edf0e8] bg-white/90 shadow-sm sm:grid-cols-[1.05fr_0.95fr]"
            >
              <button
                type="button"
                onClick={() => setSelectedArticle(featuredArticle)}
                className="min-h-[210px] overflow-hidden text-left sm:min-h-[245px]"
              >
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full min-h-[210px] w-full object-cover transition duration-700 hover:scale-[1.02] sm:min-h-[245px]"
                />
              </button>

              <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6">
                <span className="mb-3 w-fit rounded-full bg-[#d8f5df] px-3 py-1.5 text-[9px] font-semibold text-[#20563a]">
                  {featuredArticle.category}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="text-left font-display text-2xl leading-[1.08] text-[#172b43] transition hover:text-[#17623b] sm:text-3xl"
                >
                  How Polyhouse Farming Can Increase Your Yield
                </button>

                <p className="mt-3 text-xs leading-5 text-[#697286]">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] text-[#6f7887]">
                  <span className="inline-flex items-center gap-1.5">
                    <LuCalendarDays size={12} />
                    {featuredArticle.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <LuUserRound size={12} />
                    Fresh Agriculture
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <LuClock size={12} />
                    {featuredArticle.readTime} min read
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="mt-4 inline-flex w-fit items-center gap-3 rounded-full bg-[#075332] px-5 py-3 text-[10px] font-semibold text-white transition hover:bg-[#0b6941]"
                >
                  Read Full Article
                  <LuArrowRight size={14} />
                </button>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-3">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setPage(1);
                  document
                    .getElementById("latest-articles")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="flex rounded-xl border border-[#edf0e8] bg-white p-2 shadow-sm"
              >
                <LuSearch
                  size={16}
                  className="ml-2 mt-2.5 shrink-0 text-[#347d52]"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setPage(1);
                  }}
                  placeholder="Search articles..."
                  aria-label="Search articles"
                  className="h-9 min-w-0 flex-1 bg-transparent px-2 text-[11px] outline-none placeholder:text-[#9ba2b1]"
                />
                <button
                  type="submit"
                  aria-label="Submit article search"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#075332] text-white transition hover:bg-[#0b6941]"
                >
                  <LuSearch size={15} />
                </button>
              </form>

              <div className="rounded-xl border border-[#edf0e8] bg-white/90 p-4 shadow-sm">
                <h3 className="font-display text-xl text-[#172b43]">
                  Popular Topics
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {popularTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => choosePopularTopic(topic)}
                      className="rounded-full bg-[#f0f5eb] px-2.5 py-1.5 text-[9px] text-[#315943] transition hover:bg-[#dcebd7]"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#edf0e8] bg-white/90 p-4 shadow-sm">
                <h3 className="font-display text-xl text-[#172b43]">
                  Trending Articles
                </h3>

                <div className="mt-2">
                  {trendingArticles.map((item) => {
                    const article = articles.find(
                      (entry) => entry.id === item.articleId,
                    );

                    return (
                      <button
                        key={item.number}
                        type="button"
                        onClick={() => article && setSelectedArticle(article)}
                        className="flex w-full items-center gap-2.5 border-b border-[#edf0e8] py-2.5 text-left last:border-b-0"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf3e6] text-[10px] font-bold text-[#285c3c]">
                          {item.number}
                        </span>
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          className="h-12 w-12 shrink-0 rounded-lg object-cover"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-xs leading-4 text-[#172b43]">
                            {item.title}
                          </span>
                          <span className="mt-1.5 flex items-center gap-1 text-[9px] text-[#7a8290]">
                            <LuCalendarDays size={11} />
                            {item.date}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-xl border border-[#e8efdf] bg-[#f0f6e9] p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dcf3db] text-[#175d38]">
                    <LuMail size={25} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg leading-tight text-[#172b43]">
                      Subscribe to Our Newsletter
                    </h3>
                    <p className="mt-1 text-[10px] leading-4 text-[#697286]">
                      Get farming tips and agricultural insights delivered to
                      your inbox.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubscribe} className="mt-4">
                  <div className="flex overflow-hidden rounded-lg border border-[#dfe8d9] bg-white">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setSubscribeMessage("");
                      }}
                      placeholder="Enter your email address"
                      aria-label="Email address for newsletter"
                      className="h-10 min-w-0 flex-1 px-3 text-[10px] outline-none placeholder:text-[#9ba2b1]"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#075332] text-white transition hover:bg-[#0b6941]"
                    >
                      <LuArrowRight size={16} />
                    </button>
                  </div>

                  {subscribeMessage && (
                    <p
                      role="status"
                      className="mt-2 text-[10px] leading-4 text-[#386345]"
                    >
                      {subscribeMessage}
                    </p>
                  )}
                </form>
              </div>
            </aside>
          </div>
        </section>

        {/* LATEST ARTICLES */}
        <section
          id="latest-articles"
          className="relative isolate scroll-mt-24 px-4 pb-8 pt-1 sm:px-8 lg:px-12"
        >
          <div className="relative mx-auto grid max-w-7xl gap-4 lg:grid-cols-[minmax(0,1fr)_270px] xl:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0 lg:col-span-1">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-display text-3xl text-[#172b43]">
                    Latest Articles
                  </h2>
                  <p className="mt-1 text-[10px] text-[#7b8491]">
                    {activeTopic === "All Articles"
                      ? "Explore our latest agricultural guides and insights."
                      : `Articles related to ${activeTopic}.`}
                  </p>
                </div>

                <label className="flex items-center gap-2 rounded-lg border border-[#e4e8e1] bg-white px-3 py-2">
                  <span className="text-[10px] text-[#657083]">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(event) => {
                      setSortBy(event.target.value);
                      setPage(1);
                    }}
                    className="bg-transparent text-[10px] font-medium text-[#243b30] outline-none"
                  >
                    <option value="Latest">Latest</option>
                    <option value="Oldest">Oldest</option>
                    <option value="Read Time">Read Time</option>
                  </select>
                </label>
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {paginatedArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onOpen={setSelectedArticle}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {paginatedArticles.length === 0 && (
                <div className="rounded-2xl border border-[#edf0e8] bg-white p-10 text-center">
                  <LuSearch size={28} className="mx-auto text-[#6b9675]" />
                  <h3 className="mt-3 font-display text-xl text-[#172b43]">
                    No articles found
                  </h3>
                  <p className="mt-2 text-xs text-[#778074]">
                    Try another search term or select a different topic.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveTopic("All Articles");
                      setPage(1);
                    }}
                    className="mt-4 rounded-full bg-[#075332] px-5 py-2.5 text-xs font-semibold text-white"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredArticles.length > 0 && (
                <nav
                  aria-label="Article pagination"
                  className="mt-5 flex flex-wrap items-center justify-center gap-1.5"
                >
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setPage((current) => current - 1)}
                    className="rounded-lg border border-[#e3e8df] bg-white px-3 py-2 text-[10px] text-[#315943] transition hover:bg-[#edf4e8] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => index + 1)
                    .slice(0, 4)
                    .map((number) => (
                      <button
                        key={number}
                        type="button"
                        onClick={() => setPage(number)}
                        aria-current={
                          currentPage === number ? "page" : undefined
                        }
                        className={`h-8 min-w-8 rounded-lg border px-2 text-[10px] transition ${
                          currentPage === number
                            ? "border-[#075332] bg-[#075332] text-white"
                            : "border-[#e3e8df] bg-white text-[#315943] hover:bg-[#edf4e8]"
                        }`}
                      >
                        {number}
                      </button>
                    ))}

                  {totalPages > 4 && (
                    <>
                      <span className="px-1 text-[10px] text-[#7b8491]">…</span>
                      <button
                        type="button"
                        onClick={() => setPage(totalPages)}
                        className={`h-8 min-w-8 rounded-lg border px-2 text-[10px] ${
                          currentPage === totalPages
                            ? "border-[#075332] bg-[#075332] text-white"
                            : "border-[#e3e8df] bg-white text-[#315943]"
                        }`}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setPage((current) => current + 1)}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#e3e8df] bg-white px-3 py-2 text-[10px] text-[#315943] transition hover:bg-[#edf4e8] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                    <LuArrowRight size={13} />
                  </button>
                </nav>
              )}
            </div>
          </div>
        </section>

        {/* ARTICLE DETAIL MODAL */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#061a11]/80 p-4 backdrop-blur-sm"
            >
              <motion.article
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={(event) => event.stopPropagation()}
                className="relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#e8eee2] bg-[#fffef8] shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#245c3b] shadow-md transition hover:bg-[#edf4e8]"
                >
                  <LuX size={18} />
                </button>

                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="h-48 w-full object-cover sm:h-64"
                />

                <div className="p-5 sm:p-8">
                  <span className="inline-flex rounded-full bg-[#d8f5df] px-3 py-1.5 text-[9px] font-semibold text-[#20563a]">
                    {selectedArticle.category}
                  </span>

                  <h2 className="mt-3 font-display text-3xl leading-tight text-[#172b43] sm:text-4xl">
                    {selectedArticle.title}
                  </h2>

                  <div className="mt-3">
                    <ArticleMeta
                      date={selectedArticle.date}
                      readTime={selectedArticle.readTime}
                    />
                  </div>

                  <p className="mt-5 text-sm leading-6 text-[#53616d]">
                    {selectedArticle.excerpt}
                  </p>

                  <div className="mt-5 space-y-4">
                    {selectedArticle.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm leading-7 text-[#53616d]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[#e6ebe2] pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#477c53]">
                      Related Topics
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedArticle.tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            setSelectedArticle(null);
                            choosePopularTopic(tag);
                          }}
                          className="rounded-full bg-[#edf4e8] px-3 py-1.5 text-[10px] text-[#315943] transition hover:bg-[#dcebd7]"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM CTA */}
        <section className="relative isolate overflow-hidden">
          <img
            src={images.hero}
            alt="Healthy soil and a young plant"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#062c1c]/90 via-[#062c1c]/75 to-[#062c1c]/35" />

          <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-9 sm:px-8 sm:py-11 lg:grid-cols-[1fr_0.7fr] lg:px-12">
            <div className="relative z-10">
              <SectionLabel light>Let's Learn Together</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                Knowledge Today,
                <span className="block">Greener Tomorrows</span>
              </h2>

              <p className="mt-3 max-w-lg text-xs leading-5 text-white/85 sm:text-sm">
                Explore practical guides, agricultural insights, and ideas to
                help you make informed farming decisions.
              </p>

              <a
                href="#latest-articles"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
              >
                Explore All Articles
                <LuArrowRight size={15} />
              </a>
            </div>

            <div className="relative z-10 rounded-2xl border border-white/70 bg-[#fffef5]/95 p-5 shadow-xl backdrop-blur-md sm:p-6">
              {[
                "Expert Articles",
                "Practical Tips",
                "Latest Technologies",
                "Real Farmer Stories",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2">
                  <GoCheckCircle
                    size={17}
                    className="shrink-0 text-[#286b42]"
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
