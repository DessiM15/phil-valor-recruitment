import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/effects/CustomCursor";
import SmoothScrollProvider from "@/components/effects/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Careers | Valor Financial Specialists",
  description:
    "Join Valor Financial Specialists — build your career in financial services with 100+ carriers, 7 verticals, and the independence to grow your way. Franklin, TN.",
  keywords:
    "financial services career, insurance agent, financial advisor, recruitment, Franklin TN, Valor Financial",
  openGraph: {
    title: "Careers | Valor Financial Specialists",
    description:
      "Your career. Your legacy. Join a financial services firm that invests in your independence, your growth, and your future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
