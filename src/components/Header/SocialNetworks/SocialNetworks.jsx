import "./SocialNetworks.css";
import linkedIn from "../../../assets/images/linkedIn-logo.png"
import github from "../../../assets/images/github-logo.png";
import mail from "../../../assets/images/mail-logo.png";

export default SocialNetworks;

function SocialNetworks() {
    return (
        <div className="socialNetworks">
            <div className="socialNetworks-grid">
                <img src={linkedIn} className="grid-linkedIn" />
                <img src={github} className="grid-github" />
                <img src={mail} className="grid-mail" />
            </div>

            <p className="socialNetworks-version">v1.0.0</p>
        </div>
    )
}