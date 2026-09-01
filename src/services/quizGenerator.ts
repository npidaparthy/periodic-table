import { ChemicalElement, QuizDifficulty, QuizType, QuizQuestion } from '../types';

export function generateQuizQuestions(
  elements: ChemicalElement[],
  quizType: QuizType,
  difficulty: QuizDifficulty,
  count = 10
): QuizQuestion[] {
  // Pool elements based on difficulty
  let pool = elements;
  if (difficulty === 'beginner') {
    // Common first 30 elements + precious metals
    pool = elements.filter((el) => el.atomicNumber <= 30 || [47, 79, 80, 82, 92].includes(el.atomicNumber));
  } else if (difficulty === 'intermediate') {
    pool = elements.filter((el) => el.atomicNumber <= 86);
  }

  // Shuffle pool
  const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
  const selectedElements = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  return selectedElements.map((el, idx) => {
    let effectiveType = quizType;
    if (quizType === 'mixed') {
      const types: QuizType[] = ['symbol-to-name', 'name-to-symbol', 'atomic-number', 'atomic-weight', 'category', 'etymology'];
      effectiveType = types[Math.floor(Math.random() * types.length)];
    }

    return createSingleQuestion(`q-${idx}-${el.atomicNumber}`, effectiveType, el, elements);
  });
}

