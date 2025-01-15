import Image from 'next/image'
import React from 'react'
import AboutImage from '../../../assets/images/About.webp'
import Rectangle from '../../../assets/icons/rectangle.png'
import { MainButtonDiv } from '@/components/animated/MainButtonDiv'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'
export const Aboutus = () => {
    return (
        <div className='max-w-[1440px] lg:ml-auto lg:mr-auto sm:ml-auto sm:mr-auto lg:mb-28 md:mb-16  sm:mb-14  md:-mr-8 md:-ml-8'>
            <div className='relative'>
                <Image src={AboutImage} alt="About" className="object-fill w-full lg:h-[851px] md:h-[525px] md:inline-block sm:hidden " />

                <div className='bg-primary-grey lg:w-[748px] md:w-[433px] lg:h-[739px] md:h-[461px] sm:h-auto md:absolute sm:relative bottom-0 lg:-left-8 md:ml-8 sm:left-0 sm:w-full pt-14 pb-14 md:pt-8 sm:pt-7 sm:pb-7'>
                    <div className=' ml-8 flex flex-col lg:gap-[30px] md:gap-5 sm:gap-12 font-normal md:text-xl sm:text-base text-primary-button '>
                        <div className='flex flex-col md:gap-2 sm:gap-3'>
                            <div className='flex items-center gap-3'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <p className='lg:text-base sm:text-base md:text-tiny'>About Us</p>
                            </div>
                            <div className='flex flex-col gap-6 md:gap-3 sm:gap-6'>
                                <h3 className='font-gellix font-bold text-primary-button'>
                                    Discover Your Dream Home with Our Comprehensive Property Platform
                                </h3>
                                <p className='md:ml-0 sm:ml-6 sm:mr-6 lg:text-base md:text-tiny sm:text-base ' >Our platform connects you with a diverse range of properties tailored to your needs. Experience seamless browsing and find your perfect home today.</p>


                            </div>
                        </div>
                        <div className='flex flex-col lg:gap-6 md:gap-2 sm:gap-6 lg:w-1/2 md:w-2/3 md:ml-0 md:mr-0 sm:ml-6 sm:mr-12 '>
                            <div className='flex items-center gap-3'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <h6 className='font-gellix text-xl font-bold'>Why Choose Us</h6>
                            </div>
                            <p className='lg:text-base md:text-tiny sm:text-base '>
                                We provide expert insights and a user-friendly experience for all your property needs.
                            </p>
                            <div className='flex items-center gap-3 lg:mt-0 md:mt-6 sm:mt-0'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <h6 className='font-gellix text-xl font-bold'>Get Started</h6>
                            </div>
                            <p className='lg:text-base md:text-tiny sm:text-base '>
                                Join our community and unlock exclusive access to the best properties available.
                            </p>

                            <MainButtonDiv ButtonText="About Us" ButtonImage={<MdArrowOutward />} line={true} />

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
