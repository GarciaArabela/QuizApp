import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { useQuiz } from '../context/QuizContext'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import QuizHeader from '../components/QuizHeader'

export default function QuizPage() {
  const navigate = useNavigate()
  const { current, score, selected, completed, choose, next } = useQuiz()
  const question = questions[current]

  useEffect(() => {
    if (completed) navigate('/result')
  }, [completed, navigate])

  if (!question) return null

  return (
    <main className="page quiz-page">
      <div className="ambient-glows" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
      </div>

      <QuizHeader score={score} total={questions.length} />

      <div className="quiz-shell">
        <ProgressBar current={current} total={questions.length} />
        
        <QuestionCard question={question} selected={selected} choose={choose} />

        <div className="quiz-nav">
          <button className="text-button" onClick={() => navigate('/')}>
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </button>

          <motion.button
            className="gradient-button"
            disabled={!selected}
            onClick={next}
            whileHover={selected ? { scale: 1.03 } : undefined}
            whileTap={selected ? { scale: 0.97 } : undefined}
          >
            <span>{current === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
            <ArrowRight size={17} />
          </motion.button>
        </div>
      </div>
    </main>
  )
}
