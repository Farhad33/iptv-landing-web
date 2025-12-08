"use client";

import { FEATURES } from "@/lib/constants";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeaturesSubDetails from "./_components/FeaturesSubDetails";

const FeaturedSectionMobile = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Scroll active tab into view
  useEffect(() => {
    const activeTab = tabRefs.current[activeFeature];
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeFeature]);

  return (
    <section className="w-full py-8 px-4" data-section="featured">
      <div className="space-y-6">
        {/* Tabs - Horizontally scrollable */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            <div className="flex gap-2 min-w-max">
              {FEATURES.map((feature, index) => {
                const isActive = activeFeature === index;
                return (
                  <button
                    key={feature.category}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    onClick={() => setActiveFeature(index)}
                    className={`px-4 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-white/5 text-muted-foreground hover:bg-white/10"
                    }`}
                  >
                    {feature.category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active tab indicator line */}
          <div className="h-0.5 bg-white/10 mt-2 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary"
              initial={false}
              animate={{
                width: `${100 / FEATURES.length}%`,
                x: `${(activeFeature * 100) / FEATURES.length}%`,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="col-span-2" data-featured-content>
          <FeaturesSubDetails activeFeature={FEATURES[activeFeature]} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSectionMobile;
