import { CourseModule } from '../types';

export const MODULES_DATA: CourseModule[] = [
  {
    id: 1,
    slug: 'introduction-ia-llm-prompt',
    title: '1. Introduction aux fondamentaux',
    subtitle: 'Comprendre l’IA générative, les LLM et le rôle crucial du prompt',
    estimatedMinutes: 25,
    iconName: 'Sparkles',
    objectives: [
      'Démystifier le fonctionnement d’une intelligence artificielle générative',
      'Comprendre ce qu’est un LLM (Grand modèle de langage) et comment il prédit le texte',
      'Définir ce qu’est un prompt et pourquoi la qualité de l’instruction détermine la réponse',
      'Identifier les forces et les limites fondamentales de ces modèles'
    ],
    analogy: {
      title: 'L’analogie du stagiaire surdoué mais amnésique',
      story: 'Imaginez que vous venez d’embaucher un stagiaire qui a lu l’intégralité des livres de la Bibliothèque Nationale de France et tous les articles de Wikipédia. Il possède une culture générale vertigineuse et écrit à une vitesse surhumaine. Cependant, il a deux particularités majeures : il n’a aucun bon sens inné, il ne sait pas lire dans vos pensées, et il oublie tout dès que vous fermez la porte de son bureau si vous ne lui remettez pas un dossier clair.',
      lesson: 'Si vous lui dites simplement « Fais-moi un rapport », il vous rendra 50 pages hors-sujet. Si vous lui détaillez le sujet, la cible, la longueur et le plan, il vous rendra un travail exceptionnel en 2 minutes. C’est exactement ainsi que fonctionne un LLM.'
    },
    theorySections: [
      {
        title: 'Qu’est-ce qu’une IA générative ?',
        content: `Contrairement aux IA traditionnelles qui se contentaient de trier des spams ou de reconnaître si une photo contient un chat, **l'IA générative crée du contenu original** : textes rédigés, code informatique, synthèses de réunions, images ou musique.

Elle ne possède ni conscience, ni intention, ni sentiments. Elle fonctionne par apprentissage statistique profond à partir de milliards d'exemples créés par des humains.`
      },
      {
        title: 'Comment fonctionne un LLM (Large Language Model) ?',
        content: `Un LLM est un modèle probabiliste géant. Son unique mission mathématique est de **prédire le prochain mot le plus probable** (plus exactement le prochain *token*) compte tenu de tout ce qui a été écrit auparavant.

Quand vous tapez « Le ciel est... », le modèle calcule que « bleu » ou « dégagé » a une probabilité beaucoup plus forte d'apparaître que « bicyclette ». En enchaînant ces calculs à la vitesse de la lumière, il produit des paragraphes entiers d'une fluidité impressionnante.`,
        keyTakeaway: 'L’IA ne « pense » pas au sens humain : elle calcule la suite logique et statistique de mots la plus cohérente avec votre demande.'
      },
      {
        title: 'Qu’est-ce qu’un prompt et pourquoi le Prompt Engineering ?',
        content: `Le **prompt** est la consigne textuelle que vous soumettez à l'IA. 

Le **Prompt Engineering** est l’art de formuler cette consigne de manière si claire, structurée et riche en contexte que le modèle n'a d'autre choix que de vous fournir une réponse de haute qualité. C’est le pont entre votre intention humaine et la machinerie statistique de l'IA.`
      }
    ],
    comparisons: [
      {
        id: 'comp-1',
        title: 'Demande générale vs consigne contextualisée',
        contextDesc: 'Vous souhaitez rédiger un e-mail professionnel pour reporter une réunion importante.',
        badPrompt: {
          text: 'Écris un mail pour décaler une réunion.',
          critique: 'Aucun contexte, aucun ton mentionné, aucune justification fournie, aucun destinataire précisé. L’IA va devoir tout inventer au hasard.',
          simulatedOutput: 'Objet : Réunion décalée\n\nBonjour,\nJe dois décaler la réunion. Merci de me dire quand vous êtes dispo.\nCordialement,\nMoi'
        },
        goodPrompt: {
          text: 'Rédige un e-mail professionnel et courtois destiné à mon responsable de département (Marc). Je dois reporter la réunion de cadrage budgétaire initialement prévue demain à 14h en raison d’un retard de livraison de nos chiffres par le cabinet comptable. Propose deux créneaux de remplacement : jeudi matin à 10h ou vendredi à 15h. Longueur : environ 60 à 80 mots.',
          breakdown: [
            { part: 'Rédige un e-mail professionnel et courtois', label: 'Tâche & Ton', color: 'indigo' },
            { part: 'destiné à mon responsable de département (Marc)', label: 'Audience / Destinataire', color: 'emerald' },
            { part: 'reporter la réunion de cadrage... retard de livraison des chiffres', label: 'Contexte précis', color: 'amber' },
            { part: 'Propose deux créneaux... Longueur : 60 à 80 mots', label: 'Contraintes & Format', color: 'sky' }
          ],
          explanation: 'L’IA connaît précisément le ton, le destinataire, la justification légitime et les alternatives à proposer.',
          simulatedOutput: 'Objet : Report de notre point de cadrage budgétaire\n\nBonjour Marc,\n\nJe te contacte afin de reporter notre réunion de cadrage budgétaire prévue demain à 14h. Notre cabinet comptable finalise actuellement les derniers arrêtés, qui ne nous parviendront qu’en fin de journée.\n\nAfin d’échanger sur des bases chiffrées consolidées, serais-tu disponible ce jeudi à 10h ou vendredi à 15h ?\n\nMerci pour ta compréhension,\nBien cordialement,'
        }
      }
    ],
    exercise: {
      id: 'exo-1',
      title: 'Transformer un prompt flou en consigne guidée',
      scenario: 'Vous voulez demander à l’IA de vous expliquer ce qu’est le Cloud Computing.',
      objective: 'Ajoutez une audience cible (un enfant de 10 ans ou un grand-parent débutant), un format (3 paragraphes courts ou une métaphore concrète) et un ton bienveillant.',
      starterPrompt: 'Explique le cloud.',
      criteria: [
        {
          id: 'target',
          label: 'Mention d’un public cible précis',
          keywords: ['enfant', 'débutant', 'grand-parent', 'novice', '10 ans', 'non technique'],
          feedback: 'Bravo, vous avez défini à qui l’explication s’adresse !'
        },
        {
          id: 'analogy',
          label: 'Demande d’analogie ou d’image de la vie quotidienne',
          keywords: ['analogie', 'métaphore', 'exemple', 'image', 'histoire', 'armoire', 'bibliothèque'],
          feedback: 'Excellent, demander une analogie évite le jargon technique !'
        },
        {
          id: 'format',
          label: 'Contrainte de longueur ou de structure',
          keywords: ['paragraphe', 'phrase', 'liste', 'court', 'lignes', 'mots', 'étapes'],
          feedback: 'Très bien, le cadre de format évite les pavés illisibles.'
        }
      ],
      hint: 'Essayez par exemple : « Explique ce qu’est le cloud computing à un enfant de 10 ans en utilisant une métaphore du quotidien (comme une armoire magique partagée). Fais 3 paragraphes courts et utilise un ton chaleureux. »',
      solutionModel: 'Agis comme un vulgarisateur bienveillant. Explique le concept de "Cloud Computing" à une personne de 70 ans qui n’a jamais utilisé d’ordinateur. Utilise une analogie concrète de la vie courante (comme louer un casier dans une consigne sécurisée plutôt que de garder toutes ses affaires dans sa poche). Limite ta réponse à 3 courts paragraphes sans aucun mot technique incompris.',
      explanationSolution: 'Ce prompt définit le rôle (vulgarisateur), la cible (personne âgée débutante), le mécanisme explicatif (l’analogie) et la contrainte stricte (pas de jargon, 3 paragraphes).'
    },
    quiz: [
      {
        id: 'q1-1',
        question: 'Quel est le mécanisme mathématique central au cœur du fonctionnement d’un LLM ?',
        options: [
          'Il consulte une encyclopédie en ligne en temps réel pour copier-coller des réponses',
          'Il prédit statistiquement le prochain mot (token) le plus probable selon le contexte fourni',
          'Il analyse la vérité logique et morale des pensées humaines',
          'Il exécute des requêtes SQL sur une base de données secrète'
        ],
        correctAnswer: 1,
        explanation: 'Un LLM est un prédicteur statistique de tokens entraîné sur des milliards de textes. Il calcule la probabilité de chaque mot suivant en fonction de votre prompt.'
      },
      {
        id: 'q1-2',
        question: 'Pourquoi un prompt très court comme « Écris-moi une histoire » donne-t-il souvent un résultat décevant ?',
        options: [
          'Parce que le modèle manque de mémoire vive pour générer plus de 50 mots',
          'Parce que le modèle n’aime pas la littérature',
          'Parce que l’absence totale de cadre force le modèle à choisir des clichés statistiques très moyens',
          'Parce que les LLM ne savent pas inventer de fictions'
        ],
        correctAnswer: 2,
        explanation: 'Sans contraintes ni directives de genre, de personnages ou d’intrigue, le modèle retombe sur la moyenne statistique la plus générique et prévisible.'
      },
      {
        id: 'q1-3',
        question: 'Qu’est-ce qu’un « token » dans l’univers des modèles de langage ?',
        options: [
          'Une cryptomonnaie utilisée pour payer les requêtes',
          'Une unité de découpage textuel (environ 4 caractères ou 0,75 mot en français) traitée par l’IA',
          'Le mot de passe d’accès à l’application',
          'Une règle de censure automatique'
        ],
        correctAnswer: 1,
        explanation: 'Les modèles ne lisent pas lettre par lettre, mais par fragments appelés tokens. Par exemple, « Bonjour » représente généralement un seul token.'
      },
      {
        id: 'q1-4',
        question: 'Quelle attitude mentale est la plus efficace lorsque l’on formule un prompt ?',
        options: [
          'Considérer l’IA comme un devin télépathe qui devine nos intentions sous-jacentes',
          'Lui parler en langage informatique binaire avec des 0 et des 1',
          'Agir comme un manager qui donne un brief clair, précis et contextualisé à un assistant brillant',
          'Ne jamais donner de consignes longues car l’IA est paresseuse'
        ],
        correctAnswer: 2,
        explanation: 'Traiter l’IA comme un collaborateur talentueux mais qui a impérativement besoin d’un brief structuré est la posture clé du prompt engineer.'
      }
    ],
    summaryPoints: [
      'Un LLM ne pense pas et n’a pas d’intentions : il calcule le mot suivant le plus cohérent statistiquement.',
      'Le résultat dépend directement de la qualité du brief fourni dans votre prompt (principe "Garbage In, Garbage Out").',
      'Sans contexte précis, l’IA compense par des choix moyens, plats et génériques.',
      'Le rôle du Prompt Engineer est de guider l’IA en lui fixant un cap, un ton, des contraintes et un cadre de travail net.'
    ]
  },
  {
    id: 2,
    slug: 'anatomie-bon-prompt-methode-rtcfc',
    title: '2. L’anatomie d’un prompt parfait',
    subtitle: 'La méthode RTCFC : Rôle, Tâche, Contexte, Format et Contraintes',
    estimatedMinutes: 30,
    iconName: 'Layers',
    objectives: [
      'Maîtriser les 5 piliers de la méthode RTCFC',
      'Apprendre à attribuer un Rôle d’expert pour influencer positivement le registre lexical',
      'Structurer une Tâche sans équivoque avec des verbes d’action puissants',
      'Définir des Formats de sortie exploitables directement (tableaux, puces, JSON, scripts)',
      'Imposer des Contraintes négatives et positives pour verrouiller la réponse'
    ],
    analogy: {
      title: 'L’analogie de la commande sur-mesure chez le menuisier',
      story: 'Si vous entrez dans l’atelier d’un artisan ébéniste et dites : « Faites-moi un meuble en bois », vous risquez de recevoir un tabouret rustique alors que vous espériez une bibliothèque scandinave sur-mesure.',
      lesson: 'Pour avoir exactement le meuble rêvé, vous précisez : votre besoin (une bibliothèque), la pièce de destination (le salon de 2m50 sous plafond), le style (chêne clair minimaliste), les dimensions exactes et ce qu’il ne faut surtout pas faire (pas de clous apparents, pas de vernis brillant). La méthode RTCFC applique cette rigueur à chaque prompt.'
    },
    theorySections: [
      {
        title: 'Le Framework RTCFC expliqué',
        content: `Pour ne plus jamais être en panne d’inspiration devant la zone de texte, retenez l'acronyme universel **RTCFC** :

1. **R (Rôle)** : Qui est l'IA ? (*« Agis comme un directeur marketing B2B... »*)
2. **T (Tâche)** : Que doit-elle faire exactement ? Utilisez un verbe d'action (*« Rédige », « Compare », « Synthétise »*).
3. **C (Contexte)** : Quels sont les éléments de situation, l'historique et la cible ?
4. **F (Format)** : Sous quelle forme livrer la réponse ? (*Tableau à 3 colonnes, liste numérotée, e-mail de 150 mots*).
5. **C (Contraintes)** : Quelles sont les limites strictes à respecter ? (*« N'utilise aucun anglicisme », « Ne dépasse pas 5 points »*).`
      },
      {
        title: 'Pourquoi donner un Rôle transforme radicalement la réponse',
        content: `Donner un rôle au modèle active un sous-espace statistique de son vocabulaire. Si vous lui dites :
- *« Tu es un avocat d'affaires »*, il mobilisera un registre juridique formel, prudent et rigoureux.
- *« Tu es un professeur de maternelle »*, il utilisera des métaphores enfantines, des mots simples et un ton chaleureux.`,
        keyTakeaway: 'Le rôle active le bon costume lexical et le bon niveau d’exigence dès le premier mot.'
      },
      {
        title: 'Définir des contraintes positives et négatives',
        content: `Les contraintes guident le modèle dans un couloir étroit de création :
- **Contrainte positive** : Ce qu'il *doit* faire (*« Cite obligatoirement 3 exemples concrets »*).
- **Contrainte négative** : Ce qu'il *ne doit pas* faire (*« Ne formule aucune conclusion mielleuse du type "En résumé" »*).
*Astuce :* Les LLM comprennent mieux les consignes positives (« Fais X ») que les pures négations (« Ne fais pas Y »). Précisez toujours ce qu'il faut faire à la place !`
      }
    ],
    comparisons: [
      {
        id: 'comp-2',
        title: 'Prompt informel vs Prompt structuré RTCFC',
        contextDesc: 'Créer un plan de communication pour le lancement d’une gourde isotherme écologique.',
        badPrompt: {
          text: 'Donne-moi des idées pour lancer ma marque de gourde écologique.',
          critique: 'Aucun rôle d’expert, aucun canal précisé, aucun budget, aucune cible, format libre entraînant des banalités que tout le monde connaît déjà.',
          simulatedOutput: '1. Crée un compte Instagram.\n2. Fais appel à des influenceurs écolos.\n3. Propose une réduction de 10% pour les premiers acheteurs.\n4. Participe à des salons bios.\n5. Fais des affiches.'
        },
        goodPrompt: {
          text: `[RÔLE] Tu es un stratège marketing expert en lancement de produits éco-responsables auprès de la génération Z (18-25 ans).
[CONTEXTE] Nous lançons "AquaPure", une gourde isotherme en inox recyclé garantie à vie, vendue 35€. Notre budget de lancement est modeste (moins de 2 000€).
[TÂCHE] Propose une stratégie de pré-lancement sur 4 semaines avant l’ouverture du site e-commerce.
[FORMAT] Présente la réponse sous forme de tableau Markdown à 3 colonnes : Semaine, Actions prioritaires, Indicateur de succès (KPI).
[CONTRAINTES]
- Privilégie uniquement les leviers organiques (TikTok, UGC, partenariats micro-créateurs sans rémunération fixe).
- N'inclus aucune publicité payante Meta/Google.
- Reste concret et immédiatement actionnable.`,
          breakdown: [
            { part: '[RÔLE] Tu es un stratège marketing...', label: 'Rôle expert', color: 'indigo' },
            { part: '[CONTEXTE] Nous lançons "AquaPure"... budget modeste', label: 'Contexte produit & budget', color: 'amber' },
            { part: '[TÂCHE] Propose une stratégie de pré-lancement sur 4 semaines...', label: 'Tâche précise', color: 'emerald' },
            { part: '[FORMAT] Présente la réponse sous forme de tableau Markdown...', label: 'Format structuré', color: 'sky' },
            { part: '[CONTRAINTES] Privilégie uniquement le gratuit / Pas de pub payante', label: 'Contraintes strictes', color: 'rose' }
          ],
          explanation: 'Chaque lettre du framework RTCFC est identifiée avec des balises ou délimiteurs clairs. Le résultat est directement exploitable en réunion.',
          simulatedOutput: `| Semaine | Actions prioritaires | Indicateur de succès (KPI) |
| :--- | :--- | :--- |
| **S1 : Le Teasing** | Création de 5 vidéos TikTok montrant les coulisses de fabrication en inox recyclé et crash-tests humoristiques. | +500 abonnés qualifiés, taux de rétention vidéo > 40% |
| **S2 : Le Défi Zéro Plastique** | Lancement du hashtag #GourdePure : inviter la communauté à filmer leur pire bouteille jetable en échange d’un accès VIP. | 100 participations UGC spontanées |
| **S3 : Micro-Créateurs** | Envoi de 20 gourdes gravées au prénom de micro-influenceurs engagés (3k-15k abonnés) sans contrat forcé. | Au moins 12 unboxings spontanés en Stories |
| **S4 : Liste d’attente exclusive** | Ouverture de l’accès anticipé privé aux 300 premiers inscrits avec gravure offerte. | Taux de conversion de la waitlist > 15% dès J1 |`
        }
      }
    ],
    exercise: {
      id: 'exo-2',
      title: 'Appliquer la méthode RTCFC',
      scenario: 'Vous travaillez dans un refuge pour animaux et devez créer une fiche d’adoption pour un chien nommé Rocky (berger croisé très joueur de 3 ans qui adore les enfants mais a peur des chats).',
      objective: 'Rédigez un prompt complet intégrant : Rôle (rédacteur bienveillant), Tâche (fiche d’adoption touchante), Contexte (refuge, profil de Rocky), Format (titre, 3 paragraphes, liste de besoins) et Contraintes (mentionner impérativement la précaution avec les chats).',
      starterPrompt: 'Écris un texte pour faire adopter un chien au refuge.',
      criteria: [
        {
          id: 'role',
          label: 'Présence d’un rôle explicite (rédacteur, bénévole, communicant)',
          keywords: ['rôle', 'agis comme', 'tu es', 'rédacteur', 'bénévole', 'communicant', 'expert'],
          feedback: 'Parfait ! L’incarnation d’un rôle donne le bon ton.'
        },
        {
          id: 'context',
          label: 'Détails du contexte (Rocky, 3 ans, enfants, chats)',
          keywords: ['rocky', 'chien', 'ans', 'enfant', 'chat', 'refuge'],
          feedback: 'Très bien, les spécificités de Rocky sont bien transmises.'
        },
        {
          id: 'format',
          label: 'Format stipulé (paragraphes, puces, fiche)',
          keywords: ['format', 'paragraphe', 'titre', 'liste', 'puces', 'tableau', 'fiche'],
          feedback: 'Excellent, le format garantit une mise en page propre.'
        },
        {
          id: 'constraint',
          label: 'Contrainte claire (ton chaleureux, honnêteté sur les chats)',
          keywords: ['contrainte', 'honnête', 'sans', 'interdit', 'impérativement', 'attention', 'chats'],
          feedback: 'Superbe, la contrainte sécurise l’adoption responsable !'
        }
      ],
      hint: 'Pensez à structurer avec des préfixes : Rôle : [...], Contexte : [...], Tâche : [...], Format : [...], Contraintes : [...].',
      solutionModel: `Tu es un bénévole passionné et rédacteur dans un refuge animalier.
Contexte : Nous cherchons une famille aimante pour Rocky, un berger croisé de 3 ans, plein d'énergie, très affectueux avec les enfants, propre et joueur. Point crucial : il a peur des chats et ne doit pas cohabiter avec eux.
Tâche : Rédige une fiche d'adoption émouvante et réaliste.
Format :
1. Un titre accrocheur à la première personne (paroles de Rocky)
2. Une courte histoire de présentation (100 mots)
3. La liste à puces "Mes critères pour une vie idéale"
Contraintes : Ne cache pas son incompatibilité avec les chats, mais présente-la avec douceur et bienveillance. Évite le ton misérabiliste.`,
      explanationSolution: 'La structure RTCFC est intégrale. Le modèle n’a aucune ambiguïté et produira un résultat émouvant mais responsable.'
    },
    quiz: [
      {
        id: 'q2-1',
        question: 'Que signifie l’acronyme RTCFC ?',
        options: [
          'Rapide, Technique, Conforme, Fiable, Complet',
          'Rôle, Tâche, Contexte, Format, Contraintes',
          'Réseau, Token, Calcul, Fonction, Code',
          'Recherche, Traduction, Correction, Formulation, Clôture'
        ],
        correctAnswer: 1,
        explanation: 'RTCFC représente les 5 composants fondamentaux d’une instruction complète : Rôle, Tâche, Contexte, Format et Contraintes.'
      },
      {
        id: 'q2-2',
        question: 'Pourquoi assigner un rôle (ex: « Tu es un nutritionniste du sport ») à l’IA ?',
        options: [
          'Cela active un vocabulaire spécialisé et ajuste le niveau de rigueur et d’expertise attendu',
          'Cela permet de débloquer des fonctionnalités payantes du modèle',
          'Cela force l’IA à donner des réponses plus longues',
          'Cela contourne automatiquement tous les filtres de sécurité'
        ],
        correctAnswer: 0,
        explanation: 'Le rôle oriente l’espace vectoriel des mots que l’IA va mobiliser, en adoptant l’éthique, le jargon et la profondeur d’un professionnel ciblé.'
      },
      {
        id: 'q2-3',
        question: 'Quelle est la formulation la plus efficace pour imposer une contrainte à un LLM ?',
        options: [
          '« Ne sois pas ennuyeux. »',
          '« Écris de façon dynamique avec des phrases de moins de 15 mots et pose 2 questions rhétoriques au lecteur. »',
          '« Essaie de faire de ton mieux. »',
          '« Fais attention à ce que tu dis. »'
        ],
        correctAnswer: 1,
        explanation: 'Les LLM répondent beaucoup mieux aux consignes d’action positives, mesurables et quantifiables qu’aux interdictions vagues comme « ne sois pas ennuyeux ».'
      },
      {
        id: 'q2-4',
        question: 'Quel est l’intérêt de spécifier explicitement un Format (ex: « tableau à 3 colonnes ») ?',
        options: [
          'Éviter de perdre du temps à reformater ou nettoyer manuellement la réponse obtenue',
          'Réduire la facture d’électricité des serveurs',
          'Empêcher l’IA de faire des erreurs de calcul',
          'Rendre le prompt plus joli à regarder'
        ],
        correctAnswer: 0,
        explanation: 'En spécifiant le format exact (tableau, liste à puces, JSON, e-mail), le résultat est directement réutilisable dans votre travail quotidien sans réécriture.'
      },
      {
        id: 'q2-5',
        question: 'Dans la méthode RTCFC, quelle composante fournit la « matière première » et l’historique de la situation ?',
        options: [
          'Le Format',
          'Le Rôle',
          'Le Contexte',
          'La Contrainte négative'
        ],
        correctAnswer: 2,
        explanation: 'Le Contexte apporte les données de fond, les détails de l’entreprise, l’historique ou la situation spécifique qui ancrent la réponse dans votre réalité.'
      }
    ],
    summaryPoints: [
      'Le framework RTCFC (Rôle, Tâche, Contexte, Format, Contraintes) structure vos prompts avec une rigueur professionnelle.',
      'Le Rôle donne le ton, le niveau d’expertise et le vocabulaire adapté.',
      'La Tâche doit s’appuyer sur un verbe d’action précis et un objectif univoque.',
      'Le Format (tableaux, listes, gabarits) rend la réponse immédiatement exploitable.',
      'Les Contraintes ferment la porte aux approximations et aux dérives stylistiques.'
    ]
  },
  {
    id: 3,
    slug: 'clarte-precision-eviter-prompts-vagues',
    title: '3. Clarté & Précision : en finir avec le vague',
    subtitle: 'Comment éliminer les ambiguïtés et maîtriser le niveau de granularité',
    estimatedMinutes: 25,
    iconName: 'Crosshair',
    objectives: [
      'Identifier les pièges des mots flous (« court », « sympa », « rapidement », « bon »)',
      'Quantifier précisément les critères (nombre de mots, de puces, de paragraphes)',
      'Utiliser des délimiteurs (guillemets triples, balises XML) pour séparer consigne et données',
      'Donner des ordres clairs plutôt que des requêtes passives'
    ],
    analogy: {
      title: 'L’analogie de la commande au salon de coiffure',
      story: 'Si vous vous asseyez dans le fauteuil du coiffeur et dites : « Coupez un peu, faites quelque chose de moderne et frais », vous prenez un risque colossal. Pour lui, « un peu » peut être 1 centimètre ou un crâne rasé !',
      lesson: 'Pour être satisfait, vous dites : « Raccourcissez les pointes de 2 centimètres sur les côtés, conservez de la longueur sur le dessus avec une mèche vers la droite, et effilez la nuque sans toucher à la frange. » Dans le prompt engineering, chaque mot flou est une loterie où vous perdez souvent.'
    },
    theorySections: [
      {
        title: 'La chasse aux mots « éponges »',
        content: `Un mot « éponge » est un adjectif subjectif qui absorbe toutes les interprétations possibles :
- ❌ *« Fais un résumé court »* -> L'IA peut faire 3 mots ou 3 pages.
- ✅ *« Résume ce texte en exactement 150 mots (+/- 10%) »*
- ❌ *« Utilise un ton sympa »* -> L'IA peut utiliser des blagues lourdes ou un tutoiement familier.
- ✅ *« Utilise un ton professionnel mais accessible, à la deuxième personne du pluriel (vous) »*`
      },
      {
        title: 'Le super-pouvoir des délimiteurs',
        content: `Lorsque vous demandez à l'IA d'analyser un document, séparez vos instructions de la matière première en utilisant des délimiteurs explicites :
- Les triples guillemets : \`"""\`
- Les balises de type XML : \`<texte>...</texte>\`
- Les blocs de code Markdown : \`\`\`

Cela évite que le modèle ne prenne une phrase du document analysé pour un ordre !`,
        keyTakeaway: 'Les délimiteurs créent une frontière étanche entre vos instructions et les données à traiter.'
      },
      {
        title: 'L’impératif direct plutôt que la politesse encombrante',
        content: `Il est poli de dire « *Pourrais-tu s'il te plaît avoir l'amabilité de m'aider si cela ne te dérange pas à rédiger...* », mais pour un modèle statistique, cela dilue le message dans des tokens superflus.
Préférez des verbes d'action directs : **« Analyse »**, **« Extrais »**, **« Classe »**, **« Rédige »**.`
      }
    ],
    comparisons: [
      {
        id: 'comp-3',
        title: 'Consigne évasive vs Consigne chiffrée avec délimiteurs',
        contextDesc: 'Vous avez reçu un avis client mécontent et souhaitez en extraire les problèmes concrets.',
        badPrompt: {
          text: 'Dis-moi ce qui ne va pas dans cet avis client : Le colis est arrivé avec deux jours de retard, le carton était tout écrasé et il manquait le câble de charge dans la boîte. Le produit est bien mais le service est nul.',
          critique: 'Texte mélangé à l’instruction sans délimiteur. Aucune structure de sortie demandée. Mots vagues (« dis-moi ce qui ne va pas »).',
          simulatedOutput: 'Dans cet avis, le client se plaint du retard de livraison, de l’emballage abîmé et du câble manquant. Il apprécie le produit mais pas le service global.'
        },
        goodPrompt: {
          text: `Analyse l'avis client délimité ci-dessous par des balises <avis>.

<avis>
Le colis est arrivé avec deux jours de retard, le carton était tout écrasé et il manquait le câble de charge dans la boîte. Le produit est bien mais le service est nul.
</avis>

Effectue les 3 actions suivantes :
1. Catégorise le sentiment général (Positif, Neutre, Négatif).
2. Extrais la liste des problèmes logistiques sous forme de puces avec un niveau de gravité estimé (Faible, Moyen, Élevé).
3. Rédige une réponse type d'excuse de 3 phrases au nom du Service Client en proposant le renvoi immédiat du câble.`,
          breakdown: [
            { part: 'Analyse l\'avis client délimité... par des balises <avis>', label: 'Consigne claire + délimiteur', color: 'indigo' },
            { part: '<avis>...</avis>', label: 'Donnée brute isolée', color: 'amber' },
            { part: 'Effectue les 3 actions suivantes : 1. Catégorise... 2. Extrais... 3. Rédige...', label: 'Tâches chiffrées & précises', color: 'emerald' }
          ],
          explanation: 'L’IA sait exactement ce qui est le document et ce que sont les 3 livrables attendus, sans aucune place pour le bavardage.',
          simulatedOutput: `1. Sentiment général : Négatif (avec satisfaction produit isolée)

2. Problèmes logistiques identifiés :
• Retard de livraison de 48h (Gravité : Moyen)
• Emballage externe endommagé / écrasé (Gravité : Moyen)
• Composant manquant (câble d'alimentation) (Gravité : Élevé)

3. Réponse du Service Client :
« Bonjour, nous vous présentons nos plus sincères excuses pour la dégradation de votre colis et le retard subi. Nous venons d'expédier dès aujourd'hui un câble de charge neuf en livraison express sans aucun frais à votre adresse. Notre priorité absolue reste votre entière satisfaction, et nous renforçons immédiatement nos contrôles d'emballage. »`
        }
      }
    ],
    exercise: {
      id: 'exo-3',
      title: 'Nettoyer un prompt vague et injecter des délimiteurs',
      scenario: 'Vous avez un article de blog de 400 mots sur la cybersécurité. Vous voulez en tirer 3 conseils pratiques pour des employés de bureau, chacun en 1 phrase maximum.',
      objective: 'Réécrivez le prompt starter pour éliminer le flou, ajouter un délimiteur (ex: <article>) et imposer des limites quantitatives exactes.',
      starterPrompt: 'Résume cet article sur la sécurité informatique de manière sympa et pas trop longue : [Coller l’article]',
      criteria: [
        {
          id: 'delimiters',
          label: 'Utilisation de délimiteurs (balises XML, guillemets triples)',
          keywords: ['<', '>', '"""', 'balise', 'délimité', 'guillemets', 'crochets'],
          feedback: 'Bravo ! Les délimiteurs sécurisent l’analyse du texte.'
        },
        {
          id: 'quantity',
          label: 'Critère quantitatif précis (ex: 3 conseils, 1 phrase chacun)',
          keywords: ['3', 'trois', 'phrase', 'chacun', 'exactement', 'puces', 'mots'],
          feedback: 'Superbe, la quantification supprime l’ambiguïté de longueur.'
        },
        {
          id: 'target_audience',
          label: 'Cible claire (employés de bureau, débutants)',
          keywords: ['employé', 'collaborateur', 'bureau', 'débutant', 'salarié', 'équipe'],
          feedback: 'Excellent, l’audience est bien ciblée.'
        }
      ],
      hint: 'Utilisez la structure : « Analyse l’article situé entre les balises <texte>...</texte>. Extrais exactement 3 conseils clés pour des employés de bureau. Chaque conseil doit faire 1 seule phrase. »',
      solutionModel: `Analyse le texte contenu entre les triples guillemets ci-dessous :

"""
[Insérer le texte de l'article]
"""

Tâche :
1. Extrais exactement 3 conseils prioritaires de sécurité applicables immédiatement par des employés de bureau.
2. Formule chaque conseil sous la forme d'une seule phrase impérative courte (maximum 20 mots par phrase).
3. N'ajoute aucune phrase d'introduction ni de conclusion.`,
      explanationSolution: 'Aucun mot flou : les triples guillemets isolent le texte, le nombre de conseils est fixé à 3, la longueur à 20 mots par puce, et le bavardage d’introduction est proscrit.'
    },
    quiz: [
      {
        id: 'q3-1',
        question: 'Parmi ces consignes, laquelle est la plus exempte d’ambiguïté pour un modèle d’IA ?',
        options: [
          '« Rédige un texte court et percutant sur le sport. »',
          '« Fais un topo rapide pour mon équipe demain matin. »',
          '« Rédige un paragraphe de 80 à 100 mots expliquant 2 bienfaits cardiovasculaires de la natation pour un adulte sédentaire. »',
          '« Parle-moi un peu du sport en général. »'
        ],
        correctAnswer: 2,
        explanation: 'Cette option quantifie la longueur (80-100 mots), cible le sujet (2 bienfaits cardiovasculaires de la natation) et l’audience (adulte sédentaire).'
      },
      {
        id: 'q3-2',
        question: 'À quoi servent les délimiteurs comme `"""` ou `<document>...</document>` dans un prompt ?',
        options: [
          'À crypter les données pour que les hackers ne puissent pas les lire',
          'À séparer sans ambiguïté les consignes de l’utilisateur des données textuelles à traiter',
          'À accélérer la vitesse de calcul du processeur de 50%',
          'À afficher du texte en gras dans l’interface'
        ],
        correctAnswer: 1,
        explanation: 'Les délimiteurs isolent la donnée brute pour que l’IA comprenne où s’arrête votre ordre et où commence le contenu à traiter.'
      },
      {
        id: 'q3-3',
        question: 'Pourquoi est-il déconseillé d’écrire « S’il te plaît, pourrais-tu gentiment me faire... » ?',
        options: [
          'Car cela gaspille des tokens et noie le verbe d’action principal dans des formules superflues',
          'Car les intelligences artificielles détestent la politesse humaine',
          'Car cela fait planter l’algorithme de calcul',
          'Car cela déclenche une alerte de sécurité sur le serveur'
        ],
        correctAnswer: 0,
        explanation: 'La politesse excessive consomme inutilement des tokens et allonge le prompt sans apporter aucune information directrice utile au modèle.'
      },
      {
        id: 'q3-4',
        question: 'Que risque-t-il de se passer si vous écrivez simplement : « Ne fais pas un texte trop long » ?',
        options: [
          'L’IA va obligatoirement générer un texte d’un seul mot',
          'L’IA n’a pas la même notion de « long » que vous et peut produire un résultat inadapté',
          'L’IA va refuser de répondre',
          'L’IA va répéter votre consigne en boucle'
        ],
        correctAnswer: 1,
        explanation: '« Trop long » est une notion 100% subjective. Pour certains c’est 30 mots, pour d’autres c’est 500 mots. Fixez toujours un chiffre.'
      }
    ],
    summaryPoints: [
      'Bannissez les mots éponges : « court », « rapide », « sympa », « bien fait ».',
      'Quantifiez toujours vos exigences : nombre de mots, nombre d’exemples, nombre de colonnes.',
      'Utilisez des délimiteurs (balises XML, guillemets) pour clore hermétiquement vos données.',
      'Privilégiez les verbes d’action précis à l’impératif dès le début de votre consigne.'
    ]
  },
  {
    id: 4,
    slug: 'exemples-prompt-zero-shot-few-shot',
    title: '4. La puissance des exemples : Few-Shot',
    subtitle: 'Zero-shot, One-shot, Few-shot : montrer plutôt que simplement expliquer',
    estimatedMinutes: 30,
    iconName: 'CopyCheck',
    objectives: [
      'Comprendre la différence entre Zero-shot, One-shot et Few-shot prompting',
      'Savoir pourquoi montrer 2 ou 3 exemples est plus efficace que rédiger 10 lignes de consignes abstraites',
      'Maîtriser la syntaxe canonique Entrée -> Sortie (Input -> Output)',
      'Découvrir comment calibrer le ton et le format exact grâce aux démonstrations'
    ],
    analogy: {
      title: 'L’analogie de la chorégraphie de danse',
      story: 'Imaginez que vous vouliez apprendre un pas de salsa à un ami. Vous pouvez lui expliquer pendant une heure : « Tu avances le pied gauche à 45 degrés sur le temps 1, tu transfères le poids sur la plante du pied droit au temps 2, puis tu reviens au centre au temps 3 ». Il sera perdu.',
      lesson: 'Si vous lui dites : « Regarde-moi faire deux fois », vous exécutez le pas devant lui, puis vous dites « Maintenant à toi ! », il réussit instantanément. Le Few-Shot prompting, c’est exactement cela : montrer le pas de danse au modèle.'
    },
    theorySections: [
      {
        title: 'Le spectre : Zero-shot vs Few-shot',
        content: `- **Zero-shot** : Vous donnez la consigne sans aucun exemple. L'IA doit deviner le style d'après ses connaissances générales. Utile pour les tâches simples ou créatives.
- **One-shot** : Vous fournissez **1 exemple** de couple [Entrée -> Sortie attendue]. Le modèle cale son format dessus.
- **Few-shot** : Vous fournissez **2 à 5 exemples** représentatifs. C'est l'arme absolue pour les formats stricts, les classifications ou le style d'écriture d'une marque.`
      },
      {
        title: 'La structure standard d’un prompt Few-shot',
        content: `Pour que l'IA comprenne immédiatement le schéma mathématique, structurez vos exemples avec un patron répétitif très lisible :

\`\`\`text
Tâche : Traduis le jargon technique en langage courant.

Exemple 1 :
Entrée : "Nous avons déployé un patch pour corriger un memory leak sur le cluster Kubernetes."
Sortie : "Nous avons réparé un bogue qui ralentissait nos serveurs."

Exemple 2 :
Entrée : "Le pipeline CI/CD a échoué à cause d'une régression lors du merge."
Sortie : "La mise à jour automatique a été bloquée car le nouveau code contenait une erreur."

Maintenant, traite cette entrée :
Entrée : "L'API renvoie une erreur 504 en raison d'un timeout de la base de données répliquée."
Sortie :
\`\`\`

L'IA n'a plus qu'à continuer la suite logique !`,
        keyTakeaway: 'Le modèle est une machine de complétion : donnez-lui le début du motif, il complétera la suite avec une exactitude chirurgicale.'
      },
      {
        title: 'Règles d’or pour concevoir de bons exemples',
        content: `1. **Diversité** : Montrez des cas variés (un cas positif, un cas négatif, un cas particulier).
2. **Consistance** : Gardez exactement la même syntaxe pour chaque exemple.
3. **Qualité irréprochable** : Si vos exemples contiennent des fautes d'orthographe ou un format bancal, l'IA reproduira religieusement vos erreurs !`
      }
    ],
    comparisons: [
      {
        id: 'comp-4',
        title: 'Consigne descriptive seule (Zero-shot) vs Apprentissage par exemples (Few-shot)',
        contextDesc: 'Classer des requêtes d’assistance client en catégories et leur attribuer un tag d’urgence.',
        badPrompt: {
          text: 'Catégorise les demandes clients selon qu’elles concernent la facturation, la technique ou la livraison, et dis si c’est urgent ou pas. Demande : "Mon colis a été livré chez le voisin qui est parti en vacances pendant 3 semaines, je fais comment ?"',
          critique: 'Format de sortie imprévisible. L’IA va faire une longue phrase explicative sans respecter de schéma uniforme exploitable dans un tableur.',
          simulatedOutput: 'Cette demande concerne la livraison. C’est assez urgent car le client ne peut pas récupérer son colis pendant 3 semaines à cause de l’absence de son voisin.'
        },
        goodPrompt: {
          text: `Tu es un système automatisé de routage de tickets support. Pour chaque message, identifie le Département [Facturation | Technique | Livraison] et la Priorité [P1-Urgente | P2-Normale | P3-Basse]. Respecte scrupuleusement le format des exemples ci-dessous.

---
Message : "Ma carte a été débitée deux fois ce matin pour le même abonnement !"
Département : Facturation
Priorité : P1-Urgente
Action : Remboursement immédiat

---
Message : "Le bouton pour changer mon mot de passe dans les paramètres ne s'affiche pas."
Département : Technique
Priorité : P2-Normale
Action : Vérification UI

---
Message : "Mon colis a été livré chez le voisin qui est parti en vacances pendant 3 semaines, je fais comment ?"
Département :`,
          breakdown: [
            { part: 'Tu es un système automatisé...', label: 'Rôle & Objectif', color: 'indigo' },
            { part: 'Message : "..." Département : Facturation Priorité : P1-Urgente...', label: 'Exemple 1 complet', color: 'emerald' },
            { part: 'Message : "..." Département : Technique Priorité : P2-Normale...', label: 'Exemple 2 complet', color: 'sky' },
            { part: 'Message : "Mon colis..." Département :', label: 'Entrée cible prête à compléter', color: 'amber' }
          ],
          explanation: 'En laissant la dernière ligne ouverte (« Département : »), vous tendez la perche au modèle pour qu’il se contente de remplir les champs selon le gabarit exact.',
          simulatedOutput: `Livraison
Priorité : P1-Urgente
Action : Relivraison ou ouverture d'enquête transporteur`
        }
      }
    ],
    exercise: {
      id: 'exo-4',
      title: 'Créer un prompt Few-shot de standardisation',
      scenario: 'Vous devez uniformiser des adresses professionnelles désordonnées sous la forme standardisée : "Nom Prénom | Entreprise | Ville (Code Postal)".',
      objective: 'Rédigez un prompt avec 2 exemples complets illustrant la transformation, suivi de la nouvelle adresse à traiter.',
      starterPrompt: 'Mets ces adresses dans le bon ordre.',
      criteria: [
        {
          id: 'two_examples',
          label: 'Présence d’au moins deux exemples distincts',
          keywords: ['exemple 1', 'exemple 2', 'entrée', 'sortie', '->', 'modèle'],
          feedback: 'Parfait ! Les exemples guident le modèle.'
        },
        {
          id: 'pipe_format',
          label: 'Respect d’un format délimité uniforme (ex: séparateur pipe | ou tiret)',
          keywords: ['|', 'nom', 'entreprise', 'ville', 'standard', 'format'],
          feedback: 'Excellent, la structure de sortie est claire.'
        },
        {
          id: 'final_input',
          label: 'Présence de la donnée finale à traiter',
          keywords: ['maintenant', 'adresse', 'entrée :', 'traite', 'texte'],
          feedback: 'Superbe, le modèle a son déclencheur d’exécution.'
        }
      ],
      hint: 'Créez deux blocs « Entrée: ... Sortie: ... » puis terminez par « Entrée: Dupont Alice travaillant chez Decathlon à Lille 59000 -> Sortie: »',
      solutionModel: `Standardise les coordonnées professionnelles selon la structure exacte :
[Nom Prénom] | [Entreprise] | [Ville] ([Code Postal])

Exemple 1 :
Entrée : "Martin Paul de chez Carrefour à Lyon 69002"
Sortie : Paul Martin | Carrefour | Lyon (69002)

Exemple 2 :
Entrée : "Société Renault, à Boulogne-Billancourt 92100, pour Thomas Sophie"
Sortie : Sophie Thomas | Renault | Boulogne-Billancourt (92100)

Exemple à traiter :
Entrée : "Dupont Lucas chez Danone à Bordeaux 33000"
Sortie :`,
      explanationSolution: 'Les deux exemples montrent au modèle comment extraire les 4 entités même quand l’ordre initial des mots varie, et le contraignent au séparateur "|".'
    },
    quiz: [
      {
        id: 'q4-1',
        question: 'Quelle est la principale différence entre le Zero-shot et le Few-shot prompting ?',
        options: [
          'Le Zero-shot est payant alors que le Few-shot est gratuit',
          'Le Zero-shot ne donne aucun exemple préalable, tandis que le Few-shot intègre plusieurs exemples illustratifs',
          'Le Zero-shot utilise des chiffres et le Few-shot utilise des lettres',
          'Le Few-shot ne fonctionne que sur les ordinateurs portables'
        ],
        correctAnswer: 1,
        explanation: 'En Zero-shot, l’IA n’a aucun modèle de référence dans l’invite. En Few-shot, vous lui fournissez quelques exemples concrets de la réponse attendue.'
      },
      {
        id: 'q4-2',
        question: 'Pourquoi le Few-shot prompting est-il considéré comme l’une des techniques les plus puissantes ?',
        options: [
          'Parce qu’il remplace de longues explications abstraites par la démonstration directe du résultat attendu',
          'Parce qu’il permet à l’IA d’apprendre pour toujours et de modifier ses poids de calcul',
          'Parce qu’il empêche physiquement l’ordinateur de surchauffer',
          'Parce qu’il ne nécessite aucun mot dans le prompt'
        ],
        correctAnswer: 0,
        explanation: 'Pour un LLM (qui cherche des motifs récurrents), voir 2 exemples clairs est 10 fois plus explicite que lire 3 paragraphes de règles théoriques.'
      },
      {
        id: 'q4-3',
        question: 'Si vous fournissez 3 exemples dans votre prompt et que le 2e contient une faute d’orthographe grossière, que va-t-il se passer ?',
        options: [
          'L’IA va vous corriger et vous gronder',
          'L’IA risque d’imiter ce style et de reproduire volontairement des fautes dans sa propre réponse',
          'Le serveur va renvoyer un code d’erreur 404',
          'L’IA va ignorer silencieusement tous vos exemples'
        ],
        correctAnswer: 1,
        explanation: 'L’IA considère vos exemples comme la vérité stylistique à reproduire fidèlement. Vos exemples doivent toujours être impeccables.'
      },
      {
        id: 'q4-4',
        question: 'Combien d’exemples est-il généralement recommandé de fournir dans un prompt Few-shot pour la plupart des tâches courantes ?',
        options: [
          '100 à 200 exemples',
          'Exactement zéro',
          '2 à 5 exemples bien ciblés',
          'Au moins 10 000 exemples'
        ],
        correctAnswer: 2,
        explanation: 'Entre 2 et 5 exemples suffisent amplement pour fixer le schéma, sans surcharger la fenêtre de contexte ni dépenser trop de tokens inutilement.'
      }
    ],
    summaryPoints: [
      'Montrer est plus efficace que décrire : les exemples ancrent immédiatement le format attendu.',
      'Le Few-shot consiste à donner 2 à 5 paires d’exemples (Entrée -> Sortie) avant la requête finale.',
      'Cette technique est imbattable pour la classification de données, le formatage rigide et le respect d’une voix de marque.',
      'Prenez soin de fournir des exemples variés et d’une qualité orthographique et logique irréprochable.'
    ]
  },
  {
    id: 5,
    slug: 'raisonnement-etape-par-etape-chain-of-thought',
    title: '5. Le raisonnement pas à pas : Chain-of-Thought',
    subtitle: 'Comment démultiplier la précision logique et mathématique de l’IA',
    estimatedMinutes: 25,
    iconName: 'GitBranch',
    objectives: [
      'Comprendre pourquoi les LLM font des erreurs quand on leur demande une réponse immédiate',
      'Maîtriser la phrase magique : « Réfléchis étape par étape » (Chain-of-Thought)',
      'Apprendre à faire générer un plan de raisonnement intermédiaire avant la conclusion',
      'Appliquer cette technique aux calculs, énigmes logiques et analyses complexes'
    ],
    analogy: {
      title: 'L’analogie du problème de mathématiques au tableau noir',
      story: 'Imaginez un élève de 14 ans devant une équation complexe à plusieurs inconnues. Si le professeur lui dit : « Donne-moi le résultat final en 1 seconde sans rien écrire », l’élève va paniquer, tenter une estimation au hasard et se tromper une fois sur deux.',
      lesson: 'Si le professeur lui dit : « Prends la craie, pose la première étape, simplifie les parenthèses, puis déduis la solution », l’élève trouve le résultat exact à chaque fois. La technique Chain-of-Thought donne cette craie et ce tableau noir à l’intelligence artificielle.'
    },
    theorySections: [
      {
        title: 'Le piège de la réponse hâtive pour un LLM',
        content: `Rappelez-vous qu'un LLM génère ses mots les uns après les autres sans pouvoir revenir en arrière ni effacer ce qu'il a déjà écrit.
Si vous lui demandez directement : *« Quel est le prix final de 3 articles à 14€ avec 15% de remise et 4€ de port ? »*, le modèle doit cracher le premier chiffre dès le premier token généré, sans avoir eu l'espace textuel pour poser l'opération !`
      },
      {
        title: 'La découverte historique du Chain-of-Thought (CoT)',
        content: `En 2022, des chercheurs de Google ont découvert qu'en ajoutant simplement cette phrase au prompt :
> **« Pense étape par étape avant de répondre »** *(Let's think step by step)*

Le taux de réussite sur les tests logiques et arithmétiques bondissait spectaculairement de 17% à plus de 78% !

En générant d'abord les étapes intermédiaires, le modèle utilise ses propres mots précédents comme mémoire de travail pour en déduire la réponse finale exacte.`,
        keyTakeaway: 'Forcer l’IA à expliciter son brouillon lui donne le temps de calcul nécessaire pour ne pas se tromper.'
      },
      {
        title: 'Structurer le CoT dans vos prompts métier',
        content: `Ne vous contentez pas de laisser l'IA divaguer. Dictez-lui les étapes d'analyse souhaitées :
1. *Étape 1 : Identifie les faits établis.*
2. *Étape 2 : Élimine les hypothèses contradictoires.*
3. *Étape 3 : Effectue le calcul détaillé.*
4. *Étape 4 : Déduis la conclusion finale.*`
      }
    ],
    comparisons: [
      {
        id: 'comp-5',
        title: 'Question directe piégeuse vs Décomposition pas à pas',
        contextDesc: 'Un problème de logique et de calcul de gestion de stocks.',
        badPrompt: {
          text: 'Une boulangerie a 120 croissants à 7h du matin. Elle vend les deux tiers avant midi. À 13h, le boulanger en cuit 45 de plus. Dans l’après-midi, il vend 80% du stock restant. Combien de croissants reste-t-il à la fermeture ce soir ? Donne juste le chiffre.',
          critique: 'Demander « donne juste le chiffre » interdit au modèle de poser ses calculs. L’IA a de fortes chances d’halluciner un chiffre approximatif faux.',
          simulatedOutput: 'Il reste 15 croissants à la fermeture.'
        },
        goodPrompt: {
          text: `Résous ce problème de gestion de stock.

Consigne méthodologique :
1. Décompose ton raisonnement étape par étape en affichant chaque calcul intermédiaire.
2. Pour chaque étape horaire, précise le stock restant exact.
3. Termine par une ligne finale isolée : "RÉSULTAT FINAL : X croissants".

Énoncé :
Une boulangerie a 120 croissants à 7h du matin. Elle vend les deux tiers avant midi. À 13h, le boulanger en cuit 45 de plus. Dans l’après-midi, il vend 80% du stock restant. Combien de croissants reste-t-il à la fermeture ce soir ?`,
          breakdown: [
            { part: 'Consigne méthodologique : 1. Décompose ton raisonnement...', label: 'Activation Chain-of-Thought', color: 'indigo' },
            { part: '2. Pour chaque étape horaire, précise le stock restant...', label: 'Vérification intermédiaire', color: 'sky' },
            { part: '3. Termine par : "RÉSULTAT FINAL : X"', label: 'Sortie finale verrouillée', color: 'emerald' }
          ],
          explanation: 'L’IA utilise chaque ligne de calcul comme tremplin pour la suivante, garantissant un résultat mathématique sans faille.',
          simulatedOutput: `Étape 1 (Matinée) :
• Stock initial à 7h = 120 croissants
• Vente des 2/3 = 120 × (2/3) = 80 croissants vendus
• Stock restant à midi = 120 - 80 = 40 croissants

Étape 2 (Fournée de 13h) :
• Ajout de 45 nouveaux croissants
• Nouveau stock disponible = 40 + 45 = 85 croissants

Étape 3 (Après-midi) :
• Vente de 80% du stock restant = 85 × 0,80 = 68 croissants vendus
• Stock restant à la fermeture = 85 - 68 = 17 croissants

RÉSULTAT FINAL : 17 croissants`
        }
      }
    ],
    exercise: {
      id: 'exo-5',
      title: 'Concevoir un prompt d’analyse logique étape par étape',
      scenario: 'Vous devez analyser si un candidat correspond au profil d’un poste de Chef de Projet IT international (exigences : 5 ans d’expérience minimum, anglais bilingue, certification Scrum).',
      objective: 'Rédigez un prompt imposant au modèle d’évaluer d’abord chaque critère individuellement avec une citation de preuve, avant de formuler une décision finale (Validé / Refusé / À approfondir).',
      starterPrompt: 'Dis-moi si ce candidat convient pour le poste de chef de projet IT.',
      criteria: [
        {
          id: 'step_instruction',
          label: 'Instruction explicite de décomposition par étapes',
          keywords: ['étape', 'pas à pas', 'd\'abord', 'décompose', 'procède', 'analyser chaque'],
          feedback: 'Bravo ! La décomposition du raisonnement est bien enclenchée.'
        },
        {
          id: 'criteria_check',
          label: 'Vérification point par point des 3 critères',
          keywords: ['critère', 'expérience', 'anglais', 'scrum', 'certification', 'profil'],
          feedback: 'Très bien, les prérequis du poste sont examinés un à un.'
        },
        {
          id: 'final_verdict',
          label: 'Isolement de la conclusion à la toute fin',
          keywords: ['conclusion', 'verdict', 'décision', 'final', 'synthèse', 'enfin'],
          feedback: 'Superbe, le modèle ne conclut qu’après avoir démontré.'
        }
      ],
      hint: 'Utilisez : « Procède étape par étape. Étape 1 : Vérifie l’expérience. Étape 2 : Vérifie le niveau d’anglais. Étape 3 : Vérifie la certification Scrum. Étape 4 : Conclus par une recommandation claire. »',
      solutionModel: `Agis comme un recruteur expert en profils technologiques.
Analyse le CV fourni ci-dessous pour le poste de Chef de Projet IT International.

Suis scrupuleusement ces étapes de raisonnement :
Étape 1 : Évalue l'expérience professionnelle (minimum 5 ans exigés). Calcule le nombre total d'années pertinentes.
Étape 2 : Évalue la maîtrise de l'anglais (niveau bilingue requis pour animer des équipes aux USA et en Asie).
Étape 3 : Vérifie la détention active d'une certification Scrum Master reconnue.
Étape 4 : Fais la synthèse des points forts et des lacunes observées.
Étape 5 : Rends ton verdict final uniquement parmi ces 3 options : [RETENU EN ENTRETIEN | EN RÉSERVE | CANDIDATURE ÉCARTÉE], accompagné d'une justification en 2 phrases.`,
      explanationSolution: 'Le modèle est contraint d’examiner objectivement chaque exigence avant d’émettre son verdict, évitant les jugements superficiels.'
    },
    quiz: [
      {
        id: 'q5-1',
        question: 'Pourquoi la technique Chain-of-Thought (pensée étape par étape) améliore-t-elle la fiabilité des réponses d’un LLM ?',
        options: [
          'Parce qu’elle force le modèle à générer des tokens intermédiaires qui lui servent de mémoire de travail pour ses déductions',
          'Parce qu’elle ralentit la connexion internet pour laisser le temps aux serveurs de chercher sur Google',
          'Parce qu’elle augmente la taille de police du texte généré',
          'Parce qu’elle traduit temporairement le problème en allemand'
        ],
        correctAnswer: 0,
        explanation: 'En écrivant ses étapes intermédiaires, le modèle crée son propre contexte sur lequel il s’appuie pour déduire logiquement la solution finale.'
      },
      {
        id: 'q5-2',
        question: 'Quelle petite phrase a prouvé scientifiquement son efficacité pour déclencher un raisonnement logique chez un LLM ?',
        options: [
          '« Dépêche-toi de répondre »',
          '« Pense étape par étape avant de conclure »',
          '« Ne fais pas de fautes de français »',
          '« Ouvre grand tes yeux »'
        ],
        correctAnswer: 1,
        explanation: '« Pense étape par étape » (ou "Let’s think step by step") est la formulation reconnue pour déclencher l’auto-décomposition d’un problème.'
      },
      {
        id: 'q5-3',
        question: 'Si vous demandez directement la réponse à une énigme complexe en écrivant « Donne-moi uniquement le nom du coupable en 1 mot », quel est le risque majeur ?',
        options: [
          'Le modèle va deviner au hasard un nom sans avoir déroulé la logique des indices et commettre une erreur',
          'L’ordinateur va s’éteindre subitement',
          'La réponse sera affichée à l’envers',
          'Le modèle va répéter le mot 50 fois'
        ],
        correctAnswer: 0,
        explanation: 'En interdisant au modèle de dérouler ses indices, vous l’obligez à deviner le mot suivant sans pouvoir calculer la déduction préalable.'
      },
      {
        id: 'q5-4',
        question: 'Dans quel type de situation le Chain-of-Thought est-il particulièrement indispensable ?',
        options: [
          'Pour traduire un seul mot banal comme « Bonjour » en anglais',
          'Pour les calculs arithmétiques, les déductions juridiques et les analyses multicritères',
          'Pour générer un poème d’amour',
          'Pour demander l’heure qu’il est'
        ],
        correctAnswer: 1,
        explanation: 'Toutes les tâches nécessitant de la logique conditionnelle, des calculs financiers ou l’analyse rigoureuse de preuves bénéficient massivement du CoT.'
      }
    ],
    summaryPoints: [
      'Un LLM ne peut pas "penser dans sa tête" : il ne pense qu’en générant du texte visible sur son écran.',
      'La consigne « Pense étape par étape » démultiplie la justesse des calculs et raisonnements logiques.',
      'Structurez vous-même les étapes d’analyse (Constat -> Hypothèse -> Calcul -> Verdict).',
      'Ne demandez pas la réponse finale brute dès la première phrase d’une question difficile.'
    ]
  },
  {
    id: 6,
    slug: 'iterer-ameliorer-prompts-dialogue',
    title: '6. L’art d’itérer et affiner ses prompts',
    subtitle: 'Considérer le prompting comme une conversation sculpturale, pas un coup de dés',
    estimatedMinutes: 25,
    iconName: 'RefreshCw',
    objectives: [
      'Abandonner le mythe du « prompt parfait du premier coup »',
      'Maîtriser la méthode d’affinage en 4 temps : Émettre -> Diagnostiquer -> Ajuster -> Verrouiller',
      'Savoir guider l’IA en cours de conversation sans tout recommencer à zéro',
      'Construire une bibliothèque personnelle de prompts réutilisables (templates)'
    ],
    analogy: {
      title: 'L’analogie du sculpteur sur bloc d’argile',
      story: 'Aucun sculpteur ne donne un seul coup de ciseau magique pour transformer un bloc de marbre brut en chef-d’œuvre de la Renaissance.',
      lesson: 'Il commence par dégrossir la silhouette générale (premier prompt), puis il affine les proportions du torse (deuxième retour), cisèle les détails du visage (troisième ajustement) et polit la surface (contraintes finales). Le bon prompt engineer travaille par touches successives avec bienveillance et précision.'
    },
    theorySections: [
      {
        title: 'Le piège de la frustration immédiate',
        content: `Beaucoup de débutants écrivent une phrase, reçoivent une réponse qui ne leur convient pas à 100%, et concluent : *« L'IA est stupide, ça ne marche pas »*.

Un expert, lui, examine la réponse comme un diagnostic :
- *Qu'est-ce qui est bon dans cette réponse ?* (À conserver)
- *Qu'est-ce qui manque ?* (Information à injecter)
- *Qu'est-ce qui est en trop ?* (Contrainte négative à ajouter)`
      },
      {
        title: 'Les 4 types de relances chirurgicales',
        content: `Quand la première réponse est imparfaite, ne recommencez pas de zéro. Utilisez des relances ciblées :

1. **Ajustement de ton** : *« Garde le même fond, mais adopte un ton plus dynamique et direct. Supprime les métaphores poétiques. »*
2. **Expansion ciblée** : *« Développe particulièrement le point 3 sur la rentabilité en fournissant une estimation chiffrée. »*
3. **Élagage strict** : *« Condense l'ensemble de ta réponse en exactement 3 puces de 2 lignes maximum. »*
4. **Changement d'angle** : *« Reprends cette même argumentation, mais place-toi cette fois du point de vue d'un client très sceptique. »*`
      },
      {
        title: 'Transformer une conversation réussie en template pérenne',
        content: `Une fois que vous avez obtenu le résultat parfait au bout de 3 échanges, **rétro-ingéniez votre prompt initial** !
Réunissez toutes les précisions que vous avez dû apporter au fil de la discussion dans un unique méta-prompt structuré avec des variables entre crochets \`[insérer ici]\`. Vous aurez ainsi créé votre outil de travail définitif.`
      }
    ],
    comparisons: [
      {
        id: 'comp-6',
        title: 'Recommencer à zéro avec énervement vs Relance itérative constructive',
        contextDesc: 'L’IA a rédigé une introduction d’article trop longue et académique.',
        badPrompt: {
          text: 'Non c’est nul, c’est beaucoup trop long et chiant, refais un truc mieux.',
          critique: 'Feedback destructeur et émotionnel. L’IA ne sait pas ce qui était jugé « nul », ni ce qui définirait un contenu « mieux ».',
          simulatedOutput: 'Voici une autre version : Le sujet d’aujourd’hui est très intéressant car il touche beaucoup de monde...'
        },
        goodPrompt: {
          text: `La structure générale est bonne, mais le style est trop académique.
Applique ces 3 corrections précises :
1. Réduis la longueur de moitié (passe de 200 à 90 mots).
2. Remplace la première phrase par une question percutante qui interpelle directement le quotidien d'un chef d'entreprise débordé.
3. Supprime tout le vocabulaire passif pour utiliser des verbes d'action énergiques.`,
          breakdown: [
            { part: 'La structure générale est bonne...', label: 'Validation positive de l\'acquis', color: 'emerald' },
            { part: '1. Réduis la longueur de moitié (90 mots)...', label: 'Correction quantitative', color: 'sky' },
            { part: '2. Remplace la première phrase par une question...', label: 'Directrice stylistique concrète', color: 'indigo' },
            { part: '3. Supprime le passif au profit des verbes d\'action', label: 'Règle grammaticale ciblée', color: 'amber' }
          ],
          explanation: 'L’IA sait exactement quelle partie conserver et quels leviers mécaniques activer pour métamorphoser le texte sans tâtonner.',
          simulatedOutput: `Avez-vous déjà terminé votre journée avec le sentiment d'avoir couru 10 heures sans faire avancer vos projets stratégiques ? Ce piège guette chaque dirigeant. Découvrez comment automatiser vos tâches chronophages pour libérer 5 heures utiles dès cette semaine et reprendre les commandes de votre croissance.`
        }
      }
    ],
    exercise: {
      id: 'exo-6',
      title: 'Rédiger une consigne d’ajustement itératif',
      scenario: 'L’IA vous a rédigé un plan de formation commerciale de 10 modules très théoriques. Vous souhaitez qu’elle le réoriente vers du 100% pratique avec des simulations d’appels à froid, en 5 modules seulement.',
      objective: 'Formulez un message de relance qui indique ce qu’il faut garder, ce qu’il faut supprimer, et le nouveau format cible.',
      starterPrompt: 'Refais le plan mais plus court et avec de la pratique.',
      criteria: [
        {
          id: 'critique_constructive',
          label: 'Diagnostic clair (trop théorique, passage de 10 à 5 modules)',
          keywords: ['module', '5', 'cinq', 'réduis', 'garde', 'théorique'],
          feedback: 'Bien ciblé ! La réduction du volume est explicite.'
        },
        {
          id: 'practical_focus',
          label: 'Nouvelle orientation concrète (simulations d’appels à froid, ateliers)',
          keywords: ['simulation', 'appel', 'pratique', 'froid', 'atelier', 'mises en situation', 'jeu de rôle'],
          feedback: 'Excellent, l’accent pratique est clairement exigé.'
        },
        {
          id: 'structure_format',
          label: 'Format attendu par module (titre, cas pratique, livrable)',
          keywords: ['format', 'titre', 'cas', 'livrable', 'objectifs', 'exercice'],
          feedback: 'Superbe, chaque module aura un livrable mesurable.'
        }
      ],
      hint: 'Dites par exemple : « Très bien pour les thèmes abordés, mais c’est trop théorique. Resserre le programme en 5 modules au lieu de 10. Pour chaque module, prévois 20% de théorie et 80% de simulations d’appels à froid. »',
      solutionModel: `Merci pour cette proposition. La thématique est pertinente, mais le contenu est beaucoup trop magistral.

Je souhaite affiner ce programme avec les ajustements suivants :
1. Réduis la formation de 10 à 5 modules intensifs d'une demi-journée.
2. Élimine tous les cours théoriques magistraux pour adopter une méthode 80% pratique : chaque module doit être centré sur un atelier de simulation d'appels à froid en binôme.
3. Pour chacun des 5 modules, présente :
   - Le titre orienté résultat
   - Le scénario de simulation commerciale concret
   - Le livrable ou compétence validée à l'issue de l'exercice.`,
      explanationSolution: 'Ce retour est constructif, respectueux du travail produit mais intransigeant sur les nouvelles contraintes opérationnelles.'
    },
    quiz: [
      {
        id: 'q6-1',
        question: 'Quelle est la réaction typique d’un utilisateur novice face à une réponse d’IA imparfaite ?',
        options: [
          'Analyser précisément ce qui manque et guider le modèle avec une relance chirurgicale',
          'Penser que l’IA est incompétente, s’énerver ou abandonner',
          'Enregistrer le prompt pour le tester sur un autre modèle',
          'Appeler le support téléphonique d’OpenAI'
        ],
        correctAnswer: 1,
        explanation: 'Le réflexe débutant est de juger l’outil en bloc, alors que le résultat dépend presque toujours d’un ajustement de consigne.'
      },
      {
        id: 'q6-2',
        question: 'Quelle est la meilleure façon de corriger une réponse qui contient trop de bavardages inutiles ?',
        options: [
          'Lui écrire en majuscules : « ARRÊTE DE PARLER ! »',
          'Lui donner une contrainte de longueur stricte et un format épuré (ex: « Résume en 3 puces de 1 ligne, sans introduction ni conclusion »)',
          'Fermer l’onglet et recommencer le lendemain',
          'Lui demander de s’excuser d’abord'
        ],
        correctAnswer: 1,
        explanation: 'Les contraintes chiffrées de concision et l’interdiction explicite des formules de politesse coupent court à tout bavardage.'
      },
      {
        id: 'q6-3',
        question: 'Qu’appelle-t-on un « template » de prompt réutilisable ?',
        options: [
          'Un fichier vidéo explicatif',
          'Un prompt éprouvé et structuré dans lequel on laisse des variables dynamiques entre crochets pour le réutiliser sur de nouvelles données',
          'Un plug-in payant qu’on installe dans Chrome',
          'Un mot de passe pour accéder à ChatGPT'
        ],
        correctAnswer: 1,
        explanation: 'Un template de prompt est une formule prête à l’emploi dotée de balises d’insertion (ex: [Texte à résumer], [Destinataire]), utilisable à l’infini.'
      },
      {
        id: 'q6-4',
        question: 'Lors d’une conversation avec un LLM, est-il nécessaire de répéter tout le contexte initial à chaque nouveau message ?',
        options: [
          'Oui, car le modèle oublie tout entre deux messages d’une même conversation',
          'Non, tant que vous restez dans la même session de discussion, le modèle conserve l’historique récent dans sa fenêtre de contexte',
          'Oui, mais uniquement le dimanche',
          'Non, le modèle se souvient de vous pour toute votre vie entière'
        ],
        correctAnswer: 1,
        explanation: 'Dans un fil de discussion continu, le modèle a accès aux échanges précédents (dans la limite de sa fenêtre de contexte active).'
      }
    ],
    summaryPoints: [
      'Le premier prompt n’est que la première touche : l’excellence naît de l’itération.',
      'Diagnostiquez froidement : ce qu’il faut garder, ce qu’il faut couper, ce qu’il faut enrichir.',
      'Adressez des consignes de relance précises et chiffrées plutôt que des jugements vagues.',
      'Capitalisez vos réussites sous forme de templates réutilisables avec variables.'
    ]
  },
  {
    id: 7,
    slug: 'erreurs-courantes-hallucinations-limites-ethique',
    title: '7. Hallucinations, limites & éthique',
    subtitle: 'Comprendre les failles de l’IA pour ne jamais se faire piéger',
    estimatedMinutes: 30,
    iconName: 'ShieldAlert',
    objectives: [
      'Comprendre le mécanisme intrinsèque des « hallucinations » (affabulations crédibles)',
      'Apprendre les techniques de prompt pour réduire drastiquement le risque d’hallucination',
      'Identifier les limites absolues des LLM (données récentes, calcul mental poussé, confidentialité)',
      'Adopter une posture éthique et responsable dans l’usage des outils génératifs'
    ],
    analogy: {
      title: 'L’analogie de l’étudiant au grand oral qui brode avec aplomb',
      story: 'Imaginez un candidat à un examen oral prestigieux. Le jury lui pose une question très pointue sur une loi obscure. Au lieu d’avouer « Je ne sais pas », l’étudiant regarde le jury droit dans les yeux et invente avec un aplomb souverain : « Comme le stipulait l’article 42 de l’ordonnance de 1984... ». Tout sonne parfait, le ton est irréprochable, mais la loi n’a jamais existé.',
      lesson: 'C’est exactement une hallucination d’IA. Le modèle privilégie toujours la vraisemblance syntaxique et la fluidité de la phrase par rapport à la vérité factuelle. Si vous ne l’encadrez pas, il brodera pour vous faire plaisir.'
    },
    theorySections: [
      {
        title: 'Pourquoi l’IA hallucine-t-elle ?',
        content: `Une hallucination n'est pas un bogue informatique : c'est le fonctionnement normal d'un modèle statistique de prédiction de texte !
Le modèle ne possède pas de connexion magique avec la Vérité. Il associe des mots plausibles. S'il n'est pas sûr d'une date ou d'une source, il inventera celle qui a la consonance statistique la plus réaliste.`
      },
      {
        title: 'Les 3 garde-fous anti-hallucination en prompt engineering',
        content: `Pour immuniser vos prompts contre les inventions mensongères :

1. **La porte de sortie explicite** :
   *« Si tu ne trouves pas l'information avec certitude dans le texte fourni, réponds textuellement "Information non disponible" et n'invente rien. »*
2. **L'ancrage sur source fermée (principe RAG)** :
   *« Réponds à la question UNIQUEMENT et STRICTEMENT à partir du document fourni entre balises <source>. N'utilise aucune connaissance extérieure. »*
3. **L'exigence de citation** :
   *« Pour chaque affirmation formulée, cite textuellement entre guillemets l'extrait du document d'où provient l'information. »*`,
        keyTakeaway: 'Donner explicitement le droit à l’IA de dire « Je ne sais pas » est le geste le plus efficace pour éradiquer les hallucinations.'
      },
      {
        title: 'Confidentialité, biais et éthique',
        content: `- **Données sensibles** : Ne collez jamais de secrets d'entreprise, mots de passe, numéros de sécurité sociale ou données médicales dans un modèle public.
- **Biais statistiques** : Les modèles reflètent les stéréotypes historiques présents dans les textes d'entraînement d'Internet. Restez vigilant.
- **Responsabilité humaine** : Vous êtes le seul et unique responsable du texte final publié ou envoyé. L'IA propose, l'humain dispose.`
      }
    ],
    comparisons: [
      {
        id: 'comp-7',
        title: 'Question ouverte incitant au mensonge vs Cadrage strict anti-hallucination',
        contextDesc: 'Vous recherchez les conditions de remboursement sur un contrat de service.',
        badPrompt: {
          text: 'Quelles sont les clauses de résiliation sans frais dans les contrats de location d’imprimantes professionnelles en France ? Donne-moi les articles de loi précis.',
          critique: 'L’IA n’a pas accès au contrat réel de l’utilisateur et va très probablement inventer des numéros d’articles du Code de commerce pour paraître savante.',
          simulatedOutput: 'Selon l’article L. 312-45 du Code de commerce et l’arrêt Durand de la Cour de cassation du 14 mars 2019, vous pouvez résilier sans frais au bout de 12 mois si le matériel est défectueux.'
        },
        goodPrompt: {
          text: `Tu es un assistant juridique d'une rigueur absolue.
Analyse les conditions générales de vente fournies ci-dessous entre les balises <contrat>.

<contrat>
[Insérer le texte exact des CGV]
</contrat>

Consignes de sécurité :
1. Recherche s'il existe une clause permettant la résiliation sans indemnité.
2. Si oui, cite textuellement la phrase exacte du contrat entre guillemets et indique le numéro de la clause.
3. Si le texte fourni ne mentionne pas ce cas de figure, écris obligatoirement : "Le document fourni ne contient aucune information sur la résiliation sans frais." N'invente aucun texte de loi extérieur.`,
          breakdown: [
            { part: 'Tu es un assistant juridique d\'une rigueur absolue...', label: 'Rôle d\'intégrité factuelle', color: 'indigo' },
            { part: '<contrat>...</contrat>', label: 'Ancrage sur source fermée', color: 'amber' },
            { part: 'Cite textuellement la phrase exacte entre guillemets...', label: 'Preuve par citation', color: 'emerald' },
            { part: 'Si le texte ne mentionne pas... écris obligatoirement "..."', label: 'Porte de sortie anti-hallucination', color: 'rose' }
          ],
          explanation: 'L’IA a l’interdiction formelle d’extrapoler et dispose d’une phrase toute prête à recopier si la donnée est absente.',
          simulatedOutput: `Analyse contractuelle :

Après examen minutieux du document fourni, voici la clause applicable :
Clause 8.3 - Résiliation anticipée : « Le locataire peut résilier le présent bail sans indemnité uniquement en cas de cessation totale d'activité constatée par un jugement de liquidation judiciaire ou en cas de défaut persistant du matériel non résolu sous 30 jours ouvrés. »

Aucune autre condition de résiliation sans frais n'est stipulée dans le document fourni.`
        }
      }
    ],
    exercise: {
      id: 'exo-7',
      title: 'Sécuriser un prompt contre l’hallucination',
      scenario: 'Vous voulez faire résumer une note interne sur la politique de télétravail de votre entreprise sans que l’IA n’invente des jours de congés imaginaires.',
      objective: 'Ajoutez une porte de sortie obligatoire, l’interdiction d’utiliser des connaissances externes, et l’obligation de citer la note.',
      starterPrompt: 'Résume la politique de télétravail de l’entreprise d’après ce texte.',
      criteria: [
        {
          id: 'source_only',
          label: 'Interdiction de sources extérieures (ancrage strict)',
          keywords: ['uniquement', 'strictement', 'seul', 'seulement', 'exclusivement', 'aucune source externe'],
          feedback: 'Bravo ! Le modèle est verrouillé sur votre document.'
        },
        {
          id: 'exit_clause',
          label: 'Porte de sortie explicite (« Si l’info n’est pas présente, dis que... »)',
          keywords: ['si', 'non présent', 'absent', 'pas mentionné', 'n\'invente pas', 'information non disponible'],
          feedback: 'Excellent ! C’est l’arme numéro 1 anti-hallucination.'
        },
        {
          id: 'quote_proof',
          label: 'Demande de citation directe ou justification',
          keywords: ['cite', 'citation', 'guillemets', 'extrait', 'preuve'],
          feedback: 'Superbe, la citation force la vérification mot à mot.'
        }
      ],
      hint: 'Intégrez : « Utilise UNIQUEMENT le texte ci-joint. Si une information n’est pas écrite noir sur blanc, indique "Non précisé dans le document" au lieu de supposer. Cite les extraits entre guillemets. »',
      solutionModel: `Analyse le règlement intérieur ci-dessous délimité par <note_rh>.

<note_rh>
[Texte de la note RH]
</note_rh>

Règles de fiabilité absolue :
1. Réponds UNIQUEMENT sur la base des informations expressément écrites dans cette note. N'extrapole rien d'après le droit du travail général.
2. Pour chaque règle mentionnée (nombre de jours, éligibilité, indemnités), cite la phrase exacte de la note entre guillemets.
3. Si un aspect n'est pas couvert dans le texte (par exemple le matériel fourni ou les horaires), inscris obligatoirement la mention : "[Information non précisée dans la note RH]".`,
      explanationSolution: 'Le prompt supprime tout espace de liberté créative : l’IA ne peut que citer ou avouer qu’elle n’a pas l’information.'
    },
    quiz: [
      {
        id: 'q7-1',
        question: 'Qu’est-ce qu’une « hallucination » chez un grand modèle de langage ?',
        options: [
          'Un bogue visuel qui fait clignoter l’écran de l’ordinateur',
          'Une affirmation factuellement fausse ou totalement inventée, énoncée avec une assurance trompeuse',
          'Une réponse rédigée en vers poétiques',
          'Un message d’alerte indiquant que les serveurs sont saturés'
        ],
        correctAnswer: 1,
        explanation: 'L’hallucination est la propension du modèle à combler les trous de ses connaissances par des affirmations fictives mais à l’apparence très crédible.'
      },
      {
        id: 'q7-2',
        question: 'Quelle consigne permet de réduire le plus efficacement les hallucinations lors de l’analyse d’un document ?',
        options: [
          '« Fais très attention s’il te plaît »',
          '« Réponds uniquement d’après le document fourni. Si l’information n’y figure pas, réponds : "Donnée non disponible" et n’invente rien. »',
          '« Écris en vert pour montrer que c’est vrai »',
          '« Vérifie sur Wikipédia avant de me répondre »'
        ],
        correctAnswer: 1,
        explanation: 'Autoriser explicitement le modèle à déclarer son ignorance empêche la génération forcée de contenus inventés.'
      },
      {
        id: 'q7-3',
        question: 'Quelle est la règle d’or en matière de confidentialité lorsque vous utilisez des outils d’IA en ligne publics ?',
        options: [
          'On peut tout copier-coller sans danger, l’IA est tenue au secret médical par la loi',
          'Ne jamais y soumettre de données personnelles sensibles, mots de passe, secrets industriels ou informations médicales',
          'Il suffit d’écrire « Ceci est confidentiel » dans le prompt pour que ce soit sécurisé',
          'Seuls les chiffres sont confidentiels, pas les textes'
        ],
        correctAnswer: 1,
        explanation: 'Les données injectées dans les services grand public peuvent être enregistrées ou utilisées pour l’entraînement futur des modèles. La vigilance est impérative.'
      },
      {
        id: 'q7-4',
        question: 'Qui est légalement et professionnellement responsable du contenu généré par l’IA que vous décidez de diffuser ou publier ?',
        options: [
          'La société qui a créé le modèle de langage',
          'L’ordinateur lui-même',
          'Vous-même, l’humain qui a validé et publié la réponse',
          'Personne, c’est considéré comme un cas de force majeure'
        ],
        correctAnswer: 2,
        explanation: 'L’utilisateur humain conserve toujours la pleine et entière responsabilité des écrits qu’il utilise et diffuse.'
      }
    ],
    summaryPoints: [
      'L’IA cherche la cohérence statistique des mots, pas la vérité historique ou scientifique.',
      'Fournissez toujours une « porte de sortie » : autorisez le modèle à dire « Je ne sais pas ».',
      'Pour vos analyses critiques, forcez l’ancrage sur source fermée et exigez des citations textuelles.',
      'Ne confiez jamais d’informations confidentielles ou de données de santé à un modèle public.'
    ]
  },
  {
    id: 8,
    slug: 'projet-final-creer-son-propre-prompt',
    title: '8. Projet Final : Le Studio de Prompting',
    subtitle: 'Créez, testez, évaluez et validez votre prompt professionnel de A à Z',
    estimatedMinutes: 35,
    iconName: 'GraduationCap',
    objectives: [
      'Mobiliser l’ensemble des acquis du cours au sein d’un projet concret et personnel',
      'Construire un prompt complet selon l’architecture en 6 blocs (RTCFC + Few-shot)',
      'Passer le test de la Grille d’évaluation qualitative (Rubrique à 100 points)',
      'Simuler l’exécution du prompt et exporter son chef-d’œuvre pour ses besoins réels'
    ],
    analogy: {
      title: 'L’analogie de la soutenance de chef cuisinier',
      story: 'Pendant 7 modules, vous avez appris à manier les couteaux, à doser les épices, à maîtriser les cuissons et à dresser des assiettes impeccables.',
      lesson: 'Dans ce module final, vous entrez dans la grande cuisine : vous choisissez votre propre recette, sélectionnez vos ingrédients selon les règles de l’art, préparez votre plat signature et le soumettez au jury. C’est le moment de prouver votre nouvelle expertise !'
    },
    theorySections: [
      {
        title: 'Votre mission pour le Projet Final',
        content: `Vous allez concevoir un **prompt professionnel haute fidélité** répondant à un besoin réel de votre quotidien (professionnel, associatif, étudiant ou créatif).

Pour valider votre formation et accéder à l'**Écran final de félicitations et vos résultats**, vous allez utiliser le **Studio de Création Interactif** ci-dessous. Vous pouvez choisir un cas d'étude guidé ou inventer votre propre cas d'usage !`
      },
      {
        title: 'La grille d’évaluation des 6 piliers (100 points)',
        content: `Votre prompt sera analysé en direct selon 6 critères d'excellence :
1. **Rôle & Posture (15 pts)** : Spécialisation précise, ton et niveau d'expertise.
2. **Contexte & Situation (20 pts)** : Données de situation, audience cible, historique.
3. **Tâche & Verbe d'action (20 pts)** : Clarté de la mission sans ambiguïté.
4. **Format & Structure (15 pts)** : Tableaux, listes, gabarits, champs délimités.
5. **Contraintes positives & négatives (15 pts)** : Garde-fous, limites de longueur, ce qu'il faut proscrire.
6. **Exemples ou Méthode pas à pas (15 pts)** : Few-shot ou décomposition Chain-of-Thought.`
      }
    ],
    comparisons: [
      {
        id: 'comp-8',
        title: 'Exemple de chef-d’œuvre de prompt complet',
        contextDesc: 'Un prompt complet de tuteur pédagogique personnalisé pour apprendre une langue étrangère.',
        badPrompt: {
          text: 'Sois mon prof d’espagnol et fais-moi faire des exercices.',
          critique: 'Aucun niveau précisé, aucun format d’exercice, aucune règle de correction, pas de progression.',
          simulatedOutput: '¡Hola! Très bien. Traduis cette phrase : « Le chat noir dort sur la table ».'
        },
        goodPrompt: {
          text: `[RÔLE]
Tu es un professeur d'espagnol certifié, patient, encourageant et spécialiste de la méthode communicative pour débutants francophones (niveau A1).

[CONTEXTE]
Je suis un adulte qui prépare un voyage de deux semaines en Andalousie dans 3 mois. Mon objectif est d'être autonome au restaurant, dans les gares et à l'hôtel.

[TÂCHE]
Anime une session interactive d'immersion pas à pas sur le thème "Commander des tapas dans un bar à Séville".

[MÉTHODE / FORMAT]
1. Présente d'abord le décor en 2 phrases évocatrices en espagnol avec la traduction française en dessous.
2. Pose-moi une seule question ou amorce de dialogue à la fois.
3. Attends impérativement ma réponse avant de continuer.

[CONSIGNES DE CORRECTION & CONTRAINTES]
- À chacune de mes réponses : commence toujours par me féliciter ou valider l'effort, puis corrige mes éventuelles erreurs de grammaire/vocabulaire en expliquant la règle en français en 1 phrase simple.
- Propose ensuite la réplique suivante pour faire avancer le jeu de rôle.
- N'écris jamais les réponses à ma place.`,
          breakdown: [
            { part: '[RÔLE] Tu es un professeur d\'espagnol...', label: 'Rôle & Niveau pédagogique', color: 'indigo' },
            { part: '[CONTEXTE] Je prépare un voyage en Andalousie...', label: 'Contexte et besoins réels', color: 'amber' },
            { part: '[TÂCHE] Anime une session interactive...', label: 'Tâche précise', color: 'emerald' },
            { part: '[MÉTHODE / FORMAT] 1. Décor... 2. Une seule question à la fois... 3. Attends ma réponse', label: 'Règles d\'interaction tour par tour', color: 'sky' },
            { part: '[CONSIGNES DE CORRECTION] Félicite, corrige en français, avance...', label: 'Contraintes et boucle de feedback', color: 'rose' }
          ],
          explanation: 'Le prompt transforme l’IA en un simulateur conversationnel complet, discipliné et parfaitement adapté au rythme d’un apprenant.',
          simulatedOutput: `¡Hola! Qué gran viaje te espera. Vamos a sumergirnos directamente en Sevilla.

(Bonjour ! Quel magnifique voyage t'attend. Plongeons directement dans l'ambiance de Séville.)

Imagínate en el animado barrio de Santa Cruz. Entras en un pequeño bar de tapas tradicional donde huele a jamón serrano y aceitunas. El camarero se acerca con una sonrisa y te dice:
« ¡Buenas tardes! ¿Una mesa para cuántas personas, por favor? »

À toi de répondre en espagnol pour lui indiquer le nombre de personnes (par exemple pour 2 personnes). J'attends ta phrase !`
        }
      }
    ],
    exercise: {
      id: 'exo-8',
      title: 'Auto-audit de votre prompt',
      scenario: 'Avant d’utiliser le Studio ci-dessous, entraînez-vous à repérer la pièce manquante dans ce prompt professionnel.',
      objective: 'Identifiez quel pilier parmi Rôle, Contexte, Tâche, Format ou Contraintes fait défaut dans la consigne : "Tu es un copywriter pro. Rédige une page de vente percutante pour notre logiciel SaaS de comptabilité pour freelances. Fais un tableau des prix."',
      starterPrompt: 'Analyse le prompt ci-dessus et indique le pilier majeur manquant.',
      criteria: [
        {
          id: 'missing_pillar',
          label: 'Identification des Contraintes et du Contexte détaillé manquant',
          keywords: ['contrainte', 'contraintes', 'longueur', 'prix', 'bénéfices', 'ton', 'négatif', 'précision'],
          feedback: 'Excellente analyse ! Il manque les contraintes de fond, les arguments uniques de vente (USP) et le tarif exact.'
        },
        {
          id: 'recommendation',
          label: 'Recommandation concrète d’amélioration',
          keywords: ['ajouter', 'préciser', 'spécifier', 'limite', 'arguments', 'fonctionnalités'],
          feedback: 'Parfait, vous raisonnez désormais comme un auditeur de prompts !'
        }
      ],
      hint: 'Regardez bien : le prix exact n’est même pas donné pour le tableau, et il n’y a aucune contrainte de style ou de longueur !',
      solutionModel: `Ce prompt contient bien un Rôle ("copywriter pro"), un embryon de Contexte ("logiciel SaaS pour freelances"), une Tâche ("rédige une page de vente") et un bout de Format ("tableau des prix").
Cependant, il lui manque CRUELLEMENT :
1. Les Contraintes strictes : quelle longueur ? quel ton ? y a-t-il des mentions légales obligatoires ?
2. Le Contexte chiffré : combien coûte réellement le logiciel ? quelles sont ses fonctionnalités vedettes ? Sans cela, l'IA va inventer de faux prix et de fausses fonctionnalités !`,
      explanationSolution: 'Sans données précises sur les tarifs et les fonctionnalités uniques, le copywriter IA produira une page générique et fictive.'
    },
    quiz: [
      {
        id: 'q8-1',
        question: 'Quelle est la première étape recommandée avant d’écrire la moindre ligne d’un prompt complexe ?',
        options: [
          'Définir clairement son objectif final et le format exact du livrable souhaité',
          'Acheter un nouvel ordinateur avec plus de puissance graphique',
          'Taper des mots au hasard pour voir ce qui sort',
          'Envoyer un e-mail à ses collègues pour leur demander leur avis'
        ],
        correctAnswer: 0,
        explanation: 'Savoir exactement quel document ou livrable final on veut obtenir sur son bureau est le préalable indispensable.'
      },
      {
        id: 'q8-2',
        question: 'Pourquoi est-il avantageux d’écrire des balises comme [RÔLE], [CONTEXTE], [CONSIGNES] dans ses prompts ?',
        options: [
          'Cela aide à la fois l’humain à ne rien oublier et l’IA à structurer son attention sur chaque bloc logique',
          'Cela rend le texte invisible aux robots de censure',
          'C’est une obligation légale de la directive européenne IA',
          'Cela double automatiquement la vitesse d’exécution'
        ],
        correctAnswer: 0,
        explanation: 'La segmentation par balises ou préfixes permet une relecture immédiate, facilite l’édition modulaire et guide l’attention du modèle.'
      },
      {
        id: 'q8-3',
        question: 'Que faire une fois qu’un prompt a produit un résultat absolument remarquable ?',
        options: [
          'Fermer la fenêtre et l’oublier',
          'L’enregistrer dans sa bibliothèque de prompts personnels en le transformant en template réutilisable avec des variables',
          'Ne plus jamais utiliser l’IA par peur de gâcher la chance',
          'Penser que le prompt marchera éternellement sans aucun changement'
        ],
        correctAnswer: 1,
        explanation: 'Capitaliser sur ses meilleurs prompts sous forme de modèles réutilisables est ce qui crée un gain de productivité pérenne.'
      },
      {
        id: 'q8-4',
        question: 'En prompt engineering, quelle formule résume le mieux le rapport entre l’effort investi dans le prompt et la qualité de la réponse ?',
        options: [
          '« Plus le prompt est court, plus l’IA réfléchit fort »',
          '« Garbage In, Garbage Out » : la précision du résultat est le miroir exact de la rigueur du brief',
          '« L’IA a toujours raison quoi qu’on écrive »',
          '« Le hasard fait bien les choses »'
        ],
        correctAnswer: 1,
        explanation: 'Le principe fondamental de l’informatique s’applique plus que jamais : une demande floue donne une réponse médiocre, une demande d’expert donne un travail d’expert.'
      }
    ],
    summaryPoints: [
      'Un prompt professionnel combine les 6 briques : Rôle, Contexte, Tâche, Format, Contraintes et Exemples.',
      'Structurez visuellement votre consigne avec des balises ou délimiteurs clairs.',
      'Testez, auditez votre prompt avec une grille de critères et affinez-le par étapes.',
      'Félicitations : vous disposez désormais de tous les réflexes méthodologiques d’un Prompt Engineer confirmé !'
    ]
  }
];

export const MODULES_DATA_FR = MODULES_DATA;

import { MODULES_DATA_EN } from './modulesDataEn';
import { MODULES_DATA_AR } from './modulesDataAr';
import { Language } from '../types';

export { MODULES_DATA_EN, MODULES_DATA_AR };

export function getModulesData(lang: Language = 'fr'): CourseModule[] {
  if (lang === 'en') return MODULES_DATA_EN;
  if (lang === 'ar') return MODULES_DATA_AR;
  return MODULES_DATA_FR;
}

