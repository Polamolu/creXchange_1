import React from 'react'

function UserTypes() {
  return (
    <section id="for-users" className="user-types">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Choose Your Role</h2>
          <p className="section-description">
            Whether you want to save money or earn from your cards, we've got you covered
          </p>
        </div>
        
        <div className="user-types-grid">
          <div className="user-type-card">
            <div className="user-icon">🛍️</div>
            <h3 className="user-title">For Borrowers</h3>
            <div className="user-benefits">
              <div className="benefit"><span className="checkmark">✓</span><span>Access premium card offers without owning cards</span></div>
              <div className="benefit"><span className="checkmark">✓</span><span>Save up to 30% on your favorite brands</span></div>
              <div className="benefit"><span className="checkmark">✓</span><span>Instant virtual card access</span></div>
              <div className="benefit"><span className="checkmark">✓</span><span>No annual fees or hidden charges</span></div>
            </div>
            <div className="why-join">
              <strong>Why join now?</strong>
              <p>Get instant access to premium card offers without the hassle of owning multiple cards</p>
            </div>
            <button className="btn btn-primary user-cta">Register as Borrower</button>
          </div>

          <div className="user-type-card">
            <div className="user-icon">💳</div>
            <h3 className="user-title">For Card Sharers</h3>
            <div className="user-benefits">
              <div className="benefit"><span className="checkmark">✓</span><span>Earn commission on every transaction</span></div>
              <div className="benefit"><span className="checkmark">✓</span><span>Help others while making money</span></div>
              <div className="benefit"><span className="checkmark">✓</span><span>Complete control over sharing limits</span></div>
              <div className="benefit"><span className="checkmark">✓</span><span>Bank-grade security for all transactions</span></div>
            </div>
            <div className="why-join">
              <strong>Why join now?</strong>
              <p>Sharers earn commissions from day 1 and help build a community of smart spenders</p>
            </div>
            <button className="btn btn-primary user-cta">Register as Sharer</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserTypes