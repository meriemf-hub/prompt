import React, { useState, useRef, useEffect } from 'react';
import { useCourse } from '../context/CourseContext';
import { Language } from '../types';
import {
  Sparkles,
  Search,
  Moon,
  Sun,
  BookOpen,
  Menu,
  X,
  Download,
  Trophy,
  Globe,
  Check
} from 'lucide-react';
import { generateSingleHtmlCourse } from '../utils/generateSingleHtml';

interface Props {
  onToggleMobileSidebar: () => void;
  isMobileSidebarOpen: boolean;
}

const LANGUAGES: { code: Language; label: string; short: string; flag: string }[] = [
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', short: 'عربي', flag: '🇸🇦' }
];

export const Header: React.FC<Props> = ({ onToggleMobileSidebar, isMobileSidebarOpen }) => {
  const {
    isDarkMode,
    toggleDarkMode,
    setSearchOpen,
    globalProgressPercentage,
    goToGlossary,
    goToCertificate,
    currentView,
    progress,
    showToast,
    language,
    setLanguage,
    t
  } = useCourse();

  const [downloading, setDownloading] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownloadSingleFile = () => {
    setDownloading(true);
    try {
      const htmlContent = generateSingleHtmlCourse(progress.studentName || 'Student', language);
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Prompt_Engineering_Course_${language.toUpperCase()}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast(t.toastSingleHtmlDownloaded);
    } catch (e) {
      console.error(e);
      showToast('Error during download.');
    } finally {
      setDownloading(false);
    }
  };

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger & Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Menu"
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight block leading-tight">
                {t.appTitle}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-none">
                {t.appSubtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Global Progress bar */}
        <div className="hidden md:flex items-center gap-3 min-w-44 max-w-xs flex-1">
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${globalProgressPercentage}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap">
            {globalProgressPercentage}% {t.completed}
          </span>
        </div>

        {/* Right action controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title={`${t.search} (Ctrl+K)`}
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">{t.search}</span>
            <kbd className="hidden lg:inline-block text-[10px] font-mono text-slate-400 px-1 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Standalone HTML Export */}
          <button
            onClick={handleDownloadSingleFile}
            disabled={downloading}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            title={t.singleHtmlTooltip}
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden xl:inline">{t.singleHtml}</span>
          </button>

          {/* Glossary link */}
          <button
            onClick={goToGlossary}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
              currentView === 'glossary'
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.glossary}</span>
          </button>

          {/* Results link */}
          <button
            onClick={goToCertificate}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
              currentView === 'certificate'
                ? 'bg-indigo-600 text-white font-semibold'
                : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.certificate}</span>
          </button>

          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
              title="Changer de langue / Change language / تغيير اللغة"
              aria-label="Language selector"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-500" />
              <span>{currentLangObj.flag}</span>
              <span className="hidden sm:inline text-xs font-bold">{currentLangObj.short}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                {LANGUAGES.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors ${
                      language === item.code
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.flag}</span>
                      <span>{item.label}</span>
                    </div>
                    {language === item.code && <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark/Light Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};
