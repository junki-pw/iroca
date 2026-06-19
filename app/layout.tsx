import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

// 見出し・英字（旧: Google Fonts <link> の Cormorant Garamond）
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// 本文・和文（旧: Noto Serif JP）。日本語フォントは巨大なので preload はしない。
const notoSerifJp = Noto_Serif_JP({
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "iroca｜アイラッシュサロン",
  description:
    "忙しい毎日に、さりげない華やかさを。美容室併設・同日施術OKのアイラッシュサロン iroca。LINE予約・Instagram・アクセス情報はこちらから。",
  openGraph: {
    type: "website",
    title: "iroca｜アイラッシュサロン",
    description: "忙しい毎日に、さりげない華やかさを。",
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf7ed",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${notoSerifJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
