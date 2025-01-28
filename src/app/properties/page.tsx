import { ContactSection } from '@/components/home/contactsection/ContactSection'
import { Banner } from '@/components/Properties/banner/Banner'
import { PropertiesGrid } from '@/components/Properties/properties/PropertiesGrid'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner />
            <PropertiesGrid />
            <ContactSection />
        </>
    )
}

export default page