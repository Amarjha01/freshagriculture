"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuLeaf,
  LuSprout,
  LuShieldCheck,
  LuFlaskConical,
  LuFlower2,
  LuDroplets,
  LuTreePine,
  LuCheck,
  LuCircleCheck,
  LuPackage,
  LuWheat,
  LuDownload,
  LuChevronRight,
  LuChevronLeft,
  LuMicroscope,
  LuBadgeCheck,
  LuMenu,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";

const images = {
  hero: "/Images/productpage-right side.webp",
  heroLeft: "/Images/home-hero-left.png",
  polyhouse: "/services/polyhouse Farming/Polyhouse Farm.png",
  hydroponics: "/services/Hydroponics/Hydroponics Farm.png",
  mushroom: "/services/Mushroom Farming/Mushrooms Farm.png",
  aquaculture: "/services/Aquaculture/Aquaculture Farm.png",
  floriculture: "/services/Floriculture/Floriculture.png",
  nursery: "/services/Nursery/nursery.png",
  goat: "/services/open cultivation/Goat Farming/Goat Farm.png",
  irrigation: "services/Smart Irrigation/Smart Irrigation.png",
  cropAdvisory: "services/Advisory/Advisory.png",
  project: "services/Project & AMC/Project & AMC.png",
  crop: "/Images/crop.avif",
};

const categories = [
  { name: "All Products", icon: LuSprout },
  { name: "Biofertilizers", icon: LuSprout },
  { name: "Fertilizers", icon: LuFlaskConical },
  { name: "Crop Protection", icon: LuShieldCheck },
  { name: "Specialty Products", icon: LuFlower2 },
  { name: "Plant Growth Promoters", icon: LuLeaf },
  { name: "Organic Inputs", icon: LuTreePine },
];

