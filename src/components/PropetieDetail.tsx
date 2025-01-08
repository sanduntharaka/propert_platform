import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export const PropetieDetail = ({ prop_name, location, longitude, altitude }: PropertyDetailsHome) => {
    return (
        <div className='relative lg:p-6 md:p-3 sm:p-6 flex flex-col lg:gap-[22px] md:gap-[9px] sm:gap-[22px]  '>
            <div className='flex justify-between items-center'>
                <h6 className='font-space-grotesk font-bold '>{prop_name}</h6>
                <MdArrowOutward className='text-black lg:w-6 md:w-[6px] sm:w-6 lg:h-6 md:h-[6px] sm:h-6' />
            </div>
            <div className='flex sm:flex-col md:flex-row md:items-center gap-4'>
                <div className=''>
                    <div className='inline-block lg:px-2 md:px-[4px] sm:px-2 lg:py-1 md:py-[2.32px] sm:py-1 bg-primary-grey font-semibold lg:text-sm md:text-[8px] sm:text-sm'>{location}</div>
                </div>
                <div className='font-light lg:text-xs md:text-[8px] sm:text-xs'>{longitude},{altitude}</div>
            </div>
        </div>
    )
}
