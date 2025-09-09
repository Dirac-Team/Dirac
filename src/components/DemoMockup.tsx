import { Maximize2, MoreHorizontal, Volume2, Play } from 'lucide-react';
import { Button } from './ui/button';

export function DemoMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Browser Window */}
      <div className="bg-gray-900 rounded-t-xl p-3 flex items-center gap-3">
        {/* Traffic Light Buttons */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        {/* Address Bar */}
        <div className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-gray-400 text-sm">
          https://app.dirac.ai/dashboard
        </div>
        
        {/* Browser Controls */}
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Demo Container */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-b-xl overflow-hidden relative">
        {/* Demo Video Container */}
        <div className="aspect-video bg-black relative flex items-center justify-center">
          {/* Placeholder for demo video */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[#78AAFF]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Play className="w-8 h-8 text-[#78AAFF]" />
            </div>
            <h3 className="text-white text-xl font-medium mb-2">Demo Video Placeholder</h3>
            <p className="text-gray-400 text-sm">Replace this with your actual demo video</p>
          </div>
          
          {/* Optional overlay gradients for styling */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Video Controls */}
        <div className="bg-black/60 backdrop-blur-lg border-t border-gray-700 p-4 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white hover:bg-gray-700"
          >
            <Play className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center gap-2 text-white text-sm">
            <span>0:00</span>
            <div className="w-32 bg-gray-700 rounded-full h-1">
              <div className="bg-[#78AAFF] h-1 rounded-full w-0" />
            </div>
            <span>0:00</span>
          </div>
          
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
            <Volume2 className="w-4 h-4" />
          </Button>
          
          <div className="flex-1" />
          
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}