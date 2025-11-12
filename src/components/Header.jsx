import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Ambassadors</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="https://placeholder-listings-url.com" className="nav-link" target="_blank" rel="noopener noreferrer">Listings</a>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/agents" className="nav-link">Agents</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>

        <div className="header-actions">
          <Link to="/" className="btn-secondary">Sign In</Link>
          <Link to="/" className="btn-primary">Join</Link>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

