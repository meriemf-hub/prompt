import React from 'react';
import { useCourse } from '../context/CourseContext';
import {
  CheckCircle2,
  BookOpen,
  Award,
  Trophy,
  Sparkles,
  Layers,
  Crosshair,
  CopyCheck,
  GitBranch,
  RefreshCw,
  ShieldAlert,
  GraduationCap,
  RotateCcw
} from 'lucide-react';

interface Props {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<Props> = ({ isMobileOpen, onCloseMobile }) => {
  const {
    currentModuleId,
    currentView,
    goToModule,
    goToGlossary,
    goToCertificate,
    progress,
    resetProgress,
    modulesData,
    t
  } = useCourse();

  const handleSelectModule = (id: number) => {
    goToModule(id);
    onCloseMobile();
  };

  const handleSelectGlossary = () => {
    goToGlossary();
    onCloseMobile();
  };

  const handleSelectCertificate = () => {
    goToCertificate();
    onCloseMobile();
  };

  const content = (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 border-r rtl:border-r-0 rtl:border-l border-slate-200 dark:border-slate-800">
      {/* Course curriculum label */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            {t.curriculum}
          </span>
          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
            {t.hours}
          </span>
        </div>
        <div className="text-right rtl:text-left">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
            {progress.completedModules.length} / 8
          </span>
          <span className="text-[10px] text-slate-400 block">{t.completed}</span>
        </div>
      </div>

      {/* Module list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {modulesData.map((module) => {
          const isActive = currentView === 'module' && currentModuleId === module.id;
          const isCompleted = progress.completedModules.includes(module.id);
          const quizScore = progress.quizScores[module.id];
          const hasQuiz = quizScore !== undefined;

          return (
            <button
              key={module.id}
              onClick={() => handleSelectModule(module.id)}
              className={`w-full text-left rtl:text-right p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 group ${
                isActive
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {/* Status icon */}
              <div className="mt-0.5 shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      isActive
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'border-slate-300 dark:border-slate-700 text-slate-400'
                    }`}
                  >
                    {module.id}
                  </div>
                )}
              </div>

              {/* Title & info */}
              <div className="flex-1 min-w-0">
                <div className="truncate font-medium">
                  {module.title}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                  <span>{module.estimatedMinutes} {t.minutes}</span>
                  {hasQuiz && (
                    <>
                      <span>·</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        Quiz : {quizScore}/{module.quiz.length}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </button>
          );
        })}

        {/* Separator */}
        <div className="pt-3 pb-1 px-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {t.resources}
          </span>
        </div>

        {/* Glossary nav */}
        <button
          onClick={handleSelectGlossary}
          className={`w-full text-left rtl:text-right p-2.5 rounded-xl text-xs transition-all flex items-center gap-2.5 ${
            currentView === 'glossary'
              ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
          <div className="flex-1">
            <span className="block font-medium">{t.glossary}</span>
            <span className="text-[10px] text-slate-400">16 3D Cards</span>
          </div>
        </button>

        {/* Results nav */}
        <button
          onClick={handleSelectCertificate}
          className={`w-full text-left rtl:text-right p-2.5 rounded-xl text-xs transition-all flex items-center gap-2.5 ${
            currentView === 'certificate'
              ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
          }`}
        >
          <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
          <div className="flex-1">
            <span className="block font-medium">{t.certificate}</span>
            <span className="text-[10px] text-slate-400">
              {progress.completedModules.length === 8 ? t.validated : '8/8 Modules'}
            </span>
          </div>
        </button>
      </div>

      {/* Footer: Reset progress option */}
      <div className="p-3 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={resetProgress}
          className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 text-[11px] text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{t.resetProgress}</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 h-[calc(100vh-4rem)] sticky top-16">
        {content}
      </aside>

      {/* Mobile drawer overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative w-80 max-w-[85vw] h-full shadow-2xl z-10">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
