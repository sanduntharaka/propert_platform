import { Metadata } from "next";
import { Aboutus } from "@/components/home/aboutus/Aboutus";
import { Banner } from "@/components/home/banner/Banner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import { InsightSection } from "@/components/home/insights/InsightSection";
import { PropetiesSection } from "@/components/home/properties/PropetiesSection";
import { PropertyUpdatesSection } from "@/components/home/propertyupdates/PropertyUpdatesSection";
import { QuestionsSection } from "@/components/home/questions/QuestionsSection";

export const metadata: Metadata = {
  title: "Trusted Platform for Property Investment in UK | Leighbrook",
  description:
    "Looking to start property investment in UK? Leighbrook makes it easy with expert insights, low entry points, and strong returns. Start investing today! ",
  keywords: ["property investment in uk"],
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
