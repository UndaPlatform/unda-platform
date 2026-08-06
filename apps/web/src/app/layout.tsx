import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { UndaSymbolDefs } from "@/components/brand/unda-symbol";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const generalSans = localFont({
  variable: "--font-general-sans",
  src: [
    { path: "../fonts/general-sans/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/general-sans/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/general-sans/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Unda Solutions",
    template: "%s — Unda Solutions",
  },
  description:
    "From software to travel, we deliver thoughtful systems that drive growth and build trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <UndaSymbolDefs />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
