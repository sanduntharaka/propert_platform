"use client";
import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import { MdArrowOutward } from "react-icons/md";

import ImageOne from '../../../assets/images/img1.webp'
import ImageTwo from '../../../assets/images/img2.png'
import ImageThree from '../../../assets/images/img3.webp'
import ImageFour from '../../../assets/images/img4.webp'
import ImageFive from '../../../assets/images/img5.webp'
import { motion } from 'framer-motion'
import { PropetieDetail } from '@/components/PropetieDetail';
import PropertyCard from './PropertyCard';

export const PropertiesGrid = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-16 sm:mb-14 md:ml-auto  md:mr-auto  sm:ml-8 sm:mr-8'>
            <div className='flex flex-col lg:gap-4 md:gap-[9px] sm:gap-4 lg:mb-14 md:mb-8 sm:mb-14 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8'>
                <div className='flex items-center gap-3'>
                    <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                    <p className='lg:text-base sm:text-base md:text-tiny_2 '>Properties</p>
                </div>


                <h2 className='font-gellix font-bold  text-primary-button'>
                    Discover Your Dream Home
                </h2>

                <div className='flex justify-between lg:text-xl md:text-tiny sm:text-xl'>
                    <p>
                        Explore our exclusive featured properties today.
                    </p>

                </div>
            </div>
            {/* properties show here */}
            <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:gap-[17px] md:gap-[9.85px] sm:gap-12 '>

                {[...Array(10)].map((_, index) => (
                    <PropertyCard key={index} />
                ))

                }

            </div>
            <div className=' '>
                <div className='flex items-center justify-center gap-3 '>
                    <p >Explore More</p>
                    <MdArrowOutward className='bg-primary-blue text-white' />
                </div>
            </div>
        </div>
    )
}
