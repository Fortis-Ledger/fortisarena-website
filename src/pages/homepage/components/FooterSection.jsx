import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    platform: {
      title: 'Platform',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Tokenomics', path: '/tokenomics' },
        { name: 'Roadmap', path: '/roadmap' },
        { name: 'Creator Studio', path: '/creator-studio' }
      ]
    },
    community: {
      title: 'Community',
      links: [
        { name: 'Discord', path: '#', external: true },
        { name: 'Twitter', path: '#', external: true },
        { name: 'Telegram', path: '#', external: true },
        { name: 'YouTube', path: '#', external: true }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Whitepaper', path: '#' },
        { name: 'Documentation', path: '#' },
        { name: 'API Guide', path: '#' },
        { name: 'Security Audit', path: '#' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'Cookie Policy', path: '#' },
        { name: 'Disclaimer', path: '#' }
      ]
    }
  };

  const socialLinks = [
    { name: 'Discord', icon: 'MessageSquare', url: '#', color: 'hover:text-indigo-400' },
    { name: 'Twitter', icon: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { name: 'Telegram', icon: 'Send', url: '#', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: 'Play', url: '#', color: 'hover:text-red-500' },
    { name: 'GitHub', icon: 'Github', url: '#', color: 'hover:text-gray-300' }
  ];

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-purple rounded-xl flex items-center justify-center gaming-glow">
          <svg
            width="28"
            height="28"
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
        <span className="font-heading font-bold text-2xl text-white">
          FortisArena
        </span>
        <span className="font-mono text-xs text-gray-400 -mt-1">
          Gaming Liberation
        </span>
      </div>
    </div>
  );

  return (
    <footer className="bg-gradient-to-b from-gaming-dark to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,212,255,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(138,43,226,0.3),transparent_50%)]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Logo />
                <p className="font-body text-gray-300 leading-relaxed max-w-md">
                  Revolutionizing competitive gaming through blockchain technology, AI-powered matchmaking, and community governance. Join the future of decentralized eSports.
                </p>
                
                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks?.map((social) => (
                    <a
                      key={social?.name}
                      href={social?.url}
                      className={`w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social?.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social?.name}
                    >
                      <Icon name={social?.icon} size={20} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks)?.map(([key, section], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-heading font-semibold text-white mb-4">
                      {section?.title}
                    </h3>
                    <ul className="space-y-3">
                      {section?.links?.map((link) => (
                        <li key={link?.name}>
                          {link?.external ? (
                            <a
                              href={link?.path}
                              className="font-body text-gray-400 hover:text-electric-blue transition-colors duration-200"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link?.name}
                            </a>
                          ) : (
                            <Link
                              to={link?.path}
                              className="font-body text-gray-400 hover:text-electric-blue transition-colors duration-200"
                            >
                              {link?.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Stay Updated with FortisArena
              </h3>
              <p className="font-body text-gray-400">
                Get the latest news, updates, and exclusive content delivered to your inbox.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>50,000+ subscribers</span>
              </div>
              <Link
                to="#newsletter"
                className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-electric-blue/90 hover:to-neon-purple/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Icon name="Mail" size={16} />
                <span>Subscribe</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© {currentYear} FortisArena. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Powered by Polygon</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-emerald-500" />
                <span>Security Audited</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={16} className="text-electric-blue" />
                <span>Carbon Neutral</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;