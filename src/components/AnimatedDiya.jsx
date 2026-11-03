
"use client";

import { motion, useReducedMotion } from "framer-motion";

const sparks = [
  { x: "8%", y: "25%", delay: 0, duration: 3.2 },
  { x: "22%", y: "10%", delay: 1.1, duration: 3.8 },
  { x: "85%", y: "18%", delay: 0.6, duration: 3.1 },
  { x: "92%", y: "42%", delay: 1.8, duration: 4 },
  { x: "15%", y: "65%", delay: 0.8, duration: 3.5 },
  { x: "78%", y: "70%", delay: 1.4, duration: 3.4 },
  { x: "48%", y: "12%", delay: 2, duration: 3.7 },
];

function Flame({ small = false }) {
  return (
    <div
      className={`diya-flame relative ${
        small ? "scale-[0.65]" : ""
      }`}
    >
      {/* Outer flame glow */}
      <div className="absolute inset-[-35px] rounded-full bg-orange-400/30 blur-2xl animate-flame-glow" />

      {/* Outer flame */}
      <svg
        viewBox="0 0 80 150"
        className="relative h-[110px] w-[65px] overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient id="flameOuter" x1="40" y1="0" x2="40" y2="145">
            <stop offset="0%" stopColor="#FFFCE0" />
            <stop offset="30%" stopColor="#FFD54A" />
            <stop offset="65%" stopColor="#FF8A00" />
            <stop offset="100%" stopColor="#F04A00" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="flameInner" x1="40" y1="30" x2="40" y2="140">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#FFF9B2" />
            <stop offset="100%" stopColor="#FFB52E" />
          </linearGradient>

          <filter id="flameBlur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <path
          className="flame-outer"
          d="M40 2 C57 34 77 61 66 98 C61 122 53 139 40 144 C23 139 12 119 12 96 C10 66 27 32 40 2Z"
          fill="url(#flameOuter)"
          filter="url(#flameBlur)"
        />

        <path
          className="flame-outer"
          d="M40 5 C49 36 65 60 57 91 C54 116 48 132 40 137 C28 132 20 115 22 91 C21 59 33 29 40 5Z"
          fill="url(#flameOuter)"
        />

        <path
          className="flame-inner"
          d="M40 67 C49 87 52 105 45 123 C43 130 39 134 36 130 C29 118 30 100 33 87 C35 79 37 72 40 67Z"
          fill="url(#flameInner)"
        />
      </svg>
    </div>
  );
}

function BrassDiya() {
  return (
    <svg
      viewBox="0 0 440 230"
      className="relative z-10 w-full overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brassBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0A0" />
          <stop offset="18%" stopColor="#B76A12" />
          <stop offset="38%" stopColor="#FFE08A" />
          <stop offset="58%" stopColor="#A64C08" />
          <stop offset="78%" stopColor="#F7BD43" />
          <stop offset="100%" stopColor="#71320A" />
        </linearGradient>

        <linearGradient id="brassRim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF4BB" />
          <stop offset="35%" stopColor="#C98220" />
          <stop offset="70%" stopColor="#F9D36A" />
          <stop offset="100%" stopColor="#7B3B0A" />
        </linearGradient>

        <linearGradient id="brassInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD86A" />
          <stop offset="100%" stopColor="#6F3008" />
        </linearGradient>

        <linearGradient id="baseGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF0A2" />
          <stop offset="50%" stopColor="#C47B18" />
          <stop offset="100%" stopColor="#70350B" />
        </linearGradient>

        <filter id="lampShadow">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse
        cx="220"
        cy="209"
        rx="180"
        ry="12"
        fill="#642C05"
        opacity=".35"
        filter="url(#lampShadow)"
      />

      {/* Base */}
      <path
        d="M104 178 Q220 201 336 178 L323 199 Q220 216 117 199Z"
        fill="url(#baseGold)"
        stroke="#FFE29A"
        strokeWidth="2"
      />

      <ellipse
        cx="220"
        cy="179"
        rx="116"
        ry="12"
        fill="url(#brassRim)"
        stroke="#FFF0AD"
        strokeWidth="2"
      />

      {/* Main bowl */}
      <path
        d="M49 77 Q220 121 391 77 Q373 163 310 180 Q220 202 130 180 Q67 163 49 77Z"
        fill="url(#brassBody)"
        stroke="#FFD979"
        strokeWidth="3"
      />

      {/* Oil surface */}
      <ellipse
        cx="220"
        cy="79"
        rx="171"
        ry="28"
        fill="url(#brassInner)"
        stroke="#FFE49A"
        strokeWidth="3"
      />

      <ellipse
        cx="220"
        cy="76"
        rx="154"
        ry="17"
        fill="#5E2C0A"
        opacity=".65"
      />

      {/* Decorative rim */}
      <path
        d="M49 77 Q220 121 391 77"
        fill="none"
        stroke="#FFF1AD"
        strokeWidth="5"
      />

      <path
        d="M61 86 Q220 126 379 86"
        fill="none"
        stroke="#F4B942"
        strokeWidth="2"
      />

      {/* Traditional decorative patterns */}
      {[115, 165, 220, 275, 325].map((x, index) => (
        <g key={x} transform={`translate(${x} 125)`}>
          <path
            d="M0 -25 Q-22 0 0 31 Q22 0 0 -25Z"
            fill="none"
            stroke="#FFE59A"
            strokeWidth="3"
          />
          <path
            d="M0 -17 Q-10 0 0 20 Q10 0 0 -17Z"
            fill="#F9C45A"
            opacity=".8"
          />
          <circle cx="0" cy="2" r="3" fill="#FFF2BD" />
        </g>
      ))}

      {/* Small ornamental dots */}
      {Array.from({ length: 13 }).map((_, i) => (
        <circle
          key={i}
          cx={76 + i * 24}
          cy={92 + Math.sin(i * 0.5) * 5}
          r="2"
          fill="#FFF1A7"
        />
      ))}

      {/* Wick */}
      <path
        d="M220 85 Q218 69 224 56"
        stroke="#37200C"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M220 84 Q218 69 224 56"
        stroke="#D89A3A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AnimatedDiya({
  className = "",
  showSparks = true,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 35, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`pointer-events-none relative isolate ${className}`}
      aria-hidden="true"
    >
      {/* Large ambient golden light */}
      <div className="diya-ambient absolute left-1/2 top-[45%] h-[220px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/25 blur-[85px]" />

      {/* Ground reflection */}
      <div className="absolute bottom-[4%] left-[10%] h-8 w-[80%] rounded-full bg-amber-400/35 blur-2xl" />

      {/* Floating sparks */}
      {showSparks && !reduceMotion && (
        <div className="absolute inset-0 z-20">
          {sparks.map((spark, index) => (
            <motion.span
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-yellow-200 shadow-[0_0_12px_4px_rgba(255,184,40,0.7)]"
              style={{
                left: spark.x,
                top: spark.y,
              }}
              animate={{
                y: [-5, -35, -65],
                x: [0, 8, -5],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.3],
              }}
              transition={{
                duration: spark.duration,
                delay: spark.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main diya */}
      <motion.div
        className="relative z-10 w-full"
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, -2, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Animated flame */}
        <div className="absolute left-1/2 top-[-17%] z-20 flex -translate-x-1/2 flex-col items-center">
          <Flame />
        </div>

        <BrassDiya />
      </motion.div>

      {/* Subtle horizontal reflection */}
      <div className="absolute bottom-[6%] left-[20%] h-[2px] w-[60%] rounded-full bg-yellow-200/70 blur-sm" />
    </motion.div>
  );
}
