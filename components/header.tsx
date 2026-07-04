'use client'
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

export default function Header(){
    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (current) => {
        const prev = scrollY.getPrevious() ?? 0
        if (current > prev && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return(
        <div className="fixed h-80 w-full">
            <motion.div
                animate={{
                    y: hidden ? -140 : 0,
                    opacity: hidden ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full px-4 pt-10 border-b-2  z-30"
            >
                <div className="flex flex-row items-center">
                    <nav className="flex flex-row text-sm justify-evenly gap-2 w-full">
                        <a href="About me">About me</a>
                        <a href="My work">My work</a>
                        <a href="Gallery">Gallery</a>
                        <a href="Contacts">Contacts</a>
                    </nav>
                </div>
            </motion.div>
        </div>
    )
}