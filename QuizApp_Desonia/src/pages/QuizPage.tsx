import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { useQuiz } from '../context/QuizContext'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import QuizHeader from '../components/QuizHeader'

const stars = [
  { className: 'quiz-star quiz-star-one', icon: Star },
  { className: 'quiz-star quiz-star-two', icon: Sparkles },
  { className: 'quiz-star quiz-star-three', icon: Star },
  { className: 'quiz-star quiz-star-four', icon: Sparkles },
  { className: 'quiz-star quiz-star-five', icon: Star },
]

export default function QuizPage() {
  const navigate = useNavigate()
  const { current, score, selected, completed, choose, next } = useQuiz()
  const question = questions[current]

  useEffect(() => {
    if (completed) navigate('/result')
  }, [completed, navigate])

  return (
    <main className="page quiz-page">
      <div className="quiz-decorations" aria-hidden="true">
        {stars.map(({ className, icon: Icon }, index) => (
          <motion.span
            key={index}
            className={className}
            animate={{ y: [0, -10, 0], rotate: [0, index % 2 ? -10 : 10, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.8 + index * 0.35, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
          >
            <Icon size={index % 2 ? 24 : 30} />
          </motion.span>
        ))}
      </div>
      <QuizHeader score={score} total={questions.length} />
      <div className="quiz-note">Choose one answer before moving forward.</div>
      <div className="quiz-shell">
        <ProgressBar current={current} total={questions.length} />
        <QuestionCard question={question} selected={selected} choose={choose} />
        <div className="quiz-nav">
          <button className="text-button" onClick={() => navigate('/')}>
            <ArrowLeft size={17} /> Home
          </button>
          <motion.button
            className="gradient-button"
            disabled={!selected}
            onClick={next}
            whileHover={selected ? { scale: 1.04 } : undefined}
            whileTap={selected ? { scale: 0.96 } : undefined}
          >
            {current === questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ArrowRight size={17} />
          </motion.button>
        </div>
      </div>
    </main>
  )
}