function createSingleQuestion(
  id: string,
  type: QuizType,
  target: ChemicalElement,
  allElements: ChemicalElement[]
): QuizQuestion {
  // Pick 3 random distractor elements
  const distractors = allElements
    .filter((e) => e.atomicNumber !== target.atomicNumber)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const choicesPool = [target, ...distractors].sort(() => Math.random() - 0.5);

  switch (type) {
    case 'symbol-to-name': {
      return {
        id,
        type,
        element: target,
        prompt: {
          en: `Which chemical element is represented by the atomic symbol "${target.symbol}"?`,
          te: `"${target.symbol}" అనే రసాయన సంకేతం ఏ మూలకాన్ని సూచిస్తుంది?`
        },
        options: choicesPool.map((c) => ({
          id: `opt-${c.atomicNumber}`,
          text: {
            en: c.name.en,
            te: c.name.te
          },
          isCorrect: c.atomicNumber === target.atomicNumber
        })),
        explanation: {
          en: `The symbol "${target.symbol}" stands for ${target.name.en} (Atomic Number: ${target.atomicNumber}, Category: ${target.category}).`,
          te: `"${target.symbol}" అనేది ${target.name.te} యొక్క రసాయన సంకేతం (పరమాణు సంఖ్య: ${target.atomicNumber}).`
        }
      };
    }

    case 'name-to-symbol': {
      return {
        id,
        type,
        element: target,
        prompt: {
          en: `What is the chemical symbol for the element "${target.name.en}"?`,
          te: `"${target.name.te}" మూలకం యొక్క రసాయన సంకేతం ఏమిటి?`
        },
        options: choicesPool.map((c) => ({
          id: `opt-${c.atomicNumber}`,
          text: {
            en: c.symbol,
            te: c.symbol
          },
          isCorrect: c.atomicNumber === target.atomicNumber
        })),
        explanation: {
          en: `${target.name.en} has the chemical symbol "${target.symbol}". Its atomic weight is ${target.atomicWeight}.`,
          te: `${target.name.te} సంకేతం "${target.symbol}". దీని పరమాణు భారం ${target.atomicWeight}.`
        }
      };
    }

    case 'atomic-number': {
      return {
        id,
        type,
        element: target,
        prompt: {
          en: `What is the Atomic Number (Z) of ${target.name.en} (${target.symbol})?`,
          te: `${target.name.te} (${target.symbol}) యొక్క పరమాణు సంఖ్య (Atomic Number) ఎంత?`
        },
        options: choicesPool.map((c) => ({
          id: `opt-${c.atomicNumber}`,
          text: {
            en: `Z = ${c.atomicNumber}`,
            te: `Z = ${c.atomicNumber}`
          },
          isCorrect: c.atomicNumber === target.atomicNumber
        })),
        explanation: {
          en: `${target.name.en} has ${target.atomicNumber} protons in its nucleus, making its atomic number Z = ${target.atomicNumber}.`,
          te: `${target.name.te} కేంద్రకంలో ${target.atomicNumber} ప్రోటాన్లు ఉంటాయి, కావున దీని పరమాణు సంఖ్య Z = ${target.atomicNumber}.`
        }
      };
    }

    case 'atomic-weight': {
      // Create weight options
      const fakeWeights = [
        target.atomicWeight,
        Number((target.atomicWeight * 1.35).toFixed(2)),
        Number((target.atomicWeight * 0.72).toFixed(2)),
        Number((target.atomicWeight + (target.atomicNumber % 2 === 0 ? 14.5 : -12.3)).toFixed(2))
      ].sort(() => Math.random() - 0.5);

      return {
        id,
        type,
        element: target,
        prompt: {
          en: `What is the approximate standard atomic weight of ${target.name.en} (${target.symbol})?`,
          te: `${target.name.te} (${target.symbol}) యొక్క సుమారు ప్రామాణిక పరమాణు భారం ఎంత?`
        },
        options: fakeWeights.map((w, i) => ({
          id: `opt-w-${i}`,
          text: {
            en: `${w} u (atomic mass units)`,
            te: `${w} u (యూనిట్లు)`
          },
          isCorrect: w === target.atomicWeight
        })),
        explanation: {
          en: `The standard atomic weight of ${target.name.en} is ${target.atomicWeight} u.`,
          te: `${target.name.te} యొక్క ప్రామాణిక పరమాణు భారం ${target.atomicWeight} u.`
        }
      };
    }

    case 'etymology': {
      const etym = target.etymology;
      const rootStr = etym?.rootWord || target.name.en;
      const meaningEn = etym?.literalMeaning.en || target.name.en;
      const meaningTe = etym?.literalMeaning.te || target.name.te;

      return {
        id,
        type,
        element: target,
        prompt: {
          en: `Which element gets its name from "${rootStr}" meaning "${meaningEn}"?`,
          te: `"${rootStr}" (అర్థం: "${meaningTe}") నుండి ఏ మూలకానికి పేరు వచ్చింది?`
        },
        options: choicesPool.map((c) => ({
          id: `opt-${c.atomicNumber}`,
          text: {
            en: `${c.name.en} (${c.symbol})`,
            te: `${c.name.te} (${c.symbol})`
          },
          isCorrect: c.atomicNumber === target.atomicNumber
        })),
        explanation: {
          en: etym
            ? `${target.name.en} (${target.symbol}): ${etym.namingStory.en}`
            : `${target.name.en} derives from classical root words.`,
          te: etym
            ? `${target.name.te} (${target.symbol}): ${etym.namingStory.te}`
            : `${target.name.te} ప్రాచీన మూల పదం నుండి వచ్చింది.`
        }
      };
    }

    case 'category':
    default: {
      const allCategories = Array.from(new Set(allElements.map((e) => e.category)));
      const categoryOptions = [
        target.category,
        ...allCategories.filter((c) => c !== target.category).sort(() => Math.random() - 0.5).slice(0, 3)
      ].sort(() => Math.random() - 0.5);

      return {
        id,
        type,
        element: target,
        prompt: {
          en: `To which chemical family or category does ${target.name.en} (${target.symbol}) belong?`,
          te: `${target.name.te} (${target.symbol}) ఏ రసాయన వర్గానికి / కుటుంబానికి చెందుతుంది?`
        },
        options: categoryOptions.map((cat, idx) => ({
          id: `opt-cat-${idx}`,
          text: {
            en: formatCategoryName(cat, 'en'),
            te: formatCategoryName(cat, 'te')
          },
          isCorrect: cat === target.category
        })),
        explanation: {
          en: `${target.name.en} is classified as a ${formatCategoryName(target.category, 'en')} in Group ${target.group || 'N/A'}, Period ${target.period}.`,
          te: `${target.name.te} అనేది ${formatCategoryName(target.category, 'te')} వర్గానికి చెందిన మూలకం (పీరియడ్: ${target.period}).`
        }
      };
    }
  }
}

function formatCategoryName(cat: string, lang: 'en' | 'te'): string {
  const map: Record<string, { en: string; te: string }> = {
    'reactive-nonmetal': { en: 'Reactive Nonmetal', te: 'చర్యాశీల అలోహం' },
    'noble-gas': { en: 'Noble Gas', te: 'జడ వాయువు' },
    'alkali-metal': { en: 'Alkali Metal', te: 'క్షార లోహం' },
    'alkaline-earth-metal': { en: 'Alkaline Earth Metal', te: 'క్షార మృత్తిక లోహం' },
    'metalloid': { en: 'Metalloid', te: 'అర్ధలోహం' },
    'post-transition-metal': { en: 'Post-Transition Metal', te: 'ఉత్తర పరివర్తన లోహం' },
    'transition-metal': { en: 'Transition Metal', te: 'పరివర్తన లోహం' },
    'lanthanide': { en: 'Lanthanide', te: 'లాంథనైడ్' },
    'actinide': { en: 'Actinide', te: 'ఆక్టినైడ్' },
    'unknown': { en: 'Unknown / Synthetic', te: 'తెలియనిది / కృత్రిమ' }
  };
  return map[cat] ? map[cat][lang] : cat;
}
