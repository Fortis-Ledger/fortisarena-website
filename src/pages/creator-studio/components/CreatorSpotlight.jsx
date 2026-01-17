import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CreatorSpotlight = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Creator
            <span className="block text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building a platform where creators can turn their gaming passion into profit. 
            Success stories from our creator community will be featured here as we grow.
          </p>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 rounded-full flex items-center justify-center">
              <Icon name="Users" size={40} className="text-electric-blue" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Creator Success Stories Coming Soon
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're building a platform where creators can turn their gaming passion into profit. 
              Success stories from our creator community will be featured here as we grow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-2 text-electric-blue">
                <Icon name="Clock" size={20} />
                <span className="font-medium">Stories coming soon</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Icon name="CheckCircle" size={20} />
                <span className="font-medium">Creator tools in development</span>
              </div>
              <div className="flex items-center space-x-2 text-golden-cta">
                <Icon name="Star" size={20} />
                <span className="font-medium">Join our creator program</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 border border-electric-blue/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start your creator journey today and become the next success story. Our platform provides everything you need to turn your gaming passion into a thriving business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="button"
                onClick={() => {
                  const formElement = document.getElementById('creator-program-form');
                  if (formElement) {
                    formElement.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                <span>Join Creator Program</span>
              </Button>
              <Button variant="outline">
                <span>Learn More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSpotlight;