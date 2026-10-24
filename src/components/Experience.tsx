import './Experience.css'

const experiences = [
  {
    period: "Jan 2026 — Mar 2026",
    role: "Full-Stack Developer Intern",
    company: "MPSEDC (State IT Center), Bhopal",
    description: "Contributed to a government technology project focused on crime analytics and data intelligence solutions.",
    highlights: [
      "Developed a crime analytics dashboard using Python, FastAPI, and SQLite to explore over 10,000 crime records",
      "Integrated an AI-powered RAG chatbot with natural-language question answering over crime data",
      "Designed and integrated RESTful APIs with response times below 200 ms in project testing",
      "Contributed to application development, API integration, debugging, and validation"
    ]
  },
  {
    period: "2022 — 2026",
    role: "B.Tech in Computer Science & Engineering (AI & ML)",
    company: "Technocrats Institute of Technology Excellence, Bhopal",
    description: "Bachelor's degree in Computer Science with specialization in Artificial Intelligence and Machine Learning. CGPA: 7.77/10",
    highlights: [
      "Strong foundation in Data Structures and Algorithms",
      "Object-Oriented Programming and DBMS",
      "Software Development Lifecycle (SDLC)",
      "Built 4+ production-ready full-stack projects with AI integration"
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="section-title">Career timeline.</h2>
          </div>
          <p className="section-description">
            Building production software with real-world impact.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.role} className="experience-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="experience-header">
                <p className="experience-period">{exp.period}</p>
                <div className="experience-signal"></div>
              </div>
              
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-description">{exp.description}</p>
              
              <ul className="experience-highlights">
                {exp.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
