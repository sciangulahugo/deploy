import { Link, NavLink } from 'react-router-dom';
import '../Nav/Nav.css';
import logo from '../../image/dogLogo.webp';
export default function Nav() {
    return (
        <nav className="header">
            {/* <ul className="list">
                <li className="listItem">
                    <NavLink exact to="/home">
                        Home
                    </NavLink>
                </li>
                <li className="listItem">
                    <NavLink to="/newbreed">Create Breed</NavLink>
                </li>
            </ul> */}
            <div className="headerLogo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                {/* <h2>DOG APP</h2> */}
            </div>
            <nav className="headerLinks">
                <div className="links">
                    <NavLink exact to="/home">
                        Home
                    </NavLink>
                </div>
                <div className="links">
                    <NavLink to="/newbreed">Create Breed</NavLink>
                </div>
            </nav>
        </nav>
    );
}
