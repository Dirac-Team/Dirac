import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { DemoVideoSection } from "./DemoVideoSection";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DemoVideoSection />
      <Footer />
    </>
  );
}