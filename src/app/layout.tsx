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
  title: 'S&Flog',
  description: 'Soluções inteligentes em logística e transporte - S&Flog',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'S&Flog',
    description: 'Soluções inteligentes em logística e transporte - S&Flog',
    url: 'https://www.seusite.com.br',
    siteName: 'S&Flog',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo S&Flog',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seutwitter',
    title: 'S&Flog',
    description: 'Soluções inteligentes em logística e transporte - S&Flog',
    images: ['/logo.png'],
  },
  metadataBase: new URL('https://www.seusite.com.br'),
  alternates: {
    canonical: 'https://www.seusite.com.br',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
