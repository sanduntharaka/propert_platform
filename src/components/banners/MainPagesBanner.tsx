import React from "react";
import InsightsBanner from "../../assets/images/Placeholder Image15.webp";
import Image from "next/image";
export const MainPagesBanner = ({ image, title, description }: any) => {
  return (
    <div className="max-w-[1440px] ml-auto mr-auto">
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-[666px] sm:h-[408px] md:h-[500px] lg:h-[666px]">
          <Image
            src={image}
            alt="Banner"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col lg:mt-14 lg:mb-14 md:mt-8 md:mb-8 sm:mt-12 sm:mb-12 lg:gap-8 md:gap-4 sm:gap-5 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8">
        <h1 className="font-gellix font-bold text-primary-button">{title}</h1>
        <h1></h1>
        <div className="flex flex-col justify-start">
          <p className="font-normal lg:text-md md:text-sm sm:text-base ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
// flex flex-col lg:mt-14 lg:mb-14 md:mt-28 md:mb-28 lg:gap-20 md:gap-20 md:ml-0 md:mr-0 sm:flex-col sm:mt-14 sm:mb-14 sm:gap-5 sm:ml-8 sm:mr-8
