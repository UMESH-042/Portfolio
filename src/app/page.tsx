'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiCodechef, SiCodeforces } from 'react-icons/si'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 transform origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-950 bg-opacity-90 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>
      <div className="text-center z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Umesh Chauhan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Flutter Developer | Competitive Programmer | Tech Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  const projects = [
    {
      title: "Targafy",
      description: "Employee goal tracking application with real-time updates and performance analytics.",
      tech: ["Flutter", "Firebase", "Riverpod"],
      link: "https://play.google.com/store/apps/details?id=com.targafy"
    },
    {
      title: "Leetcode Rating Predictor",
      description: "Node.js application for predicting Leetcode contest ratings using machine learning and web scraping.",
      tech: ["Node.js", "MongoDB", "Machine Learning"],
      link: "https://github.com/UMESH-042/leetcode-predictor"
    },
    {
      title: "UdyogTrackr",
      description: "Business management solution with real-time analytics and inventory tracking capabilities.",
      tech: ["Flutter", "MySQL", "PHP"],
      link: "https://github.com/UMESH-042/udyogtrackr"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, tech, link }: { title: string; description: string; tech: string[]; link: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-cyan-400">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-purple-400 hover:text-purple-300 transition-colors"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  )
}

function Skills() {
  const skills = [
    { category: "Languages", items: ["Dart", "JavaScript", "C++", "Python"] },
    { category: "Frameworks", items: ["Flutter", "React", "Node.js", "Express"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "Firebase"] },
    { category: "Tools", items: ["Git", "Docker", "REST APIs", "Postman"] }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillCard key={skillGroup.category} {...skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category, items, index }: { category: string; items: string[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-600 rounded-full text-sm text-purple-300 hover:bg-purple-500 hover:text-white transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function Contact() {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/UMESH-042", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/umesh-chauhan-a1ab84220/", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:chauhanumesh7122003@gmail.com", label: "Email" },
    { icon: <SiCodechef />, href: "https://www.codechef.com/users/umesh_042", label: "CodeChef" },
    { icon: <SiCodeforces />, href: "https://codeforces.com/profile/umesh_042", label: "CodeForces" }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Get in Touch
        </motion.h2>
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 bg-gray-950">
      <div className="container mx-auto px-4 text-center space-y-3">
        <p className="text-lg text-cyan-400">
          Made with <span className="text-red-500">❤️</span> by Umesh Chauhan
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Umesh Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

