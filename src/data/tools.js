// src/data/tools.js
import Python from "../assets/images/Icons/python.png"
import Excel from "../assets/images/Icons/Excel.png"
import react from "../assets/images/Icons/react.svg"
import angular from "../assets/images/Icons/angular.png"
import GCloudPlatform from "../assets/images/Icons/Google-cloud-platform.svg"
import ScikitLearn from "../assets/images/Icons/Scikit.png"
import MySQL from "../assets/images/Icons/mysql.png"
import TypeScript from "../assets/images/Icons/typescript.png"
import BootStrap from "../assets/images/Icons/bootstrap.png"
import Docker from "../assets/images/Icons/docker.png"
import PostgreSQL from "../assets/images/Icons/posgresql.png"
import AWS from "../assets/images/Icons/aws.png"
import Java from "../assets/images/Icons/java.png"
import SpringBoot from "../assets/images/Icons/spring.png"
import Maven from "../assets/images/Icons/maven2.png"
import Swagger from "../assets/images/Icons/swagger.png"
import tailwindcss from "../assets/images/Icons/tailwindcss.png"

export const TOOL_CATEGORIES = [
  {
    name: "Data Science & Analytics",
    tools: [
      { name: "Python", icon: Python },
      { name: "Scikit-learn", icon: ScikitLearn },
      { name: "Excel", icon: Excel },
    ]
  },
  {
    name: "Back-end Development",
    tools: [
      { name: "Java", icon: Java },
      { name: "Spring Boot", icon: SpringBoot },
      { name: "Maven", icon: Maven },
      { name: "Swagger", icon: Swagger },
    ]
  },
  {
    name: "Front-end Development",
    tools: [
      { name: "TypeScript", icon: TypeScript },
      { name: "Angular", icon: angular },
      { name: "React", icon: react },
      { name: "Bootstrap", icon: BootStrap },
      { name: "Tailwind CSS", icon: tailwindcss }

    ]
  },
  {
    name: "Databases & Cloud",
    tools: [
      { name: "MySQL", icon: MySQL },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Docker", icon: Docker },
      { name: "Google Cloud Platform", icon: GCloudPlatform },
      { name: "AWS", icon: AWS }

    ]
  }
];