import "./globals.css"
import Navbar from "./Navbar"
import { Footer } from "./Footer"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"

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
    icons: {
        icon: "/favicon/rise.svg"
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="font-fira">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}