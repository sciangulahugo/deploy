// Traemos nuestro manejador de hipervinculos.
import { Link } from 'react-router-dom';
import './LandingPage.css';
import image from '../../image/dogLogo.webp';
export default function LandingPage() {
    return (
        <div className="landingContainer">
            {/* <div className="containerAll"> */}
            <div className="landing">
                <div className="landingInfo">
                    <span>Welcome to the</span>
                    <h1>DOG APP</h1>
                    <Link to="/home">
                        <button className="landingButton">Let's go!</button>
                    </Link>
                </div>
                <div className="landingImage">
                    <img src={image} alt="xd" />
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
