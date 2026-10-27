import { motion } from 'framer-motion'
import { Award, CheckCircle2, ListOrdered, Target, Trophy, XCircle } from 'lucide-react'

export default function ResultCard({ score, total }: { score: number; total: number }) {
  const percentage = Math.round((score / total) * 100)
  const incorrect = total - score

  const getVerdict = () => {
    if (percentage >= 90) {
      return {
        title: 'Mastery Achieved! 🏆',
        desc: 'Outstanding performance! You possess advanced frontend knowledge.',
        badge: 'Top Tier (Expert)',
        Icon: Trophy,
      }
    }
    if (percentage >= 70) {
      return {
        title: 'Impressive Work! 🌟',
        desc: 'Solid understanding of core frontend concepts and best practices.',
        badge: 'Proficient',
        Icon: Award,
      }
    }
    if (percentage >= 50) {
      return {
        title: 'Good Effort! 📚',
        desc: 'You have a good start, but some concepts could use a quick review.',
        badge: 'Intermediate',
        Icon: Target,
      }
    }
    return {
      title: 'Keep Practicing! 💪',
      desc: 'Keep building and learning! Retake the quiz to level up your score.',
      badge: 'Apprentice',
      Icon: Target,
    }
  }

  const verdict = getVerdict()
  const IconComponent = verdict.Icon

  return (
    <motion.div
      className="result-card"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="result-celebration">
        <div className="celebration-icon">
          <IconComponent size={34} />
        </div>
      </div>

      <span className="eyebrow">Quiz Complete</span>
      <h1>{verdict.title}</h1>
      <p className="result-verdict">{verdict.desc}</p>

      <div className="score-hero-container">
        <div className="score-main">
          {score}
          <span> / {total}</span>
        </div>
        <span className="score-badge-pill">{verdict.badge} • {percentage}% Accuracy</span>
      </div>

      <div className="result-grid">
        <div className="stat-tile">
          <div className="stat-icon" style={{ color: '#818cf8' }}>
            <ListOrdered size={16} />
          </div>
          <b>{total}</b>
          <span>Questions</span>
        </div>

        <div className="stat-tile">
          <div className="stat-icon" style={{ color: '#34d399' }}>
            <CheckCircle2 size={16} />
          </div>
          <b style={{ color: '#34d399' }}>{score}</b>
          <span>Correct</span>
        </div>

        <div className="stat-tile">
          <div className="stat-icon" style={{ color: '#fb7185' }}>
            <XCircle size={16} />
          </div>
          <b style={{ color: '#fb7185' }}>{incorrect}</b>
          <span>Incorrect</span>
        </div>

        <div className="stat-tile">
          <div className="stat-icon" style={{ color: '#38bdf8' }}>
            <Target size={16} />
          </div>
          <b>{percentage}%</b>
          <span>Score</span>
        </div>
      </div>
    </motion.div>
  )
}
