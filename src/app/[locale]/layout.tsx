import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Providers from "../providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: ["gaji guru", "guru honorer", "PNS guru", "kalkulator tabungan", "guru Indonesia", "transparansi gaji"],
    authors: [{ name: "GuruKita" }],
    creator: "GuruKita",
    metadataBase: new URL("https://gurukita.farhan-adiyasa.site"),
    openGraph: {
      type: "website",
      locale: locale === 'en' ? 'en_US' : 'id_ID',
      url: "https://gurukita.farhan-adiyasa.site",
      siteName: "GuruKita",
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/og-image.png"],
      creator: "@gurukita_id",
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/images/logo-guru-kita.png?v=2',
      shortcut: '/images/logo-guru-kita.png?v=2',
      apple: '/images/logo-guru-kita.png?v=2',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
