import React from "react"
import Resources from "./Resources"
import { ResourceProps } from "./Resource"
import Heading from "../Heading"

const allResources: ResourceProps[] = [
    {name: "Textbooks", link: "https://github.com/themohitnair/3rd-Sem-Textbooks", year: 2022, semester: 3},
    {name: "Textbooks", link: "https://github.com/themohitnair/4th-Sem-Textbooks", year: 2022, semester: 4},
]

export default function ResourcesPage() {
    return (
        <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
            <Heading heading="Semester-wise Resource Links"/>
            <Resources resources={allResources} />
        </div>
    )
}