import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Resource, { ResourceProps } from "./Resource"

interface ResourcesProps {
    resources: ResourceProps[]
}

const Resources: React.FC<ResourcesProps> = ({ resources }) => {
    const semesters = Array.from({ length: 8 }, (_, i) => i + 1)

    return (
        <Accordion type="single" collapsible className="w-full mb-10">
        {semesters.map((semester) => {
            const semesterResources = resources.filter((resource) => resource.semester === semester)
            if (semesterResources.length === 0) return null

            return (
                <AccordionItem key={semester} value={`semester-${semester}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                    Semester {semester}
                    </AccordionTrigger>
                    <AccordionContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {semesterResources.map((resource, index) => (
                        <Resource 
                            key={`${semester}-${index}`} 
                            name={resource.name} 
                            link={resource.link} 
                            year={resource.year} 
                            semester={resource.semester} 
                        />
                        ))}
                    </div>
                    </AccordionContent>
                </AccordionItem>
            )
        })}
        </Accordion>
    )
}

export default Resources