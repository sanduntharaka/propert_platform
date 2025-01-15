import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import propimg1 from '../../../assets/images/Placeholder Image1.webp'
import { MainButtonDiv } from '@/components/animated/MainButtonDiv'
import { MdArrowOutward } from "react-icons/md";


const ArticleCard = () => (
    <div className="h-[26rem] w-full max-w-lg relative mx-auto md:mx-0 md:pl-0 md:pr-0 sm:pl-8 sm:pr-8">
        <Image src={propimg1} alt="insight image" className="w-full h-72" />
        <div className="h-72 w-11/12 bg-primary-grey absolute top-28 p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <p className="font-semibold lg:text-sm md:text-[8px] sm:text-sm flex gap-2">
                    <span>Real Estate</span> <span>5 min read</span>
                </p>
                <div className="font-gellix font-bold md:prose sm:prose-sm">
                    <h6>Understanding Current Market Trends</h6>
                </div>
                <p className="lg:text-base md:text-[8px] sm:text-base">
                    Explore the factors influencing today's real estate market.
                </p>
            </div>
            <div className="flex items-center gap-2">
                <MainButtonDiv ButtonText="Learn More" ButtonImage={<MdArrowOutward />} line={true} />

            </div>
        </div>
    </div>
);



export const NewsGrid = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-16  sm:mb-14  flex flex-col gap-4 '>

            <div className='flex flex-col gap-4 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8 '>
                <div className='flex items-center gap-3'>
                    <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                    <p className='lg:text-base sm:text-base md:text-tiny_2 '>News</p>
                </div>

                {/* <div className='md:prose sm:prose-sm bg-red-400 w-full'>
                    <h2 className='font-space-grotesk '>
                        Latest Property Market Updates
                    </h2>
                </div> */}
                <h2 className='font-gellix font-bold  text-primary-button'>
                    Latest Property Market Updates
                </h2>

                <div className='flex justify-between lg:text-xl md:text-tiny sm:text-xl'>
                    <p>
                        Stay informed with latest property news.
                    </p>

                </div>
            </div>

            {/* <div className='flex gap-8 justify-between sm:flex-col md:flex-row'>
                <div className='h-[555px] w-[437px] bg-white relative sm:ml-auto sm:mr-auto md:ml-0 md:mr-0'>
                    <Image src={propimg1} alt="insight image" className='w-[437px] h-[300px]' />
                    <div className='h-[371px] w-[357px] bg-primary-grey absolute bottom-0 p-8 flex flex-col justify-between'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-semibold text-sm flex gap-2'>
                                <span>Real Estate</span> <span>5 min read</span>
                            </p>
                            <div className='md:prose sm:prose-sm '>
                                <h5>
                                    Understanding Current Market Trends
                                </h5>
                            </div>
                            <p className='text-base'>
                                Explore the factors influencing today's real estate market.
                            </p>

                        </div>
                        <MainButtonDiv ButtonText="Learn More" ButtonImage={<MdArrowOutward />} />


                    </div>

                </div>

                <div className='h-[555px] w-[437px] bg-white relative sm:ml-auto sm:mr-auto md:ml-0 md:mr-0'>
                    <Image src={propimg1} alt="insight image" className='w-[437px] h-[300px]' />
                    <div className='h-[371px] w-[357px] bg-primary-grey absolute bottom-0 p-8 flex flex-col justify-between'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-semibold text-sm flex gap-2'>
                                <span>Real Estate</span> <span>5 min read</span>
                            </p>
                            <div className='md:prose sm:prose-sm '>
                                <h5>
                                    Understanding Current Market Trends
                                </h5>
                            </div>
                            <p className='text-base'>
                                Explore the factors influencing today&#39;s real estate market.
                            </p>

                        </div>
                        <MainButtonDiv ButtonText="Learn More" ButtonImage={<MdArrowOutward />} />


                    </div>

                </div>

                <div className='h-[555px] w-[437px] bg-white relative sm:ml-auto sm:mr-auto md:ml-0 md:mr-0'>
                    <Image src={propimg1} alt="insight image" className='w-[437px] h-[300px]' />
                    <div className='h-[371px] w-[357px] bg-primary-grey absolute bottom-0 p-8 flex flex-col justify-between'>
                        <div className='flex flex-col gap-4'>
                            <p className='font-semibold text-sm flex gap-2'>
                                <span>Real Estate</span> <span>5 min read</span>
                            </p>
                            <div className='md:prose sm:prose-sm '>
                                <h5>
                                    Understanding Current Market Trends
                                </h5>
                            </div>
                            <p className='text-base'>
                                Explore the factors influencing today&#39;s real estate market.
                            </p>

                        </div>
                        <MainButtonDiv ButtonText="Learn More" ButtonImage={<MdArrowOutward />} />


                    </div>

                </div>



            </div> */}


            <div className="md:grid md:grid-cols-3 sm:grid-cols-1 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <ArticleCard key={i} />)}
            </div>

            {/* flex gap-8 justify-between sm:flex-col md:flex-row */}

            <div className='md:flex justify-end items-center gap-3 sm:hidden'>

                <p className='lg:text-base md:text-tiny_2 sm:text-base'>View all</p>
                <MdArrowOutward className='bg-primary-blue text-white lg:w-[24px] lg:h-[24px] md:w-[13px] md:h-[13px]' />
            </div>

            <div className='mt-12 mb-12 md:hidden'>
                <div className='flex items-center justify-center gap-3 md:hidden'>
                    <p className='lg:text-base md:text-tiny_2 sm:text-base'>View all</p>
                    <MdArrowOutward className='bg-primary-blue text-white' />
                </div>
            </div>
        </div>
    )
}