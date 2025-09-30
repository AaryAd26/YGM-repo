import React from 'react';
import '../styles/Gallery.css';
import img1 from '../assets/Blood_Donation.JPG';
import img2 from '../assets/Educationalsupport.JPG';
import img3 from '../assets/Pola.JPG';
import img4 from '../assets/Politician.JPG';
import img5 from '../assets/SkillDev.JPG';
import img6 from '../assets/Mahaprasad.JPG';
import img7 from '../assets/CHCC.JPG';
import img9 from '../assets/Dance.JPG';
import img8 from '../assets/TreePlantation.JPG';

const galleryItems = [
  {
    id: 1,
    title: "Community Health Camp",
    description: "Free health checkup and medical consultation for Every families",
    imageUrl: img1
  },
  {
    id: 2,
    title: "Educational Support Program",
    description: "Providing school supplies and tutoring support to children",
    imageUrl: img2
  },
  {
    id: 3,
    title: "Compitive activities for kids",
    description: "Compititions for kids to motivate the sportsmanship and compititive nature in them.",
    imageUrl: img3
  },
  {
    id: 4,
    title: "Prominant figure visits",
    description: "The prominent figure interacts with community members and local families during the auspicious festival visit.",
    imageUrl: img4
  },
  {
    id: 5,
    title: "Skill Development and Awareness",
    description: "Training programs for youth in various skills",
    imageUrl: img5
  },
  {
    id: 6,
    title: "Mahaprasad (Divine offering)",
    description: "We distribute food, sharing the divine offering with communities to promote equality, togetherness, and cultural heritage.",
    imageUrl: img6
  },
  {
    id: 7,
    title: "Blood Donation Camp",
    description: "Organizing blood donation camps for emergency needs",
    imageUrl: img7
  },
  {
    id: 8,
    title: "Tree Plantation Drive",
    description: "Environmental conservation through tree plantation",
    imageUrl: img8
  },
  {
    id: 9,
    title: "Dhol Tasha Pathak",
    description: "Celebrating diversity through cultural events",
    imageUrl: img9
  }
];

function Gallery() {
  return (
    <div className="gallery-container section">
      <h1 className="gallery-title">Community initiatives</h1>
      
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <div className="image-wrapper">
              <img src={item.imageUrl} alt={item.title} className="gallery-image" />
            </div>
            <div className="image-info">
              <h3 className="image-title">{item.title}</h3>
              <p className="image-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
