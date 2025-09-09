export function GlassSticker() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Main glass sticker overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-transparent backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl animate-float">
        {/* Primary shine effect */}
        <div className="absolute top-3 left-3 w-20 h-20 bg-white/25 rounded-full blur-2xl animate-pulse" />
        
        {/* Secondary shine */}
        <div className="absolute top-1 right-1/4 w-12 h-12 bg-[#78AAFF]/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Subtle reflection gradient */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/15 via-white/5 to-transparent rounded-t-3xl" />
        
        {/* Corner highlights */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 via-white/10 to-transparent rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-bl-3xl" />
        
        {/* Inner border glow */}
        <div className="absolute inset-1 rounded-3xl border border-white/10" />
      </div>
      
      {/* Floating particles around the sticker */}
      <div className="absolute -top-3 -left-3 w-3 h-3 bg-[#78AAFF]/70 rounded-full animate-ping" />
      <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
      <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#9BB5FF]/70 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
      <div className="absolute -bottom-1 -right-3 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
      
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
    </div>
  );
}