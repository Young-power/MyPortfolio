import Mail from '@/app/commponents/mail/Mail'
import MyMapWrapper from '@/app/commponents/map/MyMapWrapper'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <Mail />
      <MyMapWrapper />
    </div>
  )
}

export default page