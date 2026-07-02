import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../styles/Gallery.css";
import img1 from "../assets/blood_donation.JPG";
import img2 from "../assets/educationalsupport.JPG";
import img3 from "../assets/pola.JPG";
import img4 from "../assets/politician.jpg";
import img5 from "../assets/skilldev.jpg";
import img6 from "../assets/mahaprasad.JPG";
import img7 from "../assets/chcc.JPG";
import img9 from "../assets/dance.JPG";
import img8 from "../assets/treeplantation.JPG";
import img10 from "../assets/cm2025.JPG";
import img11 from "../assets/culturel2025.JPG";
import img12 from "../assets/nitinji2025.JPG";
import img13 from "../assets/politicianvikasthakre.JPG";
import img14 from "../assets/prize2025.JPG";
import img15 from "../assets/prize2025.JPG";
import img16 from "../assets/ramraksha2025.JPG";



const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Community health camp",
    description: "Free health checkups and medical consultations for every family.",
    imageUrl: img1,
    category: "Health"
  },
  {
    id: 2,
    title: "Educational support program",
    description: "Providing school supplies and tutoring support to children.",
    imageUrl: img2,
    category: "Education"
  },
  {
    id: 3,
    title: "Competitive activities for kids",
    description: "Friendly competitions that build sportsmanship and a competitive spirit.",
    imageUrl: img3,
    category: "Youth"
  },
  {
    id: 4,
    title: "Prominent figure visits",
    description: "Community members and local families welcome guests during the festival.",
    imageUrl: img4,
    category: "Community"
  },
  {
    id: 5,
    title: "Skill development and awareness",
    description: "Training programs that equip youth with practical, real-world skills.",
    imageUrl: img5,
    category: "Youth"
  },
  {
    id: 6,
    title: "Mahaprasad (divine offering)",
    description: "Distributing food as a divine offering to promote equality and togetherness.",
    imageUrl: img6,
    category: "Culture"
  },
  {
    id: 7,
    title: "Blood donation camp",
    description: "Organizing blood donation drives to meet emergency medical needs.",
    imageUrl: img7,
    category: "Health"
  },
  {
    id: 8,
    title: "Tree plantation drive",
    description: "Supporting environmental conservation through community tree planting.",
    imageUrl: img8,
    category: "Environment"
  },
  {
    id: 9,
    title: "Dhol Tasha Pathak",
    description: "Celebrating our cultural heritage through traditional rhythm and dance.",
    imageUrl: img9,
    category: "Culture"
  },
  {
    id: 10,
    title: "CM Devendre Fadnavis Visit",
    description: "Honored to host the Chief Minister during our community festival, fostering dialogue and support.",
    imageUrl: img10,
    category: "Community"
  },
  {
    id: 11,
    title: "Hirakarni Malwe Dhol Tasha Pathak",
    description: "Celebrating our cultural heritage through traditional rhythm and dance.",
    imageUrl: img11,
    category: "Culture"
  },
  {
    id: 12,
    title: "Nitin Gadkari Visit",
    description: "Honored to host the Union Minister during our community festival, fostering dialogue and support.",
    imageUrl: img12,
    category: "Community"
  },
  {
    id: 13,
    title: "Vikas Thakre Visit",
    description: "Honored to host the Minister during our community festival, fostering dialogue and support.",
    imageUrl: img13,
    category: "Community"
  },
  {
    id: 14,
    title: "Prize Distribution",
    description: "Distribution of prizes to winners of the competition.",
    imageUrl: img14,
    category: "Community"
  },
  {
    id: 16,
    title: "RSS Ram Raksha Shlok ",
    description: "Celebrating the spirit of community service and national pride.",
    imageUrl: img16,
    category: "Community"
  }
];

const CATEGORY_ORDER = ["All", "Health", "Education", "Youth", "Culture", "Environment", "Community"];

function SectionDivider() {
  return (
    <svg className="section-divider" viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 2 Q 12 14 24 2 T 48 2 T 72 2 T 96 2 T 120 2 T 144 2 T 168 2 T 192 2 T 216 2 T 240 2" />
    </svg>
  );
}

function ChevronIcon({ direction }) {
  const d = direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7";
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + filteredItems.length) % filteredItems.length));
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % filteredItems.length));
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, showPrev, showNext]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <span className="section-eyebrow">In pictures</span>
        <h1 className="gallery-title">Community initiatives</h1>
        <SectionDivider />
        <p className="gallery-subtitle">
          Moments from our health camps, festivals, and community programs over the years.
        </p>
      </div>

      <div className="gallery-filters" role="tablist" aria-label="Filter gallery by category">
        {CATEGORY_ORDER.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeFilter === category}
            className={`filter-pill ${activeFilter === category ? "filter-pill--active" : ""}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            className="gallery-item"
            onClick={() => openLightbox(index)}
            aria-label={`View photo: ${item.title}`}
          >
            <div className="image-wrapper">
              <img src={item.imageUrl} alt={item.title} className="gallery-image" loading="lazy" />
              <div className="image-overlay">
                <span className="image-category">{item.category}</span>
                <h3 className="image-title">{item.title}</h3>
                <p className="image-description">{item.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <CloseIcon />
            </button>

            <button className="lightbox-nav lightbox-nav--prev" onClick={showPrev} aria-label="Previous photo">
              <ChevronIcon direction="left" />
            </button>

            <img src={activeItem.imageUrl} alt={activeItem.title} className="lightbox-image" />

            <button className="lightbox-nav lightbox-nav--next" onClick={showNext} aria-label="Next photo">
              <ChevronIcon direction="right" />
            </button>

            <div className="lightbox-caption">
              <span className="image-category">{activeItem.category}</span>
              <h3 className="image-title">{activeItem.title}</h3>
              <p className="image-description">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;