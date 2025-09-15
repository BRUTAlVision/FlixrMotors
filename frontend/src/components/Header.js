import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { companyInfo, navigationMenu } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (item) => {
    if (item.href === '#inventory') {
      navigate('/inventory');
    } else {
      // For home page sections, navigate to home first, then scroll
      if (window.location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
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
          onClick={() => navigate('/')}
        />
      </div>

      {/* Desktop Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
      }} className="desktop-nav">
        {navigationMenu.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(item)}
            className="nav-text"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 400,
              transition: 'color 0.3s ease',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            {item.label}
          </button>
        ))}
        
        <button
          onClick={() => handleNavigation({ href: '#contact' })}
          className="btn-primary"
        >
          Early Access
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          padding: '8px'
        }}
        className="mobile-menu-btn"
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
        }} className="mobile-nav">
          {navigationMenu.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item)}
              style={{
                color: 'var(--text-secondary)',
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
            onClick={() => handleNavigation({ href: '#contact' })}
            className="btn-primary"
            style={{ marginTop: '10px', alignSelf: 'flex-start' }}
          >
            Early Access
          </button>
        </nav>
      )}

      <style jsx>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
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