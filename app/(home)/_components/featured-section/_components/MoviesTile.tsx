"use client";
import Image from "next/image";
import React, { useMemo } from "react";

const MoviesTile = () => {
  const moviesImages = useMemo(() => {
    const movies = Array.from(
      { length: 12 },
      (_, index) => `/images/movies/${index + 1}.webp`
    );
    return movies;
  }, []);

  const randomizeMovies = (array: string[]) =>
    [...array].sort(() => Math.random() - 0.5);

  const chunkedMovies = [
    randomizeMovies(moviesImages),
    randomizeMovies(moviesImages),
    randomizeMovies(moviesImages),
    randomizeMovies(moviesImages),
  ];

  return (
    <>
      <div className=" w-full flex gap-4">
        {chunkedMovies.map((chunk, chunkIndex) => {
          const isOdd = chunkIndex % 2 === 0;
          const animationClass = isOdd
            ? "animate-scroll-up"
            : "animate-scroll-down";

          // Duplicate the chunk for seamless loop
          const doubledChunk = [...chunk, ...chunk];

          return (
            <div key={chunkIndex} className="w-[200px] ">
              <div className={`flex flex-col   gap-4 ${animationClass}`}>
                {doubledChunk.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="w-[200px] h-[300px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform  shrink-0"
                  >
                    <Image
                      src={image}
                      alt={`movie ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoviesTile;
