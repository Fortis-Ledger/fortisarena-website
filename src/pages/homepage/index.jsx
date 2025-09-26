import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import CommunitySection from './components/CommunitySection';
import NewsletterSection from './components/NewsLetterSection';
import Footer from '../../components/ui/Footer';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.closest('a[href^="#"]');
      if (target) {
        e?.preventDefault();
        const id = target?.getAttribute('href')?.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>FortisArena - The Future of Decentralized Gaming</title>
        <meta 
          name="description" 
          content="Join the gaming revolution with FortisArena. Experience AI-powered matchmaking, blockchain security, play-to-earn economy, and DAO governance in the ultimate decentralized eSports platform." 
        />
        <meta 
          name="keywords" 
          content="decentralized gaming, blockchain gaming, eSports, Web3, gaming platform, cryptocurrency, NFT gaming, play-to-earn, gaming tournaments, AI matchmaking" 
        />
        <meta property="og:title" content="FortisArena - The Future of Decentralized Gaming" />
        <meta 
          property="og:description" 
          content="Revolutionary Web3 eSports ecosystem combining blockchain technology, AI-powered matchmaking, and community governance. Where skill meets ownership." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fortisarena.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FortisArena - Gaming Liberation" />
        <meta 
          name="twitter:description" 
          content="Join 125,000+ gamers in the decentralized gaming revolution. Play, earn, govern, and own your gaming destiny." 
        />
        <link rel="canonical" href="https://fortisarena.com" />
      </Helmet>

      <div className="min-h-screen bg-gaming-dark">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* Stats Section */}
          <StatsSection />

          {/* Features Section */}
          <FeaturesSection />

          {/* Community Section */}
          <CommunitySection />

          {/* Newsletter Section */}
          <div id="newsletter">
            <NewsletterSection />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;