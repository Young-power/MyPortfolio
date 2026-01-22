import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./commponents/nav/Navbar";
import Footer from "./commponents/footer/Footer";
//import { ThemeProvider } from "@/context/DarkModeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahine.com",
  description: "this porfolio is created to show all my skills",
  icons: {
    icon: "/assets/Mahine.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>

          <Navbar />

          {children}
          <Footer />
   



      </body>
    </html>
  );
}
