import React, { useState } from 'react';

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Articles data with explicit PDF paths
  const articles = [
    {
      id: 1,
      title: "5 Reasons Why Your Business Needs Branding",
      summary: "Discover how branding shapes market perception, differentiates you from competition, boosts recognition, fuels business growth, and creates lasting customer relationships.",
      category: "strategy",
      date: "February 10, 2025",
      readTime: "5 min",
      // Use relative path to PDF files
      pdfUrl: "business-needs-branding.pdf",
      // PDF filename for download attribute
      pdfName: "business-needs-branding.pdf"
    },
    {
      id: 2,
      title: "5 Tips for Creating a Holistic Brand Experience",
      summary: "Learn the essentials of creating a brand experience that goes beyond visual identity, focusing on consistency, storytelling, emotional appeal, and consumer-centered approaches.",
      category: "experience",
      date: "January 15, 2025",
      readTime: "6 min",
      pdfUrl: "holistic-brand-experience.pdf",
      pdfName: "holistic-brand-experience.pdf"
    },
    {
      id: 3,
      title: "3 Ways How Branding to the Five Senses Has Helped Brands",
      summary: "Explore how multi-sensory branding creates a memorable brand experience, differentiates your business, and strengthens brand recall through examples like Apple vs Google.",
      category: "sensory",
      date: "December 5, 2024",
      readTime: "7 min",
      pdfUrl: "five-senses-branding.pdf",
      pdfName: "five-senses-branding.pdf"
    },
    {
      id: 4,
      title: "5 Secrets to Building a Strong Employer Brand",
      summary: "Discover key strategies for creating a compelling employer brand through employee value propositions, authentic storytelling, company culture, and investing in your team.",
      category: "employer",
      date: "November 20, 2024",
      readTime: "5 min",
      pdfUrl: "employer-brand.pdf",
      pdfName: "employer-brand.pdf"
    },
    {
      id: 5,
      title: "5 Steps to Create an Impactful Brand Story",
      summary: "Learn a proven framework for crafting brand stories that resonate with audiences by finding authentic narratives, determining emotional impact, including reasons to believe, and maintaining consistency.",
      category: "storytelling",
      date: "October 12, 2024",
      readTime: "8 min",
      pdfUrl: "brand-story.pdf",
      pdfName: "brand-story.pdf"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'strategy', name: 'Brand Strategy' },
    { id: 'experience', name: 'Brand Experience' },
    { id: 'sensory', name: 'Sensory Branding' },
    { id: 'employer', name: 'Employer Branding' },
    { id: 'storytelling', name: 'Brand Storytelling' }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  // Assign a color for each category
  const getCategoryColor = (category) => {
    const colors = {
      'strategy': '#6366f1',
      'experience': '#8b5cf6',
      'sensory': '#ec4899',
      'employer': '#3b82f6',
      'storytelling': '#10b981',
      'default': '#6366f1'
    };
    return colors[category] || colors.default;
  };

  // Get background gradient for article card based on category
  const getGradient = (category) => {
    const baseColor = getCategoryColor(category);
    return `linear-gradient(135deg, ${baseColor}, ${baseColor}CC)`;
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Brand Strategy Articles</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#4b5563',
        marginBottom: '2rem'
      }}>
        Insights and expertise on branding, marketing strategy, and creating memorable brand experiences.
      </p>

      {/* Category Filter */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '2.5rem'
      }}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '0.95rem',
              backgroundColor: activeCategory === category.id ? '#6366f1' : 'white',
              color: activeCategory === category.id ? 'white' : '#4b5563',
              boxShadow: activeCategory === category.id 
                ? '0 4px 12px rgba(99, 102, 241, 0.2)' 
                : '0 1px 3px rgba(0, 0, 0, 0.1)',
              margin: '0.25rem'
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {filteredArticles.map(article => (
          <div key={article.id} style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            border: '1px solid #f3f4f6'
          }}>
            {/* Article Image/Header */}
            <div style={{
              height: '160px',
              background: getGradient(article.category),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: '700',
              position: 'relative'
            }}>
              <span>{article.title.charAt(0)}</span>
            </div>

            {/* Article Content */}
            <div style={{
              padding: '1.5rem',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Article Meta Info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  padding: '0.25rem 0.75rem',
                  backgroundColor: `${getCategoryColor(article.category)}20`,
                  color: getCategoryColor(article.category),
                  borderRadius: '9999px'
                }}>
                  {categories.find(cat => cat.id === article.category)?.name || article.category}
                </span>
                <span style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  {article.readTime}
                </span>
              </div>

              {/* Article Title */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '0.75rem',
                lineHeight: '1.4'
              }}>
                {article.title}
              </h3>

              {/* Article Summary */}
              <p style={{
                color: '#4b5563',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                flexGrow: 1
              }}>
                {article.summary}
              </p>

              {/* Article Footer */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto',
                borderTop: '1px solid #f3f4f6',
                paddingTop: '1rem'
              }}>
                <span style={{
                  color: '#6b7280',
                  fontSize: '0.875rem'
                }}>
                  {article.date}
                </span>
                <a 
                  href={article.pdfUrl}
                  download={article.pdfName}
                  style={{
                    color: '#4f46e5',
                    fontWeight: '600',
                    textDecoration: 'none',
                    position: 'relative'
                  }}
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
 
    </div>
  );
};

export default Articles;