import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to a section on home page
  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 500, offset: -70 });
      }, 200);
    } else {
      scroller.scrollTo(sectionId, { smooth: true, duration: 500, offset: -70 });
    }
  };

  // Navigate to page and scroll to top
  const goToPageTop = (path) => {
    setMenuOpen(false);
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <nav className="navbar">
      <div className="logo">Naija Nurse</div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={(e) => { e.preventDefault(); goToPageTop("/"); }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => { e.preventDefault(); scrollToSection("author"); }}>
            Author
          </Link>
        </li>
        <li>
          <Link to="/book-preview" onClick={(e) => { e.preventDefault(); goToPageTop("/book-preview"); }}>
            Buy Now
          </Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={(e) => { e.preventDefault(); goToPageTop("/testimonials"); }}>
            Testimonials
          </Link>
        </li>
      </ul>
    </nav>
  );
}
