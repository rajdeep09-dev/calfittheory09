"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Globe, ArrowRight, Mail, Phone } from "lucide-react"

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">
              <span className="text-primary">C</span>al<span className="text-primary">F</span>itTheory
            </h3>
            <p className="text-gray-400">
              Evidence-based fitness coaching for those who demand excellence. Transform your body through science,
              elevate your life.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              </Link>
              <Link href="https://calfittheory.com" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group">
                  <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/plans#one-on-one"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Platinum 1:1 Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/plans#diet"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Diet Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/plans#workout"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Workout Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/plans#combo"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Diet + Workout Combo
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Success Stories
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+91 7010578829</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">coachsoham@gmail.com</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} CalFitTheory. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
