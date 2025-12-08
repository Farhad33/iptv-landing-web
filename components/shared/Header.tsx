"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { SITE_CONFIG, NAVIGATION_LINKS, CTA_BUTTONS, IMAGE_ALT_TEXTS } from "@/lib/constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-full flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="flex items-center h-full">
          <Link 
            href="/" 
            className="flex gap-x-2 items-center h-full"
            aria-label={`${SITE_CONFIG.name} - Go to homepage`}
          >
            <Image
              className="w-8 h-8 md:w-10 md:h-10"
              src="/logo.svg"
              alt={IMAGE_ALT_TEXTS.logo}
              width={40}
              height={40}
              priority
            />
            <span className="text-xl md:text-2xl font-bold">{SITE_CONFIG.name}</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex flex-1 justify-center h-full items-center"
          aria-label="Main navigation"
        >
          <ul className="flex space-x-6">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="hover:underline transition-all duration-200 hover:text-primary"
                  aria-label={link.ariaLabel}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 h-full">
          <Button size={"lg"} variant="default" asChild>
            <Link href={CTA_BUTTONS.login.href} aria-label={CTA_BUTTONS.login.ariaLabel}>
              {CTA_BUTTONS.login.text}
            </Link>
          </Button>
          <Button size={"lg"} variant="outline" asChild>
            <Link href={CTA_BUTTONS.signup.href} aria-label={CTA_BUTTONS.signup.ariaLabel}>
              {CTA_BUTTONS.signup.text}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Icon
            icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
            className="text-2xl"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
        >
          <nav 
            className="container mx-auto px-4 py-4"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 hover:underline transition-all duration-200 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={link.ariaLabel}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <Button size={"lg"} variant="default" className="w-full" asChild>
                <Link href={CTA_BUTTONS.login.href} aria-label={CTA_BUTTONS.login.ariaLabel}>
                  {CTA_BUTTONS.login.text}
                </Link>
              </Button>
              <Button size={"lg"} variant="outline" className="w-full" asChild>
                <Link href={CTA_BUTTONS.signup.href} aria-label={CTA_BUTTONS.signup.ariaLabel}>
                  {CTA_BUTTONS.signup.text}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
