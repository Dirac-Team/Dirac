import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { DemoMockup } from "./DemoMockup";

const demoVideos = [
  {
    id: 1,
    title: "Content Generation",
    description: "Watch AI create blog posts in seconds",
    thumbnail: "bg-gradient-to-br from-[#78AAFF]/30 to-[#9BB5FF]/20",
    duration: "2:34"
  },
  {
    id: 2,
    title: "Data Analysis",
    description: "Automated insights from complex datasets",
    thumbnail: "bg-gradient-to-br from-[#9BB5FF]/30 to-[#78AAFF]/20",
    duration: "3:12"
  },
  {
    id: 3,
    title: "Code Optimization",
    description: "AI refactoring and bug detection",
    thumbnail: "bg-gradient-to-br from-[#78AAFF]/25 to-[#A5C4FF]/25",
    duration: "4:21"
  },
  {
    id: 4,
    title: "Email Automation",
    description: "Smart responses and scheduling",
    thumbnail: "bg-gradient-to-br from-[#B8D0FF]/25 to-[#78AAFF]/30",
    duration: "1:58"
  },
  {
    id: 5,
    title: "Research Assistant",
    description: "Comprehensive research in minutes",
    thumbnail: "bg-gradient-to-br from-[#78AAFF]/35 to-[#9BB5FF]/15",
    duration: "5:03"
  },
  {
    id: 6,
    title: "Creative Design",
    description: "AI-powered visual content creation",
    thumbnail: "bg-gradient-to-br from-[#9BB5FF]/25 to-[#B8D0FF]/30",
    duration: "3:47"
  }
];

export function DemoVideoSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      
      {/* Reduced floating orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#78AAFF]/15 to-[#9BB5FF]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-[#9BB5FF]/10 to-[#78AAFF]/15 rounded-full blur-3xl animate-pulse delay-2000" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#78AAFF] to-[#9BB5FF] bg-clip-text text-transparent mb-6">
            See Dirac in Action
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Watch how Dirac transforms complex tasks into simple, intelligent solutions.
          </p>
        </div>
        
        {/* Main Demo Mockup */}
        <div className="mb-16">
          <DemoMockup />
        </div>
        
        {/* Horizontal scrolling demo videos */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-6 animate-scroll">
              {[...demoVideos, ...demoVideos].map((video, index) => (
                <div 
                  key={`${video.id}-${index}`}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  onClick={() => setPlayingVideo(playingVideo === video.id ? null : video.id)}
                >
                  <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-6 hover:bg-black/80 hover:border-[#78AAFF]/50 hover:scale-105 transition-all duration-300 shadow-xl">
                    {/* Video thumbnail */}
                    <div className={`relative aspect-video rounded-xl overflow-hidden ${video.thumbnail} mb-4 border border-white/10`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {playingVideo === video.id ? (
                          /* Playing state */
                          <div className="text-center text-white">
                            <div className="w-12 h-12 border-3 border-white/20 border-t-[#78AAFF] rounded-full animate-spin mb-3 mx-auto" />
                            <p className="text-sm">Playing...</p>
                          </div>
                        ) : (
                          /* Play button */
                          <Button
                            size="sm"
                            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 hover:scale-110 transition-all duration-300 group-hover:scale-110"
                          >
                            <Play className="w-5 h-5 text-[#78AAFF] ml-0.5" />
                          </Button>
                        )}
                      </div>
                      
                      {/* Duration badge */}
                      <div className="absolute bottom-3 right-3 bg-black/50 rounded-lg px-2 py-1">
                        <span className="text-white text-xs">{video.duration}</span>
                      </div>
                    </div>
                    
                    {/* Video info */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#78AAFF] mb-2">
                        {video.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
        
        {/* CTA section */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-8 hover:scale-105 transition-all duration-300">
              <p className="text-white/70 mb-4">
                Ready to eliminate busy work from your daily routine?
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] hover:from-[#6A9EFF] hover:to-[#8AABFF] text-white border-0 shadow-xl px-8 py-6"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
      }} />
    </section>
  );
}