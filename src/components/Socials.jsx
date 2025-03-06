/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../store/themeContext";
export default function Socials(props) {
    const {theme} = useContext(ThemeContext)
    let coverImg;
    if (theme === 'light') {
        coverImg = props.imgDark;
    } else {
        coverImg = props.imgLight;
    }
    return(
        <a href={props.link} target="_blank">
            <div className={`socials h-9 w-9 p-2 ${theme === 'light' ? 'hover:bg-btn-white' : 'hover:bg-btn-dark'} transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-md mr-1`}>
                <img src={coverImg} alt="social-links" className="h-full w-full object-cover" />
            </div>
        </a>
    );
}