export type Language = 'fr' | 'en' | 'ar';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
}

export interface PromptComparison {
  id: string;
  title: string;
  contextDesc: string;
  badPrompt: {
    text: string;
    critique: string;
    simulatedOutput: string;
  };
  goodPrompt: {
    text: string;
    breakdown: {
      part: string;
      label: string;
      color: string;
    }[];
    explanation: string;
    simulatedOutput: string;
  };
}

export interface InteractiveExercise {
  id: string;
  title: string;
  scenario: string;
  objective: string;
  starterPrompt: string;
  criteria: {
    id: string;
    label: string;
    keywords: string[];
    feedback: string;
  }[];
  hint: string;
  solutionModel: string;
  explanationSolution: string;
}

export interface CourseModule {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  iconName: string;
  objectives: string[];
  analogy: {
    title: string;
    story: string;
    lesson: string;
  };
  theorySections: {
    title: string;
    content: string; // rich markdown-like or formatted text
    keyTakeaway?: string;
  }[];
  comparisons: PromptComparison[];
  exercise: InteractiveExercise;
  quiz: QuizQuestion[];
  summaryPoints: string[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'Fondations' | 'Techniques' | 'Mécanismes' | 'Qualité & Éthique';
  shortDef: string;
  detailedDef: string;
  analogy: string;
  example: string;
}

export interface UserProgress {
  completedModules: number[]; // module IDs
  quizScores: Record<number, number>; // moduleId -> score
  quizCompleted: Record<number, boolean>;
  exerciseCompleted: Record<string, boolean>; // exerciseId -> boolean
  studentName: string;
  finalProjectPrompt?: {
    role: string;
    context: string;
    task: string;
    format: string;
    constraints: string;
    examples: string;
    assembled: string;
    score: number;
  };
}
