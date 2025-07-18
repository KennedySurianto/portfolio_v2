import { motion } from "framer-motion"
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react"

const stats = [
  { icon: Code, label: "Projects Completed", value: "20+" },
  { icon: Lightbulb, label: "Ideas Implemented", value: "100+" },
  { icon: Rocket, label: "Years Experience", value: "2+" },
  { icon: Coffee, label: "Cups of Coffee", value: "2000+" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a <strong>full-stack developer</strong> who builds complete web applications, from interactive UIs to scalable backend systems. I have strong experience <strong>architecting APIs</strong>, <strong>designing microservices</strong>, and managing both relational and NoSQL databases.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I manage the <strong>entire development lifecycle</strong>, using <strong>containerization</strong> and <strong>cloud deployment</strong> to deliver high-quality, maintainable code. My focus is on creating <em>efficient and user-friendly solutions</em>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not building for the web, I channel my passion for technology into creating immersive games using <strong>Unity</strong> and <strong>Unreal Engine</strong>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center group hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-orange-500/20 rounded-full group-hover:bg-orange-500/30 transition-colors">
                      <Icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
