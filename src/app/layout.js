import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nurettin Tutak Kişisel Web Sayfası",
  description: "Nurettin Tutak Kişisel Web Sayfası",
  icons: {
    icon: "/nrtlogo2.png",
    shortcut: "/nrtlogo2.png",
    apple: "/nrtlogo2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/nrtlogo2.png" sizes="32x32" />
        <link rel="icon" href="/nrtlogo2.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/nrtlogo2.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}