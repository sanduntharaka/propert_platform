import Image from "next/image";
import React from "react";
import AboutBanner from "../../assets/images/aboutPageBanner.webp";
import Rectangle from "../../assets/icons/rectangle.png";
import { MainButtonDiv } from "../animated/MainButtonDiv";
import { MdArrowOutward } from "react-icons/md";

export const ContactForm = () => {
  return (
    <div className="max-w-[1440px]  md:mr-auto md:ml-auto sm:mb-14 sm:mr-8 sm:ml-8 lg:mb-28 md:mb-16  ">
      <div className="flex md:flex-row sm:flex-col items-stretch lg:gap-[20px] md:gap-[10px] sm:gap-12">
        <div className="md:flex-1">
          <Image
            src={AboutBanner}
            alt="Banner"
            className="lg:h-[812px] md:h-[470px] sm:h-[335px]"
          />
        </div>
        <div className="md:flex-1 bg-primary-grey lg:p-8 md:p-5 p-4 relative h-[740px] md:h-auto">
          <div className="flex flex-col md:gap-2 sm:gap-3">
            <div className="flex items-center gap-3">
              <Image
                src={Rectangle}
                alt="Rectangle"
                className="lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]"
              />
              <p className="lg:text-base sm:text-base md:text-tiny">Contact</p>
            </div>
            <div className="flex flex-col gap-6 md:gap-3 sm:gap-6">
              <h3 className="font-gellix font-bold text-primary-button">
                Send an Enquiry
              </h3>
              <p className="md:ml-0 lg:text-base md:text-tiny sm:text-base ">
                We'd love to hear from you!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:gap-2 sm:gap-3 mt-5 ">
            <div className="grid grid-cols-1 ">
              <label
                htmlFor="name"
                className="lg:text-base md:text-tiny sm:text-base "
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="lg:h-12 md:h-7 sm:h-12 bg-primary-grey border-0 border-b-2 border-gray-300 focus:outline-none focus:border-black"
              />
            </div>
            <div className="grid grid-cols-1 ">
              <label
                htmlFor="name"
                className="lg:text-base md:text-tiny sm:text-base "
              >
                Email *
              </label>
              <input
                type="text"
                id="name"
                className="lg:h-12 md:h-7 sm:h-12  bg-primary-grey border-0 border-b-2 border-gray-300 focus:outline-none focus:border-black"
              />
            </div>
            <div className="grid grid-cols-1 ">
              <label
                htmlFor="name"
                className="lg:text-base md:text-tiny sm:text-base "
              >
                Telephone *
              </label>
              <input
                type="text"
                id="name"
                className="lg:h-12 md:h-7 sm:h-12 bg-primary-grey border-0 border-b-2 border-gray-300 focus:outline-none focus:border-black"
              />
            </div>
            <div className="grid grid-cols-1 ">
              <label
                htmlFor="name"
                className="lg:text-base md:text-tiny sm:text-base "
              >
                Message *
              </label>
              <textarea
                id="name"
                className="bg-primary-grey border-0 border-b-2 border-gray-300 focus:outline-none focus:border-black 
             lg:min-h-[180px] md:min-h-[100px] sm:min-h-[180px]"
              />
            </div>
          </div>
          <div className="absolute bottom-5 right-5">
            <MainButtonDiv
              ButtonText="Send Enquiry"
              ButtonImage={<MdArrowOutward />}
              line={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
