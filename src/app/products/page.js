"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuLeaf,
  LuSprout,
  LuShieldCheck,
  LuFlaskConical,
  LuFlower2,
  LuDroplets,
  LuTreePine,
  LuCheck,
  LuCircleCheck,
  LuPackage,
  LuWheat,
  LuDownload,
  LuChevronRight,
  LuChevronLeft,
  LuMicroscope,
  LuBadgeCheck,
  LuMenu,
  LuBug,
  LuBoxes,
} from "react-icons/lu";

import SiteShell from "@/components/SiteShell";

const images = {
  hero: "/Images/productpage-right side.webp",
  heroLeft: "/Images/home-hero-left.png",
  polyhouse: "/services/polyhouse Farming/Polyhouse Farm.png",
  hydroponics: "/services/Hydroponics/Hydroponics Farm.png",
  mushroom: "/services/Mushroom Farming/Mushrooms Farm.png",
  aquaculture: "/services/Aquaculture/Aquaculture Farm.png",
  floriculture: "/services/Floriculture/Floriculture.png",
  nursery: "/services/Nursery/nursery.png",
  goat: "/services/open cultivation/Goat Farming/Goat Farm.png",
  irrigation: "services/Smart Irrigation/Smart Irrigation.png",
  cropAdvisory: "services/Advisory/Advisory.png",
  project: "services/Project & AMC/Project & AMC.png",
  crop: "/Images/crop.avif",
};

const categories = [
  { name: "All Products", icon: LuSprout },

  // Crop protection
  { name: "Fungicides", icon: LuShieldCheck },
  { name: "Insecticides", icon: LuBug },
  { name: "Herbicides", icon: LuSprout },

  // Plant nutrition
  { name: "Fertilizers", icon: LuFlaskConical },
  { name: "Biofertilizers", icon: LuSprout },
  { name: "Biostimulants", icon: LuLeaf },
  { name: "Plant Growth Promoters", icon: LuFlower2 },
  { name: "Micronutrients", icon: LuFlaskConical },

  // Organic and soil inputs
  { name: "Organic Inputs", icon: LuTreePine },
  { name: "Grow Media", icon: LuSprout },

  // Other inventory
  { name: "Specialty Products", icon: LuFlower2 },
  { name: "Other Materials", icon: LuPackage },
  { name: "Packaging Materials", icon: LuBoxes },
];

