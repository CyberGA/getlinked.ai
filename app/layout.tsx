import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/shared/header"

const clash_display = localFont({
  src: "../public/fonts/ClashDisplay-Variable.woff2",
  fallback: ["sans-serif", "arial" ],
  preload: true,
  variable: "--font-clash"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["sans-serif", "arial"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "GetLinked.ai | Home",
  description: "Igniting a Revolution in HR Innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${clash_display.variable}`}>
        {/* Header */}
        <Header />
        {children}
        {/* Footer */} 
        </body>
    </html>
  );
}
