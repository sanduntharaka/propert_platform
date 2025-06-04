import { Metadata } from "next";

import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import InsightsBanner from "../../assets/images/Placeholder Image15.webp";

import React from "react";
import { InsightsGrid } from "@/components/insight/insights/InsightsGrid";

export const metadata: Metadata = {
  title: "Property Investors UK | Real Estate Investors UK",
  description:
    "Get expert insights for property investors in the UK. Discover market trends, investment strategies, and real estate opportunities.",
  keywords: ["real estate investors uk", "real estate investment companies"],
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
