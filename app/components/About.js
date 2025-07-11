'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate full-stack developer | ai enthusiast with a love for creating 
                innovative solutions and beautiful user experiences. With years of experience 
                in the tech industry, I've worked on diverse projects ranging from startups 
                to enterprise applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My expertise lies in modern web technologies, and I'm always eager to learn 
                new tools and frameworks. I believe in writing clean, maintainable code and 
                following best practices to deliver high-quality products.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">
                    YN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}