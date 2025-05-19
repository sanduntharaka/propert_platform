"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as gtag from "@/lib/gtag";

const AnalyticsTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return null;
};

export default AnalyticsTracker;
