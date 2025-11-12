import { Link } from 'react-router-dom'
import './PropertyCard.css'

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Link to={`/property/${property.id}`} className="property-card">
      <div className="property-image">
        <img 
          src={property.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'} 
          alt={property.address}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'
          }}
        />
        <div className="property-badge">{property.type}</div>
        {property.featured && <div className="featured-badge">Featured</div>}
      </div>
      
      <div className="property-content">
        <div className="property-price">{formatPrice(property.price)}</div>
        <h3 className="property-address">{property.address}</h3>
        <div className="property-details">
          <span className="detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            {property.bedrooms} Beds
          </span>
          <span className="detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            {property.bathrooms} Baths
          </span>
          <span className="detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            {property.sqft?.toLocaleString()} sqft
          </span>
        </div>
        {property.description && (
          <p className="property-description">{property.description}</p>
        )}
      </div>
    </Link>
  )
}

export default PropertyCard

