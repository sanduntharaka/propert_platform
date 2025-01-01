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
            <div className="bg-primary-button h-[873px] -mr-8 -ml-8 flex flex-col gap-28 pt-28 pl-8 pr-8">
                <div className="h-[248px] text-white flex gap-[120px]">
                    <div className='flex flex-col gap-4 w-[560px] '>
                        <p className="font-bold text-2xl">LEIGBROOK</p>
                        <p>Stay informed with our latest features and updates.</p>
                        <div>
                            <div className='flex gap-4  justify-between mb-3'>
                                <input
                                    type="text"
                                    className="w-[496px] h-12 p-3 border-2 border-[#6390DB] bg-primary-button focus:border-[#6390DB] focus:outline-none"
                                    placeholder='Enter your email'
                                />
                                <button className='bg-primary-blue w-12 h-12 flex items-center justify-center text-white'>
                                    <MdArrowOutward />
                                </button>
                            </div>
                            <p className='text-xs'>By subscribing, you consent to our Privacy Policy and receive updates.</p>
                        </div>

                    </div>
                    <div className='flex flex-row gap-8 justify-between w-[696px] '>

                        <div className=' w-[210px] h-full flex flex-col gap-4'>
                            <p className='text-base font-semibold'>Quick Links</p>
                            <p className='text-sm font-normal' >About Us</p>
                            <p className='text-sm font-normal' >Contact Support</p>
                            <p className='text-sm font-normal' >Privacy Policy</p>
                            <p className='text-sm font-normal' >Terms of Use</p>
                            <p className='text-sm font-normal' >Blog Updates</p>

                        </div>
                        <div className=' w-[210px] h-full flex flex-col gap-4'>
                            <p className='text-base font-semibold'>Resources</p>
                            <p className='text-sm font-normal' >FAQs</p>
                            <p className='text-sm font-normal' >Customer Service</p>
                            <p className='text-sm font-normal' >User Guides</p>
                            <p className='text-sm font-normal' >Feedback</p>
                            <p className='text-sm font-normal' >Testimonials</p>

                        </div>
                        <div className=' w-[210px] h-full flex flex-col gap-4'>
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
                <div className="h-[289px] text-white">
                    <Image src={footer_big} alt='facebook' />
                    <div className='border-t-2 border-primary-grey mt-12'></div>
                    <div className='flex justify-between mt-12'>
                        <p>© 2024 Leigbrook. All rights reserved.</p>
                        <div className='flex gap-4'>
                            <p>Privacy Policy</p>
                            <p> Terms of Service</p>
                            <p>Cookies Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
