
import Link from "next/link";
import {
  FiArrowUpRight,
  FiDroplet,
  FiTrendingUp,
  FiUsers,
  FiSettings,
  FiCheckCircle,
  FiMapPin,
  FiSun,
  FiActivity,
  FiShield,
  FiHeart,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";

import SiteShell from "@/components/SiteShell";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

const image = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85",
  polyhouse: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80",
  hydroponics: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80",
  mushroom: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=80",
  aqua: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
  flowers: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
  nursery: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
  goats: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=900&q=80",
  irrigation: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
  seedling: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=85",
  field: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=85",
  tomato: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=900&q=80",
  greens: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  mushroomFarm: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=80",
  fish: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
};

const services = [
  {
    title: "Polyhouse Farming",
    description: "Protected cultivation for controlled growing conditions.",
    src: image.polyhouse,
    icon: FiLayers,
    href: "/services/polyhouse",
  },
  {
    title: "Hydroponics",
    description: "Soilless growing systems for selected crops.",
    src: image.hydroponics,
    icon: FiDroplet,
    href: "/services/hydroponics",
  },
  {
    title: "Mushroom Farming",
    description: "Explore a controlled, space-efficient cultivation model.",
    src: image.mushroom,
    icon: FiSun,
    href: "/services/mushroom-farming",
  },
  {
    title: "Aquaculture",
    description: "Farming systems for fish and other aquatic species.",
    src: image.aqua,
    icon: FiActivity,
    href: "/services/aquaculture",
  },
  {
    title: "Floriculture",
    description: "Flower cultivation with crop-specific planning.",
    src: image.flowers,
    icon: FiSun,
    href: "/services/floriculture",
  },
  {
    title: "Nursery",
    description: "Plant propagation and nursery planning solutions.",
    src: image.nursery,
    icon: FiSun,
    href: "/services/nursery",
  },
  {
    title: "Goat Farming",
    description: "Livestock infrastructure and practical farm planning.",
    src: image.goats,
    icon: FiHeart,
    href: "/services/goat-farming",
  },
  {
    title: "Smart Irrigation",
    description: "Irrigation approaches that help manage water use.",
    src: image.irrigation,
    icon: FiDroplet,
    href: "/services/smart-irrigation",
  },
];

const projects = [
  {
    title: "Polyhouse Tomato Cultivation",
    category: "Protected cultivation",
    location: "Project showcase",
    src: image.tomato,
  },
  {
    title: "Hydroponic Leafy Greens",
    category: "Soilless farming",
    location: "Project showcase",
    src: image.greens,
  },
  {
    title: "Mushroom Cultivation Unit",
    category: "Controlled cultivation",
    location: "Project showcase",
    src: image.mushroomFarm,
  },
  {
    title: "Aquaculture Systems",
    category: "Aquaculture",
    location: "Project showcase",
    src: image.fish,
  },
];

const products = [
  {
    name: "Azoto-Green",
    detail: "Nitrogen-fixing biofertilizer",
    color: "#267c48",
    label: "BIOFERTILIZER",
  },
  {
    name: "Phos-Bio",
    detail: "Phosphate-solubilizing biofertilizer",
    color: "#57437f",
    label: "BIOFERTILIZER",
  },
  {
    name: "Potash-Solv",
    detail: "Potassium-solubilizing solution",
    color: "#d86c24",
    label: "BIOFERTILIZER",
  },
  {
    name: "Root-Max",
    detail: "Mycorrhiza-based soil support",
    color: "#d3a32c",
    label: "SOIL SUPPORT",
  },
  {
    name: "Tricho-Guard",
    detail: "Biological crop protection",
    color: "#1b6395",
    label: "BIO-PROTECTION",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View All",
}) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.23em] text-forest">
          {eyebrow}
        </p>

        <h2 className="font-display text-3xl leading-[1.05] text-forest sm:text-4xl md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            {description}
          </p>
        )}
      </div>

      {href && (
        <Button
          href={href}
          variant="outline"
          backgroundColor="transparent"
          color="#153F2B"
          hoverBackgroundColor="#E8EEDD"
          borderColor="#B9CDBB"
          showArrow
          className="self-start md:self-auto"
        >
          {linkLabel}
        </Button>
      )}
    </div>
  );
}

