import About from "@/app/commponents/about/About"
import ButtonTop from "@/app/commponents/goTop/ButtonTop"

const page = () => {
  return (
    <div className=' relative min-h-screen  flex '> 
        <About />
        <ButtonTop />
    </div>
  )
}

export default page