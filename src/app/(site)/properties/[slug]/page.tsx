import { BottonText } from '@/components/Properties/bottom/BottonText'
import { PropertiesGrid } from '@/components/Properties/properties/PropertiesGrid'
import { Banner } from '@/components/Properties/property-details/banner/Banner'
import { ItemDetails } from '@/components/Properties/property-details/ItemDetails/ItemDetails'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner />
            <ItemDetails />
            {/* TODO take expolore more in proper place */}
            <PropertiesGrid />
            <BottonText />
        </>
    )
}

export default page