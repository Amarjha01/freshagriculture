"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuChevronRight,
  LuChevronLeft,
  LuGrid2X2,
  LuHouse,
  LuSprout,
  LuFlower2,
  LuWaves,
  LuUsers,
  LuDroplets,
  LuLeaf,
  LuMapPin,
  LuCamera,
  LuX,
  LuZoomIn,
  LuImages,
  LuShieldCheck,
  LuClipboardCheck,
  LuSettings,
  LuHandshake,
  LuMaximize2,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";

/* Replace these representative images with approved company photographs. */
const images = {
  hero: "/Images/gallarypage-right.webp",
  heroLeft: "/Images/home-hero-left.png",
  hydroponics: "/services/Hydroponics/Hydroponics Farm.png",
  mushroom: "/services/Mushroom Farming/Mushrooms Farm.png",
  fish: "/services/Aquaculture/Aquaculture Farm.png",
  flowers: "/services/Floriculture/Floriculture.png",
  nursery: "/services/Nursery/nursery.png",
  goat: "/services/open cultivation/Goat Farming/Goat Farm.png",
  irrigation: "services/Smart Irrigation/Smart Irrigation.png",
  capsicum: "",
  tomatoes: "",
  cucumber: "",
  strawberry: "",
  shadeNet: "",
  hands: "",
};

const categories = [
  { name: "All", icon: LuGrid2X2 },
  { name: "Polyhouse", icon: LuHouse },
  { name: "Hydroponics", icon: LuSprout },
  { name: "Mushroom", icon: LuShieldCheck },
  { name: "Aquaculture", icon: LuWaves },
  { name: "Floriculture", icon: LuFlower2 },
  { name: "Nursery", icon: LuSprout },
  { name: "Goat Farming", icon: LuUsers },
  { name: "Smart Irrigation", icon: LuDroplets },
];

