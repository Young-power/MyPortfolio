"use client";
interface Props {
    children:   React.ReactNode
}

const Template = ({ children }: Props) => {
    return (
      
        <div className="animate-fadeIn">
            {children}
        </div>
    )
}

export default Template;
