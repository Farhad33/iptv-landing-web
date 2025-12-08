"use client";
import React from "react";
import { Icon } from "@iconify/react";

const platforms = [
  {
    name: "Apple TV",
    icon: "mdi:apple",
    description: "Stream on Apple TV 14.0 and later",
    gradient: "linear-gradient(135deg, #232526 0%, #4b6cb7 100%)",
    available: true,
  },
  {
    name: "tvOS",
    icon: "mdi:apple",
    description: "Apple TV operating system",
    gradient: "linear-gradient(135deg, #232526 0%, #4b6cb7 100%)",
    available: true,
  },
  {
    name: "Tizen TV",
    icon: "simple-icons:samsung",
    description: "Samsung Smart TVs",
    gradient: "linear-gradient(135deg, #142850 0%, #00909e 100%)",
    available: false,
  },
  {
    name: "WebOS TV",
    icon: "simple-icons:webos",
    description: "LG Smart TVs",
    gradient: "linear-gradient(135deg, #540d6e 0%, #ee4266 100%)",
    available: false,
  },
  {
    name: "Android",
    icon: "mdi:android",
    description: "Android phones & tablets",
    gradient: "linear-gradient(135deg, #3ddc84 0%, #00c853 100%)",
    available: false,
  },
  {
    name: "iOS",
    icon: "streamline-logos:apple-ios-logo-3",
    description: "iPhone devices",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
    available: false,
  },
  {
    name: "iPad",
    icon: "streamline-plump:ios-ipados",
    description: "iPad tablets",
    gradient: "linear-gradient(135deg, #455aa4 0%, #56b6e0 100%)",
    available: false,
  },
  {
    name: "Web",
    icon: "mdi:web",
    description: "Any modern browser",
    gradient: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)",
    available: false,
  },
  {
    name: "macOS",
    icon: "mdi:apple",
    description: "Mac computers",
    gradient: "linear-gradient(135deg, #232526 0%, #4b6cb7 100%)",
    available: false,
  },
  {
    name: "Windows",
    icon: "mdi:windows",
    description: "Windows PCs",
    gradient: "linear-gradient(135deg, #083360 0%, #389bee 100%)",
    available: false,
  },
];

interface PlatformCardProps {
  platform: {
    name: string;
    icon: string;
    description: string;
    gradient: string;
    available: boolean;
  };
  index: number;
}

const PlatformCard = ({ platform, index }: PlatformCardProps) => {
  return (
    <div
      className="group relative platform-card"
      data-platform-card
      data-platform-index={index}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-[280px] rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
        style={{
          background: platform.available
            ? platform.gradient
            : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        }}
      >
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: platform.gradient,
            opacity: platform.available ? 0.3 : 0.1,
          }}
        />

        {/* Icon */}
        <div className="relative z-10 mb-4 platform-icon" data-platform-icon>
          <Icon
            icon={platform.icon}
            className={`text-7xl ${
              platform.available ? "text-white" : "text-white/40"
            }`}
          />
        </div>

        {/* Platform name */}
        <h3
          className={`text-2xl font-bold mb-2 relative z-10 platform-name ${
            platform.available ? "text-white" : "text-white/60"
          }`}
          data-platform-name
        >
          {platform.name}
        </h3>

        {/* Description */}
        <p
          className={`text-sm text-center relative z-10 platform-description ${
            platform.available ? "text-white/80" : "text-white/40"
          }`}
          data-platform-description
        >
          {platform.description}
        </p>

        {/* Coming Soon Badge */}
        {!platform.available && (
          <div
            className="absolute top-4 right-4 z-20 platform-badge"
            data-platform-badge
          >
            <div className="relative">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-sm border border-yellow-400/50 shadow-lg">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Available Badge */}
        {platform.available && (
          <div
            className="absolute top-4 right-4 z-20 platform-badge"
            data-platform-badge
          >
            <div className="relative">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm border border-green-400/50 shadow-lg">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Available Now
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PlatformsSection = () => {
  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden"
      data-section="platforms"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-platforms-header>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" data-platforms-title>
            Available on{" "}
            <span className="text-primary inline-block">All Your Devices</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-platforms-subtitle
          >
            Watch Zebra anywhere, anytime. Stream seamlessly across all your
            favorite devices.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16" data-platforms-grid>
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              platform={platform}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center" data-platforms-cta>
          <p className="text-lg text-muted-foreground mb-6">
            More platforms coming soon! Stay tuned for updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
