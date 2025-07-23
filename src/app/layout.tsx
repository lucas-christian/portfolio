import type { Metadata } from "next";
import { Inter, Orbitron, Audiowide } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { LangProvider } from "@context/LangContext/LangProvider";
import { Lang } from "@utils/langUtils";
import { ThemeProvider } from "@context/ThemeContext/ThemeProvider";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Navbar } from "../components/Navbar";
import { NavbarProvider } from "@context/NavbarContext/NavbarProvider";
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Dev Luch",
  description: "Portfólio do Dev Luch",
};

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400"
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get('accept-language')?.split(',')[0] || 'en-US';

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${orbitron.variable} ${audiowide.variable}`}>
        <NavbarProvider>
          <LangProvider language={lang as Lang}>
            <ThemeProvider>
              <Navbar />
              {children}
            </ThemeProvider>
          </LangProvider>
        </NavbarProvider>
      </body>
    </html>
  );
}
