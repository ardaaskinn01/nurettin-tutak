import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from './ClientLayout'; // ClientLayout'u import ediyoruz

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NRT GÜLEÇ GRUP A.Ş. Web Sayfası",
  description: "NRT GÜLEÇ GRUP A.Ş. Web Sayfası",
  icons: {
    icon: "/nrt15.png",
    shortcut: "/nrt15.png",
    apple: "/nrt15.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}