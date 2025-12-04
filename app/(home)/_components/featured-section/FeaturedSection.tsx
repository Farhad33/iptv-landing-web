import React from "react";
import MoviesTile from "./_components/MoviesTile";

const FeaturedSection = () => {
  return (
    <section className="w-full py-16 overflow-hidden relative">
      <div className="w-full h-[600px] flex items-start justify-start relative container mx-auto">
        <div className="overflow-hidden">
          <div className="w-full h-full  -rotate-z-20 translate-x-[120%]  mr-auto">
            <MoviesTile />
          </div>
        </div>
      

      </div>
    </section>
  );
};

export default FeaturedSection;
