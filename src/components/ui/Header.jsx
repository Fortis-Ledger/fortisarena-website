import React, { useState, useEffect } from 'react';
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
  ];

  const moreItems = [
    { name: 'Roadmap', path: '/roadmap', icon: 'Map' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center gaming-glow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
              fill="currentColor"
            />
            <circle cx="12" cy="12" r="3" fill="rgba(0,0,0,0.3)" />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-golden-cta rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-heading font-bold text-xl text-foreground">
          FortisArena
        </span>
        <span className="font-mono text-xs text-muted-foreground -mt-1">
          Gaming Liberation
        </span>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism shadow-gaming border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/homepage" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-accent text-accent-foreground shadow-gaming'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-gaming opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors ${
                        isActivePath(item?.path)
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="button-gaming gaming-hover">
              <Icon name="LogIn" size={16} />
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold electric-pulse button-gaming gaming-hover"
            >
              Join Revolution
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glassmorphism border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {[...navigationItems, ...moreItems]?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActivePath(item?.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="outline" fullWidth>
                <Icon name="LogIn" size={16} />
                Sign In
              </Button>
              <Button 
                variant="default" 
                fullWidth
                className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold"
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

export default Header;