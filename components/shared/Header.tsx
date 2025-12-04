import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full  ">
      <div className="container mx-auto px-4 h-full flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex gap-x-2 items-center h-full">
            <Image
              className="w-10 h-10"
              src="/logo.svg"
              alt="zebra iptv logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl font-bold">Zebra IPTV</span>
          </Link>
        </div>
        {/* Center: Navigation */}
        <nav className="flex-1 flex justify-center h-full items-center">
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
        {/* Right: Actions (e.g. placeholder for now) */}
        <div className="flex items-center space-x-4 h-full">
          <Button size={"lg"} variant="default">
            <Link href="/login">Login</Link>
          </Button>
          <Button size={"lg"} variant="outline">
            <Link href="/login">sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
