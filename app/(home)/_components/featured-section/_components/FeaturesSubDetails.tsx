import { FEATURES } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface FeaturesSubDetailsProps {
  activeFeature: (typeof FEATURES)[number];
}
const FeaturesSubDetails = ({ activeFeature }: FeaturesSubDetailsProps) => {
  return (
    <div className="col-span-2" data-featured-content>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="sm:text-5xl text-3xl font-extrabold">
            {activeFeature.category}
          </h1>
          <p className="sm:text-xl text-base text-muted-foreground my-5">
            {activeFeature.description}
          </p>

          <div className="relative space-y-0">
            {/* Vertical connecting line with animation */}
            <motion.div
              key={`vertical-line-${activeFeature.category}`}
              className="absolute left-4 top-0 w-[2px] bg-primary origin-top"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />

            {activeFeature.features.map((feature, index) => (
              <div key={feature.title} className="relative pb-12 last:pb-0">
                {/* Dot on vertical line */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.3,
                    ease: "backOut",
                  }}
                  className="absolute sm:left-px left-1  top-0 flex items-center justify-center"
                >
                  <span className="flex sm:w-8 sm:h-8 w-6 h-6 items-center justify-center border border-primary rounded-full bg-background">
                    <span className="flex sm:w-6 sm:h-6 w-4 h-4 items-center justify-center border border-primary rounded-full">
                      <span className="block w-2 h-2  bg-primary rounded-full"></span>
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
                    ease: "easeOut",
                  }}
                />

                {/* Title */}
                <motion.div
                  className="sm:text-lg text-base font-bold text-white ml-10"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7 + index * 0.3,
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
                      ease: "easeOut",
                    }}
                  />

                  {/* Description */}
                  <motion.p
                    className="text-sm text-muted-foreground ml-0 pl-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.1 + index * 0.3,
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

      {/* Big vlure blob effect */}
    
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </div>
  );
};

export default FeaturesSubDetails;
