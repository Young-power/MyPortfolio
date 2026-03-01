import About from "@/app/components/about/About"
import ButtonTop from "@/app/components/goTop/ButtonTop"

const page = () => {
  return (
    <div className=' relative bg-white min-h-screen  flex '> 
        <About />
        <ButtonTop />
    </div>
  )
}

export default page