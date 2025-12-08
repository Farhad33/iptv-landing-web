"use client";
import Image from "next/image";
import React from "react";

const TvBoxMobile = () => {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="relative w-full h-full max-w-xs">
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
          }}
        >
          {/* Screen area wrapper */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 h-[calc(100%-60px)] w-[calc(100%-10px)] overflow-hidden">
            {/* Scroll container for content */}
            <div className="w-full h-full overflow-y-auto" data-tv-scroll>
              <Image
                src="/images/entity/tv-screen.webp"
                alt="tv screen"
                width={1500}
                height={1500}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-fit absolute top-[calc(100%-23px)] h-10 -translate-x-1/2 left-1/2">
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

export default TvBoxMobile;

