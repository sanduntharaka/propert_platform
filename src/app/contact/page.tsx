import { Metadata } from "next";
import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import ContactImage from "../../assets/images/Placeholder Image16.webp";
import { ContactSection } from "@/components/home/contactsection/ContactSection";

import React from "react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Leighbrook | UK Property Investment Advisors",
  description:
    "Ready to build your property portfolio? Contact Leighbrook's expert advisors today to discuss your UK real estate investment goals.",
};

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
