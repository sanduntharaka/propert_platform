"use client";
import React from "react";
import BannerImage from "../../../assets/images/HeroBanner.webp";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { MainButton } from "../../animated/MainButton";
import { useRouter } from "next/navigation";
export const Banner = () => {
  const router = useRouter();
  return (
    <div className="max-w-[1440px] ml-auto mr-auto">
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-[666px] sm:h-[408px] md:h-[500px] lg:h-[666px]">
          <Image
            src={BannerImage}
            alt="UK Property Investments Hero"
            className="
              object-cover w-full h-full
              brightness-95
              contrast-105
              saturate-105
      "
            priority
          />
        </div>
      </div>

      <div className="flex flex-col lg:mt-28 lg:mb-28 md:mt-28 md:mb-28 lg:flex-row md:flex-row lg:gap-20 md:gap-20 md:ml-0 md:mr-0 sm:flex-col sm:mt-14 sm:mb-14 sm:gap-5 sm:ml-8 sm:mr-8">
        <h1 className="font-gellix font-bold text-primary-button">
          UK Property Investments & Luxury Real Estate
        </h1>

        <div className="flex flex-col justify-start gap-6">
          <p className="font-normal lg:text-md md:text-sm sm:text-base">
            Browse modern apartments, luxury homes & investment-ready properties
            across the UK.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div onClick={() => router.push("/properties")}>
              <MainButton
                ButtonText="Browse All Properties"
                ButtonImage={<MdArrowOutward />}
                line={true}
              />
            </div>

            <div onClick={() => router.push("/contact")}>
              <MainButton
                ButtonText="Speak to an Advisor"
                ButtonImage={<MdArrowOutward />}
                line={true}
              />
            </div>
          </div>

          <p className="text-xs lg:text-sm opacity-80 text-primary-button">
            Trusted by buyers & investors across the UK
          </p>
        </div>
      </div>
    </div>
  );
};
