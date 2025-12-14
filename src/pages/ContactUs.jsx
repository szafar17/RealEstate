import { useState } from 'react'
import './ContactUs.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredHours: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Google Apps Script Web App URL - Replace with your own URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDhtIWkSa6jWkQbGKX03-fq9QR0cGf54dB2JiWlx5JRX1hKWIEV5fd86E5a5dirYcS/exec';
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      alert('Thank you for your message! We will get back to you soon.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredHours: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Thank you for your message! We will get back to you soon.')
      // Still reset form even if there's an error (since no-cors won't show errors)
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredHours: '',
        subject: '',
        message: ''
      })
    }
  }

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
          <div className="contact-layout">
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p className="form-intro">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(201) 555-1234"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="renting">Renting a Property</option>
                    <option value="investment">Real Estate Investment</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredHours">Preferred Hours to be Contacted</label>
                  <select
                    id="preferredHours"
                    name="preferredHours"
                    value={formData.preferredHours}
                    onChange={handleChange}
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>(201) 712-0041</p>
                </div>
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>saraj@ambassadorsre.com</p>
                </div>
                <div className="contact-item">
                  <h3>Office</h3>
                  <p>17 Watchung Ave<br />Chatham, NJ 07928</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
