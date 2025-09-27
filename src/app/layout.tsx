import type { Metadata } from "next";
import { Inter, Orbitron, Audiowide } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { LangProvider } from "@context/LangContext/LangProvider";
import { Lang } from "@utils/langUtils";
import { ThemeProvider } from "@context/ThemeContext/ThemeProvider";


export const metadata: Metadata = {
  title: "Dev Luch - Desenvolvedor Full Stack | Agente em Missão",
  description: "Desenvolvedor Full Stack especializado em React, Node.js, TypeScript e AWS. Atualmente em missão na Soublox, criando soluções inovadoras com tecnologia de ponta.",
  keywords: "desenvolvedor, full stack, react, node.js, typescript, aws, soublox, portfólio, desenvolvedor de software",
  openGraph: {
    title: "Dev Luch - Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, Node.js, TypeScript e AWS. Atualmente em missão na Soublox.",
    url: "https://dev-luch.com",
    siteName: "Dev Luch Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dev Luch - Desenvolvedor Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Luch - Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em React, Node.js, TypeScript e AWS. Atualmente em missão na Soublox.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <head>
        <meta name="google-adsense-account" content="ca-pub-7052672921293029" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${audiowide.variable}`}>
        <LangProvider language={lang as Lang}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
