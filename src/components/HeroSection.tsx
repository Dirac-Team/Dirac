import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSlogan } from "./AnimatedSlogan";
import { ParticleBackground } from "./ParticleBackground";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="main" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Interactive Particle Background */}
      <ParticleBackground />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 170, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 170, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        />
      </div>

      {/* Floating orbs that follow mouse */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#78AAFF]/50 rounded-full blur-sm"
          animate={{
            x: mousePosition.x + Math.sin(Date.now() * 0.001 + i) * 100,
            y: mousePosition.y + Math.cos(Date.now() * 0.001 + i) * 100,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 200 }}
          style={{
            left: '-50%',
            top: '-50%',
          }}
        />
      ))}

      {/* Glow effect following mouse */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-[#78AAFF]/20 via-[#78AAFF]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: `radial-gradient(circle, rgba(120, 170, 255, 0.15) 0%, rgba(120, 170, 255, 0.05) 40%, transparent 70%)`
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#78AAFF]/40 rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main heading with enhanced effects */}
        <motion.div 
          className="relative inline-block mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-[#78AAFF] to-[#9BB5FF] bg-clip-text text-transparent px-8 py-4 relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glass sticker effect - positioned behind text, very subtle */}
            <div className="absolute inset-0 -z-20 pointer-events-none">
              {/* Main glass sticker overlay - NO BACKDROP BLUR */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/3 via-white/1 to-transparent rounded-3xl border border-white/10 shadow-xl animate-float">
                {/* Primary shine effect */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/8 rounded-full blur-xl animate-pulse" />
                
                {/* Secondary shine */}
                <div className="absolute top-2 right-1/4 w-8 h-8 bg-[#78AAFF]/8 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}} />
                
                {/* Subtle reflection gradient */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/5 via-white/2 to-transparent rounded-t-3xl" />
                
                {/* Corner highlights - very subtle */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/6 via-white/3 to-transparent rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/4 to-transparent rounded-bl-3xl" />
                
                {/* Inner border glow */}
                <div className="absolute inset-1 rounded-3xl border border-white/5" />
              </div>
              
              {/* Floating particles around the sticker - smaller and more subtle */}
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#78AAFF]/30 rounded-full animate-ping" />
              <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-[#9BB5FF]/30 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
              <div className="absolute -bottom-0.25 -right-1 w-0.5 h-0.5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
            </div>
            
            Dirac
            
            {/* Subtle glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#78AAFF]/20 to-[#9BB5FF]/20 rounded-2xl blur-xl opacity-0 -z-10"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.h1>
          
          {/* Animated underline */}
          <motion.div
            className="absolute bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] rounded-full"
            animate={{ width: "80%", x: "-50%" }}
            transition={{ duration: 1, delay: 1 }}
          />
          
          {/* Global styles for custom animation */}
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes stickerFloat {
                0%, 100% {
                  transform: translateY(0px) rotate(0deg);
                }
                50% {
                  transform: translateY(-2px) rotate(0.5deg);
                }
              }
              
              .animate-float {
                animation: stickerFloat 4s ease-in-out infinite;
              }
            `
          }} />
        </motion.div>
        
        {/* Animated slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatedSlogan />
        </motion.div>
        
        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Unlock the power of artificial intelligence with our cutting-edge platform. 
          Transform your workflow and amplify your creativity.
        </motion.p>
        
        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] hover:from-[#6A9EFF] hover:to-[#8AABFF] text-white border-0 shadow-2xl px-10 py-7 text-lg group relative overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}