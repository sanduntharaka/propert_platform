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
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-28  sm:mb-14  '>
            <div className='flex flex-col gap-4 mb-14 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8'>
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

            <div className='mt-10 mb-10 md:hidden'>
                <div className='flex items-center justify-center gap-3 md:hidden'>
                    <p >Explore More</p>
                    <MdArrowOutward className='bg-primary-blue text-white' />
                </div>
            </div>
        </div>
    )
}
