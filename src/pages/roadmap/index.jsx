import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { RainbowButton } from '../../components/ui/RainbowButton';
import { AnimatedShinyText } from '../../components/ui/AnimatedShinyText';
import TimelineItem from './components/TimelineItem';
import RoadmapStats from './components/RoadmapStats';
import PhaseFilter from './components/PhaseFilter';
import LiveMetrics from './components/LiveMetrics';
import VisionSection from './components/VisionSection';
import CommunityVoting from './components/CommunityVoting';

const RoadmapPage = () => {
  const [activePhase, setActivePhase] = useState('all');
  const [filteredMilestones, setFilteredMilestones] = useState([]);

  const milestones = [
    {
      id: 1,
      phase: 'foundation',
      title: "Platform Foundation & Core Infrastructure",
      description: "Establishing the fundamental blockchain infrastructure and smart contract architecture for the FortisArena ecosystem.",
      timeline: "Q1 2024",
      category: "Infrastructure",
      status: "completed",
      progress: 100,
      features: [
        "Smart Contract Development",
        "Blockchain Integration",
        "Security Audits",
        "Core API Development"
      ],
      metrics: [
        { label: "Smart Contracts", value: "12" },
        { label: "Security Score", value: "A+" },
        { label: "API Endpoints", value: "45" }
      ],
      technicalSpecs: [
        "Polygon blockchain integration for low-cost transactions",
        "ERC-20 token standard implementation for $FRT",
        "Multi-signature wallet security protocols",
        "Decentralized storage integration with IPFS"
      ],
      partnerships: [
        "Polygon Network",
        "Chainlink Oracles",
        "OpenZeppelin Security"
      ],
      communityImpact: "Established the technical foundation that enables all future platform features, ensuring scalability and security for millions of users."
    },
    {
      id: 2,
      phase: 'foundation',
      title: "User Authentication & Wallet Integration",
      description: "Seamless Web3 wallet integration with traditional gaming account systems for enhanced user experience.",
      timeline: "Q1 2024",
      category: "User Experience",
      status: "completed",
      progress: 100,
      features: [
        "MetaMask Integration",
        "WalletConnect Support",
        "Social Login Options",
        "Account Recovery System"
      ],
      metrics: [
        { label: "Wallet Types", value: "8" },
        { label: "Login Success", value: "99.2%" },
        { label: "Recovery Rate", value: "95%" }
      ],
      technicalSpecs: [
        "Multi-wallet compatibility (MetaMask, Trust Wallet, Coinbase)",
        "Social authentication via Discord, Twitter, and Steam",
        "Biometric authentication for mobile devices",
        "Hardware wallet support for enhanced security"
      ],
      partnerships: [
        "MetaMask",
        "WalletConnect",
        "Auth0"
      ],
      communityImpact: "Simplified onboarding process resulted in 40% higher user retention and reduced barriers for traditional gamers entering Web3."
    },
    {
      id: 3,
      phase: 'foundation',
      title: "Tournament Management System",
      description: "Comprehensive tournament creation, management, and automated prize distribution system powered by smart contracts.",
      timeline: "Q2 2024",
      category: "Gaming Features",
      status: "completed",
      progress: 100,
      features: [
        "Tournament Creation Tools",
        "Automated Bracket Generation",
        "Real-time Score Tracking",
        "Smart Contract Payouts"
      ],
      metrics: [
        { label: "Tournaments", value: "342" },
        { label: "Prize Pool", value: "$2.4M" },
        { label: "Participants", value: "15.4K" }
      ],
      technicalSpecs: [
        "Dynamic bracket generation for various tournament formats",
        "Integration with popular gaming APIs for score verification",
        "Automated escrow system for prize pool management",
        "Real-time leaderboard updates with WebSocket connections"
      ],
      partnerships: [
        "Steam API",
        "Discord Bot Integration",
        "Twitch Streaming"
      ],
      communityImpact: "Enabled fair and transparent competitive gaming with instant payouts, attracting professional esports teams and content creators."
    },
    {
      id: 4,
      phase: 'growth',
      title: "AI-Powered Matchmaking Engine",
      description: "Advanced machine learning algorithms for fair player matching based on skill level, latency, and gaming preferences.",
      timeline: "Q2 2024",
      category: "AI & Analytics",
      status: "in-progress",
      progress: 75,
      features: [
        "Skill-Based Matching",
        "Latency Optimization",
        "Anti-Cheat Integration",
        "Performance Analytics"
      ],
      metrics: [
        { label: "Match Quality", value: "94%" },
        { label: "Avg Latency", value: "23ms" },
        { label: "Fair Matches", value: "91%" }
      ],
      technicalSpecs: [
        "TensorFlow-based machine learning models for skill assessment",
        "Geographic server routing for optimal latency",
        "Behavioral analysis for cheat detection",
        "Real-time performance monitoring and adjustment"
      ],
      partnerships: [
        "Google Cloud AI",
        "NVIDIA GeForce",
        "BattlEye Anti-Cheat"
      ],
      communityImpact: "Dramatically improved match quality and player satisfaction, reducing queue times by 60% while maintaining competitive balance."
    },
    {
      id: 5,
      phase: 'growth',
      title: "NFT Rewards & Achievement System",
      description: "Dynamic NFT generation for achievements, rare items, and tournament victories with marketplace integration.",
      timeline: "Q3 2024",
      category: "NFT & Rewards",
      status: "in-progress",
      progress: 60,
      features: [
        "Dynamic NFT Generation",
        "Achievement Badges",
        "Marketplace Integration",
        "Rarity System"
      ],
      metrics: [
        { label: "NFTs Minted", value: "8.2K" },
        { label: "Marketplace Vol", value: "$450K" },
        { label: "Unique Holders", value: "3.1K" }
      ],
      technicalSpecs: [
        "ERC-721 standard for unique achievement NFTs",
        "Procedural generation algorithms for rare items",
        "IPFS metadata storage for decentralized ownership",
        "Cross-game compatibility for NFT utilities"
      ],
      partnerships: [
        "OpenSea Marketplace",
        "Rarible Integration",
        "Polygon Studios"
      ],
      communityImpact: "Created new revenue streams for players while establishing true digital ownership of gaming achievements and rare items."
    },
    {
      id: 6,
      phase: 'growth',
      title: "Mobile Application Launch",
      description: "Native mobile applications for iOS and Android with full tournament participation and wallet management.",
      timeline: "Q3 2024",
      category: "Mobile Development",
      status: "in-progress",
      progress: 45,
      features: [
        "Native iOS/Android Apps",
        "Mobile Tournament Play",
        "Push Notifications",
        "Offline Mode Support"
      ],
      metrics: [
        { label: "Beta Users", value: "2.5K" },
        { label: "App Rating", value: "4.7★" },
        { label: "Daily Active", value: "1.8K" }
      ],
      technicalSpecs: [
        "React Native framework for cross-platform development",
        "Biometric authentication for secure wallet access",
        "Optimized UI for mobile gaming interfaces",
        "Background sync for tournament updates"
      ],
      partnerships: [
        "Apple App Store",
        "Google Play Store",
        "Firebase Analytics"
      ],
      communityImpact: "Expanding platform accessibility to mobile-first users, particularly in emerging markets where mobile gaming dominates."
    },
    {
      id: 7,
      phase: 'expansion',
      title: "DAO Governance Implementation",
      description: "Decentralized autonomous organization structure allowing community voting on platform decisions and treasury management.",
      timeline: "Q4 2024",
      category: "Governance",
      status: "upcoming",
      features: [
        "Proposal System",
        "Community Voting",
        "Treasury Management",
        "Delegation Features"
      ],
      technicalSpecs: [
        "Governance token distribution mechanisms",
        "Quadratic voting implementation for fair representation",
        "Multi-signature treasury management",
        "Proposal execution automation through smart contracts"
      ],
      partnerships: [
        "Snapshot Governance",
        "Gnosis Safe",
        "Aragon DAO Tools"
      ],
      communityImpact: "Transitioning to community ownership and governance, ensuring platform decisions reflect user interests and long-term sustainability."
    },
    {
      id: 8,
      phase: 'expansion',
      title: "Cross-Chain Integration",
      description: "Multi-blockchain support enabling users from different networks to participate in tournaments and trade assets.",
      timeline: "Q1 2025",
      category: "Blockchain",
      status: "upcoming",
      features: [
        "Multi-Chain Support",
        "Cross-Chain Bridges",
        "Universal Wallet",
        "Asset Portability"
      ],
      technicalSpecs: [
        "Integration with Ethereum, Binance Smart Chain, and Solana",
        "Automated market makers for cross-chain token swaps",
        "Universal asset standards for NFT portability",
        "Layer 2 scaling solutions for reduced transaction costs"
      ],
      partnerships: [
        "Chainlink CCIP",
        "LayerZero Protocol",
        "Multichain Bridge"
      ],
      communityImpact: "Breaking down blockchain silos to create a truly inclusive gaming ecosystem accessible to users regardless of their preferred network."
    },
    {
      id: 9,
      phase: 'evolution',
      title: "Virtual Reality Integration",
      description: "Immersive VR tournament experiences with spatial audio and haptic feedback for next-generation competitive gaming.",
      timeline: "Q2 2025",
      category: "VR/AR",
      status: "upcoming",
      features: [
        "VR Tournament Modes",
        "Spatial Audio",
        "Haptic Feedback",
        "Virtual Arenas"
      ],
      technicalSpecs: [
        "Unity 3D engine integration for VR development",
        "Oculus and SteamVR compatibility",
        "Real-time motion tracking and gesture recognition",
        "Cloud rendering for high-fidelity graphics"
      ],
      partnerships: [
        "Meta (Oculus)",
        "Valve (SteamVR)",
        "Unity Technologies"
      ],
      communityImpact: "Pioneering the future of competitive gaming by creating immersive experiences that blur the line between virtual and reality."
    }
  ];

  useEffect(() => {
    if (activePhase === 'all') {
      setFilteredMilestones(milestones);
    } else {
      setFilteredMilestones(milestones?.filter(milestone => milestone?.phase === activePhase));
    }
  }, [activePhase]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Roadmap Observatory - FortisArena | Interactive Timeline & Future Vision</title>
        <meta name="description" content="Explore FortisArena's interactive roadmap with milestone tracking, development progress, and community governance. Shape the future of decentralized gaming." />
        <meta name="keywords" content="FortisArena roadmap, gaming milestones, Web3 development, DAO governance, blockchain gaming timeline" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gaming-dark">
          <div className="absolute inset-0 neural-network opacity-30"></div>
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)]?.map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              className="group rounded-full border border-white/10 bg-white/5 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-white/10 mb-6 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1.5 transition ease-out hover:text-neutral-300 hover:duration-300">
                <Icon name="Map" size={14} className="text-accent mr-2" />
                <span>Roadmap Observatory</span>
              </AnimatedShinyText>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Charting the Future of
              <span className="block text-electric-blue">Decentralized Gaming</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Follow our journey as we build the most advanced Web3 gaming ecosystem. 
              Track milestones, participate in governance, and shape the future together.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                variant="glow"
                size="glow-lg"
                className="font-semibold w-full sm:w-auto"
                iconName="Vote"
                iconPosition="left"
              >
                Join Governance
              </Button>
              <Button
                variant="glow-accent"
                size="glow-lg"
                className="font-semibold w-full sm:w-auto"
                iconName="Download"
                iconPosition="left"
              >
                Download Whitepaper
              </Button>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Stats Section */}
          <RoadmapStats />

          {/* Live Metrics */}
          <LiveMetrics />

          {/* Phase Filter */}
          <PhaseFilter activePhase={activePhase} onPhaseChange={setActivePhase} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Development Timeline</h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Completed</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>In Progress</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                      <span>Upcoming</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-0">
                  {filteredMilestones?.map((milestone, index) => (
                    <TimelineItem
                      key={milestone?.id}
                      milestone={milestone}
                      index={index}
                      isLast={index === filteredMilestones?.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* Community Voting */}
              <CommunityVoting />

              {/* Quick Stats */}
              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-3 sm:mb-4">Development Activity</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Code Commits (30d)</span>
                    <span className="font-semibold text-foreground text-sm sm:text-base">247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Pull Requests</span>
                    <span className="font-semibold text-foreground text-sm sm:text-base">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Issues Resolved</span>
                    <span className="font-semibold text-foreground text-sm sm:text-base">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Test Coverage</span>
                    <span className="font-semibold text-success text-sm sm:text-base">94.2%</span>
                  </div>
                </div>
                
                <RainbowButton className="mt-3 sm:mt-4 w-full text-sm sm:text-base">
                  View Repository
                </RainbowButton>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4 sm:p-6 border border-accent/20">
                <div className="text-center">
                  <Icon name="Bell" size={24} className="text-accent mx-auto mb-2 sm:mb-3 sm:w-8 sm:h-8" />
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2">Stay Updated</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Get notified about milestone completions and major announcements.
                  </p>
                  <RainbowButton className="w-full text-sm sm:text-base">
                    Subscribe to Updates
                  </RainbowButton>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <VisionSection />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RoadmapPage;