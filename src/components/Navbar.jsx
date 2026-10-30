
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Button from "@/components/Button";

const defaultTheme = {
  backgroundColor: "#F7F6EF",
  textColor: "#252923",
  accentColor: "#153F2B",
  mobileMenuBackground: "#F7F6EF",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    x: -12,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function Navbar({
  backgroundColor = defaultTheme.backgroundColor,
  textColor = defaultTheme.textColor,
  accentColor = defaultTheme.accentColor,
  mobileMenuBackground = defaultTheme.mobileMenuBackground,
  logoSrc = "/logo.png",
  phone = "+91 8639976550",
  ctaLabel = "Get a Call Back",
  ctaHref = "/contact",
  links = navLinks,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const difference = current - previous;

    // Always show navbar near the top.
    if (current < 10) {
      setVisible(true);
      return;
    }

    // Ignore tiny scroll changes.
    if (Math.abs(difference) < 5) return;

    if (difference > 0) {
      // Hide the navbar while scrolling down.
      setVisible(false);
    } else {
      // Show the navbar while scrolling up.
      setVisible(true);
    }
  });

  const closeMenu = () => setMenuOpen(false);

  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? "0%" : "-100%" }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-2  z-50 w-full "
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {/* Main Navbar */}
      <div className="mx-10 flex min-h-19 max-w-360 rounded-full backdrop-blur-xl items-center justify-between gap-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Fresh Agriculture home"
          className="shrink-0"
        >
          <img
            src={logoSrc}
            alt="Fresh Agriculture by Green Bio-Tech"
            className="h-12 w-24 object-contain sm:w-28 md:h-14 md:w-36 mix-blend-hue"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 xl:flex 2xl:gap-5"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap py-2 text-[12px] font-medium"
            >
              <span>{link.label}</span>

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                style={{ backgroundColor: accentColor }}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Phone & CTA */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={phoneHref}
            className="flex items-center gap-2 whitespace-nowrap text-sm transition-opacity hover:opacity-70"
            style={{ color: accentColor }}
          >
            <FiPhone size={17} />
            <span>{phone}</span>
          </a>

          <div className="hidden xl:block">
            <Button
              href={ctaHref}
              backgroundColor={accentColor}
              color="#FFFFFF"
              hoverBackgroundColor="#0D2C1D"
              showArrow
              className="whitespace-nowrap"
            >
              {ctaLabel}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="relative z-[60] flex shrink-0 items-center justify-center rounded-full border border-black/10 p-3 transition-colors hover:bg-black/5 xl:hidden"
          style={{
            color: accentColor,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                className="flex"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <FiX size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                className="flex"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
              >
                <FiMenu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-black/10 px-5 pb-6 pt-3 shadow-xl xl:hidden"
            style={{
              backgroundColor: mobileMenuBackground,
              color: textColor,
            }}
          >
            <motion.nav
              className="mx-auto flex max-w-7xl flex-col"
              aria-label="Mobile navigation"
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-black/5 py-3.5 text-sm font-medium"
                  >
                    <span className="transition-opacity duration-200 group-hover:opacity-60">
                      {link.label}
                    </span>

                    <motion.span
                      className="flex"
                      style={{ color: accentColor }}
                      whileHover={{ x: 4, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiArrowUpRight size={17} />
                    </motion.span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Phone */}
              <motion.a
                variants={linkVariants}
                href={phoneHref}
                className="mt-5 flex items-center gap-2 text-sm font-medium"
                style={{ color: accentColor }}
              >
                <FiPhone size={16} />
                <span>{phone}</span>
              </motion.a>

              {/* Mobile CTA */}
              <motion.div
                variants={linkVariants}
                className="mt-4"
              >
                <Button
                  href={ctaHref}
                  backgroundColor={accentColor}
                  color="#FFFFFF"
                  hoverBackgroundColor="#0D2C1D"
                  showArrow
                  className="w-full"
                >
                  {ctaLabel}
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
