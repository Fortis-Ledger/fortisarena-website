import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    { name: 'Home', path: '/homepage', icon: 'Home' },
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
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glassmorphism-card">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-foreground"
          >
            <path
              d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
            />
            <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.1)" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl text-foreground font-heading">
          FortisArena
        </span>
        <span className="text-xs text-muted-foreground -mt-1 font-body">
          Gaming Liberation
        </span>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gaming-dark/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/homepage" className="flex-shrink-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glassmorphism-card">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary-foreground sm:w-6 sm:h-6"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                    <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.1)" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-foreground font-heading">
                  FortisArena
                </span>
                <span className="text-xs text-muted-foreground -mt-1 font-body hidden sm:block">
                  Gaming Liberation
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item?.name}
              </Link>
            ))}

          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant="glow-accent" 
              size="glow-sm"
              className="font-semibold"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Join Revolution
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gaming-dark/90 backdrop-blur-md border-t border-border">
          <div className="px-4 py-3 sm:py-4 space-y-1 sm:space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium transition-colors rounded-lg ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item?.name}
              </Link>
            ))}
            
            <div className="pt-3 sm:pt-4 border-t border-border">
              <Button 
                variant="glow-accent" 
                size="glow-sm"
                fullWidth
                className="font-semibold text-sm sm:text-base"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Join Revolution
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default memo(Header);