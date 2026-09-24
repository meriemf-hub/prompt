import React from 'react';
import { useCourse } from '../context/CourseContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useCourse();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl shadow-xl border border-slate-700 dark:border-slate-200 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 dark:text-emerald-600 shrink-0" />
      <span className="text-sm font-medium">{toast.message}</span>
    </div>
  );
};
