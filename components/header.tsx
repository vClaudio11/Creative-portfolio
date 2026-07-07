'use client'
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"
import Link from "next/link"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "./ui/alert-dialog"

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
                className="w-full px-4 pt-8 md:py-6 xl:pb-8 border-b-2 z-30 bg-accent h-14 md:h-12 lg:h-8"
            >
                <div className="max-w-4xl w-full mx-auto flex flex-row items-center justify-between">
                    <nav className="flex flex-row text-sm justify-evenly gap-2 w-full pointer-events-auto">
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <p className="hover:underline uppercase xl:text-lg">About me</p>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader className="text-lg about-header">About me</AlertDialogHeader>
                                <AlertDialogDescription>
                                    <span className="block text-left w-full mb-3 about-content">Born in the Philippines, but grew up and was raised in the middle east. I spent 16 years of my life in Qatar studying in a small city called Mesaieed before moving back to the Philippines temporarily. I finished my Foundation In Engineering course in Kuala Lumpur Malaysia, before coming back once more to the Philippines. Currently I am set to enroll in Auckland, New Zealand for my Electronics Engineering degree this July</span>
                                    <span className="block about-content">I started filming my life and all sorts of content since January 2025 during my stay in Malaysia. Now, with nearly 8,000+ followers across my social media accounts and 3 international brand collaborations, I continue to pursue cinematic videography whilst also currating my life.</span>
                                </AlertDialogDescription>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className='about-button'>Got it!</AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <Link href="#myWork" className="hover:underline xl:text-lg uppercase">My work</Link>
                        <Link href="#gallery" className="hover:underline xl:text-lg uppercase">Gallery</Link>
                        <Link href="#contacts" className="hover:underline xl:text-lg uppercase">Contact me</Link>
                    </nav>
                </div>
            </motion.div>
        </div>
    )
}