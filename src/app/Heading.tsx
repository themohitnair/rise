interface HeadingProps {
    heading: string
}

const Heading: React.FC<HeadingProps> = ({heading}) => {
    return (
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mt-10 font-extrabold pb-2 border-b-2 text-4xl m-auto text-center">
            {heading}
        </div>
    )
}

export default Heading