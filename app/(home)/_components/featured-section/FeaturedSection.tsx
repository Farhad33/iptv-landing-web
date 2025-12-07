"use client";

import { FEATURES } from "@/lib/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FeaturedSection = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <section
      className="w-full grid grid-cols-5 py-16 overflow-hidden container mx-auto"
      data-section="featured"
    >
      <div className="col-span-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-5xl font-extrabold">
              {FEATURES[activeFeature].category}
            </h1>
            <p className="text-xl text-muted-foreground my-5">
              {FEATURES[activeFeature].description}
            </p>

            <ul className="list-disc list-inside">
              {FEATURES[activeFeature].features.map((feature) => (
                <li
                  key={feature.title}
                  className="text-lg text-muted-foreground"
                >
                  {feature.title}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Features Items - Stacked Card Menu with Carousel Effect */}
      <div className="col-span-3 relative overflow-visible flex flex-col items-center justify-center min-h-[600px]">
        <div className="relative w-full max-w-xl ml-auto h-[600px] flex items-center justify-center">
          <div
            className="relative w-full"
            style={{
              perspective: "1500px",
              perspectiveOrigin: "center center",
            }}
          >
            {FEATURES.map((feature, index) => {
              const isActive = activeFeature === index;
              const offset = index - activeFeature;
              const distance = Math.abs(offset);

              // Vertical carousel wheel effect - cards rotate in a vertical arc
              // Angle for vertical arc (0° = center, positive = above, negative = below)
              const angle = offset *50; // Angle in degrees for vertical carousel
              const radius = 180; // Radius of the carousel arc

              // Calculate position in vertical arc
              // For vertical carousel, cards above center go up (negative Y), below go down (positive Y)
              // angle is negative for cards above, positive for cards below
              const yOffset = Math.sin((angle * Math.PI) / 180) * radius;
              const xOffset =
                (1 - Math.cos((angle * Math.PI) / 180)) * radius * 0.1; // Horizontal offset for depth

              // Scale based on distance and position in arc
              // Cards further from center are smaller
              const scale = isActive
                ? 1
                : Math.max(
                    0.75,
                    1 -
                      distance * 0.1 -
                      Math.abs(Math.sin((angle * Math.PI) / 180)) * 0.08
                  );

              // Opacity based on distance
              const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.18);

              // Rotation effects for 3D vertical carousel
              const rotateX = -angle * 0.8; // Rotate around X axis for vertical carousel effect

              const zIndex = FEATURES.length - distance;

              return (
                <motion.div
                  key={feature.category}
                  initial={false}
                  animate={{
                    x: xOffset,
                    y: yOffset - 50,
                    scale: scale,
                    opacity: opacity,
                    rotateX: rotateX,
                    rotateY: 0,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.9,
                  }}
                  onClick={() => setActiveFeature(index)}
                  className={cn("absolute w-full cursor-pointer")}
                  style={{
                    top: "0%",
                    left: "0%",
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={
                    isActive
                      ? {}
                      : {
                          scale: scale + 0.03,
                          y: yOffset - 8 - 50,
                          rotateX: rotateX + (offset > 0 ? -2 : 2),
                        }
                  }
                  whileTap={{ scale: scale * 0.92 }}
                >
                  <motion.div
                    className={`w-full h-28 border rounded-2xl p-6 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-gray-200 text-black!"
                        : "bg-gray-400/10 border-gray-200/10 backdrop-blur-sm shadow-md"
                    }`}
                    animate={{
                      boxShadow: isActive
                        ? "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                        : "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.h3
                      className={`text-2xl font-bold text-center ${
                        isActive ? "text-black!" : "text-gray-400"
                      }`}
                      animate={{
                        color: isActive ? "#ffffff" : "#9ca3af",
                        scale: isActive ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.category}
                    </motion.h3>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
