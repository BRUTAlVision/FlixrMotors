import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo, submitInquiry } from '../data/mock';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitInquiry(formData);
      setSubmitMessage(result.message);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <section 
      id="contact"
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
              {contactInfo.title}
            </h2>
            <p className="body-large" style={{ 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {contactInfo.subtitle}
            </p>
          </div>

          {/* Contact Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }} className="contact-grid">
            
            {/* Contact Info */}
            <div>
              <div style={{ marginBottom: '40px' }}>
                <h3 className="heading-1" style={{ 
                  marginBottom: '24px',
                  color: 'var(--text-primary)'
                }}>
                  Visit Our Showroom
                </h3>
                <p className="body-medium" style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '32px'
                }}>
                  Experience our premium collection in person. Our expert team is ready to help you find your perfect vehicle.
                </p>
              </div>

              {/* Contact Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    color: 'var(--brand-primary)', 
                    marginTop: '2px',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="body-medium" style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      marginBottom: '4px'
                    }}>
                      Address
                    </div>
                    <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {contactInfo.address}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    color: 'var(--brand-primary)', 
                    marginTop: '2px',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="body-medium" style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      marginBottom: '4px'
                    }}>
                      Phone
                    </div>
                    <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {contactInfo.phone}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    color: 'var(--brand-primary)', 
                    marginTop: '2px',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="body-medium" style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      marginBottom: '4px'
                    }}>
                      Email
                    </div>
                    <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {contactInfo.email}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    color: 'var(--brand-primary)', 
                    marginTop: '2px',
                    flexShrink: 0
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="body-medium" style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      marginBottom: '4px'
                    }}>
                      Hours
                    </div>
                    <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {contactInfo.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} style={{
                background: 'var(--bg-primary)',
                padding: '40px',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'grid', gap: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="body-small" style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                      }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '0px',
                          color: 'var(--text-primary)',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                      />
                    </div>
                    
                    <div>
                      <label className="body-small" style={{ 
                        display: 'block', 
                        marginBottom: '8px', 
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                      }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '0px',
                          color: 'var(--text-primary)',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="body-small" style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                    />
                  </div>

                  <div>
                    <label className="body-small" style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Vehicle Interest">Vehicle Interest</option>
                      <option value="Financing">Financing</option>
                      <option value="Trade-In">Trade-In</option>
                      <option value="Service">Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="body-small" style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0px',
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                        resize: 'vertical'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ 
                      justifyContent: 'center',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={20} />}
                  </button>

                  {submitMessage && (
                    <div style={{
                      padding: '12px 16px',
                      background: 'rgba(0, 255, 209, 0.1)',
                      border: '1px solid var(--brand-primary)',
                      color: 'var(--brand-primary)',
                      textAlign: 'center',
                      fontSize: '14px'
                    }}>
                      {submitMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .contact-grid > div:last-child {
            order: -1;
          }
          
          .contact-grid form {
            padding: 30px 20px !important;
          }
          
          .contact-grid form > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;