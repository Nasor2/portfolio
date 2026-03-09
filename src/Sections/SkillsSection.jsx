import { motion } from 'framer-motion';
import { Trophy, Users, Brain, Target, Presentation, Zap, LightbulbIcon } from 'lucide-react';

const SkillsSection = () => {
  const leadershipSkills = [
    {
      title: "Strategic Vision",
      description: "Driving innovation with data-driven insights and strategic direction",
      icon: Target,
      color: "from-blue-200 to-blue-300",
      iconBg: "bg-blue-50"
    },
    {
      title: "Team Leadership",
      description: "Leading cross-functional teams with focus on collaboration and results",
      icon: Users,
      color: "from-purple-200 to-purple-300",
      iconBg: "bg-purple-50"
    },
    {
      title: "Technical Excellence",
      description: "Expertise in analytics, machine learning, and emerging technologies",
      icon: Brain,
      color: "from-emerald-200 to-emerald-300",
      iconBg: "bg-emerald-50"
    },
    {
      title: "Project Management",
      description: "Delivering high-impact projects on time and exceeding expectations",
      icon: Trophy,
      color: "from-amber-200 to-amber-300",
      iconBg: "bg-amber-50"
    },
    {
      title: "Communication",
      description: "Translating complex concepts into actionable business insights",
      icon: Presentation,
      color: "from-rose-200 to-rose-300",
      iconBg: "bg-rose-50"
    },
    {
      title: "Innovation Leadership",
      description: "Pioneering new approaches to solve complex challenges",
      icon: Zap,
      color: "from-indigo-200 to-indigo-300",
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
      id="skills"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-600 via-gray-800 to-black p-3 md:p-4 relative overflow-hidden"
      >
        <div className="relative flex items-center justify-center w-full z-10">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            Leadership & Expertise
            <LightbulbIcon className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        <div className="p-4 md:p-6 bg-gradient-to-b from-gray-50 to-white">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {leadershipSkills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-sm border border-gray-100"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`${skill.iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-gray-800 tracking-tight">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;