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
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="question-badge">
        <span>Question {question.id}</span>
      </div>

      <h2>{question.question}</h2>

      <div className="answers-grid">
        {question.choices.map((choice, idx) => (
          <AnswerOption
            key={choice}
            index={idx}
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
          className={`feedback-banner ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          aria-live="polite"
        >
          <div className="feedback-icon-box" aria-hidden="true">
            {isCorrect ? <Check size={22} strokeWidth={3} /> : <X size={22} strokeWidth={3} />}
          </div>
          <div className="feedback-details">
            <strong>{isCorrect ? 'Correct! Excellent job.' : 'Not quite right'}</strong>
            <span>
              {isCorrect ? (
                'You selected the correct answer.'
              ) : (
                <>
                  The correct answer is <b>{question.answer}</b>.
                </>
              )}
            </span>
          </div>
        </motion.div>
      )}
    </motion.section>
  )
}
