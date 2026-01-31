"use client"
import { useEffect, useState } from "react"



//Code to go on the top of page
const GoToTop = () => {
    const [showTopElement, setShowTopElement]= useState<boolean>(false);
    
    useEffect(()=>{

        const handleScroll = () =>{
            if(window.scrollY >100){
                setShowTopElement(true);
            }else{
                setShowTopElement(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return ()=> window.removeEventListener("scroll", handleScroll);

    },[]);


    const scrollToTop = ():void =>{
        window.scrollTo({top:0, behavior:"smooth"})
    }
    return (
     {showTopElement, scrollToTop}
  )
}

export default GoToTop