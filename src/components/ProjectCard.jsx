import React from "react";
import { Globe, Github, Award } from "lucide-react";
import kaggle from "../assets/images/Icons/kaggle_k_short.svg";
import { a } from "framer-motion/client";
import colab from "../assets/images/Icons/Google_Colaboratory_SVG_Logo.svg"

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubLink,
  demoLink,
  kaggleLink,
  colabLink,
  impact,
}) => (
  <div className="bg-white rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all hover:shadow-3xl group flex flex-col h-full hover:scale-[1.01]">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover filter brightness-90 group-hover:brightness-75 transition-all duration-300 group-hover:scale-105"
      />
    </div>
    
    <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 flex-grow flex flex-col">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h3>
      
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300 shadow-md"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center text-emerald-600 space-x-2 mb-3 sm:mb-4">
        <Award className="text-emerald-500 w-4 h-4 sm:w-5 sm:h-5" />
        <span className="text-xs sm:text-sm font-semibold text-emerald-700">{impact}</span>
      </div>
      
      <div className="flex space-x-2 sm:space-x-3 mt-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gray-900 text-white py-2 sm:py-3 rounded-xl hover:bg-gray-800 transition-all duration-500 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-2xl"
          >
            <Github 
              size={16}
              className="sm:w-5 sm:h-5 group-hover:rotate-[360deg] transition-transform duration-700" 
            />
            <span className="text-sm sm:text-base">GitHub</span>
          </a>
        )}
        
        {kaggleLink && (
          <a
            href={kaggleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gradient-to-r from-[#6cb3ff] to-[#409cff] text-[#0a325c] py-2 sm:py-3 rounded-xl hover:opacity-90 transition-all duration-500 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-2xl"
          >
            <img
              src={kaggle}
              alt="Kaggle"
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform"
            />
            <span className="text-sm sm:text-base">Kaggle</span>
          </a>
        )}
        
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 sm:py-3 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-500 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-2xl"
          >
            <Globe size={16} className="sm:w-5 sm:h-5 group-hover:animate-ping" />
            <span className="text-sm sm:text-base">Demo</span>
          </a>
        )}

        {colabLink && (
          <a
            href={colabLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gradient-to-r from-gray-200 to-gray-100 text-black py-2 sm:py-3 rounded-xl hover:opacity-90 transition-all duration-500 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-2xl"
          >
            <img
              src={colab}
              alt="Google Colab"
              className="h-5 group-hover:scale-125 transition-transform"
            />
            <span className="text-sm sm:text-base">Google Colaboratory</span>
          </a>
        )}
      </div>
    </div>
  </div>
);