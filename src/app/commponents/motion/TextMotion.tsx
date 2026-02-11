'use client';
import {motion} from 'framer-motion'
interface Props {
    children:React.ReactNode;
    delay:number;
    style?:string;

}
const TextMotion = ({children, delay, style}:Props) => {
  return (
    <motion.div
 
      initial={{ opacity: 0, y:20 }} // ici on utilise la prop y
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={`${style}`}
    >
        {children}
    </motion.div>
  )
}

export default TextMotion
