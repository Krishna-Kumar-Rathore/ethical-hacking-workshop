import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Registration from './pages/Registration'
import Contact from './pages/Contact'
import Schedule from './pages/Schedule'
import MatrixBackground from './components/MatrixBackground'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useEffect(() => {
    // Add custom cursor effect
    const cursor = document.createElement('div')
    cursor.className = 'fixed w-4 h-4 bg-cyber-green rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150'
    cursor.style.transform = 'translate(-50%, -50%)'
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    document.addEventListener('mousemove', moveCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
        <MatrixBackground />
        <Navbar />
        <ScrollToTop />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              } 
            />
            <Route 
              path="/about" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              } 
            />
            <Route 
              path="/registration" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Registration />
                </motion.div>
              } 
            />
            <Route 
              path="/schedule" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Schedule />
                </motion.div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App