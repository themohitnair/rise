import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectProps {
    name: string
    description: string
    ghlink: string
}

const Project: React.FC<ProjectProps> = ({name, description, ghlink}) => {
    return (
        <div className="project font-fira">
            <div className="heading flex justify-between items-center border-b-2 pb-1 mt-3">
                <div className="name text-xl font-bold">
                    {name}
                </div>
                <div className="link">
                    <Button>
                        <a href={ghlink}>
                            <Image src="/icons/github.svg" alt={name} width={24} height={24}/>
                        </a>                        
                    </Button>
                </div>
            </div>
            <div className="desc mt-2">
                {description}
            </div>
        </div>
    )
}

export default Project