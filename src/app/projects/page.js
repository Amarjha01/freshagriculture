
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuSearch,
  LuSlidersHorizontal,
  LuLayoutGrid,
  LuHouse,
  LuFlower2,
  LuWaves,
  LuSprout,
  LuFish,
  LuMapPin,
  LuLeaf,
  LuSettings,
  LuMessagesSquare,
  LuClipboardList,
  LuTractor,
  LuWheat,
  LuShieldCheck,
  LuUsers,
  LuCircleCheck,
  LuQuote,
  LuX,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";
import { FiCheckCircle } from "react-icons/fi";

const images = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90",
  polyhouse:  "/services/polyhouse Farming/Polyhouse Farm.png",
  hydroponics:      "/services/Hydroponics/Hydroponics Farm.png",
  mushroom:   "/services/Mushroom Farming/Mushrooms Farm.png",
  aquaculture: "/services/Aquaculture/Aquaculture Farm.png",
  floriculture: "/services/Floriculture/Floriculture.png",
  nursery: "/services/Nursery/nursery.png",
  goat: "/services/open cultivation/Goat Farming/Goat Farm.png",
  irrigation: "services/Smart Irrigation/Smart Irrigation.png",
  farmer: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=85",
};

const categories = [
  { name: "All Projects", icon: LuLayoutGrid },
  { name: "Polyhouse", icon: LuHouse },
  { name: "Hydroponics", icon: LuSprout },
  { name: "Mushroom", icon: LuFlower2 },
  { name: "Aquaculture", icon: LuWaves },
  { name: "Floriculture", icon: LuFlower2 },
  { name: "Nursery", icon: LuSprout },
  { name: "Goat Farming", icon: LuWheat },
  { name: "Smart Irrigation", icon: LuFish },
];

const projects = [
  {
    id: 1,
    title: "Polyhouse Tomato Cultivation",
    category: "Polyhouse",
    location: "Telangana",
    description:
      "A protected-cultivation concept for growing tomatoes in a controlled environment.",
    image: images.polyhouse,
    crop: "Tomato",
    type: "Protected cultivation",
    size: "Project-specific",
    status: "Project showcase",
    benefits: [
      "Controlled cultivation environment",
      "Crop-specific planning",
      "Improved growing-condition management",
      "Support throughout implementation",
    ],
  },
  {
    id: 2,
    title: "Hydroponic Leafy Greens",
    category: "Hydroponics",
    location: "Hyderabad",
    description:
      "Soilless cultivation of leafy greens with attention to nutrient and water management.",
    image: images.hydroponics,
    crop: "Leafy greens",
    type: "Soilless cultivation",
    size: "Project-specific",
    status: "Project showcase",
    benefits: [
      "Soilless growing approach",
      "Managed nutrient delivery",
      "Efficient space planning",
      "Crop-specific cultivation guidance",
    ],
  },
  {
    id: 3,
    title: "Mushroom Cultivation Unit",
    category: "Mushroom",
    location: "Siddipet",
    description:
      "A mushroom-growing setup planned around suitable growing conditions and operations.",
    image: images.mushroom,
    crop: "Mushrooms",
    type: "Indoor cultivation",
    size: "Project-specific",
    status: "Project showcase",
    benefits: [
      "Purpose-planned growing space",
      "Cultivation workflow planning",
      "Growing-condition management",
      "Operational guidance",
    ],
  },
  {
    id: 4,
    title: "Fish Farming Project",
    category: "Aquaculture",
    location: "Telangana",
    description:
      "An aquaculture project concept focused on fish farming infrastructure and management.",
    image: images.aquaculture,
    crop: "Fish",
    type: "Aquaculture",
    size: "Project-specific",
    status: "Project showcase",
    benefits: [
      "Aquaculture layout planning",
      "Water-management considerations",
      "Farm operations planning",
      "Species-specific requirements",
    ],
  },
  {
    id: 5,
    title: "Commercial Flower Cultivation",
    category: "Floriculture",
    location: "Hyderabad",
    description:
      "A cultivation concept for ornamental flowers and horticultural production.",
    image: images.floriculture,
    crop: "Flowers",
    type: "Floriculture",
    size: "Project-specific",
    status: "Project showcase",
    benefits: [
      "Crop and variety planning",
      "Growing-environment selection",
      "Cultivation guidance",
      "Production planning",
    ],
  },
  {
    id: 6,
    title: "Plant Nursery Project",
    category: "Nursery",
    location: "Siddipet",
    description:
      "A nursery setup focused on plant propagation, growing areas, and plant care.",
    image: images.nursery,
    crop: "Nursery plants",
    type: "Plant nursery",
    size: "Project-specific",
    status: "Project showcase",
    benefits: [
      "Nursery layout planning",
      "Propagation area planning",
      "Plant care workflows",
      "Growing-media considerations",
    ],
  },
  {
    id: 7,
    title: "Goat Farming Unit",
    category: "Goat Farming",
    location: "Telangana",
    description:
      "A livestock farming concept with attention to housing, daily management, and welfare.",
    image: images.goat,
    crop: "Goats",
    type: "Livestock",
    size: "Project-specific",
    status: "Project showcase",
    benefits: [
      "Housing and layout planning",
      "Livestock welfare considerations",
      "Feeding workflow planning",
      "Farm-management guidance",
    ],
  },
  {
    id: 8,
    title: "Automated Irrigation System",
    category: "Smart Irrigation",
    location: "Andhra Pradesh",
    description:
      "An irrigation concept focused on efficient water delivery and crop requirements.",
    image: images.irrigation,
    crop: "Field crops",
    type: "Irrigation",
    size: "Project-specific",
    status: "Project showcase",
    benefits: [
      "Irrigation layout planning",
      "Crop-water requirement assessment",
      "Water-management options",
      "Automation suitability review",
    ],
  },
];

