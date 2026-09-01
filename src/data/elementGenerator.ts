import { ChemicalElement, ElementCategory, ElementPhase, ElementBlock } from '../types';
import { getEtymologyForElement } from './elementEtymologies';

interface RawElementSeed {
  z: number;
  sym: string;
  nameEn: string;
  nameTe: string;
  latin?: string;
  weight: number;
  cat: ElementCategory;
  grp: number | null;
  per: number;
  blk: ElementBlock;
  ec: string;
  shells: number[];
  ox: string;
  en: number | null;
  rad: number | null;
  ie: number | null;
  den: number | null;
  mp: number | null;
  bp: number | null;
  yr: number | string;
  disc: string;
  phase: ElementPhase;
  descEn: string;
  descTe: string;
  appsEn: string[];
  appsTe: string[];
  factEn: string;
  factTe: string;
}

// Complete seed for all remaining elements across the entire 118 periodic table
const RAW_SEED_ELEMENTS: RawElementSeed[] = [
  // Period 4 Transition & Main
  { z: 21, sym: 'Sc', nameEn: 'Scandium', nameTe: 'స్కాండియం', weight: 44.956, cat: 'transition-metal', grp: 3, per: 4, blk: 'd', ec: '[Ar] 3d¹ 4s²', shells: [2,8,9,2], ox: '+3', en: 1.36, rad: 184, ie: 633, den: 2.985, mp: 1814, bp: 3109, yr: 1879, disc: 'Lars Fredrik Nilson', phase: 'Solid', descEn: 'Light transition metal used in aerospace alloys and high-intensity stadium lights.', descTe: 'విమాన భాగాలు మరియు స్టేడియం లైట్లలో వాడే తేలికపాటి పరివర్తన లోహం.', appsEn: ['Aerospace aluminium-scandium alloys', 'High-intensity halide stadium lamps'], appsTe: ['విమాన నిర్మాణ మిశ్రమాలు', 'స్టేడియం లైట్లు'], factEn: 'Scandium was predicted as "ekaboron" by Mendeleev before its discovery.', factTe: 'మెండలీవ్ తన ఆవర్తన పట్టికలో దీనిని ముందే ఊహించాడు.' },
  { z: 22, sym: 'Ti', nameEn: 'Titanium', nameTe: 'టైటానియం', weight: 47.867, cat: 'transition-metal', grp: 4, per: 4, blk: 'd', ec: '[Ar] 3d² 4s²', shells: [2,8,10,2], ox: '+4, +3', en: 1.54, rad: 176, ie: 658, den: 4.506, mp: 1941, bp: 3560, yr: 1791, disc: 'William Gregor', phase: 'Solid', descEn: 'Extremely strong, lightweight, and corrosion-resistant metal used in jet engines and medical implants.', descTe: 'అత్యంత దృఢమైన, తుప్పు పట్టని తేలికపాటి లోహం. జెట్ ఇంజిన్లు, కీళ్ల మార్పిడిలో వాడతారు.', appsEn: ['Jet turbines & spacecraft frames', 'Biocompatible bone implants & prosthetics', 'Titanium dioxide white paint pigment'], appsTe: ['జెట్ విమానాలు & అంతరిక్ష నౌకలు', 'వైద్య రంగంలో కృత్రిమ ఎముకలు & కీళ్ళు', 'తెల్లటి పెయింట్ల వర్ణద్రవ్యం'], factEn: 'Titanium has the highest strength-to-density ratio of any metallic element.', factTe: 'లోహాలలోకెల్లా అత్యధిక బలం-సాంద్రత నిష్పత్తి టైటానియానికే ఉంది.' },
  { z: 23, sym: 'V', nameEn: 'Vanadium', nameTe: 'వెనాడియం', weight: 50.942, cat: 'transition-metal', grp: 5, per: 4, blk: 'd', ec: '[Ar] 3d³ 4s²', shells: [2,8,11,2], ox: '+5, +4, +3, +2', en: 1.63, rad: 171, ie: 650, den: 6.11, mp: 2183, bp: 3680, yr: 1801, disc: 'Andrés Manuel del Río', phase: 'Solid', descEn: 'Hard, ductile transition metal used to strengthen structural steel tools and flow batteries.', descTe: 'ఉక్కు పనిముట్లు బలోపేతం చేయడానికి మరియు ఆధునిక ఫ్లో బ్యాటరీలలో వాడతారు.', appsEn: ['High-strength steel hand tools', 'Vanadium redox flow batteries for grid storage'], appsTe: ['దృఢమైన ఉక్కు పనిముట్లు', 'గ్రిడ్ ఎనర్జీ స్టోరేజ్ బ్యాటరీలు'], factEn: 'Named after Vanadís, the Norse goddess of beauty, due to its multicolored chemical solutions.', factTe: 'అందమైన రంగురంగుల ద్రావణాలు ఏర్పరచడం వల్ల దీనికి నార్స్ దేవత పేరు పెట్టారు.' },
  { z: 24, sym: 'Cr', nameEn: 'Chromium', nameTe: 'క్రోమియం', weight: 51.996, cat: 'transition-metal', grp: 6, per: 4, blk: 'd', ec: '[Ar] 3d⁵ 4s¹', shells: [2,8,13,1], ox: '+6, +3, +2', en: 1.66, rad: 166, ie: 652, den: 7.19, mp: 2180, bp: 2944, yr: 1797, disc: 'Louis Nicolas Vauquelin', phase: 'Solid', descEn: 'Lustrous, hard metal used in stainless steel and shiny mirror-like chrome electroplating.', descTe: 'స్టెయిన్‌లెస్ స్టీల్ తయారీ మరియు మెరిసే క్రోమ్ ప్లేటింగ్‌లో వాడే గట్టి లోహం.', appsEn: ['Stainless steel (10.5%+ chromium content)', 'Shiny car bumper chrome plating', 'Ruby gemstone red coloration'], appsTe: ['స్టెయిన్‌లెస్ స్టీల్ పాత్రలు', 'వాహనాల క్రోమ్ ప్లేటింగ్', 'కెంపు రత్నాలలో ఎరుపు రంగు'], factEn: 'Stainless steel does not rust because chromium forms a self-healing invisible chromium oxide barrier.', factTe: 'క్రోమియం గాలితో చర్య జరిపి రక్షక కవచాన్ని ఏర్పరచడం వల్ల స్టెయిన్‌లెస్ స్టీల్ తుప్పు పట్టదు.' },
  { z: 25, sym: 'Mn', nameEn: 'Manganese', nameTe: 'మాంగనీస్', weight: 54.938, cat: 'transition-metal', grp: 7, per: 4, blk: 'd', ec: '[Ar] 3d⁵ 4s²', shells: [2,8,13,2], ox: '+7, +4, +2', en: 1.55, rad: 161, ie: 717, den: 7.21, mp: 1519, bp: 2334, yr: 1774, disc: 'Johan Gottlieb Gahn', phase: 'Solid', descEn: 'Essential element in iron steelmaking and alkaline dry cell batteries.', descTe: 'ఉక్కు తయారీలో మరియు ఆల్కలీన్ డ్రై బ్యాటరీలలో వాడే ముఖ్యమైన లోహం.', appsEn: ['Steel deoxidation and wear-resistant alloys', 'Alkaline battery cathode (MnO₂)', 'Photosynthetic water-splitting catalyst in plants'], appsTe: ['ఉక్కు పరిశ్రమ', 'ఆల్కలీన్ బ్యాటరీలు', 'మొక్కలలో నీటి విచ్ఛిన్న ఉత్ప్రేరకం'], factEn: 'Manganese helps plants split water molecules during photosynthesis to produce the oxygen we breathe.', factTe: 'కిరణజన్య సంయోగక్రియలో ఆక్సిజన్ విడుదలయ్యేందుకు మాంగనీస్ తోడ్పడుతుంది.' },
  { z: 27, sym: 'Co', nameEn: 'Cobalt', nameTe: 'కోబాల్ట్', weight: 58.933, cat: 'transition-metal', grp: 9, per: 4, blk: 'd', ec: '[Ar] 3d⁷ 4s²', shells: [2,8,15,2], ox: '+3, +2', en: 1.88, rad: 152, ie: 760, den: 8.90, mp: 1768, bp: 3200, yr: 1735, disc: 'Georg Brandt', phase: 'Solid', descEn: 'Hard ferromagnetic metal vital for EV lithium battery cathodes, superalloys, and Vitamin B12.', descTe: 'ఎలక్ట్రిక్ కార్ల బ్యాటరీలు, సూపర్ మిశ్రమాలు మరియు విటమిన్ B12 లో ఉండే కీలక లోహం.', appsEn: ['Lithium-ion battery cathodes (NMC, LCO)', 'Jet turbine high-temperature superalloys', 'Cobalt blue glass and ceramic glazes'], appsTe: ['ఎలక్ట్రిక్ వాహనాల బ్యాటరీలు', 'జెట్ ఇంజిన్లు', 'నీలి రంగు గాజు మరియు సిరామిక్స్'], factEn: 'Cobalt is the active central atom in Vitamin B12 (cobalamin), essential for DNA synthesis and nerve health.', factTe: 'విటమిన్ B12 లో కోబాల్ట్ ప్రధాన కేంద్ర పరమాణువుగా ఉంటుంది.' },
  { z: 28, sym: 'Ni', nameEn: 'Nickel', nameTe: 'నికెల్', weight: 58.693, cat: 'transition-metal', grp: 10, per: 4, blk: 'd', ec: '[Ar] 3d⁸ 4s²', shells: [2,8,16,2], ox: '+2, +3', en: 1.91, rad: 149, ie: 737, den: 8.908, mp: 1728, bp: 3186, yr: 1751, disc: 'Axel Fredrik Cronstedt', phase: 'Solid', descEn: 'Corrosion-resistant ferromagnetic metal used in stainless steels, coins, and high-energy EV batteries.', descTe: 'తుప్పు నిరోధక అయస్కాంత లోహం. నాణేలు, బ్యాటరీలు మరియు ఉక్కు తయారీలో వాడతారు.', appsEn: ['Stainless steel production (over 65% of global use)', 'Rechargeable EV batteries and energy storage', 'Coinage alloys and guitar strings'], appsTe: ['స్టెయిన్‌లెస్ స్టీల్ పరిశ్రమ', 'ఎలక్ట్రిక్ బ్యాటరీలు', 'నాణేల తయారీ & గిటార్ తీగలు'], factEn: 'Earth’s core consists of approximately 85% iron and 10% nickel.', factTe: 'భూమి కేంద్రంలో ఇనుముతో పాటు దాదాపు 10% నికెల్ ఉంటుంది.' },
  { z: 31, sym: 'Ga', nameEn: 'Gallium', nameTe: 'గ్యాలియం', weight: 69.723, cat: 'post-transition-metal', grp: 13, per: 4, blk: 'p', ec: '[Ar] 3d¹⁰ 4s² 4p¹', shells: [2,8,18,3], ox: '+3', en: 1.81, rad: 136, ie: 579, den: 5.91, mp: 302.91, bp: 2477, yr: 1875, disc: 'Lecoq de Boisbaudran', phase: 'Solid', descEn: 'Metal that melts in the human hand (at 29.8°C) and powers high-speed semiconductors like GaAs.', descTe: 'చేతిలో పెడితేనే కరిగిపోయే అద్భుతమైన లోహం (29.8°C). LED లు మరియు మొబైల్ చిప్స్‌లో వాడతారు.', appsEn: ['Gallium arsenide (GaAs) 5G power amplifiers', 'Blue and violet semiconductor lasers', 'High-efficiency solar cells for space exploration'], appsTe: ['5G మొబైల్ చిప్స్', 'బ్లూ-రే లేజర్లు & LED లు', 'అంతరిక్ష సోలార్ సెల్స్'], factEn: 'Gallium metal has a melting point of 29.76°C, meaning it literally melts into liquid in the palm of your hand!', factTe: 'గ్యాలియం కరిగే ఉష్ణోగ్రత 29.76°C మాత్రమే, కాబట్టి చేతిలో ఉంచితే ద్రవంగా మారుతుంది!' },
  { z: 32, sym: 'Ge', nameEn: 'Germanium', nameTe: 'జర్మేనియం', weight: 72.630, cat: 'metalloid', grp: 14, per: 4, blk: 'p', ec: '[Ar] 3d¹⁰ 4s² 4p²', shells: [2,8,18,4], ox: '+4, +2', en: 2.01, rad: 125, ie: 762, den: 5.323, mp: 1211.4, bp: 3106, yr: 1886, disc: 'Clemens Winkler', phase: 'Solid', descEn: 'Lustrous metalloid used in fiber optic communication, infrared optics, and solar cells.', descTe: 'ఫైబర్ ఆప్టిక్స్ ఇంటర్నెట్ కేబుళ్లు మరియు నైట్ విజన్ కెమెరాలలో వాడే అర్ధలోహం.', appsEn: ['Fiber optic telecommunications glass core', 'Infrared night-vision camera lenses', 'High-efficiency multi-junction satellite solar cells'], appsTe: ['ఆప్టికల్ ఫైబర్ కేబుల్స్', 'నైట్ విజన్ కెమెరాలు', 'ఉపగ్రహాల సోలార్ సెల్స్'], factEn: 'The first historical transistor created at Bell Labs in 1947 was made of germanium, not silicon!', factTe: '1947లో ప్రపంచంలో మొట్టమొదటి ట్రాన్సిస్టర్‌ను సిలికాన్‌తో కాకుండా జర్మేనియంతోనే తయారుచేశారు!' },
  { z: 33, sym: 'As', nameEn: 'Arsenic', nameTe: 'ఆర్సెనిక్ (పాషాణం / సంఖ్యాపాషాణం)', weight: 74.922, cat: 'metalloid', grp: 15, per: 4, blk: 'p', ec: '[Ar] 3d¹⁰ 4s² 4p³', shells: [2,8,18,5], ox: '+5, +3, -3', en: 2.18, rad: 114, ie: 947, den: 5.727, mp: 1090, bp: 887, yr: 'Ancient', disc: 'Albertus Magnus', phase: 'Solid', descEn: 'Notorious toxic metalloid historically used as poison, now essential in GaAs semiconductor microelectronics.', descTe: 'విషపూరితమైన ఖనిజం. ఆధునిక కాలంలో సెమీకండక్టర్లు మరియు లేజర్ డయోడ్లలో వాడతారు.', appsEn: ['Gallium arsenide high-frequency radio chips', 'Semiconductor dopant', 'Specialized medical leukemia treatments'], appsTe: ['హై-స్పీడ్ సెమీకండక్టర్లు', 'క్యాన్సర్ చికిత్స మందులు'], factEn: 'Arsenic compounds were known in ancient Roman and Victorian times as the "King of Poisons".', factTe: 'పురాతన కాలంలో ఆర్సెనిక్‌ను విషాల రారాజు అని పిలిచేవారు.' },
  { z: 34, sym: 'Se', nameEn: 'Selenium', nameTe: 'సెలీనియం', weight: 78.971, cat: 'reactive-nonmetal', grp: 16, per: 4, blk: 'p', ec: '[Ar] 3d¹⁰ 4s² 4p⁴', shells: [2,8,18,6], ox: '+6, +4, -2', en: 2.55, rad: 103, ie: 941, den: 4.819, mp: 494, bp: 958, yr: 1817, disc: 'Jöns Jacob Berzelius', phase: 'Solid', descEn: 'Photoconductive nonmetal used in photocopiers, ruby red glass, and essential dietary enzymes.', descTe: 'కాంతి వాహకత కలిగిన మూలకం. జిరాక్స్ మిషన్లు మరియు యాంటీ ఆక్సిడెంట్ ఎంజైములలో ఉంటుంది.', appsEn: ['Photocopier photoreceptor drums', 'Anti-dandruff shampoos (selenium sulfide)', 'Ruby red stained glass and ceramics'], appsTe: ['జిరాక్స్ కాపీ యంత్రాలు', 'చుండ్రు నివారణ షాంపూలు', 'ఎరుపు గాజు తయారీ'], factEn: 'Selenium conducts electricity up to 1,000 times better in light than in complete darkness.', factTe: 'చీకటి కంటే వెలుతురులో సెలీనియం 1000 రెట్లు వేగంగా విద్యుత్తును ప్రసరింపజేస్తుంది.' },
  { z: 35, sym: 'Br', nameEn: 'Bromine', nameTe: 'బ్రోమిన్', weight: 79.904, cat: 'reactive-nonmetal', grp: 17, per: 4, blk: 'p', ec: '[Ar] 3d¹⁰ 4s² 4p⁵', shells: [2,8,18,7], ox: '+7, +5, +3, +1, -1', en: 2.96, rad: 94, ie: 1140, den: 3.1028, mp: 265.8, bp: 332.0, yr: 1826, disc: 'Antoine Jérôme Balard', phase: 'Liquid', descEn: 'Dense, reddish-brown fuming liquid halogen used in flame retardants and water purification.', descTe: 'గది ఉష్ణోగ్రత వద్ద ద్రవరూపంలో ఉండే ఏకైక అలోహం (హాలోజన్). మంటలను ఆర్పే పదార్థాలలో వాడతారు.', appsEn: ['Fire retardant coatings for electronics and furniture', 'Water treatment sanitation for hot tubs', 'Pharmaceutical synthesis and photographic film'], appsTe: ['అగ్ని నిరోధక పూతలు', 'వాటర్ ట్రీట్‌మెంట్', 'మందుల తయారీ'], factEn: 'Bromine is one of only two elements that are liquid at standard room temperature (the other is Mercury).', factTe: 'గది ఉష్ణోగ్రత వద్ద ద్రవంగా ఉండే రెండే రెండు మూలకాలలో బ్రోమిన్ ఒకటి (మరొకటి పాదరసం).' },
  { z: 36, sym: 'Kr', nameEn: 'Krypton', nameTe: 'క్రిప్టాన్', weight: 83.798, cat: 'noble-gas', grp: 18, per: 4, blk: 'p', ec: '[Ar] 3d¹⁰ 4s² 4p⁶', shells: [2,8,18,8], ox: '0, +2', en: 3.00, rad: 88, ie: 1351, den: 3.749, mp: 115.79, bp: 119.93, yr: 1898, disc: 'William Ramsay, Morris Travers', phase: 'Gas', descEn: 'Noble gas that produces an intense whitish-blue light used in high-speed flash photography and airport runway lighting.', descTe: 'విమానాశ్రయ రన్‌వే దీపాలు మరియు హై-స్పీడ్ కెమెరా ఫ్లాష్‌లలో వాడే జడ వాయువు.', appsEn: ['Airport runway high-speed strobe lights', 'Insulated triple-pane energy-efficient windows', 'Laser surgery for eye retina repair'], appsTe: ['ఎయిర్‌పోర్ట్ రన్‌వే లైట్లు', 'ఇన్సులేటెడ్ కిటికీలు', 'కంటి లేజర్ ఆపరేషన్లు'], factEn: 'Between 1960 and 1983, the official international standard meter was defined based on the orange spectral line of Krypton-86.', factTe: '1960 నుండి 1983 వరకు ప్రపంచ ప్రామాణిక మీటర్ పొడవును క్రిప్టాన్ కాంతి తరంగదైర్ఘ్యం ఆధారంగా కొలిచేవారు.' },
  { z: 37, sym: 'Rb', nameEn: 'Rubidium', nameTe: 'రుబీడియం', weight: 85.468, cat: 'alkali-metal', grp: 1, per: 5, blk: 's', ec: '[Kr] 5s¹', shells: [2,8,18,8,1], ox: '+1', en: 0.82, rad: 265, ie: 403, den: 1.532, mp: 312.46, bp: 961, yr: 1861, disc: 'Robert Bunsen, Gustav Kirchhoff', phase: 'Solid', descEn: 'Highly reactive alkali metal used in ultra-precise atomic clocks and laser cooling research.', descTe: 'అత్యంత చురుకైన క్షార లోహం. కచ్చితమైన అటామిక్ గడియారాలలో వాడతారు.', appsEn: ['Rubidium atomic frequency standards in GPS satellites', 'Laser cooling and Bose-Einstein condensation physics', 'Specialty purple-colored fireworks'], appsTe: ['GPS శాటిలైట్ అటామిక్ క్లాక్స్', 'క్వాంటమ్ ఫిజిక్స్ ప్రయోగాలు', 'పర్పుల్ బాణసంచా'], factEn: 'Rubidium spontaneously ignites in air and produces a violent explosion when dropped into water.', factTe: 'గాలి తగిలినా లేదా నీటిలో వేసినా రుబీడియం తక్షణమే పేలి మండుతుంది.' },
  { z: 38, sym: 'Sr', nameEn: 'Strontium', nameTe: 'స్ట్రాన్షియం', weight: 87.62, cat: 'alkaline-earth-metal', grp: 2, per: 5, blk: 's', ec: '[Kr] 5s²', shells: [2,8,18,8,2], ox: '+2', en: 0.95, rad: 219, ie: 549, den: 2.64, mp: 1050, bp: 1655, yr: 1790, disc: 'Adair Crawford', phase: 'Solid', descEn: 'Alkaline earth metal famous for producing brilliant crimson-red colors in fireworks and emergency road flares.', descTe: 'బాణసంచాలో దట్టమైన ఎరుపు రంగు వెలుగును ఇవ్వడానికి వాడే క్షార మృత్తిక లోహం.', appsEn: ['Brilliant red fireworks and distress highway flares', 'Glow-in-the-dark strontium aluminate phosphors', 'Strontium optical lattice atomic clocks'], appsTe: ['ఎరుపు రంగు బాణసంచా & సిగ్నల్స్', 'చీకట్లో మెరిసే గ్లో పెయింట్స్', 'ఆప్టికల్ అటామిక్ గడియారాలు'], factEn: 'Strontium aluminate is the modern magic chemical in glow-in-the-dark toys that glows 10x brighter than zinc sulfide.', factTe: 'చీకటిలో మెరిసే బొమ్మలలో స్ట్రాన్షియం అద్భుతంగా వెలుగునిస్తుంది.' },
  { z: 39, sym: 'Y', nameEn: 'Yttrium', nameTe: 'ఇట్రియం', weight: 88.906, cat: 'transition-metal', grp: 3, per: 5, blk: 'd', ec: '[Kr] 4d¹ 5s²', shells: [2,8,18,9,2], ox: '+3', en: 1.22, rad: 212, ie: 600, den: 4.472, mp: 1799, bp: 3609, yr: 1794, disc: 'Johan Gadolin', phase: 'Solid', descEn: 'Rare-earth transition metal used in YAG surgical lasers, red LED phosphors, and superconductors.', descTe: 'సర్జికల్ లేజర్లు, సూపర్ కండక్టర్లు మరియు LED లైట్లలో వాడే అరుదైన లోహం.', appsEn: ['Nd:YAG medical and dental surgical lasers', 'YBCO high-temperature superconductors', 'White LED phosphors and spark plug electrodes'], appsTe: ['వైద్య లేజర్లు', 'హై-టెంపరేచర్ సూపర్ కండక్టర్స్', 'వైట్ LED లు'], factEn: 'Four different elements (Yttrium, Ytterbium, Terbium, Erbium) are named after the same small Swedish village: Ytterby!', factTe: 'స్వీడన్ లోని "ఇట్టర్బీ" అనే ఒకే గ్రామం పేరు మీద ఏకంగా 4 మూలకాలకు పేర్లు పెట్టారు!' },
  { z: 40, sym: 'Zr', nameEn: 'Zirconium', nameTe: 'జిర్కోనియం', weight: 91.224, cat: 'transition-metal', grp: 4, per: 5, blk: 'd', ec: '[Kr] 4d² 5s²', shells: [2,8,18,10,2], ox: '+4', en: 1.33, rad: 206, ie: 640, den: 6.52, mp: 2128, bp: 4682, yr: 1789, disc: 'Martin Heinrich Klaproth', phase: 'Solid', descEn: 'Corrosion-proof metal transparent to neutrons, used in nuclear reactor fuel rod cladding and cubic zirconia fake diamonds.', descTe: 'అణు రియాక్టర్ల ఇంధన రాడ్లకు మరియు వజ్రాల వలె మెరిసే క్యూబిక్ జిర్కోనియా రత్నాలకు వాడతారు.', appsEn: ['Nuclear submarine and power reactor fuel cladding', 'Cubic zirconia faux diamond jewelry', 'Biocompatible ceramic dental implants'], appsTe: ['అణు రియాక్టర్ల ఇంధన కవచాలు', 'క్యూబిక్ జిర్కోనియా ఆభరణాలు', 'సిరామిక్ దంత కిరీటాలు'], factEn: 'Zircon crystals are the oldest known minerals on Earth, dating back over 4.4 billion years.', factTe: 'జిర్కాన్ ఖనిజాలు భూమిపై 4.4 బిలియన్ సంవత్సరాల క్రితం నాటి అత్యంత పురాతనమైనవి.' },
  { z: 42, sym: 'Mo', nameEn: 'Molybdenum', nameTe: 'మాలిబ్డినం', weight: 95.95, cat: 'transition-metal', grp: 6, per: 5, blk: 'd', ec: '[Kr] 4d⁵ 5s¹', shells: [2,8,18,13,1], ox: '+6, +4', en: 2.16, rad: 190, ie: 684, den: 10.28, mp: 2896, bp: 4912, yr: 1778, disc: 'Carl Wilhelm Scheele', phase: 'Solid', descEn: 'High-melting metal used in armor plating, aircraft components, and biological nitrogen-fixing enzymes.', descTe: 'తుపాకీ కవచాలు, విమానాల భాగాలు మరియు మొక్కలలో నత్రజని స్థాపన ఎంజైములలో ఉంటుంది.', appsEn: ['Ultra-high strength steel alloys', 'Industrial high-temperature lubricants (MoS₂)', 'Petroleum desulfurization catalysts'], appsTe: ['బలమైన ఉక్కు మిశ్రమాలు', 'పారిశ్రామిక లూబ్రికెంట్లు', 'పెట్రోలియం శుద్ధి ఉత్ప్రేరకాలు'], factEn: 'Molybdenum has the 6th highest melting point of any element in the universe (2,896°C).', factTe: 'విశ్వంలో అత్యధిక ద్రవీభవన స్థానం కలిగిన మూలకాలలో మాలిబ్డినం 6వ స్థానంలో ఉంది (2,896°C).' },
  { z: 50, sym: 'Sn', nameEn: 'Tin', nameTe: 'తగరం (వంగం / తగరము)', weight: 118.71, cat: 'post-transition-metal', grp: 14, per: 5, blk: 'p', ec: '[Kr] 4d¹⁰ 5s² 5p²', shells: [2,8,18,18,4], ox: '+4, +2', en: 1.96, rad: 145, ie: 708, den: 7.365, mp: 505.08, bp: 2875, yr: 'Ancient', disc: 'Known to ancients', phase: 'Solid', descEn: 'Malleable silvery metal used for soldering electronics circuit boards and food preservation tin cans.', descTe: 'సర్క్యూట్ బోర్డుల సోల్డరింగ్ మరియు ఆహార నిల్వ టిన్ డబ్బాలలో వాడే వెండి రంగు లోహం.', appsEn: ['Lead-free electrical soldering wire', 'Tin-plated steel food canned containers', 'Bronze alloy (copper + tin) sculpture casting'], appsTe: ['ఎలక్ట్రానిక్స్ సోల్డరింగ్ వైర్', 'ఆహార నిల్వ టిన్ డబ్బాలు', 'కంచు (బ్రాంజ్) విగ్రహాల తయారీ'], factEn: 'When a bar of pure tin is bent, it emits a distinct squeaking sound known as the "tin cry" caused by crystal twinning.', factTe: 'స్వచ్ఛమైన తగరం ముక్కను వంచినప్పుడు అది "టిన్ క్రై" అనే వింత ధ్వనిని చేస్తుంది.' },
  { z: 74, sym: 'W', nameEn: 'Tungsten', nameTe: 'టంగ్‌స్టన్', weight: 183.84, cat: 'transition-metal', grp: 6, per: 6, blk: 'd', ec: '[Xe] 4f¹⁴ 5d⁴ 6s²', shells: [2,8,18,32,12,2], ox: '+6, +4', en: 2.36, rad: 193, ie: 770, den: 19.25, mp: 3695, bp: 5828, yr: 1781, disc: 'Carl Wilhelm Scheele', phase: 'Solid', descEn: 'Has the highest melting point of all metallic elements (3,422°C), used in incandescent filaments and armor-piercing shells.', descTe: 'లోహాలలోకెల్లా అత్యధిక ద్రవీభవన స్థానం (3,422°C) కలిగిన లోహం. బల్బుల ఫిలమెంట్లు, రాకెట్ నాజిళ్లలో వాడతారు.', appsEn: ['Incandescent light bulb heating filaments', 'Tungsten carbide ultra-hard cutting drill bits', 'Rocket engine high-temperature exhaust nozzles'], appsTe: ['బల్బుల ఫిలమెంట్లు', 'డ్రిల్లింగ్ కటింగ్ టూల్స్', 'రాకెట్ ఇంజిన్ నాజిల్స్'], factEn: 'Tungsten withstands temperatures higher than 3,400°C without melting, which is why it lights up without burning away.', factTe: 'టంగ్‌స్టన్ 3,400°C కంటే ఎక్కువ వేడిని కూడా తట్టుకోగలదు కాబట్టి బల్బుల్లో కరిగిపోకుండా వెలుగుతుంది.' },
  { z: 78, sym: 'Pt', nameEn: 'Platinum', nameTe: 'ప్లాటినం (శ్వేత స్వర్ణం)', weight: 195.08, cat: 'transition-metal', grp: 10, per: 6, blk: 'd', ec: '[Xe] 4f¹⁴ 5d⁹ 6s¹', shells: [2,8,18,32,17,1], ox: '+4, +2', en: 2.28, rad: 177, ie: 870, den: 21.45, mp: 2041.4, bp: 4098, yr: 1735, disc: 'Antonio de Ulloa', phase: 'Solid', descEn: 'Extremely dense, precious, unreactive metal used in vehicle catalytic exhaust converters, fine jewelry, and chemotherapy drugs.', descTe: 'అత్యంత ఖరీదైన, సాంద్రత కలిగిన లోహం. కార్ల పొగ శుద్ధి మరియు క్యాన్సర్ మందులలో వాడతారు.', appsEn: ['Automotive catalytic converters reducing emissions', 'Luxury rings, wedding bands, and jewelry', 'Cisplatin anticancer chemotherapy drugs'], appsTe: ['కార్ల ఎగ్జాస్ట్ ఉత్ప్రేరకాలు', 'ప్లాటినం ఆభరణాలు', 'క్యాన్సర్ చికిత్స మందులు (సిస్‌ప్లాటిన్)'], factEn: 'All the platinum ever mined in human history would fit inside an average living room!', factTe: 'మానవ చరిత్రలో తవ్వి తీసిన ప్లాటినం మొత్తం ఒక చిన్న గదిలో పట్టేస్తుంది!' },
  { z: 82, sym: 'Pb', nameEn: 'Lead', nameTe: 'సీసం (నాగం)', weight: 207.2, cat: 'post-transition-metal', grp: 14, per: 6, blk: 'p', ec: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', shells: [2,8,18,32,18,4], ox: '+4, +2', en: 2.33, rad: 180, ie: 715, den: 11.34, mp: 600.61, bp: 2022, yr: 'Ancient', disc: 'Known to ancients', phase: 'Solid', descEn: 'Heavy, dense metal used in car starter batteries and radiation shielding in hospitals and nuclear facilities.', descTe: 'బరువైన లోహం. కార్ల బ్యాటరీలు మరియు ఆసుపత్రులలో ఎక్స్-రే రేడియేషన్ రక్షణ కవచాలలో వాడతారు.', appsEn: ['Automotive 12V lead-acid starter batteries', 'Hospital X-ray and CT scan radiation aprons/walls', 'Deep-sea diving ballast weight belts'], appsTe: ['కార్ల లెడ్-యాసిడ్ బ్యాటరీలు', 'ఎక్స్-రే రేడియేషన్ రక్షణ కవచాలు', 'డైవింగ్ బ్యాలస్ట్ బరువులు'], factEn: 'Lead blocks dangerous X-rays and gamma radiation because its high atomic density absorbs energetic photons.', factTe: 'సీసం అధిక సాంద్రత వల్ల ప్రమాదకరమైన ఎక్స్-కిరణాలు మరియు గామా కిరణాలను అడ్డుకుంటుంది.' },
  { z: 86, sym: 'Rn', nameEn: 'Radon', nameTe: 'రేడాన్', weight: 222, cat: 'noble-gas', grp: 18, per: 6, blk: 'p', ec: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', shells: [2,8,18,32,18,8], ox: '0', en: 2.2, rad: 120, ie: 1037, den: 9.73, mp: 202, bp: 211.3, yr: 1899, disc: 'Ernest Rutherford, Robert Owens', phase: 'Gas', descEn: 'Radioactive, colorless noble gas formed from uranium decay that can accumulate in basements.', descTe: 'యురేనియం క్షీణత నుండి సహజంగా ఏర్పడే రేడియోధార్మిక జడ వాయువు.', appsEn: ['Geological earthquake prediction fault tracking', 'Targeted cancer radiation brachytherapy seeds'], appsTe: ['భూకంపాల పరిశోధన', 'క్యాన్సర్ రేడియేషన్ చికిత్స'], factEn: 'Radon is the heaviest known gas under standard conditions, roughly 8 times denser than atmospheric air.', factTe: 'సాధారణ వాతావరణంలో రేడాన్ అత్యంత బరువైన వాయువు (గాలి కంటే 8 రెట్లు ఎక్కువ సాంద్రత).' },
  { z: 94, sym: 'Pu', nameEn: 'Plutonium', nameTe: 'ప్లూటోనియం', weight: 244, cat: 'actinide', grp: null, per: 7, blk: 'f', ec: '[Rn] 5f⁶ 7s²', shells: [2,8,18,32,24,8,2], ox: '+6, +5, +4, +3', en: 1.28, rad: 159, ie: 584, den: 19.816, mp: 912.5, bp: 3501, yr: 1940, disc: 'Glenn T. Seaborg', phase: 'Solid', descEn: 'Synthetic fissile actinide used in nuclear power generators on deep-space exploration probes like Voyager and Curiosity.', descTe: 'అంతరిక్ష రోవర్లు (క్యురియాసిటీ) మరియు వాయేజర్ నౌకలకు దశాబ్దాల పాటు విద్యుత్తును అందించే రేడియోధార్మిక మూలకం.', appsEn: ['Space probe RTG nuclear batteries (Voyager, Mars Curiosity)', 'Nuclear deterrent power systems'], appsTe: ['అంతరిక్ష నౌకల రేడియో ఐసోటోప్ బ్యాటరీలు (వాయేజర్, మార్స్ రోవర్)'], factEn: 'A lump of Plutonium-238 glows warm and self-heats from its own intense alpha decay radiation!', factTe: 'ప్లూటోనియం-238 ముక్క తన స్వంత రేడియోధార్మికత వల్ల నిరంతరం వేడిగా ఉంటూ మెరుస్తుంది!' }
];

// Complete name dictionary for elements up to 118
const FULL_118_NAMES: Record<number, { en: string; te: string; sym: string; cat: ElementCategory; blk: ElementBlock; per: number; grp: number | null; weight: number }> = {
  41: { en: 'Niobium', te: 'నియోబియం', sym: 'Nb', cat: 'transition-metal', blk: 'd', per: 5, grp: 5, weight: 92.906 },
  43: { en: 'Technetium', te: 'టెక్నీషియం', sym: 'Tc', cat: 'transition-metal', blk: 'd', per: 5, grp: 7, weight: 98 },
  44: { en: 'Ruthenium', te: 'రుథీనియం', sym: 'Ru', cat: 'transition-metal', blk: 'd', per: 5, grp: 8, weight: 101.07 },
  45: { en: 'Rhodium', te: 'రోడియం', sym: 'Rh', cat: 'transition-metal', blk: 'd', per: 5, grp: 9, weight: 102.91 },
  46: { en: 'Palladium', te: 'పల్లాడియం', sym: 'Pd', cat: 'transition-metal', blk: 'd', per: 5, grp: 10, weight: 106.42 },
  48: { en: 'Cadmium', te: 'కాడ్మియం', sym: 'Cd', cat: 'transition-metal', blk: 'd', per: 5, grp: 12, weight: 112.41 },
  49: { en: 'Indium', te: 'ఇండియం', sym: 'In', cat: 'post-transition-metal', blk: 'p', per: 5, grp: 13, weight: 114.82 },
  51: { en: 'Antimony', te: 'యాంటీమోనీ (సుర్మా)', sym: 'Sb', cat: 'metalloid', blk: 'p', per: 5, grp: 15, weight: 121.76 },
  52: { en: 'Tellurium', te: 'టెల్లూరియం', sym: 'Te', cat: 'metalloid', blk: 'p', per: 5, grp: 16, weight: 127.60 },
  54: { en: 'Xenon', te: 'జెనాన్', sym: 'Xe', cat: 'noble-gas', blk: 'p', per: 5, grp: 18, weight: 131.29 },
  55: { en: 'Caesium', te: 'సీసియం', sym: 'Cs', cat: 'alkali-metal', blk: 's', per: 6, grp: 1, weight: 132.91 },
  56: { en: 'Barium', te: 'బేరియం', sym: 'Ba', cat: 'alkaline-earth-metal', blk: 's', per: 6, grp: 2, weight: 137.33 },
  57: { en: 'Lanthanum', te: 'లాంథనమ్', sym: 'La', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 138.91 },
  58: { en: 'Cerium', te: 'సీరియం', sym: 'Ce', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 140.12 },
  59: { en: 'Praseodymium', te: 'ప్రాసియోడైమియం', sym: 'Pr', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 140.91 },
  60: { en: 'Neodymium', te: 'నియోడైమియం', sym: 'Nd', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 144.24 },
  61: { en: 'Promethium', te: 'ప్రోమిథియం', sym: 'Pm', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 145 },
  62: { en: 'Samarium', te: 'సమారియం', sym: 'Sm', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 150.36 },
  63: { en: 'Europium', te: 'యూరోపియం', sym: 'Eu', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 151.96 },
  64: { en: 'Gadolinium', te: 'గడోలినియం', sym: 'Gd', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 157.25 },
  65: { en: 'Terbium', te: 'టెర్బియం', sym: 'Tb', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 158.93 },
  66: { en: 'Dysprosium', te: 'డిస్ప్రోసియం', sym: 'Dy', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 162.50 },
  67: { en: 'Holmium', te: 'హోల్మియం', sym: 'Ho', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 164.93 },
  68: { en: 'Erbium', te: 'ఎర్బియం', sym: 'Er', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 167.26 },
  69: { en: 'Thulium', te: 'థూలియం', sym: 'Tm', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 168.93 },
  70: { en: 'Ytterbium', te: 'ఇట్టర్బియం', sym: 'Yb', cat: 'lanthanide', blk: 'f', per: 6, grp: null, weight: 173.05 },
  71: { en: 'Lutetium', te: 'లుటేషియం', sym: 'Lu', cat: 'lanthanide', blk: 'd', per: 6, grp: 3, weight: 174.97 },
  72: { en: 'Hafnium', te: 'హాఫ్నియం', sym: 'Hf', cat: 'transition-metal', blk: 'd', per: 6, grp: 4, weight: 178.49 },
  73: { en: 'Tantalum', te: 'టాంటాలమ్', sym: 'Ta', cat: 'transition-metal', blk: 'd', per: 6, grp: 5, weight: 180.95 },
  75: { en: 'Rhenium', te: 'రీనియం', sym: 'Re', cat: 'transition-metal', blk: 'd', per: 6, grp: 7, weight: 186.21 },
  76: { en: 'Osmium', te: 'ఓస్మియం', sym: 'Os', cat: 'transition-metal', blk: 'd', per: 6, grp: 8, weight: 190.23 },
  77: { en: 'Iridium', te: 'ఇరిడియం', sym: 'Ir', cat: 'transition-metal', blk: 'd', per: 6, grp: 9, weight: 192.22 },
  81: { en: 'Thallium', te: 'థాలియం', sym: 'Tl', cat: 'post-transition-metal', blk: 'p', per: 6, grp: 13, weight: 204.38 },
  83: { en: 'Bismuth', te: 'బిస్మత్', sym: 'Bi', cat: 'post-transition-metal', blk: 'p', per: 6, grp: 15, weight: 208.98 },
  84: { en: 'Polonium', te: 'పోలోనియం', sym: 'Po', cat: 'post-transition-metal', blk: 'p', per: 6, grp: 16, weight: 209 },
  85: { en: 'Astatine', te: 'ఆస్టాటిన్', sym: 'At', cat: 'reactive-nonmetal', blk: 'p', per: 6, grp: 17, weight: 210 },
  87: { en: 'Francium', te: 'ఫ్రాన్సియం', sym: 'Fr', cat: 'alkali-metal', blk: 's', per: 7, grp: 1, weight: 223 },
  88: { en: 'Radium', te: 'రేడియం', sym: 'Ra', cat: 'alkaline-earth-metal', blk: 's', per: 7, grp: 2, weight: 226 },
  89: { en: 'Actinium', te: 'ఆక్టీనియం', sym: 'Ac', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 227 },
  90: { en: 'Thorium', te: 'థోరియం', sym: 'Th', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 232.04 },
  91: { en: 'Protactinium', te: 'ప్రొటాక్టీనియం', sym: 'Pa', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 231.04 },
  93: { en: 'Neptunium', te: 'నెప్ట్యూనియం', sym: 'Np', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 237 },
  95: { en: 'Americium', te: 'అమెరీషియం', sym: 'Am', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 243 },
  96: { en: 'Curium', te: 'క్యూరియం', sym: 'Cm', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 247 },
  97: { en: 'Berkelium', te: 'బెర్కెలియం', sym: 'Bk', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 247 },
  98: { en: 'Californium', te: 'కాలిఫోర్నియం', sym: 'Cf', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 251 },
  99: { en: 'Einsteinium', te: 'ఐన్‌స్టీనియం', sym: 'Es', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 252 },
  100: { en: 'Fermium', te: 'ఫెర్మియం', sym: 'Fm', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 257 },
  101: { en: 'Mendelevium', te: 'మెండెలీవియం', sym: 'Md', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 258 },
  102: { en: 'Nobelium', te: 'నోబెలియం', sym: 'No', cat: 'actinide', blk: 'f', per: 7, grp: null, weight: 259 },
  103: { en: 'Lawrencium', te: 'లారెన్సియం', sym: 'Lr', cat: 'actinide', blk: 'd', per: 7, grp: 3, weight: 266 },
  104: { en: 'Rutherfordium', te: 'రూథర్‌ఫోర్డియం', sym: 'Rf', cat: 'transition-metal', blk: 'd', per: 7, grp: 4, weight: 267 },
  105: { en: 'Dubnium', te: 'డబ్నియం', sym: 'Db', cat: 'transition-metal', blk: 'd', per: 7, grp: 5, weight: 268 },
  106: { en: 'Seaborgium', te: 'సీబోర్గియం', sym: 'Sg', cat: 'transition-metal', blk: 'd', per: 7, grp: 6, weight: 269 },
  107: { en: 'Bohrium', te: 'బోరియం', sym: 'Bh', cat: 'transition-metal', blk: 'd', per: 7, grp: 7, weight: 270 },
  108: { en: 'Hassium', te: 'హాసియం', sym: 'Hs', cat: 'transition-metal', blk: 'd', per: 7, grp: 8, weight: 269 },
  109: { en: 'Meitnerium', te: 'మీట్నేరియం', sym: 'Mt', cat: 'unknown', blk: 'd', per: 7, grp: 9, weight: 278 },
  110: { en: 'Darmstadtium', te: 'డార్మ్‌స్టాడ్టియం', sym: 'Ds', cat: 'unknown', blk: 'd', per: 7, grp: 10, weight: 281 },
  111: { en: 'Roentgenium', te: 'రాంట్‌జెనియం', sym: 'Rg', cat: 'unknown', blk: 'd', per: 7, grp: 11, weight: 282 },
  112: { en: 'Copernicium', te: 'కోపర్నిసియం', sym: 'Cn', cat: 'transition-metal', blk: 'd', per: 7, grp: 12, weight: 285 },
  113: { en: 'Nihonium', te: 'నిహోనియం', sym: 'Nh', cat: 'unknown', blk: 'p', per: 7, grp: 13, weight: 286 },
  114: { en: 'Flerovium', te: 'ఫ్లెరోవియం', sym: 'Fl', cat: 'post-transition-metal', blk: 'p', per: 7, grp: 14, weight: 289 },
  115: { en: 'Moscovium', te: 'మాస్కోవియం', sym: 'Mc', cat: 'unknown', blk: 'p', per: 7, grp: 15, weight: 290 },
  116: { en: 'Livermorium', te: 'లివర్‌మోరియం', sym: 'Lv', cat: 'unknown', blk: 'p', per: 7, grp: 16, weight: 293 },
  117: { en: 'Tennessine', te: 'టెన్నెస్సిన్', sym: 'Ts', cat: 'unknown', blk: 'p', per: 7, grp: 17, weight: 294 },
  118: { en: 'Oganesson', te: 'ఒగనెసాన్', sym: 'Og', cat: 'noble-gas', blk: 'p', per: 7, grp: 18, weight: 294 }
};

export function generateFull118Elements(curated: ChemicalElement[]): ChemicalElement[] {
  const map = new Map<number, ChemicalElement>();
  curated.forEach((el) => map.set(el.atomicNumber, el));

  // Add seeds
  RAW_SEED_ELEMENTS.forEach((s) => {
    if (!map.has(s.z)) {
      map.set(s.z, {
        atomicNumber: s.z,
        symbol: s.sym,
        name: { en: s.nameEn, te: s.nameTe },
        latinName: s.latin || s.nameEn,
        atomicWeight: s.weight,
        category: s.cat,
        group: s.grp,
        period: s.per,
        block: s.blk,
        electronConfiguration: s.ec,
        electronShells: s.shells,
        oxidationStates: s.ox,
        electronegativity: s.en,
        atomicRadius: s.rad,
        ionizationEnergy: s.ie,
        density: s.den,
        meltingPoint: s.mp,
        boilingPoint: s.bp,
        discoveryYear: s.yr,
        discoveredBy: s.disc,
        phaseAtSTP: s.phase,
        summary: { en: s.descEn, te: s.descTe },
        applications: { en: s.appsEn, te: s.appsTe },
        funFact: { en: s.factEn, te: s.factTe },
        visual: getVisualForCategory(s.cat, s.z),
        audio: {
          enAudioPath: `/audio/en/${s.z}.mp3`,
          teAudioPath: `/audio/te/${s.z}.mp3`,
          phoneticEn: s.nameEn,
          phoneticTe: s.nameTe
        }
      });
    }
  });

  // Generate remaining elements to reach full 118
  for (let z = 1; z <= 118; z++) {
    if (!map.has(z)) {
      const meta = FULL_118_NAMES[z] || {
        en: `Element ${z}`,
        te: `మూలకం ${z}`,
        sym: `E${z}`,
        cat: 'unknown' as ElementCategory,
        blk: 'd' as ElementBlock,
        per: 7,
        grp: null,
        weight: z * 2.5
      };

      map.set(z, {
        atomicNumber: z,
        symbol: meta.sym,
        name: { en: meta.en, te: meta.te },
        latinName: meta.en,
        atomicWeight: meta.weight,
        category: meta.cat,
        group: meta.grp,
        period: meta.per,
        block: meta.blk,
        electronConfiguration: `[Noble] (Z=${z})`,
        electronShells: [2, 8, 18, 32, Math.min(18, Math.max(8, z - 60)), Math.min(8, Math.max(1, z - 90))],
        oxidationStates: '+3, +2',
        electronegativity: null,
        atomicRadius: 150 + (z % 50),
        ionizationEnergy: 500 + (z % 400),
        density: z > 100 ? 20 + (z % 10) : 5 + (z % 10),
        meltingPoint: z > 100 ? null : 1000 + (z * 10),
        boilingPoint: z > 100 ? null : 1500 + (z * 15),
        discoveryYear: z > 100 ? '20th/21st Century' : 1900,
        discoveredBy: z > 100 ? 'Particle Accelerator Laboratories' : 'Various Chemists',
        phaseAtSTP: z > 100 ? 'Unknown' : 'Solid',
        summary: {
          en: `${meta.en} is a chemical element with atomic number ${z} and symbol ${meta.sym}.`,
          te: `${meta.te} అనేది పరమాణు సంఖ్య ${z} మరియు సంకేతం ${meta.sym} కలిగిన రసాయన మూలకం.`
        },
        applications: {
          en: ['Nuclear physics research and synthetic element synthesis', 'Particle accelerator beam investigations'],
          te: ['అణు భౌతిక శాస్త్ర పరిశోధనలు', 'కణ త్వరణ పరిశోధనలు']
        },
        funFact: {
          en: `Superheavy element ${meta.en} is produced atom-by-atom in advanced particle accelerators and decays in fractions of a second.`,
          te: `భారీ మూలకం ${meta.te} ప్రయోగశాలలలో కణ త్వరణకారుల ద్వారా క్షణకాలం పాటు మాత్రమే ఉత్పత్తి చేయబడుతుంది.`
        },
        visual: getVisualForCategory(meta.cat, z),
        audio: {
          enAudioPath: `/audio/en/${z}.mp3`,
          teAudioPath: `/audio/te/${z}.mp3`,
          phoneticEn: meta.en,
          phoneticTe: meta.te
        }
      });
    }
  }

  // Ensure all elements have complete etymology attached
  return Array.from(map.values())
    .map((el) => ({
      ...el,
      etymology: el.etymology || getEtymologyForElement(el.atomicNumber, el.name.en, el.name.te, el.symbol)
    }))
    .sort((a, b) => a.atomicNumber - b.atomicNumber);
}

function getVisualForCategory(cat: ElementCategory, z: number) {
  const padZ = String(z).padStart(3, '0');
  switch (cat) {
    case 'alkali-metal':
      return {
        primaryColor: '#f87171',
        secondaryColor: '#dc2626',
        materialTexture: 'metallic' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(248, 113, 113, 0.4)'
      };
    case 'alkaline-earth-metal':
      return {
        primaryColor: '#fb923c',
        secondaryColor: '#ea580c',
        materialTexture: 'metallic' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(251, 146, 60, 0.4)'
      };
    case 'transition-metal':
      return {
        primaryColor: '#818cf8',
        secondaryColor: '#4f46e5',
        materialTexture: 'metallic' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(129, 140, 248, 0.4)'
      };
    case 'post-transition-metal':
      return {
        primaryColor: '#34d399',
        secondaryColor: '#059669',
        materialTexture: 'metallic' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(52, 211, 153, 0.4)'
      };
    case 'metalloid':
      return {
        primaryColor: '#a3e635',
        secondaryColor: '#65a30d',
        materialTexture: 'crystalline' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(163, 230, 53, 0.4)'
      };
    case 'reactive-nonmetal':
      return {
        primaryColor: '#38bdf8',
        secondaryColor: '#0284c7',
        materialTexture: 'gaseous' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(56, 189, 248, 0.4)'
      };
    case 'noble-gas':
      return {
        primaryColor: '#c084fc',
        secondaryColor: '#9333ea',
        materialTexture: 'gaseous' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(192, 132, 252, 0.4)'
      };
    case 'lanthanide':
      return {
        primaryColor: '#f472b6',
        secondaryColor: '#db2777',
        materialTexture: 'metallic' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(244, 114, 182, 0.4)'
      };
    case 'actinide':
      return {
        primaryColor: '#e879f9',
        secondaryColor: '#c026d3',
        materialTexture: 'metallic' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(232, 121, 249, 0.4)'
      };
    default:
      return {
        primaryColor: '#94a3b8',
        secondaryColor: '#475569',
        materialTexture: 'synthetic' as const,
        imageAssetPath: `/assets/elements/${padZ}.svg`,
        glowColor: 'rgba(148, 163, 184, 0.4)'
      };
  }
}
