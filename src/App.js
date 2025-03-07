import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Articles from './Articles';
import SkillsSection from './SkillsSection';
import WorkExperienceSection from './WorkExperienceSection';
import ExperienceDetail from './ExperienceDetail';

// Main App component with all sections
const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Navigation links
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'articles', label: 'Articles' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  // Personal information data
  const personalInfo = {
    name: "Suvidhi Jain",
    location: "Riverview, Michigan - 48193",
    phone: "+1 (734)-558-2890",
    email: "suvidhijain23@gmail.com",
    linkedin: "https://www.linkedin.com/in/suvidhi-jain/",
    summary: "Hello! I'm Suvidhi Jain, a passionate brand strategist driven by the power of compelling narratives and data-informed decisions. With over four years of experience, I thrive on developing and executing impactful branding and marketing initiatives that not only resonate with target audiences but also directly contribute to business objectives.",
    summary2:"My journey in mass communication and advertising has equipped me with a deep understanding of consumer behavior and market dynamics. I blend creative strategic thinking with robust project management methodologies to ensure seamless execution, from initial market research to campaign launch and performance analysis.",
    summary3: "What sets me apart is my diverse industry experience, spanning both the fast-paced world of advertising agencies and the highly regulated pharmaceutical sector. This adaptability allows me to tailor strategies effectively for varied industries and stakeholder needs, translating complex information into clear, concise messaging that delivers brand value and achieves tangible results.",
    summary4: "I am excited to connect with forward-thinking organizations seeking a brand strategist who is not just creative but also analytical, results-oriented, and deeply committed to building strong, recognizable brand identities. Let's discuss how I can elevate your brand strategy and drive meaningful impact.",
  };

  // Work experience data
  const experiences = [
    {
      title: "Program Management Associate",
      company: "Piramal Pharma Solutions",
      location: "Michigan, United States",
      period: "Jun'23 – Present",
      achievements: [
        "Managed a client portfolio of ~$18 million annually, serving as the primary point of contact for 17 successful projects.",
        "Spearheaded cross-functional collaboration across 17 client projects, ensuring seamless customer experiences.",
        "Developed and established processes for efficient program management, enabling >95% accuracy in predicting and adherence of the timelines.",
        "Led the ideation and implementation of an Order-to-Cash (OTC) system, resulting in >90% monthly revenue forecast accuracy and increased billing/revenue recognition frequency through enhanced operational transparency. Awarded the Chairperson's Award FY'24 for this initiative."
      ]
    },
    {
      title: "Brand Partner",
      company: "Vyas Giannetti Creative",
      location: "Mumbai, India",
      period: "Aug'20 – Jan'23",
      achievements: [
        "Led a team of 7 junior brand partners, designers, and associates, devising strategies for branding and communication campaigns and supervising creative execution for the clients.",
        "Handled a portfolio of over 15+ clients, generating more than INR 5 Cr. (~USD 600K) revenue annually for the Agency.",
        "Managed clients across industries ranging from Education, Real estate, Hospitality, Food and Beverages, Fintech and Banking, and some multinational conglomerates, managing diversified businesses.",
        "Worked closely with the residential marketing team at Phoenix Mills Ltd. to create their annual and quarterly marketing plans detailed with activations and engagement strategy for the brand.",
        "Successfully launched India's leading B-school, BITSoM, a BITS Pilani and Aditya Birla Group venture.",
        "Managed the social media and internal communication channels for a leading international school increasing brand engagement by 3x in just 1 year.",
        "Marshaled the launch of 6 real estate projects in 2.5 years for Shalimar Group and Phoenix Mills Ltd. each selling an average 60% inventory in the first 3 days after the launch."
      ]
    }
  ];

  // Education data
  const education = [
    {
      degree: "Google Digital Marketing & E-commerce Professional Certificate",
      institution: "Google Certifications",
      location: "United States of America",
      period: "2025 – Present"
    },
    {
      degree: "Professional Specialization in Content Strategy",
      institution: "Northwestern University",
      location: "United States of America",
      period: "2022 – 2023",
      grade: "A (92-100 percentile)"
    },
    {
      degree: "Post Graduate Diploma in Advertising and Marketing Communication",
      institution: "Xavier's Institute of Communication",
      location: "Mumbai, India",
      period: "2019 – 2020",
      grade: "A (80-90 percentile)",
      awards: "Awarded Venkat Vemulapalli Memorial Award for Best Live Client Project, 2020"
    },
    {
      degree: "Bachelor of Arts in Mass Communication (Hons.)",
      institution: "Prestige Institute of Management and Research",
      location: "Indore, India",
      period: "2016 – 2019",
      grade: "CGPA: 9.6/10 (Department Rank: 1)",
      awards: "Awarded Gold Medal for Department Rank 1 in a batch of ~100 students"
    }
  ];

  // Achievements data
  const achievements = [
    "Won the Chairperson Award for creating impact through innovative projects. (2024)",
    "Won the Venkat Vemulapalli Award for the ad film at Xaviers Institute of Communications. (2020)",
    "Placement Coordinator, Xaviers Institute of Communication for Batch-2019.",
    "Media Relations Coordinator, Press and Publicity Committee at Prestige Institute of Management and Research. (2017-2018)",
    "Content Head at the Press and Publicity Committee at Prestige Institute of Management and Research. (2016-2017)",
    "Awarded with multiple inter-school level certificates in Extempore, Debate and Singing competitions."
  ];

  // Effect to handle URL params for section navigation
  useEffect(() => {
    // Check if coming back from experience page
    const urlParams = new URLSearchParams(window.location.search);
    const fromExperience = urlParams.get('fromExperience');
    
    if (fromExperience === 'true') {
      setActiveSection('experience');
    }
  }, []);

  // Home page with sections
  const HomePage = () => (
    <div className="app-container">
      <header className="header">
        <div className="header-content container">
          <h1 className="header-title">{personalInfo.name}</h1>
          <p className="header-subtitle">Brand Strategist & Program Manager</p>
          <div className="nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveSection(link.id)}
                className={`nav-button ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="main-content container">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section mb-12">
            <div className="section-card">
              <h2 className="section-title">About Me</h2>
              <div className="about-content">
                <div className="about-text">
                  <p className="about-summary">{personalInfo.summary}</p>
                  <p className="about-summary">{personalInfo.summary2}</p>
                  <p className="about-summary">{personalInfo.summary3}</p>
                  <p className="about-summary">{personalInfo.summary4}</p>
                  <div className="contact-info grid">
                    <div className="contact-item">
                      <span className="contact-icon">📍</span>
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📱</span>
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">✉️</span>
                      <a href={`mailto:${personalInfo.email}`} className="contact-link">{personalInfo.email}</a>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">🔗</span>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
                    </div>
                  </div>
                </div>
                <div className="about-image-area">
                  <div className="profile-image-container">
                    <img src={process.env.PUBLIC_URL + '/profile.jpeg'} alt="Suvidhi Jain" className="profile-image" />
                  </div>
                  <div className="about-buttons">
                    <a href={process.env.PUBLIC_URL + '/Suvidhi_Jain_Resume.pdf'}
                      download="Suvidhi_Jain_Resume.pdf"
                      className="resume-button"
                    >
                      Download Resume
                    </a>
                    <button
                      onClick={() => setActiveSection('contact')}
                      className="contact-button"
                    >
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>

              <div className="why-work-with-me mt-12">
                <h3 className="section-subtitle">My Core Strengths / What I Bring to the Table</h3>
                <div className="why-work-grid">
                  <div className="why-work-card brand-strategy">
                    <h4 className="why-work-title">Compelling Brand Storytelling</h4>
                    <p className="why-work-text">I craft resonant brand narratives that deeply connect with target audiences, ensuring your brand message is not just heard, but felt and remembered.</p>
                  </div>
                  <div className="why-work-card program-management">
                    <h4 className="why-work-title">Data-Driven Strategic Insights</h4>
                    <p className="why-work-text">My strategies are rooted in rigorous market research and analysis, ensuring every decision is informed, measurable, and optimized for maximum impact.</p>
                  </div>
                  <div className="why-work-card cross-functional">
                    <h4 className="why-work-title">Efficient Project Management & Collaboration</h4>
                    <p className="why-work-text">I excel at managing complex projects, coordinating cross-functional teams, and delivering results on time and within budget, ensuring smooth and successful campaign execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section - Using our new WorkExperienceSection component */}
        {activeSection === 'experience' && (
          <section className="section mb-12">
            <WorkExperienceSection />
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="section mb-12">
            <div className="section-card">
              <h2 className="section-title">Education</h2>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-card">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <div className="education-info">
                      <span className="education-institution">{edu.institution}</span>
                      <span className="separator">|</span>
                      <span className="education-location">{edu.location}</span>
                      <span className="separator">|</span>
                      <span className="education-period">{edu.period}</span>
                    </div>
                    {edu.grade && (
                      <div className="education-grade">
                        <span className="info-label">Grade:</span> <span className="info-value">{edu.grade}</span>
                      </div>
                    )}
                    {edu.awards && (
                      <div className="education-awards">
                        <span className="award-text">{edu.awards}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="section mb-12">
            <SkillsSection />
          </section>
        )}

        {/* Articles Section */}
        {activeSection === 'articles' && (
          <Articles />
        )}

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <section className="section mb-12">
            <div className="section-card">
              <h2 className="section-title">Achievements</h2>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">🏆</div>
                    <p className="achievement-text">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="section mb-12">
            <div className="section-card">
              <h2 className="section-title">Get In Touch</h2>
              <div className="contact-section-content grid">
                <div className="contact-info-area">
                  <h3 className="section-subtitle">Contact Information</h3>
                  <div className="contact-details">
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon">✉️</div>
                      <div className="contact-detail-text">
                        <p className="detail-label">Email</p>
                        <a href={`mailto:${personalInfo.email}`} className="contact-link">{personalInfo.email}</a>
                      </div>
                    </div>
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon">📱</div>
                      <div className="contact-detail-text">
                        <p className="detail-label">Phone</p>
                        <p className="info-value">{personalInfo.phone}</p>
                      </div>
                    </div>
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon">📍</div>
                      <div className="contact-detail-text">
                        <p className="detail-label">Location</p>
                        <p className="info-value">{personalInfo.location}</p>
                      </div>
                    </div>
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon">🔗</div>
                      <div className="contact-detail-text">
                        <p className="detail-label">LinkedIn</p>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-form-area">
                  <h3 className="section-subtitle">Send Me a Message</h3>
                  <form
                    className="contact-form"
                    action={`mailto:${personalInfo.email}`}
                    method="post"
                    encType="text/plain"
                  >
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-input"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="form-textarea"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="submit-button"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content container">
          <div className="footer-info">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-title">Brand Strategist & Program Manager</p>
          </div>
          <div className="footer-social">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              🔗
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-link">
              ✉️
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

  // Return the Router setup with updated routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience/:experienceId" element={
          <div className="app-container">
            <header className="header">
              <div className="header-content container">
                <h1 className="header-title">{personalInfo.name}</h1>
                <p className="header-subtitle">Brand Strategist & Program Manager</p>
              </div>
            </header>
            <main className="main-content container">
              <ExperienceDetail />
            </main>
            <footer className="footer">
              <div className="footer-content container">
                <div className="footer-info">
                  <h3 className="footer-name">{personalInfo.name}</h3>
                  <p className="footer-title">Brand Strategist & Program Manager</p>
                </div>
                <div className="footer-social">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    🔗
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="social-link">
                    ✉️
                  </a>
                </div>
              </div>
              <div className="footer-copyright">
                <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;