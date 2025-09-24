import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Professional eSports Player",
      company: "Team Nexus",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `FortisArena represents everything I've been hoping for in competitive gaming. Finally, a platform where my skills and achievements have real, lasting value. The transparency in matchmaking and rewards is revolutionary.`,
      rating: 5,
      expertise: "Competitive Gaming"
    },
    {
      id: 2,
      name: "Dr. Sarah Martinez",
      role: "Blockchain Gaming Researcher",
      company: "MIT Technology Lab",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `The technical architecture behind FortisArena is impressive. They've solved the trilemma of scalability, security, and decentralization in gaming. This is the future of player-owned economies.`,
      rating: 5,
      expertise: "Blockchain Technology"
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Gaming Content Creator",
      company: "StreamForge Network",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `As a content creator, I've seen countless gaming platforms come and go. FortisArena's approach to creator monetization and community building is unlike anything I've experienced. This is game-changing.`,
      rating: 5,
      expertise: "Content Creation"
    },
    {
      id: 4,
      name: "Elena Volkov",
      role: "Venture Capital Partner",
      company: "CryptoVentures Fund",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `From an investment perspective, FortisArena addresses a massive market opportunity with a clear value proposition. The team's execution and vision for decentralized gaming economics is exceptional.`,
      rating: 5,
      expertise: "Investment Strategy"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-6 py-3 mb-6">
            <Icon name="MessageSquare" size={20} className="text-success" />
            <span className="text-success font-medium">Industry Voices</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Industry Leaders
            <span className="block text-transparent bg-gradient-to-r from-success to-accent bg-clip-text">
              Are Saying
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from professional gamers, blockchain experts, content creators, 
            and investors who believe in the FortisArena vision.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glassmorphism rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={testimonials?.[activeTestimonial]?.avatar}
                      alt={testimonials?.[activeTestimonial]?.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-accent/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Quote" size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start space-x-1 mb-4">
                    {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-golden-cta fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
                    "{testimonials?.[activeTestimonial]?.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-2">
                    <div className="font-heading text-xl font-bold text-foreground">
                      {testimonials?.[activeTestimonial]?.name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials?.[activeTestimonial]?.role} at {testimonials?.[activeTestimonial]?.company}
                    </div>
                    <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                      <Icon name="Award" size={14} className="text-accent" />
                      <span className="text-sm text-accent font-medium">
                        {testimonials?.[activeTestimonial]?.expertise}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-foreground hover:bg-white/20 transition-all duration-300"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-foreground hover:bg-white/20 transition-all duration-300"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-accent' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials?.map((testimonial, index) => (
            <motion.button
              key={testimonial?.id}
              onClick={() => setActiveTestimonial(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glassmorphism rounded-xl p-6 text-left hover:shadow-lg transition-all duration-300 ${
                index === activeTestimonial ? 'ring-2 ring-accent' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial?.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial?.role}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-3">
                {testimonial?.content}
              </p>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-golden-cta fill-current" />
                  ))}
                </div>
                <Icon name="ArrowRight" size={14} className="text-accent" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;