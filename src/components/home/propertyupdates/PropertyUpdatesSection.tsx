import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import propimg1 from '../../../assets/images/Placeholder Image1.webp'
import { MainButtonDiv } from '@/components/animated/MainButtonDiv'
import { MdArrowOutward } from "react-icons/md";


const ArticleCard = () => (
    <div className="h-[36rem] w-full max-w-lg bg-white relative mx-auto md:mx-0">
        <Image src={propimg1} alt="insight image" className="w-full h-72" />
        <div className="h-96 w-11/12 bg-primary-grey absolute bottom-0 p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <p className="font-semibold text-sm flex gap-2">
                    <span>Real Estate</span> <span>5 min read</span>
                </p>
                <div className="md:prose sm:prose-sm">
                    <h5>Understanding Current Market Trends</h5>
                </div>
                <p className="text-base">
                    Explore the factors influencing today's real estate market.
                </p>
            </div>
            <button className="flex items-center gap-2">
                Learn More <MdArrowOutward />
            </button>
        </div>
    </div>
);



export const PropertyUpdatesSection = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto  lg:mb-28 md:mb-28 sm:mb-14  flex flex-col gap-4 '>

            <div className='flex flex-col gap-4 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8 '>
                <div className='flex items-center gap-3'>
                    <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                    <p >News</p>
                </div>

                {/* <div className='md:prose sm:prose-sm bg-red-400 w-full'>
                    <h2 className='font-space-grotesk '>
                        Latest Property Market Updates
                    </h2>
                </div> */}
                <h1 className='font-space-grotesk font-bold lg:text-5xl md:text-4xl text-primary-button sm:text-4xl'>
                    Latest Property Market Updates
                </h1>

                <div className='flex justify-between text-xl'>
                    <p className=''>
                        Stay informed with latest property news.
                    </p>
                    <div className='md:flex items-center gap-3 sm:hidden'>
                        <p >View all</p>
                        <MdArrowOutward className='bg-primary-blue text-white' />
                    </div>
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


            <div className="flex gap-8 justify-between sm:flex-col md:flex-row">
                {[1, 2, 3].map(i => <ArticleCard key={i} />)}
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