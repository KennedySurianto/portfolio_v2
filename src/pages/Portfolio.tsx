import { useEffect, useState } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import ParticleBackground from "../components/ParticleBackground"
import CustomCursor from "../components/CustomCursor"
import FloatingNavbar from "../components/FloatingNavbar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
import { useSmoothScroll } from "../hooks/useSmoothScroll"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()

  useSmoothScroll()

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <FloatingNavbar />

      <AnimatePresence>
        {isLoaded && (
          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg transition-colors z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
