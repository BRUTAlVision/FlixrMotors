import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { leadership } from '../data/mock';

const Leadership = () => {
  return (
    <section 
      id="leadership"
      style={{
        padding: '100px 0',
        background: 'var(--bg-primary)'
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
              MEET OUR LEADERS
            </h2>
            <p className="body-large" style={{ 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              The visionary minds driving ELIXR MOTORS forward
            </p>
          </div>

          {/* Leadership Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            maxWidth: '1000px',
            margin: '0 auto'
          }} className="leadership-grid">
            
            {/* Founder */}
            <div 
              style={{
                padding: '40px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center',
                transition: 'all 0.4s ease-in-out',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="dark-hover leader-card"
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
              }} className="leader-bg"></div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  margin: '0 auto 24px auto',
                  overflow: 'hidden',
                  border: '3px solid var(--brand-primary)',
                  position: 'relative'
                }}>
                  <img
                    src={leadership.founder.image}
                    alt={leadership.founder.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                <h3 
                  className="heading-1" 
                  style={{ 
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}
                >
                  {leadership.founder.name}
                </h3>
                
                <div 
                  className="body-medium" 
                  style={{ 
                    marginBottom: '20px',
                    color: 'var(--brand-primary)',
                    fontWeight: '600'
                  }}
                >
                  {leadership.founder.title}
                </div>
                
                <p 
                  className="body-small" 
                  style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}
                >
                  {leadership.founder.bio}
                </p>

                {/* Social Links */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px'
                }}>
                  <button style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <Linkedin size={16} />
                  </button>
                  <button style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* CTO */}
            <div 
              style={{
                padding: '40px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center',
                transition: 'all 0.4s ease-in-out',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="dark-hover leader-card"
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
              }} className="leader-bg"></div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  margin: '0 auto 24px auto',
                  overflow: 'hidden',
                  border: '3px solid var(--brand-primary)',
                  position: 'relative'
                }}>
                  <img
                    src={leadership.cto.image}
                    alt={leadership.cto.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                <h3 
                  className="heading-1" 
                  style={{ 
                    marginBottom: '8px',
                    color: 'var(--text-primary)'
                  }}
                >
                  {leadership.cto.name}
                </h3>
                
                <div 
                  className="body-medium" 
                  style={{ 
                    marginBottom: '20px',
                    color: 'var(--brand-primary)',
                    fontWeight: '600'
                  }}
                >
                  {leadership.cto.title}
                </div>
                
                <p 
                  className="body-small" 
                  style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}
                >
                  {leadership.cto.bio}
                </p>

                {/* Social Links */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '16px'
                }}>
                  <button style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <Linkedin size={16} />
                  </button>
                  <button style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .leader-card:hover {
          border-color: var(--brand-primary) !important;
          transform: translateY(-4px);
          box-shadow: 0 16px 64px rgba(0, 255, 209, 0.15);
        }
        
        .leader-card:hover .leader-bg {
          opacity: 1;
        }
        
        @media (max-width: 767px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .leader-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Leadership;