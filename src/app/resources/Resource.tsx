import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ResourceProps {
    name: string
    link: string
    year: number
    semester: number
}

const Resource: React.FC<ResourceProps> = ({name, link, year, semester}) => {
    return (
        <Button className="w-full h-10">            
            <a href={link} className="w-full">
                <div className="w-full link font-fira flex justify-between items-center">
                    <div className="linkname">
                        {name}
                    </div>
                    <div className="icon">
                        <Image src="/icons/link.svg" alt="link" height={24} width={24}/>                                       
                    </div>                
                </div>  
            </a>
        </Button>
    )
}

export default Resource