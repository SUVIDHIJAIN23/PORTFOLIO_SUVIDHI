import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

const ExperienceDetail = () => {
  const { experienceId } = useParams();
  const [activeSection, setActiveSection] = useState('summary');
  const [loaded, setLoaded] = useState(false);
  const sectionRefs = useRef({});

  // Work experience data
  const experiences = {
    'piramal': {
      title: 'Program Management Associate',
      company: 'Piramal Pharma Solutions',
      location: 'Michigan, United States',
      period: 'Jun 2023 – Present',
      image: '/piramal-detail.jpg',
      color: '#3b82f6', // Primary color
      secondaryColor: '#93c5fd', // Secondary color
      summary: 'Managed client portfolio worth $18 million annually while implementing an innovative Order-to-Cash system that improved forecast accuracy to over 90%, leading to increased revenue recognition and operational transparency.',
      responsibilities: [
        'Managed a client portfolio of ~$18 million annually, serving as the primary point of contact for 17 successful projects.',
        'Spearheaded cross-functional collaboration across 17 client projects, ensuring seamless customer experiences.',
        'Developed and established processes for efficient program management, enabling >95% accuracy in predicting and adherence of the timelines.',
        'Led the ideation and implementation of an Order-to-Cash (OTC) system, resulting in >90% monthly revenue forecast accuracy and increased billing/revenue recognition frequency through enhanced operational transparency.',
        'Awarded the Chairperson\'s Award FY\'24 for the OTC system initiative.'
      ],
      achievements: [
        'Achieved >95% accuracy in timeline predictions, enhancing client satisfaction and operational planning.',
        'Improved monthly revenue forecast accuracy to >90% through the Order-to-Cash system implementation.',
        'Increased billing/revenue recognition frequency, optimizing cash flow for the organization.',
        'Established efficient program management processes that became standard practice across the organization.'
      ],
      skills: [
        'Program Management', 'Process Optimization', 'Client Portfolio Management', 
        'Cross-Functional Leadership', 'System Implementation', 'Revenue Forecasting'
      ],
      keyStats: [
        { value: '$18M', label: 'Portfolio Value' },
        { value: '95%', label: 'Timeline Accuracy' },
        { value: '90%', label: 'Forecast Accuracy' },
        { value: '17', label: 'Projects Managed' }
      ]
    },
    'vyas-giannetti': {
      title: 'Brand Partner',
      company: 'Vyas Giannetti Creative',
      location: 'Mumbai, India',
      period: 'Aug 2020 – Jan 2023',
      image: '/vyas-giannetti-detail.jpg',
      color: '#6366f1', // Primary color
      secondaryColor: '#a78bfa', // Secondary color
      summary: 'Led a team in developing and executing comprehensive branding and communication strategies for over 15 clients across diverse sectors, driving significant revenue growth for the agency and enhancing brand visibility for clients.',
      responsibilities: [
        'Led a team of 7 junior brand partners, designers, and associates, devising strategies for branding and communication campaigns and supervising creative execution for the clients.',
        'Handled a portfolio of over 15+ clients, generating more than INR 5 Cr. (~USD 600K) revenue annually for the Agency.',
        'Managed clients across industries ranging from Education, Real estate, Hospitality, Food and Beverages, Fintech and Banking, and some multinational conglomerates, managing diversified businesses.',
        'Worked closely with the residential marketing team at Phoenix Mills Ltd. to create their annual and quarterly marketing plans detailed with activations and engagement strategy for the brand.',
        'Managed the social media and internal communication channels for a leading international school.',
        'Marshaled the launch of 6 real estate projects in 2.5 years for Shalimar Group and Phoenix Mills Ltd.',
        'Coordinated the 360-degree launch of the "Big in Your Life" campaign for Aditya Birla Group at IPL 2022.',
        'Led the internal launch of \'Big In Your Life\' digital marketing campaign for Aditya Birla Group on Ganna and Money Control Pro.',
        'Supervised, led, and contributed to 20+ client launches (both internal and external) in 2.5+ years for clients across industries.'
      ],
      achievements: [
        'Successfully launched India\'s leading B-school, BITSoM, a BITS Pilani and Aditya Birla Group venture.',
        'Increased brand engagement for an international school by 3x in just 1 year through effective social media management.',
        'Achieved an average 60% inventory sell-through within the first 3 days for 6 real estate project launches.',
        'Generated more than INR 5 Cr. (~USD 600K) revenue annually for the agency through client portfolio management.'
      ],
      skills: [
        'Branding Strategy', 'Team Leadership', 'Client Management', 'Campaign Planning', 
        'Creative Direction', 'Cross-Industry Expertise', 'Revenue Generation'
      ],
      keyStats: [
        { value: '15+', label: 'Clients Managed' },
        { value: '$600K', label: 'Annual Revenue' },
        { value: '7', label: 'Team Members Led' },
        { value: '20+', label: 'Launches Executed' }
      ]
    },
    'tbwa': {
      title: 'Internship, Strategy and Planning',
      company: 'TBWA',
      location: 'Mumbai, India',
      period: 'May 2020 – Jul 2020',
      image: '/tbwa-detail.jpg',
      color: '#8b5cf6', // Primary color
      secondaryColor: '#c4b5fd', // Secondary color
      summary: 'Conducted comprehensive market research and developed the "Finance Trends Post-Covid Report" that provided critical insights for retail and finance brands navigating the post-pandemic landscape.',
      responsibilities: [
        'Collated competition and category research for various Retail, Finance and Food and Beverage Brands.',
        'Analyzed the data gathered to mine key insights that formed the communication strategy\'s basis.',
        'Coordinated brand positioning exercises for Retail Brands to identify emergent positioning routes against the competitors.',
        'Conducted an in-depth study to develop the "Finance Trends Post-Covid Report", released by TBWA Mumbai in 2020.'
      ],
      achievements: [
        'Successfully delivered the "Finance Trends Post-Covid Report" which became a reference document for the agency\'s financial clients.',
        'Contributed to effective brand positioning strategies for multiple retail brands.',
        'Developed valuable market insights that informed communication strategies across multiple sectors.'
      ],
      skills: [
        'Market Research', 'Strategic Planning', 'Brand Positioning', 'Data Analysis', 
        'Trend Analysis', 'Financial Sector Knowledge'
      ],
      keyStats: [
        { value: '3+', label: 'Sectors Researched' },
        { value: '1', label: 'Major Report Published' },
        { value: '5+', label: 'Brand Positioning Exercises' }
      ]
    },
    'amarjyoti': {
      title: 'Internship, Content Marketing Executive',
      company: 'Amarjyoti Advertising Pvt. Ltd.',
      location: 'Indore, India',
      period: 'Apr 2019 – Oct 2019',
      image: '/amarjyoti-detail.jpg',
      color: '#10b981', // Primary color
      secondaryColor: '#6ee7b7', // Secondary color
      summary: 'Handled social media marketing, website development, and SEO optimization, improving website rankings from 14th to 2nd position in just 2 months.',
      responsibilities: [
        'Handled social media marketing for multiple local brands.',
        'Laid the website framework and crafted the website content for clients.',
        'Charted and executed on-page and off-page website optimization strategy.'
      ],
      achievements: [
        'Improved website ranking from 14th to 2nd position in 2 months through effective SEO strategies.',
        'Successfully developed and implemented social media strategies for multiple local brands.',
        'Created engaging website content that improved user engagement metrics.'
      ],
      skills: [
        'Social Media Marketing', 'Content Creation', 'SEO Optimization', 
        'Website Development', 'Digital Marketing Strategy'
      ],
      keyStats: [
        { value: '12', label: 'Ranking Improvement' },
        { value: '2', label: 'Months to Achieve' },
        { value: '5+', label: 'Local Brands Served' }
      ]
    }
  };

  const experience = experiences[experienceId];
  console.log("Experience ID:", experienceId);
  console.log("Experience data loaded:", experience ? "Yes" : "No");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set loaded to true after a short delay to ensure animations play
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  // If the experience doesn't exist, show a message
  if (!experience) {
    return (
      <div className="section-card experience-section">
        <Link to="/?fromExperience=true" className="back-to-portfolio-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="back-button-text">Back to Portfolio</span>
        </Link>
        <div className="experience-not-found">
          <h2>Work Experience Not Found</h2>
          <p>Sorry, the work experience you're looking for doesn't exist or has been moved.</p>
        </div>
      </div>
    );
  }

  const sectionNavItems = [
    { id: 'summary', label: 'Summary' },
    { id: 'responsibilities', label: 'Responsibilities' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="experience-container">
      {/* Back Button with animation */}
      <Link to="/?fromExperience=true" className="back-to-portfolio-button animate-slide-in">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span className="back-button-text">Back to Portfolio</span>
      </Link>

      {/* Hero Section with Parallax Effect */}
      <div 
        className="experience-hero" 
        data-company={experienceId}
        style={{ 
          '--primary-color': experience.color,
          '--secondary-color': experience.secondaryColor
        }}
      >
        <div className="experience-hero-content">
          <div className="experience-period-badge">{experience.period}</div>
          <div className="experience-company-badge">{experience.company}</div>
          <h1 className="experience-title">{experience.title}</h1>
          <div className="experience-location">{experience.location}</div>
          
          {/* Key Stats Section */}
          {experience.keyStats && (
            <div className="key-stats-container">
              {experience.keyStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="key-stat animate-count-up"
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <div className="key-stat-value">{stat.value}</div>
                  <div className="key-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Enhanced backdrop with multiple layers */}
        <div className="experience-hero-backdrop"></div>
        <div className="experience-hero-particles"></div>
        <div className="experience-hero-lines"></div>
      </div>

      {/* Section Navigation */}
      <div className="section-navigation animate-fade-in">
        <div className="section-nav-wrapper">
          {sectionNavItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`section-nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Content */}
      <div className="experience-content">
        {/* Summary */}
        <div id="summary" className={`experience-section-block ${loaded ? 'animate-in' : ''}`}>
          <div className="section-icon">📋</div>
          <h2 className="experience-section-title">Summary</h2>
          <p className="experience-section-text">{experience.summary}</p>
        </div>

        {/* Responsibilities */}
        <div id="responsibilities" className={`experience-section-block ${loaded ? 'animate-in' : ''}`}>
          <div className="section-icon">⚙️</div>
          <h2 className="experience-section-title">Key Responsibilities</h2>
          <ul className="experience-responsibilities-list">
            {experience.responsibilities.map((responsibility, index) => (
              <li 
                key={index} 
                className={`experience-responsibility-item ${loaded ? 'animate-in' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div id="achievements" className={`experience-section-block ${loaded ? 'animate-in' : ''}`}>
          <div className="section-icon">🏆</div>
          <h2 className="experience-section-title">Key Achievements</h2>
          <ul className="experience-achievements-list">
            {experience.achievements.map((achievement, index) => (
              <li 
                key={index} 
                className={`experience-achievement-item ${loaded ? 'animate-in' : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Utilized */}
        <div id="skills" className={`experience-section-block ${loaded ? 'animate-in' : ''}`}>
          <div className="section-icon">🧠</div>
          <h2 className="experience-section-title">Skills Utilized</h2>
          <div className="skills-utilized">
            {experience.skills.map((skill, index) => (
              <div
                key={skill}
                className={`skill-tag ${loaded ? 'animate-in' : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps / CTA */}
        <div className={`experience-cta ${loaded ? 'animate-in' : ''}`}>
          <h3 className="cta-title">Interested in working together?</h3>
          <p className="cta-text">Let's connect and discuss how my experience can benefit your organization.</p>
          <div className="cta-buttons">
            <a href="/#contact" className="cta-button primary">Contact Me</a>
            <Link to="/?fromExperience=true" className="cta-button secondary">View More Experiences</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;