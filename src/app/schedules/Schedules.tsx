"use client";

import React from "react";
import { useAspectRatio } from "@/hooks/useAspectRatio";
import Heading from "../Heading";

export default function SchedulesPage() {
    const Dimensions = useAspectRatio(2339, 1654);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="space-y-12 mt-8">
                <ScheduleSection
                    title="Semester 3"
                    pdfPath="/pdfs/timetables/sem3.pdf"
                    dimensions={Dimensions}
                />
                <ScheduleSection
                    title="Semester 5"
                    pdfPath="/pdfs/timetables/sem5.pdf"
                    dimensions={Dimensions}
                />
            </div>
        </div>
    );
}

interface ScheduleSectionProps {
    title: string;
    pdfPath: string;
    dimensions: { width: string; height: string };
}

function ScheduleSection({ title, pdfPath, dimensions }: ScheduleSectionProps) {
    return (
        <div>
            <Heading heading={title} />
            <div className="w-full flex justify-center">
                <iframe
                    src={pdfPath}
                    className="border border-gray-300 rounded-lg shadow-lg mt-2"
                    style={{ width: dimensions.width, height: dimensions.height }}
                    title={title}
                />
            </div>
        </div>
    );
}