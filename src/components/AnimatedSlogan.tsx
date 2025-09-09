import { motion } from 'motion/react';
import { TextRotator } from './TextRotator';
import { useState, useCallback } from 'react';

export function AnimatedSlogan() {
  const words = ['Tedious', 'Busy'];
  const [currentWord, setCurrentWord] = useState('Tedious');
  
  // Dynamic spacing based on current word - much tighter overall
  const getSpacing = (word: string) => {
    switch (word) {
      case 'Tedious':
        return 'gap-1'; // Tighter spacing for longer word
      case 'Busy':
        return 'gap-0'; // No gap - words very close together
      default:
        return 'gap-1';
    }
  };
  
  const handleWordChange = useCallback((word: string, index: number) => {
    setCurrentWord(word);
  }, []);
  
  return (
    <div className="relative mb-12">
      <motion.div 
        className={`text-3xl md:text-5xl font-bold text-center flex items-center justify-center ${getSpacing(currentWord)}`}
        layout
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.span 
          className="text-white"
          layout
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          F*ck
        </motion.span>
        <motion.div
          layout
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <TextRotator 
            words={words}
            className="text-3xl md:text-5xl font-bold"
            interval={2500}
            textGradient={true}
            letterAnimation={true}
            onWordChange={handleWordChange}
          />
        </motion.div>
        <motion.span 
          className="text-white"
          layout
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Work
        </motion.span>
      </motion.div>
      
      {/* Subtitle */}
      <p className="text-center text-white/70 mt-4 text-lg">
        AI that eliminates the mundane, so you can focus on what matters
      </p>
    </div>
  );
}