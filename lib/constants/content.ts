// Content Constants for Zebra IPTV Landing Page

export const HERO_CONTENT = {
  preTitle: "Welcome to",
  title: "Zebra",
  titleHighlight: "IPTV",
  subtitle: "Watch Smarter. Stream Freely.",
  description:
    "A modern IPTV player designed for clarity, speed, and a premium TV experience — completely free in our first release. Stream your favorite channels, movies, and shows anywhere, anytime.",
  features: [
    "Free IPTV Player",
    "M3U & Xtream Codes Support",
    "HLS Streaming",
    "Multi-Platform Support",
  ],
} as const;

 
export const STATS = [
  {
    value: "100K+",
    label: "Active Users",
    description: "Growing community worldwide",
  },
  {
    value: "4.8/5",
    label: "User Rating",
    description: "Based on 2,500+ reviews",
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable streaming experience",
  },
  {
    value: "24/7",
    label: "Support",
    description: "We're always here to help",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "John Smith",
    role: "Tech Enthusiast",
    avatar: "/images/avatars/user1.jpg",
    rating: 5,
    comment:
      "Zebra IPTV is hands down the best IPTV player I've used. The interface is clean, fast, and the streaming quality is exceptional!",
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Content Creator",
    avatar: "/images/avatars/user2.jpg",
    rating: 5,
    comment:
      "I love how easy it is to manage multiple playlists. The continue watching feature is a game-changer. Highly recommended!",
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    role: "Movie Buff",
    avatar: "/images/avatars/user3.jpg",
    rating: 5,
    comment:
      "The multi-language support and subtitle management are perfect for international content. Great app!",
  },
] as const;

export const NEWSLETTER = {
  title: "Stay Updated",
  description:
    "Subscribe to our newsletter and be the first to know about new features, exclusive content, and special offers.",
  placeholder: "Enter your email",
  buttonText: "Subscribe",
  privacyNote: "We respect your privacy. Unsubscribe at any time.",
} as const;

export const FOOTER_CONTENT = {
  companyName: "Zebra IPTV",
  tagline: "Watch Smarter. Stream Freely.",
  description:
    "Experience entertainment like never before. Stream your favorite content across all your devices with stunning quality and seamless performance.",
  copyright: "Zebra. All rights reserved.",
  madeWith: "Made with",
  madeWithEmoji: "❤️",
  madeWithText: "for entertainment",
} as const;

export const DOWNLOAD_PLATFORMS = [
  {
    platform: "Apple TV",
    icon: "mdi:apple",
    title: "Download on",
    subtitle: "App Store",
    url: "/download/appletv",
    badge: "/images/badges/app-store.svg",
    qrCode: "/images/qr/appletv-qr.png",
  },
  {
    platform: "iOS",
    icon: "mdi:apple-ios",
    title: "Download on the",
    subtitle: "App Store",
    url: "/download/ios",
    badge: "/images/badges/app-store.svg",
    qrCode: "/images/qr/ios-qr.png",
  },
  {
    platform: "Android",
    icon: "mdi:android",
    title: "GET IT ON",
    subtitle: "Google Play",
    url: "/download/android",
    badge: "/images/badges/google-play.svg",
    qrCode: "/images/qr/android-qr.png",
  },
] as const;

export const APP_INFO = {
  version: "1.0.0",
  lastUpdate: "2025-01-01",
  size: {
    ios: "45 MB",
    android: "38 MB",
    appleTV: "52 MB",
  },
  requirements: {
    ios: "iOS 14.0 or later",
    android: "Android 6.0 or later",
    appleTV: "tvOS 14.0 or later",
  },
  languages: [
    "English",
    "French",
    "German",
    "Spanish",
    "Arabic",
    "Persian",
    "Turkish",
    "Italian",
    "Portuguese",
    "Russian",
  ],
  categories: ["Entertainment", "Utilities", "Lifestyle"],
  contentRating: "12+",
} as const;

export const HIGHLIGHT_FEATURES = [
  {
    id: 1,
    icon: "mdi:playlist-play",
    title: "M3U & Xtream Codes",
    description: "Support for multiple content sources in one place",
    color: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    icon: "mdi:quality-high",
    title: "Adaptive Streaming",
    description: "Automatically adjusts quality based on your connection",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    icon: "mdi:history",
    title: "Watch History",
    description: "Never lose track of what you've watched",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 4,
    icon: "mdi:play-pause",
    title: "Continue Watching",
    description: "Pick up right where you left off",
    color: "from-teal-500 to-green-500",
  },
  {
    id: 5,
    icon: "mdi:translate",
    title: "Multi-Language",
    description: "Audio tracks and subtitles in multiple languages",
    color: "from-green-500 to-yellow-500",
  },
  {
    id: 6,
    icon: "mdi:magnify",
    title: "Universal Search",
    description: "Find anything instantly across all content",
    color: "from-yellow-500 to-orange-500",
  },
] as const;

export const COMPARISON_TABLE = {
  title: "Why Choose Zebra IPTV?",
  subtitle: "See how we compare to other IPTV players",
  features: [
    {
      name: "M3U Support",
      zebra: true,
      competitor1: true,
      competitor2: true,
    },
    {
      name: "Xtream Codes API",
      zebra: true,
      competitor1: true,
      competitor2: false,
    },
    {
      name: "HLS Streaming",
      zebra: true,
      competitor1: false,
      competitor2: true,
    },
    {
      name: "Continue Watching",
      zebra: true,
      competitor1: false,
      competitor2: false,
    },
    {
      name: "Multi-Language Audio",
      zebra: true,
      competitor1: true,
      competitor2: false,
    },
    {
      name: "Smart Subtitles",
      zebra: true,
      competitor1: false,
      competitor2: false,
    },
    {
      name: "Adaptive Quality",
      zebra: true,
      competitor1: false,
      competitor2: true,
    },
    {
      name: "Free Forever",
      zebra: true,
      competitor1: false,
      competitor2: false,
    },
  ],
  competitors: ["Zebra IPTV", "Competitor A", "Competitor B"],
} as const;

