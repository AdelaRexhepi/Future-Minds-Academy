import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-header">About Us</h2>
          <p>
            We are a modern web solutions company dedicated to providing
            high-quality and innovative digital experiences.
          </p>
        </div>

        <div className="footer-section links">
          <h2 className="footer-header">Quick Links</h2>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2 className="footer-header">Follow Us</h2>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Modern Web Solutions | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
