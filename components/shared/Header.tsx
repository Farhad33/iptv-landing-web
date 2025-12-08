"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-full flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex gap-x-2 items-center h-full">
            <Image
              className="w-8 h-8 md:w-10 md:h-10"
              src="/logo.svg"
              alt="zebra iptv logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl md:text-2xl font-bold">Zebra IPTV</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center h-full items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 h-full">
          <Button size={"lg"} variant="default">
            <Link href="/login">Login</Link>
          </Button>
          <Button size={"lg"} variant="outline">
            <Link href="/login">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Icon
            icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
            className="text-2xl"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <Button size={"lg"} variant="default" className="w-full">
                <Link href="/login">Login</Link>
              </Button>
              <Button size={"lg"} variant="outline" className="w-full">
                <Link href="/login">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
