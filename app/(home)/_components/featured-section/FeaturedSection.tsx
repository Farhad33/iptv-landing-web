"use client";
import React from "react";
import MoviesTile from "./_components/MoviesTile";

const features = [
  {
    title: "4K Ultra HD",
    description: "Watch your favorite content in stunning 4K quality",
    icon: "🎬",
  },
  {
    title: "Multi-Device Support",
    description: "Stream on all your devices seamlessly",
    icon: "📱",
  },
  {
    title: "Live TV",
    description: "Access to thousands of live TV channels",
    icon: "📺",
  },
  {
    title: "Cloud DVR",
    description: "Record and watch your shows anytime",
    icon: "☁️",
  },
];

const FeaturedSection = () => {
  return (
    <section className="w-full py-16 overflow-hidden relative" data-section="featured">
      <div className="w-full h-screen flex items-center justify-start relative">
        {/* Movies Tile - will move to the left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2" data-movies-wrapper>
          <div className="w-full h-full -rotate-12 translate-x-[120%] mr-auto">
            <MoviesTile />
          </div>
        </div>

        {/* Features - will appear one by one */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                data-feature
                className="opacity-0 bg-background/90 backdrop-blur-xl rounded-2xl p-8 border-2 border-primary/30 shadow-2xl"
                style={{
                  transform: "translateX(100px) scale(0.8) rotate(5deg)",
                }}
              >
                <div className="text-6xl mb-4 transform transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
