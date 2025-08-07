import React from 'react';
import { Zap, Brain, Smartphone, Shield, Clock, TrendingUp, Users, Award } from 'lucide-react';
import { platformLaunch } from '../data/mock';

const PlatformPreview = () => {
  const iconMap = [Zap, Brain, Smartphone, Shield];

  return (
    <section 
      id="platform"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, rgba(192, 192, 192, 0.05) 100%)',
        position: 'relative'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(192, 192, 192, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)',
        opacity: 0.6
      }}></div>

      <div className="dark-full-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="dark-content-container">
          
          {/* Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '80px'
          }}>
            <div style={{
              background: 'var(--brand-primary)',
              color: '#000000',
              padding: '8px 20px',
              display: 'inline-block',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '24px',
              letterSpacing: '1px'
            }}>
              COMING SOON
            </div>
            
            <h2 className="display-large chrome-gradient" style={{ 
              marginBottom: '24px'
            }}>
              {platformLaunch.title}
            </h2>
            
            <p className="body-large" style={{ 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto 40px auto'
            }}>
              {platformLaunch.subtitle}
            </p>

            {/* Countdown/Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              maxWidth: '800px',
              margin: '0 auto',
              marginBottom: '60px'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  color: 'var(--brand-primary)',
                  marginBottom: '8px'
                }}>
                  <Clock size={32} />
                </div>
                <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                  {platformLaunch.launchDate}
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                  Expected Launch
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  color: 'var(--brand-primary)',
                  marginBottom: '8px'
                }}>
                  <Users size={32} />
                </div>
                <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                  {platformLaunch.waitlistCount}
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                  Waiting List
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  color: 'var(--brand-primary)',
                  marginBottom: '8px'
                }}>
                  <TrendingUp size={32} />
                </div>
                <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                  150%
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                  Growth Rate
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  color: 'var(--brand-primary)',
                  marginBottom: '8px'
                }}>
                  <Award size={32} />
                </div>
                <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '4px' }}>
                  #1
                </div>
                <div className="body-small" style={{ color: 'var(--text-muted)' }}>
                  Innovation Award
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {platformLaunch.features.map((feature, index) => {
              const IconComponent = iconMap[index];
              return (
                <div 
                  key={index}
                  style={{
                    padding: '40px 30px',
                    background: 'var(--bg-primary)',
                    border: '2px solid var(--border-subtle)',
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
                    background: 'linear-gradient(135deg, rgba(192, 192, 192, 0.08) 0%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease-in-out'
                  }} className="feature-bg"></div>
                  
                  <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <div style={{ 
                      marginBottom: '24px',
                      color: 'var(--brand-primary)',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={48} />
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

                  {/* Coming Soon Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'var(--brand-primary)',
                    color: '#000000',
                    padding: '4px 8px',
                    fontSize: '10px',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}>
                    BETA
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '60px 40px',
            background: 'rgba(192, 192, 192, 0.05)',
            border: '1px solid var(--brand-primary)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent 30%, rgba(192, 192, 192, 0.1) 50%, transparent 70%)',
              animation: 'shimmer 3s infinite'
            }}></div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 className="display-medium" style={{ 
                marginBottom: '20px',
                color: 'var(--text-primary)'
              }}>
                Be Among The First
              </h3>
              
              <p className="body-large" style={{ 
                color: 'var(--text-secondary)',
                marginBottom: '30px',
                maxWidth: '500px',
                margin: '0 auto 30px auto'
              }}>
                Join thousands of sellers and buyers waiting for the most innovative auction platform ever created.
              </p>

              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
                style={{ 
                  padding: '16px 32px',
                  fontSize: '20px',
                  minHeight: '64px'
                }}
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card:hover {
          border-color: var(--brand-primary) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 80px rgba(192, 192, 192, 0.15);
        }
        
        .feature-card:hover .feature-bg {
          opacity: 1;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @media (max-width: 768px) {
          .feature-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PlatformPreview;