'use client'

import Image from "next/image"
import { Badge } from "./ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import  { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from "react"

export default function Work(){
    const refTitle = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const { scrollYProgress: scrollTitle } = useScroll({
        target: refTitle,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: scroll1 } = useScroll({
        target: ref1,
        offset: ["start end", "end start"]
    })
    
    const { scrollYProgress: scroll2 } = useScroll({
        target: ref2,
        offset: ["start end", "end start"]
    })

    const { scrollYProgress: scroll3 } = useScroll({
        target: ref3,
        offset: ["start end", "end start"]
    })

    const yTitle = useTransform(scrollTitle, [0, 1], [30, -40])
    const y1 = useTransform(scroll1, [0, 1], [40, -40])
    const y2 = useTransform(scroll2, [0, 1], [40, -40])
    const y3 = useTransform(scroll3, [0, 1], [40, -40])

    return(
        <div className="relative min-h-[170vh] md:min-h-[150vh] lg:min-h-[160vh]">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: "url('/photos/work-bg.jpg')",
                    filter: "blur(5px) brightness(0.6)",
                    transform: "scaleX(1.05)"  // ← prevents blur edges showing white
                }}
            >
            </div>
            <motion.div
                ref={refTitle}
                style={{
                    y: yTitle
                }}
            >
                <p className="text-center text-4xl font-semibold uppercase pt-16 text-white">My work</p>
            </motion.div>
            <motion.div
                ref={ref1}
                className="flex md:absolute md:top-[12%] md:left-[5%] lg:left-[8%] lg:scale-[1.2]"
                style={{ transformOrigin: "center center", 
                        y: y1
                }}
                initial={{ scale: 0.95, opacity: 0.4, filter: "brightness(0.4)" }}
                whileInView={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
                viewport={{ amount: "some", once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Card className="mx-auto w-[320px] md:w-[320px] lg:w-[500px] max-w-sm pt-0">
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
                        <CardDescription>master grip collaboration</CardDescription>
                    </CardHeader>
                    <CardContent>My first ever brand deal / collaboration with full control over the pitch, pre-production, shooting and editing. Using the TELESIN master grip and the help of a friend, I filmed this collaboration video in the center of Kuala Lumpur Malaysia. The video now has over 20k views on TikTok and growing. The deal was an exchange of gear for content deliverables which included 1x video and an assisting story promotion.</CardContent>
                </Card>
            </motion.div>
            <motion.div
            ref={ref2}
            className="flex md:absolute md:top-[42%] md:right-[5%] lg:right-[8%] lg:scale-[1.2]"
                style={{ transformOrigin: "center center", 
                        y: y2
                }}
                initial={{ scale: 0.95, opacity: 0.4, filter: "brightness(0.4)" }}
                whileInView={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
                viewport={{ amount: "some", once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >    
                <Card className="mx-auto w-[320px] md:w-[320px] lg:w-[500px] max-w-sm pt-0">
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
                        <CardDescription>fog machine collaboration</CardDescription>
                    </CardHeader>
                    <CardContent>Another collaboration deal with TELESIN with the same control over the entire project. I pitched the video idea to them, independantly filmed and edited the whole shoot within my room, using the Fog machine itself to create that cinematic grain built into the footage.</CardContent>
                </Card>
            </motion.div>
            <motion.div
                ref={ref3}
                className="flex md:absolute md:top-[62%] md:left-[5%] lg:left-[8%] lg:scale-[1.2]"
                style={{ transformOrigin: "center center", 
                        y: y3
                }}
                initial={{ scale: 0.95, opacity: 0.4, filter: "brightness(0.4)" }}
                whileInView={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
                viewport={{ amount: "some", once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >    
                <Card className="mx-auto w-[320px] md:w-[320px] lg:w-[500px] max-w-sm pt-0">
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
                    <CardContent>A SANDMARC collaboration featuring the hybrid mount seen on the thumbnail along with SANDMARCs Creator grip fit for iPhone cinematography. The collaboration deal also required 1x video covering the product along a story post deliverable, where I also had full control over the videos content and editing.</CardContent>
                </Card>
            </motion.div>
        </div>
    )
}