import React, { useState } from 'react';
import Header from './Header';
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
      <Header />
      <main>
        <Hero />
        <PlatformPreview />
        <SuccessStory />
        <BusinessEdge />
        <Leadership />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;