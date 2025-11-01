import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiShieldCheck, HiAcademicCap } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
// import { scrollToTop } from '../hooks/useScrollToTop'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ✅ ADDED: Local function definition
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/devnyadav/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Krishna-Kumar-Rathore', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com/devnyadav', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/krishna_rathore2835?igsh=MWw4NmZ6cXd2NmZ0ag%3D%3D', label: 'Instagram' },
  ]

  const quickLinks = [
    { name: 'About Workshop', path: '/about' },
    { name: 'Registration', path: '/registration' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Contact Us', path: '/contact' },
  ]

  return (
    <footer className="relative border-t bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-cyber-green/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-40 h-40 rounded-full -top-10 -left-10 bg-cyber-green/5 blur-3xl animate-pulse" />
        <div className="absolute rounded-full -bottom-10 -right-10 w-60 h-60 bg-cyber-blue/5 blur-3xl animate-pulse" />
      </div>

      <div className="relative py-12 container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-6 space-x-3"
            >
              <div className="relative">
                <HiShieldCheck className="text-3xl text-cyber-green drop-shadow-glow" />
                <div className="absolute inset-0 rounded-full bg-cyber-green blur opacity-30" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-gradient">
                  EthicalHack25
                </h3>
                <p className="text-sm text-gray-400">NIT Rourkela</p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-sm leading-relaxed text-gray-400"
            >
              Join us for an intensive 2-week journey into the world of ethical hacking 
              and cybersecurity at one of India's premier technical institutions.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-lg bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 text-cyber-green hover:from-cyber-green/30 hover:to-cyber-blue/30 border-cyber-green/30 hover:border-cyber-green/50 focus-outline"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-lg font-semibold text-white font-heading"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="flex items-center space-x-2 text-sm text-gray-400 transition-colors duration-300 hover:text-cyber-green group"
                  >
                    <span className="w-1 h-1 transition-opacity rounded-full opacity-0 bg-cyber-green group-hover:opacity-100" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Workshop Convener Contact */}
          <div className="lg:col-span-2">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-6 space-x-2 text-lg font-semibold text-white font-heading"
            >
              <HiAcademicCap className="text-cyber-green" />
              <span>Workshop Convener</span>
            </motion.h4>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-4 transition-all duration-300 border sm:p-6 card-3d rounded-xl bg-gradient-to-br from-cyber-green/5 to-cyber-blue/5 border-cyber-green/20 hover:border-cyber-green/40"
            >
              <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                {/* Profile Image */}
                <div className="flex items-center flex-shrink-0 space-x-4 sm:flex-col sm:space-x-0 sm:space-y-3 sm:items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                    <img 
                      src="/team/DevNarayanSirImg.jpeg" 
                      alt="Dr. Dev Narayan Yadav"
                      className="object-cover w-full h-full transition-all duration-300 border-2 rounded-full border-cyber-green/30 hover:border-cyber-green/50"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    {/* Fallback Icon */}
                    <div className="items-center justify-center hidden w-full h-full border-2 rounded-full bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 border-cyber-green/30">
                      <HiAcademicCap className="text-2xl sm:text-3xl text-cyber-green" />
                    </div>
                  </div>
                  
                  {/* Name & Title - Mobile Layout */}
                  <div className="flex-1 sm:hidden">
                    <h5 className="text-lg font-semibold text-white">Dr. Dev Narayan Yadav</h5>
                    <p className="text-sm font-medium text-cyber-green">Assistant Professor & Convener</p>
                    <p className="text-xs text-gray-400">Department of CSE, NIT Rourkela</p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 w-full">
                  {/* Name & Title - Desktop Layout */}
                  <div className="hidden mb-4 sm:block">
                    <h5 className="text-lg font-semibold text-white">Dr. Dev Narayan Yadav</h5>
                    <p className="text-sm font-medium text-cyber-green">Assistant Professor & Convener</p>
                    <p className="text-sm text-gray-400">Department of CSE, NIT Rourkela</p>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="space-y-2">
                    
                    <a  href="mailto:yadavd@nitrkl.ac.in"
                      className="flex items-center p-2 space-x-2 text-sm text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-green hover:bg-cyber-green/5 focus-outline group"
                    >
                      <HiMail className="flex-shrink-0 text-base transition-transform group-hover:scale-110" />
                      <span className="break-all">yadavd@nitrkl.ac.in</span>
                    </a>
                    
                    
                    <a href="tel:+918349869748"
                      className="flex items-center p-2 space-x-2 text-sm text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-green hover:bg-cyber-green/5 focus-outline group"
                    >
                      <HiPhone className="flex-shrink-0 text-base transition-transform group-hover:scale-110" />
                      <span>+91 8349869748</span>
                    </a>
                    
                    <div className="flex items-start p-2 space-x-2 text-sm text-gray-300 rounded-lg group">
                      <HiLocationMarker className="text-base flex-shrink-0 mt-0.5 group-hover:text-cyber-green transition-colors" />
                      <span className="leading-relaxed">NIT Rourkela, Odisha, India - 769008</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 mt-12 border-t border-cyber-green/20"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} Department of Computer Science & Engineering, NIT Rourkela. 
                All rights reserved.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Designed by{' '}
                <a 
                  href="https://krishna-kumar-rathore.github.io/Portfolio/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-cyber-green"
                >
                  Krishna Kumar Rathore
                </a>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center space-x-6 text-xs text-gray-400">
              <Link to="#" className="transition-colors hover:text-cyber-green">Privacy Policy</Link>
              <Link to="#" className="transition-colors hover:text-cyber-green">Terms of Service</Link>
              <Link to="#" className="transition-colors hover:text-cyber-green">Code of Conduct</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer