import React from 'react'

function TrustLogos() {
  const partners = [
    { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/HDFC_Bank_Logo.svg' },
    { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/ICICI_Bank_Logo.svg' },
    { name: 'SBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/State_Bank_of_India_logo.svg/500px-State_Bank_of_India_logo.svg.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Flipkart_Logo.svg' },
    { name: 'Swiggy', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Swiggy_logo.svg' }
  ]

  const mediaLogos = [
    'TechCrunch',
    'YourStory',
    'Economic Times',
    'Mint'
  ]

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-content">
          <div className="partners-section">
            <h4 className="trust-title">Trusted Partners</h4>
            <div className="logos-grid">
              {partners.map((partner, index) => (
                <div key={index} className="logo-card">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
                  <span className="coming-soon">Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="media-section">
            <h4 className="trust-title">As Seen In</h4>
            <div className="media-logos">
              {mediaLogos.map((media, index) => (
                <div key={index} className="media-logo">
                  <span>{media}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustLogos