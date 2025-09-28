import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Tokenomics', path: '/tokenomics', icon: 'Coins' },
    { name: 'Community', path: '/community', icon: 'Users' },
    { name: 'Creator Studio', path: '/creator-studio', icon: 'Video' },
    { name: 'Roadmap', path: '/roadmap', icon: 'Map' },
  ];

  const moreItems = [];

  const isActivePath = (path) => location?.pathname === path;

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center gaming-glow">
          <img
            src="/favicon64.ico"
            alt="FortisArena Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>
        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-golden-cta rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg sm:text-xl lg:text-2xl text-foreground font-heading">
          FortisArena
        </span>
        <span className="text-xs text-muted-foreground -mt-1 font-body">
          Gaming Liberation
        </span>
      </div>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gaming-dark/90 backdrop-blur-md border-b border-border glow-effect'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center gaming-glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/favicon64.ico"
                    alt="FortisArena Logo"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-golden-cta rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-foreground font-heading">
                  FortisArena
                </span>
                <span className="text-xs text-muted-foreground -mt-1 font-body hidden sm:block">
                  Gaming Liberation
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item, index) => (
              <motion.div
                key={item?.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item?.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 btn-3d ${
                    isActivePath(item?.path)
                      ? 'bg-primary/20 text-primary neon-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item?.name}
                </Link>
              </motion.div>
            ))}

          </nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/waitlist">
              <button className="group relative flex flex-row items-center bg-[#212121] justify-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
                <span className="inline animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
                  Join Revolution
                </span>
                <svg
                  strokeLinecap="round"
                  className="text-[#9c40ff]"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  height="11"
                  width="11"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    d="M0 5h7"
                    className="opacity-0 transition group-hover:opacity-100"
                  ></path>
                  <path
                    strokeLinecap="round"
                    d="M1 1l4 4-4 4"
                    className="transition group-hover:translate-x-[3px]"
                  ></path>
                </svg>
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors btn-3d"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="lg:hidden bg-gaming-dark/90 backdrop-blur-md border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-3 sm:py-4 space-y-1 sm:space-y-2">
            {navigationItems?.map((item, index) => (
              <motion.div
                key={item?.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium transition-colors rounded-lg btn-3d ${
                    isActivePath(item?.path)
                      ? 'bg-primary/20 text-primary neon-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item?.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              className="pt-3 sm:pt-4 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Link to="/waitlist" onClick={() => setIsMenuOpen(false)}>
                <button className="group relative flex flex-row items-center bg-[#212121] justify-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] w-full">
                  <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
                  <span className="inline animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
                    Join Revolution
                  </span>
                  <svg
                    strokeLinecap="round"
                    className="text-[#9c40ff]"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    height="11"
                    width="11"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      d="M0 5h7"
                      className="opacity-0 transition group-hover:opacity-100"
                    ></path>
                    <path
                      strokeLinecap="round"
                      d="M1 1l4 4-4 4"
                      className="transition group-hover:translate-x-[3px]"
                    ></path>
                  </svg>
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default memo(Header);