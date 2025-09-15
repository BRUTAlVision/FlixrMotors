import React, { useState } from 'react';
import Hero from './Hero';
import PlatformPreview from './PlatformPreview';
import SuccessStory from './SuccessStory';
import BusinessEdge from './BusinessEdge';
import Leadership from './Leadership';
import ContactForm from './ContactForm';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="dark-container">
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="platform">
          <PlatformPreview />
        </div>
        <div id="about">
          <SuccessStory />
        </div>
        <BusinessEdge />
        <div id="leadership">
          <Leadership />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;