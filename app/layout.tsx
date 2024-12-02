// app/layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from 'next/font/google';
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Configure Bricolage Grotesque font
const bricolage = Bricolage_Grotesque({ 
  subsets: ['latin'],
  // The font comes in weights: 200, 300, 400, 500, 600, 700, 800
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
});

// Keep Geist Mono for any monospace needs
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Add Geist font for paragraphs
const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: "Sustainable Brands India",
  description: "Discover sustainable and eco-friendly brands making a difference in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body 
        className={`${bricolage.variable} ${geistMono.variable} ${geist.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">
        </main>
        <Footer />
      </body>
    </html>
  );
}
