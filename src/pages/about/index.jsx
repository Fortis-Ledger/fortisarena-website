import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import EvolutionTimeline from './components/EvolutionTimeline';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import TeamSection from './components/TeamSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - FortisArena | Gaming Liberation Revolution</title>
        <meta
          name="description"
          content="Discover FortisArena's revolutionary vision for decentralized gaming. Where players own their digital destiny through blockchain technology, fair rewards, and community governance."
        />
        <meta name="keywords" content="decentralized gaming, blockchain eSports, player ownership, gaming revolution, Web3 gaming, FortisArena" />
        <meta property="og:title" content="About FortisArena - The Gaming Liberation Revolution" />
        <meta property="og:description" content="Join the revolution transforming eSports from centralized entertainment to player-owned economy. Play. Earn. Govern. Own your gaming destiny." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-14 sm:pt-16">
          <HeroSection />
          <VisionSection />
          <ProblemSolutionSection />
          <EvolutionTimeline />
          <TeamSection />
          <TestimonialsSection />
          <CallToActionSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;