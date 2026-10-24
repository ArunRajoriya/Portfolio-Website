import './Capabilities.css'

const capabilities = [
  {
    title: "Frontend Architecture",
    description: "Building responsive, performant React applications with TypeScript. Component-driven design with modern state management, routing, and build optimization.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Backend Systems",
    description: "Scalable REST APIs with Python FastAPI. Database design, caching strategies, background workers, and production deployment patterns.",
    skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery"]
  },
  {
    title: "AI/ML Integration",
    description: "Integrating LLMs and AI models into production systems. RAG pipelines, voice transcription with Whisper AI, and intelligent data processing.",
    skills: ["LLMs", "RAG", "Whisper AI", "API Integration", "Data Processing"]
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end feature ownership from database to UI. API design, authentication, state synchronization, and deployment pipelines.",
    skills: ["REST APIs", "Authentication", "Docker", "Git", "CI/CD"]
  }
]

const Capabilities = () => {
  return (
    <section id="capabilities" className="capabilities">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-label">Capabilities</p>
            <h2 className="section-title">What I bring to the table.</h2>
          </div>
          <p className="section-description">
            Core competencies across the full development stack with production-proven experience.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div key={capability.title} className="capability-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-description">{capability.description}</p>
              <div className="capability-skills">
                {capability.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
