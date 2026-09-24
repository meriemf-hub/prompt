import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { useCourse } from '../context/CourseContext';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';

interface Props {
  moduleId: number;
  questions: QuizQuestion[];
}

export const ModuleQuiz: React.FC<Props> = ({ moduleId, questions }) => {
  const { progress, saveQuizScore, showToast, t, isRtl } = useCourse();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (submitted) return; // Prevent changing after submission
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isAllAnswered = answeredCount === questions.length;

  const handleSubmit = () => {
    if (!isAllAnswered) {
      showToast(`${t.answeredOf} ${answeredCount}/${questions.length}`);
      return;
    }

    let correctCount = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    setSubmitted(true);
    saveQuizScore(moduleId, correctCount);
    showToast(`${t.toastQuizScore} ${correctCount}/${questions.length}`);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const currentScore = questions.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  const scorePercentage = Math.round((currentScore / questions.length) * 100);

  return (
    <div className="my-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <HelpCircle className="w-5 h-5 text-indigo-300" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-300">
              {t.interactiveQuiz}
            </span>
            <h3 className="text-lg font-bold">
              {t.interactiveQuiz} ({questions.length} Q)
            </h3>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-xs">
            <Award className="w-5 h-5 text-amber-400" />
            <div>
              <div className="text-xs text-slate-300">{t.yourScore}</div>
              <div className="text-base font-bold text-white">
                {currentScore} / {questions.length} ({scorePercentage}%)
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Questions list */}
      <div className="p-6 divide-y divide-slate-100 dark:divide-slate-800 space-y-8">
        {questions.map((q, qIndex) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div key={q.id} className={qIndex > 0 ? 'pt-8' : ''}>
              <div className="flex items-start gap-3 mb-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0 mt-0.5">
                  {qIndex + 1}
                </span>
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                  {q.question}
                </h4>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2.5 ltr:ml-9 rtl:mr-9">
                {q.options.map((option, optIdx) => {
                  const isSelected = userAnswer === optIdx;
                  let optionStyles = 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-slate-50/50 dark:bg-slate-800/30 text-slate-800 dark:text-slate-200';

                  if (submitted) {
                    if (optIdx === q.correctAnswer) {
                      optionStyles = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optionStyles = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                    } else {
                      optionStyles = 'border-slate-200 dark:border-slate-800 opacity-60 text-slate-600 dark:text-slate-400';
                    }
                  } else if (isSelected) {
                    optionStyles = 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-medium ring-1 ring-indigo-500';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full text-left rtl:text-right p-3.5 rounded-xl border text-sm transition-all flex items-start gap-3 ${optionStyles}`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {submitted ? (
                          optIdx === q.correctAnswer ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : isSelected ? (
                            <XCircle className="w-4 h-4 text-rose-600" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600" />
                          )
                        ) : (
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300 dark:border-slate-600'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        )}
                      </div>
                      <span className="flex-1 leading-relaxed">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* In-depth explanation on submission */}
              {submitted && (
                <div className={`mt-4 ltr:ml-9 rtl:mr-9 p-3.5 rounded-xl text-xs leading-relaxed border animate-in fade-in duration-200 ${
                  isCorrect
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200'
                }`}>
                  <strong className="font-semibold block mb-1">
                    {isCorrect ? '✓ ' : '✕ '}
                  </strong>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer controls */}
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {!submitted ? `${answeredCount} ${t.answeredOf} ${questions.length}` : t.quizDone}
        </div>

        <div className="flex items-center gap-3">
          {submitted ? (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.retryQuiz}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isAllAnswered}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                isAllAnswered
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{t.submitAnswers}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
