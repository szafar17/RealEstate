import './Agents.css'

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: 'John Saraj',
      role: 'Realtor®',
      image: '/IMG_6445.jpg',
      phone: '(201) 314-4350',
      email: 'saraj@ambassadorsre.com',
    },
    {
      id: 2,
      name: 'Sahil Zafar',
      role: 'Realtor®',
      image: 'ZPic.JPG',
      phone: '(908) 635-6446',
      email: 'sahilzafar81@gmail.com',
    },
    {
      id: 3,
      name: 'Vitaliia Stefurak',
      role: 'Realtor®',
      image: '/2.png',
      phone: '(646) 387-4478',
      email: 'vitaestateexpert@gmail.com',
    },
    {
      id: 4,
      name: 'Tatianna',
      role: 'Realtor®',
      image: null,
      phone: '(201) 892-3773',
      email: null,
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
                      className={
                        agent.image === '/2.png' 
                          ? 'agent-image-vitaliia' 
                          : agent.image === '/IMG_6445.jpg' || agent.id === 1
                          ? 'agent-image-hamed'
                          : ''
                      }
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
                  {agent.phone && (
                    <p className="agent-contact">
                      <span className="contact-icon">📞</span> {agent.phone}
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

