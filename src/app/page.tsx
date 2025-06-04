import { Metadata } from "next";
import { Aboutus } from "@/components/home/aboutus/Aboutus";
import { Banner } from "@/components/home/banner/Banner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import { InsightSection } from "@/components/home/insights/InsightSection";
import { PropetiesSection } from "@/components/home/properties/PropetiesSection";
import { PropertyUpdatesSection } from "@/components/home/propertyupdates/PropertyUpdatesSection";
import { QuestionsSection } from "@/components/home/questions/QuestionsSection";

export const metadata: Metadata = {
  title: "Property Investment in UK | Best UK Property Investments",
  description:
    "Discover the best property investment opportunities in the UK with our expert guidance and exclusive listings.",
  keywords: [
    "property investment in uk",
    "best places in uk for property investment",
    "best uk property investments",
  ],
};

export default function Home() {
  return (
    <div>
      <Banner />
      <Aboutus />
      <PropetiesSection />
      <InsightSection />
      <PropertyUpdatesSection />
      <QuestionsSection />
      <ContactSection />
    </div>
  );
}
