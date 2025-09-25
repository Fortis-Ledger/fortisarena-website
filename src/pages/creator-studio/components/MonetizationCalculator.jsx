import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const MonetizationCalculator = () => {
  const [formData, setFormData] = useState({
    followers: '',
    videosPerMonth: '',
    avgViewsPerVideo: '',
    contentType: ''
  });

  const [results, setResults] = useState(null);

  const contentTypeOptions = [
    { value: 'streaming', label: 'Live Streaming' },
    { value: 'tournaments', label: 'Tournament Organization' },
    { value: 'educational', label: 'Educational Content' },
    { value: 'coaching', label: 'Coaching & Services' }
  ];

  // Removed engagement options as not needed in new calculation

  const calculateEarnings = () => {
    const videosPerMonth = parseInt(formData?.videosPerMonth) || 0;
    const avgViewsPerVideo = parseInt(formData?.avgViewsPerVideo) || 0;
    
    // Calculate total monthly views
    const totalMonthlyViews = videosPerMonth * avgViewsPerVideo;
    
    // Fixed CPM of $2
    const CPM = 2;
    
    // Calculate gross revenue (before platform deduction)
    const grossRevenue = (totalMonthlyViews / 1000) * CPM;
    
    // Get platform deduction percentage based on content type
    let platformDeductionPercent = 0;
    switch (formData?.contentType) {
      case 'streaming': platformDeductionPercent = 25; break;
      case 'tournaments': platformDeductionPercent = 23; break;
      case 'educational': platformDeductionPercent = 20; break;
      case 'coaching': platformDeductionPercent = 21.5; break;
      default: platformDeductionPercent = 0;
    }
    
    // Calculate platform cut and creator net revenue
    const platformCut = grossRevenue * (platformDeductionPercent / 100);
    const creatorNetRevenue = grossRevenue - platformCut;
    
    // Calculate effective RPM (creator earnings per 1,000 views)
    const effectiveRPM = creatorNetRevenue / (totalMonthlyViews / 1000);
    
    // Calculate annual projections
    const annualGrossRevenue = grossRevenue * 12;
    const annualCreatorRevenue = creatorNetRevenue * 12;

    setResults({
      monthly: {
        totalViews: totalMonthlyViews,
        grossRevenue: Math.round(grossRevenue * 100) / 100,
        platformCut: Math.round(platformCut * 100) / 100,
        creatorNetRevenue: Math.round(creatorNetRevenue * 100) / 100,
        effectiveRPM: Math.round(effectiveRPM * 100) / 100
      },
      annual: {
        grossRevenue: Math.round(annualGrossRevenue * 100) / 100,
        creatorNetRevenue: Math.round(annualCreatorRevenue * 100) / 100
      }
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return formData?.videosPerMonth && formData?.avgViewsPerVideo && formData?.contentType;
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
                label="Total Followers "
                type="number"
                placeholder="e.g., 10000"
                value={formData?.followers}
                onChange={(e) => handleInputChange('followers', e?.target?.value)}
                className="bg-white/5 border-white/20 text-white"
              />

              <Input
                label="Number of Videos per Month"
                type="number"
                placeholder="e.g., 12"
                value={formData?.videosPerMonth}
                onChange={(e) => handleInputChange('videosPerMonth', e?.target?.value)}
                className="bg-white/5 border-white/20 text-white"
              />

              <Input
                label="Average Views per Video"
                type="number"
                placeholder="e.g., 5000"
                value={formData?.avgViewsPerVideo}
                onChange={(e) => handleInputChange('avgViewsPerVideo', e?.target?.value)}
                className="bg-white/5 border-white/20 text-white"
              />

              <Select
                label="Primary Content Type"
                options={contentTypeOptions}
                value={formData?.contentType}
                onChange={(value) => handleInputChange('contentType', value)}
                placeholder="Select content type"
              />

              <Button
                variant="default"
                fullWidth
                onClick={calculateEarnings}
                className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold"
                disabled={!formData?.videosPerMonth || !formData?.avgViewsPerVideo || !formData?.contentType}
              >
                <Icon name="TrendingUp" size={16} />
                Calculate Revenue
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                {/* Monthly Revenue */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center">
                    <Icon name="DollarSign" size={24} className="text-green-400 mr-3" />
                    Monthly Revenue Estimate
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Total Monthly Views</span>
                      <span className="text-blue-400 font-semibold">{results?.monthly?.totalViews?.toLocaleString()} views</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <span className="text-white font-semibold">Gross Revenue</span>
                      <span className="text-green-400 font-bold text-xl">${results?.monthly?.grossRevenue?.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-golden-cta/20 to-orange-500/20 rounded-lg border border-golden-cta/30">
                      <span className="text-white font-semibold">Creator Net Revenue</span>
                      <span className="text-golden-cta font-bold text-xl">${results?.monthly?.creatorNetRevenue?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Annual Revenue */}
                <div className="bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 border border-electric-blue/30 rounded-2xl p-8 text-center">
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    Annual Revenue Projection
                  </h3>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
                      ${results?.annual?.grossRevenue?.toLocaleString()}
                    </div>
                    <div className="text-xl text-golden-cta font-semibold">
                      Your Annual Net Revenue: ${results?.annual?.creatorNetRevenue?.toLocaleString()}
                    </div>
                    <p className="text-gray-300 text-sm">
                      Based on consistent monthly performance
                    </p>
                  </div>
                </div>

                {/* Calculation Info */}
                <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <Icon name="Info" size={20} className="text-blue-400 mr-2" />
                    Calculation Details
                  </h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Content Type:</span>
                      <span className="text-white">{formData?.contentType?.charAt(0)?.toUpperCase() + formData?.contentType?.slice(1)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Followers (Optional):</span>
                      <span className="text-white">{formData?.followers ? formData?.followers?.toLocaleString() : 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Videos per Month:</span>
                      <span className="text-white">{formData?.videosPerMonth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Views per Video:</span>
                      <span className="text-white">{formData?.avgViewsPerVideo?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Monthly Views:</span>
                      <span className="text-white">{results?.monthly?.totalViews?.toLocaleString()}</span>
                    </div>
                  </div>
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