'use client'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
  {
    "name": "Project Alpha",
    "description": "A short description of the project, its purpose, and the technologies used.",
    "tech": [
      "React",
      "Next.js",
      "TypeScript"
    ],
    "github": "https://github.com/yourusername/project-alpha",
    "demo": "https://live-demo-url.com"
  },
  {
    "name": "Project Beta",
    "description": "A short description of the project, its purpose, and the technologies used.",
    "tech": [
      "Node.js",
      "MongoDB",
      "Express"
    ],
    "github": "https://github.com/yourusername/project-beta",
    "demo": "https://live-demo-url.com"
  }
]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-100 text-purple-900 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      <FiExternalLink size={20} />
                    </a>
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