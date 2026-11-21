export type TextSize = 'normal' | 'large' | 'xlarge';

export interface Quiz {
  question: string;
  mathQuestion?: string;
  optionA: string;
  optionB: string;
  correctOption: 'A' | 'B';
  explanation: string;
  encouragement: string;
}

export interface FormulaModel {
  title: string;
  templateLatex: string;
  explanation: string;
  exampleLatex: string;
  tips: string;
}

export interface CautionMistake {
  wrong: string;
  wrongMath?: string;
  wrongReason: string;
  correct: string;
  correctMath?: string;
  correctReason: string;
}

export interface StepGuide {
  stepNum: 1 | 2;
  title: string;
  instruction: string;
  mathLatex?: string;
  badge?: string;
}

export type SimulatorType =
  | 'numberLine'
  | 'tugOfWar'
  | 'signMachine'
  | 'primeFactorTree'
  | 'strawPattern'
  | 'termOrganizer'
  | 'balanceScale'
  | 'transposeDemo'
  | 'substitutionTool'
  | 'proportionRatio'
  | 'linearGraph'
  | 'inverseGraph'
  | 'lineAngleViewer'
  | 'compassBisector'
  | 'sectorCalculator'
  | 'projectionViewer'
  | 'cubeSkewLines'
  | 'coneUnfold'
  | 'solidVolume'
  | 'sphereFormula'
  | 'histogramViewer'
  | 'meanMedianMode'
  | 'relativeFreqSim'
  | 'relativeFreqCompare';

export interface Lesson {
  id: string; // e.g. 'ch1-1'
  chapterId: number; // 1 to 7
  sectionId: number; // 1 to 4 within chapter
  sectionTitle: string; // e.g. '1節 正の数・負の数'
  lessonNumber: number; // 1 to N within chapter
  totalLessonsInChapter: number;
  chapterTitle: string;
  title: string;
  target: string; // 本時のめあて（1行完結）
  keywords: string[];
  step1: StepGuide;
  step2: StepGuide;
  simulatorType?: SimulatorType;
  formulaModel: FormulaModel;
  cautionMistake: CautionMistake;
  quiz: Quiz;
}

export interface Section {
  id: number;
  title: string;
  plannedHoursLabel: string;
  lessons: Lesson[];
}

export interface Chapter {
  id: number;
  title: string;
  shortTitle: string;
  themeColor: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    badgeBg: string;
  };
  totalLessons: number;
  sections: Section[];
  lessons: Lesson[];
}
