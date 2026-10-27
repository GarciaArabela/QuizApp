import { motion } from 'framer-motion'
import { ArrowRight, Home, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { useQuiz } from '../context/QuizContext'
import ResultCard from '../components/ResultCard'

export default function ResultPage() {
  const navigate = useNavigate()
  const { score, completed, reset } = useQuiz()

  if (!completed) {
    return (
      <main className="page">
        <div className="ambient-glows" aria-hidden="true">
          <div className="glow-orb glow-orb-1" />
        </div>
        <div className="empty-state">
          <h1>No Active Results</h1>
          <p>You haven't completed a quiz session yet. Jump in to get your score!</p>
          <button className="gradient-button" onClick={() => navigate('/quiz')}>
            <span>Start the Quiz</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </main>
    )
  }

  const handleRetake = () => {
    reset()
    navigate('/quiz')
  }

  const handleHome = () => {
    reset()
    navigate('/')
  }

  return (
    <main className="page result-page" aria-live="polite">
      <div className="ambient-glows" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      <ResultCard score={score} total={questions.length} />

      <div className="result-actions">
        <motion.button
          className="gradient-button"
          onClick={handleRetake}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <RotateCcw size={17} />
          <span>Retake Quiz</span>
        </motion.button>

        <button className="outline-button" onClick={handleHome}>
          <Home size={17} />
          <span>Back to Home</span>
        </button>
      </div>
    </main>
  )
}
