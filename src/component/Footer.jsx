import React from "react";
import "../styles/Footer.css";

const SOCIAL_LINKS = [
  { name: "Mail", href: "ygmsocialfoundation@gmail.com", icon: "mail" },
  { name: "Instagram", href: "https://www.instagram.com/mana_cha_raja__/?hl=en", icon: "instagram" },
  { name: "YouTube", href: "https://www.youtube.com/@YGMSocialFoundation-z3o", icon: "youtube" }
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our activities", href: "/activities" },
  { label: "Photo gallery", href: "/gallery" },
  { label: "Contact us", href: "/contact" }
];

const CONTACT_ITEMS = [
  {
    icon: "map-pin",
    text: "M.I.G Colony Hanuman Mandir Ground, Trimurti Nagar, Nagpur - 440022"
  },
  { icon: "phone", text: "+91 72489 99853" },
  { icon: "mail", text: "ygmsocialfoundation@gmail.com" }
];

const ICON_PATHS = {
  facebook: (
    <path d="M14.5 8.5H17V6h-2.5A3.5 3.5 0 0 0 11 9.5V11H9v3h2v6h3v-6h2.3l.5-3H14v-1.2c0-.4.3-.7.5-.8z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  twitter: (
    <path d="M20 6.4c-.6.3-1.3.5-2 .6.7-.4 1.2-1.1 1.5-1.9-.7.4-1.4.7-2.2.8A3.5 3.5 0 0 0 11.2 9c0 .3 0 .5.1.8-2.9-.2-5.5-1.6-7.3-3.7-.3.5-.5 1.1-.5 1.8 0 1.2.6 2.3 1.6 3-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.1 2.9 3.5-.3.1-.6.1-.9.1-.2 0-.4 0-.7-.1.4 1.4 1.8 2.5 3.4 2.5A7 7 0 0 1 3 18.2a9.9 9.9 0 0 0 5.3 1.6c6.4 0 9.9-5.3 9.9-9.9v-.4c.7-.5 1.3-1.1 1.8-1.9z" />
  ),
  youtube: (
    <>
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <path d="M10.5 10.2l4 1.8-4 1.8z" fill="currentColor" stroke="none" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.1" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h2.9l.9 4.1-1.9 1.4a11.5 11.5 0 0 0 5.2 5.2l1.4-1.9 4.1.9v2.9c0 1-.8 1.9-1.9 1.9C10.3 17.5 5.5 12.7 4.7 5.4c0-1 .8-1.9 1.9-1.9z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M4 7.5l8 5.8 8-5.8" />
    </>
  )
};

function Icon({ name, size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider" aria-hidden="true">
        <svg viewBox="0 0 400 16" preserveAspectRatio="none">
          <path d="M0 2 Q 20 14 40 2 T 80 2 T 120 2 T 160 2 T 200 2 T 240 2 T 280 2 T 320 2 T 360 2 T 400 2" />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h3 className="footer-title">YGM Social Foundation</h3>
          <p className="footer-text">
            Empowering communities through social initiatives, educational programs, and
            charitable activities — making a positive impact one life at a time.
          </p>
          <div className="social-links">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="social-icon"
                aria-label={social.name}
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick links</h3>
          <ul className="footer-list">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact info</h3>
          <ul className="footer-list footer-list--contact">
            {CONTACT_ITEMS.map((item) => (
              <li key={item.text} className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon name={item.icon} size={16} />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Get involved</h3>
          <p className="footer-text">Join us in making a difference in our community.</p>
          <p className="footer-text">
            Volunteer opportunities are open year-round, and donations of any size are
            always welcome.
          </p>
        </div>
      </div>

      <div className="bottom-bar">
        <p>&copy; {new Date().getFullYear()} YGM Social Foundation. All rights reserved.</p>
        <p className="bottom-bar-credit">Made with care for the community.</p>
      </div>
    </footer>
  );
};

export default Footer;
