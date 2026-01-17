import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Tokenomics', path: '/tokenomics', icon: 'Coins' },
    { name: 'Community', path: '/community', icon: 'Users' },
    { name: 'Creator Studio', path: '/creator-studio', icon: 'Video' },
    { name: 'Roadmap', path: '/roadmap', icon: 'Map' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 left-0 right-0 z-[99999]"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: isScrolled 
            ? 'rgba(0, 0, 0, 0.85)' 
            : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          boxShadow: isScrolled 
            ? '0 4px 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(139, 92, 246, 0.05)' 
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.33, 1, 0.68, 1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-10">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="relative w-10 h-10 sm:w-12 sm:h-12"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  <div 
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
                    style={{
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
                    }}
                  />
                  <img
                    src="/favicon64.ico"
                    alt="FortisArena"
                    className="relative w-full h-full object-contain p-1"
                  />
                  {/* Pulse indicator */}
                  <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                    <div className="relative w-full h-full bg-green-500 rounded-full" />
                  </motion.div>
                </motion.div>
                
                <div className="flex flex-col">
                  <span className="font-bold text-xl sm:text-2xl text-white tracking-tight">
                    FortisArena
                  </span>
                  <span className="text-xs text-gray-400 -mt-0.5 hidden sm:block">
                    Gaming Liberation
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setActiveHover(item.path)}
                  onMouseLeave={() => setActiveHover(null)}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActivePath(item.path)
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                    
                    {/* Active/Hover indicator */}
                    {(isActivePath(item.path) || activeHover === item.path) && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute inset-0 rounded-lg -z-10"
                        style={{
                          background: isActivePath(item.path)
                            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.1))'
                            : 'rgba(255, 255, 255, 0.05)',
                          border: isActivePath(item.path)
                            ? '1px solid rgba(139, 92, 246, 0.3)'
                            : '1px solid rgba(255, 255, 255, 0.05)',
                        }}
                        initial={false}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div 
              className="hidden lg:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Tournament link */}
              <a
                href="https://tournaments.fortisarena.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Tournaments</span>
                <Icon name="ExternalLink" size={14} />
              </a>
              
              {/* Main CTA */}
              <Link to="/waitlist">
                <motion.button 
                  className="relative group px-5 py-2.5 rounded-xl font-medium text-sm overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated gradient border */}
                  <div 
                    className="absolute inset-0 rounded-xl p-[1px]"
                    style={{
                      background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
                      backgroundSize: '300% 100%',
                      animation: 'gradient-shift 3s linear infinite',
                    }}
                  >
                    <div className="absolute inset-[1px] bg-black rounded-[11px]" />
                  </div>
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    <span>Join Revolution</span>
                    <motion.svg 
                      className="w-4 h-4"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-2 rounded-lg text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-white rounded-full origin-left"
                  animate={isMenuOpen ? { rotate: 45, y: -2 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white rounded-full"
                  animate={isMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white rounded-full origin-left"
                  animate={isMenuOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="px-4 py-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActivePath(item.path)
                          ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/10 text-white border border-purple-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon name={item.icon} size={20} className={isActivePath(item.path) ? 'text-purple-400' : ''} />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div 
                  className="pt-4 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link to="/waitlist" className="block">
                    <button 
                      className="w-full py-3 rounded-xl font-medium text-white relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.2))',
                        border: '1px solid rgba(139, 92, 246, 0.4)',
                      }}
                    >
                      Join Revolution
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </>
  );
};

export default memo(Header);
