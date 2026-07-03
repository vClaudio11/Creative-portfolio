'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
    const aboutRef = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)

    const { scrollYProgress: scrollAbout} = useScroll({
        target: aboutRef,
        offset: ["start end", "end start"]
    })

    const yAbout = useTransform(scrollAbout, [0, 1], [20, -20])
    
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
                <p className="text-center text-4xl font-semibold uppercase pt-16">About me</p>
                <p className="text-center md:text-xs">Born in the Philippines, but raised in the Middle East (Qatar), I grew up in the same city for 17 years before coming back home to Philippines. Shortly after that I completed my foundation couse in Malaysia Kuala Lumpur where I first picked up a camera.</p>
                <p className="text-center md:text-xs mt-2">More than a year later I have now made over 60 videos, each experimenting different techniques and applying compounding knowledge to get to where I am now. I now heavily focus on cinematic shot taking, with attention to video sound design and pacing.</p>
            </div>
                <div className="absolute inset-0 w-full pointer-events-none">
                    <Image
                        ref={ref1} 
                        width={600}
                        height={338}
                        className='absolute top-[5%] left-[9%] object-cover -z-10 md:w-70 ' 
                        src='/photos/about/3.jpg' 
                        alt='picture people running'
                    />
                    <Image 
                        ref={ref2}
                        width={600}
                        height={338}
                        className='absolute top-[73%] left-[12%] object-cover -z-10 md:w-55 ' 
                        src='/photos/about/2.jpg' 
                        alt='picture someone writing'
                    />
                    <Image
                        ref={ref3} 
                        width={600}
                        height={338}
                        className='absolute top-[10%] right-[10%] object-cover -z-10 md:w-60 ' 
                        src='/photos/about/1.jpg' 
                        alt='picture of finger on map'
                    />
                    <Image
                        ref={ref4} 
                        width={600}
                        height={338}
                        className='absolute top-[77%] right-[8%] object-cover -z-10 md:w-65 ' 
                        src='/photos/about/5.jpg' 
                        alt='picture the middle of a street'
                    />
                    <Image
                        ref={ref5} 
                        width={600}
                        height={338}
                        className='absolute top-[54%] right-[5%] object-cover -z-10 md:w-45 ' 
                        src='/photos/about/9.jpg' 
                        alt='picture someone staring out'
                    />
                    <Image
                        ref={ref6} 
                        width={600}
                        height={338}
                        className='absolute top-[30%] left-[5%] object-cover -z-10 md:w-50 ' 
                        src='/photos/about/6.jpg' 
                        alt='picture of someone putting down a photo'
                    />
                    <Image
                        ref={ref7} 
                        width={600}
                        height={338}
                        className='absolute top-[54%] left-[7%] object-cover -z-10 md:w-45 ' 
                        src='/photos/about/7.jpg' 
                        alt='picture someone walking down a street'
                    />
                    <Image
                        ref={ref8} 
                        width={600}
                        height={338}
                        className='absolute top-[32%] right-[6%] object-cover -z-10 md:w-50 ' 
                        src='/photos/about/4.jpg' 
                        alt='picture someone in front of light rays'
                    />
                </div>
            </motion.div>
        </div>
    )
}