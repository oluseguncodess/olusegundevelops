// import { Link } from "react-scroll";
import socialcon from "../data/Socialcon";
import Socials from "../components/Socials";
import { ThemeContext } from "../store/themeContext";
import { useContext, useState } from "react";
import MobileNav from "../components/MobileNav";

export default function Header() {
  const { theme, handleThemeSwitch } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((tog) => !tog);
  }

  const socialIcon = socialcon.map((social) => {
    const componet = <Socials key={social.id} {...social} />;
    return componet;
  });

  const menuLinks = [
    { id: 1, text: "About", link: "#about" },
    { id: 2, text: "Projects", link: "#projects" },
    // { id: 3, text: "Contact", link: "#contact" },
  ];

  const displayMenuLinks = menuLinks.map((link) => (
    <a
      key={link.id}
      href={link.link}
      className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-red-500 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:delay-200 pb-[5px] text-base dark:text-gray-200 tracking-wide leading-5 cursor-pointer text-center"
    >
      {link.text}
    </a>
  ));

  return (
    <header
      className="py-3 px-4 sm:px-8 supports-backdrop-blur:bg-[hsl(240_10%_3.9%_/_0.6)] fixed top-0 left-0 z-50 w-full border-b border-gray-500 backdrop-blur mb-[69px] flex justify-center"
      id="header"
    >
      <nav className="navbar flex items-center w-full justify-between md:max-w-[1400px] md:px-8">
        <img
          src="../images/kratos.png"
          alt="logo"
          className="w-11 h-11 sm:w-13 sm:h-13"
        />
        <div className="desktopMenu sm:flex gap-10 hidden mx-auto">
          {displayMenuLinks}
        </div>
        <div className="flex">
          {socialIcon}
          <button
            className={`h-9 w-9 p-2 ${
              theme === "light" ? "hover:bg-btn-white" : "hover:bg-btn-dark"
            } transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-md mr-1`}
            onClick={handleThemeSwitch}
          >
            <img
              src={
                theme === "light"
                  ? "../images/sun-dark.svg"
                  : "../images/moon-light.svg"
              }
              alt="dark-light mode"
            />
          </button>
          <button
            className={`h-9 w-9 p-2 ${
              theme === "light" ? "hover:bg-btn-white" : "hover:bg-btn-dark"
            } transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-md sm:hidden`}
            onClick={handleToggle} disabled={toggle}
          >
            <img
              src={
                theme === "light"
                  ? "../images/hamburger-menu-dark.svg"
                  : "../images/hamburger-menu-light.svg"
              }
              alt="hamburger-menu"
            />
          </button>
        </div>
      </nav>
      {toggle && <MobileNav setToggle={setToggle}/>}
    </header>
  );
}
