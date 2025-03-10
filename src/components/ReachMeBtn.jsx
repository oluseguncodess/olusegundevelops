import { useContext } from "react";
import { ThemeContext } from "../store/themeContext";
export default function ReachMeBtn() {
    const {theme} = useContext(ThemeContext)

    return (
        <a href="https://drive.google.com/file/d/1eFVKPC2gQ5436WEJriIU3cd_E54xyQO4/view?usp=sharing
        " target="_blank">
            <button className="flex gap-3 justify-center items-center py-2 px-3 dark:bg-white bg-black rounded-full">
                <img src={theme === 'light' ? '../images/mail-light.svg' : '../images/mail-dark.svg'} alt="mail-icon" />
                <h3 className="dark:text-black text-gray-200 text-sm font-bold tracking-tighter">Resume</h3>
            </button>
        </a>
    );
}