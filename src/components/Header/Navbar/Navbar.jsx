import "./Navbar.css";
import resume from "../../../assets/images/resume-logo.png";
import projects from "../../../assets/images/projects-logo.png";
import contact from "../../../assets/images/contact-logo.png";
import { NavLink } from "react-router-dom";


export default Navbar;

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">
                    <img src={resume} className="navbar-resumeLogo"/>
            </NavLink>
            <NavLink to="/projects">
                    <img src={projects} className="navbar-projectsLogo"/>
            </NavLink>
            <NavLink to="/contact">
                    <img src={contact} className="navbar-contactLogo"/>
            </NavLink>
        </div>
    )
}