import React, { useState, useEffect, useRef } from 'react';
import { useCourse } from '../context/CourseContext';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';

export const SearchBarModal: React.FC = () => {
  const { searchOpen, setSearchOpen, goToModule, goToGlossary, modulesData, glossaryData, t, isRtl } = useCourse();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [searchOpen]);

  // Handle Escape key & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, setSearchOpen]);

  if (!searchOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Search in current language modules
  const matchingModules = cleanQuery
    ? modulesData.filter(m =>
        m.title.toLowerCase().includes(cleanQuery) ||
        m.subtitle.toLowerCase().includes(cleanQuery) ||
        m.theorySections.some(s => s.title.toLowerCase().includes(cleanQuery) || s.content.toLowerCase().includes(cleanQuery)) ||
        m.summaryPoints.some(p => p.toLowerCase().includes(cleanQuery))
      )
    : [];

  // Search in current language glossary
  const matchingGlossary = cleanQuery
    ? glossaryData.filter(g =>
        g.term.toLowerCase().includes(cleanQuery) ||
        g.shortDef.toLowerCase().includes(cleanQuery) ||
        g.detailedDef.toLowerCase().includes(cleanQuery)
      )
    : [];

  const handleSelectModule = (id: number) => {
    goToModule(id);
    setSearchOpen(false);
  };

  const handleSelectGlossary = () => {
    goToGlossary();
    setSearchOpen(false);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ltr:mr-3 rtl:ml-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-[11px] font-mono text-slate-400 px-1.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
              {t.esc}
            </span>
          )}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!cleanQuery && (
            <div className="text-center py-8 text-slate-500 text-xs sm:text-sm">
              {t.searchHint}
            </div>
          )}

          {cleanQuery && matchingModules.length === 0 && matchingGlossary.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              {t.noResults} « <span className="font-semibold">{query}</span> ».
            </div>
          )}

          {/* Modules Results */}
          {matchingModules.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-2">
                {t.modulesFound} ({matchingModules.length})
              </span>
              {matchingModules.map(m => (
                <button
                  key={m.id}
                  onClick={() => handleSelectModule(m.id)}
                  className="w-full text-left rtl:text-right p-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-slate-800/80 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">
                      {m.id}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {m.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              ))}
            </div>
          )}

          {/* Glossary Results */}
          {matchingGlossary.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-2 pt-2">
                {t.glossaryFound} ({matchingGlossary.length})
              </span>
              {matchingGlossary.map(g => (
                <button
                  key={g.id}
                  onClick={handleSelectGlossary}
                  className="w-full text-left rtl:text-right p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {g.term}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-500">
                          {g.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {g.shortDef}
                      </p>
                    </div>
                  </div>
                  <CornerDownLeft className={`w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>{isRtl ? 'استخدم الأسهم للتنقل و ESC للخروج' : 'Use arrow keys to navigate and ESC to exit'}</span>
          <button
            onClick={() => setSearchOpen(false)}
            className="hover:text-slate-600 dark:hover:text-slate-200"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
