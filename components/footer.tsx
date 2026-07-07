'use client'

import Link from "next/link"

export default function Footer() {
    return(
        <div className="left-0 bottom-0 w-full h-16 bg-accent">
            <div className="flex flex-row w-full h-full justify-between items-center px-8 md:px-12">
                <p className="text-secondary-foreground">Von Claudio</p>
                <nav>
                    <Link href="#hero" className="hover:underline">Home</Link>
                </nav>
            </div>
        </div>
    ) 
}