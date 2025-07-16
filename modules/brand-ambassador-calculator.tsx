import React, { useState, useEffect } from 'react';
import { Users, DollarSign, TrendingUp, AlertCircle, Trophy, UserPlus, Target } from 'lucide-react';

const BrandAmbassadorCalculator = () => {
  // Configurable values - calibrated for realistic referral earnings
  const CONFIG = {
    // Commission rates by performance tier (percentage of claim value)
    commissionRates: {
      'elite': 0.05,          // 5% for All-Conference/All-American ambassadors
      'multiYearStarter': 0.04, // 4% for multi-year starters
      'starter': 0.035,       // 3.5% for single year starters
      'significant': 0.03,    // 3% for significant playing time
      'roster': 0.025,        // 2.5% for roster players
      'limited': 0.02         // 2% for limited playing time
    },
    
    // Network size multipliers by sport (how many teammates they likely know)
    networkSizeMultipliers: {
      'football-power5': 1.5,        // Football has largest rosters
      'mensBasketball-power5': 0.6,  // Basketball has smaller teams
      'womensBasketball-power5': 0.6,
      'otherSports-power5': 0.8
    },
    
    // Years overlap factor (more years = larger network)
    yearsNetworkFactor: {
      1: 1.0,
      2: 1.6,
      3: 2.1,
      4: 2.5,
      5: 2.8
    },
    
    // Conference network quality (affects average claim values)
    conferenceNetworkQuality: {
      'power5': 1.0,
      'group5': 0.4,
      'fcs': 0.2,
      'other': 0.15
    },
    
    // Conversion rate scenarios
    conversionRates: {
      conservative: 0.15,  // 15% of contacted teammates convert
      realistic: 0.25,     // 25% convert (base case)
      optimistic: 0.40     // 40% convert (best case)
    },
    
    // Average claim values by sport/conference (from NIL calculator data)
    averageClaimValues: {
      'football-power5': {
        'elite': 180000,
        'multiYearStarter': 150000,
        'starter': 120000,
        'significant': 80000,
        'roster': 60000,
        'limited': 40000
      },
      'mensBasketball-power5': {
        'elite': 160000,
        'multiYearStarter': 130000,
        'starter': 100000,
        'significant': 70000,
        'roster': 50000,
        'limited': 35000
      },
      'womensBasketball-power5': {
        'elite': 100000,
        'multiYearStarter': 80000,
        'starter': 65000,
        'significant': 45000,
        'roster': 35000,
        'limited': 25000
      },
      'otherSports-power5': {
        'elite': 40000,
        'multiYearStarter': 30000,
        'starter': 25000,
        'significant': 18000,
        'roster': 15000,
        'limited': 10000
      }
    },
    
    // Interest rate assumptions
    interestRates: {
      'highPerformance': 0.8,  // 80% of high performers will be interested
      'midPerformance': 0.7,   // 70% of mid-tier players
      'lowPerformance': 0.6    // 60% of roster players
    },
    
    // Bonus structures
    bonuses: {
      volumeThreshold: 10,     // Number of referrals for volume bonus
      volumeBonusRate: 0.01,   // Extra 1% commission after threshold
      quarterlyTarget: 5,      // Quarterly target for bonus
      quarterlyBonus: 2500     // Fixed quarterly bonus amount
    }
  };

  const [formData, setFormData] = useState({
    sport: '',
    conference: '',
    yearsPlayed: [],
    performanceLevel: '',
    ownClaimValue: 0,
    estimatedContacts: 20,
    interestedPercentage: 70
  });

  const [results, setResults] = useState(null);

  const sports = [
    { value: 'football-power5', label: 'Football' },
    { value: 'mensBasketball-power5', label: "Men's Basketball" },
    { value: 'womensBasketball-power5', label: "Women's Basketball" },
    { value: 'otherSports-power5', label: 'Other Division 1 Sports' }
  ];

  const conferences = [
    { value: 'power5', label: 'Power 5 (SEC, Big Ten, ACC, Big 12, Pac-12)' },
    { value: 'group5', label: 'Group of 5 (AAC, C-USA, MAC, MWC, Sun Belt)' },
    { value: 'fcs', label: 'FCS Conference' },
    { value: 'other', label: 'Other Division 1' }
  ];

  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

  const performanceLevels = [
    { value: 'elite', label: 'All-Conference / All-American' },
    { value: 'multiYearStarter', label: 'Multi-Year Starter (2+ years)' },
    { value: 'starter', label: 'Single Year Starter' },
    { value: 'significant', label: 'Significant Playing Time' },
    { value: 'roster', label: 'Roster Player' },
    { value: 'limited', label: 'Limited Playing Time' }
  ];

  const handleYearToggle = (year) => {
    setFormData(prev => ({
      ...prev,
      yearsPlayed: prev.yearsPlayed.includes(year)
        ? prev.yearsPlayed.filter(y => y !== year)
        : [...prev.yearsPlayed, year]
    }));
  };

  const calculateEarnings = () => {
    if (!formData.sport || !formData.conference || formData.yearsPlayed.length === 0 || 
        !formData.performanceLevel) {
      return;
    }

    // Get commission rate based on performance
    const commissionRate = CONFIG.commissionRates[formData.performanceLevel];
    
    // Calculate network size
    const sportMultiplier = CONFIG.networkSizeMultipliers[formData.sport];
    const yearsMultiplier = CONFIG.yearsNetworkFactor[formData.yearsPlayed.length] || 1;
    const conferenceQuality = CONFIG.conferenceNetworkQuality[formData.conference];
    
    // Get average claim value for their network
    const averageClaimValue = CONFIG.averageClaimValues[formData.sport][formData.performanceLevel] * conferenceQuality;
    
    // Calculate interested contacts
    const interestedContacts = Math.floor(formData.estimatedContacts * (formData.interestedPercentage / 100));
    
    // Calculate scenarios
    const scenarios = {
      conservative: {
        conversions: Math.floor(interestedContacts * CONFIG.conversionRates.conservative),
        rate: CONFIG.conversionRates.conservative
      },
      realistic: {
        conversions: Math.floor(interestedContacts * CONFIG.conversionRates.realistic),
        rate: CONFIG.conversionRates.realistic
      },
      optimistic: {
        conversions: Math.floor(interestedContacts * CONFIG.conversionRates.optimistic),
        rate: CONFIG.conversionRates.optimistic
      }
    };
    
    // Calculate earnings for each scenario
    const earnings = {};
    Object.keys(scenarios).forEach(scenario => {
      const conversions = scenarios[scenario].conversions;
      const baseEarnings = conversions * averageClaimValue * commissionRate;
      
      // Add volume bonus if applicable
      let bonusEarnings = 0;
      if (conversions >= CONFIG.bonuses.volumeThreshold) {
        bonusEarnings = conversions * averageClaimValue * CONFIG.bonuses.volumeBonusRate;
      }
      
      // Add quarterly bonus if meeting targets
      const quarterlyBonuses = Math.floor(conversions / CONFIG.bonuses.quarterlyTarget) * CONFIG.bonuses.quarterlyBonus;
      
      earnings[scenario] = {
        conversions,
        baseEarnings,
        bonusEarnings,
        quarterlyBonuses,
        totalEarnings: baseEarnings + bonusEarnings + quarterlyBonuses,
        monthlyEarnings: (baseEarnings + bonusEarnings + quarterlyBonuses) / 12,
        perReferral: averageClaimValue * commissionRate
      };
    });
    
    setResults({
      commissionRate,
      averageClaimValue,
      interestedContacts,
      earnings,
      networkQuality: {
        sport: formData.sport.replace('-power5', '').replace(/([A-Z])/g, ' $1').trim(),
        conference: formData.conference,
        performance: formData.performanceLevel
      }
    });
  };

  useEffect(() => {
    calculateEarnings();
  }, [formData]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercent = (rate) => {
    return `${(rate * 100).toFixed(0)}%`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl">
      <div className="bg-white rounded-xl p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-emerald-600 rounded-lg">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Brand Ambassador Revenue Calculator</h2>
            <p className="text-gray-600 mt-1">Estimate your earnings potential as a referral partner</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Sport Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              What sport did you play?
            </label>
            <select
              value={formData.sport}
              onChange={(e) => setFormData({...formData, sport: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
            >
              <option value="">Select your sport</option>
              {sports.map(sport => (
                <option key={sport.value} value={sport.value}>{sport.label}</option>
              ))}
            </select>
          </div>

          {/* Conference Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              What conference did you compete in?
            </label>
            <select
              value={formData.conference}
              onChange={(e) => setFormData({...formData, conference: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
            >
              <option value="">Select your conference</option>
              {conferences.map(conf => (
                <option key={conf.value} value={conf.value}>{conf.label}</option>
              ))}
            </select>
          </div>

          {/* Years Played */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Which years did you compete? (Select all that apply)
            </label>
            <div className="grid grid-cols-3 gap-3">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => handleYearToggle(year)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    formData.yearsPlayed.includes(year)
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Performance Level */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              What was your performance level?
            </label>
            <select
              value={formData.performanceLevel}
              onChange={(e) => setFormData({...formData, performanceLevel: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
            >
              <option value="">Select performance level</option>
              {performanceLevels.map(level => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
          </div>

          {/* Network Estimation */}
          <div className="bg-gray-50 p-6 rounded-xl space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Your Network Potential
            </h3>
            
            {/* Estimated Contacts */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How many teammates could you realistically contact?
              </label>
              <input
                type="number"
                value={formData.estimatedContacts}
                onChange={(e) => setFormData({...formData, estimatedContacts: parseInt(e.target.value) || 0})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                min="1"
                max="200"
              />
              <p className="text-sm text-gray-500 mt-1">
                Think about teammates from your years, plus those you mentored
              </p>
            </div>

            {/* Interest Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What percentage would likely be interested? ({formData.interestedPercentage}%)
              </label>
              <input
                type="range"
                value={formData.interestedPercentage}
                onChange={(e) => setFormData({...formData, interestedPercentage: parseInt(e.target.value)})}
                className="w-full"
                min="10"
                max="100"
                step="5"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>10%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Own Claim Value (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your estimated claim value (optional - helps build credibility)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="number"
                value={formData.ownClaimValue}
                onChange={(e) => setFormData({...formData, ownClaimValue: parseInt(e.target.value) || 0})}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="mt-8 space-y-6">
            {/* Commission Rate Display */}
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Your Commission Rate</span>
                <span className="text-2xl font-bold text-emerald-600">{formatPercent(results.commissionRate)}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Based on your {results.networkQuality.performance.replace(/([A-Z])/g, ' $1').toLowerCase()} performance level
              </p>
            </div>

            {/* Earnings Scenarios */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900">Your Earnings Potential</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Conservative Scenario */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-600 mb-3">Conservative</h4>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">
                      {formatCurrency(results.earnings.conservative.totalEarnings)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {results.earnings.conservative.conversions} successful referrals
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">
                      {formatCurrency(results.earnings.conservative.monthlyEarnings)}/month
                    </div>
                  </div>
                </div>

                {/* Realistic Scenario */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-4 text-white shadow-lg transform scale-105">
                  <h4 className="font-semibold mb-3">Realistic Target</h4>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">
                      {formatCurrency(results.earnings.realistic.totalEarnings)}
                    </div>
                    <div className="text-sm">
                      {results.earnings.realistic.conversions} successful referrals
                    </div>
                    <div className="text-sm font-medium">
                      {formatCurrency(results.earnings.realistic.monthlyEarnings)}/month
                    </div>
                  </div>
                </div>

                {/* Optimistic Scenario */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-600 mb-3">Optimistic</h4>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">
                      {formatCurrency(results.earnings.optimistic.totalEarnings)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {results.earnings.optimistic.conversions} successful referrals
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">
                      {formatCurrency(results.earnings.optimistic.monthlyEarnings)}/month
                    </div>
                  </div>
                </div>
              </div>

              {/* Per Referral Value */}
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">You earn per successful referral:</span>
                  <span className="text-xl font-bold text-emerald-600">
                    {formatCurrency(results.earnings.realistic.perReferral)}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Based on average {formatCurrency(results.averageClaimValue)} claim value in your network
                </p>
              </div>
            </div>

            {/* Network Summary */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-semibold mb-1">Your Network Advantage:</p>
                  <ul className="space-y-1">
                    <li>• {results.interestedContacts} teammates likely interested</li>
                    <li>• {results.networkQuality.sport} athletes in {results.networkQuality.conference === 'power5' ? 'Power 5' : results.networkQuality.conference} conferences</li>
                    <li>• {formData.yearsPlayed.length} years of connections</li>
                    {results.earnings.realistic.conversions >= CONFIG.bonuses.volumeThreshold && (
                      <li className="text-blue-600 font-medium">• Eligible for volume bonuses!</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center space-y-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Become a Brand Ambassador
              </button>
              <p className="text-sm text-gray-600">
                Start earning {formatPercent(results.commissionRate)} commission on every successful referral
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  Earnings estimates are based on average claim values and conversion rates. Actual results depend on your network's 
                  engagement and claim values. Commission rates and bonuses subject to program terms.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandAmbassadorCalculator;