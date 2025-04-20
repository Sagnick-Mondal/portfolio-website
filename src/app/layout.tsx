import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Icon } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sagnick's Portfolio",
  description:
    "A stunning portfolio showcasing my skills. Built using Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          `${inter.variable} ${calistoga.variable} bg-gradient-to-b from-gray-900 to-black text-white antialiased font-sans scroll-smooth`
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
