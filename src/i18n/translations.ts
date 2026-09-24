import { Language } from '../types';

export interface UIStrings {
  appTitle: string;
  appSubtitle: string;
  search: string;
  searchPlaceholder: string;
  searchHint: string;
  noResults: string;
  modulesFound: string;
  glossaryFound: string;
  esc: string;
  close: string;
  glossary: string;
  certificate: string;
  singleHtml: string;
  singleHtmlTooltip: string;
  theme: string;
  curriculum: string;
  hours: string;
  completed: string;
  validated: string;
  minutes: string;
  resources: string;
  resetProgress: string;
  resetConfirm: string;
  objectives: string;
  realLifeAnalogy: string;
  keyLesson: string;
  goldenRule: string;
  comparisonsTitle: string;
  comparePrompts: string;
  aiResponses: string;
  badPrompt: string;
  goodPrompt: string;
  whyInsufficient: string;
  whatMakesDifference: string;
  copy: string;
  copied: string;
  practiceLab: string;
  scenario: string;
  mission: string;
  yourPrompt: string;
  reset: string;
  realTimeCriteria: string;
  needHint: string;
  hideHint: string;
  sampleSolution: string;
  hideSolution: string;
  testAndValidate: string;
  exerciseValidated: string;
  interactiveQuiz: string;
  yourScore: string;
  submitAnswers: string;
  retryQuiz: string;
  answeredOf: string;
  quizDone: string;
  summaryTitle: string;
  prevModule: string;
  nextModule: string;
  seeCertificate: string;
  finalProjectStudio: string;
  qualityScore: string;
  assembledPrompt: string;
  simulatePrompt: string;
  calculatingAi: string;
  readyForCert: string;
  certUnlockDesc: string;
  validateProjectBtn: string;
  congratsTitle: string;
  congratsSubtitle: string;
  verifiedBadges: string;
  finalScoreDashboard: string;
  quizScoreTotal: string;
  finalProjectScoreLabel: string;
  reviewYourPrompt: string;
  reviewModulesBtn: string;
  backToCourse: string;
  toastModuleCompleted: string;
  toastExerciseCompleted: string;
  toastQuizScore: string;
  toastProjectSaved: string;
  toastSingleHtmlDownloaded: string;
  allCategories: string;
  flipInstruction: string;
  flipBackInstruction: string;
  glossaryTitle: string;
  glossarySubtitle: string;
  searchGlossary: string;
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  fr: {
    appTitle: 'Prompt Engineering',
    appSubtitle: 'Les bases · Cours interactif',
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher une notion, un module, une astuce (ex: Few-shot, RTCFC)...',
    searchHint: 'Tapez un mot-clé pour explorer l’ensemble des 8 modules et le glossaire.',
    noResults: 'Aucun résultat trouvé pour',
    modulesFound: 'Modules du cours',
    glossaryFound: 'Glossaire & Définitions',
    esc: 'ÉCHAP',
    close: 'Fermer',
    glossary: 'Glossaire',
    certificate: 'Bilan final & Félicitations',
    singleHtml: 'Fichier HTML unique',
    singleHtmlTooltip: 'Exporter le cours complet en 1 fichier HTML autonome hors-ligne',
    theme: 'Thème',
    curriculum: 'Plan de cours',
    hours: '8 modules · 3 à 4 heures',
    completed: 'terminés',
    validated: 'Validé',
    minutes: 'min',
    resources: 'Ressources & Bilan',
    resetProgress: 'Réinitialiser la progression',
    resetConfirm: 'Voulez-vous vraiment réinitialiser toute votre progression dans le cours ?',
    objectives: 'Objectifs d’apprentissage du module',
    realLifeAnalogy: 'L’analogie de la vie réelle',
    keyLesson: 'La leçon clé pour vos prompts :',
    goldenRule: 'Règle d’or :',
    comparisonsTitle: 'Exemples pratiques : Mauvais prompt vs Bon prompt',
    comparePrompts: 'Comparer les prompts',
    aiResponses: 'Réponses obtenues de l’IA',
    badPrompt: 'Mauvais prompt (Flou & inefficace)',
    goodPrompt: 'Bon prompt (Optimisé & structuré)',
    whyInsufficient: 'Pourquoi c’est insuffisant :',
    whatMakesDifference: 'Ce qui fait la différence :',
    copy: 'Copier',
    copied: 'Copié !',
    practiceLab: 'Atelier pratique',
    scenario: 'Mise en situation :',
    mission: 'Votre mission :',
    yourPrompt: 'Votre prompt à tester :',
    reset: 'Réinitialiser',
    realTimeCriteria: 'Critères d’évaluation en temps réel :',
    needHint: 'Besoin d’un indice ?',
    hideHint: 'Masquer l’indice',
    sampleSolution: 'Solution type',
    hideSolution: 'Masquer la solution',
    testAndValidate: 'Tester & Valider mon prompt',
    exerciseValidated: 'Exercice validé !',
    interactiveQuiz: 'Quiz interactif du module',
    yourScore: 'Votre score :',
    submitAnswers: 'Valider mes réponses',
    retryQuiz: 'Retenter le quiz',
    answeredOf: 'questions répondues sur',
    quizDone: 'Quiz terminé',
    summaryTitle: 'Résumé : Ce qu’il faut absolument retenir',
    prevModule: 'Module précédent',
    nextModule: 'Valider et passer au Module suivant',
    seeCertificate: 'Voir le Bilan final & Félicitations',
    finalProjectStudio: 'Le Studio de Conception & Grille d’évaluation (100 pts)',
    qualityScore: 'Score de Qualité du Prompt',
    assembledPrompt: 'Prompt assemblé en temps réel',
    simulatePrompt: 'Simuler l’exécution de ce prompt',
    calculatingAi: 'Calcul de la réponse IA...',
    readyForCert: 'Prêt à terminer la formation ?',
    certUnlockDesc: 'En validant votre projet final (score minimum 60/100), vous achevez officiellement le cours et découvrez votre bilan complet.',
    validateProjectBtn: 'Valider mon projet & Voir mon Bilan',
    congratsTitle: 'Félicitations pour votre parcours !',
    congratsSubtitle: 'Vous avez franchi l’ensemble des 8 modules, maîtrisé l’art du prompt engineering et conçu avec brio votre prompt final.',
    verifiedBadges: 'Compétences & Badges débloqués',
    finalScoreDashboard: 'Tableau de bord des résultats',
    quizScoreTotal: 'Score total des quiz',
    finalProjectScoreLabel: 'Score du projet final',
    reviewYourPrompt: 'Votre chef-d’œuvre (Prompt final créé)',
    reviewModulesBtn: 'Revoir les modules du cours',
    backToCourse: 'Retourner au cours',
    toastModuleCompleted: 'Module validé avec succès !',
    toastExerciseCompleted: 'Exercice pratique validé !',
    toastQuizScore: 'Quiz validé ! Score :',
    toastProjectSaved: 'Félicitations ! Projet validé avec succès.',
    toastSingleHtmlDownloaded: 'Fichier HTML unique téléchargé avec succès !',
    allCategories: 'Tous',
    flipInstruction: 'Cliquer pour l’analogie & l’exemple',
    flipBackInstruction: 'Cliquer pour revenir au terme ↺',
    glossaryTitle: 'Le Glossaire Interactif',
    glossarySubtitle: 'Cliquez sur une carte pour la retourner et découvrir l’analogie imagée et des exemples concrets pour chaque terme technique.',
    searchGlossary: 'Rechercher un terme (ex: Token, Few-shot)...'
  },
  en: {
    appTitle: 'Prompt Engineering',
    appSubtitle: 'The Basics · Interactive Course',
    search: 'Search',
    searchPlaceholder: 'Search a concept, module, tip (e.g., Few-shot, RTCFC)...',
    searchHint: 'Type a keyword to explore all 8 modules and the glossary.',
    noResults: 'No results found for',
    modulesFound: 'Course Modules',
    glossaryFound: 'Glossary & Definitions',
    esc: 'ESC',
    close: 'Close',
    glossary: 'Glossary',
    certificate: 'Final Results & Congratulations',
    singleHtml: 'Single HTML File',
    singleHtmlTooltip: 'Export entire course as a 100% standalone offline HTML file',
    theme: 'Theme',
    curriculum: 'Curriculum',
    hours: '8 modules · 3 to 4 hours',
    completed: 'completed',
    validated: 'Completed',
    minutes: 'min',
    resources: 'Resources & Results',
    resetProgress: 'Reset Progress',
    resetConfirm: 'Are you sure you want to reset all your progress in the course?',
    objectives: 'Module Learning Objectives',
    realLifeAnalogy: 'Real-Life Analogy',
    keyLesson: 'Key lesson for your prompts:',
    goldenRule: 'Golden Rule:',
    comparisonsTitle: 'Practical Comparisons: Bad Prompt vs Good Prompt',
    comparePrompts: 'Compare Prompts',
    aiResponses: 'AI Generated Responses',
    badPrompt: 'Bad Prompt (Vague & Ineffective)',
    goodPrompt: 'Good Prompt (Optimized & Structured)',
    whyInsufficient: 'Why it fails:',
    whatMakesDifference: 'What makes the difference:',
    copy: 'Copy',
    copied: 'Copied!',
    practiceLab: 'Practice Lab',
    scenario: 'Scenario:',
    mission: 'Your Mission:',
    yourPrompt: 'Your prompt to test:',
    reset: 'Reset',
    realTimeCriteria: 'Real-time Evaluation Criteria:',
    needHint: 'Need a hint?',
    hideHint: 'Hide hint',
    sampleSolution: 'Sample Solution',
    hideSolution: 'Hide solution',
    testAndValidate: 'Test & Validate My Prompt',
    exerciseValidated: 'Exercise Validated!',
    interactiveQuiz: 'Module Interactive Quiz',
    yourScore: 'Your Score:',
    submitAnswers: 'Submit Answers',
    retryQuiz: 'Retry Quiz',
    answeredOf: 'questions answered out of',
    quizDone: 'Quiz Completed',
    summaryTitle: 'Summary: Key Takeaways',
    prevModule: 'Previous Module',
    nextModule: 'Validate & Go to Next Module',
    seeCertificate: 'View Final Results & Congratulations',
    finalProjectStudio: 'Prompt Studio & Quality Rubric (100 pts)',
    qualityScore: 'Prompt Quality Score',
    assembledPrompt: 'Real-Time Assembled Prompt',
    simulatePrompt: 'Simulate AI Execution',
    calculatingAi: 'Generating simulated AI response...',
    readyForCert: 'Ready to Complete the Course?',
    certUnlockDesc: 'By validating your final project (minimum score 60/100), you officially complete the course and unlock your comprehensive results.',
    validateProjectBtn: 'Validate Project & View Final Results',
    congratsTitle: 'Congratulations on Your Achievement!',
    congratsSubtitle: 'You have conquered all 8 modules, mastered fundamental prompt engineering techniques, and successfully built your final project.',
    verifiedBadges: 'Mastered Skills & Unlocked Badges',
    finalScoreDashboard: 'Performance Dashboard',
    quizScoreTotal: 'Total Quiz Score',
    finalProjectScoreLabel: 'Final Project Score',
    reviewYourPrompt: 'Your Final Project Prompt',
    reviewModulesBtn: 'Review Course Modules',
    backToCourse: 'Back to Course',
    toastModuleCompleted: 'Module completed successfully!',
    toastExerciseCompleted: 'Exercise completed!',
    toastQuizScore: 'Quiz submitted! Score:',
    toastProjectSaved: 'Congratulations! Final project successfully validated.',
    toastSingleHtmlDownloaded: 'Single standalone HTML file downloaded!',
    allCategories: 'All',
    flipInstruction: 'Click to view analogy & example',
    flipBackInstruction: 'Click to return to definition ↺',
    glossaryTitle: 'Interactive Glossary',
    glossarySubtitle: 'Click on any card to flip it and discover intuitive real-life analogies and practical examples.',
    searchGlossary: 'Search term (e.g. Token, Few-shot)...'
  },
  ar: {
    appTitle: 'هندسة الأوامر',
    appSubtitle: 'الأساسيات · دورة تفاعلية شاملة',
    search: 'بحث',
    searchPlaceholder: 'ابحث عن مفهوم، وحدة، أو نصيحة (مثل: Few-shot، RTCFC)...',
    searchHint: 'اكتب كلمة مفتاحية لاستكشاف الوحدات الثمانية وقاموس المصطلحات.',
    noResults: 'لا توجد نتائج مطابقة لـ',
    modulesFound: 'وحدات الدورة',
    glossaryFound: 'المصطلحات والتعريفات',
    esc: 'خروج',
    close: 'إغلاق',
    glossary: 'المصطلحات',
    certificate: 'النتيجة النهائية والتهنئة',
    singleHtml: 'ملف HTML مستقل',
    singleHtmlTooltip: 'تصدير الدورة كاملة في ملف HTML واحد يعمل بدون إنترنت',
    theme: 'المظهر',
    curriculum: 'خطة الدورة',
    hours: '8 وحدات · 3 إلى 4 ساعات',
    completed: 'مكتملة',
    validated: 'مكتمل',
    minutes: 'دقيقة',
    resources: 'المصادر والنتائج',
    resetProgress: 'إعادة ضبط التقدم',
    resetConfirm: 'هل تريد حقاً إعادة ضبط تقدمك في الدورة بالكامل؟',
    objectives: 'أهداف التعلم في هذه الوحدة',
    realLifeAnalogy: 'تشبيه من واقع الحياة',
    keyLesson: 'الدرس المستفاد لأوامرك:',
    goldenRule: 'القاعدة الذهبية:',
    comparisonsTitle: 'أمثلة عملية: أمر ضعيف مقابل أمر متقن',
    comparePrompts: 'مقارنة الأوامر',
    aiResponses: 'إجابات الذكاء الاصطناعي',
    badPrompt: 'أمر ضعيف (غامض وغير فعال)',
    goodPrompt: 'أمر ممتاز (منظم ومحكم)',
    whyInsufficient: 'لماذا هذا الأمر ضعيف:',
    whatMakesDifference: 'ما الذي يصنع الفارق الحقيقي:',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    practiceLab: 'ورشة تدريبية عملية',
    scenario: 'سياق التدريب:',
    mission: 'مهمتك:',
    yourPrompt: 'أمرك للتجربة:',
    reset: 'إعادة تعيين',
    realTimeCriteria: 'معايير التقييم اللحظي:',
    needHint: 'هل تحتاج تلميحاً؟',
    hideHint: 'إخفاء التلميح',
    sampleSolution: 'الحل النموذجي',
    hideSolution: 'إخفاء الحل',
    testAndValidate: 'اختبر واعتمد أمري',
    exerciseValidated: 'تم اعتماد التمرين بنجاح!',
    interactiveQuiz: 'اختبار تقييم الوحدة',
    yourScore: 'درجتك:',
    submitAnswers: 'تأكيد إجاباتي',
    retryQuiz: 'إعادة الاختبار',
    answeredOf: 'أسئلة تمت الإجابة عليها من أصل',
    quizDone: 'اكتمل الاختبار',
    summaryTitle: 'ملخص: أهم ما يجب تذكره',
    prevModule: 'الوحدة السابقة',
    nextModule: 'اعتماد والانتقال للوحدة التالية',
    seeCertificate: 'عرض النتيجة النهائية والتهنئة',
    finalProjectStudio: 'استوديو بناء الأوامر وشبكة التقييم (100 نقطة)',
    qualityScore: 'مقياس جودة الأمر',
    assembledPrompt: 'الأمر المجمع في الوقت الفعلي',
    simulatePrompt: 'محاكاة استجابة الذكاء الاصطناعي',
    calculatingAi: 'جاري محاكاة الإجابة...',
    readyForCert: 'جاهز لإنهاء الدورة واستعراض النتيجة؟',
    certUnlockDesc: 'باعتماد مشروعك النهائي (60 نقطة كحد أدنى)، تنهي الدورة رسمياً وتستعرض حصيلة درجاتك وأوسمتك.',
    validateProjectBtn: 'اعتماد مشروعي وعرض النتيجة والتهنئة',
    congratsTitle: 'مبارك إتمامك للدورة بنجاح!',
    congratsSubtitle: 'لقد أتممت الوحدات الثمانية كاملة، وأتقنت تقنيات هندسة الأوامر الأساسية وأنجزت مشروعك النهائي بنجاح.',
    verifiedBadges: 'المهارات والأوسمة المكتسبة',
    finalScoreDashboard: 'لوحة النتائج والإنجاز',
    quizScoreTotal: 'مجموع درجات الاختبارات',
    finalProjectScoreLabel: 'درجة المشروع النهائي',
    reviewYourPrompt: 'الأمر النهائي الذي صممته في المشروع',
    reviewModulesBtn: 'مراجعة وحدات الدورة',
    backToCourse: 'العودة إلى الدورة',
    toastModuleCompleted: 'تمت المصادقة على الوحدة بنجاح!',
    toastExerciseCompleted: 'تم اعتماد التمرين بنجاح!',
    toastQuizScore: 'تم إرسال الاختبار! النتيجة:',
    toastProjectSaved: 'تهانينا! تم اعتماد مشروعك النهائي بنجاح.',
    toastSingleHtmlDownloaded: 'تم تحميل ملف HTML المستقل بنجاح!',
    allCategories: 'الكل',
    flipInstruction: 'انقر لعرض التشبيه والمثال',
    flipBackInstruction: 'انقر للعودة للمصطلح ↺',
    glossaryTitle: 'قاموس المصطلحات التفاعلي',
    glossarySubtitle: 'انقر على أي بطاقة لقلبها واكتشاف التشبيهات الواقعية والأمثلة العملية لكل مصطلح.',
    searchGlossary: 'ابحث عن مصطلح (مثل: Token، Few-shot)...'
  }
};
