'use client'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Hero() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom">
        <div className="text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Name
            </h1>
            <h2 className="text-2xl md:text-3xl text-purple-600 mb-8">
              Full-Stack Developer | AI Enthusiast
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              A brief 2-3 sentence summary about yourself, your passion, and what you do. This will be used in the 'About' section.
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-500 transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-100 transition-colors duration-200"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}