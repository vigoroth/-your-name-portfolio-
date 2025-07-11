'use client'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Contact() {
  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+1 (555) 123-4567' },
    { icon: FiMapPin, label: 'Location', value: 'Your Location', href: '#' },
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Work Together
              </h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're a fellow developer 
                looking to collaborate, I'd love to hear from you.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <info.icon className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-gray-900 hover:text-purple-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-500 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}