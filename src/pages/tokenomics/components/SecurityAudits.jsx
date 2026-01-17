import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityAudits = () => {
  const upcomingAudits = [
    {
      id: 1,
      company: 'CertiK',
      type: 'Smart Contract Audit',
      status: 'Scheduled',
      description: 'Comprehensive smart contract security assessment',
      icon: 'Shield'
    },
    {
      id: 2,
      company: 'Quantstamp',
      type: 'Protocol Security Review',
      status: 'Scheduled',
      description: 'Full protocol security and economic model analysis',
      icon: 'Lock'
    },
    {
      id: 3,
      company: 'Trail of Bits',
      type: 'Economic Model Analysis',
      status: 'Scheduled',
      description: 'Advanced economic model and tokenomics validation',
      icon: 'TrendingUp'
    }
  ];

  const securityFeatures = [
    {
      id: 1,
      name: 'Multi-Signature Wallets',
      description: 'Enhanced security with multi-signature wallet implementation',
      icon: 'Key',
      status: 'Implemented'
    },
    {
      id: 2,
      name: 'Time-Locked Contracts',
      description: 'Smart contracts with time-lock mechanisms for additional security',
      icon: 'Clock',
      status: 'Implemented'
    },
    {
      id: 3,
      name: 'Emergency Pause Function',
      description: 'Emergency pause functionality to protect user funds',
      icon: 'AlertTriangle',
      status: 'Implemented'
    },
    {
      id: 4,
      name: 'Upgradeable Contracts',
      description: 'Proxy pattern implementation for secure contract upgrades',
      icon: 'RefreshCw',
      status: 'Implemented'
    }
  ];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'implemented':
        return 'text-success bg-success/10 border-success/20';
      case 'scheduled':
        return 'text-accent bg-accent/10 border-accent/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <div className="space-y-8">
      {/* Security & Audit Commitment */}
      <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20 rounded-xl p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Shield" size={40} className="text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Security & Audit Commitment</h3>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            FortisArena takes security, transparency, and user protection very seriously. While our tokens and smart contracts are currently under development, we are committed to conducting comprehensive third-party audits before any launch or deployment.
          </p>
          
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            All smart contracts, platform features, and token mechanisms will undergo industry-standard security reviews to ensure:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Safe handling of user funds</h4>
              <p className="text-sm text-muted-foreground">Protecting user investments and deposits</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Accurate tokenomics and reward distributions</h4>
              <p className="text-sm text-muted-foreground">Ensuring fair and transparent token mechanics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Resistance to exploits and vulnerabilities</h4>
              <p className="text-sm text-muted-foreground">Protecting against potential security threats</p>
            </div>
          </div>
          
          <div className="bg-background/50 border border-border rounded-lg p-6 mb-6">
            <p className="text-base text-foreground leading-relaxed">
              Our goal is to deliver a fully audited, secure, and trustable ecosystem for all users and investors. Updates regarding the audit process and results will be published on this page prior to any launch.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-accent bg-accent/10 px-4 py-2 rounded-full">
              <Icon name="Clock" size={20} />
              <span className="font-medium">Stay tuned for audit reports and updates as FortisArena progresses towards a fully secure launch.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Audits */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Planned Security Audits</h3>
          <p className="text-muted-foreground">
            Security assessments scheduled with top-tier blockchain audit firms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingAudits?.map((audit) => (
            <div
              key={audit?.id}
              className="border border-border rounded-lg p-6 text-center hover:shadow-gaming transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={audit?.icon} size={32} className="text-accent" />
              </div>
              
              <h4 className="font-bold text-foreground mb-2">{audit?.company}</h4>
              <p className="text-sm text-muted-foreground mb-4">{audit?.type}</p>
              <p className="text-xs text-muted-foreground mb-4">{audit?.description}</p>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(audit?.status)}`}>
                {audit?.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Security Features</h3>
          <p className="text-muted-foreground">
            Advanced security measures already implemented in our smart contracts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures?.map((feature) => (
            <div
              key={feature?.id}
              className="border border-border rounded-lg p-6 hover:shadow-gaming transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={24} className="text-success" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-2">{feature?.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{feature?.description}</p>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(feature?.status)}`}>
                    {feature?.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityAudits;