import Image from "next/image"

export default function Gallery() {
    return(
        <div className="grid grid-cols-2 gap-4 min-h-screen w-full px-4">
            <Image 
                width={600}
                height={338}
                alt="finger pointing at map"
                src='/photos/gallery/1.jpg'
            />
            <Image 
                width={600}
                height={338}
                alt="finger pointing at map"
                src='/photos/gallery/2.jpg'
                className=""
            />
        </div>
    )
}