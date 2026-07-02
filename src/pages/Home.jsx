import React from "react";
import "../styles/Home.css";
import bannerImage from "../assets/banner.jpg";

import seva2016 from "../assets/seva2016.jpg";
import seva2017 from "../assets/seva2017.jpg";
import seva2018 from "../assets/seva2018.jpg";
import seva2019 from "../assets/seva2019.jpg";
import seva2021 from "../assets/seva2021.jpg";
import seva2022 from "../assets/seva2022.jpg";
import seva2023 from "../assets/seva2023.jpg";
import seva2024 from "../assets/seva2024.jpg";
import award2010 from "../assets/award2010.jpg";
import bappa2010 from "../assets/bappa2010.jpg";
import bappa2025 from "../assets/bappa2025.jpg";
import bappaface from "../assets/bappaface.jpg";
import decoration2025 from "../assets/decoration2025.jpg";
import shivling2025 from "../assets/shivling2025.jpg";
import gate2025 from "../assets/gate2025.jpg";
import theme2025 from "../assets/theme2025.jpg";
import grp202 from "../assets/grp202.jpg";


const SEVA_PHOTOS = [
  { year: "2016", img: seva2016 },
  { year: "2017", img: seva2017 },
  { year: "2018", img: seva2018 },
  { year: "2019", img: seva2019 },
  { year: "2021", img: seva2021 },
  { year: "2022", img: seva2022 },
  { year: "2023", img: seva2023 },
  { year: "2024", img: seva2024 },
  { year: "2010", img: award2010 },
  { year: "2010", img: bappa2010 },
  { year: "2025", img: bappa2025 },
  { year: "2025", img: bappaface },
  { year: "2025", img: decoration2025 },
  { year: "2025", img: shivling2025 },
  { year: "2025", img: gate2025 },
  { year: "2025", img: theme2025 },
  { year: "2025", img: grp202 }
];

const MARQUEE_ROW_1 = SEVA_PHOTOS.filter((_, idx) => idx % 2 === 0);
const MARQUEE_ROW_2 = SEVA_PHOTOS.filter((_, idx) => idx % 2 !== 0);

// Sample numbers — replace with your foundation's real figures.
const IMPACT_STATS = [
  { value: "25", label: "Years of seva" },
  { value: "5000+", label: "Families supported" },
  { value: "8+", label: "Annual programs" },
  { value: "150+", label: "Active volunteers" }
];

const INFO_CARDS = [
  {
    title: "Trust",
    icon: "shield",
    text: "Our trust works with utmost transparency and dedication to serve people and support spiritual and social events."
  },
  {
    title: "Projects",
    icon: "target",
    text: "We are involved in various community projects including health camps, educational drives, and cultural festivals."
  },
  {
    title: "Activities",
    icon: "calendar",
    text: "Activities include seva programs, volunteer opportunities, and organizing annual celebrations and yatras."
  }
];

// Sample entries — swap in real feedback from volunteers, donors, or attendees.
const TESTIMONIALS = [
  {
    name: "Arnav Deshmukh",
    role: "Volunteer, since 2008",
    quote:
      "Being part of the seva team every year has taught me what real community spirit looks like. The mandal feels like family."
  },
  {
    name: "Priya Kulkarni",
    role: "Local resident",
    quote:
      "The blood donation camp they organized was so well run. Everything from registration to aftercare was handled with care."
  },
  {
    name: "Anil Wagh",
    role: "Donor",
    quote:
      "Transparent, dedicated, and always putting the community first. Proud to support the work this foundation does."
  }
];

