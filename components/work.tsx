'use client'

import Image from "next/image"
import { Badge } from "./ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import  { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { CircleArrowRight } from "lucide-react"

const slideVariant = {
    initial: (direction: directionType) => ({
        x: direction === 'right' ? 20 : -20,
        opacity: 0.4,
    })
}

type directionType = 'left' | 'right'

export default function Work(){
    const containerRef = useRef(null)
    const [activeCard, setActiveCard] = useState(1)
    const throttle = useRef(false)
    const [direction, setDirection] = useState<directionType>('left')
    const cardRef = useRef<HTMLDivElement>(null)
    const [cardHeight, setCardHeight] = useState(0)

    useEffect(() => {
        if (cardRef.current) {
            setCardHeight(cardRef.current.offsetHeight)
        }
    }, [activeCard])


    const { scrollYProgress: scrollContainer } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const smoothProgress = useSpring(scrollContainer, {
        stiffness: 100, 
        damping: 40,    
        restDelta: 0.001  
    })


    const yContainer = useTransform(smoothProgress, [0, 1], [20, -20])

    function handleLeft(){
        if (throttle.current === true) {
            return
        } else {
            setDirection('left')
            if (activeCard === 1) {
                setActiveCard(3)
                throttle.current = true
                setTimeout(() => {throttle.current = false}, 500)
            } else {
                setActiveCard(prev => prev - 1)
                throttle.current = true
                setTimeout(() => {throttle.current = false}, 500)
            }
        }
    }

    function handleRight(){
        if (throttle.current === true) {
            return
        } else {
            setDirection('right')
            if (activeCard === 3) {
                setActiveCard(1)
                throttle.current = true
                    setTimeout(() => {throttle.current = false}, 500)
            } else {
                setActiveCard(prev => prev + 1)
                throttle.current = true
                    setTimeout(() => {throttle.current = false}, 500)
            }
        }
    }

    return(
        <div id='myWork' className="relative min-h-fit md:min-h-fit lg:min-h-fit">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: "url('/photos/work-bg.jpg')",
                    filter: "blur(5px) brightness(0.6)",
                    transform: "scaleX(1.05)"  // ← prevents blur edges showing white
                }}
            >
            </div>

            {/* Only show on sm and md breakpoints */}
            <Button 
                onClick={handleLeft}
                className="absolute top-[50%] left-[2%] text-white scale-[2] -rotate-180 shrink-0 z-40 p-2 hover:opacity-80 transition-opacity lg:hidden" 
                variant="link" 
                size="icon-lg">
                <CircleArrowRight />
            </Button>
            <Button
                onClick={handleRight} 
                className="absolute top-[50%] right-[2%] text-white scale-[2] shrink-0 z-40 p-2 hover:opacity-80 transition-opacity lg:hidden" 
                variant="link" 
                size="icon-lg">
                <CircleArrowRight />
            </Button>
    
            <motion.div
                ref={containerRef}
                className="relative flex w-full h-fit"
                style={{ transformOrigin: "center center", 
                        y: yContainer
                }}
                initial={{ scale: 0.95, opacity: 0.45, filter: "brightness(0.4)" }}
                whileInView={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
                viewport={{ amount: "some", once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex flex-col items-center justify-center w-full py-8 md:px-8">
                    <p className="text-center text-4xl font-semibold uppercase text-white">My work</p>
                    <p className="text-center text-sm px-8 md:text-sm lg:text-lg text-white">Video creative delving into cinematography and storytelling</p>
                    <div className="lg:hidden">
                        {/* Card 1 */}
                        {activeCard === 1 && (
                            <motion.div
                                custom={direction} 
                                variants={slideVariant}
                                initial='initial'
                                animate={{ opacity: 1, x:0 }}
                                transition={{ 
                                    x: {type: 'spring', stiffness: 300, damping: 40},
                                    opacity: { duration: 0.6, ease: 'easeOut'}
                                }}
                                className="flex flex-row justify-center gap-4 md:w-full mt-4"
                            >   
                            <div ref={cardRef}>
                                <Card className="mx-auto w-[280px] md:w-[420px] max-w-sm pt-0">
                                    <div className="inset-0 z-30 aspect-video">
                                        <Image 
                                            width={600}
                                            height={338}
                                            src='/photos/telesin-1.jpg'
                                            alt="Brand work thumbnail"
                                            className="relative z-20 aspect-video w-full object-cover"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardAction>
                                            <Badge variant='secondary'>September 2025</Badge>
                                        </CardAction>
                                        <CardTitle>TELESIN</CardTitle>
                                        <CardDescription>Master grip collaboration</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm max-h-48 overflow-y-scroll scrollbar-thin md:max-h-60 md:text-sm md:scrollbar-none md:border-none">My first ever brand deal with full control over the pitch, pre-production, shooting and editing. Using the TELESIN master grip and the help of a friend, I filmed this collaboration video in the center of Kuala Lumpur Malaysia. The video now has over 20k views on TikTok and growing. The deal was an exchange of gear for content deliverables which included 1x video and an assisting story promotion.</CardContent>
                                </Card>
                            </div>
                            </motion.div>
                        )}

                        {/* Card 2 */}
                        {activeCard === 2 && (
                            <motion.div
                                className="flex flex-row justify-center gap-4 md:w-full mt-4"    
                                custom={direction} 
                                variants={slideVariant}
                                initial='initial'
                                animate={{ opacity: 1, x:0 }}
                                transition={{ 
                                    x: {type: 'spring', stiffness: 300, damping: 40},
                                    opacity: { duration: 0.6, ease: 'easeOut'}
                                }}
                            >
                                <Card className="mx-auto w-[280px] md:w-[420px] max-w-sm pt-0">
                                    <div className="inset-0 z-30 aspect-video">
                                        <Image 
                                            width={600}
                                            height={338}
                                            src='/photos/telesin-2.jpg' 
                                            alt="Brand work thumbnail"
                                            className="relative z-20 aspect-video w-full object-cover"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardAction>
                                            <Badge variant='secondary'>March 2026</Badge>
                                        </CardAction>
                                        <CardTitle>TELESIN</CardTitle>
                                        <CardDescription>Fog machine collaboration</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm max-h-48 overflow-y-scroll scrollbar-thin md:max-h-60 md:text-sm md:scrollbar-none md:border-none">Another collaboration deal with TELESIN with the same control over the entire project. I pitched the video idea to them, independantly filmed and edited the whole shoot within my room, using the Fog machine itself to create that cinematic grain built into the footage. The collaboration deal was the fog machine in exchange for 1x video deliverable within a month of receiving the product.</CardContent>
                                </Card>
                            </motion.div>
                        )}

                        {/* Card 3 */}
                        {activeCard === 3 && (
                            <motion.div
                                custom={direction} 
                                variants={slideVariant}
                                initial='initial'
                                animate={{ opacity: 1, x:0 }}
                                transition={{ 
                                    x: {type: 'spring', stiffness: 300, damping: 40},
                                    opacity: { duration: 0.6, ease: 'easeOut'}
                                }}
                                className="flex flex-row justify-center gap-4 md:w-full mt-4"
                            >    
                                <Card className="mx-auto w-[280px] md:w-[420px] max-w-sm pt-0">
                                    <div className="inset-0 z-30 aspect-video">
                                        <Image 
                                            width={600}
                                            height={338}
                                            src='/photos/sandmarc-1.jpg' 
                                            alt="Brand work thumbnail"
                                            className="relative z-20 aspect-video w-full object-cover"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardAction>
                                            <Badge variant='secondary'>October 2025</Badge>
                                        </CardAction>
                                        <CardTitle>SANDMARC</CardTitle>
                                        <CardDescription>Hybrid mount collaboration</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm max-h-48 overflow-y-scroll scrollbar-thin md:max-h-60 md:text-sm md:scrollbar-none md:border-none">A SANDMARC collaboration featuring the hybrid mount seen on the thumbnail along with SANDMARCs Creator grip fit for iPhone cinematography. The company reached out to me and asked for a collaboration. The collaboration deal also required 1x video covering the product along a story post deliverable, where I also had full control over the videos content and editing.</CardContent>
                                </Card>
                            </motion.div>
                        )}
                    </div>

                    {/* lg viewports only */}
                    <div className="hidden md:hidden lg:flex lg:flex-row lg:justify-center lg:gap-8 xl:gap-10 lg:max-w-[1600px]">
                        <motion.div
                            custom={direction} 
                            variants={slideVariant}
                            initial='initial'
                            animate={{ opacity: 1, x:0 }}
                            transition={{ 
                                x: {type: 'spring', stiffness: 300, damping: 40},
                                opacity: { duration: 0.6, ease: 'easeOut'}
                            }}
                            className="flex flex-row justify-center gap-4 md:w-full mt-4"
                        >   
                        <div ref={cardRef}>
                            <Card className="mx-auto w-[280px] md:w-[420px] lg:w-full lg:h-full max-w-sm pt-0">
                                <div className="inset-0 z-30 aspect-video">
                                    <Image 
                                        width={600}
                                        height={338}
                                        src='/photos/telesin-1.jpg'
                                        alt="Brand work thumbnail"
                                        className="relative z-20 aspect-video w-full object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardAction>
                                        <Badge variant='secondary'>September 2025</Badge>
                                    </CardAction>
                                    <CardTitle>TELESIN</CardTitle>
                                    <CardDescription>Master grip collaboration</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm max-h-48 overflow-y-scroll scrollbar-thin md:max-h-60 md:text-sm md:scrollbar-none md:border-none lg:text-lg lg:max-h-90">My first ever brand deal with full control over the pitch, pre-production, shooting and editing. Using the TELESIN master grip and the help of a friend, I filmed this collaboration video in the center of Kuala Lumpur Malaysia. The video now has over 20k views on TikTok and growing. The deal was an exchange of gear for content deliverables which included 1x video and an assisting story promotion.</CardContent>
                            </Card>
                        </div>
                        </motion.div>
                        <motion.div
                            className="flex flex-row justify-center gap-4 md:w-full mt-4"    
                            custom={direction} 
                            variants={slideVariant}
                            initial='initial'
                            animate={{ opacity: 1, x:0 }}
                            transition={{ 
                                x: {type: 'spring', stiffness: 300, damping: 40},
                                opacity: { duration: 0.6, ease: 'easeOut'}
                            }}
                        >
                            <Card className="mx-auto w-[280px] md:w-[420px] lg:w-full lg:h-full max-w-sm pt-0">
                                <div className="inset-0 z-30 aspect-video">
                                    <Image 
                                        width={600}
                                        height={338}
                                        src='/photos/telesin-2.jpg' 
                                        alt="Brand work thumbnail"
                                        className="relative z-20 aspect-video w-full object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardAction>
                                        <Badge variant='secondary'>March 2026</Badge>
                                    </CardAction>
                                    <CardTitle>TELESIN</CardTitle>
                                    <CardDescription>Fog machine collaboration</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm max-h-48 overflow-y-scroll scrollbar-thin md:max-h-60 md:text-sm md:scrollbar-none md:border-none lg:text-lg lg:max-h-90">Another collaboration deal with TELESIN with the same control over the entire project. I pitched the video idea to them, independantly filmed and edited the whole shoot within my room, using the Fog machine itself to create that cinematic grain built into the footage. The collaboration deal was the fog machine in exchange for 1x video deliverable within a month of receiving the product.</CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            custom={direction} 
                            variants={slideVariant}
                            initial='initial'
                            animate={{ opacity: 1, x:0 }}
                            transition={{ 
                                x: {type: 'spring', stiffness: 300, damping: 40},
                                opacity: { duration: 0.6, ease: 'easeOut'}
                            }}
                            className="flex flex-row justify-center gap-4 md:w-full mt-4"
                        >    
                            <Card className="mx-auto w-[280px] md:w-[420px] lg:w-full lg:h-full max-w-sm pt-0">
                                <div className="inset-0 z-30 aspect-video">
                                    <Image 
                                        width={600}
                                        height={338}
                                        src='/photos/sandmarc-1.jpg' 
                                        alt="Brand work thumbnail"
                                        className="relative z-20 aspect-video w-full object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardAction>
                                        <Badge variant='secondary'>October 2025</Badge>
                                    </CardAction>
                                    <CardTitle>SANDMARC</CardTitle>
                                    <CardDescription>Hybrid mount collaboration</CardDescription>
                                </CardHeader>
                                <CardContent className="text-sm max-h-48 overflow-y-scroll scrollbar-thin md:max-h-60 md:text-sm md:scrollbar-none md:border-none lg:text-lg lg:max-h-90">A SANDMARC collaboration featuring the hybrid mount seen on the thumbnail along with SANDMARCs Creator grip fit for iPhone cinematography. The company reached out to me and asked for a collaboration. The collaboration deal also required 1x video covering the product along a story post deliverable, where I also had full control over the videos content and editing.</CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}