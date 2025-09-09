import { Footer } from "./Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#78AAFF] to-[#9BB5FF] bg-clip-text text-transparent mb-8">
            About Dirac
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We're building the future of productivity. Dirac eliminates tedious work through intelligent automation, 
            letting you focus on what truly matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-8">
            <h2 className="text-2xl font-semibold text-[#78AAFF] mb-4">Our Mission</h2>
            <p className="text-white/70 leading-relaxed">
              To eliminate busy work and unlock human potential through AI-powered automation. 
              We believe technology should adapt to how you work, not the other way around.
            </p>
          </div>

          <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-8">
            <h2 className="text-2xl font-semibold text-[#78AAFF] mb-4">Our Vision</h2>
            <p className="text-white/70 leading-relaxed">
              A world where professionals spend their time on creative and strategic work, 
              while AI handles the repetitive tasks that slow them down.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">Built by a team that understands</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We've experienced the frustration of endless busy work firsthand. That's why we're building Dirac - 
            to give everyone the superpower of intelligent automation.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}