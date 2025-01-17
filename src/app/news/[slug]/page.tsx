import React from 'react'
import NewsBanner from '../../../assets/images/news-slug-banner.webp'
import UserAvatar from '../../../assets/images/avatar-user.png'
import facebook from '../../../assets/icons/facebook.png'

import { FaFacebook, FaXTwitter, FaLinkedin, FaLink } from "react-icons/fa6";
import Image from 'next/image'
import { NewsGrid } from '@/components/News/news/NewsGrid';

const page = () => {
    return (
        <div className='max-w-[1440px] md:ml-auto md:mr-auto sm:mr-8 sm:ml-8'>
            <div className='grid lg:gap-10 md:gap-7 sm:gap-10 lg:pt-32 md:pt-16 sm:pt-32  lg:pb-32 md:pb-16 sm:pb-32    '>
                <p className='lg:text-base md:text-[8px] sm:text-base'>News &gt; Catrogories</p>
                <h2 className='font-gellix font-bold '>
                    Understanding Current Market <br />Trends
                </h2>
                <div className='flex lg:gap-4  md:gap-3  sm:gap-4 items-center'>
                    <Image src={UserAvatar} alt="Avatar" className="object-fill lg:w-14 lg:h-14 md:w-8 md:h-8 sm:w-14 sm:h-14" />
                    <div className='flex flex-col lg:text-sm md:text-[8px]  lg:gap-1 sm:text-sm  md:-gap[2px] sm:gap-1'>
                        <p className='font-semibold '>Full name</p>
                        <p className=''>
                            <span>11 Jan 2024 </span>
                            <span className="font-bold lg:text-[18px] md:text-[9px] sm:text-[18px] lg:mx-2 md:mx-1 sm:mx-2">•</span> {/* Styled dot */}
                            <span>5 min read</span>
                        </p>
                    </div>

                </div>

                <div className="w-full h-[666px] sm:h-[408px] md:h-[500px] lg:h-[666px]">
                    <Image src={NewsBanner} alt="Banner" className="object-fill w-full h-full" />
                </div>

            </div>

            <div className='w-full mb-24'>
                <div className=' max-w-[768px] ml-auto mr-auto grid gap-6'>
                    <h3 className='font-gellix font-bold '>
                        Introduction
                    </h3>
                    <div className='grid gap-4'>
                        <p>
                            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                        </p>
                        <p>
                            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                        </p>
                        <div className='mt-12 mb-12'>
                            <Image src={NewsBanner} alt="Banner" className="object-fill w-full h-full" />
                        </div>
                        <p className='font-bold'>
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                        </p>
                        <p>
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                        </p>

                        <div className='mt-9 mb-9 flex gap-5 italic'>
                            <div className='w-1 border-2 border-black'></div>
                            "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
                        </div>
                        <p>
                            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
                        </p>
                    </div>
                </div>

                <div className=' max-w-[768px] ml-auto mr-auto grid gap-6 mt-6 mb-16'>
                    <h4 className='font-gellix font-bold '>
                        Conclusion
                    </h4>
                    <div className='grid gap-4'>
                        <p>
                            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                        </p>
                        <p>
                            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                        </p>
                        <p>
                            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
                        </p>

                    </div>
                </div>

                <div className=' max-w-[768px] ml-auto mr-auto grid gap-4 '>
                    <p className='text-md font-semibold'>Share this post</p>
                    <div className='flex md:flex-row sm:flex-col md:gap-0 sm:gap-8  justify-between'>
                        <div className=' flex gap-4'>
                            <FaLink className='w-8 h-8' />
                            < FaFacebook className='w-8 h-8' />
                            <FaXTwitter className='w-8 h-8' />
                            <FaLinkedin className='w-8 h-8' />
                        </div>
                        <div className=' flex gap-2'>
                            <div className='bg-[#EFF2F7] p-1'><p>Tag one</p></div>
                            <div className='bg-[#EFF2F7] p-1'><p>Tag two</p></div>
                            <div className='bg-[#EFF2F7] p-1'><p>Tag three</p></div>
                            <div className='bg-[#EFF2F7] p-1'><p>Tag four</p></div>
                        </div>
                    </div>

                    <div className='mt-12 border-2 border-[#1A2745]'></div>

                </div>

                <div className=' max-w-[768px] ml-auto mr-auto grid gap-4 mt-12'>

                    <div className='flex lg:gap-4  md:gap-3  sm:gap-4 items-center'>
                        <Image src={UserAvatar} alt="Avatar" className="object-fill lg:w-14 lg:h-14 md:w-8 md:h-8 sm:w-14 sm:h-14" />
                        <div className='flex flex-col lg:text-sm md:text-[8px]  lg:gap-1 sm:text-sm  md:-gap[2px] sm:gap-1'>
                            <p className='font-semibold '>Full name</p>
                            <p className=''>
                                <span>11 Jan 2024 </span>
                                <span className="font-bold lg:text-[18px] md:text-[9px] sm:text-[18px] lg:mx-2 md:mx-1 sm:mx-2">•</span> {/* Styled dot */}
                                <span>5 min read</span>
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <NewsGrid />

        </div >
    )
}

export default page