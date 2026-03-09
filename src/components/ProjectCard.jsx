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
  <div className="bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all hover:shadow-3xl group flex flex-col h-full hover:scale-[1.01]">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-36 sm:h-44 md:h-52 object-cover filter brightness-90 group-hover:brightness-75 transition-all duration-300 group-hover:scale-105"
      />
    </div>
    
    <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3 flex-grow flex flex-col">
      <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h3>
      
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-1.5 mb-2 sm:mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300 shadow-md"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center text-emerald-600 space-x-1.5 mb-2 sm:mb-3">
        <Award className="text-emerald-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="text-xs font-semibold text-emerald-700">{impact}</span>
      </div>
      
      <div className="flex space-x-1.5 sm:space-x-2 mt-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gray-900 text-white py-1.5 sm:py-2 rounded-lg hover:bg-gray-800 transition-all duration-500 flex items-center justify-center space-x-1.5 group shadow-lg hover:shadow-2xl"
          >
            <Github 
              size={14}
              className="sm:w-4 sm:h-4 group-hover:rotate-[360deg] transition-transform duration-700" 
            />
            <span className="text-xs sm:text-sm">GitHub</span>
          </a>
        )}
        
        {kaggleLink && (
          <a
            href={kaggleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gradient-to-r from-[#6cb3ff] to-[#409cff] text-[#0a325c] py-1.5 sm:py-2 rounded-lg hover:opacity-90 transition-all duration-500 flex items-center justify-center space-x-1.5 group shadow-lg hover:shadow-2xl"
          >
            <img
              src={kaggle}
              alt="Kaggle"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-125 transition-transform"
            />
            <span className="text-xs sm:text-sm">Kaggle</span>
          </a>
        )}
        
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gradient-to-r from-green-500 to-blue-600 text-white py-1.5 sm:py-2 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-500 flex items-center justify-center space-x-1.5 group shadow-lg hover:shadow-2xl"
          >
            <Globe size={14} className="sm:w-4 sm:h-4 group-hover:animate-ping" />
            <span className="text-xs sm:text-sm">Demo</span>
          </a>
        )}

        {colabLink && (
          <a
            href={colabLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gradient-to-r from-gray-200 to-gray-100 text-black py-1.5 sm:py-2 rounded-lg hover:opacity-90 transition-all duration-500 flex items-center justify-center space-x-1.5 group shadow-lg hover:shadow-2xl"
          >
            <img
              src={colab}
              alt="Google Colab"
              className="h-4 group-hover:scale-125 transition-transform"
            />
            <span className="text-xs sm:text-sm">Google Colaboratory</span>
          </a>
        )}
      </div>
    </div>
  </div>
);