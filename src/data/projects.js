// src/data/projects.js
import Cheating from "../assets/images/projects/cheating.jpg";
import Accidentality from "../assets/images/projects/Accidentality.jpg"
import ECommerce from "../assets/images/projects/E-commerce.jpg"
import Comparendo from "../assets/images/projects/Comparendo.png"
import TransporMap from "../assets/images/projects/transpormap.png"
import buldsafe from "../assets/images/projects/buldsafe.jpeg"
import healths from "../assets/images/projects/healths.png"
import imson from "../assets/images/projects/insom.png"
import rloco from "../assets/images/projects/rloco.jpeg"
import oriel from "../assets/images/projects/oriel_logo.jpeg"
import microservicios from "../assets/images/projects/contrato-de-compraventa.png"
import roleauth from "../assets/images/projects/User-Authentication_-Understanding-the-Basics-Top-Tips.jpg"
import post from "../assets/images/projects/10-Best-Practices-for-High-Performing-LinkedIn-Posts-Apr-02-2024-09-24-47-6424-PM.png"
import booking from "../assets/images/projects/reservar_hotel_en_ingles.jpg"

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
    title: "ORIEL: Intelligent Assistance for Visual Impairment People",
    description: "Visual assistant for people with visual impairment.",
    tags: ["Deep Learning","IA", "Computer Vision", "Assistent", "Voice recognition", "Data Analysis", "System Architecture"],
    categories: ["Data Science & Data Analysis"],
    image: oriel,
    githubLink: "https://github.com/Nasor2/oriel",
    impact: "Enhance autonomy for visually impaired people"
  },
  {
    title: "BuildSafe",
    description: "Smart Safety Management and Monitoring for Personal Protective Equipment (PPE) Compliance on Construction Sites",
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis", "Machine Learning", "React", "FireBase", "MySQL", "IA", "Computer Vision",],
    categories: ["Web Development", "Data Science & Data Analysis"],
    image: buldsafe,
    demoLink: "https://www.youtube.com/watch?v=4gsLCIfnlEg",
    impact: "Improve security in construction projects"
  },
   {
    title: "TiendaYa: eCommerce in Barranquilla",
    description:
      "E-commerce platform for Barranquilla shopkeepers to easily go digital.",
    tags: ["Web Development", "eCommerce", "React", "Node.js", "MySQL", "JavaScript", "Claudinary", "Clever Cloud", "Cloud Storage"],
    categories: ["Web Development"],
    image: ECommerce,
    githubLink: "https://github.com/Nasor2/tiendaYa-project",
    demoLink: "https://www.youtube.com/watch?v=r4Y944mHQAA",
    impact: "Enhancing local eCommerce and digital accessibility.",
  },
  {
    title: "TransporMap",
    description:
      "Java app that lets users report real-time road hazards and obstructions, reshaping urban mobility.",
    tags: ["Java", "Geography", "Maps", "Social", "Transport", "Databases"],
    categories: [],
    image: TransporMap,
    githubLink: "https://github.com/jhanhrndz/transpormap",
    impact: "Empowering users for safer urban mobility.",
  },
  {
    title: "Purchase of real estate API",
    description: "Spring Boot API for real estate purchase management.",
    tags: ["Java", "Spring Boot", "API", "Microservices", "SQL", "Api Gateway", "Eureka", "Docker", "Swagger"],
    image: microservicios,
    githubLink: "https://github.com/Nasor2/spring-boot-microservice-practice-inmueble-compra",
    impact: "Facilitates organized and reliable property purchase processes.",
  },
  {
  title: "Role Auth API",
  description: "Spring Boot API implementing role-based authentication and authorization.",
  tags: ["Java", "Spring Boot", "Spring Security", "JWT", "Authentication", "REST API", "Docker", "Swagger"],
  image: roleauth,
  githubLink: "https://github.com/Nasor2/role-auth-api",
  impact: "Provides secure user authentication and role-based access control."
},
{
  title: "Posts API",
  description: "Spring Boot REST API for managing user posts and content.",
  tags: ["Java", "Spring Boot", "REST API", "CRUD", "SQL", "Redis", "Docker", "Swagger"],
  image: post,
  githubLink: "https://github.com/Nasor2/posts-api",
  impact: "Enables structured management of user-generated content."
},
{
  title: "Hotel Booking API",
  description: "Spring Boot REST API for managing hotel room reservations.",
  tags: ["Java", "Spring Boot", "REST API", "Booking System", "SQL", "Docker", "Swagger"],
  image: booking,
  githubLink: "https://github.com/Nasor2/hotel-booking-api",
  impact: "Simplifies hotel room booking and reservation management."
},
  
  {
    title: "Heart Disease Detection",
    description: "This project compares ML models (SVM, decision tree, logistic regression) using clinical data to predict heart disease.",
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis", "Machine Learning", "IA",],
    categories: ["Data Science & Data Analysis"],
    image: healths,
    colabLink: "https://colab.research.google.com/drive/11nkOb0NFLhBhXwCSdfmz_OPiR5pj5YbH?usp=sharing",
    impact: "It highlights AI's potential to support accurate and early medical diagnosis."
  },
  {
    title: "Sleep Health and Lifestyle Disorder Prediction",
    description: "This project uses clinical and lifestyle data to train machine learning models (logistic regression and MLP) to classify sleep disorders such as insomnia and sleep apnea.",
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis", "Machine Learning"],
    categories: ["Data Science & Data Analysis"],
    image: imson,
    colabLink: "https://colab.research.google.com/drive/1CxhcjP1FyA5cQMqSd-fRPsEpxN2Nu76N?usp=sharing",
    impact: "Demostrates the potential of AI to analyze health patterns and support early detection of sleep-related conditions.",
  }
  ,
  {
    title: "Traffic Fines Analysis in Barranquilla",
    description: "Analysis of traffic fines in Barranquilla, uncovering trends and violations.",
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis", "Machine Learning"],
    categories: ["Data Science & Data Analysis"],
    image: Comparendo,
    kaggleLink: "https://www.kaggle.com/code/samuelpeaortega/comparendos-en-barranquilla-colombia",
    impact: "Insights into traffic violations.",
  }
  ,
  {
    title: "Accidentality in Barranquilla Colombia",
    description:
      "Analyzed traffic accidents in Barranquilla to identify patterns and predict severity, aiding in safety improvements.",
    tags: ["Data Science & Data Analysis", "Data Analysis", "Python", "Machine Learning", "Geospatial Analysis"],
    categories: ["Data Science & Data Analysis"],
    image: Accidentality,
     kaggleLink: "https://www.kaggle.com/code/samuelpeaortega/accidentality-in-barranquilla-colombia",
    impact: "Improves safety with data-driven insights.",
  }
  
  /*,
  
 
  {
    title: "Inferential Statistics Case Study Practices with R",
    description:
      "Practices with R of Inferential Statistics case studies and examples from course college.",
    tags: ["Data Analysis", "R", "R Studio", "Machine Learning", "Linear Regression", "ANOVA", "Hypothesis test"],
    categories: ["Data Science & Data Analysis"],
    image: rloco,
    githubLink: "https://github.com/Nasor2/r-inferential-statistics-practicecs",
    impact: "Enhances statistical reasoning and real-world data analysis skills using R.",
  },
  {
    title: "Case Study: Cheating",
    description:
      "A study analyzing factors contributing to infidelity, using data science to build predictive models and provide insights.",
    tags: ["Data Analysis", "Python", "Data Visualization", "Analysis"],
    categories: ["Data Science & Data Analysis", "Web Development"],
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
  */
];
