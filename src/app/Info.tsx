interface InfoProps {
    text: string | React.ReactNode;
}

const Info: React.FC<InfoProps> = ({ text }) => {
    return (
        <div className="info font-fira">
            {text}
        </div>
    )
}

export default Info