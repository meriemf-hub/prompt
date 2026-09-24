import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import { BookOpen, Search, Rotate3D, Lightbulb } from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const { glossaryData, t } = useCourse();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const categories = [
    { key: 'all', label: t.allCategories },
    { key: 'Fondations', label: 'Fondations / Foundations / المفاهيم' },
    { key: 'Techniques', label: 'Techniques / Techniques / التقنيات' },
    { key: 'Mécanismes', label: 'Mécanismes / Mechanics / الآليات' },
    { key: 'Qualité & Éthique', label: 'Qualité & Éthique / Quality & Ethics / الجودة والأخلاقيات' }
  ];

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredTerms = glossaryData.filter(term => {
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    const matchesSearch =
      term.term.toLowerCase().includes(search.toLowerCase()) ||
      term.shortDef.toLowerCase().includes(search.toLowerCase()) ||
      term.detailedDef.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 text-xs font-semibold">
          <BookOpen className="w-4 h-4" />
          {t.glossary}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t.glossaryTitle}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          {t.glossarySubtitle}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchGlossary}
            className="w-full pl-9.5 rtl:pl-4 rtl:pr-9.5 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Categories selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === cat.key
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Flip Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTerms.map(term => {
          const isFlipped = flippedCards[term.id] || false;

          return (
            <div
              key={term.id}
              className="h-84 perspective-1000 cursor-pointer select-none group"
              onClick={() => toggleFlip(term.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 w-full h-full rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between backface-hidden group-hover:border-indigo-300 dark:group-hover:border-indigo-800 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
                        {term.category}
                      </span>
                      <Rotate3D className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {term.term}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {term.shortDef}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    <span>{t.flipInstruction}</span>
                    <span className="text-slate-400">↻</span>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 w-full h-full rounded-2xl p-6 bg-gradient-to-b from-indigo-950 to-slate-900 text-white border border-indigo-800 shadow-md flex flex-col justify-between rotate-y-180 backface-hidden">
                  <div className="space-y-3.5 overflow-y-auto pr-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                        {term.term}
                      </span>
                      <Rotate3D className="w-4 h-4 text-indigo-400" />
                    </div>

                    {/* Analogy */}
                    <div className="flex items-start gap-2.5 text-xs text-amber-200 bg-amber-500/15 p-2.5 rounded-lg border border-amber-500/20">
                      <Lightbulb className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-amber-300 mb-0.5">{t.realLifeAnalogy} :</strong>
                        {term.analogy}
                      </div>
                    </div>

                    {/* Detailed def */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {term.detailedDef}
                    </p>

                    {/* Example */}
                    <div className="text-xs text-emerald-200 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20 font-mono">
                      <strong className="block text-emerald-400 font-sans mb-1">Exemple :</strong>
                      {term.example}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-center text-xs text-indigo-300 font-medium">
                    {t.flipBackInstruction}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {t.noResults} « {search} ».
          </p>
        </div>
      )}
    </div>
  );
};
