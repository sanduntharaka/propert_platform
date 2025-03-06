import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import PropertiesBanner from "../../assets/images/properties-banner.webp";
import { PropertiesGrid } from "@/components/Properties/properties/PropertiesGrid";
import React from "react";

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
