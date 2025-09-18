import React from 'react'

function TrustLogos() {
  const partners = [
    { name: 'HDFC Bank', logo: 'https://logos-world.net/wp-content/uploads/2021/02/HDFC-Bank-Logo.png' },
    { name: 'ICICI Bank', logo: 'https://logos-world.net/wp-content/uploads/2021/02/ICICI-Bank-Logo.png' },
    { name: 'SBI', logo: 'https://logos-world.net/wp-content/uploads/2021/02/SBI-Logo.png' },
    { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
    { name: 'Flipkart', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png' },
    { name: 'Swiggy', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png' }
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
                <div key={index} className="logo-card" data-name={partner.name}>
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