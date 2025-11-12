import PropertyCard from './PropertyCard'
import './FeaturedListings.css'

const FeaturedListings = ({ properties, title = "Featured Properties", showViewMore = false }) => {
  if (!properties || properties.length === 0) {
    return (
      <section className="featured-listings">
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <p className="no-properties">No properties available at this time. Check back soon!</p>
        </div>
      </section>
    )
  }

  return (
    <section className="featured-listings">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="properties-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {showViewMore && (
          <div className="view-more-container">
            <a 
              href="https://placeholder-listings-url.com" 
              className="view-more-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Listings
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedListings

