import React, { useState, useMemo } from 'react';
import { useCourse } from '../context/CourseContext';
import {
  Copy,
  Check,
  Award,
  Trophy,
  Play,
  ArrowRight,
  ShieldCheck,
  Layers,
  RefreshCw
} from 'lucide-react';

interface PromptPreset {
  name: string;
  category: string;
  role: string;
  context: string;
  task: string;
  format: string;
  constraints: string;
  examples: string;
}

const PRESETS_BY_LANG: Record<string, PromptPreset[]> = {
  fr: [
    {
      name: 'Tuteur en immersion linguistique',
      category: 'Éducation',
      role: "Tu es un professeur de langue certifié, pédagogue, encourageant et spécialiste de la méthode communicative active pour adultes.",
      context: "Je suis un apprenant francophone de niveau débutant (A1-A2) qui prépare un séjour professionnel à l'étranger dans 2 mois.",
      task: "Anime un jeu de rôle interactif en tour par tour sur le thème : commander un repas au restaurant et demander l'addition.",
      format: "1. Pose-moi une seule question ou réplique à la fois.\n2. Attends systématiquement ma réponse avant de continuer.\n3. Fournis une traduction française discrète entre parenthèses sous ta réplique.",
      constraints: "- À chacune de mes réponses, félicite l'effort et corrige mes éventuelles erreurs en 1 phrase bienveillante.\n- N'écris jamais la conversation complète d'avance.\n- Utilise un vocabulaire du quotidien.",
      examples: "Exemple de premier tour :\n« ¡Hola! Bienvenido al restaurante. ¿Tiene una reserva? (Bonjour ! Bienvenue au restaurant. Avez-vous une réservation ?) »"
    },
    {
      name: 'Copywriter de lancement e-commerce',
      category: 'Marketing',
      role: "Tu es un copywriter senior spécialiste du e-commerce éco-responsable et des conversions sur Instagram et TikTok.",
      context: "Notre marque lance un shampooing solide rechargeable zéro déchet fabriqué en France, vendu 12€ l'unité.",
      task: "Rédige une série de 3 accroches publicitaires (hooks) percutantes pour une vidéo courte de 15 secondes.",
      format: "Tableau Markdown à 3 colonnes :\n| N° | Accroche visuelle (Action à l'écran) | Voix-off (Phrase choc en moins de 10 mots) |",
      constraints: "- N'utilise aucun superlatif creux (« révolutionnaire », « incroyable »).\n- Cible les jeunes actifs urbains sensibles à l'écologie.\n- Reste percutant et authentique.",
      examples: "Accroche type :\nAction : Jeter une bouteille plastique vide qui rebondit avec un bruit sourd.\nVoix-off : 80% de votre shampooing actuel... c'est juste de l'eau en bouteille."
    },
    {
      name: 'Analyste de synthèse documentaire stricte',
      category: 'Entreprise & Rigueur',
      role: "Tu es un auditeur interne spécialisé dans l'analyse de conformité réglementaire d'une rigueur absolue.",
      context: "L'équipe de direction a besoin d'une synthèse claire des nouveaux accords d'entreprise sans aucune extrapolation.",
      task: "Extrais les 3 conditions d'attribution de la prime de mobilité durable d'après les documents joints.",
      format: "Liste numérotée stricte avec citation textuelle de la source entre guillemets pour chaque point.",
      constraints: "- Réponds UNIQUEMENT d'après le texte fourni.\n- Si une condition n'est pas spécifiée dans le texte, inscris impérativement : [Non précisé dans le document] au lieu d'inventer.\n- N'ajoute aucune formule de politesse d'introduction.",
      examples: "Format attendu :\n1. Condition 1 : « Être titulaire d'un contrat CDI depuis plus de 6 mois révolus » (Art. 4.2)"
    }
  ],
  en: [
    {
      name: 'Language Immersion Tutor',
      category: 'Education',
      role: "You are a certified language instructor specializing in active communicative methodology for adult beginners (A1-A2).",
      context: "I am an English speaker preparing for an upcoming international work assignment in 2 months.",
      task: "Conduct a turn-by-turn interactive roleplay on: ordering a meal at a restaurant and requesting the bill.",
      format: "1. Ask only ONE question or conversational prompt per turn.\n2. Always wait for my response before proceeding.\n3. Include a subtle English translation in parentheses beneath your line.",
      constraints: "- After each user response, validate the effort and explain any grammar error in 1 encouraging sentence.\n- Never output the whole dialogue at once.\n- Use practical everyday vocabulary.",
      examples: "First turn sample:\n« ¡Hola! Bienvenido al restaurante. ¿Tiene una reserva? (Hello! Welcome to the restaurant. Do you have a reservation?) »"
    },
    {
      name: 'DTC E-Commerce Copywriter',
      category: 'Marketing',
      role: "You are a senior copywriter specializing in sustainable DTC consumer goods and viral TikTok/Reels hooks.",
      context: "Our brand is launching a zero-waste refillable solid shampoo bar priced at $14.",
      task: "Draft 3 punchy video ad hooks for a 15-second social media reel.",
      format: "3-column Markdown table:\n| # | Visual Hook (Action on screen) | Voiceover (Punchy line under 10 words) |",
      constraints: "- No generic marketing cliches ('game-changing', 'revolutionary').\n- Target eco-conscious urban professionals.\n- Maintain an authentic, energetic tone.",
      examples: "Sample Hook:\nAction: Dropping an empty plastic bottle with a hollow thud.\nVoiceover: 80% of normal shampoo... is just water in plastic."
    },
    {
      name: 'Closed-Source Compliance Auditor',
      category: 'Enterprise Rigor',
      role: "You are an internal corporate compliance auditor operating with absolute factual rigor.",
      context: "Executive leadership needs an accurate briefing on new workplace mobility agreements without extrapolation.",
      task: "Extract the 3 statutory eligibility conditions for the green transit allowance from the attached policy.",
      format: "Numbered list with verbatim quotation proof in quotation marks for each condition.",
      constraints: "- Answer SOLELY from the provided text.\n- If a detail is absent, state: [Not specified in document] rather than guessing.\n- Zero conversational pleasantries.",
      examples: "Expected format:\n1. Condition 1: 'Must be on an active permanent contract for over 6 full months' (Sec. 4.2)"
    }
  ],
  ar: [
    {
      name: 'معلم لغات تفاعلي بالمحادثة',
      category: 'تعليم',
      role: "أنت أستاذ لغة معتمد متخصص في منهجية التواصل التفاعلي المباشر للبالغين المبتدئين.",
      context: "أنا متعلم مبتدئ أستعد لرحلة عمل دولية بعد شهرين من الآن.",
      task: "أدر جلسة محاكاة حوارية خطوة بخطوة لموقف: طلب وجبة طعام في مطعم وطلب الفاتورة.",
      format: "1. اطرح سؤالاً أو جملة حوارية واحدة فقط في كل مرة.\n2. انتظر إجابتي وجوباً قبل الانتقال للجملة التالية.\n3. اذكر ترجمة عربية خفيفة بين قوسين تحت عبارتك.",
      constraints: "- شجعني بعد كل رد وصحح أخطائي النحوية في جملة واحدة مبسطة.\n- لا تكتب الحوار كاملاً مسبقاً.\n- استخدم مفردات حية يومية.",
      examples: "مثال على البداية:\n« ¡Hola! Bienvenido al restaurante. ¿Tiene una reserva? (مرحباً بكم في المطعم. هل لديكم حجز مسبق؟) »"
    },
    {
      name: 'كاتب إعلانات للتجارة الإلكترونية',
      category: 'تسويق',
      role: "أنت كاتب إعلانات محترف متخصص في المنتجات الصديقة للبيئة والتحويلات التسويقية على تيك توك وإنستغرام.",
      context: "علامتنا التجارية تطلق شامبو طبيعي صلب خالٍ من البلاستيك بسعر 12 دولاراً.",
      task: "صغ 3 خطافات إعلانية (Hooks) جذابة لفيديو قصير مدته 15 ثانية.",
      format: "جدول ماركداون من 3 أعمدة:\n| الرقم | المشهد البصري | التعليق الصوتي (أقل من 10 كلمات) |",
      constraints: "- تجنب الكلمات المبتذلة المستهلكة (ثوري، لا يصدق).\n- استهدف الشباب المهتمين بحماية البيئة.\n- حافظ على نبرة واقعية وجذابة.",
      examples: "مثال الخطاف:\nالمشهد: رمي زجاجة بلاستيكية فارغة تصدر صوتاً أجوف.\nالصوت: 80% من الشامبو العادي... مجرد ماء في زجاجة بلاستيك."
    },
    {
      name: 'مدقق وثائق وسياسات صارم',
      category: 'حوكمة وتدقيق',
      role: "أنت مدقق امتثال داخلي تعمل بأعلى معايير الصرامة والمطابقة الحرفية للوثائق.",
      context: "الإدارة التنفيذية تحتاج لملخص موثوق لبنود بدل المواصلات المستدامة دون أي تأليف.",
      task: "استخرج الشروط الثلاثة لاستحقاق البدل من واقع المستند المرفق.",
      format: "قائمة مرقمة مع اقتباس النص الأصلي حرفياً بين علامتي تنصيص.",
      constraints: "- أجب حصراً من النص المرفق.\n- إذا غاب أي شرط، اكتب وجوباً: [غير مذكور في الوثيقة] بدلاً من التخمين.\n- لا تكتب أي مقدمات إنشائية.",
      examples: "الصيغة المتوقعة:\n1. الشرط الأول: «أن يكون الموظف حاصلاً على عقد دائم مثبت لأكثر من 6 أشهر» (البند 4.2)"
    }
  ]
};

