// Navigation and UI Constants for Zebra IPTV

export const NAVIGATION_LINKS = [
  {
    name: "Home",
    href: "/",
    ariaLabel: "Navigate to home page",
  },
  {
    name: "Features",
    href: "#features",
    ariaLabel: "View Zebra IPTV features",
  },
  {
    name: "Platforms",
    href: "#platforms",
    ariaLabel: "See supported platforms",
  },
  {
    name: "About",
    href: "/about",
    ariaLabel: "Learn about Zebra IPTV",
  },
  {
    name: "Contact",
    href: "/contact",
    ariaLabel: "Contact Zebra IPTV support",
  },
] as const;

export const FOOTER_LINKS = {
  product: [
    { name: "Features", href: "#features", ariaLabel: "View all features" },
    { name: "Platforms", href: "#platforms", ariaLabel: "Supported platforms" },
    { name: "Pricing", href: "#pricing", ariaLabel: "View pricing plans" },
    { name: "Download", href: "#download", ariaLabel: "Download Zebra IPTV" },
  ],
  company: [
    { name: "About Us", href: "/about", ariaLabel: "About Zebra IPTV" },
    { name: "Careers", href: "/careers", ariaLabel: "Career opportunities" },
    { name: "Press", href: "/press", ariaLabel: "Press and media" },
    { name: "Contact", href: "/contact", ariaLabel: "Contact us" },
  ],
  support: [
    { name: "Help Center", href: "/help", ariaLabel: "Help center" },
    { name: "Community", href: "/community", ariaLabel: "Join our community" },
    { name: "FAQ", href: "/faq", ariaLabel: "Frequently asked questions" },
    { name: "Status", href: "/status", ariaLabel: "System status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy", ariaLabel: "Privacy policy" },
    { name: "Terms of Service", href: "/terms", ariaLabel: "Terms of service" },
    { name: "Cookie Policy", href: "/cookies", ariaLabel: "Cookie policy" },
    { name: "Licenses", href: "/licenses", ariaLabel: "Software licenses" },
  ],
} as const;

export const SOCIAL_MEDIA = [
  {
    name: "Twitter",
    icon: "mdi:twitter",
    href: "https://twitter.com/zebraiptv",
    ariaLabel: "Follow Zebra IPTV on Twitter",
  },
  {
    name: "Facebook",
    icon: "mdi:facebook",
    href: "https://facebook.com/zebraiptv",
    ariaLabel: "Like Zebra IPTV on Facebook",
  },
  {
    name: "Instagram",
    icon: "mdi:instagram",
    href: "https://instagram.com/zebraiptv",
    ariaLabel: "Follow Zebra IPTV on Instagram",
  },
  {
    name: "YouTube",
    icon: "mdi:youtube",
    href: "https://youtube.com/@zebraiptv",
    ariaLabel: "Subscribe to Zebra IPTV on YouTube",
  },
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    href: "https://linkedin.com/company/zebraiptv",
    ariaLabel: "Connect with Zebra IPTV on LinkedIn",
  },
] as const;

export const CTA_BUTTONS = {
  primary: {
    text: "Download for Apple TV",
    href: "/download/appletv",
    ariaLabel: "Download Zebra IPTV for Apple TV",
  },
  secondary: {
    text: "Learn More",
    href: "#features",
    ariaLabel: "Learn more about Zebra IPTV features",
  },
  login: {
    text: "Login",
    href: "/login",
    ariaLabel: "Login to your account",
  },
  signup: {
    text: "Sign Up",
    href: "/signup",
    ariaLabel: "Create a new account",
  },
} as const;

