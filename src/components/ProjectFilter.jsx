import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, FilterIcon } from 'lucide-react';

export const ProjectFilter = ({ 
  categories, 
  activeFilter, 
  onFilterChange, 
  className = '' 
}) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className={`relative flex justify-center mb-12 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-full shadow-2xl p-1.5 inline-flex items-center space-x-2"
      >
        <motion.div 
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          <FilterIcon className="text-gray-400 w-5 h-5" />
        </motion.div>

        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => onFilterChange(category)}
            onHoverStart={() => setHoveredCategory(category)}
            onHoverEnd={() => setHoveredCategory(null)}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              pl-10 
              pr-6 
              py-3 
              rounded-full 
              text-sm 
              font-bold 
              uppercase 
              tracking-widest 
              transition-all 
              duration-500 
              ease-in-out 
              relative 
              overflow-hidden
              flex 
              items-center 
              gap-2
              ${activeFilter === category
                ? 'bg-gradient-to-r from-gray-600 via-gray-700 to-black text-white' 
                : 'text-gray-700 hover:bg-gray-100'}
            `}
          >
            {category}

            {activeFilter === category && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: [0, 1.5, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  duration: 0.5
                }}
                className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
              >
                <SparklesIcon 
                  className="w-6 h-6 text-yellow-300 drop-shadow-lg" 
                />
              </motion.div>
            )}

            {hoveredCategory === category && activeFilter !== category && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-full mb-2 bg-black text-white text-xs px-3 py-1 rounded-full"
              >
                {category}
              </motion.div>
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};