import './Contact.css'

const Contact = () => {
  const EMAIL = "arunrajoriya2004@gmail.com"
  const LINKEDIN = "https://www.linkedin.com/in/arun-rajoriya-587a6a252"
  const GITHUB = "https://github.com/ArunRajoriya"
  const PHONE = "+919691310108"
  const WHATSAPP = `https://wa.me/${PHONE.replace(/[^0-9]/g, '')}?text=Hi%20Arun%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!`
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-main">
            <p className="section-label">Get in touch</p>
            <h2 className="contact-title">Let's build something together.</h2>
            <p className="contact-description">
              Open to full-time SDE roles, freelance projects, and collaboration opportunities. 
              Whether you're building a startup MVP or scaling an existing product, let's talk.
            </p>

            <div className="contact-links">
              <a href={`mailto:${EMAIL}`} className="contact-link primary">
                <span className="link-icon">✉</span>
                <span>{EMAIL}</span>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="contact-link">
                <span className="link-icon">💬</span>
                <span>{PHONE}</span>
              </a>
            </div>
          </div>

          <div className="contact-social">
            <h3 className="social-title">Connect</h3>
            <div className="social-links">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="social-link">
                <span>LinkedIn</span>
                <span className="arrow">→</span>
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="social-link">
                <span>GitHub</span>
                <span className="arrow">→</span>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="social-link">
                <span>WhatsApp</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
