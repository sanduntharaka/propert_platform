import Image from 'next/image'
import React from 'react'
import AboutImage from '../../../assets/images/About.webp'
import Rectangle from '../../../assets/icons/rectangle.png'
import { MainButtonDiv } from '@/components/animated/MainButtonDiv'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'
export const Aboutus = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-28  sm:mb-14 bg-red-400 '>
            <div className='relative'>
                <Image src={AboutImage} alt="About" className="object-fill w-full lg:h-[851px] md:[525px] " />

                <div className='bg-primary-grey lg:w-[748px] md:w-[433px] lg:h-[739px] md:h-[461px] absolute bottom-0 md:-left-8 sm:left-0 sm:w-full'>
                    <div className='mt-14 mb-14 ml-8 flex flex-col gap-[30px] font-normal md:text-xl sm:text-base text-primary-button'>
                        <div className='flex flex-col gap-[18px]'>
                            <div className='flex items-center gap-3'>
                                <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                                <p className='tagline'>About Us</p>
                            </div>
                            <h2 className='font-gellix font-bold text-primary-button'>
                                Discover Your Dream Home with Our Comprehensive Property Platform
                            </h2>
                            <p className='lg:text-base md:text-tiny sm:text-base'>Our platform connects you with a diverse range of properties tailored to your needs. Experience seamless browsing and find your perfect home today.</p>


                        </div>
                        <div className='flex flex-col gap-[18px] w-1/2'>
                            <div className='flex flex-col gap-3' >
                                <div className='flex items-center gap-3'>
                                    <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                                    <h6 className='font-gellix font-bold'>Why Choose Us</h6>
                                </div>
                                <p className='lg:text-base md:text-tiny sm:text-base'>
                                    We provide expert insights and a user-friendly experience for all your property needs.
                                </p>
                            </div>
                            <div className='flex flex-col gap-3' >
                                <div className='flex items-center gap-3'>
                                    <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                                    <h6 className='font-gellix font-bold'>Get Started</h6>
                                </div>
                                <p className='lg:text-base md:text-tiny sm:text-base'>
                                    Join our community and unlock exclusive access to the best properties available.
                                </p>
                            </div>


                        </div>
                        <MainButtonDiv ButtonText="About Us" ButtonImage={<MdArrowOutward />} />


                    </div>
                </div>
            </div>
        </div>
    )
}
