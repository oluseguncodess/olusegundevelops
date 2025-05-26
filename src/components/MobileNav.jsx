import { useContext } from "react";
import { ThemeContext } from "../store/themeContext";
import { X } from "lucide-react";

/* eslint-disable react/prop-types */
export default function MobileNav({ setToggle }) {
  function handleCloseMobileNav() {
    setToggle(false);
  }

  const { theme } = useContext(ThemeContext);

  // const hoverClasses = 'hover:underline'

  return (
    <nav
      id="mobile-nav"
      className="sm:hidden absolute top-[69px] left-0 w-full bg-[hsl(240_10%_3.9%_/_0.6)] backdrop-blur border-b border-gray-500 z-50"
    >
      <button onClick={handleCloseMobileNav} className="pl-4 pt-4 group-hover:h-14">
        <X/>
      </button>
      <ul className="flex flex-col gap-4 p-4 pt-2 w-full">
        <li>
          <a
            href="#about"
            className={`text-base dark:text-gray-200 tracking-wide ${
              theme === "light"
                ? "hover:text-white hover:underline"
                : "hover:text-black hover:underline"
            }`}
            onClick={handleCloseMobileNav}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`text-base dark:text-gray-200 tracking-wide ${
              theme === "light"
                ? "hover:text-white hover:underline"
                : "hover:text-black hover:underline"
            }`}
            onClick={handleCloseMobileNav}
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
