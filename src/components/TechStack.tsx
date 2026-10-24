import './TechStack.css'

const stack = [
  "Python", "FastAPI", "Node.js", "REST APIs",
  "React", "TypeScript", "JavaScript", "Next.js", "HTML5 & CSS3", "Tailwind CSS",
  "PostgreSQL", "MongoDB", "SQLite", "Redis",
  "Git", "Docker", "Celery", "Figma",
  "LLMs", "RAG", "Whisper AI"
]

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="container">
        <div className="tech-grid">
          {stack.map((tech, index) => (
            <div key={tech} className="tech-pill" style={{ animationDelay: `${index * 0.03}s` }}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
