import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_SHARE_IMAGE, SITE_NAME, SITE_URL, businessSchema } from "@/lib/seo";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const TITLE = "Roofing Company | Quality Roofing, Inc., Tampa FL";
const DESCRIPTION =
  "Third generation Tampa roofing contractor serving all of Florida since 1994. Commercial, residential, multi-housing roofing, repairs, and free estimates.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "16x16 32x32" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/", siteName: SITE_NAME, type: "website", images: [DEFAULT_SHARE_IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [DEFAULT_SHARE_IMAGE] },
};

export const viewport: Viewport = {
  themeColor: "#154D29",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm-sans)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-[#154D29] focus:shadow-lg"
        >
          Skip to main content
        </a>
        <JsonLd data={businessSchema} />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
