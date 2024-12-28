import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Calendar } from 'lucide-react';

interface TimetableDialogProps {
    semester: string;
    pdfPath: string;
}

const TimetableDialog: React.FC<TimetableDialogProps> = ({ semester, pdfPath }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button
                variant="outline"
                className="w-full h-full py-8 bg-white text-black border border-gray-200 hover:bg-gray-100 hover:text-black transition-colors duration-200 rounded-lg shadow-md"
            >
                <div className="flex flex-col items-center justify-center space-y-2">
                    <Calendar className="w-8 h-8 text-gray-600" />
                    <span className="text-lg font-semibold">Semester {semester}</span>
                </div>
            </Button>
        </DialogTrigger>

        <DialogContent className="w-[90vw] max-w-full h-[80vh] max-h-[90vh] p-4 rounded-lg border flex flex-col">
            <DialogTitle className="text-center text-2xl font-bold mb-4">
                Semester {semester} Timetable
            </DialogTitle>
            <DialogDescription className="sr-only">
                The timetable content for Semester {semester}.
            </DialogDescription>
            <iframe
                src={pdfPath}
                className="rounded-md border h-full w-full"
                style={{ flexGrow: 1 }}
                title={`Semester ${semester} Timetable`}
            />
        </DialogContent>
    </Dialog>
);

export default TimetableDialog;