import { motion } from 'framer-motion'
import { Home, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { useQuiz } from '../context/QuizContext'
import ResultCard from '../components/ResultCard'
export default function ResultPage() { const navigate = useNavigate(); const { score, completed, reset } = useQuiz(); if (!completed) return <main className="page"><div className="empty-state"><h1>Quiz not completed</h1><button className="gradient-button" onClick={() => navigate('/quiz')}>Continue Quiz</button></div></main>; const retake = () => { reset(); navigate('/quiz') }; return <main className="page result-page" aria-live="polite"><ResultCard score={score} total={questions.length}/><div className="result-actions"><motion.button className="gradient-button" onClick={retake} whileHover={{ scale: 1.04 }} whileTap={{ scale: .96 }}><RotateCcw size={17}/> Retake Quiz</motion.button><button className="outline-button" onClick={() => { reset(); navigate('/') }}><Home size={17}/> Return Home</button></div></main> }
