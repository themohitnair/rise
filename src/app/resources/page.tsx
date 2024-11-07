import React from "react"
import Resources from "./Resources"
import Heading from "../Heading"
import allResources from "./ResourceList"
import Syllabus from "./Syllabus"
import InfoPoints from "./InfoPoints"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'rISE - Resources',
}

export default function ResourcesPage() {
  const prelim: string =
    "Here are some important points to remember about the notes and resource links hosted here: "

  const email = "riserit@proton.me"

  const points: (string | React.ReactNode)[] = [
    "Semester 1 and 2 notes are added with the assumption that Semester 1 corresponds to the Physics Cycle and Semester 2 corresponds to the Chemistry Cycle. If that is not the case, then access the links accordingly.",
    "Years in parentheses are meant to signify the year of compilation of the resources. For instance, the 2022 batch compiled 3rd and 4th semester resources in the academic year that started in 2023 (2023-24). Such a convention was adopted to avoid confusion.",
    "Lab Repositories might need updation in the future with changing curriculum. You are free to send pull requests to update the repositories or otherwise (for other corrections and changes).",
    "The website or its makers aren't liable for any harm or misunderstanding caused by the notes links hosted here. Use them at your own risk. These are crowdsourced notes and resources.",
    <>
      To contribute to these notes, mail us at <a href={`mailto:${email}`} className="hover:text-gray-500">{email}</a> with the links or documents. At the beginning of such mail submissions, mention the year (20XX), semester (1-8) and subject. For instance, &apos;2022 3rd OS&apos; signifies a submission to contribute to the Operating System subject resources for the 3rd semester for the Academic year 2022-23.
    </>,
  ]

  return (
    <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
      <InfoPoints prelim={prelim} points={points} />
      <Heading heading="Syllabus" />
      <div className="space-y-2 mt-4 flex flex-col w-full md:flex-row md:space-x-2 md:space-y-0">
        <Syllabus year={"First"} pdfPath="/pdfs/UG_First_Year_Syllabus.pdf" />
        <Syllabus year={"Second"} pdfPath="/pdfs/UG-2ndYearBatch2023.pdf" />
        <Syllabus year={"Third"} pdfPath="/pdfs/UG-3rdYearBatch2022.pdf" />
        <Syllabus year={"Fourth"} pdfPath="/pdfs/UG-4thYearBatch2021.pdf" />
      </div>
      <Heading heading="Semester-wise Resource Links" />
      <Resources resources={allResources} />
    </div>
  )
}