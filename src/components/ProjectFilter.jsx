import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, FilterIcon } from 'lucide-react';

export const ProjectFilter = ({ categories, activeFilter, onFilterChange, className = '' }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className={`relative flex justify-center mb-8 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/80 backdrop-blur-xl border-2 border-gray-200/50 rounded-full shadow-2xl p-1.5 flex flex-wrap justify-center gap-2 w-full max-w-3xl mx-4"
      >
        <motion.div className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2">
          <FilterIcon className="text-gray-400 w-5 h-5" />
        </motion.div>

        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => onFilterChange(category)}
            onHoverStart={() => setHoveredCategory(category)}
            onHoverEnd={() => setHoveredCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 sm:pl-8 sm:pr-6 
              py-2 sm:py-3 
              rounded-full 
              text-xs sm:text-sm 
              font-bold 
              uppercase 
              tracking-wider
              transition-all 
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
              <SparklesIcon className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300" />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};