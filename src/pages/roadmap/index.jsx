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
      title: "Community Building & Manual Tournaments",
      description: "Building a strong community foundation through manual tournaments and community engagement activities.",
      timeline: "Q1 2025",
      category: "Community",
      status: "in-progress",
      progress: 60,
      features: [
        "Community Discord Server",
        "Manual Tournament Organization",
        "Community Events",
        "Social Media Engagement"
      ],
      metrics: [
        { label: "Discord Members", value: "500+" },
        { label: "Manual Tournaments", value: "12" },
        { label: "Community Events", value: "8" }
      ],
      technicalSpecs: [
        "Discord bot integration for community management",
        "Manual tournament bracket creation tools",
        "Community engagement tracking system",
        "Social media automation for announcements"
      ],
      partnerships: [
        "Discord",
        "Twitter",
        "YouTube"
      ],
      communityImpact: "Building a strong foundation of engaged community members who will be the first users of our platform."
    },
    {
      id: 2,
      phase: 'foundation',
      title: "MVP Beta Development & Testing",
      description: "Developing and testing the minimum viable product with limited users to gather feedback and improve the platform.",
      timeline: "Q2 2025",
      category: "Development",
      status: "in-progress",
      progress: 70,
      features: [
        "Basic Tournament System",
        "User Registration",
        "Wallet Integration",
        "Feedback Collection"
      ],
      metrics: [
        { label: "Beta Testers", value: "50" },
        { label: "Features Tested", value: "15" },
        { label: "Bug Reports", value: "23" }
      ],
      technicalSpecs: [
        "React-based frontend with modern UI components",
        "Node.js backend with Express framework",
        "PostgreSQL database for user data",
        "Web3 integration for wallet connectivity"
      ],
      partnerships: [
        "Beta Testing Community",
        "Development Team",
        "Early Adopters"
      ],
      communityImpact: "Creating a solid foundation for the platform through rigorous testing and community feedback."
    },
    {
      id: 3,
      phase: 'foundation',
      title: "Platform Beta Launch",
      description: "Launching the beta version of the platform with enhanced features and improved user experience.",
      timeline: "Q3 2025",
      category: "Platform",
      status: "upcoming",
      progress: 0,
      features: [
        "Enhanced Tournament System",
        "User Dashboard",
        "Basic Rewards System",
        "Community Features"
      ],
      metrics: [
        { label: "Expected Users", value: "200+" },
        { label: "Tournaments", value: "25+" },
        { label: "Active Features", value: "20+" }
      ],
      technicalSpecs: [
        "Scalable cloud infrastructure with AWS",
        "Real-time tournament management system",
        "User authentication and authorization",
        "Basic reward distribution system"
      ],
      partnerships: [
        "Cloud Infrastructure Providers",
        "Payment Processors",
        "Gaming Communities"
      ],
      communityImpact: "Providing early access to the platform for community members to test and provide feedback."
    },
    {
      id: 4,
      phase: 'foundation',
      title: "Advanced Beta Features",
      description: "Adding advanced features to the beta platform including improved tournament management and user experience.",
      timeline: "Q4 2025",
      category: "Platform",
      status: "upcoming",
      progress: 0,
      features: [
        "Advanced Tournament Modes",
        "User Profiles",
        "Statistics Tracking",
        "Community Leaderboards"
      ],
      metrics: [
        { label: "Expected Users", value: "500+" },
        { label: "Tournament Types", value: "5+" },
        { label: "User Profiles", value: "300+" }
      ],
      technicalSpecs: [
        "Advanced tournament bracket algorithms",
        "User profile management system",
        "Statistics and analytics dashboard",
        "Real-time leaderboard updates"
      ],
      partnerships: [
        "Analytics Providers",
        "Community Partners",
        "Gaming Influencers"
      ],
      communityImpact: "Enhancing the platform with advanced features to provide a comprehensive gaming experience."
    },
    {
      id: 5,
      phase: 'growth',
      title: "FRT Token Launch",
      description: "Launching the FortisArena (FRT) token to enable in-platform transactions and rewards.",
      timeline: "Q1 2026",
      category: "Tokenomics",
      status: "upcoming",
      progress: 0,
      features: [
        "Token Distribution",
        "Staking System",
        "Reward Mechanisms",
        "Token Utility"
      ],
      metrics: [
        { label: "Token Supply", value: "100M" },
        { label: "Initial Price", value: "TBD" },
        { label: "Staking Rewards", value: "10% APY" }
      ],
      technicalSpecs: [
        "ERC-20 token standard on Ethereum",
        "Smart contract-based staking system",
        "Automated reward distribution",
        "Token burn mechanisms for deflation"
      ],
      partnerships: [
        "Ethereum Network",
        "DEX Platforms",
        "Staking Providers"
      ],
      communityImpact: "Introducing the native token to enable economic incentives and platform governance."
    },
    {
      id: 6,
      phase: 'growth',
      title: "Web3 Platform Launch",
      description: "Launching the full Web3 platform with live tournaments and comprehensive gaming features.",
      timeline: "Q2 2026",
      category: "Platform",
      status: "upcoming",
      progress: 0,
      features: [
        "Live Tournament System",
        "Real-time Gaming",
        "Smart Contract Integration",
        "Decentralized Features"
      ],
      metrics: [
        { label: "Expected Users", value: "1K+" },
        { label: "Live Tournaments", value: "50+" },
        { label: "Smart Contracts", value: "10+" }
      ],
      technicalSpecs: [
        "Web3 integration with MetaMask",
        "Smart contract-based tournament management",
        "Real-time gaming infrastructure",
        "Decentralized storage for user data"
      ],
      partnerships: [
        "Web3 Infrastructure",
        "Gaming Studios",
        "Blockchain Networks"
      ],
      communityImpact: "Launching the full decentralized gaming platform for public use."
    },
    {
      id: 7,
      phase: 'growth',
      title: "Game Partnerships",
      description: "Establishing partnerships with gaming studios to integrate popular games into the platform.",
      timeline: "Q3 2026",
      category: "Partnerships",
      status: "upcoming",
      progress: 0,
      features: [
        "Game Integration",
        "API Development",
        "Cross-Game Tournaments",
        "Developer Tools"
      ],
      metrics: [
        { label: "Partner Games", value: "5+" },
        { label: "API Endpoints", value: "20+" },
        { label: "Cross-Game Events", value: "10+" }
      ],
      technicalSpecs: [
        "RESTful API for game integration",
        "WebSocket connections for real-time data",
        "Cross-game tournament system",
        "Developer SDK and documentation"
      ],
      partnerships: [
        "Gaming Studios",
        "Indie Developers",
        "Esports Organizations"
      ],
      communityImpact: "Expanding the platform's gaming library through strategic partnerships."
    },
    {
      id: 8,
      phase: 'growth',
      title: "Middle East Regional Tournaments",
      description: "Launching region-specific tournaments and events focused on the Middle East gaming community.",
      timeline: "Q4 2026",
      category: "Regional",
      status: "upcoming",
      progress: 0,
      features: [
        "Regional Tournament Series",
        "Local Language Support",
        "Cultural Events",
        "Regional Leaderboards"
      ],
      metrics: [
        { label: "Regional Users", value: "2K+" },
        { label: "Tournament Series", value: "3+" },
        { label: "Local Events", value: "15+" }
      ],
      technicalSpecs: [
        "Multi-language support system",
        "Regional server infrastructure",
        "Cultural event management tools",
        "Localized payment methods"
      ],
      partnerships: [
        "Middle East Gaming Communities",
        "Local Esports Organizations",
        "Regional Payment Providers"
      ],
      communityImpact: "Building a strong presence in the Middle East gaming market."
    },
    {
      id: 9,
      phase: 'expansion',
      title: "Multi-Game Support",
      description: "Expanding platform support to include multiple gaming genres and tournament formats.",
      timeline: "Q1 2027",
      category: "Platform",
      status: "upcoming",
      progress: 0,
      features: [
        "Multiple Game Genres",
        "Custom Tournament Formats",
        "Game-Specific Features",
        "Cross-Genre Events"
      ],
      metrics: [
        { label: "Supported Games", value: "15+" },
        { label: "Tournament Formats", value: "8+" },
        { label: "Active Users", value: "5K+" }
      ],
      technicalSpecs: [
        "Modular game integration system",
        "Flexible tournament format engine",
        "Game-specific feature modules",
        "Cross-genre tournament management"
      ],
      partnerships: [
        "Multiple Gaming Studios",
        "Esports Organizations",
        "Gaming Communities"
      ],
      communityImpact: "Providing comprehensive support for diverse gaming communities."
    },
    {
      id: 10,
      phase: 'expansion',
      title: "FPT Token Launch",
      description: "Launching the FortisArena Platform Token (FPT) for advanced platform features and governance.",
      timeline: "Q2 2027",
      category: "Tokenomics",
      status: "upcoming",
      progress: 0,
      features: [
        "Platform Governance",
        "Premium Features",
        "Creator Rewards",
        "Advanced Staking"
      ],
      metrics: [
        { label: "Token Supply", value: "50M" },
        { label: "Governance Power", value: "1:1 FRT" },
        { label: "Staking Rewards", value: "15% APY" }
      ],
      technicalSpecs: [
        "ERC-20 token with governance features",
        "Voting power calculation system",
        "Premium feature access control",
        "Creator reward distribution"
      ],
      partnerships: [
        "Governance Platforms",
        "Creator Communities",
        "Staking Providers"
      ],
      communityImpact: "Enabling advanced platform features and community governance."
    },
    {
      id: 11,
      phase: 'expansion',
      title: "Fortis Live (Creator Studio)",
      description: "Launching the creator studio platform for content creators to stream, create, and monetize content.",
      timeline: "Q3 2027",
      category: "Creator Tools",
      status: "upcoming",
      progress: 0,
      features: [
        "Live Streaming Platform",
        "Content Creation Tools",
        "Monetization Features",
        "Creator Analytics"
      ],
      metrics: [
        { label: "Creator Tools", value: "20+" },
        { label: "Streaming Quality", value: "4K" },
        { label: "Monetization Options", value: "5+" }
      ],
      technicalSpecs: [
        "WebRTC-based streaming infrastructure",
        "Content creation and editing tools",
        "Multi-platform monetization system",
        "Advanced analytics dashboard"
      ],
      partnerships: [
        "Streaming Platforms",
        "Content Creators",
        "Monetization Providers"
      ],
      communityImpact: "Empowering content creators with professional tools and monetization opportunities."
    },
    {
      id: 12,
      phase: 'evolution',
      title: "DAO Governance Launch",
      description: "Launching the decentralized autonomous organization for community-driven platform governance.",
      timeline: "Q1 2028",
      category: "Governance",
      status: "upcoming",
      progress: 0,
      features: [
        "Community Voting",
        "Proposal System",
        "Treasury Management",
        "Governance Tokens"
      ],
      metrics: [
        { label: "Governance Tokens", value: "10M" },
        { label: "Voting Power", value: "FPT + FRT" },
        { label: "Proposal System", value: "Active" }
      ],
      technicalSpecs: [
        "Smart contract-based voting system",
        "Proposal creation and management",
        "Multi-signature treasury management",
        "Governance token distribution"
      ],
      partnerships: [
        "Governance Platforms",
        "DAO Tools",
        "Community Organizations"
      ],
      communityImpact: "Transitioning to full community ownership and governance of the platform."
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
              Follow our journey from community building (2025) to full DAO governance (2028). 
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
                    <span className="font-semibold text-foreground text-sm sm:text-base">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Pull Requests</span>
                    <span className="font-semibold text-foreground text-sm sm:text-base">23</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Issues Resolved</span>
                    <span className="font-semibold text-foreground text-sm sm:text-base">45</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-muted-foreground">Test Coverage</span>
                    <span className="font-semibold text-success text-sm sm:text-base">78.5%</span>
                  </div>
                </div>
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