import { StudyArticle } from '../types';

export const STUDY_ARTICLES: StudyArticle[] = [
  {
    id: 'periodic-law-fundamentals',
    title: {
      en: 'Modern Periodic Law & Table Architecture',
      te: 'ఆధునిక ఆవర్తన నియమం & పట్టిక నిర్మాణం'
    },
    category: 'Core Fundamentals',
    readTime: '4',
    summary: {
      en: 'Understand how Dmitri Mendeleev and Henry Moseley revolutionized chemistry by organizing elements by atomic number.',
      te: 'మెండలీవ్ మరియు హెన్రీ మోస్లే పరమాణు సంఖ్య ఆధారంగా మూలకాలను అమర్చి రసాయన శాస్త్రాన్ని ఎలా మార్చారో తెలుసుకోండి.'
    },
    sections: [
      {
        heading: {
          en: 'Moseley’s Modern Periodic Law',
          te: 'మోస్లే ఆధునిక ఆవర్తన నియమం'
        },
        content: {
          en: 'The Modern Periodic Law states: "The physical and chemical properties of the elements are periodic functions of their atomic numbers." Unlike early tables organized by atomic weight, using the atomic number (Z, the number of protons in the nucleus) eliminated historical anomalies such as the positioning of Argon before Potassium and Tellurium before Iodine.',
          te: 'ఆధునిక ఆవర్తన నియమం: "మూలకాల భౌతిక, రసాయన ధర్మాలు వాటి పరమాణు సంఖ్యల ఆవర్తన ప్రమేయాలు." పరమాణు భారానికి బదులుగా పరమాణు సంఖ్య (కేంద్రకంలోని ప్రోటాన్ల సంఖ్య) ను ప్రామాణికంగా తీసుకోవడం వల్ల పాత ఆవర్తన పట్టికలలోని లోపాలు తొలగిపోయాయి.'
        },
        keyTakeaways: {
          en: [
            'Atomic Number (Z) = Number of protons in the nucleus = Number of electrons in a neutral atom.',
            '7 horizontal rows are called Periods (representing principal energy levels n=1 to n=7).',
            '18 vertical columns are called Groups or Families (elements in the same group share valence electron configurations and similar chemical behaviors).'
          ],
          te: [
            'పరమాణు సంఖ్య (Z) = కేంద్రకంలోని ప్రోటాన్ల సంఖ్య = తటస్థ పరమాణువులోని ఎలక్ట్రాన్ల సంఖ్య.',
            '7 అడ్డ వరుసలను పీరియడ్లు అంటారు (శక్తి స్థాయిలు n=1 నుండి n=7 వరకు).',
            '18 నిలువు వరుసలను గ్రూపులు అంటారు (ఒకే గ్రూపులోని మూలకాలు ఒకే విధమైన బాహ్య ఎలక్ట్రాన్ విన్యాసాన్ని కలిగి ఉంటాయి).'
          ]
        }
      },
      {
        heading: {
          en: 'The Four Subshell Blocks: s, p, d, f',
          te: 'నాలుగు ఉపకర్పరాల బ్లాకులు: s, p, d, f'
        },
        content: {
          en: 'The layout of the periodic table maps directly to quantum mechanical orbital filling orders (Aufbau principle). The s-block houses Group 1 & 2; the p-block encompasses Groups 13 to 18; the d-block consists of Transition Metals (Groups 3 to 12); and the f-block contains the Lanthanides and Actinides positioned at the bottom to preserve standard grid proportions.',
          te: 'ఆవర్తన పట్టిక నిర్మాణం ఎలక్ట్రాన్ క్వాంటం ఆర్బిటాళ్ల భర్తీ క్రమానికి (ఆఫ్‌బౌ నియమం) ఖచ్చితంగా సరిపోలుతుంది. s-బ్లాక్ (గ్రూప్ 1 & 2), p-బ్లాక్ (గ్రూప్ 13-18), d-బ్లాక్ (పరివర్తన లోహాలు గ్రూప్ 3-12), మరియు f-బ్లాక్ (లాంథనైడ్లు & ఆక్టినైడ్లు).'
        }
      }
    ]
  },
  {
    id: 'periodic-trends-guide',
    title: {
      en: 'Mastering Periodic Trends (Radius, IE, Electronegativity)',
      te: 'ఆవర్తన ధర్మాలు (వ్యాసార్థం, అయనీకరణ శక్తి, విద్యుత్ రుణాత్మకత)'
    },
    category: 'Analytical Trends',
    readTime: '5',
    summary: {
      en: 'Explore the electrodynamic causes behind changes in atomic radius, ionization energy, and electronegativity.',
      te: 'పరమాణు వ్యాసార్థం, అయనీకరణ శక్తి మరియు విద్యుత్ రుణాత్మకత మార్పుల వెనుక ఉన్న శాస్త్రీయ కారణాలను విశ్లేషించండి.'
    },
    sections: [
      {
        heading: {
          en: '1. Atomic Radius (Size of the Electron Cloud)',
          te: '1. పరమాణు వ్యాసార్థం (ఎలక్ట్రాన్ మేఘ పరిమాణం)'
        },
        content: {
          en: 'Across a Period (left to right): Atomic radius decreases. Protons are added to the nucleus, increasing the effective nuclear charge (Z_eff), pulling the outer electrons tighter inward with the same energy level. Down a Group (top to bottom): Atomic radius increases dramatically because a completely new electron energy shell is added with each step down.',
          te: 'పీరియడ్‌లో (ఎడమ నుండి కుడికి): పరమాణు వ్యాసార్థం తగ్గుతుంది, ఎందుకంటే కేంద్రక ఆవేశం పెరిగి ఎలక్ట్రాన్లను లోపలికి లాగుతుంది. గ్రూపులో (పై నుండి కిందికి): కొత్త ఎలక్ట్రాన్ కర్పరాలు చేరడం వల్ల పరమాణు వ్యాసార్థం వేగంగా పెరుగుతుంది.'
        }
      },
      {
        heading: {
          en: '2. Electronegativity & Ionization Energy',
          te: '2. విద్యుత్ రుణాత్మకత & అయనీకరణ శక్తి'
        },
        content: {
          en: 'Electronegativity is an atom\'s relative ability to attract shared bonding electrons. Fluorine is the most electronegative element (3.98 on the Pauling Scale). First Ionization Energy is the energy required to dislodge the highest-energy valence electron from a gaseous atom. Helium holds the highest ionization energy (2,372 kJ/mol).',
          te: 'విద్యుత్ రుణాత్మకత అనేది రసాయన బంధంలోని ఎలక్ట్రాన్ జంటను తనవైపుకు ఆకర్షించుకునే పరమాణు సామర్థ్యం. ఫ్లోరిన్ అత్యధిక విద్యుత్ రుణాత్మకత (3.98) కలిగి ఉంటుంది. మొదటి అయనీకరణ శక్తి హీలియంలో అత్యధికం (2,372 kJ/mol).'
        }
      }
    ]
  },
  {
    id: 'safe-home-chemistry',
    title: {
      en: 'Safe Home Chemistry Experiments & Science Principles',
      te: 'సురక్షితమైన గృహ రసాయన శాస్త్ర ప్రయోగాలు'
    },
    category: 'Practical Experiments',
    readTime: '4',
    summary: {
      en: 'Conduct real hands-on chemistry experiments using safe everyday kitchen ingredients like vinegar, baking soda, and iron-fortified cereal.',
      te: 'వెనిగర్, వంట సోడా, బ్రేక్‌ఫాస్ట్ సిరియల్ వంటి గృహోపకరణాలతో సురక్షితమైన ప్రయోగాలను ఎలా చేయాలో తెలుసుకోండి.'
    },
    sections: [
      {
        heading: {
          en: 'Safety First in Home Chemistry',
          te: 'ప్రయోగాలలో భద్రతా నియమాలు'
        },
        content: {
          en: '1. Always wear protective eye glasses when mixing bubbling liquids.\n2. Work on a wipe-clean tray or sink area.\n3. Never taste or ingest laboratory or chemical mixtures.\n4. Keep small children and pets away from work surfaces.',
          te: '1. రసాయనాలు కలిపేటప్పుడు కంటి రక్షణ కళ్లజోడు ధరించండి.\n2. శుభ్రం చేయడానికి వీలైన ప్రదేశంలో లేదా సింక్ వద్ద ప్రయోగాలు చేయండి.\n3. రసాయన మిశ్రమాలను రుచి చూడవద్దు.\n4. చిన్నపిల్లలను ప్రయోగ స్థలానికి దూరంగా ఉంచండి.'
        }
      },
      {
        heading: {
          en: 'Key Principles of Redox & Acid-Base Reactions',
          te: 'రెడాక్స్ & ఆమ్ల-క్షార చర్యల ముఖ్య సూత్రాలు'
        },
        content: {
          en: 'Acid-base reactions transfer hydrogen protons (H⁺), producing salt and water (or gas). Redox reactions involve the transfer of electrons between an oxidized reducer and a reduced oxidizer, such as copper patina restoration or galvanic battery creation.',
          te: 'ఆమ్ల-క్షార చర్యలలో ప్రోటాన్ల బదిలీ జరుగుతుంది. రెడాక్స్ చర్యలలో ఎలక్ట్రాన్ల బదిలీ జరిగి రంగుల మార్పులు మరియు విద్యుత్ ఉత్పత్తి జరుగుతాయి.'
        }
      }
    ]
  },
  {
    id: 'element-etymology-origins',
    title: {
      en: 'Element Etymology: Greek & Latin Roots and Name Origins',
      te: 'మూలకాల నామకరణ చరిత్ర & గ్రీకు, లాటిన్ మూలాలు'
    },
    category: 'Etymology & History',
    readTime: '6',
    summary: {
      en: 'Discover the fascinating origins of chemical names: Greek roots, Latin descriptors, mythology, celestial planets, and why symbols like Fe, Na, and Au differ from their English names.',
      te: 'రసాయన మూలకాలకు పేర్లు ఎలా వచ్చాయి? గ్రీకు, లాటిన్ మూలాలు, పురాణాలు మరియు Fe, Na, Au వంటి రసాయన సంకేతాల వెనుక ఉన్న ఆసక్తికర చరిత్రను తెలుసుకోండి.'
    },
    sections: [
      {
        heading: {
          en: 'The Six Main Naming Traditions of Elements',
          te: 'మూలకాల నామకరణంలో 6 ప్రధాన పద్ధతులు'
        },
        content: {
          en: 'Every chemical element name tells a unique story rooted in one of six classical traditions:\n1. Greek & Latin Property Roots (Hydrogen = "water-former", Oxygen = "acid-former", Argon = "the idle one", Bromine = "the stench").\n2. Colors & Spectral Lines (Chlorine = pale green, Rubidium = deep red, Caesium = sky-blue, Indium = indigo, Chromium = all colors).\n3. Mythology & Legends (Titanium from the Titans, Vanadium from goddess Vanadís, Thorium from Thor, Tantalum from King Tantalus).\n4. Celestial Bodies & Astronomy (Helium from the Sun, Selenium from the Moon, Tellurium from Earth, Uranium from Uranus, Plutonium from Pluto).\n5. Geographic Places & Toponyms (Gallium from France, Germanium from Germany, Polonium from Poland, and Ytterby village in Sweden giving its name to 4 elements: Y, Tb, Er, Yb).\n6. Famous Scientists (Curium for Marie Curie, Einsteinium for Albert Einstein, Mendelevium for Dmitri Mendeleev).',
          te: 'ఆవర్తన పట్టికలోని ప్రతి మూలకం పేరు వెనుక 6 ప్రధాన సంప్రదాయాలు ఉన్నాయి:\n1. గ్రీకు/లాటిన్ భౌతిక గుణాలు (హైడ్రోజన్ = నీటిని సృష్టించేది, ఆక్సిజన్ = ఆమ్లాలను ఇచ్చేది, ఆర్గాన్ = సోమరి/నిష్క్రియం, బ్రోమిన్ = దుర్వాసన).\n2. రంగులు & వర్ణపట రేఖలు (క్లోరిన్ = పసుపుపచ్చ, రుబీడియం = ముదురు ఎరుపు, సీసియం = ఆకాశ నీలం, ఇండియం = ఇండిగో నీలం, క్రోమియం = రంగుల మూలకం).\n3. పురాణాలు (టైటానియం = టైటాన్ రాక్షసులు, వెనాడియం = అందాల దేవత వనాడిస్, థోరియం = ఉరుముల దేవుడు థోర్).\n4. ఖగోళ గ్రహాలు (హీలియం = సూర్యుడు, సెలీనియం = చంద్రుడు, టెల్లూరియం = భూమి, యురేనియం = యురేనస్, ప్లూటోనియం = ప్లూటో).\n5. భౌగోళిక ప్రదేశాలు (ఫ్రాన్స్, జర్మనీ, పోలాండ్, మరియు స్వీడన్‌లోని ఇట్టర్బీ గ్రామం పేరు మీద ఏకంగా 4 మూలకాలు: Y, Tb, Er, Yb).\n6. శాస్త్రవేత్తలు (మేరీ క్యూరీ, ఐన్‌స్టీన్, మెండలీవ్).'
        },
        keyTakeaways: {
          en: [
            'Hydrogen = hydro (water) + genes (producer) -> "Water-Creator".',
            'Phosphorus = phos (light) + phoros (bringer) -> "Light-Bearer" because it glows in the dark.',
            'Cobalt comes from German "Kobold" (mischievous mine goblin) because miners cursed ores that emitted toxic fumes.',
            'Nickel comes from "Kupfernickel" (Devil’s Copper) because it deceived miners looking for copper.'
          ],
          te: [
            'హైడ్రోజన్ = హైడ్రో (నీరు) + జెనిస్ (ఉత్పత్తిదారు) -> "జలజని".',
            'ఫాస్ఫరస్ = ఫాస్ (కాంతి) + ఫోరోస్ (వాహకం) -> చీకట్లో మెరుస్తుంది కాబట్టి "కాంతి వాహకం".',
            'కోబాల్ట్ = జర్మన్ గనుల దెయ్యం "కోబోల్డ్" పేరు నుండి వచ్చింది.',
            'నికెల్ = రాగిలా మోసం చేసే "దెయ్యం రాగి" (కుప్ఫర్‌నికెల్) నుండి వచ్చింది.'
          ]
        }
      },
      {
        heading: {
          en: 'Why Do Chemical Symbols Differ From English Names?',
          te: 'రసాయన సంకేతాలు ఇంగ్లీష్ పేర్లతో ఎందుకు సరిపోలవు?'
        },
        content: {
          en: 'Eleven elements have symbols derived directly from their classical Latin, Greek, or German names:\n• Na (Sodium) -> Latin "Natrium" (from Egyptian natron soda salt)\n• K (Potassium) -> Latin "Kalium" (from Arabic al-qaly alkali ashes)\n• Fe (Iron) -> Latin "Ferrum" (firmness / iron weapon)\n• Cu (Copper) -> Latin "Cuprum" (from Cyprus island mines)\n• Ag (Silver) -> Latin "Argentum" (bright shining white)\n• Sn (Tin) -> Latin "Stannum" (tin alloy)\n• Sb (Antimony) -> Latin "Stibium" (ancient black eye cosmetic kohl)\n• W (Tungsten) -> German "Wolfram" (tin-devouring wolf froth)\n• Au (Gold) -> Latin "Aurum" (radiant golden sunrise)\n• Hg (Mercury) -> Greek/Latin "Hydrargyrum" (liquid water-silver)\n• Pb (Lead) -> Latin "Plumbum" (lead pipes / origin of "plumber")',
          te: '11 మూలకాల సంకేతాలు వాటి ప్రాచీన లాటిన్, గ్రీకు లేదా జర్మన్ పేర్ల నుండి నేరుగా తీసుకోబడ్డాయి:\n• Na (సోడియం) -> లాటిన్ "నేట్రియం" (Natrium)\n• K (పొటాషియం) -> లాటిన్ "కేలియం" (Kalium - అరబిక్ అల్-ఖలీ)\n• Fe (ఇనుము) -> లాటిన్ "ఫెర్రమ్" (Ferrum)\n• Cu (రాగి) -> లాటిన్ "కుప్రమ్" (Cuprum - సైప్రస్ ద్వీపం)\n• Ag (వెండి) -> లాటిన్ "అర్జెంటమ్" (Argentum - ప్రకాశించే తెలుపు)\n• Sn (తగరం) -> లాటిన్ "స్టాన్నమ్" (Stannum)\n• Sb (యాంటీమోనీ) -> లాటిన్ "స్టిబియం" (Stibium - కాటుక/సుర్మా)\n• W (టంగ్‌స్టన్) -> జర్మన్ "వోల్ఫ్రామ్" (Wolfram)\n• Au (బంగారం) -> లాటిన్ "ఆరమ్" (Aurum - ఉషస్సు వెలుగు)\n• Hg (పాదరసం) -> లాటిన్ "హైడ్రార్జిరమ్" (Hydrargyrum - ద్రవ వెండి)\n• Pb (సీసం) -> లాటిన్ "ప్లంబమ్" (Plumbum - ప్లంబర్ అనే పదం దీని నుంచే వచ్చింది)'
        }
      }
    ]
  }
];
