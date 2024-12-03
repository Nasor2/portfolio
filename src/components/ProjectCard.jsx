import React from "react";
import { Globe, Github, Sparkles, Award } from "lucide-react";
import kaggle from "../assets/images/Icons/kaggle_k_short.svg";

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubLink,
  demoLink,
  kaggleLink,
  impact,
}) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transform transition-all hover:shadow-3xl group flex flex-col h-full hover:scale-[1.01]">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover filter brightness-90 group-hover:brightness-75 transition-all duration-300 group-hover:scale-105"
      />
      <div className="absolute top-4 right-4 bg-gradient-to-br from-yellow-200 via-gray-200 to-yellow-100 text-gray-700 rounded-full p-3 shadow-lg animate-pulse-slow">
        <Sparkles 
          size={20} 
          className="text-yellow-500" 
        />
      </div>
    </div>
    
    <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col">
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
        {title}
      </h3>
      
      <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300 shadow-md"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center text-emerald-600 space-x-2 mb-4">
        <Award className="text-emerald-500" size={18} />
        <span className="text-xs md:text-sm font-semibold text-emerald-700">{impact}</span>
      </div>
      
      <div className="flex space-x-3 mt-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-500 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-2xl"
          >
            <Github 
              size={18} 
              className="group-hover:rotate-[360deg] transition-transform duration-700" 
            />
            <span>GitHub</span>
          </a>
        )}
        
        {kaggleLink && (
          <a
            href={kaggleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gradient-to-r from-[#6cb3ff] to-[#409cff] text-[#0a325c] py-3 rounded-xl hover:opacity-90 transition-all duration-500 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-2xl"
          >
            <img
              src={kaggle}
              alt="Kaggle"
              className="w-5 h-5 group-hover:scale-125 transition-transform"
            />
            <span>Kaggle</span>
          </a>
        )}
        
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-500 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-2xl"
          >
            <Globe size={18} className="group-hover:animate-ping" />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);