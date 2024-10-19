"use client"

import { useState } from 'react'
import { PDFViewer } from './PDFViewer'
import { PDFList } from './PDFList'

const pdfs = [
  { id: '1', title: '1st Year Syllabus', url: '/files/1stYear.pdf' },
  { id: '2', title: '2nd Year Syllabus', url: '/files/2ndYear.pdf' },
  { id: '3', title: '3rd Year Syllabus', url: '/files/3rdYear.pdf' },
  { id: '4', title: '4th Year Syllabus', url: '/files/4thYear.pdf' },
]

export default function PDFViewerPage() {
  const [selectedPDF, setSelectedPDF] = useState<typeof pdfs[0] | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">PDF Viewer</h1>
      {selectedPDF ? (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{selectedPDF.title}</h2>
          <PDFViewer url={selectedPDF.url} />
          <button
            onClick={() => setSelectedPDF(null)}
            className="mt-4 text-blue-600 hover:underline"
          >
            Back to PDF list
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Select a PDF to view</h2>
          <PDFList pdfs={pdfs} onSelect={setSelectedPDF} />
        </div>
      )}
    </div>
  )
}