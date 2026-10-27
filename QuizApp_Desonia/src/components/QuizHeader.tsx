import { Sparkles } from 'lucide-react'

export default function QuizHeader({ score, total }: { score: number; total: number }) {
  return (
    <header className="quiz-header">
      <div className="brand">
        <Sparkles size={18} /> Frontend Quiz
      </div>
      <div className="quiz-header-right">
        <span className="quiz-meta">{total} questions • frontend basics</span>
        <span className="score-badge" aria-live="polite" aria-label={`Current score: ${score} out of ${total}`}>Score: {score}/{total}</span>
      </div>
    </header>
  )
}
