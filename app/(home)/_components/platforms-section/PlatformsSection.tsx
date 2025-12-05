"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Apple TV",
    icon: "🍎",
    description: "Available on tvOS 14.0 and later",
    gradient: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
  },
  {
    name: "Android TV",
    icon: "🤖",
    description: "Compatible with Android TV 8.0+",
    gradient: "linear-gradient(135deg, #064e3b 0%, #047857 100%)",
  },
  {
    name: "Fire TV",
    icon: "🔥",
    description: "Stream on all Fire TV devices",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)",
  },
  {
    name: "iOS",
    icon: "📱",
    description: "iPhone and iPad support",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
  },
  {
    name: "Android",
    icon: "📲",
    description: "All Android devices",
    gradient: "linear-gradient(135deg, #581c87 0%, #7c3aed 100%)",
  },
  {
    name: "Web",
    icon: "🌐",
    description: "Watch on any browser",
    gradient: "linear-gradient(135deg, #312e81 0%, #4f46e5 100%)",
  },
];

const PlatformsSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-background to-background/50" data-section="platforms">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Available on <span className="text-primary">All Your Devices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch Zebra anywhere, anytime. Download now and start streaming on your favorite platform.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              data-platform
              className="group relative overflow-hidden rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                background: platform.gradient,
              }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-6xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {platform.name}
                </h3>
                <p className="text-white/70 mb-4">{platform.description}</p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-primary/10 backdrop-blur-lg rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to start streaming?</h3>
            <p className="text-muted-foreground mb-6">
              Download Zebra now and enjoy unlimited entertainment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                View All Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;

