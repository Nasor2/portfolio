import { useState } from "react";
import { motion } from "framer-motion";
import { TOOL_CATEGORIES } from "../data/tools";
import { SparklesIcon } from "lucide-react";

export const ToolsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gradient-to-r from-black via-gray-600 to-gray-800 p-3 md:p-4 relative overflow-hidden"
      >
        <div className="relative flex items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2">
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
        </div>
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TOOL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-base font-bold text-gray-800">
                    {category.name}
                  </h3>
                  <div className="h-px flex-grow bg-gray-200" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {category.tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                      className="flex flex-col items-center"
                    >
                      <div className="bg-white p-2 rounded-lg mb-2 size-14 flex items-center justify-center shadow-sm">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-7 h-7 object-contain"
                        />
                      </div>
                      <span className="text-xs text-gray-700 text-center font-medium line-clamp-2">
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
    </motion.div>
  );
};

export default ToolsSection;
