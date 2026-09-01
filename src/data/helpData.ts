import { HelpTopic } from '../types';

export const HELP_TOPICS: HelpTopic[] = [
  {
    id: 'navigating-table',
    title: {
      en: '1. Navigating the Interactive Periodic Table',
      te: '1. ఇంటరాక్టివ్ ఆవర్తన పట్టికను ఉపయోగించే విధానం'
    },
    description: {
      en: 'Tap on any element tile to open its complete Chemical Dossier, including electron shells, oxidation states, atomic mass, everyday applications, and home experiments.',
      te: 'ఏదైనా మూలకంపై క్లిక్ చేసి దాని పూర్తి రసాయన వివరాలు, ఎలక్ట్రాన్ కర్పరాలు, పరమాణు ద్రవ్యరాశి, నిత్యజీవితంలో ఉపయోగాలు మరియు ప్రయోగాలను చూడవచ్చు.'
    },
    tips: {
      en: [
        'Use the top search bar to instantly find elements by name, symbol, or atomic number in either English or Telugu.',
        'Filter elements instantly by State (Solid, Liquid, Gas) or chemical family (Alkali, Halogens, Noble gases, etc.).',
        'Check the color legend at the bottom of the table to recognize chemical families at a glance.'
      ],
      te: [
        'పైనున్న శోధన బార్ ద్వారా ఇంగ్లీష్ లేదా తెలుగులో పేరు, సంకేతం లేదా పరమాణు సంఖ్యతో వెతకవచ్చు.',
        'స్థితి (ఘన, ద్రవ, వాయు) లేదా వర్గం వారీగా మూలకాలను ఫిల్టర్ చేయవచ్చు.',
        'రంగుల సూచిక ద్వారా వివిధ మూలక కుటుంబాలను సులభంగా గుర్తించవచ్చు.'
      ]
    },
    iconName: 'LayoutGrid'
  },
  {
    id: 'trends-heatmap',
    title: {
      en: '2. Periodic Trends Visualizer & Heatmap',
      te: '2. ఆవర్తన ధర్మాల విశ్లేషణ మరియు హీట్‌మ్యాప్'
    },
    description: {
      en: 'Switch to the "Trends Visualizer" tab or toggle trend coloring to inspect atomic radius, electronegativity, ionization energy, density, and melting points directly on the grid.',
      te: '"ధర్మాల విశ్లేషణ" ట్యాబ్‌లో పరమాణు వ్యాసార్థం, విద్యుత్ రుణాత్మకత, అయనీకరణ శక్తి మరియు సాంద్రత వంటి ధర్మాలు పట్టికలో ఎలా మారుతాయో హీట్‌మ్యాప్ ద్వారా చూడవచ్చు.'
    },
    tips: {
      en: [
        'Lighter and warmer colors highlight elements with the highest values for the selected property.',
        'Read the trend principle card below the table to understand why properties change across periods and groups.',
        'Compare elements across periods 1–7 to observe nuclear charge shielding effects.'
      ],
      te: [
        'ఎంచుకున్న ధర్మంలో అత్యధిక విలువలు కలిగిన మూలకాలు ప్రకాశవంతమైన రంగుల్లో కనిపిస్తాయి.',
        'పీరియడ్లలో మరియు గ్రూపులలో ఈ ధర్మాలు ఎందుకు మారుతాయో తెలిపే శాస్త్రీయ సూత్రాలను చదవండి.'
      ]
    },
    iconName: 'TrendingUp'
  },
  {
    id: 'quiz-retention',
    title: {
      en: '3. Quiz Engine & Retention Practice',
      te: '3. క్విజ్ పరీక్ష & అభ్యాస విధానం'
    },
    description: {
      en: 'Test yourself on symbols, names, atomic numbers, and atomic weights with randomized question sets designed to boost long-term memory retention.',
      te: 'సంకేతాలు, పేర్లు, పరమాణు సంఖ్యలు మరియు భారాలపై యాదృచ్ఛిక ప్రశ్నలతో మీ జ్ఞాపకశక్తిని మెరుగుపరుచుకోండి.'
    },
    tips: {
      en: [
        'Select "Beginner", "Intermediate", or "Master" difficulty to tailor questions to your study stage.',
        'Use the Audio Question narration to test your auditory recall and phonetic familiarity.',
        'Review detailed explanations after each answer to understand why an answer is right or wrong.'
      ],
      te: [
        'మీ స్థాయికి తగినట్లుగా ప్రారంభ, మధ్యస్థ లేదా నిపుణుల స్థాయిని ఎంచుకోండి.',
        'ప్రశ్నను ఆడియో రూపంలో వినడానికి వాయిస్ బటన్ నొక్కండి.',
        'ప్రతి ప్రశ్నకు ఇచ్చే సమగ్ర వివరణలను చదివి జ్ఞానాన్ని పెంపొందించుకోండి.'
      ]
    },
    iconName: 'BrainCircuit'
  },
  {
    id: 'voice-audio',
    title: {
      en: '4. Voice Audio Pronunciation & Narration',
      te: '4. వాయిస్ ఆడియో ఉచ్ఛారణ & కథనం'
    },
    description: {
      en: 'Listen to element names and chemical properties in English and Telugu. The audio system supports custom educator voice files and browser speech synthesis fallback.',
      te: 'ఇంగ్లీష్ మరియు తెలుగులో మూలకాల సరైన ఉచ్ఛారణను వినండి. ఇది కస్టమ్ వాయిస్ ఫైళ్లు మరియు ఆఫ్‌లైన్ స్పీచ్ సింథసిస్ రెండింటికీ మద్దతు ఇస్తుంది.'
    },
    tips: {
      en: [
        'You can drop custom MP3/WAV voice files into `/public/audio/en/` and `/public/audio/te/` for educator voiceovers.',
        'If an audio file is missing, the system automatically falls back to clean, native speech synthesis seamlessly.'
      ],
      te: [
        'ఉపాధ్యాయులు తమ స్వంత గొంతుతో రికార్డ్ చేసిన ఆడియో ఫైళ్లను `/public/audio/` లో చేర్చవచ్చు.',
        'ఆడియో ఫైల్ లేనప్పుడు సిస్టమ్ స్వయంచాలకంగా స్పీచ్ సింథసిస్ ద్వారా స్పష్టంగా వినిపిస్తుంది.'
      ]
    },
    iconName: 'Volume2'
  },
  {
    id: 'modular-export',
    title: {
      en: '5. Modular JSON Architecture & Data Portability',
      te: '5. మాడ్యులర్ JSON నిర్మాణం & డేటా మార్పిడి'
    },
    description: {
      en: 'The entire application separates code (`/src`) from raw content (`/public/data/elements.json`, `/public/data/i18n.json`, `/public/data/help.json`).',
      te: 'ఈ అప్లికేషన్ కోడ్ (`/src`) మరియు డేటాను (`/public/data/`) పూర్తిగా వేరుగా ఉంచుతుంది, దీనివల్ల మీరు డేటాను సులభంగా ఇతర యాప్‌లలో వాడుకోవచ్చు.'
    },
    tips: {
      en: [
        'You can copy the `/public/data` and `/public/assets` folders directly into external learning systems or mobile apps.',
        'All visual material textures, colors, and experiments are configured within clean, structured JSON schemas.'
      ],
      te: [
        '`/public/data` మరియు `/public/assets` ఫోల్డర్లను మీరు నేరుగా ఇతర మొబైల్ లేదా వెబ్ యాప్‌లలోకి కాపీ చేసుకోవచ్చు.'
      ]
    },
    iconName: 'FileJson'
  }
];
