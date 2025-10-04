import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Naija Nurse</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to="author" smooth={true} duration={500}>Author</ScrollLink></li>
        <li><Link to="/book-preview">Buy Now</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
      </ul>
    </nav>
  );
}
