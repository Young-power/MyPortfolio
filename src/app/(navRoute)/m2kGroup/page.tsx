import ButtonTop from '@/app/components/goTop/ButtonTop'
import Nav from '@/app/components/m2kgroup/Nav'
import Solution from '@/app/components/m2kgroup/Solution'
import Store from '@/app/components/m2kgroup/store/Store'
import Title from '@/app/components/m2kgroup/Title'
import TopHead from '@/app/components/m2kgroup/TopHead'
import React from 'react'

const page = () => {
    return (
        <div className="w-full relative transition-colors duration-300">

            <Nav />

            <ButtonTop />

            {/* Top Header */}
            <TopHead />

            {/* Section principale */}
            <Title />

            {/* Solutions / Services */}
            <Solution />
            <Store />
        </div>
    )
}

export default page
