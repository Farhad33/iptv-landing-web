/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
}

const ScrollAnimationWrapper = ({ children }: ScrollAnimationWrapperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile device - disable complex animations on mobile
    const checkMobile = () => {
      return typeof window !== "undefined" && window.innerWidth < 768;
    };
    const isMobile = checkMobile();

    // On mobile, skip GSAP animations entirely for better performance
    if (isMobile) {
      return;
    }

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
          // Re-check mobile status inside context
          const isMobileDevice = checkMobile();

          // TV Box zoom animation - only on desktop
          const tvBoxSection = document.querySelector('[data-section="hero"]');
          const tvBox = document.querySelector("[data-tv-box]");
          const heroContent = document.querySelectorAll("[data-hero-content]");
          const tvScroll = document.querySelector(
            "[data-tv-scroll]"
          ) as HTMLElement | null;

          // Skip TV box animations on mobile
          if (
            tvBox &&
            tvBoxSection &&
            heroContent.length > 0 &&
            !isMobileDevice
          ) {
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
          }

          // Featured Section animations - skip on mobile (uses mobile component)
          const featuredSection = document.querySelector(
            '[data-section="featured"]'
          );
          const featureCards = document.querySelectorAll(
            "[data-feature-index]"
          );
          const featuredContent = document.querySelector(
            "[data-featured-content]"
          );

          if (featuredSection && featureCards.length > 0 && !isMobileDevice) {
            const featuresCount = featureCards.length;
            const scrollDuration = featuresCount * 300; // 1000px per feature for smooth transitions

            // Animate featured content (left side text) entrance
            if (featuredContent) {
              gsap.from(featuredContent, {
                scrollTrigger: {
                  trigger: featuredSection,
                  start: "top 95%",
                  end: "top 60%",
                  scrub: 1,
                },
                opacity: 0,
                y: 50,

                duration: 0.8,
              });
            }

            // Pin the featured section and control active feature based on scroll
            ScrollTrigger.create({
              trigger: featuredSection,
              start: "top 10%",
              end: `+=${scrollDuration}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              markers: false, // Set to true for debugging
              onUpdate: (self) => {
                // Calculate which feature should be active based on scroll progress
                const progress = self.progress;
                // Use smooth interpolation for better transitions
                const activeIndex = Math.min(
                  Math.floor(progress * featuresCount),
                  featuresCount - 1
                );

                // Update active feature via window function
                if (
                  typeof window !== "undefined" &&
                  (window as any).setFeaturedActiveFeature
                ) {
                  const currentActive =
                    (window as any).__currentFeaturedIndex || 0;
                  if (currentActive !== activeIndex) {
                    (window as any).__currentFeaturedIndex = activeIndex;
                    (window as any).setFeaturedActiveFeature(activeIndex);
                  }
                }
              },
            });

            // Animate cards entrance with stagger
            featureCards.forEach((card, index) => {
              gsap.from(card, {
                scrollTrigger: {
                  trigger: featuredSection,
                  start: "top 95%",
                  end: "top 60%",
                  scrub: 1,
                },
                opacity: 0,
                scale: 0.8,
                y: 100,
                duration: 0.6,
                delay: index * 0.08,
                ease: "power2.out",
              });
            });
          }

          // Platforms Section animations - reduced on mobile
          const platformsSection = document.querySelector(
            '[data-section="platforms"]'
          );
          const platformsHeader = document.querySelector(
            "[data-platforms-header]"
          );
          const platformsTitle = document.querySelector(
            "[data-platforms-title]"
          );
          const platformsSubtitle = document.querySelector(
            "[data-platforms-subtitle]"
          );
          const platformCards = document.querySelectorAll(
            "[data-platform-card]"
          );
          const platformsCta = document.querySelector("[data-platforms-cta]");

          if (platformsSection && !isMobileDevice) {
            // Animate header entrance
            if (platformsHeader) {
              gsap.from(platformsTitle, {
                scrollTrigger: {
                  trigger: platformsHeader,
                  start: "top 85%",
                  end: "top 60%",
                  scrub: 1,
                },
                opacity: 0,
                y: -50,
                scale: 0.9,
                duration: 0.8,
              });

              gsap.from(platformsSubtitle, {
                scrollTrigger: {
                  trigger: platformsHeader,
                  start: "top 85%",
                  end: "top 60%",
                  scrub: 1,
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.2,
              });
            }

            // Animate platform cards with stagger and scroll-based reveal/hide
            if (platformCards.length > 0) {
              platformCards.forEach((card, index) => {
          
                const name = card.querySelector("[data-platform-name]");
                const description = card.querySelector(
                  "[data-platform-description]"
                );
                const badge = card.querySelector("[data-platform-badge]");

                // Main card animation - appears and disappears with scroll
                gsap.fromTo(
                  card,
                  {
                    opacity: 0,
                    y: 100,
                    scale: 0.5,
                    rotateX: -45,
                  },
                  {
                    scrollTrigger: {
                      trigger: card,
                      start: "top 120%",
                      end: "top 20%",
                      scrub: 1.5,
                      toggleActions: "play reverse play reverse",
                    },
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 1,
                    delay: index * 0.1,
                    ease: "power2.out",
                  }
                );

              

                // Name slide in
                if (name) {
                  gsap.fromTo(
                    name,
                    {
                      opacity: 0,
                      y: 20,
                    },
                    {
                      scrollTrigger: {
                        trigger: card,
                        start: "top 120%",
                        end: "top 25%",
                        scrub: 1.5,
                        toggleActions: "play reverse play reverse",
                      },
                      opacity: 1,
                      y: 0,
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                      ease: "power2.out",
                    }
                  );
                }

                // Description fade in
                if (description) {
                  gsap.fromTo(
                    description,
                    {
                      opacity: 0,
                    },
                    {
                      scrollTrigger: {
                        trigger: card,
                        start: "top 120%",
                        end: "top 25%",
                        scrub: 1.5,
                        toggleActions: "play reverse play reverse",
                      },
                      opacity: 1,
                      duration: 0.6,
                      delay: index * 0.1 + 0.4,
                      ease: "power2.out",
                    }
                  );
                }

                // Badge scale and rotate in
                if (badge) {
                  gsap.fromTo(
                    badge,
                    {
                      scale: 0,
                      rotation: -45,
                      opacity: 0,
                    },
                    {
                      scrollTrigger: {
                        trigger: card,
                        start: "top 120%",
                        end: "top 25%",
                        scrub: 1.5,
                        toggleActions: "play reverse play reverse",
                      },
                      scale: 1,
                      rotation: 0,
                      opacity: 1,
                      duration: 0.5,
                      delay: index * 0.1 + 0.5,
                      ease: "back.out(1.7)",
                    }
                  );
                }
              });
            }

            // Animate CTA
            if (platformsCta) {
              gsap.from(platformsCta, {
                scrollTrigger: {
                  trigger: platformsCta,
                  start: "top 90%",
                  end: "top 60%",
                  scrub: 1,
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
              });
            }
          }

          // Footer Section animations - reduced on mobile
          const footerSection = document.querySelector(
            '[data-section="footer"]'
          );
          const footerHeader = document.querySelector("[data-footer-header]");
          const footerLogo = document.querySelector("[data-footer-logo]");
          const footerDescription = document.querySelector(
            "[data-footer-description]"
          );
          const footerSocial = document.querySelector("[data-footer-social]");
          const socialLinks = document.querySelectorAll("[data-social-link]");
          const footerLinks = document.querySelector("[data-footer-links]");
          const footerCategories = document.querySelectorAll(
            "[data-footer-category]"
          );
          const footerNewsletter = document.querySelector(
            "[data-footer-newsletter]"
          );
          const footerBottom = document.querySelector("[data-footer-bottom]");

          if (footerSection && !isMobileDevice) {
            // Animate logo with scale and glow effect
            if (footerLogo) {
              gsap.fromTo(
                footerLogo,
                {
                  opacity: 0,
                  scale: 0.5,
                  y: -50,
                },
                {
                  scrollTrigger: {
                    trigger: footerHeader,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1.5,
                  },
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 1,
                  ease: "back.out(1.7)",
                }
              );
            }

            // Animate description
            if (footerDescription) {
              gsap.from(footerDescription, {
                scrollTrigger: {
                  trigger: footerHeader,
                  start: "top 80%",
                  end: "top 50%",
                  scrub: 1.5,
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
              });
            }

            // Animate social links with stagger
            if (socialLinks.length > 0) {
              socialLinks.forEach((link, index) => {
                gsap.fromTo(
                  link,
                  {
                    opacity: 0,
                    scale: 0,
                    rotation: -180,
                  },
                  {
                    scrollTrigger: {
                      trigger: footerSocial,
                      start: "top 80%",
                      end: "top 50%",
                      scrub: 1.5,
                    },
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "back.out(1.7)",
                  }
                );
              });
            }

            // Animate footer link categories with stagger
            if (footerCategories.length > 0) {
              footerCategories.forEach((category, index) => {
                gsap.fromTo(
                  category,
                  {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                  },
                  {
                    scrollTrigger: {
                      trigger: footerLinks,
                      start: "top 85%",
                      end: "top 50%",
                      scrub: 1.5,
                    },
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power2.out",
                  }
                );

                // Animate links inside each category
                const links = category.querySelectorAll("[data-footer-link]");
                links.forEach((link, linkIndex) => {
                  gsap.from(link, {
                    scrollTrigger: {
                      trigger: category,
                      start: "top 80%",
                      end: "top 50%",
                      scrub: 1.5,
                    },
                    opacity: 0,
                    x: -20,
                    duration: 0.5,
                    delay: index * 0.15 + linkIndex * 0.05,
                    ease: "power2.out",
                  });
                });
              });
            }

            // Animate bottom section
            if (footerBottom) {
              const copyright = document.querySelector(
                "[data-footer-copyright]"
              );
              const meta = document.querySelector("[data-footer-meta]");

              gsap.from(footerBottom, {
                scrollTrigger: {
                  trigger: footerBottom,
                  start: "top 95%",
                  end: "top 70%",
                  scrub: 1,
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
              });

              if (copyright) {
                gsap.from(copyright, {
                  scrollTrigger: {
                    trigger: footerBottom,
                    start: "top 95%",
                    end: "top 70%",
                    scrub: 1,
                  },
                  opacity: 0,
                  x: -30,
                  duration: 0.6,
                });
              }

              if (meta) {
                gsap.from(meta, {
                  scrollTrigger: {
                    trigger: footerBottom,
                    start: "top 95%",
                    end: "top 70%",
                    scrub: 1,
                  },
                  opacity: 0,
                  x: 30,
                  duration: 0.6,
                });
              }
            }
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
