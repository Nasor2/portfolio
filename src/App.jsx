import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ProjectCard } from "./components/ProjectCard";
import { ProjectFilter } from "./components/ProjectFilter";
import { ProfileSection } from "./components/ProfileSection";
import { ToolsSection } from "./components/ToolsSection";
import { PROJECTS } from "./data/projects";
import { StarIcon, MountainIcon, CodeIcon } from "lucide-react";
import "./App.css";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const allCategories = PROJECTS.flatMap(project => project.categories);
    return ["All", ...new Set(allCategories)];
  }, []);

  const filteredProjects = useMemo(() => 
    activeFilter === "All" 
      ? PROJECTS 
      : PROJECTS.filter(project => project.categories.includes(activeFilter)), 
    [activeFilter]
  );

  return (
    <div className="min-h-screen relative bg-gray-50">
      <motion.div 
        className="fixed -top-20 -left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl z-0"
        animate={{ 
          opacity: [0.1, 0.3, 0.1], 
          scale: [0.5, 0.7, 0.5] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity 
        }}
      />

      <div className="container mx-auto px-4 py-6 sm:py-12 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 sm:space-y-16"
        >
          <ProfileSection />
          <ToolsSection />

          <motion.div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <motion.div className="bg-gradient-to-r from-black via-gray-700 to-gray-500 p-4 sm:p-6 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              />
              <h2 className="text-2xl sm:text-4xl font-bold text-white text-center flex items-center justify-center gap-2 sm:gap-4">
                Projects
                <CodeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
              </h2>
            </motion.div>

            <div className="p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
              <ProjectFilter
                categories={categories}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />

              {filteredProjects.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {filteredProjects.map(project => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 sm:py-12 space-y-4"
                >
                  <MountainIcon className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto" />
                  <p className="text-lg sm:text-xl text-gray-500 font-semibold">
                    No projects found in this category
                  </p>
                  <p className="text-gray-400">
                    Try selecting a different filter
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;