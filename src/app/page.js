
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowRight,
  LuChevronLeft,
  LuChevronRight,
  LuPlay,
  LuSprout,
  LuLeaf,
  LuHouse,
  LuDroplets,
  LuFish,
  LuFlower2,
  LuTrees,
  LuRabbit,
  LuShieldCheck,
  LuUsers,
  LuHandshake,
  LuTrendingUp,
  LuChartNoAxesCombined,
  LuSettings2,
  LuHeadset,
  LuCircleCheck,
  LuMapPin,
  LuCalendarDays,
  LuQuote,
  LuPhone,
  LuWheat,
  LuFlaskConical,
  LuGlobe,
  LuHeartHandshake,
  LuBadgeCheck,
  LuSun,
  LuBuilding2,
  LuCog,
  LuMenu,
  LuX,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=90",
  farmer: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=90",
  seedling: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85",
  polyhouse: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=85",
  hydroponics: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&w=1000&q=85",
  mushroom: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=1000&q=85",
  aquaculture: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1000&q=85",
  flowers: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
  nursery: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=85",
  livestock: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85",
  irrigation: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85",
  tomatoes: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=1000&q=85",
  capsicum: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1000&q=85",
  field: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=90",
};

const services = [
  {
    title: "Polyhouse Farming",
    description: "Protected cultivation for improved crop management.",
    image: IMAGES.polyhouse,
    icon: LuHouse,
    category: "Protected Farming",
  },
  {
    title: "Hydroponics",
    description: "Soilless farming for better growth and quality.",
    image: IMAGES.hydroponics,
    icon: LuDroplets,
    category: "Modern Farming",
  },
  {
    title: "Mushroom Farming",
    description: "Space-conscious mushroom production systems.",
    image: IMAGES.mushroom,
    icon: LuTrees,
    category: "Specialized Farming",
  },
  {
    title: "Aquaculture",
    description: "Modern fish and shrimp farming systems.",
    image: IMAGES.aquaculture,
    icon: LuFish,
    category: "Allied Farming",
  },
  {
    title: "Floriculture",
    description: "Commercial flower cultivation and planning.",
    image: IMAGES.flowers,
    icon: LuFlower2,
    category: "Horticulture",
  },
  {
    title: "Nursery",
    description: "Quality plants for a greener tomorrow.",
    image: IMAGES.nursery,
    icon: LuSprout,
    category: "Horticulture",
  },
  {
    title: "Goat Farming",
    description: "Livestock farming infrastructure and planning.",
    image: IMAGES.livestock,
    icon: LuRabbit,
    category: "Allied Farming",
  },
  {
    title: "Smart Irrigation",
    description: "Efficient water management with smart technology.",
    image: IMAGES.irrigation,
    icon: LuDroplets,
    category: "Modern Farming",
  },
];

const projects = [
  {
    title: "Polyhouse Tomato Cultivation",
    location: "Telangana",
    category: "Protected Farming",
    image: IMAGES.tomatoes,
  },
  {
    title: "Hydroponic Leafy Greens",
    location: "Hyderabad",
    category: "Modern Farming",
    image: IMAGES.hydroponics,
  },
  {
    title: "Mushroom Cultivation Unit",
    location: "Siddipet",
    category: "Specialized Farming",
    image: IMAGES.mushroom,
  },
  {
    title: "Fish Farming Project",
    location: "Andhra Pradesh",
    category: "Allied Farming",
    image: IMAGES.aquaculture,
  },
  {
    title: "Commercial Floriculture",
    location: "Hyderabad",
    category: "Horticulture",
    image: IMAGES.flowers,
  },
  {
    title: "Plant Nursery Project",
    location: "Siddipet",
    category: "Horticulture",
    image: IMAGES.nursery,
  },
];

const products = [
  {
    name: "Azoto-Green",
    type: "Nitrogen-fixing biofertilizer",
    image: "/images/products/azoto-green.png",
  },
  {
    name: "Phos-Bio",
    type: "Phosphate-mobilizing biofertilizer",
    image: "/images/products/phos-bio.png",
  },
  {
    name: "Potash-Solv",
    type: "Potash-mobilizing solution",
    image: "/images/products/potash-solv.png",
  },
  {
    name: "Root-Max",
    type: "Plant growth promoter",
    image: "/images/products/root-max.png",
  },
  {
    name: "Tricho-Guard",
    type: "Biological crop protection",
    image: "/images/products/tricho-guard.png",
  },
];

