import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TOOL_CATEGORIES } from "../data/tools";
import { SparklesIcon, ChevronDownIcon } from "lucide-react";

export const ToolsSection = () => {
  const [hoveredTool, setHoveredTool] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl overflow-hidden border border-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-r from-gray-600 via-gray-800 to-black p-4 md:p-6 relative overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
       
        <div className="relative flex items-center justify-between w-full">
          <div className="w-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-2 md:gap-4">
            Technology Stack
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <SparklesIcon className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
            </motion.span>
          </h2>
          <ChevronDownIcon
            className={`w-6 h-6 text-white transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TOOL_CATEGORIES.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-xl font-bold text-gray-800">
                        {category.name}
                      </h3>
                      <div className="h-px flex-grow bg-gray-200" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {category.tools.map((tool) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 }}
                          whileHover={{
                            scale: 1.05,
                            rotate: hoveredTool === tool.name ? 5 : 0,
                          }}
                          onHoverStart={() => setHoveredTool(tool.name)}
                          onHoverEnd={() => setHoveredTool(null)}
                          className="flex flex-col items-center"
                        >
                          <div
                            className={`
                            bg-white p-3 rounded-lg mb-2 size-16 
                            flex items-center justify-center shadow-sm
                            ${hoveredTool === tool.name ? "bg-gradient-to-br from-purple-50 to-indigo-100" : "bg-white"}
                            transition-all duration-300
                          `}
                          >
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                            />
                          </div>
                          <span className="text-xs text-gray-700 text-center font-medium">
                            {tool.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ToolsSection;
