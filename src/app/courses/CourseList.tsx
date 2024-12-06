"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Course } from "./Courses"

interface CourseListProps {
    courses: Course[]
}

export function CourseList({ courses }: CourseListProps) {
    const semesters = Array.from(new Set(courses.map(course => course.semester))).sort((a, b) => a - b);

    return (
        <Tabs defaultValue={semesters[0].toString()} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                {semesters.map((semester) => (
                    <TabsTrigger key={semester} value={semester.toString()}>
                        Semester {semester}
                    </TabsTrigger>
                ))}
            </TabsList>
            {semesters.map((semester) => (
                <TabsContent key={semester} value={semester.toString()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses
                            .filter(course => course.semester === semester)
                            .map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
}

function CourseCard({ course }: { course: Course }) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="bg-primary/10 pb-2">
                <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm font-mono text-primary">{course.id}</span>
                    <span className="text-xs text-muted-foreground">
                        Total Credits: {course.credits.theory + course.credits.tutorial + course.credits.practical}
                    </span>
                </div>
                <div className="flex items-center">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    {course.options && (
                        <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-secondary rounded">
                            Elective
                        </span>
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-4">
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
                        <p className="mb-2 text-sm font-medium text-muted-foreground">
                            Elective Options:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {course.options.map((option, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs font-semibold text-white bg-black rounded"
                                >
                                    {option}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}