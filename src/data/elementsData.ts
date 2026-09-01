import { ChemicalElement } from '../types';

export const ELEMENTS_DATA: ChemicalElement[] = [
  {
    atomicNumber: 1,
    symbol: 'H',
    name: { en: 'Hydrogen', te: 'హైడ్రోజన్ (జలజని)' },
    latinName: 'Hydrogenium',
    atomicWeight: 1.008,
    category: 'reactive-nonmetal',
    group: 1,
    period: 1,
    block: 's',
    electronConfiguration: '1s¹',
    electronShells: [1],
    oxidationStates: '+1, -1',
    electronegativity: 2.20,
    atomicRadius: 53,
    ionizationEnergy: 1312,
    density: 0.08988,
    meltingPoint: 14.01,
    boilingPoint: 20.28,
    discoveryYear: 1766,
    discoveredBy: 'Henry Cavendish',
    phaseAtSTP: 'Gas',
    summary: {
      en: 'Hydrogen is the most abundant chemical substance in the universe, constituting roughly 75% of all baryonic mass.',
      te: 'హైడ్రోజన్ విశ్వంలో అత్యంత విస్తారంగా లభించే మూలకం. ఇది విశ్వంలోని మొత్తం ద్రవ్యరాశిలో దాదాపు 75% ఉంటుంది.'
    },
    applications: {
      en: ['Rocket propellant and clean fuel cells', 'Ammonia synthesis for fertilizers', 'Petroleum refining and hydrogenation'],
      te: ['రాకెట్ ఇంధనం మరియు స్వచ్ఛమైన ఇంధన ఘటాలు', 'ఎరువుల తయారీకి అమ్మోనియా సంశ్లేషణ', 'పెట్రోలియం శుద్ధి మరియు హైడ్రోజనేషన్']
    },
    homeExperiments: [
      {
        id: 'h-exp-1',
        title: {
          en: 'Baking Soda & Vinegar Gas Balloon',
          te: 'వంట సోడా & వెనిగర్ గ్యాస్ బెలూన్ ప్రయోగం'
        },
        safetyLevel: 'Safe / No Supervision',
        materials: {
          en: ['Small plastic bottle', 'Balloon', '2 tbsp Vinegar (dilute acetic acid)', '1 tbsp Baking Soda (sodium bicarbonate)'],
          te: ['చిన్న ప్లాస్టిక్ సీసా', 'బెలూన్', '2 చెంచాల వెనిగర్', '1 చెంచా వంట సోడా']
        },
        steps: {
          en: [
            'Pour vinegar into the bottle.',
            'Fill the deflated balloon with baking soda using a small funnel.',
            'Stretch the neck of the balloon over the mouth of the bottle without spilling the soda.',
            'Lift the balloon to dump the baking soda into the vinegar and watch the rapid gas reaction inflate the balloon!'
          ],
          te: [
            'సీసాలో వెనిగర్ పోయండి.',
            'బెలూన్ లోపల వంట సోడా వేయండి.',
            'బెలూన్ మూతిని సీసా మూతికి గట్టిగా తొడగండి.',
            'బెలూన్‌ను పైకి లేపి సోడా వెనిగర్‌లో పడేలా చేయండి, వెంటనే వాయువు విడుదలై బెలూన్ ఉబ్బుతుంది!'
          ]
        },
        scientificPrinciple: {
          en: 'Acid-base neutralization produces carbon dioxide and water, demonstrating chemical gas evolution reactions.',
          te: 'ఆమ్ల-క్షార తటస్థీకరణ ప్రతిచర్య ద్వారా వాయువు విడుదలవుతుందని ఇది నిరూపిస్తుంది.'
        }
      }
    ],
    funFact: {
      en: 'Hydrogen is the only element that can exist without neutrons in its most common isotope (Protium).',
      te: 'హైడ్రోజన్ యొక్క అత్యంత సాధారణ ఐసోటోప్ (ప్రోటీయం) లో న్యూట్రాన్లు ఉండని ఏకైక మూలకం.'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'gaseous',
      imageAssetPath: '/assets/elements/001_hydrogen.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/1.mp3',
      teAudioPath: '/audio/te/1.mp3',
      phoneticEn: 'HY-druh-jin',
      phoneticTe: 'హైడ్రోజన్'
    }
  },
  {
    atomicNumber: 2,
    symbol: 'He',
    name: { en: 'Helium', te: 'హీలియం' },
    latinName: 'Helium',
    atomicWeight: 4.0026,
    category: 'noble-gas',
    group: 18,
    period: 1,
    block: 's',
    electronConfiguration: '1s²',
    electronShells: [2],
    oxidationStates: '0',
    electronegativity: null,
    atomicRadius: 31,
    ionizationEnergy: 2372,
    density: 0.1786,
    meltingPoint: 0.95,
    boilingPoint: 4.22,
    discoveryYear: 1868,
    discoveredBy: 'Pierre Janssen, Norman Lockyer',
    phaseAtSTP: 'Gas',
    summary: {
      en: 'Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic noble gas and the second lightest element.',
      te: 'హీలియం రంగు, వాసన లేని జడ వాయువు. విశ్వంలో రెండవ అత్యంత తేలికైన మరియు విస్తారమైన మూలకం.'
    },
    applications: {
      en: ['Cryogenic cooling for MRI scanners', 'Party balloons and atmospheric blimps', 'Shielding gas for arc welding'],
      te: ['MRI స్కానర్లలో క్రయోజెనిక్ శీతలీకరణ', 'పార్టీ బెలూన్లు & గగనతల విహార బుడగలు', 'వెల్డింగ్ ప్రక్రియలో రక్షణ వాయువు']
    },
    funFact: {
      en: 'Helium was first discovered on the Sun via spectral solar observation before it was found on Earth!',
      te: 'హీలియంను భూమిపై కనుగొనక ముందే సూర్యుని కాంతి విశ్లేషణ ద్వారా సూర్యునిపై కనుగొన్నారు!'
    },
    visual: {
      primaryColor: '#c084fc',
      secondaryColor: '#9333ea',
      materialTexture: 'gaseous',
      imageAssetPath: '/assets/elements/002_helium.svg',
      glowColor: 'rgba(192, 132, 252, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/2.mp3',
      teAudioPath: '/audio/te/2.mp3',
      phoneticEn: 'HEE-lee-um',
      phoneticTe: 'హీలియం'
    }
  },
  {
    atomicNumber: 3,
    symbol: 'Li',
    name: { en: 'Lithium', te: 'లిథియం' },
    latinName: 'Lithium',
    atomicWeight: 6.94,
    category: 'alkali-metal',
    group: 1,
    period: 2,
    block: 's',
    electronConfiguration: '[He] 2s¹',
    electronShells: [2, 1],
    oxidationStates: '+1',
    electronegativity: 0.98,
    atomicRadius: 167,
    ionizationEnergy: 520,
    density: 0.534,
    meltingPoint: 453.65,
    boilingPoint: 1603,
    discoveryYear: 1817,
    discoveredBy: 'Johan August Arfwedson',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Lithium is a soft, silvery-white alkali metal. Under standard conditions, it is the least dense solid element.',
      te: 'లిథియం మృదువైన వెండి రంగు క్షార లోహం. ఇది భూమిపై అత్యంత తక్కువ సాంద్రత కలిగిన ఘన మూలకం.'
    },
    applications: {
      en: ['Rechargeable Lithium-ion batteries for phones and EVs', 'Heat-resistant glass and ceramics', 'Mood stabilizer medications in psychiatry'],
      te: ['స్మార్ట్‌ఫోన్లు మరియు ఎలక్ట్రిక్ వాహనాల రీఛార్జిబుల్ బ్యాటరీలు', 'వేడిని తట్టుకునే గాజు మరియు సిరామిక్స్', 'మానసిక చికిత్సలో ఔషధం']
    },
    funFact: {
      en: 'Lithium is so light that it floats on water and even on mineral oil.',
      te: 'లిథియం ఎంత తేలికైనదంటే అది నీటిపై మరియు నూనెపై కూడా తేలుతుంది.'
    },
    visual: {
      primaryColor: '#f87171',
      secondaryColor: '#dc2626',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/003_lithium.svg',
      glowColor: 'rgba(248, 113, 113, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/3.mp3',
      teAudioPath: '/audio/te/3.mp3',
      phoneticEn: 'LITH-ee-um',
      phoneticTe: 'లిథియం'
    }
  },
  {
    atomicNumber: 4,
    symbol: 'Be',
    name: { en: 'Beryllium', te: 'బెరీలియం' },
    latinName: 'Beryllium',
    atomicWeight: 9.0122,
    category: 'alkaline-earth-metal',
    group: 2,
    period: 2,
    block: 's',
    electronConfiguration: '[He] 2s²',
    electronShells: [2, 2],
    oxidationStates: '+2',
    electronegativity: 1.57,
    atomicRadius: 112,
    ionizationEnergy: 899,
    density: 1.85,
    meltingPoint: 1560,
    boilingPoint: 2742,
    discoveryYear: 1798,
    discoveredBy: 'Louis-Nicolas Vauquelin',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Beryllium is a relatively rare metal in the universe, forming gemstones like emerald and aquamarine.',
      te: 'బెరీలియం దృఢమైన క్షార మృత్తిక లోహం. ఇది పచ్చలు మరియు ఆక్వామెరైన్ వంటి రత్నాలలో సహజంగా ఉంటుంది.'
    },
    applications: {
      en: ['James Webb Space Telescope mirrors', 'Aerospace components and satellites', 'X-ray tube windows'],
      te: ['జేమ్స్ వెబ్ స్పేస్ టెలిస్కోప్ అద్దాలు', 'ఏరోస్పేస్ భాగాలు మరియు ఉపగ్రహాలు', 'ఎక్స్-రే ట్యూబ్ కిటికీలు']
    },
    funFact: {
      en: 'Beryllium compounds taste sweet, but they are extremely toxic and hazardous to handle!',
      te: 'బెరీలియం సమ్మేళనాలు తీపి రుచిని కలిగి ఉంటాయి, కానీ అవి చాలా విషపూరితమైనవి!'
    },
    visual: {
      primaryColor: '#fb923c',
      secondaryColor: '#ea580c',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/004_beryllium.svg',
      glowColor: 'rgba(251, 146, 60, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/4.mp3',
      teAudioPath: '/audio/te/4.mp3',
      phoneticEn: 'buh-RIL-ee-um',
      phoneticTe: 'బెరీలియం'
    }
  },
  {
    atomicNumber: 5,
    symbol: 'B',
    name: { en: 'Boron', te: 'బోరాన్' },
    latinName: 'Borium',
    atomicWeight: 10.81,
    category: 'metalloid',
    group: 13,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p¹',
    electronShells: [2, 3],
    oxidationStates: '+3',
    electronegativity: 2.04,
    atomicRadius: 87,
    ionizationEnergy: 801,
    density: 2.34,
    meltingPoint: 2349,
    boilingPoint: 4200,
    discoveryYear: 1808,
    discoveredBy: 'Joseph Louis Gay-Lussac, Louis Jacques Thénard',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Boron is a low-abundance metalloid used to synthesize borosilicate Pyrex glassware and bulletproof armor.',
      te: 'బోరాన్ ఒక అర్ధలోహం (మెటాలాయిడ్). ఇది వేడిని తట్టుకునే పైరెక్స్ గాజు మరియు బుల్లెట్‌ప్రూఫ్ జాకెట్లలో వాడతారు.'
    },
    applications: {
      en: ['Borosilicate heat-resistant kitchenware (Pyrex)', 'Semiconductor dopant', 'Control rods in nuclear reactors'],
      te: ['వేడి నిరోధక పైరెక్స్ గాజు వస్తువులు', 'సెమీకండక్టర్ డోపింగ్', 'అణు రియాక్టర్లలో నియంత్రణ రాడ్లు']
    },
    funFact: {
      en: 'Boron burns with a distinct, brilliant emerald green flame.',
      te: 'బోరాన్ మండించినప్పుడు అది అందమైన ముదురు ఆకుపచ్చ రంగు మంటను విడుదల చేస్తుంది.'
    },
    visual: {
      primaryColor: '#a3e635',
      secondaryColor: '#65a30d',
      materialTexture: 'crystalline',
      imageAssetPath: '/assets/elements/005_boron.svg',
      glowColor: 'rgba(163, 230, 53, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/5.mp3',
      teAudioPath: '/audio/te/5.mp3',
      phoneticEn: 'BOR-on',
      phoneticTe: 'బోరాన్'
    }
  },
  {
    atomicNumber: 6,
    symbol: 'C',
    name: { en: 'Carbon', te: 'కార్బన్ (బొగ్గుపు / అంగారకం)' },
    latinName: 'Carboneum',
    atomicWeight: 12.011,
    category: 'reactive-nonmetal',
    group: 14,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p²',
    electronShells: [2, 4],
    oxidationStates: '+4, +2, -4',
    electronegativity: 2.55,
    atomicRadius: 67,
    ionizationEnergy: 1087,
    density: 2.267,
    meltingPoint: 3823,
    boilingPoint: 4098,
    discoveryYear: 'Ancient',
    discoveredBy: 'Known to ancients',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Carbon is the chemical basis of all known organic life, forming millions of compounds due to its tetravalent bonding.',
      te: 'కార్బన్ సమస్త జీవుల మనుగడకు మూలాధారమైన అణువు. ఇది వజ్రం, గ్రాఫైట్ మరియు నానోట్యూబ్‌ల రూపంలో ఉంటుంది.'
    },
    applications: {
      en: ['Diamond jewelry and industrial cutting tools', 'Pencil graphite and lithium battery anodes', 'Carbon fiber composites for aircraft and supercars'],
      te: ['వజ్రాల ఆభరణాలు మరియు పారిశ్రామిక కోత యంత్రాలు', 'పెన్సిల్ గ్రాఫైట్ మరియు బ్యాటరీ ఎలక్ట్రోడ్లు', 'విమానాలు మరియు కార్ల కార్బన్ ఫైబర్']
    },
    homeExperiments: [
      {
        id: 'c-exp-1',
        title: {
          en: 'Charcoal Water Filtration Experiment',
          te: 'బొగ్గుతో నీటి శుద్ధీకరణ ప్రయోగం'
        },
        safetyLevel: 'Safe / No Supervision',
        materials: {
          en: ['Crushed activated charcoal/barbecue charcoal', 'Plastic funnel & coffee filter', 'Food colored dirty water'],
          te: ['బొగ్గు పొడి', 'ఫన్నెల్ మరియు ఫిల్టర్ కాగితం', 'రంగు కలిపిన మురికి నీరు']
        },
        steps: {
          en: [
            'Place filter paper in the funnel and layer it with activated charcoal powder.',
            'Pour water mixed with food coloring through the charcoal layer.',
            'Observe clear water filtering out through the adsorption principle of porous carbon!'
          ],
          te: [
            'ఫన్నెల్‌లో ఫిల్టర్ పేపర్ ఉంచి దానిపై బొగ్గు పొడి పొరను వేయండి.',
            'రంగు కలిపిన నీటిని ఆ బొగ్గు పొర గుండా పోయండి.',
            'బొగ్గు రంధ్రాలు రంగును పీల్చుకుని స్వచ్ఛమైన నీటిని కిందకి పంపడాన్ని గమనించండి!'
          ]
        },
        scientificPrinciple: {
          en: 'Carbon porous surface exhibits high physical adsorption, capturing organic molecules.',
          te: 'కార్బన్ యొక్క సూక్ష్మ రంధ్రాలు మలినాలను ఆకర్షించి బంధిస్తాయి (అధిశోషణం).'
        }
      }
    ],
    funFact: {
      en: 'Graphite and diamond are made of identical carbon atoms, yet one is soft and black while the other is transparent and the hardest natural mineral.',
      te: 'గ్రాఫైట్ మరియు వజ్రం రెండూ ఒకే కార్బన్ పరమాణువులతో తయారవుతాయి, కానీ వాటి అణు నిర్మాణాల వల్ల ఒకటి మెత్తగా మరొకటి అత్యంత దృఢంగా ఉంటాయి.'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'crystalline',
      imageAssetPath: '/assets/elements/006_carbon.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/6.mp3',
      teAudioPath: '/audio/te/6.mp3',
      phoneticEn: 'KAHR-bən',
      phoneticTe: 'కార్బన్'
    }
  },
  {
    atomicNumber: 7,
    symbol: 'N',
    name: { en: 'Nitrogen', te: 'నైట్రోజన్ (నత్రజని)' },
    latinName: 'Nitrogenium',
    atomicWeight: 14.007,
    category: 'reactive-nonmetal',
    group: 15,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p³',
    electronShells: [2, 5],
    oxidationStates: '+5, +3, -3',
    electronegativity: 3.04,
    atomicRadius: 56,
    ionizationEnergy: 1402,
    density: 1.2506,
    meltingPoint: 63.15,
    boilingPoint: 77.36,
    discoveryYear: 1772,
    discoveredBy: 'Daniel Rutherford',
    phaseAtSTP: 'Gas',
    summary: {
      en: 'Nitrogen forms 78% of Earth’s atmosphere and is an essential building block of amino acids, proteins, and DNA.',
      te: 'నైట్రోజన్ భూమి వాతావరణంలో 78% భాగం ఆక్రమించి ఉంటుంది. ఇది జీవులలో అమైనో ఆమ్లాలు, ప్రోటీన్లు మరియు DNA లో ముఖ్య భాగం.'
    },
    applications: {
      en: ['Agricultural fertilizers (urea, nitrates)', 'Food packaging preservation and chip bags', 'Liquid nitrogen cryogenics'],
      te: ['వ్యవసాయ ఎరువులు (యూరియా, నైట్రేట్లు)', 'ఆహార పదార్థాల నిల్వ (చిప్స్ ప్యాకెట్లు)', 'ద్రవ నైట్రోజన్ శీతలీకరణ']
    },
    funFact: {
      en: 'Potato chip bags are intentionally puffed with pure nitrogen gas to keep the chips fresh and prevent oxidation!',
      te: 'బంగాళాదుంప చిప్స్ పాడవకుండా, కరకరలాడేలా ఉంచడానికి ప్యాకెట్లలో స్వచ్ఛమైన నైట్రోజన్ వాయువును నింపుతారు!'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'gaseous',
      imageAssetPath: '/assets/elements/007_nitrogen.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/7.mp3',
      teAudioPath: '/audio/te/7.mp3',
      phoneticEn: 'NY-truh-jin',
      phoneticTe: 'నైట్రోజన్'
    }
  },
  {
    atomicNumber: 8,
    symbol: 'O',
    name: { en: 'Oxygen', te: 'ఆక్సిజన్ (ప్రాణవాయువు / ఆమ్లజని)' },
    latinName: 'Oxygenium',
    atomicWeight: 15.999,
    category: 'reactive-nonmetal',
    group: 16,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁴',
    electronShells: [2, 6],
    oxidationStates: '-2',
    electronegativity: 3.44,
    atomicRadius: 48,
    ionizationEnergy: 1314,
    density: 1.429,
    meltingPoint: 54.36,
    boilingPoint: 90.20,
    discoveryYear: 1774,
    discoveredBy: 'Joseph Priestley, Carl Wilhelm Scheele',
    phaseAtSTP: 'Gas',
    summary: {
      en: 'Oxygen is a highly reactive nonmetal and oxidizer, making up 21% of Earth’s atmosphere and essential for cellular respiration.',
      te: 'ఆక్సిజన్ అత్యంత చురుకైన ప్రాణవాయువు. ఇది వాతావరణంలో 21% ఉంటుంది మరియు సమస్త జీవుల శ్వాసక్రియకు అవసరం.'
    },
    applications: {
      en: ['Medical hospital life support systems', 'Steel smelting blast furnaces', 'Rocket propellant oxidizers'],
      te: ['ఆసుపత్రులలో ప్రాణరక్షక ఆక్సిజన్ సిలిండర్లు', 'స్టీల్ తయారీ కర్మాగారాలు', 'రాకెట్ ఇంజిన్లలో దహనకారి']
    },
    homeExperiments: [
      {
        id: 'o-exp-1',
        title: {
          en: 'Yeast & Hydrogen Peroxide Oxygen Bubbles',
          te: 'ఈస్ట్ & హైడ్రోజన్ పెరాక్సైడ్ ఆక్సిజన్ బుడగల ప్రయోగం'
        },
        safetyLevel: 'Safe / No Supervision',
        materials: {
          en: ['3% Hydrogen peroxide (from first aid kit)', '1 tsp dry bakers yeast', 'Glass bottle & liquid dish soap'],
          te: ['3% హైడ్రోజన్ పెరాక్సైడ్', '1 చెంచా ఈస్ట్ పొడి', 'గాజు గ్లాసు మరియు డిష్ వాష్ ద్రవం']
        },
        steps: {
          en: [
            'Pour 50ml of 3% hydrogen peroxide into the glass.',
            'Add a few drops of dish soap.',
            'Stir in the dry yeast and watch thick foam erupt instantly as catalase enzyme breaks peroxide into pure oxygen gas!'
          ],
          te: [
            'గ్లాసులో 50మి.లీ హైడ్రోజన్ పెరాక్సైడ్ పోయండి.',
            'కొద్దిగా డిష్ సోప్ వేయండి.',
            'ఈస్ట్ పొడిని వేసి కలపండి, వెంటనే ఆక్సిజన్ విడుదలవుతూ దట్టమైన నురుగు ఉబికి వస్తుంది!'
          ]
        },
        scientificPrinciple: {
          en: 'Catalase enzyme in yeast accelerates the decomposition of 2H₂O₂ into 2H₂O and O₂ gas.',
          te: 'ఈస్ట్‌లోని ఎంజైమ్ పెరాక్సైడ్‌ను వేగంగా నీరు మరియు ఆక్సిజన్ వాయువుగా విడగొడుతుంది.'
        }
      }
    ],
    funFact: {
      en: 'Liquid oxygen is pale sky blue and is strongly magnetic (paramagnetic).',
      te: 'ద్రవ ఆక్సిజన్ లేత నీలి రంగులో ఉండి అయస్కాంతం వైపు ఆకర్షించబడుతుంది!'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'gaseous',
      imageAssetPath: '/assets/elements/008_oxygen.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/8.mp3',
      teAudioPath: '/audio/te/8.mp3',
      phoneticEn: 'OK-si-jin',
      phoneticTe: 'ఆక్సిజన్'
    }
  },
  {
    atomicNumber: 9,
    symbol: 'F',
    name: { en: 'Fluorine', te: 'ఫ్లోరిన్' },
    latinName: 'Fluorum',
    atomicWeight: 18.998,
    category: 'reactive-nonmetal',
    group: 17,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁵',
    electronShells: [2, 7],
    oxidationStates: '-1',
    electronegativity: 3.98,
    atomicRadius: 42,
    ionizationEnergy: 1681,
    density: 1.696,
    meltingPoint: 53.53,
    boilingPoint: 85.03,
    discoveryYear: 1886,
    discoveredBy: 'Henri Moissan',
    phaseAtSTP: 'Gas',
    summary: {
      en: 'Fluorine is the most electronegative and chemically reactive of all chemical elements, reacting with almost all organic substances.',
      te: 'ఫ్లోరిన్ ఆవర్తన పట్టికలో అత్యధిక విద్యుత్ రుణాత్మకత మరియు అత్యంత చురుకైన చర్య శీలత కలిగిన మూలకం.'
    },
    applications: {
      en: ['Toothpaste cavity prevention (fluoride)', 'Non-stick Teflon cookware coating (PTFE)', 'Refrigerants and pharmaceuticals'],
      te: ['దంతాల రక్షణ టూత్‌పేస్ట్ (ఫ్లోరైడ్)', 'నాన్-స్టిక్ టెఫ్లాన్ పాత్రల పూత', 'శీతలీకరణ యంత్రాలు మరియు మందులు']
    },
    funFact: {
      en: 'Fluorine is so aggressive that it can set fire to glass, water, and asbestos upon contact!',
      te: 'ఫ్లోరిన్ ఎంత తీవ్రమైనదంటే అది గాజు మరియు నీటితో తాకినప్పుడు కూడా మంటలను పుట్టించగలదు!'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'gaseous',
      imageAssetPath: '/assets/elements/009_fluorine.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/9.mp3',
      teAudioPath: '/audio/te/9.mp3',
      phoneticEn: 'FLOOR-een',
      phoneticTe: 'ఫ్లోరిన్'
    }
  },
  {
    atomicNumber: 10,
    symbol: 'Ne',
    name: { en: 'Neon', te: 'నియాన్' },
    latinName: 'Neon',
    atomicWeight: 20.180,
    category: 'noble-gas',
    group: 18,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁶',
    electronShells: [2, 8],
    oxidationStates: '0',
    electronegativity: null,
    atomicRadius: 38,
    ionizationEnergy: 2081,
    density: 0.9002,
    meltingPoint: 24.56,
    boilingPoint: 27.07,
    discoveryYear: 1898,
    discoveredBy: 'William Ramsay, Morris Travers',
    phaseAtSTP: 'Gas',
    summary: {
      en: 'Neon is a colorless noble gas that glows with a brilliant reddish-orange light when ionized in high-voltage electrical discharge tubes.',
      te: 'నియాన్ రంగులేని జడ వాయువు. విద్యుత్ ప్రసరించినప్పుడు ఇది కాంతివంతమైన ఎరుపు-నారింజ రంగు వెలుగును ఇస్తుంది.'
    },
    applications: {
      en: ['Luminous advertising neon signs', 'High-voltage indicators and laser devices', 'Cryogenic refrigerant'],
      te: ['ఆకర్షణీయమైన నియాన్ ప్రకటన బోర్డులు', 'హై-వోల్టేజ్ సూచికలు మరియు లేజర్లు', 'క్రయోజెనిక్ శీతలీకరణ']
    },
    funFact: {
      en: 'True neon signs only glow reddish-orange; other colors use different gases like argon, mercury vapor, or phosphor coatings.',
      te: 'నిజమైన నియాన్ లైట్లు కేవలం ఎరుపు-నారింజ రంగులోనే వెలుగుతాయి; ఇతర రంగులకు ఆర్గాన్ లేదా పాదరస ఆవిరిని ఉపయోగిస్తారు.'
    },
    visual: {
      primaryColor: '#c084fc',
      secondaryColor: '#9333ea',
      materialTexture: 'gaseous',
      imageAssetPath: '/assets/elements/010_neon.svg',
      glowColor: 'rgba(192, 132, 252, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/10.mp3',
      teAudioPath: '/audio/te/10.mp3',
      phoneticEn: 'NEE-on',
      phoneticTe: 'నియాన్'
    }
  },
  {
    atomicNumber: 11,
    symbol: 'Na',
    name: { en: 'Sodium', te: 'సోడియం (క్షార లోహం)' },
    latinName: 'Natrium',
    atomicWeight: 22.990,
    category: 'alkali-metal',
    group: 1,
    period: 3,
    block: 's',
    electronConfiguration: '[Ne] 3s¹',
    electronShells: [2, 8, 1],
    oxidationStates: '+1',
    electronegativity: 0.93,
    atomicRadius: 190,
    ionizationEnergy: 496,
    density: 0.968,
    meltingPoint: 370.87,
    boilingPoint: 1156,
    discoveryYear: 1807,
    discoveredBy: 'Humphry Davy',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Sodium is a soft, silvery alkali metal that reacts vigorously with water to generate hydrogen gas and sodium hydroxide.',
      te: 'సోడియం మృదువైన వెండి రంగు క్షార లోహం. ఇది నీటితో తీవ్రంగా చర్య జరిపి హైడ్రోజన్ వాయువును విడుదల చేస్తుంది.'
    },
    applications: {
      en: ['Table salt (sodium chloride) for nutrition', 'Yellow highway sodium vapor streetlights', 'Chemical synthesis and soap manufacturing'],
      te: ['వంట ఉప్పు (సోడియం క్లోరైడ్)', 'రహదారులపై పసుపు రంగు సోడియం వీధి దీపాలు', 'సబ్బుల తయారీ మరియు రసాయన పరిశ్రమలు']
    },
    funFact: {
      en: 'Sodium is so soft at room temperature that it can be easily sliced with a butter knife!',
      te: 'సోడియం గది ఉష్ణోగ్రత వద్ద వెన్నలా చాలా మృదువుగా ఉండి సాధారణ కత్తితో కోయవచ్చు!'
    },
    visual: {
      primaryColor: '#f87171',
      secondaryColor: '#dc2626',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/011_sodium.svg',
      glowColor: 'rgba(248, 113, 113, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/11.mp3',
      teAudioPath: '/audio/te/11.mp3',
      phoneticEn: 'SOH-dee-um',
      phoneticTe: 'సోడియం'
    }
  },
  {
    atomicNumber: 12,
    symbol: 'Mg',
    name: { en: 'Magnesium', te: 'మెగ్నీషియం' },
    latinName: 'Magnesium',
    atomicWeight: 24.305,
    category: 'alkaline-earth-metal',
    group: 2,
    period: 3,
    block: 's',
    electronConfiguration: '[Ne] 3s²',
    electronShells: [2, 8, 2],
    oxidationStates: '+2',
    electronegativity: 1.31,
    atomicRadius: 145,
    ionizationEnergy: 738,
    density: 1.738,
    meltingPoint: 923,
    boilingPoint: 1363,
    discoveryYear: 1755,
    discoveredBy: 'Joseph Black',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Magnesium is a lightweight structural metal and the central coordinating atom in chlorophyll molecules that drive plant photosynthesis.',
      te: 'మెగ్నీషియం తేలికైన దృఢమైన లోహం. మొక్కలలో కిరణజన్య సంయోగక్రియ జరిపే క్లోరోఫిల్ (పత్రహరితం) మధ్యలో ఉండే ప్రధాన మూలకం.'
    },
    applications: {
      en: ['Lightweight alloys for laptops and race cars', 'Bright white signal flares and fireworks', 'Antacid medicine (Milk of Magnesia)'],
      te: ['ల్యాప్‌టాప్‌లు మరియు కార్ల తేలికపాటి మిశ్రమాలు', 'తెల్లని కాంతినిచ్చే బాణసంచా మరియు సిగ్నల్ ఫ్లేర్స్', 'ఎసిడిటీ నివారణ ఔషధం (మిల్క్ ఆఫ్ మెగ్నీషియా)']
    },
    funFact: {
      en: 'Magnesium metal burns with such intense blinding white light that it was used in early photography flashbulbs.',
      te: 'మెగ్నీషియం మండించినప్పుడు కళ్ళు మిరుమిట్లు గొలిపే తెల్లటి వెలుగును ఇస్తుంది, పాతకాలంలో ఫోటో ఫ్లాష్‌లలో వాడేవారు.'
    },
    visual: {
      primaryColor: '#fb923c',
      secondaryColor: '#ea580c',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/012_magnesium.svg',
      glowColor: 'rgba(251, 146, 60, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/12.mp3',
      teAudioPath: '/audio/te/12.mp3',
      phoneticEn: 'mag-NEE-zee-um',
      phoneticTe: 'మెగ్నీషియం'
    }
  },
  {
    atomicNumber: 13,
    symbol: 'Al',
    name: { en: 'Aluminium', te: 'అల్యూమినియం' },
    latinName: 'Aluminium',
    atomicWeight: 26.982,
    category: 'post-transition-metal',
    group: 13,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p¹',
    electronShells: [2, 8, 3],
    oxidationStates: '+3',
    electronegativity: 1.61,
    atomicRadius: 118,
    ionizationEnergy: 578,
    density: 2.70,
    meltingPoint: 933.47,
    boilingPoint: 2792,
    discoveryYear: 1825,
    discoveredBy: 'Hans Christian Ørsted',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Aluminium is the most abundant metal in Earth’s crust, prized for its low density, high thermal conductivity, and corrosion resistance.',
      te: 'అల్యూమినియం భూమి పైపెంకులో అత్యధికంగా లభించే లోహం. ఇది తక్కువ బరువు మరియు తుప్పు పట్టని గుణం కలిగి ఉంటుంది.'
    },
    applications: {
      en: ['Aircraft fuselages and lightweight automotive frames', 'Kitchen aluminum foil and beverage cans', 'Electrical power transmission high-voltage lines'],
      te: ['విమానాల భాగాలు మరియు వాహనాల నిర్మాణం', 'కిచెన్ ఫాయిల్ మరియు కూల్‌డ్రింక్ డబ్బాలు', 'విద్యుత్ సరఫరా వైర్లు']
    },
    homeExperiments: [
      {
        id: 'al-exp-1',
        title: {
          en: 'Aluminium Foil Saltwater Battery Indicator',
          te: 'అల్యూమినియం ఫాయిల్ ఉప్పునీటి బ్యాటరీ ప్రయోగం'
        },
        safetyLevel: 'Safe / No Supervision',
        materials: {
          en: ['Aluminium kitchen foil', 'Copper coin/wire', 'Paper towel soaked in salt water', 'Small LED or multimeter'],
          te: ['అల్యూమినియం ఫాయిల్', 'రాగి నాణెం లేదా తీగ', 'ఉప్పునీటిలో నానబెట్టిన టిష్యూ పేపర్', 'చిన్న LED బల్బ్']
        },
        steps: {
          en: [
            'Place the aluminium foil sheet flat on the table.',
            'Lay the saltwater-soaked paper towel on top.',
            'Place the copper coin on top of the wet paper.',
            'Connect LED terminals across aluminium and copper to witness galvanic voltage generation!'
          ],
          te: [
            'అల్యూమినియం ఫాయిల్ ముక్కను టేబుల్ పై ఉంచండి.',
            'ఉప్పునీటిలో తడిపిన కాగితాన్ని దానిపై పరవండి.',
            'దానిపై రాగి నాణేన్ని ఉంచండి.',
            'రెండు చివరలను కలిపి వోల్టేజ్ విద్యుత్ ఉత్పత్తిని గమనించండి!'
          ]
        },
        scientificPrinciple: {
          en: 'Galvanic redox reactions between aluminium (anode) and copper (cathode) in saline electrolyte generate electricity.',
          te: 'అల్యూమినియం మరియు రాగి మధ్య జరిగే ఎలక్ట్రోకెమికల్ చర్య ద్వారా విద్యుత్ ఉత్పత్తి అవుతుంది.'
        }
      }
    ],
    funFact: {
      en: 'In the 1850s, aluminium was more precious than gold and was used for Emperor Napoleon III’s royal banqueting cutlery!',
      te: '1850లలో అల్యూమినియం బంగారం కంటే విలువైందిగా ఉండేది మరియు రాజులు దీనితో చేసిన స్పూన్లు వాడేవారు!'
    },
    visual: {
      primaryColor: '#34d399',
      secondaryColor: '#059669',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/013_aluminium.svg',
      glowColor: 'rgba(52, 211, 153, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/13.mp3',
      teAudioPath: '/audio/te/13.mp3',
      phoneticEn: 'al-yoo-MIN-ee-um',
      phoneticTe: 'అల్యూమినియం'
    }
  },
  {
    atomicNumber: 14,
    symbol: 'Si',
    name: { en: 'Silicon', te: 'సిలికాన్' },
    latinName: 'Silicium',
    atomicWeight: 28.085,
    category: 'metalloid',
    group: 14,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p²',
    electronShells: [2, 8, 4],
    oxidationStates: '+4, -4',
    electronegativity: 1.90,
    atomicRadius: 111,
    ionizationEnergy: 787,
    density: 2.329,
    meltingPoint: 1687,
    boilingPoint: 3538,
    discoveryYear: 1824,
    discoveredBy: 'Jöns Jacob Berzelius',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Silicon is the backbone of modern electronics, computer microchips, solar panels, and silicone polymers.',
      te: 'సిలికాన్ ఆధునిక ఎలక్ట్రానిక్స్, కంప్యూటర్ మైక్రోచిప్‌లు, సోలార్ ప్యానెళ్లు మరియు ఇంటర్నెట్ విప్లవానికి వెన్నెముక.'
    },
    applications: {
      en: ['Semiconductor CPU microprocessors and memory chips', 'Photovoltaic solar cells for renewable energy', 'Silicone rubber sealants and medical implants'],
      te: ['కంప్యూటర్ CPU మైక్రోప్రాసెసర్లు మరియు మెమరీ చిప్స్', 'సౌర విద్యుత్ సోలార్ ప్యానెళ్ళు', 'సిలికాన్ సీలెంట్లు మరియు వైద్య పరికరాలు']
    },
    funFact: {
      en: 'Quartz sand is almost pure silicon dioxide (SiO₂), which is melted at over 1700°C to create ultra-pure semiconductor wafers.',
      te: 'సముద్రపు ఇసుక ప్రధానంగా సిలికాన్ డయాక్సైడ్ (SiO₂), దీనిని శుద్ధి చేసి కంప్యూటర్ ప్రాసెసర్ల వేఫర్లు తయారుచేస్తారు.'
    },
    visual: {
      primaryColor: '#a3e635',
      secondaryColor: '#65a30d',
      materialTexture: 'crystalline',
      imageAssetPath: '/assets/elements/014_silicon.svg',
      glowColor: 'rgba(163, 230, 53, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/14.mp3',
      teAudioPath: '/audio/te/14.mp3',
      phoneticEn: 'SIL-ih-kən',
      phoneticTe: 'సిలికాన్'
    }
  },
  {
    atomicNumber: 15,
    symbol: 'P',
    name: { en: 'Phosphorus', te: 'భాస్వరం (ఫాస్ఫరస్)' },
    latinName: 'Phosphorus',
    atomicWeight: 30.974,
    category: 'reactive-nonmetal',
    group: 15,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p³',
    electronShells: [2, 8, 5],
    oxidationStates: '+5, +3, -3',
    electronegativity: 2.19,
    atomicRadius: 98,
    ionizationEnergy: 1012,
    density: 1.823,
    meltingPoint: 317.3,
    boilingPoint: 553.6,
    discoveryYear: 1669,
    discoveredBy: 'Hennig Brand',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Phosphorus is essential for life, forming the structural sugar-phosphate backbone of DNA/RNA and the energy currency ATP.',
      te: 'భాస్వరం మానవ శరీరంలో ఎముకలు, దంతాలు, DNA మరియు కణాల శక్తి కేంద్రమైన ATP లో అత్యంత ముఖ్యమైన మూలకం.'
    },
    applications: {
      en: ['Phosphate fertilizers for agriculture', 'Safety match heads and friction strips', 'Detergents, flame retardants, and LED lighting'],
      te: ['వ్యవసాయ ఫాస్ఫేట్ ఎరువులు', 'అగ్గిపెట్టెల అగ్గిపుల్లల మందు', 'డిటర్జెంట్లు మరియు LED లైట్లు']
    },
    funFact: {
      en: 'Phosphorus was first discovered in 1669 by an alchemist trying to create gold by boiling hundreds of liters of urine!',
      te: '1669లో ఒక రసవాది మూత్రాన్ని మరిగించి బంగారం తయారుచేయబోయి ప్రమాదవశాత్తు చీకట్లో మెరిసే భాస్వరాన్ని కనుగొన్నాడు!'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'crystalline',
      imageAssetPath: '/assets/elements/015_phosphorus.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/15.mp3',
      teAudioPath: '/audio/te/15.mp3',
      phoneticEn: 'FOS-fər-əs',
      phoneticTe: 'భాస్వరం'
    }
  },
  {
    atomicNumber: 16,
    symbol: 'S',
    name: { en: 'Sulfur', te: 'గంధకం (సల్ఫర్)' },
    latinName: 'Sulfur',
    atomicWeight: 32.06,
    category: 'reactive-nonmetal',
    group: 16,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁴',
    electronShells: [2, 8, 6],
    oxidationStates: '+6, +4, -2',
    electronegativity: 2.58,
    atomicRadius: 88,
    ionizationEnergy: 1000,
    density: 2.07,
    meltingPoint: 388.36,
    boilingPoint: 717.8,
    discoveryYear: 'Ancient',
    discoveredBy: 'Known to ancients',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Sulfur is a bright yellow crystalline solid at room temperature and the primary raw material for sulfuric acid production.',
      te: 'గంధకం ప్రకాశవంతమైన పసుపు రంగు అలోహం. పరిశ్రమలలో అత్యధికంగా వాడే సల్ఫ్యూరిక్ ఆమ్ల తయారీకి ఇది ముడిపదార్థం.'
    },
    applications: {
      en: ['Sulfuric acid manufacturing (world’s top industrial chemical)', 'Rubber vulcanization for car tires', 'Gunpowder, fungicides, and skincare treatments'],
      te: ['సల్ఫ్యూరిక్ ఆమ్ల తయారీ', 'టైర్ల రబ్బరు వల్కనైజేషన్ బలోపేతం', 'తుపాకీ మందు మరియు చర్మ సంరక్షణ మందులు']
    },
    funFact: {
      en: 'Pure sulfur crystals are actually odorless; the pungent "rotten egg" smell comes from hydrogen sulfide (H₂S) gas.',
      te: 'స్వచ్ఛమైన గంధకానికి వాసన ఉండదు; కుళ్ళిన గుడ్డు వాసన దాని సమ్మేళనమైన హైడ్రోజన్ సల్ఫైడ్ వాయువు నుండి వస్తుంది.'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'crystalline',
      imageAssetPath: '/assets/elements/016_sulfur.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/16.mp3',
      teAudioPath: '/audio/te/16.mp3',
      phoneticEn: 'SUL-fər',
      phoneticTe: 'గంధకం'
    }
  },
  {
    atomicNumber: 17,
    symbol: 'Cl',
    name: { en: 'Chlorine', te: 'క్లోరిన్' },
    latinName: 'Chlorum',
    atomicWeight: 35.45,
    category: 'reactive-nonmetal',
    group: 17,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁵',
    electronShells: [2, 8, 7],
    oxidationStates: '+7, +5, +3, +1, -1',
    electronegativity: 3.16,
    atomicRadius: 79,
    ionizationEnergy: 1251,
    density: 3.214,
    meltingPoint: 171.6,
    boilingPoint: 239.11,
    discoveryYear: 1774,
    discoveredBy: 'Carl Wilhelm Scheele',
    phaseAtSTP: 'Gas',
    summary: {
      en: 'Chlorine is a yellow-green toxic halogen gas widely used for municipal drinking water disinfection and PVC plastic synthesis.',
      te: 'క్లోరిన్ పసుపు-పచ్చని హాలోజన్ వాయువు. త్రాగునీటిని క్రిమిరహితం చేయడానికి మరియు PVC పైపుల తయారీకి విస్తృతంగా వాడతారు.'
    },
    applications: {
      en: ['Municipal drinking water purification and swimming pool sanitizing', 'PVC plastic piping and building materials', 'Household disinfectants and paper bleaching'],
      te: ['త్రాగునీటి శుద్ధి మరియు స్విమ్మింగ్ పూల్ శానిటైజింగ్', 'PVC ప్లాస్టిక్ పైపులు మరియు కిటికీలు', 'గృహ క్రిమిసంహారకాలు']
    },
    funFact: {
      en: 'Chlorine combined with violent metallic sodium forms harmless, edible table salt (NaCl).',
      te: 'విషపూరితమైన క్లోరిన్ వాయువు, పేలుడు స్వభావంగల సోడియంతో కలిసినప్పుడు మనం తినే ఆహారపు ఉప్పు (NaCl) ఏర్పడుతుంది!'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'gaseous',
      imageAssetPath: '/assets/elements/017_chlorine.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/17.mp3',
      teAudioPath: '/audio/te/17.mp3',
      phoneticEn: 'KLOR-een',
      phoneticTe: 'క్లోరిన్'
    }
  },
  {
    atomicNumber: 18,
    symbol: 'Ar',
    name: { en: 'Argon', te: 'ఆర్గాన్' },
    latinName: 'Argon',
    atomicWeight: 39.948,
    category: 'noble-gas',
    group: 18,
    period: 3,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁶',
    electronShells: [2, 8, 8],
    oxidationStates: '0',
    electronegativity: null,
    atomicRadius: 71,
    ionizationEnergy: 1520,
    density: 1.784,
    meltingPoint: 83.81,
    boilingPoint: 87.30,
    discoveryYear: 1894,
    discoveredBy: 'Lord Rayleigh, William Ramsay',
    phaseAtSTP: 'Gas',
    summary: {
      en: 'Argon is the third-most abundant gas in Earth’s atmosphere (0.93%) and provides an inert atmosphere for welding and electronics.',
      te: 'ఆర్గాన్ భూమి వాతావరణంలో మూడవ అత్యంత విస్తారమైన వాయువు (దాదాపు 1%). ఇది ఇతర పదార్థాలతో చర్య జరపని జడ వాయువు.'
    },
    applications: {
      en: ['Inert shielding gas in TIG/MIG arc welding', 'Filling incandescent light bulbs to protect tungsten filaments', 'Insulating double-pane energy-efficient windows'],
      te: ['ఆర్క్ వెల్డింగ్ లో రక్షణ వాయువు', 'విద్యుత్ బల్బులలో ఫిలమెంట్ కరిగిపోకుండా నింపడం', 'డబుల్ గ్లాస్ కిటికీల మధ్య ఇన్సులేషన్']
    },
    funFact: {
      en: 'Its name comes from the Greek word "argos", meaning lazy or idle, because it does not react with other chemicals.',
      te: 'ఆర్గాన్ అనే పేరు గ్రీకు పదం "ఆర్గోస్" (సోమరి / స్పందించనిది) నుండి వచ్చింది, ఎందుకంటే ఇది ఏ రసాయనాలతో చర్య జరపదు.'
    },
    visual: {
      primaryColor: '#c084fc',
      secondaryColor: '#9333ea',
      materialTexture: 'gaseous',
      imageAssetPath: '/assets/elements/018_argon.svg',
      glowColor: 'rgba(192, 132, 252, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/18.mp3',
      teAudioPath: '/audio/te/18.mp3',
      phoneticEn: 'AHR-gon',
      phoneticTe: 'ఆర్గాన్'
    }
  },
  {
    atomicNumber: 19,
    symbol: 'K',
    name: { en: 'Potassium', te: 'పొటాషియం' },
    latinName: 'Kalium',
    atomicWeight: 39.098,
    category: 'alkali-metal',
    group: 1,
    period: 4,
    block: 's',
    electronConfiguration: '[Ar] 4s¹',
    electronShells: [2, 8, 8, 1],
    oxidationStates: '+1',
    electronegativity: 0.82,
    atomicRadius: 243,
    ionizationEnergy: 418,
    density: 0.862,
    meltingPoint: 336.7,
    boilingPoint: 1032,
    discoveryYear: 1807,
    discoveredBy: 'Humphry Davy',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Potassium is a soft alkali metal crucial for biological nerve impulse transmission, muscle contraction, and plant crop nutrition.',
      te: 'పొటాషియం క్షార లోహం. మానవ నాడీ వ్యవస్థ, గుండె పనితీరు మరియు మొక్కల ఎదుగుదలకు అత్యంత ఆవశ్యకమైన మూలకం.'
    },
    applications: {
      en: ['NPK agricultural crop fertilizers', 'Dietary electrolyte supplement (bananas, potatoes)', 'Potassium hydroxide liquid soaps'],
      te: ['NPK వ్యవసాయ ఎరువులు', 'శరీర ఎలక్ట్రోలైట్ సమతుల్యత (అరటిపండ్లు)', 'ద్రవ సబ్బుల తయారీ']
    },
    funFact: {
      en: 'Bananas contain enough naturally occurring radioactive Potassium-40 that cargo scanners can detect a truckload of them!',
      te: 'అరటిపండ్లలో సహజసిద్ధమైన పొటాషియం-40 రేడియోధార్మికత కొద్ది మొత్తంలో ఉంటుంది!'
    },
    visual: {
      primaryColor: '#f87171',
      secondaryColor: '#dc2626',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/019_potassium.svg',
      glowColor: 'rgba(248, 113, 113, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/19.mp3',
      teAudioPath: '/audio/te/19.mp3',
      phoneticEn: 'puh-TAS-ee-um',
      phoneticTe: 'పొటాషియం'
    }
  },
  {
    atomicNumber: 20,
    symbol: 'Ca',
    name: { en: 'Calcium', te: 'కాల్షియం (సున్నపు లోహం)' },
    latinName: 'Calx',
    atomicWeight: 40.078,
    category: 'alkaline-earth-metal',
    group: 2,
    period: 4,
    block: 's',
    electronConfiguration: '[Ar] 4s²',
    electronShells: [2, 8, 8, 2],
    oxidationStates: '+2',
    electronegativity: 1.00,
    atomicRadius: 194,
    ionizationEnergy: 589,
    density: 1.55,
    meltingPoint: 1115,
    boilingPoint: 1757,
    discoveryYear: 1808,
    discoveredBy: 'Humphry Davy',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Calcium is the fifth-most abundant element in Earth’s crust and the primary structural component of bones, teeth, shells, and cement.',
      te: 'కాల్షియం మానవ శరీరంలోని ఎముకలు, దంతాలు మరియు నిర్మాణ రంగంలో సిమెంట్, సున్నంలో ఉండే అతి ముఖ్యమైన ఖనిజం.'
    },
    applications: {
      en: ['Portland cement and concrete construction', 'Dietary bone and dental health supplement', 'Limestone, marble, and blackboard chalk'],
      te: ['సిమెంట్ మరియు కాంక్రీట్ నిర్మాణాలు', 'ఎముకల బలం కోసం ఆహార పదార్ధాలు (పాలు)', 'సున్నపురాయి, పాలరాయి మరియు చాక్‌పీస్']
    },
    homeExperiments: [
      {
        id: 'ca-exp-1',
        title: {
          en: 'Bouncy Rubber Egg (Calcium Shell Dissolution)',
          te: 'రబ్బరు గుడ్డు ప్రయోగం (కాల్షియం షెల్ కరిగించడం)'
        },
        safetyLevel: 'Safe / No Supervision',
        materials: {
          en: ['Raw egg', 'White vinegar (acetic acid)', 'Clear glass jar'],
          te: ['పచ్చి కోడిగుడ్డు', 'వైట్ వెనిగర్', 'గాజు సీసా']
        },
        steps: {
          en: [
            'Place the raw egg gently in the glass jar.',
            'Submerge completely in vinegar and observe immediate CO₂ bubble formation on the shell.',
            'Wait 48 hours; wash off remaining residue under water to reveal a bouncy, translucent, shell-less bouncy egg!'
          ],
          te: [
            'కోడిగుడ్డును గాజు సీసాలో ఉంచండి.',
            'దానిపై వెనిగర్ పోసి పూర్తిగా ముంచండి.',
            '2 రోజుల తర్వాత తీసి కడిగితే కాల్షియం కరిగిపోయి రబ్బరులా బంతిలా మారిన గుడ్డు కనిపిస్తుంది!'
          ]
        },
        scientificPrinciple: {
          en: 'Acetic acid reacts with calcium carbonate (CaCO₃) shell to form water-soluble calcium acetate and carbon dioxide gas.',
          te: 'వెనిగర్ లోని ఎసిటిక్ ఆమ్లం గుడ్డు పెంకులోని కాల్షియం కార్బోనేట్‌తో చర్య జరిపి దానిని కరిగించేస్తుంది.'
        }
      }
    ],
    funFact: {
      en: 'A standard human adult body contains over 1 kilogram of pure calcium, 99% of which is stored in bones and teeth.',
      te: 'మానవ శరీరంలో సుమారు 1 కిలోగ్రాము కాల్షియం ఉంటుంది, అందులో 99% ఎముకలు మరియు దంతాలలోనే ఉంటుంది.'
    },
    visual: {
      primaryColor: '#fb923c',
      secondaryColor: '#ea580c',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/020_calcium.svg',
      glowColor: 'rgba(251, 146, 60, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/20.mp3',
      teAudioPath: '/audio/te/20.mp3',
      phoneticEn: 'KAL-see-um',
      phoneticTe: 'కాల్షియం'
    }
  },
  {
    atomicNumber: 26,
    symbol: 'Fe',
    name: { en: 'Iron', te: 'ఇనుము (అయస్ / లోహం)' },
    latinName: 'Ferrum',
    atomicWeight: 55.845,
    category: 'transition-metal',
    group: 8,
    period: 4,
    block: 'd',
    electronConfiguration: '[Ar] 3d⁶ 4s²',
    electronShells: [2, 8, 14, 2],
    oxidationStates: '+3, +2',
    electronegativity: 1.83,
    atomicRadius: 156,
    ionizationEnergy: 762,
    density: 7.874,
    meltingPoint: 1811,
    boilingPoint: 3134,
    discoveryYear: 'Ancient',
    discoveredBy: 'Known to ancients',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Iron is the most used metal by mass on Earth, the backbone of steel infrastructure, and the active oxygen-carrying center in human blood hemoglobin.',
      te: 'ఇనుము మానవ నాగరికతలో అత్యధికంగా ఉపయోగించే లోహం. ఉక్కు తయారీకి మరియు రక్తం లోని హిమోగ్లోబిన్ ద్వారా ఆక్సిజన్ రవాణాకు ఇది మూలం.'
    },
    applications: {
      en: ['Structural steel for skyscrapers, bridges, and railroads', 'Automotive and shipbuilding alloys', 'Hemoglobin blood oxygen transport in biology'],
      te: ['భవనాలు, వంతెనలు మరియు రైల్వే ఉక్కు నిర్మాణాలు', 'కార్లు మరియు ఓడల తయారీ', 'రక్తంలోని హిమోగ్లోబిన్ ఆక్సిజన్ రవాణా']
    },
    homeExperiments: [
      {
        id: 'fe-exp-1',
        title: {
          en: 'Cereal Magnetic Iron Extraction',
          te: 'బ్రేక్‌ఫాస్ట్ సిరియల్ నుండి ఇనుము వెలికితీత ప్రయోగం'
        },
        safetyLevel: 'Safe / No Supervision',
        materials: {
          en: ['Iron-fortified breakfast cereal (corn flakes)', 'Strong neodymium magnet', 'Ziploc bag & warm water'],
          te: ['ఐరన్ కలిపిన కార్న్ ఫ్లేక్స్', 'బలమైన అయస్కాంతం', 'జిప్‌లాక్ కవర్ & నీరు']
        },
        steps: {
          en: [
            'Crush 1 cup of fortified cereal inside a ziploc bag with warm water into a fine slurry.',
            'Let it sit for 15 minutes.',
            'Hover the strong magnet along the outside wall of the bag to attract and view pure elemental metallic iron filings!'
          ],
          te: [
            'కార్న్ ఫ్లేక్స్‌ను నీటిలో వేసి మెత్తటి పేస్ట్‌లా చేయండి.',
            '15 నిమిషాల తర్వాత కవర్ బయట అయస్కాంతాన్ని తిప్పండి.',
            'అయస్కాంతం వైపు నిజమైన ఇనుప రజను ఆకర్షించబడటాన్ని స్పష్టంగా చూడవచ్చు!'
          ]
        },
        scientificPrinciple: {
          en: 'Elemental food-grade iron powder added to nutritional cereal retains its ferromagnetic properties.',
          te: 'ఆహారంలో కలిపిన ఇనుప రజను తన సహజ ఫెర్రో అయస్కాంత గుణాన్ని ప్రదర్శిస్తుంది.'
        }
      }
    ],
    funFact: {
      en: 'Earth’s molten liquid iron core acts like a massive planetary dynamo, generating the magnetic field that shields us from deadly solar radiation.',
      te: 'భూమి కేంద్రంలో ఉన్న ద్రవ ఇనుము ప్రవాహం వల్ల భూమి చుట్టూ రక్షక అయస్కాంత వలయం ఏర్పడుతోంది.'
    },
    visual: {
      primaryColor: '#818cf8',
      secondaryColor: '#4f46e5',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/026_iron.svg',
      glowColor: 'rgba(129, 140, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/26.mp3',
      teAudioPath: '/audio/te/26.mp3',
      phoneticEn: 'EYE-ern',
      phoneticTe: 'ఇనుము'
    }
  },
  {
    atomicNumber: 29,
    symbol: 'Cu',
    name: { en: 'Copper', te: 'రాగి (తామ్రం)' },
    latinName: 'Cuprum',
    atomicWeight: 63.546,
    category: 'transition-metal',
    group: 11,
    period: 4,
    block: 'd',
    electronConfiguration: '[Ar] 3d¹⁰ 4s¹',
    electronShells: [2, 8, 18, 1],
    oxidationStates: '+2, +1',
    electronegativity: 1.90,
    atomicRadius: 145,
    ionizationEnergy: 745,
    density: 8.96,
    meltingPoint: 1357.77,
    boilingPoint: 2835,
    discoveryYear: 'Ancient',
    discoveredBy: 'Known to ancients',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Copper is a reddish-gold metal renowned for supreme electrical conductivity, thermal performance, and natural antimicrobial properties.',
      te: 'రాగి ఎరుపు-బంగారు రంగు లోహం. అత్యుత్తమ విద్యుత్ మరియు ఉష్ణ వాహకత, అలాగే సహజ క్రిమిసంహారక గుణాలు కలిగి ఉంటుంది.'
    },
    applications: {
      en: ['Electrical power wiring and electronics printed circuit boards', 'Plumbing water pipes and cookware', 'Bronze and brass alloy manufacturing'],
      te: ['విద్యుత్ వైర్లు మరియు ఎలక్ట్రానిక్స్ సర్క్యూట్ బోర్డులు', 'నీటి పైపులు మరియు వంట పాత్రలు', 'కంచు (బ్రాంజ్), ఇత్తడి (బ్రాస్) తయారీ']
    },
    homeExperiments: [
      {
        id: 'cu-exp-1',
        title: {
          en: 'Shiny Penny Salt & Vinegar Chemical Polish',
          te: 'రాగి నాణెం వెనిగర్ పాలిషింగ్ ప్రయోగం'
        },
        safetyLevel: 'Safe / No Supervision',
        materials: {
          en: ['Dull, oxidized copper coins/wire', '1/4 cup vinegar', '1 tsp table salt', 'Paper towel'],
          te: ['నల్లబడిన పాత రాగి నాణెం', 'కొద్దిగా వెనిగర్', '1 చెంచా ఉప్పు', 'టిష్యూ పేపర్']
        },
        steps: {
          en: [
            'Dissolve salt into vinegar in a small bowl.',
            'Dip the tarnished dull copper coin halfway into the solution for 10 seconds.',
            'Pull it out to reveal an instant, gleaming contrast line where copper oxide was dissolved!'
          ],
          te: [
            'గిన్నెలో వెనిగర్ మరియు ఉప్పు కలపండి.',
            'నల్లబడిన రాగి నాణేన్ని సగం వరకు ద్రావణంలో 10 సెకన్లు ముంచండి.',
            'బయటకు తీసి చూస్తే ముంచిన భాగం వెంటనే కొత్తదానిలా తళతళా మెరవడం చూడవచ్చు!'
          ]
        },
        scientificPrinciple: {
          en: 'Dilute acetic acid in the presence of chloride ions dissolves dark copper(II) oxide patina into soluble copper chloride.',
          te: 'ఎసిటిక్ ఆమ్లం మరియు ఉప్పు కలయిక రాగిపై పేరుకున్న నల్లటి ఆక్సైడ్ పొరను కరిగించి మెరిపిస్తుంది.'
        }
      }
    ],
    funFact: {
      en: 'The Statue of Liberty is made of over 80 tons of copper; it is green because of natural outdoor patina oxidation (verdigris)!',
      te: 'న్యూయార్క్ లోని స్టాచ్యూ ఆఫ్ లిబర్టీ విగ్రహం 80 టన్నుల రాగితో చేయబడింది; గాలిలోని తేమ వల్ల రాగి ఆక్సీకరణం చెంది ఆకుపచ్చ రంగులోకి మారింది!'
    },
    visual: {
      primaryColor: '#818cf8',
      secondaryColor: '#4f46e5',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/029_copper.svg',
      glowColor: 'rgba(129, 140, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/29.mp3',
      teAudioPath: '/audio/te/29.mp3',
      phoneticEn: 'KOP-ər',
      phoneticTe: 'రాగి'
    }
  },
  {
    atomicNumber: 30,
    symbol: 'Zn',
    name: { en: 'Zinc', te: 'జింక్ (యశదం / తుత్తినాగం)' },
    latinName: 'Zincum',
    atomicWeight: 65.38,
    category: 'transition-metal',
    group: 12,
    period: 4,
    block: 'd',
    electronConfiguration: '[Ar] 3d¹⁰ 4s²',
    electronShells: [2, 8, 18, 2],
    oxidationStates: '+2',
    electronegativity: 1.65,
    atomicRadius: 142,
    ionizationEnergy: 906,
    density: 7.14,
    meltingPoint: 692.68,
    boilingPoint: 1180,
    discoveryYear: 1746,
    discoveredBy: 'Andreas Sigismund Marggraf',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Zinc is an essential trace nutrient in biology and is extensively used in galvanization to shield steel from corrosive rusting.',
      te: 'జింక్ శరీర రోగనిరోధక శక్తికి అవసరమైన సూక్ష్మ పోషకం. ఇనుము తుప్పు పట్టకుండా గాల్వనైజేషన్ చేయడానికి దీనిని వాడతారు.'
    },
    applications: {
      en: ['Galvanizing steel sheet roofing and outdoor structures', 'Alkaline battery anodes', 'Zinc oxide sunscreen and rash creams'],
      te: ['రేకులపై తుప్పు పట్టకుండా జింక్ కోటింగ్ (గాల్వనైజేషన్)', 'బ్యాటరీలలో యానోడ్', 'సన్‌స్క్రీన్ లోషన్లు మరియు జింక్ విటమిన్ మాత్రలు']
    },
    funFact: {
      en: 'Modern US penny coins are not solid copper; they are 97.5% zinc with a thin copper skin!',
      te: 'ఆధునిక US నాణేలు పూర్తిగా రాగితో కాకుండా, 97.5% జింక్‌తో తయారుచేసి పైన పల్చని రాగి పూత పూస్తారు!'
    },
    visual: {
      primaryColor: '#818cf8',
      secondaryColor: '#4f46e5',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/030_zinc.svg',
      glowColor: 'rgba(129, 140, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/30.mp3',
      teAudioPath: '/audio/te/30.mp3',
      phoneticEn: 'ZINGK',
      phoneticTe: 'జింక్'
    }
  },
  {
    atomicNumber: 47,
    symbol: 'Ag',
    name: { en: 'Silver', te: 'వెండి (రజతం)' },
    latinName: 'Argentum',
    atomicWeight: 107.87,
    category: 'transition-metal',
    group: 11,
    period: 5,
    block: 'd',
    electronConfiguration: '[Kr] 4d¹⁰ 5s¹',
    electronShells: [2, 8, 18, 18, 1],
    oxidationStates: '+1',
    electronegativity: 1.93,
    atomicRadius: 165,
    ionizationEnergy: 731,
    density: 10.49,
    meltingPoint: 1234.93,
    boilingPoint: 2435,
    discoveryYear: 'Ancient',
    discoveredBy: 'Known to ancients',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Silver exhibits the highest electrical conductivity, thermal conductivity, and optical reflectivity of all known metals.',
      te: 'వెండి సమస్త లోహాలలోకెల్లా అత్యధిక విద్యుత్ వాహకత, ఉష్ణ వాహకత మరియు కాంతి పరావర్తన సామర్థ్యం కలిగిన లోహం.'
    },
    applications: {
      en: ['Fine jewelry, silverware, and bullion currency', 'Photovoltaic solar cell conductor pastes', 'Medical antimicrobial wound dressings'],
      te: ['ఆభరణాలు మరియు వెండి పూజా పాత్రలు', 'సోలార్ సెల్స్ విద్యుత్ లైన్లు', 'వైద్య రంగంలో యాంటీ బాక్టీరియల్ మందులు']
    },
    funFact: {
      en: 'Silver nanoparticles are woven into athletic socks and clothing to naturally eliminate odor-causing bacteria.',
      te: 'చెమట దుర్వాసన రాకుండా ఉండేందుకు వెండి నానో కణాలను ప్రత్యేక క్రీడా దుస్తులలో ఉపయోగిస్తారు.'
    },
    visual: {
      primaryColor: '#818cf8',
      secondaryColor: '#4f46e5',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/047_silver.svg',
      glowColor: 'rgba(129, 140, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/47.mp3',
      teAudioPath: '/audio/te/47.mp3',
      phoneticEn: 'SIL-vər',
      phoneticTe: 'వెండి'
    }
  },
  {
    atomicNumber: 53,
    symbol: 'I',
    name: { en: 'Iodine', te: 'అయోడిన్' },
    latinName: 'Iodium',
    atomicWeight: 126.90,
    category: 'reactive-nonmetal',
    group: 17,
    period: 5,
    block: 'p',
    electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁵',
    electronShells: [2, 8, 18, 18, 7],
    oxidationStates: '+7, +5, +1, -1',
    electronegativity: 2.66,
    atomicRadius: 115,
    ionizationEnergy: 1008,
    density: 4.933,
    meltingPoint: 386.85,
    boilingPoint: 457.4,
    discoveryYear: 1811,
    discoveredBy: 'Bernard Courtois',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Iodine is a deep violet-black lustrous solid halogen that sublimes into purple vapor and is essential for human thyroid hormone production.',
      te: 'అయోడిన్ ముదురు ఊదా రంగు హాలోజన్. ఇది గొంతులోని థైరాయిడ్ హార్మోన్ల తయారీకి మరియు గాయాల శుద్ధికి అవసరం.'
    },
    applications: {
      en: ['Iodized salt to prevent thyroid goiter', 'Betadine antiseptic for surgery and wound care', 'Starch detection indicator in biology labs'],
      te: ['థైరాయిడ్ గొంతువాపు రాకుండా అయోడైజ్డ్ ఉప్పు', 'గాయాలు మానేందుకు బెటాడిన్ ద్రావణం', 'ఆహారంలో పిండిపదార్థం (స్టార్చ్) గుర్తింపు']
    },
    homeExperiments: [
      {
        id: 'i-exp-1',
        title: {
          en: 'Starch Potato Iodine Color Test',
          te: 'బంగాళాదుంపలో పిండిపదార్థం (స్టార్చ్) గుర్తింపు ప్రయోగం'
        },
        safetyLevel: 'Safe / No Supervision',
        materials: {
          en: ['Raw potato slice / white bread', 'Povidone-iodine solution (Betadine from pharmacy)', 'Dropper & small dish'],
          te: ['బంగాళాదుంప ముక్క లేదా బ్రెడ్', 'మెడికల్ షాప్ అయోడిన్ ద్రావణం (బెటాడిన్)', 'డ్రాపర్']
        },
        steps: {
          en: [
            'Place a slice of raw potato on a plate.',
            'Place 1 drop of brown iodine solution onto the cut surface.',
            'Watch it instantly change into a deep midnight blue/black color as iodine slips into amylose starch helixes!'
          ],
          te: [
            'బంగాళాదుంప ముక్కను ప్లేట్ లో ఉంచండి.',
            'దానిపై 1 చుక్క బ్రౌన్ కలర్ అయోడిన్ ద్రావణం వేయండి.',
            'వెంటనే అది ముదురు నీలం-నలుపు రంగులోకి మారడాన్ని గమనించి పిండిపదార్థం ఉనికిని నిర్ధారించండి!'
          ]
        },
        scientificPrinciple: {
          en: 'Iodine molecules slip inside the helical structure of amylose starch, causing light absorption that appears deep blue-black.',
          te: 'అయోడిన్ అణువులు స్టార్చ్ అణు నిర్మాణంలోకి చేరి ముదురు నీలి రంగును వెలువరిస్తాయి.'
        }
      }
    ],
    funFact: {
      en: 'When heated gently, solid iodine skips the liquid stage and turns directly into glorious royal purple gas (sublimation)!',
      te: 'అయోడిన్ వేడి చేసినప్పుడు ద్రవంగా మారకుండా నేరుగా అందమైన ఊదా రంగు వాయువుగా మారుతుంది (ఉత్పాథనం)!'
    },
    visual: {
      primaryColor: '#38bdf8',
      secondaryColor: '#0284c7',
      materialTexture: 'crystalline',
      imageAssetPath: '/assets/elements/053_iodine.svg',
      glowColor: 'rgba(56, 189, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/53.mp3',
      teAudioPath: '/audio/te/53.mp3',
      phoneticEn: 'EYE-uh-dyne',
      phoneticTe: 'అయోడిన్'
    }
  },
  {
    atomicNumber: 79,
    symbol: 'Au',
    name: { en: 'Gold', te: 'బంగారం (స్వర్ణం / కనకం)' },
    latinName: 'Aurum',
    atomicWeight: 196.97,
    category: 'transition-metal',
    group: 11,
    period: 6,
    block: 'd',
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
    electronShells: [2, 8, 18, 32, 18, 1],
    oxidationStates: '+3, +1',
    electronegativity: 2.54,
    atomicRadius: 174,
    ionizationEnergy: 890,
    density: 19.30,
    meltingPoint: 1337.33,
    boilingPoint: 3243,
    discoveryYear: 'Ancient',
    discoveredBy: 'Known to ancients',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Gold is a noble transition metal celebrated for its unreactive chemical resistance to corrosion, lustrous beauty, and extreme malleability.',
      te: 'బంగారం అత్యంత విలువైన పసుపు రంగు లోహం. ఇది ఎన్నటికీ తుప్పు పట్టదు, మరియు అత్యధిక సాగే గుణం (మాలియబిలిటీ) కలిగి ఉంటుంది.'
    },
    applications: {
      en: ['Luxury jewelry, bullion reserve assets, and coinage', 'Corrosion-proof electrical connectors in smartphones and aerospace', 'Reflective astronaut visor coatings against infrared radiation'],
      te: ['ఆభరణాలు మరియు ప్రపంచ రిజర్వ్ ఆస్తులు', 'స్మార్ట్‌ఫోన్లు మరియు విమానాల్లో తుప్పు పట్టని మైక్రో కనెక్టర్లు', 'అంతరిక్ష వ్యోమగాముల హెల్మెట్లలో సూర్యరశ్మి రక్షణ పొర']
    },
    funFact: {
      en: 'Gold is so malleable that a single gram can be pounded into a thin sheet covering 1 square meter or drawn into a 2-kilometer wire!',
      te: 'కేవలం 1 గ్రాము బంగారాన్ని సాగదీసి 2 కిలోమీటర్ల పొడవైన సన్నని తీగను తయారుచేయవచ్చు!'
    },
    visual: {
      primaryColor: '#818cf8',
      secondaryColor: '#4f46e5',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/079_gold.svg',
      glowColor: 'rgba(129, 140, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/79.mp3',
      teAudioPath: '/audio/te/79.mp3',
      phoneticEn: 'GOHLD',
      phoneticTe: 'బంగారం'
    }
  },
  {
    atomicNumber: 80,
    symbol: 'Hg',
    name: { en: 'Mercury', te: 'పాదరసం (రసం / పారదం)' },
    latinName: 'Hydrargyrum',
    atomicWeight: 200.59,
    category: 'transition-metal',
    group: 12,
    period: 6,
    block: 'd',
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
    electronShells: [2, 8, 18, 32, 18, 2],
    oxidationStates: '+2, +1',
    electronegativity: 2.00,
    atomicRadius: 171,
    ionizationEnergy: 1007,
    density: 13.534,
    meltingPoint: 234.32,
    boilingPoint: 629.88,
    discoveryYear: 'Ancient',
    discoveredBy: 'Known to ancients',
    phaseAtSTP: 'Liquid',
    summary: {
      en: 'Mercury is the only metallic element that is liquid at standard temperature and pressure, also known historically as "quicksilver".',
      te: 'పాదరసం గది ఉష్ణోగ్రత వద్ద ద్రవరూపంలో ఉండే ఏకైక లోహం. దీనిని రసవాదంలో క్విక్‌సిల్వర్ అని పిలిచేవారు.'
    },
    applications: {
      en: ['Traditional precision thermometers and barometers', 'Fluorescent compact lighting tubes', 'Dental amalgam tooth fillings'],
      te: ['ఉష్ణోగ్రత కొలిచే థర్మామీటర్లు మరియు బారోమీటర్లు', 'ఫ్లోరోసెంట్ లైట్లు', 'దంతాల చికిత్సలో ఫిల్లింగ్స్']
    },
    funFact: {
      en: 'A solid iron cannonball or heavy steel brick easily floats on top of liquid mercury because mercury is nearly twice as dense as iron!',
      te: 'ఇనుము ఎంత బరువుగా ఉన్నా అది ద్రవ పాదరసంపై తేలుతుంది, ఎందుకంటే పాదరసం సాంద్రత ఇనుము కంటే రెండింతలు ఎక్కువ!'
    },
    visual: {
      primaryColor: '#818cf8',
      secondaryColor: '#4f46e5',
      materialTexture: 'liquid',
      imageAssetPath: '/assets/elements/080_mercury.svg',
      glowColor: 'rgba(129, 140, 248, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/80.mp3',
      teAudioPath: '/audio/te/80.mp3',
      phoneticEn: 'MUR-kyuh-ree',
      phoneticTe: 'పాదరసం'
    }
  },
  {
    atomicNumber: 92,
    symbol: 'U',
    name: { en: 'Uranium', te: 'యురేనియం' },
    latinName: 'Uranium',
    atomicWeight: 238.03,
    category: 'actinide',
    group: null,
    period: 7,
    block: 'f',
    electronConfiguration: '[Rn] 5f³ 6d¹ 7s²',
    electronShells: [2, 8, 18, 32, 21, 9, 2],
    oxidationStates: '+6, +4',
    electronegativity: 1.38,
    atomicRadius: 175,
    ionizationEnergy: 598,
    density: 19.1,
    meltingPoint: 1405.3,
    boilingPoint: 4404,
    discoveryYear: 1789,
    discoveredBy: 'Martin Heinrich Klaproth',
    phaseAtSTP: 'Solid',
    summary: {
      en: 'Uranium is a weakly radioactive heavy actinide metal that serves as the principal fissile fuel for nuclear power generating stations.',
      te: 'యురేనియం రేడియోధార్మికత కలిగిన భారీ లోహం. అణు విద్యుత్ కేంద్రాలలో విద్యుత్ ఉత్పత్తికి ప్రధాన ఇంధనంగా పనిచేస్తుంది.'
    },
    applications: {
      en: ['Nuclear power generation carbon-free electricity', 'Radioisotope production for cancer therapies', 'High-density kinetic armor penetrators'],
      te: ['అణు విద్యుత్ ఉత్పత్తి', 'క్యాన్సర్ చికిత్సకు ఐసోటోపుల తయారీ', 'రక్షణ రంగంలో ప్రత్యేక కవచాలు']
    },
    funFact: {
      en: 'One uranium fuel pellet the size of a fingertip generates as much electricity as one ton of coal or 149 gallons of oil!',
      te: 'వేలిగోరంత పరిమాణంలో ఉండే ఒక యురేనియం గుళిక దాదాపు 1 టన్ను బొగ్గు ఇచ్చేంత విద్యుత్తును ఉత్పత్తి చేయగలదు!'
    },
    visual: {
      primaryColor: '#ec4899',
      secondaryColor: '#db2777',
      materialTexture: 'metallic',
      imageAssetPath: '/assets/elements/092_uranium.svg',
      glowColor: 'rgba(236, 72, 153, 0.4)'
    },
    audio: {
      enAudioPath: '/audio/en/92.mp3',
      teAudioPath: '/audio/te/92.mp3',
      phoneticEn: 'yoo-RAY-nee-um',
      phoneticTe: 'యురేనియం'
    }
  }
];

// Helper to generate full 118 periodic elements dataset
import { generateFull118Elements } from './elementGenerator';
export const ALL_118_ELEMENTS: ChemicalElement[] = generateFull118Elements(ELEMENTS_DATA);
