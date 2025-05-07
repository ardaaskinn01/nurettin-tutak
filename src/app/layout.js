import { Geist, Geist_Mono } from "next/font/google";
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
    icon: "/nrtlogo2.png", // Ana favicon
    shortcut: "/nrtlogo2.png", // Kısayol ikonu
    apple: "/nrtlogo2.png", // Apple cihazlar için
    // Diğer boyutlar (opsiyonel)
    other: {
      rel: "nrtlogo2-touch-icon",
      url: "/nrtlogo2.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}