import Image from 'next/image';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import footer_big from '../../assets/images/footer_big.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instergram.png'
import x_icon from '../../assets/icons/x_icon.png'
import linkedin from '../../assets/icons/linkdin.png'
import youtube from '../../assets/icons/youtube.png'



export const Footer = () => {
    return (
        <div className="max-w-[1440px] mr-auto ml-auto box-border">
            <div className="bg-primary-button md:h-[873px] sm:h-[1450px] -mr-8 -ml-8 flex flex-col md:gap-28 sm:gap-12  md:pt-28 sm:pt-12 pl-8 pr-8">
                <div className="md:h-[248px] sm:h-[950px] text-white flex justify-between md:gap-[120px] sm:gap-12 md:flex-row sm:flex-col md:p-0 sm:p-5 ">
                    <div className='flex-1 flex flex-col gap-4   '>
                        <p className="font-bold text-2xl">LEIGBROOK</p>
                        <p>Stay informed with our latest features and updates.</p>
                        <div>
                            <div className='flex gap-3 justify-between mb-3'>
                                <input
                                    type="text"
                                    className="flex-1 h-12 p-3 border-2 border-[#6390DB] bg-primary-button focus:border-[#6390DB] focus:outline-none"
                                    placeholder='Enter your email'
                                />
                                <button className='bg-primary-blue w-12 h-12 flex items-center justify-center text-white'>
                                    <MdArrowOutward />
                                </button>
                            </div>
                            <p className='text-xs'>By subscribing, you consent to our Privacy Policy and receive updates.</p>
                        </div>

                    </div>
                    <div className='flex-1 flex gap-8 justify-between md:flex-row sm:flex-col '>

                        <div className=' flex-1 flex flex-col gap-4'>
                            <p className='text-base font-semibold'>Quick Links</p>
                            <p className='text-sm font-normal' >About Us</p>
                            <p className='text-sm font-normal' >Contact Support</p>
                            <p className='text-sm font-normal' >Privacy Policy</p>
                            <p className='text-sm font-normal' >Terms of Use</p>
                            <p className='text-sm font-normal' >Blog Updates</p>

                        </div>
                        <div className=' flex-1  flex flex-col gap-4'>
                            <p className='text-base font-semibold'>Resources</p>
                            <p className='text-sm font-normal' >FAQs</p>
                            <p className='text-sm font-normal' >Customer Service</p>
                            <p className='text-sm font-normal' >User Guides</p>
                            <p className='text-sm font-normal' >Feedback</p>
                            <p className='text-sm font-normal' >Testimonials</p>

                        </div>
                        <div className=' flex-1 flex flex-col gap-4 '>
                            <p className='text-base font-semibold'>Follow Us</p>

                            <div className='flex gap-4'>
                                <Image src={facebook} alt='facebook' />
                                <p className='text-sm font-normal' >Facebook</p>

                            </div>
                            <div className='flex gap-4'>
                                <Image src={instagram} alt='instagram' />
                                <p className='text-sm font-normal' >Instagram</p>


                            </div>
                            <div className='flex gap-4'>
                                <Image src={x_icon} alt='x' />
                                <p className='text-sm font-normal' >X</p>

                            </div>
                            <div className='flex gap-4'>
                                <Image src={linkedin} alt='linkdin' />
                                <p className='text-sm font-normal' >LinkedIn</p>

                            </div>
                            <div className='flex gap-4'>
                                <Image src={youtube} alt='youtube' />
                                <p className='text-sm font-normal' >Youtube</p>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="h-[289px] text-white ">
                    <Image src={footer_big} alt='facebook' />
                    <div className='border-t-2 border-primary-grey mt-12 ml-8 mr-8'></div>
                    <div className='flex justify-between mt-12 md:flex-row ml-8 mr-8 flex-col-reverse sm:gap-8 md:gap-0'>
                        <p>© 2024 Leigbrook. All rights reserved.</p>
                        <div className='flex gap-4 sm:flex-col md:flex-row'>
                            <p>Privacy Policy</p>
                            <p> Terms of Service</p>
                            <p>Cookies Settings</p>
                        </div>
                        {/* <p className='sm:inline-flex md:hidden'>© 2024 Leigbrook. All rights reserved.</p> */}

                    </div>
                </div>
            </div>
        </div>

    )
}
