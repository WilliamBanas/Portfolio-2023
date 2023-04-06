import Contact from "./Contact/Contact";
import "./Content.css";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import { Routes, Route } from "react-router-dom";

export default Content;

function Content() {
    return(
        <div className="content">
            <Routes>
                <Route path="/" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}