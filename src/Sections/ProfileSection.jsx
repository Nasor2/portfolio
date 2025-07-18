import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, GithubIcon } from "lucide-react";
import profileImage from "../assets/images/Fotojpg.jpg";
import KaggleLogo from "../assets/images/Icons/kaggle_k_short.svg";

export const ProfileSection = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [backgroundVariant, setBackgroundVariant] = useState(0);
  const containerRef = useRef(null);

  const backgroundVariants = [
    "from-gray-100 to-gray-200",
    "from-purple-100 to-purple-200",
    "from-blue-100 to-blue-200",
    "from-indigo-100 to-indigo-200"
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/samuel-nissi/",
      icon: Linkedin,
      bgGradient: "from-[#0077B5] to-[#00A0DC]",
      hoverGradient: "from-[#00A0DC] to-[#0077B5]",
      label: "LinkedIn"
    },
    {
      href: "mailto:penaortegasamuel@gmail.com",
      icon: Mail,
      bgGradient: "from-[#EA4335] to-[#FBBC05]",
      hoverGradient: "from-[#FBBC05] to-[#EA4335]",
      label: "Email"
    },
    {
      href: "https://github.com/Nasor2",
      icon: GithubIcon,
      bgGradient: "from-[#24292E] to-[#34D058]",
      hoverGradient: "from-[#34D058] to-[#24292E]",
      label: "GitHub"
    },
    {
      href: "https://www.kaggle.com/samuelpeaortega",
      icon: () => (
        <img
          src={KaggleLogo}
          alt="Kaggle"
          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
        />
      ),
      bgGradient: "from-[#20BEFF] to-[#4BA2F2]",
      hoverGradient: "from-[#4BA2F2] to-[#20BEFF]",
      label: "Kaggle"
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      className={`relative flex items-center rounded-xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 gap-4 sm:gap-6 md:gap-8 lg:gap-16 overflow-hidden flex-col lg:flex-row bg-gradient-to-br ${backgroundVariants[backgroundVariant]}`}
    >
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 z-10 relative">
        <div className="relative group max-w-[200px] sm:max-w-[250px] md:max-w-[300px] w-full mx-auto">
          <motion.div
            className="absolute -inset-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full opacity-50 group-hover:opacity-70 transition-all duration-300 blur-xl"
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative">
            <img
              src={profileImage}
              alt="Samuel Peña"
              className="relative rounded-full w-full aspect-square border-4 border-gray-500 object-cover shadow-2xl transition-all duration-300 ease-in-out group-hover:shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3 z-10 text-center lg:text-left space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-4">
            Samuel Peña
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
              className="text-sm sm:text-base md:text-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Systems Engineer
            </motion.span>
          </h1>

          <p className="text-gray-800 mt-4 text-sm sm:text-base md:text-lg leading-relaxed group tracking-wide px-2 sm:px-4 lg:px-0">
            Backend-focused Systems Engineer with solid experience in Java and Spring Boot. Skilled in designing clean architectures, integrating databases, and building maintainable APIs.<br />
            I also have a background in Data Science and Artificial Intelligence, which enhances my problem-solving approach, even though I apply them in separate contexts.
            <motion.span 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="block mt-2 text-xs sm:text-sm text-gray-900 italic opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Crafting the future, one data point at a time
            </motion.span>
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center lg:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.2,
                    type: "spring", 
                    stiffness: 300 
                  } 
                }}
                className={`p-2 sm:p-3 rounded-full bg-gradient-to-br ${link.bgGradient} text-white shadow-lg relative overflow-hidden group`}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${link.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
                {typeof link.icon === "function" ? (
                  <link.icon />
                ) : (
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10" />
                )}
                {hoveredLink === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap"
                  >
                    {link.label}
                  </motion.div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};