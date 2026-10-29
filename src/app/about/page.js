
"use client";

import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuLeaf,
  LuSprout,
  LuTarget,
  LuEye,
  LuShieldCheck,
  LuUsers,
  LuTrendingUp,
  LuHeart,
  LuLightbulb,
  LuHandshake,
  LuDroplets,
  LuSun,
  LuMapPin,
  LuPhone,
  LuMail,
  LuCheck,
  LuChevronLeft,
  LuChevronRight,
  LuFlower2,
  LuBuilding2,
  LuGlobe,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";
import IndiaCoverage from "@/components/sections/IndiaCoverage";
const photos = {
  hero: "/Images/aboutpage-right side.webp",
  heroLeft: "/Images/home-hero-left.png",
  founder: "/team/founder.jpeg",
  director: "/team/director.jpeg",
  production_operations_head: "/team/production_operations_head.jpeg",
  sr_data_analysts_smo: "/team/sr_data_analysts_smo.jpeg",
  fields: "/Images/Golden Sunrise Over Lush Crop Fields.webp",
  greenValley: "/Images/Transparent Green Valley Farm Banner.webp",
  facility1: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=85",
  facility2: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=85",
  facility3: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=85",
  cta: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1800&q=90",
};

const values = [
  {
    icon: LuSprout,
    title: "Sustainability",
    description:
      "Protecting natural resources and encouraging responsible agricultural practices.",
  },
  {
    icon: LuShieldCheck,
    title: "Integrity",
    description:
      "Building relationships through transparency, trust, and responsible engagement.",
  },
  {
    icon: LuLightbulb,
    title: "Innovation",
    description:
      "Exploring useful ideas and technologies for the changing needs of farming.",
  },
  {
    icon: LuUsers,
    title: "Impact",
    description:
      "Creating meaningful value for growers, communities, and the environment.",
  },
];

const milestones = [
  {
    title: "Understand",
    description:
      "Listen to farming challenges and identify the needs of growers and agricultural communities.",
  },
  {
    title: "Explore",
    description:
      "Evaluate suitable products, cultivation approaches, infrastructure, and technologies.",
  },
  {
    title: "Connect",
    description:
      "Bring agricultural requirements together with relevant knowledge and potential solutions.",
  },
  {
    title: "Grow",
    description:
      "Keep learning, improving, and exploring opportunities for a more sustainable future.",
  },
];

const facilities = [
  {
    image: photos.facility1,
    title: "Plant cultivation",
  },
  {
    image: photos.facility2,
    title: "Modern growing",
  },
  {
    image: photos.facility3,
    title: "Agricultural solutions",
  },
];

const stats = [
  { icon: LuTrendingUp, title: "Practical", subtitle: "Farm-focused solutions" },
  { icon: LuUsers, title: "Collaborative", subtitle: "Agricultural partnerships" },
  { icon: LuSprout, title: "Multi-sector", subtitle: "Agriculture & cultivation" },
  { icon: LuHeadphonesIcon, title: "End-to-End", subtitle: "Solution-oriented support" },
];

const services = [
  "Crop & soil solutions",
  "Modern cultivation",
  "Expert guidance",
  "Sustainable practices",
];

function LuHeadphonesIcon(props) {
  return <LuPhone {...props} />;
}



function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-[10px] font-bold uppercase tracking-[0.28em] ${
        light ? "text-[#c9dda8]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}

function LeafBullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      <LuCheck
        size={17}
        className="mt-1 shrink-0 rounded-full bg-[#e0edd7] p-0.5 text-[#356b3c]"
      />
      <span>{children}</span>
    </li>
  );
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#182d24]">