const steps = [
  {
    number: "01",
    icon: LuMessagesSquare,
    title: "Understand Your Goals",
    description:
      "Discuss your requirements, land, available resources, and site conditions.",
  },
  {
    number: "02",
    icon: LuClipboardList,
    title: "Planning & Design",
    description:
      "Develop a project approach around your goals, budget, and requirements.",
  },
  {
    number: "03",
    icon: LuSettings,
    title: "Implementation",
    description:
      "Coordinate the setup, installation, and relevant training requirements.",
  },
  {
    number: "04",
    icon: LuSprout,
    title: "Ongoing Support",
    description:
      "Discuss operational guidance, maintenance, and farm-management needs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-[10px] font-bold uppercase tracking-[0.25em] ${
        light ? "text-[#d0e2b3]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}

function ProjectCard({ project, onSelect }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#e7e9de] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#183c27]/10"
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="relative block aspect-[1.65/1] w-full overflow-hidden text-left"
        aria-label={`View ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <span className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-[#fbfcf3]/95 px-3 py-1.5 text-[10px] font-semibold text-[#245c3b]">
          {project.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="text-left"
        >
          <h3 className="text-sm font-bold leading-snug text-[#1d3026] transition group-hover:text-[#286b42] sm:text-base">
            {project.title}
          </h3>
        </button>

        <p className="mt-2 text-xs leading-5 text-[#778074]">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <span className="flex min-w-0 items-center gap-1.5 text-[10px] text-[#59685a]">
            <LuMapPin size={13} className="shrink-0 text-[#286b42]" />
            <span className="truncate">{project.location}</span>
          </span>

          <button
            type="button"
            onClick={() => onSelect(project)}
            aria-label={`View details for ${project.title}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#94b7a0] text-[#286b42] transition hover:bg-[#075332] hover:text-white"
          >
            <LuArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const locations = useMemo(
    () => ["All Locations", ...new Set(projects.map((p) => p.location))],
    []
  );

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All Projects" ||
        project.category === activeCategory;

      const matchesLocation =
        locationFilter === "All Locations" ||
        project.location === locationFilter;

      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query);

      return matchesCategory && matchesLocation && matchesSearch;
    });
  }, [activeCategory, search, locationFilter]);

  function chooseProject(project) {
    setSelectedProject(project);

    document.getElementById("featured-project")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const testimonials = [
    {
      quote:
        "Every farming project starts with understanding the land, the grower's goals, and the practical needs of the operation.",
      name: "Farmer Testimonial",
      location: "Add verified location",
    },
    {
      quote:
        "The right project plan considers cultivation, resources, operations, and the support needed after setup.",
      name: "Project Feedback",
      location: "Add verified location",
    },
  ];

  const testimonial = testimonials[testimonialIndex];

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <img
            src={images.hero}
            alt="Agricultural fields in natural sunlight"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fbfaf4] via-[#fbfaf4]/95 to-[#fbfaf4]/20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#fbfaf4]/65 to-transparent" />

          <div className="mx-auto grid min-h-[390px] max-w-7xl items-center gap-7 px-5 py-12 sm:px-8 sm:py-14 lg:min-h-[400px] lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
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
                <a href="/" className="hover:underline">
                  Home
                </a>
                <LuChevronRight size={13} />
                <span>Projects</span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <SectionLabel>Real Projects. Real Impact.</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl leading-[1.02] tracking-tight text-[#152a43] sm:text-6xl"
              >
                Our Farming
                <span className="block text-[#075332]">Projects</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-lg text-sm leading-7 text-[#5f6b62] sm:text-base"
              >
                Explore agricultural project concepts across cultivation,
                aquaculture, livestock, and irrigation. Discover approaches
                that can be tailored to different farming goals.
              </motion.p>

              <motion.a
                variants={fadeUp}
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white shadow-lg shadow-[#075332]/15 transition hover:bg-[#0b6941]"
              >
                Discuss Your Project
                <LuArrowRight size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative hidden min-h-[300px] lg:block"
            >
              <div className="absolute inset-y-0 left-0 w-[72%] overflow-hidden rounded-tl-[45%] rounded-br-[2rem]">
                <img
                  src={images.polyhouse}
                  alt="Protected cultivation environment"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-5 right-0 flex w-[34%] flex-col gap-5 rounded-2xl border border-white/70 bg-[#fffef6]/95 p-4 shadow-xl backdrop-blur-md">
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
            </motion.div>
          </div>
        </section>

        {/* PROJECT CATEGORY SELECTOR */}
        <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#e7e9de] bg-white shadow-lg shadow-[#193c27]/5 sm:grid-cols-5 lg:grid-cols-9">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  className={`relative flex min-h-[76px] flex-col items-center justify-center gap-2 px-2 py-3 text-center transition sm:min-h-[84px] ${
                    active
                      ? "bg-[#06452d] text-white"
                      : "text-[#254a35] hover:bg-[#eff5e9]"
                  }`}
                >
                  <Icon size={21} strokeWidth={1.8} />
                  <span className="text-[9px] font-semibold leading-3 sm:text-[10px]">
                    {category.name}
                  </span>
                  {active && (
                    <span className="absolute -bottom-1 h-3 w-3 rotate-45 bg-[#06452d]" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* PROJECT LIST */}
        <section className="px-5 pb-10 pt-12 sm:px-8 sm:pt-14 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-xl">
                <SectionLabel>Our Projects</SectionLabel>
                <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                  Innovative Farming Solutions Across{" "}
                  <span className="text-[#075332]">Different Sectors</span>
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:max-w-[570px] lg:items-center">
                <p className="max-w-sm text-xs leading-5 text-[#778074]">
                  Browse project types, search by name or location, and select
                  a project to view its overview.
                </p>

                <div className="flex gap-2">
                  <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[#d8e1d5] bg-white px-3 py-2.5 sm:w-48 sm:flex-none">
                    <LuSearch
                      size={17}
                      className="shrink-0 text-[#477c53]"
                    />
                    <input
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search projects..."
                      className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-[#9aa397]"
                      aria-label="Search projects"
                    />
                    {search && (
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        aria-label="Clear search"
                      >
                        <LuX size={14} />
                      </button>
                    )}
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowFilters((value) => !value)}
                    aria-expanded={showFilters}
                    aria-label="Toggle project filters"
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                      showFilters
                        ? "bg-[#075332] text-white"
                        : "bg-[#173c2a] text-white hover:bg-[#286b42]"
                    }`}
                  >
                    <LuSlidersHorizontal size={17} />
                  </button>
                </div>
              </div>
            </div>

            {showFilters && (
              <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-[#e5e9de] bg-white p-4">
                <label
                  htmlFor="project-location"
                  className="text-xs font-semibold text-[#35473a]"
                >
                  Filter by location
                </label>

                <select
                  id="project-location"
                  value={locationFilter}
                  onChange={(event) => setLocationFilter(event.target.value)}
                  className="rounded-lg border border-[#d8e1d5] bg-white px-3 py-2 text-xs outline-none focus:border-[#477c53]"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => {
                    setLocationFilter("All Locations");
                    setSearch("");
                    setActiveCategory("All Projects");
                  }}
                  className="text-xs font-semibold text-[#286b42] underline underline-offset-4"
                >
                  Reset filters
                </button>
              </div>
            )}

            <div className="mb-5 mt-7 flex items-center justify-between">
              <p className="text-xs text-[#778074]">
                Showing {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
              </p>

              {activeCategory !== "All Projects" && (
                <button
                  type="button"
                  onClick={() => setActiveCategory("All Projects")}
                  className="text-xs font-semibold text-[#286b42]"
                >
                  View all projects
                </button>
              )}
            </div>

            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${locationFilter}-${search}`}
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={chooseProject}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#d5dfd0] bg-white/70 px-5 py-16 text-center">
                <LuSearch
                  size={30}
                  className="mx-auto text-[#477c53]"
                />
                <h3 className="mt-4 font-display text-2xl text-[#193c27]">
                  No matching projects
                </h3>
                <p className="mt-2 text-sm text-[#778074]">
                  Try another search term, category, or location.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setLocationFilter("All Locations");
                    setActiveCategory("All Projects");
                  }}
                  className="mt-5 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FEATURED PROJECT */}
        <section
          id="featured-project"
          className="scroll-mt-6 px-4 pb-14 sm:px-8 lg:px-12"
        >
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative mx-auto grid max-w-7xl gap-5 rounded-2xl border border-[#e4e9dc] bg-white/80 p-4 sm:p-6 lg:grid-cols-[1.05fr_1fr_0.5fr] lg:gap-6"
          >
            {/* Main project image */}
            <div className="relative min-h-[260px] overflow-hidden rounded-xl sm:min-h-[330px]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173c2a]/35 to-transparent" />

              <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/90 px-3 py-2 text-[10px] font-semibold text-[#245c3b]">
                {selectedProject.category}
              </span>
            </div>

            {/* Featured description */}
            <div className="flex flex-col justify-center py-2">
              <SectionLabel>Featured Project</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                {selectedProject.title}
              </h2>

              <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#286b42]">
                <LuMapPin size={15} />
                {selectedProject.location}
              </p>

              <p className="mt-4 text-xs leading-6 text-[#778074] sm:text-sm">
                {selectedProject.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {selectedProject.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <LuLeaf
                      size={15}
                      className="mt-0.5 shrink-0 text-[#286b42]"
                    />
                    <span className="text-[10px] leading-4 text-[#5c6a5d]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={`/contact?project=${encodeURIComponent(selectedProject.title)}`}
                className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
              >
                Discuss This Project
                <LuArrowRight size={15} />
              </a>
            </div>

            {/* Project facts */}
            <aside className="flex flex-col justify-center gap-4 rounded-xl bg-[#f4f7ed] p-4 sm:p-5">
              {[
                {
                  icon: LuHouse,
                  label: "Project Type",
                  value: selectedProject.type,
                },
                {
                  icon: LuSprout,
                  label: "Crop / Focus",
                  value: selectedProject.crop,
                },
                {
                  icon: LuMapPin,
                  label: "Location",
                  value: selectedProject.location,
                },
                {
                  icon: FiCheckCircle,
                  label: "Project Status",
                  value: selectedProject.status,
                },
              ].map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e3efd9] text-[#286b42]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-[9px] text-[#7a8577]">
                        {fact.label}
                      </p>
                      <p className="mt-0.5 text-[11px] font-semibold leading-4 text-[#35473a]">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </aside>
          </motion.div>
        </section>

        {/* OUR APPROACH */}
        <section className="relative isolate overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[#f1f5e9]" />

          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <SectionLabel>Our Approach</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                From Planning to Successful Implementation
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#778074]">
                A structured approach helps connect your farming goals with
                practical project planning and support.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    variants={fadeUp}
                    className="relative"
                  >
                    {index !== steps.length - 1 && (
                      <span className="absolute right-[-17px] top-7 hidden w-8 items-center text-[#91b69b] lg:flex">
                        <span className="h-px flex-1 bg-[#bfd5c0]" />
                        <LuArrowRight size={14} />
                      </span>
                    )}

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d5e8cf] bg-[#dff0d9] text-[#286b42]">
                      <Icon size={25} />
                    </div>

                    <p className="mt-4 text-[10px] font-bold text-[#477c53]">
                      {step.number}
                    </p>

                    <h3 className="mt-2 text-sm font-bold text-[#243c30]">
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

        {/* FARMER IMPACT / TESTIMONIAL */}
        <section className="relative isolate overflow-hidden px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
          <img
            src={images.hero}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082e1e]/90 via-[#082e1e]/65 to-[#082e1e]/35" />

          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <SectionLabel light>Real Farmer Impact</SectionLabel>

              <h2 className="max-w-xl font-display text-3xl leading-tight text-white sm:text-4xl">
                Helping Farmers Build Profitable Farming Businesses
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/80">
                Explore project approaches designed around cultivation
                requirements, available resources, and long-term farm goals.
              </p>

              <a
                href="#project-list"
                onClick={() => setActiveCategory("All Projects")}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
              >
                View All Projects
                <LuArrowRight size={15} />
              </a>
            </div>

            <div className="rounded-2xl border border-white/60 bg-[#fffef5]/95 p-5 shadow-xl backdrop-blur-md sm:p-6">
              <LuQuote size={27} className="text-[#477c53]" />

              <p className="mt-3 text-sm leading-7 text-[#35473a]">
                “{testimonial.quote}”
              </p>

              <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#e5e9de] pt-4">
                <div>
                  <p className="text-xs font-bold text-[#243c30]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[10px] text-[#778074]">
                    {testimonial.location}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() =>
                      setTestimonialIndex(
                        (testimonialIndex - 1 + testimonials.length) %
                          testimonials.length
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9e4d5] text-[#286b42] hover:bg-[#edf4e8]"
                  >
                    <LuChevronLeft size={16} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() =>
                      setTestimonialIndex(
                        (testimonialIndex + 1) % testimonials.length
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9e4d5] text-[#286b42] hover:bg-[#edf4e8]"
                  >
                    <LuChevronRight size={16} />
                  </button>
                </div>
              </div>

              <p className="mt-3 text-[10px] leading-5 text-[#8a9387]">
                Replace this sample text with an approved, genuine customer
                testimonial before publishing.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.5rem] border border-[#e4e9dc] bg-[#f1f5e8] lg:grid-cols-[1fr_0.8fr]">
            <div className="p-6 sm:p-9 lg:p-12">
              <SectionLabel>Let's Build Your Project</SectionLabel>

              <h2 className="max-w-xl font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                Ready to Start Your Farming Project?
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-[#687168]">
                Tell us about your land, cultivation plans, and farming
                objectives. Start a conversation about the project you have
                in mind.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
              >
                Get a Free Consultation
                <LuArrowRight size={15} />
              </a>
            </div>

            <div className="relative min-h-[240px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85"
                alt="Young plant growing in soil"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f1f5e8]/30 to-transparent" />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
