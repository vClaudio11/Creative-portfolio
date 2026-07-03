'use client'

import About from "@/components/about"
import Contact from "@/components/contact"
import Hero from "@/components/hero"
import Work from "@/components/work"

export default function Home() {
  
  return(
    <div>
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  )
}