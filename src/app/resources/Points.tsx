import Info from "../Info"

interface PointsProps {
    prelim: string
    points: string[]
}

const Points:React.FC<PointsProps> = ({ prelim, points }) => {
    return (
        <div className="info font-fira">
            {prelim}
            <ul className="list-disc ml-3">
                {points.map((item, key) => (
                    <li key={key}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Points