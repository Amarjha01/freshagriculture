"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LuLeaf,
  LuCrown,
  LuBriefcaseBusiness,
  LuSettings2,
  LuMonitor,
  LuHardHat,
  LuArrowUpRight,
  LuSparkles,
} from "react-icons/lu";
import { AnimatePresence } from "framer-motion";
import { LuX } from "react-icons/lu";
/* --------------------------------
   ANIMATED CONNECTORS
--------------------------------- */

function PairConnector() {
  return (
    <>
      {/* Desktop: two parents join one central child */}
      <motion.svg
        viewBox="0 0 1000 90"
        preserveAspectRatio="none"
        className="hidden h-[90px] w-full overflow-visible sm:block"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M250 0 V30 H500 V90 M750 0 V30 H500"
          stroke="#7FAE86"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <motion.circle
          cx="500"
          cy="30"
          r="4"
          fill="#4C9561"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        />
      </motion.svg>

      {/* Mobile connector */}
      <div className="mx-auto h-10 w-px bg-[#7FAE86] sm:hidden" />
    </>
  );
}

function SingleConnector() {
  return (
    <div className="flex h-16 justify-center" aria-hidden="true">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-full w-[2px] origin-top rounded-full bg-[#7FAE86]"
      />
    </div>
  );
}

/* --------------------------------
   LEADERSHIP PROFILE CARD
--------------------------------- */




function LeaderCard({
  person,
  icon: Icon,
  index = 0,
  featured = false,
}) {
  const [flipped, setFlipped] = useState(false);

  if (!person) return null;

  const expertise = person.expertise || [];

  const details = [
    { label: "Department", value: person.department },
    { label: "Experience", value: person.experience },
    { label: "Email", value: person.email },
    { label: "Phone", value: person.phone },
    { label: "Location", value: person.location },
    { label: "Education", value: person.education },
    { label: "Joining Date", value: person.joiningDate },
  ].filter((item) => item.value);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
        rotateY: index % 2 === 0 ? -15 : 15,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateY: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="mx-auto w-full max-w-[350px]"
      style={{
        perspective: 1400,
        transformStyle: "preserve-3d",
      }}
    >
      {/* MAIN 3D CARD */}
      <motion.div
        initial={false}
        animate={{
          rotateX: flipped ? 180 : 0,
        }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          willChange: "transform",
        }}
        className="aspect-[3/4] w-full"
      >
        {/* =====================================
            FRONT SIDE
        ====================================== */}

        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-[#dce9dc] bg-white shadow-[0_15px_40px_rgba(16,71,47,0.13)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            pointerEvents: flipped ? "none" : "auto",
          }}
        >
          {/* BRAND HEADER */}
          <div className="relative overflow-hidden bg-[#10472f] px-5 py-5 text-white">

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-8 -top-10 h-32 w-32 rounded-full border border-white/10"
            />

            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative z-10 flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <Icon
                  size={23}
                  className="text-[#d1e9b9]"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-extrabold tracking-wide">
                  FA Green Biotech
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#c7dfc6]">
                  Leadership Identity
                </p>
              </div>
            </motion.div>

            <div className="absolute -bottom-5 right-7 h-10 w-10 rounded-full bg-[#dcebd8]/20 blur-xl" />
          </div>

          {/* PROFILE SECTION */}
          <div className="relative flex flex-1 flex-col items-center justify-center bg-[#f3f7ef] px-5 pt-5">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.13 + 0.2,
                type: "spring",
              }}
              whileHover={{
                scale: 1.06,
              }}
              className="relative h-36 w-36 overflow-hidden rounded-2xl border-4 border-white bg-[#e4ede0] shadow-xl sm:h-40 sm:w-40"
            >
              <img
                src={person.image}
                alt={person.name}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />

              <motion.div
                animate={{
                  opacity: [0, 0.18, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-0 bg-white"
              />
            </motion.div>

            {/* MEMBER NAME */}
            <div className="mt-5 text-center">
              <h3 className="text-xl font-extrabold tracking-tight text-[#173c29]">
                {person.name}
              </h3>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#43805a]">
                {person.role}
              </p>

              {person.department && (
                <p className="mt-2 text-xs text-[#78887b]">
                  {person.department}
                </p>
              )}
            </div>

            {/* LEADERSHIP STATUS */}
            <div className="mt-5 flex items-center gap-2">
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#4b9b62]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#718575]">
                Leadership Team
              </span>
            </div>
          </div>

          {/* FRONT FOOTER */}
          <div className="flex items-center justify-between border-t border-[#e3ece0] bg-white px-5 py-4">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#93a294]">
                Member ID
              </p>

              <p className="mt-1 text-xs font-bold text-[#28553a]">
                GV-{String(index + 1).padStart(3, "0")}
              </p>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.93 }}
              onClick={() => setFlipped(true)}
              aria-label="View member details"
              className="relative z-10 flex items-center gap-2 rounded-full bg-[#10472f] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#17633e]"
            >
              More Details

              <span>↻</span>
            </motion.button>
          </div>
        </div>

        {/* =====================================
            BACK SIDE
        ====================================== */}

        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-[#dce9dc] bg-[#f8faf5] shadow-[0_15px_40px_rgba(16,71,47,0.13)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            pointerEvents: flipped ? "auto" : "none",
          }}
        >
          {/* BACK HEADER */}
          <div className="relative overflow-hidden bg-[#10472f] px-5 py-5 text-white">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c9e6a9]">
                  FA Green Biotech
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  Member Information
                </h3>
              </div>

              <Icon
                size={27}
                className="text-[#c9e6a9]"
              />
            </div>
          </div>

          {/* BACK CONTENT */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">

            {/* BIOGRAPHY */}
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#36754c]">
                About Member
              </p>

              <p className="mt-2 whitespace-pre-line text-xs leading-6 text-[#647568]">
                {person.description ||
                  "Member of our leadership team, contributing to organizational growth and development."}
              </p>
            </div>

            {/* PROFESSIONAL DETAILS */}
            {details.length > 0 && (
              <div className="border-t border-[#dce8d9] pt-4">

                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#36754c]">
                  Professional Details
                </p>

                <div className="space-y-3">
                  {details.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between gap-3"
                    >
                      <span className="shrink-0 text-[10px] font-semibold text-[#91a092]">
                        {item.label}
                      </span>

                      <span className="break-all text-right text-[10px] font-semibold text-[#294b36]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EXPERTISE */}
            {expertise.length > 0 && (
              <div className="mt-4 border-t border-[#dce8d9] pt-4">

                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#36754c]">
                  Areas of Expertise
                </p>

                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.06,
                      }}
                      className="rounded-full border border-[#d6e6d3] bg-white px-3 py-1.5 text-[10px] font-medium text-[#356849]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* BACK FOOTER */}
          <div className="relative z-20 flex items-center justify-between border-t border-[#dce8d9] bg-white px-5 py-4">

            <span className="text-[9px] font-bold uppercase tracking-wider text-[#91a092]">
              Official Member Profile
            </span>

            <motion.button
              type="button"
              whileHover={{
                scale: 1.07,
              }}
              whileTap={{
                scale: 0.93,
              }}
              onClick={() => setFlipped(false)}
              aria-label="Flip back to member ID"
              className="relative z-50 flex items-center gap-2 rounded-full bg-[#10472f] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#17633e]"
            >
              <span>↻</span>
              Back to ID
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}




/* --------------------------------
   MAIN ORGANIZATION CHART
--------------------------------- */

export default function LeadershipOrgChart({ teamMembers = [] }) {
  const findLeader = (keyword, exclude = []) =>
    teamMembers.find((person) => {
      const role = person.role?.toLowerCase() || "";

      return (
        role.includes(keyword.toLowerCase()) &&
        !exclude.some((word) => role.includes(word.toLowerCase()))
      );
    });

  const founder = findLeader("founder");
  const director = findLeader("director", ["founder"]);

  const generalManager = findLeader("general manager");

  const operationsHead = findLeader("operations head");
  const itHead = findLeader("Data Analysis");

  const construction = findLeader("Civil Department");

  const hasLeadership =
    founder ||
    director ||
    generalManager ||
    operationsHead ||
    itHead ||
    construction;

  if (!hasLeadership) return null;

  return (
    <section className="relative isolate mt-20 overflow-hidden rounded-[28px] bg-[#f6f8f1] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#dcebd8]/60 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-[#e5edd8]/70 blur-[90px]"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6e6d3] bg-white/80 px-4 py-2">
          <LuLeaf size={15} className="text-[#287348]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#36754c]">
            Our Organization
          </span>
        </div>

        <h2 className="font-display text-3xl leading-tight text-[#172f25] sm:text-4xl lg:text-5xl">
          Leadership &
          <span className="block text-[#34754b]">Organizational Structure</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#718075] sm:text-base">
          Meet the people driving our vision, managing our operations and
          building a more sustainable agricultural future.
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl">
        {/* LEVEL 1 */}
        {(founder || director) && (
          <>
            <div className="mb-5 text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#729078]">
                01 / Top Leadership
              </span>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
              {founder && (
                <LeaderCard
                  person={founder}
                  icon={LuCrown}
                  index={0}
                  featured
                />
              )}

              {director && (
                <LeaderCard
                  person={director}
                  icon={LuCrown}
                  index={1}
                  featured
                />
              )}
            </div>

            {generalManager && <PairConnector />}
          </>
        )}

        {/* LEVEL 2 */}
        {generalManager && (
          <>
            <div className="mb-5 text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#729078]">
                02 / Management
              </span>
            </div>

            <div className="mx-auto max-w-[340px]">
              <LeaderCard
                person={generalManager}
                icon={LuBriefcaseBusiness}
                index={2}
              />
            </div>

            {(operationsHead || itHead) && <SingleConnector />}
          </>
        )}

{/* LEVEL 3 */}
{(operationsHead || itHead || construction) && (
  <>
    <div className="mb-5 text-center">
      <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#729078]">
        03 / Department Leadership
      </span>
    </div>

    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {operationsHead && (
        <LeaderCard
          person={operationsHead}
          icon={LuSettings2}
          index={3}
        />
      )}

      {itHead && (
        <LeaderCard
          person={itHead}
          icon={LuMonitor}
          index={4}
        />
      )}

      {construction && (
        <LeaderCard
          person={construction}
          icon={LuHardHat}
          index={5}
        />
      )}
    </div>
  </>
)}
      </div>

      {/* Bottom caption */}
      <div className="mt-12 text-center">
        <span className="text-xs text-[#839184]">
          One vision. One team. A sustainable future.
        </span>
      </div>
    </section>
  );
}
