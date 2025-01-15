import React from 'react'
import About from '../../../assets/images/About.webp'
import Rectangle from '../../../assets/icons/rectangle.png'

import Image from 'next/image'
export const DiscoverDreams = () => {
    return (
        <div className='max-w-[1440px] ml-auto mr-auto '>
            <div className='bg-primary-grey  lg:pt-28 lg:pb-28 lg:pr-8 lg:pl-8 md:pr-8 md:pl-8  sm:pt-16 sm:pb-16  md:pt-16 md:pb-16  md:-mr-8 md:-ml-8 '>
                <div className='flex md:flex-row sm:flex-col  lg:gap-[80px] sm:gap-12 items-center lg:mb-28 sm:mb-16'>
                    <div className='flex-1 flex flex-col gap-4 md:ml-0 md:mr-0 sm:ml-8 sm:mr-8 '>

                        <h3 className='font-gellix font-bold  text-primary-button'>
                            Discover Your Dream Home with Our Innovative Property Platform
                        </h3>
                        <div className='flex justify-between lg:text-xl md:text-tiny sm:text-xl mb-3'>
                            <p>Our platform connects you with a diverse range of properties tailored to your needs. Experience seamless browsing and personalized recommendations that make finding your ideal home a breeze.</p>
                        </div>


                        <div className='flex flex-col  lg:gap-6 md:gap-2 sm:gap-6 lg:w-1/2 md:w-2/3 md:ml-0 md:mr-0 '>
                            <div className='flex items-center gap-3'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <h6 className='font-gellix text-xl font-bold'>Diverse Property Listings</h6>
                            </div>
                            <p className='lg:text-base md:text-tiny sm:text-base '>
                                Explore a wide variety of properties, from modern apartments to luxurious estates, tailored to match your preferences.
                            </p>
                            <div className='flex items-center gap-3 lg:mt-0 md:mt-6 sm:mt-0'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <h6 className='font-gellix text-xl font-bold'>Trusted Property Information</h6>
                            </div>
                            <p className='lg:text-base md:text-tiny sm:text-base '>
                                Access verified and comprehensive details, ensuring transparency and confidence in your choices.
                            </p>

                            <div className='flex items-center gap-3 lg:mt-0 md:mt-6 sm:mt-0'>
                                <Image src={Rectangle} alt="Rectangle" className='lg:w-[10px] lg:h-[10px] sm:w-[10px] sm:h-[10px] md:w-[5.79px] md:h-[5.79px]' />
                                <h6 className='font-gellix text-xl font-bold'>Dedicated Support</h6>
                            </div>
                            <p className='lg:text-base md:text-tiny sm:text-base '>
                                Our team is here to guide you every step of the way, answering your questions and simplifying the search process.
                            </p>

                        </div>

                    </div>

                    <div className="flex-1 lg:h-[640px] md:h-[370px] sm:h-[348px] overflow-hidden">
                        <Image src={About} alt="Banner" className="object-fill w-full h-full" />
                    </div>


                </div>

                <div className='flex md:flex-row sm:flex-col gap-4 lg:pt-28 sm:pt-16 lg:pr-8 lg:pl-8 md:pr-4 md:pl-4 sm:pr-8 sm:pl-8'>
                    <h3 className='flex-1 font-gellix font-bold  text-primary-button'>
                        Discover Your Dream Home with Our Innovative Property Platform
                    </h3>

                    <p className='flex-1 lg:text-base md:text-tiny sm:text-base' >Our platform simplifies property searches by connecting you directly with listings that match your preferences. With user-friendly navigation and advanced filtering options, you can easily explore a variety of properties. Whether you're buying, renting, or investing, we provide the tools you need to make informed decisions.</p>


                </div>


            </div>




        </div>
    )
}
// gap = 80px