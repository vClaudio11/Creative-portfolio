'use client'

import { useRef, useState } from "react"
import { Field } from "./ui/field"

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0)
    const throttle = useRef(false)

    const videoArray = [ "/videos/hero/telesin-1.mov", 
                        "/videos/hero/telesin-1.mov",
                        "/videos/hero/telesin-1.mov",
                        "/videos/hero/telesin-1.mov"
    ]

    function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
        if (throttle.current === true) {
            return 
        } else {
            setActiveIndex(prev => {
                const newIndex = e.deltaY > 0 ? prev + 1 : prev - 1
                return (newIndex + videoArray.length) % videoArray.length
            })
            throttle.current = true
            setTimeout(() => {throttle.current = false}, 500)
        }
    }

    function getCircularDistance(index: number, activeIndex: number, length: number) {
        let distance = index - activeIndex
        if (distance > length/2) {
            distance = distance - length
        } else if (distance < -length/2) {
            distance = distance + length
        }

        return distance
    }
    
    return(
        <div className="h-screen flex flex-col">
            {/* Nav bar */}
            <div className="flex flex-row justify-center items-center text-center border-b-2">
                <Field className="border-r-2 hover:cursor-pointer text-4xl py-8">Get in touch</Field>
                <Field className="hover:cursor-pointer text-4xl py-8">My work</Field>
            </div>
            {/* Hero content */}
            <div className="flex flex-row flex-1 w-full h-screen">
                <Field className="flex flex-col justify-center items-center w-1/3 border-r-2">
                    <h1 className="text-center text-2xl">Von Claudio</h1>
                    <p className="text-center">Social media creative delving into cinematography and storytelling</p>
                    <a className="text-center underline hover:cursor-pointer">About me</a>
                </Field>
                <Field className="flex flex-col justify-center items-center w-2/3 px-8">
                    <div 
                        onWheel={handleWheel}
                        className="flex"
                    >
                        {videoArray.map((video, index) => {
                            const distance = getCircularDistance(index, activeIndex, videoArray.length)
                            return (
                                <div key={index}>
                                    <p>{distance}</p>
                                    <video src={video}></video>
                                </div>
                            )
                        })}
                    </div>
                </Field>
            </div>
        </div>
    )
}