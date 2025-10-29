import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiUser, HiAcademicCap, HiCamera } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'


const Contact = () => {
  const teamData = [
    {
      id: 1,
      name: "Dr. Dev Narayan Yadav",
      role: "Convener",
      email: "yadavd@nitrkl.ac.in",
      phone: "8349869748",
      department: "Computer Science & Engineering",
      image: "/team/DevNarayanSirImg.jpeg", // Fixed: removed 'public' from path
      linkedin: "https://www.linkedin.com/in/devnyadav/",
      bio: "Assistant Professor & Convener, Department of CSE, NIT Rourkela"
    },
    {
      id: 2,
      name: "Dr. Ramesh Kumar Mohapatra",
      role: "Co-Convener",
      email: "mohapatrark@nitrkl.ac.in",
      phone: "0661-2462366",
      department: "Computer Science & Engineering",
      image: "/team/RameshSir.jpeg", // Fixed: removed 'public' from path
      linkedin: "https://www.linkedin.com/in/ramesh-kumar-mohapatra-194b6071/",
      bio: "Professor, Department of CSE, NIT Rourkela"
    },
    {
      id: 3,
      name: "Krishna Kumar Rathore",
      role: "Student Coordinator",
      phone: "6263612174",
      department: "Computer Science & Engineering",
      year: "M.Tech",
      image: "/team/krishna.jpg", // Fixed: removed 'public' from path
      linkedin: "https://www.linkedin.com/in/krishna-kumar-rathore/",
      bio: "Student Coordinator for Ethical Hacking Workshop 2025"
    },
    {
      id: 4,
      name: "Sahil",
      role: "Student Coordinator",
      phone: "8303032533",
      department: "Computer Science & Engineering",
      year: "M.Tech",
      image: "/team/sahil.jpg", // No image file provided yet - will show placeholder
      linkedin: "https://linkedin.com/in/sahil",
      bio: "Student Coordinator for Ethical Hacking Workshop 2025"
    },
    {
      id: 5,
      name: "Abhinav Singh Bhardwaj",
      role: "Student Coordinator",
      phone: "6267905250",
      department: "Computer Science & Engineering",
      year: "M.Tech",
      image: "/team/Abhinav.jpeg", // Fixed: removed 'public' from path
      linkedin: "https://www.linkedin.com/in/ab22032002ram/",
      bio: "Student Coordinator for Ethical Hacking Workshop 2025"
    },
    {
      id: 6,
      name: "Devesh Swarnkar",
      role: "Student Coordinator",
      phone: "7999251558",
      department: "Computer Science & Engineering",
      year: "M.Tech",
      image: "/team/Devesh.jpg", // Fixed: updated filename and removed 'public'
      linkedin: "https://linkedin.com/in",
      bio: "Student Coordinator for Ethical Hacking Workshop 2025"
    },
    {
      id: 7,
      name: "Utsav Raj",
      role: "Student Coordinator",
      phone: "8651817956",
      department: "Computer Science & Engineering",
      year: "B.Tech",
      image: "/team/Utsav.jpg", // Fixed: updated filename and removed 'public'
      linkedin: "https://linkedin.com/in/utsav-raj",
      bio: "Student Coordinator for Ethical Hacking Workshop 2025"
    }
  ]

  const conveners = teamData.filter(member => member.role.includes('Convener'))
  const studentCoordinators = teamData.filter(member => member.role === 'Student Coordinator')

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: "Address",
      content: "Department of Computer Science & Engineering\nNIT Rourkela, Odisha, India - 769008",
      action: null
    },
    {
      icon: HiMail,
      title: "Primary Email",
      content: "yadavd@nitrkl.ac.in",
      action: "mailto:yadavd@nitrkl.ac.in"
    },
    {
      icon: HiPhone,
      title: "Workshop Helpline",
      content: "+91 8349869748",
      action: "tel:+918349869748"
    }
  ]

  // Component to handle image display with fallback
  const ProfileImage = ({ member, size = "large" }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
    
    const sizeClasses = size === "large" ? "w-40 h-40" : "w-24 h-24"
    const iconSize = size === "large" ? "text-4xl" : "text-2xl"
    const IconComponent = member.role.includes('Convener') ? HiUser : HiAcademicCap

    return (
      <div className={`relative ${sizeClasses} mx-auto mb-${size === "large" ? "32" : "20"} group`}>
        {!imageError && member.image ? (
          <>
            <img
              src={member.image}
              alt={member.name}
              className={`${sizeClasses} object-cover rounded-full border-2 border-cyber-green/30 
                         group-hover:border-cyber-green/50 transition-all duration-300 
                         ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && (
              <div className={`${sizeClasses} flex items-center justify-center rounded-full 
                             bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 
                             border-2 border-cyber-green/30 group-hover:border-cyber-green/50 
                             transition-all duration-300`}>
                <IconComponent className={`${iconSize} text-cyber-green animate-pulse`} />
              </div>
            )}
          </>
        ) : (
          <div className={`${sizeClasses} flex items-center justify-center rounded-full 
                         bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 
                         border-2 border-cyber-green/30 group-hover:border-cyber-green/50 
                         transition-all duration-300`}>
            <IconComponent className={`${iconSize} text-cyber-green`} />
          </div>
        )}
        
        {/* Upload Indicator for missing images
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-full opacity-0 cursor-pointer bg-black/50 group-hover:opacity-100">
            <div className="text-center">
              <HiCamera className={`${size === "large" ? "text-xl" : "text-sm"} text-cyber-green mx-auto mb-1`} />
              <p className="text-xs font-medium text-cyber-green">Add Photo</p>
            </div>
          </div>
        )} */}
      
      </div>
    )
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
          <h1 className="mb-6 text-4xl font-bold md:text-5xl font-heading text-gradient">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Have questions about the workshop? Need assistance with registration? 
            Our team is here to help you every step of the way.
          </p>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 text-center transition-all duration-300 border card-3d rounded-xl glass-effect border-cyber-green/20 hover:border-cyber-green/40"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20">
                <info.icon className="text-3xl text-cyber-green" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{info.title}</h3>
              {info.action ? (
                <a
                  href={info.action}
                  className="block p-2 text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-green focus-outline"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Faculty Conveners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-white font-heading">
            Faculty Conveners
          </h2>
          
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            {conveners.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="p-8 transition-all duration-300 border card-3d rounded-2xl glass-effect border-cyber-green/20 hover:border-cyber-green/40"
              >
                {/* Profile Image */}
                <ProfileImage member={member} size="large"  />
                
                <div className="text-center">
                  <h3 className="mb-2 text-xl font-bold text-white font-heading">
                    {member.name}
                  </h3>
                  <p className="mb-1 font-semibold text-cyber-green">{member.role}</p>
                  <p className="mb-4 text-sm text-gray-400">{member.bio}</p>
                  
                  {/* Contact Details */}
                  <div className="space-y-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center p-2 space-x-2 text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-green focus-outline"
                    >
                      <HiMail className="text-lg" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                    
                    <a
                      href={`tel:+91${member.phone}`}
                      className="flex items-center justify-center p-2 space-x-2 text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-green focus-outline"
                    >
                      <HiPhone className="text-lg" />
                      <span className="text-sm">+91 {member.phone}</span>
                    </a>
                    
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 space-x-2 text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-blue focus-outline"
                    >
                      <FaLinkedin className="text-lg" />
                      <span className="text-sm">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-white font-heading">
            Student Coordinators
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studentCoordinators.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 transition-all duration-300 border card-3d rounded-xl glass-effect border-cyber-green/20 hover:border-cyber-green/40"
              >
                {/* Profile Image */}
                <ProfileImage member={member} size="large" />
                
                <div className="text-center">
                  <h3 className="mb-1 text-lg font-semibold text-white">{member.name}</h3>
                  <p className="mb-1 text-sm text-cyber-green">{member.year}</p>
                  <p className="mb-4 text-xs text-gray-400">{member.department}</p>
                  
                  {/* Contact Details */}
                  <div className="space-y-2">
                    <a
                      href={`tel:+91${member.phone}`}
                      className="flex items-center justify-center p-2 space-x-2 text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-green focus-outline"
                    >
                      <HiPhone className="text-base" />
                      <span className="text-sm">+91 {member.phone}</span>
                    </a>
                    
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 space-x-2 text-gray-300 transition-colors duration-300 rounded-lg hover:text-cyber-blue focus-outline"
                    >
                      <FaLinkedin className="text-base" />
                      <span className="text-sm">Connect</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
        </motion.div>

        {/* Emergency Contact & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
         

          
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl p-8 mx-auto border card-3d rounded-2xl glass-effect border-cyber-green/20">
            <h3 className="mb-4 text-2xl font-bold text-white font-heading">
              Ready to Start Your Journey?
            </h3>
            <p className="mb-6 text-gray-300">
              Don't wait! Register now for the Ethical Hacking Workshop 2025 and secure your spot 
              in this transformative learning experience.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href="https://forms.gle/Q6xpKWdwerbsut7P8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold rounded-lg btn-cyber focus-outline"
              >
                Register Now
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/schedule"
                  
                  className="block px-8 py-4 font-semibold text-center transition-all duration-300 border-2 rounded-lg border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 focus-outline"
                >
                  View Schedule
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact