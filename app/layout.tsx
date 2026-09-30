import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";

// Impor font Inter dari Google Fonts bawaan Next.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PKLspace",
  description: "Project Pencarian Informasi PKL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col bg-slate-900 text-white`}>
        {/* Panggil komponen Navbar di sini agar muncul di semua halaman */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}