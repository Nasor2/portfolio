import { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, MapPin, Calendar, ArrowRight, ChevronDownIcon } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

const ExperienceSection = () => {
  const [expandedAchievements, setExpandedAchievements] = useState({});

  const toggleAchievements = (index) => {
    setExpandedAchievements(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border border-gray-100"
    >
      {/* Header - Mismo estilo que Skills y Tools */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-600 via-gray-800 to-black p-3 md:p-4 relative overflow-hidden"
      >
        <div className="relative flex items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2">
            Professional Experience
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
              <BriefcaseIcon className="h-5 w-5 md:h-6 md:w-6 text-yellow-300" />
            </motion.span>
          </h2>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 md:p-6 lg:p-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="space-y-4"
          >
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Card Header with accent line */}
                <div 
                  className="border-l-4 border-l-gray-800 bg-gray-50 p-4 md:p-5 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => toggleAchievements(index)}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-1">
                      <h3 className="text-left text-lg md:text-xl font-bold text-gray-900 mb-1">
                        {experience.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedAchievements[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    </motion.div>
                  </div>

                  {/* Position Info */}
                  <div className="flex flex-wrap items-center gap-2 mb-1 text-left">
                    <h4 className="text-base font-semibold text-gray-800">
                      {experience.title}
                    </h4>
                    <span className="inline-block text-xs font-medium text-gray-600 bg-white px-2 py-0.5 rounded-full border border-gray-300">
                      {experience.type}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-600">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                {/* Achievements - Retractible */}
                {expandedAchievements[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 bg-white p-4 md:p-5"
                  >
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex gap-2 text-gray-700 text-sm leading-relaxed"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-gray-600" />
                          </div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceSection;
