import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Waitlist = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/xgvlyogj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Auto redirect to home page after 3 seconds
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-green-400 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              You've successfully joined the FortisArena waitlist!
            </p>
            <p className="text-gray-400">
              We'll notify you when we launch. Redirecting to home page...
            </p>
          </div>
          
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors duration-200"
          >
            Go to Home Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        <form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-2 text-cyan-400">
            Join FortisArena Waitlist
          </h2>
          <p className="text-center text-gray-300 mb-6">
            Be first on FortisArena. Fill your details.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                name="full_name" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Email
              </label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Country
              </label>
              <input 
                type="text" 
                name="country" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter your country"
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Game Interest
              </label>
              <input 
                type="text" 
                name="game_interest" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                placeholder="e.g., PUBG, Free Fire, Valorant, CS:GO, etc."
              />
            </div>

            <div>
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Interest Area
              </label>
              <select 
                name="interest" 
                required 
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%206l5%205%205-5%202%201-7%207-7-7%202-1z%22%20fill%3D%22%23ffffff%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center] pr-10"
              >
                <option value="">Select…</option>
                <option value="eSports Player">eSports Player</option>
                <option value="Player">Competitive Player</option>
                <option value="Streamer">Streamer / Creator</option>
                <option value="Developer">Developer</option>
                <option value="Community">Community / Partnerships</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg cursor-pointer hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            No spam. We value privacy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;
