import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo, contactInfo, navigationMenu } from '../data/mock';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '60px',
      paddingBottom: '40px'
    }}>
      <div className="dark-full-container">
        <div className="dark-content-container">
          
          {/* Main Footer Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '60px',
            marginBottom: '40px'
          }} className="footer-grid">
            
            {/* Company Info */}
            <div>
              <img
                src={companyInfo.logo}
                alt={companyInfo.name}
                style={{
                  height: '50px',
                  objectFit: 'contain',
                  marginBottom: '24px'
                }}
              />
              <p className="body-medium" style={{ 
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                maxWidth: '350px',
                lineHeight: '1.6'
              }}>
                {companyInfo.description}
              </p>
              
              {/* Social Media */}
              <div style={{
                display: 'flex',
                gap: '16px'
              }}>
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    style={{
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
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--brand-primary)';
                      e.target.style.color = '#000000';
                      e.target.style.borderColor = 'var(--brand-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.color = 'var(--text-muted)';
                      e.target.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="heading-3" style={{ 
                marginBottom: '20px',
                color: 'var(--text-primary)'
              }}>
                Quick Links
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {navigationMenu.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    style={{
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: 400,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="heading-3" style={{ 
                marginBottom: '20px',
                color: 'var(--text-primary)'
              }}>
                Services
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['New Vehicles', 'Used Vehicles', 'Financing', 'Trade-In', 'Service & Parts', 'Extended Warranties'].map((service, index) => (
                  <div
                    key={index}
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '16px',
                      fontWeight: 400,
                      cursor: 'pointer',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {service}
                  </div>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="heading-3" style={{ 
                marginBottom: '20px',
                color: 'var(--text-primary)'
              }}>
                Contact Info
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={16} style={{ color: 'var(--brand-primary)', marginTop: '2px', flexShrink: 0 }} />
                  <div style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                    {contactInfo.address}
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={16} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                  <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                    {contactInfo.phone}
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={16} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                  <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                    {contactInfo.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            paddingTop: '40px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }} className="footer-bottom">
            <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            
            <div style={{ display: 'flex', gap: '24px' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <button
                  key={index}
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            gap: 20px !important;
            text-align: center;
          }
          
          .footer-bottom > div:last-child {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
        
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;