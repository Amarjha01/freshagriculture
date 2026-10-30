"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuChevronRight,
  LuChevronDown,
  LuMessagesSquare,
  LuSprout,
  LuUsers,
  LuShieldCheck,
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuPlus,
  LuMinus,
  LuLeaf,
  LuFileText,
  LuHouse,
  LuHandshake,
  LuSettings,
  LuExternalLink,
  LuSend,
  LuBuilding2,
  LuLoaderCircle,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";
import { FiCheckCircle } from "react-icons/fi";

const images = {
  hero: "/Images/contactpage-right.webp",
  plant: "",
  hands: "/Images/Nurturing Seedlings in Golden Light.webp",
};

const PHONE_PRIMARY = "+91 6297003664";
const PHONE_SECONDARY = "+91 8409570406";
const EMAIL = "freshagriculturebygreenbiotech@gmail.com";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kukunoopally%2C%20Siddipet%2C%20Telangana%2C%20India";

const faqs = [
  {
    question: "Do you provide on-site consultation?",
    answer:
      "On-site visits depend on your location, requirements, and availability. Contact our team with your project details to discuss the next steps.",
  },
  {
    question: "Can you help in setting up a polyhouse project?",
    answer:
      "Share your location, land dimensions, intended crops, and budget range with our team. We can discuss the project requirements and confirm which services are available.",
  },
  {
    question: "Do you work with individual farmers?",
    answer:
      "You can contact us with your individual farming requirements. The appropriate products or services depend on your crop, location, and specific needs.",
  },
  {
    question: "What types of products do you offer?",
    answer:
      "Our agricultural product range includes biofertilizers, fertilizers, crop-protection products, and plant-growth solutions. Contact us for the latest catalogue and product-specific information.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "Submit the enquiry form with your contact details, location, and project or product requirements. Include quantities, dimensions, or other relevant details to help us understand your request.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Contact our team with your delivery or project location so we can confirm service availability for your specific requirement.",
  },
];

const benefits = [
  { icon: LuMessagesSquare, title: "Quick", detail: "Response" },
  { icon: LuSprout, title: "Expert", detail: "Guidance" },
  { icon: LuUsers, title: "Customized", detail: "Solutions" },
  { icon: LuShieldCheck, title: "Farmer", detail: "First Approach" },
];

