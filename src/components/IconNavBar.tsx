import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Bell, 
  Settings, 
  HelpCircle, 
  Shield,
  ChevronRight 
} from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { id: 'dashboard', icon: Home, label: 'Dashboard', isActive: true },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'settings', icon: Settings, label: 'Settings' },
  { id: 'help', icon: HelpCircle, label: 'Help' },
  { id: 'security', icon: Shield, label: 'Security' },
];

export const IconNavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div 
        className="flex items-center bg-gray-100 rounded-2xl px-2 py-3 shadow-sm border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.id;
          const isHovered = hoveredItem === item.id;
          const showLabel = isActive || isHovered;

          return (
            <React.Fragment key={item.id}>
              <motion.div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setActiveItem(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active background */}
                <motion.div
                  className={`absolute inset-0 rounded-xl ${
                    isActive ? 'bg-gray-200' : 'bg-transparent'
                  }`}
                  layoutId="activeBackground"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />

                {/* Icon and Label Container */}
                <div className="relative flex items-center px-4 py-2 cursor-pointer">
                  <IconComponent 
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive ? 'text-gray-700' : 'text-gray-500'
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
                          isActive ? 'text-gray-700' : 'text-gray-600'
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
                <div className="w-px h-6 bg-gray-300 mx-1" />
              )}
            </React.Fragment>
          );
        })}
      </motion.div>
    </div>
  );
};

// Alternative version with more modern styling
export const ModernIconNavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center p-6 bg-white">
      <motion.div 
        className="flex items-center bg-gray-50 rounded-3xl px-3 py-4 shadow-lg border border-gray-100 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.id;
          const isHovered = hoveredItem === item.id;
          const showLabel = isActive || isHovered;

          return (
            <React.Fragment key={item.id}>
              <motion.div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setActiveItem(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active background with gradient */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200' 
                      : isHovered 
                        ? 'bg-gray-100' 
                        : 'bg-transparent'
                  }`}
                  layoutId="activeBackground"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />

                {/* Icon and Label Container */}
                <div className="relative flex items-center px-5 py-3 cursor-pointer">
                  <IconComponent 
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive 
                        ? 'text-blue-600' 
                        : isHovered 
                          ? 'text-gray-700' 
                          : 'text-gray-500'
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
                        className={`ml-3 text-sm font-medium whitespace-nowrap overflow-hidden ${
                          isActive 
                            ? 'text-blue-700' 
                            : 'text-gray-700'
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
                <div className="w-px h-8 bg-gray-200 mx-2" />
              )}
            </React.Fragment>
          );
        })}
      </motion.div>
    </div>
  );
};
