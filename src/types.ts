/**
 * TYPES POUR L'APPLICATION D'ÉTUDE ENAFEP COACH
 */

export type CategoryKey = 'francais' | 'maths' | 'sciences' | 'culture_generale';

export interface CategoryInfo {
  key: CategoryKey;
  label: string;
  icon: string;
  color: string; // Tailwind class background
  borderColor: string; // Tailwind border
  textColor: string;
  shadowColor: string;
  description: string;
}

export interface Question {
  id: string;
  category: CategoryKey;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
  isCustomGenerated?: boolean;
}

export interface AttemptLog {
  questionId: string;
  category: CategoryKey;
  attemptsCount: number;
  isCorrectFirstTime: boolean;
  resolved: boolean;
}

export interface StudySession {
  category: CategoryKey;
  questions: Question[];
  currentQuestionIndex: number;
  attempts: { [questionId: string]: number }; // Maps question ID to number of incorrect attempts
  isCorrectChosen: boolean; // True once the child picks the right answer for the current question
  score: number;
  completed: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'student' | 'teacher';
  text: string;
  timestamp: number;
  studentName: string;
  questionText?: string; // Optionnel : question sur laquelle le message est envoyé
  categoryLabel?: string; // Optionnel : matière concernée
}

export interface ExplanationsResponse {
  hint: string;
  explanation: string;
}
