import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import AboutImage from '../../../assets/images/About.webp'

import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const ContactSection = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto'>
            <div className='bg-primary-grey pt-28 pb-28 pr-8 pl-8 flex flex-col gap-16 -mr-8 -ml-8'>
                <div className='flex gap-20 md:flex-row sm:flex-col'>
                    <div className='flex flex-col gap-4 mb-14 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8'>
                        <div className='flex items-center gap-3'>
                            <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                            <p >Comment</p>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <h1 className='font-space-grotesk font-bold lg:text-5xl md:text-4xl text-primary-button sm:text-4xl'>
                                Let’s Talk
                            </h1>


                            <p className='text-xl'>
                                For any inquiries or to schedule a property showing, please reach out to us. Our team is ready to assist you with all your real estate needs. Let us help you find your dream home!
                            </p>
                        </div>
                    </div>

                    <div className=' w-[500px] flex flex-col gap-6 pt-2 pb-2 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8'>
                        <div className='flex gap-4'>
                            <AiOutlineMail size={20} className='text-[#6390DB] ' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-space-grotesk font-bold text-xl'>Email</h6>
                                <p className='text-base font-light'>hello@leigbrook.com</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <AiOutlinePhone size={20} className='text-[#6390DB] transform  scale-x-[-1]' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-space-grotesk font-bold text-xl'>Phone</h6>
                                <p className='text-base font-light'>+1 (555) 000-0000</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <MdOutlineLocationOn size={20} className='text-[#6390DB] ' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-space-grotesk font-bold text-xl'>Office</h6>
                                <p className='text-base font-light'>123 New St, Sydney NSW 2000 UK</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Image src={AboutImage} alt="About" className="cover" />

                </div>

            </div>

        </div>
    )
}