{/* HERO */}
<section className="relative isolate overflow-hidden bg-[#fafaf2]">

 

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto grid min-h-[560px] max-w-7xl items-center px-5 py-12 sm:px-8 sm:py-14 lg:min-h-[600px] lg:grid-cols-2 lg:px-12 lg:py-14">

    {/* LEFT CONTENT */}
          {/* LEFT DECORATIVE IMAGE */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    aria-hidden="true"
    className="pointer-events-none absolute -left-40 -top-40 -z-10 h-fit "
  >
    <img
      src={photos.heroLeft}
      alt=""
      priority
      className="h-full w-full object-"
      sizes=""
    />
  </motion.div>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="relative z-10 max-w-xl"
    >
      {/* BREADCRUMB */}
      <motion.div
        variants={fadeUp}
        className="mb-6 flex items-center gap-2 text-xs text-[#477c53]"
      >
        <a href="/" className="transition hover:underline">
          Home
        </a>
        <LuChevronRight size={13} />
        <span>About Us</span>
      </motion.div>

      {/* EYEBROW */}
      <motion.div variants={fadeUp}>
        <SectionLabel>Our Story</SectionLabel>
      </motion.div>

      {/* HEADING */}
      <motion.h1
        variants={fadeUp}
        className="mt-4 max-w-[570px] font-display text-[clamp(2.65rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-[#172b43]"
      >
        About Us
      </motion.h1>

      {/* SUBHEADING */}
      <motion.h2
        variants={fadeUp}
        className="mt-4 max-w-lg text-xl font-medium leading-snug text-[#243c37] sm:text-2xl"
      >
        Innovation in Agriculture for a Greener, Healthier and More
        Prosperous Tomorrow.
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        variants={fadeUp}
        className="mt-5 max-w-[460px] text-sm leading-6 text-[#657064] sm:text-base sm:leading-7"
      >
        Fresh Agriculture by Green Bio-Tech brings together
        agricultural solutions, practical knowledge, and modern
        farming approaches to support growers and agricultural
        communities.
      </motion.p>

      {/* CTA BUTTON */}
      <motion.div variants={fadeUp} className="mt-7">
        <a
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#075332] px-6 py-3 text-xs font-semibold text-white shadow-md shadow-[#075332]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b6941] hover:shadow-lg sm:px-7"
        >
          Get a Free Consultation
          <LuArrowRight size={16} strokeWidth={2} />
        </a>
      </motion.div>
    </motion.div>

    {/* RIGHT CONTENT */}
 
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
      src={photos.hero}
      alt=""
      priority
      className="h-auto w-full object-contain object-bottom "
    />
  </motion.div>
    </div>

  </div>

  {/* FLOATING METRICS */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay: 0.35 }}
    className="relative z-20 mx-5 mb-6 grid grid-cols-2 gap-x-3 gap-y-5 rounded-2xl border border-[#e5eadf] bg-[#fbfcf3]/95 p-4 shadow-xl shadow-[#243c37]/10 backdrop-blur-md sm:mx-auto sm:mb-8 sm:max-w-4xl sm:grid-cols-4 sm:gap-3 sm:px-6 sm:py-5 lg:mt-[-15px]"
  >
    {[
      {
        icon: LuShieldCheck,
        title: "Responsible",
        subtitle: "Agricultural approach",
      },
      {
        icon: LuUsers,
        title: "Collaborative",
        subtitle: "Grower-focused",
      },
      {
        icon: LuSprout,
        title: "Connected",
        subtitle: "Farming solutions",
      },
      {
        icon: LuLeaf,
        title: "Sustainable",
        subtitle: "Growth mindset",
      },
    ].map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
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
            <p className="wrap-break-word text-[11px] font-bold leading-4 text-[#243c37] sm:text-xs">
              {item.title}
            </p>

            <p className="mt-1 text-[10px] leading-4 text-[#69756a]">
              {item.subtitle}
            </p>
          </div>
        </div>
      );
    })}
  </motion.div>
</section>

