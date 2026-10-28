
import Link from "next/link";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";

import Button from "@/components/Button";

const defaultTheme = {
  backgroundColor: "#0D2C1D",
  textColor: "#F7F6EF",
  mutedColor: "#C0CDBF",
  accentColor: "#A8C96A",
  dividerColor: "rgba(255,255,255,0.15)",
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Polyhouse", href: "/services/polyhouse" },
  { label: "Hydroponics", href: "/services/hydroponics" },
  { label: "Mushroom Farming", href: "/services/mushroom-farming" },
  { label: "Aquaculture", href: "/services/aquaculture" },
  { label: "Nursery & Floriculture", href: "/services/nursery" },
  { label: "Smart Irrigation", href: "/services/smart-irrigation" },
];

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FiFacebook },
  { label: "Instagram", href: "#", Icon: FiInstagram },
  { label: "YouTube", href: "#", Icon: FiYoutube },
  { label: "LinkedIn", href: "#", Icon: FiLinkedin },
];

export default function Footer({
  backgroundColor = defaultTheme.backgroundColor,
  textColor = defaultTheme.textColor,
  mutedColor = defaultTheme.mutedColor,
  accentColor = defaultTheme.accentColor,
  dividerColor = defaultTheme.dividerColor,
  logoSrc = "/logo.png",
  phone = "+91 8639976550",
  email = "info@freshagriculture.in",
  website = "https://freshagriculture.in",
  address = "Kukunoorpally, District Siddipet, Telangana, India",
  companyName = "Fresh Agriculture by Green Bio-Tech LLP",
  links = quickLinks,
  services = serviceLinks,
  socials = socialLinks,
}) {

  return (
    <footer
      style={{
        backgroundColor,
        color: textColor,
        "--footer-muted": mutedColor,
        "--footer-accent": accentColor,
        "--footer-divider": dividerColor,
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 md:px-8 md:pt-20 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Link href="/" aria-label="Fresh Agriculture home">
              <img
                src={logoSrc}
                alt="Fresh Agriculture"
                className="mb-5 h-14 w-auto max-w-[210px] object-contain"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-[var(--footer-muted)]">
              Modern agricultural solutions, farming systems, and products
              supporting a more sustainable future for agriculture.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-[var(--footer-divider)] p-2.5 transition-colors hover:bg-white/10"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-semibold">Explore</h2>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-semibold">Our Services</h2>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-accent)]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-semibold">Get in touch</h2>

            <div className="space-y-4 text-sm leading-6 text-[var(--footer-muted)]">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0" style={{ color: accentColor }} />
                <span>{address}</span>
              </div>

              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <FiPhone className="shrink-0" style={{ color: accentColor }} />
                {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-start gap-3 break-all transition-colors hover:text-white"
              >
                <FiMail className="mt-1 shrink-0" style={{ color: accentColor }} />
                {email}
              </a>
            </div>

            <Button
              href="/contact"
              backgroundColor={accentColor}
              color="#0D2C1D"
              hoverBackgroundColor="#D0E6A4"
              className="mt-6"
              showArrow
            >
              Discuss a Project
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--footer-divider)] pt-6 text-xs text-[var(--footer-muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {companyName}. All rights reserved.
          </p>
          <p>Growing a better future, together.</p>
        </div>
      </div>
    </footer>
  );
}
