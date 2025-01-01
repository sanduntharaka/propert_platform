import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import Img1 from '../../../assets/images/InsightImg1.webp'

import { MdArrowOutward } from "react-icons/md";

export const InsightSection = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-28 sm:mb-14 '>
            #TODO change flex row to flex column or change to grid

            <div className='flex flex-col gap-4 mb-14 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8'>
                <div className='flex items-center gap-3'>
                    <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                    <p >Insights</p>
                </div>


                <h1 className='font-space-grotesk font-bold lg:text-5xl md:text-4xl text-primary-button sm:text-4xl'>
                    Stay Updated on Properties
                </h1>

                <div className='flex justify-between text-xl'>
                    <p>
                        Discover the latest trends in property investment.
                    </p>
                    <div className='md:flex items-center gap-3 sm:hidden'>
                        <p >Explore More</p>
                        <MdArrowOutward className='bg-primary-blue text-white' />
                    </div>
                </div>
            </div>


            <div className='md:h-[822px] md:w-full md:flex md:gap-[22px] sm:inline '>

                <div className='h-[822px] w-[660px] md:flex flex-col md:mb-0 sm:mb-12 sm:hidden'>
                    <div className='bg-primary-button text-white flex-1 pr-[10px] pl-8 flex flex-col justify-between gap-[154px] box-border'>
                        <div className='mt-7'>
                            <div className='flex items-center gap-3 mb-4'>
                                <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                                <p >Investment</p>
                            </div>
                            <h4 className='text-2xl font-bold font-space-grotesk '>Maximize Your Property Investment Returns</h4>
                        </div>
                        <p className='text-base mb-[26px]'>28 November 2024</p>
                    </div>
                    <div className='flex-1'>
                        <Image src={Img1} alt="insight image" className='w-full h-full object-cover' />
                    </div>

                </div>
                <div className="md:w-[760px] text-primary-button flex flex-col gap-[22px] md:px-0 sm:px-[20px]">
                    <div className='flex justify-between gap-[22px] md:flex-row sm:flex-col'>


                        <div className="flex-1 group   bg-primary-grey py-[26px] md:w-[352px] md:h-[400px] sm:w-full hover:h-[510px] relative">
                            <div className="flex flex-col justify-between gap-[154px] h-full pr-[10px] pl-[26px]">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image src={Rectangle} alt="Rectangle" className="w-[10px] h-[10px]" />
                                        <p>Investment</p>
                                    </div>
                                    <h4 className="text-xl font-bold font-space-grotesk">Maximize Your Property Investment Returns</h4>
                                </div>
                                <p className="text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    28 November 2024
                                </p>
                            </div>

                            <div className="h-[221px] w-full hidden group-hover:block group-hover:absolute bottom-0">
                                <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="flex-1 group   bg-primary-grey py-[26px] md:w-[352px] md:h-[400px] sm:w-full hover:h-[510px] relative">
                            <div className="flex flex-col justify-between gap-[154px] h-full pr-[10px] pl-[26px]">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image src={Rectangle} alt="Rectangle" className="w-[10px] h-[10px]" />
                                        <p>Investment</p>
                                    </div>
                                    <h4 className="text-xl font-bold font-space-grotesk">Tips for First-Time Home Buyers</h4>
                                </div>
                                <p className="text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    28 November 2024
                                </p>
                            </div>

                            <div className="h-[221px] w-full hidden group-hover:block group-hover:absolute bottom-0">
                                <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between gap-[22px] md:flex-row sm:flex-col'>


                        <div className="flex-1 group   bg-primary-grey py-[26px] md:w-[352px] md:h-[400px] sm:w-full">
                            <div className="flex flex-col justify-between gap-[154px] h-full pr-[10px] pl-[26px]">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image src={Rectangle} alt="Rectangle" className="w-[10px] h-[10px]" />
                                        <p>Investment</p>
                                    </div>
                                    <h4 className="text-xl font-bold font-space-grotesk">The Future of Real Estate Investment</h4>
                                </div>
                                <p className="text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    28 November 2024
                                </p>
                            </div>

                            <div className="h-[221px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="flex-1 group md:bg-primary-button md:text-white sm:bg-primary-grey py-[26px] md:w-[352px] md:h-[400px] sm:w-full">
                            <div className="flex flex-col justify-between gap-[154px] h-full pr-[10px] pl-[26px]">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image src={Rectangle} alt="Rectangle" className="w-[10px] h-[10px]" />
                                        <p>Investment</p>
                                    </div>
                                    <h4 className="text-xl font-bold font-space-grotesk">Financing Your Next Property Purchase</h4>
                                </div>
                                <p className="text-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    28 November 2024
                                </p>
                            </div>


                            <div className="h-[221px] w-full hidden group-hover:block">
                                <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>


                </div>


                {/* <div className="md:w-[726px] text-primary-button grid grid-cols-2 md:px-0 sm:px-[20px] bg-green-300">
                    <div className="grid gap-[22px] flex-col bg-green-100 relative">
                        <div className="group bg-blue-500 py-[26px] md:w-[352px] md:h-[400px] sm:w-full hover:h-[510px] relative overflow-hidden transition-all duration-300">
                            <div className="absolute bottom-0 w-full h-[221px] bg-red-300 group-hover:h-[331px] transition-all duration-300"></div>
                        </div>
                        <div className="bg-primary-grey py-[26px] md:w-[352px] md:h-[400px] sm:w-full"></div>
                    </div>
                    <div className="grid gap-[22px] flex-col bg-green-100 relative">
                        <div className="group bg-blue-500 py-[26px] md:w-[352px] md:h-[400px] sm:w-full hover:h-[510px] relative overflow-hidden transition-all duration-300">
                            <div className="absolute bottom-0 w-full h-[221px] bg-red-300 group-hover:h-[331px] transition-all duration-300"></div>
                        </div>
                        <div className="bg-primary-grey py-[26px] md:w-[352px] md:h-[400px] sm:w-full"></div>
                    </div>
                </div> */}



            </div>
            <div className='mt-12 mb-12 md:hidden'>
                <div className='flex items-center justify-center gap-3 md:hidden'>
                    <p >Explore More</p>
                    <MdArrowOutward className='bg-primary-blue text-white' />
                </div>
            </div>
        </div>
    )
}
