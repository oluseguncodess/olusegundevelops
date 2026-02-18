import movieQueryImg from "../assets/movie-query-app.png";
import quizAppImg from "../assets/quiz-app.png";
import productPageImg from '../assets/product-page.png'
import inventoryImg from '../assets/inventory-app.png'

export const projectData = [
  {
    id: 'a1',
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
    id: 'a2',
    img: inventoryImg,
    name: "Inventory Management Application",
    status: "completed",
    description:
      "A clean, responsive web application for small businesses and side hustles to track products, manage stock levels, and handle basic inventory operations.",
    stack: ["Typescript", "Tailwindcss", "Vercel", "NextJs", "Shadcn"],
    github: "https://github.com/oluseguncodess/inventory-management",
    liveSite: "https://inventory-management-hazel-one.vercel.app",
  },
  {
    id: 'a3',
    img: productPageImg,
    name: "Ecommerce Product Page",
    status: "completed",
    description:
      "A fully responsive ecommerce product page with dynamic product showcase, interactive image gallery, and seamless add-to-cart functionality using modern web technologies.",
    stack: ["ReactJS", "Tailwindcss", "Vercel"],
    github: "https://github.com/oluseguncodess/product-page",
    liveSite: "https://product-page-alpha-seven.vercel.app/",
  },
  {
    id: 'a4',
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
