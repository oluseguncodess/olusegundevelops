import movieQueryImg from "../assets/movie-query-app.png";
import domesticViolenceImg from "../assets/domestic-violence-app.png";
import quizAppImg from "../assets/quiz-app.png";

export const projectData = [
  {
    id: 1,
    img: movieQueryImg,
    name: "Movie query",
    status: "completed",
    description:
      "A movie search web application to search for any movie online, using the debounce function to improve search optimization.",
    stack: ["React", "Tailwindcss", "Vercel", "API"],
    github: "https://github.com/oluseguncodess/movie-query",
    liveSite: "https://movie-query-five.vercel.app/",
  },
  {
    id: 2,
    img: domesticViolenceImg,
    name: "Domestic violence Report",
    status: "completed",
    description:
      "A domestic violence reporting tool designed to provide a safe and efficient way for individuals to report incidents of domestic violence.",
    stack: ["React", "Tailwindcss", "Vercel", "API", "React Router"],
    github: "https://github.com/HildaPosada/Domestic-Violence-Reporting-Tool",
    liveSite: "https://domestic-violence-reporting-tool.vercel.app/",
  },
  {
    id: 3,
    img: quizAppImg,
    name: "Quiz App",
    status: "completed",
    description:
      "An interactive quiz application with added functionality using Javascript, responsive and user-friendly interface with Tailwind CSS and dynamic question rendering and score calculation.",
    stack: ["Javascript", "Tailwindcss", "Vercel"],
    github: "https://github.com/oluseguncodess/web3Bridge-quiz-app",
    liveSite: "https://web3-bridge-quiz-app.vercel.app/",
  },
];
