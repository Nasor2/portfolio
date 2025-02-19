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
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className="bg-white rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden border border-gray-100"
    >
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-r from-gray-500 via-gray-700 to-black p-4 md:p-6 relative overflow-hidden"
      >
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
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center relative z-10 flex items-center justify-center gap-2 md:gap-4">
          Technology Stack
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <SparklesIcon className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
          </motion.span>
        </h2>
      </motion.div>

      <div className="p-4 md:p-8 lg:p-12">
        <AnimatePresence>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-10 justify-center items-center">
            {TOOLS.map((tool, index) => (
              <motion.div 
                key={tool.name} 
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.1, 
                    type: "spring", 
                    stiffness: 300 
                  } 
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: hoveredTool === tool.name ? 5 : 0
                }}
                onHoverStart={() => setHoveredTool(tool.name)}
                onHoverEnd={() => setHoveredTool(null)}
                className="flex flex-col items-center group perspective-500 transform transition-all duration-300"
              >
                <motion.div 
                  className={`
                    bg-gray-200 p-2 sm:p-3 md:p-4 lg:p-5 rounded-full mb-2 md:mb-3 shadow-md 
                    size-12 sm:size-16 md:size-20 lg:size-24 flex items-center justify-center 
                    hover:bg-gradient-to-br 
                    ${hoveredTool === tool.name ? 'from-purple-200 to-indigo-300' : 'bg-gray-200'}
                    transition-all
                  `}
                >  
                  <img 
                    src={tool.icon} 
                    alt={tool.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform" 
                  />
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-800 font-semibold text-[10px] sm:text-xs md:text-sm text-center mt-1 md:mt-2"
                >
                  {tool.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ToolsSection;