<IndiaCoverage />
        {/* WHO WE ARE + LEADERSHIP */}
        <section className="relative isolate px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-20">

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
              >
                <SectionLabel>Who We Are</SectionLabel>

                <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                  Fresh Agriculture
                  <span className="block text-[#28613d]">
                    by Green Bio-Tech
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#687168]">
                  We work across agricultural solutions, crop-support
                  products, modern cultivation approaches, and emerging
                  farming technologies to address changing agricultural needs.
                </p>

                <p className="mt-4 text-sm leading-7 text-[#687168]">
                  Our approach connects practical agricultural knowledge
                  with appropriate solutions, with an emphasis on
                  responsible resource use and the long-term needs of
                  growers and communities.
                </p>

                <a
                  href="#our-journey"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#7eae8c] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
                >
                  Our Journey
                  <LuArrowRight size={15} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[380px]">
                  <img
                    src={photos.farmer}
                    alt="Agricultural cultivation and plant care"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-[#043d27]/40" />

                  <div className="absolute bottom-4 right-4 max-w-[230px] rounded-2xl bg-[#06472e]/95 p-5 text-white shadow-xl sm:bottom-6 sm:right-6 sm:max-w-[250px] sm:p-6">
                    <LuLeaf size={22} className="mb-3 text-[#c6dda5]" />

                    <p className="font-display text-lg leading-snug sm:text-xl">
                      Growing through knowledge, collaboration, and
                      responsible innovation.
                    </p>

                    <div className="mt-4 h-px w-10 bg-[#b5d38f]" />

                    <p className="mt-3 text-[10px] leading-5 text-white/75">
                      Our philosophy
                      <br />
                      Fresh Agriculture by Green Bio-Tech
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Leadership */}
            <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel>Our Leadership</SectionLabel>

                <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                  Guided by Experience.
                  <span className="block">Driven by Purpose.</span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#687168]">
                  Agricultural progress requires a combination of practical
                  understanding, sound decision-making, and a commitment to
                  serving growers and communities.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    image: photos.founder,
                    role: "Founder & Managing Partner",
                    name: "Monu Kimar",
                    description:
                      "Add the verified founder biography, agricultural experience, and professional background here.",
                  },
                  {
                    image: photos.director,
                    role: "Director",
                    name: "Tirtha Mandal",
                    description:
                      "Add the verified partner biography, area of expertise, and responsibilities here.",
                  },
                  {
                    image: photos.production_operations_head,
                    role: "PRODUCTION AND OPERATIONS HEAD",
                    name: "Md. Guphran Ali",
                    description:
                      "Add the verified partner biography, area of expertise, and responsibilities here.",
                  },
                  {
                    image: photos.sr_data_analysts_smo,
                    role: "Sr.DATA ANALYSIS/SMO",
                    name: "Suraj Singh Mahar",
                    description:
                      "Add the verified partner biography, area of expertise, and responsibilities here.",
                  },
                ].map((person, index) => (
                  <motion.article
                    key={person.role}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    className="min-w-0 rounded-2xl bg-white/80 p-2 shadow-sm sm:p-3"
                  >
                    <div className="h-36 overflow-hidden rounded-xl sm:h-48">
                      <img
                        src={person.image}
                        alt={person.role}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-2 sm:p-3">
                      <p className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold leading-5 text-[#2d6742] sm:text-xs">
                        {person.role}
                        <LuLeaf size={13} />
                      </p>

                      <h3 className="mt-2 text-sm font-bold text-[#243c37] sm:text-base">
                        {person.name}
                      </h3>

                      <p className="mt-2 text-[10px] leading-5 text-[#748074] sm:text-xs sm:leading-6">
                        {person.description}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Mission and vision */}
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[1.5rem] bg-[#eef4e5] p-6 sm:p-8"
              >
                <LuTarget className="absolute right-5 top-5 h-14 w-14 text-[#327548]/80 sm:right-7 sm:top-7 sm:h-16 sm:w-16" />

                <SectionLabel>Our Mission</SectionLabel>

                <h3 className="max-w-sm pr-12 font-display text-2xl leading-tight text-[#193c27] sm:text-3xl">
                  Empowering Farmers with Better Solutions
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-[#687468]">
                  To connect growers with appropriate products, practical
                  guidance, and modern agricultural approaches that support
                  informed decisions and responsible farming.
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-[1.5rem] bg-[#fbf2df] p-6 sm:p-8"
              >
                <LuEye className="absolute right-5 top-5 h-14 w-14 text-[#327548]/80 sm:right-7 sm:top-7 sm:h-16 sm:w-16" />

                <SectionLabel>Our Vision</SectionLabel>

                <h3 className="max-w-sm pr-12 font-display text-2xl leading-tight text-[#193c27] sm:text-3xl">
                  A Greener, Healthier Future for Generations
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-[#687468]">
                  To contribute to a resilient agricultural ecosystem through
                  responsible practices, useful innovation, and better
                  connections between people and solutions.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        {/* FULL-WIDTH STATS STRIP */}
        <section className="relative isolate overflow-hidden py-9 sm:py-11">
          <img
            src={photos.fields}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 -z-10 bg-[#063b27]/45" />

          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-5 sm:px-8 md:grid-cols-4 lg:px-12">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="flex items-center gap-3 border-white/20 sm:gap-4 md:border-r md:pr-4 last:md:border-r-0"
                >
                  <Icon
                    size={30}
                    className="shrink-0 text-[#d2e7b5] sm:h-9 sm:w-9"
                  />
                  <div>
                    <p className="text-sm font-bold text-white sm:text-base">
                      {stat.title}
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-white/70 sm:text-xs">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* VALUES */}
        <section className="relative isolate px-5 py-16 sm:px-8 sm:py-20 lg:px-12">

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <SectionLabel>Our Values</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                Principles That Drive Us Forward
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#778074]">
                Our values guide how we approach solutions, work with
                partners, and build relationships with agricultural
                communities.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-y-9 md:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.article
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`px-4 text-center sm:px-7 ${
                      index % 2 === 0 ? "" : "border-l border-[#e2e8dc]"
                    } md:border-l md:border-[#e2e8dc] md:first:border-l-0`}
                  >
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d7e8ca] bg-[#eaf3e2] text-[#286b42]">
                      <Icon size={27} />
                    </span>

                    <h3 className="mt-4 text-sm font-bold text-[#243c37] sm:text-base">
                      {value.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[230px] text-xs leading-5 text-[#778074] sm:text-sm sm:leading-6">
                      {value.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* JOURNEY / TIMELINE */}
        <section
          id="our-journey"
          className="relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
        >
          <div className="absolute inset-x-0 bottom-0 -z-20 h-full ">
            <img
              src={photos.greenValley}
              alt="Transparent Green Valley Farm Banner"
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Our Journey</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                From a Simple Vision to a Growing Impact
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#687168]">
                Our journey is shaped by the evolving needs of agriculture.
                We continue to explore practical solutions, learn from
                agricultural communities, and look for opportunities to
                support more responsible farming practices.
              </p>

              <a
                href="/services"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
              >
                Know More About Us
                <LuArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-0"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  variants={{
                    hidden: { opacity: 0, x: 15 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="relative flex gap-4 pb-7 last:pb-0"ḥ
                >
                  {index !== milestones.length - 1 && (
                    <span className="absolute bottom-0 left-[7px] top-4 w-px bg-[#a8c8a1]" />
                  )}

                  <span className="relative mt-1.5 h-4 w-4 shrink-0 rounded-full border-4 border-[#d6e7cf] bg-[#2e7548]" />

                  <div>
                    <h3 className="text-sm font-bold text-[#263c30]">
                      {milestone.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-6 text-[#6b7569] sm:text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FACILITIES GALLERY */}
        <section className="border-y border-[#e7e8dd] bg-[#fffef9]/90 px-5 py-12 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Our Presence</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42]">
                Our Facilities & Working Approach
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#687168]">
                Explore the kinds of cultivation environments and
                agricultural practices that inform our work. Replace these
                sample images with verified photographs of your actual
                facilities, projects, and operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 sm:gap-">
              {facilities.map((facility, index) => (
                <motion.figure
                  key={facility.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-xl"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-xl sm:aspect-[4/3]">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-2 text-center text-[10px] font-medium text-[#506453] sm:text-xs">
                    {facility.title}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTO CTA */}
        <section className="relative isolate overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
          <img
            src={photos.cta}
            alt="Sunlit agricultural landscape"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-[#092f20]/30" />

          <div className="mx-auto flex max-w-7xl justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="grid w-full max-w-4xl gap-7 rounded-[1.5rem] border border-white/70 bg-[#fffef5]/95 p-6 shadow-2xl backdrop-blur-md sm:p-9 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-10"
            >
              <div>
                <SectionLabel>Let's Grow Together</SectionLabel>

                <h2 className="font-display text-3xl leading-tight text-[#193c27] sm:text-4xl">
                  Ready to Build a Better Future in Agriculture?
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#687468]">
                  Tell us about your agricultural requirements and explore
                  suitable solutions with our team.
                </p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
                >
                  Get a Consultation
                  <LuArrowRight size={16} />
                </a>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {services.map((service) => (
                  <LeafBullet key={service}>{service}</LeafBullet>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
