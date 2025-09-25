import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineItem = ({ milestone, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'in-progress':
        return 'bg-accent text-accent-foreground';
      case 'upcoming':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'in-progress':
        return 'Clock';
      case 'upcoming':
        return 'Circle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-4 sm:left-6 top-12 sm:top-16 w-0.5 h-full bg-border"></div>
      )}
      {/* Timeline Node */}
      <div className="flex items-start space-x-3 sm:space-x-6">
        <div className={`flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${getStatusColor(milestone?.status)} gaming-glow`}>
          <Icon name={getStatusIcon(milestone?.status)} size={16} className="sm:w-5 sm:h-5" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-8 sm:pb-12">
          <div className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:shadow-gaming transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                    {milestone?.title}
                  </h3>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium w-fit ${getStatusColor(milestone?.status)}`}>
                    {milestone?.status?.replace('-', ' ')?.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-2">{milestone?.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span>{milestone?.timeline}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Target" size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span>{milestone?.category}</span>
                  </span>
                </div>
              </div>
              
              {milestone?.progress !== undefined && (
                <div className="text-left sm:text-right">
                  <div className="text-xl sm:text-2xl font-bold text-accent">{milestone?.progress}%</div>
                  <div className="text-xs text-muted-foreground">Complete</div>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {milestone?.progress !== undefined && (
              <div className="mb-4">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-500 gaming-glow"
                    style={{ width: `${milestone?.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
              {milestone?.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <Icon name="Zap" size={12} className="text-accent sm:w-3.5 sm:h-3.5" />
                  <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            {milestone?.metrics && (
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 p-3 sm:p-4 bg-muted rounded-lg">
                {milestone?.metrics?.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-base sm:text-lg font-bold text-accent">{metric?.value}</div>
                    <div className="text-xs text-muted-foreground">{metric?.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Expand Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
              className="w-full justify-center text-xs sm:text-sm"
            >
              {isExpanded ? 'Show Less' : 'View Details'}
            </Button>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="mt-4 pt-4 border-t border-border space-y-3 sm:space-y-4">
                {milestone?.technicalSpecs && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2 text-sm sm:text-base">
                      <Icon name="Code" size={14} className="sm:w-4 sm:h-4" />
                      <span>Technical Specifications</span>
                    </h4>
                    <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                      {milestone?.technicalSpecs?.map((spec, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Icon name="ArrowRight" size={10} className="mt-1 flex-shrink-0 sm:w-3 sm:h-3" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {milestone?.partnerships && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2 text-sm sm:text-base">
                      <Icon name="Handshake" size={14} className="sm:w-4 sm:h-4" />
                      <span>Strategic Partnerships</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {milestone?.partnerships?.map((partner, idx) => (
                        <div key={idx} className="flex items-center space-x-2 p-2 bg-background rounded">
                          <Icon name="Building" size={12} className="text-accent sm:w-3.5 sm:h-3.5" />
                          <span className="text-xs sm:text-sm text-foreground">{partner}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {milestone?.communityImpact && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2 text-sm sm:text-base">
                      <Icon name="Users" size={14} className="sm:w-4 sm:h-4" />
                      <span>Community Impact</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{milestone?.communityImpact}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;