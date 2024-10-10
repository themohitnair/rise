interface InfoProps {
    text: string
}

const Info: React.FC<InfoProps> = ({ text }) => {
    return (
        <div className="info font-fira w-4/5 m-auto">
            {text}
        </div>
    )
}

export default Info