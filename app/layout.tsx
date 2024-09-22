import type { Metadata } from "next";
import { Bebas_Neue, Inter, Road_Rage } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const road_rage = Road_Rage({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-road-rage",
});

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Roast my Idea",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <StoreProvider>
        <SessionProvider>
          <body
            className={`${inter.variable} ${road_rage.variable} ${bebas_neue.variable}`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
            <Toaster />
          </body>
        </SessionProvider>
      </StoreProvider>
    </html>
  );
}
