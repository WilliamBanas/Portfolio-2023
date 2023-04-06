import "./MainLogo.css";
import logo from "../../../assets/images/WB-RoundedSquareLogo.png";

export default MainLogo;

function MainLogo() {
    return (
        <div className="mainLogo">
            <img src={logo} className="mainLogo-image" />
        </div>
    )
}