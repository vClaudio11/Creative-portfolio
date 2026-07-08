'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react"

export default function Contact() {
    const containerRef = useRef(null)

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
    return(
        <div id="contacts" className="h-fit relative flex flex-col justify-center items-center py-12 px-8">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: "url('/photos/gallery/5.jpg')",
                    filter: "blur(5px) brightness(0.6)",
                    transform: "scale(1.05)"  // ← prevents blur edges showing white
                }}
            >
            </div>
            
            <motion.div
                ref={containerRef}
                style={{ transformOrigin: "center center",
                    y: yContainer
                 }}
                initial={{ scale: 0.95, opacity: 0.45, filter: "brightness(0.4)" }}
                whileInView={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
                viewport={{ amount: "some", once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:flex lg:flex-row lg:gap-8"
            >    
                {/* only show image for lg breakpoints */}
                <Image 
                    width={1200}
                    height={675}
                    src='/photos/contact-bg.jpg' 
                    alt="Brand work thumbnail"
                    className="contact-image lg:w-4/5 relative z-20 aspect-video w-full object-cover rounded-xl"
                />
                <Card className="w-full pt-0 lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/5">
                    <div className="xl:hidden inset-0 z-30 aspect-video">
                        <Image 
                            width={600}
                            height={338}
                            src='/photos/contact-bg.jpg' 
                            alt="Brand work thumbnail"
                            className="relative z-20 aspect-video w-full object-cover"
                        />
                    </div>
                    <CardHeader className="w-full">
                        <CardTitle className="text-center text-lg lg:text-2xl">Let&apos;s work</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center lg:text-lg">
                        My socials:
                        <CardDescription className="mt-2 lg:text-sm">vonclaudio.college@gmail.com</CardDescription>
                        <div className="flex flex-row justify-center items-center w-full">
                            <a href="https://www.tiktok.com/@vonclaudio1" target="_blank" rel="noopener noreferrer"> 
                                <Image 
                                    src='/photos/contacts/Tiktok.png' 
                                    alt='Instagram logo' 
                                    width={45}
                                    height={45}
                                    className="hover:cursor-pointer"
                                ></Image>
                            </a>
                            <a href="https://www.instagram.com/vclaudio.films" target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src='/photos/contacts/Instagram.png' 
                                    alt='Instagram logo' 
                                    width={55}
                                    height={55}
                                    className="hover:cursor-pointer"
                                ></Image>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}