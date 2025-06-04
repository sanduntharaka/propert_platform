import { Metadata } from "next";

import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import { NewsGrid } from "@/components/News/news/NewsGrid";
import { WeekTrends } from "@/components/News/trends/WeekTrends";
import NewsBanner from "../../assets/images/news-banner.webp";

export const metadata: Metadata = {
  title: "Latest News on Investment Platforms UK | Leighbrook",
  description:
    "Stay ahead in the world of investment platforms UK. Read Leighbrook’s latest news, expert takes, and financial updates.",
  keywords: ["investment platforms uk"],
};

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
