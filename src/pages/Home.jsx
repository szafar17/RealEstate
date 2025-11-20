import { useEffect, useState } from 'react'
import FeaturedListings from '../components/FeaturedListings'
import { fetchProperties } from '../services/api'
import './Home.css'

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const properties = await fetchProperties({ featured: true, limit: 6 })
        setFeaturedProperties(properties)
      } catch (error) {
        console.error('Error loading properties:', error)
        // Use placeholder data if API fails
        setFeaturedProperties([])
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [])

  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <img src="/ambassdorsLogo.png" alt="Ambassadors Real Estate" className="home-logo" />
          <div className="home-hero-text">
            <h1 className="home-hero-title">Find Your Dream Home</h1>
            <p className="home-hero-subtitle">Discover the perfect property with Ambassadors Real Estate</p>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading properties...</p>
        </div>
      ) : (
        <FeaturedListings properties={featuredProperties} showViewMore={true} />
      )}
    </div>
  )
}

export default Home

