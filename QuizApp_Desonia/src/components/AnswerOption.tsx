import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function AnswerOption({
  label,
  selected,
  correct,
  incorrect,
  disabled,
  onClick,
}: {
  label: string
  selected: boolean
  correct: boolean
  incorrect: boolean
  disabled: boolean
  onClick: () => void
}) {
  const stateClass = correct ? 'correct-option' : incorrect ? 'incorrect-option' : selected ? 'selected' : ''

  return (
    <motion.button
      type="button"
      className={`answer-option ${stateClass}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.015, x: 3 } : undefined}
      whileTap={!disabled ? { scale: 0.985 } : undefined}
      animate={incorrect ? { x: [0, -5, 5, -3, 3, 0] } : undefined}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      <span className="choice-dot" aria-hidden="true" />
      <span className="answer-label">{label}</span>
      {correct && <Check className="answer-state-icon" size={22} strokeWidth={3} />}
      {incorrect && <X className="answer-state-icon" size={22} strokeWidth={3} />}
    </motion.button>
  )
}
