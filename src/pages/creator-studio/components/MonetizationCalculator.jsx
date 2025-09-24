import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const MonetizationCalculator = () => {
  const [formData, setFormData] = useState({
    followers: '',
    avgViewers: '',
    tournamentsPerMonth: '',
    contentType: '',
    engagementRate: ''
  });

  const [results, setResults] = useState(null);

  const contentTypeOptions = [
    { value: 'streaming', label: 'Live Streaming' },
    { value: 'tournaments', label: 'Tournament Organization' },
    { value: 'content', label: 'Content Creation' },
    { value: 'coaching', label: 'Coaching & Education' },
    { value: 'mixed', label: 'Mixed Content' }
  ];

  const engagementOptions = [
    { value: 'low', label: 'Low (1-3%)' },
    { value: 'medium', label: 'Medium (3-6%)' },
    { value: 'high', label: 'High (6-10%)' },
    { value: 'very-high', label: 'Very High (10%+)' }
  ];

  const calculateEarnings = () => {
    const followers = parseInt(formData?.followers) || 0;
    const avgViewers = parseInt(formData?.avgViewers) || 0;
    const tournaments = parseInt(formData?.tournamentsPerMonth) || 0;
    
    let baseMultiplier = 1;
    switch (formData?.contentType) {
      case 'streaming': baseMultiplier = 0.8; break;
      case 'tournaments': baseMultiplier = 1.5; break;
      case 'content': baseMultiplier = 1.0; break;
      case 'coaching': baseMultiplier = 1.2; break;
      case 'mixed': baseMultiplier = 1.1; break;
      default: baseMultiplier = 1.0;
    }

    let engagementMultiplier = 1;
    switch (formData?.engagementRate) {
      case 'low': engagementMultiplier = 0.8; break;
      case 'medium': engagementMultiplier = 1.0; break;
      case 'high': engagementMultiplier = 1.3; break;
      case 'very-high': engagementMultiplier = 1.6; break;
      default: engagementMultiplier = 1.0;
    }

    // Revenue calculations
    const subscriptionRevenue = Math.floor((followers * 0.05) * 9.99 * baseMultiplier * engagementMultiplier);
    const tournamentRevenue = tournaments * 250 * baseMultiplier;
    const nftRevenue = Math.floor((avgViewers * 0.1) * 25 * engagementMultiplier);
    const sponsorshipRevenue = Math.floor((followers / 1000) * 50 * baseMultiplier);
    const tokenRewards = Math.floor((avgViewers * tournaments) * 0.5);

    const totalMonthly = subscriptionRevenue + tournamentRevenue + nftRevenue + sponsorshipRevenue + tokenRewards;
    const totalYearly = totalMonthly * 12;

    setResults({
      monthly: {
        subscription: subscriptionRevenue,
        tournament: tournamentRevenue,
        nft: nftRevenue,
        sponsorship: sponsorshipRevenue,
        tokens: tokenRewards,
        total: totalMonthly
      },
      yearly: totalYearly
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gaming-dark to-gaming-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
            Revenue
            <span className="block text-transparent bg-gradient-to-r from-golden-cta to-orange-500 bg-clip-text">
              Calculator
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover your earning potential with FortisArena's creator monetization tools. Get personalized revenue projections based on your audience and content strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center">
              <Icon name="Calculator" size={24} className="text-golden-cta mr-3" />
              Your Creator Profile
            </h3>

            <div className="space-y-6">
              <Input
                label="Total Followers"
                type="number"
                placeholder="e.g., 10000"
                value={formData?.followers}
                onChange={(e) => handleInputChange('followers', e?.target?.value)}
                className="bg-white/5 border-white/20 text-white"
              />

              <Input
                label="Average Live Viewers"
                type="number"
                placeholder="e.g., 500"
                value={formData?.avgViewers}
                onChange={(e) => handleInputChange('avgViewers', e?.target?.value)}
                className="bg-white/5 border-white/20 text-white"
              />

              <Input
                label="Tournaments Per Month"
                type="number"
                placeholder="e.g., 4"
                value={formData?.tournamentsPerMonth}
                onChange={(e) => handleInputChange('tournamentsPerMonth', e?.target?.value)}
                className="bg-white/5 border-white/20 text-white"
              />

              <Select
                label="Primary Content Type"
                options={contentTypeOptions}
                value={formData?.contentType}
                onChange={(value) => handleInputChange('contentType', value)}
                placeholder="Select content type"
              />

              <Select
                label="Engagement Rate"
                options={engagementOptions}
                value={formData?.engagementRate}
                onChange={(value) => handleInputChange('engagementRate', value)}
                placeholder="Select engagement level"
              />

              <Button
                variant="default"
                fullWidth
                onClick={calculateEarnings}
                className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold"
                disabled={!formData?.followers || !formData?.contentType}
              >
                <Icon name="TrendingUp" size={16} />
                Calculate Earnings
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                {/* Monthly Breakdown */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center">
                    <Icon name="DollarSign" size={24} className="text-green-400 mr-3" />
                    Monthly Revenue Breakdown
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Subscriptions</span>
                      <span className="text-green-400 font-semibold">${results?.monthly?.subscription?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Tournament Revenue</span>
                      <span className="text-blue-400 font-semibold">${results?.monthly?.tournament?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">NFT Sales</span>
                      <span className="text-purple-400 font-semibold">${results?.monthly?.nft?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Sponsorships</span>
                      <span className="text-orange-400 font-semibold">${results?.monthly?.sponsorship?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Token Rewards</span>
                      <span className="text-cyan-400 font-semibold">${results?.monthly?.tokens?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-golden-cta/20 to-orange-500/20 rounded-lg border border-golden-cta/30">
                      <span className="text-white font-semibold">Total Monthly</span>
                      <span className="text-golden-cta font-bold text-xl">${results?.monthly?.total?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Yearly Projection */}
                <div className="bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 border border-electric-blue/30 rounded-2xl p-8 text-center">
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    Annual Revenue Projection
                  </h3>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text mb-4">
                    ${results?.yearly?.toLocaleString()}
                  </div>
                  <p className="text-gray-300">
                    Based on consistent growth and platform optimization
                  </p>
                </div>

                {/* Growth Tips */}
                <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <Icon name="Lightbulb" size={20} className="text-yellow-400 mr-2" />
                    Growth Recommendations
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={14} className="text-electric-blue mt-0.5 flex-shrink-0" />
                      <span>Host regular tournaments to increase tournament revenue</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={14} className="text-electric-blue mt-0.5 flex-shrink-0" />
                      <span>Create exclusive NFT collections for your community</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={14} className="text-electric-blue mt-0.5 flex-shrink-0" />
                      <span>Engage with your audience to boost engagement rates</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
                <Icon name="Calculator" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  Ready to Calculate?
                </h3>
                <p className="text-gray-300">
                  Fill out the form to see your personalized revenue projections and discover your earning potential with FortisArena.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetizationCalculator;