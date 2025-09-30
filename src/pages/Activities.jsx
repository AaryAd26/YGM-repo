import React from 'react';
import '../styles/Activities.css';
  
function Activities() {
  const activities = [
    {
      id: 1,
      title: "Ganesh Idol Installation & Visarjan",
      icon: "🕉️",
      category: "Religious"
    },
    {
      id: 2,
      title: "Daily Aarti & Bhajan",
      icon: "🙏",
      category: "Spiritual"
    },
    {
      id: 3,
      title: "Reel Competition for Youth",
      icon: "📱",
      category: "Youth"
    },
    {
      id: 4,
      title: "Blood Donation Camp",
      icon: "🩸",
      category: "Social Service"
    },
    {
      id: 5,
      title: "Tree Plantation",
      icon: "🌳",
      category: "Environment"
    },
    {
      id: 6,
      title: "Cultural Programs & Competitions",
      icon: "🎭",
      category: "Cultural"
    }
  ];

  return (
    <div className="activities-container">
      <div className="activities-header">
        <h1 className="activities-title">Our Activities</h1>
        <p className="activities-subtitle">Discover the diverse range of activities we organize for our community</p>
      </div>
      
      <div className="activities-grid">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-content">
              <h3 className="activity-title">{activity.title}</h3>
              <span className="activity-category">{activity.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
