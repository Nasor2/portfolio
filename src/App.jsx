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
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollProgress(latest * 100);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Dynamically generate categories
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
    <div className="min-h-screen relative">
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ 
          scaleX: scrollProgress / 100,
          transformOrigin: 'left center'
        }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 z-50 origin-left"
      />

      {/* Decorative Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1], 
          scale: [0.5, 0.7, 0.5] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="fixed -top-20 -left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl z-0"
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="shadow-2xl shadow-blue-100/50 rounded-3xl overflow-hidden"
        >
          <div className="p-8 md:p-12 space-y-16">
            <ProfileSection />
            <ToolsSection />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
            >
              {/* Animated Background Header */}
              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-gradient-to-r from-black via-gray-700 to-gray-500 p-6 relative overflow-hidden"
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
                <div className="relative z-10 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white text-center flex items-center gap-4">
                    Projects
                    <CodeIcon className="text-yellow-300" />
                  </h2>
                </div>
              </motion.div>

              <div className="p-8 md:p-12 space-y-8">
                <ProjectFilter
                  categories={categories}
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                  className="mb-8 transition-all duration-300 ease-in-out"
                />

                {filteredProjects.length > 0 ? (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 0.3,
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
                  >
                    {filteredProjects.map(project => (
                      <motion.div
                        key={project.title}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { type: "spring", stiffness: 300 }
                          }
                        }}
                      >
                        <ProjectCard {...project} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="flex justify-center mb-4">
                      <MountainIcon className="w-16 h-16 text-gray-300" />
                    </div>
                    <p className="text-slate-500 text-xl font-semibold">
                      No projects found in this category
                    </p>
                    <p className="text-slate-400">
                      Try selecting a different filter
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;