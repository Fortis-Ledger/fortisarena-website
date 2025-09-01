import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Trophy, 
  Gamepad2, 
  Coins, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Target,
  TrendingUp,
  Cpu,
  Network,
  Vote,
  Play,
  Eye,
  DollarSign,
  BarChart3,
  Lock,
  Rocket,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Github,
  Twitter,
  MessageCircle,
  Youtube,
  Linkedin,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsOfService from './components/TermsOfService.jsx'
import Waitlist from './components/Waitlist.jsx'
import './App.css'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [currentPage, setCurrentPage] = useState('home')
  const [scrollPosition, setScrollPosition] = useState(0)
  const [counters, setCounters] = useState({
    tournaments: 0,
    prizes: 0,
    users: 0
  })

  // Update current page when location changes
  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentPage('home')
      
      // Check if we're returning from privacy/terms and need to restore scroll
      if (location.state?.scrollTo && scrollPosition > 0) {
        setTimeout(() => {
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
        }, 100)
      }
      
      // Reset mobile menu state when returning to home
      setIsMenuOpen(false)
    } else if (location.pathname === '/waitlist') {
      setCurrentPage('waitlist')
    } else if (location.pathname === '/privacy') {
      setCurrentPage('privacy')
    } else if (location.pathname === '/terms') {
      setCurrentPage('terms')
    }
  }, [location, scrollPosition])

  // Animated counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        tournaments: Math.min(prev.tournaments + 1, 10),
        prizes: Math.min(prev.prizes + 25, 2500),
        users: Math.min(prev.users + 20, 1000)
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Technology', href: '#technology' },
    { name: 'Features', href: '#features' },
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Community', href: '#community' }
  ]

  // Smooth scroll handler for mobile menu to avoid hash jump race with menu close
  const handleMobileNavClick = (event, href) => {
    event.preventDefault()
    setIsMenuOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const headerOffset = 64 // header height in px (h-16)
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset
    // Delay until menu collapse animation finishes
    setTimeout(() => {
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }, 250)
  }

  const features = [
    {
      icon: Trophy,
      title: "Blockchain Tournaments",
      description: "Transparent, automated prize distribution via smart contracts on Polygon. Fair play guaranteed with verifiable results."
    },
    {
      icon: Cpu,
      title: "AI Matchmaking",
      description: "Advanced machine learning algorithms ensure skill-based pairing for fair competition and optimal gaming experience."
    },
    {
      icon: Network,
      title: "Integrated Marketplace",
      description: "Trade NFTs and in-game assets with low fees (3-4%) and creator royalties. True digital ownership enabled."
    },
    {
      icon: Play,
      title: "FortisLive Streaming",
      description: "In-app streaming with monetization tools, audience voting, and multi-platform support for creators."
    },
    {
      icon: Vote,
      title: "DAO Governance",
      description: "Community-driven decision making through FortisDAO. Shape the platform's future with $FRT token voting."
    },
    {
      icon: Target,
      title: "Prediction Pools",
      description: "Real-time betting markets during matches. Creators host pools, audiences predict outcomes and earn rewards."
    },
    {
      icon: Coins,
      title: "Dual Token System",
      description: "$FRT utility token for governance and fees, $ARN reward token for gaming achievements and community participation."
    },
    {
      icon: Shield,
      title: "Cross-Platform Access",
      description: "Seamless integration across mobile, PC, and console. Built with React Native for mobile-first accessibility."
    }
  ]

  const tokenDistribution = [
    { name: "Community Incentives", value: 40, color: "#ffffff" },
    { name: "Treasury/Development", value: 15, color: "#cccccc" },
    { name: "Team & Founders", value: 12, color: "#999999" },
    { name: "Liquidity & Listings", value: 10, color: "#666666" },
    { name: "Private Investors", value: 10, color: "#444444" },
    { name: "Public Sale/IDO", value: 5, color: "#333333" },
    { name: "Partnerships", value: 5, color: "#222222" },
    { name: "Advisors", value: 3, color: "#111111" }
  ]

  const roadmapPhases = [
    {
      phase: "Phase 1",
      period: "Q3-Q4 2025",
      title: "Foundation",
      description: "Community building in South Asia, MENA, Brazil, and SEA. Launch local Web3 tournaments and MVP development.",
      target: "5,000 community members",
      status: "active"
    },
    {
      phase: "Phase 2", 
      period: "Q1-Q2 2026",
      title: "MVP Launch",
      description: "Platform rollout with 5 games, crypto/NFT rewards integration, and 1,000 Genesis NFTs minting.",
      target: "Initial user adoption",
      status: "upcoming"
    },
    {
      phase: "Phase 3",
      period: "Q3-Q4 2026", 
      title: "Global Expansion",
      description: "Launch Marketplace, FortisLive, AI Matchmaking. Expand to EU, MENA, US, Japan, and LATAM markets.",
      target: "20,000 MAUs",
      status: "planned"
    },
    {
      phase: "Phase 4",
      period: "2027",
      title: "Ecosystem & DAO",
      description: "Launch $FRT token, activate FortisDAO governance, and host global tournaments with full decentralization.",
      target: "100,000+ users",
      status: "planned"
    }
  ]

  // Handle page navigation
  const handlePageNavigation = (page) => {
    if (page === 'privacy' || page === 'terms') {
      // Save current scroll position before navigating
      setScrollPosition(window.scrollY)
    }
    
    setCurrentPage(page)
    if (page === 'waitlist') {
      navigate('/waitlist')
    } else if (page === 'privacy') {
      navigate('/privacy')
    } else if (page === 'terms') {
      navigate('/terms')
    } else if (page === 'home') {
      navigate('/')
    }
  }

  // Handle back navigation
  const handleBackNavigation = () => {
    setCurrentPage('home')
    // Restore scroll position after component re-renders
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: 'auto' })
    }, 100)
  }

  // Render different pages based on currentPage
  if (currentPage === 'waitlist') {
    return <Waitlist />
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />
  }

  if (currentPage === 'terms') {
    return <TermsOfService />
  }

  // Main home page content
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-cyan-400">FortisArena</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                asChild
              >
                <a href="/docs/FortisArena White Paper.pdf" target="_blank" rel="noopener noreferrer">
                  Read Whitepaper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-800"
              >
                <div className="py-4 space-y-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      onClick={(e) => handleMobileNavClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                    asChild
                  >
                    <a href="/docs/FortisArena White Paper.pdf" target="_blank" rel="noopener noreferrer">
                      Read Whitepaper
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-40 md:pt-28 lg:pt-32 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
        {/* Decorative subtle orbs */}
        <div className="orb" style={{ width: 140, height: 140, top: 120, left: 40 }} />
        <div className="orb" style={{ width: 100, height: 100, bottom: 160, right: 80, animationDelay: '1.2s' }} />
        <div className="orb" style={{ width: 80, height: 80, top: 220, right: 40, animationDelay: '0.6s' }} />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
              FortisArena
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-400 mb-4 md:mb-6 font-medium">
              The Next-Gen Web3 eSports Arena
            </h2>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
              Compete, Earn, and Govern in the future of decentralized gaming.<br className="hidden sm:block" />
              <span className="block sm:inline"> Skill-based tournaments, rewards, and a thriving community.</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
              <Button size="lg" className="w-full sm:w-auto px-8 py-3 rounded-md bg-white text-black hover:bg-gray-200 glow-button shadow-lg text-base font-semibold" asChild>
                <a href="https://tournaments.fortisarena.io">
                  Active Tournaments
                  <ChevronRight className="ml-2 h-5 w-5" />
                  <span className="shine-overlay" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-3 rounded-md border-white text-white hover:bg-white hover:text-black glow-button shadow-lg text-base font-semibold" onClick={() => handlePageNavigation('waitlist')}>
                Join Waitlist
                <ChevronRight className="ml-2 h-5 w-5" />
                <span className="shine-overlay" />
              </Button>
            </div>

            {/* Stats Badges */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6">
              <div className="flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Trophy className="h-4 w-4 mr-2 text-yellow-400" />
                <span className="text-sm font-medium text-white">100+ Tournaments</span>
              </div>
              <div className="flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Users className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-white">5K+ Players</span>
              </div>
              <div className="flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Shield className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-sm font-medium text-white">Blockchain Powered</span>
              </div>
            </div>


            {/* Partners marquee */}
            <div className="mt-12 md:mt-16">
              <div className="mx-auto max-w-full">
                <div className="overflow-hidden marquee-mask rounded-md">
                  <div className="marquee-track reverse gap-8 sm:gap-16 items-center px-4" style={{ display: 'flex' }}>
                    {['/images/pubg.webp','/images/garena.webp','/images/tecent.webp','/images/lightspeed.webp','/images/freefire.webp'].map((src, idx) => (
                      <img key={`logo-${idx}`} src={src} alt="partner logo" className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity mx-2 sm:mx-4" />
                    ))}
                    {['/images/pubg.webp','/images/garena.webp','/images/tecent.webp','/images/lightspeed.webp','/images/freefire.webp'].map((src, idx) => (
                      <img key={`logo-dup-${idx}`} src={src} alt="partner logo" className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity mx-2 sm:mx-4" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-30"></div>
        <div className="orb" style={{ width: 120, height: 120, top: 80, left: 60, animationDelay: '2s' }} />
        <div className="orb" style={{ width: 90, height: 90, bottom: 100, right: 100, animationDelay: '3.5s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">The Broken eSports System</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Centralized Control:</strong> Platforms extract 20-30% of tournament earnings as fees</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>No Digital Ownership:</strong> In-game assets locked in proprietary ecosystems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Limited Monetization:</strong> Income skewed towards elite players only</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Lack of Transparency:</strong> Opaque prize distributions and match results</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">FortisArena's Decentralized Solution</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Blockchain Tournaments:</strong> Automated payouts via smart contracts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>True Digital Ownership:</strong> NFTs and crypto rewards you actually own</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>Creator Economy:</strong> Multiple monetization streams for all skill levels</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p><strong>DAO Governance:</strong> Community-driven platform development</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-20"></div>
        <div className="orb" style={{ width: 110, height: 110, top: 60, right: 80, animationDelay: '1.8s' }} />
        <div className="orb" style={{ width: 85, height: 85, bottom: 80, left: 120, animationDelay: '4s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Advanced Technology Architecture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on Polygon Layer 2 for scalability, security, and cost-effectiveness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <Network className="h-8 w-8 text-white mb-2" />
                <CardTitle className="text-white">Polygon Layer 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">High throughput, low fees (&lt;$0.01), Ethereum compatibility for fast operations</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <Cpu className="h-8 w-8 text-white mb-2" />
                <CardTitle className="text-white">AI Matchmaking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">TensorFlow.js powered algorithms for skill-based pairing and fair competition</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <Shield className="h-8 w-8 text-white mb-2" />
                <CardTitle className="text-white">Security Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Third-party audited smart contracts with MetaMask and WalletConnect integration</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <Globe className="h-8 w-8 text-white mb-2" />
                <CardTitle className="text-white">Cross-Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">React Native for mobile, React.js for web, future console SDK integration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-25"></div>
        <div className="orb" style={{ width: 130, height: 130, top: 100, left: 40, animationDelay: '2.5s' }} />
        <div className="orb" style={{ width: 95, height: 95, bottom: 120, right: 60, animationDelay: '0.8s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experience the FortisArena Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive Web3 gaming platform with integrated tournaments, streaming, marketplace, and governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 hover:border-white/20 transition-colors duration-300 h-full">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-white mb-2" />
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-15"></div>
        <div className="orb" style={{ width: 105, height: 105, top: 120, right: 70, animationDelay: '3.2s' }} />
        <div className="orb" style={{ width: 75, height: 75, bottom: 90, left: 90, animationDelay: '1.5s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Marketplace</h2>
            <p className="text-xl text-gray-300">Take a look at some of our latest platform designs.</p>
          </motion.div>

          <Tabs defaultValue="desktop" className="w-full">
            <TabsList className="grid grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="desktop">Desktop Designs</TabsTrigger>
              <TabsTrigger value="mobile">Mobile App Designs</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop" className="mt-8">
              <div className="overflow-hidden marquee-mask">
                <div className="marquee-track gap-6">
                  {['/images/desktop-1.webp','/images/desktop-2.webp','/images/desktop-3.webp','/images/desktop-4.webp'].map((src, idx) => (
                    <img key={`desk-${idx}`} src={src} alt={`Desktop ${idx+1}`} className="h-56 w-auto rounded-lg border border-white/10" />
                  ))}
                  {['/images/desktop-1.webp','/images/desktop-2.webp','/images/desktop-3.webp','/images/desktop-4.webp'].map((src, idx) => (
                    <img key={`desk-dup-${idx}`} src={src} alt={`Desktop ${idx+1}`} className="h-56 w-auto rounded-lg border border-white/10" />
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="mt-8">
              <div className="overflow-hidden marquee-mask">
                <div className="marquee-track reverse gap-6">
                  {['/images/mobile-1.webp','/images/mobile-2.webp','/images/mobile-3.webp','/images/mobile-4.webp'].map((src, idx) => (
                    <img key={`mob-${idx}`} src={src} alt={`Mobile ${idx+1}`} className="h-80 w-auto rounded-xl border border-white/10" />
                  ))}
                  {['/images/mobile-1.webp','/images/mobile-2.webp','/images/mobile-3.webp','/images/mobile-4.webp'].map((src, idx) => (
                    <img key={`mob-dup-${idx}`} src={src} alt={`Mobile ${idx+1}`} className="h-80 w-auto rounded-xl border border-white/10" />
                  ))}
                  {['/images/mobile-1.webp','/images/mobile-2.webp','/images/mobile-3.webp','/images/mobile-4.webp'].map((src, idx) => (
                    <img key={`mob-dup2-${idx}`} src={src} alt={`Mobile ${idx+1}`} className="h-80 w-auto rounded-xl border border-white/10" />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-20"></div>
        <div className="orb" style={{ width: 125, height: 125, top: 70, left: 50, animationDelay: '2.8s' }} />
        <div className="orb" style={{ width: 90, height: 90, bottom: 110, right: 90, animationDelay: '4.5s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Dual Token Economy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              $FRT utility token for governance and platform fees, $ARN reward token for gaming achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">$FRT Token Distribution</h3>
              <div className="space-y-4">
                {tokenDistribution.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-white font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gray-900 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Token Utility</h4>
                <div className="space-y-2 text-gray-300">
                  <div>• Tournament entry fees and staking</div>
                  <div>• DAO governance voting power</div>
                  <div>• Marketplace payments and NFT utilities</div>
                  <div>• Creator monetization and subscriptions</div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Token Economics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Supply:</span>
                    <span className="text-white font-semibold">1,000,000,000 $FRT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Initial Circulating:</span>
                    <span className="text-white font-semibold">10-12% at TGE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Blockchain:</span>
                    <span className="text-white font-semibold">Polygon (ERC-20)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Vesting Period:</span>
                    <span className="text-white font-semibold">12-48 months</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700 mt-8">
                <CardHeader>
                  <CardTitle className="text-white">$ARN Reward Token</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Specifically designed for rewarding the gaming community through tournaments, 
                    achievements, and platform participation. Earned through gameplay and can be 
                    used for in-game purchases and exclusive benefits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-30"></div>
        <div className="orb" style={{ width: 115, height: 115, top: 90, right: 110, animationDelay: '1.2s' }} />
        <div className="orb" style={{ width: 80, height: 80, bottom: 70, left: 70, animationDelay: '3.8s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey to Decentralization</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A phased approach to building the world's first fully decentralized eSports ecosystem
            </p>
          </motion.div>

          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-4 md:gap-0 w-full md:justify-between`}
              >
                <div className="w-full flex-none md:w-[520px] lg:w-[560px]">
                  <Card className={`bg-gray-900 border-gray-700 ${phase.status === 'active' ? 'border-green-500' : ''} w-full lg:w-[400px]`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-white">{phase.phase}: {phase.title}</CardTitle>
                          <CardDescription className="text-gray-400">{phase.period}</CardDescription>
                        </div>
                        <Badge variant={phase.status === 'active' ? 'default' : 'secondary'}>
                          {phase.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{phase.description}</p>
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-green-500" />
                        <span className="text-green-400 font-semibold">Target: {phase.target}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="hidden md:flex flex-shrink-0 mx-8">
                  <div className={`w-4 h-4 rounded-full ${phase.status === 'active' ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                </div>
                
                <div className="hidden md:block flex-1">
                  {index % 2 !== 0 && <div></div>}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 italic">
              * Milestones are flexible based on community feedback and market conditions
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-25"></div>
        <div className="orb" style={{ width: 135, height: 135, top: 50, left: 80, animationDelay: '0.5s' }} />
        <div className="orb" style={{ width: 100, height: 100, bottom: 60, right: 50, animationDelay: '2.2s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Join the Decentralized Movement</h2>
            <p className="text-2xl text-gray-300 mb-8">
              Built for Gamers. Powered by Web3. Governed by Community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="bg-gray-900 border-gray-700 text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Community</h3>
                <p className="text-gray-300">Join gamers from South Asia, MENA, Europe, and beyond</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center">
              <CardContent className="pt-6">
                <Vote className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">DAO Governance</h3>
                <p className="text-gray-300">Shape the platform's future through community voting</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center">
              <CardContent className="pt-6">
                <Rocket className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Early Access</h3>
                <p className="text-gray-300">Get exclusive access to beta features and Genesis NFTs</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Grow Together</h3>
                <p className="text-gray-300">Participate in the growth of the Web3 gaming revolution</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] text-white" asChild>
              <a href="https://discord.gg/qTTYxTnK3s" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Discord
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <a href="https://x.com/fortisarena" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-5 w-5" />
                Follow on X
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <a href="https://t.me/fortisarena" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Telegram
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <a href="https://medium.com/@fortisarena" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Read Blog
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">FortisArena</div>
              <p className="text-gray-400 mb-4">
                The world's first fully decentralized eSports ecosystem. Play. Earn. Govern.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white" asChild>
                  <a href="https://x.com/fortisarena" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white" asChild>
                  <a href="https://youtube.com/@fortisarena" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white" asChild>
                  <a href="https://github.com/Fortis-Ledger" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white" asChild>
                  <a href="https://linkedin.com/company/fortisarena" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <div className="space-y-2">
                <a href="https://tournaments.fortisarena.io" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Tournaments</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Marketplace</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Streaming</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">DAO</a>
              </div>
            </div>

                          <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <div className="space-y-2">
                  <a href="/docs/FortisArena White Paper.pdf" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Whitepaper</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Documentation</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">API</a>
                  <a href="https://substack.com/@fortisarena" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Blog</a>
                </div>
              </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <button onClick={() => handlePageNavigation('privacy')} className="block text-gray-400 hover:text-white transition-colors text-left">Privacy Policy</button>
                <button onClick={() => handlePageNavigation('terms')} className="block text-gray-400 hover:text-white transition-colors text-left">Terms of Service</button>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Career</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Contact</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 FortisArena. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
