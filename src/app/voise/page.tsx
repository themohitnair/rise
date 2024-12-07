import { Metadata } from "next";
import React from "react";
import { MagazineCard } from "./MagazineCard";

export const metadata: Metadata = {
    title: "RIT ISE - VoISE Magazines",
    description: "VoISE Magazine Editions from the department of ISE, RIT Bangalore",
};

export default function MagazinePage() {
    const magazines = [
        { title: "Fourth Issue", pdfPath: "/pdfs/magazines/21-22.pdf", year: "2021-2022" },
        { title: "Third Issue", pdfPath: "/pdfs/magazines/20-21.pdf", year: "2020-2021" },
        { title: "Second Issue", pdfPath: "/pdfs/magazines/19-20.pdf", year: "2019-2020" },
        { title: "First Issue", pdfPath: "/pdfs/magazines/18-19.pdf", year: "2018-2019" },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-extrabold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        VoISE Magazine
                    </span>
                </h1>
                <p className="text-center text-white mb-12 max-w-2xl mx-auto">
                    Explore the latest editions of VoISE, showcasing the vibrant world of Information Science and Engineering at RIT Bangalore.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {magazines.map((magazine, index) => (
                        <MagazineCard key={index} {...magazine} />
                    ))}
                </div>
            </div>
        </div>
    );
}