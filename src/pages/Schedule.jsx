import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCalendar, HiClock, HiDesktopComputer, HiGlobeAlt, HiPlay } from 'react-icons/hi'

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1)

  const scheduleData = {
    week1: {
      title: "Week 1: Foundations & Reconnaissance",
      dates: "December 6-12, 2025",
      description: "Building strong foundations in ethical hacking principles and mastering reconnaissance techniques",
      days: [
        {
          day: "Day 1",
          date: "Dec 6",
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "Workshop Inauguration & Introduction",
              type: "Hybrid",
              topics: ["Welcome & Overview", "Workshop Guidelines", "Team Introductions"]
            },
            {
              time: "11:00 - 12:30", 
              title: "Foundations of Ethical Hacking",
              type: "Online",
              topics: ["Ethics & Legal Aspects", "Security Fundamentals", "Hacker Mindset"]
            },
            {
              time: "14:00 - 15:30",
              title: "Networking Essentials",
              type: "Online",
              topics: ["TCP/IP Fundamentals", "Network Protocols", "OSI Model Review"]
            },
            {
              time: "16:00 - 17:30",
              title: "Lab Setup & Environment",
              type: "Hands-on",
              topics: ["Virtual Lab Setup", "Tool Installation", "Environment Testing"]
            }
          ]
        },
        {
          day: "Day 2",
          date: "Dec 7", 
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "Introduction to NMAP",
              type: "Hands-on",
              topics: ["Port Scanning", "Service Detection", "OS Fingerprinting"]
            },
            {
              time: "11:00 - 12:30",
              title: "Advanced NMAP Techniques",
              type: "Hands-on", 
              topics: ["Stealth Scanning", "Script Engine", "Custom Scripts"]
            },
            {
              time: "14:00 - 15:30",
              title: "Nessus Vulnerability Scanner",
              type: "Hands-on",
              topics: ["Vulnerability Assessment", "Report Analysis", "Remediation"]
            },
            {
              time: "16:00 - 17:30",
              title: "DNS Enumeration",
              type: "Hands-on",
              topics: ["DNS Records", "Zone Transfers", "Subdomain Discovery"]
            }
          ]
        },
        {
          day: "Day 3",
          date: "Dec 8",
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "Wireshark Fundamentals", 
              type: "Hands-on",
              topics: ["Packet Capture", "Protocol Analysis", "Filter Techniques"]
            },
            {
              time: "11:00 - 12:30",
              title: "Advanced Traffic Analysis",
              type: "Hands-on",
              topics: ["Network Forensics", "Malware Analysis", "Incident Response"]
            },
            {
              time: "14:00 - 15:30",
              title: "Introduction to Burp Suite",
              type: "Hands-on", 
              topics: ["Proxy Configuration", "Intercepting Requests", "Scanner Basics"]
            },
            {
              time: "16:00 - 17:30",
              title: "Web Application Reconnaissance",
              type: "Hands-on",
              topics: ["Directory Enumeration", "Technology Stack", "Attack Surface"]
            }
          ]
        }
      ]
    },
    week2: {
      title: "Week 2: Exploitation & Defense", 
      dates: "December 13-19, 2025",
      description: "Advanced exploitation techniques, social engineering, and defensive strategies",
      days: [
        {
          day: "Day 4",
          date: "Dec 13",
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "SQL Injection Fundamentals",
              type: "Hands-on",
              topics: ["Union-based SQLi", "Blind SQLi", "Time-based SQLi"]
            },
            {
              time: "11:00 - 12:30",
              title: "Advanced SQL Injection",
              type: "Hands-on", 
              topics: ["SQLMap Usage", "Database Enumeration", "Data Extraction"]
            },
            {
              time: "14:00 - 15:30",
              title: "Cross-Site Scripting (XSS)",
              type: "Hands-on",
              topics: ["Reflected XSS", "Stored XSS", "DOM-based XSS"]
            },
            {
              time: "16:00 - 17:30",
              title: "File Upload Vulnerabilities",
              type: "Hands-on",
              topics: ["Unrestricted Upload", "Bypass Techniques", "RCE via Upload"]
            }
          ]
        },
        {
          day: "Day 5", 
          date: "Dec 14",
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "Password Attack Techniques",
              type: "Hands-on",
              topics: ["Dictionary Attacks", "Brute Force", "Credential Stuffing"]
            },
            {
              time: "11:00 - 12:30",
              title: "Hash Cracking Methods",
              type: "Hands-on",
              topics: ["John the Ripper", "Hashcat", "Rainbow Tables"]
            },
            {
              time: "14:00 - 15:30",
              title: "System Hardening",
              type: "Online",
              topics: ["Security Configurations", "Patch Management", "Access Controls"]
            },
            {
              time: "16:00 - 17:30",
              title: "Metasploit Introduction",
              type: "Hands-on",
              topics: ["Framework Overview", "Exploit Selection", "Payload Generation"]
            }
          ]
        },
        {
          day: "Day 6",
          date: "Dec 15",
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "Advanced Metasploit",
              type: "Hands-on",
              topics: ["Post-Exploitation", "Privilege Escalation", "Persistence"]
            },
            {
              time: "11:00 - 12:30",
              title: "Social Engineering Fundamentals",
              type: "Online",
              topics: ["Psychology of Attacks", "Phishing Techniques", "Pretexting"]
            },
            {
              time: "14:00 - 15:30",
              title: "Phishing Lab Simulation",
              type: "Hands-on",
              topics: ["Campaign Creation", "Email Crafting", "Landing Pages"]
            },
            {
              time: "16:00 - 17:30",
              title: "Vishing & Physical Security",
              type: "Interactive",
              topics: ["Voice Phishing", "Badge Cloning", "Lock Picking Basics"]
            }
          ]
        },
        {
          day: "Day 7",
          date: "Dec 16",
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "Threat Detection & SIEM",
              type: "Online",
              topics: ["Log Analysis", "Anomaly Detection", "Threat Hunting"]
            },
            {
              time: "11:00 - 12:30",
              title: "Incident Response",
              type: "Scenario-based",
              topics: ["Response Procedures", "Forensic Analysis", "Recovery Planning"]
            },
            {
              time: "14:00 - 15:30",
              title: "Secure Coding Practices",
              type: "Online",
              topics: ["Input Validation", "Authentication", "Encryption"]
            },
            {
              time: "16:00 - 17:30",
              title: "Penetration Testing Methodology",
              type: "Online", 
              topics: ["Testing Phases", "Scoping", "Documentation"]
            }
          ]
        },
        {
          day: "Day 8",
          date: "Dec 17",
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "Professional Report Writing",
              type: "Workshop",
              topics: ["Executive Summary", "Technical Details", "Recommendations"]
            },
            {
              time: "11:00 - 12:30",
              title: "Hands-on Report Creation",
              type: "Practical",
              topics: ["Template Usage", "Finding Documentation", "Risk Assessment"]
            },
            {
              time: "14:00 - 15:30",
              title: "Comprehensive Lab Exercise",
              type: "Assessment",
              topics: ["Full Penetration Test", "Documentation", "Presentation Prep"]
            },
            {
              time: "16:00 - 17:30",
              title: "Project Presentations",
              type: "Presentation",
              topics: ["Student Demos", "Peer Review", "Feedback Session"]
            }
          ]
        },
        {
          day: "Day 9",
          date: "Dec 18",
          sessions: [
            {
              time: "09:00 - 10:30",
              title: "Industry Best Practices",
              type: "Guest Lecture",
              topics: ["Real-world Scenarios", "Career Guidance", "Certification Paths"]
            },
            {
              time: "11:00 - 12:30",
              title: "Advanced Topics & Trends",
              type: "Online",
              topics: ["AI in Cybersecurity", "Cloud Security", "IoT Security"]
            },
            {
              time: "14:00 - 15:30",
              title: "Q&A and Discussion",
              type: "Interactive",
              topics: ["Open Discussion", "Career Advice", "Networking"]
            },
            {
              time: "16:00 - 17:30",
              title: "Workshop Conclusion",
              type: "Hybrid",
              topics: ["Certificate Distribution", "Feedback Collection", "Alumni Network"]
            }
          ]
        }
      ]
    }
  }

  const getSessionIcon = (type) => {
    switch (type) {
      case 'Online': return <HiGlobeAlt className="text-cyber-blue" />
      case 'Hands-on': return <HiDesktopComputer className="text-cyber-green" />
      case 'Hybrid': return <HiPlay className="text-cyber-purple" />
      default: return <HiClock className="text-gray-400" />
    }
  }

  const getSessionColor = (type) => {
    switch (type) {
      case 'Online': return 'from-cyber-blue/10 to-blue-500/10 border-cyber-blue/30'
      case 'Hands-on': return 'from-cyber-green/10 to-green-500/10 border-cyber-green/30'
      case 'Hybrid': return 'from-cyber-purple/10 to-purple-500/10 border-cyber-purple/30'
      default: return 'from-gray-500/10 to-gray-600/10 border-gray-500/30'
    }
  }

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
          <div className="flex items-center justify-center mb-6 space-x-3">
            <HiCalendar className="text-4xl text-cyber-green" />
            <h1 className="text-4xl font-bold md:text-5xl font-heading text-gradient">
              Workshop Schedule
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Comprehensive 2-week program with hands-on sessions, expert lectures, and practical assessments. 
            Join us for an intensive journey into ethical hacking and cybersecurity.
          </p>
        </motion.div>

        {/* Week Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="p-1 border rounded-lg bg-slate-800/50 backdrop-blur-sm border-cyber-green/20">
            <button
              onClick={() => setSelectedWeek(1)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedWeek === 1
                  ? 'bg-gradient-to-r from-cyber-green to-cyber-blue text-white shadow-glow'
                  : 'text-gray-400 hover:text-cyber-green'
              }`}
            >
              Week 1
            </button>
            <button
              onClick={() => setSelectedWeek(2)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedWeek === 2
                  ? 'bg-gradient-to-r from-cyber-green to-cyber-blue text-white shadow-glow'
                  : 'text-gray-400 hover:text-cyber-green'
              }`}
            >
              Week 2
            </button>
          </div>
        </motion.div>

        {/* Week Overview */}
        <motion.div
          key={selectedWeek}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="max-w-4xl p-8 mx-auto border card-3d rounded-2xl glass-effect border-cyber-green/20">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white font-heading">
                {scheduleData[`week${selectedWeek}`].title}
              </h2>
              <p className="mb-4 text-lg font-semibold text-cyber-green">
                {scheduleData[`week${selectedWeek}`].dates}
              </p>
              <p className="text-lg text-gray-300">
                {scheduleData[`week${selectedWeek}`].description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Session Types Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { type: 'Online', color: 'text-cyber-blue', desc: 'Online Sessions' },
              { type: 'Hands-on', color: 'text-cyber-green', desc: 'Hands-on Labs' },
              { type: 'Hybrid', color: 'text-cyber-purple', desc: 'Hybrid Mode' },
              { type: 'Interactive', color: 'text-orange-400', desc: 'Interactive' },
            ].map((item) => (
              <div key={item.type} className="flex items-center space-x-2">
                {getSessionIcon(item.type)}
                <span className={`text-sm font-medium ${item.color}`}>{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="max-w-4xl p-8 mx-auto border card-3d rounded-2xl glass-effect border-orange-500/30">
            <h3 className="mb-6 text-2xl font-bold text-center text-white font-heading">
              Important Information
            </h3>
            <div className="grid grid-cols-1 gap-6 text-sm text-gray-300 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold text-cyber-green">Session Timings</h4>
                <ul className="space-y-2">
                  <li>• Morning Session: 09:00 - 12:30</li>
                  <li>• Afternoon Session: 14:00 - 17:30</li>
                  <li>• Lunch Break: 12:30 - 14:00</li>
                  {/* <li>• Tea Breaks: 10:30-11:00, 15:30-16:00</li> */}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-cyber-green">Requirements</h4>
                <ul className="space-y-2">
                  <li>• Laptop mandatory for hands-on sessions</li>
                  <li>• Stable internet connection required (For Online Batch) </li>
                  <li>• Virtual machine software recommended</li>
                  <li>• Note-taking materials suggested</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Schedule