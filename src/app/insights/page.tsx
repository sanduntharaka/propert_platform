import { Metadata } from "next";

import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import InsightsBanner from "../../assets/images/Placeholder Image15.webp";

import React from "react";
import { InsightsGrid } from "@/components/insight/insights/InsightsGrid";

export const metadata: Metadata = {
  title: "Trends & Tips for Property Investors UK | Leighbrook",
  description:
    "Leighbrook provides data-driven insights for property investors UK. Explore trends, forecasts, and expert advice for smarter investing.",
  keywords: ["property investors uk"],
};

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
