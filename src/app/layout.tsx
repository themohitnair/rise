import "./globals.css";
import Navbar from "./Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/rise.svg" type="image/svg+xml" />
        <meta property="og:title" content="rISE - MSRIT ISE" />
        <meta property="og:description" content="A portal for ISE students." />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:url" content="https://riserit.vercel.app" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
