"use client";
import React from "react";
import Image from "next/image";
import Rectangle from "../../../assets/icons/rectangle.png";
import Img1 from "../../../assets/images/InsightImg1.webp";

import { MdArrowOutward } from "react-icons/md";
import { InvestmentCard } from "@/components/insight/insights/InvestmentCard";

export const InsightSection = () => {
  return (
    <div className="max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-16  sm:mb-14   ">
      {/* #TODO change flex row to flex column or change to grid */}

      <div className="flex flex-col lg:gap-4 md:gap-[9px] sm:gap-4 lg:mb-14 md:mb-8 sm:mb-14 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8">
        <div className="flex items-center gap-3">
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]"
          />
          <p className="lg:text-base sm:text-base md:text-tiny">Insights</p>
        </div>

        <h2 className="font-gellix font-bold  text-primary-button">
          Stay Updated on Properties
        </h2>

        <div className="flex justify-between lg:text-xl md:text-tiny sm:text-xl">
          <p>Discover the latest trends in property investment.</p>
          <div className="md:flex items-center gap-3 sm:hidden">
            <p className="lg:text-base md:text-tiny_2 sm:text-base">
              Explore More
            </p>
            <MdArrowOutward className="bg-primary-blue text-white lg:w-[24px] lg:h-[24px] md:w-[13px] md:h-[13px]" />
          </div>
        </div>
      </div>

      <div className="w-full md:flex gap-6 md:gap-3 sm:block">
        {/* Left Column */}
        <div className=" lg:w-2/5 md:w-1/3 sm:w-full md:flex flex-col md:mb-0 sm:mb-12 sm:hidden">
          {/* Top Section (Text) */}
          <div className="bg-primary-button text-white flex-1 pr-3 pl-8 flex flex-col justify-between lg:gap-40 md:gap-20">
            <div className="lg:mt-7 md:mt-4">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={Rectangle}
                  alt="Rectangle"
                  className="lg:w-3 lg:h-3 md:w-1.5 md:h-1.5 sm:w-3 sm:h-3"
                />
                <p className="lg:text-base sm:text-base md:text-xs">Insights</p>
              </div>
              <h5 className="font-gellix font-bold text-lg md:text-base sm:text-xl">
                Maximize Your Property Investment Returns
              </h5>
            </div>
            <p className="lg:text-sm sm:text-sm md:text-xs">28 November 2024</p>
          </div>

          {/* Bottom Image */}
          <div className="flex-1">
            <Image
              src={Img1}
              alt="insight image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-3/5 md:w-2/3 text-primary-button flex flex-col gap-6 md:gap-3 md:px-0 sm:px-5">
          {/* First Row */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-3">
            <InvestmentCard />
            <InvestmentCard />
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-3">
            <InvestmentCard />
            <InvestmentCard />
          </div>
        </div>
      </div>

      <div className="mt-12 mb-12 md:hidden">
        <div className="flex items-center justify-center gap-3 md:hidden">
          <p>Explore More</p>
          <MdArrowOutward className="bg-primary-blue text-white" />
        </div>
      </div>
    </div>
  );
};
