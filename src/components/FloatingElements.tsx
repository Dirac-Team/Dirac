import { Sparkles, ArrowUpRight, Shield, Eye, Database, Zap, Code, BarChart } from "lucide-react";

const floatingElements = [
  {
    icon: Sparkles,
    position: "top-16 left-8",
    delay: "0ms",
    size: "w-16 h-16",
    duration: "6s"
  },
  {
    icon: ArrowUpRight,
    position: "top-24 right-8",
    delay: "1000ms",
    size: "w-14 h-14",
    duration: "8s"
  },
  {
    icon: Shield,
    position: "top-40 right-16",
    delay: "2000ms",
    size: "w-15 h-15",
    duration: "7s"
  },
  {
    icon: Eye,
    position: "top-1/2 right-8",
    delay: "1500ms",
    size: "w-16 h-16",
    duration: "9s"
  },
  {
    icon: Database,
    position: "bottom-40 right-16",
    delay: "2500ms",
    size: "w-14 h-14",
    duration: "6s"
  },
  {
    icon: Zap,
    position: "top-1/2 left-8",
    delay: "500ms",
    size: "w-15 h-15",
    duration: "8s"
  },
  {
    icon: Code,
    position: "bottom-24 left-16",
    delay: "3000ms",
    size: "w-14 h-14",
    duration: "7s"
  },
  {
    icon: BarChart,
    position: "bottom-16 left-8",
    delay: "1800ms",
    size: "w-16 h-16",
    duration: "9s"
  }
];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} hidden md:block`}
          style={{
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        >
          {/* Glass morphism container */}
          <div className="relative w-full h-full">
            {/* Multiple glow layers for depth */}
            <div className="absolute inset-0 bg-[#78AAFF]/40 rounded-full blur-xl animate-pulse opacity-60" />
            <div className="absolute inset-0 bg-[#9BB5FF]/30 rounded-full blur-lg animate-pulse opacity-40" style={{animationDelay: '1s'}} />
            
            {/* Glass container with enhanced styling */}
            <div className="relative w-full h-full bg-gradient-to-br from-white/10 via-black/20 to-black/30 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center shadow-2xl animate-float hover:scale-110 transition-all duration-500 hover:shadow-[#78AAFF]/50 hover:border-[#78AAFF]/50">
              <element.icon 
                className="w-6 h-6 text-[#78AAFF] drop-shadow-2xl filter brightness-150" 
              />
              
              {/* Inner shine effect */}
              <div className="absolute top-1 left-1 w-3 h-3 bg-white/30 rounded-full blur-sm" />
            </div>
          </div>
        </div>
      ))}
      
      {/* Additional floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#78AAFF]/70 rounded-full animate-ping hidden md:block" style={{animationDelay: '0.5s'}} />
      <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white/70 rounded-full animate-pulse hidden md:block" style={{animationDelay: '2s'}} />
      <div className="absolute top-3/4 left-1/6 w-1.5 h-1.5 bg-[#9BB5FF]/70 rounded-full animate-bounce hidden md:block" style={{animationDelay: '3s'}} />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(5px) rotate(2deg);
          }
          50% {
            transform: translateY(-25px) translateX(-5px) rotate(-1deg);
          }
          75% {
            transform: translateY(-10px) translateX(8px) rotate(1deg);
          }
        }
        
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(15px) translateX(-5px) rotate(-2deg);
          }
          50% {
            transform: translateY(25px) translateX(5px) rotate(1deg);
          }
          75% {
            transform: translateY(10px) translateX(-8px) rotate(-1deg);
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-float:nth-child(odd) {
          animation-name: floatReverse;
        }
        
        .animate-float:nth-child(3n) {
          animation-direction: alternate;
        }
      `}</style>
    </div>
  );
}