
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuArrowRight,
  LuChevronRight,
  LuChevronDown,
  LuLeaf,
  LuSprout,
  LuFlaskConical,
  LuChartNoAxesCombined,
  LuWarehouse,
  LuUsers,
  LuHandshake,
  LuSettings,
  LuMapPin,
  LuClock,
  LuBriefcaseBusiness,
  LuGraduationCap,
  LuSearch,
  LuRotateCcw,
  LuBuilding2,
  LuClipboardCheck,
  LuUserRoundCheck,
  LuMessageCircle,
  LuBadgeCheck,
  LuSend,
  LuHeart,
  LuMail,
  LuCalendarDays,
  LuFileText,
  LuX,
  LuSlidersHorizontal,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";
import { GoCheckCircle } from "react-icons/go";

const images = {
  hero:"/Images/careerpage-right.webp",
  hands:"/Images/Nurturing Seedlings in Golden Light.webp",
  agronomy:"",
  research:"",
  production:"",
  sales:"",
  operations:"",
  administration:"",
};

const departments = [
  {
    name: "Agronomy & Field Operations",
    shortName: "Agronomy & Field Operations",
    image: images.agronomy,
    icon: LuSprout,
    openings: 8,
  },
  {
    name: "Research & Development",
    shortName: "Research & Development",
    image: images.research,
    icon: LuFlaskConical,
    openings: 5,
  },
  {
    name: "Production & Quality Control",
    shortName: "Production & Quality Control",
    image: images.production,
    icon: LuBadgeCheck,
    openings: 6,
  },
  {
    name: "Sales & Business Development",
    shortName: "Sales & Business Development",
    image: images.sales,
    icon: LuChartNoAxesCombined,
    openings: 6,
  },
  {
    name: "Operations & Logistics",
    shortName: "Operations & Logistics",
    image: images.operations,
    icon: LuWarehouse,
    openings: 4,
  },
  {
    name: "Administration & Support",
    shortName: "Administration & Support",
    image: images.administration,
    icon: LuBuilding2,
    openings: 3,
  },
];

const jobs = [
  {
    id: 1,
    title: "Agronomist (Field Executive)",
    department: "Agronomy & Field Operations",
    location: "Telangana",
    experience: "0–3 Years",
    type: "Full Time",
    icon: LuSprout,
    description:
      "Support field activities, crop observations, farmer interactions, and agricultural project implementation.",
  },
  {
    id: 2,
    title: "Greenhouse Production Manager",
    department: "Production & Quality Control",
    location: "Hyderabad",
    experience: "3–5 Years",
    type: "Full Time",
    icon: LuBuilding2,
    description:
      "Coordinate greenhouse production operations, crop planning, quality checks, and team activities.",
  },
  {
    id: 3,
    title: "Research Associate (Plant Sciences)",
    department: "Research & Development",
    location: "Hyderabad",
    experience: "0–2 Years",
    type: "Full Time",
    icon: LuFlaskConical,
    description:
      "Assist with plant-science research, observations, trials, documentation, and technical reporting.",
  },
  {
    id: 4,
    title: "Sales Executive (Agricultural Products)",
    department: "Sales & Business Development",
    location: "Multiple Locations",
    experience: "1–4 Years",
    type: "Full Time",
    icon: LuChartNoAxesCombined,
    description:
      "Build customer relationships, understand agricultural requirements, and support product enquiries.",
  },
  {
    id: 5,
    title: "Quality Control Technician",
    department: "Production & Quality Control",
    location: "Siddipet",
    experience: "0–3 Years",
    type: "Full Time",
    icon: LuBadgeCheck,
    description:
      "Assist with quality checks, records, process compliance, and product documentation.",
  },
  {
    id: 6,
    title: "Warehouse & Logistics Coordinator",
    department: "Operations & Logistics",
    location: "Siddipet",
    experience: "1–3 Years",
    type: "Full Time",
    icon: LuWarehouse,
    description:
      "Coordinate stock records, dispatch planning, inventory movement, and logistics documentation.",
  },
  {
    id: 7,
    title: "Administrative Executive",
    department: "Administration & Support",
    location: "Hyderabad",
    experience: "1–3 Years",
    type: "Full Time",
    icon: LuBuilding2,
    description:
      "Support office administration, scheduling, documentation, and internal coordination.",
  },
  {
    id: 8,
    title: "Field Research Assistant",
    department: "Research & Development",
    location: "Telangana",
    experience: "Fresher",
    type: "Full Time",
    icon: LuFlaskConical,
    description:
      "Support field trials, collect observations, maintain records, and assist the research team.",
  },
  {
    id: 9,
    title: "Agricultural Business Development Executive",
    department: "Sales & Business Development",
    location: "Multiple Locations",
    experience: "2–5 Years",
    type: "Full Time",
    icon: LuChartNoAxesCombined,
    description:
      "Develop business relationships, follow up on enquiries, and coordinate agricultural sales opportunities.",
  },
  {
    id: 10,
    title: "Field Operations Assistant",
    department: "Agronomy & Field Operations",
    location: "Telangana",
    experience: "Fresher",
    type: "Full Time",
    icon: LuSprout,
    description:
      "Assist with field visits, project records, crop observations, and farmer communication.",
  },
  {
    id: 11,
    title: "Inventory Coordinator",
    department: "Operations & Logistics",
    location: "Siddipet",
    experience: "0–2 Years",
    type: "Full Time",
    icon: LuWarehouse,
    description:
      "Maintain inventory records, coordinate stock movements, and support warehouse operations.",
  },
  {
    id: 12,
    title: "Office & Documentation Assistant",
    department: "Administration & Support",
    location: "Hyderabad",
    experience: "Fresher",
    type: "Full Time",
    icon: LuBuilding2,
    description:
      "Help maintain records, prepare documents, and support day-to-day office coordination.",
  },
];

