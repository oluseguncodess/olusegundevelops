import { Link } from "react-scroll";
import socialcon from '../data/Socialcon'
import Socials from "../components/Socials";

/* eslint-disable react/prop-types */
export default function Header(props) {
    const socialIcon = socialcon.map(social => {
        const componet = <Socials key={social.id} {...social} {...props}/>
        return componet
    });

    const menuLinks = [{id:1, to: "about", text: 'About'}, {id:2, to: "about", text: 'Projects'}, {id:3, to: "about", text: 'Contact'}]

    const displayMenuLinks = menuLinks.map(link => <Link key={link.id} to={`${link.to}`} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-red-500 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:delay-200 pb-[5px] text-base dark:text-gray-200 tracking-wide leading-5 cursor-pointer">{link.text}</Link>) 
    
    return (
        <header className="py-3 px-4 sm:px-8 supports-backdrop-blur:bg-[hsl(240_10%_3.9%_/_0.6)] fixed top-0 left-0 z-50 w-full border-b border-gray-500 backdrop-blur mb-[69px]">
            <nav className="navbar flex justify-between items-center">
                <img src="../images/kratos.png" alt="logo" className="w-11 h-11 sm:w-13 sm:h-13" />
                <div className="desktopMenu sm:flex gap-6 hidden">
                    {displayMenuLinks}
                </div>
                <div className="flex"> 
                    {socialIcon}
                    <button className={`h-9 w-9 p-2 ${props.parentTheme === 'light' ? 'hover:bg-btn-white' : 'hover:bg-btn-dark'} transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-md mr-1`} onClick={props.handleThemeSwitch}>
                        <img src={props.parentTheme === 'light' ? '../images/sun-dark.svg' : '../images/moon-light.svg'} alt="dark-light mode" />
                    </button>
                    <button className={`h-9 w-9 p-2 ${props.parentTheme === 'light' ? 'hover:bg-btn-white' : 'hover:bg-btn-dark'} transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-md sm:hidden`}>
                    <img src={props.parentTheme === 'light' ? '../images/hamburger-menu-dark.svg' : '../images/hamburger-menu-light.svg'} alt="hamburger-menu" />
                    </button>
                </div>
            </nav>
        </header>
    );
}