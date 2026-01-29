// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'; // sirf import, CSS modules nahi

import Navbar from "./src/layout/header/headerTop";
import FooterSection from "./src/layout/footer/footer";
import ThemeWrapper from "./src/components/themeWrape";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Solutions",
  description: "Enterprise AI Solutions for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <ThemeWrapper>
          <Navbar />
          <main className="min-h-screen bg-white dark:bg-gray-900">
            {children}
          </main>
          <FooterSection />
        </ThemeWrapper>
      </body>
    </html>
  );
}