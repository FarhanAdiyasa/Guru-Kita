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
  title: "GuruKita - Platform Transparansi Gaji Guru Indonesia",
  description: "Berapa lama guru honorer harus menabung untuk beli rumah? Kalkulator realita gaji guru Indonesia. Data real untuk perubahan nyata.",
  keywords: ["gaji guru", "guru honorer", "PNS guru", "kalkulator tabungan", "guru Indonesia", "transparansi gaji"],
  authors: [{ name: "GuruKita" }],
  creator: "GuruKita",
  metadataBase: new URL("https://gurukita.farhanadiyasa.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gurukita.farhanadiyasa.id",
    siteName: "GuruKita",
    title: "GuruKita - Berapa Lama Guru Harus Menabung?",
    description: "Kalkulator realita gaji guru Indonesia. Lihat berapa tahun guru honorer harus menabung untuk beli rumah, motor, atau HP. 😢",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GuruKita - Platform Transparansi Gaji Guru Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuruKita - Berapa Lama Guru Harus Menabung?",
    description: "Kalkulator realita gaji guru Indonesia. Lihat berapa tahun guru honorer harus menabung untuk beli rumah. 😢",
    images: ["/og-image.png"],
    creator: "@gurukita_id",
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
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
