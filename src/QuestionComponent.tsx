import { useState } from "react";
import QuizComponent from "./QuizComponent";

interface Question {
  qnum: number;
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    qnum: 1,
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "High Tech Modern Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    qnum: 2,
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "SQL"],
    answer: "CSS",
  },
  {
    qnum: 3,
    question: "Which library is used to build user interfaces in this project?",
    options: ["React", "Django", "Laravel", "Flask"],
    answer: "React",
  },
  {
    qnum: 4,
    question: "Which React hook adds state to a function component?",
    options: ["useState", "useFetch", "useHTML", "useStyle"],
    answer: "useState",
  },
  {
    qnum: 5,
    question: "Which HTML tag creates the largest heading?",
    options: ["<h6>", "<h1>", "<head>", "<header>"],
    answer: "<h1>",
  },
  {
    qnum: 6,
    question: "Which CSS property changes the text color?",
    options: ["font-color", "text-style", "color", "background"],
    answer: "color",
  },
  {
    qnum: 7,
    question: "What does TypeScript add to JavaScript?",
    options: ["Static types", "A database", "Faster internet", "Image editing"],
    answer: "Static types",
  },
  {
    qnum: 8,
    question: "What is data passed from a parent to a child component called?",
    options: ["Props", "Cookies", "Tags", "Loops"],
    answer: "Props",
  },
  {
    qnum: 9,
    question: "Which command starts the Vite development server?",
    options: ["npm run dev", "npm start vite", "vite install", "npm build dev"],
    answer: "npm run dev",
  },
  {
    qnum: 10,
    question: "Which attribute does React use instead of class?",
    options: ["className", "class", "classId", "styleClass"],
    answer: "className",
  },
];

function QuestionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = (selectedOption: string) => {
    // 1. Check the answer
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    // 2. Go to the next question, or finish
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="quiz-container">
        <h1>Quiz Complete!</h1>
        <p>
          Your score: {score} out of {questions.length}
        </p>
        <button className="btn" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <QuizComponent
      currQuestion={questions[currentIndex]}
      total={questions.length}
      isLast={currentIndex === questions.length - 1}
      onNext={handleNext}
    />
  );
}

export default QuestionComponent;