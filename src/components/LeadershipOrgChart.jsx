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

function LeaderCard({ person, icon: Icon, index = 0, featured = false }) {
  const [open, setOpen] = useState(false);
  const expertise = person.expertise || [];
  useEffect(() => {
    if (!open) return;

    // Save current scroll position
    const scrollY = window.scrollY;

    const body = document.body;
    const html = document.documentElement;

    // Save existing styles
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    const previousHtmlOverflow = html.style.overflow;

    // Lock background scrolling
    html.style.overflow = "hidden";

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      // Restore original styles
      Object.assign(body.style, previousBodyStyles);
      html.style.overflow = previousHtmlOverflow;

      // Restore exact previous scroll position
      window.scrollTo(0, scrollY);
    };
  }, [open]);
  if (!person) return null;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: index * 0.12 }}
        className={`group relative w-full overflow-hidden rounded-2xl border border-[#e5eee5] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#8dbb93] hover:shadow-xl ${
          featured ? "min-h-85" : "min-h-77.5"
        }`}
      >
        {/* Profile image */}
        <div className="relative h-61.25 w-full overflow-hidden bg-[#f2f5ec]">
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#142d20]/40 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 backdrop-blur-md">
            <Icon size={14} className="text-[#23683f]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#28573a]">
              Leadership
            </span>
          </div>
        </div>

        {/* Card footer */}
        <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-[#1d382b] sm:text-lg">
              {person.name}
            </h3>
            <p className="mt-1 truncate text-xs font-medium text-[#718075]">
              {person.role}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            className="relative z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf5ed] text-[#286a42] transition hover:bg-[#17623c] hover:text-white"
            aria-label={`View complete profile of ${person.name}`}
          >
            <LuArrowUpRight size={19} />
          </button>
        </div>

        {/* Hover Preview */}
        <div
          className=" absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-[#092e20] via-[#10472f]/90 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b9d9b6]">
            {person.role}
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">{person.name}</h3>

          <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/80">
            {person.description}
          </p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 w-fit text-xs font-bold text-[#d5e9d3] underline underline-offset-4 hover:text-white"
          >
            View Complete Profile →
          </button>
        </div>
      </motion.article>

      {/* FULL PROFILE MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071e14]/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`leader-${index}`}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#f8faf5] shadow-2xl"
            >
              {/* Modal header */}
              <div className="relative bg-[#10472f] px-6 py-8 text-white sm:px-9">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Close profile"
                >
                  <LuX size={20} />
                </button>

                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-[#c9e6a9]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9e6a9]">
                    Leadership Profile
                  </span>
                </div>

                <h2
                  id={`leader-${index}`}
                  className="mt-4 pr-10 font-display text-2xl font-bold sm:text-3xl"
                >
                  {person.name}
                </h2>

                <p className="mt-2 text-sm text-white/75">{person.role}</p>
              </div>

              {/* Modal content */}
              <div className="p-6 sm:p-9">
                <div className="grid gap-7 sm:grid-cols-[180px_1fr]">
                  {/* Profile photo */}
                  <div className="h-50 w-50 overflow-hidden rounded-full bg-[#e9f0e6]">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Complete biography */}
                  <div>
                    <h3 className="text-lg font-bold text-[#1d382b]">About</h3>

                    <p className="mt-3 whitespace-pre-line text-sm leading-8 text-[#68776b]">
                      {person.description}
                    </p>
                  </div>
                </div>

                {/* Full expertise */}
                {expertise.length > 0 && (
                  <div className="mt-8 border-t border-[#e2eae0] pt-6">
                    <div className="flex items-center gap-2">
                      <LuSparkles size={19} className="text-[#368454]" />
                      <h3 className="text-lg font-bold text-[#1d382b]">
                        Areas of Expertise
                      </h3>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {expertise.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#d6e6d3] bg-white px-4 py-2.5 text-sm font-medium text-[#356849]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal footer */}
              <div className="border-t border-[#e2eae0] px-6 py-4 text-right sm:px-9">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[#075332] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b6941]"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
        {(operationsHead || itHead) && (
          <>
            <div className="mb-5 text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#729078]">
                03 / Department Leadership
              </span>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
              {operationsHead && (
                <LeaderCard
                  person={operationsHead}
                  icon={LuSettings2}
                  index={3}
                />
              )}

              {itHead && (
                <LeaderCard person={itHead} icon={LuMonitor} index={4} />
              )}
            </div>

            {construction && <PairConnector />}
          </>
        )}

        {/* LEVEL 4 */}
        {construction && (
          <>
            <div className="mb-5 text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#a17a3e]">
                04 / Execution
              </span>
            </div>

            <div className="mx-auto max-w-[340px]">
              <LeaderCard person={construction} icon={LuHardHat} index={5} />
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
