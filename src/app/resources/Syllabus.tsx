import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FileText } from "lucide-react";

interface SyllabusDialogProps {
  year: "First" | "Second" | "Third" | "Fourth";
  pdfPath: string;
}

const SyllabusDialog: React.FC<SyllabusDialogProps> = ({ year, pdfPath }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="flex items-center justify-start">
        <FileText className="mr-2" /> {year} Year
      </Button>
    </DialogTrigger>

    <DialogContent className="w-[90vw] h-[80vh] max-h-[80vh] p-4 rounded-lg border flex flex-col">
      <DialogTitle asChild className="flex justify-center items-center">
        <h2>{year} Year Syllabus</h2>
      </DialogTitle>
      <DialogDescription asChild className="hidden">
        <p>The syllabus content for the selected academic year.</p>
      </DialogDescription>
      <iframe
        src={pdfPath}
        className="rounded-md border h-full"
        width="100%"
        height="100%"
      />
    </DialogContent>
  </Dialog>
);

export default SyllabusDialog;
