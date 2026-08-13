import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import "../globals.css";

const generalSans = localFont({
  variable: "--font-general-sans",
  src: [
    { path: "../../fonts/general-sans/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/general-sans/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    {
      path: "../../fonts/general-sans/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    { path: "../../fonts/general-sans/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
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
  title: "Unda Studio | Product Design & Brand Identity",
  description:
    "Unda Studio helps ambitious startups and businesses build exceptional brands, products, and digital experiences: product design, brand identity, UX research, design systems, and AI product design.",
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
      data-division="studio"
    >
      <body className="flex min-h-full flex-col bg-bg-default text-text-primary">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
