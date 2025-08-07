import React from 'react';
import { Shield, DollarSign, Heart, CheckCircle, CreditCard, Headphones } from 'lucide-react';
import { businessEdge } from '../data/mock';

const BusinessEdge = () => {
  const iconMap = [
    Shield,      // Curated Premium Collection
    DollarSign,  // Transparent Pricing
    Heart,       // Personalized Service
    CheckCircle, // Certified Quality
    CreditCard,  // Flexible Financing
    Headphones   // Lifetime Support
  ];

  return (
    <section 
      style={{
        padding: '100px 0',
        background: 'var(--bg-secondary)'
      }}
    >
      <div className="dark-full-container">
        <div className="dark-content-container">
          
          {/* Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '80px',
            maxWidth: '800px',
            margin: '0 auto 80px auto'
          }}>
            <h2 className="display-large" style={{ 
              marginBottom: '24px',
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--brand-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {businessEdge.title}
            </h2>
            <p className="body-large" style={{ 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover what sets ELIXR MOTORS apart in the luxury automotive industry
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }} className="features-grid">
            {businessEdge.features.map((feature, index) => {
              const IconComponent = iconMap[index];
              return (
                <div 
                  key={index}
                  style={{
                    padding: '40px 30px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 0.4s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className="dark-hover feature-card"
                >
                  {/* Background gradient on hover */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 255, 209, 0.05) 0%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease-in-out'
                  }} className="feature-bg"></div>
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ 
                      marginBottom: '24px',
                      color: 'var(--brand-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <IconComponent size={32} />
                    </div>
                    
                    <h3 
                      className="heading-2" 
                      style={{ 
                        marginBottom: '16px',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {feature.title}
                    </h3>
                    
                    <p 
                      className="body-medium" 
                      style={{ 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card:hover {
          border-color: var(--brand-primary) !important;
          transform: translateY(-4px);
          box-shadow: 0 16px 64px rgba(0, 255, 209, 0.15);
        }
        
        .feature-card:hover .feature-bg {
          opacity: 1;
        }
        
        @media (max-width: 767px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .feature-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessEdge;