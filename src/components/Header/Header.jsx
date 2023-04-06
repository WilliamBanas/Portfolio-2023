import "./Header.css";
import MainLogo from "./MainLogo/MainLogo";
import Navbar from "./Navbar/Navbar";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

export default Header;

function Header() {
    return (
        <div className="header">
            <MainLogo />
            <Navbar />
            <SocialNetworks />
        </div>
    )
}