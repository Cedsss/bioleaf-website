import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BioLeaf - Identify Philippine medicinal plants offline",
  description:
    "BioLeaf identifies Philippine medicinal plant leaves from a photo, fully offline, with plant information in English and Tagalog. Free Android download.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
