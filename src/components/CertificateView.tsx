import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import {
  Trophy,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Download,
  BookOpen,
  RotateCcw,
  Copy,
  Check,
  Star,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { generateSingleHtmlCourse } from '../utils/generateSingleHtml';

export const CertificateView: React.FC = () => {
  const {
    progress,
    totalScore,
    goToModule,
    showToast,
    resetProgress,
    t,
    language,
    isRtl,
    modulesData
  } = useCourse();

  const [downloading, setDownloading] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleDownloadSingleFile = () => {
    setDownloading(true);
    try {
      const htmlContent = generateSingleHtmlCourse('Student', language);
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
      showToast('Error');
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyPrompt = () => {
    if (progress.finalProjectPrompt?.assembled) {
      navigator.clipboard.writeText(progress.finalProjectPrompt.assembled);
      setCopiedPrompt(true);
      showToast(t.copied);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  const badges = language === 'ar' ? [
    { title: 'معماري RTCFC', desc: 'إتقان الأركان الخمسة الأساسية لصياغة الأوامر' },
    { title: 'درع مكافحة الهلوسة', desc: 'حماية المخرجات بالمصادر المغلقة ومخارج الطوارئ' },
    { title: 'استراتيجي Few-Shot', desc: 'معايرة النمط بالأمثلة التطبيقية التوضيحية' },
    { title: 'التفكير المتسلسل (CoT)', desc: 'تفكيك المسائل المعقدة عبر التفكير خطوة بخطوة' }
  ] : language === 'en' ? [
    { title: 'RTCFC Architect', desc: 'Mastery of the core structural pillars of prompting' },
    { title: 'Anti-Hallucination Shield', desc: 'Safeguarding outputs with closed grounding and escape hatches' },
    { title: 'Few-Shot Strategist', desc: 'Calibrating AI style through targeted demonstrations' },
    { title: 'Step-by-Step Logic (CoT)', desc: 'Breaking down complex challenges with Chain-of-Thought' }
  ] : [
    { title: 'Architecte RTCFC', desc: 'Maîtrise des piliers structurels fondamentaux du prompt' },
    { title: 'Anti-Hallucination', desc: 'Sécurisation des réponses par ancrage et porte de sortie' },
    { title: 'Stratège Few-Shot', desc: 'Calibrage parfait du style par des exemples concrets' },
    { title: 'Logique Pas à Pas (CoT)', desc: 'Résolution des problèmes complexes via le Chain-of-Thought' }
  ];

  const scorePercentage = Math.round(
    totalScore.maxPossible > 0 ? (totalScore.earned / totalScore.maxPossible) * 100 : 100
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Top action bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => goToModule(8)}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
          <span>{t.prevModule}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadSingleFile}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>{t.singleHtml}</span>
          </button>
        </div>
      </div>

      {/* Hero Congratulations Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white p-8 sm:p-12 shadow-xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-400/20 text-amber-300 ring-8 ring-amber-400/10 shadow-lg mx-auto">
            <Trophy className="w-10 h-10" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t.congratsTitle}
          </h1>

          <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed">
            {t.congratsSubtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-xs border border-white/15">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              8 / 8 {t.completed}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-xs border border-white/15">
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              {scorePercentage}% {language === 'ar' ? 'نسبة النجاح' : language === 'en' ? 'Success Rate' : 'Taux de réussite'}
            </span>
          </div>
        </div>
      </div>

      {/* Global Performance Dashboard */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          {t.finalScoreDashboard}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1: Modules Completed */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>{language === 'ar' ? 'الوحدات المكتملة' : language === 'en' ? 'Modules Completed' : 'Modules validés'}</span>
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-slate-900 dark:text-white">
              8 <span className="text-sm font-semibold text-slate-400">/ 8</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full w-full" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'ar' ? '100% من المنهاج التعليمي' : language === 'en' ? '100% of curriculum complete' : '100% du cursus accompli'}
            </p>
          </div>

          {/* Card 2: Total Quiz Score */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>{t.quizScoreTotal}</span>
              <Trophy className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-black text-slate-900 dark:text-white">
              {totalScore.earned} <span className="text-sm font-semibold text-slate-400">/ {totalScore.maxPossible}</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, scorePercentage)}%` }}
              />
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              {scorePercentage >= 80
                ? (language === 'ar' ? 'أداء ممتاز وتحكم فائق' : language === 'en' ? 'Excellent mastery' : 'Excellente maîtrise des concepts')
                : (language === 'ar' ? 'أداء جيد جداً' : language === 'en' ? 'Very good performance' : 'Très bon niveau')}
            </p>
          </div>

          {/* Card 3: Final Project Score */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <span>{t.finalProjectScoreLabel}</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-black text-slate-900 dark:text-white">
              {progress.finalProjectPrompt?.score || 100} <span className="text-sm font-semibold text-slate-400">/ 100</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-purple-600 h-full rounded-full"
                style={{ width: `${progress.finalProjectPrompt?.score || 100}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'ar' ? 'شبكة تقييم الأركان الستة RTCFC' : language === 'en' ? 'RTCFC 6-pillar rubric certified' : 'Grille RTCFC validée'}
            </p>
          </div>
        </div>
      </div>

      {/* Final Prompt Showcase (if available) */}
      {progress.finalProjectPrompt?.assembled && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                {t.reviewYourPrompt}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'ar'
                  ? 'يمكنك نسخ هذا الأمر واستخدامه مباشرة في مشروعاتك مع أي نموذج ذكاء اصطناعي'
                  : language === 'en'
                  ? 'You can copy and immediately use this prompt in your real-world tasks with any LLM'
                  : 'Vous pouvez copier ce prompt et l’utiliser immédiatement dans vos outils et projets réels'}
              </p>
            </div>

            <button
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
            >
              {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPrompt ? t.copied : t.copy}</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed max-h-60 overflow-y-auto border border-slate-800 whitespace-pre-wrap">
            {progress.finalProjectPrompt.assembled}
          </div>
        </div>
      )}

      {/* Badges and Skills Mastered */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          {t.verifiedBadges}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-left rtl:text-right space-y-1.5"
            >
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">{b.title}</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Module Quiz Breakdown List */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          {language === 'ar' ? 'تفاصيل نتائج اختبارات الوحدات' : language === 'en' ? 'Module Quiz Results Breakdown' : 'Détail des résultats par module'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modulesData.map((m) => {
            const score = progress.quizScores[m.id];
            const max = m.quiz.length;
            const isDone = progress.completedModules.includes(m.id);

            return (
              <div
                key={m.id}
                onClick={() => goToModule(m.id)}
                className="cursor-pointer group flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-slate-50/50 dark:bg-slate-850 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center">
                    {m.id}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                      {m.title}
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {isDone
                        ? (language === 'ar' ? 'تم اجتياز الوحدة' : language === 'en' ? 'Module completed' : 'Module validé')
                        : (language === 'ar' ? 'غير مكتمل' : language === 'en' ? 'In progress' : 'En cours')}
                    </span>
                  </div>
                </div>

                <div className="text-right rtl:text-left">
                  {score !== undefined ? (
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {score} / {max}
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      —
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation & Reset */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => goToModule(1)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>{t.reviewModulesBtn}</span>
        </button>

        <button
          onClick={() => {
            if (window.confirm(t.resetConfirm)) {
              resetProgress();
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400 hover:underline transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetProgress}</span>
        </button>
      </div>
    </div>
  );
};
