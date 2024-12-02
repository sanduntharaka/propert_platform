import Image from 'next/image'
import React from 'react'
import AboutImage from '../../../assets/images/About.png'
import Rectangle from '../../../assets/icons/rectangle.png'
import { MainButtonDiv } from '@/components/animated/MainButtonDiv'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'
export const Aboutus = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-28  sm:mb-14  '>
            <div className='relative'>
                <Image src={AboutImage} alt="About" className="object-fill w-full h-[851px]" />

                <div className='bg-primary-grey  w-[748px] h-[739px] absolute bottom-0 -left-8' >
                    <div className='mt-14 mb-14 ml-8 flex flex-col gap-[30px] font-normal text-xl text-primary-button'>
                        <div className='flex items-center gap-3'>
                            <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                            <p >About Us</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <h1 className='font-space-grotesk font-bold lg:text-5xl md:text-4xl text-primary-button sm:text-4xl'>
                                Discover Your Dream Home with Our Comprehensive Property Platform
                            </h1>
                            <p>Our platform connects you with a diverse range of properties tailored to your needs. Experience seamless browsing and find your perfect home today.</p>

                        </div>
                        <div className='flex flex-col gap-6 w-1/2'>
                            <div className='flex items-center gap-3'>
                                <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                                <p className='text-xl font-bold'>Why Choose Us</p>
                            </div>
                            <p className='text-base '>
                                We provide expert insights and a user-friendly experience for all your property needs.
                            </p>
                            <div className='flex items-center gap-3'>
                                <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                                <p className='text-xl font-bold'>Get Started</p>
                            </div>
                            <p className='text-base '>
                                Join our community and unlock exclusive access to the best properties available.
                            </p>

                            <MainButtonDiv ButtonText="About Us" ButtonImage={<MdArrowOutward />} />

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
