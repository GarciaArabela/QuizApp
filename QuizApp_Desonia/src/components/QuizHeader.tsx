import { Sparkles, Trophy } from 'lucide-react'

export default function QuizHeader({ score, total }: { score: number; total: number }) {
  return (
    <header className="quiz-header">
      <div className="brand">
        <div className="brand-icon">
          <Sparkles size={18} />
        </div>
        <span>Frontend Quiz</span>
      </div>
      <div className="quiz-header-right">
        <span className="category-tag">Web Development</span>
        <div
          className="score-badge"
          aria-live="polite"
          aria-label={`Current score: ${score} out of ${total}`}
        >
          <Trophy size={16} />
          <span>
            Score: {score}/{total}
          </span>
        </div>
      </div>
    </header>
  )
}
