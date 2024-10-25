import { Link, NavLink } from "react-router-dom";

function Nav(){
    return(
        <div className="nav-container">
        <ul className="nav">
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>Contact</NavLink>
            </li>
        </ul>
        <Link to={"/login"}>Sign In</Link>
        </div>

    )
}

export default Nav