function ImageCard({ item, index }) {
  const Icon = item.icon;

  return (
    <Reveal delay={index * 0.04} className="h-full">
      <Link
        href={item.href}
        className="group block h-full overflow-hidden rounded-2xl border border-forest/5 bg-white shadow-[0_4px_18px_rgba(20,55,35,.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(20,55,35,.12)]"
      >
        <div className="relative h-40 overflow-hidden sm:h-44">
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <span className="absolute bottom-0 left-4 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded-xl border border-forest/10 bg-ivory text-forest shadow-sm">
            <Icon size={19} />
          </span>
        </div>

        <div className="flex min-h-[105px] items-end justify-between gap-3 p-4 pt-7">
          <div>
            <h3 className="text-sm font-semibold text-ink">
              {item.title}
            </h3>

            <p className="mt-1 text-[11px] leading-5 text-muted">
              {item.description}
            </p>
          </div>

          <span className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/25 text-forest transition-all group-hover:border-forest group-hover:bg-forest group-hover:text-white">
            <FiArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#edf0df]">
        <div className="absolute inset-0 -z-20">
          <img
            src={image.hero}
            alt="Sunrise over agricultural fields"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f7f6ef] via-[#f7f6ef]/95 to-[#f7f6ef]/25 md:via-[#f7f6ef]/82 md:to-transparent" />

        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[52%] bg-gradient-to-l from-transparent via-transparent to-[#f7f6ef]/15 md:block" />

        <div className="mx-auto grid min-h-[580px] max-w-[1600px] items-center gap-10 px-5 py-14 sm:px-8 md:min-h-[610px] md:grid-cols-[.92fr_1.08fr] md:px-12 md:py-16 lg:min-h-[650px] lg:px-16">
          <Reveal className="max-w-2xl">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-forest">
              Smart farming <span className="mx-2 text-leaf">•</span>
              Sustainable future
            </p>

            <h1 className="font-display text-5xl leading-[.99] tracking-tight text-[#102f22] sm:text-6xl lg:text-[clamp(4rem,5.4vw,5.7rem)]">
              Growing Better Today for a{" "}
              <span className="text-forest">Brighter Tomorrow</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-[#424b41] sm:text-base">
              Fresh Agriculture by Green Bio-Tech helps farmers and
              entrepreneurs explore practical, sustainable, and
              technology-driven farming solutions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" showArrow>
                Get a Free Consultation
              </Button>

              <Button
                href="/services"
                variant="outline"
                backgroundColor="transparent"
                color="#153F2B"
                borderColor="#B9CDBB"
                hoverBackgroundColor="#E8EEDD"
                showArrow
              >
                Explore Our Services
              </Button>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-5 gap-y-4 border-t border-forest/15 pt-5 sm:grid-cols-4">
              {[
                {
                  Icon: FiSun,
                  title: "Farmer-first",
                  sub: "Practical solutions",
                },
                {
                  Icon: FiUsers,
                  title: "Expertise",
                  sub: "Agricultural guidance",
                },
                {
                  Icon: FiSettings,
                  title: "End-to-end",
                  sub: "Project support",
                },
                {
                  Icon: FiSun,
                  title: "Sustainable",
                  sub: "Resource awareness",
                },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-2">
                  <Icon
                    className="mt-0.5 shrink-0 text-forest"
                    size={19}
                  />

                  <div>
                    <p className="text-xs font-semibold text-ink">
                      {title}
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-muted">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="relative hidden min-h-[470px] md:block">
            <div className="absolute right-0 top-1/2 h-[410px] w-[88%] -translate-y-1/2 overflow-hidden rounded-[46%_46%_24px_24px] border-[8px] border-white/45 shadow-2xl">
              <img
                src={image.field}
                alt="Cultivated field in warm sunlight"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute right-5 top-8 max-w-[210px] rotate-[-5deg] font-display text-3xl leading-none text-forest drop-shadow-sm">
              Healthy Farms
              <br />
              Brighter Future <span className="text-leaf">↗</span>
            </div>

            <div className="absolute bottom-8 left-0 grid w-[94%] grid-cols-4 gap-2 rounded-2xl border border-white/70 bg-white/85 p-3 shadow-xl backdrop-blur-md">
              {[
                { Icon: FiSun, title: "Modern", sub: "Farming" },
                { Icon: FiDroplet, title: "Efficient", sub: "Water Use" },
                { Icon: FiTrendingUp, title: "Crop", sub: "Management" },
                { Icon: FiGlobe, title: "Sustainable", sub: "Growth" },
              ].map(({ Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex flex-col items-center rounded-xl bg-white/80 px-1 py-3 text-center"
                >
                  <Icon size={22} className="mb-2 text-forest" />

                  <p className="text-[10px] font-semibold leading-4 text-ink">
                    {title}
                    <br />
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-12 top-20 hidden h-48 w-48 rounded-full border border-forest/10 md:block" />
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-ivory px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="pointer-events-none absolute -right-14 top-14 text-[180px] leading-none text-forest/[0.035]">
          ❧
        </div>

        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Our services"
            title="Complete Agricultural Solutions Under One Roof"
            description="From modern farming infrastructure to crop advisory and agricultural inputs, explore solutions designed around different farming needs."
            href="/services"
            linkLabel="View All Services"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <ImageCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative isolate overflow-hidden bg-forest-dark text-white">
        <div className="absolute inset-0 -z-20">
          <img
            src={image.seedling}
            alt="Young plant growing in rich soil"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061e14]/95 via-[#082d1f]/85 to-[#082d1f]/65" />

        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-20 lg:px-12">
          <Reveal>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#c3dc8c]">
              Why choose us
            </p>

            <h2 className="max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Your Partner in Sustainable Growth
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/75">
              We bring together practical agricultural knowledge,
              modern farming approaches, and a farmer-first mindset
              to help you explore the right next step.
            </p>

            <Button
              href="/about"
              backgroundColor="#A8C96A"
              color="#0D2C1D"
              hoverBackgroundColor="#D0E6A4"
              showArrow
              className="mt-6"
            >
              Know More About Us
            </Button>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                Icon: FiLayers,
                title: "Modern Approaches",
                text: "Farming systems suited to different growing needs.",
              },
              {
                Icon: FiUsers,
                title: "Practical Guidance",
                text: "Discuss requirements with the agriculture team.",
              },
              {
                Icon: FiDroplet,
                title: "Resource Awareness",
                text: "Consider water, soil, and operational needs.",
              },
              {
                Icon: FiShield,
                title: "Project Support",
                text: "Explore the steps from planning to implementation.",
              },
            ].map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-white/20 bg-white/[0.07] p-4 backdrop-blur-sm transition-colors hover:bg-white/[0.12]">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#126b43] text-[#d9edb5]">
                    <Icon size={20} />
                  </span>

                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/65">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-[#f0f1e7] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Featured projects"
            title="Farming Ideas, Made Practical"
            description="Explore examples of farming systems and cultivation types featured in our agricultural portfolio."
            href="/projects"
            linkLabel="View All Projects"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.05}>
                <Link
                  href="/projects"
                  className="group block overflow-hidden rounded-2xl border border-forest/5 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-forest/70">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-sm font-semibold text-ink">
                      {project.title}
                    </h3>

                    <p className="mt-2 flex items-center gap-1 text-[10px] text-muted">
                      <FiMapPin size={12} />
                      {project.location}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="mt-4 text-[10px] leading-5 text-muted">
            Illustrative project categories. Replace these cards with
            verified completed projects and actual locations before
            publishing.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="overflow-hidden bg-ivory">
        <div className="grid min-h-[470px] lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
            <img
              src={image.seedling}
              alt="Hands caring for a young plant"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-forest/35 to-transparent" />

            <div className="absolute bottom-7 left-6 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-xs font-medium text-forest backdrop-blur">
              Thoughtful inputs. Healthier growing.
            </div>
          </div>

          <div className="px-5 py-14 sm:px-8 md:py-16 lg:px-12 lg:py-20">
            <SectionHeading
              eyebrow="Our products"
              title="Agricultural Inputs for Growing Needs"
              description="Explore selected biofertilizer and biological crop-support products listed in the catalog. Product suitability depends on crop, conditions, and label guidance."
              href="/products"
              linkLabel="View All Products"
            />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
              {products.map((product, i) => (
                <Reveal key={product.name} delay={i * 0.04}>
                  <Link
                    href="/products"
                    className="group flex h-full flex-col items-center rounded-xl border border-forest/5 bg-white px-3 py-4 text-center transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span
                      className="mb-3 flex h-20 w-12 items-center justify-center rounded-t-lg rounded-b-md border border-black/10 shadow-sm transition-transform group-hover:-rotate-2"
                      style={{
                        background: `linear-gradient(90deg, ${product.color} 0%, ${product.color} 24%, #f8f8f2 25%, #fff 85%, #d9dfd0 100%)`,
                      }}
                    >
                      <span className="h-12 w-8 rounded-sm border border-black/10 bg-white/90 p-1">
                        <span
                          className="block h-1 w-full rounded-full"
                          style={{ backgroundColor: product.color }}
                        />

                        <span className="mt-2 block text-[4px] font-bold leading-tight text-forest">
                          FRESH
                          <br />
                          AGRI
                        </span>

                        <span className="mt-1 block h-1 w-3 rounded-full bg-leaf" />
                      </span>
                    </span>

                    <span className="text-[8px] font-bold tracking-[0.08em] text-forest">
                      {product.label}
                    </span>

                    <h3 className="mt-2 text-xs font-semibold text-ink">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-[10px] leading-4 text-muted">
                      {product.detail}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-forest px-5 py-14 text-white sm:px-8 md:py-16 lg:px-12">
        <div className="absolute inset-0 opacity-20">
          <img
            src={image.field}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/95 to-forest/60" />

        <div className="relative mx-auto grid max-w-[1440px] gap-8 rounded-3xl border border-white/20 bg-[#f7f6ef] p-6 text-forest shadow-2xl sm:p-9 md:grid-cols-[1.15fr_.85fr] md:items-center lg:p-12">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em]">
              Let's grow together
            </p>

            <h2 className="max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Ready to Start Your Farming Journey?
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
              Talk to our team about your land, crop plans, or
              agricultural project requirements.
            </p>

            <Button href="/contact" showArrow className="mt-6">
              Get a Call Back
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Initial consultation",
              "Project-specific discussion",
              "Agricultural guidance",
              "Resource-conscious planning",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-medium"
              >
                <FiCheckCircle
                  className="shrink-0 text-forest"
                  size={17}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
