import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
  // State to track if element is in viewport for animation
  const [isVisible, setIsVisible] = useState(false);
  
  // Skills data organized by categories
  const skillCategories = [
    {
      id: 'branding',
      name: 'Branding & Strategy',
      tooltip: 'I develop comprehensive brand strategies that align with business goals and resonate with target audiences.',
      skills: [
        { name: 'Branding Strategy', percentage: 95 },
        { name: 'Market Planning', percentage: 90 },
        { name: 'Strategic Communications', percentage: 90 },
        { name: 'Campaign Planning', percentage: 85 }
      ]
    },
    {
      id: 'digital',
      name: 'Digital Marketing & Content',
      tooltip: 'My digital marketing expertise spans multiple channels and focuses on creating engaging content that drives results.',
      skills: [
        { name: 'Social Media Marketing', percentage: 80 },
        { name: 'Content Strategy', percentage: 85 },
        { name: 'Digital Marketing', percentage: 80 }
      ]
    },
    {
      id: 'research',
      name: 'Research & Analytics',
      tooltip: 'I conduct thorough research to uncover insights that inform strategic decisions and campaign development.',
      skills: [
        { name: 'Research - Brand, Category, Competition, Consumer', percentage: 90 },
        { name: 'Analytical Skills', percentage: 90 }
      ]
    },
    {
      id: 'project',
      name: 'Project Management & Soft Skills',
      tooltip: 'I excel at managing complex projects, collaborating across teams, and delivering results on time and on budget.',
      skills: [
        { name: 'Project Management', percentage: 95 },
        { name: 'Cross-functional Collaboration', percentage: 90 },
        { name: 'Team Leadership', percentage: 85 },
        { name: 'Client Communication & Management', percentage: 90 }
      ]
    }
  ];

  // Add animations styles when component mounts
  useEffect(() => {
    // Add the necessary CSS animations to the document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
        100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
      }
      
      @keyframes shine {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .skill-bar-fill {
        position: relative;
        overflow: hidden;
      }
      
      .skill-bar-fill::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 100%;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.6) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        animation: shine 2s infinite;
        animation-delay: var(--delay);
      }
      
      .skill-bar-hover {
        animation: pulse 2s infinite;
      }
      
      .skill-category {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .tooltip {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        background-color: #1f2937;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.75rem;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        max-width: 200px;
        text-align: center;
        z-index: 10;
      }
      
      .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: #1f2937 transparent transparent transparent;
      }
      
      .category-header:hover .tooltip {
        opacity: 1;
        visibility: visible;
      }
      
      @media (max-width: 768px) {
        .skills-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Clean up when component unmounts
      document.head.removeChild(style);
    };
  }, []);

  // Intersection Observer to detect when skills section enters viewport
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

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) observer.observe(skillsSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  // Animation effect for skill categories
  useEffect(() => {
    if (isVisible) {
      const categoryCards = document.querySelectorAll('.skill-category');
      categoryCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <div id="skills-section" className="section-card">
      <h2 className="section-title">Skills & Competencies</h2>
      
      <p style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#4b5563',
        marginBottom: '2.5rem',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
      }}>
        My core competencies span strategic brand development, digital marketing expertise, and effective project management. 
        I leverage a blend of creative thinking and analytical skills to deliver impactful results.
      </p>
      
      <div 
        className="skills-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginTop: '2rem'
        }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={category.id} 
            className="skill-category"
            style={{
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease, transform 0.5s ease',
              border: '1px solid #f3f4f6',
              height: '100%',
              transitionDelay: `${categoryIndex * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div 
              className="category-header"
              style={{
                position: 'relative',
                marginBottom: '1.25rem',
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1f2937',
                paddingBottom: '0.75rem',
                borderBottom: '2px solid #f3f4f6',
                position: 'relative',
                display: 'inline-block',
              }}>
                {category.name}
                <span style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                  width: '60px',
                  height: '2px',
                  background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                }}></span>
              </h3>
              <div className="tooltip">
                {category.tooltip}
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {category.skills.map((skill, index) => (
                <div key={index}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.375rem',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      fontWeight: '500', 
                      color: '#4b5563',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                      transitionDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s`
                    }}>
                      {skill.name}
                    </span>
                    <span style={{ 
                      fontWeight: '600', 
                      color: '#6366f1',
                      opacity: isVisible ? 1 : 0,
                      transition: 'opacity 0.5s ease',
                      transitionDelay: `${(categoryIndex * 0.2) + (index * 0.1) + 0.2}s`
                    }}>
                      {skill.percentage}%
                    </span>
                  </div>
                  
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '9999px',
                    overflow: 'hidden'
                  }}>
                    <div 
                      className="skill-bar-fill"
                      style={{
                        height: '100%',
                        borderRadius: '9999px',
                        background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: `${(categoryIndex * 0.2) + (index * 0.1) + 0.3}s`,
                        '--delay': `${(categoryIndex * 0.2) + (index * 0.1) + 1.3}s`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.classList.add('skill-bar-hover');
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.classList.remove('skill-bar-hover');
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;