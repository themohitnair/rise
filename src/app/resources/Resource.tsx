import React from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export interface ResourceProps {
    name: string
    link: string
    year: number
    semester: number
}

const Resource: React.FC<ResourceProps> = ({ name, link, year }) => {
    return (
        <Card className="w-full mb-2 border-none">
            <a href={link} className="block" target="_blank" rel="noopener noreferrer">
                <CardHeader className="p-4">
                <CardTitle className="text-sm font-medium flex justify-between items-center">
                    <span>{name} ({year})</span>
                    <ExternalLink className="h-4 w-4" />
                </CardTitle>
                </CardHeader>
            </a>
        </Card>
    )
}

export default Resource