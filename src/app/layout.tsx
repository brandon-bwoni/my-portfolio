import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import { Providers, ToastProvider } from "./Providers";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const kode_mono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Brandon Takura Bwoni | Portfolio",
  description:
    "Software Engineer, Software Developer, Web Developer, Mobile Developer, UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kode_mono.className}>
        <ToastProvider>
          <Providers>
            <nav className="bg-orange-300 bg-opacity-10">
              <Navbar />
            </nav>
            <main className="bg-lightBg dark:bg-darkBg ">{children}</main>
            <footer>
              <Footer />
            </footer>
          </Providers>
        </ToastProvider>
      </body>
    </html>
  );
}
