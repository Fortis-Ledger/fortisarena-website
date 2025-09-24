import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CreatorHero from './components/CreatorHero';
import CreatorTools from './components/CreatorTools';
import MonetizationCalculator from './components/MonetizationCalculator';
import CreatorSpotlight from './components/CreatorSpotlight';
import CommunityGuidelines from './components/CommunityGuidelines';
import CreatorProgram from './components/CreatorProgram';

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
        
        <main>
          <CreatorHero />
          <CreatorTools />
          <MonetizationCalculator />
          <CreatorSpotlight />
          <CommunityGuidelines />
          <CreatorProgram />
        </main>

        {/* Footer */}
        <footer className="bg-gaming-dark text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="font-heading font-bold text-lg">FortisArena</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Empowering creators to build gaming empires through Web3 innovation and community-driven growth.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Creator Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Getting Started</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tool Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Report Issues</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Discord Community</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter Updates</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">YouTube Channel</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date()?.getFullYear()} FortisArena. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CreatorStudio;