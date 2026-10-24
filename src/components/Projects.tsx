import './Projects.css'

const projects = [
  {
    index: "01",
    type: "CLIENT PROJECT",
    title: "Bandhan Elevators Website",
    summary: "Designed, developed, and deployed a responsive, multi-page website for a real-world elevator company, presenting its products, services, gallery, and business information with custom-domain hosting.",
    metric: "Live Production Site",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    link: "https://www.bandhanelevators.in/",
  },
  {
    index: "02",
    type: "GENERATIVE AI",
    title: "AI-Powered Meeting Intelligence Platform",
    summary: "Built and deployed an AI-powered application that converts recorded meetings into structured summaries and actionable items using Whisper-based speech recognition and large language models.",
    metric: "21 REST Endpoints",
    stack: ["Python", "FastAPI", "Whisper", "Groq", "LLMs"],
    link: "https://meeting-intelligence-system-weld.vercel.app/",
  },
  {
    index: "03",
    type: "SECURITY • ML",
    title: "PhishGuard AI – Phishing Detection",
    summary: "Developed a FastAPI REST API for phishing URL detection with XGBoost classifier achieving 99.65% F1-score and 99.81% ROC-AUC. Implemented 98 automated tests covering application functionality and API behavior.",
    metric: "99.65% F1-Score",
    stack: ["Python", "FastAPI", "XGBoost", "PostgreSQL", "Redis"],
    link: "https://phish-guard-ai-git-main-arun-rajoriya-s-projects.vercel.app/",
  },
  {
    index: "04",
    type: "DATA ANALYTICS • AI",
    title: "Crime Analytics Dashboard (MPSEDC)",
    summary: "Developed a crime analytics dashboard using Python, FastAPI, and SQLite to explore over 10,000 crime records. Integrated an AI-powered RAG chatbot with natural-language question answering, recording response times below 200 ms.",
    metric: "10K+ Records",
    stack: ["Python", "FastAPI", "SQLite", "RAG", "LLMs"],
    link: "https://metropolitan-cities-crime-statistic.vercel.app/",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-label">Selected work / 04</p>
            <h2 className="section-title">Proof, not promises.</h2>
          </div>
          <p className="section-description">
            Four production projects showcasing full-stack development with real-world impact.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.index} className={`project-card ${index === 0 || index === 3 ? 'large' : ''}`}>
              <div className="project-header">
                <span className="project-meta">{project.index} / {project.type}</span>
                <span className="project-signal"></span>
              </div>
              
              <div className="project-content">
                <p className="project-metric">{project.metric}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                
                <div className="project-stack">
                  {project.stack.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
