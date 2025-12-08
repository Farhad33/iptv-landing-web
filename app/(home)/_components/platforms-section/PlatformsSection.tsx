"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { PLATFORM_DETAILS } from "@/lib/constants";

interface PlatformCardProps {
  platform: {
    name: string;
    icon: string;
    description: string;
    available: boolean;
  };
  index: number;
}

const PlatformCard = ({ platform, index }: PlatformCardProps) => {
  return (
    <div className="group relative platform-card" data-platform-card>
      <div
        className="relative w-full h-[240px] md:h-[280px] rounded-2xl md:rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-4 md:p-6 transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
        style={{
          background: platform.available
            ? "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        }}
      >
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            opacity: platform.available ? 0.3 : 0.1,
          }}
        />

        {/* Icon */}
        <div className="relative z-10 mb-3 md:mb-4 platform-icon">
          <Icon
            icon={platform.icon}
            className={`text-5xl md:text-7xl ${
              platform.available ? "text-white" : "text-white/40"
            }`}
          />
        </div>

        {/* Platform name */}
        <h3
          className={`text-lg md:text-2xl font-bold mb-1 md:mb-2 relative z-10 platform-name ${
            platform.available ? "text-white" : "text-white/60"
          }`}
          data-platform-name
        >
          {platform.name}
        </h3>

        {/* Description */}
        <p
          className={`text-xs md:text-sm text-center relative z-10 platform-description ${
            platform.available ? "text-white/80" : "text-white/40"
          }`}
          data-platform-description
        >
          {platform.description}
        </p>

        {/* Coming Soon Badge */}
        {!platform.available && (
          <div className="absolute top-4 right-4 z-20 platform-badge">
            <div className="relative">
              <div className="flex items-center justify-center py-px mt-px px-2 rounded-full  bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-sm border border-yellow-400/50 shadow-lg">
                <span className="text-xs   text-white  ">Coming Soon</span>
              </div>
            </div>
          </div>
        )}

        {/* Available Badge */}
        {platform.available && (
          <div className="absolute top-4 right-4 z-20 platform-badge">
            <div className="relative">
              <div className="  flex items-center justify-center py-px mt-px px-2 rounded-full bg-linear-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm border border-green-400/50 shadow-lg">
                <span className="text-xs   text-white  ">Available</span>
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
      className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden"
      data-section="platforms"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16" data-platforms-header>
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 px-4"
            data-platforms-title
          >
            Available on{" "}
            <span className="text-primary inline-block">All Your Devices</span>
          </h2>
          <p
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
            data-platforms-subtitle
          >
            Watch Zebra anywhere, anytime. Stream seamlessly across all your
            favorite devices.
          </p>
        </div>

        {/* Platforms Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16"
          data-platforms-grid
        >
          {PLATFORM_DETAILS.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              platform={{
                name: platform.name,
                icon: platform.icon,
                description: platform.description,

                available: platform.available,
              }}
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
