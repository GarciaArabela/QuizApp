export type QuizQuestion = { id: number; question: string; choices: string[]; answer: string }

export const questions: QuizQuestion[] = [
  { id: 1, question: 'What does HTML stand for?', choices: ['HyperText Markup Language', 'HighText Machine Language', 'Hyperlink Text Management Language', 'Home Tool Markup Language'], answer: 'HyperText Markup Language' },
  { id: 2, question: 'Which language is mainly used to style a web page?', choices: ['Python', 'CSS', 'SQL', 'Java'], answer: 'CSS' },
  { id: 3, question: 'Which keyword creates a constant in JavaScript?', choices: ['var', 'let', 'const', 'static'], answer: 'const' },
  { id: 4, question: 'Which tool is used to build this React project?', choices: ['Vite', 'Photoshop', 'MySQL', 'Excel'], answer: 'Vite' },
  { id: 5, question: 'What does CSS primarily control?', choices: ['Database records', 'Page presentation', 'Server hardware', 'Git branches'], answer: 'Page presentation' },
  { id: 6, question: 'Which symbol starts a JavaScript single-line comment?', choices: ['<!--', '//', '#', '**'], answer: '//' },
  { id: 7, question: 'Which React hook stores local component state?', choices: ['useState', 'useRoute', 'useStyle', 'usePage'], answer: 'useState' },
  { id: 8, question: 'What is TypeScript?', choices: ['A CSS framework', 'A JavaScript superset', 'A database', 'A browser'], answer: 'A JavaScript superset' },
  { id: 9, question: 'Which file commonly contains project dependencies?', choices: ['index.html', 'package.json', 'global.css', 'README.txt'], answer: 'package.json' },
  { id: 10, question: 'Which HTTP method is commonly used to request data?', choices: ['GET', 'SEND', 'PUSH', 'OPEN'], answer: 'GET' },
]
