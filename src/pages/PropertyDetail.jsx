import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPropertyById } from '../services/api'
import './PropertyDetail.css'

const PropertyDetail = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProperty = async () => {
      try {
        const data = await fetchPropertyById(id)
        setProperty(data)
      } catch (err) {
        setError('Property not found')
        console.error('Error loading property:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      loadProperty()
    }
  }, [id])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  if (loading) {
    return (
      <div className="property-detail-container">
        <div className="loading">Loading property details...</div>
      </div>
    )
  }

  if (error || !property) {
    return (
      <div className="property-detail-container">
        <div className="error">{error || 'Property not found'}</div>
      </div>
    )
  }

  return (
    <div className="property-detail">
      <div className="property-detail-hero">
        <img 
          src={property.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop'} 
          alt={property.address}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop'
          }}
        />
      </div>

      <div className="property-detail-container">
        <div className="property-detail-content">
          <div className="property-main">
            <h1>{property.address}</h1>
            <div className="property-price-large">{formatPrice(property.price)}</div>
            
            <div className="property-stats">
              <div className="stat">
                <span className="stat-label">Bedrooms</span>
                <span className="stat-value">{property.bedrooms}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Bathrooms</span>
                <span className="stat-value">{property.bathrooms}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Square Feet</span>
                <span className="stat-value">{property.sqft?.toLocaleString()}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Type</span>
                <span className="stat-value">{property.type}</span>
              </div>
            </div>

            <div className="property-description-section">
              <h2>Description</h2>
              <p>{property.description || 'No description available for this property.'}</p>
            </div>

            <div className="property-features">
              <h2>Features</h2>
              <ul>
                {property.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                )) || <li>No features listed</li>}
              </ul>
            </div>
          </div>

          <div className="property-sidebar">
            <div className="contact-card">
              <h3>Contact Agent</h3>
              <p>Interested in this property? Contact us today!</p>
              <button className="contact-button">Schedule a Tour</button>
              <button className="contact-button-secondary">Get More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail

