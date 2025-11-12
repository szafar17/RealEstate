import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-card">
            <h2>We'd Love to Hear From You</h2>
            <p>Whether you're looking to buy, sell, or just have questions about real estate, our team at Ambassadors is here to help.</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <h3>Phone</h3>
                <p>Contact information coming soon</p>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <p>Contact information coming soon</p>
              </div>
              <div className="contact-item">
                <h3>Office</h3>
                <p>Office address coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

