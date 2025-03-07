import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WorkExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Work experience data
  const experiences = [
    {
      id: 'piramal',
      title: 'Program Management Associate',
      company: 'Piramal Pharma Solutions',
      location: 'Michigan, United States',
      period: 'Jun 2023 – Present',
      image: '/piramal.jpg', // Replace with actual image path
      summary: 'Managed client portfolio worth $18 million annually while implementing an innovative Order-to-Cash system that improved forecast accuracy to over 90%, leading to increased revenue recognition and operational transparency.',
      categories: ['program-management', 'operations', 'process-improvement'],
      detailUrl: '/experience/piramal'
    },
    {
      id: 'vyas-giannetti',
      title: 'Brand Partner',
      company: 'Vyas Giannetti Creative',
      location: 'Mumbai, India',
      period: 'Aug 2020 – Jan 2023',
      image: '/vyas-giannetti.jpg', // Replace with actual image path
      summary: 'Led a team in developing and executing comprehensive branding and communication strategies for over 15 clients across diverse sectors, driving significant revenue growth for the agency and enhancing brand visibility for clients.',
      categories: ['branding', 'strategy', 'team-leadership'],
      detailUrl: '/experience/vyas-giannetti'
    },
    {
      id: 'tbwa',
      title: 'Internship, Strategy and Planning',
      company: 'TBWA',
      location: 'Mumbai, India',
      period: 'May 2020 – Jul 2020',
      image: '/tbwa.jpg', // Replace with actual image path
      summary: 'Conducted comprehensive market research and developed the "Finance Trends Post-Covid Report" that provided critical insights for retail and finance brands navigating the post-pandemic landscape.',
      categories: ['market-research', 'finance', 'strategic-planning'],
      detailUrl: '/experience/tbwa'
    },
    {
      id: 'amarjyoti',
      title: 'Internship, Content Marketing Executive',
      company: 'Amarjyoti Advertising Pvt. Ltd.',
      location: 'Indore, India',
      period: 'Apr 2019 – Oct 2019',
      image: '/amarjyoti.jpg', // Replace with actual image path
      summary: 'Handled social media marketing, website development, and SEO optimization, improving website rankings from 14th to 2nd position in just 2 months.',
      categories: ['digital-marketing', 'content-marketing', 'seo'],
      detailUrl: '/experience/amarjyoti'
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Experiences' },
    { id: 'program-management', name: 'Program Management' },
    { id: 'branding', name: 'Branding' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'market-research', name: 'Market Research' }
  ];

  // Filtered experiences based on active filter
  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.categories.includes(activeFilter));

  // Intersection Observer to detect when the section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) observer.observe(experienceSection);

    return () => {
      if (experienceSection) observer.unobserve(experienceSection);
    };
  }, []);

  // Animation effect for experience cards
  useEffect(() => {
    if (isVisible) {
      const experienceCards = document.querySelectorAll('.experience-card');
      experienceCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 150);
      });
    }
  }, [isVisible, filteredExperiences]);

  return (
    <div id="experience-section" className="section-card">
      <h2 className="section-title">Work Experience & Internships</h2>
      
      <p className="experience-section-intro">
        Explore my professional journey across branding, program management, and strategic planning roles.
      </p>
      
      {/* Filter Categories */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Experiences Grid */}
      <div className="experience-grid">
        {filteredExperiences.map((experience, index) => (
          <div 
            key={experience.id} 
            className="experience-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Experience Image */}
            <div className="experience-image-container">
              {/* Fallback colored background with first letter if image fails to load */}
              <div className="experience-image-fallback">
                
              </div>
              
              {/* Actual experience image */}
              <img 
                src={experience.image}
                alt={`${experience.title} at ${experience.company}`}
                className="experience-actual-image"
                onError={(e) => {
                  e.target.style.opacity = 0;
                }}
              />
              
              {/* Overlay with company name */}
              <div className="experience-image-overlay">
                <span className="experience-period">{experience.period}</span>
                <span className="experience-company-name">{experience.company}</span>
                <span className="experience-location">{experience.location}</span>
              </div>
            </div>
            
            {/* Experience Content */}
            <div className="experience-content">
              {/* Experience Title */}
              <h3 className="experience-title-card">
                {experience.title}
              </h3>
              
              {/* Experience Summary */}
              <p className="experience-summary-card">
                {experience.summary}
              </p>
              
              {/* View Details Button */}
              <Link 
                to={experience.detailUrl}
                className="view-experience-button"
              >
                View Experience Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceSection;