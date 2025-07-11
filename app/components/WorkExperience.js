'use client'
import { motion } from 'framer-motion'

export default function WorkExperience() {
  const experiences = [
  {
    "company": "Tech Solutions Inc.",
    "position": "Senior Software Engineer",
    "duration": "Jan 2022 - Present",
    "description": "- Led the development of a new client-facing dashboard using React and TypeScript.\n- Optimized database queries, reducing API response time by 40%.\n- Mentored two junior developers."
  },
  {
    "company": "Web Innovators",
    "position": "Software Developer",
    "duration": "June 2020 - Dec 2021",
    "description": "- Developed and maintained features for a large-scale e-commerce platform.\n- Collaborated with a team of 5 to build a new checkout system."
  }
]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="bg-white rounded-lg shadow-md p-8 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded-l-lg"></div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl text-purple-600 mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 mb-4">{exp.duration}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}