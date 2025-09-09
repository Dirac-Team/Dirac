import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-6 overflow-hidden">
      
      {/* Simplified decorative glass orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[#78AAFF]/15 to-[#9BB5FF]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-[#9BB5FF]/10 to-[#78AAFF]/15 rounded-full blur-3xl animate-pulse delay-2000" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main container - removed glass styling */}
        <div className="bg-black/60 rounded-3xl border border-[#78AAFF]/30 p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand section */}
            <div className="md:col-span-2">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-[#78AAFF] to-[#9BB5FF] bg-clip-text text-transparent mb-4">Dirac</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Empowering the future with intelligent AI solutions. 
                Transform your ideas into reality with our cutting-edge platform.
              </p>
              
              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "#" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#78AAFF]/20 border border-white/20 text-white hover:text-[#78AAFF] shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Links sections */}
            <div>
              <h4 className="font-semibold text-[#78AAFF] mb-4">Product</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-[#78AAFF] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#78AAFF] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#78AAFF] transition-colors">API</a></li>
                <li><a href="#" className="hover:text-[#78AAFF] transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#78AAFF] mb-4">Company</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-[#78AAFF] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#78AAFF] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#78AAFF] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#78AAFF] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Dirac. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((link, index) => (
                <a key={index} href="#" className="text-white/60 hover:text-[#78AAFF] transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}