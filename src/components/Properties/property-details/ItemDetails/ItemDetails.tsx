'use client'
import React from 'react'
import image from '@/assets/images/properties_image.webp'
import ImageCarousel from './ImageCarousel'

export const ItemDetails = () => {
    const images = [
        image, image, image, image, image
    ]
    return (
        <div className='max-w-[1440px] ml-auto mr-auto lg:mb-28 md:mb-16  sm:mb-14  '>

            <div className='grid md:pl-0  md:pr-0 sm:pl-8 sm:pr-8 border-t-2 border-primary-grey  lg:mb-14 md:mb-8 sm:mb-8'>
                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Description</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>Located near the centre of Toronto’s Bloor-Yorkville neighbourhood, 55C is a 52-storey condominium tower with 665 suites. The residence is celebrated for its thoughtful design, characterized by high-end finishes and a comprehensive range of amenities including a state-of-the-art fitness facility, a tranquil yoga studio, and a sophisticated rooftop lounge. 55C’s central location offers easy access to downtown while its proximity to the TTC Bloor-Yonge Subway station ensures unparalleled connectivity.</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Status</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>Now Selling, Under Construction</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Location</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>Yonge Street and Charles Street, Midtown Toronto</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Sales</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>Leigbrook</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Developer</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>MOD Developments</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Architect</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>ArchitectsAlliance</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Interior Design</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>Cecconi Simone</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Landscape Design</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>Janet Rosenberg & Studio</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Floors and Suites</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>52 Storeys, 665 Suites</p>
                </div>

                <div className='flex md:flex-row sm:flex-col  md:gap-0 sm:gap-2 lg:pt-6 lg:pb-6 md:pt-[13.9px] md:pb-[13.9px] sm:pt-8 sm:pb-8 border-t-2 border-primary-grey'>
                    <p className='flex-1 lg:text-md md:text-[10px] sm:text-md font-semibold'>Amenities</p>
                    <p className='flex-1 lg:text-base md:text-[8px] sm:text-base'>Lobby, Entertainment Area, Fitness Facility, Yoga Studio, Rooftop Lounge, Parcel Storage</p>
                </div>

            </div>

            <div className="  lg:mt-28 lg:ml-8 lg:mr-8 md:mt-16 md:ml-4 md:mr-4 sm:mt-16 sm:ml-5 sm:mr-5">
                <div className='flex flex-col gap-6'>
                    <h2 className=" font-gellix font-bold text-primary-button ">
                        Media
                    </h2>
                    <p className='md:w-1/2 sm:w-full'>View stunning visuals of the property through our comprehensive gallery. Explore every detail, from interior design to exterior views, and envision your future in this space.</p>
                </div>
                <div className='lg:mt-20 md:mt-11 sm:mt-12 '>
                    <ImageCarousel images={images} />
                </div>


            </div>



        </div>
    )
}
