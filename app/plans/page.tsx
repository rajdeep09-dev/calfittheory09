"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Dumbbell, Salad } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import BackgroundImage from "@/components/background-image"
import Footer from "@/components/footer"

export default function PlansPage() {
  useEffect(() => {
    // Scroll to the hash fragment after page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <CustomCursor />

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">C</span>al<span className="text-primary">F</span>itTheory
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="text-white">
                Contact
              </Button>
            </Link>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <BackgroundImage className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-white/20">CHOOSE YOUR</span>
              <span className="text-white"> PERFECT PROGRAM</span>
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Evidence-based solutions for every goal. Find the program that fits your lifestyle and fitness objectives.
            </p>
          </motion.div>
        </div>
      </BackgroundImage>

      {/* One-on-One Plan */}
      <section id="one-on-one" className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Dumbbell className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Platinum 1:1 Coaching</h2>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold">₹6,000</p>
              <span className="ml-2 text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 text-sm">
              Experience our most comprehensive coaching solution with a dedicated fitness expert who designs fully
              customized training and nutrition protocols using metabolic profiling and biomechanical optimization
              techniques tailored to your unique body, goals, and lifestyle.
            </p>

            <p className="text-gray-400 text-sm">
              This program ensures you have expert guidance every step of the way, with regular assessments and
              adjustments to keep you progressing consistently. Our evidence-based approach combines the latest exercise
              science with practical application for optimal results.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Dedicated personal coach",
                "Metabolic profiling for nutrition",
                "Biomechanical assessment",
                "Neural activation techniques",
                "Weekly progress tracking",
                "Form correction and technique guidance",
                "24/7 support via WhatsApp",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Diet Plan */}
      <section id="diet" className="py-12 px-4 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Salad className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Diet Plan</h2>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold">₹1,500</p>
              <span className="ml-2 text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 text-sm">
              Transform your nutrition with a personalized diet plan designed using metabolic profiling for your unique
              body type, goals, and preferences. Our nutrition experts create science-backed meal protocols that make
              healthy eating simple, effective, and sustainable for long-term results.
            </p>

            <p className="text-gray-400 text-sm">
              This plan includes detailed meal plans, nutrient timing strategies, and nutritional guidance to help you
              fuel your body optimally. Perfect for those looking to lose weight, gain muscle, or improve overall health
              through evidence-based nutrition.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Metabolic profiling assessment",
                "Personalized macro calculations",
                "Nutrient timing protocols",
                "Grocery shopping lists",
                "Meal prep strategies",
                "Supplement recommendations",
                "Email support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Workout Plan */}
      <section id="workout" className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Dumbbell className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Workout Plan</h2>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold">₹1,500</p>
              <span className="ml-2 text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 text-sm">
              Get a complete, science-backed training blueprint designed using biomechanical optimization and neural
              activation techniques. This program is tailored to your fitness level and goals, whether you're a beginner
              or experienced athlete, with precise exercise selection, sets, reps, and rest periods.
            </p>

            <p className="text-gray-400 text-sm">
              Our evidence-based approach ensures every workout is purposeful and effective, with progressive overload
              strategies to continuously challenge your body. Includes detailed form guidance to maximize results while
              minimizing injury risk.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Biomechanical assessment",
                "Neural activation techniques",
                "Progressive overload strategy",
                "Detailed exercise instructions",
                "Form guidance videos",
                "Recovery optimization",
                "Email support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Diet + Workout Combo */}
      <section id="combo" className="py-12 px-4 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Dumbbell className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Diet + Workout Combo</h2>
            </div>

            <div className="flex items-center">
              <p className="text-3xl font-bold">₹2,500</p>
              <span className="ml-2 text-gray-400">/month</span>
            </div>

            <p className="text-gray-400 text-sm">
              The ultimate value package combining our evidence-based Diet Plan and Workout Plan at a special price. Get
              a comprehensive fitness solution that integrates nutrition and training for maximum synergy and results.
            </p>

            <p className="text-gray-400 text-sm">
              This scientifically designed combo ensures your nutrition perfectly complements your training, creating
              the optimal environment for transformation. It's the complete package for those serious about achieving
              their fitness goals efficiently.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Biomechanical assessment",
                "Metabolic profiling",
                "Neural activation techniques",
                "Personalized nutrition protocols",
                "Progressive overload strategy",
                "Recovery optimization",
                "Supplement recommendations",
                "Email support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Ready to Start Your Scientific Transformation?</h2>
            <p className="text-black/80 max-w-md mx-auto">
              Book a free 10-minute consultation to discuss your goals and find the perfect program for your needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-black/80">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
