import { Banner } from '@/components/News/banner/Banner'
import { NewsGrid } from '@/components/News/news/NewsGrid'
import { WeekTrends } from '@/components/News/trends/WeekTrends'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner />
            <NewsGrid />
            <WeekTrends />
        </>
    )
}

export default page