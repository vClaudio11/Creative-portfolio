'use client'
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

export default function Header(){
    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (current) => {
        const prev = scrollY.getPrevious() ?? 0
        if (current > prev && current > 80) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return(
        <div className="fixed top-0 left-0 w-full z-30">
            <motion.div
                animate={{
                    y: hidden ? "-100%" : "0%",
                    opacity: hidden ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full px-4 pt-8 md:py-6 border-b-2 z-30 bg-accent h-14 md:h-12 lg:h-8"
            >
                <div className="max-w-4xl w-full mx-auto flex flex-row items-center justify-between">
                    <nav className="flex flex-row text-sm justify-evenly gap-2 w-full pointer-events-auto">
                        <a href="#about" className="hover:underline">About me</a>
                        <a href="#myWork" className="hover:underline">My work</a>
                        <a href="#gallery" className="hover:underline">Gallery</a>
                        <a href="#contacts" className="hover:underline">Contacts</a>
                    </nav>
                </div>
            </motion.div>
        </div>
    )
}