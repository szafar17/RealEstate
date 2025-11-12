import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FeaturedListings from '../components/FeaturedListings'
import { fetchProperties } from '../services/api'
import './SearchResults.css'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const location = searchParams.get('location') || ''
  const type = searchParams.get('type') || 'buy'

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true)
      try {
        const filters = {}
        if (location) filters.location = location
        if (type) filters.type = type
        const results = await fetchProperties(filters)
        setProperties(results)
      } catch (error) {
        console.error('Error loading search results:', error)
        setProperties([])
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [location, type])

  return (
    <div className="search-results">
      <div className="search-results-header">
        <div className="container">
          <h1>Search Results</h1>
          {location && (
            <p className="search-query">
              {type === 'buy' ? 'Buying' : type === 'rent' ? 'Renting' : 'Selling'} in {location}
            </p>
          )}
          {!loading && (
            <p className="results-count">
              {properties.length} {properties.length === 1 ? 'property' : 'properties'} found
            </p>
          )}
        </div>
      </div>

      {loading ? (
        <div className="loading-container">
          <p>Searching properties...</p>
        </div>
      ) : (
        <FeaturedListings 
          properties={properties} 
          title={properties.length > 0 ? "Properties" : "No Properties Found"}
        />
      )}
    </div>
  )
}

export default SearchResults

