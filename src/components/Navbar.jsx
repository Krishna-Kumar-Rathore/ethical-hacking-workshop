import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiShieldCheck } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Registration', path: '/registration' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyber-green/20' 
          : 'bg-slate-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group z-50">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <HiShieldCheck className="text-3xl text-cyber-green drop-shadow-glow" />
              <div className="absolute inset-0 bg-cyber-green rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-gradient">
                EthicalHack25
              </h1>
              <p className="text-xs text-gray-400">NIT Rourkela</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 font-medium transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-cyber-green'
                    : 'text-gray-300 hover:text-cyber-green'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Active indicator */}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-cyber-green/10 rounded-lg border border-cyber-green/30"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-green/0 via-cyber-green/10 to-cyber-green/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.a
              href="https://forms.gle/Q6xpKWdwerbsut7P8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-cyber rounded-lg focus-outline"
            >
              Register Now
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-3 text-cyber-green hover:bg-cyber-green/10 rounded-lg transition-colors focus-outline"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-cyber-green/20"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-cyber-green bg-cyber-green/10 border border-cyber-green/30'
                          : 'text-gray-300 hover:text-cyber-green hover:bg-cyber-green/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.a
                  href="https://forms.gle/Q6xpKWdwerbsut7P8"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="btn-cyber rounded-lg text-center focus-outline mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Register Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar