"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface MagazineProps {
    title: string;
    pdfPath: string;
    year: string;
}

export const MagazineCard: React.FC<MagazineProps> = ({ title, pdfPath, year }) => {
    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group bg-primary/10 border border-gray-800">
            <div className="relative p-6 flex flex-col justify-between">
                <div>
                    <CardHeader className="p-0">
                        <CardTitle className="text-lg font-semibold text-gray-100 group-hover:text-white transition-all">
                            {title}
                        </CardTitle>
                    </CardHeader>
                    <p className="text-sm text-gray-500 mt-1">{year}</p>
                </div>
            </div>
            <CardContent className="p-4">
                <Button className="w-full bg-white">
                    <a
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black"
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        View PDF
                    </a>
                </Button>
            </CardContent>
        </Card>
    );
};
