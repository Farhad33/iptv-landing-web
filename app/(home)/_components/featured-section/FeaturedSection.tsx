"use client";

import CallOutDot from "@/components/shared/icons/callout/CallOutDot";
import { FEATURES } from "@/lib/constants";

const FeaturedSection = () => {
  const callOutDotPositionForVerctor = (
    positionX: number,
    positionY: number
  ) => {
    return `translate(${positionX - 610}, ${positionY - 80})`;
  };
  return (
    <section
      className="w-full grid grid-cols-5 py-16 overflow-hidden  container mx-auto"
      data-section="featured"
    >
      <div className="col-span-2">
        <h2 className="text-5xl font-extrabold">What is Zebra?</h2>
        <p className="text-lg text-muted-foreground my-5">
          ZEBRA is a next-generation IPTV player that gives you a fast, clean,
          and intuitive way to watch your content — without ads, clutter, or
          complications. You bring your own playlist. We provide the experience.
        </p>
      </div>
      <div className="col-span-3 relative overflow-visible">
        {FEATURES.map((feature) => {
          if (!feature.calloutDotPosition?.x || !feature.calloutDotPosition?.y)
            return null;
          const callOutDotPosition = callOutDotPositionForVerctor(
            feature.calloutDotPosition?.x,
            feature.calloutDotPosition?.y
          );

          return (
            <div key={feature.category}>
              <svg
                className="relative w-full h-auto"
                viewBox="-200 0 1400 600"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                style={{ overflow: "visible" }}
              >
                <image
                  href={feature.image}
                  x="0"
                  y="0"
                  width="1200"
                  height="600"
                  preserveAspectRatio="xMidYMid slice"
                />

                {/* Line from CallOutDot to outside the image */}
                <g transform={callOutDotPosition}>
                  <path
                    d="M500.5 82.5L400 20H0"
                    stroke="white"
                    fill="none"
                    strokeWidth="3"
                    strokeDasharray={619}
                    strokeDashoffset={0}
                  />
                </g>

                <CallOutDot
                  positionX={feature.calloutDotPosition?.x}
                  positionY={feature.calloutDotPosition?.y}
                />
              </svg>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedSection;
