import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { companyInfo, navigationMenu } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header style={{
      background: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '16px 7.6923%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '80px',
      zIndex: 10,
      boxSizing: 'border-box'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={companyInfo.logo}
          alt={companyInfo.name}
          style={{
            height: '40px',
            objectFit: 'contain',
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('#home')}
        />
      </div>

      {/* Desktop Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
      }} className="hidden md:flex">
        {navigationMenu.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.href)}
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 400,
              transition: 'color 0.3s ease',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            className="nav-link"
            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            {item.label}
          </button>
        ))}
        
        <button
          onClick={() => scrollToSection('#contact')}
          className="btn-primary"
        >
          Get Started
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        style={{
          display: 'block',
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          padding: '8px'
        }}
        className="md:hidden"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 7.6923%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }} className="md:hidden">
          {navigationMenu.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 400,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '8px 0'
              }}
            >
              {item.label}
            </button>
          ))}
          
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary"
            style={{ marginTop: '10px', alignSelf: 'flex-start' }}
          >
            Get Started
          </button>
        </nav>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .hidden { display: none !important; }
          .md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
        @media (max-width: 767px) {
          header {
            padding: 16px 20px !important;
            height: 70px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;