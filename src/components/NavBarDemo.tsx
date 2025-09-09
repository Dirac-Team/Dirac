import React from 'react';
import { IconNavBar, ModernIconNavBar } from './IconNavBar';

export const NavBarDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Interactive Navigation Bar
          </h1>
          <p className="text-gray-600 text-lg">
            Hover over or click the icons to see the labels appear
          </p>
        </div>

        {/* Standard Version */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Standard Version</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <IconNavBar />
          </div>
        </div>

        {/* Modern Version */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Modern Version</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <ModernIconNavBar />
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            How it works:
          </h3>
          <ul className="text-blue-700 space-y-1">
            <li>• Hover over any icon to see the label appear</li>
            <li>• Click an icon to make it active (label stays visible)</li>
            <li>• The active background smoothly animates between items</li>
            <li>• Labels animate in and out with smooth transitions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
