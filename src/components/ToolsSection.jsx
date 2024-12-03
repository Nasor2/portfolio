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
      className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
    >
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-r from-gray-500 via-gray-700 to-black p-6 relative overflow-hidden"
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
        <h2 className="text-4xl font-bold text-white text-center relative z-10 flex items-center justify-center gap-4">
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
            <SparklesIcon className="text-yellow-300" />
          </motion.span>
        </h2>
      </motion.div>

      <div className="p-8 md:p-12">
        <AnimatePresence>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 justify-center items-center">
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
                  scale: 1.1,
                  rotate: hoveredTool === tool.name ? 5 : 0
                }}
                onHoverStart={() => setHoveredTool(tool.name)}
                onHoverEnd={() => setHoveredTool(null)}
                className="flex flex-col items-center group perspective-500 transform transition-all duration-300"
              >
                <motion.div 
                  className={`
                    bg-gray-200 p-4 md:p-5 rounded-full mb-3 shadow-md 
                    size-20 md:size-24 flex items-center justify-center 
                    hover:bg-gradient-to-br 
                    ${hoveredTool === tool.name 
                      ? 'from-purple-200 to-indigo-300' 
                      : 'bg-gray-200'}
                    transition-all
                  `}
                >  
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    width={48} 
                    height={48} 
                    className="text-gray-700 group-hover:scale-110 transition-transform" 
                  />
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-800 font-semibold text-xs md:text-sm text-center mt-2"
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