import { DiscoverDreams } from "@/components/about/Bottom/DiscoverDreams";
import { EmpowerSection } from "@/components/about/empower/EmpowerSection";
import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import AboutBanner from "../../assets/images/aboutPageBanner.webp";

import React from "react";

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
