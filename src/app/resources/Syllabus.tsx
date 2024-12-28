import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { FileText } from "lucide-react"

interface SyllabusDialogProps {
    year: "1st" | "2nd" | "3rd" | "4th"
    pdfPath: string
}

const SyllabusDialog: React.FC<SyllabusDialogProps> = ({ year, pdfPath }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button 
                variant="outline" 
                className="flex items-center justify-start py-5 bg-white text-black border-black hover:bg-gray-100 hover:text-black"
            >
                <FileText className="mr-2 text-black" /> {year} Year Syllabus
            </Button>
        </DialogTrigger>

        <DialogContent className="w-[90vw] max-w-full h-[80vh] max-h-[90vh] p-4 rounded-lg border flex flex-col">
            <DialogTitle asChild className="flex justify-center items-center">
                <h2>{year} Year Syllabus</h2>
            </DialogTitle>
            <DialogDescription asChild className="hidden">
                <p>The syllabus content for the selected academic year.</p>
            </DialogDescription>
            <iframe
                src={pdfPath}
                className="rounded-md border h-full w-full"
                style={{ flexGrow: 1 }}
            />
        </DialogContent>
    </Dialog>
)

export default SyllabusDialog