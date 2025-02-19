import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TOOLS } from '../data/tools';
import { SparklesIcon } from 'lucide-react';

export const ToolsSection = () => {
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
    >
      <motion.div className="bg-gradient-to-r from-gray-500 via-gray-700 to-black p-4 sm:p-6 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <h2 className="text-2xl sm:text-4xl font-bold text-white text-center relative z-10 flex items-center justify-center gap-2 sm:gap-4">
          Technology Stack
          <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
        </h2>
      </motion.div>

      <div className="p-4 sm:p-8 md:p-12">
        <AnimatePresence>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-10">
            {TOOLS.map((tool, index) => (
              <motion.div 
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => setHoveredTool(tool.name)}
                onHoverEnd={() => setHoveredTool(null)}
                className="flex flex-col items-center"
              >
                <motion.div 
                  className={`
                    bg-gray-200 
                    p-3 sm:p-4 md:p-5 
                    rounded-full 
                    mb-2 sm:mb-3 
                    w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                    flex items-center justify-center
                    ${hoveredTool === tool.name ? 'bg-gradient-to-br from-purple-200 to-indigo-300' : ''}
                    transition-all duration-300
                  `}
                >  
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
                  />
                </motion.div>
                <span className="text-gray-800 font-semibold text-xs sm:text-sm text-center mt-1">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};