import { Metadata } from "next";

import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import InsightsBanner from "../../assets/images/Placeholder Image15.webp";

import React from "react";
import { InsightsGrid } from "@/components/insight/insights/InsightsGrid";

export const metadata: Metadata = {
  title: "UK Property Investment Insights & Guides | Leighbrook",
  description:
    "Maximise your returns with our data-driven UK property investment insights. Read expert guides on rental yields, market trends, and buy-to-let strategies.",
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
