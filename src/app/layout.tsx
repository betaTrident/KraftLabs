import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Kr4ftLabs — Useful software, made with intent",
  description:
    "Kr4ftLabs is a personal platform for useful digital tools and applications built with clarity, purpose, and care.",
  icons: {
    icon: [
      {
        url: "/brand/app-icon-light.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/app-icon-dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/brand/app-icon-light.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
