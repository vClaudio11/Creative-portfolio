import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function Gallery() {
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


    const yContainer = useTransform(smoothProgress, [0, 1], [40, -40])
    return(
        <motion.div 
            id="gallery"
            ref={containerRef}
            className="min-h-fit w-full p-4 md:p-8 lg:px-12"
            style={{ transformOrigin: "center center", 
                    y: yContainer
            }}
            initial={{ scale: 0.95, opacity: 0.45, filter: "brightness(0.4)" }}
            whileInView={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
            viewport={{ amount: "some", once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <p className="text-center text-4xl mb-2 md:mb-4 uppercase font-bold">shot gallery</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
                <motion.div
                    initial='initial'
                    animate={{ opacity: 1, x:0 }}
                    transition={{ 
                        x: {type: 'spring', stiffness: 300, damping: 40},
                        opacity: { duration: 0.6, ease: 'easeOut'}
                    }}
                >
                    <Image 
                        width={600}
                        height={338}
                        alt="finger pointing at map"
                        src='/photos/gallery/1.jpg'
                    />
                </motion.div>
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/2new.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/3.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/4.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/6.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/7.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/8.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/9.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/10.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/11.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/12.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/5.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/13.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/14.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/15.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/16.jpg'
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/17.jpg'
                    className="gallery-image"
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/18.jpg'
                    className="gallery-image"
                />
            </div>
            </motion.div>
    )
}