const products = [
  // ==================== FUNGICIDES ====================

  {
    id: "acrobat",
    name: "Acrobat",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Supports planned crop protection programs",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "alliette",
    name: "Alliette",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Reported stock: 800 gm. Expired: June 2026. Keep expired stock separate and do not use.",
    image: "",
    color: "#175e3d",
    badge: "EXPIRED",
    benefits: [
      "Recorded in the farm's fungicide inventory",
      "Stock and expiry information available for tracking",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Do not use expired stock",
    dosage: "Not applicable while expired",
    packaging: "Reported quantity: 800 gm",
  },
  {
    id: "amistar",
    name: "Amistar",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: 600 ml.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Supports planned crop protection programs",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 600 ml",
  },
  {
    id: "blue-copper",
    name: "Blue Copper",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "kavach",
    name: "Kavach",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: 0.35 kg.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Supports planned crop protection programs",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 0.35 kg",
  },
  {
    id: "mancozeb",
    name: "Mancozeb",
    category: "Fungicides",
    description: "Fungicide product recorded in the farm inventory.",
    details: "Stock: 0.7 kg.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's fungicide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 0.7 kg",
  },
  {
    id: "melody-duo",
    name: "Melody Duo",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "nativo",
    name: "Nativo",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: 350 gm.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Supports planned crop protection programs",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 350 gm",
  },
  {
    id: "ridomil-gold",
    name: "Ridomil Gold",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: 150 gm.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 150 gm",
  },
  {
    id: "saaf",
    name: "Saaf",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "curzate",
    name: "Curzate",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "plantomycin",
    name: "Plantomycin",
    category: "Fungicides",
    description: "Crop protection product recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "kocide",
    name: "Kocide",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "agro-spread",
    name: "Agro Spread",
    category: "Fungicides",
    description: "Product recorded under fungicides in the farm stock report.",
    details: "Stock: Nil. Classification retained from the stock report; verify actual product type.",
    image: "",
    color: "#175e3d",
    badge: "FARM INPUT",
    benefits: [
      "Recorded in the farm inventory",
      "Product classification can be verified from its label",
    ],
    crops: "Confirm from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "amistar-top",
    name: "Amistar Top",
    category: "Fungicides",
    description: "Crop protection product listed under fungicides.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "turf",
    name: "Turf",
    category: "Fungicides",
    description: "Product recorded under fungicides in the farm stock report.",
    details: "Stock: Nil. Verify exact product identity from the packaging.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Recorded in the farm inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "hexaconazole",
    name: "Hexaconazole",
    category: "Fungicides",
    description: "Fungicide product recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#175e3d",
    badge: "FUNGICIDE",
    benefits: [
      "Included in the farm's fungicide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },

  // ==================== INSECTICIDES ====================

  {
    id: "abacin",
    name: "Abacin",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Reported stock: Nil. Expired: June 2026. Keep expired stock separate and do not use.",
    image: "",
    color: "#a64b13",
    badge: "EXPIRED",
    benefits: [
      "Recorded in the farm's insecticide inventory",
      "Stock and expiry information available for tracking",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Do not use expired stock",
    dosage: "Not applicable while expired",
    packaging: "Reported quantity: Nil",
  },
  {
    id: "benevia",
    name: "Benevia",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: 200 ml.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 200 ml",
  },
  {
    id: "coragen",
    name: "Coragen",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: 150 ml.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 150 ml",
  },
  {
    id: "delegate",
    name: "Delegate",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: Nil.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "ekalux",
    name: "Ekalux",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: 500 ml.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 500 ml",
  },
  {
    id: "interpit",
    name: "Interpit",
    category: "Insecticides",
    description: "Product recorded under insecticides in the farm stock report.",
    details: "Stock: 500 ml. Verify exact product identity from the packaging.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Recorded in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 500 ml",
  },
  {
    id: "jump",
    name: "Jump",
    category: "Insecticides",
    description: "Product recorded under insecticides in the farm stock report.",
    details: "Stock: 120 gm. Verify exact product identity from the packaging.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Recorded in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 120 gm",
  },
  {
    id: "keefun",
    name: "Keefun",
    category: "Insecticides",
    description: "Product recorded under insecticides in the farm stock report.",
    details: "Stock: Nil. Verify exact product identity from the packaging.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Recorded in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "marshal",
    name: "Marshal",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: Nil.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "movento",
    name: "Movento",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: 300 ml.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 300 ml",
  },
  {
    id: "neem-oil",
    name: "Neem Oil",
    category: "Insecticides",
    description: "Neem-based product recorded in the farm's insecticide inventory.",
    details: "Stock: 450 ml.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 450 ml",
  },
  {
    id: "proclaim",
    name: "Proclaim",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: 500 gm.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 500 gm",
  },
  {
    id: "rogor",
    name: "Rogor",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: 20 ml.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 20 ml",
  },
  {
    id: "sefina",
    name: "Sefina",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: Nil.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "simodis",
    name: "Simodis",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: 20 ml.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 20 ml",
  },
  {
    id: "ulala-oberon",
    name: "Ulala / Oberon",
    category: "Insecticides",
    description: "Product recorded under insecticides in the farm stock report.",
    details: "Stock: Nil. The report lists Ulala/Oberon together; verify the exact product identity.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Recorded in the farm's crop protection inventory",
      "Product identity can be verified from its packaging",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "oberon",
    name: "Oberon",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: 700 ml.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 700 ml",
  },
  {
    id: "chlorpyrifos",
    name: "Chlorpyrifos",
    category: "Insecticides",
    description: "Product recorded under insecticides in the farm stock report.",
    details: "Stock: Nil. Verify the exact product formulation and current approved use before any application.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Recorded in the farm's crop protection inventory",
      "Refer to current regulatory and product-label information",
    ],
    crops: "Confirm current approved crops and uses",
    application: "Use only if currently approved and according to the product label",
    dosage: "Follow current approved label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "seaweed-extract",
    name: "Seaweed Extract",
    category: "Biostimulants",
    description: "Seaweed-based product recorded in the farm stock report.",
    details: "Stock: Nil. Listed under insecticides in the report; categorized here as a biostimulant based on product type. Verify the label.",
    image: "",
    color: "#6b7d27",
    badge: "BIOSTIMULANT",
    benefits: [
      "Recorded in the farm inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "hur",
    name: "HUR",
    category: "Insecticides",
    description: "Product recorded under insecticides in the farm stock report.",
    details: "Stock: Nil. Verify exact product identity from the packaging.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Recorded in the farm inventory",
      "Product classification can be verified from its label",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "alika",
    name: "Alika",
    category: "Insecticides",
    description: "Crop protection product listed under insecticides.",
    details: "Stock: Nil.",
    image: "",
    color: "#a64b13",
    badge: "INSECTICIDE",
    benefits: [
      "Included in the farm's insecticide inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },

  // ==================== BIOSTIMULANTS & BOOSTERS ====================

  {
    id: "boron",
    name: "Boron",
    category: "Micronutrients",
    description: "Boron-based plant nutrient recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#a17b16",
    badge: "MICRONUTRIENT",
    benefits: [
      "Provides a source of boron",
      "Supports plant nutrient management",
      "Helps address boron requirements when needed",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "cxk-edta",
    name: "Cxk EDTA",
    category: "Micronutrients",
    description: "EDTA-based product recorded as a booster in the stock report.",
    details: "Stock: 94 gm. Listed as Booster.",
    image: "",
    color: "#a17b16",
    badge: "BOOSTER",
    benefits: [
      "Recorded in the farm's booster inventory",
      "Refer to the product label for nutrient composition",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 94 gm",
  },
  {
    id: "brexil-plus",
    name: "Brexil Plus",
    category: "Micronutrients",
    description: "Plant nutrition product recorded in the farm inventory.",
    details: "Stock: 1,970 gm.",
    image: "",
    color: "#a17b16",
    badge: "MICRONUTRIENT",
    benefits: [
      "Included in the farm's plant nutrition inventory",
      "Refer to the product label for nutrient composition",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 1,970 gm",
  },
  {
    id: "fantac-plus",
    name: "Fantac Plus",
    category: "Biostimulants",
    description: "Plant booster product recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#6b7d27",
    badge: "BIOSTIMULANT",
    benefits: [
      "Included in the farm's booster inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "ga3",
    name: "GA3",
    category: "Plant Growth Promoters",
    description: "Plant growth regulator recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#647a2b",
    badge: "GROWTH PROMOTER",
    benefits: [
      "Included in the farm's plant growth product inventory",
      "Refer to the product label for approved uses",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Use only according to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "humic-acid",
    name: "Humic Acid",
    category: "Biostimulants",
    description: "Soil and plant nutrition input recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#6b7d27",
    badge: "BIOSTIMULANT",
    benefits: [
      "Included in the farm's soil and plant nutrition inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "isobion",
    name: "Isobion",
    category: "Biostimulants",
    description: "Plant nutrition product recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#6b7d27",
    badge: "BIOSTIMULANT",
    benefits: [
      "Included in the farm's plant nutrition inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "mc-set",
    name: "MC Set",
    category: "Biostimulants",
    description: "Plant nutrition and booster product recorded in the farm inventory.",
    details: "Stock: 460 ml.",
    image: "",
    color: "#6b7d27",
    badge: "BIOSTIMULANT",
    benefits: [
      "Included in the farm's booster inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 460 ml",
  },
  {
    id: "megafol",
    name: "Megafol",
    category: "Biostimulants",
    description: "Plant biostimulant product recorded in the farm inventory.",
    details: "Stock: 314 ml.",
    image: "",
    color: "#6b7d27",
    badge: "BIOSTIMULANT",
    benefits: [
      "Included in the farm's biostimulant inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 314 ml",
  },
  {
    id: "rexolin-edta",
    name: "Rexolin EDTA",
    category: "Micronutrients",
    description: "Micronutrient product recorded in the farm inventory.",
    details: "Stock: Nil. Specific nutrient grade not provided.",
    image: "",
    color: "#a17b16",
    badge: "MICRONUTRIENT",
    benefits: [
      "Included in the farm's micronutrient inventory",
      "Refer to the product label for nutrient composition",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "yara-builder",
    name: "Yara Builder",
    category: "Specialty Products",
    description: "Plant nutrition product recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#647a2b",
    badge: "SPECIALTY PRODUCT",
    benefits: [
      "Included in the farm's plant nutrition inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "zinatra",
    name: "Zinatra",
    category: "Micronutrients",
    description: "Plant nutrition product recorded in the farm inventory.",
    details: "Stock: 0.38 litre (380 ml).",
    image: "",
    color: "#a17b16",
    badge: "MICRONUTRIENT",
    benefits: [
      "Included in the farm's plant nutrition inventory",
      "Refer to the product label for nutrient composition",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 380 ml",
  },
  {
    id: "perfekt",
    name: "Perfekt",
    category: "Biostimulants",
    description: "Plant booster product recorded in the farm inventory.",
    details: "Stock: Nil. Verify exact product identity from the packaging.",
    image: "",
    color: "#6b7d27",
    badge: "BIOSTIMULANT",
    benefits: [
      "Included in the farm's booster inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "nizzu",
    name: "Nizzu",
    category: "Specialty Products",
    description: "Product recorded under boosters and biostimulants in the farm stock report.",
    details: "Stock: Nil. Verify exact product identity and composition from the packaging.",
    image: "",
    color: "#647a2b",
    badge: "SPECIALTY PRODUCT",
    benefits: [
      "Recorded in the farm's booster inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "yaravita",
    name: "YaraVita",
    category: "Micronutrients",
    description: "Plant nutrition product range recorded in the farm inventory.",
    details: "Stock: Nil. Specific product formulation not provided.",
    image: "",
    color: "#a17b16",
    badge: "MICRONUTRIENT",
    benefits: [
      "Included in the farm's plant nutrition inventory",
      "Refer to the specific product label for nutrient composition",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "hoshi-ultra",
    name: "Hoshi Ultra",
    category: "Biostimulants",
    description: "Product recorded under boosters and biostimulants in the farm stock report.",
    details: "Stock: Nil. Verify exact product identity from the packaging.",
    image: "",
    color: "#6b7d27",
    badge: "BIOSTIMULANT",
    benefits: [
      "Included in the farm's booster inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },

  // ==================== FERTILIZERS ====================

  {
    id: "ammonium-molybdate",
    name: "Ammonium Molybdate",
    category: "Micronutrients",
    description: "Molybdenum-based plant nutrient recorded in the farm inventory.",
    details: "Stock: 350 gm.",
    image: "",
    color: "#2461a0",
    badge: "MICRONUTRIENT",
    benefits: [
      "Provides a source of molybdenum",
      "Supports plant nutrient management",
      "Helps address molybdenum requirements when needed",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 350 gm",
  },
  {
    id: "19-19-19",
    name: "19:19:19",
    category: "Fertilizers",
    description: "NPK fertilizer recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides nitrogen, phosphorus and potassium",
      "Supports balanced plant nutrition",
      "Can be included in a crop nutrition program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "calcium-nitrate",
    name: "Calcium Nitrate",
    category: "Fertilizers",
    description: "Calcium and nitrogen fertilizer recorded in the farm inventory.",
    details: "Stock: 50 kg.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides calcium and nitrogen",
      "Supports plant nutrient management",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 50 kg",
  },
  {
    id: "magnesium-sulphate",
    name: "Magnesium Sulphate",
    category: "Fertilizers",
    description: "Magnesium and sulphur fertilizer recorded in the farm inventory.",
    details: "Stock: 46.454 kg.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides magnesium and sulphur",
      "Supports plant nutrient management",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 46.454 kg",
  },
  {
    id: "mkp",
    name: "MKP",
    category: "Fertilizers",
    description: "Phosphorus and potassium fertilizer recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides phosphorus and potassium",
      "Supports plant nutrient management",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "map",
    name: "MAP",
    category: "Fertilizers",
    description: "Phosphorus and nitrogen fertilizer recorded in the farm inventory.",
    details: "Stock: 25.725 kg.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides phosphorus and nitrogen",
      "Supports plant nutrient management",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 25.725 kg",
  },
  {
    id: "potassium-nitrate",
    name: "Potassium Nitrate",
    category: "Fertilizers",
    description: "Potassium and nitrogen fertilizer recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides potassium and nitrogen",
      "Supports plant nutrient management",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "rexolin-cu-edta",
    name: "Rexolin Cu-EDTA",
    category: "Micronutrients",
    description: "Copper micronutrient product recorded in the farm inventory.",
    details: "Stock: 0.450 kg.",
    image: "",
    color: "#2461a0",
    badge: "MICRONUTRIENT",
    benefits: [
      "Provides a source of copper",
      "Supports plant nutrient management",
      "Helps address copper requirements when needed",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 0.450 kg",
  },
  {
    id: "rexolin-fe-edta",
    name: "Rexolin Fe-EDTA",
    category: "Micronutrients",
    description: "Iron micronutrient product recorded in the farm inventory.",
    details: "Stock: 2.1 kg.",
    image: "",
    color: "#2461a0",
    badge: "MICRONUTRIENT",
    benefits: [
      "Provides a source of iron",
      "Supports plant nutrient management",
      "Helps address iron requirements when needed",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 2.1 kg",
  },
  {
    id: "rexolin-mg-edta",
    name: "Rexolin Mg-EDTA",
    category: "Micronutrients",
    description: "Magnesium micronutrient product recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#2461a0",
    badge: "MICRONUTRIENT",
    benefits: [
      "Provides a source of magnesium",
      "Supports plant nutrient management",
      "Helps address magnesium requirements when needed",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "rexolin-zn-edta",
    name: "Rexolin Zn-EDTA",
    category: "Micronutrients",
    description: "Zinc micronutrient product recorded in the farm inventory.",
    details: "Stock: 1,000 gm (1 kg).",
    image: "",
    color: "#2461a0",
    badge: "MICRONUTRIENT",
    benefits: [
      "Provides a source of zinc",
      "Supports plant nutrient management",
      "Helps address zinc requirements when needed",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 1 kg",
  },
  {
    id: "rexolin-mn-edta",
    name: "Rexolin Mn-EDTA",
    category: "Micronutrients",
    description: "Manganese micronutrient product recorded in the farm inventory.",
    details: "Stock: 0.250 kg.",
    image: "",
    color: "#2461a0",
    badge: "MICRONUTRIENT",
    benefits: [
      "Provides a source of manganese",
      "Supports plant nutrient management",
      "Helps address manganese requirements when needed",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 0.250 kg",
  },
  {
    id: "borosol",
    name: "Borosol",
    category: "Micronutrients",
    description: "Boron-based plant nutrition product recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#2461a0",
    badge: "MICRONUTRIENT",
    benefits: [
      "Included in the farm's micronutrient inventory",
      "Refer to the product label for nutrient composition",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "sop",
    name: "SOP",
    category: "Fertilizers",
    description: "Potassium and sulphur fertilizer recorded in the farm inventory.",
    details: "Stock: 14.9 kg.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides potassium and sulphur",
      "Supports plant nutrient management",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 14.9 kg",
  },
  {
    id: "elixir",
    name: "Elixir",
    category: "Specialty Products",
    description: "Plant nutrition product recorded in the farm inventory.",
    details: "Stock: Nil. Verify exact formulation from the packaging.",
    image: "",
    color: "#2461a0",
    badge: "SPECIALTY PRODUCT",
    benefits: [
      "Recorded in the farm's plant nutrition inventory",
      "Refer to the product label for specific benefits",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },

  // ==================== OTHER MATERIALS ====================

  {
    id: "silvicide",
    name: "Silvicide",
    category: "Specialty Products",
    description: "Product recorded under other materials in the farm stock report.",
    details: "Stock: Nil. Verify exact product identity and intended use from the packaging.",
    image: "",
    color: "#647a2b",
    badge: "SPECIALTY PRODUCT",
    benefits: [
      "Recorded in the farm inventory",
      "Refer to the product label for intended use",
    ],
    crops: "Not specified",
    application: "Refer to the product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "velum-prime",
    name: "Velum Prime",
    category: "Crop Protection",
    description: "Crop protection product recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#647a2b",
    badge: "CROP PROTECTION",
    benefits: [
      "Included in the farm's crop protection inventory",
      "Refer to the product label for approved uses",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "paraquat",
    name: "Paraquat",
    category: "Herbicides",
    description: "Herbicide product recorded in the farm inventory.",
    details: "Stock: Nil. Use only where currently legally approved and according to the registered label.",
    image: "",
    color: "#647a2b",
    badge: "HERBICIDE",
    benefits: [
      "Recorded in the farm's herbicide inventory",
      "Refer to current regulatory and product-label information",
    ],
    crops: "Confirm current approved crops and uses",
    application: "Use only if currently approved and according to the product label",
    dosage: "Follow current approved label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "nitric-acid",
    name: "Nitric Acid",
    category: "Other Materials",
    description: "Agricultural-use chemical recorded in the farm inventory.",
    details: "Stock: Nil. Handle according to the safety data sheet and applicable safety requirements.",
    image: "",
    color: "#647a2b",
    badge: "CHEMICAL",
    benefits: [
      "Recorded in the farm's chemical inventory",
      "Intended use must be confirmed from the supplier documentation",
    ],
    crops: "Not specified",
    application: "Refer to the safety data sheet and approved use instructions",
    dosage: "Use only as specified by the supplier",
    packaging: "Not specified in stock report",
  },
  {
    id: "phosphoric-acid",
    name: "Phosphoric Acid",
    category: "Other Materials",
    description: "Agricultural-use chemical recorded in the farm inventory.",
    details: "Stock: Nil. Handle according to the safety data sheet and applicable safety requirements.",
    image: "",
    color: "#647a2b",
    badge: "CHEMICAL",
    benefits: [
      "Recorded in the farm's chemical inventory",
      "Intended use must be confirmed from the supplier documentation",
    ],
    crops: "Not specified",
    application: "Refer to the safety data sheet and approved use instructions",
    dosage: "Use only as specified by the supplier",
    packaging: "Not specified in stock report",
  },
  {
    id: "seedling-trays",
    name: "Seedling Trays",
    category: "Other Materials",
    description: "Nursery equipment recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#647a2b",
    badge: "NURSERY MATERIAL",
    benefits: [
      "Used for nursery inventory management",
      "Supports organized seedling handling",
    ],
    crops: "Applicable to nursery seedlings",
    application: "Use according to nursery requirements",
    dosage: "Not applicable",
    packaging: "Not specified in stock report",
  },
  {
    id: "sprayer",
    name: "Sprayer",
    category: "Other Materials",
    description: "Agricultural spraying equipment recorded in the farm inventory.",
    details: "Stock: 1 nos.",
    image: "",
    color: "#647a2b",
    badge: "EQUIPMENT",
    benefits: [
      "Farm spraying equipment",
      "Supports application of approved agricultural products",
    ],
    crops: "As applicable to the approved product being applied",
    application: "Operate according to the equipment manual and product label",
    dosage: "Use the calibrated application rate specified by the product label",
    packaging: "Reported quantity: 1 nos.",
  },
  {
    id: "sticky-traps",
    name: "Sticky Traps",
    category: "Other Materials",
    description: "Crop monitoring material recorded in the farm inventory.",
    details: "Stock: 0 nos.",
    image: "",
    color: "#647a2b",
    badge: "MONITORING MATERIAL",
    benefits: [
      "Used for pest monitoring",
      "Supports crop observation and monitoring activities",
    ],
    crops: "Confirm trap type and suitable crops",
    application: "Place according to the trap manufacturer's instructions",
    dosage: "Not applicable",
    packaging: "Reported quantity: 0 nos.",
  },
  {
    id: "weighing-machine",
    name: "Weighing Machine",
    category: "Other Materials",
    description: "Farm measurement equipment recorded in the inventory.",
    details: "Stock: 1 unit.",
    image: "",
    color: "#647a2b",
    badge: "EQUIPMENT",
    benefits: [
      "Supports accurate weighing of farm materials",
      "Useful for inventory and input measurement",
    ],
    crops: "Not applicable",
    application: "Operate according to the equipment manual",
    dosage: "Not applicable",
    packaging: "Reported quantity: 1 unit",
  },
  {
    id: "cucumber-seeds",
    name: "Cucumber Seeds",
    category: "Seeds",
    description: "Cucumber seed stock recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#647a2b",
    badge: "SEEDS",
    benefits: [
      "Recorded in the farm seed inventory",
      "Supports seed stock tracking and planning",
    ],
    crops: "Cucumber",
    application: "Follow the seed supplier's sowing instructions",
    dosage: "Follow the seed packet instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "snake-repellent",
    name: "Snake Repellent",
    category: "Other Materials",
    description: "Repellent product recorded in the farm inventory.",
    details: "Stock: 0.8 kg. Verify product composition and approved use from the packaging.",
    image: "",
    color: "#647a2b",
    badge: "REPELLENT",
    benefits: [
      "Recorded in the farm's safety and material inventory",
      "Refer to manufacturer instructions for intended use",
    ],
    crops: "Not applicable",
    application: "Use only according to the product label",
    dosage: "Follow manufacturer instructions",
    packaging: "Reported quantity: 0.8 kg",
  },

  // ==================== PACKAGING MATERIALS ====================

  {
    id: "carton-boxes",
    name: "Carton Boxes",
    category: "Packaging Materials",
    description: "Packaging material recorded in the farm inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#8a633c",
    badge: "PACKAGING",
    benefits: [
      "Supports farm product packaging",
      "Helps organize materials for storage and dispatch",
    ],
    crops: "Not applicable",
    application: "Use according to packaging requirements",
    dosage: "Not applicable",
    packaging: "Not specified in stock report",
  },
  {
    id: "gunny-bags",
    name: "Gunny Bags",
    category: "Packaging Materials",
    description: "Storage and packaging material recorded in the farm inventory.",
    details: "Stock: 1,660 nos.",
    image: "",
    color: "#8a633c",
    badge: "PACKAGING",
    benefits: [
      "Supports storage and handling of farm materials",
      "Useful for organizing bulk inventory",
    ],
    crops: "Not applicable",
    application: "Use according to storage and packaging requirements",
    dosage: "Not applicable",
    packaging: "Reported quantity: 1,660 nos.",
  },

  // ==================== GROW MEDIA & ORGANIC INPUTS ====================

  {
    id: "fym",
    name: "FYM",
    category: "Organic Inputs",
    description: "Farmyard manure recorded in the farm's basal application inventory.",
    details: "Stock: 300 bags.",
    image: "",
    color: "#795438",
    badge: "ORGANIC INPUT",
    benefits: [
      "Included in the farm's organic input inventory",
      "Used as part of soil and basal nutrition planning",
      "Refer to material quality and maturity before use",
    ],
    crops: "Confirm suitability for the intended crops",
    application: "Apply according to the farm's soil and crop plan",
    dosage: "Determine based on soil test and agronomic recommendation",
    packaging: "Reported quantity: 300 bags",
  },
  {
    id: "neem-cake",
    name: "Neem Cake",
    category: "Organic Inputs",
    description: "Neem-based organic soil input recorded in the farm inventory.",
    details: "Stock: 100 kg.",
    image: "",
    color: "#795438",
    badge: "ORGANIC INPUT",
    benefits: [
      "Included in the farm's organic input inventory",
      "Can be included in soil management programs",
      "Refer to product quality and supplier instructions",
    ],
    crops: "Confirm suitability for the intended crops",
    application: "Apply according to the farm's soil and crop plan",
    dosage: "Determine based on soil test and agronomic recommendation",
    packaging: "Reported quantity: 100 kg",
  },
  {
    id: "polysulphate",
    name: "Polysulphate",
    category: "Fertilizers",
    description: "Multi-nutrient fertilizer recorded in the farm's basal application inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Included in the farm's fertilizer inventory",
      "Refer to the product label for nutrient composition",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "npk-10-26-26",
    name: "NPK 10:26:26",
    category: "Fertilizers",
    description: "NPK fertilizer recorded in the farm's basal application inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides nitrogen, phosphorus and potassium",
      "Supports basal crop nutrition planning",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "vermicompost",
    name: "Vermicompost",
    category: "Organic Inputs",
    description: "Organic soil input recorded in the farm's basal application inventory.",
    details: "Stock: Nil.",
    image: "",
    color: "#795438",
    badge: "ORGANIC INPUT",
    benefits: [
      "Included in the farm's organic input inventory",
      "Can be included in soil improvement programs",
      "Refer to material quality and maturity before use",
    ],
    crops: "Confirm suitability for the intended crops",
    application: "Apply according to the farm's soil and crop plan",
    dosage: "Determine based on soil test and agronomic recommendation",
    packaging: "Not specified in stock report",
  },

  // ==================== BIOLOGICAL INPUTS / GROW MEDIA ====================

  {
    id: "trichoderma",
    name: "Trichoderma",
    category: "Biofertilizers",
    description: "Biological input recorded in the farm's grow media inventory.",
    details: "Stock: Nil. Verify strain, formulation and intended use from the product label.",
    image: "",
    color: "#175e3d",
    badge: "BIOLOGICAL INPUT",
    benefits: [
      "Included in the farm's biological input inventory",
      "Refer to the product label for specific uses",
      "Check strain and product quality before application",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "paecilomyces",
    name: "Paecilomyces",
    category: "Biofertilizers",
    description: "Biological input recorded in the farm's grow media inventory.",
    details: "Stock: Nil. Verify species, strain, formulation and intended use from the product label.",
    image: "",
    color: "#175e3d",
    badge: "BIOLOGICAL INPUT",
    benefits: [
      "Included in the farm's biological input inventory",
      "Refer to the product label for specific uses",
      "Check strain and product quality before application",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "consortium",
    name: "Consortium",
    category: "Biofertilizers",
    description: "Microbial consortium product recorded in the farm's grow media inventory.",
    details: "Stock: Nil. Verify microbial composition and intended use from the product label.",
    image: "",
    color: "#175e3d",
    badge: "BIOLOGICAL INPUT",
    benefits: [
      "Included in the farm's biological input inventory",
      "Refer to the product label for microbial composition",
      "Check compatibility before combining with other inputs",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "phosphobacteria",
    name: "Phosphobacteria",
    category: "Biofertilizers",
    description: "Phosphorus-related microbial input recorded in the farm inventory.",
    details: "Stock: Nil. Verify microbial strain and formulation from the product label.",
    image: "",
    color: "#175e3d",
    badge: "BIOLOGICAL INPUT",
    benefits: [
      "Included in the farm's biological input inventory",
      "Refer to the product label for specific uses",
      "Check strain and product quality before application",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },
  {
    id: "mycorrhiza",
    name: "Mycorrhiza",
    category: "Biofertilizers",
    description: "Mycorrhizal biological input recorded in the farm's grow media inventory.",
    details: "Stock: Nil. Verify fungal species, formulation and intended use from the product label.",
    image: "",
    color: "#175e3d",
    badge: "BIOLOGICAL INPUT",
    benefits: [
      "Included in the farm's biological input inventory",
      "Refer to the product label for specific uses",
      "Check strain and product quality before application",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Not specified in stock report",
  },

  // ==================== ADDITIONAL ITEMS ====================

  {
    id: "aluminium-ladder",
    name: "Aluminium Ladder",
    category: "Other Materials",
    description: "Farm equipment recorded in the additional items inventory.",
    details: "Stock: 4 nos.",
    image: "",
    color: "#647a2b",
    badge: "EQUIPMENT",
    benefits: [
      "Supports farm maintenance activities",
      "Useful for reaching elevated work areas",
    ],
    crops: "Not applicable",
    application: "Use according to equipment safety instructions",
    dosage: "Not applicable",
    packaging: "Reported quantity: 4 nos.",
  },
  {
    id: "ec-ph-meter",
    name: "EC & pH Meter",
    category: "Other Materials",
    description: "Farm measurement equipment recorded in the additional items inventory.",
    details: "Stock: 1 nos.",
    image: "",
    color: "#647a2b",
    badge: "MEASUREMENT EQUIPMENT",
    benefits: [
      "Measures electrical conductivity",
      "Measures pH",
      "Supports monitoring of water and nutrient solutions",
    ],
    crops: "Applicable to farm water and nutrient solution monitoring",
    application: "Use and calibrate according to the equipment manual",
    dosage: "Not applicable",
    packaging: "Reported quantity: 1 nos.",
  },
  {
    id: "hygrometer",
    name: "Hygrometer",
    category: "Other Materials",
    description: "Environmental measurement equipment recorded in the farm inventory.",
    details: "Stock: 1 nos.",
    image: "",
    color: "#647a2b",
    badge: "MEASUREMENT EQUIPMENT",
    benefits: [
      "Measures relative humidity",
      "Supports monitoring of farm environmental conditions",
    ],
    crops: "Applicable to farm and storage environments",
    application: "Use according to the equipment manual",
    dosage: "Not applicable",
    packaging: "Reported quantity: 1 nos.",
  },
  {
    id: "beaker",
    name: "Beaker",
    category: "Other Materials",
    description: "Measurement and laboratory accessory recorded in the farm inventory.",
    details: "Stock: 2 nos.",
    image: "",
    color: "#647a2b",
    badge: "LAB MATERIAL",
    benefits: [
      "Supports measuring and handling liquids",
      "Useful for farm testing and preparation activities",
    ],
    crops: "Not applicable",
    application: "Use according to the intended measurement task",
    dosage: "Not applicable",
    packaging: "Reported quantity: 2 nos.",
  },
  {
    id: "dap",
    name: "DAP",
    category: "Fertilizers",
    description: "Nitrogen and phosphorus fertilizer recorded in the additional items inventory.",
    details: "Stock: 40 kg.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides nitrogen and phosphorus",
      "Supports basal crop nutrition planning",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 40 kg",
  },
  {
    id: "ssp",
    name: "SSP (Single Super Phosphate)",
    category: "Fertilizers",
    description: "Phosphorus and sulphur fertilizer recorded in the additional items inventory.",
    details: "Stock: 200 kg.",
    image: "",
    color: "#2461a0",
    badge: "FERTILIZER",
    benefits: [
      "Provides phosphorus and sulphur",
      "Supports basal crop nutrition planning",
      "Can complement a balanced fertilizer program",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 200 kg",
  },
  {
    id: "micro-nutrient-blend",
    name: "Micro Nutrient Blend",
    category: "Micronutrients",
    description: "Mixed micronutrient product recorded in the additional items inventory.",
    details: "Stock: 900 gm. Specific nutrient composition not provided.",
    image: "",
    color: "#2461a0",
    badge: "MICRONUTRIENT",
    benefits: [
      "Included in the farm's micronutrient inventory",
      "Refer to the product label for nutrient composition",
      "Supports crop nutrient management according to identified needs",
    ],
    crops: "Confirm suitable crops from the product label",
    application: "Refer to the approved product label",
    dosage: "Follow label instructions",
    packaging: "Reported quantity: 900 gm",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-[10px] font-bold uppercase tracking-[0.25em] ${
        light ? "text-[#c7dda7]" : "text-[#477c53]"
      }`}
    >
      {children}
    </p>
  );
}

function ProductBottle({ product, large = false }) {
  return (
    <div
      className={`relative flex items-center justify-center ${
        large ? "h-full min-h-62.5" : "h-28"
      }`}
    >
      <div
        className={`relative flex flex-col items-center ${
          large ? "scale-110 sm:scale-125" : ""
        }`}
      >
        {/* Bottle cap */}
        <div
          className="z-10 h-3 w-8 rounded-t-md border border-black/10"
          style={{ backgroundColor: product.color }}
        />

        {/* Bottle neck */}
        <div
          className="h-3 w-6 border-x border-black/10"
          style={{ backgroundColor: product.color }}
        />

        {/* Bottle body */}
        <div className="relative h-[76px] w-[57px] overflow-hidden rounded-b-[13px] rounded-t-md border border-black/10 bg-gradient-to-r from-[#cbd3c9] via-white to-[#c6cec4] shadow-md">
          <div
            className="absolute inset-x-0 top-0 h-2"
            style={{ backgroundColor: product.color }}
          />

          <div className="absolute inset-x-1 top-4 rounded-sm border border-[#d7dfce] bg-[#fbfcf4] px-0.5 py-1 text-center">
            <span
              className="block truncate text-[5px] font-extrabold"
              style={{ color: product.color }}
            >
              FRESH AGRICULTURE
            </span>

            <span className="mt-1 block text-[7px] font-black leading-tight text-[#263a2b]">
              {product.name}
            </span>

            <div
              className="mx-auto mt-1 flex h-5 w-9 items-center justify-center rounded-sm"
              style={{ backgroundColor: product.color }}
            >
              <LuSprout className="text-white" size={13} />
            </div>

            <span className="mt-1 block text-[4px] text-[#586558]">
              AGRICULTURAL INPUT
            </span>
          </div>

          <div
            className="absolute bottom-0 h-2 w-full"
            style={{ backgroundColor: product.color }}
          />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onSelect }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e8eade] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#193c27]/5"
    >
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="relative block w-full bg-linear-to-b from-[#f5f6ed] to-white px-3 pt-3 text-left"
        aria-label={`View ${product.name} details`}
      >
        <ProductBottle product={product} />

        <span className="absolute right-3 top-3 rounded-full border border-[#e3e8dd] bg-white p-1.5 text-[#326a45] transition group-hover:bg-[#075332] group-hover:text-white">
          <LuArrowUpRight size={15} />
        </span>
      </button>

      <div className="flex flex-1 items-start justify-between gap-2 p-4 pt-2">
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="min-w-0 text-left"
        >
          <h3 className="text-sm font-bold text-[#1c3025]">{product.name}</h3>
          <p className="mt-1.5 text-[10px] leading-4 text-[#737d72] sm:text-xs">
            {product.description}
          </p>
        </button>

        <button
          type="button"
          onClick={() => onSelect(product)}
          aria-label={`View ${product.name}`}
          className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#a8c8b0] text-[#286b42] transition hover:bg-[#075332] hover:text-white"
        >
          <LuArrowRight size={14} />
        </button>
      </div>
    </motion.article>
  );
}

function PhotoFeature() {
  return (
    <div className="relative h-full min-h-[250px] overflow-hidden rounded-2xl sm:min-h-[300px]">
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1100&q=85"
        alt="Young plants growing in rich soil"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/10 to-[#062d1d]/95" />

      <div className="absolute inset-y-0 right-0 flex w-[55%] flex-col justify-center gap-4 p-4 text-white sm:p-6">
        {[
          { icon: LuSprout, text: "Supports soil management" },
          { icon: LuDroplets, text: "Crop nutrition planning" },
          { icon: LuLeaf, text: "Plant growth support" },
          { icon: LuShieldCheck, text: "Responsible use" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#26764b]">
                <Icon size={16} />
              </span>
              <p className="text-[10px] leading-4 sm:text-xs">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Biofertilizers");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [relatedStart, setRelatedStart] = useState(0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Products") return products;

    const categoryMatches = products.filter(
      (product) => product.category === activeCategory,
    );

    return categoryMatches.length > 0 ? categoryMatches : products;
  }, [activeCategory]);

  const relatedProducts = useMemo(() => {
    const alternatives = products.filter(
      (product) => product.id !== selectedProduct.id,
    );

    return Array.from({ length: Math.min(5, alternatives.length) }, (_, i) => {
      return alternatives[(relatedStart + i) % alternatives.length];
    });
  }, [selectedProduct, relatedStart]);

  function chooseCategory(category) {
    setActiveCategory(category.name);
  }

  function selectProduct(product) {
    setSelectedProduct(product);
    document
      .getElementById("featured-product")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <SiteShell>
      <main className="overflow-hidden bg-[#fbfaf4] text-[#193c27]">
        {/* HERO */}
        <section className="relative isolate min-h-[500px] overflow-hidden sm:min-h-[520px]">
          <img
            src={images.hero}
            alt=""
            className="absolute lg:hidden inset-0 -z-20 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fbfaf4] via-[#fbfaf4]/95 to-[#fbfaf4]/15" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#fbfaf4]/80 via-transparent to-white/10" />

          {/* LEFT DECORATIVE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-50 z-0 hidden h-auto w-112.5 lg:block n"
          >
            <img
              src={images.heroLeft}
              alt=""
              className="h-auto w-full object-contain"
            />
          </motion.div>

          <div className="mx-auto grid min-h-125 max-w-7xl items-center gap-8 px-5 pb-12 pt-10 sm:min-h-130 sm:px-8 lg:grid-cols-2 lg:px-12">
            {/* left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-xl"
            >
              <motion.div variants={fadeUp}>
                <div className="mb-7 flex items-center gap-2 text-xs text-[#477c53]">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                  <LuChevronRight size={13} />
                  <span>Products</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl leading-[1.03] tracking-tight text-[#142b43] sm:text-6xl"
              >
                Our Products
                <span className="mt-1 block text-[#075332]">
                  For Healthier Crops and Better Yields
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-lg text-sm leading-7 text-[#5f6b62] sm:text-base"
              >
                Explore agricultural inputs and crop-support products designed
                to complement soil management, plant nutrition, and crop care.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-x-6 gap-y-4 w-fit p-2 rounded-2xl backdrop-blur-xs"
              >
                {[
                  { icon: LuLeaf, label: "Quality Products" },
                  { icon: LuFlaskConical, label: "Product Information" },
                  { icon: LuShieldCheck, label: "Responsible Use" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2">
                      <Icon size={24} className="text-[#075332]" />
                      <span className="max-w-22.5 text-[10px] font-semibold leading-4 text-[#35473a] sm:text-xs">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* right content */}

            <motion.div
              initial={{ opacity: 0, scale: 0.97, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden  min-h-full lg:block"
            >
              <div className="absolute right-[8%] top-[6%] flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/80 bg-white/90 text-center shadow-lg z-10">
                <LuTrendingUpIcon />
                <span className="mt-1 text-[9px] font-semibold leading-3">
                  Better
                  <br />
                  Yields
                </span>
              </div>

              <div className="absolute right-[1%] top-[36%] flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/80 bg-white/90 text-center shadow-lg z-10">
                <LuShieldCheck size={22} className="text-[#075332]" />
                <span className="mt-1 text-[9px] font-semibold leading-3">
                  Crop
                  <br />
                  Care
                </span>
              </div>

              <div className="absolute left-[10%] top-[20%] flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/80 bg-white/90 text-center shadow-lg z-10">
                <LuSprout size={22} className="text-[#075332]" />
                <span className="mt-1 text-[9px] font-semibold leading-3">
                  Soil
                  <br />
                  Health
                </span>
              </div>
              {/* RIGHT HERO IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className=" relative hidden  min-h-full lg:block"
              >
                <img
                  src={images.hero}
                  alt=""
                  aria-hidden="true"
                  className="absolute min-h-auto min-w-190 -right-20 -top-30 object-center"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CATEGORY NAVIGATION */}
        <section className="relative z-20 mx-auto -mt-2 max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#e9eadf] bg-white shadow-lg shadow-[#193c27]/5 sm:grid-cols-4 lg:grid-cols-7">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => chooseCategory(category)}
                  className={`relative flex min-h-[84px] flex-col items-center justify-center gap-2 px-2 py-3 text-center transition sm:min-h-[94px] ${
                    isActive
                      ? "bg-[#06452d] text-white"
                      : "text-[#254a35] hover:bg-[#f0f5e9]"
                  }`}
                >
                  <Icon size={23} strokeWidth={1.8} />
                  <span className="text-[9px] font-semibold leading-4 sm:text-[10px]">
                    {category.name}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1 h-3 w-3 rotate-45 bg-[#06452d]" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* CATEGORY INTRODUCTION */}
        <section className="px-5 pb-8 pt-12 sm:px-8 sm:pt-14 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-2 lg:gap-12">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SectionLabel>{activeCategory}</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                Natural Solutions for
                <span className="block text-[#075332]">
                  Sustainable Farming
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#687168]">
                Browse products in our agricultural range. Review product
                information, intended uses, and label directions to identify
                options appropriate for your requirements.
              </p>

              <a
                href="#product-list"
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#78a98a] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eaf2e6]"
              >
                View{" "}
                {activeCategory === "All Products"
                  ? "All Products"
                  : activeCategory}
                <LuArrowRight size={15} />
              </a>
            </motion.div>

            <PhotoFeature />
          </div>
        </section>

        {/* PRODUCT CARDS */}
        <section
          id="product-list"
          className="scroll-mt-8 px-5 pb-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <SectionLabel>Explore Our Range</SectionLabel>
                <h2 className="font-display text-2xl text-[#162d42] sm:text-3xl">
                  {activeCategory === "All Products"
                    ? "Our Products"
                    : activeCategory}
                </h2>
              </div>

              <span className="text-xs text-[#778074]">
                {filteredProducts.length} products
              </span>
            </div>

            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={selectProduct}
                />
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <p className="py-12 text-center text-sm text-[#687468]">
                No products are currently listed in this category.
              </p>
            )}
          </div>
        </section>

        {/* FEATURED PRODUCT */}
        <section
          id="featured-product"
          className="scroll-mt-6 px-4 pb-8 sm:px-8 lg:px-12"
        >
          <motion.div
            key={selectedProduct.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-white bg-white/90 p-4 shadow-sm sm:p-6 lg:grid-cols-[0.95fr_1.15fr_0.8fr] lg:gap-7"
          >
            {/* Product image */}
            <div className="relative min-h-72.5 overflow-hidden rounded-2xl bg-[#f0f4e8]">
              <ProductBottle product={selectedProduct} large={true} />
              <div className="absolute inset-0 bg-linear-to-t from-[#163a27]/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#245c3b] shadow-lg">
                  <LuSprout size={24} />
                </div>
              </div>

              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#245c3b]">
                Product preview
              </div>
            </div>

            {/* Product description */}
            <div className="flex flex-col justify-center py-2">
              <span className="mb-3 w-fit rounded-full bg-[#dcefd8] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#286b42]">
                {selectedProduct.badge}
              </span>

              <h2 className="font-display text-3xl leading-tight text-[#162d42] sm:text-4xl">
                {selectedProduct.name}
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#687168]">
                {selectedProduct.description}
              </p>

              <p className="mt-4 text-xs leading-6 text-[#778074]">
                {selectedProduct.details}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#075332] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
                >
                  Enquire Now
                  <LuArrowRight size={15} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#85ae91] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eef5e9]"
                >
                  Request Brochure
                  <LuDownload size={15} />
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-2xl bg-[#f5f7ee] p-5 sm:p-6">
              <h3 className="text-sm font-bold text-[#243c30]">
                Product Information
              </h3>

              <ul className="mt-5 space-y-4">
                {selectedProduct.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-xs leading-5 text-[#5d6b5e]"
                  >
                    <LuCircleCheck
                      size={16}
                      className="mt-0.5 shrink-0 text-[#17613c]"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-[#e0e7d8] pt-4 text-[10px] leading-5 text-[#7b8478]">
                Check the current product label for verified benefits and
                permitted uses.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="px-5 pb-12 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 border-b border-[#e2e8dc] pb-8 md:grid-cols-4">
            {[
              {
                icon: LuWheat,
                title: "Suitable Crops",
                description: selectedProduct.crops,
              },
              {
                icon: LuFlaskConical,
                title: "Application Method",
                description: selectedProduct.application,
              },
              {
                icon: LuDroplets,
                title: "Dosage",
                description: selectedProduct.dosage,
              },
              {
                icon: LuPackage,
                title: "Packaging",
                description: selectedProduct.packaging,
              },
            ].map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.title}
                  className="flex items-start gap-3 border-[#e2e8dc] px-2 sm:px-4 md:border-r last:md:border-r-0"
                >
                  <Icon size={25} className="shrink-0 text-[#286b42]" />
                  <div>
                    <h3 className="text-xs font-bold text-[#243c30]">
                      {spec.title}
                    </h3>
                    <p className="mt-1.5 text-[10px] leading-5 text-[#778074] sm:text-xs">
                      {spec.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RELATED PRODUCTS */}
        <section className="px-5 pb-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-white/70 p-4 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <SectionLabel>Explore More</SectionLabel>
                <h2 className="font-display text-2xl text-[#162d42] sm:text-3xl">
                  Related Products
                </h2>
                <p className="mt-2 text-xs leading-5 text-[#778074]">
                  Explore more products from the agricultural range.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous related products"
                  onClick={() =>
                    setRelatedStart(
                      (relatedStart - 1 + products.length - 1) %
                        (products.length - 1),
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8dc] text-[#245c3b] transition hover:bg-[#075332] hover:text-white"
                >
                  <LuChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  aria-label="Next related products"
                  onClick={() =>
                    setRelatedStart((relatedStart + 1) % (products.length - 1))
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8dc] text-[#245c3b] transition hover:bg-[#075332] hover:text-white"
                >
                  <LuChevronRight size={18} />
                </button>
              </div>
            </div>

            <motion.div
              key={relatedStart + selectedProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            >
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={selectProduct}
                />
              ))}
            </motion.div>

            <div className="mt-6 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#85ae91] px-5 py-3 text-xs font-semibold text-[#245c3b] transition hover:bg-[#eef5e9]"
              >
                Ask About Our Products
                <LuArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* CONSULTATION CTA */}
        <section className="relative isolate overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
          <img
            src={images.crop}
            alt="Sunlit agricultural landscape"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-[#062f20]/35" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto grid max-w-5xl gap-7 rounded-3xl border border-white/70 bg-[#fffef5]/45 p-6 shadow-2xl backdrop-blur-md sm:p-9 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <SectionLabel>Need Help Choosing the Right Product?</SectionLabel>

              <h2 className="font-display text-3xl leading-tight text-[#193c27] sm:text-4xl">
                Get Expert Advice for Your Farming Needs
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-[#687468]">
                Share your crop and agricultural requirements with our team to
                discuss suitable product options and their correct use.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#075332] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#0b6941]"
              >
                Get a Consultation
                <LuArrowRight size={16} />
              </a>
            </div>

            <ul className="grid content-center gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Product information",
                "Application guidance",
                "Crop-specific discussion",
                "Agricultural support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <LuCircleCheck
                    size={17}
                    className="shrink-0 text-[#17613c]"
                  />
                  <span className="text-xs font-medium text-[#465748]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}

function LuTrendingUpIcon() {
  return <LuBadgeCheck size={22} className="text-[#075332]" />;
}
