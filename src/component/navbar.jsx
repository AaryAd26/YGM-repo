import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/activities", label: "Activities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`navbar-wrap ${scrolled ? "navbar-wrap--scrolled" : ""}`}>
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="YGM Logo" className="navbar-logo" />
          <span className="navbar-title">
            <span className="navbar-title-main navbar-title-full">Yuvak Ganesh Mandal</span>
            <span className="navbar-title-main navbar-title-short">YGM</span>
            <span className="navbar-title-sub">Social Foundation</span>
          </span>
        </Link>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className={`navbar-toggle ${isOpen ? "navbar-toggle--open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar-mobile-panel ${isOpen ? "navbar-mobile-panel--open" : ""}`}>
        <div className="navbar-mobile-panel-inner">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `navbar-mobile-link ${isActive ? "navbar-mobile-link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;