import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { LangProvider } from "@context/LangContext/LangProvider";
import { Lang } from "@utils/langUtils";
import { ThemeProvider } from "@context/ThemeContext/ThemeProvider";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get('accept-language')?.split(',')[0] || 'en-US';
  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <LangProvider language={lang as Lang}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
