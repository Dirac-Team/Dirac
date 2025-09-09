import { Mail, MessageSquare, Send } from "lucide-react";
import { Footer } from "./Footer";

export function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#78AAFF] to-[#9BB5FF] bg-clip-text text-transparent mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Have questions about Dirac? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-8">
            <h2 className="text-2xl font-semibold text-[#78AAFF] mb-6 flex items-center space-x-2">
              <MessageSquare className="w-6 h-6" />
              <span>Send us a message</span>
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#78AAFF] focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#78AAFF] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white/80 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#78AAFF] focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-white/80 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#78AAFF] focus:outline-none resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] hover:from-[#6A9EFF] hover:to-[#8AABFF] text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-[#78AAFF]" />
                <h3 className="text-xl font-semibold text-white">Email Us</h3>
              </div>
              <p className="text-white/70 mb-2">
                For general inquiries and support
              </p>
              <a href="mailto:hello@dirac.ai" className="text-[#78AAFF] hover:text-[#9BB5FF] transition-colors">
                hello@dirac.ai
              </a>
            </div>

            <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Join our Community</h3>
              <p className="text-white/70 mb-4">
                Connect with other Dirac users and get the latest updates.
              </p>
              <button className="bg-[#78AAFF]/20 hover:bg-[#78AAFF]/30 text-[#78AAFF] px-4 py-2 rounded-lg border border-[#78AAFF]/40 transition-all duration-300">
                Coming Soon
              </button>
            </div>

            <div className="bg-black/60 rounded-2xl border border-[#78AAFF]/30 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
              <p className="text-white/70">
                We typically respond within 24 hours during business days. 
                For urgent matters, please mention it in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}