"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Course } from "./Courses"
import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface CourseListProps {
    courses: Course[]
}

export function CourseList({ courses }: CourseListProps) {
    const semesters = Array.from(new Set(courses.map(course => course.semester))).sort((a, b) => a - b);
    const [activeSemester, setActiveSemester] = useState(semesters[0].toString());

    return (
        <div className="w-full">
            <div className="md:hidden mb-4">
                <Select onValueChange={setActiveSemester} defaultValue={activeSemester}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Semester" />
                    </SelectTrigger>
                    <SelectContent>
                        {semesters.map((semester) => (
                            <SelectItem key={semester} value={semester.toString()}>
                                Semester {semester}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Tabs value={activeSemester} onValueChange={setActiveSemester} className="w-full">
                <TabsList className="hidden md:flex justify-start mb-4 overflow-x-auto">
                    {semesters.map((semester) => (
                        <TabsTrigger 
                            key={semester} 
                            value={semester.toString()}
                            className="px-3 py-1 text-sm whitespace-nowrap"
                        >
                            Semester {semester}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {semesters.map((semester) => (
                    <TabsContent key={semester} value={semester.toString()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {courses
                                .filter(course => course.semester === parseInt(semester.toString()))
                                .map(course => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}

function CourseCard({ course }: { course: Course }) {
    return (
        <Card className="overflow-hidden h-full flex flex-col">
            <CardHeader className="bg-primary/10 pb-2 flex-shrink-0">
                <div className="flex flex-wrap items-baseline justify-between mb-1 gap-2">
                    <span className="text-sm font-mono text-primary">{course.id}</span>
                    <span className="text-xs text-muted-foreground">
                        Total Credits: {course.credits.theory + course.credits.tutorial + course.credits.practical}
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-lg break-words">{course.title}</CardTitle>
                    {course.options && (
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-secondary rounded">
                            Elective
                        </span>
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow flex flex-col justify-between bg-black">
                <table className="w-full text-sm mb-4">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-2">Type</th>
                            <th className="text-right py-2">Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-2">Theory</td>
                            <td className="text-right">{course.credits.theory}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2">Tutorial</td>
                            <td className="text-right">{course.credits.tutorial}</td>
                        </tr>
                        <tr>
                            <td className="py-2">Practical</td>
                            <td className="text-right">{course.credits.practical}</td>
                        </tr>
                    </tbody>
                </table>
                {course.options && (
                    <div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <span className="text-gray-500">Elective Options</span>
                            </SelectTrigger>
                            <SelectContent>
                                {course.options.map((option) => (
                                    <SelectItem
                                        key={option}
                                        value={option.toString()}
                                    >
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}