export const FinalProjectBuilder: React.FC = () => {
  const { progress, saveFinalProjectPrompt, goToCertificate, showToast, t, language, isRtl } = useCourse();

  const [role, setRole] = useState(progress.finalProjectPrompt?.role || '');
  const [context, setContext] = useState(progress.finalProjectPrompt?.context || '');
  const [task, setTask] = useState(progress.finalProjectPrompt?.task || '');
  const [format, setFormat] = useState(progress.finalProjectPrompt?.format || '');
  const [constraints, setConstraints] = useState(progress.finalProjectPrompt?.constraints || '');
  const [examples, setExamples] = useState(progress.finalProjectPrompt?.examples || '');

  const [copied, setCopied] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  const presets = useMemo(() => PRESETS_BY_LANG[language] || PRESETS_BY_LANG.fr, [language]);

  const applyPreset = (preset: PromptPreset) => {
    setRole(preset.role);
    setContext(preset.context);
    setTask(preset.task);
    setFormat(preset.format);
    setConstraints(preset.constraints);
    setExamples(preset.examples);
    setSimulationResult(null);
    showToast(`${preset.name}`);
  };

  // Evaluation criteria
  const scoreRole = role.trim().length > 15 ? 15 : role.trim().length > 5 ? 8 : 0;
  const scoreContext = context.trim().length > 25 ? 20 : context.trim().length > 10 ? 10 : 0;
  const scoreTask = task.trim().length > 20 ? 20 : task.trim().length > 8 ? 10 : 0;
  const scoreFormat = format.trim().length > 15 ? 15 : format.trim().length > 5 ? 7 : 0;
  const scoreConstraints = constraints.trim().length > 20 ? 15 : constraints.trim().length > 8 ? 8 : 0;
  const scoreExamples = examples.trim().length > 20 ? 15 : examples.trim().length > 5 ? 7 : 0;

  const totalScore = scoreRole + scoreContext + scoreTask + scoreFormat + scoreConstraints + scoreExamples;

  const assembledPrompt = `[${isRtl ? 'الدور' : 'ROLE'}]
${role || '...'}

[${isRtl ? 'السياق' : 'CONTEXT'}]
${context || '...'}

[${isRtl ? 'المهمة' : 'TASK'}]
${task || '...'}

[${isRtl ? 'التنسيق' : 'FORMAT'}]
${format || '...'}

[${isRtl ? 'القيود وحصون الأمان' : 'CONSTRAINTS'}]
${constraints || '...'}

[${isRtl ? 'الأمثلة أو التفكير خطوة بخطوة' : 'EXAMPLES / STEP-BY-STEP'}]
${examples || '...'}`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(assembledPrompt);
    setCopied(true);
    showToast(t.copied);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    if (totalScore < 40) {
      showToast(t.realTimeCriteria);
      return;
    }

    setSimulating(true);
    setSimulationResult(null);

    setTimeout(() => {
      setSimulating(false);
      if (totalScore >= 80) {
        setSimulationResult(
          language === 'ar'
            ? `[محاكاة استجابة الذكاء الاصطناعي - جودة ممتازة]
مرحباً. بصفتي متخصصاً وفق الدور المحدد:
1. تم استيعاب السياق والهدف بدقة كاملة.
2. تم احترام التنسيق المطلوب والالتزام بالجدول/النقاط.
3. لم يتم تجاوز أي قيد سلبي أو إيجابي.

المخرجات المعتمدة:
• النقطة الأولى: تنفيذ مباشر بدون حشو.
• النقطة الثانية: تطابق كامل مع المعايير والجمهور المستهدف.`
            : `[SIMULATED AI RESPONSE - HIGH FIDELITY OUTPUT]
Hello. Acting in full alignment with the assigned role:
1. Context and target constraints thoroughly integrated.
2. Target output structure strictly satisfied.
3. Zero forbidden filler or unauthorized hallucination.

Deliverable summary:
• Milestone 1: Direct, actionable output aligned with constraints.
• Milestone 2: Exact format match ready for production use.`
        );
      } else {
        setSimulationResult(
          language === 'ar'
            ? `[محاكاة استجابة الذكاء الاصطناعي - جودة متوسطة]
هذه مسودة أولية مبنية على معطياتك الحالية (الدرجة: ${totalScore}/100).
نظراً لوجود غموض في التنسيق أو القيود، اضطر النموذج لوضع بعض الفرضيات التخمينية.
يرجى إكمال الحقول الناقصة لضمان الحصول على إجابة احترافية محكمة.`
            : `[SIMULATED AI RESPONSE - STANDARD DRAFT]
Here is a preliminary draft based on your instructions (Current Score: ${totalScore}/100).
Because format or constraints are still somewhat broad, the model had to make statistical assumptions.
Please fill in the remaining blocks to lock in output quality.`
        );
      }
    }, 900);
  };

  const handleSaveAndCertify = () => {
    if (totalScore < 60) {
      showToast(t.realTimeCriteria);
      return;
    }

    saveFinalProjectPrompt({
      role,
      context,
      task,
      format,
      constraints,
      examples,
      assembled: assembledPrompt,
      score: totalScore
    });

    showToast(t.toastProjectSaved);
    goToCertificate();
  };

  return (
    <div className="space-y-8 my-8">
      {/* Preset selection bar */}
      <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {language === 'ar' ? 'نماذج ملهمة جاهزة للتطبيق في ضغطة واحدة :' : 'Inspirational Presets (1-Click Load):'}
          </span>
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
            {language === 'ar' ? 'انقر للتحميل أو اكتب من الصفر' : 'Click to load or craft from scratch'}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="text-left rtl:text-right p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 shadow-xs transition-all group"
            >
              <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                {preset.category}
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {preset.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 2 Columns: Builder Inputs + Live Assembler & Quality Rubric */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: 6 interactive blocks */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            {language === 'ar' ? 'ورشة تجميع أركان الأمر' : 'Modular Prompt Workbench'}
          </h3>

          {/* Block 1: Rôle */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>1. [{isRtl ? 'الدور' : 'ROLE'}]</span>
                <span className="text-slate-400 font-normal font-sans text-xs">· {isRtl ? 'من هو النموذج؟' : 'Who is the AI?'}</span>
              </label>
              <span className={`text-xs font-semibold ${scoreRole === 15 ? 'text-emerald-600' : 'text-slate-400'}`}>
                {scoreRole}/15 pts
              </span>
            </div>
            <textarea
              value={role}
              onChange={(e) => setRole(e.target.value)}
              rows={2}
              placeholder={isRtl ? 'مثال: أنت مستشار استراتيجي للموارد البشرية بخبرة 15 عاماً...' : 'e.g., You are a senior brand consultant...'}
              className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-hidden font-mono"
            />
          </div>

          {/* Block 2: Contexte */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>2. [{isRtl ? 'السياق' : 'CONTEXT'}]</span>
                <span className="text-slate-400 font-normal font-sans text-xs">· {isRtl ? 'الموقف والجمهور' : 'Situation & Audience'}</span>
              </label>
              <span className={`text-xs font-semibold ${scoreContext === 20 ? 'text-emerald-600' : 'text-slate-400'}`}>
                {scoreContext}/20 pts
              </span>
            </div>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              rows={2}
              placeholder={isRtl ? 'مثال: نحن شركة ناشئة تطلق عرضاً جديداً بميزانية محدودة...' : 'e.g., We are a startup launching a new product...'}
              className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-hidden font-mono"
            />
          </div>

          {/* Block 3: Tâche */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>3. [{isRtl ? 'المهمة' : 'TASK'}]</span>
                <span className="text-slate-400 font-normal font-sans text-xs">· {isRtl ? 'فعل أمر إجرائي واضح' : 'Clear Action Verb'}</span>
              </label>
              <span className={`text-xs font-semibold ${scoreTask === 20 ? 'text-emerald-600' : 'text-slate-400'}`}>
                {scoreTask}/20 pts
              </span>
            </div>
            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              rows={2}
              placeholder={isRtl ? 'مثال: ضع خطة استقبال وتأهيل لمطور برمجيات جديد...' : 'e.g., Draft an onboarding schedule for a new hire...'}
              className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-hidden font-mono"
            />
          </div>

          {/* Block 4: Format */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>4. [{isRtl ? 'التنسيق' : 'FORMAT'}]</span>
                <span className="text-slate-400 font-normal font-sans text-xs">· {isRtl ? 'جدول، نقاط، كود...' : 'Table, Bullets, Schema...'}</span>
              </label>
              <span className={`text-xs font-semibold ${scoreFormat === 15 ? 'text-emerald-600' : 'text-slate-400'}`}>
                {scoreFormat}/15 pts
              </span>
            </div>
            <textarea
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              rows={2}
              placeholder={isRtl ? 'مثال: جدول ماركداون من 3 أعمدة...' : 'e.g., 3-column Markdown table...'}
              className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-hidden font-mono"
            />
          </div>

          {/* Block 5: Contraintes */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>5. [{isRtl ? 'القيود والحدود' : 'CONSTRAINTS'}]</span>
                <span className="text-slate-400 font-normal font-sans text-xs">· {isRtl ? 'المسموح والممنوع' : 'Boundaries & Do/Don’t'}</span>
              </label>
              <span className={`text-xs font-semibold ${scoreConstraints === 15 ? 'text-emerald-600' : 'text-slate-400'}`}>
                {scoreConstraints}/15 pts
              </span>
            </div>
            <textarea
              value={constraints}
              onChange={(e) => setConstraints(e.target.value)}
              rows={2}
              placeholder={isRtl ? 'مثال: لا تتجاوز 250 كلمة. لا تستخدم مصطلحات معقدة...' : 'e.g., Do not exceed 250 words. No jargon...'}
              className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-hidden font-mono"
            />
          </div>

          {/* Block 6: Exemples / Méthode */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>6. [{isRtl ? 'الأمثلة أو التفكير المرحلي' : 'EXAMPLES / COT'}]</span>
                <span className="text-slate-400 font-normal font-sans text-xs">· {isRtl ? 'Few-shot أو تفكير خطوة بخطوة' : 'Few-shot or Step-by-Step'}</span>
              </label>
              <span className={`text-xs font-semibold ${scoreExamples === 15 ? 'text-emerald-600' : 'text-slate-400'}`}>
                {scoreExamples}/15 pts
              </span>
            </div>
            <textarea
              value={examples}
              onChange={(e) => setExamples(e.target.value)}
              rows={2}
              placeholder={isRtl ? 'مثال: فكر خطوة بخطوة. مثال 1: ...' : 'e.g., Think step by step. Example 1: ...'}
              className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-hidden font-mono"
            />
          </div>
        </div>

        {/* Right column: Quality Rubric & Live Prompt Output */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quality Score Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {t.qualityScore}
                </h4>
              </div>
              <span className={`text-xl font-extrabold ${
                totalScore >= 80 ? 'text-emerald-600' : totalScore >= 50 ? 'text-amber-500' : 'text-slate-400'
              }`}>
                {totalScore} / 100
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  totalScore >= 80 ? 'bg-emerald-500' : totalScore >= 50 ? 'bg-amber-500' : 'bg-indigo-500'
                }`}
                style={{ width: `${totalScore}%` }}
              />
            </div>

            {/* Diagnostic */}
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
              {totalScore >= 80 ? (
                <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                  {language === 'ar' ? '✓ أمر ممتاز متكامل الأركان!' : '✓ Master-grade prompt! All methodology verified.'}
                </div>
              ) : totalScore >= 50 ? (
                <div className="text-amber-600 dark:text-amber-400">
                  {language === 'ar' ? '⚡ بداية جيدة. أكمل القيود والتنسيق للوصول إلى درجة الامتياز.' : '⚡ Solid start. Refine constraints and format for excellence.'}
                </div>
              ) : (
                <div className="text-slate-500">
                  {language === 'ar' ? 'املأ الحقول في اليسار لرفع درجة جودة الأمر.' : 'Fill the blocks on the left to increase your score.'}
                </div>
              )}
            </div>
          </div>

          {/* Assembled Prompt Live Box */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                {t.assembledPrompt}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-xs font-medium text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? t.copied : t.copy}
              </button>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 max-h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed">
              {assembledPrompt}
            </div>

            {/* Test Simulation Button */}
            <div className="pt-2">
              <button
                onClick={handleSimulate}
                disabled={simulating}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                {simulating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{t.calculatingAi}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>{t.simulatePrompt}</span>
                  </>
                )}
              </button>
            </div>

            {/* Simulation output */}
            {simulationResult && (
              <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-900/60 font-sans text-xs text-slate-200 whitespace-pre-wrap leading-relaxed animate-in fade-in duration-300">
                {simulationResult}
              </div>
            )}
          </div>

          {/* Validation and Completion Trigger */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-indigo-950/30 dark:to-emerald-950/30 border border-indigo-200 dark:border-indigo-900/60 text-center space-y-3">
            <Trophy className="w-8 h-8 text-amber-500 mx-auto" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              {t.readyForCert}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              {t.certUnlockDesc}
            </p>
            <button
              onClick={handleSaveAndCertify}
              disabled={totalScore < 60}
              className={`w-full py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                totalScore >= 60
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25'
                  : 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>{t.validateProjectBtn}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
