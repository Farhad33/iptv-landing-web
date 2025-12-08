"use client";
import { Button } from "@/components/ui/button";
import TvBox from "./_components/TvBox";
import TvBoxMobile from "./_components/TvBoxMobile";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full py-8 md:py-16" data-section="hero">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4">
        {/* Left Side: Header, Title, Sub Title, Paragraph */}
        <div className="w-full md:w-4/8 text-center md:text-left" data-hero-content>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Welcome to <span className="text-primary">Zebra </span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-muted-foreground">
            Watch Smarter. Stream Freely.
          </h2>
          <p className="mb-6 text-base md:text-lg text-foreground/80">
            A modern IPTV player designed for clarity, speed, and a premium TV
            experience — completely free in our first release.
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Stream your favorite channels, movies, and shows anywhere, anytime.
          </p>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Button size="xl" className="w-full md:w-auto">
              <span>Download AppleTV</span>
            </Button>
            <Button size="xl" variant="outline" className="w-full md:w-auto">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Right Side: Image and Visuals */}
        <div className="flex-1 flex justify-center relative min-h-[300px] md:min-h-[500px] w-full md:w-auto" data-tv-box-wrapper>
          {/* Light blob blur effect - covers entire right side */}
          <div className="absolute inset-0 -inset-x-20 -inset-y-10 pointer-events-none hidden md:block" data-hero-content>
            {/* Purple blob - top left area */}
            <div
              className="absolute -top-20 -left-20 w-[700px] h-[700px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)",
                filter: "blur(80px)",
              }}
            />
            {/* Orange blob - top right area */}
            <div
              className="absolute -top-10 -right-20 w-[700px] h-[700px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, rgba(251, 146, 60, 0.15) 50%, transparent 70%)",
                filter: "blur(90px)",
              }}
            />
            {/* Yellow blob - bottom center */}
            <div
              className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(250, 204, 21, 0.18) 0%, rgba(250, 204, 21, 0.08) 50%, transparent 70%)",
                filter: "blur(85px)",
              }}
            />
            {/* Extra purple accent - center */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)",
                filter: "blur(100px)",
              }}
            />
          </div>
          
          {/* Desktop TV Box */}
          <div className="hidden md:block w-fit h-fit scale-125 mt-16" data-tv-box>
            <TvBox />
          </div>
          
          {/* Mobile TV Box */}
          <div className="md:hidden w-full">
            <TvBoxMobile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