const galleryItems = [
  {
    id: 1,
    title: "Polyhouse Tomato Cultivation",
    category: "Polyhouse",
    description:
      "Year-round tomato production with controlled growing conditions.",
    location: "Telangana",
    image: images.tomatoes,
    photoCount: 12,
    featured: true,
  },
  {
    id: 2,
    title: "Hydroponic Leafy Greens",
    category: "Hydroponics",
    description: "Soilless cultivation for leafy greens and herbs.",
    location: "Hyderabad",
    image: images.hydroponics,
    photoCount: 10,
  },
  {
    id: 3,
    title: "Mushroom Cultivation Unit",
    category: "Mushroom",
    description: "A dedicated growing environment for mushroom production.",
    location: "Siddipet",
    image: images.mushroom,
    photoCount: 8,
  },
  {
    id: 4,
    title: "Fish Farming Project",
    category: "Aquaculture",
    description: "Aquaculture layouts and fish-farming systems.",
    location: "Andhra Pradesh",
    image: images.fish,
    photoCount: 11,
  },
  {
    id: 5,
    title: "Floriculture Project",
    category: "Floriculture",
    description: "Flower cultivation for ornamental and commercial use.",
    location: "Hyderabad",
    image: images.flowers,
    photoCount: 9,
  },
  {
    id: 6,
    title: "Plant Nursery",
    category: "Nursery",
    description: "Plant propagation and nursery growing environments.",
    location: "Siddipet",
    image: images.nursery,
    photoCount: 14,
  },
  {
    id: 7,
    title: "Goat Farming Unit",
    category: "Goat Farming",
    description: "Livestock housing and farm-management infrastructure.",
    location: "Telangana",
    image: images.goat,
    photoCount: 6,
  },
  {
    id: 8,
    title: "Smart Irrigation System",
    category: "Smart Irrigation",
    description: "Irrigation planning for efficient field water management.",
    location: "Maharashtra",
    image: images.irrigation,
    photoCount: 8,
  },
  {
    id: 9,
    title: "Capsicum Cultivation in Polyhouse",
    category: "Polyhouse",
    description: "Protected cultivation for capsicum and other suitable crops.",
    location: "Karnataka",
    image: images.capsicum,
    photoCount: 10,
  },
  {
    id: 10,
    title: "Cucumber Cultivation",
    category: "Polyhouse",
    description: "Cucumber production in a planned growing environment.",
    location: "Telangana",
    image: images.cucumber,
    photoCount: 7,
  },
  {
    id: 11,
    title: "Strawberry Cultivation",
    category: "Polyhouse",
    description: "Strawberry growing with attention to crop requirements.",
    location: "Karnataka",
    image: images.strawberry,
    photoCount: 9,
  },
  {
    id: 12,
    title: "Nursery & Shade Net House",
    category: "Nursery",
    description: "Protected nursery growing for young plants.",
    location: "Andhra Pradesh",
    image: images.shadeNet,
    photoCount: 6,
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
  visible: { transition: { staggerChildren: 0.065 } },
};

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-[10px] font-bold uppercase tracking-[0.26em] ${
        light ? "text-[#c9dfad]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}

function GalleryCard({ item, onOpen }) {
  return (
    <motion.article
      layout
      variants={fadeUp}
      className="group min-w-0 overflow-hidden rounded-xl border border-[#e8eade] bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#173c2a]/10"
    >
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="relative block aspect-[1.85/1] w-full overflow-hidden bg-[#e7ecdf] text-left"
        aria-label={`Open gallery image for ${item.title}`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />

        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-full bg-[#092f20]/85 px-2.5 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm">
          <LuCamera size={13} />
          {item.photoCount}
        </span>

        <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#245c3b] opacity-0 shadow-md transition group-hover:opacity-100">
          <LuZoomIn size={16} />
        </span>
      </button>

      <div className="p-3 sm:p-3.5">
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="text-left"
        >
          <h3 className="text-[11px] font-bold leading-4 text-[#1d3026] transition group-hover:text-[#286b42] sm:text-xs">
            {item.title}
          </h3>
        </button>

        <p className="mt-1 text-[10px] leading-[1.5] text-[#778074] sm:text-[11px]">
          {item.description}
        </p>

        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#394c3d]">
          <LuMapPin size={13} className="shrink-0 text-[#075332]" />
          <span>{item.location}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  function openItem(item) {
    setSelectedItem(item);
    setActiveImageIndex(0);
  }

  function closeLightbox() {
    setSelectedItem(null);
    setActiveImageIndex(0);
  }

  function navigateLightbox(direction) {
    if (!selectedItem || filteredItems.length === 0) return;

    const currentIndex = Math.max(selectedIndex, 0);
    const nextIndex =
      (currentIndex + direction + filteredItems.length) % filteredItems.length;

    setSelectedItem(filteredItems[nextIndex]);
    setActiveImageIndex(0);
  }

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-[#f5f6ed]" />

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

          <div className="mx-auto grid min-h-80 max-w-7xl items-center gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-140 lg:grid-cols-[1fr_0.95fr] lg:px-12">
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
                <span>Gallery</span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <SectionLabel>Our Work in Pictures</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl leading-[1.02] tracking-tight text-[#152a43] sm:text-6xl lg:text-7xl"
              >
                Gallery
              </motion.h1>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-lg font-medium leading-snug text-[#1e3029] sm:text-xl"
              >
                Real Projects. Real Farmers. Real Impact.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-3 max-w-lg text-xs leading-6 text-[#657064] sm:text-sm"
              >
                Explore glimpses of agricultural project concepts, cultivation
                environments, and farming solutions across different categories.
              </motion.p>

              <motion.a
                variants={fadeUp}
                href="/contact"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white shadow-lg shadow-[#075332]/10 transition hover:bg-[#0b6941]"
              >
                Enquire About a Project
                <LuArrowRight size={15} />
              </motion.a>
            </motion.div>

            {/* right side*/}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              aria-hidden="true"
              className="pointer-events-none absolute  right-0 -top-20 z-0 w-[60%] hidden lg:block"
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

        {/* CATEGORY FILTER BAR */}
        <section className="relative z-10 px-4 pb-5 pt-3 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => {
                const Icon = category.icon;
                const active = activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => setActiveCategory(category.name)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-3 transition duration-200 sm:px-5 ${
                      active
                        ? "border-[#06452d] bg-[#06452d] text-white shadow-md shadow-[#06452d]/10"
                        : "border-transparent bg-white/90 text-[#34483a] hover:border-[#d5e4d0] hover:bg-[#eff5e9]"
                    }`}
                  >
                    <Icon size={17} />
                    <span className="text-[10px] font-semibold">
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="relative isolate px-4 pb-8 sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs text-[#788274]">
                Showing{" "}
                <span className="font-semibold text-[#245c3b]">
                  {filteredItems.length}
                </span>{" "}
                {filteredItems.length === 1
                  ? "photo collection"
                  : "photo collections"}
              </p>

              {activeCategory !== "All" && (
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#286b42] hover:underline"
                >
                  Clear filter
                  <LuX size={13} />
                </button>
              )}
            </div>

            <motion.div
              layout
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <GalleryCard key={item.id} item={item} onOpen={openItem} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="rounded-2xl border border-dashed border-[#d5dfd0] bg-white/70 px-5 py-16 text-center">
                <LuImages size={32} className="mx-auto text-[#477c53]" />
                <h3 className="mt-4 font-display text-2xl text-[#193c27]">
                  No images in this category yet
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="mt-5 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white"
                >
                  View All Images
                </button>
              </div>
            )}
          </div>
        </section>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              onKeyDown={(event) => {
                if (event.key === "Escape") closeLightbox();
                if (event.key === "ArrowRight") navigateLightbox(1);
                if (event.key === "ArrowLeft") navigateLightbox(-1);
              }}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedItem.title} image preview`}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061a11]/90 p-4 backdrop-blur-sm sm:p-8"
            >
              <motion.div
                initial={{ scale: 0.96, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.97, y: 8 }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#fdfcf5] shadow-2xl"
              >
                <div className="relative flex max-h-[70vh] min-h-[250px] items-center justify-center bg-[#10281b]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-[70vh] w-full object-contain"
                  />

                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Close image preview"
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                  >
                    <LuX size={20} />
                  </button>

                  {filteredItems.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => navigateLightbox(-1)}
                        aria-label="Previous gallery image"
                        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/80"
                      >
                        <LuChevronLeft size={21} />
                      </button>

                      <button
                        type="button"
                        onClick={() => navigateLightbox(1)}
                        aria-label="Next gallery image"
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/80"
                      >
                        <LuChevronRight size={21} />
                      </button>
                    </>
                  )}
                </div>

                <div className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center sm:px-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#477c53]">
                      {selectedItem.category}
                    </p>
                    <h2 className="mt-1 font-display text-2xl text-[#162d42]">
                      {selectedItem.title}
                    </h2>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-[#778074]">
                      <LuMapPin size={14} />
                      {selectedItem.location}
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#edf4e8] px-4 py-2 text-xs font-semibold text-[#245c3b]">
                    <LuCamera size={15} />
                    {selectedItem.photoCount} photos
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PROJECT ENQUIRY CTA */}
        <section className="relative isolate overflow-hidden">
          <img
            src={images.hands}
            alt="Hands holding soil and a young plant"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062c1c]/90 via-[#082f20]/75 to-[#082f20]/50" />

          <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_0.75fr] lg:px-12">
            <div className="relative z-10">
              <SectionLabel light>Let's Grow Together</SectionLabel>

              <h2 className="max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl">
                Have a Similar Project in Mind?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                Talk to our team about your land, crops, infrastructure, and
                farming objectives to discuss a suitable project approach.
              </p>

              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
              >
                Get a Free Consultation
                <LuArrowRight size={15} />
              </a>
            </div>

            <div className="relative z-10 rounded-2xl border border-white/70 bg-[#fffef5]/95 p-5 shadow-xl backdrop-blur-md sm:p-6">
              {[
                { icon: LuMapPin, text: "Site Visit & Assessment" },
                { icon: LuClipboardCheck, text: "Customized Project Design" },
                { icon: LuSettings, text: "Expert Technical Support" },
                { icon: LuHandshake, text: "Implementation Planning" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-center gap-3 py-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e2f0dc] text-[#286b42]">
                      <Icon size={16} />
                    </span>
                    <span className="text-xs font-medium text-[#35473a]">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
