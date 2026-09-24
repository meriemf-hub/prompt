import { getModulesData } from '../data/modulesData';
import { getGlossaryData } from '../data/glossaryData';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

export function generateSingleHtmlCourse(studentName: string = 'Étudiant', lang: Language = 'fr'): string {
  const modules = getModulesData(lang);
  const glossary = getGlossaryData(lang);
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const modulesJson = JSON.stringify(modules);
  const glossaryJson = JSON.stringify(glossary);

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${isRtl ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.appTitle} : ${t.appSubtitle}</title>
  <style>
    :root {
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text: #0f172a;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --primary: #4f46e5;
      --primary-light: #eef2ff;
      --success: #10b981;
      --success-light: #ecfdf5;
      --danger: #ef4444;
      --danger-light: #fef2f2;
      --code-bg: #0f172a;
      --code-text: #e2e8f0;
    }
    .dark {
      --bg: #090d16;
      --card-bg: #111827;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --border: #1f2937;
      --primary: #6366f1;
      --primary-light: #1e1b4b;
      --success: #10b981;
      --success-light: #064e3b;
      --danger: #ef4444;
      --danger-light: #450a0a;
      --code-bg: #030712;
      --code-text: #f1f5f9;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      transition: background-color 0.2s, color 0.2s;
    }
    header {
      background: var(--card-bg);
      border-bottom: 1px solid var(--border);
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .logo { font-weight: 800; font-size: 1.1rem; color: var(--primary); display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
    .layout { display: flex; min-height: calc(100vh - 65px); }
    aside {
      width: 290px;
      background: var(--card-bg);
      border-right: 1px solid var(--border);
      padding: 1.25rem 1rem;
      overflow-y: auto;
      flex-shrink: 0;
    }
    [dir="rtl"] aside {
      border-right: none;
      border-left: 1px solid var(--border);
    }
    main { flex: 1; padding: 2rem 2.5rem; max-width: 900px; margin: 0 auto; }
    .nav-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      text-align: left;
      padding: 0.75rem 0.85rem;
      border-radius: 0.5rem;
      border: none;
      background: transparent;
      color: var(--text-muted);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 0.25rem;
      transition: 0.15s;
    }
    [dir="rtl"] .nav-btn { text-align: right; }
    .nav-btn:hover { background: var(--border); color: var(--text); }
    .nav-btn.active { background: var(--primary-light); color: var(--primary); }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .analogy-box {
      background: var(--primary-light);
      border-left: 4px solid var(--primary);
      padding: 1.25rem;
      border-radius: 0.5rem;
      margin: 1.25rem 0;
    }
    [dir="rtl"] .analogy-box {
      border-left: none;
      border-right: 4px solid var(--primary);
    }
    .comp-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
      margin: 1.25rem 0;
    }
    @media (max-width: 768px) {
      .layout { flex-direction: column; }
      aside { width: 100%; border-right: none; border-bottom: 1px solid var(--border); }
      .comp-grid { grid-template-columns: 1fr; }
      main { padding: 1.25rem; }
    }
    .bad-prompt {
      background: var(--danger-light);
      border: 1px solid var(--danger);
      padding: 1rem;
      border-radius: 0.75rem;
    }
    .good-prompt {
      background: var(--success-light);
      border: 1px solid var(--success);
      padding: 1rem;
      border-radius: 0.75rem;
    }
    pre {
      background: var(--code-bg);
      color: var(--code-text);
      padding: 0.85rem;
      border-radius: 0.5rem;
      font-family: monospace;
      font-size: 0.85rem;
      white-space: pre-wrap;
      margin: 0.5rem 0;
    }
    button.btn {
      background: var(--primary);
      color: white;
      border: none;
      padding: 0.6rem 1.2rem;
      font-weight: 600;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 0.85rem;
    }
    .quiz-opt {
      display: block;
      width: 100%;
      text-align: left;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
      background: var(--card-bg);
      color: var(--text);
      cursor: pointer;
    }
    [dir="rtl"] .quiz-opt { text-align: right; }
    .quiz-opt:hover { border-color: var(--primary); }
    .correct { background: var(--success-light) !important; border-color: var(--success) !important; font-weight: bold; }
    .incorrect { background: var(--danger-light) !important; border-color: var(--danger) !important; }
    .badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      font-size: 0.75rem;
      font-weight: bold;
      border-radius: 9999px;
      background: var(--primary-light);
      color: var(--primary);
    }
  </style>
