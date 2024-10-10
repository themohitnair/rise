import React from "react"
import Resources from "./Resources"
import Heading from "../Heading"
import { Metadata } from "next"
import allResources from "./ResourceList"

export const metadata: Metadata = {
    title: 'rISE - Resources',
}

export default function ResourcesPage() {
    return (
        <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
            <Heading heading="Semester-wise Resource Links"/>
            <Resources resources={allResources} />
        </div>
    )
}