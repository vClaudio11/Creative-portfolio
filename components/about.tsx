'use client'

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
    const aboutRef = useRef(null)
    const containerRef = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 45,
        restDelta: 0.001
    })

    const yAbout = useTransform(smoothProgress, [0, 1], [20, -20])
    const y1 = useTransform(smoothProgress, [0, 1], [100, -100])
    const y2 = useTransform(smoothProgress, [0, 1], [60, -60])
    const y3 = useTransform(smoothProgress, [0, 1], [-60, 60])
    const y4 = useTransform(smoothProgress, [0, 1], [80, -80])
    const y5 = useTransform(smoothProgress, [0, 1], [100, -100])
    const y6 = useTransform(smoothProgress, [0, 1], [90, -90])
    const y7 = useTransform(smoothProgress, [0, 1], [-90, 90])
    const y8 = useTransform(smoothProgress, [0, 1], [100, -100])
    
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <motion.div
                ref={aboutRef}
                style={{
                    y: yAbout
                }}
                className="relative flex flex-col items-center justify-center w-full h-full max-w-4xl"
            >   
            <div className="z-10 md:w-60">
                <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold uppercase pt-16">About me</p>
                <p className="text-center text-xs px-28 md:text-xs md:px-0">Born in the Philippines, but raised in the Middle East (Qatar), I grew up in the same city for 17 years before coming back home to Philippines. Shortly after that I completed my foundation couse in Malaysia Kuala Lumpur where I first picked up a camera.</p>
                <p className="text-center text-xs px-28 md:text-xs md:px-0 mt-2">More than a year later I have now made over 60 videos, each experimenting different techniques and applying compounding knowledge to get to where I am now. I now heavily focus on cinematic shot taking, with attention to video sound design and pacing.</p>
            </div>
                <div ref={containerRef} className="absolute inset-0 w-full pointer-events-none">
                    <motion.div
                        ref={ref1} 
                        style={{
                            y: y1
                        }}
                        className='absolute top-[15%] left-[9%] md:top-[10%] md:left-[14%] object-cover -z-10 w-30 md:w-60 drop-shadow-xl/25' 
                    >
                        <Image
                            width={600}
                            height={338}
                            src='/photos/about/3.jpg' 
                            alt='picture people running'
                        />
                    </motion.div>
                    <motion.div
                        ref={ref2} 
                        style={{
                            y: y2
                        }}
                        className='absolute top-[88%] left-[6%] md:top-[78%] md:left-[12%] object-cover -z-10 w-40 md:w-50 drop-shadow-xl/25' 
                    >
                        <Image 
                            ref={ref2}
                            width={600}
                            height={338}
                            src='/photos/about/2.jpg' 
                            alt='picture someone writing'
                        />
                    </motion.div>
                    <motion.div
                        ref={ref3} 
                        style={{
                            y: y3
                        }}
                        className='absolute top-[10%] right-[9%] md:top-[10%] md:right-[12%] object-cover -z-10 w-35 md:w-55 drop-shadow-xl/25' 
                    >
                        <Image
                            width={600}
                            height={338}
                            src='/photos/about/1.jpg' 
                            alt='picture of finger on map'
                        />
                    </motion.div>
                    <motion.div
                        ref={ref4} 
                        style={{
                            y: y4
                        }}
                        className='absolute top-[86%] right-[6%] md:top-[80%] md:right-[8%] object-cover -z-10 w-40 md:w-65 shadow-2xl ' 
                    >
                        <Image
                            width={600}
                            height={338}
                            src='/photos/about/5.jpg' 
                            alt='picture the middle of a street'
                        />
                    </motion.div>
                    <motion.div
                        ref={ref5} 
                        style={{
                            y: y5
                        }}
                        className='absolute top-[62%] left-[4%] md:top-[56%] md:right-[5%] object-cover -z-10 w-25 md:w-40 drop-shadow-xl/25' 
                    >
                        <Image
                            width={600}
                            height={338}
                            src='/photos/about/9.jpg' 
                            alt='picture someone staring out'
                        />
                    </motion.div>
                    <motion.div
                        ref={ref6} 
                        style={{
                            y: y6
                        }}
                        className='absolute top-[35%] left-[4%] md:top-[34%] md:left-[6%] object-cover -z-10 w-22 md:w-40 drop-shadow-xl/25' 
                    >
                        <Image
                            width={600}
                            height={338}
                            src='/photos/about/6.jpg' 
                            alt='picture of someone putting down a photo'
                        />
                    </motion.div>
                    <motion.div
                        ref={ref7} 
                        style={{
                            y: y7
                        }}
                        className='absolute top-[58%] right-[3%] md:top-[54%] md:right-[4%] object-cover -z-20 w-25 md:w-50 drop-shadow-xl/25' 
                    >
                        <Image
                            width={600}
                            height={338}
                            src='/photos/about/7.jpg' 
                            alt='picture someone walking down a street'
                        />
                    </motion.div>
                    <motion.div
                        ref={ref8} 
                        style={{
                            y: y8
                        }}
                        className='absolute top-[30%] right-[3%] md:top-[34%] md:right-[6%] object-cover -z-20 w-25 md:w-50 drop-shadow-xl/25' 
                    >
                        <Image
                            width={600}
                            height={338}
                            src='/photos/about/4.jpg' 
                            alt='picture someone in front of light rays'
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}