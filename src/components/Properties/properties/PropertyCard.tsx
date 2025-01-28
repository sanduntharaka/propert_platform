'use client'

import Image from 'next/image'
import React from 'react'
import Properties from '../../../assets/images/properties_image.webp'
import { PropetieDetail } from '@/components/PropetieDetail'
import { useRouter } from 'next/navigation'


const PropertyCard = () => {
    const router = useRouter()


    return (
        <div className='sm:h-min w-auto cursor-pointer' onClick={() => router.push('properties/a41s565abcd')}>
            <Image src={Properties} alt="ImageOne" />
            <PropetieDetail
                prop_name={"Anthology of King Prussia"}
                location={"London"}
                longitude={40.085983}
                altitude={-75.413528}

            />
        </div>

    )
}

export default PropertyCard