const benefits = [
  {
    icon: LuSprout,
    title: "Purpose-Driven Work",
    description: "Contribute to sustainable agriculture and food security.",
  },
  {
    icon: LuLeaf,
    title: "Learning & Development",
    description: "Gain practical experience and grow your skills.",
  },
  {
    icon: LuUsers,
    title: "Collaborative Culture",
    description: "Work with passionate and supportive teams.",
  },
  {
    icon: LuChartNoAxesCombined,
    title: "Career Progression",
    description: "Explore opportunities to take on new responsibilities.",
  },
];

const hiringSteps = [
  {
    number: "01",
    icon: LuFileText,
    title: "Apply",
    description: "Submit your application with an updated resume.",
  },
  {
    number: "02",
    icon: LuUserRoundCheck,
    title: "Screening",
    description: "Our team reviews your profile and experience.",
  },
  {
    number: "03",
    icon: LuMessageCircle,
    title: "Interview",
    description:
      "Technical and HR discussion, with field or functional experts where relevant.",
  },
  {
    number: "04",
    icon: GoCheckCircle,
    title: "Selection",
    description: "Successful candidates receive the next steps.",
  },
];

const careerBenefits = [
  { icon: LuSprout, title: "Work on Real Projects" },
  { icon: LuSettings, title: "Exposure to Modern Technology" },
  { icon: LuLeaf, title: "Field and Practical Learning" },
  { icon: LuUsers, title: "Supportive and Inclusive Team" },
];

const experienceOptions = [
  "All Levels",
  "Fresher",
  "0–2 Years",
  "0–3 Years",
  "1–3 Years",
  "1–4 Years",
  "2–5 Years",
  "3–5 Years",
];

const locations = [
  "All Locations",
  "Telangana",
  "Hyderabad",
  "Siddipet",
  "Multiple Locations",
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
  visible: { transition: { staggerChildren: 0.065 } },
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


function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-medium text-[#273a30]">
        {label}
      </span>

      <span className="relative block">
        <select
          value={value}
          onChange={onChange}
          className="h-10 w-full appearance-none rounded-lg border border-[#e0e5dd] bg-white px-3 pr-8 text-[11px] text-[#53616d] outline-none transition focus:border-[#6c9b77] focus:ring-2 focus:ring-[#6c9b77]/10"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <LuChevronDown
          size={14}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#526358]"
        />
      </span>
    </label>
  );
}

