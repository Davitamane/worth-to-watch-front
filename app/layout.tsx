import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components";
import ModalController from "@/components/ModalController";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "worthto.watch",
    template: "%s — worthto.watch",
  },
  description:
    "Your friend who has seen it all. Get an honest AI verdict on any movie in seconds.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <Nav />
        {children}
        <Suspense>
          <ModalController />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
