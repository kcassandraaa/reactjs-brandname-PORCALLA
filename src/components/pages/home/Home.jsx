import React from 'react'
import Navigation from '../../partials/Navigation';
import Footer from '../../partials/Footer';
import Hero from './hero/Hero';
import Features from './features/Features';
import Testimonials from './testimonials/Testimonials';
import Pricing from './pricing/Pricing';
import Cta from '../../partials/Cta';

const Home = () => {
  return (
    <>
        <Navigation/>
        <Hero/>
        <Features/>
        <Testimonials />
        <Pricing />
        <Cta />
        <Footer/>
    </>
  );
};

export default Home;
