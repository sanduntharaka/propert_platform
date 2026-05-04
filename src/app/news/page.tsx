import { Metadata } from "next";

import { MainPagesBanner } from "@/components/banners/MainPagesBanner";
import { NewsGrid } from "@/components/News/news/NewsGrid";
import { WeekTrends } from "@/components/News/trends/WeekTrends";
import NewsBanner from "../../assets/images/news-banner.webp";

export const metadata: Metadata = {
  title: "Leighbrook Company News & UK Property Market Updates",
  description:
    "Read the latest company news from Leighbrook and stay updated on fast-moving UK property market changes, interest rates, and investment platform updates.",
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
