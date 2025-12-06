"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import { Icon } from "@iconify/react";

const platforms = [
  {
    name: "AppleTV",
    icon: <span>
      <Icon icon="mdi:apple" fontSize="3rem" />
      
    </span>,
    description: "Supports AppleTV 14.0 and later",
    gradient: "linear-gradient(135deg, #232526 0%, #4b6cb7 100%)",
  },
  {
    name: "Windows",
    icon: <Icon icon="mdi:windows" fontSize="3rem" />,
    description: "Supports Windows 10 and later",
    gradient: "linear-gradient(135deg, #083360 0%, #389bee 100%)",
  },
  {
    name: "Mac",
    icon: <Icon icon="mdi:apple" fontSize="3rem" />,
    description: "Supports macOS 11.0 and later",
    gradient: "linear-gradient(135deg, #232526 0%, #4b6cb7 100%)",
  },
  {
    name: "iPad",
    icon: <Icon icon="streamline-plump:ios-ipados" fontSize="3rem" />,
    description: "Optimized for iPadOS",
    gradient: "linear-gradient(135deg, #455aa4 0%, #56b6e0 100%)",
  },
  {
    name: "iOS",
    icon: <Icon icon="streamline-logos:apple-ios-logo-3" fontSize="3rem" />,
    description: "iPhone support",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
  },
  {
    name: "Android",
    icon: <Icon icon="mdi:android" fontSize="3rem" />,
    description: "All Android devices",
    gradient: "linear-gradient(135deg, #3ddc84 0%, #00c853 100%)",
  },
  {
    name: "Web",
    icon: <Icon icon="mdi:web" fontSize="3rem" />,
    description: "Watch on any browser",
    gradient: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)",
  },
  {
    name: "WebOS",
    icon: <Icon icon="simple-icons:webos" fontSize="3rem" />,
    description: "Supported on LG WebOS TVs",
    gradient: "linear-gradient(135deg, #540d6e 0%, #ee4266 100%)",
  },
  {
    name: "Chrome OS",
    icon: <Icon icon="mdi:chrome" fontSize="3rem" />,
    description: "Chromebooks supported",
    gradient: "linear-gradient(135deg, #4285f4 0%, #34a853 100%)",
  },
  {
    name: "Tizen",
    icon: <Icon icon="simple-icons:samsung" fontSize="3rem" />,
    description: "Samsung Tizen Smart TVs",
    gradient: "linear-gradient(135deg, #142850 0%, #00909e 100%)",
  },
];

const GalssCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-[200px] h-[200px] rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none animate-[liquidMove_5s_infinite_linear]" />
      {children}
    </div>
  );
};

const PlatformsSection = () => {
  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-background to-background/50"
      data-section="platforms"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Available on <span className="text-primary">All Your Devices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch Zebra anywhere, anytime. Download now and start streaming on
            your favorite platform.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              data-platform
              className="w-full h-full flex items-center justify-center"
            >
              <GalssCard>
                <div className="text-6xl mb-4">{platform.icon}</div>
              </GalssCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
