import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import Img1 from '../../../assets/images/InsightImg1.webp'

import { MdArrowOutward } from "react-icons/md";

export const InsightSection = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-16  sm:mb-14   '>
            {/* #TODO change flex row to flex column or change to grid */}

            <div className='flex flex-col lg:gap-4 md:gap-[9px] sm:gap-4 lg:mb-14 md:mb-8 sm:mb-14 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8'>
                <div className='flex items-center gap-3'>
                    <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                    <p className='lg:text-base sm:text-base md:text-tiny'>Insights</p>
                </div>


                <h2 className='font-gellix font-bold  text-primary-button'>
                    Stay Updated on Properties
                </h2>

                <div className='flex justify-between lg:text-xl md:text-tiny sm:text-xl'>
                    <p>
                        Discover the latest trends in property investment.
                    </p>
                    <div className='md:flex items-center gap-3 sm:hidden'>

                        <p className='lg:text-base md:text-tiny_2 sm:text-base'>Explore More</p>
                        <MdArrowOutward className='bg-primary-blue text-white lg:w-[24px] lg:h-[24px] md:w-[13px] md:h-[13px]' />
                    </div>
                </div>
            </div>


            {/* <div className='lg:h-[822px] md:h-[476px] md:w-full md:flex md:gap-[22px] sm:inline '>

                <div className='lg:h-[822px] md:h-[476px] lg:w-[660px] md:w-[364px] sm:w-[660px] md:flex flex-col md:mb-0 sm:mb-12 sm:hidden'>
                    <div className='bg-primary-button text-white flex-1 pr-[10px] pl-8 flex flex-col justify-between lg:gap-[154px] md:gap-[82px] box-border '>
                        <div className='lg:mt-7 md:mt-[15px]'>
                            <div className='flex items-center gap-3 mb-4'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <p className='lg:text-base sm:text-base md:text-tiny'>Insights</p>
                            </div>
                            <h5 className='font-gellix font-bold '>Maximize Your Property Investment Returns</h5>
                        </div>
                        <p className='lg:text-sm sm:text-sm md:text-tiny'>28 November 2024</p>
                    </div>
                    <div className='flex-1'>
                        <Image src={Img1} alt="insight image" className='w-full h-full object-cover' />
                    </div>

                </div>
                <div className="lg:w-[760px] md:w-[420px]  text-primary-button flex flex-col gap-[22px] md:px-0 sm:px-[20px]">
                    <div className='flex justify-between gap-[22px] md:flex-row sm:flex-col'>


                        <div className="flex-1 group  bg-primary-grey lg:py-[26px] md:py-[20px] sm:py-[26px] lg:w-[352px] md:w-[204px] lg:h-[400px] md:h-[231px] sm:w-full lg:hover:h-[510px] relative">
                            <div className="flex flex-col justify-between lg:gap-[154px] md:gap-[50px]  h-full lg:pr-[10px] lg:pl-[26px] md:pr-[5px] md:pl-[18px] ">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image src={Rectangle} alt="Rectangle" className="lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]" />
                                        <p className='lg:text-base sm:text-base md:text-tiny'>Insights</p>
                                    </div>
                                    <h5 className='font-gellix font-bold'>Understanding the Housing Market Trends</h5>
                                </div>
                                <p className="lg:text-sm sm:text-sm md:text-tiny opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    28 November 2024
                                </p>
                            </div>

                            <div className="lg:h-[221px] w-full  lg:group-hover:block group-hover:absolute bottom-0 lg:hidden md:hidden sm:hidden">
                                <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="flex-1 group  bg-primary-grey lg:py-[26px] md:py-[20px] sm:py-[26px] lg:w-[352px] md:w-[204px] lg:h-[400px] md:h-[231px] sm:w-full lg:hover:h-[510px] relative">
                            <div className="flex flex-col justify-between lg:gap-[154px] md:gap-[50px]  h-full lg:pr-[10px] lg:pl-[26px] md:pr-[5px] md:pl-[18px] ">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image src={Rectangle} alt="Rectangle" className="lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]" />
                                        <p className='lg:text-base sm:text-base md:text-tiny'>Insights</p>
                                    </div>
                                    <h5 className='font-gellix font-bold'>Tips for First-Time Home Buyers</h5>
                                </div>
                                <p className="lg:text-sm sm:text-sm md:text-tiny opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    28 November 2024
                                </p>
                            </div>

                            <div className="lg:h-[221px] w-full lg:group-hover:block group-hover:absolute bottom-0 lg:hidden md:hidden sm:hidden">
                                <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between gap-[22px] md:flex-row sm:flex-col'>


                        <div className="flex-1 group  bg-primary-grey lg:py-[26px] md:py-[20px] sm:py-[26px] lg:w-[352px] md:w-[204px] lg:h-[400px] md:h-[231px] sm:w-full lg:hover:h-[510px] relative">
                            <div className="flex flex-col justify-between lg:gap-[154px] md:gap-[50px]  h-full lg:pr-[10px] lg:pl-[26px] md:pr-[5px] md:pl-[18px]">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image src={Rectangle} alt="Rectangle" className="lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]" />
                                        <p className='lg:text-base sm:text-base md:text-tiny'>Insights</p>
                                    </div>
                                    <h5 className='font-gellix font-bold'>Tips for First-Time Home Buyers</h5>
                                </div>
                                <p className="lg:text-sm sm:text-sm md:text-tiny opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    28 November 2024
                                </p>
                            </div>

                            <div className="lg:h-[221px] w-full lg:group-hover:block group-hover:absolute bottom-0 lg:hidden md:hidden sm:hidden">
                                <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="flex-1 group  bg-primary-grey lg:py-[26px] md:py-[20px] sm:py-[26px] lg:w-[352px] md:w-[204px] lg:h-[400px] md:h-[231px] sm:w-full lg:hover:h-[510px] relative">
                            <div className="flex flex-col justify-between lg:gap-[154px] md:gap-[50px]  h-full lg:pr-[10px] lg:pl-[26px] md:pr-[5px] md:pl-[18px] ">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Image src={Rectangle} alt="Rectangle" className="lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]" />
                                        <p className='lg:text-base sm:text-base md:text-tiny'>Insights</p>
                                    </div>
                                    <h5 className='font-gellix font-bold'>Tips for First-Time Home Buyers</h5>
                                </div>
                                <p className="lg:text-sm sm:text-sm md:text-tiny opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    28 November 2024
                                </p>
                            </div>

                            <div className="lg:h-[221px] w-full lg:group-hover:block group-hover:absolute bottom-0 lg:hidden md:hidden sm:hidden">
                                <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>


                </div>
            </div> */}


            <div className="w-full lg:h-screen md:h-[32rem] md:flex md:gap-6 sm:block">
                {/* Left Column */}
                <div className="lg:h-screen md:h-[32rem] lg:w-2/5 md:w-1/3 sm:w-full md:flex flex-col md:mb-0 sm:mb-12 sm:hidden">
                    <div className="bg-primary-button text-white flex-1 pr-3 pl-8 flex flex-col justify-between lg:gap-40 md:gap-20">
                        <div className="lg:mt-7 md:mt-4">
                            <div className="flex items-center gap-3 mb-4">
                                {/* Using placeholder image for rectangle */}
                                <Image src={Rectangle} alt="Rectangle" className="lg:w-3 lg:h-3 md:w-1.5 md:h-1.5 sm:w-3 sm:h-3" />
                                <p className="lg:text-base sm:text-base md:text-xs">Insights</p>
                            </div>
                            <h5 className="font-gellix font-bold">Maximize Your Property Investment Returns</h5>
                        </div>
                        <p className="lg:text-sm sm:text-sm md:text-xs">28 November 2024</p>
                    </div>
                    <div className="flex-1">
                        {/* Using placeholder image for insight */}
                        <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:w-3/5 md:w-2/3 text-primary-button flex flex-col gap-6 md:px-0 sm:px-5">
                    <div className="flex justify-between gap-6 md:flex-row sm:flex-col">
                        {[1, 2].map((item) => (
                            <div key={item} className="flex-1 group bg-primary-grey lg:p-6 md:p-5 sm:p-6 lg:w-80 md:w-52 lg:h-96 md:h-56 sm:w-full hover:h-[30rem] relative">
                                <div className="flex flex-col justify-between lg:gap-40 md:gap-12 h-full lg:px-6 md:px-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            {/* Using placeholder image for rectangle */}
                                            <Image src={Rectangle} alt="Rectangle" className="lg:w-3 lg:h-3 md:w-1.5 md:h-1.5 sm:w-3 sm:h-3" />
                                            <p className="lg:text-base sm:text-base md:text-xs">Insights</p>
                                        </div>
                                        <h5 className="font-gellix font-bold">Understanding the Housing Market Trends</h5>
                                    </div>
                                    <p className="lg:text-sm sm:text-sm md:text-xs opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        28 November 2024
                                    </p>
                                </div>
                                <div className="lg:h-56 w-full lg:group-hover:block group-hover:absolute bottom-0 lg:hidden md:hidden sm:hidden">
                                    {/* Using placeholder image for insight */}
                                    <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between gap-6 md:flex-row sm:flex-col">
                        {[1, 2].map((item) => (
                            <div key={item} className="flex-1 group bg-primary-grey lg:p-6 md:p-5 sm:p-6 lg:w-80 md:w-52 lg:h-96 md:h-56 sm:w-full hover:h-[30rem] relative">
                                <div className="flex flex-col justify-between lg:gap-40 md:gap-12 h-full lg:px-6 md:px-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            {/* Using placeholder image for rectangle */}
                                            <Image src={Rectangle} alt="Rectangle" className="lg:w-3 lg:h-3 md:w-1.5 md:h-1.5 sm:w-3 sm:h-3" />
                                            <p className="lg:text-base sm:text-base md:text-xs">Insights</p>
                                        </div>
                                        <h5 className="font-gellix font-bold">Tips for First-Time Home Buyers</h5>
                                    </div>
                                    <p className="lg:text-sm sm:text-sm md:text-xs opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        28 November 2024
                                    </p>
                                </div>
                                <div className="lg:h-56 w-full lg:group-hover:block group-hover:absolute bottom-0 lg:hidden md:hidden sm:hidden">
                                    {/* Using placeholder image for insight */}
                                    <Image src={Img1} alt="insight image" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
