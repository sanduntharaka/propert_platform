import { Aboutus } from "@/components/home/aboutus/Aboutus";
import { Banner } from "@/components/home/banner/Banner";
import { InsightSection } from "@/components/home/insights/InsightSection";
import { PropetiesSection } from "@/components/home/properties/PropetiesSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Aboutus />
      <PropetiesSection />
      <InsightSection />
    </div>

  )
}
