
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata = {
  title: "Fresh Agriculture | Green Bio-Tech LLP",
  description:
    "Explore modern farming solutions, agricultural projects and products from Fresh Agriculture by Green Bio-Tech LLP.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${dmSerif.variable}`}
    >
      <body className="font-sans antialiased max-w-7xl mx-auto">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
