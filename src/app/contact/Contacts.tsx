import { Button } from "@/components/ui/button"
import Heading from "../Heading"
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Mail } from "lucide-react"

interface ContactProps {
    primaryData: string
    secondaryData: string
    icon: React.ReactNode
    label: string
}

export const Contact: React.FC<ContactProps> = ({ primaryData, secondaryData, icon, label }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="w-full h-auto py-2 px-4">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col items-start">
                                <span className="font-medium text-sm">{primaryData}</span>
                                <span className="text-xs text-gray-500">{secondaryData}</span>
                            </div>
                            <div className="text-secondary">{icon}</div>
                        </div>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

const Contacts: React.FC = () => {
    const contacts = [
        {
            primaryData: "riserit@proton.me", 
            secondaryData: "Resource Contribution",
            icon: <Mail size={24} />,
            label: "Contribute Resources to this website via Mail"
        },
    ];

    return (
        <div className="socials mb-10">
            <Heading heading="Contact Us"/>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-5 m-auto gap-5">
                {contacts.map((item, key) => (
                    <div className="social" key={key}>
                        <Contact
                            primaryData={item.primaryData}
                            secondaryData={item.secondaryData}
                            icon={item.icon}
                            label={item.label}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts