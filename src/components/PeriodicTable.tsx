import React, { useState } from 'react';
import { ChemicalElement, Language, PeriodicTrendKey, ElementCategory } from '../types';
import { I18N_DATA } from '../data/i18n';
import { Sparkles, Bookmark, Flame, ShieldAlert, Layers } from 'lucide-react';

interface PeriodicTableProps {
  elements: ChemicalElement[];
  onSelectElement: (el: ChemicalElement) => void;
  language: Language;
  searchQuery: string;
  selectedCategory: string;
  selectedPhase: string;
  bookmarkedIds: number[];
  onToggleBookmark: (atomicNumber: number) => void;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({
  elements,
  onSelectElement,
  language,
  searchQuery,
  selectedCategory,
  selectedPhase,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const t = I18N_DATA[language];
  const [activeTrend, setActiveTrend] = useState<PeriodicTrendKey>('none');
  const [hoveredElement, setHoveredElement] = useState<ChemicalElement | null>(null);

  // Group elements for grid layout
  // 18 columns, 7 standard periods
  // Lanthanides (57-71) & Actinides (89-103) are placed in separate rows
  const mainGridElements = elements.filter(
    (el) => !(el.atomicNumber >= 57 && el.atomicNumber <= 71) && !(el.atomicNumber >= 89 && el.atomicNumber <= 103)
  );

  const lanthanides = elements.filter((el) => el.atomicNumber >= 57 && el.atomicNumber <= 71);
  const actinides = elements.filter((el) => el.atomicNumber >= 89 && el.atomicNumber <= 103);

  // Helper to test if element matches current search/filters
  const isMatch = (el: ChemicalElement): boolean => {
    if (selectedCategory !== 'all' && el.category !== selectedCategory) return false;
    if (selectedPhase !== 'all' && el.phaseAtSTP !== selectedPhase) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      el.name.en.toLowerCase().includes(q) ||
      el.name.te.toLowerCase().includes(q) ||
      el.symbol.toLowerCase().includes(q) ||
      String(el.atomicNumber) === q ||
      String(el.atomicWeight).includes(q) ||
      (el.latinName && el.latinName.toLowerCase().includes(q)) ||
      (el.etymology && (
        el.etymology.rootWord.toLowerCase().includes(q) ||
        el.etymology.originLanguage.toLowerCase().includes(q) ||
        el.etymology.literalMeaning.en.toLowerCase().includes(q) ||
        el.etymology.literalMeaning.te.toLowerCase().includes(q) ||
        el.etymology.namingStory.en.toLowerCase().includes(q) ||
        el.etymology.namingStory.te.toLowerCase().includes(q)
      ))
    );
  };

  // Calculate trend min/max for dynamic heatmap scaling
  const getTrendColor = (el: ChemicalElement): string | null => {
    if (activeTrend === 'none') return null;

    let val: number | null = null;
    let min = 0;
    let max = 100;

    switch (activeTrend) {
      case 'atomicRadius':
        val = el.atomicRadius;
        min = 30;
        max = 270;
        break;
      case 'electronegativity':
        val = el.electronegativity;
        min = 0.7;
        max = 4.0;
        break;
      case 'ionizationEnergy':
        val = el.ionizationEnergy;
        min = 380;
        max = 2400;
        break;
      case 'atomicWeight':
        val = el.atomicWeight;
        min = 1;
        max = 294;
        break;
      case 'density':
        val = el.density;
        min = 0.08;
        max = 22.6;
        break;
      case 'meltingPoint':
        val = el.meltingPoint;
        min = 1;
        max = 3800;
        break;
      default:
        return null;
    }

    if (val === null || val === undefined) return 'bg-slate-700/40 text-slate-400';

    const normalized = Math.max(0, Math.min(1, (val - min) / (max - min)));
    // Heatmap gradient from cool cyan (low) to hot violet/amber (high)
    if (normalized < 0.2) return 'bg-sky-950/70 border-sky-600/50 text-sky-200';
    if (normalized < 0.4) return 'bg-teal-900/80 border-teal-500/60 text-teal-100';
    if (normalized < 0.6) return 'bg-emerald-800/80 border-emerald-400/70 text-emerald-100';
    if (normalized < 0.8) return 'bg-amber-700/80 border-amber-400/80 text-amber-100';
    return 'bg-rose-700/90 border-rose-400 text-white font-bold ring-1 ring-rose-400';
  };

  const getCategoryStyle = (cat: ElementCategory): string => {
    switch (cat) {
      case 'alkali-metal':
        return 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300 hover:border-red-500';
      case 'alkaline-earth-metal':
        return 'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-300 hover:border-orange-500';
      case 'transition-metal':
        return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300 hover:border-indigo-500';
      case 'post-transition-metal':
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:border-emerald-500';
      case 'metalloid':
        return 'bg-lime-500/10 border-lime-500/30 text-lime-700 dark:text-lime-300 hover:border-lime-500';
      case 'reactive-nonmetal':
        return 'bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-sky-300 hover:border-sky-500';
      case 'noble-gas':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300 hover:border-purple-500';
      case 'lanthanide':
        return 'bg-pink-500/10 border-pink-500/30 text-pink-700 dark:text-pink-300 hover:border-pink-500';
      case 'actinide':
        return 'bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-700 dark:text-fuchsia-300 hover:border-fuchsia-500';
      default:
        return 'bg-slate-500/10 border-slate-500/30 text-slate-700 dark:text-slate-300 hover:border-slate-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Interactive Controls & Heatmap Selector */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'Interactive Element Grid' : 'ఆవర్తన మూలకాల గ్రిడ్'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'en'
                ? 'Tap any tile for full atomic dossier, electron shells, experiments & voice pronunciation'
                : 'పూర్తి వివరాలు, ఎలక్ట్రాన్ కర్పరాలు మరియు ఆడియో కోసం ఏదైనా మూలకంపై క్లిక్ చేయండి'}
            </p>
          </div>
        </div>

        {/* Trend Visualizer Selector */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap">
            {t.trends.selectTrend}:
          </span>
          <select
            id="select-trend-heatmap"
            value={activeTrend}
            onChange={(e) => setActiveTrend(e.target.value as PeriodicTrendKey)}
            className="text-xs font-medium px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full lg:w-auto"
          >
            <option value="none">{language === 'en' ? 'Standard Family Colors' : 'ప్రామాణిక వర్గ రంగులు'}</option>
            <option value="atomicRadius">{t.trends.atomicRadius}</option>
            <option value="electronegativity">{t.trends.electronegativity}</option>
            <option value="ionizationEnergy">{t.trends.ionizationEnergy}</option>
            <option value="atomicWeight">{t.trends.atomicWeight}</option>
            <option value="density">{t.trends.density}</option>
            <option value="meltingPoint">{t.trends.meltingPoint}</option>
          </select>
        </div>
      </div>

      {/* Main Periodic Table Grid Container */}
      <div className="overflow-x-auto pb-6 pt-1 px-1">
        <div className="min-w-[1020px] max-w-[1280px] mx-auto space-y-4">
          
          {/* 18 Column Header Labels (1 to 18) */}
          <div className="grid grid-cols-18 gap-1.5 px-6 text-center text-[10px] font-bold text-slate-400 dark:text-slate-500">
            {Array.from({ length: 18 }, (_, i) => i + 1).map((col) => (
              <div key={`col-${col}`} className="py-0.5">
                {col}
              </div>
            ))}
          </div>

          {/* Periods 1 to 7 Grid */}
          <div className="relative">
            {/* 18 x 7 CSS Grid */}
            <div className="grid grid-cols-18 gap-1.5">
              {Array.from({ length: 7 * 18 }).map((_, index) => {
                const row = Math.floor(index / 18) + 1;
                const col = (index % 18) + 1;

                // Find element for this row and col
                const el = mainGridElements.find((e) => e.period === row && e.group === col);

                // Slot for Lanthanide indicator at (Period 6, Group 3)
                if (row === 6 && col === 3) {
                  return (
                    <div
                      key="lanthanide-placeholder"
                      className="h-17 rounded-xl border border-dashed border-pink-500/40 bg-pink-500/5 dark:bg-pink-950/20 flex flex-col items-center justify-center p-1 text-center cursor-default"
                    >
                      <span className="text-[9px] font-bold text-pink-600 dark:text-pink-400">57-71</span>
                      <span className="text-[10px] font-bold text-pink-700 dark:text-pink-300">La-Lu</span>
                      <span className="text-[8px] text-pink-500/80">Lanthanide</span>
                    </div>
                  );
                }

                // Slot for Actinide indicator at (Period 7, Group 3)
                if (row === 7 && col === 3) {
                  return (
                    <div
                      key="actinide-placeholder"
                      className="h-17 rounded-xl border border-dashed border-fuchsia-500/40 bg-fuchsia-500/5 dark:bg-fuchsia-950/20 flex flex-col items-center justify-center p-1 text-center cursor-default"
                    >
                      <span className="text-[9px] font-bold text-fuchsia-600 dark:text-fuchsia-400">89-103</span>
                      <span className="text-[10px] font-bold text-fuchsia-700 dark:text-fuchsia-300">Ac-Lr</span>
                      <span className="text-[8px] text-fuchsia-500/80">Actinide</span>
                    </div>
                  );
                }

                if (!el) {
                  return <div key={`empty-${row}-${col}`} className="h-17" />;
                }

                const matches = isMatch(el);
                const isBookmarked = bookmarkedIds.includes(el.atomicNumber);
                const trendStyle = getTrendColor(el);

                return (
                  <ElementTile
                    key={`element-${el.atomicNumber}`}
                    element={el}
                    language={language}
                    matches={matches}
                    trendStyle={trendStyle}
                    categoryStyle={getCategoryStyle(el.category)}
                    isBookmarked={isBookmarked}
                    onSelect={() => onSelectElement(el)}
                    onMouseEnter={() => setHoveredElement(el)}
                    onMouseLeave={() => setHoveredElement(null)}
                    onToggleBookmark={() => onToggleBookmark(el.atomicNumber)}
                  />
                );
              })}
            </div>
          </div>

          {/* Separator / Lanthanides & Actinides Header */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-pink-500" />
              <span>{language === 'en' ? 'f-Block Rare Earth & Inner Transition Elements' : 'f-బ్లాక్ లాంథనైడ్లు & ఆక్టినైడ్లు'}</span>
            </div>
            <span className="text-[11px] text-slate-400">Groups 3 (Periods 6 & 7)</span>
          </div>

          {/* Lanthanides Row (57-71) */}
          <div className="flex items-center gap-2">
            <div className="w-20 text-[11px] font-bold text-pink-600 dark:text-pink-400 text-right pr-2 shrink-0">
              {language === 'en' ? 'Lanthanides' : 'లాంథనైడ్లు'}
            </div>
            <div className="grid grid-cols-15 gap-1.5 flex-1">
              {lanthanides.map((el) => (
                <ElementTile
                  key={`la-${el.atomicNumber}`}
                  element={el}
                  language={language}
                  matches={isMatch(el)}
                  trendStyle={getTrendColor(el)}
                  categoryStyle={getCategoryStyle(el.category)}
                  isBookmarked={bookmarkedIds.includes(el.atomicNumber)}
                  onSelect={() => onSelectElement(el)}
                  onMouseEnter={() => setHoveredElement(el)}
                  onMouseLeave={() => setHoveredElement(null)}
                  onToggleBookmark={() => onToggleBookmark(el.atomicNumber)}
                />
              ))}
            </div>
          </div>

          {/* Actinides Row (89-103) */}
          <div className="flex items-center gap-2">
            <div className="w-20 text-[11px] font-bold text-fuchsia-600 dark:text-fuchsia-400 text-right pr-2 shrink-0">
              {language === 'en' ? 'Actinides' : 'ఆక్టినైడ్లు'}
            </div>
            <div className="grid grid-cols-15 gap-1.5 flex-1">
              {actinides.map((el) => (
                <ElementTile
                  key={`ac-${el.atomicNumber}`}
                  element={el}
                  language={language}
                  matches={isMatch(el)}
                  trendStyle={getTrendColor(el)}
                  categoryStyle={getCategoryStyle(el.category)}
                  isBookmarked={bookmarkedIds.includes(el.atomicNumber)}
                  onSelect={() => onSelectElement(el)}
                  onMouseEnter={() => setHoveredElement(el)}
                  onMouseLeave={() => setHoveredElement(null)}
                  onToggleBookmark={() => onToggleBookmark(el.atomicNumber)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Category Legend & Periodic Trends Info Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {language === 'en' ? 'Element Categories & Chemical Families' : 'మూలక వర్గాలు & రసాయన కుటుంబాలు'}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {(
            [
              ['alkali-metal', t.categories['alkali-metal'], 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-300'],
              ['alkaline-earth-metal', t.categories['alkaline-earth-metal'], 'border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-300'],
              ['transition-metal', t.categories['transition-metal'], 'border-indigo-500 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300'],
              ['post-transition-metal', t.categories['post-transition-metal'], 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'],
              ['metalloid', t.categories['metalloid'], 'border-lime-500 bg-lime-500/10 text-lime-700 dark:text-lime-300'],
              ['reactive-nonmetal', t.categories['reactive-nonmetal'], 'border-sky-500 bg-sky-500/10 text-sky-700 dark:text-sky-300'],
              ['noble-gas', t.categories['noble-gas'], 'border-purple-500 bg-purple-500/10 text-purple-700 dark:text-purple-300'],
              ['lanthanide', t.categories['lanthanide'], 'border-pink-500 bg-pink-500/10 text-pink-700 dark:text-pink-300'],
              ['actinide', t.categories['actinide'], 'border-fuchsia-500 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300'],
              ['unknown', t.categories['unknown'], 'border-slate-500 bg-slate-500/10 text-slate-700 dark:text-slate-300']
            ] as const
          ).map(([key, label, style]) => (
            <div
              key={key}
              className={`px-2.5 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-2 ${style}`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-current shrink-0" />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ElementTileProps {
  element: ChemicalElement;
  language: Language;
  matches: boolean;
  trendStyle: string | null;
  categoryStyle: string;
  isBookmarked: boolean;
  onSelect: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggleBookmark: () => void;
}

const ElementTile: React.FC<ElementTileProps> = ({
  element,
  language,
  matches,
  trendStyle,
  categoryStyle,
  isBookmarked,
  onSelect,
  onMouseEnter,
  onMouseLeave
}) => {
  const isDimmed = !matches;

  return (
    <div
      id={`element-tile-${element.atomicNumber}`}
      onClick={onSelect}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`h-17 rounded-xl p-1.5 cursor-pointer border transition-all relative flex flex-col justify-between select-none group ${
        isDimmed
          ? 'opacity-20 scale-95 border-slate-300 dark:border-slate-800'
          : trendStyle
          ? `${trendStyle} hover:scale-105 hover:z-20 hover:shadow-lg`
          : `${categoryStyle} hover:scale-105 hover:z-20 hover:shadow-md hover:bg-opacity-20`
      }`}
    >
      {/* Top row: Atomic # & State indicator */}
      <div className="flex items-center justify-between text-[10px] font-mono leading-none">
        <span className="font-bold opacity-80">{element.atomicNumber}</span>
        {isBookmarked && <Bookmark className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />}
      </div>

      {/* Center: Symbol */}
      <div className="text-center my-auto">
        <span className="text-base font-extrabold tracking-tight font-serif block leading-none group-hover:scale-110 transition-transform">
          {element.symbol}
        </span>
      </div>

      {/* Bottom: Name & Weight */}
      <div className="text-center overflow-hidden">
        <span className="text-[9px] font-medium truncate block leading-tight">
          {language === 'te' ? element.name.te.split(' ')[0] : element.name.en}
        </span>
        <span className="text-[8px] opacity-70 font-mono block leading-none truncate">
          {element.atomicWeight.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
