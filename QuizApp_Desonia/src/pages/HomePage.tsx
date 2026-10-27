import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const backgroundBubbles = [
  { className: 'bubble bubble-one' },
  { className: 'bubble bubble-two' },
  { className: 'bubble bubble-three' },
  { className: 'bubble bubble-four' },
  { className: 'bubble bubble-five' },
  { className: 'bubble bubble-six' },
  { className: 'bubble bubble-seven' },
  { className: 'bubble bubble-eight' },
  { className: 'bubble bubble-nine' },
]

const welcomeStars = Array.from({ length: 22 }, (_, index) => ({
  className: `welcome-star welcome-star-${index + 1}`,
  type: index % 3 === 0 ? 'sparkle' : 'star',
}))

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="page home-page">
      <div className="moving-background" aria-hidden="true">
        {backgroundBubbles.map((bubble, index) => (
          <span key={index} className={bubble.className} />
        ))}
        <div className="welcome-stars">
          {welcomeStars.map(({ className, type }, index) => {
            const Icon = type === 'sparkle' ? Sparkles : Star
            return (
              <motion.span
                key={className}
                className={className}
                animate={{
                  y: [0, -7 - (index % 4) * 2, 0],
                  rotate: [0, index % 2 ? 12 : -12, 0],
                  scale: [0.85, 1.18, 0.9],
                  opacity: [0.35, 1, 0.45],
                }}
                transition={{
                  duration: 1.9 + (index % 5) * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.12,
                }}
              >
                <Icon size={12 + (index % 4) * 5} />
              </motion.span>
            )
          })}
        </div>
      </div>
      <motion.div
        className="home-card"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, ease: 'easeOut' }}
      >
        <div className="sparkle"><Sparkles size={18} /></div>
        <p className="welcome">Welcome to the</p>
        <h1>Frontend Quiz!</h1>
        <p className="description">Test your knowledge of HTML, CSS, JavaScript, React, and modern web development.</p>
        <motion.button
          className="gradient-button"
          onClick={() => navigate('/quiz')}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: .96 }}
        >
          Start Quiz <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </main>
  )
}
