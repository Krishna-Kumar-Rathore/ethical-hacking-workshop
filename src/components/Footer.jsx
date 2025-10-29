import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiShieldCheck, HiAcademicCap } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ]

  const quickLinks = [
    { name: 'About Workshop', href: '/about' },
    { name: 'Registration', href: '/registration' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="relative border-t bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-cyber-green/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-40 h-40 rounded-full -top-10 -left-10 bg-cyber-green/5 blur-3xl animate-pulse" />
        <div className="absolute rounded-full -bottom-10 -right-10 w-60 h-60 bg-cyber-blue/5 blur-3xl animate-pulse" />
      </div>

      <div className="relative container-custom section-padding">
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
                <HiShieldCheck className="text-3xl text-cyber-green" />
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
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-sm text-gray-400 transition-colors duration-300 hover:text-cyber-green group"
                  >
                    <span className="w-1 h-1 transition-opacity rounded-full opacity-0 bg-cyber-green group-hover:opacity-100" />
                    <span>{link.name}</span>
                  </a>
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
              className="p-6 transition-all duration-300 border card-3d rounded-xl bg-gradient-to-br from-cyber-green/5 to-cyber-blue/5 border-cyber-green/20 hover:border-cyber-green/40"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20">
                  <HiAcademicCap className="text-2xl text-cyber-green" /> 
                </div>
                <div className="flex-1">
                  <h5 className="mb-1 text-lg font-semibold text-white">Dr. Dev Narayan Yadav</h5>
                  <p className="mb-3 text-sm font-medium text-cyber-green">Assistant Professor & Convener</p>
                  <p className="mb-4 text-sm text-gray-400">Department of CSE, NIT Rourkela</p>
                  
                  <div className="space-y-2">
                    <a
                      href="mailto:yadavd@nitrkl.ac.in"
                      className="flex items-center p-1 space-x-2 text-sm text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-green focus-outline"
                    >
                      <HiMail className="flex-shrink-0 text-lg" />
                      <span>yadavd@nitrkl.ac.in</span>
                    </a>
                    
                    <a
                      href="tel:+918349869748"
                      className="flex items-center p-1 space-x-2 text-sm text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-green focus-outline"
                    >
                      <HiPhone className="flex-shrink-0 text-lg" />
                      <span>+91 8349869748</span>
                    </a>
                    
                    <div className="flex items-start space-x-2 text-sm text-gray-300">
                      <HiLocationMarker className="text-lg flex-shrink-0 mt-0.5" />
                      <span>NIT Rourkela, Odisha, India - 769008</span>
                    </div>
                  </div>
                  
                </div>
                <div>
                    <img src="/public/team/DevNarayanSirImg.jpeg" alt="" />
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 mt-4 border rounded-lg bg-orange-500/10 border-orange-500/30"
            >
              <h6 className="mb-2 text-sm font-semibold text-orange-400">Emergency Contact</h6>
              <div className="flex items-center space-x-3 text-sm">
                <HiPhone className="text-orange-400" />
                <span className="text-gray-300">24/7 Helpline:</span>
                <a href="tel:+916612462366" className="text-orange-400 transition-colors hover:text-orange-300">
                  0661-2462366
                </a>
              </div>
            </motion.div> */}
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
                Designed with 💚 for cybersecurity education
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <a href="#" className="transition-colors hover:text-cyber-green">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-cyber-green">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-cyber-green">Code of Conduct</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer