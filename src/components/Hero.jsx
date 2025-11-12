import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const [searchType, setSearchType] = useState('buy')
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (location.trim()) {
      navigate(`/search?location=${encodeURIComponent(location)}&type=${searchType}`)
    }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Find Your Dream Home</h1>
          <p>Discover the perfect property with Ambassadors Real Estate</p>
        </div>
        
        <div className="search-container">
          <div className="search-tabs">
            <button 
              className={`tab ${searchType === 'buy' ? 'active' : ''}`}
              onClick={() => setSearchType('buy')}
            >
              Buy
            </button>
            <button 
              className={`tab ${searchType === 'rent' ? 'active' : ''}`}
              onClick={() => setSearchType('rent')}
            >
              Rent
            </button>
            <button 
              className={`tab ${searchType === 'sell' ? 'active' : ''}`}
              onClick={() => setSearchType('sell')}
            >
              Sell
            </button>
          </div>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Enter city, neighborhood, or ZIP code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero

