interface HeadingProps {
    heading: string
}

const Heading: React.FC<HeadingProps> = ({heading}) => {
    return (
        <div className="mt-10 font-extrabold font-fira pb-2 border-b-2 text-4xl m-auto">
            {heading}
        </div>
    )
}

export default Heading