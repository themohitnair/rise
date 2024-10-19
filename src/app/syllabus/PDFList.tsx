"use client"

import { Button } from "@/components/ui/button"

interface PDF {
  id: string
  title: string
  url: string
}

interface PDFListProps {
  pdfs: PDF[]
  onSelect: (pdf: PDF) => void
}

export function PDFList({ pdfs, onSelect }: PDFListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pdfs.map((pdf) => (
        <Button
          key={pdf.id}
          onClick={() => onSelect(pdf)}
          variant="outline"
          className="h-auto py-4 px-6 text-left flex flex-col items-start"
        >
          <span className="text-lg font-semibold">{pdf.title}</span>
          <span className="text-sm text-muted-foreground mt-1">Click to view</span>
        </Button>
      ))}
    </div>
  )
}