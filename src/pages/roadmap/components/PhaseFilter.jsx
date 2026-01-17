import React from 'react';
import Button from '../../../components/ui/Button';

const PhaseFilter = ({ activePhase, onPhaseChange }) => {
  const phases = [
    { id: 'all', label: 'All Phases', icon: 'Grid' },
    { id: 'foundation', label: 'Foundation (2025)', icon: 'Building' },
    { id: 'growth', label: 'Growth (2026)', icon: 'TrendingUp' },
    { id: 'expansion', label: 'Expansion (2027)', icon: 'Rocket' },
    { id: 'evolution', label: 'Evolution (2028)', icon: 'Sparkles' }
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {phases?.map((phase) => (
        <Button
          key={phase?.id}
          variant={activePhase === phase?.id ? "default" : "outline"}
          size="sm"
          onClick={() => onPhaseChange(phase?.id)}
          iconName={phase?.icon}
          iconPosition="left"
          className={activePhase === phase?.id ? "bg-accent hover:bg-accent/90" : ""}
        >
          {phase?.label}
        </Button>
      ))}
    </div>
  );
};

export default PhaseFilter;