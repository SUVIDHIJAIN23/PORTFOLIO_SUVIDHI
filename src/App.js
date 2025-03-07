import React, { useState } from 'react';
import './App.css'; // Import App.css for styling
import Articles from './Articles'; // Import the new Articles component

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

  // Professional data from resume
  const personalInfo = {
    name: "Suvidhi Jain",
    location: "Riverview, Michigan - 48193",
    phone: "+1 (734)-558-2890",
    email: "suvidhijain23@gmail.com",
    linkedin: "https://www.linkedin.com/in/suvidhi-jain/",
    summary: "As a brand strategist with over 4 years of experience, I have a proven track record of developing and executing successful branding and marketing initiatives. I possess a deep understanding of brand planning, content strategy, and digital marketing, enabling me to consistently drive brand engagement, increase visibility, and achieve business objectives. My experience in launching new products and campaigns, managing multi-million-dollar budgets, and coordinating cross-functional teams has equipped me with the skills and expertise to excel in senior marketing and brand strategy roles."
  };

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
        "Marshaled the launch of 6 real estate projects in 2.5 years for Shalimar Group and Phoenix Mills Ltd. each selling an average 60% inventory in the first 3 days after the launch.",
        "Coordinated the 360-degree launch of the \"Big in Your Life\" campaign for Aditya Birla Group at IPL 2022 increasing the brand visibility.",
        "Led the internal launch of 'Big In Your Life' digital marketing campaign for Aditya Birla Group on Ganna and Money Control Pro.",
        "Supervised, led, and contributed to 20+ client launches (both internal and external) in 2.5+ years for clients across industries."
      ]
    },
    {
      title: "Internship, Strategy and Planning",
      company: "TBWA",
      location: "Mumbai, India",
      period: "May'20 – Jul'20",
      achievements: [
        "Collated competition and category research for various Retail, Finance and Food and Beverage Brands.",
        "Analyzed the data gathered to mine key insights that formed the communication strategy's basis.",
        "Coordinated brand positioning exercises for Retail Brands to identify emergent positioning routes against the competitors.",
        "Conducted an in-depth study to develop the \"Finance Trends Post-Covid Report\", released by TBWA Mumbai in 2020."
      ]
    },
    {
      title: "Internship, Content Marketing Executive",
      company: "Amarjyoti Advertising Pvt. Ltd.",
      location: "Indore, India",
      period: "Apr'19 – Oct'19",
      achievements: [
        "Handled social media marketing, laid the website framework and crafted the website content for multiple local brands.",
        "Charted and executed on-page and off-page website optimization strategy to improve the website ranking from 14th to 2nd position in 2 months."
      ]
    }
  ];

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

  const skills = [
    "Branding Strategy",
    "Research – Brand, Category, Competition, Consumer",
    "Market Planning",
    "Social Media Marketing",
    "Strategic Communications",
    "Project Management",
    "Campaign Planning",
    "Analytical Skills"
  ];

  const achievements = [
    "Won the Chairperson Award for creating impact through innovative projects. (2024)",
    "Won the Venkat Vemulapalli Award for the ad film at Xaviers Institute of Communications. (2020)",
    "Placement Coordinator, Xaviers Institute of Communication for Batch-2019.",
    "Media Relations Coordinator, Press and Publicity Committee at Prestige Institute of Management and Research. (2017-2018)",
    "Content Head at the Press and Publicity Committee at Prestige Institute of Management and Research. (2016-2017)",
    "Awarded with multiple inter-school level certificates in Extempore, Debate and Singing competitions."
  ];

  return (
    <div className="app-container">
      {/* Header */}
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

      {/* Main Content */}
      <main className="main-content container"> {/* Renamed classes for CSS */}
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section mb-12"> {/* Renamed class for CSS */}
            <div className="section-card"> {/* Renamed classes for CSS */}
              <h2 className="section-title">About Me</h2> {/* Renamed class for CSS */}
              <div className="about-content"> {/* Renamed class for CSS */}
                <div className="about-text"> {/* Renamed class for CSS */}
                  <p className="about-summary">{personalInfo.summary}</p> {/* Renamed class for CSS */}
                  <div className="contact-info grid"> {/* Renamed classes for CSS */}
                    <div className="contact-item"> {/* Renamed class for CSS */}
                      <span className="contact-icon">📍</span>
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="contact-item"> {/* Renamed class for CSS */}
                      <span className="contact-icon">📱</span>
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="contact-item"> {/* Renamed class for CSS */}
                      <span className="contact-icon">✉️</span>
                      <a href={`mailto:${personalInfo.email}`} className="contact-link">{personalInfo.email}</a> {/* Renamed classes for CSS */}
                    </div>
                    <div className="contact-item"> {/* Renamed class for CSS */}
                      <span className="contact-icon">🔗</span>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a> {/* Renamed classes for CSS */}
                    </div>
                  </div>
                </div>
                <div className="about-image-area"> {/* Renamed class for CSS */}
                  <div className="profile-image-container"> {/* Renamed class for CSS */}
                  <img src={process.env.PUBLIC_URL + '/profile.jpeg'} alt="Suvidhi Jain" className="profile-image" />
                  </div>
                  <div className="about-buttons"> {/* Renamed class for CSS */}
                  <a href={process.env.PUBLIC_URL + '/Suvidhi_Jain_Resume.pdf'}>
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

              <div className="why-work-with-me mt-12"> {/* Renamed classes for CSS */}
                <h3 className="section-subtitle">Why Work With Me?</h3> {/* Renamed class for CSS */}
                <div className="why-work-grid"> {/* Renamed class for CSS */}
                  <div className="why-work-card brand-strategy"> {/* Renamed classes for CSS */}
                    <h4 className="why-work-title">Brand Strategy</h4> {/* Renamed class for CSS */}
                    <p className="why-work-text">Extensive experience in developing effective brand strategies that drive engagement and business growth.</p> {/* Renamed class for CSS */}
                  </div>
                  <div className="why-work-card program-management"> {/* Renamed classes for CSS */}
                    <h4 className="why-work-title">Program Management</h4> {/* Renamed class for CSS */}
                    <p className="why-work-text">Proven track record in managing complex projects with high accuracy and client satisfaction.</p> {/* Renamed class for CSS */}
                  </div>
                  <div className="why-work-card cross-functional"> {/* Renamed classes for CSS */}
                    <h4 className="why-work-title">Cross-Functional Leadership</h4> {/* Renamed class for CSS */}
                    <p className="why-work-text">Skilled at leading diverse teams and coordinating across departments to achieve business objectives.</p> {/* Renamed class for CSS */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="section mb-12"> {/* Renamed class for CSS */}
            <div className="section-card"> {/* Renamed classes for CSS */}
              <h2 className="section-title">Work Experience</h2> {/* Renamed class for CSS */}
              <div className="experience-list"> {/* Renamed class for CSS */}
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item"> {/* Renamed class for CSS */}
                    <div className="experience-bullet"></div> {/* Renamed class for CSS */}
                    <div className="experience-details"> {/* Renamed class for CSS */}
                      <h3 className="experience-title">{exp.title}</h3> {/* Renamed class for CSS */}
                      <div className="experience-info"> {/* Renamed class for CSS */}
                        <span className="experience-company">{exp.company}</span> {/* Renamed class for CSS */}
                        <span className="separator">•</span>
                        <span className="experience-location">{exp.location}</span> {/* Renamed class for CSS */}
                        <span className="separator">•</span>
                        <span className="experience-period">{exp.period}</span> {/* Renamed class for CSS */}
                      </div>
                    </div>
                    <ul className="achievements-list"> {/* Renamed class for CSS */}
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="achievement-item"> {/* Renamed class for CSS */}
                          <span className="achievement-bullet">•</span>
                          <span className="achievement-text">{achievement}</span> {/* Renamed class for CSS */}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="section mb-12"> {/* Renamed class for CSS */}
            <div className="section-card"> {/* Renamed classes for CSS */}
              <h2 className="section-title">Education</h2> {/* Renamed class for CSS */}
              <div className="education-list"> {/* Renamed class for CSS */}
                {education.map((edu, index) => (
                  <div key={index} className="education-card"> {/* Renamed class for CSS */}
                    <h3 className="education-degree">{edu.degree}</h3> {/* Renamed class for CSS */}
                    <div className="education-info"> {/* Renamed class for CSS */}
                      <span className="education-institution">{edu.institution}</span> {/* Renamed class for CSS */}
                      <span className="separator">|</span>
                      <span className="education-location">{edu.location}</span> {/* Renamed class for CSS */}
                      <span className="separator">|</span>
                      <span className="education-period">{edu.period}</span> {/* Renamed class for CSS */}
                    </div>
                    {edu.grade && (
                      <div className="education-grade"> {/* Renamed class for CSS */}
                        <span className="info-label">Grade:</span> <span className="info-value">{edu.grade}</span> {/* Renamed classes for CSS */}
                      </div>
                    )}
                    {edu.awards && (
                      <div className="education-awards"> {/* Renamed class for CSS */}
                        <span className="award-text">{edu.awards}</span> {/* Renamed class for CSS */}
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
          <section className="section mb-12"> {/* Renamed class for CSS */}
            <div className="section-card"> {/* Renamed classes for CSS */}
              <h2 className="section-title">Skills & Competencies</h2> {/* Renamed class for CSS */}
              <div className="skills-grid"> {/* Renamed class for CSS */}
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card"> {/* Renamed class for CSS */}
                    <h3 className="skill-title">{skill}</h3> {/* Renamed class for CSS */}
                    <div className="skill-bar-container"> {/* Renamed class for CSS */}
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${Math.floor(Math.random() * 30 + 70)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
         {/* Articles Section - NEW */}
         {activeSection === 'articles' && (
          <Articles />
        )}

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <section className="section mb-12"> {/* Renamed class for CSS */}
            <div className="section-card"> {/* Renamed classes for CSS */}
              <h2 className="section-title">Achievements</h2> {/* Renamed class for CSS */}
              <div className="achievements-grid"> {/* Renamed class for CSS */}
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card"> {/* Renamed class for CSS */}
                    <div className="achievement-icon">🏆</div> {/* Renamed class for CSS */}
                    <p className="achievement-text">{achievement}</p> {/* Renamed class for CSS */}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="section mb-12"> {/* Renamed class for CSS */}
            <div className="section-card"> {/* Renamed classes for CSS */}
              <h2 className="section-title">Get In Touch</h2> {/* Renamed class for CSS */}
              <div className="contact-section-content grid"> {/* Renamed classes for CSS */}
                <div className="contact-info-area"> {/* Renamed class for CSS */}
                  <h3 className="section-subtitle">Contact Information</h3> {/* Renamed class for CSS */}
                  <div className="contact-details"> {/* Renamed class for CSS */}
                    <div className="contact-detail-item"> {/* Renamed class for CSS */}
                      <div className="contact-detail-icon">✉️</div> {/* Renamed class for CSS */}
                      <div className="contact-detail-text"> {/* Renamed class for CSS */}
                        <p className="detail-label">Email</p> {/* Renamed class for CSS */}
                        <a href={`mailto:suvidhijain23@gmail.com`} className="contact-link">{personalInfo.email}</a> {/* Renamed classes for CSS */}
                      </div>
                    </div>
                    <div className="contact-detail-item"> {/* Renamed class for CSS */}
                      <div className="contact-detail-icon">📱</div> {/* Renamed class for CSS */}
                      <div className="contact-detail-text"> {/* Renamed class for CSS */}
                        <p className="detail-label">Phone</p> {/* Renamed class for CSS */}
                        <p className="info-value">{personalInfo.phone}</p> {/* Renamed classes for CSS */}
                      </div>
                    </div>
                    <div className="contact-detail-item"> {/* Renamed class for CSS */}
                      <div className="contact-detail-icon">📍</div> {/* Renamed class for CSS */}
                      <div className="contact-detail-text"> {/* Renamed class for CSS */}
                        <p className="detail-label">Location</p> {/* Renamed class for CSS */}
                        <p className="info-value">{personalInfo.location}</p> {/* Renamed classes for CSS */}
                      </div>
                    </div>
                    <div className="contact-detail-item"> {/* Renamed class for CSS */}
                      <div className="contact-detail-icon">🔗</div> {/* Renamed class for CSS */}
                      <div className="contact-detail-text"> {/* Renamed class for CSS */}
                        <p className="detail-label">LinkedIn</p> {/* Renamed class for CSS */}
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a> {/* Renamed classes for CSS */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-form-area"> {/* Renamed class for CSS */}
                  <h3 className="section-subtitle">Send Me a Message</h3> {/* Renamed class for CSS */}
                  <form
                    className="contact-form" 
                    action="mailto:suvidhijain23@gmail.com" // Remember to change this to your email
                    method="post"
                    encType="text/plain"
                  >
                    <div className="form-group"> {/* Renamed class for CSS */}
                      <label htmlFor="name" className="form-label">Name</label> {/* Renamed class for CSS */}
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
                      <label htmlFor="email" className="form-label">Email</label> {/* Renamed class for CSS */}
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input" 
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group"> {/* Renamed class for CSS */}
                      <label htmlFor="subject" className="form-label">Subject</label> {/* Renamed class for CSS */}
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-input" 
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group"> {/* Renamed class for CSS */}
                      <label htmlFor="message" className="form-label">Message</label> {/* Renamed class for CSS */}
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

      {/* Footer */}
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
};

export default App;
