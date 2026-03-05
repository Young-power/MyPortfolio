import ButtonTop from '@/app/components/goTop/ButtonTop'
import Solution from '@/app/components/m2kgroup/Solution'
import Title from '@/app/components/m2kgroup/Title'
import TopHead from '@/app/components/m2kgroup/TopHead'
import React from 'react'

const page = () => {
    return (
        <div className="w-full  transition-colors duration-300">
             <ButtonTop />

            {/* Top Header */}
            <TopHead />

            {/* Section principale */}
            <Title />

            {/* Solutions / Services */}
            <Solution />
        </div>
    )
}

export default page
