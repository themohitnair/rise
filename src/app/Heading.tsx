import { Separator } from "@radix-ui/react-select"

interface HeadingProps {
    heading: string
}

const Heading: React.FC<HeadingProps> = ({heading}) => {
    return (
        <div className="mt-10 mb-5 text-center">
            <h1 className="text-white text-4xl">
                {heading}
            </h1>
            <Separator className="bg-white font-extrabold text-4xl h-[2px] w-full mx-auto mt-4" />
        </div>
    )
}

export default Heading