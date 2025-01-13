import Image from 'next/image';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import footer_lg from '../../assets/images/footer-lg.png'
import footer_tab from '../../assets/images/footer-tab.png'
import footer_mobile from '../../assets/images/footer-mobile.png'

import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instergram.png'
import x_icon from '../../assets/icons/x_icon.png'
import linkedin from '../../assets/icons/linkdin.png'
import youtube from '../../assets/icons/youtube.png'



export const Footer = () => {
    return (
        <div className="max-w-[1440px] mr-auto ml-auto box-border">
            <div className="bg-primary-button lg:pt-28 lg:pb-28 lg:pr-8 lg:pl-8  sm:pt-16 sm:pb-16  md:pt-16 md:pb-16  md:-mr-8 md:-ml-8  pl-8 pr-8">
                <div className=" text-white flex justify-between md:gap-[120px] sm:gap-12 md:flex-row sm:flex-col md:p-0 sm:p-5 ">
                    <div className='flex-1 flex flex-col lg:gap-4 md:gap-3 sm:gap-4   '>
                        <h4 className="font-bold">LEIGBROOK</h4>
                        <p className='lg:text-base md:text-[10px] sm:text-base'>Stay informed with our latest features and updates.</p>
                        <div >
                            <div className='flex lg:gap-3 md:gap-2 sm:gap-3 justify-between mb-3'>
                                <input
                                    type="text"
                                    className="flex-1 lg:h-12 md:h-[28px] sm:h-12 p-3 border-2 border-[#6390DB] lg:text-base md:text-[10px] sm:text-base bg-primary-button focus:border-[#6390DB] focus:outline-none"
                                    placeholder='Enter your email'
                                />
                                <button className='bg-primary-blue lg:w-12 md:w-[28px] sm:w-12 lg:h-12 md:h-[28px] sm:h-12 flex items-center justify-center text-white'>
                                    <MdArrowOutward />
                                </button>
                            </div>
                            <p className='lg:text-base md:text-[8px] sm:text-base -mt-2'>By subscribing, you consent to our Privacy Policy and receive updates.</p>
                        </div>

                    </div>
                    <div className='flex-1 flex lg:gap-8 md:gap-4 sm:gap-8 justify-between md:flex-row sm:flex-col '>

                        <div className=' flex-1 flex flex-col lg:gap-4 md:gap-2 sm:gap-4 '>
                            <p className='lg:text-base md:text-[10px] sm:text-base font-semibold'>Quick Links</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >About Us</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Contact Support</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Privacy Policy</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Terms of Use</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Blog Updates</p>

                        </div>
                        <div className=' flex-1  flex flex-col lg:gap-4 md:gap-2 sm:gap-4 '>
                            <p className='lg:text-base md:text-[10px] sm:text-base font-semibold'>Resources</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >FAQs</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Customer Service</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >User Guides</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Feedback</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Testimonials</p>

                        </div>
                        <div className=' flex-1 flex flex-col lg:gap-4 md:gap-2 sm:gap-4 '>
                            <p className='lg:text-base md:text-[10px] sm:text-base font-semibold'>Follow Us</p>

                            <div className='flex lg:gap-4 md:gap-4 sm:gap-4'>
                                <Image src={facebook} alt='facebook' className='lg:w-6 lg:h-6 md:w-3 md:h-3 sm:w-6 sm:h-6' />
                                <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Facebook</p>

                            </div>
                            <div className='flex g:gap-4 md:gap-4 sm:gap-4'>
                                <Image src={instagram} alt='instagram' className='lg:w-6 lg:h-6 md:w-3 md:h-3 sm:w-6 sm:h-6' />
                                <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Instagram</p>


                            </div>
                            <div className='flex lg:gap-4 md:gap-4 sm:gap-4'>
                                <Image src={x_icon} alt='x' className='lg:w-6 lg:h-6 md:w-3 md:h-3 sm:w-6 sm:h-6' />
                                <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >X</p>

                            </div>
                            <div className='flex lg:gap-4 md:gap-4 sm:gap-4'>
                                <Image src={linkedin} alt='linkdin' className='lg:w-6 lg:h-6 md:w-3 md:h-3 sm:w-6 sm:h-6' />
                                <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >LinkedIn</p>

                            </div>
                            <div className='flex lg:gap-4 md:gap-4 sm:gap-4'>
                                <Image src={youtube} alt='youtube' className='lg:w-6 lg:h-6 md:w-3 md:h-3 sm:w-6 sm:h-6' />
                                <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal' >Youtube</p>

                            </div>

                        </div>
                    </div>
                </div>
                <div className=" text-white ">
                    <Image src={footer_lg} alt='footer' className='mt-12 lg:inline md:hidden sm:hidden w-full' />
                    <Image src={footer_tab} alt='footer' className='mt-12 lg:hidden md:inline sm:hidden w-full' />
                    <Image src={footer_mobile} alt='footer' className='mt-12 lg:hidden md:hidden sm:inline w-full' />

                    <div className='border-t-2 border-primary-grey lg:mt-12 md:mt-6 sm:mt-12 ml-8 mr-8'></div>
                    <div className='flex justify-between lg:mt-12 md:mt-6 sm:mt-12 md:flex-row ml-8 mr-8 flex-col-reverse sm:gap-8 md:gap-0'>
                        <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal'>© 2024 Leigbrook. All rights reserved.</p>
                        <div className='flex lg:gap-4 md:gap-2 sm:gap-4 sm:flex-col md:flex-row'>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal'>Privacy Policy</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal'> Terms of Service</p>
                            <p className='lg:text-sm md:text-[8px] sm:text-sm font-normal'>Cookies Settings</p>
                        </div>
                        {/* <p className='sm:inline-flex md:hidden'>© 2024 Leigbrook. All rights reserved.</p> */}

                    </div>
                </div>
            </div>
        </div>

    )
}
