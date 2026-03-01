import React from 'react'
import AnimateCircle from './AnimateCircle'

const CircleContainer = () => {
    return (
        <div className='w-full flex-col md:flex-row max-w-1/2 mx-auto flex gap-3 justify-center items-center mt-7 md:space-x-4 md:mt-16 '>
            
            <div className='flex flex-col justify-center items-center space-y-3 text-lg md:text-xl font-semibold italic'>
                <p className=' text-muted-foreground dark:text-white font-bold '>Année d&apos;Expériences</p>
                <AnimateCircle years={9} showText={true} />
            </div>

            <div className='flex flex-col justify-center items-center space-y-3 md:text-xl font-semibold italic'>
                <p className='text-muted-foreground dark:text-white font-bold'>Projets réalisés</p>
                <AnimateCircle years={7} showText={false} />
            </div>
            <div className='flex flex-col justify-center items-center space-y-3  md:text-xl font-semibold italic'>
                <p className='text-muted-foreground dark:text-white font-bold'>Clients</p>
                <AnimateCircle years={2} showText={false} />
            </div>
        </div>
    )
}

export default CircleContainer
