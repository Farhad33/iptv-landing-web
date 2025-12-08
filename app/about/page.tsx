import { Metadata } from "next";
import { PAGE_METADATA, SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: PAGE_METADATA.about.title,
  description: PAGE_METADATA.about.description,
  alternates: {
    canonical: PAGE_METADATA.about.canonical,
  },
};

const stats = [
  { value: "100K+", label: "Active Users", description: "Growing community worldwide" },
  { value: "4.8/5", label: "User Rating", description: "Based on 2,500+ reviews" },
  { value: "99.9%", label: "Uptime", description: "Reliable streaming" },
  { value: "24/7", label: "Support", description: "Always here to help" },
];

const values = [
  {
    icon: "mdi:heart",
    title: "User-Centric",
    description: "We put our users first, designing every feature with your needs in mind.",
  },
  {
    icon: "mdi:lightbulb",
    title: "Innovation",
    description: "Constantly pushing boundaries to bring you the best streaming experience.",
  },
  {
    icon: "mdi:lock",
    title: "Privacy",
    description: "Your data and privacy are our top priorities. We never compromise.",
  },
  {
    icon: "mdi:rocket",
    title: "Performance",
    description: "Optimized for speed and reliability on every device you own.",
  },
];

const team = [
  {
    name: "Development Team",
    role: "Building the Future",
    description: "Expert developers crafting a seamless IPTV experience.",
  },
  {
    name: "Design Team",
    role: "Creating Beauty",
    description: "Designers focused on intuitive and elegant interfaces.",
  },
  {
    name: "Support Team",
    role: "Helping You",
    description: "Dedicated support staff available around the clock.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              About <span className="text-primary">{SITE_CONFIG.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We're on a mission to revolutionize how you experience IPTV streaming.
              Built with passion, designed for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-8">
              At Zebra IPTV, we believe streaming should be simple, beautiful, and accessible
              to everyone. We're building a platform that combines cutting-edge technology
              with an intuitive design to deliver the ultimate IPTV experience.
            </p>
            <p className="text-base md:text-lg text-muted-foreground text-center">
              Our goal is to provide a free, powerful IPTV player that works seamlessly across
              all your devices, supporting multiple content sources and formats while maintaining
              the highest standards of performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-4xl text-primary mb-4">
                  <span className="iconify" data-icon={value.icon}></span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Zebra IPTV?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying the best IPTV streaming experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="/download">Download Now</Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

