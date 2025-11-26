import React from 'react'
import Tippy, { TippyProps } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

interface Props {
    children: React.ReactElement,
    message: string,
    placement: TippyProps["placement"]
    animation: TippyProps["animation"]
}
const TippyShow = ({ children, message, placement, animation }: Props) => {
    return (
        <Tippy
            content={message}
            placement={placement}
            animation={animation}
            theme='custom'>
            {children}
        </Tippy>
    )
}

export default TippyShow
