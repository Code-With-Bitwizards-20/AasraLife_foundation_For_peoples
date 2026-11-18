import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/footer/Footer";
import AnnouncementBar from "@/components/navigation/AnnouncementBar";

export const viewport: Viewport = {
  themeColor: "#064B35",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aasralife.org"),
  title: {
    default: "AasraLife Foundation — Connecting Humanity. Creating Opportunities.",
    template: "%s | AasraLife Foundation",
  },
  description:
    "AasraLife Foundation is dedicated to humanitarian support, medical aid, sustainable livelihood, education, women's empowerment, and food security in Pakistan and beyond.",
  keywords: [
    "AasraLife Foundation",
    "Pakistan Humanitarian Organization",
    "Medical Aid Pakistan",
    "Livelihood Support",
    "Education Charity",
    "Women's Empowerment Pakistan",
    "SadaPay Donation",
    "Transparent Charity",
  ],
  authors: [{ name: "AasraLife Foundation" }],
  creator: "AasraLife Foundation",
  publisher: "AasraLife Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aasralife.org",
    title: "AasraLife Foundation — Connecting Humanity. Creating Opportunities.",
    description:
      "Every life deserves dignity. Supporting vulnerable communities through healthcare, livelihood, education, and nutrition.",
    siteName: "AasraLife Foundation",
    images: [
      {
        url: "/images/hero/hero-humanitarian.jpg",
        width: 1200,
        height: 630,
        alt: "AasraLife Foundation Humanitarian Aid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AasraLife Foundation — Connecting Humanity. Creating Opportunities.",
    description:
      "Humanitarian welfare, medical relief, and sustainable livelihood programs across Pakistan.",
    images: ["/images/hero/hero-humanitarian.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/images/brand/aasralife-emblem.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
      { url: "/images/brand/aasralife-emblem.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts — loaded by browser at runtime, not at build time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[#FFF9EE] text-[#172B26] antialiased selection:bg-[#D6A943] selection:text-white">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
