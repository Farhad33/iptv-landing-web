import FeaturedSection from "./_components/featured-section/FeaturedSection";
import HeroSection from "./_components/hero/HeroSection";

 
export default function Home() {
  return (
    <main className={"w-full"}>
      <HeroSection />
      <FeaturedSection />
    </main>
  );
}
