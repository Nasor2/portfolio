// src/data/projects.js
import Cheating from "../assets/images/projects/cheating.jpg";
import Calculator from "../assets/images/projects/calculator.jpg";
import Etch_a_Sketch from "../assets/images/projects/Etch-a-sketch.jpg";
import Roc_paper_scisscors from "../assets/images/projects/rock-paper-scisscors.jpg";
import Mood from "../assets/images/projects/Mood.jpg"
import Pokemons from "../assets/images/projects/pokemons.jpg"
import TaskList from "../assets/images/projects/task_list.jpg"
import Accidentality from "../assets/images/projects/Accidentality.jpg"

export const COLORS = {
  primary: {
    dark: "#1F2937",
    medium: "#374151",
    light: "#6B7280",
  },
  neutral: {
    darkest: "#111827",
    dark: "#1F2937",
    medium: "#4B5563",
    light: "#9CA3AF",
  },
  accent: {
    gray: "#6B7280",
    black: "#111827",
  },
};

export const PROJECTS = [
  {
    title: "Accidentality in Barranquilla Colombia",
    description:
      "Analyzed traffic accidents in Barranquilla to identify patterns and predict severity, aiding in safety improvements.",
    tags: ["Data Science", "Data Analysis", "Python", "Machine Learning", "Geospatial Analysis"],
    categories: ["Data Science", "Data Analysis"],
    image: Accidentality,
     kaggleLink: "https://www.kaggle.com/code/samuelpeaortega/accidentality-in-barranquilla-colombia",
    impact: "Improves safety with data-driven insights.",
  },
  {
    title: "Case Study: Cheating",
    description:
      "A study analyzing factors contributing to infidelity, using data science to build predictive models and provide insights.",
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis"],
    categories: ["Data Science", "Data Analysis", "Web Development"],
    image: Cheating,
    githubLink: "https://github.com/Nasor2/study_case_cheating",
    demoLink: "https://nasor2.github.io/study_case_cheating/",
    impact: "Infidelity behavior patterns explored.",
  },
  {
    title: "Calculator",
    description:
      "A web calculator for basic arithmetic operations, demonstrating front-end and JavaScript logic",
    tags: ["JavaScript", "HTML", "CSS", "Web App", "Web Design"],
    categories: ["Web Development"],
    image: Calculator,
    githubLink: "https://github.com/Nasor2/Calculator",
    demoLink: "https://nasor2.github.io/Calculator/",
    impact: "Simplifies basic calculations for users.",
  },
  {
    title: "Etch a Sketch",
    description:
      "A drawing app that simulates the classic Etch-a-Sketch, allowing users to draw on a grid with various color modes.",
    tags: ["JavaScript", "HTML", "CSS", "Web App", "Creative Tool"],
    categories: ["Web Development"],
    image: Etch_a_Sketch,
    githubLink: "https://github.com/Nasor2/etch-a-sketch",
    demoLink: "https://nasor2.github.io/etch-a-sketch/",
    impact: "Encourages creativity and drawing.",
  },
  {
    title: "Rock Paper and Scissors",
    description:
      "A web game where the user plays rock, paper, scissors against the computer, with a best-of-five rounds format.",
    tags: ["JavaScript", "HTML", "CSS", "Web App", "Game Development"],
    categories: ["Web Development"],
    image: Roc_paper_scisscors,
    githubLink: "https://github.com/Nasor2/Rock-paper-and-scissors",
    demoLink: "https://nasor2.github.io/Rock-paper-and-scissors/",
    impact: "Provides fun, engaging gameplay.",
  },
  {
    title: "Mood Ajuster",
    description:
      "A tool to adjust a user’s mood level with buttons to increase, decrease, or reset their happiness indicator.",
    tags: ["JavaScript", "HTML", "CSS", "Interactive Tool"],
    categories: ["Web Development"],
    image: Mood,
    githubLink: "https://github.com/Nasor2/Mood-AJuster",
    demoLink: "https://nasor2.github.io/Mood-AJuster/",
    impact: "Enhances interactivity with feedback.",
  },
  {
    title: "Pokedex",
    description:
      "An interactive Pokémon encyclopedia fetching data from the PokeAPI. Deployed using React and Tailwind.",
    tags: ["React", "API", "JavaScript", "Interactive Tool", "Web App"],
    categories: ["Web Development"],
    image: Pokemons,
    githubLink: "https://github.com/Nasor2/poke-API",
    demoLink: "https://poke-api-delta-ten.vercel.app/",
    impact: "Displays Pokémon data interactively.",
  },
  {
    title: "Task List",
    description:
      "A task management app to organize daily activities effectively.",
    tags: ["React", "JavaScript", "Web App", "Productivity"],
    categories: ["Web Development"],
    image: TaskList,
    githubLink: "https://github.com/Nasor2/tasks-list",
    demoLink: "https://tasks-list-roan.vercel.app/",
    impact: "Displays Pokémon data interactively.",
  },
];
