import { Chapter, Lesson } from '../types';
import { CHAPTER_1 } from './ch1';
import { CHAPTER_2 } from './ch2';
import { CHAPTER_3 } from './ch3';
import { CHAPTER_4 } from './ch4';
import { CHAPTER_5 } from './ch5';
import { CHAPTER_6 } from './ch6';
import { CHAPTER_7 } from './ch7';

export const CHAPTERS_DATA: Chapter[] = [
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
];

export const ALL_LESSONS: Lesson[] = CHAPTERS_DATA.flatMap((c) => c.lessons);

export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}
