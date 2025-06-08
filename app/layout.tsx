import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FreeCounselingPopup from "@/components/free-counseling-popup";
import { AviationGraphics } from "@/components/aviation-graphics";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SkyWings Aviation Academy | Premium Aviation & Hospitality Training",
  description:
    "Join SkyWings Aviation Academy for world-class Air Hostess and Hospitality training. 100% placement guarantee with top airlines and hotels. Premium aviation education since 2010.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <div className="flex flex-col min-h-screen relative">
          {/* <AviationGraphics /> */}
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FreeCounselingPopup />
        </div>
      </body>
    </html>
  );
}
