import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import { Providers, ToastProvider } from "./Providers";

import {Navbar} from "../components/layout/Navbar";
import {Footer} from "../components/layout/Footer";
import ScrollToTop from "../components/ScrollToTop";

const kode_mono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Brandon Takura | Portfolio",
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
      <link rel="icon" href="/favicon.ico" />
      <body className={`${kode_mono.className} dark:main `}>
        <ToastProvider>
          <Providers>
            <Navbar />
            <ScrollToTop/>
            <main className="space stars1 bg-lightBg">
              {children}
              <Footer />
            </main>
          </Providers>
        </ToastProvider>
      </body>
    </html>
  );
}
