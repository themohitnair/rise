import { Metadata } from 'next'
import { courses } from './Courses'
import { CourseList } from './CourseList'

export const metadata: Metadata = {
    title: 'RIT ISE - Courses',
    description: 'Explore our wide range of courses',
}

export default function CoursesPage() {
    return (
        <div className="min-h-[calc(100vh-4rem-4rem)] bg-background text-foreground">
            <main className="container mx-auto px-4 py-8">
                <CourseList courses={courses} />
            </main>
        </div>
    )
}