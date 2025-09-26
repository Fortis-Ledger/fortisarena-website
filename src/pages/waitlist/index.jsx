import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, User, Mail, MapPin, Gamepad2, Users } from 'lucide-react';
import Button from '../../components/ui/Button';

const Waitlist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get the previous page from location state, default to home
  const previousPage = location.state?.from || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    // Convert FormData to regular object for Google Sheets
    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      country: formData.get('country'),
      game_interest: formData.get('game_interest'),
      interest: formData.get('interest'),
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-US'),
      time: new Date().toLocaleTimeString('en-US')
    };
    
    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyBL8RnWIuZZZhOSTnYYlzftpKNlHrVkmg2wemxr1kAMdZI5ssxdBKmZYec1iFHgs8LfA/exec';
      
      console.log('Sending data:', data);
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      console.log('Form submitted successfully');
      setIsSubmitted(true);
      
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black overflow-hidden">
        {/* Animated Background Elements */}
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

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <CheckCircle className="h-24 w-24 text-primary mx-auto mb-6" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4 font-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to the Arena!
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              You've successfully joined the FortisArena waitlist!
            </motion.p>
            
            <motion.p 
              className="text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              We'll notify you when we launch. Redirecting to home page...
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                variant="glow"
                size="glow-lg"
                className="font-semibold"
                onClick={() => navigate('/')}
              >
                Go to Home Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(previousPage)}
            className="mb-8 flex items-center text-primary hover:text-primary/80 transition-colors duration-200 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            {previousPage === '/community' ? 'Back to Community' : 'Back to Home'}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-2xl p-8"
          >
            <div className="text-center mb-8">
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold text-white mb-2 font-heading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Join FortisArena
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Be first in the Arena. Fill your details.
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-gray-200 text-sm font-medium mb-3 flex items-center">
                  <User className="h-4 w-4 mr-2 text-primary" />
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="full_name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <label className="block text-gray-200 text-sm font-medium mb-3 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </motion.div>

              {/* Country */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-gray-200 text-sm font-medium mb-3 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Country
                </label>
                <input 
                  type="text" 
                  name="country" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your country"
                />
              </motion.div>

              {/* Game Interest */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <label className="block text-gray-200 text-sm font-medium mb-3 flex items-center">
                  <Gamepad2 className="h-4 w-4 mr-2 text-primary" />
                  Game Interest
                </label>
                <input 
                  type="text" 
                  name="game_interest" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="e.g., PUBG, Free Fire, Valorant, CS:GO, etc."
                />
              </motion.div>

              {/* Interest Area */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <label className="block text-gray-200 text-sm font-medium mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  Interest Area
                </label>
                <select 
                  name="interest" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 backdrop-blur-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23ffffff%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center] pr-10"
                >
                  <option value="">Select your interest...</option>
                  <option value="eSports Player">eSports Player</option>
                  <option value="Competitive Player">Competitive Player</option>
                  <option value="Streamer">Streamer / Creator</option>
                  <option value="Developer">Developer</option>
                  <option value="Community">Community / Partnerships</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="pt-4"
              >
                <Button 
                  type="submit" 
                  variant="glow"
                  size="glow-lg"
                  className="w-full font-semibold"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining Arena...' : 'Join Arena'}
                </Button>
              </motion.div>
            </form>

            <motion.p 
              className="text-xs text-gray-500 text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              No spam. We value your privacy.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