const testimonials = [
  {
    quote:
      "The project helped us plan protected cultivation more systematically. Crop management and technical guidance are important parts of building a reliable farming operation.",
    name: "Ramesh Kumar",
    role: "Tomato Farmer",
    location: "Telangana",
    image: IMAGES.farmer,
  },
  {
    quote:
      "Understanding growing conditions, water management, and routine crop monitoring gave us a clearer approach to our farming plans.",
    name: "Suresh Reddy",
    role: "Vegetable Farmer",
    location: "Hyderabad",
    image: IMAGES.seedling,
  },
  {
    quote:
      "Exploring modern farming methods helped us evaluate the practical requirements before making decisions about our next growing season.",
    name: "Anita Sharma",
    role: "Agricultural Entrepreneur",
    location: "Siddipet",
    image: IMAGES.nursery,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understand your goals and requirements.",
    icon: LuUsers,
  },
  {
    number: "02",
    title: "Planning",
    description: "Design the best solution for your land and budget.",
    icon: LuChartNoAxesCombined,
  },
  {
    number: "03",
    title: "Implementation",
    description: "Setup, installation and training support.",
    icon: LuSettings2,
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Technical guidance and farm management.",
    icon: LuSprout,
  },
];

const benefits = [
  {
    icon: LuShieldCheck,
    title: "Advanced Technology",
    text: "Modern and efficient farming systems.",
  },
  {
    icon: LuUsers,
    title: "Expert Guidance",
    text: "Practical agricultural guidance and support.",
  },
  {
    icon: LuLeaf,
    title: "Sustainable Solutions",
    text: "Resource-conscious farming approaches.",
  },
  {
    icon: LuHandshake,
    title: "End-to-End Support",
    text: "From planning to implementation.",
  },
];

