import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityAudits = () => {
  const audits = [
    {
      id: 1,
      company: 'CertiK',
      type: 'Smart Contract Audit',
      status: 'Completed',
      score: '96/100',
      date: '2024-08-15',
      reportUrl: '#',
      findings: {
        critical: 0,
        major: 0,
        minor: 2,
        informational: 5
      },
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center'
    },
    {
      id: 2,
      company: 'Quantstamp',
      type: 'Protocol Security Review',
      status: 'Completed',
      score: '94/100',
      date: '2024-07-22',
      reportUrl: '#',
      findings: {
        critical: 0,
        major: 1,
        minor: 3,
        informational: 7
      },
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop&crop=center'
    },
    {
      id: 3,
      company: 'Trail of Bits',
      type: 'Economic Model Analysis',
      status: 'In Progress',
      score: 'Pending',
      date: '2024-09-01',
      reportUrl: '#',
      findings: {
        critical: 0,
        major: 0,
        minor: 0,
        informational: 0
      },
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=center'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'ISO 27001',
      description: 'Information Security Management',
      status: 'Certified',
      validUntil: '2025-12-31',
      icon: 'Shield'
    },
    {
      id: 2,
      name: 'SOC 2 Type II',
      description: 'Security & Availability Controls',
      status: 'Certified',
      validUntil: '2025-06-30',
      icon: 'Lock'
    },
    {
      id: 3,
      name: 'GDPR Compliance',
      description: 'Data Protection Regulation',
      status: 'Compliant',
      validUntil: 'Ongoing',
      icon: 'UserCheck'
    }
  ];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'certified': case'compliant':
        return 'text-success bg-success/10 border-success/20';
      case 'in progress':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getFindingColor = (type, count) => {
    if (count === 0) return 'text-success';
    switch (type) {
      case 'critical':
        return 'text-destructive';
      case 'major':
        return 'text-warning';
      case 'minor':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Security Audits */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Security Audits</h3>
          <p className="text-muted-foreground">
            Independent security assessments by leading blockchain audit firms
          </p>
        </div>

        <div className="space-y-6">
          {audits?.map((audit) => (
            <div
              key={audit?.id}
              className="border border-border rounded-lg p-6 hover:shadow-gaming transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={audit?.logo}
                      alt={audit?.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{audit?.company}</h4>
                    <p className="text-sm text-muted-foreground">{audit?.type}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(audit?.status)}`}>
                    {audit?.status}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(audit.date)?.toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Award" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">Security Score</span>
                  </div>
                  <p className="text-2xl font-bold text-accent">{audit?.score}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="AlertTriangle" size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">Findings</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Critical:</span>
                      <span className={getFindingColor('critical', audit?.findings?.critical)}>
                        {audit?.findings?.critical}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Major:</span>
                      <span className={getFindingColor('major', audit?.findings?.major)}>
                        {audit?.findings?.major}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minor:</span>
                      <span className={getFindingColor('minor', audit?.findings?.minor)}>
                        {audit?.findings?.minor}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Info:</span>
                      <span className={getFindingColor('informational', audit?.findings?.informational)}>
                        {audit?.findings?.informational}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {audit?.status === 'Completed' && (
                <div className="mt-4 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Full Report
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Security Certifications</h3>
          <p className="text-muted-foreground">
            Industry-standard compliance and security certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications?.map((cert) => (
            <div
              key={cert?.id}
              className="border border-border rounded-lg p-6 text-center hover:shadow-gaming transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={cert?.icon} size={32} className="text-accent" />
              </div>
              
              <h4 className="font-bold text-foreground mb-2">{cert?.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{cert?.description}</p>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-2 ${getStatusColor(cert?.status)}`}>
                {cert?.status}
              </div>
              
              <p className="text-xs text-muted-foreground">
                Valid until: {cert?.validUntil}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityAudits;