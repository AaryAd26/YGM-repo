import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">YGM Social Foundation</h3>
          <p className="footer-text">
            Empowering communities through social initiatives, educational programs, 
            and charitable activities. Making a positive impact one life at a time.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📺</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <a href="/" className="footer-link">Home</a>
          <a href="/activities" className="footer-link">Our Activities</a>
          <a href="/gallery" className="footer-link">Photo Gallery</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <p className="footer-text">📍 M.I.G Colony Hanuman Mandir Ground, Trimurti Nagar, Nagpur - 440022</p>
          <p className="footer-text">📞  +91-8308855630</p>
          <p className="footer-text">✉️ ygmsocialfoundation@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Get Involved</h3>
          <p className="footer-text">Join us in making a difference in our community.</p>
          <p className="footer-text">Volunteer opportunities available.</p>
          <p className="footer-text">Donations are always welcome.</p>
          <p className="footer-text">Together we can build a better future.</p>
        </div>
      </div>

      <div className="bottom-bar">
        <p>&copy; {new Date().getFullYear()} YGM Social Foundation. All rights reserved. | 
           Made with ❤️ for the community</p>
      </div>
    </footer>
  );
};

export default Footer;
