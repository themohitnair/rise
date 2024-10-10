import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/rise.svg" type="image/svg+xml" />
        <title>rISE - MSRIT ISE</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
