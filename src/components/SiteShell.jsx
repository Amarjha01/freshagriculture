
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const defaultNavbarTheme = {
  backgroundColor: "#",
  textColor: "#252923",
  accentColor: "#153F2B",
};

const defaultFooterTheme = {
  backgroundColor: "#0D2C1D",
  textColor: "#F7F6EF",
  mutedColor: "#C0CDBF",
  accentColor: "#A8C96A",
};

export default function SiteShell({
  children,
  navbarTheme = {},
  footerTheme = {},
}) {
  return (
    <>
      <Navbar {...defaultNavbarTheme} {...navbarTheme} />
      <main>{children}</main>
      <Footer {...defaultFooterTheme} {...footerTheme} />
    </>
  );
}
