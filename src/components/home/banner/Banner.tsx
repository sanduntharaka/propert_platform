import React from 'react'
import BannerImage from '../../../assets/images/HeroBanner.webp'
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image'
import { MainButton } from '../../animated/MainButton';
export const Banner = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto'>
            <div className="w-full flex justify-center items-center">
                <div className="w-full h-[666px] sm:h-[408px] md:h-[500px] lg:h-[666px]">
                    <Image src={BannerImage} alt="Banner" className="object-fill w-full h-full" />
                </div>
            </div>
            <div className="flex flex-col lg:mt-28 lg:mb-28 md:mt-28 md:mb-28 lg:flex-row md:flex-row lg:gap-20 md:gap-20 md:ml-0 md:mr-0 sm:flex-col sm:mt-14 sm:mb-14 sm:gap-5 sm:ml-8 sm:mr-8">
                <h1 className="font-gellix font-bold text-primary-button">
                    Discover Your Dream Property Today!
                </h1>
                <div className="flex flex-col justify-start gap-8">
                    <p className="font-normal lg:text-md md:text-sm sm:text-base ">
                        Explore a wide range of properties tailored to your needs. Our platform connects you with the perfect home in just a few clicks.
                    </p>
                    <MainButton ButtonText="Explore" ButtonImage={<MdArrowOutward />} />
                </div>
            </div>
        </div >
    );
};
