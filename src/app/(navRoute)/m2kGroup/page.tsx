import Solution from '@/app/components/m2kgroup/Solution'
import Title from '@/app/components/m2kgroup/Title'
import TopHead from '@/app/components/m2kgroup/TopHead'
import React from 'react'

const page = () => {
    return (
        <div className="w-full bg-white dark:bg-zinc-800 transition-colors duration-300">
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
