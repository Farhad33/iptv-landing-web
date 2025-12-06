/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
}

const ScrollAnimationWrapper = ({ children }: ScrollAnimationWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import GSAP only on client side
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;

      import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        // Make GSAP available globally for debugging
        if (typeof window !== "undefined") {
          (window as any).gsap = gsap;
          (window as any).ScrollTrigger = ScrollTrigger;
        }

        const ctx = gsap.context(() => {
          // TV Box zoom animation
          const tvBoxSection = document.querySelector('[data-section="hero"]');
          const tvBox = document.querySelector("[data-tv-box]");
          const heroContent = document.querySelectorAll("[data-hero-content]");
          const featuredSection = document.querySelector(
            '[data-section="featured"]'
          );
          const tvScroll = document.querySelector(
            "[data-tv-scroll]"
          ) as HTMLElement | null;

          if (
            !tvBox ||
            !tvBoxSection ||
            heroContent.length === 0 ||
            !featuredSection
          ) {
            console.warn("Some elements not found for animations");
            return;
          }

          console.log("Setting up GSAP animations...");

          // Create a timeline for the TV Box zoom sequence
          const tvTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: tvBoxSection,
              start: "top top",
              end: "+=4000",
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
              markers: false, // Set to true for debugging
            },
          });

          // Hide hero content while zooming
          tvTimeline.to(heroContent, {
            opacity: 0,
            y: -50,
            duration: 0.2,
          });

          // Zoom TV to fullscreen with smooth easing
          tvTimeline.to(
            tvBox,
            {
              scale: 2,
              x: "-70%",
              translateX: "70%",
              y: "15%",
              duration: 0.8,
              ease: "power2.inOut",
            },
            "+=0.1"
          );

          // Simulate scrolling inside TV - scroll the content
          if (tvScroll) {
            tvTimeline.to(
              tvScroll,
              {
                scrollTop: 300,
                duration: 0.8,
                ease: "power1.inOut",
              },
              "+=0.2"
            );
          }

          // Hold the zoomed state
          tvTimeline.to({}, { duration: 0.3 });

          // Zoom back to normal
          tvTimeline.to(tvBox, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.inOut",
          });

          // Show hero content back
          tvTimeline.to(heroContent, {
            opacity: 1,
            y: 0,
            duration: 0.2,
          });
 
          //featured section animations

          // Platforms Section animations
          const platformsSection = document.querySelector(
            '[data-section="platforms"]'
          );
          const platforms = document.querySelectorAll("[data-platform]");

          if (platformsSection && platforms.length > 0) {
            platforms.forEach((platform) => {
              gsap.from(platform, {
                scrollTrigger: {
                  trigger: platform,
                  start: "top 80%",
                  end: "top 50%",
                  scrub: 1,
                },
                opacity: 0,
                y: 100,
                scale: 0.8,
                duration: 1,
              });
            });
          }

          console.log("GSAP animations set up successfully!");
        }, containerRef);

        return () => ctx.revert();
      });
    });
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollAnimationWrapper;
