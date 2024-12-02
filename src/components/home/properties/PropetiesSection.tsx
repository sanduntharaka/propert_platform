import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import { MdArrowOutward } from "react-icons/md";

import ImageOne from '../../../assets/images/img1.png'
import ImageTwo from '../../../assets/images/img2.png'
import ImageThree from '../../../assets/images/img3.png'
import ImageFour from '../../../assets/images/img4.png'
import ImageFive from '../../../assets/images/img5.png'

export const PropetiesSection = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-28  sm:mb-14  '>
            <div className='flex flex-col gap-4 mb-14'>
                <div className='flex items-center gap-3'>
                    <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' />
                    <p >Properties</p>
                </div>


                <h1 className='font-space-grotesk font-bold lg:text-5xl md:text-4xl text-primary-button sm:text-4xl'>
                    Discover Your Dream Home
                </h1>

                <div className='flex justify-between text-xl'>
                    <p>
                        Explore our exclusive featured properties today.
                    </p>
                    <div className='md:flex items-center gap-3 sm:hidden'>
                        {/* <Image src={Rectangle} alt="Rectangle" className='w-[10px] h-[10px]' /> */}
                        <p >Explore More</p>
                        <MdArrowOutward className='bg-primary-blue text-white' />
                    </div>
                </div>
            </div>
            #TODO fix responsive more
            <div className='md:flex md:flex-row justify-evenly md:h-[1771px] gap-7 text-primary-button sm:flex-col'>
                <div className='flex-1 flex flex-col gap-4 '>
                    <div className='md:h-[1178px] sm:h-[577px] '>
                        <Image src={ImageOne} alt="ImageOne" className='object-fill md:w-[674px] md:h-[1051px] sm:h-[400px]' />
                        <div className='p-6 flex flex-col gap-[22px] '>
                            <div className='flex  justify-between items-center'>
                                <h3 className='font-space-grotesk font-bold text-2xl'>Anthology of King Prussia</h3>
                                <MdArrowOutward className=' text-black' />
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='px-2 py-1 bg-primary-grey font-semibold text-sm'>London</div>
                                <div className='  font-light text-xs'>
                                    40.085983,-75.413528
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='md:h-[577px] sm:h-[583px]'>
                        <Image src={ImageTwo} alt="ImageOne" className='object-fill w-[680px] h-[450px]' />
                        <div className='p-6 flex flex-col gap-[22px] '>
                            <div className='flex  justify-between items-center'>
                                <h3 className='font-space-grotesk font-bold text-2xl'>Anthology of King Prussia</h3>
                                <MdArrowOutward className=' text-black' />
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='px-2 py-1 bg-primary-grey font-semibold text-sm'>London</div>
                                <div className='  font-light text-xs'>
                                    40.085983,-75.413528
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-[20px]'>
                    <div className='h-[577px] '>
                        <Image src={ImageThree} alt="ImageOne" className='object-fill w-[680px] h-[450px]' />
                        <div className='p-6 flex flex-col gap-[22px] '>
                            <div className='flex  justify-between items-center'>
                                <h3 className='font-space-grotesk font-bold text-2xl'>Collection of the Prussian Monarchs</h3>
                                <MdArrowOutward className=' text-black' />
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='px-2 py-1 bg-primary-grey font-semibold text-sm'>Whales</div>
                                <div className='  font-light text-xs'>
                                    40.085983, -75.413528
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='h-[577px]'>
                        <Image src={ImageFour} alt="ImageOne" className='object-fill w-[680px] h-[450px]' />
                        <div className='p-6 flex flex-col gap-[22px] '>
                            <div className='flex  justify-between items-center'>
                                <h3 className='font-space-grotesk font-bold text-2xl'>Chronicles of the Prussian Monarchs</h3>
                                <MdArrowOutward className=' text-black' />
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='px-2 py-1 bg-primary-grey font-semibold text-sm'>Oval</div>
                                <div className='  font-light text-xs'>
                                    40.085983,-75.413528
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='h-[577px]'>
                        <Image src={ImageFive} alt="ImageOne" className='object-fill w-[680px] h-[450px]' />
                        <div className='p-6 flex flex-col gap-[22px] '>
                            <div className='flex  justify-between items-center'>
                                <h3 className='font-space-grotesk font-bold text-2xl'>Collection of the Prussian Monarchs</h3>
                                <MdArrowOutward className=' text-black' />
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='px-2 py-1 bg-primary-grey font-semibold text-sm'>Oxford</div>
                                <div className='  font-light text-xs'>
                                    40.085983,-75.413528
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='mt-10 mb-10 md:hidden'>
                <div className='flex items-center justify-center gap-3 md:hidden'>
                    <p >Explore More</p>
                    <MdArrowOutward className='bg-primary-blue text-white' />
                </div>
            </div>





        </div>
    )
}
