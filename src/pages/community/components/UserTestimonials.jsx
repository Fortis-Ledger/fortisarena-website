import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const UserTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [];

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
          <Icon name="Clock" size={20} className="text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="text-center py-8 sm:py-12">
        <div className="mb-6">
          <Icon name="MessageSquare" size={48} className="text-muted-foreground mx-auto mb-4 sm:w-16 sm:h-16" />
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Community Testimonials Coming Soon</h3>
          <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
            We're building a platform where community voices matter. Be the first to share your experience!
          </p>
        </div>

        {/* Feature Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="p-4 sm:p-6 rounded-lg border border-border bg-muted/30">
            <div className="text-center">
              <Icon name="Star" size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">Rate & Review</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Share your gaming experience and rate features
              </p>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 rounded-lg border border-border bg-muted/30">
            <div className="text-center">
              <Icon name="Users" size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">Community Stories</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Read real experiences from fellow gamers
              </p>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 rounded-lg border border-border bg-muted/30">
            <div className="text-center">
              <Icon name="Award" size={32} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">Achievement Sharing</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Celebrate milestones and achievements together
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-lg p-4 sm:p-6">
          <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">
            Be the First to Share
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            Join our community to be among the first to share your FortisArena experience
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 text-accent">
              Q2 2026
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground">
              In Development
            </span>
          </div>
        </div>
      </div>

      {/* Honest Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-lg font-bold text-foreground">0/5</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-lg font-bold text-foreground">0</div>
          <div className="text-sm text-muted-foreground">Reviews</div>
        </div>
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-lg font-bold text-foreground">0%</div>
          <div className="text-sm text-muted-foreground">Recommend</div>
        </div>
      </div>
    </div>
  );
};

export default UserTestimonials;