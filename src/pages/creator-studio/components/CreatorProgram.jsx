import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/CheckBox';

const CreatorProgram = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      username: '',
      phoneNumber: '',
      country: ''
    },
    creatorInfo: {
      contentType: '',
      experience: '',
      platforms: [],
      audience: '',
      specialization: ''
    },
    goals: {
      primaryGoal: '',
      monthlyGoal: '',
      interests: [],
      commitment: ''
    }
  });

  const totalSteps = 4;

  const contentTypeOptions = [
    { value: 'streaming', label: 'Live Streaming' },
    { value: 'tournaments', label: 'Tournament Organization' },
    { value: 'content', label: 'Content Creation' },
    { value: 'coaching', label: 'Coaching & Education' },
    { value: 'mixed', label: 'Mixed Content' }
  ];

  const experienceOptions = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3-5 years)' },
    { value: 'expert', label: 'Expert (5+ years)' }
  ];

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' },
    { value: 'other', label: 'Other' }
  ];

  const platformOptions = [
    'Twitch', 'YouTube', 'Discord', 'Twitter', 'TikTok', 'Instagram'
  ];

  const interestOptions = [
    'NFT Creation', 'Tournament Hosting', 'Community Building', 'Educational Content', 
    'Brand Partnerships', 'Merchandise', 'Coaching Services', 'Live Events'
  ];

  const benefits = [
    {
      icon: "DollarSign",
      title: "Revenue Sharing",
      description: "Earn up to 80% revenue share on all monetization activities",
      highlight: "Up to 80%"
    },
    {
      icon: "Zap",
      title: "Priority Support",
      description: "Get dedicated support and early access to new features",
      highlight: "24/7 Support"
    },
    {
      icon: "Trophy",
      title: "Exclusive Events",
      description: "Access to creator-only tournaments and networking events",
      highlight: "VIP Access"
    },
    {
      icon: "Megaphone",
      title: "Marketing Support",
      description: "Featured placement and promotional support for your content",
      highlight: "Free Promotion"
    }
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev?.[section],
        [field]: value
      }
    }));
  };

  const handleArrayToggle = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev?.[section],
        [field]: prev?.[section]?.[field]?.includes(value)
          ? prev?.[section]?.[field]?.filter(item => item !== value)
          : [...prev?.[section]?.[field], value]
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = async () => {
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbwOnS-v5cZKf-PZqfYeCXG-Fv48lh5POMaIxAu9QNXYLw05Ap_nlPzEeYKRR67OC-TFMQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.personalInfo.fullName,
          email: formData.personalInfo.email,
          username: formData.personalInfo.username,
          phoneNumber: formData.personalInfo.phoneNumber,
          country: formData.personalInfo.country,
          primaryContentType: formData.creatorInfo.contentType,
          experienceLevel: formData.creatorInfo.experience,
          currentPlatforms: formData.creatorInfo.platforms,
          currentAudienceSize: formData.creatorInfo.audience,
          gamingSpecialization: formData.creatorInfo.specialization,
          primaryGoal: formData.goals.primaryGoal,
          monthlyRevenueGoal: formData.goals.monthlyGoal,
          areasOfInterest: formData.goals.interests,
          timeCommitment: formData.goals.commitment,
          timestamp: new Date().toISOString(),
          date: new Date().toLocaleDateString('en-US'),
          time: new Date().toLocaleTimeString('en-US')
        })
      });
      
      console.log('Form submitted successfully');
      
      // Show success popup
      setShowSuccessPopup(true);
      
      // Auto hide popup after 3 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
      
      // Reset form
      setFormData({
        personalInfo: {
          fullName: '',
          email: '',
          username: '',
          phoneNumber: '',
          country: ''
        },
        creatorInfo: {
          contentType: '',
          experience: '',
          platforms: [],
          audience: '',
          specialization: ''
        },
        goals: {
          primaryGoal: '',
          monthlyGoal: '',
          interests: [],
          commitment: ''
        }
      });
      setCurrentStep(1);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Personal Information
              </h3>
              <p className="text-muted-foreground">
                Let's start with some basic information about you
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData?.personalInfo?.fullName}
                onChange={(e) => handleInputChange('personalInfo', 'fullName', e?.target?.value)}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={formData?.personalInfo?.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e?.target?.value)}
                required
              />
              <Input
                label="Username"
                type="text"
                placeholder="Your gaming handle"
                value={formData?.personalInfo?.username}
                onChange={(e) => handleInputChange('personalInfo', 'username', e?.target?.value)}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData?.personalInfo?.phoneNumber}
                onChange={(e) => handleInputChange('personalInfo', 'phoneNumber', e?.target?.value)}
                required
              />
              <Select
                label="Country"
                options={countryOptions}
                value={formData?.personalInfo?.country}
                onChange={(value) => handleInputChange('personalInfo', 'country', value)}
                placeholder="Select your country"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Creator Profile
              </h3>
              <p className="text-muted-foreground">
                Tell us about your content creation experience
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Primary Content Type"
                  options={contentTypeOptions}
                  value={formData?.creatorInfo?.contentType}
                  onChange={(value) => handleInputChange('creatorInfo', 'contentType', value)}
                  placeholder="Select content type"
                  required
                />
                <Select
                  label="Experience Level"
                  options={experienceOptions}
                  value={formData?.creatorInfo?.experience}
                  onChange={(value) => handleInputChange('creatorInfo', 'experience', value)}
                  placeholder="Select experience level"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Current Platforms (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {platformOptions?.map((platform) => (
                    <Checkbox
                      key={platform}
                      label={platform}
                      checked={formData?.creatorInfo?.platforms?.includes(platform)}
                      onChange={() => handleArrayToggle('creatorInfo', 'platforms', platform)}
                    />
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Current Audience Size"
                  type="number"
                  placeholder="e.g., 5000"
                  value={formData?.creatorInfo?.audience}
                  onChange={(e) => handleInputChange('creatorInfo', 'audience', e?.target?.value)}
                />
                <Input
                  label="Gaming Specialization"
                  type="text"
                  placeholder="e.g., FPS, Strategy, Fighting"
                  value={formData?.creatorInfo?.specialization}
                  onChange={(e) => handleInputChange('creatorInfo', 'specialization', e?.target?.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Goals & Interests
              </h3>
              <p className="text-muted-foreground">
                What do you want to achieve with FortisArena?
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Primary Goal"
                  type="text"
                  placeholder="e.g., Build a gaming community"
                  value={formData?.goals?.primaryGoal}
                  onChange={(e) => handleInputChange('goals', 'primaryGoal', e?.target?.value)}
                />
                <Input
                  label="Monthly Revenue Goal"
                  type="number"
                  placeholder="e.g., 2000"
                  value={formData?.goals?.monthlyGoal}
                  onChange={(e) => handleInputChange('goals', 'monthlyGoal', e?.target?.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interestOptions?.map((interest) => (
                    <Checkbox
                      key={interest}
                      label={interest}
                      checked={formData?.goals?.interests?.includes(interest)}
                      onChange={() => handleArrayToggle('goals', 'interests', interest)}
                    />
                  ))}
                </div>
              </div>

              <Input
                label="Time Commitment (hours per week)"
                type="number"
                placeholder="e.g., 20"
                value={formData?.goals?.commitment}
                onChange={(e) => handleInputChange('goals', 'commitment', e?.target?.value)}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Application Complete!
              </h3>
              <p className="text-muted-foreground">
                Review your information and submit your creator program application
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Personal Info</h4>
                  <p className="text-sm text-muted-foreground">Name: {formData?.personalInfo?.fullName}</p>
                  <p className="text-sm text-muted-foreground">Email: {formData?.personalInfo?.email}</p>
                  <p className="text-sm text-muted-foreground">Username: {formData?.personalInfo?.username}</p>
                  <p className="text-sm text-muted-foreground">Phone: {formData?.personalInfo?.phoneNumber}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Creator Profile</h4>
                  <p className="text-sm text-muted-foreground">Content: {formData?.creatorInfo?.contentType}</p>
                  <p className="text-sm text-muted-foreground">Experience: {formData?.creatorInfo?.experience}</p>
                  <p className="text-sm text-muted-foreground">Audience: {formData?.creatorInfo?.audience}</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-lg p-6 text-center">
              <Icon name="CheckCircle" size={48} className="text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Ready to Submit</h4>
              <p className="text-muted-foreground">
                Once our MVP is ready, we'll invite you for beta testing. You'll be among the first to experience the future of Web3 gaming!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-card border border-border rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
            <p className="text-muted-foreground mb-4">
              Once our MVP is ready, we'll invite you for beta testing. You'll be among the first to experience the future of Web3 gaming!
            </p>
            <div className="w-full bg-muted rounded-full h-1">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-blue-500 h-1 rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Join the Creator
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
              Program
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock exclusive benefits, higher revenue shares, and priority support. Take your gaming content to the next level with our creator program.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits?.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit?.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{benefit?.description}</p>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                {benefit?.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-electric-blue to-neon-purple h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Content */}
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <Icon name="ArrowLeft" size={16} />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  variant="default"
                  onClick={nextStep}
                  className="bg-electric-blue hover:bg-electric-blue/90"
                >
                  Next
                  <Icon name="ArrowRight" size={16} />
                </Button>
              ) : (
                <Button
                  variant="default"
                  className="bg-golden-cta hover:bg-golden-cta/90 text-gaming-dark font-semibold"
                  onClick={submitForm}
                >
                  <Icon name="Send" size={16} />
                  Submit Application
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">When will I hear back?</h4>
              <p className="text-sm text-muted-foreground">
                Once our MVP is ready, we'll reach out to invite you for beta testing. You'll be among the first to experience our platform!
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">What are the requirements?</h4>
              <p className="text-sm text-muted-foreground">
                We look for creators with consistent content, engaged audiences, and alignment with our community values.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">Can I apply if I'm new?</h4>
              <p className="text-sm text-muted-foreground">
                Absolutely! We welcome creators at all levels. Show us your passion and commitment to growing.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">What support do I get?</h4>
              <p className="text-sm text-muted-foreground">
                Creator program members get dedicated support, marketing assistance, and early access to new features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorProgram;