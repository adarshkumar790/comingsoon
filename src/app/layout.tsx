import "./globals.css";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music Melody World",
  description: "Explore melodies, genres, and inspiring music content at Music Melody World.",
  keywords: ["music melody world", "mmw"],
  openGraph: {
    title: "Music Melody World - Your Portal to Melodic Bliss",
    description: "Explore melodies, genres, and inspiring music content at Music Melody World.",
    url: "https://mmw-pearl.vercel.app",
    siteName: "Music Melody World",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
