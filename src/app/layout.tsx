import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FeelSnack - Your Cozy AI Companion",
  description: "A warm, friendly AI platform to help you find comfort, peace, and joy. Let us be your companion through difficult moments.",
  keywords: ["mental health", "AI companion", "wellness", "comfort", "relaxation", "mindfulness"],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "FeelSnack - Your Cozy AI Companion",
    description: "A warm, friendly AI platform to help you find comfort, peace, and joy.",
    type: "website",
    locale: "en_US",
    siteName: "FeelSnack",
  },
  twitter: {
    card: "summary_large_image",
    title: "FeelSnack - Your Cozy AI Companion",
    description: "A warm, friendly AI platform to help you find comfort, peace, and joy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-20 transition-all duration-300">
              {children}
            </main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

