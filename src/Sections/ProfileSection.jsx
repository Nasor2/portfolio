import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, GithubIcon, MessageCircle } from "lucide-react";
import profileImage from "../assets/images/Fotojpg.png";
import KaggleLogo from "../assets/images/Icons/kaggle_k_short.svg";

export const ProfileSection = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const containerRef = useRef(null);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/samuel-nissi/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700",
    },
    {
      href: "mailto:penaortegasamuel@gmail.com",
      icon: Mail,
      label: "Email",
      color: "from-red-500 to-pink-600",
      hoverColor: "from-red-600 to-pink-700",
    },
    {
      href: "https://wa.me/573245067826",
      icon: MessageCircle,
      label: "WhatsApp",
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-600 to-green-700",
    },
    {
      href: "https://github.com/Nasor2",
      icon: GithubIcon,
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
      hoverColor: "from-gray-800 to-black",
    },
    {
      href: "https://www.kaggle.com/samuelpeaortega",
      icon: () => (
        <img src={KaggleLogo} alt="Kaggle" className="w-5 h-5 object-contain" />
      ),
      label: "Kaggle",
      color: "from-blue-400 to-cyan-500",
      hoverColor: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Animated Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Image Container */}
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
              <img
                src={profileImage}
                alt="Samuel Peña"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5"
              whileHover={{ scale: 1.1 }}
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Available
            </motion.div>
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center space-y-6"
        >
          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
              Samuel Peña
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto max-w-xs"
            />

            <p className="text-xl md:text-2xl font-semibold text-gray-600">
              Systems Engineer
            </p>
          </div>

          {/* Bio */}
<div className="max-w-2xl mx-auto">
  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
    Systems Engineer focused on{" "}
    <span className="font-semibold text-blue-600">
      AI integration and intelligent automation
    </span>
    . Building AI-powered tools and automating business processes using LLMs, AWS, and Python.
  </p>
  <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-3">
    Passionate about turning complex processes into{" "}
    <span className="font-semibold text-purple-600">
      smart, scalable solutions
    </span>{" "}
    ready for real-world use.
  </p>
</div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex justify-center gap-3 md:gap-4 py-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4 + index * 0.03, duration: 0.3 },
                }}
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative p-3 md:p-4 rounded-full bg-gradient-to-br ${link.color} text-white shadow-lg hover:shadow-xl transition-shadow duration-200 group overflow-hidden cursor-pointer`}
              >
                {/* Hover Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${link.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                />

                {/* Icon */}
                <div className="relative z-10">
                  {typeof link.icon === "function" ? (
                    <link.icon />
                  ) : (
                    <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </div>

                {/* Label Tooltip */}
                {hoveredLink === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap pointer-events-none shadow-xl"
                  >
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                    {link.label}
                  </motion.div>
                )}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
