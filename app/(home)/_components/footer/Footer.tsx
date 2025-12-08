"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

// Generate random positions once for particles
const particlePositions = Array.from({ length: 20 }, (_, i) => ({
  left: (i * 5.5 + (i % 3) * 10) % 100,
  top: (i * 7.3 + (i % 4) * 15) % 100,
  delay: (i * 0.5) % 5,
  duration: 5 + (i % 5) * 2,
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Platforms", href: "#platforms" },
      { name: "Pricing", href: "#pricing" },
      { name: "Download", href: "#download" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "FAQ", href: "#faq" },
      { name: "Status", href: "#status" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Licenses", href: "#licenses" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "mdi:twitter", href: "#twitter" },
    { name: "Facebook", icon: "mdi:facebook", href: "#facebook" },
    { name: "Instagram", icon: "mdi:instagram", href: "#instagram" },
    { name: "YouTube", icon: "mdi:youtube", href: "#youtube" },
    { name: "LinkedIn", icon: "mdi:linkedin", href: "#linkedin" },
  ];

  return (
    <footer
      className="relative w-full bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden"
      data-section="footer"
    >
      {/* Liquid Glass Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 pt-12 md:pt-20 pb-8">
        {/* Top Section - Logo and Description */}
        <div className="mb-8 md:mb-16 text-center" data-footer-header>
          <div className="inline-block mb-4 md:mb-6" data-footer-logo>
            <div className="relative group">
              {/* Liquid glass card for logo */}

              {/* Zebra IPTV Title + Logo */}
              <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
                {/* Zebra Logo */}
                <Image
                  src="/logo.svg"
                  alt="Zebra IPTV Logo"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <span className="text-2xl md:text-3xl text-primary font-bold bg-clip-text ">
                  Zebra IPTV
                </span>
              </div>
            </div>
          </div>

          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4"
            data-footer-description
          >
            Experience entertainment like never before. Stream your favorite
            content across all your devices with stunning quality and seamless
            performance.
          </p>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-3 md:gap-4 flex-wrap"
            data-footer-social
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group relative"
                aria-label={social.name}
                data-social-link
              >
                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-primary/50 overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <Icon
                    icon={social.icon}
                    className="relative z-10 text-xl md:text-2xl text-white/60 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Links Section - Glass Cards */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-16"
          data-footer-links
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div
              key={category}
              className="group"
              data-footer-category={category}
            >
              <div className="relative p-4 md:p-6 rounded-2xl md:rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-primary/30 h-full">
                {/* Liquid effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <h3 className="relative text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 md:mb-4">
                  {category}
                </h3>
                <ul className="relative space-y-2 md:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs md:text-sm text-muted-foreground hover:text-white transition-colors duration-300 inline-flex items-center group/link"
                        data-footer-link
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover/link:w-full transition-all duration-300" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section - Large Glass Card */}
        <div className="mb-8 md:mb-16" data-footer-newsletter>
          <div className="relative max-w-4xl mx-auto p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Floating particles - hidden on mobile to reduce animations */}
            <div className="absolute inset-0 overflow-hidden hidden md:block">
              {particlePositions.map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                  style={{
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                    animationDelay: `${pos.delay}s`,
                    animationDuration: `${pos.duration}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                Stay Updated
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Subscribe to our newsletter and be the first to know about new
                features, exclusive content, and special offers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto px-4">
                 <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-11 md:h-12 px-4 md:px-6 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/15 transition-all duration-300 text-sm md:text-base"
                  data-newsletter-input
                />
                <Button size="xl" className="h-11 md:h-12 text-sm md:text-base">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div
          className="relative pt-6 md:pt-8 border-t border-white/10"
         
        >
          <div className="flex flex-col items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground text-center">
            <p  >
              © {currentYear} Zebra. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center"  >
              <a
                href="#privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
              <a
                href="#cookies"
                className="hover:text-white transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
            <p className="flex items-center gap-2">
              Made with{" "}
              <Icon icon="mdi:heart" className="text-red-500 animate-pulse" />{" "}
              for entertainment
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
