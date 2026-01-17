import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityGuidelines = () => {
  const [activeSection, setActiveSection] = useState('conduct');

  const guidelines = {
    conduct: {
      title: "Community Conduct",
      icon: "Users",
      description: "Essential guidelines for maintaining a positive and inclusive gaming environment",
      rules: [
        {
          title: "Respect All Players",
          description: "Treat every community member with dignity and respect, regardless of skill level, background, or gaming preferences.",
          examples: ["Use inclusive language", "Avoid discriminatory comments", "Support new players"],
          severity: "high"
        },
        {
          title: "Fair Play Standards",
          description: "Maintain integrity in all gaming activities and competitions.",
          examples: ["No cheating or exploits", "Report suspicious behavior", "Play within tournament rules"],
          severity: "high"
        },
        {
          title: "Constructive Communication",
          description: "Foster positive interactions that build up the community.",
          examples: ["Provide helpful feedback", "Encourage improvement", "Celebrate achievements"],
          severity: "medium"
        },
        {
          title: "Content Appropriateness",
          description: "Keep all content suitable for our diverse gaming community.",
          examples: ["Family-friendly language", "Appropriate imagery", "Professional conduct during streams"],
          severity: "medium"
        }
      ]
    },
    content: {
      title: "Content Creation",
      icon: "Video",
      description: "Guidelines for creating engaging and compliant content on the platform",
      rules: [
        {
          title: "Original Content Policy",
          description: "Create authentic content that represents your unique gaming perspective.",
          examples: ["Original commentary", "Personal gameplay", "Custom tournament formats"],
          severity: "high"
        },
        {
          title: "Copyright Compliance",
          description: "Respect intellectual property rights in all content creation.",
          examples: ["Use royalty-free music", "Credit original creators", "Obtain proper permissions"],
          severity: "high"
        },
        {
          title: "Quality Standards",
          description: "Maintain professional quality in your content and presentations.",
          examples: ["Clear audio/video", "Engaging thumbnails", "Consistent branding"],
          severity: "medium"
        },
        {
          title: "Educational Value",
          description: "Provide value to your audience through informative and entertaining content.",
          examples: ["Strategy explanations", "Skill tutorials", "Game analysis"],
          severity: "low"
        }
      ]
    },
    monetization: {
      title: "Monetization Ethics",
      icon: "DollarSign",
      description: "Ethical guidelines for monetizing your gaming content and community",
      rules: [
        {
          title: "Transparent Sponsorships",
          description: "Clearly disclose all sponsored content and partnerships.",
          examples: ["#sponsored hashtags", "Verbal disclosures", "Clear partnership statements"],
          severity: "high"
        },
        {
          title: "Fair Pricing Practices",
          description: "Set reasonable prices for services and exclusive content.",
          examples: ["Market-appropriate rates", "Value-based pricing", "Accessible tier options"],
          severity: "medium"
        },
        {
          title: "Honest Promotion",
          description: "Promote products and services you genuinely believe in.",
          examples: ["Personal experience sharing", "Honest reviews", "Authentic recommendations"],
          severity: "medium"
        },
        {
          title: "Community First",
          description: "Prioritize community value over pure profit motives.",
          examples: ["Free educational content", "Community events", "Accessible tournaments"],
          severity: "low"
        }
      ]
    },
    tournaments: {
      title: "Tournament Organization",
      icon: "Trophy",
      description: "Best practices for organizing fair and engaging tournaments",
      rules: [
        {
          title: "Fair Competition Rules",
          description: "Establish clear, fair rules that ensure competitive integrity.",
          examples: ["Detailed rule documentation", "Anti-cheat measures", "Equal opportunity access"],
          severity: "high"
        },
        {
          title: "Prize Distribution",
          description: "Handle prize pools and distributions transparently and promptly.",
          examples: ["Clear payout schedules", "Transparent prize pools", "Timely distributions"],
          severity: "high"
        },
        {
          title: "Participant Communication",
          description: "Maintain clear communication with all tournament participants.",
          examples: ["Regular updates", "Responsive support", "Clear scheduling"],
          severity: "medium"
        },
        {
          title: "Inclusive Participation",
          description: "Create tournaments that welcome players of all skill levels.",
          examples: ["Skill-based brackets", "Beginner-friendly events", "Diverse game selections"],
          severity: "medium"
        }
      ]
    }
  };

  const sections = Object.keys(guidelines);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high': return 'AlertTriangle';
      case 'medium': return 'AlertCircle';
      case 'low': return 'Info';
      default: return 'Info';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Community
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
              Guidelines
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our community guidelines ensure a positive, inclusive, and professional environment for all creators and players. Follow these principles to build a thriving gaming community.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-8">
              <h3 className="font-semibold text-foreground mb-4">Guidelines Sections</h3>
              <nav className="space-y-2">
                {sections?.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === section
                        ? 'bg-accent text-accent-foreground shadow-gaming'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={guidelines?.[section]?.icon} size={18} />
                    <span className="font-medium">{guidelines?.[section]?.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-8">
              {/* Section Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-purple rounded-lg flex items-center justify-center">
                  <Icon name={guidelines?.[activeSection]?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {guidelines?.[activeSection]?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {guidelines?.[activeSection]?.description}
                  </p>
                </div>
              </div>

              {/* Rules List */}
              <div className="space-y-6">
                {guidelines?.[activeSection]?.rules?.map((rule, index) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-foreground text-lg">{rule?.title}</h4>
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-medium ${getSeverityColor(rule?.severity)}`}>
                        <Icon name={getSeverityIcon(rule?.severity)} size={12} />
                        <span className="capitalize">{rule?.severity} Priority</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {rule?.description}
                    </p>
                    
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Examples:</h5>
                      <ul className="space-y-1">
                        {rule?.examples?.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-green-400 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="default" className="bg-electric-blue hover:bg-electric-blue/90">
                  <Icon name="Download" size={16} />
                  Download Full Guidelines
                </Button>
                <Button variant="outline">
                  <Icon name="MessageCircle" size={16} />
                  Ask Questions
                </Button>
                <Button variant="outline">
                  <Icon name="Flag" size={16} />
                  Report Violation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border border-electric-blue/20 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Quick Reference
              </h3>
              <p className="text-muted-foreground">
                Key principles to remember as a FortisArena creator
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Heart" size={24} className="text-green-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Respect</h4>
                <p className="text-sm text-muted-foreground">Treat everyone with dignity and kindness</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={24} className="text-blue-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Integrity</h4>
                <p className="text-sm text-muted-foreground">Maintain honesty in all interactions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Lightbulb" size={24} className="text-purple-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Innovation</h4>
                <p className="text-sm text-muted-foreground">Create unique and valuable content</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={24} className="text-orange-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Community</h4>
                <p className="text-sm text-muted-foreground">Put community value first</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGuidelines;