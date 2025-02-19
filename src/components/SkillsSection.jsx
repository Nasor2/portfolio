import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Users, Brain, Target, Presentation, Zap, ChevronDownIcon, LightbulbIcon } from 'lucide-react';

const SkillsSection = () => {
  const [isOpen, setIsOpen] = useState(true);
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
      transition: {
        staggerChildren: 0.1
      }
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
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="relative flex items-center justify-between w-full z-10">
        <div className="w-6" />
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight flex items-center gap-4">
          Leadership & Expertise
          <LightbulbIcon className="w-8 h-8 text-yellow-300" />
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
          <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-b from-gray-50 to-white">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
          {leadershipSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`${skill.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-gray-700" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight group-hover:text-gray-900 transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {skill.description}
                </p>
                
                <motion.div 
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
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