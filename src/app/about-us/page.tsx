import { Metadata } from "next";
import { DiscoverDreams } from "@/components/about/Bottom/DiscoverDreams";
import { EmpowerSection } from "@/components/about/empower/EmpowerSection";
import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import AboutBanner from "../../assets/images/aboutPageBanner.webp";

export const metadata: Metadata = {
  title: "Investment Companies UK | Real Estate Investment UK",
  description:
    "Learn about our mission and vision as leading UK investment companies specializing in real estate opportunities.",
  keywords: [
    "investment companies uk",
    "best areas to invest in uk property",
    "investing in real estate uk",
  ],
};

const page = () => {
  return (
    <>
      <MainPagesBanner
        image={AboutBanner}
        title="Learn More About Our Mission and Vision"
        description=" Connecting you to exclusive property investments with transparency and trust, making real estate exploration simple and seamless."
      />
      <EmpowerSection />
      <DiscoverDreams />
      <ContactSection />
    </>
  );
};

export default page;
