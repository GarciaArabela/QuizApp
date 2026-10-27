import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Code2, Sparkles, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="page home-page">
      <div className="ambient-glows" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      <motion.div
        className="home-card"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="home-badge">
          <Sparkles size={14} />
          <span>Interactive Frontend Challenge</span>
        </div>

        <h1>
          Test Your <span className="gradient-text">Frontend Mastery</span>
        </h1>

        <p className="description">
          Sharpen your knowledge in modern HTML, CSS, JavaScript, TypeScript, and React with our curated quick quiz.
        </p>

        <div className="features-list">
          <span className="feature-pill">
            <Code2 size={15} /> 10 Curated Questions
          </span>
          <span className="feature-pill">
            <CheckCircle2 size={15} /> Instant Feedback
          </span>
          <span className="feature-pill">
            <Trophy size={15} /> Detailed Results
          </span>
        </div>

        <motion.button
          className="gradient-button"
          onClick={() => navigate('/quiz')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>Start Quiz</span>
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </main>
  )
}
