import React from "react"
import Resources from "./Resources"
import Heading from "../Heading"
import { Metadata } from "next"
import allResources from "./ResourceList"
import Points from "./Points"

export const metadata: Metadata = {
    title: 'rISE - Resources',
}

export default function ResourcesPage() {
    const prelim: string = "Here are some important points to remember about the notes and resource links hosted here: "
    const points: string[] = [
        "Semester 1 and 2 notes are added with the assumption that Semester 1 corresponds to the Physics Cycle and Semester 2 corresponds to the Chemistry Cycle. If that is not the case, then access the links accordingly.",
        "Years in parantheses are meant to signify the year of compilation of the resources. For instance, the 2022 batch compiled 3rd and 4th semester resources in the academic year that started in 2023 (2023-24). Such a convention was adopted to avoid confusion.",
        "Lab Repositories might need updation in the future with changing curriculum. You are free to send pull requests to update the repositories or otherwise (for other corrections and changes).",
        "The website or its makers aren't liable for any harm or misunderstanding caused by the notes links hosted here. Use them at your own risk. These are crowdsourced notes and resources.",
        "To contribute to these notes, mail us at riserit@proton.me with the links or documents. At the beginning of such mail submissions, mention the year (20XX), semester (1-8) and subject. For instance, '2022 3rd OS' signifies a submission to contribute to the Operating System subject resources for the 3rd semester for the Academic year 2022-23."
    ]

    return (
        <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
            <div className="my-10">
                <Points prelim={prelim} points={points}/>
            </div>
            <Heading heading="Semester-wise Resource Links"/>
            <Resources resources={allResources} />
        </div>
    )
}