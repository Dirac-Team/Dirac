import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './ui/utils';

interface TextRotatorProps {
    words: string[];
    className?: string;
    interval?: number;
    textGradient?: boolean;
    letterAnimation?: boolean;
    onWordChange?: (word: string, index: number) => void;
}

export const TextRotator = ({
    words,
    className = "",
    interval = 3000,
    textGradient = true,
    letterAnimation = true,
    onWordChange = () => {}
}: TextRotatorProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % words.length;
                // Use setTimeout to avoid setState during render
                setTimeout(() => {
                    onWordChange(words[newIndex], newIndex);
                }, 0);
                return newIndex;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [words.length, interval, onWordChange, words]);

    // Notify parent of initial word on mount
    useEffect(() => {
        onWordChange(words[0], 0);
    }, []); // Only run once on mount

    // Animation variants for letter-by-letter effect
    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(5px)",
            scale: 0.9
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                delay: i * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: -20,
            filter: "blur(5px)",
            scale: 0.9,
            transition: {
                delay: i * 0.02,
                duration: 0.3,
                ease: "easeInOut"
            }
        })
    };

    // Generate gradient colors for letters - using your brand colors
    const getGradientColors = (index: number, total: number) => {
        // Use consistent #78AAFF brand color
        return '#78AAFF';
    };

    return (
        <span className={cn(
            "relative inline-block min-w-[250px] min-h-[1.5em]",
            !letterAnimation && textGradient && "bg-clip-text text-transparent bg-gradient-to-r from-[#78AAFF] via-[#9BB5FF] to-[#A855F7]",
            className
        )}>
            <AnimatePresence mode="wait">
                {letterAnimation ? (
                    <motion.span
                        key={currentIndex}
                        className="absolute inset-0 flex items-center justify-center w-full -mt-3"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {words[currentIndex].split('').map((letter, i, array) => (
                            <motion.span
                                key={`${currentIndex}-${i}`}
                                custom={i}
                                variants={letterVariants}
                                style={textGradient ? {
                                    color: getGradientColors(i, array.length),
                                    display: 'inline-block',
                                    textShadow: '0 0 15px rgba(120, 170, 255, 0.3)',
                                    fontWeight: 'inherit'
                                } : {}}
                                className={letter === ' ' ? 'ml-2' : ''}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                    </motion.span>
                ) : (
                    <motion.span
                        key={currentIndex}
                        className="absolute inset-0 flex items-center justify-center w-full"
                        initial={{
                            y: 40,
                            opacity: 0,
                            filter: "blur(8px)",
                            scale: 0.95,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                            scale: 1,
                        }}
                        exit={{
                            y: -40,
                            opacity: 0,
                            filter: "blur(8px)",
                            scale: 0.95,
                        }}
                        transition={{
                            y: { type: "spring", stiffness: 100, damping: 15 },
                            opacity: { duration: 0.5 },
                            filter: { duration: 0.4 },
                            scale: { duration: 0.4 }
                        }}
                    >
                        {words[currentIndex]}
                    </motion.span>
                )}
            </AnimatePresence>
            <span className="opacity-0">{words[0]}</span>
        </span>
    );
};