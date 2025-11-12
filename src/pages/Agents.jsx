import './Agents.css'

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: 'Hamed Saraj',
      role: 'Broker',
      image: null, // Will be added later
    },
    {
      id: 2,
      name: 'Sahil Zafar',
      role: 'Agent',
      image: null, // Will be added later
    }
  ]

  return (
    <div className="agents">
      <div className="agents-hero">
        <div className="container">
          <h1>Our Agents</h1>
          <p>Meet the experienced professionals who make Ambassadors Real Estate exceptional</p>
        </div>
      </div>

      <div className="agents-content">
        <div className="container">
          <div className="agents-grid">
            {agents.map((agent) => (
              <div key={agent.id} className="agent-card">
                <div className="agent-image">
                  {agent.image ? (
                    <img src={agent.image} alt={agent.name} />
                  ) : (
                    <div className="agent-placeholder">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="agent-info">
                  <h3 className="agent-name">{agent.name}</h3>
                  <p className="agent-role">{agent.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agents

