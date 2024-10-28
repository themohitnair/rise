interface PointsProps {
    prelim: string | React.ReactNode;
    points: (string | React.ReactNode)[];
}
  
const Points: React.FC<PointsProps> = ({ prelim, points }) => {
    return (
        <div className="info">
        {prelim}
        <ul className="list-disc ml-3">
            {points.map((item, key) => (
            <li key={key}>{item}</li>
            ))}
        </ul>
        </div>
    );
};
  
export default Points;