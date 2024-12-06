import "./globals.css";
import Navbar from "./Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'RIT ISE',
    description: 'The official site of ISE RIT, Bangalore',
    openGraph: {
        title: 'RIT ISE',
        description: 'The official site of ISE RIT, Bangalore',
        url: 'https://riserit.vercel.app',
        siteName: 'RIT ISE',
        locale: 'en_US',
        type: 'website',
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-fira">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <Navbar />
                {children}
                </ThemeProvider>
            </body>
        </html>
    );
}