// SEO Constants for Zebra IPTV Landing Page

export const SITE_CONFIG = {
  name: "Zebra IPTV",
  title: "Zebra IPTV - Watch Smarter, Stream Freely | Best IPTV Player 2025",
  description:
    "Experience premium IPTV streaming with Zebra - A modern, free IPTV player for Apple TV, iOS & Android. Stream live TV, movies, and series with M3U playlists, Xtream Codes API support, and HLS streaming. Download now!",
  url: "https://zebraiptv.com",
  ogImage: "https://zebraiptv.com/images/og-image.jpg",
  keywords: [
    "IPTV player",
    "free IPTV",
    "M3U player",
    "Xtream Codes",
    "Apple TV IPTV",
    "iOS IPTV app",
    "Android IPTV",
    "HLS streaming",
    "live TV streaming",
    "IPTV app 2025",
    "best IPTV player",
    "stream live TV",
    "watch movies online",
    "TV series streaming",
    "Zebra IPTV",
    "IPTV playlist player",
    "multi-language subtitles",
    "adaptive streaming",
    "free streaming app",
    "IPTV for Apple TV",
  ],
  author: "Zebra IPTV Team",
  creator: "Zebra IPTV",
  publisher: "Zebra IPTV",
  applicationName: "Zebra IPTV",
  type: "website",
  locale: "en_US",
  alternateLocales: ["en_GB", "fr_FR", "de_DE", "es_ES", "ar_SA", "fa_IR"],
} as const;

export const SOCIAL_LINKS = {
  twitter: {
    handle: "@zebraiptv",
    url: "https://twitter.com/zebraiptv",
    cardType: "summary_large_image" as const,
  },
  facebook: "https://facebook.com/zebraiptv",
  instagram: "https://instagram.com/zebraiptv",
  youtube: "https://youtube.com/@zebraiptv",
  linkedin: "https://linkedin.com/company/zebraiptv",
  github: "https://github.com/zebraiptv",
} as const;

export const CONTACT_INFO = {
  email: "support@zebraiptv.com",
  supportEmail: "help@zebraiptv.com",
  salesEmail: "sales@zebraiptv.com",
} as const;

export const APP_FEATURES = [
  "Free IPTV Player",
  "M3U Playlist Support",
  "Xtream Codes API",
  "HLS Streaming",
  "Multi-Language Audio",
  "Smart Subtitles",
  "Continue Watching",
  "Favorites Collection",
  "Live TV Streaming",
  "Movies & Series",
  "Adaptive Quality",
  "Cross-Platform Support",
  "Apple TV Support",
  "iOS & Android Apps",
  "Smart Watch History",
  "Universal Search",
] as const;

export const FAQ_DATA = [
  {
    question: "What is Zebra IPTV?",
    answer:
      "Zebra IPTV is a modern, free IPTV player that allows you to stream live TV, movies, and series from M3U playlists and Xtream Codes API. It offers a premium viewing experience with features like continue watching, favorites, and adaptive streaming.",
  },
  {
    question: "Is Zebra IPTV free?",
    answer:
      "Yes! Zebra IPTV is completely free in our first release. You can download and use all features without any subscription or payment.",
  },
  {
    question: "Which platforms does Zebra IPTV support?",
    answer:
      "Zebra IPTV is available for Apple TV, iOS, and Android devices. You can stream your content seamlessly across all your devices.",
  },
  {
    question: "What content sources does Zebra IPTV support?",
    answer:
      "Zebra IPTV supports M3U playlists, Xtream Codes API, and ZIP files. You can easily add and manage multiple content sources in one place.",
  },
  {
    question: "Does Zebra IPTV support multiple languages?",
    answer:
      "Yes! Zebra IPTV supports multi-language audio tracks and smart subtitle management with automatic synchronization.",
  },
  {
    question: "Can I watch content offline?",
    answer:
      "Zebra IPTV is designed for streaming content. However, with our smart caching system, you'll experience minimal buffering and quick loading times.",
  },
] as const;

