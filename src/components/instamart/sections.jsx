import React, { useRef } from "react"
const Section = ({title,isVisible,description,setIsVisible}) =>{
    const buttonRef = useRef()
    const handleClick= () =>{
        const buttonText = buttonRef.current.textContent;
        buttonText === 'Show'?setIsVisible(title):setIsVisible('')
    }
    return (
        <div className="p-3 m-6 bg-slate-100 shadow-md">
            <h1 className="text-md font-bold">{title}</h1>
            <button className=" border p-1 mt-3 mb-3 text-white bg-purple-950 rounded-md"
            onClick={handleClick} ref={buttonRef}>{isVisible?'Hide':'Show'}</button>
            {
                isVisible && <p>{description}</p>
            }
        </div>
    )
}
export default Section