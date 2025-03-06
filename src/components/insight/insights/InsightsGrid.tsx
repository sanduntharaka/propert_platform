"use client";
import React from "react";
import Image from "next/image";
import Rectangle from "../../../assets/icons/rectangle.png";
import AboutBanner from "../../../assets/images/aboutPageBanner.webp";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { InvestmentCard } from "./InvestmentCard";
import { useEffect, useState } from "react";

export const InsightsGrid = () => {
  const [itemsToShow, setItemsToShow] = useState(16);

  useEffect(() => {
    const updateItems = () => {
      setItemsToShow(window.innerWidth < 768 ? 4 : 16);
    };

    updateItems(); // Initial check
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, []);
  return (
    <div className="max-w-[1440px]  ml-auto mr-auto lg:mb-28 md:mb-16  sm:mb-14  flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8 ">
        <div className="flex items-center gap-3">
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]"
          />
          <p className="lg:text-base sm:text-base md:text-tiny_2 ">Insights</p>
        </div>

        <h2 className="font-gellix font-bold  text-primary-button">
          Latest Property Insights
        </h2>

        <div className="flex justify-between lg:text-xl md:text-tiny sm:text-xl">
          <p>Stay updated with our expert articles and insights.</p>
          <div className="md:flex justify-end items-center gap-3 sm:hidden">
            <p className="lg:text-base md:text-tiny_2 sm:text-base">
              Explore More
            </p>
            <MdArrowOutward className="bg-primary-blue text-white lg:w-[24px] lg:h-[24px] md:w-[13px] md:h-[13px]" />
          </div>
        </div>
      </div>

      <div className="md:flex bg-primary-button lg:h-[462px] md:h-[267px] sm:hidden">
        <div className="flex-1 lg:p-[26px] md:p-[15px] box-border">
          <div className="bg-primary-button w-full h-full flex flex-col justify-between lg:p-[26px] md:p-[15px]">
            <div className="flex flex-col lg:gap-4 md:gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src={Rectangle}
                  alt="Rectangle"
                  className="lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]"
                />
                <p className="lg:text-base sm:text-base md:text-tiny_2 text-white">
                  Investment
                </p>
              </div>
              <h3 className="font-gellix font-semibold text-white">
                Maximize Your Property Investment Returns
              </h3>
            </div>
            <p className="text-white lg:text-base md:text-tiny_2 sm:text-base">
              28 November 2024
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={AboutBanner}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className=" ">
        <div className="md:grid md:grid-cols-4 sm:grid-cols-1 gap-5 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            .slice(0, itemsToShow)
            .map((i) => (
              <InvestmentCard key={i} />
            ))}
        </div>

        <div className="md:flex justify-end gap-2  w-full mt-5  sm:hidden">
          <div className="bg-primary-button w-7 h-7 flex items-center justify-center p-2 cursor-pointer">
            <FaArrowLeft className="text-white" />
          </div>
          <div className="bg-primary-button w-7 h-7 flex items-center justify-center p-2 cursor-pointer">
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </div>

      {/* flex gap-8 justify-between sm:flex-col md:flex-row */}

      <div className="mt-12 mb-12 md:hidden">
        <div className="flex items-center justify-center gap-3 md:hidden">
          <p className="lg:text-base md:text-tiny_2 sm:text-base">View all</p>
          <MdArrowOutward className="bg-primary-blue text-white" />
        </div>
      </div>
    </div>
  );
};
