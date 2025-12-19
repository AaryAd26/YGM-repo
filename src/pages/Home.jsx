import React from 'react';
import '../styles/Home.css';
import bannerImage from '../assets/Banner.jpg'; 

import Seva2016 from '../assets/Seva2016.jpg'; 
import Seva2017 from '../assets/Seva2017.jpg';
 import Seva2018 from '../assets/Seva2018.jpg'; 
import Seva2019 from '../assets/Seva2019.jpg'; 
 import Seva2021 from '../assets/Seva2021.jpg'; 
import Seva2022 from '../assets/Seva2022.jpg'; 
import Seva2023 from '../assets/Seva2023.jpg'; 
import Seva2024 from '../assets/Seva2024.jpg'; 
function Home() {
  const decorations = [
    { year: '2016', img: Seva2016 },
    { year: '2017', img: Seva2017 }, 
    { year: '2018', img: Seva2018 }, 
    { year: '2019', img: Seva2019 },
    { year: '2021', img: Seva2021 }, 
    { year: '2022', img: Seva2022 }, 
    { year: '2023', img: Seva2023 }, 
    { year: '2024', img: Seva2024 }, 
  ];

  return (
    <div className="home-container">
      <div className="banner-image">
        <img src={bannerImage} alt="YGM Foundation Banner" />
      </div>

      <section className="about-section">
        <h2>About Us</h2>
        <hr />
        <p>
          YGM Social Foundation is committed to uplifting communities through cultural,
          social, and charitable initiatives. We believe in unity, service, and the
          preservation of our rich traditions while adapting to modern needs.
        </p>
      </section>

      <div className="info-row-section">
        <div className="info-box">
          <h2>Trust</h2>
          <hr />
          <p>
            Our trust works with utmost transparency and dedication to serve people and
            support spiritual and social events.
          </p>
        </div>
        <div className="info-box">
          <h2>Projects</h2>
          <hr />
          <p>
            We are involved in various community projects including health camps,
            educational drives, and cultural festivals.
          </p>
        </div>
        <div className="info-box">
          <h2>Activities</h2>
          <hr />
          <p>
            Activities include seva programs, volunteer opportunities, and organizing
            annual celebrations and yatras.
          </p>
        </div>
      </div>

      <section className="sevas-section">
        <h2 className="section-title">DECORATION OVER THE YEARS</h2>
        <div className="sevas-grid">
          {decorations.map((item, idx) => (
            <div className="seva-card" key={idx}>
              <div className="seva-img-placeholder">
                {item.img ? (
                  <img src={item.img} alt={`${item.year} Decoration`} />
                ) : (
                  <p>Add Image</p>
                )}
              </div>
              <h4 className="seva-title">{item.year}</h4>
            </div>
          ))}
        </div>

        <br />
        <section className="promotions-section">
          <h2>Promotions & Advertisements</h2>
          <hr />
          <p>
            We promote brands and advertisements through our community platforms and
            events. Interested in featuring your brand? Click the link below to view our
            latest brochure.
          </p>
          <a
            href="src/assets/YGM_Brochure.pdf" 
            className="brochure-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View Our Brochure
          </a>
        </section>
      </section>
    </div>
  );
}

export default Home;
