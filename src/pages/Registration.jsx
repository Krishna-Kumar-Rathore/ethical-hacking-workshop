import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  HiAcademicCap, 
  HiUsers, 
  HiOfficeBuilding, 
  HiCurrencyRupee,
  HiDesktopComputer,
  HiGlobeAlt,
  HiShieldCheck,
  HiUserGroup,
  HiClock,
  HiExclamation
} from 'react-icons/hi'


const Registration = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  // Registration stats
  const totalSeats = 100; // Adjust this number as needed
  const registeredStudents = 65;
  const availableSeats = totalSeats - registeredStudents;
  const isAlmostFull = availableSeats <= 10;
  
  const registrationFees = [
    {
      icon: HiAcademicCap,
      category: "Students",
      offline: "₹ 2,360",
      online: "₹ 1,180",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: HiUsers,
      category: "Faculty from Academic Institutions",
      offline: "₹ 2,360",
      online: "₹ 2,360",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: HiOfficeBuilding,
      category: "Industry & R&D Organizations",
      offline: "₹ 4,720",
      online: "₹ 4,720",
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-6 space-x-3">
            <HiShieldCheck className="text-4xl text-cyber-green" />
            <h1 className="text-4xl font-bold md:text-5xl font-heading text-gradient">
              Registration
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Secure your spot in the most comprehensive ethical hacking workshop at NIT Rourkela
          </p>
        </motion.div>
        
        {/* Main Registration Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <motion.a
            href="https://forms.gle/Q6xpKWdwerbsut7P8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 text-lg font-semibold btn-cyber rounded-xl shadow-glow"
          >
            Register Now via Google Form
          </motion.a>
        </motion.div>

        {/* Updated Registration Status Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 mb-16 border card-3d rounded-xl glass-effect border-cyber-green/20"
        >
          <div className="flex items-center justify-center mb-8 space-x-3">
            <HiUserGroup className="text-3xl text-cyber-green" />
            <h2 className="text-2xl font-bold text-center text-white font-heading">
              Registration Status
            </h2>
          </div>
          
          {/* Registration Stats */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 text-center border rounded-lg bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 border-cyber-green/20"
            >
              <div className="text-3xl font-bold text-cyber-green">{registeredStudents}</div>
              <div className="text-sm text-gray-400">Students Registered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`p-6 text-center border rounded-lg ${
                isAlmostFull 
                  ? 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20' 
                  : 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
              }`}
            >
              <div className={`text-3xl font-bold ${isAlmostFull ? 'text-red-400' : 'text-cyan-400'}`}>
                {availableSeats}
              </div>
              <div className="text-sm text-gray-400">Seats Available</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 text-center border rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20"
            >
              <div className="text-3xl font-bold text-purple-400">{totalSeats}</div>
              <div className="text-sm text-gray-400">Total Seats</div>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm text-gray-400">
              <span>Registration Progress</span>
              <span>{Math.round((registeredStudents.length / totalSeats) * 100)}%</span>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(registeredStudents.length / totalSeats) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-3 rounded-full ${
                  isAlmostFull 
                    ? 'bg-gradient-to-r from-red-500 to-orange-500' 
                    : 'bg-gradient-to-r from-cyber-green to-cyber-blue'
                }`}
              />
            </div>
          </div>

          {/* Urgency Message */}
          {isAlmostFull && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-4 mb-6 border rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20"
            >
              <div className="flex items-center space-x-3">
                <HiExclamation className="text-2xl text-red-400" />
                <div>
                  <h4 className="font-semibold text-red-400">Limited Seats Remaining!</h4>
                  <p className="text-sm text-gray-300">Only {availableSeats} seats left. Register now to secure your spot!</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="p-6 text-center border rounded-lg bg-gradient-to-r from-cyber-green/5 to-cyber-blue/5 border-cyber-green/20"
          >
            <HiClock className="mx-auto mb-3 text-3xl text-cyber-green" />
            <h3 className="mb-2 text-lg font-semibold text-white">
              {availableSeats > 0 ? 'Register Fast - Limited Seats Available!' : 'Registration Closed'}
            </h3>
            <p className="text-sm text-gray-400">
              {availableSeats > 0 
                ? 'Secure your place in this exclusive Ethical Hacking Workshop. Don\'t miss out!'
                : 'All seats have been filled. Thank you for your interest!'
              }
            </p>
            
            {availableSeats > 0 && (
              <motion.a
                href="https://forms.gle/Q6xpKWdwerbsut7P8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 mt-4 font-semibold transition-all duration-300 rounded-lg bg-gradient-to-r from-cyber-green to-cyan-500 text-cyber-dark hover:shadow-lg hover:shadow-cyber-green/25"
              >
                Register Now
              </motion.a>
            )}
          </motion.div>

          {/* Privacy Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 text-xs text-center text-gray-500"
          >
            <p>🔒 Student details are kept private for security reasons</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Registration Fees Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="flex items-center justify-center mb-6 space-x-3">
              <HiCurrencyRupee className="text-4xl text-cyber-green" />
              <h2 className="text-4xl font-bold md:text-5xl font-heading text-gradient">
                Registration Fees
              </h2>
            </div>
            <p className="max-w-3xl mx-auto mb-4 text-xl text-gray-300">
              Affordable pricing for quality cybersecurity education
            </p>
            <p className="text-sm font-medium text-cyber-green">
              *All fees are inclusive of GST
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {registrationFees.map((fee, index) => (
              <motion.div
                key={fee.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`p-8 rounded-2xl card-3d glass-effect border border-cyber-green/20 
                          hover:border-cyber-green/40 transition-all duration-300 
                          bg-gradient-to-br ${fee.color} group`}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 rounded-full bg-slate-800/50 group-hover:scale-110">
                    <fee.icon className={`text-4xl ${fee.iconColor}`} />
                  </div>

                  <h3 className="mb-6 text-xl font-bold text-white font-heading">
                    {fee.category}
                  </h3>

                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-slate-800/30 border-slate-700">
                      <div className="flex items-center justify-center mb-2 space-x-2">
                        <HiDesktopComputer className="text-orange-400" />
                        <span className="text-sm font-medium text-gray-300">
                          Offline Mode
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        {fee.offline}
                      </p>
                    </div>

                    <div className="p-4 border rounded-lg bg-slate-800/30 border-slate-700">
                      <div className="flex items-center justify-center mb-2 space-x-2">
                        <HiGlobeAlt className="text-cyber-blue" />
                        <span className="text-sm font-medium text-gray-300">
                          Online Mode
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-white">
                        {fee.online}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Offer Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="p-8 mt-12 border rounded-2xl bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 border-cyber-green/30 card-3d"
          >
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold font-heading text-cyber-green">
                🎉 Special Offer for NIT Rourkela Students!
              </h3>
              <p className="mb-4 text-lg text-gray-300">
                First 10 NIT Rourkela students get{" "}
                <span className="font-bold text-cyber-green">
                  FREE registration
                </span>
              </p>
              <p className="mb-6 text-sm text-gray-400">
                On a first-come, first-serve basis. Don't miss this opportunity!
              </p>

              {/* Registration Instructions */}
              <div className="max-w-2xl p-6 mx-auto border rounded-lg bg-slate-800/50 border-cyber-green/20">
                <h4 className="flex items-center justify-center mb-4 space-x-2 text-lg font-semibold text-white">
                  <span>📋</span>
                  <span>
                    Registration Instructions for NIT Rourkela Students
                  </span>
                </h4>
                <div className="space-y-3 text-sm text-left text-gray-300">
                  <div className="flex items-start space-x-3">
                    <span className="font-bold text-cyber-green">1.</span>
                    <p>
                      <strong className="text-white">
                        Payment Screenshot Upload:
                      </strong>{" "}
                      Upload your
                      <span className="font-semibold text-cyber-green">
                        {" "}
                        Student ID Card photo
                      </span>{" "}
                      instead of payment screenshot
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="font-bold text-cyber-green">2.</span>
                    <p>
                      <strong className="text-white">Transaction ID:</strong>{" "}
                      Enter your
                      <span className="font-semibold text-cyber-green">
                        {" "}
                        Roll Number
                      </span>{" "}
                      in the transaction ID field
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="font-bold text-cyber-green">3.</span>
                    <p>
                      <strong className="text-white">Verification:</strong> Your
                      student status will be verified using your ID card and
                      roll number
                    </p>
                  </div>
                </div>

                <div className="p-3 mt-4 border rounded-lg bg-orange-500/10 border-orange-500/20">
                  <p className="text-xs text-orange-200">
                    <strong>⚠️ Important:</strong> This offer is valid only for
                    current NIT Rourkela students. Ensure your ID card is
                    clearly visible and your roll number is accurate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="mb-6 text-3xl font-bold text-white font-heading">
                Ready to Begin Your Cybersecurity Journey?
              </h3>
              <p className="mb-8 text-lg text-gray-300">
                Secure your spot in this transformative workshop and gain
                hands-on experience in ethical hacking and cybersecurity.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <motion.a
                  href="https://forms.gle/Q6xpKWdwerbsut7P8"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg font-semibold rounded-lg btn-cyber shadow-glow"
                >
                  Register Now
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="inline-block px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 rounded-lg border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 focus-outline"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Registration