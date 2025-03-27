import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import ContactImage from "../../assets/images/Placeholder Image16.webp";
import { ContactSection } from "@/components/home/contactsection/ContactSection";

import React from "react";
import { ContactForm } from "@/components/contact/ContactForm";

const page = () => {
  return (
    <>
      <MainPagesBanner
        image={ContactImage}
        title="Get in Touch"
        description="We’re here to assist you with any inquiries or support you may need."
      />
      <ContactForm />
      <ContactSection />
    </>
  );
};

export default page;
