export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Pick a vibe",
    options: ["Chill", "Wild", "Nostalgic", "Adventurous"],
  },
  {
    id: 2,
    question: "Your go-to snack?",
    options: ["Pizza", "Tacos", "Chips", "Wings"],
  },
  {
    id: 3,
    question: "Pick a genre",
    options: ["Hip-Hop", "Rock", "Pop", "Country"],
  },
  {
    id: 4,
    question: "How do you take your Dr Pepper?",
    options: ["Ice cold", "Room temp", "Mixed in something", "Straight from the can"],
  },
  {
    id: 5,
    question: "One word — you are:",
    options: ["Bold", "Smooth", "Complex", "Classic"],
  },
];
