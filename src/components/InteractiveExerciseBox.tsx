import React, { useState } from 'react';
import { InteractiveExercise } from '../types';
import { useCourse } from '../context/CourseContext';
import { Lightbulb, CheckCircle2, ChevronDown, ChevronUp, Copy, Sparkles, Check, Terminal } from 'lucide-react';

interface Props {
  exercise: InteractiveExercise;
}

export const InteractiveExerciseBox: React.FC<Props> = ({ exercise }) => {
  const { progress, markExerciseCompleted, showToast, t } = useCourse();
  const [promptInput, setPromptInput] = useState<string>(exercise.starterPrompt);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [copiedSolution, setCopiedSolution] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);

  const isCompleted = progress.exerciseCompleted[exercise.id] || false;

  // Criteria evaluation
  const normalizedInput = promptInput.toLowerCase();
  const criteriaStatus = exercise.criteria.map(crit => {
    const isMet = crit.keywords.some(kw => normalizedInput.includes(kw.toLowerCase()));
    return {
      ...crit,
      met: isMet
    };
  });

  const allCriteriaMet = criteriaStatus.every(c => c.met);

  const handleValidate = () => {
    if (allCriteriaMet || promptInput.trim().length > 40) {
      setValidated(true);
      markExerciseCompleted(exercise.id);
    } else {
      showToast(t.realTimeCriteria);
    }
  };

  const copySolution = () => {
    navigator.clipboard.writeText(exercise.solutionModel);
    setCopiedSolution(true);
    showToast(t.copied);
    setTimeout(() => setCopiedSolution(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-900 dark:to-slate-900/80 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-indigo-100 dark:border-indigo-950 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              {t.practiceLab}
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              {exercise.title}
            </h4>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {t.validated}
          </span>
        )}
      </div>

      <div className="p-6 space-y-6">
        {/* Scenario description */}
        <div className="space-y-2">
          <div className="text-sm text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-white font-semibold">{t.scenario} </strong>
            {exercise.scenario}
          </div>
          <div className="text-sm text-indigo-900 dark:text-indigo-200 bg-indigo-100/50 dark:bg-indigo-950/40 p-3 rounded-lg border border-indigo-200/60 dark:border-indigo-900/40">
            <strong className="font-semibold">{t.mission} </strong>
            {exercise.objective}
          </div>
        </div>

        {/* Input area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.yourPrompt}
            </label>
            <button
              onClick={() => setPromptInput(exercise.starterPrompt)}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              {t.reset}
            </button>
          </div>
          <textarea
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            rows={4}
            className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-hidden transition-all shadow-inner leading-relaxed"
            placeholder="..."
          />
        </div>

        {/* Real-time criteria checker */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            {t.realTimeCriteria}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {criteriaStatus.map((crit) => (
              <div
                key={crit.id}
                className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs transition-colors ${
                  crit.met
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className={`mt-0.5 shrink-0 ${crit.met ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {crit.met ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600" />}
                </div>
                <span>{crit.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHint(prev => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 hover:bg-amber-100 dark:hover:bg-amber-900/40 border border-amber-200 dark:border-amber-800 rounded-lg transition-colors"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              {showHint ? t.hideHint : t.needHint}
              {showHint ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <button
              onClick={() => setShowSolution(prev => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              {showSolution ? t.hideSolution : t.sampleSolution}
              {showSolution ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          <button
            onClick={handleValidate}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-xs ${
              allCriteriaMet
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {validated || isCompleted ? t.exerciseValidated : t.testAndValidate}
          </button>
        </div>

        {/* Collapsible Hint */}
        {showHint && (
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 animate-in fade-in duration-200">
            <strong className="font-semibold block mb-1">{t.needHint} :</strong>
            {exercise.hint}
          </div>
        )}

        {/* Collapsible Solution */}
        {showSolution && (
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t.sampleSolution} :
              </span>
              <button
                onClick={copySolution}
                className="flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {copiedSolution ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedSolution ? t.copied : t.copy}
              </button>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
              {exercise.solutionModel}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 italic">
              {exercise.explanationSolution}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
