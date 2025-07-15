import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Machine learning dashboard for business intelligence with predictive analytics and real-time data visualization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A collaborative workspace with real-time editing, video calls, and project management features.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Socket.io", "WebRTC", "Redis", "Docker"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology with smart contracts.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    github: "#",
    live: "#",
    featured: false,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-orange-500/50 transition-all"
                    data-cursor-hover
                  >
                    <Github className="w-5 h-5 text-gray-400 hover:text-orange-500 transition-colors" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-orange-500/50 transition-all"
                    data-cursor-hover
                  >
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-orange-500 transition-colors" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm font-medium border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Code className="w-4 h-4" />
                      <span>Frontend</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Database className="w-4 h-4" />
                      <span>Backend</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>Full Stack</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
