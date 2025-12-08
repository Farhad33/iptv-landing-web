import FeaturedSection from "./_components/featured-section/FeaturedSection";
import HeroSection from "./_components/hero/HeroSection";
import PlatformsSection from "./_components/platforms-section/PlatformsSection";
import Footer from "./_components/footer/Footer";
import ScrollAnimationWrapper from "./_components/ScrollAnimationWrapper";
import ScrollIndicator from "./_components/ScrollIndicator";
import { Metadata } from "next";
import { PAGE_METADATA, BREADCRUMB_SCHEMA, FAQ_SCHEMA } from "@/lib/constants";

export const metadata: Metadata = {
  title: PAGE_METADATA.home.title,
  description: PAGE_METADATA.home.description,
  alternates: {
    canonical: PAGE_METADATA.home.canonical,
  },
};
 
export default function Home() {
  // Additional structured data for home page
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      BREADCRUMB_SCHEMA,
      FAQ_SCHEMA,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />
      <ScrollAnimationWrapper>
        <main className={"w-full"} role="main" id="main-content">
          <HeroSection />
          <FeaturedSection />
          <PlatformsSection />
          <Footer />
          <ScrollIndicator />
        </main>
      </ScrollAnimationWrapper>
    </>
  );
}
