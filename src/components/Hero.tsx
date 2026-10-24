import './Hero.css'

const Hero = () => {
  const RESUME_URL = "/Arun_Rajoriya_Resume.pdf"
  
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src="/arun-rajoriya-portrait.png" 
          alt="Arun Rajoriya"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-fade-in">
          <span className="status-dot"></span>
          Open to 2026 roles
        </div>

        <p className="hero-label animate-fade-in-up">
          Aspiring Software Engineer | Python | React.js | Generative AI
        </p>

        <h1 className="hero-title animate-fade-in-up">
          Arun <span className="muted">Rajoriya</span>
        </h1>

        <p className="hero-description animate-fade-in-up">
          Software Engineer with hands-on experience developing backend APIs, full-stack web applications, and 
          Generative AI solutions using Python, FastAPI, React.js, and Retrieval-Augmented Generation (RAG). 
          Experienced in REST API development, automated testing, database integration, and application deployment.
        </p>

        <div className="hero-buttons animate-fade-in-up">
          <a href="#projects" className="button button-primary">
            Explore selected work
          </a>
          <a href={RESUME_URL} download className="button button-secondary">
            Download résumé
          </a>
        </div>

        <div className="hero-stats animate-fade-in-up">
          <div className="stat">
            <strong>99.65%</strong>
            <span>F1-score achieved</span>
          </div>
          <div className="stat">
            <strong>10K+</strong>
            <span>crime records</span>
          </div>
          <div className="stat">
            <strong>&lt;200ms</strong>
            <span>API response time</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
