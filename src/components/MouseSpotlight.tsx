import { useEffect, useRef } from 'react';

export function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed pointer-events-none z-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(120, 170, 255, 0.15) 0%, rgba(120, 170, 255, 0.05) 40%, transparent 70%)',
        filter: 'blur(20px)',
      }}
    />
  );
}