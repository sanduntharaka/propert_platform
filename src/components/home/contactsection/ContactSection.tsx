import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import AboutImage from '../../../assets/images/About.webp'

import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const ContactSection = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto'>
            <div className='bg-primary-grey lg:pt-28 lg:pb-28 lg:pr-8 lg:pl-8  sm:pt-16 sm:pb-16  md:pt-16 md:pb-16  md:-mr-8 md:-ml-8'>
                <div className='flex gap-20 md:flex-row sm:flex-col pl-8 pr-8'>
                    <div className='md:w-2/3 flex flex-col gap-4 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8 '>
                        <div className='flex items-center gap-3'>
                            <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                            <p className='lg:text-base sm:text-base md:text-tiny_2 '>Comment</p>
                        </div>

                        <h2 className='font-gellix font-bold  text-primary-button'>
                            Let’s Talk
                        </h2>


                        <div className='flex justify-between lg:text-xl md:text-tiny sm:text-xl'>
                            <p>
                                For any inquiries or to schedule a property showing, please reach out to us. Our team is ready to assist you with all your real estate needs. Let us help you find your dream home!
                            </p>
                        </div>
                    </div>

                    <div className='md:w-1/3 flex flex-col gap-6 pt-2 pb-2 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8'>
                        <div className='flex gap-4'>
                            <AiOutlineMail className=' text-[#6390DB] lg:w-6 lg:h-6  md:w-[14px] md:h-[14px] sm:w-6 sm:h-6 ' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-gellix font-bold'>Email</h6>
                                <p className='lg:text-base md:text-[10px] sm:text-base font-light'>hello@leigbrook.com</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <AiOutlinePhone className=' text-[#6390DB] lg:w-6 lg:h-6  md:w-[14px] md:h-[14px] sm:w-6 sm:h-6 transform  scale-x-[-1]' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-gellix font-bold'>Phone</h6>
                                <p className='lg:text-base md:text-[10px] sm:text-base font-light'>+1 (555) 000-0000</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <MdOutlineLocationOn className='text-[#6390DB] lg:w-6 lg:h-6  md:w-[14px] md:h-[14px] sm:w-6 sm:h-6 transform ' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-gellix font-bold'>Office</h6>
                                <p className='lg:text-base md:text-[10px] sm:text-base font-light'>123 New St, Sydney NSW 2000 UK</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pl-8 pr-8'>
                    <Image src={AboutImage} alt="About" className="cover " />

                </div>

            </div>

        </div>
    )
}
