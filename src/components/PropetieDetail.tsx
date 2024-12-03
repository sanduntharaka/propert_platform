import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export const PropetieDetail = ({ prop_name, location, longitude, altitude }: PropertyDetailsHome) => {
    return (
        <div className='relative p-6 flex flex-col gap-[22px]  '>
            <div className='flex justify-between items-center'>
                <h3 className='font-space-grotesk font-bold text-2xl'>{prop_name}</h3>
                <MdArrowOutward className='text-black' />
            </div>
            <div className='flex sm:flex-col md:flex-row md:items-center gap-4'>
                <div className=''>
                    <div className='inline-block px-2 py-1 bg-primary-grey font-semibold text-sm'>{location}</div>
                </div>
                <div className='font-light text-xs'>{longitude},{altitude}</div>
            </div>
        </div>
    )
}
