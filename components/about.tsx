'use client'

export default function About() {
    
    return(
        <div className="flex flex-col justify-center items-center h-[50vh] border-b-2">
            <div className="px-8 md:px-16 lg:px-30">
                <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold uppercase mb-2 lg:mb-4">About me</p>
                <p className="text-center text-xs md:text-sm lg:text-[1.1rem]">Born in the Philippines, but raised in the Middle East (Qatar), I grew up in the same city for 17 years before coming back home to Philippines. Shortly after that I completed my foundation couse in Malaysia Kuala Lumpur where I first picked up a camera.</p>
                <p className="text-center text-xs md:text-sm lg:text-[1.1rem] mt-2 lg:mt-4">More than a year later I have now made over 60 videos, each experimenting different techniques and applying compounding knowledge to get to where I am now. I now heavily focus on cinematic shot taking, with attention to video sound design and pacing.</p>
            </div>
        </div>
    )
}