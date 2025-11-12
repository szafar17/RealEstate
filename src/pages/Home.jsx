import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
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
      <Hero />
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

