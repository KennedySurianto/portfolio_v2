import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "kennedy@example.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
                ].map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                    >
                      <div className="p-3 bg-orange-500/20 rounded-full">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{contact.label}</div>
                        <div className="text-white font-medium">{contact.value}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                data-cursor-hover
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-400">© 2024 Kennedy Surianto. Built with React, TypeScript, and lots of ☕</p>
        </motion.div>
      </div>
    </section>
  )
}
