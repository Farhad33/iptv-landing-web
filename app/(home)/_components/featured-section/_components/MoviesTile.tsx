"use client";
import Image from "next/image";
import React, { useMemo } from "react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "4K Ultra HD",
    description: "Watch your favorite content in stunning 4K quality",
    icon: "🎬",
  },
  {
    title: "Multi-Device Support",
    description: "Stream on all your devices seamlessly",
    icon: "📱",
  },
  {
    title: "Live TV",
    description: "Access to thousands of live TV channels",
    icon: "📺",
  },
  {
    title: "Cloud DVR",
    description: "Record and watch your shows anytime",
    icon: "☁️",
  },
];

const MoviesTile = () => {
  const moviesImages = useMemo(() => {
    const movies = Array.from(
      { length: 12 },
      (_, index) => `/images/movies/${index + 1}.webp`
    );
    return movies;
  }, []);

  const createColumnWithFeature = (moviesList: string[], columnIndex: number) => {
    const shuffled = [...moviesList].sort(() => Math.random() - 0.5);
    const feature = features[columnIndex % features.length];
    
    // Put feature in the middle of the column (around index 6)
    const firstHalf = shuffled.slice(0, 6);
    const secondHalf = shuffled.slice(6);
    
    return {
      items: [
        ...firstHalf.map(m => ({ type: 'movie' as const, content: m })),
        { type: 'feature' as const, content: feature },
        ...secondHalf.map(m => ({ type: 'movie' as const, content: m })),
      ],
      feature,
    };
  };

  const chunkedMovies = [
    createColumnWithFeature(moviesImages, 0),
    createColumnWithFeature(moviesImages, 1),
    createColumnWithFeature(moviesImages, 2),
    createColumnWithFeature(moviesImages, 3),
    createColumnWithFeature(moviesImages, 4),
    createColumnWithFeature(moviesImages, 5),
    createColumnWithFeature(moviesImages, 6),
    createColumnWithFeature(moviesImages, 7),
  ];

  return (
    <>
      <div className="w-full flex gap-4">
        {chunkedMovies.map((columnData, chunkIndex) => {
          // Duplicate the items for seamless loop
          const doubledItems = [...columnData.items, ...columnData.items];
          const isOdd = chunkIndex % 2 === 0;

          return (
            <div key={chunkIndex} className="w-full">
              <div 
                className="flex flex-col gap-4" 
                data-movie-column={chunkIndex}
                data-direction={isOdd ? "down" : "up"}
              >
                {doubledItems.map((item, itemIndex) => {
                  if (item.type === 'feature') {
                    const feature = item.content as Feature;
                    return (
                      <div
                        key={`feature-${chunkIndex}-${itemIndex}`}
                        data-feature-card={chunkIndex}
                        className="w-[200px] h-[300px] relative overflow-hidden rounded-lg shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)',
                        }}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                          <div className="text-5xl mb-4">{feature.icon}</div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-white/90">
                            {feature.description}
                          </p>
                        </div>
                        {/* Border for highlight effect */}
                        <div className="absolute inset-0 border-4 border-white/0 rounded-lg pointer-events-none transition-all duration-500" />
                      </div>
                    );
                  }

                  return (
                    <div
                      key={`movie-${chunkIndex}-${itemIndex}`}
                      className="w-[200px] h-[300px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform shrink-0"
                    >
                      <Image
                        src={item.content as string}
                        alt={`movie ${itemIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoviesTile;
