import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import type { QuizQuestion } from '../data/questions'
import AnswerOption from './AnswerOption'

export default function QuestionCard({
  question,
  selected,
  choose,
}: {
  question: QuizQuestion
  selected: string | null
  choose: (answer: string) => void
}) {
  const answered = selected !== null
  const isCorrect = selected === question.answer

  return (
    <motion.section
      className="question-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="question-label">Question {question.id}</div>
      <h2>{question.question}</h2>

      <div className="answers">
        {question.choices.map((choice) => (
          <AnswerOption
            key={choice}
            label={choice}
            selected={selected === choice}
            correct={answered && choice === question.answer}
            incorrect={answered && selected === choice && choice !== question.answer}
            disabled={answered}
            onClick={() => choose(choice)}
          />
        ))}
      </div>

      {answered && (
        <motion.div
          className={`answer-feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35 }}
          aria-live="polite"
        >
        <div className="feedback-icon" aria-hidden="true">
          {isCorrect ? <Check size={28} strokeWidth={3} /> : <X size={28} strokeWidth={3} />}
        </div>
        <div className="feedback-copy">
          <strong>{isCorrect ? 'Correct!' : 'Incorrect!'}</strong>
          <span>
            {isCorrect
              ? 'Great job! You got the correct answer.'
              : <>The correct answer is <b>{question.answer}</b>.</>}
          </span>
        </div>

        </motion.div>
      )}
    </motion.section>
  )
}