export const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://zebraiptv.com",
    },
  ],
} as const;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.svg`,
  description: SITE_CONFIG.description,
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_INFO.email,
    contactType: "Customer Support",
    availableLanguage: ["English", "French", "German", "Spanish", "Arabic", "Persian"],
  },
  sameAs: [
    SOCIAL_LINKS.twitter.url,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.youtube,
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.github,
  ],
} as const;

export const SOFTWARE_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_CONFIG.name,
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "IPTV Player",
  operatingSystem: ["iOS", "tvOS", "Android"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2547",
    bestRating: "5",
    worstRating: "1",
  },
  description: SITE_CONFIG.description,
  featureList: APP_FEATURES,
  screenshot: `${SITE_CONFIG.url}/images/screenshots/app-screenshot.jpg`,
  softwareVersion: "1.0.0",
  datePublished: "2025-01-01",
  creator: {
    "@type": "Organization",
    name: SITE_CONFIG.creator,
  },
  downloadUrl: `${SITE_CONFIG.url}/download`,
  installUrl: `${SITE_CONFIG.url}/download`,
} as const;

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.publisher,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
} as const;

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
} as const;

export const VIDEO_OBJECT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Zebra IPTV - Product Demo",
  description: "Watch how Zebra IPTV transforms your streaming experience",
  thumbnailUrl: `${SITE_CONFIG.url}/images/video-thumbnail.jpg`,
  uploadDate: "2025-01-01T00:00:00Z",
  contentUrl: `${SITE_CONFIG.url}/videos/demo.mp4`,
  embedUrl: `${SITE_CONFIG.url}/videos/embed/demo`,
} as const;

// Metadata for specific pages
export const PAGE_METADATA = {
  home: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    canonical: SITE_CONFIG.url,
  },
  features: {
    title: "Features - Zebra IPTV | Premium IPTV Player Features",
    description:
      "Discover all the powerful features of Zebra IPTV: M3U & Xtream Codes support, adaptive streaming, multi-language audio, smart subtitles, continue watching, and more.",
    canonical: `${SITE_CONFIG.url}/features`,
  },
  download: {
    title: "Download Zebra IPTV - Free IPTV Player for Apple TV & Mobile",
    description:
      "Download Zebra IPTV for free on Apple TV, iOS, and Android. Start streaming live TV, movies, and series with the best IPTV player available.",
    canonical: `${SITE_CONFIG.url}/download`,
  },
  about: {
    title: "About Zebra IPTV - Our Mission & Story",
    description:
      "Learn about Zebra IPTV, our mission to provide the best free IPTV streaming experience, and how we're revolutionizing entertainment streaming.",
    canonical: `${SITE_CONFIG.url}/about`,
  },
  contact: {
    title: "Contact Us - Zebra IPTV Support & Help",
    description:
      "Get in touch with Zebra IPTV team for support, feedback, or inquiries. We're here to help you with your IPTV streaming experience.",
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  faq: {
    title: "FAQ - Frequently Asked Questions | Zebra IPTV",
    description:
      "Find answers to frequently asked questions about Zebra IPTV. Learn about features, setup, troubleshooting, and more.",
    canonical: `${SITE_CONFIG.url}/faq`,
  },
} as const;

// Alt texts for images
export const IMAGE_ALT_TEXTS = {
  logo: "Zebra IPTV Logo - Modern IPTV Player",
  heroTv: "Zebra IPTV Player Interface on TV Screen showing streaming content",
  featuredImage: "Zebra IPTV Continue Watching Feature Interface",
  appStore: "Download Zebra IPTV on Apple App Store",
  googlePlay: "Get Zebra IPTV on Google Play Store",
  appleTV: "Available on Apple TV",
  screenshot: "Zebra IPTV App Screenshot showing",
  ogImage: "Zebra IPTV - Watch Smarter, Stream Freely",
} as const;

// Performance and Technical SEO
export const TECHNICAL_SEO = {
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
  verification: {
    google: "your-google-verification-code",
    bing: "your-bing-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "en-US": `${SITE_CONFIG.url}/en`,
      "fr-FR": `${SITE_CONFIG.url}/fr`,
      "de-DE": `${SITE_CONFIG.url}/de`,
      "es-ES": `${SITE_CONFIG.url}/es`,
      "ar-SA": `${SITE_CONFIG.url}/ar`,
      "fa-IR": `${SITE_CONFIG.url}/fa`,
    },
  },
} as const;

