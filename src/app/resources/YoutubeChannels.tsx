'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ChevronDown } from 'lucide-react'
import { youtubeChannels, Channel, allSemesters } from './Channels'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function YouTubeChannels() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

    const filteredChannels = youtubeChannels.filter(channel => 
        (searchTerm === '' || channel.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
         channel.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()))) &&
        (selectedSemester === null || channel.semesters.includes(selectedSemester))
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <Input
                        id="search"
                        type="text"
                        placeholder="Search by channel name or subject"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                                {selectedSemester ? `Semester ${selectedSemester}` : 'All Semesters'}
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuItem onSelect={() => setSelectedSemester(null)}>
                                All Semesters
                            </DropdownMenuItem>
                            {allSemesters.map(semester => (
                                <DropdownMenuItem key={semester} onSelect={() => setSelectedSemester(semester)}>
                                    Semester {semester}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredChannels.map((channel: Channel) => (
                    <Card key={channel.name} className="border-none overflow-hidden flex flex-col hover:scale-105 duration-200">
                        <CardHeader>
                            <CardTitle className="text-lg">{channel.name}</CardTitle>
                            <CardDescription className="text-sm text-gray-500">
                                {channel.subjects.join(", ")}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {channel.semesters.map(semester => (
                                    <Badge key={semester} variant="secondary">Sem {semester}</Badge>
                                ))}
                            </div>
                            <a
                                href={channel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800"
                            >
                                Visit Channel
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}