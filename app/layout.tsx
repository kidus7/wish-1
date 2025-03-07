import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mignot Yirsaw Adane | Marketing Professional",
  description:
    "Creative Marketing Enthusiast specializing in Branding & Strategy. View my portfolio and experience.",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mignot Yirsaw" />
        <link rel="apple-touch-icon" href="/icons/fav.png" />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <ServiceWorkerRegister /> {/* Load service worker separately */}
      </body>
    </html>
  );
}
