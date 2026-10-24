import './Header.css'

interface HeaderProps {
  scrolled: boolean
}

const Header = ({ scrolled }: HeaderProps) => {
  const PHONE = "+919691310108"
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav">
        <a href="#home" className="logo">
          AR<span className="accent">/</span>26
        </a>
        
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
        </div>

        <a 
          href={`https://wa.me/${PHONE.replace(/[^0-9]/g, '')}?text=Hi%20Arun%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!`}
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
          Let's talk →
        </a>
      </nav>
    </header>
  )
}

export default Header
