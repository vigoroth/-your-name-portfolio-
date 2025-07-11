'use client'
import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Figma",
  "Python",
  "SQL",
  "MongoDB",
  "Docker"
]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded-lg p-6 text-center hover:bg-purple-600 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <span className="text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}