import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-main">
          <p className="footer-logo">AR<span className="accent">/</span>26</p>
          <p className="footer-tagline">
            Building production-ready applications with clean code and modern architecture.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Navigation</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#capabilities">Capabilities</a>
            </nav>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Connect</h4>
            <nav className="footer-nav">
              <a href="https://www.linkedin.com/in/arun-rajoriya-587a6a252/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/ArunRajoriya" target="_blank" rel="noreferrer">GitHub</a>
              <a href="mailto:arunrajoriya2004@gmail.com">Email</a>
              <a href="/Arun_Rajoriya_Resume.pdf" download>Resume</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Arun Rajoriya. Built with React + TypeScript + Vite.
          </p>
          <p className="footer-status">
            <span className="status-dot"></span>
            Available for 2026 opportunities
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
