import React from 'react';
import { TrendingUp, Award, Users, Calendar } from 'lucide-react';
import { successStory } from '../data/mock';

const SuccessStory = () => {
  const iconMap = {
    0: TrendingUp,
    1: Users,
    2: Award,
    3: Calendar
  };

  return (
    <section 
      id="about" 
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
              {successStory.title}
            </h2>
          </div>

          {/* Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }} className="success-grid">
            
            {/* Story Content */}
            <div>
              <div 
                className="body-medium" 
                style={{ 
                  lineHeight: '1.8',
                  color: 'var(--text-secondary)',
                  marginBottom: '40px'
                }}
              >
                {successStory.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '24px' }}>
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px'
              }}>
                {successStory.stats.map((stat, index) => {
                  const IconComponent = iconMap[index];
                  return (
                    <div 
                      key={index}
                      style={{
                        padding: '30px 20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        textAlign: 'center',
                        transition: 'all 0.4s ease-in-out'
                      }}
                      className="dark-hover stat-card"
                    >
                      <div style={{ 
                        marginBottom: '16px',
                        color: 'var(--brand-primary)',
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        <IconComponent size={32} />
                      </div>
                      <div 
                        className="display-medium" 
                        style={{ 
                          marginBottom: '8px',
                          color: 'var(--brand-primary)'
                        }}
                      >
                        {stat.number}
                      </div>
                      <div 
                        className="body-small" 
                        style={{ 
                          color: 'var(--text-muted)',
                          fontWeight: '500'
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stat-card:hover {
          background: rgba(0, 255, 209, 0.1) !important;
          border-color: var(--brand-primary) !important;
        }
        
        @media (max-width: 767px) {
          .success-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStory;