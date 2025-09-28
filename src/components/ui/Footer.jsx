import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';
import Button from './Button';
import { RainbowButton } from './RainbowButton';

const Footer = () => {
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
        { name: 'Discord', path: 'https://discord.com/invite/qTTYxTnK3s', external: true },
        { name: 'Twitter', path: 'https://x.com/fortisarena', external: true },
        { name: 'Telegram', path: 'https://t.me/fortisarena', external: true },
        { name: 'YouTube', path: 'https://youtube.com/@fortisarena', external: true }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Whitepaper', path: '/docs/FortisArena White Paper.pdf', external: true },
        { name: 'Documentation', path: 'https://docs.fortisarena.io', external: true },
        { name: 'API Guide', path: '#' },
        { name: 'Security Audit', path: '#' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: 'https://docs.fortisarena.io/legal/privacy-policy', external: true },
        { name: 'Terms of Service', path: 'https://docs.fortisarena.io/legal/terms-conditions', external: true },
        { name: 'Cookie Policy', path: 'https://docs.fortisarena.io/legal/cookie-policy', external: true },
        { name: 'Disclaimer', path: 'https://docs.fortisarena.io/legal/disclaimer', external: true }
      ]
    }
  };

  const socialLinks = [
    { name: 'Discord', icon: 'MessageSquare', url: 'https://discord.com/invite/qTTYxTnK3s', color: 'hover:text-indigo-400' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/fortisarena', color: 'hover:text-blue-400' },
    { name: 'Telegram', icon: 'Send', url: 'https://t.me/fortisarena', color: 'hover:text-cyan-400' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/@fortisarena', color: 'hover:text-red-400' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/Fortis-Ledger', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/fortisarena', color: 'hover:text-blue-600' }
  ];

  const Logo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-800">
          <img
            src="/favicon64.ico"
            alt="FortisArena Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
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
    <footer className="bg-black relative">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section - Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Logo />
            <p className="text-gray-400 max-w-md leading-relaxed">
              The future of eSports is decentralized. Join the revolution and own your gaming destiny through skill-based tournaments, NFT rewards, and community governance.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <motion.a
                  key={social?.name}
                  href={social?.url}
                  className={`text-gray-400 ${social?.color} transition-colors duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name={social?.icon} size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Bell" size={20} className="text-blue-500" />
              <h3 className="font-heading font-semibold text-lg text-white">
                Stay Updated with FortisArena
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Get the latest updates on tournaments, new features, and community events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="button">
                <span>Subscribe Now</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {Object?.entries(footerLinks)?.map(([key, section], index) => (
            <motion.div
              key={key}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-semibold text-lg text-white mb-4">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    {link?.external ? (
                      <a
                        href={link?.path}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link?.name}
                      </a>
                    ) : (
                      <Link
                        to={link?.path}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
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

        {/* Bottom Bar */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>© {currentYear} FortisArena. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Gaming Liberation Starts Here</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-gray-400">Powered by</span>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-white font-semibold">Web3 Technology</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
