import React from "react";
import Image from "next/image";
import Rectangle from "../../../assets/icons/rectangle.png";
import AboutBanner from "../../../assets/images/aboutPageBanner.webp";
import { FiArrowUpRight } from "react-icons/fi";

export const InvestmentCard = () => {
  return (
    <div className="text-primary-button flex flex-col sm:gap-40 md:gap-6 md:px-0 sm:px-5 md:mb-0 sm:mb-10">
      <div className="flex justify-between sm:gap-40 md:gap-6 md:flex-row sm:flex-col">
        {/* Card Container */}
        <div
          className="relative flex-1 bg-primary-grey lg:w-80 md:w-52 lg:h-[400px] md:h-56 sm:w-full sm:h-[400px]
            transition-all duration-300 ease-in-out group md:hover:bg-primary-button md:hover:lg:h-[450px] md:hover:md:h-[300px] overflow-hidden"
        >
          {/* Inner Content */}
          <div className="flex flex-col justify-between md:h-full sm:h-[400px] p-6 transition-all duration-300 md:group-hover:text-white relative z-10">
            <div>
              {/* Investment Label */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={Rectangle}
                  alt="Rectangle"
                  className="lg:w-3 lg:h-3 md:w-1.5 md:h-1.5 sm:w-3 sm:h-3"
                />
                <p className="lg:text-base sm:text-base md:text-xs">
                  Investment
                </p>
              </div>
              {/* Title */}
              <h6 className="font-gellix font-bold">
                Understanding the Housing Market Trends
              </h6>
            </div>
            {/* Date */}
            <div className="flex justify-between">
              <p className="lg:text-sm sm:text-sm md:text-xs">
                28 November 2024
              </p>
              <FiArrowUpRight className="text-primary-button text-xl md:hidden sm:inline " />
            </div>
          </div>

          {/* Arrow Icon on Hover (Disabled on sm) */}
          <div className="absolute top-6 right-6 opacity-0 transition-all duration-300 md:group-hover:opacity-100">
            <FiArrowUpRight className="text-white text-xl" />
          </div>

          {/* Image Appearing on Hover (Disabled on sm) */}
          <div className="absolute bottom-0 left-0 w-full h-0 md:group-hover:h-1/2 transition-all duration-300">
            <Image
              src={AboutBanner}
              alt="Investment Image"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