function DepartmentCard({ department, active, onClick }) {
  const Icon = department.icon;

  return (
    <motion.button
      variants={fadeUp}
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group min-w-0 overflow-hidden rounded-xl border text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        active
          ? "border-[#075332] bg-[#075332] text-white"
          : "border-[#edf0e8] bg-white/90 text-[#1d3026]"
      }`}
    >
      <div className="relative h-[90px] overflow-hidden sm:h-[105px]">
        <img
          src={department.image}
          alt={department.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      <div className="p-3">
        <div
          className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${
            active
              ? "bg-white/15 text-white"
              : "bg-[#e7f4e5] text-[#17623b]"
          }`}
        >
          <Icon size={17} />
        </div>

        <h3 className="min-h-8 text-[10px] font-bold leading-4 sm:text-[11px]">
          {department.shortName}
        </h3>

        <div className="mt-2 flex items-center justify-between gap-1">
          <span
            className={`text-[9px] ${
              active ? "text-white/80" : "text-[#498260]"
            }`}
          >
            {department.openings} Openings
          </span>

          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
              active
                ? "border-white/60 text-white"
                : "border-[#8db69a] text-[#286b42] group-hover:bg-[#075332] group-hover:text-white"
            }`}
          >
            <LuArrowRight size={13} />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

function JobRow({ job, onApply }) {
  const Icon = job.icon;

  return (
    <motion.article
      layout
      variants={fadeUp}
      className="flex flex-col gap-3 border-b border-[#edf0e8] py-3.5 last:border-b-0 sm:flex-row sm:items-center sm:gap-3"
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e2f6e6] text-[#147346]">
          <Icon size={21} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xs font-bold leading-5 text-[#1b2c43]">
            {job.title}
          </h3>

          <p className="mt-0.5 text-[10px] text-[#788191]">
            {job.department}
          </p>

          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-[9px] text-[#657083] sm:gap-x-4">
            <span className="inline-flex items-center gap-1">
              <LuMapPin size={12} />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <LuCalendarDays size={12} />
              {job.experience}
            </span>
            <span className="inline-flex items-center gap-1">
              <LuClock size={12} />
              {job.type}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onApply(job)}
        className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#075332] px-4 py-2.5 text-[10px] font-semibold text-white transition hover:bg-[#0b6941] sm:self-center"
      >
        Apply Now
        <LuArrowRight size={13} />
      </button>
    </motion.article>
  );
}

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [experience, setExperience] = useState("All Levels");
  const [jobType, setJobType] = useState("All Types");
  const [location, setLocation] = useState("All Locations");
  const [activeDepartment, setActiveDepartment] = useState("");
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query);

      const matchesDepartment =
        department === "All Departments" ||
        job.department === department;

      const matchesCard =
        !activeDepartment || job.department === activeDepartment;

      const matchesExperience =
        experience === "All Levels" ||
        job.experience === experience ||
        (experience === "Fresher" && job.experience === "Fresher");

      const matchesType = jobType === "All Types" || job.type === jobType;

      const matchesLocation =
        location === "All Locations" || job.location === location;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesCard &&
        matchesExperience &&
        matchesType &&
        matchesLocation
      );
    });
  }, [search, department, experience, jobType, location, activeDepartment]);

  const visibleJobs = showAllJobs ? filteredJobs : filteredJobs.slice(0, 5);

  function resetFilters() {
    setSearch("");
    setDepartment("All Departments");
    setExperience("All Levels");
    setJobType("All Types");
    setLocation("All Locations");
    setActiveDepartment("");
    setShowAllJobs(false);
  }

  function selectDepartment(name) {
    setActiveDepartment((current) => (current === name ? "" : name));
    setDepartment("All Departments");
    setShowAllJobs(false);
  }

  function openApplication(job) {
    setSelectedJob(job);
    setApplicant((current) => ({
      ...current,
      message: job ? `I am interested in the ${job.title} position.` : "",
    }));
  }

  function handleApplicationSubmit(event) {
    event.preventDefault();

    const subject = selectedJob
      ? `Job Application: ${selectedJob.title}`
      : "General Career Application";

    const body = [
      `Name: ${applicant.name}`,
      `Email: ${applicant.email}`,
      `Phone: ${applicant.phone}`,
      `Position: ${selectedJob?.title || "General Application"}`,
      `Resume link: ${applicant.resume || "Not provided"}`,
      "",
      "Message:",
      applicant.message,
    ].join("\n");

    window.location.href = `mailto:freshagriculturebygreenbiotech@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
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
          

          <div className="mx-auto grid min-h-[330px] max-w-7xl items-center gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[340px] lg:grid-cols-[1fr_0.9fr] lg:px-12">
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
                <span>Careers</span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <SectionLabel>Grow Your Career With Us</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl leading-[1.04] tracking-tight text-[#152a43] sm:text-5xl lg:text-6xl"
              >
                Be a Part of a
                <span className="block text-[#075332]">Greener Future</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-xs leading-6 text-[#657064] sm:text-sm sm:leading-7 backdrop-blur-xs rounded-lg"
              >
                Join our team and contribute to building a sustainable
                agriculture ecosystem. Work on meaningful projects, learn
                from others, and help create a positive impact in agriculture.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-5 flex flex-wrap gap-3"
              >
                <a
                  href="#open-positions"
                  className="inline-flex items-center gap-3 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-[#075332]/10 transition hover:bg-[#0b6941]"
                >
                  View Open Positions
                  <LuArrowRight size={15} />
                </a>

                <a
                  href="#why-join"
                  className="inline-flex items-center gap-2 rounded-full border border-[#8db69a] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#edf4e8]"
                >
                  <LuPlayIcon />
                  Life at Fresh Agriculture
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

        {/* CAREER BENEFITS */}
        <section className="px-4 py-3 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-2 rounded-2xl border border-[#e9eedf] bg-[#f1f6e9]/90 p-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-4"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  className={`flex items-center gap-3 px-2 py-2 sm:px-3 lg:px-4 ${
                    index !== benefits.length - 1
                      ? "lg:border-r lg:border-[#d5e3ce]"
                      : ""
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dff3df] text-[#17623b]">
                    <Icon size={24} />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold text-[#20382a]">
                      {benefit.title}
                    </span>
                    <span className="mt-1 block text-[10px] leading-4 text-[#778074]">
                      {benefit.description}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* DEPARTMENT CARDS */}
        <section className="px-4 pb-5 pt-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>Explore Opportunities</SectionLabel>

            <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
              Career Opportunities Across Different Areas
            </h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6"
            >
              {departments.map((item) => (
                <DepartmentCard
                  key={item.name}
                  department={item}
                  active={activeDepartment === item.name}
                  onClick={() => selectDepartment(item.name)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* JOB FILTERS + OPENINGS */}
        <section
          id="open-positions"
          className="relative isolate px-4 pb-8 pt-1 sm:px-8 lg:px-12"
        >

          <div className="relative mx-auto grid max-w-7xl items-start gap-4 lg:grid-cols-[200px_1fr] xl:grid-cols-[220px_1fr]">
            {/* Filters */}
            <aside className="rounded-2xl border border-[#edf0e8] bg-[#f2f7ed]/90 p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-2">
                <h3 className="font-display text-xl text-[#162d42]">
                  Filter Jobs
                </h3>
                <LuSlidersHorizontal
                  size={17}
                  className="text-[#477c53]"
                />
              </div>

              <label className="mb-4 block">
                <span className="sr-only">Search job title</span>
                <span className="flex h-10 items-center gap-2 rounded-lg border border-[#e0e5dd] bg-white px-3">
                  <LuSearch size={14} className="text-[#498260]" />
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search Job Title"
                    className="w-full min-w-0 bg-transparent text-[10px] outline-none placeholder:text-[#9ba2b1]"
                  />
                </span>
              </label>

              <div className="space-y-3">
                <SelectField
                  label="Department"
                  value={department}
                  onChange={(event) => {
                    setDepartment(event.target.value);
                    setActiveDepartment("");
                  }}
                  options={[
                    "All Departments",
                    ...departments.map((item) => item.name),
                  ]}
                />

                <SelectField
                  label="Experience Level"
                  value={experience}
                  onChange={(event) => setExperience(event.target.value)}
                  options={experienceOptions}
                />

                <SelectField
                  label="Job Type"
                  value={jobType}
                  onChange={(event) => setJobType(event.target.value)}
                  options={["All Types", "Full Time", "Part Time", "Contract"]}
                />

                <SelectField
                  label="Location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  options={locations}
                />
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#e8f4e6] px-3 py-2.5 text-[10px] font-semibold text-[#286b42] transition hover:bg-[#d9ebd6]"
              >
                <LuRotateCcw size={13} />
                Reset Filters
              </button>
            </aside>

            {/* Listings */}
            <div className="min-w-0 rounded-2xl border border-[#edf0e8] bg-white/90 p-4 shadow-sm sm:p-5">
              <div className="mb-2 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl text-[#162d42]">
                    Current Openings
                  </h2>
                  <p className="mt-1 text-[10px] text-[#899184]">
                    Find a role that matches your skills and interests.
                  </p>
                </div>

                <span className="text-[9px] text-[#899184]">
                  Showing {filteredJobs.length ? 1 : 0}–
                  {Math.min(visibleJobs.length, filteredJobs.length)} of{" "}
                  {filteredJobs.length} positions
                </span>
              </div>

              <motion.div layout>
                <AnimatePresence mode="popLayout">
                  {visibleJobs.map((job) => (
                    <JobRow
                      key={job.id}
                      job={job}
                      onApply={openApplication}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredJobs.length === 0 && (
                <div className="py-12 text-center">
                  <LuSearch
                    size={28}
                    className="mx-auto text-[#6b9675]"
                  />
                  <h3 className="mt-3 font-display text-xl text-[#162d42]">
                    No matching roles
                  </h3>
                  <p className="mt-2 text-xs text-[#778074]">
                    Try changing the filters or searching for another role.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-4 rounded-full bg-[#075332] px-5 py-2.5 text-xs font-semibold text-white"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {filteredJobs.length > 5 && (
                <div className="flex justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAllJobs((current) => !current)}
                    className="inline-flex items-center gap-3 rounded-full border border-[#70a484] px-6 py-2.5 text-[10px] font-semibold text-[#245c3b] transition hover:bg-[#edf4e8]"
                  >
                    {showAllJobs ? "Show Fewer Openings" : "View More Openings"}
                    <LuArrowRight
                      size={13}
                      className={showAllJobs ? "rotate-180" : ""}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section id="why-join" className="relative isolate overflow-hidden">
          <img
            src={images.hands}
            alt="Hands nurturing a young plant"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff8e8]/10 via-[#fff8e8]/90 to-[#fff8e8]/95" />

          <div className="mx-auto grid max-w-7xl items-center gap-5 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.85fr_1fr] lg:px-12">
            <div className="relative z-10">
              <SectionLabel>Why Join Us</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                More Than a Job,
                <span className="block">A Meaningful Career</span>
              </h2>

              <p className="mt-3 max-w-lg text-xs leading-5 text-[#5f6b62]">
                Be part of a team working toward healthier crops, better
                agricultural practices, and more sustainable farming.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {careerBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/80 p-3 backdrop-blur-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e0f5df] text-[#286b42]">
                      <Icon size={19} />
                    </span>
                    <span className="text-[10px] font-medium leading-4 text-[#35473a]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HIRING PROCESS */}
        <section className="px-4 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <SectionLabel>Our Hiring Process</SectionLabel>
              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                Simple, Transparent and Fair
              </h2>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {hiringSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative flex items-start gap-3"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ddf5df] text-[#17623b]">
                      <Icon size={21} />
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#477c53]">
                          {step.number}
                        </span>
                        <h3 className="text-xs font-bold text-[#20382a]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-[10px] leading-4 text-[#778074]">
                        {step.description}
                      </p>
                    </div>

                    {index !== hiringSteps.length - 1 && (
                      <LuArrowRight
                        size={17}
                        className="absolute right-1 top-3 hidden text-[#76a985] lg:block"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RESUME CTA */}
        <section className="px-4 pb-7 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl border border-[#e6eddb] bg-[#f0f6e8]/95 p-5 sm:flex-row sm:items-center sm:p-6 lg:gap-8">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#dcf3db] text-[#17623b]">
              <LuSprout size={34} />
            </span>

            <div className="min-w-0 flex-1">
              <h2 className="font-display text-2xl leading-tight text-[#162d42] sm:text-3xl">
                Don’t See a Suitable Role?
              </h2>
              <p className="mt-2 max-w-xl text-xs leading-5 text-[#778074]">
                We welcome interest from people passionate about agriculture.
                Share your profile for consideration when a suitable
                opportunity becomes available.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openApplication(null)}
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
            >
              Send Your Resume
              <LuArrowRight size={15} />
            </button>
          </div>
        </section>

        {/* APPLICATION MODAL */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#061a11]/80 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={(event) => event.stopPropagation()}
                className="relative my-auto w-full max-w-lg rounded-2xl border border-[#e8eee2] bg-[#fffef8] p-5 shadow-2xl sm:p-7"
              >
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  aria-label="Close application form"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4e8] text-[#245c3b] transition hover:bg-[#dcebd7]"
                >
                  <LuX size={18} />
                </button>

                <SectionLabel>Join Our Team</SectionLabel>
                <h2 className="pr-8 font-display text-3xl text-[#162d42]">
                  {selectedJob ? "Apply for This Role" : "Share Your Resume"}
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#778074]">
                  {selectedJob
                    ? selectedJob.title
                    : "Tell us a little about yourself and your interests."}
                </p>

                <form onSubmit={handleApplicationSubmit} className="mt-5 space-y-3">
                  <label className="block">
                    <span className="mb-1 block text-[11px] font-semibold text-[#1c2b43]">
                      Full Name *
                    </span>
                    <input
                      required
                      value={applicant.name}
                      onChange={(event) =>
                        setApplicant({
                          ...applicant,
                          name: event.target.value,
                        })
                      }
                      placeholder="Your full name"
                      className="h-10 w-full rounded-lg border border-[#dfe3e7] bg-white px-3 text-xs outline-none focus:border-[#4d9b71]"
                    />
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 block text-[11px] font-semibold text-[#1c2b43]">
                        Email Address *
                      </span>
                      <input
                        type="email"
                        required
                        value={applicant.email}
                        onChange={(event) =>
                          setApplicant({
                            ...applicant,
                            email: event.target.value,
                          })
                        }
                        placeholder="you@example.com"
                        className="h-10 w-full rounded-lg border border-[#dfe3e7] bg-white px-3 text-xs outline-none focus:border-[#4d9b71]"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1 block text-[11px] font-semibold text-[#1c2b43]">
                        Phone Number *
                      </span>
                      <input
                        type="tel"
                        required
                        value={applicant.phone}
                        onChange={(event) =>
                          setApplicant({
                            ...applicant,
                            phone: event.target.value,
                          })
                        }
                        placeholder="+91"
                        className="h-10 w-full rounded-lg border border-[#dfe3e7] bg-white px-3 text-xs outline-none focus:border-[#4d9b71]"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1 block text-[11px] font-semibold text-[#1c2b43]">
                      Resume Link (optional)
                    </span>
                    <input
                      type="url"
                      value={applicant.resume}
                      onChange={(event) =>
                        setApplicant({
                          ...applicant,
                          resume: event.target.value,
                        })
                      }
                      placeholder="Link to your resume"
                      className="h-10 w-full rounded-lg border border-[#dfe3e7] bg-white px-3 text-xs outline-none focus:border-[#4d9b71]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-[11px] font-semibold text-[#1c2b43]">
                      Message
                    </span>
                    <textarea
                      rows={3}
                      value={applicant.message}
                      onChange={(event) =>
                        setApplicant({
                          ...applicant,
                          message: event.target.value,
                        })
                      }
                      placeholder="Briefly introduce yourself..."
                      className="w-full resize-y rounded-lg border border-[#dfe3e7] bg-white px-3 py-2.5 text-xs outline-none focus:border-[#4d9b71]"
                    />
                  </label>

                  <p className="text-[10px] leading-4 text-[#899184]">
                    Submitting opens your email application with these details.
                    No resume file is uploaded by this form.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#075332] px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
                  >
                    Continue to Email
                    <LuSend size={15} />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </SiteShell>
  );
}

function LuPlayIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e3f2e2] text-[#17623b]">
      <span className="ml-0.5 block h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-current" />
    </span>
  );
}
