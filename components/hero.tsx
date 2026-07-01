'use client'

import { useEffect, useRef, useState } from "react"
import { Field } from "./ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Button } from "./ui/button"

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0)
    const throttle = useRef(false)
    const carouselRef = useRef<HTMLDivElement>(null)

    const videoArray = [ "/videos/hero/telesin-1.mov", 
                        "/videos/hero/telesin-1.mov",
                        "/videos/hero/telesin-1.mov",
                        "/videos/hero/telesin-1.mov"
    ]

    useEffect(() => {
        const el = carouselRef.current
        if (!el) return

        const onWheel = (e: WheelEvent) => {
            e.preventDefault()
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

        el.addEventListener('wheel', onWheel, { passive: false} )
        return () => el.removeEventListener('wheel', onWheel)
    }, [])

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
        <div className="relative h-screen flex flex-col mx-8">
            <div className="flex flex-col flex-1 justify-center items-center w-full h-screen">
                {/* <div className="absolute top-12">
                    <p className="text-center text-7xl uppercase font-semibold">Independant</p>
                    <p className="text-center text-7xl uppercase font-semibold">cinematographer</p>
                </div> */}
                <Field>
                    <h1 className="text-center text-4xl uppercase font-bold">Von Claudio</h1>
                    <p className="text-center">Social media creative delving into cinematography and storytelling</p>
                </Field>
                <Field className="justify-center items-center px-8">   
                    <div 
                        ref={carouselRef}
                        className="flex"
                        style={{
                            perspective: "1000px",
                            position: "relative",
                            width: "600px",
                            height: "300px"
                        }}
                    >
                        {videoArray.map((video, index) => {
                            const distance = getCircularDistance(index, activeIndex, videoArray.length)
                            return (
                                <div 
                                    key={index}
                                    style={{
                                        transform: `translate(-50%, -50%) translateX(${Math.abs(distance) === 2 ? 0 : distance * 150}px) scale(${Math.abs(distance) === 0 ? 1.3 : 1 - (Math.abs(distance) / videoArray.length) + 0.15})`,
                                        opacity: `${Math.abs(distance) === 0 ? 1 : 1 - (Math.abs(distance) * 0.4)}`,
                                        zIndex: 10 - Math.abs(distance),
                                        transition: 'all 0.6s ease-in-out',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%'
                                    }}
                                >
                                    <video 
                                        className="rounded-md"
                                        src={video}>
                                    </video>
                                </div>
                            )
                        })}
                    </div>              
                </Field>
                <Field>
                    <p className="text-center text-xl uppercase">Worked with</p>
                    <div className="flex flex-row justify-center items-center">
                        <HoverCard>
                            <HoverCardTrigger>
                                <Button variant='link' className="text-center -mt-2">TELESIN</Button>
                            </HoverCardTrigger>
                            <HoverCardContent side="left">
                                <p className="font-semibold">Collaboration with deliverables</p>
                                <p>Full-control over planning, pre-production, shooting and editing with deliverables</p>
                                <p className="mt-1 text-xs text-muted-foreground">Completed September 2025</p>
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <Button variant='link' className="text-center -mt-2">SANDMARC</Button>
                            </HoverCardTrigger>
                            <HoverCardContent side="right">
                                <p className="font-semibold">Collaboration with deliverables</p>
                                <p>Full-control over planning, pre-production, shooting and editing with deliverables</p>
                                <p className="mt-1 text-xs text-muted-foreground">Completed October 2025</p>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </Field>
            </div>
        </div>
    )
}