const ICON_PATHS = {
  shield: <path d="M12 3l7 3v5c0 5-3.3 7.8-7 9-3.7-1.2-7-4-7-9V6l7-3z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </>
  ),
  file: (
    <>
      <path d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1z" />
      <path d="M14 3.5V8h4M9 13h6M9 16.5h6" />
    </>
  ),
  quote: (
    <path d="M7.5 8c-2.2 0-4 1.8-4 4.2 0 2.4 1.7 4.1 3.8 4.1.4 0 .8-.1 1.1-.2C8 18 6.4 19.6 4 20.2M17 8c-2.2 0-4 1.8-4 4.2 0 2.4 1.7 4.1 3.8 4.1.4 0 .8-.1 1.1-.2-.4 1.9-2 3.5-4.4 4.1" />
  ),
  heart: (
    <path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3.3c0 5.6-7.5 10.2-7.5 10.2z" />
  )
};

function Icon({ name, size = 22 }) {
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

function SectionDivider() {
  return (
    <svg className="section-divider" viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 2 Q 12 14 24 2 T 48 2 T 72 2 T 96 2 T 120 2 T 144 2 T 168 2 T 192 2 T 216 2 T 240 2" />
    </svg>
  );
}

function Home() {
  const row1 = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const row2 = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  return (
    <div className="home-container">
      <div className="banner-image">
        <img src={bannerImage} alt="YGM Foundation Banner" />
      </div>

      <section className="about-section">
        <span className="section-eyebrow">Who we are</span>
        <h2 className="section-heading">About us</h2>
        <SectionDivider />
        <p className="section-text">
          YGM Social Foundation is committed to uplifting communities through cultural,
          social, and charitable initiatives. We believe in unity, service, and the
          preservation of our rich traditions while adapting to modern needs.
        </p>
      </section>

      <section className="stats-section">
        {IMPACT_STATS.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="info-row-section">
        {INFO_CARDS.map((card) => (
          <div className="info-box" key={card.title}>
            <div className="info-icon">
              <Icon name={card.icon} />
            </div>
            <h3 className="info-title">{card.title}</h3>
            <p className="info-text">{card.text}</p>
          </div>
        ))}
      </section>

      <section className="marquee-section">
        <span className="section-eyebrow">Through the years</span>
        <h2 className="section-heading">Seva in motion</h2>
        <SectionDivider />
        <div className="marquee-viewport">
          <div className="marquee-track">
            {row1.map((item, idx) => (
              <div className="marquee-item" key={`row1-${item.year}-${idx}`}>
                <img src={item.img} alt={`Seva decoration, ${item.year}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-viewport">
          <div className="marquee-track marquee-track--reverse">
            {row2.map((item, idx) => (
              <div className="marquee-item" key={`row2-${item.year}-${idx}`}>
                <img src={item.img} alt={`Seva decoration, ${item.year}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="promotions-section">
        <span className="section-eyebrow">Partner with us</span>
        <h2 className="section-heading">Promotions &amp; advertisements</h2>
        <SectionDivider />
        <p className="section-text">
          We promote brands and advertisements through our community platforms and
          events. Interested in featuring your brand? View our latest brochure below.
        </p>
        <a
          href="src/assets/ygm2026.pdf"
          className="brochure-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="file" size={18} />
          View our brochure
        </a>
      </section>

      <section className="cta-section">
        <div className="cta-icon">
          <Icon name="heart" size={26} />
        </div>
        <h2 className="cta-heading">Ready to get involved?</h2>
        <p className="cta-text">
          Whether you have an hour or an afternoon, there's a place for you here.
          Volunteer at our next drive, or support our work through a donation.
        </p>
        <div className="cta-actions">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPHU92kvUCI2j_kWMA4EmlE5_3lQXlAA9jBTTmwvZbmHa2rw/viewform?usp=header" className="cta-button cta-button--primary">
            Volunteer with us
          </a>
          <a href="/contact" className="cta-button cta-button--secondary">
            Support our work
          </a>
        </div>
      </section>

      <section className="testimonials-section">
        <span className="section-eyebrow">In their words</span>
        <h2 className="section-heading">What our community says</h2>
        <SectionDivider />
        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-quote-icon">
                <Icon name="quote" size={26} />
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;