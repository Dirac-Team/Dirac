import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface GooeyTextProps {
  words: string[];
  className?: string;
  duration?: number;
  morphDuration?: number;
}

export function GooeyText({ 
  words, 
  className = "", 
  duration = 2000, 
  morphDuration = 1200 
}: GooeyTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const filterId = useRef(`gooey-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, morphDuration / 3);

      setTimeout(() => {
        setIsTransitioning(false);
      }, (morphDuration * 2) / 3);
      
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration, morphDuration]);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Enhanced SVG Filter for Ultra Gooey Effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={filterId.current} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          
          {/* Transition filter for melting effect */}
          <filter id={`${filterId.current}-transition`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="megaBlur" />
            <feColorMatrix
              in="megaBlur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="megaGoo"
            />
            <feOffset in="megaGoo" dx="0" dy="0" result="offset" />
            <feBlend in="offset" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* Text Container */}
      <div 
        className="relative overflow-visible"
        style={{ 
          filter: isTransitioning 
            ? `url(#${filterId.current}-transition)` 
            : `url(#${filterId.current})`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className="bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] bg-clip-text text-transparent inline-block relative"
            initial={{ 
              opacity: 0,
              scale: 0.5,
              filter: "blur(8px)",
              y: 20,
              x: 0,
              skewX: -5,
              rotateX: 20,
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              y: 0,
              x: 0,
              skewX: 0,
              rotateX: 0,
            }}
            exit={{ 
              opacity: 0,
              scale: 0.3,
              filter: "blur(12px)",
              y: -20,
              x: 10,
              skewX: 8,
              rotateX: -20,
            }}
            transition={{
              duration: morphDuration / 1000,
              ease: [0.19, 1, 0.22, 1], // Custom bezier for liquid feel
              scale: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                mass: 1.2
              },
              filter: {
                duration: (morphDuration * 0.8) / 1000,
                ease: "easeInOut"
              }
            }}
            style={{
              display: 'inline-block',
              transformOrigin: 'center bottom',
              transformStyle: 'preserve-3d',
            }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>

        {/* Gooey Morph Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, rgba(120, 170, 255, 0.4), rgba(155, 181, 255, 0.4))',
            borderRadius: '50%',
            filter: 'blur(15px)',
          }}
          animate={{
            opacity: isTransitioning ? 0.8 : 0,
            scale: isTransitioning ? [1, 2.5, 1] : 1,
            rotate: isTransitioning ? [0, 180, 360] : 0,
            x: isTransitioning ? [0, 10, -10, 0] : 0,
            y: isTransitioning ? [0, -5, 5, 0] : 0,
          }}
          transition={{
            duration: morphDuration / 1000,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />

        {/* Liquid Splash Particles */}
        <AnimatePresence>
          {isTransitioning && (
            <>
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const distance = 40 + Math.random() * 20;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] opacity-80"
                    style={{
                      borderRadius: '50% 20% 50% 20%',
                      left: '50%',
                      top: '50%',
                      filter: 'blur(1px)',
                    }}
                    initial={{ 
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0,
                      rotate: 0,
                    }}
                    animate={{ 
                      opacity: [0, 1, 0.5, 0],
                      scale: [0, 1.5, 0.5, 0],
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance,
                      rotate: 360,
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0
                    }}
                    transition={{
                      duration: morphDuration / 800,
                      delay: i * 0.02,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  />
                );
              })}
              
              {/* Central blob expansion */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#78AAFF]/30 to-[#9BB5FF]/30"
                style={{
                  borderRadius: '50%',
                  filter: 'blur(8px)',
                }}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0, 3, 0],
                }}
                transition={{
                  duration: morphDuration / 1000,
                  ease: "easeOut",
                  times: [0, 0.4, 1]
                }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Drip Effects */}
        <AnimatePresence>
          {isTransitioning && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`drip-${i}`}
                  className="absolute w-2 bg-gradient-to-b from-[#78AAFF] to-[#9BB5FF] opacity-70"
                  style={{
                    height: '20px',
                    borderRadius: '0 0 50% 50%',
                    left: `${30 + i * 20}%`,
                    top: '100%',
                    filter: 'blur(0.5px)',
                  }}
                  initial={{ 
                    opacity: 0,
                    scaleY: 0,
                    y: -10,
                  }}
                  animate={{ 
                    opacity: [0, 0.7, 0],
                    scaleY: [0, 1, 0.3],
                    y: [0, 15, 30],
                  }}
                  transition={{
                    duration: morphDuration / 1000,
                    delay: 0.1 + i * 0.05,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}