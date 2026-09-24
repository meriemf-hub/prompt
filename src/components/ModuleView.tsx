import React from 'react';
import { CourseModule } from '../types';
import { useCourse } from '../context/CourseContext';
import { PromptComparator } from './PromptComparator';
import { InteractiveExerciseBox } from './InteractiveExerciseBox';
import { ModuleQuiz } from './ModuleQuiz';
import { FinalProjectBuilder } from './FinalProjectBuilder';
import {
  Lightbulb,
  CheckCircle,
  Target,
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface Props {
  module: CourseModule;
}

export const ModuleView: React.FC<Props> = ({ module }) => {
  const {
    goToModule,
    markModuleCompleted,
    progress,
    goToCertificate,
    showToast,
    t,
    isRtl
  } = useCourse();

  const isCompleted = progress.completedModules.includes(module.id);
  const isFinalModule = module.id === 8;

  const handleValidateAndNext = () => {
    markModuleCompleted(module.id);
    if (module.id < 8) {
      goToModule(module.id + 1);
    } else {
      goToCertificate();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 animate-in fade-in duration-200">
      {/* Module Title Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
            {t.curriculum} · {module.id} / 8
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {module.estimatedMinutes} {t.minutes}
          </span>
          {isCompleted && (
            <>
              <span>·</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> {t.validated}
              </span>
            </>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {module.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {module.subtitle}
        </p>
      </div>

      {/* Learning Objectives Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2.5 mb-4 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">
          <Target className="w-4 h-4 text-indigo-600" />
          <span>{t.objectives}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {module.objectives.map((obj, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{obj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Life Analogy Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/10 border border-amber-200 dark:border-amber-900/60 shadow-xs space-y-3">
        <div className="flex items-center gap-2.5 text-amber-800 dark:text-amber-400 font-bold text-sm">
          <Lightbulb className="w-5 h-5 text-amber-500 shrink-0" />
          <span>{t.realLifeAnalogy} : {module.analogy.title}</span>
        </div>
        <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic">
          « {module.analogy.story} »
        </p>
        <div className="pt-2 border-t border-amber-200/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 font-medium">
          <strong>{t.keyLesson} </strong>
          {module.analogy.lesson}
        </div>
      </div>

      {/* Theory Sections */}
      <div className="space-y-6">
        {module.theorySections.map((sec, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {sec.title}
            </h3>
            <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-2">
              {sec.content}
            </div>

            {sec.keyTakeaway && (
              <div className="mt-4 p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 font-medium flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">{t.goldenRule}</strong>
                  {sec.keyTakeaway}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comparisons (Mauvais prompt vs Bon prompt) */}
      {module.comparisons.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.comparisonsTitle}
            </h3>
          </div>
          {module.comparisons.map((comp) => (
            <PromptComparator key={comp.id} comparison={comp} />
          ))}
        </div>
      )}

      {/* Practical Exercise Box */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {t.practiceLab}
          </h3>
        </div>
        <InteractiveExerciseBox exercise={module.exercise} />
      </div>

      {/* Special Module 8: Full Interactive Project Builder Workbench */}
      {isFinalModule && (
        <div className="space-y-4 pt-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {t.finalProjectStudio}
            </h3>
          </div>
          <FinalProjectBuilder />
        </div>
      )}

      {/* Module Quiz */}
      <ModuleQuiz moduleId={module.id} questions={module.quiz} />

      {/* Key Summary Points Card */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white dark:bg-slate-950 border border-slate-800 shadow-md space-y-4">
        <div className="flex items-center gap-2.5 text-indigo-400 font-bold text-sm uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>{t.summaryTitle}</span>
        </div>
        <ul className="space-y-2.5">
          {module.summaryPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <span className="text-indigo-400 font-bold text-base leading-none mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Footer */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        {module.id > 1 ? (
          <button
            onClick={() => goToModule(module.id - 1)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors shadow-xs"
          >
            <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            <span>{t.prevModule} {module.id - 1}</span>
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={handleValidateAndNext}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.01]"
        >
          <span>{module.id < 8 ? `${t.nextModule} ${module.id + 1}` : t.seeCertificate}</span>
          <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};
