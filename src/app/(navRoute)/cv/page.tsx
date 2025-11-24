import Cv from '@/app/commponents/cv/Cv'
import { ToastContainer } from 'react-toastify'

const page = () => {
  return (
    <div className=' relative min-h-screen  flex justify-center items-center'>
      <ToastContainer position='top-center'  />
      <Cv />

    </div>
  )
}

export default page