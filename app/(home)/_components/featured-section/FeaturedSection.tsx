"use client";

import { FEATURES } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FeaturedSection = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const activeFeatureRef = useRef<number>(0);

  // Expose setActiveFeature to window for GSAP to control
  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).setFeaturedActiveFeature = (index: number) => {
        setActiveFeature(index);
        activeFeatureRef.current = index;
      };
    }
    return () => {
      if (typeof window !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (window as any).setFeaturedActiveFeature;
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full grid grid-cols-5 py-16  container mx-auto"
      data-section="featured"
    >
      <div className="col-span-2" data-featured-content>
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

            <div className="relative space-y-0">
              {/* Vertical connecting line with animation */}
              <motion.div 
                className="absolute left-4 top-0 w-[2px] bg-primary origin-top"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ 
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              />

              {FEATURES[activeFeature].features.map((feature, index) => (
                <div key={feature.title} className="relative pb-12 last:pb-0">
                  {/* Dot on vertical line */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: 0.3 + index * 0.3,
                      ease: "backOut"
                    }}
                    className="absolute left-px top-0 flex items-center justify-center"
                  >
                    <span className="flex w-8 h-8 items-center justify-center border border-primary rounded-full bg-background">
                      <span className="flex w-6 h-6 items-center justify-center border border-primary rounded-full">
                        <span className="block w-2 h-2 bg-primary rounded-full"></span>
                      </span>
                    </span>
                  </motion.div>

                  {/* Horizontal line from dot to title with width animation */}
                  <motion.div 
                    className="absolute opacity-0! left-8 top-3 h-[2px] bg-primary origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: "2rem" }}
                    transition={{ 
                      duration: 0.4,
                      delay: 0.5 + index * 0.3,
                      ease: "easeOut"
                    }}
                  />

                  {/* Title */}
                  <motion.div 
                    className="text-lg font-bold text-white ml-10"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3,
                      delay: 0.7 + index * 0.3
                    }}
                  >
                    {feature.title}
                  </motion.div>

                  {/* Description container */}
                  <div className="ml-20 mt-10 relative">
                    {/* Horizontal line to description with width animation */}
                    <motion.div 
                      className="absolute -left-16 top-5 h-[2px] rounded-full bg-primary origin-left"
                      initial={{ width: 0 }}
                      animate={{ width: "4rem" }}
                      transition={{ 
                        duration: 0.4,
                        delay: 0.9 + index * 0.3,
                        ease: "easeOut"
                      }}
                    />

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-muted-foreground ml-0 pl-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3,
                        delay: 1.1 + index * 0.3
                      }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              ))}
            </div>
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
              const angle = offset * 1; // Angle in degrees for vertical carousel
              const radius = 200; // Radius of the carousel arc

              // Calculate vertical position for straight vertical path
              // Cards will simply stack vertically by offset; no arc
              const yOffset = offset * 100; // 80px per card spacing vertically
              const xOffset = 0;

              // Scale based on distance and position in arc
              // Cards further from center are smaller
              const scale = isActive ? 1 : Math.max(0.75, 1 - distance * 0.1);

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
                    y: yOffset,
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
                  onClick={() => {
                    setActiveFeature(index);
                    activeFeatureRef.current = index;
                  }}
                  className={cn("absolute w-full cursor-pointer")}
                  data-feature-index={index}
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
                          y: yOffset - 8,
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
