import { Banner } from '@/components/about/banner/Banner'
import { DiscoverDreams } from '@/components/about/Bottom/DiscoverDreams'
import { EmpowerSection } from '@/components/about/empower/EmpowerSection'
import { ContactSection } from '@/components/home/contactsection/ContactSection'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner />
            <EmpowerSection />
            <DiscoverDreams />
            <ContactSection />
        </>
    )
}

export default page