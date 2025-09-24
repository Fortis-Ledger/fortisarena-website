import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CommunityStats from './components/CommunityStats';
import DAOGovernance from './components/DAOGovernance';
import CommunityLeaderboard from './components/CommunityLeaderboard';
import CommunityMap from './components/CommunityMap';
import UserTestimonials from './components/UserTestimonials';
import CommunityContent from './components/CommunityContent';
import SocialIntegration from './components/SocialIntegration';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Community - FortisArena | Gaming Liberation Hub</title>
        <meta name="description" content="Join the FortisArena community - DAO governance, global leaderboards, social integration, and community-generated content. Shape the future of decentralized gaming." />
        <meta name="keywords" content="FortisArena community, DAO governance, gaming community, esports community, Web3 gaming, blockchain gaming community" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 neural-network opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
                <Icon name="Users" size={16} />
                <span>47,832+ Active Members</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Community
                <span className="block text-transparent bg-gradient-to-r from-electric-blue via-neon-purple to-golden-cta bg-clip-text">
                  Nexus
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Join the revolution. Shape the future. Own your gaming destiny through community governance, 
                global competitions, and decentralized decision-making.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold electric-pulse"
                >
                  <Icon name="MessageSquare" size={20} />
                  Join Discord Community
                </Button>
                
                <Button variant="outline" size="lg">
                  <Icon name="Vote" size={20} />
                  Participate in DAO
                </Button>
              </div>
            </div>

            {/* Community Stats Overview */}
            <CommunityStats />
          </div>
        </section>

        {/* DAO Governance Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DAOGovernance />
          </div>
        </section>

        {/* Community Features Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Leaderboard */}
              <CommunityLeaderboard />
              
              {/* Global Community Map */}
              <CommunityMap />
            </div>
          </div>
        </section>

        {/* User Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <UserTestimonials />
          </div>
        </section>

        {/* Community Content Showcase */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CommunityContent />
          </div>
        </section>

        {/* Social Integration Hub */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SocialIntegration />
          </div>
        </section>

        {/* Community Call-to-Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gaming-dark via-gaming-secondary to-gaming-dark"></div>
          <div className="absolute inset-0 neural-network opacity-20"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Icon name="Zap" size={48} className="text-golden-cta mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of gamers who are building the next generation of decentralized gaming. 
                Your voice matters, your skills count, and your participation drives innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Vote" size={24} className="text-electric-blue" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Govern</h3>
                <p className="text-gray-300 text-sm">Vote on proposals and shape platform decisions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={24} className="text-neon-purple" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Compete</h3>
                <p className="text-gray-300 text-sm">Join tournaments and climb the leaderboards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-golden-cta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Coins" size={24} className="text-golden-cta" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Earn</h3>
                <p className="text-gray-300 text-sm">Get rewarded for your contributions and skills</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold"
              >
                <Icon name="Rocket" size={20} />
                Start Your Journey
              </Button>
              
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gaming-dark">
                <Icon name="BookOpen" size={20} />
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gaming-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center">
                  <Icon name="Star" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">FortisArena</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The future of eSports is decentralized. Join the revolution and own your gaming destiny.
              </p>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-electric-blue cursor-pointer transition-colors" />
                <Icon name="MessageSquare" size={20} className="text-gray-400 hover:text-electric-blue cursor-pointer transition-colors" />
                <Icon name="Youtube" size={20} className="text-gray-400 hover:text-electric-blue cursor-pointer transition-colors" />
                <Icon name="Github" size={20} className="text-gray-400 hover:text-electric-blue cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reddit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} FortisArena. All rights reserved. Gaming Liberation Starts Here.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityPage;