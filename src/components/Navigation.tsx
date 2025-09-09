import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', page: 'home' },
  { name: 'About', page: 'about' },
  { name: 'Pricing', page: 'pricing' },
  { name: 'Contact', page: 'contact' }
];

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - positioned to avoid blocking text */}
      <nav className="fixed top-8 right-8 z-50 hidden md:block max-w-sm">
        <div className="bg-black/80 rounded-2xl shadow-2xl p-2 backdrop-blur-sm">
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-2 rounded-xl transition-all duration-300 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  currentPage === item.page
                    ? 'text-[#78AAFF] bg-[#78AAFF]/20'
                    : 'text-white/80 hover:text-[#78AAFF] hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - positioned with safe area */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black/80 hover:bg-black/90 text-white shadow-2xl w-12 h-12 rounded-2xl p-0 backdrop-blur-sm"
          variant="ghost"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Menu Dropdown - positioned to not block content */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-black/90 rounded-2xl shadow-2xl p-4 min-w-[180px] backdrop-blur-sm">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm text-left cursor-pointer whitespace-nowrap ${
                    currentPage === item.page
                      ? 'text-[#78AAFF] bg-[#78AAFF]/20'
                      : 'text-white/80 hover:text-[#78AAFF] hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}