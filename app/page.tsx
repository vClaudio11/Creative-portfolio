'use client'

import About from "@/components/about"
import Contact from "@/components/contact"
import Gallery from "@/components/gallery"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Work from "@/components/work"

export default function Home() {
  
  return(
    <div>
      <Header />
      <Hero />
      <Work />
      <Gallery />
      {/* <About /> */}
      <Contact />
    </div>
  )
}