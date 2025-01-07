"use client";
import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../assets/icons/rectangle.png'
import { MdArrowOutward } from "react-icons/md";

import ImageOne from '../../../assets/images/img1.webp'
import ImageTwo from '../../../assets/images/img2.png'
import ImageThree from '../../../assets/images/img3.webp'
import ImageFour from '../../../assets/images/img4.webp'
import ImageFive from '../../../assets/images/img5.webp'
import { motion } from 'framer-motion'
import { PropetieDetail } from '@/components/PropetieDetail';

export const PropetiesSection = () => {
    return (<>
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-16  sm:mb-14  '>
            <div className='flex flex-col lg:gap-4 md:gap-[9px] sm:gap-4 lg:mb-14 md:mb-8 sm:mb-14 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8'>
                <div className='flex items-center gap-3'>
                    <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                    <p className='lg:text-base sm:text-base md:text-tiny_2 '>Properties</p>
                </div>


                <h2 className='font-gellix font-bold  text-primary-button'>
                    Discover Your Dream Home
                </h2>

                <div className='flex justify-between lg:text-xl md:text-tiny sm:text-xl'>
                    <p>
                        Explore our exclusive featured properties today.
                    </p>
                    <div className='md:flex items-center gap-3 sm:hidden'>

                        <p className='lg:text-base md:text-tiny_2 sm:text-base'>Explore More</p>
                        <MdArrowOutward className='bg-primary-blue text-white lg:w-[24px] lg:h-[24px] md:w-[13px] md:h-[13px]' />
                    </div>
                </div>
            </div>
            #TODO tablet responsive
            {/* properties show here */}
            <div className='md:flex md:flex-row md:justify-evenly md:h-[1771px] sm:gap-10 text-primary-button sm:grid'>
                <div className='flex-1 flex flex-col md:gap-4'>
                    <div className='relative md:h-[1175px] sm:h-[577px] md:overflow-hidden'>
                        <motion.div
                            className="relative md:w-full md:h-[1051px] sm:h-[400px] inset-0"
                            initial={{ scale: 1.05 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Image
                                src={ImageOne}
                                alt="ImageOne"
                                layout="fill"
                                objectFit="cover"
                            />
                        </motion.div>

                        <PropetieDetail
                            prop_name={"Anthology of King Prussia"}
                            location={"London"}
                            longitude={40.085983}
                            altitude={-75.413528}
                        />

                    </div>
                    <div className='relative md:h-[577px] sm:h-[583px]  md:overflow-hidden'>
                        <motion.div
                            className="relative md:w-full h-[450px] inset-0"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                        >

                            <Image src={ImageTwo} alt="ImageOne" layout="fill" objectFit="cover" />
                        </motion.div>

                        <PropetieDetail
                            prop_name={"Anthology of King Prussia"}
                            location={"London"}
                            longitude={40.085983}
                            altitude={-75.413528}
                        />

                    </div>
                </div>
                <div className='flex-1 flex flex-col md:gap-[20px] sm:gap-[50px]'>
                    <div className='relative h-[577px]  md:overflow-hidden'>
                        <motion.div
                            className="relative md:w-full h-[450px] inset-0"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image src={ImageThree} alt="ImageOne" layout="fill" objectFit="cover" />
                        </motion.div>
                        <PropetieDetail
                            prop_name={"Collection of the Prussian Monarchs"}
                            location={"Whales"}
                            longitude={40.085983}
                            altitude={-75.413528}
                        />


                    </div>
                    <div className='relative h-[577px]  md:overflow-hidden'>
                        <motion.div
                            className="relative md:w-full h-[450px] inset-0"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image src={ImageFour} alt="ImageOne" layout="fill" objectFit="cover" />
                        </motion.div>

                        <PropetieDetail
                            prop_name={"Chronicles of the Prussian Monarchs"}
                            location={"Oval"}
                            longitude={40.085983}
                            altitude={-75.413528}
                        />


                    </div>
                    <div className='relative h-[577px]  md:overflow-hidden'>
                        <motion.div
                            className="relative md:w-full h-[450px] inset-0"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image src={ImageFive} alt="ImageOne" layout="fill" objectFit="cover" />
                        </motion.div>

                        <PropetieDetail
                            prop_name={"Chronicles of the Prussian Monarchs"}
                            location={"Oval"}
                            longitude={40.085983}
                            altitude={-75.413528}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-12 mb-12 md:hidden'>
            <div className='flex items-center justify-center gap-3 md:hidden'>
                <p >Explore More</p>
                <MdArrowOutward className='bg-primary-blue text-white' />
            </div>
        </div>
    </>
    )
}
