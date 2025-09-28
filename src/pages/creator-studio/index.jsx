import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import CreatorHero from './components/CreatorHero';
import CreatorTools from './components/CreatorTools';
import MonetizationCalculator from './components/MonetizationCalculator';
import CreatorSpotlight from './components/CreatorSpotlight';
import CommunityGuidelines from './components/CommunityGuidelines';
import CreatorProgram from './components/CreatorProgram';
import { RainbowButton } from '../../components/ui/RainbowButton';

const CreatorStudio = () => {
  return (
    <>
      <Helmet>
        <title>Creator Studio - FortisArena | Build Your Gaming Empire</title>
        <meta 
          name="description" 
          content="Transform your gaming passion into profit with FortisArena's Creator Studio. Access professional tools, monetization opportunities, and join our creator program to build your gaming empire." 
        />
        <meta name="keywords" content="gaming creator, tournament organizer, streaming tools, gaming monetization, creator program, Web3 gaming, NFT rewards" />
        <meta property="og:title" content="Creator Studio - FortisArena | Build Your Gaming Empire" />
        <meta property="og:description" content="Professional tools and resources for gaming content creators and tournament organizers. Join the creator revolution." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/creator-studio" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-14 sm:pt-16">
          <CreatorHero />
          <CreatorTools />
          <MonetizationCalculator />
          <CreatorSpotlight />
          <CommunityGuidelines />
          <CreatorProgram />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default CreatorStudio;