import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Northlane Product — Product & Automation Consulting",
  description:
    "Product management consulting and automation services. Help teams decide what to build, then automate the busywork around it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full bg-bg font-sans text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
