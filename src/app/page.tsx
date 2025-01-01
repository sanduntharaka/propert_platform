import { Aboutus } from "@/components/home/aboutus/Aboutus";
import { Banner } from "@/components/home/banner/Banner";
import { ContactSection } from "@/components/home/contactsection/ContactSection";
import { InsightSection } from "@/components/home/insights/InsightSection";
import { PropetiesSection } from "@/components/home/properties/PropetiesSection";
import { PropertyUpdatesSection } from "@/components/home/propertyupdates/PropertyUpdatesSection";
import { QuestionsSection } from "@/components/home/questions/QuestionsSection";

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

  )
}
