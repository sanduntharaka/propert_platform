import { Metadata } from "next";
import { Aboutus } from "@/components/home/aboutus/Aboutus";
import { Banner } from "@/components/home/banner/Banner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import { InsightSection } from "@/components/home/insights/InsightSection";
import { PropetiesSection } from "@/components/home/properties/PropetiesSection";
import { PropertyUpdatesSection } from "@/components/home/propertyupdates/PropertyUpdatesSection";
import { QuestionsSection } from "@/components/home/questions/QuestionsSection";

export const metadata: Metadata = {
  title:
    "Best Property Investments Platform in the UK | Modern Apartments & Luxury Real Estate | Leighbrook",
  description:
    "Discover UK property investments, modern apartments, and luxury real estate across top cities. Browse listings, explore investment opportunities, and buy or sell property with ease.",
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
