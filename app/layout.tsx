import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import {
  SITE_CONFIG,
  SOCIAL_LINKS,
  TECHNICAL_SEO,
  ORGANIZATION_SCHEMA,
  SOFTWARE_APPLICATION_SCHEMA,
  WEBSITE_SCHEMA,
  TEST_MODE,
} from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.applicationName,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.creator,
  publisher: SITE_CONFIG.publisher,
  keywords: [...SITE_CONFIG.keywords],
  
  // Robots
  robots: TEST_MODE
    ? {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      }
    : {
        index: TECHNICAL_SEO.robots.index,
        follow: TECHNICAL_SEO.robots.follow,
        googleBot: TECHNICAL_SEO.robots.googleBot,
      },

  // Open Graph
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    alternateLocale: [...SITE_CONFIG.alternateLocales],
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Watch Smarter, Stream Freely`,
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: SOCIAL_LINKS.twitter.cardType,
    site: SOCIAL_LINKS.twitter.handle,
    creator: SOCIAL_LINKS.twitter.handle,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },

  // Verification
  verification: {
    google: TECHNICAL_SEO.verification.google,
    other: {
      "msvalidate.01": TECHNICAL_SEO.verification.bing,
      "yandex-verification": TECHNICAL_SEO.verification.yandex,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Alternates
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: TECHNICAL_SEO.alternates.languages,
  },

  // App Links
  appLinks: {
    ios: {
      url: "https://apps.apple.com/app/zebraiptv",
      app_store_id: "123456789",
    },
    android: {
      package: "com.zebraiptv.app",
      app_name: "Zebra IPTV",
    },
  },

  // Additional Metadata
  category: "Entertainment",
  classification: "IPTV Player Application",
  
  // Other
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION_SCHEMA,
      SOFTWARE_APPLICATION_SCHEMA,
      WEBSITE_SCHEMA,
    ],
  };

  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background overflow-x-hidden `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
