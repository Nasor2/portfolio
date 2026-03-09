import { motion } from "framer-motion";
import { ProjectCard } from "./components/ProjectCard";
import { ProfileSection } from "./Sections/ProfileSection";
import { ToolsSection } from "./Sections/ToolsSection";
import SkillsSection from "./Sections/SkillsSection";
import ExperienceSection from "./Sections/ExperienceSection";
import Navbar from "./components/Navbar";
import { CodeIcon, MountainIcon } from "lucide-react";
import { PROJECTS } from "./data/projects";
import "./App.css";
import Footer from "./components/Footer";

//Inicio
function App() {
  const filteredProjects = PROJECTS;

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
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
          <section id="profile"><ProfileSection /></section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">
            <section id="skills" className="h-full"><SkillsSection /></section>
            <section id="tools" className="h-full"><ToolsSection /></section>
          </div>
          <section id="experience"><ExperienceSection /></section>
          
          

          <motion.section id="projects" className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r from-gray-600 via-gray-800 to-black p-3 md:p-4 relative overflow-hidden"
            >
              <div className="relative flex items-center justify-center w-full">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2 md:gap-3">
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
                    <CodeIcon className="h-4 w-4 md:h-5 md:w-5 text-yellow-300" />
                  </motion.span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                {filteredProjects.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-4 sm:py-6 space-y-3"
                  >
                    <MountainIcon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 mx-auto" />
                    <p className="text-sm sm:text-base text-gray-500 font-semibold">
                      No projects found in this category
                    </p>
                    <p className="text-gray-400">
                      Try selecting a different filter
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
