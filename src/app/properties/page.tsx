import { Metadata } from "next";
import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import PropertiesBanner from "../../assets/images/properties-banner.webp";
import { PropertiesGrid } from "@/components/Properties/properties/PropertiesGrid";

export const metadata: Metadata = {
  title: "Properties for Investment in UK | Best Places to Invest",
  description:
    "Explore premium properties for investment in the UK, including the best locations and opportunities for high returns.",
  keywords: [
    "properties for investment in uk",
    "best place to invest in property uk",
    "best places in uk for property investment",
  ],
};

const page = () => {
  return (
    <>
      <MainPagesBanner
        image={PropertiesBanner}
        title="Explore a World of Exclusive Properties Tailored to Your Needs"
        description="Discover a curated selection of properties designed to suit every lifestyle. From modern apartments to luxurious retreats, explore detailed listings and stunning visuals to find your perfect match."
      />
      <PropertiesGrid />
      <ContactSection />
    </>
  );
};

export default page;
