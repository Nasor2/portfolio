import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, FilterIcon } from 'lucide-react';

export const ProjectFilter = ({ categories, activeFilter, onFilterChange, className = '' }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className={`relative flex justify-center mb-4 md:mb-8 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-lg md:rounded-full shadow-lg md:shadow-2xl p-2 md:p-1.5 flex flex-wrap justify-center gap-1.5 md:gap-2 w-full max-w-3xl mx-2 md:mx-4"
      >
        <motion.div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2">
          <FilterIcon className="text-gray-400 w-5 h-5" />
        </motion.div>

        <div className="w-full md:w-auto flex flex-wrap justify-center gap-1.5 md:gap-2">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => onFilterChange(category)}
              onHoverStart={() => setHoveredCategory(category)}
              onHoverEnd={() => setHoveredCategory(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                px-3 md:px-4 lg:pl-8 lg:pr-6 
                py-1.5 md:py-2 lg:py-3 
                rounded-lg md:rounded-full 
                text-xs md:text-sm 
                font-medium md:font-bold 
                uppercase 
                tracking-wide md:tracking-wider
                transition-all 
                relative 
                overflow-hidden
                flex 
                items-center 
                gap-1.5 md:gap-2
                ${activeFilter === category
                  ? 'bg-gradient-to-r from-gray-600 via-gray-700 to-black text-white' 
                  : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'}
              `}
            >
              {category}
              {activeFilter === category && (
                <SparklesIcon className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-300" />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectFilter;