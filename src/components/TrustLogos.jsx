import React from 'react'

function TrustLogos() {
  const partners = [
    { 
      name: 'HDFC Bank', 
      logo: (
        <svg viewBox="0 0 120 50" className="partner-logo">
          <defs>
            <linearGradient id="hdfcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004c8f"/>
              <stop offset="100%" stopColor="#0066cc"/>
            </linearGradient>
          </defs>
          <rect width="120" height="50" fill="url(#hdfcGradient)" rx="4"/>
          <text x="60" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
            HDFC
          </text>
          <text x="60" y="35" textAnchor="middle" fill="white" fontSize="8" fontWeight="normal" fontFamily="Arial, sans-serif">
            BANK
          </text>
          <rect x="10" y="40" width="100" height="2" fill="#ffd700"/>
        </svg>
      )
    },
    { 
      name: 'ICICI Bank', 
      logo: (
        <svg viewBox="0 0 120 50" className="partner-logo">
          <defs>
            <linearGradient id="iciciGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f47920"/>
              <stop offset="100%" stopColor="#ff8c42"/>
            </linearGradient>
          </defs>
          <rect width="120" height="50" fill="url(#iciciGradient)" rx="4"/>
          <circle cx="20" cy="25" r="8" fill="white" opacity="0.9"/>
          <circle cx="20" cy="25" r="5" fill="#f47920"/>
          <text x="70" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
            ICICI
          </text>
          <text x="70" y="35" textAnchor="middle" fill="white" fontSize="8" fontWeight="normal" fontFamily="Arial, sans-serif">
            BANK
          </text>
        </svg>
      )
    },
    { 
      name: 'SBI', 
      logo: (
        <svg viewBox="0 0 120 50" className="partner-logo">
          <defs>
            <linearGradient id="sbiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1f4e79"/>
              <stop offset="100%" stopColor="#2d5aa0"/>
            </linearGradient>
            <radialGradient id="sbiCircleGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd700"/>
              <stop offset="70%" stopColor="#ffed4e"/>
              <stop offset="100%" stopColor="#f59e0b"/>
            </radialGradient>
          </defs>
          <rect width="120" height="50" fill="url(#sbiGradient)" rx="4"/>
          
          {/* Main SBI Circle */}
          <circle cx="25" cy="25" r="18" fill="url(#sbiCircleGradient)" stroke="#1f4e79" strokeWidth="1"/>
          <circle cx="25" cy="25" r="15" fill="none" stroke="#1f4e79" strokeWidth="0.5"/>
          <circle cx="25" cy="25" r="12" fill="none" stroke="#1f4e79" strokeWidth="0.5"/>
          
          {/* Inner design */}
          <path d="M 25 13 L 30 20 L 25 25 L 20 20 Z" fill="#1f4e79"/>
          <path d="M 25 25 L 30 30 L 25 37 L 20 30 Z" fill="#1f4e79"/>
          
          <text x="75" y="18" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">
            SBI
          </text>
          <text x="75" y="30" textAnchor="middle" fill="white" fontSize="6" fontWeight="normal" fontFamily="Arial, sans-serif">
            STATE BANK
          </text>
          <text x="75" y="38" textAnchor="middle" fill="white" fontSize="6" fontWeight="normal" fontFamily="Arial, sans-serif">
            OF INDIA
          </text>
        </svg>
      )
    },
    { 
      name: 'Axis Bank', 
      logo: (
        <svg viewBox="0 0 120 50" className="partner-logo">
          <defs>
            <linearGradient id="axisGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#97144d"/>
              <stop offset="100%" stopColor="#b91c5c"/>
            </linearGradient>
          </defs>
          <rect width="120" height="50" fill="url(#axisGradient)" rx="4"/>
          
          {/* Axis symbol */}
          <g transform="translate(15, 15)">
            <circle cx="10" cy="10" r="8" fill="white" opacity="0.9"/>
            <path d="M 6 6 L 14 14 M 14 6 L 6 14" stroke="#97144d" strokeWidth="2" strokeLinecap="round"/>
          </g>
          
          <text x="75" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
            AXIS
          </text>
          <text x="75" y="35" textAnchor="middle" fill="white" fontSize="8" fontWeight="normal" fontFamily="Arial, sans-serif">
            BANK
          </text>
        </svg>
      )
    },
    { 
      name: 'Amazon', 
      logo: (
        <svg viewBox="0 0 120 50" className="partner-logo">
          <rect width="120" height="50" fill="#232f3e" rx="4"/>
          <text x="60" y="22" textAnchor="middle" fill="#ff9900" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
            amazon
          </text>
          {/* Amazon smile */}
          <path d="M 25 32 Q 60 42 95 32" stroke="#ff9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <polygon points="90,30 95,32 90,34" fill="#ff9900"/>
        </svg>
      )
    },
    { 
      name: 'Flipkart', 
      logo: (
        <svg viewBox="0 0 120 50" className="partner-logo">
          <defs>
            <linearGradient id="flipkartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2874f0"/>
              <stop offset="100%" stopColor="#4285f4"/>
            </linearGradient>
          </defs>
          <rect width="120" height="50" fill="url(#flipkartGradient)" rx="4"/>
          
          {/* Flipkart 'f' logo */}
          <g transform="translate(15, 12)">
            <rect x="0" y="0" width="12" height="26" fill="white" rx="2"/>
            <rect x="3" y="3" width="6" height="3" fill="#2874f0"/>
            <rect x="3" y="8" width="5" height="3" fill="#2874f0"/>
            <rect x="3" y="13" width="4" height="3" fill="#2874f0"/>
            <rect x="3" y="20" width="6" height="3" fill="#2874f0"/>
          </g>
          
          <text x="75" y="20" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">
            Flipkart
          </text>
          <text x="75" y="33" textAnchor="middle" fill="white" fontSize="7" fontWeight="normal" fontFamily="Arial, sans-serif">
            The Big Billion Days
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