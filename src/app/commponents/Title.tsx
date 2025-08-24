import React from 'react'

type TitleProps = {
    title:string;
    style: string;
}
const Title = ({title, style}:TitleProps) => {
  return (
    <p className={`${style}`}>{title}</p>
  )
}

export default Title