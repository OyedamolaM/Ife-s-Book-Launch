import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigateTop = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Naija Nurse</h2>
          <p>Your go-to guide for wellness content ideas</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateTop("/");
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/book-preview"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateTop("/book-preview");
                }}
              >
                Buy Now
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateTop("/testimonials");
                }}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/diariesofanaijanurse?igsh=bDk3ZGt2MnF2MDBv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/167vQiFJAH/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ifeoluwa-oluborode-9624241ab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Naija Nurse. All rights reserved.</p>
      </div>
    </footer>
  );
}
