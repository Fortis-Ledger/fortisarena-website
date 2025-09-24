import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const UserTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Pro Gamer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      content: `FortisArena completely changed my gaming career. The transparent reward system and community governance make it feel like we actually own our gaming destiny. I've earned more in 3 months here than in 2 years on traditional platforms.`,
      rating: 5,
      achievement: "Tournament Champion",
      earnings: "$12,450",
      joinDate: "Early Adopter - Jan 2024"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Content Creator",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      content: `The Creator Studio tools are incredible! The community engagement is off the charts, and the monetization opportunities through NFT rewards and creator tokens have revolutionized how I approach content creation.`,
      rating: 5,
      achievement: "Top Creator",
      earnings: "$8,920",
      joinDate: "Creator Program - Feb 2024"
    },
    {
      id: 3,
      name: "Marcus Thompson",
      role: "Community Leader",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      content: `Being part of the DAO governance has been amazing. Having a real voice in platform decisions and seeing proposals I voted for get implemented gives me a sense of ownership I've never experienced before.`,
      rating: 5,
      achievement: "DAO Governor",
      earnings: "$6,780",
      joinDate: "Governance Beta - Mar 2024"
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Tournament Organizer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      content: `The AI-powered matchmaking system is a game-changer. Tournaments are more balanced and exciting than ever. The automated prize distribution through smart contracts eliminates all the headaches of traditional esports.`,
      rating: 5,
      achievement: "Event Master",
      earnings: "$15,230",
      joinDate: "Beta Tester - Dec 2023"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Casual Gamer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face",
      content: `I never thought I could earn from gaming as a casual player. The skill-based rewards and community challenges make every game session potentially profitable. The learning resources helped me improve dramatically.`,
      rating: 5,
      achievement: "Rising Star",
      earnings: "$2,340",
      joinDate: "Community Member - Apr 2024"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Community Voices</h2>
          <p className="text-muted-foreground">Real stories from our amazing community members</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Star" size={20} className="text-golden-cta" />
          <span className="text-sm font-medium text-foreground">4.9/5 Rating</span>
        </div>
      </div>
      {/* Main Testimonial */}
      <div className="relative bg-gradient-to-br from-muted/50 to-transparent rounded-xl p-8 mb-6">
        <div className="absolute top-4 left-4">
          <Icon name="Quote" size={32} className="text-accent/20" />
        </div>

        <div className="flex items-start space-x-6">
          {/* Avatar and Info */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src={current?.avatar}
                alt={current?.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-accent"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <Icon name="Check" size={12} className="text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-1">{current?.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>{current?.role}</span>
                <span>•</span>
                <span>{current?.joinDate}</span>
              </div>
            </div>

            <blockquote className="text-foreground text-lg leading-relaxed mb-4">
              "{current?.content}"
            </blockquote>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(current?.rating)]?.map((_, i) => (
                <Icon key={i} name="Star" size={16} className="text-golden-cta fill-current" />
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Trophy" size={16} className="text-accent" />
                <span className="text-muted-foreground">{current?.achievement}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="DollarSign" size={16} className="text-success" />
                <span className="font-semibold text-success">{current?.earnings} earned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentTestimonial ? 'bg-accent w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-lg font-bold text-foreground">4.9/5</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-lg font-bold text-foreground">2,847</div>
          <div className="text-sm text-muted-foreground">Reviews</div>
        </div>
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-lg font-bold text-foreground">96%</div>
          <div className="text-sm text-muted-foreground">Recommend</div>
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;