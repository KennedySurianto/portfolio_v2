import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"

export default function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Kennedy Surianto
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            <span className="text-orange-500">{"<"}</span>
            Full Stack Developer
            <span className="text-orange-500">{" />"}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Crafting exceptional digital experiences with cutting-edge technologies. Passionate about clean code,
            innovative solutions, and pushing the boundaries of web development.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
            data-cursor-hover
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.button>

          <div className="flex items-center space-x-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-3 bg-gray-800/50 hover:bg-orange-500/20 rounded-full border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                  data-cursor-hover
                >
                  <Icon className="w-6 h-6 text-gray-400 hover:text-orange-500 transition-colors" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-orange-500 transition-colors"
          whileHover={{ y: -5 }}
          data-cursor-hover
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
