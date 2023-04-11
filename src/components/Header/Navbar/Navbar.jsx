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
                <div className="navbar-box">
                    <img src={resume} className="box-resumeLogo"/>
                </div>
            </NavLink>
            <NavLink to="/projects">
                <div className="navbar-box">
                    <img src={projects} className="box-projectsLogo"/>
                </div>
            </NavLink>
            <NavLink to="/contact">
                <div className="navbar-box">
                    <img src={contact} className="box-contactLogo"/>
                </div>
            </NavLink>
        </div>
    )
}