'use client'

import Image from "next/image"
import { Badge } from "./ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function Work(){
    return(
        <div className="min-h-screen flex flex-col">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="inset-0 z-30 aspect-video">
                    <Image 
                        width={600}
                        height={338}
                        src='/photos/telesin-1.jpg'
                        alt="Brand work thumbnail"
                        className="relative z-20 aspect-video w-full object-cover"
                    />
                </div>
                <CardHeader>
                    <CardAction>
                        <Badge variant='secondary'>September 2025</Badge>
                    </CardAction>
                    <CardTitle>TELESIN</CardTitle>
                    <CardDescription>master grip collaboration</CardDescription>
                </CardHeader>
                <CardContent>My first ever brand deal / collaboration, with full control over the pitch, pre-production, shooting and editing. Using the TELESIN master grip and the help of a friend, I filmed this collaboration video in the center of Kuala Lumpur Malaysia. The video now has over 20k views on TikTok and growing. The deal was an exchange of gear for content deliverables which included 1x video and an assisting story promotion.</CardContent>
            </Card>
            <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="inset-0 z-30 aspect-video">
                    <Image 
                        width={600}
                        height={338}
                        src='/photos/telesin-2.jpg' 
                        alt="Brand work thumbnail"
                        className="relative z-20 aspect-video w-full object-cover"
                    />
                </div>
                <CardHeader>
                    <CardAction>
                        <Badge variant='secondary'>March 2026</Badge>
                    </CardAction>
                    <CardTitle>TELESIN</CardTitle>
                    <CardDescription>fog machine collaboration</CardDescription>
                </CardHeader>
                <CardContent>Another collaboration deal with TELESIN with the same full control over the entire project. I pitched the video idea to them and independantly filmed and edited the whole shoot within my room, using the Fog machine itself to create that cinematic grain built into the footage.</CardContent>
            </Card>
            <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="inset-0 z-30 aspect-video">
                    <Image 
                        width={600}
                        height={338}
                        src='/photos/sandmarc-1.jpg' 
                        alt="Brand work thumbnail"
                        className="relative z-20 aspect-video w-full object-cover"
                    />
                </div>
                <CardHeader>
                    <CardAction>
                        <Badge variant='secondary'>October 2025</Badge>
                    </CardAction>
                    <CardTitle>SANDMARC</CardTitle>
                    <CardDescription>Hybrid mount collaboration</CardDescription>
                </CardHeader>
                <CardContent>A SANDMARC collaboration featuring the hybrid mount seen on the thumbnail along with SANDMARCs Creator grip fit for iPhone cinematography. The collaboration deal also required 1x video covering the product along a story post deliverable, where I also had full control over the videos content and editing.</CardContent>
            </Card>
        </div>
    )
}