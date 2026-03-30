import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helens Bay Dental Practice | Dentist in Bangor, Northern Ireland",
  description:
    "High quality dental care in Helens Bay, Bangor. Dental implants, Invisalign, CEREC same-day crowns, cosmetic dentistry & more. Call 02891 853 304.",
  keywords:
    "dentist bangor, dental implants northern ireland, invisalign bangor, cosmetic dentistry, helens bay dental",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