const products = [
  {
    id: "azoto-green",
    name: "Azoto-Green",
    category: "Biofertilizers",
    description: "Nitrogen-fixing biofertilizer for better plant growth.",
    details:
      "A nitrogen-fixing biofertilizer intended to support plant nutrition and soil fertility.",
    image:
      "",
    color: "#175e3d",
    badge: "BIOFERTILIZER",
    benefits: [
      "Supports nitrogen availability",
      "Helps maintain soil fertility",
      "Supports healthy plant growth",
      "Can complement crop nutrition programs",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Refer to current product packaging",
  },
  {
    id: "phos-bio",
    name: "Phos-Bio",
    category: "Biofertilizers",
    description: "Phosphate-mobilizing biofertilizer.",
    details:
      "A microbial agricultural input positioned for phosphorus availability in crop nutrition programs.",
    image:
      "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=700&q=85",
    color: "#61243d",
    badge: "BIOFERTILIZER",
    benefits: [
      "Supports phosphorus availability",
      "Complements soil nutrition practices",
      "Designed for agricultural use",
      "Supports crop nutrition planning",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Refer to current product packaging",
  },
  {
    id: "potash-solv",
    name: "Potash-Solv",
    category: "Biofertilizers",
    description: "Potash-mobilizing solution for crop nutrition.",
    details:
      "An agricultural product intended to support potassium availability as part of a crop nutrition program.",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=85",
    color: "#bd772b",
    badge: "BIOFERTILIZER",
    benefits: [
      "Supports potassium availability",
      "Complements nutrient management",
      "Fits into crop-specific programs",
      "Helps support informed soil management",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Refer to current product packaging",
  },
  {
    id: "root-max",
    name: "Root-Max",
    category: "Plant Growth Promoters",
    description: "Plant growth promoter for root development.",
    details:
      "A plant growth product intended to support root development as part of crop management.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=85",
    color: "#747c32",
    badge: "GROWTH PROMOTER",
    benefits: [
      "Designed to support root development",
      "Complements crop management",
      "Can be evaluated for crop-specific needs",
      "Use according to product instructions",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Refer to current product packaging",
  },
  {
    id: "tricho-guard",
    name: "Tricho-Guard",
    category: "Crop Protection",
    description: "Biological crop protection solution.",
    details:
      "A biological crop-protection product. Confirm its specific organism, target, and approved uses from the product label.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85",
    color: "#376f48",
    badge: "BIOLOGICAL",
    benefits: [
      "Biological crop-protection category",
      "Check target use on product label",
      "Use according to approved directions",
      "Integrate with suitable crop management",
    ],
    crops: "Confirm on the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Refer to current product packaging",
  },
  {
    id: "beauver-max",
    name: "Beauver-Max",
    category: "Crop Protection",
    description: "Biological pest management product.",
    details:
      "A biological pest-management product. Verify its active organism, target pests, and registered uses before application.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85",
    color: "#a43b4a",
    badge: "BIOLOGICAL",
    benefits: [
      "Biological pest-management category",
      "Check target pests on product label",
      "Follow approved application directions",
      "Use within an appropriate crop program",
    ],
    crops: "Confirm on the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Refer to current product packaging",
  },
  {
    id: "pseud-shield",
    name: "Pseud-Shield",
    category: "Crop Protection",
    description: "Biological crop-support solution.",
    details:
      "A biological crop-support product. Confirm the organism, intended use, and directions from its label.",
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=700&q=85",
    color: "#4d7356",
    badge: "BIOLOGICAL",
    benefits: [
      "Biological product category",
      "Confirm intended use on the label",
      "Follow recommended handling guidance",
      "Use according to product instructions",
    ],
    crops: "Confirm on the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Refer to current product packaging",
  },
  {
    id: "bt-strike",
    name: "BT-Strike",
    category: "Crop Protection",
    description: "Biological crop protection product.",
    details:
      "A crop-protection product listed in the company product range. Confirm the active ingredient, target pests, and permitted use from the label.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=700&q=85",
    color: "#3d6640",
    badge: "CROP PROTECTION",
    benefits: [
      "Crop-protection product category",
      "Verify target pests and approved crops",
      "Follow label instructions",
      "Use as part of suitable crop management",
    ],
    crops: "Confirm on the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Refer to current product packaging",
  },
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
    transition: { staggerChildren: 0.08 },
  },
};

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-[10px] font-bold uppercase tracking-[0.25em] ${
        light ? "text-[#c7dda7]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}

function ProductBottle({ product, large = false }) {
  return (
    <div
      className={`relative flex items-center justify-center ${
        large ? "h-full min-h-62.5" : "h-28"
      }`}
    >
      <div
        className={`relative flex flex-col items-center ${
          large ? "scale-110 sm:scale-125" : ""
        }`}
      >
        {/* Bottle cap */}
        <div
          className="z-10 h-3 w-8 rounded-t-md border border-black/10"
          style={{ backgroundColor: product.color }}
        />

        {/* Bottle neck */}
        <div
          className="h-3 w-6 border-x border-black/10"
          style={{ backgroundColor: product.color }}
        />

        {/* Bottle body */}
        <div className="relative h-[76px] w-[57px] overflow-hidden rounded-b-[13px] rounded-t-md border border-black/10 bg-gradient-to-r from-[#cbd3c9] via-white to-[#c6cec4] shadow-md">
          <div
            className="absolute inset-x-0 top-0 h-2"
            style={{ backgroundColor: product.color }}
          />

          <div className="absolute inset-x-1 top-4 rounded-sm border border-[#d7dfce] bg-[#fbfcf4] px-0.5 py-1 text-center">
            <span
              className="block truncate text-[5px] font-extrabold"
              style={{ color: product.color }}
            >
              FRESH AGRICULTURE
            </span>

            <span className="mt-1 block text-[7px] font-black leading-tight text-[#263a2b]">
              {product.name}
            </span>

            <div
              className="mx-auto mt-1 flex h-5 w-9 items-center justify-center rounded-sm"
              style={{ backgroundColor: product.color }}
            >
              <LuSprout className="text-white" size={13} />
            </div>

            <span className="mt-1 block text-[4px] text-[#586558]">
              AGRICULTURAL INPUT
            </span>
          </div>

          <div
            className="absolute bottom-0 h-2 w-full"
            style={{ backgroundColor: product.color }}
          />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onSelect }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e8eade] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#193c27]/5"
    >
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="relative block w-full bg-linear-to-b from-[#f5f6ed] to-white px-3 pt-3 text-left"
        aria-label={`View ${product.name} details`}
      >
        <ProductBottle product={product} />

        <span className="absolute right-3 top-3 rounded-full border border-[#e3e8dd] bg-white p-1.5 text-[#326a45] transition group-hover:bg-[#075332] group-hover:text-white">
          <LuArrowUpRight size={15} />
        </span>
      </button>

      <div className="flex flex-1 items-start justify-between gap-2 p-4 pt-2">
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="min-w-0 text-left"
        >
          <h3 className="text-sm font-bold text-[#1c3025]">{product.name}</h3>
          <p className="mt-1.5 text-[10px] leading-4 text-[#737d72] sm:text-xs">
            {product.description}
          </p>
        </button>

        <button
          type="button"
          onClick={() => onSelect(product)}
          aria-label={`View ${product.name}`}
          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#a8c8b0] text-[#286b42] transition hover:bg-[#075332] hover:text-white"
        >
          <LuArrowRight size={14} />
        </button>
      </div>
    </motion.article>
  );
}

function PhotoFeature() {
  return (
    <div className="relative h-full min-h-[250px] overflow-hidden rounded-2xl sm:min-h-[300px]">
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1100&q=85"
        alt="Young plants growing in rich soil"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/10 to-[#062d1d]/95" />

      <div className="absolute inset-y-0 right-0 flex w-[55%] flex-col justify-center gap-4 p-4 text-white sm:p-6">
        {[
          { icon: LuSprout, text: "Supports soil management" },
          { icon: LuDroplets, text: "Crop nutrition planning" },
          { icon: LuLeaf, text: "Plant growth support" },
          { icon: LuShieldCheck, text: "Responsible use" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26764b]">
                <Icon size={16} />
              </span>
              <p className="text-[10px] leading-4 sm:text-xs">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Biofertilizers");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [relatedStart, setRelatedStart] = useState(0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Products") return products;

    const categoryMatches = products.filter(
      (product) => product.category === activeCategory,
    );

    return categoryMatches.length > 0 ? categoryMatches : products;
  }, [activeCategory]);

  const relatedProducts = useMemo(() => {
    const alternatives = products.filter(
      (product) => product.id !== selectedProduct.id,
    );

    return Array.from({ length: Math.min(5, alternatives.length) }, (_, i) => {
      return alternatives[(relatedStart + i) % alternatives.length];
    });
  }, [selectedProduct, relatedStart]);

  function chooseCategory(category) {
    setActiveCategory(category.name);
  }

  function selectProduct(product) {
    setSelectedProduct(product);
    document
      .getElementById("featured-product")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">
        {/* HERO */}
        <section className="relative isolate min-h-[500px] overflow-hidden sm:min-h-[520px]">
          <img
            src={images.hero}
            alt=""
            className="absolute lg:hidden inset-0 -z-20 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fbfaf4] via-[#fbfaf4]/95 to-[#fbfaf4]/15" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#fbfaf4]/80 via-transparent to-white/10" />

          {/* LEFT DECORATIVE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-50 z-0 hidden h-auto w-112.5 lg:block n"
          >
            <img
              src={images.heroLeft}
              alt=""
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <div className="mx-auto grid min-h-125 max-w-7xl items-center gap-8 px-5 pb-12 pt-10 sm:min-h-130 sm:px-8 lg:grid-cols-2 lg:px-12">
            {/* left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-xl"
            >
              <motion.div variants={fadeUp}>
                <div className="mb-7 flex items-center gap-2 text-xs text-[#477c53]">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                  <LuChevronRight size={13} />
                  <span>Products</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl leading-[1.03] tracking-tight text-[#142b43] sm:text-6xl"
              >
                Our Products
                <span className="mt-1 block text-[#075332]">
                  For Healthier Crops and Better Yields
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-lg text-sm leading-7 text-[#5f6b62] sm:text-base"
              >
                Explore agricultural inputs and crop-support products designed
                to complement soil management, plant nutrition, and crop care.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-x-6 gap-y-4 w-fit p-2 rounded-2xl backdrop-blur-xs"
              >
                {[
                  { icon: LuLeaf, label: "Quality Products" },
                  { icon: LuFlaskConical, label: "Product Information" },
                  { icon: LuShieldCheck, label: "Responsible Use" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2">
                      <Icon size={24} className="text-[#075332]" />
                      <span className="max-w-22.5 text-[10px] font-semibold leading-4 text-[#35473a] sm:text-xs">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* right content */}

            <motion.div
              initial={{ opacity: 0, scale: 0.97, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden  min-h-full lg:block"
            >
              <div className="absolute right-[8%] top-[6%] flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/80 bg-white/90 text-center shadow-lg z-10">
                <LuTrendingUpIcon />
                <span className="mt-1 text-[9px] font-semibold leading-3">
                  Better
                  <br />
                  Yields
                </span>
              </div>

              <div className="absolute right-[1%] top-[36%] flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/80 bg-white/90 text-center shadow-lg z-10">
                <LuShieldCheck size={22} className="text-[#075332]" />
                <span className="mt-1 text-[9px] font-semibold leading-3">
                  Crop
                  <br />
                  Care
                </span>
              </div>

              <div className="absolute left-[10%] top-[20%] flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/80 bg-white/90 text-center shadow-lg z-10">
                <LuSprout size={22} className="text-[#075332]" />
                <span className="mt-1 text-[9px] font-semibold leading-3">
                  Soil
                  <br />
                  Health
                </span>
              </div>
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
            </motion.div>
          </div>
        </section>

        {/* CATEGORY NAVIGATION */}
        <section className="relative z-20 mx-auto -mt-2 max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#e9eadf] bg-white shadow-lg shadow-[#193c27]/5 sm:grid-cols-4 lg:grid-cols-7">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => chooseCategory(category)}
                  className={`relative flex min-h-[84px] flex-col items-center justify-center gap-2 px-2 py-3 text-center transition sm:min-h-[94px] ${
                    isActive
                      ? "bg-[#06452d] text-white"
                      : "text-[#254a35] hover:bg-[#f0f5e9]"
                  }`}
                >
                  <Icon size={23} strokeWidth={1.8} />
                  <span className="text-[9px] font-semibold leading-4 sm:text-[10px]">
                    {category.name}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1 h-3 w-3 rotate-45 bg-[#06452d]" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* CATEGORY INTRODUCTION */}
        <section className="px-5 pb-8 pt-12 sm:px-8 sm:pt-14 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-2 lg:gap-12">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SectionLabel>{activeCategory}</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                Natural Solutions for
                <span className="block text-[#075332]">
                  Sustainable Farming
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#687168]">
                Browse products in our agricultural range. Review product
                information, intended uses, and label directions to identify
                options appropriate for your requirements.
              </p>

              <a
                href="#product-list"
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#78a98a] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
              >
                View{" "}
                {activeCategory === "All Products"
                  ? "All Products"
                  : activeCategory}
                <LuArrowRight size={15} />
              </a>
            </motion.div>

            <PhotoFeature />
          </div>
        </section>

        {/* PRODUCT CARDS */}
        <section
          id="product-list"
          className="scroll-mt-8 px-5 pb-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <SectionLabel>Explore Our Range</SectionLabel>
                <h2 className="font-display text-2xl text-[#162d42] sm:text-3xl">
                  {activeCategory === "All Products"
                    ? "Our Products"
                    : activeCategory}
                </h2>
              </div>

              <span className="text-xs text-[#778074]">
                {filteredProducts.length} products
              </span>
            </div>

            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={selectProduct}
                />
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <p className="py-12 text-center text-sm text-[#687468]">
                No products are currently listed in this category.
              </p>
            )}
          </div>
        </section>

        {/* FEATURED PRODUCT */}
        <section
          id="featured-product"
          className="scroll-mt-6 px-4 pb-8 sm:px-8 lg:px-12"
        >
          <motion.div
            key={selectedProduct.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto grid max-w-7xl gap-6 rounded-[1.5rem] border border-white bg-white/90 p-4 shadow-sm sm:p-6 lg:grid-cols-[0.95fr_1.15fr_0.8fr] lg:gap-7"
          >
            {/* Product image */}
            <div className="relative min-h-[290px] overflow-hidden rounded-2xl bg-[#f0f4e8]">
              <img
                src={`${selectedProduct.image}`}
                alt={`${selectedProduct.name} product setting`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#163a27]/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#245c3b] shadow-lg">
                  <LuSprout size={24} />
                </div>
              </div>

              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#245c3b]">
                Product preview
              </div>
            </div>

            {/* Product description */}
            <div className="flex flex-col justify-center py-2">
              <span className="mb-3 w-fit rounded-full bg-[#dcefd8] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#286b42]">
                {selectedProduct.badge}
              </span>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                {selectedProduct.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#687168]">
                {selectedProduct.description}
              </p>

              <p className="mt-4 text-xs leading-6 text-[#778074]">
                {selectedProduct.details}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
                >
                  Enquire Now
                  <LuArrowRight size={15} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#85ae91] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eef5e9]"
                >
                  Request Brochure
                  <LuDownload size={15} />
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-2xl bg-[#f5f7ee] p-5 sm:p-6">
              <h3 className="text-sm font-bold text-[#243c30]">
                Product Information
              </h3>

              <ul className="mt-5 space-y-4">
                {selectedProduct.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-xs leading-5 text-[#5d6b5e]"
                  >
                    <LuCircleCheck
                      size={16}
                      className="mt-0.5 shrink-0 text-[#17613c]"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-[#e0e7d8] pt-4 text-[10px] leading-5 text-[#7b8478]">
                Check the current product label for verified benefits and
                permitted uses.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="px-5 pb-12 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 border-b border-[#e2e8dc] pb-8 md:grid-cols-4">
            {[
              {
                icon: LuWheat,
                title: "Suitable Crops",
                description: selectedProduct.crops,
              },
              {
                icon: LuFlaskConical,
                title: "Application Method",
                description: selectedProduct.application,
              },
              {
                icon: LuDroplets,
                title: "Dosage",
                description: selectedProduct.dosage,
              },
              {
                icon: LuPackage,
                title: "Packaging",
                description: selectedProduct.packaging,
              },
            ].map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.title}
                  className="flex items-start gap-3 border-[#e2e8dc] px-2 sm:px-4 md:border-r last:md:border-r-0"
                >
                  <Icon size={25} className="shrink-0 text-[#286b42]" />
                  <div>
                    <h3 className="text-xs font-bold text-[#243c30]">
                      {spec.title}
                    </h3>
                    <p className="mt-1.5 text-[10px] leading-5 text-[#778074] sm:text-xs">
                      {spec.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RELATED PRODUCTS */}
        <section className="px-5 pb-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-white/70 p-4 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <SectionLabel>Explore More</SectionLabel>
                <h2 className="font-display text-2xl text-[#162d42] sm:text-3xl">
                  Related Products
                </h2>
                <p className="mt-2 text-xs leading-5 text-[#778074]">
                  Explore more products from the agricultural range.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous related products"
                  onClick={() =>
                    setRelatedStart(
                      (relatedStart - 1 + products.length - 1) %
                        (products.length - 1),
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8dc] text-[#245c3b] transition hover:bg-[#075332] hover:text-white"
                >
                  <LuChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  aria-label="Next related products"
                  onClick={() =>
                    setRelatedStart((relatedStart + 1) % (products.length - 1))
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8dc] text-[#245c3b] transition hover:bg-[#075332] hover:text-white"
                >
                  <LuChevronRight size={18} />
                </button>
              </div>
            </div>

            <motion.div
              key={relatedStart + selectedProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            >
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={selectProduct}
                />
              ))}
            </motion.div>

            <div className="mt-6 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#85ae91] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eef5e9]"
              >
                Ask About Our Products
                <LuArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* CONSULTATION CTA */}
        <section className="relative isolate overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
          <img
            src={images.crop}
            alt="Sunlit agricultural landscape"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-[#062f20]/35" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto grid max-w-5xl gap-7 rounded-3xl border border-white/70 bg-[#fffef5]/45 p-6 shadow-2xl backdrop-blur-md sm:p-9 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <SectionLabel>Need Help Choosing the Right Product?</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#193c27] sm:text-4xl">
                Get Expert Advice for Your Farming Needs
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-[#687468]">
                Share your crop and agricultural requirements with our team to
                discuss suitable product options and their correct use.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
              >
                Get a Consultation
                <LuArrowRight size={16} />
              </a>
            </div>

            <ul className="grid content-center gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Product information",
                "Application guidance",
                "Crop-specific discussion",
                "Agricultural support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <LuCircleCheck
                    size={17}
                    className="shrink-0 text-[#17613c]"
                  />
                  <span className="text-xs font-medium text-[#465748]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}

function LuTrendingUpIcon() {
  return <LuBadgeCheck size={22} className="text-[#075332]" />;
}
