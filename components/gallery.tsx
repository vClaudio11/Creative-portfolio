import Image from "next/image"

export default function Gallery() {
    return(
        <div className="min-h-screen w-full p-4 md:p-8 lg:p-12">
            <p className="text-center text-4xl mb-2 md:mb-4 uppercase font-bold">shot gallery</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
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
                    src='/photos/gallery/2new.jpg'
                    className=""
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/3.jpg'
                    className=""
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/4.jpg'
                    className=""
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
                    className=""
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/8.jpg'
                    className=""
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/9.jpg'
                    className=""
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
                    className=""
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/12.jpg'
                    className=""
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/5.jpg'
                    className=""
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
                    className=""
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/15.jpg'
                    className=""
                />
                <Image 
                    width={600}
                    height={338}
                    alt="finger pointing at map"
                    src='/photos/gallery/16.jpg'
                    className=""
                />
            </div>
            </div>
    )
}