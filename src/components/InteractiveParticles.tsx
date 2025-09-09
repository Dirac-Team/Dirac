import { useEffect, useRef } from 'react';

export function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    // Particle class definition - optimized
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Boundary bouncing
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse interaction - optimized
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            this.x -= forceDirectionX * force * 3; // Reduced force
            this.y -= forceDirectionY * force * 3;
          }
        }

        // Update position
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      // Significantly reduced particle count for performance
      let numberOfParticles = Math.min(30, (canvas.height * canvas.width) / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 1.5 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let directionX = (Math.random() * 0.3) - 0.15; // Slower movement
        let directionY = (Math.random() * 0.3) - 0.15;
        let color = 'rgba(120, 170, 255, 0.7)'; // Your brand color #78AAFF
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); 
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Optimized connection drawing
    const connect = () => {
      const maxDistance = 120; // Reduced connection distance
      const maxDistanceSquared = maxDistance * maxDistance;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) { // Avoid duplicate connections
          let distanceSquared = ((particles[a].x - particles[b].x) ** 2) + 
                               ((particles[a].y - particles[b].y) ** 2);
          
          if (distanceSquared < maxDistanceSquared) {
            let opacity = 1 - (distanceSquared / maxDistanceSquared);
            opacity = Math.max(0, Math.min(0.3, opacity)); // Limit max opacity
            
            // Check if near mouse
            if (mouse.x !== null && mouse.y !== null) {
              let dx_mouse_a = particles[a].x - mouse.x;
              let dy_mouse_a = particles[a].y - mouse.y;
              let distance_mouse_a = Math.sqrt(dx_mouse_a * dx_mouse_a + dy_mouse_a * dy_mouse_a);

              if (distance_mouse_a < mouse.radius) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
              } else {
                ctx.strokeStyle = `rgba(120, 170, 255, ${opacity})`;
              }
            } else {
              ctx.strokeStyle = `rgba(120, 170, 255, ${opacity})`;
            }
            
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Clear canvas with black background
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      
      // Draw connections
      connect();
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}