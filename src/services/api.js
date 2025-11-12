// API service for fetching properties
// This is a placeholder structure that will be replaced with actual API calls

// Placeholder data for development
const placeholderProperties = [
  {
    id: '1',
    address: '123 Main Street, San Francisco, CA 94102',
    price: 1250000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    type: 'House',
    featured: true,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
    description: 'Beautiful modern home in the heart of the city. Features updated kitchen, spacious living areas, and a private backyard perfect for entertaining.',
    features: ['Updated Kitchen', 'Hardwood Floors', 'Private Backyard', 'Garage', 'Central AC']
  },
  {
    id: '2',
    address: '456 Oak Avenue, Los Angeles, CA 90001',
    price: 850000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: 'Condo',
    featured: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    description: 'Stylish condo with modern amenities. Located in a vibrant neighborhood with easy access to shopping and dining.',
    features: ['Modern Appliances', 'Balcony', 'Gym Access', 'Parking', 'Pet Friendly']
  },
  {
    id: '3',
    address: '789 Pine Road, San Diego, CA 92101',
    price: 950000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2200,
    type: 'House',
    featured: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    description: 'Spacious family home with large yard and updated interior. Perfect for families looking for comfort and style.',
    features: ['Large Yard', 'Updated Bathrooms', 'Fireplace', 'Two-Car Garage', 'Solar Panels']
  },
  {
    id: '4',
    address: '321 Elm Street, San Jose, CA 95110',
    price: 1100000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1950,
    type: 'Townhouse',
    featured: true,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    description: 'Elegant townhouse with contemporary design. Features open floor plan and premium finishes throughout.',
    features: ['Open Floor Plan', 'Premium Finishes', 'Patio', 'Storage', 'HOA Included']
  },
  {
    id: '5',
    address: '654 Maple Drive, Oakland, CA 94601',
    price: 750000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1100,
    type: 'Condo',
    featured: true,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    description: 'Charming condo in a historic building. Recently renovated with attention to preserving original character.',
    features: ['Historic Building', 'Recently Renovated', 'High Ceilings', 'Walkable Neighborhood', 'Transit Access']
  },
  {
    id: '6',
    address: '987 Cedar Lane, Sacramento, CA 95814',
    price: 650000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    type: 'House',
    featured: true,
    image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&h=600&fit=crop',
    description: 'Well-maintained home in a quiet neighborhood. Great starter home or investment property.',
    features: ['Quiet Neighborhood', 'Well Maintained', 'Fenced Yard', 'Updated HVAC', 'Good Schools']
  }
]

/**
 * Fetch properties with optional filters
 * @param {Object} filters - Filter options (location, type, featured, limit, etc.)
 * @returns {Promise<Array>} Array of property objects
 */
export const fetchProperties = async (filters = {}) => {
  // TODO: Replace this with actual API call
  // Example: const response = await fetch(`${API_BASE_URL}/properties?${new URLSearchParams(filters)}`)
  // return await response.json()

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  let results = [...placeholderProperties]

  // Apply filters (placeholder logic)
  if (filters.featured) {
    results = results.filter(p => p.featured)
  }

  if (filters.location) {
    const locationLower = filters.location.toLowerCase()
    results = results.filter(p => 
      p.address.toLowerCase().includes(locationLower)
    )
  }

  if (filters.type) {
    // In a real implementation, this would filter by listing type (buy/rent)
    // For now, we'll just return all properties
  }

  if (filters.limit) {
    results = results.slice(0, filters.limit)
  }

  return results
}

/**
 * Fetch a single property by ID
 * @param {string} id - Property ID
 * @returns {Promise<Object>} Property object
 */
export const fetchPropertyById = async (id) => {
  // TODO: Replace this with actual API call
  // Example: const response = await fetch(`${API_BASE_URL}/properties/${id}`)
  // return await response.json()

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))

  const property = placeholderProperties.find(p => p.id === id)
  
  if (!property) {
    throw new Error('Property not found')
  }

  return property
}

/**
 * Search properties by query
 * @param {string} query - Search query
 * @param {Object} options - Additional search options
 * @returns {Promise<Array>} Array of matching properties
 */
export const searchProperties = async (query, options = {}) => {
  // TODO: Replace this with actual API call
  // This is a placeholder that uses fetchProperties
  return fetchProperties({ location: query, ...options })
}

