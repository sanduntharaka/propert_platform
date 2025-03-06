import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import { NewsGrid } from "@/components/News/news/NewsGrid";
import { WeekTrends } from "@/components/News/trends/WeekTrends";
import NewsBanner from "../../assets/images/news-banner.webp";

import React from "react";

const page = () => {
  return (
    <>
      <MainPagesBanner
        image={NewsBanner}
        title="Latest Property News"
        description=" Stay updated with the latest trends and insights in the property market."
      />
      <NewsGrid />
      <WeekTrends />
    </>
  );
};

export default page;
