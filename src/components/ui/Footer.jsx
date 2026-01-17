import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';
import { GlowButton } from '../MagneticButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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
        { name: 'Tokenomics', path: 'https://docs.fortisarena.io/tokenomics', external: true },
        { name: 'Tournaments', path: 'https://tournaments.fortisarena.io', external: true },
        { name: 'Smart Contract', path: 'https://docs.fortisarena.io/smart-contracts', external: true }
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
    { name: 'Discord', icon: 'MessageSquare', url: 'https://discord.com/invite/qTTYxTnK3s', color: 'from-indigo-500 to-purple-500' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/fortisarena', color: 'from-blue-400 to-cyan-400' },
    { name: 'Telegram', icon: 'Send', url: 'https://t.me/fortisarena', color: 'from-cyan-400 to-blue-500' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/@fortisarena', color: 'from-red-500 to-pink-500' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/Fortis-Ledger', color: 'from-gray-400 to-gray-600' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/fortisarena', color: 'from-blue-500 to-blue-700' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top Section - Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Logo and Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12">
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
                  style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}
                />
                <img
                  src="/favicon64.ico"
                  alt="FortisArena"
                  className="relative w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white">FortisArena</span>
                <span className="text-xs text-gray-400 -mt-0.5">Gaming Liberation</span>
              </div>
            </Link>

            <p className="text-gray-400 max-w-md leading-relaxed">
              The future of eSports is decentralized. Join the revolution and own your gaming destiny through skill-based tournaments, NFT rewards, and community governance.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${social.color.replace('from-', '').replace(' to-', ', ')})`,
                      opacity: 0.1,
                    }}
                  />
                  <Icon name={social.icon} size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="lg:pl-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Stay in the Loop</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on tournaments, token launches, and exclusive rewards.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-3"
              >
                <Icon name="CheckCircle" size={24} />
                <span>Thanks for subscribing! Check your inbox.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
                <GlowButton variant="primary" size="md" type="submit">
                  Subscribe
                </GlowButton>
              </form>
            )}

            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy. No spam, ever.
            </p>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([key, section], sectionIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                      >
                        {link.name}
                        <Icon name="ExternalLink" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © {currentYear} FortisArena. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
            <a
              href="mailto:support@fortisarena.io"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              support@fortisarena.io
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
