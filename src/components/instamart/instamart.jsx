import React, { useState } from "react"
import Section from "./sections"
import { sectionData } from "../../constants"
const Instamart = () => {
    const [isVisible, setIsVisible] = useState('')
    return (
        <div className="p-28 m-5">
            <h1 className="text-2xl font-bold">Welcome to instamart</h1>
            {
                sectionData.map(section => <Section key={section?.id} setIsVisible={setIsVisible} isVisible={isVisible === section?.title} {...section} />)
            }
        </div>
    )
}
export default Instamart