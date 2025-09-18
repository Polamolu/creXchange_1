import React from 'react'

function TrustLogos() {
  const partners = [
    { 
      name: 'HDFC Bank', 
      logo: (
        <svg viewBox="0 0 200 60" className="partner-logo">
          <rect width="200" height="60" fill="#004c8f"/>
          <text x="100" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">
            HDFC BANK
          </text>
        </svg>
      )
    },
    { 
      name: 'ICICI Bank', 
      logo: (
        <svg viewBox="0 0 200 60" className="partner-logo">
          <rect width="200" height="60" fill="#f47920"/>
          <text x="100" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">
            ICICI BANK
          </text>
        </svg>
      )
    },
    { 
      name: 'SBI', 
      logo: (
        <svg viewBox="0 0 200 60" className="partner-logo">
          <rect width="200" height="60" fill="#1f4e79"/>
          <circle cx="40" cy="30" r="15" fill="#ffd700"/>
          <text x="120" y="35" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">
            SBI
          </text>
        </svg>
      )
    },
    { 
      name: 'Axis Bank', 
      logo: (
        <svg viewBox="0 0 200 60" className="partner-logo">
          <rect width="200" height="60" fill="#97144d"/>
          <text x="100" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">
            AXIS BANK
          </text>
        </svg>
      )
    },
    { 
      name: 'Amazon', 
      logo: (
        <svg viewBox="0 0 200 60" className="partner-logo">
          <rect width="200" height="60" fill="#232f3e"/>
          <text x="100" y="30" textAnchor="middle" fill="#ff9900" fontSize="18" fontWeight="bold" fontFamily="Arial">
            amazon
          </text>
          <path d="M70 40 Q100 50 130 40" stroke="#ff9900" strokeWidth="3" fill="none"/>
          <polygon points="125,38 130,40 125,42" fill="#ff9900"/>
        </svg>
      )
    },
    { 
      name: 'Flipkart', 
      logo: (
        <svg viewBox="0 0 200 60" className="partner-logo">
          <rect width="200" height="60" fill="#2874f0"/>
          <text x="100" y="35" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">
            Flipkart
          </text>
        </svg>
      )
    }
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
                  {partner.logo}
                  <span className="partner-name">{partner.name}</span>
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