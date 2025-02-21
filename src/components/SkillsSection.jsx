import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, Brain, Target, Presentation, Zap, ChevronDownIcon, LightbulbIcon } from 'lucide-react';

const SkillsSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedCard, setExpandedCard] = useState(null);
  
  const leadershipSkills = [
    {
      title: "Strategic Vision",
      description: "Driving innovation and setting clear organizational direction through data-driven insights and market analysis",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-50"
    },
    {
      title: "Team Leadership",
      description: "Successfully led cross-functional teams, fostering collaboration and achieving exceptional project outcomes",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-50"
    },
    {
      title: "Technical Excellence",
      description: "Deep expertise in advanced analytics, machine learning, and emerging technologies",
      icon: Brain,
      color: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-50"
    },
    {
      title: "Project Management",
      description: "Demonstrated track record of delivering high-impact projects on time and exceeding stakeholder expectations",
      icon: Trophy,
      color: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-50"
    },
    {
      title: "Communication",
      description: "Exceptional ability to translate complex technical concepts into actionable business insights",
      icon: Presentation,
      color: "from-rose-500 to-red-500",
      iconBg: "bg-rose-50"
    },
    {
      title: "Innovation Leadership",
      description: "Pioneering new approaches and methodologies to solve complex business challenges",
      icon: Zap,
      color: "from-indigo-500 to-violet-500",
      iconBg: "bg-indigo-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border border-gray-100"
    >
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-600 via-gray-800 to-black p-4 md:p-6 relative overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative flex items-center justify-between w-full z-10">
          <div className="w-6" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight flex items-center gap-4">
            Leadership & Expertise
            <LightbulbIcon className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" />
          </h2>
          <ChevronDownIcon 
            className={`w-6 h-6 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
            <div className="p-4 md:p-8 lg:p-12 bg-gradient-to-b from-gray-50 to-white">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {leadershipSkills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`${skill.iconBg} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                      </div>
                      
                      <h3 className="text-sm md:text-base font-bold text-gray-800 tracking-tight group-hover:text-gray-900 transition-colors duration-300">
                        {skill.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 text-xs md:text-sm text-gray-600"
                        >
                          {skill.description}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <motion.div 
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsSection;