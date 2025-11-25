'use client';
import {motion} from 'framer-motion'
interface Props {
    children:React.ReactNode,
    delay:number
}
const TextMotion = ({children, delay}:Props) => {
  return (
    <motion.div
 
      initial={{ opacity: 0, y:20 }} // ici on utilise la prop y
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
        {children}
    </motion.div>
  )
}

export default TextMotion
