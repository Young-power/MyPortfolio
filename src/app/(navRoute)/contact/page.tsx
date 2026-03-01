import Mail from '@/app/components/mail/Mail'
import MyMapWrapper from '@/app/components/map/MyMapWrapper'

const page = () => {
  return (
    <div className='w-full bg-white py-7'>
      <Mail />
      <MyMapWrapper />
    </div>
  )
}

export default page