const supportItems = [
  "Free Consultation",
  "Site Visit (if required)",
  "Customized Project Plan",
  "Product Recommendations",
  "End-to-End Support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
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

function ContactCard({ icon: Icon, title, children, watermark }) {
  return (
    <div className="relative flex gap-3 overflow-hidden rounded-2xl border border-[#eef0e8] bg-white/90 p-4 shadow-sm transition hover:shadow-md sm:gap-4 sm:p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ddf5df] text-[#09965a]">
        <Icon size={21} strokeWidth={2} />
      </div>

      <div className="relative z-10 min-w-0 flex-1">
        <h3 className="text-[11px] font-bold text-[#17432c] sm:text-xs">
          {title}
        </h3>
        <div className="mt-1 text-xs leading-5 text-[#26364c]">{children}</div>
      </div>

      {watermark && (
        <Icon
          aria-hidden="true"
          size={44}
          className="absolute bottom-3 right-3 text-[#d5e7d6]"
        />
      )}
    </div>
  );
}

function ContactField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = true,
  children,
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-[11px] font-semibold text-[#1c2b43]">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </span>

      {children || (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="h-10 w-full rounded-lg border border-[#dfe3e7] bg-white px-3 text-xs text-[#1c2b43] outline-none transition placeholder:text-[#9ba2b1] focus:border-[#4d9b71] focus:ring-2 focus:ring-[#4d9b71]/10"
        />
      )}
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    subject: "",
    message: "",
  });

  const [openFAQ, setOpenFAQ] = useState(null);
  const [formError, setFormError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormError("");

    const message = [
      "Fresh Agriculture Website Enquiry",
      "",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Location: ${form.location}`,
      `Subject: ${form.subject}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Website Enquiry - ${form.subject}`,
    )}&body=${encodeURIComponent(message)}`;

    // Opens the visitor's configured email application.
    // Connect this form to your backend/API for actual server-side submission.
    window.location.href = mailto;
  }

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">
        {/* HERO */}
        <section className="relative isolate ">
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

          <div className="mx-auto grid min-h-80 max-w-7xl items-center gap-7 px-5 py-10 sm:px-8 sm:py-12 lg:min-h-82.5 lg:grid-cols-[1fr_0.95fr] lg:px-12">
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
                <span>Contact Us</span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <SectionLabel>Let's Build a Greener Tomorrow</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl leading-[1.02] tracking-tight text-[#152a43] sm:text-6xl lg:text-7xl"
              >
                Get in Touch
                <span className="block text-[#075332]">With Us</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-xs leading-6 text-[#657064] sm:text-sm sm:leading-7"
              >
                Have a question, project enquiry or need expert advice? Our team
                is here to help you explore agricultural solutions for your
                land, crops and business goals.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 grid max-w-xl grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4"
              >
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="flex items-center gap-2"
                    >
                      <Icon size={25} className="shrink-0 text-[#07884f]" />
                      <p className="text-[10px] font-medium leading-4 text-[#243b30]">
                        {benefit.title}
                        <br />
                        {benefit.detail}
                      </p>
                    </div>
                  );
                })}
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

            {/* Hero proof points */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="relative hidden min-h-[270px] lg:block"
            >
              <div className="absolute flex w-fit right-0 -bottom-30 space-y-2 rounded-2xl border border-white/80 bg-white/30  p-4 shadow-xl backdrop-blur-xs">
                {[
                  { icon: LuSprout, value: "500+", label: "Farmers Connected" },
                  {
                    icon: LuFileText,
                    value: "100+",
                    label: "Projects Completed",
                  },
                  {
                    icon: LuMapPin,
                    value: "Multiple",
                    label: "States Across India",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.value}
                      className="flex items-center gap-3 py-1"
                    >
                      <Icon size={23} className="shrink-0 text-[#07884f]" />
                      <div>
                        <p className="text-sm font-bold text-[#162d42]">
                          {item.value}
                        </p>
                        <p className="text-[10px] text-[#4d5a68]">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT FORM + CONTACT DETAILS */}
        <section className="relative isolate px-4 pb-4 pt-5 sm:px-8 lg:px-12">
          <div className="relative mx-auto grid max-w-7xl items-start gap-5 lg:grid-cols-[1.55fr_1fr]">
            {/* Enquiry form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="rounded-2xl border border-[#edf0e8] bg-white/90 p-5 shadow-sm sm:p-7"
            >
              <SectionLabel>Send Us a Message</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                Enquire About Your Project
              </h2>

              <p className="mt-2 text-xs leading-5 text-[#778074] sm:text-sm">
                Fill out the form below and our team will get back to you.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <ContactField
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />

                  <ContactField
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    type="tel"
                  />

                  <ContactField
                    label="Email Address"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    type="email"
                  />

                  <ContactField
                    label="Location / City"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Enter your city"
                  />
                </div>

                <ContactField label="Subject" name="subject" required>
                  <div className="relative">
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="h-10 w-full appearance-none rounded-lg border border-[#dfe3e7] bg-white px-3 pr-9 text-xs text-[#1c2b43] outline-none transition focus:border-[#4d9b71] focus:ring-2 focus:ring-[#4d9b71]/10"
                    >
                      <option value="">Select an option</option>
                      <option value="Product Enquiry">Product Enquiry</option>
                      <option value="Polyhouse Project">
                        Polyhouse Project
                      </option>
                      <option value="Hydroponics">Hydroponics</option>
                      <option value="Mushroom Farming">Mushroom Farming</option>
                      <option value="Aquaculture">Aquaculture</option>
                      <option value="Irrigation">Smart Irrigation</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Partnership">
                        Partnership & Business
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    <LuChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#53616d]"
                    />
                  </div>
                </ContactField>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-[#1c2b43]">
                    Your Message
                    <span className="ml-0.5 text-red-500">*</span>
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    rows={4}
                    placeholder="Tell us about your requirement (e.g. product, project, farm size, location, etc.)"
                    className="w-full resize-y rounded-lg border border-[#dfe3e7] bg-white px-3 py-3 text-xs leading-5 text-[#1c2b43] outline-none transition placeholder:text-[#9ba2b1] focus:border-[#4d9b71] focus:ring-2 focus:ring-[#4d9b71]/10"
                  />
                </label>

                {formError && (
                  <p role="alert" className="text-xs text-red-600">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941] focus:outline-none focus:ring-2 focus:ring-[#4d9b71] focus:ring-offset-2"
                >
                  Send Message
                  <LuArrowRight size={15} />
                </button>

                <p className="text-[10px] leading-4 text-[#8a9389]">
                  Your email application will open with your enquiry prepared.
                  For direct website submission, connect this form to your
                  backend.
                </p>
              </form>
            </motion.div>

            {/* Contact information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="space-y-3"
            >
              <motion.div variants={fadeUp} className="mb-4">
                <h2 className="font-display text-3xl leading-tight text-[#162d42]">
                  Our Contact Details
                </h2>
                <p className="mt-1 text-xs leading-5 text-[#778074]">
                  You can reach us through any of the following channels.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <ContactCard icon={LuPhone} title="Phone" watermark>
                  <a
                    href="tel:+916297003664"
                    className="block hover:text-[#07884f]"
                  >
                    {PHONE_PRIMARY}
                  </a>
                  <a
                    href="tel:+918409570406"
                    className="block hover:text-[#07884f]"
                  >
                    {PHONE_SECONDARY}
                  </a>
                </ContactCard>
              </motion.div>

              <motion.div variants={fadeUp}>
                <ContactCard icon={LuMail} title="Email">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all hover:text-[#07884f]"
                  >
                    {EMAIL}
                  </a>
                  <p className="mt-1 text-[10px] text-[#778074]">
                    Contact us for product and project enquiries.
                  </p>
                </ContactCard>
              </motion.div>

              <motion.div variants={fadeUp}>
                <ContactCard icon={LuMapPin} title="Registered Office">
                  <p>
                    Kukunoopally, District - Siddipet
                    <br />
                    (Hyderabad region), Pin code - 502301
                    <br />
                    Telangana, India
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#8db69a] px-4 py-2 text-[10px] font-semibold text-[#245c3b] transition hover:bg-[#edf4e8]"
                  >
                    View on Google Maps
                    <LuArrowRight size={13} />
                  </a>
                </ContactCard>
              </motion.div>

              <motion.div variants={fadeUp}>
                <ContactCard icon={LuClock} title="Business Hours" watermark>
                  <p>
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                    <br />
                    (IST)
                  </p>
                </ContactCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* LOCATION MAP + FAQ */}
        <section className="px-4 pb-5 pt-3 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-5 rounded-2xl border border-[#edf0e8] bg-white/65 p-4 sm:p-5 lg:grid-cols-[1.45fr_1fr]">
            <div>
              <h2 className="font-display text-2xl leading-tight text-[#162d42] sm:text-3xl">
                Our Location
              </h2>
              <p className="mt-1 text-xs leading-5 text-[#778074]">
                Visit our office or get in touch with us to discuss your
                requirements.
              </p>

              <div className="relative mt-4 h-[240px] overflow-hidden rounded-xl border border-[#e4e9de] bg-[#e9efe4] sm:h-[270px]">
                <iframe
                  title="Map showing the Siddipet, Telangana area"
                  src="https://maps.google.com/maps?q=Kukunoopally%2C%20Siddipet%2C%20Telangana%2C%20India&t=&z=10&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-semibold text-[#245c3b] shadow-md"
                >
                  Open in Maps
                  <LuExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="pt-1 lg:pl-2">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-2xl leading-tight text-[#162d42] sm:text-3xl">
                  Frequently Asked
                  <span className="block text-[#075332]">Questions</span>
                </h2>

                <a
                  href="/faq"
                  className="mt-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#8db69a] px-3 py-2 text-[10px] font-semibold text-[#245c3b] transition hover:bg-[#edf4e8]"
                >
                  View All FAQs
                  <LuArrowRight size={13} />
                </a>
              </div>

              <div className="mt-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFAQ === index;

                  return (
                    <div
                      key={faq.question}
                      className="border-b border-[#e9ece5] last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFAQ(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center gap-3 py-2.5 text-left"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e4ece5] text-[#234c35]">
                          {isOpen ? (
                            <LuMinus size={13} />
                          ) : (
                            <LuPlus size={13} />
                          )}
                        </span>
                        <span className="flex-1 text-[11px] leading-5 text-[#26364c]">
                          {faq.question}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="pb-3 pl-9 pr-2 text-[11px] leading-5 text-[#778074]">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative isolate overflow-hidden">
          <img
            src={images.hands}
            alt="Hands holding soil and a young plant"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#062c1c]/85 via-[#082f20]/70 to-[#082f20]/45" />

          <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_0.75fr] lg:px-12">
            <div className="relative z-10">
              <SectionLabel light>Ready to Start?</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                Let's Grow Together
              </h2>

              <p className="mt-2 max-w-lg text-xs leading-5 text-white/85 sm:text-sm">
                Talk to our experts and get customized solutions for your
                farming needs.
              </p>

              <a
                href="#contact-form"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .querySelector("form")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
              >
                Get a Free Consultation
                <LuArrowRight size={15} />
              </a>
            </div>

            <div className="relative z-10 rounded-2xl border border-white/70 bg-[#fffef5]/95 p-5 shadow-xl backdrop-blur-md sm:p-6">
              {supportItems.map((item) => (
                <div key={item} className="flex items-center gap-3 py-1.5">
                  <FiCheckCircle
                    size={16}
                    className="shrink-0 fill-[#075332] text-[#075332]"
                  />
                  <span className="text-xs text-[#35473a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
