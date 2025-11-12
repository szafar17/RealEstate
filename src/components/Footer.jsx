import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Ambassadors</h3>
            <p className="footer-description">
              Your trusted partner in real estate. Finding your dream home starts here.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Buy & Sell</h4>
            <ul>
              <li><Link to="/search">Search Properties</Link></li>
              <li><Link to="/">Buy a Home</Link></li>
              <li><Link to="/">Sell a Home</Link></li>
              <li><Link to="/">Rent a Home</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/">Mortgage Calculator</Link></li>
              <li><Link to="/">Neighborhood Guides</Link></li>
              <li><Link to="/">Market Trends</Link></li>
              <li><Link to="/">Home Valuation</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Our Agents</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ambassadors Real Estate. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

