import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function AnswerOption({
  index = 0,
  label,
  selected,
  correct,
  incorrect,
  disabled,
  onClick,
}: {
  index?: number
  label: string
  selected: boolean
  correct: boolean
  incorrect: boolean
  disabled: boolean
  onClick: () => void
}) {
  const stateClass = correct
    ? 'correct-option'
    : incorrect
    ? 'incorrect-option'
    : selected
    ? 'selected'
    : ''

  return (
    <motion.button
      type="button"
      className={`answer-option ${stateClass}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.01, x: 4 } : undefined}
      whileTap={!disabled ? { scale: 0.99 } : undefined}
      animate={incorrect ? { x: [0, -6, 6, -4, 4, 0] } : undefined}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
    >
      <span className="choice-badge" aria-hidden="true">
        {OPTION_LETTERS[index] || index + 1}
      </span>
      <span className="answer-text">{label}</span>
      {correct && (
        <span className="answer-state-icon" aria-hidden="true">
          <Check size={20} strokeWidth={2.8} />
        </span>
      )}
      {incorrect && (
        <span className="answer-state-icon" aria-hidden="true">
          <X size={20} strokeWidth={2.8} />
        </span>
      )}
    </motion.button>
  )
}
