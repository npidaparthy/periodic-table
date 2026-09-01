import React, { useState } from 'react';
import { ChemicalElement, Language, PeriodicTrendKey } from '../types';
import { I18N_DATA } from '../data/i18n';
import { TrendingUp, BarChart2, Zap, Compass, Info, ArrowRight } from 'lucide-react';

interface TrendsVisualizerProps {
  elements: ChemicalElement[];
  language: Language;
  onSelectElement: (el: ChemicalElement) => void;
}

export const TrendsVisualizer: React.FC<TrendsVisualizerProps> = ({
  elements,
  language,
  onSelectElement
}) => {
  const t = I18N_DATA[language];
  const [selectedProperty, setSelectedProperty] = useState<PeriodicTrendKey>('atomicRadius');
  const [selectedPeriod, setSelectedPeriod] = useState<number>(3); // Default to Period 3 (Na to Ar)
  const [selectedGroup, setSelectedGroup] = useState<number>(1); // Default to Group 1 (Alkali metals)
  const [viewMode, setViewMode] = useState<'period' | 'group'>('period');

  // Filter elements for active view
  const currentSet = (
    viewMode === 'period'
      ? elements.filter((e) => e.period === selectedPeriod && e.group !== null)
      : elements.filter((e) => e.group === selectedGroup)
  ).sort((a, b) => (viewMode === 'period' ? (a.group || 0) - (b.group || 0) : a.period - b.period));

  const getMetricValue = (el: ChemicalElement): number => {
    switch (selectedProperty) {
      case 'atomicRadius':
        return el.atomicRadius || 0;
      case 'electronegativity':
        return el.electronegativity || 0;
      case 'ionizationEnergy':
        return el.ionizationEnergy || 0;
      case 'density':
        return el.density || 0;
      case 'meltingPoint':
        return el.meltingPoint || 0;
      case 'atomicWeight':
      default:
        return el.atomicWeight || 0;
    }
  };

  const getUnit = (): string => {
    switch (selectedProperty) {
      case 'atomicRadius':
        return 'pm';
      case 'electronegativity':
        return 'Pauling';
      case 'ionizationEnergy':
        return 'kJ/mol';
      case 'density':
        return 'g/cm³';
      case 'meltingPoint':
        return 'K';
      case 'atomicWeight':
      default:
        return 'u';
    }
  };

  const maxVal = Math.max(...currentSet.map(getMetricValue), 1);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20 shadow-xs">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.trends.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {t.trends.subtitle}
              </p>
            </div>
          </div>

          {/* Property Selector */}
          <div className="flex items-center gap-2">
            <select
              id="select-trend-property"
              value={selectedProperty}
              onChange={(e) => setSelectedProperty(e.target.value as PeriodicTrendKey)}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="atomicRadius">{t.trends.atomicRadius}</option>
              <option value="electronegativity">{t.trends.electronegativity}</option>
              <option value="ionizationEnergy">{t.trends.ionizationEnergy}</option>
              <option value="atomicWeight">{t.trends.atomicWeight}</option>
              <option value="density">{t.trends.density}</option>
              <option value="meltingPoint">{t.trends.meltingPoint}</option>
            </select>
          </div>
        </div>

        {/* View Mode Controls (By Period vs By Group) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('period')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'period'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {language === 'en' ? 'Compare Across Period (Horizontal Row)' : 'పీరియడ్ వారీగా విశ్లేషణ'}
            </button>
            <button
              onClick={() => setViewMode('group')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'group'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {language === 'en' ? 'Compare Down Group (Vertical Column)' : 'గ్రూప్ వారీగా విశ్లేషణ'}
            </button>
          </div>

          {/* Period/Group number picker */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500">
              {viewMode === 'period' ? (language === 'en' ? 'Select Period:' : 'పీరియడ్:') : (language === 'en' ? 'Select Group:' : 'గ్రూప్:')}
            </span>
            {viewMode === 'period' ? (
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((p) => (
                  <button
                    key={`p-btn-${p}`}
                    onClick={() => setSelectedPeriod(p)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                      selectedPeriod === p
                        ? 'bg-cyan-500 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            ) : (
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(Number(e.target.value))}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {Array.from({ length: 18 }, (_, i) => i + 1).map((g) => (
                  <option key={`g-opt-${g}`} value={g}>
                    Group {g}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Bar Chart Visualizer */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-cyan-500" />
            <span>
              {viewMode === 'period'
                ? `Period ${selectedPeriod} Comparative Progression`
                : `Group ${selectedGroup} Family Progression`}
            </span>
          </h3>
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
            Unit: {getUnit()}
          </span>
        </div>

        {/* Custom Responsive SVG / CSS Bar Chart */}
        <div className="space-y-3 pt-3">
          {currentSet.map((el) => {
            const val = getMetricValue(el);
            const pct = maxVal > 0 ? Math.max(6, (val / maxVal) * 100) : 6;

            return (
              <div 
                key={`trend-bar-${el.atomicNumber}`}
                onClick={() => onSelectElement(el)}
                className="group cursor-pointer p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-all flex items-center gap-3"
              >
                {/* Element Badge */}
                <div className="w-12 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <span className="text-[9px] font-mono text-slate-400 font-bold">{el.atomicNumber}</span>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">{el.symbol}</span>
                </div>

                {/* Element Name */}
                <div className="w-28 shrink-0">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
                    {language === 'te' ? el.name.te.split(' ')[0] : el.name.en}
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {t.categories[el.category]}
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="flex-1 h-6 bg-slate-200/80 dark:bg-slate-800 rounded-xl overflow-hidden relative p-0.5">
                  <div 
                    className="h-full rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-end px-2 text-white font-mono text-[10px] font-bold shadow-xs transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  >
                    {val > 0 && `${val} ${getUnit()}`}
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-500 transition-colors shrink-0" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Scientific Principles Educational Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-3xl bg-sky-500/5 dark:bg-sky-950/20 border border-sky-500/20 space-y-2">
          <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300 font-bold text-sm">
            <Info className="w-4 h-4" />
            <span>{language === 'en' ? 'Atomic Radius Trend' : 'పరమాణు వ్యాసార్థం నియమం'}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.trends.atomicRadiusDesc}
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-indigo-500/5 dark:bg-indigo-950/20 border border-indigo-500/20 space-y-2">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm">
            <Zap className="w-4 h-4" />
            <span>{language === 'en' ? 'Electronegativity Trend' : 'విద్యుత్ రుణాత్మకత నియమం'}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.trends.electronegativityDesc}
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-sm">
            <Compass className="w-4 h-4" />
            <span>{language === 'en' ? 'Ionization Energy Trend' : 'అయనీకరణ శక్తి నియమం'}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.trends.ionizationEnergyDesc}
          </p>
        </div>
      </div>
    </div>
  );
};
