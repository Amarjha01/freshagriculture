
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import india from "@svg-maps/india";
import {
  FiArrowUpRight,
  FiMapPin,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";
import { LuSprout } from "react-icons/lu";

const services = [
  "Modern farming systems",
  "Agricultural inputs",
  "Project planning & guidance",
  "Technical support",
];

const getStateDescription = (name) =>
  `Explore agricultural solutions and project support available for ${name}. Contact our team to discuss your location, crops and farming goals.`;

export default function IndiaCoverage() {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  const activeState = hoveredState || selectedState;

  const stateNames = useMemo(
    () =>
      [...india.locations]
        .map((location) => location.name)
        .sort((a, b) => a.localeCompare(b)),
    []
  );

  const selectedName = activeState || "Across India";

  return (
    <section
      id="india-coverage"
      className="relative isolate overflow-hidden bg-[#f8f8ef] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      {/* Subtle botanical background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-20 -z-10 h-80 w-80 rounded-full bg-[#dce9cf]/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#e8e8bd]/50 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d6e2d1] bg-white/75 px-4 py-2">
            <FiGlobe className="text-[#176438]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#236b42] sm:text-xs">
              Our Presence
            </span>
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[#173b29] sm:text-5xl lg:text-6xl">
            Growing Across{" "}
            <span className="text-[#267546]">India.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#647064] sm:text-base sm:leading-8">
            Bringing modern farming solutions, agricultural expertise and
            sustainable practices closer to farmers and businesses across India.
          </p>
        </motion.div>

        {/* Main interactive area */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Map panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[2rem] border border-[#e1e7d8] bg-white/65 p-4 shadow-[0_20px_70px_rgba(24,65,40,0.07)] sm:p-7 lg:p-8"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#173b29]">
                  Explore our reach
                </p>
                <p className="mt-1 text-xs text-[#7b8779]">
                  Select a state or union territory
                </p>
              </div>

              <span className="flex shrink-0 items-center gap-2 rounded-full bg-[#e7f2e6] px-3 py-2 text-[10px] font-semibold text-[#236b42] sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#2e8751]" />
                Pan-India
              </span>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <svg
                viewBox={india.viewBox}
                role="group"
                aria-label="Interactive map of India. Select a region to explore agricultural services."
                className="h-auto w-full overflow-visible"
              >
                <defs>
                  <filter
                    id="state-shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="2"
                      floodColor="#174b2e"
                      floodOpacity="0.13"
                    />
                  </filter>
                </defs>

                {india.locations.map((location, index) => {
                  const isActive = activeState === location.name;
                  const isSelected = selectedState === location.name;

                  return (
                    <motion.path
                      key={location.id}
                      d={location.path}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: Math.min(index * 0.008, 0.3),
                      }}
                      fill={
                        isActive
                          ? "#267546"
                          : index % 4 === 0
                            ? "#cbdcbd"
                            : index % 4 === 1
                              ? "#dce8d2"
                              : index % 4 === 2
                                ? "#b9d1ad"
                                : "#e7eddc"
                      }
                      stroke={isActive ? "#124b2d" : "#ffffff"}
                      strokeWidth={isActive ? 1.5 : 1.1}
                      strokeLinejoin="round"
                      filter={isActive ? "url(#state-shadow)" : undefined}
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${location.name}`}
                      aria-pressed={isSelected}
                      className="cursor-pointer outline-none transition-colors duration-200 focus-visible:stroke-[#143f28] focus-visible:stroke-[3]"
                      style={{ transformBox: "fill-box", transformOrigin: "center" }}
                      whileHover={{ scale: 1.025 }}
                      onMouseEnter={() => setHoveredState(location.name)}
                      onMouseLeave={() => setHoveredState(null)}
                      onFocus={() => setHoveredState(location.name)}
                      onBlur={() => setHoveredState(null)}
                      onClick={() => setSelectedState(location.name)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedState(location.name);
                        }
                      }}
                    />
                  );
                })}
              </svg>

              <div className="mt-2 flex items-center justify-center gap-2 text-[10px] text-[#778375] sm:text-xs">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#cbdcbd]" />
                Regions across India
                <span className="mx-1 text-[#d2d9cc]">|</span>
                <span className="h-2.5 w-2.5 rounded-sm bg-[#267546]" />
                Selected region
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] leading-5 text-[#899184]">
              Regional boundaries are illustrative. Confirm local service
              availability with our team.
            </p>
          </motion.div>
            {/* Mobile-friendly selector */}
            <div className="lg:hidden">
              <label
                htmlFor="coverage-state"
                className="mb-2 block text-xs font-semibold text-[#48614d]"
              >
                Or choose a region
              </label>

              <select
                id="coverage-state"
                value={selectedState || ""}
                onChange={(event) =>
                  setSelectedState(event.target.value || null)
                }
                className="min-h-12 w-full rounded-xl border border-[#dce5d6] bg-white px-4 text-sm text-[#234630] outline-none transition focus:border-[#438258] focus:ring-2 focus:ring-[#438258]/15"
              >
                <option value="">All India</option>
                {stateNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          {/* Information panel */}
          <div className="flex flex-col gap-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedName}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-[2rem] bg-[#153d29] p-6 text-white shadow-[0_22px_55px_rgba(18,57,37,0.15)] sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <FiMapPin className="text-xl text-[#b8d99d]" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b8d99d]">
                  {activeState ? "Selected region" : "Our commitment"}
                </p>

                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  {selectedName}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#d5e2d5]">
                  {activeState
                    ? getStateDescription(activeState)
                    : "From farming infrastructure to agricultural inputs, our goal is to help farmers and businesses find practical, sustainable solutions suited to their needs."}
                </p>

                <div className="my-7 h-px bg-white/15" />

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4e6cb]">
                  Explore our solutions
                </p>

                <div className="space-y-3">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 text-sm text-white/90"
                    >
                      <FiCheckCircle className="shrink-0 text-[#b8d99d]" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#eaf2df] px-5 py-3 text-sm font-semibold text-[#173b29] transition duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#153d29] sm:w-auto"
                >
                  Discuss Your Project
                  <FiArrowUpRight className="text-lg" />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Service categories */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: LuSprout, title: "Modern Farming" },
                { icon: FiGlobe, title: "Pan-India Reach" },
              ].map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#e1e7d8] bg-white/70 p-4"
                >
                  <Icon className="mb-3 text-xl text-[#267546]" />
                  <p className="text-sm font-semibold text-[#244832]">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#7a8677]">
                    Sustainable agriculture, built around your needs.
                  </p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
