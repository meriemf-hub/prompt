import React, { useState } from 'react';
import { PromptComparison } from '../types';
import { Copy, Check, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { useCourse } from '../context/CourseContext';

interface Props {
  comparison: PromptComparison;
}

export const PromptComparator: React.FC<Props> = ({ comparison }) => {
  const { showToast, t } = useCourse();
  const [activeTab, setActiveTab] = useState<'prompt' | 'output'>('prompt');
  const [copiedType, setCopiedType] = useState<'bad' | 'good' | null>(null);

  const handleCopy = (text: string, type: 'bad' | 'good') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    showToast(t.copied);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            {t.comparisonsTitle}
          </span>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            {comparison.title}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {comparison.contextDesc}
          </p>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg self-start sm:self-center shrink-0">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'prompt'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t.comparePrompts}
          </button>
          <button
            onClick={() => setActiveTab('output')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'output'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
            {t.aiResponses}
          </button>
        </div>
      </div>

      {/* Main comparison grid */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bad prompt box */}
        <div className="flex flex-col rounded-xl border border-rose-200 dark:border-rose-950/60 bg-rose-50/40 dark:bg-rose-950/10 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-xs">
                ✕
              </div>
              <span className="text-sm font-bold text-rose-800 dark:text-rose-300">
                {t.badPrompt}
              </span>
            </div>
            <button
              onClick={() => handleCopy(comparison.badPrompt.text, 'bad')}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              title={t.copy}
            >
              {copiedType === 'bad' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.copy}</span>
                </>
              )}
            </button>
          </div>

          {activeTab === 'prompt' ? (
            <>
              {/* Prompt text */}
              <div className="p-4 rounded-lg bg-white dark:bg-slate-950 border border-rose-200 dark:border-rose-900/50 font-mono text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                "{comparison.badPrompt.text}"
              </div>

              {/* Critique */}
              <div className="mt-4 flex items-start gap-2.5 text-xs text-rose-900 dark:text-rose-200/90 bg-rose-100/60 dark:bg-rose-900/30 p-3 rounded-lg border border-rose-200 dark:border-rose-800/40">
                <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block mb-0.5">{t.whyInsufficient}</strong>
                  {comparison.badPrompt.critique}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-xs font-semibold text-rose-700 dark:text-rose-400 mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                {t.aiResponses} :
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-950 border border-rose-200 dark:border-rose-900/50 font-sans text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed italic">
                {comparison.badPrompt.simulatedOutput}
              </div>
            </>
          )}
        </div>

        {/* Good prompt box */}
        <div className="flex flex-col rounded-xl border border-emerald-200 dark:border-emerald-950/60 bg-emerald-50/40 dark:bg-emerald-950/10 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <span className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                {t.goodPrompt}
              </span>
            </div>
            <button
              onClick={() => handleCopy(comparison.goodPrompt.text, 'good')}
              className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-md bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-700 shadow-xs hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors"
              title={t.copy}
            >
              {copiedType === 'good' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.copy}</span>
                </>
              )}
            </button>
          </div>

          {activeTab === 'prompt' ? (
            <>
              {/* Breakdown highlights badges */}
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {comparison.goodPrompt.breakdown.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-sm bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {item.label}
                  </span>
                ))}
              </div>

              {/* Prompt text */}
              <div className="p-4 rounded-lg bg-white dark:bg-slate-950 border border-emerald-200 dark:border-emerald-800/50 font-mono text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                {comparison.goodPrompt.text}
              </div>

              {/* Explanation */}
              <div className="mt-4 flex items-start gap-2.5 text-xs text-emerald-950 dark:text-emerald-200/90 bg-emerald-100/60 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800/40">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block mb-0.5">{t.whatMakesDifference}</strong>
                  {comparison.goodPrompt.explanation}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {t.aiResponses} :
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-slate-950 border border-emerald-200 dark:border-emerald-800/50 font-sans text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                {comparison.goodPrompt.simulatedOutput}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
