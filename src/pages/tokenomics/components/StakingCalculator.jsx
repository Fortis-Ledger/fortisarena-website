import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const StakingCalculator = () => {
  const [stakingAmount, setStakingAmount] = useState('1000');
  const [stakingPeriod, setStakingPeriod] = useState('12');
  const [results, setResults] = useState({
    dailyRewards: 0,
    monthlyRewards: 0,
    totalRewards: 0,
    finalAmount: 0,
    apy: 18.5
  });

  const periodOptions = [
    { value: '1', label: '1 Month', description: 'Flexible staking' },
    { value: '3', label: '3 Months', description: 'Short-term commitment' },
    { value: '6', label: '6 Months', description: 'Medium-term staking' },
    { value: '12', label: '12 Months', description: 'Long-term rewards' },
    { value: '24', label: '24 Months', description: 'Maximum rewards' }
  ];

  const getAPYForPeriod = (months) => {
    const apyRates = {
      '1': 12.0,
      '3': 15.0,
      '6': 16.5,
      '12': 18.5,
      '24': 22.0
    };
    return apyRates?.[months] || 18.5;
  };

  useEffect(() => {
    const amount = parseFloat(stakingAmount) || 0;
    const months = parseInt(stakingPeriod) || 12;
    const apy = getAPYForPeriod(stakingPeriod);
    
    const dailyRate = apy / 365 / 100;
    const days = months * 30;
    
    const dailyRewards = amount * dailyRate;
    const monthlyRewards = dailyRewards * 30;
    const totalRewards = dailyRewards * days;
    const finalAmount = amount + totalRewards;

    setResults({
      dailyRewards,
      monthlyRewards,
      totalRewards,
      finalAmount,
      apy
    });
  }, [stakingAmount, stakingPeriod]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })?.format(num);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })?.format(num * 0.50); // Assuming $0.50 per FRT
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">Staking Calculator</h3>
        <p className="text-muted-foreground">
          Calculate your potential staking rewards and governance power
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <Input
              label="Staking Amount"
              type="number"
              placeholder="Enter FRT amount"
              value={stakingAmount}
              onChange={(e) => setStakingAmount(e?.target?.value)}
              description="Minimum 100 FRT required for staking"
            />
          </div>

          <div>
            <Select
              label="Staking Period"
              options={periodOptions}
              value={stakingPeriod}
              onChange={setStakingPeriod}
              description="Longer periods offer higher APY rates"
            />
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Info" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Current APY</span>
            </div>
            <p className="text-2xl font-bold text-accent">{results?.apy}%</p>
            <p className="text-xs text-muted-foreground mt-1">
              Rate varies based on staking period and network conditions
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Calendar" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Daily Rewards</span>
              </div>
              <p className="text-lg font-bold text-foreground">
                {formatNumber(results?.dailyRewards)} FRT
              </p>
              <p className="text-xs text-muted-foreground">
                {formatCurrency(results?.dailyRewards)}
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="CalendarDays" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Monthly Rewards</span>
              </div>
              <p className="text-lg font-bold text-foreground">
                {formatNumber(results?.monthlyRewards)} FRT
              </p>
              <p className="text-xs text-muted-foreground">
                {formatCurrency(results?.monthlyRewards)}
              </p>
            </div>
          </div>

          <div className="bg-success/5 border border-success/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingUp" size={16} className="text-success" />
              <span className="text-sm font-medium text-success">Total Rewards</span>
            </div>
            <p className="text-2xl font-bold text-success">
              {formatNumber(results?.totalRewards)} FRT
            </p>
            <p className="text-sm text-muted-foreground">
              {formatCurrency(results?.totalRewards)} over {stakingPeriod} months
            </p>
          </div>

          <div className="bg-golden-cta/5 border border-golden-cta/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Wallet" size={16} className="text-golden-cta" />
              <span className="text-sm font-medium text-golden-cta">Final Amount</span>
            </div>
            <p className="text-2xl font-bold text-golden-cta">
              {formatNumber(results?.finalAmount)} FRT
            </p>
            <p className="text-sm text-muted-foreground">
              {formatCurrency(results?.finalAmount)} total value
            </p>
          </div>

          <Button 
            variant="default" 
            fullWidth
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            iconName="Lock"
            iconPosition="left"
          >
            Start Staking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StakingCalculator;