</head>
<body>
  <header>
    <div class="logo" onclick="selectModule(1)">
      <span>✨</span>
      <span>${t.appTitle} : ${t.appSubtitle}</span>
    </div>
    <div style="display: flex; gap: 0.75rem; align-items: center;">
      <button class="btn" style="background: transparent; color: var(--text); border: 1px solid var(--border);" onclick="toggleDark()">🌓 ${t.theme}</button>
      <button class="btn" onclick="showGlossary()">📖 ${t.glossary}</button>
    </div>
  </header>

  <div class="layout">
    <aside>
      <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: bold; margin-bottom: 0.75rem;">
        ${t.curriculum} (${t.hours})
      </div>
      <div id="nav-list"></div>
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
        <button class="nav-btn" onclick="showGlossary()">
          <span>📖 ${t.glossary}</span>
        </button>
        <button class="nav-btn" onclick="showResults()">
          <span>🏆 ${t.certificate}</span>
        </button>
      </div>
    </aside>

    <main id="content-area">
      <!-- Dynamic render -->
    </main>
  </div>

  <script>
    const modules = ${modulesJson};
    const glossary = ${glossaryJson};
    const labels = {
      objectives: "${t.objectives}",
      realLifeAnalogy: "${t.realLifeAnalogy}",
      keyLesson: "${t.keyLesson}",
      comparisonsTitle: "${t.comparisonsTitle}",
      badPrompt: "${t.badPrompt}",
      goodPrompt: "${t.goodPrompt}",
      whyInsufficient: "${t.whyInsufficient}",
      whatMakesDifference: "${t.whatMakesDifference}",
      practiceLab: "${t.practiceLab}",
      scenario: "${t.scenario}",
      sampleSolution: "${t.sampleSolution}",
      interactiveQuiz: "${t.interactiveQuiz}",
      summaryTitle: "${t.summaryTitle}",
      prevModule: "${t.prevModule}",
      nextModule: "${t.nextModule}",
      seeCertificate: "${t.seeCertificate}",
      glossary: "${t.glossary}",
      glossaryTitle: "${t.glossaryTitle}",
      glossarySubtitle: "${t.glossarySubtitle}"
    };

    let activeModuleId = 1;

    function renderNav() {
      const navList = document.getElementById('nav-list');
      navList.innerHTML = modules.map(m => \`
        <button class="nav-btn \${m.id === activeModuleId ? 'active' : ''}" onclick="selectModule(\${m.id})">
          <span>\${m.title}</span>
          <span style="font-size: 0.75rem; opacity: 0.7;">\${m.estimatedMinutes}m</span>
        </button>
      \`).join('');
    }

    function selectModule(id) {
      activeModuleId = id;
      renderNav();
      renderModule();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderModule() {
      const m = modules.find(item => item.id === activeModuleId);
      if (!m) return;
      const area = document.getElementById('content-area');

      let compsHtml = m.comparisons.map(c => \`
        <div class="card">
          <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem;">\${c.title}</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">\${c.contextDesc}</p>
          <div class="comp-grid">
            <div class="bad-prompt">
              <strong>❌ \${labels.badPrompt} :</strong>
              <pre>\${c.badPrompt.text}</pre>
              <div style="font-size: 0.85rem; margin-top: 0.5rem;"><strong>\${labels.whyInsufficient}</strong> \${c.badPrompt.critique}</div>
            </div>
            <div class="good-prompt">
              <strong>✅ \${labels.goodPrompt} :</strong>
              <pre>\${c.goodPrompt.text}</pre>
              <div style="font-size: 0.85rem; margin-top: 0.5rem;"><strong>\${labels.whatMakesDifference}</strong> \${c.goodPrompt.explanation}</div>
            </div>
          </div>
        </div>
      \`).join('');

      let quizHtml = m.quiz.map((q, idx) => \`
        <div style="margin-bottom: 1.5rem;">
          <p style="font-weight: 600; margin-bottom: 0.5rem;">\${idx + 1}. \${q.question}</p>
          \${q.options.map((opt, optIdx) => \`
            <button class="quiz-opt" id="opt-\${q.id}-\${optIdx}" onclick="answerQuiz('\${q.id}', \${optIdx}, \${q.correctAnswer})">
              \${opt}
            </button>
          \`).join('')}
          <div id="exp-\${q.id}" style="display:none; font-size: 0.85rem; padding: 0.75rem; border-radius: 0.5rem; background: var(--primary-light); margin-top: 0.5rem;">
            <strong>Explication :</strong> \${q.explanation}
          </div>
        </div>
      \`).join('');

      area.innerHTML = \`
        <div style="margin-bottom: 2rem;">
          <span class="badge">Module \${m.id} · \${m.estimatedMinutes}m</span>
          <h1 style="font-size: 2rem; margin: 0.5rem 0;">\${m.title}</h1>
          <p style="color: var(--text-muted); font-size: 1.1rem;">\${m.subtitle}</p>
        </div>

        <div class="card">
          <h3 style="margin-bottom: 0.75rem;">🎯 \${labels.objectives}</h3>
          <ul style="padding-left: 1.25rem; padding-right: 1.25rem;">
            \${m.objectives.map(o => \`<li style="margin-bottom: 0.35rem;">\${o}</li>\`).join('')}
          </ul>
        </div>

        <div class="analogy-box">
          <h3 style="color: var(--primary); margin-bottom: 0.5rem;">💡 \${m.analogy.title}</h3>
          <p style="margin-bottom: 0.5rem; font-style: italic;">« \${m.analogy.story} »</p>
          <strong>\${labels.keyLesson}</strong> \${m.analogy.lesson}
        </div>

        \${m.theorySections.map(sec => \`
          <div class="card">
            <h3 style="margin-bottom: 0.75rem;">\${sec.title}</h3>
            <div style="white-space: pre-wrap; font-size: 0.95rem;">\${sec.content}</div>
          </div>
        \`).join('')}

        <h2 style="margin: 2rem 0 1rem 0;">\${labels.comparisonsTitle}</h2>
        \${compsHtml}

        <div class="card" style="background: var(--primary-light); border-color: var(--primary);">
          <h3>📝 \${labels.practiceLab} : \${m.exercise.title}</h3>
          <p style="margin: 0.5rem 0;"><strong>\${labels.scenario}</strong> \${m.exercise.scenario}</p>
          <div style="margin-top: 1rem; padding: 1rem; background: var(--card-bg); border-radius: 0.5rem;">
            <strong>\${labels.sampleSolution} :</strong>
            <pre>\${m.exercise.solutionModel}</pre>
            <p style="font-size: 0.85rem; color: var(--text-muted);">\${m.exercise.explanationSolution}</p>
          </div>
        </div>

        <div class="card">
          <h3 style="margin-bottom: 1rem;">🧠 \${labels.interactiveQuiz}</h3>
          \${quizHtml}
        </div>

        <div class="card">
          <h3 style="margin-bottom: 0.75rem;">📌 \${labels.summaryTitle}</h3>
          <ul style="padding-left: 1.25rem; padding-right: 1.25rem;">
            \${m.summaryPoints.map(p => \`<li style="margin-bottom: 0.4rem;">\${p}</li>\`).join('')}
          </ul>
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
          \${m.id > 1 ? \`<button class="btn" onclick="selectModule(\${m.id - 1})">← \${labels.prevModule}</button>\` : '<div></div>'}
          \${m.id < 8 ? \`<button class="btn" onclick="selectModule(\${m.id + 1})">\${labels.nextModule} →</button>\` : '<button class="btn" style="background:var(--primary); color:white;" onclick="showResults()">🏆 ' + labels.seeCertificate + ' →</button>'}
        </div>
      \`;
    }

    function answerQuiz(qId, selectedIdx, correctIdx) {
      const isCorrect = selectedIdx === correctIdx;
      document.getElementById('opt-' + qId + '-' + selectedIdx).className = 'quiz-opt ' + (isCorrect ? 'correct' : 'incorrect');
      document.getElementById('opt-' + qId + '-' + correctIdx).className = 'quiz-opt correct';
      document.getElementById('exp-' + qId).style.display = 'block';
    }

    function showGlossary() {
      const area = document.getElementById('content-area');
      area.innerHTML = \`
        <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">\${labels.glossaryTitle}</h1>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">\${labels.glossarySubtitle}</p>
        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
          \${glossary.map(g => \`
            <div class="card">
              <span class="badge">\${g.category}</span>
              <h3 style="margin: 0.5rem 0;">\${g.term}</h3>
              <p style="margin-bottom: 0.5rem;">\${g.shortDef}</p>
              <div class="analogy-box" style="margin: 0.5rem 0; font-size: 0.9rem;">
                <strong>💡 :</strong> \${g.analogy}
              </div>
              <pre>\${g.example}</pre>
            </div>
          \`).join('')}
        </div>
      \`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showResults() {
      const area = document.getElementById('content-area');
      area.innerHTML = \`
        <div style="text-align: center; margin-bottom: 2rem;">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🏆</div>
          <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">${t.congratsTitle}</h1>
          <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">${t.congratsSubtitle}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
          <div class="card" style="text-align: center;">
            <div style="font-size: 2rem; font-weight: 800; color: var(--primary);">8 / 8</div>
            <div style="color: var(--text-muted); font-size: 0.85rem;">${t.completed}</div>
          </div>
          <div class="card" style="text-align: center;">
            <div style="font-size: 2rem; font-weight: 800; color: var(--success);">100%</div>
            <div style="color: var(--text-muted); font-size: 0.85rem;">${t.hours}</div>
          </div>
          <div class="card" style="text-align: center;">
            <div style="font-size: 2rem; font-weight: 800; color: #f59e0b;">Mastery</div>
            <div style="color: var(--text-muted); font-size: 0.85rem;">RTCFC + Few-Shot + CoT</div>
          </div>
        </div>

        <div class="card">
          <h3 style="margin-bottom: 1rem;">✨ ${t.verifiedBadges}</h3>
          <ul style="padding-left: 1.25rem; padding-right: 1.25rem;">
            <li style="margin-bottom: 0.5rem;"><strong>RTCFC Architect :</strong> ${lang === 'ar' ? 'إتقان الأركان الخمسة الأساسية' : lang === 'en' ? 'Mastery of the 5 structural pillars' : 'Maîtrise des 5 piliers fondamentaux'}</li>
            <li style="margin-bottom: 0.5rem;"><strong>Anti-Hallucination :</strong> ${lang === 'ar' ? 'حماية المخرجات بالمصادر المغلقة ومخارج الطوارئ' : lang === 'en' ? 'Closed grounding & escape hatches' : 'Garde-fous & sources fermées'}</li>
            <li style="margin-bottom: 0.5rem;"><strong>Few-Shot Strategist :</strong> ${lang === 'ar' ? 'معايرة الأنماط بالأمثلة التوضيحية' : lang === 'en' ? 'Pattern calibration through samples' : 'Calibrage parfait par la démonstration'}</li>
            <li style="margin-bottom: 0.5rem;"><strong>Chain-of-Thought :</strong> ${lang === 'ar' ? 'التفكير المتسلسل خطوة بخطوة' : lang === 'en' ? 'Step-by-step reasoning' : 'Raisonnement pas à pas'}</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <button class="btn" style="background: var(--primary); color: white;" onclick="selectModule(1)">← ${t.reviewModulesBtn}</button>
        </div>
      \`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleDark() {
      document.body.classList.toggle('dark');
    }

    renderNav();
    renderModule();
  </script>
</body>
</html>`;
}
