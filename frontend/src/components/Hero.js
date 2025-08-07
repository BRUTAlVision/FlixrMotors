import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { heroContent, companyInfo } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollection = () => {
    const element = document.querySelector('#about');
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
                <span>Premium Automotive Excellence</span>
              </div>
              
              <h1 className="display-huge" style={{ 
                marginBottom: '24px',
                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
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
              
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap',
                marginBottom: '60px'
              }}>
                <button 
                  onClick={scrollToCollection}
                  className="btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {heroContent.cta}
                  <ArrowRight size={20} />
                </button>
                
                <button 
                  onClick={scrollToContact}
                  className="btn-secondary"
                >
                  Schedule Visit
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
                    Cars Sold
                  </div>
                </div>
                <div>
                  <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                    98%
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    Satisfaction
                  </div>
                </div>
                <div>
                  <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                    15+
                  </div>
                  <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                    Brands
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
                background: 'radial-gradient(circle at center, rgba(0, 255, 209, 0.1) 0%, transparent 70%)',
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
                    filter: 'drop-shadow(0 20px 40px rgba(0, 255, 209, 0.3))'
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
        
        @media (max-width: 767px) {
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