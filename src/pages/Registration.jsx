import React from 'react'
import registeredStudents from '../data/registeredStudents.json'

const Registration = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
            Registration
          </h1>
          <p className="text-xl text-gray-300">
            Secure your spot in the most comprehensive ethical hacking workshop.
          </p>
        </div>
        
        <div className="mb-12 text-center">
          
           <a href="https://forms.gle/Q6xpKWdwerbsut7P8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber rounded-xl px-8 py-4 text-lg font-semibold"
          >
            Register Now via Google Form
          </a>
        </div>

        <div className="card-3d p-8 rounded-xl glass-effect border border-cyber-green/20">
          <h2 className="text-2xl font-heading font-bold text-white mb-8 text-center">
            Registered Students ({registeredStudents.length})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {registeredStudents.map((student) => (
              <div
                key={student.id}
                className="p-4 rounded-lg bg-gradient-to-r from-cyber-green/5 to-cyber-blue/5 
                         border border-cyber-green/20"
              >
                <h4 className="font-medium text-white mb-1">{student.name}</h4>
                <p className="text-sm text-gray-400">{student.college}</p>
                <p className="text-xs text-cyber-green">{student.department} • {student.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration