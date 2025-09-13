"use client"
import { IoIosArrowDropupCircle } from "react-icons/io";
import GoToTop from "./GoToTop";
const ButtonTop = () => {
   const {showTopElement, scrollToTop} = GoToTop();
   return (
      <>{showTopElement? (
         <div className="fixed z-50  bottom-16 right-3 animate-bounce cursor-pointer text-yellow-200" onClick={scrollToTop}>
         <IoIosArrowDropupCircle className="text-[36px] " />
      </div>): null
      }</>
     
   );
};

export default ButtonTop;
