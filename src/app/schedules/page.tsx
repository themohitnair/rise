import React from "react"
import Heading from "../Heading"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'RIT ISE - Schedules',
}

export default function SchedulesPage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Heading heading="Semester Schedules" />
            <div className="space-y-8 mt-5">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Semester 3 Schedule</h2>
                    <iframe
                        src="/pdfs/timetables/sem3.pdf"
                        className="w-full h-[800px] border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Semester 5 Schedule</h2>
                    <iframe
                        src="/pdfs/timetables/sem5.pdf"
                        className="w-full h-[800px] border border-gray-300 rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}