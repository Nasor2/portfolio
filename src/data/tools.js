// src/data/tools.js
import Python from "../assets/images/Icons/python.png"
import SQL from "../assets/images/Icons/SQL.png"
import ChartBar from "../assets/images/Icons/POWER_BI.svg"
import JS from "../assets/images/Icons/JS.png"
import Excel from "../assets/images/Icons/Excel.png"
import git from "../assets/images/Icons/git.png"
import react from "../assets/images/Icons/react.svg"
import GCloudPlatform from "../assets/images/Icons/Google-cloud-platform.svg"
import Spark from "../assets/images/Icons/Apache Spark.svg"
import ScikitLearn from "../assets/images/Icons/Scikit.png"
import Flutter from "../assets/images/Icons/flutter.png"
import Tailwindcss from "../assets/images/Icons/tailwindcss.png"
import MySQL from "../assets/images/Icons/mysql.png"
import PHP from "../assets/images/Icons/php.png"
import NodeJS from "../assets/images/Icons/nodejs.png"
import wordpress from "../assets/images/Icons/wordpress.png"
import R from "../assets/images/Icons/r.png"
import TypeScript from "../assets/images/Icons/typescript.png"
import Jupyter from "../assets/images/Icons/jupyter.png"
import BootStrap from "../assets/images/Icons/bootstrap.png"
import Expressjs from "../assets/images/Icons/expressjs.png"
import Docker from "../assets/images/Icons/docker.png"
import PostgreSQL from "../assets/images/Icons/posgresql.png"
import Figma from "../assets/images/Icons/figma.png"
import Postman from "../assets/images/Icons/postman.png"
import VsCode from "../assets/images/Icons/vscode.png"
import GitHub from "../assets/images/Icons/github.png"
import NextJS from "../assets/images/Icons/nextjs.png"
import AWS from "../assets/images/Icons/aws.png"

export const TOOL_CATEGORIES = [
  {
    name: "Data Science & Analytics",
    tools: [
      { name: "Python", icon: Python },
      { name: "R", icon: R },
      { name: "Scikit-learn", icon: ScikitLearn },
      { name: "Power BI", icon: ChartBar },
      { name: "Excel", icon: Excel },
      { name: "Jupyter Notbooks", icon: Jupyter },
      { name: "Apache Spark", icon: Spark }
    ]
  },
  {
    name: "Web Development",
    tools: [
      {name: "Wordpress", icon: wordpress},
      { name: "JavaScript", icon: JS },
      { name: "TypeScript", icon: TypeScript},
      { name: "React", icon: react },
      { name: "Next.js", icon: NextJS },
      { name: "Node.js", icon: NodeJS },
      { name: "PHP", icon: PHP },
      { name: "Express.js", icon: Expressjs },
      { name: "Tailwindcss", icon: Tailwindcss },
      { name: "Bootstrap", icon: BootStrap}
    ]
  },
  {
    name: "Mobile Development",
    tools: [
      { name: "Flutter", icon: Flutter }
    ]
  },
  {
    name: "Databases & Cloud",
    tools: [
      { name: "SQL", icon: SQL },
      { name: "MySQL", icon: MySQL },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Docker", icon: Docker },
      { name: "Google Cloud Platform", icon: GCloudPlatform },
      { name: "AWS", icon: AWS }

    ]
  },
  {
    name: "Development Tools",
    tools: [
      { name: "Git", icon: git },
      { name: "Figma", icon: Figma },
      { name: "Postman", icon: Postman },
      { name: "VS Code", icon: VsCode },
      { name: "GitHub", icon: GitHub }

    ]
  }
];