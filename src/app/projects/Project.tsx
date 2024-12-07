import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface ProjectProps {
  owner: string
  name: string
  description: string
  ghlink: string
  languages?: {
    name: string
    percentage: number
    color: string
  }[]
  stars?: number
}

const Project: React.FC<ProjectProps> = ({owner, name, description, ghlink, languages = [], stars = 0}) => {
    return (
        <Card className="w-full my-4 bg-primary/10">
            <CardHeader>
                <div className="heading flex justify-between items-center">
                <div className="name text-xl font-bold">
                    {owner}/{name}
                </div>
                <div className="flex items-center gap-4">
                    {stars > 0 && (
                    <span className="text-sm text-muted-foreground">
                        ⭐ {stars}
                    </span>
                    )}
                    <Button variant="outline" size="icon">
                    <a href={ghlink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                    </a>
                    </Button>
                </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="">{description}</p>
            </CardContent>
            {languages.length > 0 && (
                <CardFooter>
                    <div className="flex flex-wrap gap-2">
                        {languages.slice(0, 3).map((lang, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: lang.color }}
                            />
                            <span className="text-sm text-muted-foreground">
                                {lang.name} ({lang.percentage}%)
                            </span>
                        </div>
                        ))}
                    </div>
                </CardFooter>
            )}
        </Card>
    )
}

export default Project