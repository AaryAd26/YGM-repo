import React, { useState, useMemo } from 'react';
import '../styles/Activities.css';

const ACTIVITIES = [
  {
    id: 1,
    title: 'Ganesh Idol Installation & Visarjan',
    description: 'The heart of our celebration — welcoming Bappa home and bidding him farewell with a grand procession.',
    icon: 'om',
    category: 'Religious'
  },
  {
    id: 2,
    title: 'Daily Aarti & Bhajan',
    description: 'Morning and evening prayers with devotional singing, open to the whole community.',
    icon: 'flame',
    category: 'Spiritual'
  },
  {
    id: 3,
    title: 'Reel Competition for Youth',
    description: 'A stage for young creators to showcase festival spirit through short-form video.',
    icon: 'device-mobile',
    category: 'Youth'
  },
  {
    id: 4,
    title: 'Blood Donation Camp',
    description: 'One appointment, one unit, potentially several lives — organized with a local hospital partner.',
    icon: 'droplet',
    category: 'Social Service'
  },
  {
    id: 5,
    title: 'Tree Plantation',
    description: 'Planting saplings around the mandal grounds as a lasting, living offering.',
    icon: 'tree',
    category: 'Environment'
  },
  {
    id: 6,
    title: 'Cultural Programs & Competitions',
    description: 'Dance, music, and drama competitions that bring every generation onto one stage.',
    icon: 'masks-theater',
    category: 'Cultural'
  },
  {
    id: 7,
    title: 'Community Bhandara & Prasad Distribution',
    description: 'Free meals served daily to devotees and neighbours, cooked and served by volunteers.',
    icon: 'bowl',
    category: 'Social Service'
  },
  {
    id: 8,
    title: 'Eco-Friendly Idol Making Workshop',
    description: 'Hands-on sessions teaching families to shape clay Ganesh idols without plaster or paint.',
    icon: 'brush',
    category: 'Environment'
  }
];

const CATEGORY_ORDER = ['All', 'Religious', 'Spiritual', 'Youth', 'Social Service', 'Environment', 'Cultural'];

const ICONS = {
  om: (
    <path d="M12 3c-2.5 0-4 1.6-4 3.5 0 1.6 1 2.6 2.3 3.1-1.9.4-3.8 1.7-3.8 4 0 2.6 2.2 4.4 5 4.4 2.1 0 3.7-1 4.5-2.4.3 1 1.2 2.4 2.8 2.4M8.5 6.5c0-1.1.9-2 2-2M17.5 5.5c-1.4 0-2.3 1-2.3 2.2 0 1.3 1 2 2.1 2.3-1 .3-2.3 1-2.3 2.5" />
  ),
  flame: <path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c1 1 1.5 2.3 1.5 3.5A4.5 4.5 0 0 1 12 18a5 5 0 0 1-5-5c0-4 4-5 3-11" />,
  'device-mobile': (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 10.5a6 6 0 1 1-12 0C6 9.5 12 3 12 3z" />,
  tree: (
    <>
      <path d="M12 21v-6" />
      <path d="M8 15l4-9 4 9a4 4 0 0 1-8 0z" />
    </>
  ),
  'masks-theater': (
    <>
      <circle cx="9" cy="10" r="5" />
      <circle cx="15" cy="14" r="5" />
    </>
  ),
  bowl: (
    <>
      <path d="M4 11h16a8 6 0 0 1-16 0z" />
      <path d="M8 11c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5" />
    </>
  ),
  brush: (
    <>
      <path d="M6 21c-1.5 0-2.5-1-2.5-2.5S5 15 7 15s3 1 3 2.5S7.5 21 6 21z" />
      <path d="M9.5 14.5 17 7a2 2 0 0 1 3 3l-7.5 7.5" />
    </>
  )
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

function Activities() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredActivities = useMemo(() => {
    if (activeFilter === 'All') return ACTIVITIES;
    return ACTIVITIES.filter((activity) => activity.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="activities-container">
      <div className="activities-header">
        <span className="activities-eyebrow">Mandal Calendar</span>
        <h1 className="activities-title">Our Activities</h1>
        <p className="activities-subtitle">
          Ten days of devotion, service, and celebration — organized by our community, for our community.
        </p>
        <svg className="garland-divider" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 4 Q 20 22 40 4 T 80 4 T 120 4 T 160 4 T 200 4 T 240 4 T 280 4 T 320 4 T 360 4 T 400 4" />
        </svg>
      </div>

      <div className="activities-filters" role="tablist" aria-label="Filter activities by category">
        {CATEGORY_ORDER.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeFilter === category}
            className={`filter-pill ${activeFilter === category ? 'filter-pill--active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="activities-grid">
        {filteredActivities.map((activity, index) => (
          <div
            key={activity.id}
            className={`activity-card category-${activity.category.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="activity-pennant" aria-hidden="true" />
            <div className="activity-icon">
              <Icon name={activity.icon} />
            </div>
            <div className="activity-content">
              <span className="activity-category">{activity.category}</span>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;