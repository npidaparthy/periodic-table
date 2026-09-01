# Project Requirements & Technical Specifications: Modular Periodic Table & Chemistry Lab

## 1. Executive Summary & Architecture Overview

This document defines the architectural specifications, schema designs, localization mechanisms, and modular decoupled asset structure for the **Periodic Table & Chemistry Learning Laboratory** application.

The core objective is **strict decoupling of application code (`/src`) from dataset, audio, images, and content (`/public/data`, `/public/assets`, `/public/audio`)**. This ensures any educator, school, or external developer can extract the dataset and drop it into another platform, mobile app, or CMS without modifying UI logic.

---

## 2. Decoupled Directory Structure

```
├── Project_Requirements.MD         # Technical specifications & schemas (this document)
├── public/
│   ├── data/
│   │   ├── elements.json          # Complete 118 elements dataset with chemical properties
│   │   ├── i18n.json              # Full English (EN) & Telugu (TE) localization dictionary
│   │   ├── help.json              # Interactive bilingual user manual & guide
│   │   └── experiments.json       # Safe home & school chemistry experiments
│   ├── assets/
│   │   └── elements/              # High-resolution element images & textures
│   └── audio/
│       ├── en/                    # English element pronunciation & quiz audio voiceovers
│       └── te/                    # Telugu element pronunciation & quiz audio voiceovers
├── src/
│   ├── components/                # Modular plug-and-play UI widgets
│   │   ├── PeriodicTable.tsx      # Main interactive grid & trend heatmap visualizer
│   │   ├── ElementModal.tsx       # Detailed chemical dossier, 3D electron shells & experiments
│   │   ├── TrendsVisualizer.tsx   # Periodic trends analytical comparative tool
│   │   ├── ReaderView.tsx         # Structured study notes & curriculum in EN/TE
│   │   ├── QuizView.tsx           # Adaptive quiz retention engine with audio test prompts
│   │   ├── ProgressDashboard.tsx  # Learning metrics, category mastery & retention tracker
│   │   ├── HelpModal.tsx          # Bilingual interactive help system
│   │   └── Header.tsx             # Universal search, EN/TE switcher, theme toggle
│   ├── services/
│   │   ├── audioService.ts        # Modular audio player with Web Speech API fallback
│   │   ├── storageService.ts      # Offline-first localStorage persistent state
│   │   └── quizGenerator.ts       # Dynamic question generator with difficulty curves
│   ├── types.ts                   # TypeScript interfaces strictly mapped to JSON schemas
│   ├── App.tsx                    # Shell layout orchestrating modular views
│   └── main.tsx                   # React root mount
```

---

## 3. Core JSON Data Schemas

### 3.1. `elements.json` Schema Specification

