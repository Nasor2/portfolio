import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, GithubIcon, Rocket, StarIcon, CodeIcon, PaletteIcon } from "lucide-react";
import profileImage from "../assets/images/Fotojpg.jpg";
import KaggleLogo from "../assets/images/Icons/kaggle_k_short.svg";

export const ProfileSection = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [backgroundVariant, setBackgroundVariant] = useState(0);
  const containerRef = useRef(null);

  // Array of dynamic background gradients
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
      label: "LinkedIn",
      hoverEffect: {
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 }
      }
    },
    {
      href: "mailto:penaortegasamuel@gmail.com",
      icon: Mail,
      bgGradient: "from-[#EA4335] to-[#FBBC05]",
      hoverGradient: "from-[#FBBC05] to-[#EA4335]",
      label: "Email",
      hoverEffect: {
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 }
      }
    },
    {
      href: "https://github.com/Nasor2",
      icon: GithubIcon,
      bgGradient: "from-[#24292E] to-[#34D058]",
      hoverGradient: "from-[#34D058] to-[#24292E]",
      label: "GitHub",
      hoverEffect: {
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 }
      }
    },
    {
      href: "https://www.kaggle.com/samuelpeaortega",
      icon: () => (
        <img
          src={KaggleLogo}
          alt="Kaggle"
          className="w-5 h-5 object-contain"
        />
      ),
      bgGradient: "from-[#20BEFF] to-[#4BA2F2]",
      hoverGradient: "from-[#4BA2F2] to-[#20BEFF]",
      label: "Kaggle",
      hoverEffect: {
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 }
      }
    },
  ];

  const toggleBackgroundVariant = () => {
    setBackgroundVariant((prev) => (prev + 1) % backgroundVariants.length);
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      className={`relative flex items-center rounded-3xl p-8 md:p-12 gap-8 md:gap-16 overflow-hidden lg:flex-row flex-col bg-gradient-to-br ${backgroundVariants[backgroundVariant]}`}
    >
      {/* Background Variant Switcher */}
      <motion.button
        onClick={toggleBackgroundVariant}
        whileHover={{ scale: 1.1, rotate: 45 }}
        className="absolute top-4 right-4 z-20 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-all"
      >
        <PaletteIcon className="w-6 h-6 text-gray-700" />
      </motion.button>

      <motion.div
        drag
        dragElastic={0.16}
        whileTap={{ cursor: "grabbing" }}
        className="w-full md:w-1/3 z-10 relative flex justify-center"
      >
        <div className="relative group max-w-[300px] w-full">
          <motion.div
            className="absolute -inset-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full opacity-50 group-hover:opacity-70 transition-all duration-300 blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>

          <div className="relative">
            <img
              src={profileImage}
              alt="Samuel Peña"
              className="relative rounded-full w-full aspect-square border-4 border-gray-500 object-cover shadow-2xl transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 1.5],
                rotate: [0, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full p-3 shadow-2xl"
            >
              <StarIcon className="w-6 h-6" />
            </motion.div>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-2 right-2 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-full p-3 shadow-2xl"
          >
            <Rocket className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full md:w-2/3 z-10 text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black flex flex-col md:flex-row items-center justify-center md:justify-start">
            Samuel Peña
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 300
              }}
              className="ml-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
            >
              Systems Engineer
            </motion.span>
          </h1>

          <p className="text-gray-800 mb-6 text-base md:text-xl leading-relaxed group text-center md:text-left tracking-wide">
            Innovative Systems Engineer transforming complex data into powerful insights. 
            Expert in bridging advanced analytics with cutting-edge technologies to deliver 
            high-impact solutions that push the boundaries of what's possible.
            <motion.span 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="block mt-2 text-sm text-gray-900 italic opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Crafting the future, one data point at a time
            </motion.span>
          </p>

          <div className="flex space-x-4 mt-6 justify-center md:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: link.hoverEffect?.scale || 1.15,
                  rotate: link.hoverEffect?.rotate || [-5, 5, -5],
                  transition: link.hoverEffect?.transition || { duration: 0.2 },
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
                className={`p-3 rounded-full bg-gradient-to-br ${link.bgGradient} text-white shadow-xl relative overflow-hidden group`}
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
                  <link.icon className="w-6 h-6 relative z-10" />
                )}
                {hoveredLink === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md"
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