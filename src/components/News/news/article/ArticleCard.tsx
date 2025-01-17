'use client'

import React from 'react'
import Image from 'next/image'
import propimg1 from '../../../../assets/images/Placeholder Image1.webp'
import { MainButtonDiv } from '@/components/animated/MainButtonDiv'
import { MdArrowOutward } from "react-icons/md";

import { useRouter } from 'next/navigation'
const ArticleCard = () => {
    const router = useRouter()
    return (
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
                <div className="flex items-center gap-2 ">
                    <div className='bg-green-300' onClick={() => router.push('news/a41s565abcd')}>
                        <MainButtonDiv ButtonText="Learn More" ButtonImage={<MdArrowOutward />} line={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard