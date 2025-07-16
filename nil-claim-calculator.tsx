import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, AlertCircle, Trophy } from 'lucide-react';

const NILClaimCalculator = () => {
  // Configurable base values - calibrated to match real data
  // Michigan player: 4 years, 1 year starter = $150k total
  const CONFIG = {
    // Base annual payouts by sport/conference/year
    // Power 5 Football gets highest payouts (75% of settlement pool)
    basePayouts: {
      'football-power5': {
        2016: 15000,
        2017: 16000,
        2018: 17000,
        2019: 18000,
        2020: 19000,
        2021: 20000,
        2022: 21000,
        2023: 22000,
        2024: 23000
      },
      'mensBasketball-power5': {
        2016: 12000,
        2017: 13000,
        2018: 14000,
        2019: 15000,
        2020: 16000,
        2021: 17000,
        2022: 18000,
        2023: 19000,
        2024: 20000
      },
      'womensBasketball-power5': {
        2016: 8000,
        2017: 8500,
        2018: 9000,
        2019: 9500,
        2020: 10000,
        2021: 10500,
        2022: 11000,
        2023: 11500,
        2024: 12000
      },
      // Other sports get approximately 5% of the pool
      'otherSports-power5': {
        2016: 1500,
        2017: 1600,
        2018: 1700,
        2019: 1800,
        2020: 1900,
        2021: 2000,
        2022: 2100,
        2023: 2200,
        2024: 2300
      }
    },
    // Conference multipliers - Power 5 gets full value
    conferenceMultipliers: {
      'power5': 1.0,      // SEC, Big Ten, ACC, Big 12, Pac-12
      'group5': 0.4,      // AAC, C-USA, MAC, MWC, Sun Belt
      'fcs': 0.2,         // FCS conferences
      'other': 0.15       // Other Division 1
    },
    // Performance multipliers - calibrated to real data
    performanceMultipliers: {
      'allConference': 2.0,      // All-Conference/All-American
      'multiYearStarter': 1.8,   // Started 2+ years
      'starter': 1.6,            // Single year starter
      'significant': 1.25,       // Regular playing time
      'roster': 1.0,             // Base roster player
      'limited': 0.8             // Limited playing time
    },
    // Position multipliers for football only
    footballPositionMultipliers: {
      'qb': 1.4,          // Quarterback - highest NIL value
      'rb': 1.25,         // Running back
      'wr': 1.25,         // Wide receiver  
      'olb': 1.15,        // Outside linebacker
      'de': 1.15,         // Defensive end
      'cb': 1.1,          // Cornerback
      'te': 1.05,         // Tight end
      'other': 1.0        // All other positions
    },
    // Program prestige multipliers (top programs get more)
    programPrestigeMultipliers: {
      'elite': 1.2,    // Alabama, Michigan, Ohio State, etc.
      'top25': 1.1,    // Consistently ranked programs
      'average': 1.0,  // Standard Power 5
      'lower': 0.9     // Lower tier Power 5
    }
  };

  const [formData, setFormData] = useState({
    sport: '',
    conference: '',
    yearsPlayed: [] as number[],
    performanceLevel: '',
    footballPosition: '',
    programPrestige: '',
    receivedAid: 'yes',
    nilEarnings: 0
  });

  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<any>(null);

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
    { value: 'allConference', label: 'All-Conference / All-American' },
    { value: 'multiYearStarter', label: 'Multi-Year Starter (2+ years)' },
    { value: 'starter', label: 'Single Year Starter' },
    { value: 'significant', label: 'Significant Playing Time' },
    { value: 'roster', label: 'Roster Player' },
    { value: 'limited', label: 'Limited Playing Time' }
  ];

  const programPrestigeLevels = [
    { value: 'elite', label: 'Elite Program (Alabama, Michigan, Ohio State, etc.)' },
    { value: 'top25', label: 'Top 25 Program' },
    { value: 'average', label: 'Average Power 5 Program' },
    { value: 'lower', label: 'Lower Tier Program' }
  ];

  const footballPositions = [
    { value: 'qb', label: 'Quarterback (QB)' },
    { value: 'rb', label: 'Running Back (RB)' },
    { value: 'wr', label: 'Wide Receiver (WR)' },
    { value: 'te', label: 'Tight End (TE)' },
    { value: 'olb', label: 'Outside Linebacker (OLB)' },
    { value: 'de', label: 'Defensive End (DE)' },
    { value: 'cb', label: 'Cornerback (CB)' },
    { value: 'other', label: 'Other Position' }
  ];

  const handleYearToggle = (year: number) => {
    setFormData(prev => ({
      ...prev,
      yearsPlayed: prev.yearsPlayed.includes(year)
        ? prev.yearsPlayed.filter(y => y !== year)
        : [...prev.yearsPlayed, year]
    }));
  };

  const calculateClaim = () => {
    if (!formData.sport || !formData.conference || formData.yearsPlayed.length === 0 || 
        !formData.performanceLevel || !formData.programPrestige) {
      return;
    }

    // Check if football player needs position
    if (formData.sport === 'football-power5' && !formData.footballPosition) {
      return;
    }

    // If no athletics aid, claim is $0
    if (formData.receivedAid === 'no') {
      setEstimatedValue(0);
      setBreakdown({
        yearlyBreakdown: [],
        totalBase: 0,
        nilComponent: 0,
        annualPayment: 0,
        totalEstimate: 0,
        noAidMessage: true
      });
      return;
    }

    let totalBase = 0;
    const yearlyBreakdown: any[] = [];

    // Calculate base payout for each year
    formData.yearsPlayed.forEach(year => {
      const basePayout = CONFIG.basePayouts[formData.sport as keyof typeof CONFIG.basePayouts][year as keyof (typeof CONFIG.basePayouts)[keyof typeof CONFIG.basePayouts]] || 0;
      const conferenceMultiplier = CONFIG.conferenceMultipliers[formData.conference as keyof typeof CONFIG.conferenceMultipliers];
      const performanceMultiplier = CONFIG.performanceMultipliers[formData.performanceLevel as keyof typeof CONFIG.performanceMultipliers];
      const prestigeMultiplier = CONFIG.programPrestigeMultipliers[formData.programPrestige as keyof typeof CONFIG.programPrestigeMultipliers];
      
      // Apply position multiplier only for football
      const positionMultiplier = formData.sport === 'football-power5' && formData.footballPosition
        ? CONFIG.footballPositionMultipliers[formData.footballPosition as keyof typeof CONFIG.footballPositionMultipliers]
        : 1.0;
      
      const yearPayout = basePayout * conferenceMultiplier * performanceMultiplier * prestigeMultiplier * positionMultiplier;
      totalBase += yearPayout;
      
      yearlyBreakdown.push({
        year,
        amount: yearPayout
      });
    });

    // Add potential NIL earnings component (minimal impact)
    const nilComponent = formData.nilEarnings > 0 ? formData.nilEarnings * 0.05 : 0;
    const totalEstimate = totalBase + nilComponent;

    // Calculate 10-year payment structure
    const annualPayment = totalEstimate / 10;

    setBreakdown({
      yearlyBreakdown,
      totalBase,
      nilComponent,
      annualPayment,
      totalEstimate,
      noAidMessage: false
    });
    setEstimatedValue(totalEstimate);
  };

  useEffect(() => {
    calculateClaim();
  }, [formData]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl">
      <div className="bg-white rounded-xl p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-600 rounded-lg">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">NIL Settlement Claim Calculator</h2>
            <p className="text-gray-600 mt-1">Estimate your potential payout from the $2.8B House vs NCAA settlement</p>
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
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
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
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select your conference</option>
              {conferences.map(conf => (
                <option key={conf.value} value={conf.value}>{conf.label}</option>
              ))}
            </select>
          </div>

          {/* Program Prestige */}
          {formData.conference === 'power5' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What was your program's prestige level?
              </label>
              <select
                value={formData.programPrestige}
                onChange={(e) => setFormData({...formData, programPrestige: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select program level</option>
                {programPrestigeLevels.map(level => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
            </div>
          )}

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
                      ? 'bg-blue-600 text-white shadow-md'
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
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select performance level</option>
              {performanceLevels.map(level => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
          </div>

          {/* Football Position - Only show for football players */}
          {formData.sport === 'football-power5' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What position did you play?
              </label>
              <select
                value={formData.footballPosition}
                onChange={(e) => setFormData({...formData, footballPosition: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select your position</option>
                {footballPositions.map(pos => (
                  <option key={pos.value} value={pos.value}>{pos.label}</option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mt-1">
                High-profile positions typically have higher NIL value
              </p>
            </div>
          )}

          {/* Athletics Aid */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Did you receive athletics aid (scholarship)?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="receivedAid"
                  value="yes"
                  checked={formData.receivedAid === 'yes'}
                  onChange={(e) => setFormData({...formData, receivedAid: e.target.value})}
                  className="mr-2"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="receivedAid"
                  value="no"
                  checked={formData.receivedAid === 'no'}
                  onChange={(e) => setFormData({...formData, receivedAid: e.target.value})}
                  className="mr-2"
                />
                <span>No (Walk-on)</span>
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Must have received athletics aid to be eligible for the main settlement pool
            </p>
          </div>

          {/* NIL Earnings (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Post-July 2021 NIL Earnings (Optional)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="number"
                value={formData.nilEarnings}
                onChange={(e) => setFormData({...formData, nilEarnings: parseInt(e.target.value) || 0})}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="0"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Third-party NIL earnings may slightly increase your claim
            </p>
          </div>
        </div>

        {/* Results */}
        {estimatedValue !== null && breakdown && (
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
            {breakdown.noAidMessage ? (
              <div className="text-center py-4">
                <div className="text-3xl font-bold text-gray-600 mb-4">
                  Not Eligible for Main Settlement Pool
                </div>
                <p className="text-gray-600">
                  Athletes who did not receive athletics aid (walk-ons) are generally not eligible 
                  for the main settlement pool, though some may qualify for smaller NIL-related claims.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Your Estimated Claim Value</h3>
                </div>
                
                <div className="text-center py-4">
                  <div className="text-5xl font-bold text-blue-600">
                    {formatCurrency(estimatedValue)}
                  </div>
                  <p className="text-gray-600 mt-2">Total estimated settlement value</p>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-700">Annual Payment (10 equal payments)</span>
                    <span className="font-semibold text-lg">{formatCurrency(breakdown.annualPayment)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-700">Years Competed</span>
                    <span className="font-semibold">{formData.yearsPlayed.length} years</span>
                  </div>

                  {breakdown.nilComponent > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="text-gray-700">NIL Component</span>
                      <span className="font-semibold">{formatCurrency(breakdown.nilComponent)}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      This is an estimate based on available settlement information. Actual payouts depend on total claims filed 
                      and final distribution calculations. Settlement payments will be distributed in equal annual amounts over 10 years.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Ready to Sell Your Claim?
          </button>
          <p className="text-sm text-gray-600 mt-3">
            Get your money upfront instead of waiting for 10 equal annual payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default NILClaimCalculator;