import { Link } from "react-scroll";
import socialcon from '../data/Socialcon'
import Socials from "../components/Socials";


export default function Header(props) {

    const socialIcon = socialcon.map(social => {
        const componet = <Socials key={social.id} {...social} {...props}/>
        console.log(componet)
        return componet
    });
    
    return (
        <header>
            <nav className="navbar">
                <img src="../images/kratos.png" alt="logo" className="w-14 h-14" />
                <div className="desktopMenu">
                    <Link to="about">About</Link>
                    <Link to="about">Experience</Link>
                    <Link to="about">Projects</Link>
                    <Link to="about">Contact</Link>
                </div>
                <div className="navMenuContact-Mode flex">
                    {socialIcon}
                </div>
            </nav>
        </header>
    );
}