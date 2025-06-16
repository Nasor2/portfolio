import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectFilter } from "./components/ProjectFilter";
import { ProfileSection } from "./Sections/ProfileSection";
import { ToolsSection } from "./Sections/ToolsSection";
import SkillsSection from "./Sections/SkillsSection";
import { CodeIcon, MountainIcon, ChevronDownIcon, Contact } from "lucide-react";
import { PROJECTS } from "./data/projects";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(true);

  const categories = useMemo(() => {
    const allCategories = PROJECTS.flatMap((project) => project.categories);
    return ["All", ...new Set(allCategories)];
  }, []);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((project) =>
            project.categories.includes(activeFilter)
          ),
    [activeFilter]
  );

  return (
    <div className="min-h-screen relative">
      <motion.div
        className="fixed -top-20 -left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl z-0"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 py-6 sm:py-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 sm:space-y-16"
        >
          <ProfileSection />
          <SkillsSection />
          <ToolsSection />

          <motion.section id="projects" className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
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
                  Projects
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
                    <CodeIcon className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
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
                  <div className="p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                    <ProjectFilter
                      categories={categories}
                      activeFilter={activeFilter}
                      onFilterChange={setActiveFilter}
                    />

                    {filteredProjects.length > 0 ? (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {filteredProjects.map((project) => (
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
              )}
            </AnimatePresence>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
