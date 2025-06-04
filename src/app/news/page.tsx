import { Metadata } from "next";

import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import { NewsGrid } from "@/components/News/news/NewsGrid";
import { WeekTrends } from "@/components/News/trends/WeekTrends";
import NewsBanner from "../../assets/images/news-banner.webp";

export const metadata: Metadata = {
  title: "Investment Platforms UK | Purchasing Investment Property",
  description:
    "Get expert insights for property investors in the UK. Discover market trends, investment strategies, and real estate opportunities.",
  keywords: ["investment platforms uk", "investment properties for sale uk"],
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
