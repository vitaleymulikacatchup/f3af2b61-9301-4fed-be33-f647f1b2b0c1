import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Locations from './components/Locations';
import Stats from './components/Stats';
import Team from './components/Team';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Chart from './components/Chart';
import Testimonials from './components/Testimonials';
import VideoTestimonials from './components/VideoTestimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Locations />
      <Stats />
      <Team />
      <Services />
      <FAQ />
      <Chart />
      <Testimonials />
      <VideoTestimonials />
      <CTA />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;