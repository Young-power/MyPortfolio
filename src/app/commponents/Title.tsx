import React from 'react'
import TextMotion from './motion/TextMotion';

type TitleProps = {
  title: string;
  style: string;
}
const Title = ({ title, style }: TitleProps) => {
  return (
    <TextMotion delay={0.2}>
      <p className={`${style}`}>{title}</p>
    </TextMotion>
  )
}

export default Title