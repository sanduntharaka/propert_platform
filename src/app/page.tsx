import { Metadata } from "next";
import { Aboutus } from "@/components/home/aboutus/Aboutus";
import { Banner } from "@/components/home/banner/Banner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import { InsightSection } from "@/components/home/insights/InsightSection";
import { PropetiesSection } from "@/components/home/properties/PropetiesSection";
import { PropertyUpdatesSection } from "@/components/home/propertyupdates/PropertyUpdatesSection";
import { QuestionsSection } from "@/components/home/questions/QuestionsSection";

export const metadata: Metadata = {
  title: "UK Property Investments & Luxury Real Estate | Leighbrook",
  description:
    "Discover high-yield UK property investments and luxury real estate. Leighbrook offers data-driven buy-to-let and commercial opportunities. Enquire today.",
  keywords: [
    "uk property investments",
    "property investment uk",
    "modern apartments uk",
    "luxury real estate uk",
    "buy to let uk",
  ],
};

export default function Home() {
  return (
    <div>
      <Banner /> {/* Hero Banner Section */}
      <Aboutus />
      <PropetiesSection />
      <InsightSection />
      <PropertyUpdatesSection />
      <QuestionsSection />
      <ContactSection />
    </div>
  );
}
