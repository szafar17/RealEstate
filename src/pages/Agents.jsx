import './Agents.css'

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: 'Hamed Saraj',
      role: 'Broker/Sales Associate',
      image: null,
      company: 'Ambassadors RE',
      address: null,
      phone: '(201) 712-0041 Office',
      phone2: '(201) 314-4350 Cell',
      email: null,
    },
    {
      id: 2,
      name: 'Sahil Zafar',
      role: 'Agent',
      image: null,
      company: null,
      address: null,
      phone: null,
      email: null,
    },
    {
      id: 3,
      name: 'Vitaliia Stefurak',
      role: 'Realtor®',
      image: '/2.png',
      company: 'Halo Realty',
      address: '792 Chimney Rock Road, Suite F',
      address2: 'Bridgewater, NJ 08836',
      phone: '646-387-4478',
      email: 'vitaestateexpert@gmail.com',
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
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      className={agent.id === 3 ? 'agent-image-vitaliia' : ''}
                    />
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
                  {agent.company && (
                    <p className="agent-company">{agent.company}</p>
                  )}
                  {agent.address && (
                    <p className="agent-address">
                      {agent.address}
                      {agent.address2 && (
                        <>
                          <br />
                          {agent.address2}
                        </>
                      )}
                    </p>
                  )}
                  {agent.phone && (
                    <p className="agent-contact">
                      <span className="contact-icon">📞</span> {agent.phone}
                    </p>
                  )}
                  {agent.phone2 && (
                    <p className="agent-contact">
                      <span className="contact-icon">📞</span> {agent.phone2}
                    </p>
                  )}
                  {agent.email && (
                    <p className="agent-contact">
                      <span className="contact-icon">✉️</span> <a href={`mailto:${agent.email}`}>{agent.email}</a>
                    </p>
                  )}
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

