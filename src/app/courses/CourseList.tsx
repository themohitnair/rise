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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
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
    const totalCredits = course.credits.theory + course.credits.tutorial + course.credits.practical;

    return (
        <Card className="overflow-hidden flex flex-col">
            <CardHeader className="bg-primary/10 pb-2 flex-shrink-0">
                <div className="flex flex-wrap items-baseline justify-between mb-1 gap-2">
                    <span className="text-sm font-mono text-primary">{course.id}</span>
                    <span className="text-xs text-muted-foreground">Total Credits: {totalCredits}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-lg break-words">{course.title}</CardTitle>
                    {course.options && (
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-black rounded">
                            Elective
                        </span>
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-4 flex flex-grow flex-col justify-between bg-black">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex flex-col w-1/3 items-center text-center text-white p-2 rounded shadow border">
                        <span className="text-sm font-medium">Theory</span>
                        <span className="text-xl font-bold">{course.credits.theory}</span>
                    </div>
                    <span className="text-white text-lg font-bold">:</span>
                    <div className="flex flex-col w-1/3 items-center text-center text-white p-2 rounded shadow border">
                        <span className="text-sm font-medium">Tutorial</span>
                        <span className="text-xl font-bold">{course.credits.tutorial}</span>
                    </div>
                    <span className="text-white text-lg font-bold">:</span>
                    <div className="flex flex-col w-1/3 items-center text-center text-white p-2 rounded shadow border">
                        <span className="text-sm font-medium">Practical</span>
                        <span className="text-xl font-bold">{course.credits.practical}</span>
                    </div>
                </div>
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