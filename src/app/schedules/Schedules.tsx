import Heading from "../Heading";
import TimetableDialog from "./TimeTableDialog";

const SchedulesPage: React.FC = () => {
    const thirdSemesterTimetable = "/pdfs/timetables/sem3.pdf";
    const fifthSemesterTimetable = "/pdfs/timetables/sem5.pdf";

    return (
        <div>
            <Heading heading="Timetables"/>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-5 m-auto gap-5">
                <TimetableDialog semester="Three" pdfPath={thirdSemesterTimetable} />
                <TimetableDialog semester="Five" pdfPath={fifthSemesterTimetable} />
            </div>
        </div>
    );
};

export default SchedulesPage