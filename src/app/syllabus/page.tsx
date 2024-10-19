import { Metadata } from 'next'
import PDFViewerPage from './PDFViewerPage'

export const metadata: Metadata = {
  title: 'rISE - Syllabus',
}

export default function Page() {
  return <PDFViewerPage />
}