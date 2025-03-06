import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import InsightsBanner from "../../assets/images/Placeholder Image15.webp";

import React from "react";
import { InsightsGrid } from "@/components/insight/insights/InsightsGrid";

const page = () => {
  return (
    <>
      <MainPagesBanner
        image={InsightsBanner}
        title="Discover Your Future With Our Insights"
        description="Unlock valuable insights into the property market and make informed
            decisions with our expert guidance."
      />
      <InsightsGrid />
    </>
  );
};

export default page;
