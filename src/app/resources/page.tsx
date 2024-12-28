'use client'

import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Heading from "../Heading"
import Resources from "./Resources"
import Syllabus from "./Syllabus"
import InfoPoints from "./InfoPoints"
import Contribute from "./Contribute"
import YouTubeChannels from "./YoutubeChannels"
import allResources from "./ResourceList"

export default function ResourcesPage() {
    const tabs = ["resources", "syllabus", "youtube", "contribute"]
    const [activeTab, setActiveTab] = useState("resources")

    const prelim: string =
        "Here are some important points to remember about the notes and resource links hosted here: "

    const email = "riserit@proton.me"

    const points: (string | React.ReactNode)[] = [
        "Semester 1 and 2 notes are added with the assumption that Semester 1 corresponds to the Physics Cycle and Semester 2 corresponds to the Chemistry Cycle. If that is not the case, then access the links accordingly.",
        "Years in parentheses are meant to signify the year of compilation of the resources. For instance, the 2022 batch compiled 3rd and 4th semester resources in the academic year that started in 2023 (2023-24). Such a convention was adopted to avoid confusion.",
        "Lab Repositories might need updation in the future with changing curriculum. You are free to send pull requests to update the repositories or otherwise (for other corrections and changes).",
        "The website or its makers aren't liable for any harm or misunderstanding caused by the notes links hosted here. Use them at your own risk. These are crowdsourced notes and resources.",
        <>
            To contribute to these notes, mail us at <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800">
                {email}
            </a> with the links or documents. At the beginning of such mail submissions, mention the year (20XX), semester (1-8) and subject. For instance, &apos;2022 3rd OS&apos; signifies a submission to contribute to the Operating System subject resources for the 3rd semester for the Academic year 2022-23.
        </>,
    ]

    return (
        <div className="min-h-[calc(100vh-4rem-4rem)] w-11/12 max-w-6xl mx-auto py-8">
            <div className="md:hidden mb-4">
                <Select onValueChange={setActiveTab} defaultValue={activeTab}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Tab" />
                    </SelectTrigger>
                    <SelectContent>
                        {tabs.map((tab) => (
                            <SelectItem key={tab} value={tab}>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="hidden md:grid md:grid-cols-4 mb-4">
                {tabs.map((tab) => (
                    <TabsTrigger 
                        key={tab} 
                        value={tab}
                        className="px-3 py-1 text-sm text-center mx-1"
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                ))}
            </TabsList>

                <TabsContent value="resources">
                    <InfoPoints prelim={prelim} points={points} />
                    <Separator className="my-8" />
                    <Resources resources={allResources}/>
                </TabsContent>

                <TabsContent value="syllabus">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-20 m-auto gap-5">
                        <Syllabus year="1st" pdfPath="/pdfs/syllabus/firstyear.pdf" />
                        <Syllabus year="2nd" pdfPath="/pdfs/syllabus/secondyear.pdf" />
                        <Syllabus year="3rd" pdfPath="/pdfs/syllabus/thirdyear.pdf" />
                        <Syllabus year="4th" pdfPath="/pdfs/syllabus/fourthyear.pdf" />
                    </div>
                </TabsContent>

                <TabsContent value="youtube">
                    <Heading heading="Recommended YouTube Channels" />
                    <YouTubeChannels />
                </TabsContent>

                <TabsContent value="contribute">
                    <Contribute />
                </TabsContent>
            </Tabs>
        </div>
    )
}