import FeaturedSection from "./_components/featured-section/FeaturedSection";
import HeroSection from "./_components/hero/HeroSection";
import PlatformsSection from "./_components/platforms-section/PlatformsSection";
import Footer from "./_components/footer/Footer";
import ScrollAnimationWrapper from "./_components/ScrollAnimationWrapper";
import ScrollIndicator from "./_components/ScrollIndicator";

 
export default function Home() {
  return (
    <ScrollAnimationWrapper>
      <main className={"w-full"}>
        <HeroSection />
        <FeaturedSection />
        <PlatformsSection />
        <Footer />
        <ScrollIndicator />
      </main>
    </ScrollAnimationWrapper>
  );
}
