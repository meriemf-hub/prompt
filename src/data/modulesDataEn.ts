import { CourseModule } from '../types';

export const MODULES_DATA_EN: CourseModule[] = [
  {
    id: 1,
    slug: 'introduction-ia-llm-prompt',
    title: '1. Introduction to the Fundamentals',
    subtitle: 'Understanding Generative AI, LLMs, and the Vital Role of the Prompt',
    estimatedMinutes: 25,
    iconName: 'Sparkles',
    objectives: [
      'Demystify how generative artificial intelligence works',
      'Understand what a Large Language Model (LLM) is and how it predicts text',
      'Define what a prompt is and why precision dictates output quality',
      'Identify the fundamental strengths and physical boundaries of these models'
    ],
    analogy: {
      title: 'The Analogy of the Gifted but Amnesiac Intern',
      story: 'Imagine you hire an intern who has memorized every book in the Library of Congress and all of Wikipedia. He is extraordinarily cultured and writes at superhuman speed. However, he has no common sense, cannot read your mind, and forgets everything if you do not give him a clear, well-framed brief.',
      lesson: 'If you just tell him "Write a report", he will produce 50 irrelevant pages. If you specify the subject, audience, length, and outline, he will deliver exceptional work in minutes. This is exactly how an LLM functions.'
    },
    theorySections: [
      {
        title: 'What is Generative AI?',
        content: `Unlike traditional AI which only classified spam or recognized cats in pictures, **generative AI produces new original content**: articles, software code, executive summaries, images, and audio.

It has neither human consciousness nor personal intent. It operates through deep statistical pattern matching learned across billions of human-written texts.`
      },
      {
        title: 'How does an LLM work?',
        content: `An LLM is a giant probabilistic engine. Its core mathematical objective is to **predict the most probable next word** (or token) given everything written before.

When you type "The sky is...", the model calculates that "blue" or "clear" has a far higher probability than "bicycle". By chaining these calculations at lightspeed, it generates fluid and coherent paragraphs.`,
        keyTakeaway: 'The AI does not "think" like a human: it statistically calculates the next most coherent sequence of tokens based on your prompt.'
      },
      {
        title: 'What is a Prompt and Prompt Engineering?',
        content: `A **prompt** is the text instruction you submit to the AI.

**Prompt Engineering** is the craft of designing instructions so clearly and with such rich context that the model reliably outputs high-value, accurate, and properly formatted results. It is the bridge between human intention and statistical AI computation.`
      }
    ],
    comparisons: [
      {
        id: 'comp-1',
        title: 'Vague Request vs Context-Rich Instruction',
        contextDesc: 'You want to write a professional email to postpone an important meeting.',
        badPrompt: {
          text: 'Write an email to postpone a meeting.',
          critique: 'No context, no tone, no justification, no recipient specified. The AI has to guess everything randomly.',
          simulatedOutput: 'Subject: Meeting Postponed\n\nHi,\nI need to postpone our meeting. Let me know when you are free.\nBest,\nMe'
        },
        goodPrompt: {
          text: 'Write a courteous and professional email to my department head (Marcus). I need to postpone tomorrow’s 2:00 PM budget review meeting because our accounting firm has delayed delivering the finalized Q3 balance sheet. Propose two alternate times: Thursday at 10:00 AM or Friday at 3:00 PM. Length: approximately 60 to 80 words.',
          breakdown: [
            { part: 'Write a courteous and professional email', label: 'Task & Tone', color: 'indigo' },
            { part: 'to my department head (Marcus)', label: 'Audience', color: 'emerald' },
            { part: 'postpone tomorrow’s 2:00 PM budget review... accounting delay', label: 'Precise Context', color: 'amber' },
            { part: 'Propose two alternate times... 60 to 80 words', label: 'Constraints & Format', color: 'sky' }
          ],
          explanation: 'The AI knows the exact tone, recipient, legitimate justification, and replacement options.',
          simulatedOutput: 'Subject: Rescheduling our Q3 Budget Review meeting\n\nHi Marcus,\n\nI am writing to request rescheduling our budget review meeting originally set for tomorrow at 2:00 PM. Our external accounting firm is finalizing the consolidated numbers, which will only reach us late tomorrow afternoon.\n\nTo ensure we review confirmed figures, would either Thursday at 10:00 AM or Friday at 3:00 PM suit your calendar?\n\nThank you for your understanding,\nWarm regards,'
        }
      }
    ],
    exercise: {
      id: 'exo-1',
      title: 'Transform a Vague Prompt into a Guided Directive',
      scenario: 'You want to ask the AI to explain what Cloud Computing is.',
      objective: 'Add a target audience (a 10-year-old child or a non-technical grandparent), a structured format (3 short paragraphs or an everyday analogy), and an encouraging tone.',
      starterPrompt: 'Explain the cloud.',
      criteria: [
        {
          id: 'target',
          label: 'Specific target audience mentioned',
          keywords: ['child', 'beginner', 'grandparent', 'non-technical', '10-year-old', 'novice', 'kid'],
          feedback: 'Great job defining who the explanation is for!'
        },
        {
          id: 'analogy',
          label: 'Everyday analogy or metaphor requested',
          keywords: ['analogy', 'metaphor', 'example', 'locker', 'library', 'storage', 'toy'],
          feedback: 'Excellent! Requesting an analogy removes technical jargon.'
        },
        {
          id: 'format',
          label: 'Format or length constraint',
          keywords: ['paragraph', 'sentence', 'bullets', 'short', 'words', 'steps'],
          feedback: 'Well done! A formatting constraint prevents walls of text.'
        }
      ],
      hint: 'Try: "Act as an encouraging educator. Explain Cloud Computing to a 75-year-old who has never used a computer, using the analogy of renting a secure locker. Limit your response to 3 short paragraphs."',
      solutionModel: 'Act as a patient educator. Explain the concept of "Cloud Computing" to a 75-year-old person who has never used a computer before. Use an everyday analogy (such as renting a secure locker in a central post office rather than keeping everything in your pocket). Limit your answer to 3 short paragraphs with zero technical jargon.',
      explanationSolution: 'This prompt sets the persona (educator), the audience (elderly beginner), the explanatory mechanism (everyday locker analogy), and strict constraints (no jargon, 3 paragraphs).'
    },
    quiz: [
      {
        id: 'q1-1',
        question: 'What is the core mathematical mechanism behind an LLM?',
        options: [
          'It looks up live answers in an encrypted online encyclopedia',
          'It statistically predicts the most probable next token given the prompt context',
          'It validates the logical and moral truth of human thoughts',
          'It runs hidden SQL queries on a private database'
        ],
        correctAnswer: 1,
        explanation: 'An LLM is a statistical next-token predictor trained on billions of texts. It calculates probabilities based on your input.'
      },
      {
        id: 'q1-2',
        question: 'Why does a very short prompt like "Write a story" usually yield mediocre results?',
        options: [
          'Because the model lacks RAM to generate more than 50 words',
          'Because the model dislikes fiction',
          'Because the absence of constraints forces the model toward generic statistical averages',
          'Because LLMs cannot invent stories'
        ],
        correctAnswer: 2,
        explanation: 'Without genre, character, or plot guidance, the model falls back on common cliches and generic tropes.'
      },
      {
        id: 'q1-3',
        question: 'What is a "token" in language model terminology?',
        options: [
          'A cryptocurrency used to purchase API credits',
          'A basic text chunk (about 4 characters or 0.75 words in English) processed by the model',
          'A system authentication password',
          'A content moderation rule'
        ],
        correctAnswer: 1,
        explanation: 'Models process text in token fragments. For example, common words are usually 1 token each.'
      },
      {
        id: 'q1-4',
        question: 'Which mindset is most effective when writing prompts?',
        options: [
          'Treating the AI like a telepath who intuitively understands your hidden goals',
          'Speaking in binary 0s and 1s',
          'Acting like a manager giving a structured, well-contextualized brief to a talented assistant',
          'Keeping prompts as short as possible to save computing power'
        ],
        correctAnswer: 2,
        explanation: 'Treating the AI like a capable coworker who requires an explicit brief is the foundation of prompt engineering.'
      }
    ],
    summaryPoints: [
      'An LLM does not think or possess intent: it predicts the next statistically coherent token.',
      'Output quality is a direct reflection of prompt quality ("Garbage In, Garbage Out").',
      'Without specific constraints, AI defaults to bland, generic averages.',
      'The prompt engineer’s role is to provide clear direction, persona, format, and boundaries.'
    ]
  },
  {
    id: 2,
    slug: 'anatomie-bon-prompt-methode-rtcfc',
    title: '2. Anatomy of a Perfect Prompt (RTCFC)',
    subtitle: 'The RTCFC Method: Role, Task, Context, Format, and Constraints',
    estimatedMinutes: 30,
    iconName: 'Layers',
    objectives: [
      'Master the 5 pillars of the RTCFC framework',
      'Assign an expert Persona to set appropriate vocabulary and rigor',
      'Formulate Tasks with unequivocal action verbs',
      'Specify output Formats ready for immediate real-world use (tables, bullets, JSON)',
      'Establish both positive and negative Constraints to eliminate hallucinations'
    ],
    analogy: {
      title: 'The Custom Furniture Maker Analogy',
      story: 'If you walk into a master carpenter’s workshop and say: "Make me a wooden piece of furniture", you might end up with a rustic garden stool when you actually wanted a Scandinavian floor-to-ceiling bookshelf.',
      lesson: 'To get exactly what you need, you state the piece (bookshelf), the room (living room with 9ft ceilings), the material (light oak), the exact dimensions, and what not to do (no exposed screws). The RTCFC method applies this exact craftsmanship to prompt writing.'
    },
    theorySections: [
      {
        title: 'The RTCFC Framework Explained',
        content: `Never face an empty text box without direction. Use **RTCFC**:

1. **R (Role)**: Who is the AI? (*"Act as a B2B SaaS marketing director..."*)
2. **T (Task)**: What action must it perform? Use action verbs (*"Draft", "Compare", "Summarize"*).
3. **C (Context)**: What is the background, audience, and situation?
4. **F (Format)**: How should the output be structured? (*3-column Markdown table, numbered list, 150-word email*).
5. **C (Constraints)**: What boundaries must be respected? (*"Do not exceed 5 bullet points", "No buzzwords"*).`
      },
      {
        title: 'Why Assigning a Role Upgrades Output Quality',
        content: `Assigning a role primes the model’s lexical space:
- *"You are a corporate tax attorney"* activates cautious, formal, and structured legal terminology.
- *"You are an elementary school science teacher"* activates relatable metaphors, simple vocabulary, and engaging tone.`,
        keyTakeaway: 'The Role dresses the model in the right lexical suit before it writes its first sentence.'
      },
      {
        title: 'Positive vs Negative Constraints',
        content: `- **Positive constraint**: What the model *must* do (*"Include exactly 3 concrete examples"*).
- **Negative constraint**: What the model *must avoid* (*"Do not write a generic summary sentence like 'In conclusion'"*).
*Pro tip:* LLMs follow positive directives ("Do X") much more reliably than pure negations ("Do not do Y"). Always specify what to do instead!`
      }
    ],
    comparisons: [
      {
        id: 'comp-2',
        title: 'Informal Request vs Structured RTCFC Prompt',
        contextDesc: 'Creating a launch marketing strategy for an eco-friendly stainless steel water bottle.',
        badPrompt: {
          text: 'Give me ideas to launch my eco-friendly water bottle brand.',
          critique: 'No persona, no channels, no budget, no audience, open format resulting in generic textbook cliches.',
          simulatedOutput: '1. Create an Instagram account.\n2. Work with eco-influencers.\n3. Offer a 10% discount.\n4. Attend green trade shows.\n5. Print flyers.'
        },
        goodPrompt: {
          text: `[ROLE] You are a senior brand strategist specializing in sustainable DTC consumer goods for Gen Z (18-25).
[CONTEXT] We are launching "AquaPure", a lifetime-guaranteed recycled stainless steel bottle priced at $35. Our total pre-launch budget is under $2,500.
[TASK] Propose a 4-week organic pre-launch timeline before the e-commerce store opens.
[FORMAT] Present the output as a 3-column Markdown table: Week, Priority Actions, Success Metric (KPI).
[CONSTRAINTS]
- Rely solely on organic viral channels (TikTok, UGC challenges, micro-creator giftings).
- Zero paid ad spend allowed.
- Keep recommendations specific and actionable.`,
          breakdown: [
            { part: '[ROLE] You are a senior brand strategist...', label: 'Expert Role', color: 'indigo' },
            { part: '[CONTEXT] We are launching "AquaPure"... under $2,500', label: 'Product & Budget Context', color: 'amber' },
            { part: '[TASK] Propose a 4-week organic pre-launch timeline...', label: 'Clear Task', color: 'emerald' },
            { part: '[FORMAT] Present as a 3-column Markdown table...', label: 'Structured Format', color: 'sky' },
            { part: '[CONSTRAINTS] Organic only / Zero paid ads', label: 'Strict Constraints', color: 'rose' }
          ],
          explanation: 'Every element of the RTCFC framework is delineated. The output is directly presentation-ready.',
          simulatedOutput: `| Week | Priority Actions | Success Metric (KPI) |
| :--- | :--- | :--- |
| **W1: The Teaser** | Post 5 TikTok videos showing recycled factory backstage footage and humorous durability drop-tests. | +500 qualified followers, video completion rate > 35% |
| **W2: The Zero-Waste Challenge** | Launch the #PureDrop trend inviting users to show their worst beat-up plastic bottles for VIP waitlist access. | 100 organic UGC submissions |
| **W3: Micro-Creator Gifting** | Seed 20 personalized laser-engraved bottles to niche eco-creators (3k–15k followers) without forced scripts. | At least 12 unprompted unboxing stories |
| **W4: Exclusive Waitlist Gate** | Open a 48-hour private shopping window for the first 300 email subscribers with free custom engraving. | Waitlist checkout conversion rate > 18% on Day 1 |`
        }
      }
    ],
    exercise: {
      id: 'exo-2',
      title: 'Apply the RTCFC Framework',
      scenario: 'You work at an animal shelter and need to write an adoption listing for Rocky (a 3-year-old playful mixed shepherd who loves kids but cannot live with cats).',
      objective: 'Draft a prompt including: Role (caring shelter copywriter), Task (emotional listing), Context (shelter background, Rocky’s traits), Format (catchy title, short story, bullet list), and Constraints (honestly state the cat restriction).',
      starterPrompt: 'Write an ad to get a dog adopted.',
      criteria: [
        {
          id: 'role',
          label: 'Explicit Role defined',
          keywords: ['role', 'act as', 'you are', 'copywriter', 'volunteer', 'shelter', 'expert'],
          feedback: 'Perfect! Embodying a persona establishes the right emotional tone.'
        },
        {
          id: 'context',
          label: 'Rocky’s details and situation included',
          keywords: ['rocky', 'dog', 'shepherd', 'years', 'kids', 'cats', 'shelter'],
          feedback: 'Great, Rocky’s unique traits are clearly communicated.'
        },
        {
          id: 'format',
          label: 'Structured output format requested',
          keywords: ['format', 'table', 'bullets', 'paragraphs', 'title', 'list'],
          feedback: 'Excellent, clear formatting ensures clean layout.'
        },
        {
          id: 'constraint',
          label: 'Constraint included (cat safety, avoiding pity)',
          keywords: ['constraint', 'honest', 'must', 'cats', 'without', 'caution'],
          feedback: 'Superb! Responsible constraints protect the animal.'
        }
      ],
      hint: 'Structure your prompt using headers: [Role], [Context], [Task], [Format], [Constraints].',
      solutionModel: `[ROLE] You are a passionate adoption coordinator and storyteller at an animal shelter.
[CONTEXT] We are seeking a loving forever home for Rocky, a 3-year-old shepherd mix. He is fully house-trained, high-energy, deeply affectionate with children, but has high prey drive and must NEVER live with cats.
[TASK] Write an inspiring adoption profile that balances warmth with safety.
[FORMAT]
1. A first-person hook title from Rocky's perspective.
2. A 100-word introduction story.
3. A bulleted list: "My ideal human checklist".
[CONSTRAINTS] Be 100% upfront about the no-cat rule in a caring manner. Avoid guilt-tripping or overly dramatic language.`,
      explanationSolution: 'Complete RTCFC structure. The model has zero ambiguity and will craft an ethical, compelling listing.'
    },
    quiz: [
      {
        id: 'q2-1',
        question: 'What does the RTCFC acronym stand for?',
        options: [
          'Rapid, Technical, Compliant, Fast, Complete',
          'Role, Task, Context, Format, Constraints',
          'Network, Token, Calculation, Function, Code',
          'Research, Translation, Correction, Framing, Close'
        ],
        correctAnswer: 1,
        explanation: 'RTCFC defines the 5 structural pillars: Role, Task, Context, Format, and Constraints.'
      },
      {
        id: 'q2-2',
        question: 'Why assign an expert persona (e.g., "You are a sports nutritionist")?',
        options: [
          'It primes domain-specific vocabulary and sets the standard of analytical depth',
          'It unlocks hidden paid capabilities of the model',
          'It makes the model write 5x faster',
          'It bypasses AI safety guardrails'
        ],
        correctAnswer: 0,
        explanation: 'The persona steers the model’s latent representations toward specialized terminology and appropriate professional perspective.'
      },
      {
        id: 'q2-3',
        question: 'Which constraint is formulated most effectively for an LLM?',
        options: [
          'Don’t be boring.',
          'Keep every sentence under 18 words and include exactly 2 rhetorical questions.',
          'Do your best.',
          'Be careful with what you say.'
        ],
        correctAnswer: 1,
        explanation: 'Actionable, quantifiable positive metrics eliminate the ambiguity of subjective words like "boring".'
      },
      {
        id: 'q2-4',
        question: 'What is the main benefit of specifying a concrete output Format (e.g. Markdown table)?',
        options: [
          'You avoid spending time manually cleaning and reformatting data afterwards',
          'It saves server electricity',
          'It prevents the AI from needing internet access',
          'It makes the prompt look prettier'
        ],
        correctAnswer: 0,
        explanation: 'Specifying format guarantees output ready for immediate copy-pasting into spreadsheets, slides, or emails.'
      }
    ],
    summaryPoints: [
      'The RTCFC framework provides an infallible engineering structure for any prompt.',
      'The Role sets tone, professional vocabulary, and perspective.',
      'The Task should center around an unambiguous action verb.',
      'Format and Constraints eliminate fluff and deliver drop-in ready results.'
    ]
  },
  {
    id: 3,
    slug: 'clarte-precision-eviter-prompts-vagues',
    title: '3. Clarity & Precision: Eliminating Vagueness',
    subtitle: 'Banishing Sponge Words and Mastering Text Delimiters',
    estimatedMinutes: 25,
    iconName: 'Crosshair',
    objectives: [
      'Identify vague "sponge words" (short, nice, quick, good)',
      'Quantify requirements mathematically (word count, bullet count, paragraphs)',
      'Use delimiters (triple quotes, XML tags) to separate commands from raw data',
      'Use direct action imperatives instead of dilutive pleasantries'
    ],
    analogy: {
      title: 'The Hair Salon Analogy',
      story: 'Sitting in a barber chair and saying "Just trim a little and make it look fresh" is a huge gamble. To the barber, "a little" could mean half an inch or a buzz cut.',
      lesson: 'To get what you want, you specify: "Take half an inch off the sides with scissors, keep length on top styled to the right, and taper the neckline." In prompting, every vague word is an invitation to disappointment.'
    },
    theorySections: [
      {
        title: 'Hunting Down "Sponge Words"',
        content: `A sponge word is a subjective adjective that absorbs multiple conflicting interpretations:
- ❌ *"Write a short summary"* -> The AI might write 3 words or 3 pages.
- ✅ *"Summarize this text in exactly 150 words (+/- 10%)"*
- ❌ *"Use a nice tone"* -> The AI might use slang or overly enthusiastic exclamation points.
- ✅ *"Use an empathetic, professional tone addressing the reader in the second person (you)"*`
      },
      {
        title: 'The Superpower of Delimiters',
        content: `When asking an LLM to analyze text, isolate your instruction from the raw data using distinct delimiters:
- Triple quotes: \`"""\`
- XML tags: \`<article>...</article>\`
- Markdown code blocks: \`\`\`

This prevents the AI from mistaking a sentence inside the document for an instruction!`,
        keyTakeaway: 'Delimiters construct an airtight barrier between your instructions and the raw data payload.'
      },
      {
        title: 'Direct Action Over Wordy Politeness',
        content: `While polite to say *"Could you please be kind enough to help me draft..."*, to an LLM this dilutes attention across wasted tokens.
Use direct action verbs: **"Analyze"**, **"Extract"**, **"Classify"**, **"Draft"**.`
      }
    ],
    comparisons: [
      {
        id: 'comp-3',
        title: 'Vague Instruction vs Delimited, Quantified Prompt',
        contextDesc: 'Extracting key issues from an unhappy customer review.',
        badPrompt: {
          text: 'Tell me what is wrong with this review: Package was 2 days late, the box was crushed and the charger cable was missing. Product is good but service is bad.',
          critique: 'Data mixed with command without delimiters. No output structure requested.',
          simulatedOutput: 'The customer is complaining about shipping delays, damaged packaging, and a missing cable. They like the product but not the service.'
        },
        goodPrompt: {
          text: `Analyze the customer review enclosed within <review> tags below.

<review>
Package was 2 days late, the box was crushed and the charger cable was missing. Product is good but service is bad.
</review>

Execute the following 3 tasks:
1. Categorize overall sentiment (Positive, Neutral, Negative).
2. Extract the operational issues as bullet points, rating each severity as [Low | Medium | High].
3. Draft a 3-sentence apology response from Customer Care offering an immediate replacement cable.`,
          breakdown: [
            { part: 'Analyze the customer review enclosed within <review> tags', label: 'Clear directive + Delimiter', color: 'indigo' },
            { part: '<review>...</review>', label: 'Isolated Data Payload', color: 'amber' },
            { part: 'Execute 3 tasks: 1. Categorize... 2. Extract... 3. Draft...', label: 'Quantified Tasks', color: 'emerald' }
          ],
          explanation: 'The AI knows exactly where the document begins and ends, and what 3 deliverables are required.',
          simulatedOutput: `1. Sentiment: Negative (with isolated product satisfaction)

2. Operational Issues:
• 48-hour delivery delay [Severity: Medium]
• Damaged exterior packaging [Severity: Medium]
• Missing component (charging cable) [Severity: High]

3. Customer Care Response:
"Please accept our sincere apologies for the delivery delay and the damaged parcel. We have dispatched a brand-new charging cable via express courier to your address today at no cost. Your satisfaction is our top priority, and we are reviewing our carrier packaging standards to ensure this does not happen again."`
        }
      }
    ],
    exercise: {
      id: 'exo-3',
      title: 'Cleanse a Vague Prompt & Inject Delimiters',
      scenario: 'You have a 400-word blog post on cybersecurity. You want 3 practical tips for office workers, each in 1 sentence.',
      objective: 'Rewrite the starter prompt to remove ambiguity, add delimiters (e.g. <article>), and set exact quantitative limits.',
      starterPrompt: 'Summarize this cybersecurity article in a nice short way: [paste text]',
      criteria: [
        {
          id: 'delimiters',
          label: 'Uses delimiters (XML tags, triple quotes)',
          keywords: ['<', '>', '"""', 'tag', 'delimit', 'quotes', 'brackets'],
          feedback: 'Great! Delimiters safely isolate your raw text.'
        },
        {
          id: 'quantity',
          label: 'Quantified constraint (3 tips, 1 sentence each)',
          keywords: ['3', 'three', 'sentence', 'each', 'exactly', 'bullets', 'words'],
          feedback: 'Superb! Numbering removes all ambiguity around length.'
        },
        {
          id: 'target_audience',
          label: 'Clear audience (office employees, beginners)',
          keywords: ['employee', 'worker', 'office', 'beginner', 'staff', 'team'],
          feedback: 'Excellent, target audience is clearly stated.'
        }
      ],
      hint: 'Structure: "Analyze the text inside <article>...</article>. Extract exactly 3 cybersecurity tips for office workers. Each tip must be 1 sentence maximum."',
      solutionModel: `Analyze the text enclosed within triple quotes below:

"""
[Insert article text here]
"""

Tasks:
1. Extract exactly 3 priority security tips immediately actionable by office employees.
2. Phrase each tip as a single imperative sentence under 20 words.
3. Do not include any introductory or concluding text.`,
      explanationSolution: 'No sponge words: triple quotes isolate the text, output is strictly 3 items under 20 words, and pleasantries are forbidden.'
    },
    quiz: [
      {
        id: 'q3-1',
        question: 'Which instruction is the most unambiguous for an AI model?',
        options: [
          'Write a short, punchy text about sports.',
          'Give me a quick briefing for my team tomorrow.',
          'Draft an 80-to-100-word paragraph detailing 2 cardiovascular benefits of swimming for a sedentary adult.',
          'Talk a bit about fitness in general.'
        ],
        correctAnswer: 2,
        explanation: 'It quantifies length (80-100 words), specifies the focus (2 cardiovascular benefits), and identifies the audience (sedentary adult).'
      },
      {
        id: 'q3-2',
        question: 'What is the purpose of delimiters like `"""` or `<text>...</text>` in a prompt?',
        options: [
          'To encrypt user data',
          'To cleanly separate instructions from raw text data',
          'To make generation 50% faster',
          'To make text bold'
        ],
        correctAnswer: 1,
        explanation: 'Delimiters construct a clean boundary so the model does not confuse data with executable instructions.'
      },
      {
        id: 'q3-3',
        question: 'Why should you avoid wordy phrases like "Could you please be kind enough to...?"',
        options: [
          'They waste token budget and bury the core action verb in useless text',
          'AI models hate politeness',
          'It causes runtime crashes',
          'It triggers safety flags'
        ],
        correctAnswer: 0,
        explanation: 'Overly polite padding consumes tokens without adding any meaningful constraints or semantic direction.'
      },
      {
        id: 'q3-4',
        question: 'What happens if you simply prompt: "Don’t make it too long"?',
        options: [
          'The AI generates a single word',
          'The AI has a different definition of "long" and might generate 500 words',
          'The AI refuses to respond',
          'The AI loops indefinitely'
        ],
        correctAnswer: 1,
        explanation: '"Too long" is completely subjective. Always define an explicit word, sentence, or paragraph count.'
      }
    ],
    summaryPoints: [
      'Eliminate sponge words: "short", "quick", "nice", "well-written".',
      'Quantify requirements: word counts, bullet counts, column counts.',
      'Use delimiters (XML tags, quotes) to create clear boundaries around data.',
      'Lead with direct imperative action verbs.'
    ]
  },
  {
    id: 4,
    slug: 'exemples-prompt-zero-shot-few-shot',
    title: '4. The Power of Examples: Few-Shot',
    subtitle: 'Zero-Shot vs Few-Shot: Demonstrating Rather Than Describing',
    estimatedMinutes: 30,
    iconName: 'CopyCheck',
    objectives: [
      'Understand the difference between Zero-shot, One-shot, and Few-shot prompting',
      'Learn why 2 or 3 examples outperform 10 lines of abstract explanations',
      'Master the standard [Input -> Output] demonstration pattern',
      'Calibrate brand tone and rigid schemas through examples'
    ],
    analogy: {
      title: 'The Salsa Dancing Analogy',
      story: 'Imagine trying to teach someone a salsa step by talking for an hour: "Step forward on 1 at a 45-degree angle, shift weight to the ball of your right foot on 2...". They will be utterly confused.',
      lesson: 'If you say: "Watch me do it twice", dance the step, then say "Now your turn!", they succeed immediately. Few-shot prompting is showing the dance step to the AI.'
    },
    theorySections: [
      {
        title: 'The Spectrum: Zero-Shot vs Few-Shot',
        content: `- **Zero-shot**: Providing the task without any examples. Good for broad creative tasks.
- **One-shot**: Providing **1 example** to demonstrate target format.
- **Few-shot**: Providing **2 to 5 targeted examples**. The gold standard for classification, strict schema adherence, and voice consistency.`
      },
      {
        title: 'The Standard Few-Shot Pattern',
        content: `Structure your examples symmetrically so the model catches the pattern:

\`\`\`text
Task: Translate technical jargon into plain everyday English.

Example 1:
Input: "We deployed a hotfix to address a memory leak on our Kubernetes cluster."
Output: "We fixed a bug that was slowing down our servers."

Example 2:
Input: "The CI/CD pipeline failed due to a merge conflict regression."
Output: "The automated update was paused because new code clashed with existing files."

Now process this input:
Input: "API returned 504 due to database replica timeout."
Output:
\`\`\`

By leaving the final "Output:" open, the AI naturally completes the pattern!`,
        keyTakeaway: 'LLMs are pattern-completion engines: give them the beginning of the motif, and they will complete it with mathematical precision.'
      },
      {
        title: 'Golden Rules for Few-Shot Examples',
        content: `1. **Diversity**: Show distinct scenarios (positive case, negative case, edge case).
2. **Consistency**: Keep identical labels and casing across all examples.
3. **Flawless Quality**: If your examples contain spelling errors or formatting flaws, the model will faithfully mimic them!`
      }
    ],
    comparisons: [
      {
        id: 'comp-4',
        title: 'Descriptive Rule (Zero-shot) vs Pattern Learning (Few-shot)',
        contextDesc: 'Classifying incoming customer support tickets and assigning priority tags.',
        badPrompt: {
          text: 'Categorize customer messages into billing, tech, or shipping, and say if it is urgent or not. Message: "My package was left with a neighbor who just left on vacation for 3 weeks, what do I do?"',
          critique: 'Unpredictable formatting. The AI writes conversational paragraphs instead of structured tags.',
          simulatedOutput: 'This message relates to shipping. It is quite urgent because the customer cannot access their package for 3 weeks while their neighbor is away.'
        },
        goodPrompt: {
          text: `You are an automated ticket routing engine. For each message, output Department [Billing | Tech | Shipping] and Priority [P1-Urgent | P2-Normal | P3-Low]. Follow the exact schema demonstrated below.

---
Message: "My card was charged twice this morning for the same renewal!"
Department: Billing
Priority: P1-Urgent
Action: Immediate refund review

---
Message: "The button to update my profile password in settings does not respond."
Department: Tech
Priority: P2-Normal
Action: UI bug investigation

---
Message: "My package was left with a neighbor who just left on vacation for 3 weeks, what do I do?"
Department:`,
          breakdown: [
            { part: 'You are an automated ticket routing engine...', label: 'Role & Schema', color: 'indigo' },
            { part: 'Message: "..." Department: Billing Priority: P1-Urgent...', label: 'Example 1', color: 'emerald' },
            { part: 'Message: "..." Department: Tech Priority: P2-Normal...', label: 'Example 2', color: 'sky' },
            { part: 'Message: "My package..." Department:', label: 'Target input ready for completion', color: 'amber' }
          ],
          explanation: 'Leaving "Department:" at the end triggers immediate completion matching the exact schema.',
          simulatedOutput: `Shipping
Priority: P1-Urgent
Action: Carrier redirection or urgent re-shipment`
        }
      }
    ],
    exercise: {
      id: 'exo-4',
      title: 'Build a Few-Shot Normalization Prompt',
      scenario: 'You need to normalize messy contact entries into the format: "Firstname Lastname | Company | City (PostalCode)".',
      objective: 'Write a prompt with 2 complete examples illustrating the transformation, followed by the target input to process.',
      starterPrompt: 'Format these addresses cleanly.',
      criteria: [
        {
          id: 'two_examples',
          label: 'Contains at least 2 distinct examples',
          keywords: ['example 1', 'example 2', 'input', 'output', '->', 'sample'],
          feedback: 'Perfect! The examples guide the model’s formatting.'
        },
        {
          id: 'pipe_format',
          label: 'Uses uniform delimiter pipe (|) or consistent structure',
          keywords: ['|', 'name', 'company', 'city', 'format', 'standard'],
          feedback: 'Excellent, the target schema is clean.'
        },
        {
          id: 'final_input',
          label: 'Includes the final target input ready to complete',
          keywords: ['now', 'input:', 'address', 'target', 'output:'],
          feedback: 'Superb, the completion trigger is in place.'
        }
      ],
      hint: 'Provide two "Input: ... Output: ..." blocks, then end with "Input: John Smith working at Google in Seattle 98101 -> Output:"',
      solutionModel: `Standardize messy business directory entries into the exact schema:
[Firstname Lastname] | [Company] | [City] ([Postal Code])

Example 1:
Input: "Miller John from Apple in Cupertino 95014"
Output: John Miller | Apple | Cupertino (95014)

Example 2:
Input: "Microsoft Corporation, Redmond 98052, for Davis Sarah"
Output: Sarah Davis | Microsoft | Redmond (98052)

Target to process:
Input: "Clark David at Amazon in Seattle 98109"
Output:`,
      explanationSolution: 'Two diverse examples teach the model how to extract the 4 entities regardless of initial word order.'
    },
    quiz: [
      {
        id: 'q4-1',
        question: 'What is the primary difference between Zero-shot and Few-shot prompting?',
        options: [
          'Zero-shot is paid whereas Few-shot is free',
          'Zero-shot provides no prior examples, while Few-shot includes illustrative sample pairs',
          'Zero-shot only works with numbers',
          'Few-shot only works on mobile phones'
        ],
        correctAnswer: 1,
        explanation: 'In Zero-shot the AI relies only on pre-training. In Few-shot, you provide tangible sample demonstrations.'
      },
      {
        id: 'q4-2',
        question: 'Why is Few-shot prompting exceptionally powerful?',
        options: [
          'Because LLMs are pattern-completion systems and visual demonstrations supersede abstract rules',
          'Because it permanently alters the base model weights',
          'Because it reduces computer heat',
          'Because it requires zero words'
        ],
        correctAnswer: 0,
        explanation: 'Models recognize structural motifs quickly. Showing two examples provides unambiguous guidance.'
      },
      {
        id: 'q4-3',
        question: 'What happens if one of your Few-shot examples contains a glaring typo?',
        options: [
          'The AI politely corrects your typo',
          'The AI will assume typos are part of the desired style and mimic them',
          'The server crashes with a 500 error',
          'The AI deletes the example'
        ],
        correctAnswer: 1,
        explanation: 'The model treats your examples as the ground-truth standard and will mirror formatting imperfections.'
      },
      {
        id: 'q4-4',
        question: 'How many examples are typically recommended in a Few-shot prompt for most everyday tasks?',
        options: [
          '100 to 200 examples',
          'Zero',
          '2 to 5 targeted examples',
          'Over 5,000 examples'
        ],
        correctAnswer: 2,
        explanation: '2 to 5 well-crafted examples are sufficient to anchor formatting without exhausting the context window.'
      }
    ],
    summaryPoints: [
      'Showing is far more effective than describing: examples anchor desired schemas instantly.',
      'Few-shot prompting provides 2 to 5 [Input -> Output] pairs before the query.',
      'Indispensable for data classification, structured JSON/tables, and brand voice.',
      'Ensure your examples are diverse and grammatically flawless.'
    ]
  },
  {
    id: 5,
    slug: 'raisonnement-etape-par-etape-chain-of-thought',
    title: '5. Step-by-Step Reasoning: Chain-of-Thought',
    subtitle: 'Unlocking Logical, Mathematical, and Deductive Precision in AI',
    estimatedMinutes: 25,
    iconName: 'GitBranch',
    objectives: [
      'Understand why LLMs make errors when rushed for immediate answers',
      'Master the trigger phrase: "Let’s think step by step"',
      'Force the generation of intermediate reasoning before reaching a conclusion',
      'Apply Chain-of-Thought to multi-step business and logic problems'
    ],
    analogy: {
      title: 'The Blackboard Math Analogy',
      story: 'Imagine asking a middle-school student to solve a complex algebraic equation in their head in 1 second. They will panic and guess randomly.',
      lesson: 'Hand them a piece of chalk and a blackboard to write down intermediate steps, and they will arrive at the exact answer every single time. Chain-of-Thought gives that chalk and blackboard to the AI.'
    },
    theorySections: [
      {
        title: 'The Trap of Rushed Answers',
        content: `Remember that an LLM outputs one token after another without the ability to backspace.
If you ask: *"What is the final total of 3 items at $14 with 15% discount and $4 shipping? Give only the number"*, the model must emit the first digit without having had the textual space to compute the math!`
      },
      {
        title: 'The Historic Discovery of Chain-of-Thought (CoT)',
        content: `In 2022, AI researchers demonstrated that adding this simple directive:
> **"Think step by step before answering"**

Boosted arithmetic and logic accuracy from 17% to over 78%!

By generating intermediate steps, the model uses its own output tokens as working memory to deduce the correct conclusion.`,
        keyTakeaway: 'Forcing the AI to show its scratchpad gives it the computational token space needed to calculate accurately.'
      },
      {
        title: 'Structuring CoT in Business Prompts',
        content: `Do not merely let the AI wander. Prescribe the reasoning steps:
1. *Step 1: Identify verified facts.*
2. *Step 2: Eliminate conflicting assumptions.*
3. *Step 3: Perform detailed arithmetic.*
4. *Step 4: State final verdict.*`
      }
    ],
    comparisons: [
      {
        id: 'comp-5',
        title: 'Direct Tricky Question vs Step-by-Step Decomposition',
        contextDesc: 'An inventory and sales arithmetic problem.',
        badPrompt: {
          text: 'A bakery has 120 croissants at 7 AM. It sells two thirds before noon. At 1 PM, the baker bakes 45 more. In the afternoon, he sells 80% of the remaining stock. How many croissants remain at closing? Give only the final number.',
          critique: 'Forcing "only the final number" blocks the model from computing steps, leading to an immediate statistical guess.',
          simulatedOutput: '15 croissants remain.'
        },
        goodPrompt: {
          text: `Solve this inventory problem step by step.

Methodology:
1. Break down your reasoning showing every intermediate calculation.
2. Note the exact remaining stock after each time period.
3. End with a standalone line: "FINAL RESULT: X croissants".

Problem:
A bakery has 120 croissants at 7 AM. It sells two thirds before noon. At 1 PM, the baker bakes 45 more. In the afternoon, he sells 80% of the remaining stock. How many croissants remain at closing?`,
          breakdown: [
            { part: 'Solve this inventory problem step by step...', label: 'Chain-of-Thought Activation', color: 'indigo' },
            { part: 'Note exact remaining stock after each time period...', label: 'Intermediate Verification', color: 'sky' },
            { part: 'FINAL RESULT: X croissants', label: 'Locked Output Format', color: 'emerald' }
          ],
          explanation: 'The AI uses each calculated line as a springboard for the next, guaranteeing mathematical accuracy.',
          simulatedOutput: `Step 1 (Morning):
• Initial stock at 7 AM = 120 croissants
• Sold 2/3 = 120 × (2/3) = 80 croissants sold
• Remaining at noon = 120 - 80 = 40 croissants

Step 2 (1 PM Batch):
• Freshly baked = +45 croissants
• New available stock = 40 + 45 = 85 croissants

Step 3 (Afternoon):
• Sold 80% of remaining = 85 × 0.80 = 68 croissants sold
• Remaining stock at closing = 85 - 68 = 17 croissants

FINAL RESULT: 17 croissants`
        }
      }
    ],
    exercise: {
      id: 'exo-5',
      title: 'Design a Step-by-Step Candidate Evaluation Prompt',
      scenario: 'You need to assess whether a candidate qualifies for an IT Project Manager position (requirements: 5+ years experience, bilingual English, Scrum certification).',
      objective: 'Draft a prompt instructing the model to evaluate each requirement individually with evidence before issuing a verdict.',
      starterPrompt: 'Tell me if this candidate is good for the IT manager job.',
      criteria: [
        {
          id: 'step_instruction',
          label: 'Explicit step-by-step instruction',
          keywords: ['step', 'first', 'break down', 'analyze each', 'methodically'],
          feedback: 'Great! Step-by-step decomposition activated.'
        },
        {
          id: 'criteria_check',
          label: 'Verifies the 3 core criteria one by one',
          keywords: ['experience', 'years', 'english', 'scrum', 'certification', 'profile'],
          feedback: 'Well done! All job prerequisites are evaluated.'
        },
        {
          id: 'final_verdict',
          label: 'Isolates the final decision at the very end',
          keywords: ['verdict', 'decision', 'conclusion', 'final', 'summary'],
          feedback: 'Superb! The model only concludes after proving its case.'
        }
      ],
      hint: 'Include: "Step 1: Check total verified years of experience. Step 2: Check language proficiency. Step 3: Check Scrum credential. Step 4: Output decision [Qualified | Disqualified]."',
      solutionModel: `Act as a senior technical recruiter.
Analyze the candidate CV provided below for the International IT Project Manager role.

Follow these reasoning steps:
Step 1: Evaluate professional tenure (minimum 5 years required). Sum relevant years.
Step 2: Evaluate English fluency (fluent/bilingual required for US and APAC teams).
Step 3: Confirm active Scrum Master certification.
Step 4: Summarize key strengths and missing credentials.
Step 5: Issue a final verdict strictly choosing between [SHORTLIST FOR INTERVIEW | HOLD IN RESERVE | DISQUALIFIED], backed by a 2-sentence rationale.`,
      explanationSolution: 'The model must methodically verify each condition before issuing a verdict, preventing superficial assessments.'
    },
    quiz: [
      {
        id: 'q5-1',
        question: 'Why does Chain-of-Thought prompting improve answer reliability?',
        options: [
          'It forces the model to generate intermediate tokens that serve as working memory',
          'It slows down the internet connection to query Google',
          'It increases font size',
          'It translates the query into German'
        ],
        correctAnswer: 0,
        explanation: 'By writing out its steps, the model creates the exact textual context needed to deduce the final conclusion.'
      },
      {
        id: 'q5-2',
        question: 'Which trigger phrase was scientifically proven to induce logical decomposition in LLMs?',
        options: [
          'Hurry up and answer',
          'Think step by step before answering',
          'Do not make any mistakes',
          'Open your eyes wide'
        ],
        correctAnswer: 1,
        explanation: '"Let’s think step by step" is the universally benchmarked prompt trigger for zero-shot CoT.'
      },
      {
        id: 'q5-3',
        question: 'What is the risk of asking "Give only the answer in 1 word" for a tricky riddle?',
        options: [
          'The model guesses prematurely without working through the clues and fails',
          'The computer turns off',
          'The answer is printed upside down',
          'The model loops forever'
        ],
        correctAnswer: 0,
        explanation: 'Without token space to unravel the deduction, the model is forced to guess on the first token.'
      },
      {
        id: 'q5-4',
        question: 'When is Chain-of-Thought particularly indispensable?',
        options: [
          'Translating "Hello" into Spanish',
          'Multi-step arithmetic, logic riddles, and multi-criteria legal/business evaluations',
          'Generating a poem',
          'Asking what time it is'
        ],
        correctAnswer: 1,
        explanation: 'Any task requiring sequential logic, conditional math, or evidence synthesis benefits dramatically from CoT.'
      }
    ],
    summaryPoints: [
      'An LLM cannot think inside its head: it only thinks through the tokens it generates on screen.',
      'The directive "Think step by step" dramatically improves deductive and mathematical accuracy.',
      'Structure the reasoning phases yourself (Evidence -> Analysis -> Calculation -> Conclusion).',
      'Never demand a raw final number on the first token of a complex problem.'
    ]
  },
  {
    id: 6,
    slug: 'iterer-ameliorer-prompts-dialogue',
    title: '6. The Art of Iteration: Sculpting Prompts',
    subtitle: 'Treating Prompting as an Iterative Dialogue, Not a Roll of the Dice',
    estimatedMinutes: 25,
    iconName: 'RefreshCw',
    objectives: [
      'Abandon the myth of the "one-shot perfect prompt"',
      'Master the 4-phase refinement loop: Emit -> Diagnose -> Adjust -> Lock',
      'Guide the model mid-conversation without starting over from scratch',
      'Build reusable prompt templates with bracketed variables'
    ],
    analogy: {
      title: 'The Clay Sculptor Analogy',
      story: 'No sculptor hits a block of marble once with a chisel and expects a finished masterpiece.',
      lesson: 'They carve the rough silhouette (first prompt), refine the torso proportions (second feedback), sculpt facial features (third adjustment), and polish the texture (final constraints). Master prompt engineers work by gentle, precise, iterative strokes.'
    },
    theorySections: [
      {
        title: 'The Beginner Frustration Trap',
        content: `Novices write one short sentence, get a response that is 80% right, and conclude: *"AI is useless, it doesn't work"*.

An expert views the response as diagnostic data:
- *What part is good?* (Keep)
- *What is missing?* (Inject info)
- *What is fluff?* (Add negative constraint)`
      },
      {
        title: 'The 4 Surgical Follow-Up Directives',
        content: `When a first draft is imperfect, do not restart. Use targeted follow-ups:

1. **Tone Adjustment**: *"Keep the content, but make the tone energetic and direct. Remove metaphors."*
2. **Targeted Expansion**: *"Elaborate on point 3 regarding ROI with an estimated numerical example."*
3. **Strict Pruning**: *"Condense this entire answer into 3 bullet points of maximum 2 lines each."*
4. **Perspective Shift**: *"Rewrite this argument from the standpoint of an extremely skeptical CFO."*`
      },
      {
        title: 'Converting a Winning Chat into a Reusable Template',
        content: `Once you achieve the perfect output after 3 back-and-forth turns, **reverse-engineer your initial prompt**!
Combine all the constraints you had to add into a unified prompt containing \`[insert variable]\` brackets. You now have an automated workflow tool.`
      }
    ],
    comparisons: [
      {
        id: 'comp-6',
        title: 'Emotional Frustration vs Constructive Iteration',
        contextDesc: 'The AI drafted an article introduction that is too academic and long.',
        badPrompt: {
          text: 'This is terrible and too long, make it better.',
          critique: 'Destructive, emotional feedback. The AI does not know what was wrong or what "better" means.',
          simulatedOutput: 'Here is another version: Today’s topic is very interesting because it affects many people...'
        },
        goodPrompt: {
          text: `The core structure is good, but the tone is too academic.
Apply these 3 specific adjustments:
1. Cut the length in half (from 200 to 90 words).
2. Replace the opening sentence with a punchy question addressing a busy CEO’s daily struggle.
3. Replace all passive verbs with energetic active voice.`,
          breakdown: [
            { part: 'The core structure is good...', label: 'Positive validation of progress', color: 'emerald' },
            { part: '1. Cut length in half (90 words)...', label: 'Quantitative adjustment', color: 'sky' },
            { part: '2. Replace opening with a punchy question...', label: 'Concrete stylistic directive', color: 'indigo' },
            { part: '3. Replace passive verbs with active voice', label: 'Grammar rule', color: 'amber' }
          ],
          explanation: 'The AI knows exactly what to keep and what specific levers to pull without guessing.',
          simulatedOutput: `Ever wrap up a 10-hour workday wondering why your strategic priorities didn't move an inch? That trap catches every founder. Discover how automating three repetitive tasks can free up 5 hours this week and put you back in the driver’s seat of your company’s growth.`
        }
      }
    ],
    exercise: {
      id: 'exo-6',
      title: 'Draft an Iterative Adjustment Follow-Up',
      scenario: 'The AI drafted a 10-module sales curriculum that is overly theoretical. You want it restructured into 5 modules centered around 80% live cold-calling roleplays.',
      objective: 'Write a follow-up prompt stating what to keep, what to cut, and the new target format.',
      starterPrompt: 'Redo the training plan shorter and with practice.',
      criteria: [
        {
          id: 'critique_constructive',
          label: 'Identifies the shift (from 10 to 5 modules, cutting lecture theory)',
          keywords: ['5', 'five', 'modules', 'cut', 'reduce', 'theoretical'],
          feedback: 'Great! The scope reduction is clear.'
        },
        {
          id: 'practical_focus',
          label: 'Emphasizes practical simulations (cold calls, roleplay)',
          keywords: ['cold call', 'simulation', 'roleplay', 'practice', 'hands-on', 'workshop'],
          feedback: 'Excellent! Practical focus is prioritized.'
        },
        {
          id: 'structure_format',
          label: 'Requests structured module breakdown (Title, Scenario, Deliverable)',
          keywords: ['title', 'scenario', 'deliverable', 'objective', 'format'],
          feedback: 'Superb! Each module now has a tangible outcome.'
        }
      ],
      hint: 'Include: "Good start, but too academic. Condense from 10 to 5 modules. Make it 80% practical cold-calling roleplays. For each module, list: Title, Roleplay Scenario, Validated Skill."',
      solutionModel: `Thank you for this outline. The topics are relevant, but the format is far too academic.

Please refine the program with these adjustments:
1. Condense the curriculum from 10 down to 5 intensive half-day modules.
2. Replace lecture sections with an 80% hands-on format: each module must center around a live cold-calling peer roleplay.
3. For each of the 5 modules, include:
   - Outcome-oriented Title
   - Concrete Roleplay Scenario
   - Verified Skill Deliverable at completion.`,
      explanationSolution: 'Constructive feedback that acknowledges existing work while enforcing new operational requirements.'
    },
    quiz: [
      {
        id: 'q6-1',
        question: 'What is the typical beginner reaction when an AI response is imperfect?',
        options: [
          'Analyzing what failed and providing a surgical follow-up prompt',
          'Assuming the AI is incapable, getting frustrated, or giving up',
          'Saving the prompt as a template',
          'Calling customer support'
        ],
        correctAnswer: 1,
        explanation: 'Novices blame the tool as a whole, whereas experienced engineers treat the first output as a working draft.'
      },
      {
        id: 'q6-2',
        question: 'How do you best eliminate verbose fluff in an AI response?',
        options: [
          'Typing in all caps: "STOP TALKING!"',
          'Setting a strict numerical word ceiling and requesting concise bullet points without introductory pleasantries',
          'Closing the browser tab',
          'Asking the AI to apologize first'
        ],
        correctAnswer: 1,
        explanation: 'Quantifiable length constraints and explicitly forbidding conversational fluff immediately cuts wordiness.'
      },
      {
        id: 'q6-3',
        question: 'What is a reusable prompt template?',
        options: [
          'A video tutorial',
          'A proven prompt containing bracketed variables [like this] that can be repurposed for new data',
          'A paid Chrome extension',
          'A login password'
        ],
        correctAnswer: 1,
        explanation: 'A prompt template is a battle-tested structure with dynamic placeholder variables for repeatable tasks.'
      },
      {
        id: 'q6-4',
        question: 'Within an ongoing chat session, do you need to repeat the entire prompt context with every new message?',
        options: [
          'Yes, the model has total amnesia between messages',
          'No, as long as you stay within the same chat, the model retains recent exchange history within its context window',
          'Only on weekends',
          'Yes, because servers wipe memory every 10 seconds'
        ],
        correctAnswer: 1,
        explanation: 'In a single continuous conversation, recent exchanges remain accessible within the context window.'
      }
    ],
    summaryPoints: [
      'The initial prompt is merely the opening move: perfection comes from iteration.',
      'Diagnose coldly: what to keep, what to prune, what to enrich.',
      'Give surgical, numbered corrections rather than emotional complaints.',
      'Package successful conversational flows into reusable templates.'
    ]
  },
  {
    id: 7,
    slug: 'erreurs-courantes-hallucinations-limites-ethique',
    title: '7. Hallucinations, Boundaries & Ethics',
    subtitle: 'Understanding AI Limitations to Never Be Deceived',
    estimatedMinutes: 30,
    iconName: 'ShieldAlert',
    objectives: [
      'Understand the statistical roots of AI hallucinations',
      'Master the 3 anti-hallucination guardrails in prompt design',
      'Identify absolute limits of LLMs (confidentiality, strict math, recent real-time facts)',
      'Adopt an ethical, responsible posture as the accountable human author'
    ],
    analogy: {
      title: 'The Confident Student at the Oral Exam',
      story: 'Imagine a student at a prestigious oral examination. The jury asks about an obscure statute. Instead of admitting "I don’t know", the student looks the jury dead in the eye and confidently invents: "As mandated by Article 42 of the 1984 Ordinance...". It sounds articulate and authoritative, but the law does not exist.',
      lesson: 'This is an AI hallucination. The model prioritizes grammatical fluency and statistical plausibility over factual truth. If you do not constrain it, it will confabulate to please you.'
    },
    theorySections: [
      {
        title: 'Why Do LLMs Hallucinate?',
        content: `A hallucination is not a software crash: it is the natural consequence of probabilistic token prediction!
The model has no built-in connection to objective Truth. If it lacks data, it outputs tokens that sound phonetically and semantically believable.`
      },
      {
        title: 'The 3 Anti-Hallucination Guardrails',
        content: `To protect your workflows against made-up claims:

1. **The Explicit Escape Hatch**:
   *"If the answer is not explicitly contained in the provided text, respond with 'Information not available' and do not extrapolate."*
2. **Closed-Book Grounding (RAG Principle)**:
   *"Answer SOLELY and STRICTLY based on the document between <source> tags. Do not use outside knowledge."*
3. **Verbatim Quotation Requirement**:
   *"For every fact stated, provide a direct verbatim quote enclosed in quotation marks from the source document."*,`,
        keyTakeaway: 'Granting the AI explicit permission to say "I don’t know" is the single most effective way to eliminate hallucinations.'
      },
      {
        title: 'Confidentiality, Bias, and Accountability',
        content: `- **Data Privacy**: Never paste company confidential secrets, passwords, or protected health data into public consumer AI models.
- **Statistical Biases**: Models reflect human biases present in internet training corpora. Always audit outputs critically.
- **Human Accountability**: You alone remain responsible for any text you publish. AI proposes; the human verifies and approves.`
      }
    ],
    comparisons: [
      {
        id: 'comp-7',
        title: 'Open Hallucination-Prone Question vs Grounded Prompt',
        contextDesc: 'Verifying early contract termination clauses.',
        badPrompt: {
          text: 'What are the penalty-free termination clauses for commercial leases? Give me the exact legal statutes.',
          critique: 'The AI does not have the user’s contract and will likely invent plausible-sounding statute numbers.',
          simulatedOutput: 'Under Section 42-B of the Commercial Code and the 2019 Landmark Court ruling, you may terminate without penalty after 12 months.'
        },
        goodPrompt: {
          text: `You are an internal legal analyst operating with absolute factual rigor.
Analyze the commercial terms provided below between <contract> tags.

<contract>
[Insert terms of service text]
</contract>

Reliability Rules:
1. Determine whether a penalty-free cancellation clause exists.
2. If yes, quote the exact clause verbatim in quotation marks with its section number.
3. If the provided text does not explicitly cover this scenario, write only: "The provided document contains no information regarding penalty-free termination." Do not invent external legal precedents.`,
          breakdown: [
            { part: 'You are an internal legal analyst...', label: 'Factual Rigor Persona', color: 'indigo' },
            { part: '<contract>...</contract>', label: 'Closed-Book Grounding', color: 'amber' },
            { part: 'Quote the exact clause verbatim...', label: 'Proof by Verbatim Quote', color: 'emerald' },
            { part: 'If text does not cover... write only "..."', label: 'Anti-Hallucination Escape Hatch', color: 'rose' }
          ],
          explanation: 'The AI is strictly barred from guessing and given a ready-made phrase to output if data is missing.',
          simulatedOutput: `Contractual Review:

Upon thorough examination of the provided document, here is the governing clause:
Section 8.3 - Early Termination: "The lessee may terminate this agreement without penalty solely in the event of documented liquidation proceedings or unresolved equipment failure exceeding 30 consecutive business days."

No other conditions for penalty-free termination are stated in the provided text.`
        }
      }
    ],
    exercise: {
      id: 'exo-7',
      title: 'Immunize a Prompt Against Hallucination',
      scenario: 'Summarize an internal HR remote work memo without the AI making up imaginary vacation policies.',
      objective: 'Add an explicit escape hatch, strict closed-book grounding, and quotation requirements.',
      starterPrompt: 'Summarize the company remote work policy based on this text.',
      criteria: [
        {
          id: 'source_only',
          label: 'Strict closed-source restriction',
          keywords: ['solely', 'strictly', 'only', 'exclusively', 'no outside', 'source'],
          feedback: 'Bravo! The model is locked to your source text.'
        },
        {
          id: 'exit_clause',
          label: 'Explicit escape hatch ("If absent, state...")',
          keywords: ['if', 'not present', 'missing', 'not mentioned', 'do not invent', 'not available'],
          feedback: 'Excellent! The #1 shield against false claims.'
        },
        {
          id: 'quote_proof',
          label: 'Verbatim quotation requirement',
          keywords: ['quote', 'verbatim', 'quotation', 'extract', 'proof', 'exact words'],
          feedback: 'Superb! Quotes force word-by-word grounding.'
        }
      ],
      hint: 'Include: "Answer SOLELY from the text between <memo> tags. Quote exact sentences in quotation marks. If a detail is missing, write [Not specified in memo] instead of assuming."',
      solutionModel: `Analyze the internal HR document enclosed within <memo> tags below.

<memo>
[Insert HR memo text]
</memo>

Reliability Directives:
1. Answer SOLELY based on information explicitly written in this memo. Do not extrapolate from general employment standards.
2. For every stated rule (eligible days, stipends, equipment), quote the exact sentence between quotation marks.
3. If any question is not addressed in the text, you must output: "[Information not specified in HR memo]".`,
      explanationSolution: 'Zero latitude for creative improvisation: the model can only quote or acknowledge missing info.'
    },
    quiz: [
      {
        id: 'q7-1',
        question: 'What is an "hallucination" in generative language models?',
        options: [
          'A flickering visual glitch on screen',
          'A factually false or entirely fabricated statement stated with persuasive confidence',
          'A response written in rhyming poetry',
          'A server overload error'
        ],
        correctAnswer: 1,
        explanation: 'Hallucinations occur when statistical probability favors convincing words over verifiable facts.'
      },
      {
        id: 'q7-2',
        question: 'Which prompt technique most effectively reduces document-based hallucinations?',
        options: [
          'Asking the AI to please be very careful',
          'Instructing the AI to reply solely from the text and write "Data not available" if missing',
          'Writing the prompt in green font',
          'Asking the AI to check Wikipedia first'
        ],
        correctAnswer: 1,
        explanation: 'Granting an explicit escape hatch removes the pressure to generate fictitious answers.'
      },
      {
        id: 'q7-3',
        question: 'What is the golden rule regarding confidential data on public AI interfaces?',
        options: [
          'Paste anything; public models are legally bound by doctor-patient confidentiality',
          'Never submit sensitive personal data, corporate trade secrets, or passwords into public tools',
          'It is safe if you write "CONFIDENTIAL" at the beginning',
          'Only numbers are confidential, text is fine'
        ],
        correctAnswer: 1,
        explanation: 'Data entered into public consumer models may be stored or used in future training runs.'
      },
      {
        id: 'q7-4',
        question: 'Who is legally and professionally accountable for AI-generated content you publish?',
        options: [
          'The AI lab that created the model',
          'The computer hardware',
          'You, the human professional who approved and published the text',
          'Nobody, it is considered an act of nature'
        ],
        correctAnswer: 2,
        explanation: 'The human user maintains full legal and professional responsibility for the materials they deploy.'
      }
    ],
    summaryPoints: [
      'LLMs optimize for statistical plausibility, not factual truth.',
      'Always give an escape hatch: permit the model to say "I don’t know".',
      'For sensitive research, force closed-book grounding with verbatim quotation proof.',
      'Never input proprietary secrets or protected data into unvetted tools.'
    ]
  },
  {
    id: 8,
    slug: 'projet-final-creer-son-propre-prompt',
    title: '8. Capstone Project: Prompt Studio',
    subtitle: 'Design, Test, Audit, and Validate Your Professional Prompt',
    estimatedMinutes: 35,
    iconName: 'GraduationCap',
    objectives: [
      'Synthesize all course skills (RTCFC, Few-shot, CoT, Anti-Hallucination)',
      'Construct a complete production-grade prompt using the 6 core modules',
      'Pass the 100-Point Quality Evaluation Rubric',
      'Simulate output execution and unlock your final results and completion summary'
    ],
    analogy: {
      title: 'The Master Chef’s Signature Dish',
      story: 'Over the last 7 modules, you practiced knife skills, mastered seasoning, controlled cooking temperatures, and learned impeccable plating.',
      lesson: 'In this final module, you step into the main kitchen: choose your recipe, select your ingredients by the book, prepare your signature dish, and present it to the jury. It is your time to shine!'
    },
    theorySections: [
      {
        title: 'Your Capstone Mission',
        content: `You will engineer a **high-fidelity professional prompt** tailored to a real-world task in your career, studies, or personal projects.

To complete your training and view your **Final Results & Achievement Summary**, use the **Interactive Prompt Studio** below. You can load an inspiration preset or build entirely from scratch!`
      },
      {
        title: 'The 6-Pillar Evaluation Rubric (100 Points)',
        content: `Your prompt is analyzed in real time across 6 criteria:
1. **Role & Stance (15 pts)**: Targeted expertise, tone, perspective.
2. **Context & Problem (20 pts)**: Background, audience, stakes.
3. **Task & Action Verb (20 pts)**: Clear, unambiguous objective.
4. **Format & Structure (15 pts)**: Tables, bullets, templates, schema.
5. **Constraints & Guardrails (15 pts)**: Limits, escape hatches, forbidden cliches.
6. **Examples or Step-by-Step Method (15 pts)**: Few-shot or CoT decomposition.`
      }
    ],
    comparisons: [
      {
        id: 'comp-8',
        title: 'Amateur Prompt vs Certified Engineer Masterpiece',
        contextDesc: 'A comprehensive interactive language learning tutor.',
        badPrompt: {
          text: 'Be my Spanish teacher and give me exercises.',
          critique: 'No proficiency level, no exercise format, no feedback cadence.',
          simulatedOutput: '¡Hola! Sure. Translate this sentence: "The black cat sleeps on the table."'
        },
        goodPrompt: {
          text: `[ROLE]
You are a certified Spanish language instructor specializing in active communicative methodology for adult beginners (A1-A2 level).

[CONTEXT]
I am an English speaker preparing for a two-week trip to Andalusia in 2 months. My goal is conversational independence in tapas bars and hotels.

[TASK]
Conduct an interactive turn-by-turn roleplay themed: "Ordering food at a traditional tapas bar in Seville".

[METHOD & FORMAT]
1. Set the opening scene in 2 evocative Spanish sentences, accompanied by subtle English translations in parentheses.
2. Ask only ONE question or dialogue prompt per turn.
3. Wait for my response before moving forward.

[CORRECTION & CONSTRAINTS]
- In every turn: always validate the effort first, then explain any grammar mistake in 1 simple English sentence.
- Propose the next conversational line to advance the roleplay.
- Never write out the whole script in advance.`,
          breakdown: [
            { part: '[ROLE] You are a certified Spanish instructor...', label: 'Persona & Level', color: 'indigo' },
            { part: '[CONTEXT] English speaker traveling to Andalusia...', label: 'Real Context & Goal', color: 'amber' },
            { part: '[TASK] Conduct an interactive turn-by-turn roleplay...', label: 'Clear Mission', color: 'emerald' },
            { part: '[METHOD & FORMAT] 1. Scene... 2. One turn at a time... 3. Wait', label: 'Interaction Protocol', color: 'sky' },
            { part: '[CORRECTION & CONSTRAINTS] Validate effort, explain mistakes...', label: 'Pedagogical Guardrails', color: 'rose' }
          ],
          explanation: 'Transforms the AI into a patient, disciplined, and realistic conversational training simulator.',
          simulatedOutput: `¡Hola! What an exciting journey ahead. Let's step right into Seville.

(Imagine you are in the lively Santa Cruz neighborhood. You step into a traditional little tapas bar smelling of cured ham and roasted peppers. The waiter approaches with a warm smile and says:
« ¡Buenas tardes! ¿Una mesa para cuántas personas, por favor? »)

Now reply in Spanish indicating how many people you have in your party (for instance, a table for 2). I am waiting for your sentence!`
        }
      }
    ],
    exercise: {
      id: 'exo-8',
      title: 'Audit Your Own Prompt',
      scenario: 'Identify the missing pillar in this business prompt: "You are an expert copywriter. Write a high-converting landing page for our freelance accounting SaaS. Create a pricing table."',
      objective: 'Pinpoint which pillar among Role, Context, Task, Format, or Constraints is dangerously absent.',
      starterPrompt: 'Identify the missing critical elements in the prompt above.',
      criteria: [
        {
          id: 'missing_pillar',
          label: 'Identifies missing Constraints and detailed Context',
          keywords: ['constraint', 'price', 'pricing', 'features', 'length', 'usp', 'tone'],
          feedback: 'Excellent audit! The actual price, features, and length limits are absent.'
        },
        {
          id: 'recommendation',
          label: 'Proposes concrete remedies',
          keywords: ['add', 'specify', 'exact', 'include', 'target'],
          feedback: 'Great! You now think like an expert prompt auditor.'
        }
      ],
      hint: 'Notice that no actual subscription prices are provided, nor are there any limits on word count or tone!',
      solutionModel: `This prompt has a Role ("expert copywriter"), a brief Context ("freelance accounting SaaS"), a Task ("write landing page"), and partial Format ("pricing table").
However, it severely lacks:
1. Grounding Context: What are the actual prices? What are the top 3 competitive features? Without this, the AI will invent fictional numbers!
2. Strict Constraints: What is the word count? What tone? What legal disclosures are required?`,
      explanationSolution: 'Without factual pricing and feature data, the copywriter AI will hallucinate fictional plans.'
    },
    quiz: [
      {
        id: 'q8-1',
        question: 'What is the very first step before writing any complex prompt?',
        options: [
          'Defining the exact final deliverable and its target format',
          'Buying a more powerful graphics card',
          'Typing random words to see what happens',
          'Sending an email to colleagues'
        ],
        correctAnswer: 0,
        explanation: 'Knowing the precise document structure you want on your desk is the foundational prerequisite.'
      },
      {
        id: 'q8-2',
        question: 'Why format prompts with clear tags like [ROLE], [CONTEXT], [CONSTRAINTS]?',
        options: [
          'It helps the human verify completeness and guides model attention across logical blocks',
          'It bypasses AI safety filters',
          'It is legally required by international law',
          'It makes the prompt execute twice as fast'
        ],
        correctAnswer: 0,
        explanation: 'Structured blocks make editing modular and help models organize their internal processing.'
      },
      {
        id: 'q8-3',
        question: 'What should you do after engineering a prompt that produces exceptional results?',
        options: [
          'Close the window and forget it',
          'Save it into your personal prompt library as a parameterized template with variables',
          'Never use AI again',
          'Expect it to work identically forever without adaptation'
        ],
        correctAnswer: 1,
        explanation: 'Curating winning prompts into reusable templates creates lasting personal and team productivity.'
      },
      {
        id: 'q8-4',
        question: 'Which principle summarizes prompt engineering best?',
        options: [
          'The shorter the prompt, the smarter the AI',
          '"Garbage In, Garbage Out": the output is a faithful mirror of the input brief’s rigor',
          'The AI is always right regardless of what you type',
          'Randomness is the best strategy'
        ],
        correctAnswer: 1,
        explanation: 'A vague question produces mediocre results; an expert brief produces master-level work.'
      }
    ],
    summaryPoints: [
      'A professional prompt assembles the 6 pillars: Role, Context, Task, Format, Constraints, and Examples.',
      'Use clean delimiters and visual blocks.',
      'Audit your prompt with clear rubrics and refine through iteration.',
      'Congratulations: you are now equipped with certified Prompt Engineering methodology!'
    ]
  }
];
