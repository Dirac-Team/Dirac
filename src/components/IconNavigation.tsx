import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  DollarSign, 
  HelpCircle, 
  Phone,
  Menu,
  X
} from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  page: string;
}

const navItems: NavItem[] = [
  { id: 'home', icon: Home, label: 'Home', page: 'home' },
  { id: 'about', icon: HelpCircle, label: 'About', page: 'about' },
  { id: 'pricing', icon: DollarSign, label: 'Pricing', page: 'pricing' },
  { id: 'contact', icon: Phone, label: 'Contact', page: 'contact' },
];

interface IconNavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const IconNavigation: React.FC<IconNavigationProps> = ({ 
  currentPage, 
  onPageChange 
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = (item: NavItem) => {
    onPageChange(item.page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Icon Navigation */}
      <nav className="fixed top-8 left-8 z-50 hidden md:block">
        <motion.div 
          className="flex items-center bg-black/80 rounded-2xl px-3 py-3 shadow-2xl backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = currentPage === item.page;
            const isHovered = hoveredItem === item.id;
            const showLabel = isActive || isHovered;

            return (
              <React.Fragment key={item.id}>
                <motion.div
                  className="relative flex items-center"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleItemClick(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active background */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl ${
                      isActive 
                        ? 'bg-[#78AAFF]/20 border border-[#78AAFF]/30' 
                        : isHovered 
                          ? 'bg-white/10' 
                          : 'bg-transparent'
                    }`}
                    layoutId="activeBackground"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />

                  {/* Icon and Label Container */}
                  <div className="relative flex items-center px-4 py-2 cursor-pointer">
                    <IconComponent 
                      className={`w-5 h-5 transition-colors duration-200 ${
                        isActive 
                          ? 'text-[#78AAFF]' 
                          : isHovered 
                            ? 'text-white' 
                            : 'text-white/70'
                      }`} 
                    />
                    
                    {/* Expandable Label */}
                    <AnimatePresence>
                      {showLabel && (
                        <motion.span
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 'auto', opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`ml-2 text-sm font-medium whitespace-nowrap overflow-hidden ${
                            isActive 
                              ? 'text-[#78AAFF]' 
                              : 'text-white'
                          }`}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Separator */}
                {index < navItems.length - 1 && (
                  <div className="w-px h-6 bg-white/20 mx-1" />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-black/80 hover:bg-black/90 text-white shadow-2xl w-12 h-12 rounded-2xl p-0 backdrop-blur-sm flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 bg-black/90 rounded-2xl shadow-2xl p-4 min-w-[200px] backdrop-blur-sm border border-white/10"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = currentPage === item.page;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm text-left cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'text-[#78AAFF] bg-[#78AAFF]/20'
                          : 'text-white/80 hover:text-[#78AAFF] hover:bg-white/10'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
