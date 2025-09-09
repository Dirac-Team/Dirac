import { Brain, Zap, Shield } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const mainFeature = {
  title: "Advanced AI Neural Network",
  description: "Our proprietary neural architecture processes complex patterns and delivers intelligent insights in real-time.",
  metrics: [
    { label: "Processing Speed", value: "99.9%" },
    { label: "Accuracy Rate", value: "10ms" },
    { label: "Uptime", value: "24/7" }
  ]
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Process complex queries in milliseconds with our optimized inference engine."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and privacy controls to keep your data safe and compliant."
  }
];

export function FeaturesSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      
      {/* Simplified decorative glass orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#78AAFF]/15 to-[#9BB5FF]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-[#9BB5FF]/10 to-[#78AAFF]/15 rounded-full blur-3xl animate-pulse delay-3000" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#78AAFF] to-[#9BB5FF] bg-clip-text text-transparent mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the capabilities that make Dirac the most advanced AI platform for modern teams.
          </p>
        </div>
        
        {/* Main feature card - large 3D interactive */}
        <div className="mb-16">
          <motion.div 
            className="relative p-8 rounded-3xl bg-black/60 border border-[#78AAFF]/30 overflow-hidden group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              transform: isHovered 
                ? `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`
                : 'none',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#78AAFF]/20 via-transparent to-[#9BB5FF]/20"
              animate={{
                background: isHovered 
                  ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 170, 255, 0.3) 0%, transparent 50%)`
                  : 'linear-gradient(135deg, rgba(120, 170, 255, 0.2) 0%, transparent 50%, rgba(155, 181, 255, 0.2) 100%)'
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left side - Icon and title */}
              <div className="text-center lg:text-left">
                <motion.div 
                  className="mb-6 p-6 w-fit mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-[#78AAFF] to-[#9BB5FF] text-white shadow-2xl"
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Brain className="w-12 h-12" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-[#78AAFF] mb-4">
                  {mainFeature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {mainFeature.description}
                </p>
              </div>
              
              {/* Center - 3D visualization */}
              <div className="relative">
                <motion.div 
                  className="w-48 h-48 mx-auto relative"
                  animate={{ rotateY: isHovered ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Neural network visualization */}
                  <div className="absolute inset-0 border-2 border-[#78AAFF]/50 rounded-full animate-pulse">
                    <div className="absolute inset-4 border border-[#9BB5FF]/30 rounded-full">
                      <div className="absolute inset-4 border border-[#78AAFF]/20 rounded-full flex items-center justify-center">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-[#78AAFF] to-[#9BB5FF] rounded-full"
                          animate={{ scale: isHovered ? 1.2 : 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating nodes */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-[#78AAFF]/70 rounded-full"
                      style={{
                        top: `${20 + (i * 10)}%`,
                        left: `${10 + (i * 15)}%`,
                      }}
                      animate={{
                        y: isHovered ? Math.sin(i) * 10 : 0,
                        x: isHovered ? Math.cos(i) * 10 : 0,
                      }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  ))}
                </motion.div>
              </div>
              
              {/* Right side - Metrics */}
              <div className="space-y-6">
                {mainFeature.metrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="text-center lg:text-left"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-[#78AAFF] mb-1">
                      {metric.value}
                    </div>
                    <div className="text-white/70">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Two smaller feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group h-full"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-8 hover:bg-black/80 hover:border-[#78AAFF]/50 transition-all duration-300 shadow-xl h-full">
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#78AAFF] to-[#9BB5FF] text-white shadow-lg"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#78AAFF] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}