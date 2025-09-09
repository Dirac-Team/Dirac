import { useState } from "react";
import { IconNavigation } from "./components/IconNavigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { PricingPage } from "./components/PricingPage";
import { ContactPage } from "./components/ContactPage";
import { InteractiveParticles } from "./components/InteractiveParticles";
import { MouseSpotlight } from "./components/MouseSpotlight";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Interactive background effects */}
      <InteractiveParticles />
      <MouseSpotlight />
      
      {/* Navigation */}
      <IconNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {/* Main content */}
      {renderPage()}
    </div>
  );
}