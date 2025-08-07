import React from 'react';
import { ArrowRight, Star, Timer, Users } from 'lucide-react';
import { heroContent, companyInfo, platformLaunch } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlatform = () => {
    const element = document.querySelector('#platform');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        paddingTop: '80px'
      }}
    >
      <div className="dark-full-container">
        <div className="dark-content-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            minHeight: 'calc(100vh - 80px)'
          }} className="hero-grid">
            
            {/* Left Content */}
            <div style={{ padding: '40px 0' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
                color: 'var(--brand-primary)',
                fontSize: '16px',
                fontWeight: '500'
              }}>
                <Star size={20} fill="currentColor" />
                <span>Revolutionary Auction Platform</span>
              </div>
              
              <h1 className="display-huge chrome-gradient" style={{ 
                marginBottom: '24px'
              }}>
                {heroContent.title}
              </h1>
              
              <p className="body-large" style={{ 
                marginBottom: '40px',
                maxWidth: '500px',
                color: 'var(--text-secondary)'
              }}>
                {heroContent.subtitle}
              </p>
              
              {/* Platform Launch Alert */}
              <div style={{
                background: 'rgba(192, 192, 192, 0.1)',
                border: '1px solid var(--brand-primary)',
                padding: '16px 20px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Timer size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                <div>
                  <div style={{ color: 'var(--brand-primary)', fontWeight: '600', fontSize: '14px' }}>
                    LAUNCHING {platformLaunch.launchDate}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                    {platformLaunch.waitlistCount} people already waiting
                  </div>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap',
                marginBottom: '60px'
              }}>
                <button 
                  onClick={scrollToContact}
                  className="btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {heroContent.cta}
                  <ArrowRight size={20} />
                </button>
                
                <button 
                  onClick={scrollToPlatform}
                  className="btn-secondary"
                >
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
                marginTop: '40px'
              }}>
                <div>
                  <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                    2500+
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    Sellers Ready
                  </div>
                </div>
                <div>
                  <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                    10K+
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    Buyers Waiting
                  </div>
                </div>
                <div>
                  <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                    Q2 2025
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    Launch Date
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Large Logo Display */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '60px'
            }}>
              <div style={{
                position: 'relative',
                background: 'radial-gradient(circle at center, rgba(192, 192, 192, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                width: '500px',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={companyInfo.logo}
                  alt={companyInfo.name}
                  style={{
                    width: '400px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(192, 192, 192, 0.3))'
                  }}
                />
                
                {/* Animated Ring */}
                <div style={{
                  position: 'absolute',
                  width: '450px',
                  height: '450px',
                  border: '2px solid var(--brand-primary)',
                  borderRadius: '50%',
                  borderTop: '2px solid transparent',
                  animation: 'spin 20s linear infinite',
                  opacity: 0.6
                }}></div>
                
                {/* Additional decorative elements */}
                <div style={{
                  position: 'absolute',
                  width: '350px',
                  height: '350px',
                  border: '1px solid rgba(192, 192, 192, 0.3)',
                  borderRadius: '50%',
                  animation: 'spin 30s linear infinite reverse',
                  opacity: 0.4
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .hero-grid > div:last-child {
            order: -1;
          }
          
          .hero-grid > div:last-child > div {
            width: 300px !important;
            height: 300px !important;
          }
          
          .hero-grid > div:last-child img {
            width: 250px !important;
          }
          
          .hero-grid > div:last-child .animated-ring {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;