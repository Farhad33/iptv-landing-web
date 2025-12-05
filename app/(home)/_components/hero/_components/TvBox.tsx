"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

const TvBox = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 3; // Max 3 degrees (limited)
    const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
    
    // Calculate glare position relative to screen (opposite to mouse position)
    if (screenRef.current) {
      const screenRect = screenRef.current.getBoundingClientRect();
      const screenX = e.clientX - screenRect.left;
      const screenY = e.clientY - screenRect.top;
      
      const mouseX = (screenX / screenRect.width) * 100;
      const mouseY = (screenY / screenRect.height) * 100;
      
      // Reflection in opposite direction of mouse
      const glareX = 100 - mouseX;
      const glareY = 100 - mouseY;
      
      setGlarePosition({ x: glareX, y: glareY });
    }
    
    setRotation({ x: rotateX, y: rotateY });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div className="w-xl h-96 ">
      <div 
        className="w-full h-full relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative overflow-hidden transition-transform duration-200 ease-out"
          style={{
            backgroundImage: `url(/images/entity/tv-frame.png)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            transform: `perspective(1000px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* Screen area wrapper */}
          <div 
            ref={screenRef}
            className="absolute top-8 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-10px)] overflow-hidden"
          >
            {/* Glare effect - fixed on TV screen */}
            {isHovering && (
              <div
                className="absolute inset-0 pointer-events-none rounded-md transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 200px at ${glarePosition.x}% ${glarePosition.y}%, 
                    rgba(255, 255, 255, 0.3) 0%, 
                    rgba(255, 255, 255, 0.1) 30%, 
                    transparent 70%)`,
                  opacity: isHovering ? 1 : 0,
                  zIndex: 10,
                }}
              />
            )}
            {/* Scroll container for content */}
            <div className="w-full h-full overflow-y-auto" data-tv-scroll>
              <Image
                src="/images/entity/tv-screen.webp"
                alt="tv screen"
                width={1500}
                height={1500}
                className="w-full h-auto rounded-md"
              />
              {/* Additional content for scrolling */}
             {/*  <div className="p-4 bg-linear-to-b from-transparent to-black/20">
                <div className="space-y-4 text-white/90">
                  <h3 className="text-xl font-bold">Amazing Content</h3>
                  <p className="text-sm">Scroll through endless entertainment</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="h-24 bg-white/10 rounded-lg" />
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-fit absolute top-[calc(100%-23px)] h-10  -translate-x-1/2 left-1/2">
          <Image
            src="/images/entity/tv-stand.png"
            alt="tv screen"
            width={100}
            height={100}
            className="h-fit w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TvBox;
