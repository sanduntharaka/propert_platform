import Script from "next/script";
import { Roboto } from "next/font/google";
import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from "@/components/footer/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import clsx from "clsx";
import "@/styles/fonts/gellix/stylesheet.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6HXYTTN86R"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date()); gtag('config', 'G-6HXYTTN86R', { page_path: window.location.pathname });
      `}</Script>

      <AnalyticsTracker />
      <div className={clsx(roboto.className)}>
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}
