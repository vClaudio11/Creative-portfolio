'use client'

import { CircleArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from "react"
import { Field } from "./ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Button } from "./ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

const videoArray = [ {video: "/videos/hero/telesin-1.mov", footer: "Kuala Lumpur | September 2025", header: "TELESIN Brand collaboration"}, 
                    {video: "/videos/hero/telesin-2.mov", footer: "PHILIPPINES | March 2026", header: "TELESIN Brand collaboration"},
                    {video: "/videos/hero/personal-1.mov", footer: "PHILIPPINES | February 2026", header: "PERSONAL STORY"},
                    {video: "/videos/hero/sandmarc-1.mov", footer: "PHILIPPINES | October 2025", header: "SANDMARC Brand collaboration"}
]

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0)
    const throttle = useRef(false)
    const carouselRef = useRef<HTMLDivElement>(null)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
    const heroRef = useRef(null)

    const { scrollYProgress: scrollHero } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    })

    const yHero = useTransform(scrollHero, [0, 1], [20, -20])

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
        return () => {
            el.removeEventListener('wheel', onWheel);
        };
    }, [])
    
    useEffect(() => {

        const videoInterval = setInterval(() => {
            setActiveIndex(prev => {
                const newIndex = prev + 1
                return (newIndex + videoArray.length) % videoArray.length
            })
        }, 4000)

        return () => clearInterval(videoInterval)
    }, [])

    // if on mobile then use arrows to navigate
    function handleLeft() {
        if (throttle.current === true) {
            return 
        } else {
            setActiveIndex(prev => {
                const newIndex = prev - 1
                return (newIndex + videoArray.length) % videoArray.length
            })
            throttle.current = true
            setTimeout(() => {throttle.current = false}, 500)
        }
    }

    function handleRight() {
        if (throttle.current === true) {
            return 
        } else {
            setActiveIndex(prev => {
                const newIndex = prev + 1
                return (newIndex + videoArray.length) % videoArray.length
            })
            throttle.current = true
            setTimeout(() => {throttle.current = false}, 500)
        }
    }

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return
            const distance = getCircularDistance(index, activeIndex, videoArray.length)
            if (Math.abs(distance) !== 2) {
                video.play()
            } else {
                video.pause()
            }
        })
    }, [activeIndex])

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
        <div id='hero' className="relative h-screen flex flex-col hero-wrapper mt-8">
            <motion.div
                ref={heroRef}
                style={{
                    y: yHero
                }}
            >
                <div className="flex flex-col flex-1 justify-center items-center w-full h-screen">
                    <div>
                        <h1 className="text-center text-4xl md:text-5xl lg:text-5xl uppercase font-bold">Von Claudio</h1>
                        <p className='text-center text-[0.8rem] px-14 md:text-sm md:px-30 lg:text-[0.9rem] lg:px-60'>Based in the Philippines | Experienced in creative-directing, cinematic shooting & Davinci resolve editing </p>
                    </div>
                    <Field className="justify-center items-center px-8">   
                        <div 
                            ref={carouselRef}
                            className="flex carousel-wrapper"
                            style={{
                                perspective: "1000px",
                                position: 'relative',
                            }}
                        >
                            {videoArray.map((video, index) => {
                                const distance = getCircularDistance(index, activeIndex, videoArray.length)
                                return (
                                    <div 
                                        key={index}
                                        style={{
                                            transform: `translate(-50%, -50%) translateX(${Math.abs(distance) === 2 ? 0 : distance * 160}px) scale(${Math.abs(distance) === 0 ? 1.3 : 1 - (Math.abs(distance) / videoArray.length) + 0.15})`,
                                            opacity: `${Math.abs(distance) === 0 ? 1 : 1 - (Math.abs(distance) * 0.4)}`,
                                            zIndex: 10 - Math.abs(distance),
                                            transition: 'all 0.6s ease-in-out',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%'
                                        }}
                                    >
                                        <div>
                                            <p className="text-center text-xs/snug md:text-xs/snug lg:text-sm/snug mb-1 uppercase">{video.header}</p>
                                            <video
                                                ref={el => { videoRefs.current[index] = el}} 
                                                className="max-w-none carousel-video rounded-md"
                                                src={video.video}
                                                muted
                                                loop
                                                playsInline
                                            >
                                            </video>
                                            <p className="text-center text-xs/snug md:text-xs/snug lg:text-sm/snug mt-1 uppercase">{video.footer}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>              
                    </Field>

                    {/* Render only on mobile screens */}
                    <Button 
                        onClick={handleLeft}
                        className="hero-button absolute top-[50%] left-[12%] z-10 text-white scale-[2] -rotate-180" 
                        variant="link" 
                        size="icon-lg">
                        <CircleArrowRight />
                    </Button>
                    <Button
                        onClick={handleRight} 
                        className="hero-button absolute top-[50%] right-[12%] z-10 text-white scale-[2]" 
                        variant="link" 
                        size="icon-lg">
                        <CircleArrowRight />
                    </Button>

                    <Field>
                        <p className="text-center text-xl md:text-2xl lg:text-3xl uppercase font-bold">Worked with</p>
                        <div className="flex flex-row justify-center items-center">
                            <HoverCard>
                                <HoverCardTrigger delay={10} closeDelay={100}>
                                    <Button variant='link' className="text-center -mt-2">TELESIN</Button>
                                </HoverCardTrigger>
                                <HoverCardContent side="left">
                                    <span>
                                        <img 
                                            className='lg:w-full'
                                            src='/photos/telesin-logo.jpeg'
                                            alt='telesin logo'
                                        />
                                    </span>
                                    <p className="font-semibold">Collaboration with deliverables</p>
                                    <p>Full-control over planning, pre-production, shooting and editing with deliverables</p>
                                    <p className="mt-1 text-xs text-muted-foreground">Completed September 2025 & March 2026</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Button variant='link' className="text-center -mt-2">SANDMARC</Button>
                                </HoverCardTrigger>
                                <HoverCardContent side="bottom">
                                    <p className="font-semibold">Collaboration with deliverables</p>
                                    <p>Full-control over planning, pre-production, shooting and editing with deliverables</p>
                                    <p className="mt-1 text-xs text-muted-foreground">Completed October 2025</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </Field>
                </div>
            </motion.div>
        </div>
    )
}