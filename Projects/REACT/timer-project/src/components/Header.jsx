import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h2>Timer App</h2>
      </Link>

      <nav>
        <NavLink to={"/"}>Home</NavLink>
        {" | "}
        <NavLink to={"/about"}>About</NavLink>
        {" | "}
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </header>
  );
}
export default Header;
