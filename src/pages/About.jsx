import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiOfficeBuilding, HiUsers, HiLightBulb, HiHome, HiCurrencyRupee, HiCalendar, HiShieldCheck, HiCode, HiGlobeAlt } from 'react-icons/hi'

const About = () => {
  const workshopFeatures = [
    {
      icon: HiShieldCheck,
      title: "Hands-On Learning",
      description: "Real-world scenarios with industry-standard tools like NMAP, Metasploit, Wireshark, and Burp Suite."
    },
    {
      icon: HiAcademicCap,
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry professionals with years of cybersecurity expertise."
    },
    {
      icon: HiCode,
      title: "8 Comprehensive Modules",
      description: "From foundations to advanced exploitation techniques, covering all aspects of ethical hacking."
    },
    {
      icon: HiGlobeAlt,
      title: "Hybrid Mode",
      description: "Flexible learning with both online lectures and hands-on offline laboratory sessions."
    }
  ]

  const courseModules = [
    {
      title: "Foundations",
      description: "Ethical hacking principles, legal aspects, and networking essentials",
      tools: ["Ethics Framework", "Legal Guidelines", "Network Protocols"]
    },
    {
      title: "Reconnaissance", 
      description: "Information gathering and vulnerability assessment techniques",
      tools: ["NMAP", "Nessus", "DNS Enumeration", "Whois"]
    },
    {
      title: "Traffic Analysis",
      description: "Network monitoring and communication interception",
      tools: ["Wireshark", "Burp Suite", "Network Forensics"]
    },
    {
      title: "Web & Database Attacks",
      description: "Exploitation and mitigation of web application vulnerabilities", 
      tools: ["SQL Injection", "XSS", "File Upload Flaws", "SQLMap"]
    },
    {
      title: "System Attacks",
      description: "Password attacks and system penetration techniques",
      tools: ["John the Ripper", "Hashcat", "Brute Force"]
    },
    {
      title: "Exploitation",
      description: "Advanced penetration testing with Metasploit framework",
      tools: ["Metasploit", "Payload Creation", "Post-Exploitation"]
    },
    {
      title: "Social Engineering",
      description: "Human factor security and awareness training",
      tools: ["Phishing", "Vishing", "Pretexting", "SET Toolkit"]
    },
    {
      title: "Defense & Reporting",
      description: "Secure coding practices and professional documentation",
      tools: ["Threat Detection", "SIEM", "Report Writing"]
    }
  ]

  const accommodationInfo = [
    {
      icon: HiHome,
      title: "Guest House",
      description: "Comfortable guest house accommodation available for faculty and industry professionals",
      details: "South Block & North Block with modern amenities"
    },
    {
      icon: HiUsers,
      title: "Student Hostels", 
      description: "On-campus hostel facilities for student participants",
      details: "Subject to availability, registration required"
    },
    {
      icon: HiCurrencyRupee,
      title: "Dining Facilities",
      description: "Lodging, boarding, lunch and dinner facilities available",
      details: "Charges apply separately, payment on availability basis"
    },
    {
      icon: HiCalendar,
      title: "Advance Booking",
      description: "Early accommodation booking recommended due to limited availability",
      details: "Contact coordinators for reservation assistance"
    }
  ]

  const nitHighlights = [
    "Ranked 13th among engineering colleges by NIRF 2025",
    "Institution of National Importance since 1961", 
    "Well-equipped cybersecurity laboratories",
    "Strong industry-academia partnerships",
    "Modern campus with residential facilities",
    "Located in the steel city of Rourkela, Odisha"
  ]

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl font-heading text-gradient">
            About the Workshop
          </h1>
          <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-300">
            Join us for an intensive 2-week journey into ethical hacking and cybersecurity. 
            This comprehensive program combines theoretical knowledge with hands-on practical experience, 
            designed to transform participants into skilled cybersecurity professionals.
          </p>
        </motion.div>

        {/* Workshop Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-6xl p-8 mx-auto border card-3d rounded-2xl glass-effect border-cyber-green/20">
            <h2 className="mb-6 text-3xl font-bold text-center text-white font-heading">
              Workshop Highlights
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {workshopFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 text-center transition-all duration-300 border rounded-lg bg-gradient-to-br from-cyber-green/5 to-cyber-blue/5 border-cyber-green/20 hover:border-cyber-green/40"
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20">
                    <feature.icon className="text-2xl text-cyber-green" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Course Modules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-white font-heading">
            8 Comprehensive Modules
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 transition-all duration-300 border card-3d rounded-xl glass-effect border-cyber-green/20 hover:border-cyber-green/40"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white rounded-full bg-gradient-to-br from-cyber-green to-cyber-blue">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-white">{module.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-gray-300">{module.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {module.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-2 py-1 text-xs border rounded-full bg-cyber-green/10 text-cyber-green border-cyber-green/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Accommodation Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-white font-heading">
            Accommodation & Facilities
          </h2>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="p-8 border card-3d rounded-2xl glass-effect border-orange-500/30">
              <h3 className="flex items-center mb-6 space-x-3 text-2xl font-bold text-white font-heading">
                <HiHome className="text-orange-400" />
                <span>On-Campus Accommodation</span>
              </h3>
              <div className="space-y-4">
                {accommodationInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="flex-shrink-0 mt-1 text-xl text-orange-400" />
                    <div>
                      <h4 className="mb-1 font-semibold text-white">{info.title}</h4>
                      <p className="mb-1 text-sm text-gray-300">{info.description}</p>
                      <p className="text-xs text-orange-400">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 mt-6 border rounded-lg bg-orange-500/10 border-orange-500/30">
                <p className="text-sm text-gray-300">
                  <strong className="text-orange-400">Note:</strong> Accommodation is provided by NIT Rourkela 
                  within the campus premises. Charges may apply and are subject to availability. 
                  Early booking is highly recommended for outstation participants.
                </p>
              </div>
            </div>

            <div className="p-8 border card-3d rounded-2xl glass-effect border-cyber-green/20">
              <h3 className="flex items-center mb-6 space-x-3 text-2xl font-bold text-white font-heading">
                <HiOfficeBuilding className="text-cyber-green" />
                <span>About NIT Rourkela</span>
              </h3>
              <ul className="space-y-3">
                {nitHighlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start space-x-3"
                  >
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-cyber-green" />
                    <span className="text-sm text-gray-300">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-6">
                <a
                  href="https://website.nitrkl.ac.in/CS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-2 space-x-2 text-sm transition-colors duration-300 rounded-lg text-cyber-green hover:text-cyber-blue focus-outline"
                >
                  <span>Learn more about CSE Department</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Target Participants */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-white font-heading">
            Who Should Attend?
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Students",
                description: "Undergraduate and graduate students from all engineering disciplines interested in cybersecurity",
                icon: "🎓",
                highlight: "Special FREE offer for first 10 NIT Rourkela students!"
              },
              {
                title: "Research Scholars", 
                description: "PhD candidates and researchers focusing on security, privacy, and related domains",
                icon: "🔬",
                highlight: "Access to latest research methodologies"
              },
              {
                title: "Faculty Members",
                description: "Teaching faculty wanting to enhance cybersecurity curriculum and knowledge",
                icon: "👨‍🏫",
                highlight: "Professional development opportunities"
              },
              {
                title: "Industry Experts",
                description: "Working professionals seeking to upskill in ethical hacking and penetration testing",
                icon: "💼",
                highlight: "Hands-on industry-relevant training"
              }
            ].map((participant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 text-center transition-all duration-300 border card-3d rounded-xl glass-effect border-cyber-green/20 hover:border-cyber-green/40"
              >
                <div className="mb-4 text-4xl">{participant.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-white">{participant.title}</h3>
                <p className="mb-3 text-sm text-gray-400">{participant.description}</p>
                <div className="p-2 border rounded-lg bg-cyber-green/10 border-cyber-green/30">
                  <p className="text-xs font-medium text-cyber-green">{participant.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="max-w-4xl p-8 mx-auto border card-3d rounded-2xl glass-effect border-cyber-green/20">
            <h2 className="mb-6 text-3xl font-bold text-white font-heading">
              Ready to Begin Your Cybersecurity Journey?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              Join us at NIT Rourkela for this comprehensive ethical hacking workshop and take the first step 
              towards becoming a cybersecurity professional. Limited seats available with early bird offers!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href="/registration"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold rounded-lg btn-cyber focus-outline"
              >
                Register Now
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold transition-all duration-300 border-2 rounded-lg border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 focus-outline"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About