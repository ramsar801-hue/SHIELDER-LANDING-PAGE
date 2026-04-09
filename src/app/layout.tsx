import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ShieldRoute | Autonomous Supply Chain Intelligence",
  description: "Secure your shipments with AI-driven autonomous logistics optimization. Detect disruptions 18 days earlier and automate rerouting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
