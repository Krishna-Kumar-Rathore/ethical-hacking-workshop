import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiCalendar,
  HiLocationMarker,
  HiCurrencyRupee,
  HiUsers,
  HiShieldCheck,
  HiAcademicCap,
  HiOfficeBuilding,
  HiGlobeAlt,
  HiDesktopComputer,
} from "react-icons/hi";

const Home = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const eventDetails = [
    {
      icon: HiCalendar,
      title: "Duration",
      content: "06-12-2025 to 19-12-2025",
      subtitle: "2 Weeks Intensive Program",
      color: "from-cyber-green/20 to-green-500/20",
      iconColor: "text-cyber-green",
    },
    {
      icon: HiLocationMarker,
      title: "Venue",
      content: "Department of Computer Science and Engineering",
      subtitle: "NIT Rourkela, Odisha",
      color: "from-cyber-blue/20 to-blue-500/20",
      iconColor: "text-cyber-blue",
    },
  ];

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
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute rounded-full w-96 h-96 -top-20 -left-20 bg-cyber-green/10 blur-3xl animate-pulse" />
          <div className="absolute rounded-full w-80 h-80 -bottom-20 -right-20 bg-cyber-blue/10 blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 text-center container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8 space-x-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <HiShieldCheck className="text-6xl text-cyber-green drop-shadow-glow" />
              </motion.div>
            </div>

            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl font-heading text-gradient">
              Ethical Hacking Workshop 2025
            </h1>
            <p className="mb-4 text-xl text-gray-300 md:text-2xl">
              A Hands-On Approach to Cybersecurity
            </p>
            <p className="mb-12 text-lg font-semibold text-cyber-green">
              Master the Art of Ethical Hacking at NIT Rourkela
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center gap-4 mb-16 sm:flex-row"
          >
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/schedule"
                onClick={scrollToTop}
                className="inline-block px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 rounded-lg border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 focus-outline"
              >
                View Schedule
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="section-padding bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-heading text-gradient">
              Event Details
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Join us for an intensive cybersecurity workshop designed to
              transform you into an ethical hacking expert
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
            {eventDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-8 rounded-2xl card-3d glass-effect border border-cyber-green/20 
                          hover:border-cyber-green/40 transition-all duration-300 
                          bg-gradient-to-br ${detail.color}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50">
                      <detail.icon className={`text-3xl ${detail.iconColor}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-white font-heading">
                      {detail.title}
                    </h3>
                    <p className="mb-1 text-lg text-gray-200">
                      {detail.content}
                    </p>
                    <p className="text-sm text-gray-400">{detail.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default Home;
