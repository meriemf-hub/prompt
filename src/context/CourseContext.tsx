import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { getModulesData } from '../data/modulesData';
import { getGlossaryData } from '../data/glossaryData';
import { UserProgress, Language, CourseModule, GlossaryTerm } from '../types';
import { TRANSLATIONS, UIStrings } from '../i18n/translations';

interface ToastState {
  id: number;
  message: string;
}

interface CourseContextType {
  currentView: 'module' | 'glossary' | 'certificate';
  currentModuleId: number;
  progress: UserProgress;
  isDarkMode: boolean;
  searchOpen: boolean;
  toast: ToastState | null;
  globalProgressPercentage: number;
  totalScore: { earned: number; maxPossible: number; percentage: number };
  language: Language;
  t: UIStrings;
  isRtl: boolean;
  modulesData: CourseModule[];
  glossaryData: GlossaryTerm[];
  
  // Actions
  setLanguage: (lang: Language) => void;
  setCurrentView: (view: 'module' | 'glossary' | 'certificate') => void;
  goToModule: (id: number) => void;
  goToGlossary: () => void;
  goToCertificate: () => void;
  markModuleCompleted: (moduleId: number) => void;
  saveQuizScore: (moduleId: number, score: number) => void;
  markExerciseCompleted: (exerciseId: string) => void;
  setStudentName: (name: string) => void;
  saveFinalProjectPrompt: (promptData: UserProgress['finalProjectPrompt']) => void;
  resetProgress: () => void;
  toggleDarkMode: () => void;
  setSearchOpen: (open: boolean) => void;
  showToast: (message: string) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

const STORAGE_KEY = 'prompt_engineering_course_progress_v1';
const THEME_KEY = 'prompt_engineering_theme';
const LANG_KEY = 'prompt_engineering_lang';

const defaultProgress: UserProgress = {
  completedModules: [],
  quizScores: {},
  quizCompleted: {},
  exerciseCompleted: {},
  studentName: '',
};

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<'module' | 'glossary' | 'certificate'>('module');
  const [currentModuleId, setCurrentModuleId] = useState<number>(1);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  // Language state
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'fr' || saved === 'en' || saved === 'ar') return saved;
      const navLang = navigator.language.slice(0, 2);
      if (navLang === 'ar') return 'ar';
      if (navLang === 'en') return 'en';
      return 'fr';
    } catch {
      return 'fr';
    }
  });

  const isRtl = language === 'ar';
  const t = TRANSLATIONS[language];
  const modulesData = useMemo(() => getModulesData(language), [language]);
  const glossaryData = useMemo(() => getGlossaryData(language), [language]);

  // Sync language attribute and direction on <html>
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(LANG_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    showToast(newLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : newLang === 'en' ? 'Language switched to English' : 'Langue changée en Français');
  };

  // Theme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved !== null) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // User progress
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return defaultProgress;
  });

  // Sync theme to <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
    }
  }, [isDarkMode]);

  // Sync progress to storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save course progress to localStorage', e);
    }
  }, [progress]);

  const showToast = (message: string) => {
    const id = Date.now();
    setToast({ id, message });
    setTimeout(() => {
      setToast(prev => (prev?.id === id ? null : prev));
    }, 2800);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const goToModule = (id: number) => {
    setCurrentModuleId(id);
    setCurrentView('module');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToGlossary = () => {
    setCurrentView('glossary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToCertificate = () => {
    setCurrentView('certificate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markModuleCompleted = (moduleId: number) => {
    setProgress(prev => {
      if (prev.completedModules.includes(moduleId)) return prev;
      showToast(`${t.toastModuleCompleted} (${moduleId})`);
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId]
      };
    });
  };

  const saveQuizScore = (moduleId: number, score: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [moduleId]: score
      },
      quizCompleted: {
        ...prev.quizCompleted,
        [moduleId]: true
      }
    }));
  };

  const markExerciseCompleted = (exerciseId: string) => {
    setProgress(prev => ({
      ...prev,
      exerciseCompleted: {
        ...prev.exerciseCompleted,
        [exerciseId]: true
      }
    }));
    showToast(t.toastExerciseCompleted);
  };

  const setStudentName = (name: string) => {
    setProgress(prev => ({ ...prev, studentName: name }));
  };

  const saveFinalProjectPrompt = (promptData: UserProgress['finalProjectPrompt']) => {
    setProgress(prev => ({
      ...prev,
      finalProjectPrompt: promptData
    }));
    markModuleCompleted(8);
  };

  const resetProgress = () => {
    if (window.confirm(t.resetConfirm)) {
      setProgress(defaultProgress);
      setCurrentModuleId(1);
      setCurrentView('module');
      showToast(t.resetProgress);
    }
  };

  const globalProgressPercentage = useMemo(() => {
    const totalModules = modulesData.length;
    const completedCount = progress.completedModules.length;
    return Math.round((completedCount / totalModules) * 100);
  }, [progress.completedModules, modulesData.length]);

  const totalScore = useMemo(() => {
    let earned = 0;
    let maxPossible = 0;

    modulesData.forEach(mod => {
      const qCount = mod.quiz.length;
      maxPossible += qCount;
      if (progress.quizScores[mod.id] !== undefined) {
        earned += progress.quizScores[mod.id];
      }
    });

    const percentage = maxPossible > 0 ? Math.round((earned / maxPossible) * 100) : 0;
    return { earned, maxPossible, percentage };
  }, [progress.quizScores, modulesData]);

  return (
    <CourseContext.Provider
      value={{
        currentView,
        currentModuleId,
        progress,
        isDarkMode,
        searchOpen,
        toast,
        globalProgressPercentage,
        totalScore,
        language,
        t,
        isRtl,
        modulesData,
        glossaryData,
        setLanguage,
        setCurrentView,
        goToModule,
        goToGlossary,
        goToCertificate,
        markModuleCompleted,
        saveQuizScore,
        markExerciseCompleted,
        setStudentName,
        saveFinalProjectPrompt,
        resetProgress,
        toggleDarkMode,
        setSearchOpen,
        showToast,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