const iconButton =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#cbdcc9] bg-white/95 text-[#145b39] shadow-sm transition hover:border-[#075332] hover:bg-[#075332] hover:text-white disabled:cursor-not-allowed disabled:opacity-40";

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

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`mb-2 text-[9px] font-bold uppercase tracking-[0.24em] ${
        light ? "text-[#b9d6a2]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  href = "#",
  light = false,
}) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
        <h2
          className={`font-display text-2xl leading-[1.12] sm:text-3xl ${
            light ? "text-white" : "text-[#172b43]"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-2 max-w-2xl text-[11px] leading-5 ${
              light ? "text-white/75" : "text-[#697286]"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {link && (
        <a
          href={href}
          className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-semibold transition ${
            light
              ? "border-white/40 text-white hover:bg-white hover:text-[#075332]"
              : "border-[#c6d9c7] bg-white/80 text-[#315943] hover:border-[#075332] hover:bg-[#075332] hover:text-white"
          }`}
        >
          {link}
          <LuArrowRight size={13} />
        </a>
      )}
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.a
      variants={fadeUp}
      href="/services"
      className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#edf0e8] bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-[100px] overflow-hidden sm:h-[90px] lg:h-[88px] xl:h-[100px]">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-3 flex h-8 w-8 translate-y-1/2 items-center justify-center rounded-full border border-[#dcebd9] bg-white text-[#17623b] shadow-sm">
          <Icon size={17} strokeWidth={1.9} />
        </span>
      </div>

      <div className="flex flex-1 items-start justify-between gap-2 p-3 pt-5">
        <div className="min-w-0">
          <h3 className="text-[11px] font-bold leading-4 text-[#172b43]">
            {service.title}
          </h3>
          <p className="mt-1 text-[9px] leading-[1.45] text-[#727c85]">
            {service.description}
          </p>
        </div>

        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#91b7a0] text-[#17623b] transition group-hover:bg-[#075332] group-hover:text-white">
          <LuArrowRight size={12} />
        </span>
      </div>
    </motion.a>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      href="/projects"
      className="group min-w-0 overflow-hidden rounded-xl border border-[#edf0e8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-[100px] overflow-hidden sm:h-[105px]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h3 className="line-clamp-2 text-[10px] font-bold leading-4 text-[#172b43]">
          {project.title}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-[9px] text-[#6f7b83]">
          <LuMapPin size={11} className="shrink-0 text-[#17623b]" />
          {project.location}
        </div>
      </div>
    </a>
  );
}

function ProductCard({ product }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <a
      href="/products"
      className="group flex min-w-0 flex-col items-center rounded-xl border border-[#edf0e8] bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex h-[92px] w-full items-center justify-center overflow-hidden rounded-lg bg-[#fbfcf7]">
        {!imageFailed ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain p-1 transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-[#277044]">
            <LuFlaskConical size={27} strokeWidth={1.5} />
            <span className="text-[8px]">Product image</span>
          </div>
        )}
      </div>

      <h3 className="mt-2 text-[10px] font-bold text-[#172b43]">
        {product.name}
      </h3>
      <p className="mt-1 line-clamp-2 text-[9px] leading-4 text-[#727c85]">
        {product.type}
      </p>
    </a>
  );
}

export default function HomePage() {
  const [serviceFilter, setServiceFilter] = useState("All");
  const [projectIndex, setProjectIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showVideoNote, setShowVideoNote] = useState(false);

  const filteredServices =
    serviceFilter === "All"
      ? services
      : services.filter((service) => service.category === serviceFilter);

  const visibleProjects = Array.from({ length: 4 }, (_, index) => {
    return projects[(projectIndex + index) % projects.length];
  });

  const visibleProducts = Array.from({ length: 5 }, (_, index) => {
    return products[(productIndex + index) % products.length];
  });

  const testimonial = testimonials[testimonialIndex];

  function moveProjects(direction) {
    setProjectIndex((current) =>
      (current + direction + projects.length) % projects.length
    );
  }

  function moveProducts(direction) {
    setProductIndex((current) =>
      (current + direction + products.length) % products.length
    );
  }

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">


{/* HERO */}
<section className="relative isolate overflow-y-hidden bg-[#fafaf2]">
  {/* Wide panoramic background image */}



  {/* HERO CONTENT */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={stagger}
    className="relative z-10 mx-auto grid min-h-130 max-w-7xl items-center px-5 py-12 sm:px-8 lg:min-h-150 lg:grid-cols-2 lg:px-12 lg:py-14"
  >
    {/* LEFT CONTENT */}
    <div className="relative z-10 max-w-147.5">
      {/* LEFT DECORATIVE IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    aria-hidden="true"
    className="pointer-events-none absolute -left-40 -top-40 -z-10 h-fit "
  >
    <img
      src="/Images/home-hero-left.png"
      alt=""
      priority
      className="h-full w-full object-"
      sizes=""
    />
  </motion.div>
      <motion.div variants={fadeUp}>
        <Eyebrow>
          Smart Farming · Sustainable Tomorrow
        </Eyebrow>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mt-4 max-w-[570px] font-display text-[clamp(2.65rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-[#172b43]"
      >
        Modern
        <br />
        Agriculture
        <br />
        for a <span className="text-[#126139]">Better</span>
        <br />
        <span className="text-[#126139]">Tomorrow</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-[460px] text-sm leading-6 text-[#657064] sm:text-base sm:leading-7"
      >
        Fresh Agriculture by Green Bio-Tech LLP helps farmers and
        entrepreneurs build successful, sustainable, and technology-driven
        farming systems.
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        variants={fadeUp}
        className="mt-6 flex flex-wrap items-center gap-3"
      >
        <a
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#075332] px-6 py-3 text-xs font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b6941] hover:shadow-lg sm:px-7"
        >
          Get a Free Consultation
          <LuArrowRight size={16} strokeWidth={2} />
        </a>

        <a
          href="/projects"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#a9c8ae] bg-white/85 px-6 py-3 text-xs font-semibold text-[#315943] transition duration-300 hover:-translate-y-0.5 hover:border-[#075332] hover:bg-[#edf4e8] sm:px-7"
        >
          Explore Our Projects
        </a>
      </motion.div>

      {/* STATISTICS */}
      <motion.div
        variants={fadeUp}
        className="mt-8 grid max-w-150 grid-cols-2 gap-x-3 gap-y-5 sm:mt-10 sm:grid-cols-4"
      >
        {[
          {
            icon: LuBadgeCheck,
            value: "3+",
            label: "Years of Experience",
          },
          {
            icon: LuUsers,
            value: "1000+",
            label: "Happy Farmers",
          },
          {
            icon: LuHandshake,
            value: "End-to-End",
            label: "Project Support",
          },
          {
            icon: LuLeaf,
            value: "Sustainable",
            label: "Farming Solutions",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`flex min-w-0 items-start gap-2.5 sm:pr-3 ${
                index !== 3
                  ? "sm:border-r sm:border-[#dfe6d8]"
                  : ""
              }`}
            >
              <Icon
                size={23}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-[#15583b]"
              />

              <div className="min-w-0">
                <p className="wrap-break-word text-[11px] font-bold leading-4 text-[#172b43] sm:text-xs">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-[#707b76]">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>

    {/* RIGHT CONTENT SPACE */}
    <div
    aria-hidden="true"
    className=" min-h-75 hidden sm:block"
    >
      
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    aria-hidden="true"
    className="pointer-events-none absolute  right-0 top-0 z-0 w-[62%]  md:w-[65%] lg:w-[70%] hidden sm:block"
  >
    <img
      src="/Images/home-hero-right.png"
      alt=""
      priority
      className="h-auto w-full object-contain object-bottom "
    />
  </motion.div>
<motion.div 
initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    aria-hidden="true"
className="absolute hidden lg:flex lg:right-20 lg:bottom-60 z-0  items-center gap-3 rounded-2xl bg-[#fafaf2] p-4">

{/* LEFT: Leaf icon + decorative dots */}
<div className="flex shrink-0 flex-col items-center gap-2 text-2xl text-green-700">
  <FaCanadianMapleLeaf />

  <motion.div className="flex flex-col items-center gap-1.5">
  {Array.from({ length: 5 }).map((_, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.7, 1.2, 0.7],
      }}
      transition={{
        delay: index * 0.15,
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="h-1 w-1 rounded-full bg-green-700"
    />
  ))}
</motion.div>
</div>

  {/* RIGHT: Vertical list */}
  <div className="flex flex-col gap-2 uppercase">
    {[
      "Quality Crops",
      "Modern Farming",
      "Sustainable Growth",
      "Green Future",
    ].map((item, index) => (
      <motion.span
        key={item}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="text-xs font-black text-green-700"
      >
        {item}
      </motion.span>
    ))}
  </div>

</motion.div>
    </div>
    
  </motion.div>
</section>



        {/* SERVICES */}
        <section id="services" className="px-4 py-7 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Services"
              title={
                <>
                  Complete Agricultural
                  <br />
                  Solutions <span className="text-[#126139]">Under One Roof</span>
                </>
              }
              description="From modern farming infrastructure to crop advisory and agricultural inputs, explore solutions for farmers, entrepreneurs, and institutions."
              link="View All Services"
              href="/services"
            />

            <div className="mb-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
              {[
                "All",
                "Protected Farming",
                "Modern Farming",
                "Specialized Farming",
                "Allied Farming",
                "Horticulture",
              ].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setServiceFilter(filter)}
                  aria-pressed={serviceFilter === filter}
                  className={`shrink-0 rounded-full border px-3 py-2 text-[9px] font-medium transition ${
                    serviceFilter === filter
                      ? "border-[#075332] bg-[#075332] text-white"
                      : "border-[#e2e9dd] bg-white text-[#315943] hover:bg-[#eff5e9]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <motion.div
              layout
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="relative isolate overflow-hidden bg-[#062f1f]">
          <div className="absolute inset-0 -z-20">
            <img
              src={IMAGES.seedling}
              alt=""
              className="h-full w-full object-cover opacity-35"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#052c1b]/95 via-[#06351f]/90 to-[#062c1b]/70" />

          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-9 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:py-12">
            <div className="max-w-lg">
              <Eyebrow light>Why Choose Fresh Agriculture</Eyebrow>
              <h2 className="font-display text-3xl leading-[1.12] text-white sm:text-4xl">
                Your Partner in
                <br />
                Sustainable Growth
              </h2>
              <p className="mt-3 max-w-md text-xs leading-5 text-white/80">
                We bring together practical agricultural knowledge,
                technology-led solutions, and a farmer-focused approach to
                support better-informed decisions.
              </p>
              <a
                href="/about"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[10px] font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
              >
                Know More About Us
                <LuArrowRight size={13} />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex gap-3 rounded-xl border border-white/15 bg-white/[0.045] p-4 transition hover:bg-white/[0.09]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d8050] text-white">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-[11px] font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-[9px] leading-4 text-white/70">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="px-4 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Real Projects. Real Impact."
              description="Explore agricultural project types and practical farming solutions across different sectors."
              link="View All Projects"
              href="/projects"
            />

            <div className="relative">
              <button
                type="button"
                aria-label="Previous projects"
                onClick={() => moveProjects(-1)}
                className={`absolute -left-3 top-1/2 z-10 -translate-y-1/2 ${iconButton}`}
              >
                <LuChevronLeft size={19} />
              </button>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={`${project.title}-${projectIndex}-${index}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>

              <button
                type="button"
                aria-label="Next projects"
                onClick={() => moveProjects(1)}
                className={`absolute -right-3 top-1/2 z-10 -translate-y-1/2 ${iconButton}`}
              >
                <LuChevronRight size={19} />
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-1.5">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  aria-label={`Show project group ${index + 1}`}
                  onClick={() => setProjectIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    projectIndex === index
                      ? "w-6 bg-[#075332]"
                      : "w-1.5 bg-[#cbd8c8] hover:bg-[#70977b]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="relative px-4 py-7 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <SectionHeading
                eyebrow="Our Process"
                title="From Idea to Harvest"
                description="A structured approach to planning and supporting agricultural projects."
              />

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {processSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.number} className="relative">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8e9d5] bg-[#e9f5e5] text-[#23683f]">
                        <Icon size={19} strokeWidth={1.8} />
                      </span>

                      <p className="mt-3 text-[9px] font-bold text-[#477c53]">
                        {step.number}
                      </p>
                      <h3 className="mt-1 text-[10px] font-bold text-[#172b43]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[9px] leading-4 text-[#727c85]">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="h-[230px] overflow-hidden rounded-[45%_20%_42%_20%] border-4 border-white shadow-xl sm:h-[270px]">
                <img
                  src={IMAGES.seedling}
                  alt="Hands holding a young green plant"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-3 right-0 max-w-[190px] rounded-xl border border-white/80 bg-white/95 p-4 shadow-xl">
                <LuSprout size={21} className="mb-2 text-[#17623b]" />
                <p className="font-display text-lg leading-tight text-[#172b43]">
                  Agriculture for a Greener Planet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="px-4 py-7 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Products"
              title="High-Quality Agricultural Inputs"
              description="Explore the product range for soil health, crop nutrition, plant growth, and crop protection."
              link="View All Products"
              href="/products"
            />

            <div className="relative">
              <button
                type="button"
                aria-label="Previous products"
                onClick={() => moveProducts(-1)}
                className={`absolute -left-3 top-1/2 z-10 -translate-y-1/2 ${iconButton}`}
              >
                <LuChevronLeft size={19} />
              </button>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next products"
                onClick={() => moveProducts(1)}
                className={`absolute -right-3 top-1/2 z-10 -translate-y-1/2 ${iconButton}`}
              >
                <LuChevronRight size={19} />
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-4 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-start gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <Eyebrow>What Farmers Say</Eyebrow>
              <h2 className="font-display text-3xl leading-tight text-[#172b43]">
                Trusted by Farmers
                <br />
                Across India
              </h2>
              <p className="mt-3 text-[11px] leading-5 text-[#697286]">
                Learn about farming experiences, practical considerations,
                and the value of technical guidance.
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setTestimonialIndex(
                      (current) =>
                        (current - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                  className={iconButton}
                >
                  <LuChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() =>
                    setTestimonialIndex(
                      (current) => (current + 1) % testimonials.length
                    )
                  }
                  className={iconButton}
                >
                  <LuChevronRight size={18} />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-[#e9eee3] bg-white p-5 shadow-sm sm:p-6"
              >
                <LuQuote size={27} className="text-[#65b989]" />

                <blockquote className="mt-3 text-sm leading-6 text-[#56645c]">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-5 flex items-center gap-3 border-t border-[#edf0e8] pt-4">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[11px] font-bold text-[#172b43]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-[9px] text-[#758073]">
                      {testimonial.role} · {testimonial.location}
                    </p>
                  </div>
                  <span className="ml-auto rounded-full bg-[#edf5e8] px-2.5 py-1 text-[9px] font-semibold text-[#315943]">
                    Farmer Story
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative isolate overflow-hidden">
          <img
            src={IMAGES.field}
            alt="Agricultural field at sunset"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f8f8ef]/95 via-[#f8f8ef]/90 to-[#f8f8ef]/30" />

          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-12">
            <div>
              <Eyebrow>Let's Grow Together</Eyebrow>
              <h2 className="font-display text-3xl leading-tight text-[#075332] sm:text-4xl">
                Build a Better
                <br />
                Farming Future
              </h2>
              <p className="mt-2 max-w-lg text-xs leading-5 text-[#58675d]">
                Talk to our team about your land, crop, farm infrastructure,
                or agricultural business plans.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#075332] px-5 py-3 text-[10px] font-semibold text-white transition hover:bg-[#0b6941]"
              >
                Get a Call Back
                <LuArrowRight size={14} />
              </a>
            </div>

            <div className="rounded-2xl border border-white/80 bg-white/95 p-5 shadow-xl">
              {[
                "Free Consultation",
                "Customized Solutions",
                "Expert Support",
                "Sustainable Growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2">
                  <LuCircleCheck
                    size={17}
                    className="shrink-0 text-[#17623b]"
                  />
                  <span className="text-[10px] font-medium text-[#315943]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