Each of the 118 elements follows this strict JSON schema:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "PeriodicElement",
  "type": "object",
  "required": [
    "atomicNumber",
    "symbol",
    "name",
    "atomicWeight",
    "category",
    "group",
    "period",
    "block",
    "phaseAtSTP",
    "electronConfiguration",
    "visual"
  ],
  "properties": {
    "atomicNumber": { "type": "integer", "minimum": 1, "maximum": 118 },
    "symbol": { "type": "string", "maxLength": 3 },
    "name": {
      "type": "object",
      "properties": {
        "en": { "type": "string" },
        "te": { "type": "string" }
      },
      "required": ["en", "te"]
    },
    "latinName": { "type": "string" },
    "atomicWeight": { "type": "number" },
    "category": {
      "type": "string",
      "enum": [
        "reactive-nonmetal",
        "noble-gas",
        "alkali-metal",
        "alkaline-earth-metal",
        "metalloid",
        "post-transition-metal",
        "transition-metal",
        "lanthanide",
        "actinide",
        "unknown"
      ]
    },
    "group": { "type": ["integer", "null"] },
    "period": { "type": "integer" },
    "block": { "type": "string", "enum": ["s", "p", "d", "f"] },
    "electronConfiguration": { "type": "string" },
    "electronShells": { "type": "array", "items": { "type": "integer" } },
    "oxidationStates": { "type": "string" },
    "electronegativity": { "type": ["number", "null"] },
    "atomicRadius": { "type": ["number", "null"] },
    "ionizationEnergy": { "type": ["number", "null"] },
    "density": { "type": ["number", "null"] },
    "meltingPoint": { "type": ["number", "null"] },
    "boilingPoint": { "type": ["number", "null"] },
    "discoveryYear": { "type": ["integer", "string"] },
    "discoveredBy": { "type": "string" },
    "phaseAtSTP": { "type": "string", "enum": ["Gas", "Liquid", "Solid", "Unknown"] },
    "summary": {
      "type": "object",
      "properties": {
        "en": { "type": "string" },
        "te": { "type": "string" }
      },
      "required": ["en", "te"]
    },
    "applications": {
      "type": "object",
      "properties": {
        "en": { "type": "array", "items": { "type": "string" } },
        "te": { "type": "array", "items": { "type": "string" } }
      },
      "required": ["en", "te"]
    },
    "homeExperiments": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "title": { "type": "object", "properties": { "en": { "type": "string" }, "te": { "type": "string" } } },
          "safetyLevel": { "type": "string", "enum": ["Safe / No Supervision", "Adult Supervision Required"] },
          "materials": { "type": "object", "properties": { "en": { "type": "array", "items": { "type": "string" } }, "te": { "type": "array", "items": { "type": "string" } } } },
          "steps": { "type": "object", "properties": { "en": { "type": "array", "items": { "type": "string" } }, "te": { "type": "array", "items": { "type": "string" } } } },
          "scientificPrinciple": { "type": "object", "properties": { "en": { "type": "string" }, "te": { "type": "string" } } }
        }
      }
    },
    "visual": {
      "type": "object",
      "properties": {
        "primaryColor": { "type": "string" },
        "secondaryColor": { "type": "string" },
        "materialTexture": { "type": "string", "enum": ["metallic", "crystalline", "gaseous", "liquid", "synthetic"] },
        "imageAssetPath": { "type": "string" }
      },
      "required": ["primaryColor", "secondaryColor", "materialTexture", "imageAssetPath"]
    },
    "audio": {
      "type": "object",
      "properties": {
        "enAudioPath": { "type": "string" },
        "teAudioPath": { "type": "string" },
        "phoneticEn": { "type": "string" },
        "phoneticTe": { "type": "string" }
      }
    }
  }
}
```

---

## 4. Localization (i18n) Architecture (English & Telugu)

### 4.1. Supported Languages
1. **English (`en`)**: International chemical terminology (IUPAC standards).
2. **Telugu (`te`)**: Telugu chemical taxonomy with phonetic transliteration and Telugu explanations (e.g., Hydrogen = హైడ్రోజన్ (జలజని), Oxygen = ఆక్సిజన్ (ప్రాణవాయువు), Gold = బంగారం (స్వర్ణం / ఆరం)).

### 4.2. Dual Audio Narration Strategy
1. **Physical Voice Audio Files**: App looks for `/public/audio/en/{atomicNumber}.mp3` and `/public/audio/te/{atomicNumber}.mp3`.
2. **Speech Synthesis Fallback**: If audio files are not present, the app seamlessly engages the browser's native `window.speechSynthesis` configured with `en-US` and `te-IN` voice tags, ensuring zero broken audio experiences.
3. **Custom Voice Recording Hook**: Educators can place their own recorded MP3/WAV files into `/public/audio/` without code changes.

---

## 5. Offline Capability & Local Storage Model

- All core datasets (`elements.json`, `i18n.json`, `help.json`, `experiments.json`) are bundled with instant fallback and served via static caching.
- User quiz sessions, mastery milestones, streak records, and dark/light preference are persisted in `localStorage` under keys:
  - `periodic_table_theme`: `"dark" | "light"`
  - `periodic_table_lang`: `"en" | "te"`
  - `periodic_table_quiz_progress`: serialized metrics object
  - `periodic_table_bookmarked_elements`: list of favorite atomic numbers

---

## 6. Review Questions for You (Design & Feature Refinements)

To ensure this matches your vision, please review the following points:

1. **Audio Voiceover Files**:
   - Do you plan to record individual MP3 files for all 118 elements (e.g., `001_hydrogen.mp3`), or would you like to record specific section-level introductions and rely on speech synthesis for individual quick clicks?
   - Should we provide an in-app "Voice Test & Audio Diagnostic" tool so you can preview both custom MP3 files and speech synthesis?

2. **Telugu Nomenclature Preference**:
   - Would you like standard transliterations (e.g., *హైడ్రోజన్* for Hydrogen) or traditional Indian chemical names (e.g., *జలజని*), or **both together** (e.g., "హైడ్రోజన్ (జలజని)")? *(We have enabled both together for educational clarity!)*

3. **Home Experiments Scope**:
   - We have embedded safe kitchen/classroom experiments for abundant household elements (Iron, Copper, Aluminium, Carbon, Oxygen, Hydrogen/Vinegar, Iodine, Zinc, Sodium/Salt). Would you like to add more experiments in future updates?

4. **Trends Heatmap Metrics**:
   - Currently supported trends: **Atomic Radius**, **Electronegativity**, **Ionization Energy**, **Density**, **Melting Point**, **Boiling Point**, and **Atomic Weight**. Are there any additional physical properties you would like to visualize across the table?

---
