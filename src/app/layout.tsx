import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "aos/dist/aos.css";
import { AOSInit } from "@/Components/AOSInit";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Flicker Engineering",
  description: "Innovative Engineering Solutions for a Sustainable Future",
  keywords: [
    "Engineering Services",
    "Civil Engineering",
    "Structural Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Sustainable Design",
    "Infrastructure Development",
    "Project Management",
    "Consulting Services",
    "Innovative Solutions",
    "Flicker Engineering",
    "Engineering Firm",
    "Technical Expertise",
    "Engineering Projects",
    "Engineering Consultancy",
    "Engineering Design",
    "Engineering Analysis",
    "Engineering Innovation",
    "Engineering Excellence",
    "Engineering Team",
    "Engineering Solutions",
    "Engineering Technology",
  ],
  authors: [
    { name: "Md. Shakibul Islam Mobin", url: "https://github.com/siMobin" },
  ],
  creator: "siMobin",
  publisher: "siMobin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AOSInit />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
