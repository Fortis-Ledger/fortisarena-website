import React from 'react';
import Button from '../../../components/ui/Button';

const PhaseFilter = ({ activePhase, onPhaseChange }) => {
  const phases = [
    { id: 'all', label: 'All Phases', icon: 'Grid' },
    { id: 'foundation', label: 'Foundation', icon: 'Building' },
    { id: 'growth', label: 'Growth', icon: 'TrendingUp' },
    { id: 'expansion', label: 'Expansion', icon: 'Rocket' },
    { id: 'evolution', label: 'Evolution', icon: 'Sparkles' }
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