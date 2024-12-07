import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface TimetableDialogProps {
    semester: "Third" | "Fourth" | "Fifth" | "Sixth" | "Seventh" | "Eighth";
    pdfPath: string;
}

const TimetableDialog: React.FC<TimetableDialogProps> = ({ semester, pdfPath }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button
                variant="outline"
                className="flex items-center justify-start py-5 bg-white text-black border-black hover:bg-gray-100 hover:text-black"
            >
                <Calendar className="mr-2 text-black" /> {semester} Semester Timetable
            </Button>
        </DialogTrigger>

        <DialogContent className="w-[90vw] max-w-full h-[80vh] max-h-[90vh] p-4 rounded-lg border flex flex-col">
            <DialogTitle asChild className="flex justify-center items-center">
                <h2>{semester} Semester Timetable</h2>
            </DialogTitle>
            <DialogDescription asChild className="hidden">
                <p>The timetable content for the selected semester.</p>
            </DialogDescription>
            <iframe
                src={pdfPath}
                className="rounded-md border h-full w-full"
                style={{ flexGrow: 1 }}
            />
        </DialogContent>
    </Dialog>
);

export default TimetableDialog